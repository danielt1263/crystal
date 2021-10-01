import { createHash } from "crypto";
import debugFactory from "debug";
import type {
  __ListItemPlan,
  CrystalResultsList,
  CrystalResultStreamList,
  CrystalValuesList,
} from "graphile-crystal";
import {
  __TrackedObjectPlan,
  access,
  ExecutablePlan,
  first,
  InputListPlan,
  InputObjectPlan,
  InputStaticLeafPlan,
  list,
  map,
  planGroupsOverlap,
  reverse,
  reverseArray,
} from "graphile-crystal";
import type { StreamablePlan } from "graphile-crystal/src/plan";
import type { SQL, SQLRawValue } from "pg-sql2";
import sql, { arraysMatch } from "pg-sql2";

import type { PgSource, PgSourceRelation } from "../datasource";
import type { PgOrderSpec, PgTypedExecutablePlan } from "../interfaces";
import { PgClassExpressionPlan } from "./pgClassExpression";
import { PgConditionPlan } from "./pgCondition";
import type { PgSelectSinglePlanOptions } from "./pgSelectSingle";
import { PgSelectSinglePlan } from "./pgSelectSingle";

const isDev =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";

function isStaticInputPlan(
  dep: ExecutablePlan,
): dep is InputListPlan | InputStaticLeafPlan | InputObjectPlan {
  return (
    dep instanceof InputListPlan ||
    dep instanceof InputStaticLeafPlan ||
    dep instanceof InputObjectPlan
  );
}

type LockableParameter = "orderBy" | "first" | "last" | "offset";
type LockCallback<TDataSource extends PgSource<any, any, any, any>> = (
  plan: PgSelectPlan<TDataSource>,
) => void;

const debugPlan = debugFactory("datasource:pg:PgSelectPlan:plan");
const debugExecute = debugFactory("datasource:pg:PgSelectPlan:execute");
const debugPlanVerbose = debugPlan.extend("verbose");
// const debugExecuteVerbose = debugExecute.extend("verbose");

const EMPTY_ARRAY: ReadonlyArray<any> = Object.freeze([]);

type PgSelectPlanJoin =
  | {
      type: "cross";
      source: SQL;
      alias: SQL;
    }
  | {
      type: "inner" | "left" | "right" | "full";
      source: SQL;
      alias: SQL;
      conditions: SQL[];
    };

type PgSelectPlaceholder = {
  dependencyIndex: number;
  // This is a "ref" so that it can be merged into other objects whilst still
  // allowing `placeholder.sqlRef.sql = ...` to work.
  sqlRef: { sql: SQL };
  type: SQL;
};

type PgSelectIdentifierSpec =
  | {
      plan: ExecutablePlan<any>;
      type: SQL;
      matches: (alias: SQL) => SQL;
    }
  | {
      plan: PgTypedExecutablePlan;
      type?: SQL;
      matches: (alias: SQL) => SQL;
    };

type PgSelectArgumentSpec =
  | {
      plan: ExecutablePlan<any>;
      type: SQL;
      name?: string;
    }
  | {
      plan: PgTypedExecutablePlan;
      type?: SQL;
      name?: string;
    };

function isPgSelectIdentifierSpec(
  identifier: PgSelectIdentifierSpec | PgSelectArgumentSpec,
): identifier is PgSelectIdentifierSpec {
  return "matches" in identifier && typeof identifier.matches === "function";
}

interface PgSelectArgumentDigest {
  position?: number;
  name?: string;
  placeholder: SQL;
}

interface QueryValue {
  dependencyIndex: number;
  type: SQL;
}

function assertSensible(plan: ExecutablePlan): void {
  if (plan instanceof PgSelectPlan) {
    throw new Error(
      "You passed a PgSelectPlan as an identifier, perhaps you forgot to add `.record()`?",
    );
  }
  if (plan instanceof PgSelectSinglePlan) {
    throw new Error(
      "You passed a PgSelectSinglePlan as an identifier, perhaps you forgot to add `.record()`?",
    );
  }
}

interface PgSelectOptions<TDataSource> {
  /**
   * Tells us what we're dealing with - data type, columns, where to get it
   * from, what it's called, etc. Many of these details can be overridden
   * below.
   */
  source: TDataSource;

  /**
   * The identifiers to limit the results down to just the row(s) you care
   * about.
   *
   * NOTE: this is required because it's a big footgun to omit it by accident,
   * if you truly do not need it (e.g. if you're calling a function with
   * limited results or you really want everything) then you can specify it as
   * an empty array `[]`.
   */
  identifiers: Array<PgSelectIdentifierSpec>;

  /**
   * If your `from` (or source.source if omitted) is a function, the arguments
   * to pass to the function.
   */
  args?: Array<PgSelectArgumentSpec>;

  /**
   * If you want to build the data in a custom way (e.g. calling a function,
   * selecting from a view, building a complex query, etc) then you can
   * override the `source.source` here with your own from code. Defaults to
   * `source.source`.
   */
  from?: SQL | ((...args: SQL[]) => SQL);

  /**
   * If you pass a custom `from` (or otherwise want to aid in debugging),
   * passing a custom name can make it easier to follow the SQL/etc that is
   * generated.
   */
  name?: string;
}

/**
 * This represents selecting from a class-like entity (table, view, etc); i.e.
 * it represents `SELECT <columns>, <cursor?> FROM <table>`. You can also add
 * `JOIN`, `WHERE`, `ORDER BY`, `LIMIT`, `OFFSET`. You cannot add `GROUP BY`
 * because that would invalidate the identifiers; and as such you can't use
 * `HAVING` or functions that implicitly turn the query into an aggregate. We
 * don't allow `UNION`/`INTERSECT`/`EXCEPT`/`FOR UPDATE`/etc at this time,
 * purely because it hasn't been sufficiently considered.
 *
 * I currently don't expect this to be used to select sets of scalars, but it
 * could be used for that purpose so long as we name the scalars (i.e. create
 * records from them `{a: 1},{a: 2},{a:3}`).
 */
export class PgSelectPlan<TDataSource extends PgSource<any, any, any, any>>
  extends ExecutablePlan<ReadonlyArray<TDataSource["TRow"]>>
  implements StreamablePlan<TDataSource["TRow"]>
{
  // FROM
  private readonly from: SQL | ((...args: SQL[]) => SQL);

  /**
   * This defaults to the name of the source but you can override it. Aids
   * in debugging.
   */
  private readonly name: string;
  /**
   * To be used as the table alias, we always use a symbol unless the calling
   * code specifically indicates a string to use.
   */
  private readonly symbol: symbol | string;
  /**
   * When SELECTs get merged, symbols also need to be merged. The keys in this
   * map are the symbols of PgSelects that don't exist any more, the values are
   * symbols of the PgSelects that they were replaced with (which might also not
   * exist in future, but we follow the chain so it's fine).
   */
  private readonly _symbolSubstitutes: Map<symbol, symbol>;

  /** = sql.identifier(this.symbol) */
  public readonly alias: SQL;

  /**
   * The data source from which we are selecting: table, view, etc
   */
  public readonly source: TDataSource;

  // JOIN

  private relationJoins: Map<Parameters<TDataSource["getRelation"]>[0], SQL>;
  private joins: Array<PgSelectPlanJoin>;

  // WHERE

  private conditions: SQL[];

  // ORDER BY

  private orders: Array<PgOrderSpec>;
  private isOrderUnique: boolean;

  // LIMIT

  private first: number | null;
  private last: number | null;

  // OFFSET

  private offset: number | null;

  // --------------------

  /**
   * Since this is effectively like a DataLoader it processes the data for many
   * different resolvers at once. This list of (hopefully scalar) plans is used
   * to represent queryValues the query will need such as identifiers for which
   * records in the result set should be returned to which GraphQL resolvers,
   * parameters for conditions or orders, etc.
   */
  private queryValues: Array<QueryValue>;

  /**
   * This is the list of SQL fragments in the result that are compared to some
   * of the above `queryValues` to determine if there's a match or not. Typically
   * this will be a list of columns (e.g. primary or foreign keys on the
   * table).
   */
  private identifierMatches: readonly SQL[];

  /**
   * If the source is a function, this is the names of the arguments to pass
   */
  private arguments: ReadonlyArray<PgSelectArgumentDigest>;

  /**
   * If this plan has queryValues, we must feed the queryValues into the placeholders to
   * feed into the SQL statement after compiling the query; we'll use this
   * symbol as the placeholder to replace.
   */
  private queryValuesSymbol: symbol;

  /**
   * Values used in this plan.
   */
  private placeholders: Array<PgSelectPlaceholder>;

  /**
   * If true, we don't need to add any of the security checks from the data
   * source; otherwise we must do so. Default false.
   */
  private isTrusted: boolean;

  /**
   * If true, we know at most one result can be matched for each identifier, so
   * it's safe to do a `LEFT JOIN` without risk of returning duplicates. Default false.
   */
  private isUnique: boolean;

  /**
   * If true, we will not attempt to inline this into the parent query.
   * Default false.
   */
  private isInliningForbidden = false;

  /**
   * The list of things we're selecting.
   */
  private selects: Array<SQL>;

  /**
   * The id for the PostgreSQL context plan.
   */
  private contextId: number;

  /**
   * When finalized, we build the SQL query, queryValues, and note where to feed in
   * the relevant queryValues. This saves repeating this work at execution time.
   */
  private finalizeResults: {
    // The SQL query text
    text: string;

    // The values to feed into the query
    rawSqlValues: SQLRawValue[];

    // The column on the result that indicates which group the result belongs to
    identifierIndex: number | null;

    // The dependency index (i.e. index in the `values` object we'll receive
    // during execution) in which each of the `queryValues` are identified.
    queryValuesDependencyIndexes: number[];

    // If last but not first, reverse order.
    shouldReverseOrder: boolean;
  } | null = null;

  /**
   * Determines if the PgSelectPlan is "locked" - i.e. its
   * FROM,JOINs,WHERE,ORDER BY,LIMIT,OFFSET cannot be changed. Note this does
   * not prevent adding more SELECTs
   */
  private locked = false;

  // --------------------

  private _beforeLock: {
    [a in LockableParameter]: Array<LockCallback<TDataSource>>;
  } = {
    orderBy: [],
    first: [],
    last: [],
    offset: [],
  };

  private _afterLock: {
    [a in LockableParameter]: Array<LockCallback<TDataSource>>;
  } = {
    orderBy: [],
    first: [],
    last: [],
    offset: [],
  };

  private _lockedParameter: {
    [a in LockableParameter]: false | true | string | undefined;
  } = {
    orderBy: false,
    first: false,
    last: false,
    offset: false,
  };

  constructor(options: PgSelectOptions<TDataSource>);
  constructor(cloneFrom: PgSelectPlan<TDataSource>);
  constructor(
    optionsOrCloneFrom:
      | PgSelectPlan<TDataSource>
      | {
          source: TDataSource;
          identifiers?: Array<PgSelectIdentifierSpec>;
          args?: Array<PgSelectArgumentSpec>;
          from?: SQL | ((...args: SQL[]) => SQL);
          name?: string;
        },
  ) {
    super();
    const [
      cloneFrom,
      {
        source,
        identifiers,
        args: inArgs,
        from: inFrom = null,
        name: customName,
      },
    ] =
      optionsOrCloneFrom instanceof PgSelectPlan
        ? [
            optionsOrCloneFrom,
            {
              source: optionsOrCloneFrom.source,
              identifiers: null,
              from: optionsOrCloneFrom.from,
              args: null,
              name: optionsOrCloneFrom.name,
            },
          ]
        : [null, optionsOrCloneFrom];

    this.source = source;
    if (cloneFrom) {
      // Prevent any changes to our original to help avoid programming
      // errors.
      cloneFrom.lock();

      if (this.dependencies.length !== 0) {
        throw new Error("Should not have any dependencies yet");
      }
      cloneFrom.dependencies.forEach((planId, idx) => {
        const myIdx = this.addDependency(this.getPlan(planId));
        if (myIdx !== idx) {
          throw new Error(
            `Failed to clone ${cloneFrom}; dependency indexes did not match: ${myIdx} !== ${idx}`,
          );
        }
      });
    } else {
      // Since we're applying this to the original it doesn't make sense to
      // also apply it to the clones.
      this.beforeLock("orderBy", ensureOrderIsUnique);
    }

    this.contextId = cloneFrom
      ? cloneFrom.contextId
      : this.addDependency(this.source.context());

    this.name = customName ?? source.name;
    this.queryValuesSymbol = cloneFrom
      ? cloneFrom.queryValuesSymbol
      : Symbol(this.name + "_identifier_values");
    this.symbol = cloneFrom ? cloneFrom.symbol : Symbol(this.name);
    this._symbolSubstitutes = cloneFrom
      ? new Map(cloneFrom._symbolSubstitutes)
      : new Map();
    this.alias = cloneFrom ? cloneFrom.alias : sql.identifier(this.symbol);
    this.from = inFrom ?? source.source;
    this.placeholders = cloneFrom ? [...cloneFrom.placeholders] : [];
    if (cloneFrom) {
      this.queryValues = [...cloneFrom.queryValues]; // References indexes cloned above
      this.identifierMatches = Object.freeze(cloneFrom.identifierMatches);
      this.arguments = Object.freeze(cloneFrom.arguments);
    } else {
      if (!identifiers) {
        throw new Error("Invalid construction of PgSelectPlan");
      }
      const queryValues: QueryValue[] = [];
      const identifierMatches: SQL[] = [];
      const args: PgSelectArgumentDigest[] = [];
      let argIndex: null | number = 0;
      identifiers.forEach((identifier) => {
        if (isDev) {
          assertSensible(identifier.plan);
        }
        const { plan, matches } = identifier;
        const type =
          identifier.type ||
          (identifier.plan as PgTypedExecutablePlan).pgCodec.sqlType;
        queryValues.push({
          dependencyIndex: this.addDependency(plan),
          type,
        });
        identifierMatches.push(matches(this.alias));
      });
      if (inArgs) {
        inArgs.forEach((identifier) => {
          if (isDev) {
            assertSensible(identifier.plan);
          }
          const { plan, name } = identifier;
          const type =
            identifier.type || (plan as PgTypedExecutablePlan).pgCodec.sqlType;
          const placeholder = this.placeholder(plan, type);
          if (name) {
            argIndex = null;
            args.push({
              name,
              placeholder,
            });
          } else {
            if (argIndex === null) {
              throw new Error(
                "Cannot have unnamed argument after named arguments",
              );
            }
            args.push({
              position: argIndex++,
              placeholder,
            });
          }
        });
      }
      this.queryValues = queryValues;
      this.identifierMatches = identifierMatches;
      this.arguments = args;
    }
    this.relationJoins = cloneFrom
      ? new Map(cloneFrom.relationJoins)
      : new Map();
    this.joins = cloneFrom ? [...cloneFrom.joins] : [];
    this.selects = cloneFrom ? [...cloneFrom.selects] : [];
    this.isTrusted = cloneFrom ? cloneFrom.isTrusted : false;
    this.isUnique = cloneFrom ? cloneFrom.isUnique : false;
    this.isInliningForbidden = cloneFrom
      ? cloneFrom.isInliningForbidden
      : false;
    this.conditions = cloneFrom ? [...cloneFrom.conditions] : [];
    this.orders = cloneFrom ? [...cloneFrom.orders] : [];
    this.isOrderUnique = cloneFrom ? cloneFrom.isOrderUnique : false;
    this.first = cloneFrom ? cloneFrom.first : null;
    this.last = cloneFrom ? cloneFrom.last : null;
    this.offset = cloneFrom ? cloneFrom.offset : null;

    debugPlan(
      `%s (%s) constructor (%s)`,
      this,
      this.name,
      cloneFrom ? "clone" : "original",
    );
    return this;
  }

  toStringMeta(): string {
    return this.name;
  }

  public lock(): void {
    this._lockAllParameters();
    this.locked = true;
  }

  public setInliningForbidden(newInliningForbidden = true): this {
    this.isInliningForbidden = newInliningForbidden;
    return this;
  }

  public inliningForbidden(): boolean {
    return this.isInliningForbidden;
  }

  public setTrusted(newIsTrusted = true): this {
    if (this.locked) {
      throw new Error(`${this}: cannot toggle trusted once plan is locked`);
    }
    this.isTrusted = newIsTrusted;
    return this;
  }

  public trusted(): boolean {
    return this.isTrusted;
  }

  public setFirst(first: number | null | undefined): this {
    this._assertParameterUnlocked("first");
    this.first = first ?? null;
    this._lockParameter("first");
    return this;
  }

  public setLast(last: number | null | undefined): this {
    this._assertParameterUnlocked("orderBy");
    this._assertParameterUnlocked("last");
    this.last = last ?? null;
    this._lockParameter("last");
    return this;
  }

  public setOffset(offset: number | null | undefined): this {
    this._assertParameterUnlocked("offset");
    this.offset = offset ?? null;
    if (this.offset !== null) {
      this._lockParameter("last");
      if (this.last != null) {
        throw new Error("Cannot use 'offset' with 'last'");
      }
    }
    this._lockParameter("offset");
    return this;
  }

  /**
   * Set this true ONLY if there can be at most one match for each of the
   * identifiers. If you set this true when this is not the case then you may
   * get unexpected results during inlining; if in doubt leave it at the
   * default.
   */
  public setUnique(newUnique = true): this {
    if (this.locked) {
      throw new Error(`${this}: cannot toggle unique once plan is locked`);
    }
    this.isUnique = newUnique;
    return this;
  }

  public unique(): boolean {
    return this.isUnique;
  }

  public placeholder($plan: PgTypedExecutablePlan): SQL;
  public placeholder($plan: ExecutablePlan<any>, type: SQL): SQL;
  public placeholder(
    $plan: ExecutablePlan<any> | PgTypedExecutablePlan,
    overrideType?: SQL,
  ): SQL {
    if (this.locked) {
      throw new Error(`${this}: cannot add placeholders once plan is locked`);
    }
    if (this.placeholders.length >= 100000) {
      throw new Error(
        `There's already ${this.placeholders.length} placeholders; wanting more suggests there's a bug somewhere`,
      );
    }
    const type =
      overrideType ??
      ("pgCodec" in $plan && $plan.pgCodec ? $plan.pgCodec.sqlType : null);

    if (type === null) {
      throw new Error(
        `Plan ${$plan} does not contain pgCodec information, please wrap ` +
          `it in \`pgCast\`. E.g. \`pgCast($plan, TYPES.boolean)\``,
      );
    }
    const dependencyIndex = this.addDependency($plan);
    const sqlRef = { sql: sql`(1/0) /* ERROR! Unhandled placeholder! */` };
    const p: PgSelectPlaceholder = {
      dependencyIndex,
      type,
      sqlRef,
    };
    this.placeholders.push(p);
    // This allows us to replace the SQL that will be compiled, for example
    // when we're inlining this into a parent query.
    return sql.callback(() => sqlRef.sql);
  }

  /**
   * Join to a named relationship and return the alias that can be used in
   * SELECT, WHERE and ORDER BY.
   */
  public singleRelation(
    relationIdentifier: Parameters<TDataSource["getRelation"]>[0],
  ): SQL {
    const relation:
      | PgSourceRelation<PgSource<any, any, any, any>, TDataSource["columns"]>
      | undefined = this.source.getRelation(relationIdentifier as string);
    if (!relation) {
      throw new Error(
        `${this.source} does not have a relation named '${relationIdentifier}'`,
      );
    }
    if (!relation.isUnique) {
      throw new Error(
        `${this.source} relation '${relationIdentifier}' is not unique so cannot be used with singleRelation`,
      );
    }
    const { source: relationSource, localColumns, remoteColumns } = relation;

    // Join to this relation if we haven't already
    const cachedAlias = this.relationJoins.get(relationIdentifier);
    if (cachedAlias) {
      return cachedAlias;
    }
    const alias = sql.identifier(Symbol(relationIdentifier as string));
    if (typeof relationSource.source === "function") {
      throw new Error(
        "Callback sources not currently supported via singleRelation",
      );
    }
    this.joins.push({
      type: "left",
      // TODO: `source.source` is confusing, rename one of these!
      source: relationSource.source,
      alias,
      conditions: localColumns.map(
        (col, i) =>
          sql`${this.alias}.${sql.identifier(
            col as string,
          )} = ${alias}.${sql.identifier(remoteColumns[i] as string)}`,
      ),
    });
    this.relationJoins.set(relationIdentifier, alias);
    return alias;
  }

  /**
   * Select an SQL fragment, returning the index the result will have.
   */
  public select(fragment: SQL): number {
    // NOTE: it's okay to add selections after the plan is "locked" - lock only
    // applies to which rows are being selected, not what is being queried
    // about the rows.

    // Optimisation: if we're already selecting this fragment, return the existing one.
    const index = this.selects.findIndex((frag) =>
      sql.isEquivalent(frag, fragment, this._symbolSubstitutes),
    );
    if (index >= 0) {
      return index;
    }

    return this.selects.push(fragment) - 1;
  }

  /**
   * Finalizes this instance and returns a mutable clone; useful for
   * connections/etc (e.g. copying `where` conditions but adding more, or
   * pagination, or grouping, aggregates, etc)
   */
  clone(): PgSelectPlan<TDataSource> {
    return new PgSelectPlan(this);
  }

  where(condition: SQL): void {
    if (this.locked) {
      throw new Error(`${this}: cannot add conditions once plan is locked`);
    }
    this.conditions.push(condition);
  }

  wherePlan(): PgConditionPlan<this> {
    return new PgConditionPlan(this);
  }

  orderBy(order: PgOrderSpec): void {
    this._assertParameterUnlocked("orderBy");
    this.orders.push(order);
  }

  orderIsUnique(): boolean {
    return this.isOrderUnique;
  }

  setOrderIsUnique(): void {
    this.isOrderUnique = true;
  }

  parseCursor(beforeOrAfter: "before" | "after", cursor: string | null): void {
    if (cursor == null) {
      return;
    }
    const digest = this.getOrderByDigest();
    const orders = this.getOrderBy();
    const orderCount = orders.length;
    if (orderCount === 0 || !this.isOrderUnique) {
      throw new Error(
        `Can only use '${beforeOrAfter}' cursor when there is a unique defined order.`,
      );
    }
    try {
      const decoded = JSON.parse(
        Buffer.from(cursor, "base64").toString("utf8"),
      );
      if (!Array.isArray(decoded)) {
        throw new Error("Expected array");
      }
      const [cursorDigest, ...cursorParts] = decoded;
      if (!cursorDigest || cursorDigest !== digest) {
        throw new Error(
          `Invalid cursor digest - '${cursorDigest}' !== '${digest}'`,
        );
      }
      if (cursorParts.length !== orderCount) {
        throw new Error(
          `Invalid cursor length - ${cursorParts.length} !== ${orderCount}`,
        );
      }
      const condition = (i = 0): SQL => {
        const order = orders[i];
        // Codec is responsible for performing validation/coercion and throwing
        // error if value is invalid.
        // TODO: make sure this ^ is clear in the relevant places.
        const sqlValue = sql`${sql.value(
          (void 0 /* forbid relying on `this` */, order.codec.toPg)(
            cursorParts[i],
          ),
        )}::${order.codec.sqlType}`;
        const gt =
          (order.direction === "ASC" && beforeOrAfter === "after") ||
          (order.direction === "DESC" && beforeOrAfter === "before");

        let fragment = sql`${order.fragment} ${
          gt ? sql`>` : sql`<`
        } ${sqlValue}`;

        if (i < orderCount - 1) {
          fragment = sql`(${fragment}) or (${
            order.fragment
          } = ${sqlValue} and ${condition(i + 1)})`;
        }

        return sql.parens(fragment);
      };
      this.where(condition());
    } catch (e) {
      if (isDev) {
        console.error("Invalid cursor:");
        console.error(e);
      }
      throw new Error(
        `Invalid '${beforeOrAfter}' cursor - a cursor is only valid within a specific ordering, if you change the order then you'll need different cursors.`,
      );
    }
  }

  after(cursor: string): void {
    this.parseCursor("after", cursor);
  }

  before(cursor: string): void {
    this.parseCursor("before", cursor);
  }

  /**
   * `execute` will always run as a root-level query. In future we'll implement a
   * `toSQL` method that allows embedding this plan within another SQL plan...
   * But that's a problem for later.
   *
   * This runs the query for every entry in the values, and then returns an
   * array of results where each entry in the results relates to the entry in
   * the incoming values.
   *
   * NOTE: we don't know what the values being fed in are, we must feed them to
   * the plans stored in this.identifiers to get actual values we can use.
   */
  async execute(
    values: CrystalValuesList<any[]>,
  ): Promise<CrystalResultsList<ReadonlyArray<TDataSource["TRow"]>>> {
    if (!this.finalizeResults) {
      throw new Error("Cannot execute PgSelectPlan before finalizing it.");
    }
    const {
      text,
      rawSqlValues,
      identifierIndex,
      queryValuesDependencyIndexes,
      shouldReverseOrder,
    } = this.finalizeResults;

    const executionResult = await this.source.executeWithCache(
      values.map((value) => {
        return {
          // The context is how we'd handle different connections with different claims
          context: value[this.contextId],
          queryValues:
            identifierIndex != null
              ? queryValuesDependencyIndexes.map(
                  (dependencyIndex) => value[dependencyIndex],
                )
              : EMPTY_ARRAY,
        };
      }),
      {
        text,
        rawSqlValues,
        identifierIndex,
        queryValuesSymbol: this.queryValuesSymbol,
      },
    );
    debugExecute("%s; result: %c", this, executionResult);

    const vals = executionResult.values;
    return shouldReverseOrder ? vals.map((arr) => reverseArray(arr)) : vals;
  }

  /**
   * Like `execute`, but stream the results via async iterables.
   */
  async stream(
    values: CrystalValuesList<any[]>,
  ): Promise<CrystalResultStreamList<TDataSource["TRow"]>> {
    if (!this.finalizeResults) {
      throw new Error("Cannot stream PgSelectPlan before finalizing it.");
    }
    // We're faking this for now just to test the infrastructure.
    const results = await this.execute(values);
    return results.map((list) => {
      return (async function* () {
        for await (const item of await list) {
          yield item;
        }
      })();
    });
  }

  private buildSelect(
    options: {
      asArray?: boolean;
      extraSelects?: readonly SQL[];
    } = Object.create(null),
  ) {
    const { asArray = false, extraSelects = EMPTY_ARRAY } = options;
    const selects = [...this.selects, ...extraSelects];
    const l = this.selects.length;
    const extraSelectIndexes = extraSelects.map((_, i) => i + l);

    const fragmentsWithAliases = asArray
      ? selects
      : selects.map(
          (frag, idx) => sql`${frag} as ${sql.identifier(String(idx))}`,
        );

    const sqlAliases: SQL[] = [];
    for (const [a, b] of this._symbolSubstitutes.entries()) {
      sqlAliases.push(sql.symbolAlias(a, b));
    }
    const aliases = sql.join(sqlAliases, "");

    if (asArray) {
      const selection = fragmentsWithAliases.length
        ? sql` array[${sql.indent(
            sql.join(fragmentsWithAliases, ",\n"),
          )}]::text[]`
        : /*
           * In the case where our array is empty, we must add something or
           * PostgreSQL will fail with 'ERROR:  2202E: cannot accumulate empty
           * arrays'
           */
          sql` array['' /* NOTHING?! */]::text[]`;

      return { sql: sql`${aliases}select${selection}`, extraSelectIndexes };
    } else {
      const selection =
        fragmentsWithAliases.length > 0
          ? sql`\n${sql.indent(sql.join(fragmentsWithAliases, ",\n"))}`
          : sql` /* NOTHING?! */`;

      return { sql: sql`${aliases}select${selection}`, extraSelectIndexes };
    }
  }

  private fromExpression(): SQL {
    const source =
      typeof this.from === "function"
        ? this.from(...this.arguments.map((arg) => arg.placeholder))
        : this.from;
    return source;
  }

  private buildFrom() {
    return { sql: sql`\nfrom ${this.fromExpression()} as ${this.alias}` };
  }

  private buildJoin() {
    const joins: SQL[] = this.joins.map((j) => {
      const conditions =
        j.type === "cross"
          ? []
          : j.conditions.length === 0
          ? sql.true
          : j.conditions.length === 1
          ? j.conditions[0]
          : sql.join(
              j.conditions.map((c) => sql.parens(sql.indent(c))),
              " and ",
            );
      const joinCondition =
        j.type !== "cross"
          ? sql`\non ${sql.parens(
              sql.indentIf(j.conditions.length > 1, conditions),
            )}`
          : sql.blank;
      const join: SQL =
        j.type === "inner"
          ? sql`inner join`
          : j.type === "left"
          ? sql`left outer join`
          : j.type === "right"
          ? sql`right outer join`
          : j.type === "full"
          ? sql`full outer join`
          : j.type === "cross"
          ? sql`cross join`
          : (sql.blank as never);

      return sql`${join} ${j.source} as ${j.alias}${joinCondition}`;
    });

    return { sql: joins.length ? sql`\n${sql.join(joins, "\n")}` : sql.blank };
  }

  private buildWhere(options: { extraWheres?: SQL[] } = Object.create(null)) {
    const conditions = options.extraWheres
      ? [...this.conditions, ...options.extraWheres]
      : this.conditions;
    const sqlConditions = sql.join(
      conditions.map((c) => sql.parens(sql.indent(c))),
      " and ",
    );
    return {
      sql:
        conditions.length === 0
          ? sql.blank
          : conditions.length === 1
          ? sql`\nwhere ${sqlConditions}`
          : sql`\nwhere\n${sql.indent(sqlConditions)}`,
    };
  }

  /**
   * So we can quickly detect if cursors are invalid we use this digest,
   * passing this check does not mean that the cursor is valid but it at least
   * catches common user errors.
   */
  public getOrderByDigest() {
    this._lockParameter("orderBy");
    // The security of this hash is unimportant; the main aim is to protect the
    // user from themself. If they bypass this, that's their problem (it will
    // not introduce a security issue).
    const hash = createHash("sha256");
    hash.update(
      JSON.stringify(this.orders.map((o) => sql.compile(o.fragment).text)),
    );
    const digest = hash.digest("hex").substr(0, 10);
    return digest;
  }

  public getOrderBy(): ReadonlyArray<PgOrderSpec> {
    this._lockParameter("orderBy");
    return this.orders;
  }

  /**
   * If `last` is in use then we reverse the order from the database and then
   * re-reverse it in JS-land.
   */
  private shouldReverseOrder() {
    return this.first == null && this.last != null;
  }

  private buildOrderBy() {
    this._lockParameter("orderBy");
    const orders = this.shouldReverseOrder()
      ? this.orders.map((o) => ({
          ...o,
          direction: o.direction === "ASC" ? "DESC" : "ASC",
        }))
      : this.orders;
    return {
      sql:
        orders.length > 0
          ? sql`\norder by ${sql.join(
              orders.map(
                (o) =>
                  sql`${o.fragment} ${
                    o.direction === "ASC" ? sql`asc` : sql`desc`
                  }${
                    o.nulls === "LAST"
                      ? sql` nulls last`
                      : o.nulls === "FIRST"
                      ? sql` nulls first`
                      : sql.blank
                  }`,
              ),
              ", ",
            )}`
          : sql.blank,
    };
  }

  private buildLimit() {
    // NOTE: according to the EdgesToReturn algorithm in the GraphQL Cursor
    // Connections Specification first is applied first, then last is applied.
    // For us this means that if first is present we set the limit to this and
    // then we do the last artificially later.
    // https://relay.dev/graphql/connections.htm#EdgesToReturn()
    return {
      sql:
        this.first != null
          ? sql`\nlimit ${sql.literal(this.first)}`
          : this.last != null
          ? sql`\nlimit ${sql.literal(this.last)}`
          : sql.blank,
    };
  }

  private buildOffset() {
    return {
      sql:
        this.offset != null
          ? sql`\noffset ${sql.literal(this.offset)}`
          : sql.blank,
    };
  }

  private buildQuery(
    options: {
      asArray?: boolean;
      withIdentifiers?: boolean;
      extraSelects?: SQL[];
      extraWheres?: SQL[];
    } = Object.create(null),
  ): {
    sql: SQL;
    extraSelectIndexes: number[];
  } {
    if (!this.isTrusted) {
      this.source.applyAuthorizationChecksToPlan(this);
    }

    const { sql: select, extraSelectIndexes } = this.buildSelect(options);
    const { sql: from } = this.buildFrom();
    const { sql: join } = this.buildJoin();
    const { sql: where } = this.buildWhere(options);
    const { sql: orderBy } = this.buildOrderBy();
    const { sql: limit } = this.buildLimit();
    const { sql: offset } = this.buildOffset();

    const query = sql`${select}${from}${join}${where}${orderBy}${limit}${offset}`;

    return { sql: query, extraSelectIndexes };
  }

  public finalizeArguments(): void {
    this._lockAllParameters();
    return super.finalizeArguments();
  }

  public finalize(): void {
    // In case we have any lock actions in future:
    this.lock();

    // Now we need to be able to mess with ourself, but be sure to lock again
    // at the end.
    this.locked = false;

    if (!this.isFinalized) {
      let query: SQL;
      let identifierIndex: number | null = null;
      if (this.queryValues.length || this.placeholders.length) {
        const alias = sql.identifier(Symbol(this.name + "_identifiers"));

        this.placeholders.forEach((placeholder) => {
          // NOTE: we're adding to `this.identifiers` but NOT to
          // `this.identifierMatches`.
          const idx =
            this.queryValues.push({
              dependencyIndex: placeholder.dependencyIndex,
              type: placeholder.type,
            }) - 1;
          placeholder.sqlRef.sql = sql`${alias}.${sql.identifier(`id${idx}`)}`;
        });

        const wrapperAlias = sql.identifier(Symbol(this.name + "_result"));
        const extraSelects: SQL[] = [];
        const extraWheres: SQL[] = [];

        extraSelects.push(sql`${alias}.idx`);

        extraWheres.push(
          ...this.identifierMatches.map(
            (frag, idx) =>
              sql`${frag} = ${alias}.${sql.identifier(`id${idx}`)}`,
          ),
        );
        const { sql: baseQuery, extraSelectIndexes } = this.buildQuery({
          extraSelects,
          extraWheres,
        });
        identifierIndex = extraSelectIndexes[0];

        // TODO: if the query does not have a limit/offset; should we use an
        // `inner join` in a flattened query instead of a wrapped query with
        // `lateral`?

        /*
         * This wrapper query is necessary so that queries that have a
         * limit/offset get the limit/offset applied _per identifier group_.
         */
        query = sql`select ${wrapperAlias}.*
from (${sql.indent(sql`\
select\n${sql.indent(sql`\
ids.ordinality - 1 as idx,
${sql.join(
  this.queryValues.map(({ type }, idx) => {
    return sql`(ids.value->>${sql.literal(idx)})::${type} as ${sql.identifier(
      `id${idx}`,
    )}`;
  }),
  ",\n",
)}`)}
from json_array_elements(${sql.value(
          // THIS IS A DELIBERATE HACK - we will be replacing this symbol with
          // a value before executing the query.
          this.queryValuesSymbol as any,
        )}::json) with ordinality as ids`)}) as ${alias},
lateral (${sql.indent(baseQuery)}) as ${wrapperAlias}`;
      } else {
        ({ sql: query } = this.buildQuery());
      }

      const { text, values: rawSqlValues } = sql.compile(query);

      // The most trivial of optimisations...
      const queryValuesDependencyIndexes = this.queryValues.map(
        ({ dependencyIndex }) => dependencyIndex,
      );

      this.finalizeResults = {
        text,
        rawSqlValues,
        identifierIndex,
        queryValuesDependencyIndexes,
        // TODO: when streaming we must not set this to true
        shouldReverseOrder: this.shouldReverseOrder(),
      };
    }

    this.locked = true;

    super.finalize();
  }

  deduplicate(peers: PgSelectPlan<any>[]): ExecutablePlan {
    const identical = peers.find((p) => {
      // If SELECT, FROM, JOIN, WHERE, ORDER, GROUP BY, HAVING, LIMIT, OFFSET
      // all match with one of our peers then we can replace ourself with one
      // of our peers. NOTE: we do _not_ merge SELECTs at this stage because
      // that would require mapping, and mapping should not be done during
      // deduplicate because it would interfere with optimize. So, instead,
      // we try to ensure that as few selects as possible exist in the plan
      // at this stage.

      // Check FROM matches
      if (p.source !== this.source) {
        return false;
      }

      // Since deduplicate runs before we have children, we do not need to
      // check the symbol or alias matches. We do need to factor the different
      // symbols into SQL equivalency checks though.
      const symbolSubstitutes = new Map<symbol, symbol>();
      if (typeof this.symbol === "symbol" && typeof p.symbol === "symbol") {
        if (this.symbol !== p.symbol) {
          symbolSubstitutes.set(this.symbol, p.symbol);
        } else {
          // Fine :)
        }
      } else if (this.symbol !== p.symbol) {
        return false;
      }
      const sqlIsEquivalent = (a: SQL | symbol, b: SQL | symbol) =>
        sql.isEquivalent(a, b, symbolSubstitutes);

      // Check trusted matches
      if (p.trusted !== this.trusted) {
        return false;
      }

      // Check inliningForbidden matches
      if (p.inliningForbidden !== this.inliningForbidden) {
        return false;
      }

      // Check SELECT matches
      if (!arraysMatch(this.selects, p.selects, sqlIsEquivalent)) {
        return false;
      }

      // Check JOINs match
      if (
        !arraysMatch(this.joins, p.joins, (a, b) =>
          joinMatches(a, b, sqlIsEquivalent),
        )
      ) {
        return false;
      }

      // Check WHEREs match
      if (!arraysMatch(this.conditions, p.conditions, sqlIsEquivalent)) {
        return false;
      }

      // Check PLACEHOLDERS match
      if (
        !arraysMatch(this.placeholders, p.placeholders, (a, b) => {
          return a.type === b.type && a.dependencyIndex === b.dependencyIndex;
        })
      ) {
        return false;
      }

      // Check IDENTIFIERs match
      if (
        !arraysMatch(
          this.identifierMatches,
          p.identifierMatches,
          sqlIsEquivalent,
        )
      ) {
        return false;
      }

      // Check ORDERs match
      if (
        !arraysMatch(
          this.orders,
          p.orders,
          (a, b) =>
            a.direction === b.direction &&
            a.nulls === b.nulls &&
            sqlIsEquivalent(a.fragment, b.fragment),
        )
      ) {
        return false;
      }

      // GROUP BY is not supported
      // HAVING is not supported

      // Check LIMIT matches
      if (this.first !== p.first) {
        return false;
      }
      if (this.last !== p.last) {
        return false;
      }

      // Check OFFSET matches
      if (this.offset !== p.offset) {
        return false;
      }

      debugPlan("Found that %c and %c are equivalent!", this, p);

      return true;
    });
    if (identical) {
      if (
        typeof this.symbol === "symbol" &&
        typeof identical.symbol === "symbol"
      ) {
        if (this.symbol !== identical.symbol) {
          identical._symbolSubstitutes.set(this.symbol, identical.symbol);
        } else {
          // Fine :)
        }
      }

      return identical;
      /* The following is now forbidden.

        // Move the selects across and then replace ourself with a transform that
        // maps the expected attribute ids from the `identical` plan.
        const actualKeyByDesiredKey = this.mergeSelectsWith(identical);
        const mapper = makeMapper(actualKeyByDesiredKey);
        return each(identical, mapper);

      */
    }
    return this;
  }

  mergeSelectsWith(otherPlan: PgSelectPlan<TDataSource>): {
    [desiredIndex: string]: string;
  } {
    const actualKeyByDesiredKey = Object.create(null);
    //console.log(`Other ${otherPlan} selects:`);
    //console.dir(otherPlan.selects, { depth: 8 });
    //console.log(`My ${this} selects:`);
    //console.dir(this.selects, { depth: 8 });
    this.selects.forEach((frag, idx) => {
      actualKeyByDesiredKey[idx] = otherPlan.select(frag);
    });
    //console.dir(actualKeyByDesiredKey);
    //console.log(`Other ${otherPlan} selects now:`);
    //console.dir(otherPlan.selects, { depth: 8 });
    return actualKeyByDesiredKey;
  }

  mergePlaceholdersInto(otherPlan: PgSelectPlan<TDataSource>): void {
    for (const placeholder of this.placeholders) {
      const { dependencyIndex, sqlRef, type } = placeholder;
      const dep = this.getPlan(this.dependencies[dependencyIndex]);
      if (
        // I am uncertain on this code.
        isStaticInputPlan(dep) ||
        (otherPlan.parentPathIdentity.length > dep.parentPathIdentity.length &&
          otherPlan.parentPathIdentity.startsWith(dep.parentPathIdentity))
      ) {
        // Either dep is a static input plan (which isn't dependent on anything
        // else) or otherPlan is deeper than dep; either way we can use the dep
        // directly within otherPlan.
        const newPlanIndex = otherPlan.addDependency(dep);
        otherPlan.placeholders.push({
          dependencyIndex: newPlanIndex,
          type,
          sqlRef,
        });
      } else if (dep instanceof PgClassExpressionPlan) {
        // Replace with a reference.
        placeholder.sqlRef.sql = dep.toSQL();
      } else {
        throw new Error(
          `Could not merge placeholder from unsupported plan type: ${dep}`,
        );
      }
    }
  }

  optimize(): ExecutablePlan {
    // In case we have any lock actions in future:
    this.lock();

    // Now we need to be able to mess with ourself, but be sure to lock again
    // at the end.
    this.locked = false;

    // TODO: we should serialize our `SELECT` clauses and then if any are
    // identical we should omit the later copies and have them link back to the
    // earliest version (resolve this in `execute` via mapping).

    if (!this.isInliningForbidden && !this.hasSideEffects) {
      // Inline ourself into our parent if we can.
      let t: PgSelectPlan<any> | null | undefined = undefined;
      let p: ExecutablePlan<any> | undefined = undefined;
      for (
        let dependencyIndex = 0, l = this.dependencies.length;
        dependencyIndex < l;
        dependencyIndex++
      ) {
        if (dependencyIndex === this.contextId) {
          // We check myContext vs tsContext below; so lets assume it's fine
          // for now.
          continue;
        }
        const planId = this.dependencies[dependencyIndex];
        const dep = this.getPlan(planId);
        if (dep instanceof __TrackedObjectPlan) {
          // This has come from a variable, context or rootValue, therefore
          // it's shared and thus safe.
          continue;
        }
        if (isStaticInputPlan(dep)) {
          // This has come from a hard-coded input in the document, therefore
          // it's shared and thus safe.
          continue;
        }
        if (dep instanceof PgClassExpressionPlan) {
          const p2 = this.getPlan(dep.dependencies[dep.tableId]);
          const t2Parent = dep.getParentPlan();
          if (!(t2Parent instanceof PgSelectSinglePlan)) {
            continue;
          }
          const t2 = t2Parent.getClassPlan();
          if (t2 === this) {
            throw new Error(
              `Recursion error - record plan ${dep} is dependent on ${t2}, and ${this} is dependent on ${dep}`,
            );
          }

          if (t2.hasSideEffects) {
            // It's a mutation; don't merge
            continue;
          }

          if (!planGroupsOverlap(this, t2)) {
            // We're not in the same group (i.e. there's probably a @defer or
            // @stream between us) - do not merge.
            continue;
          }

          if (t === undefined && p === undefined) {
            p = p2;
            t = t2;
          } else if (t2 !== t) {
            debugPlanVerbose(
              "Refusing to optimise %c due to dependency %c depending on different class (%c != %c)",
              this,
              dep,
              t2,
              t,
            );
            t = null;
            break;
          } else if (p2 !== p) {
            debugPlanVerbose(
              "Refusing to optimise %c due to parent dependency mismatch: %c != %c",
              this,
              p2,
              p,
            );
            t = null;
            break;
          }
        } else {
          debugPlanVerbose(
            "Refusing to optimise %c due to dependency %c",
            this,
            dep,
          );
          t = null;
          break;
        }
      }
      if (t != null && p != null) {
        const myContext = this.getPlan(this.dependencies[this.contextId]);
        const tsContext = this.getPlan(t.dependencies[t.contextId]);
        if (myContext != tsContext) {
          debugPlanVerbose(
            "Refusing to optimise %c due to own context dependency %c differing from tables context dependency %c (%c, %c)",
            this,
            myContext,
            tsContext,
            t.dependencies[t.contextId],
            t,
          );
          t = null;
        }
      }
      if (t != null && p != null) {
        // Looks feasible.

        const table = t;
        const parent = p;

        if (table === this) {
          throw new Error(
            `Something's gone catastrophically wrong - ${this} is trying to merge with itself!`,
          );
        }

        const tableWasLocked = table.locked;
        table.locked = false;

        if (
          this.isUnique &&
          this.first == null &&
          this.last == null &&
          this.offset == null
          /* TODO: && !this.groupBy && !this.having && !this.order && ... */
        ) {
          if (this.selects.length > 0) {
            debugPlanVerbose(
              "Merging %c into %c (via %c)",
              this,
              table,
              parent,
            );
            const { sql: where } = this.buildWhere();
            const conditions = [
              ...this.identifierMatches.map((identifierMatch, i) => {
                const { dependencyIndex, type } = this.queryValues[i];
                const plan = this.getPlan(this.dependencies[dependencyIndex]);
                if (plan instanceof PgClassExpressionPlan) {
                  return sql`${plan.toSQL()}::${type} = ${identifierMatch}`;
                } else if (isStaticInputPlan(plan)) {
                  return sql`${this.placeholder(
                    plan,
                    type,
                  )} = ${identifierMatch}`;
                } else {
                  throw new Error(
                    `Expected ${plan} (${i}th dependency of ${this}; plan with id ${dependencyIndex}) to be a PgClassExpressionPlan`,
                  );
                }
              }),
              // Note the WHERE is now part of the JOIN condition (since
              // it's a LEFT JOIN).
              ...(where !== sql.blank ? [where] : []),
            ];
            table.joins.push(
              {
                type: "left",
                source: this.fromExpression(),
                alias: this.alias,
                conditions,
              },
              ...this.joins,
            );
            this.mergePlaceholdersInto(table);
            for (const [a, b] of this._symbolSubstitutes.entries()) {
              if (isDev) {
                if (
                  table._symbolSubstitutes.has(a) &&
                  table._symbolSubstitutes.get(a) !== b
                ) {
                  throw new Error(
                    `Conflict when setting a substitute whilst merging ${this} into ${table}; symbol already has a substitute, and it's different.`,
                  );
                }
              }
              table._symbolSubstitutes.set(a, b);
            }
            const actualKeyByDesiredKey = this.mergeSelectsWith(table);
            // We return a list here because our children are going to use a
            // `first` plan on us.
            // NOTE: we don't need to reverse the list for relay pagination
            // because it only contains one entry.
            return list([map(parent, actualKeyByDesiredKey)]);
          } else {
            debugPlanVerbose(
              "Skipping merging %c into %c (via %c) due to no columns being selected",
              this,
              table,
              parent,
            );
            // We return a list here because our children are going to use a
            // `first` plan on us.
            return list([parent]);
          }
        } else if (parent instanceof PgSelectSinglePlan) {
          const parent2 = this.getPlan(parent.dependencies[parent.itemPlanId]);
          this.identifierMatches.forEach((identifierMatch, i) => {
            const { dependencyIndex, type } = this.queryValues[i];
            const plan = this.getPlan(this.dependencies[dependencyIndex]);
            if (plan instanceof PgClassExpressionPlan) {
              return this.where(
                sql`${plan.toSQL()}::${type} = ${identifierMatch}`,
              );
            } else if (isStaticInputPlan(plan)) {
              return this.where(
                sql`${this.placeholder(plan, type)} = ${identifierMatch}`,
              );
            } else {
              throw new Error(
                `Expected ${plan} (${i}th dependency of ${this}; plan with id ${dependencyIndex}) to be a PgClassExpressionPlan`,
              );
            }
          });
          this.mergePlaceholdersInto(table);
          const { sql: query } = this.buildQuery({ asArray: true });
          const selfIndex = table.select(sql`array(${sql.indent(query)})`);
          debugPlanVerbose(
            "Optimising %c (via %c and %c)",
            this,
            table,
            parent2,
          );
          //console.dir(this.dependencies.map((id) => this.getPlan(id)));
          const rowsPlan = access<any[]>(parent2, [selfIndex]);
          if (this.shouldReverseOrder()) {
            return reverse(rowsPlan);
          } else {
            return rowsPlan;
          }
        }

        table.locked = tableWasLocked;
      }
    }

    this.locked = true;

    return this;
  }

  /**
   * If this plan may only return one record, you can use `.single()` to return
   * a plan that resolves to that record (rather than a list of records as it
   * does currently). Beware: if you call this and the database might actually
   * return more than one record then you're potentially in for a Bad Time.
   */
  single(options?: PgSelectSinglePlanOptions): PgSelectSinglePlan<TDataSource> {
    this.setUnique(true);
    // TODO: should this be on a clone plan? I don't currently think so since
    // PgSelectSinglePlan does not allow for `.where` divergence (since it
    // does not support `.where`).
    return new PgSelectSinglePlan(this, first(this), options);
  }

  /**
   * When you return a plan in a situation where GraphQL is expecting a
   * GraphQLList, it must implement the `.listItem()` method to return a plan
   * for an individual item within this list. Graphile Crystal will
   * automatically call this (possibly recursively) to pass to the plan
   * resolvers on the children of this field.
   *
   * NOTE: Graphile Crystal handles the list indexes for you, so your list item
   * plan should process just the single input list item.
   *
   * IMPORTANT: do not call `.listItem` from user code; it's only intended to
   * be called by Graphile Crystal.
   */
  listItem(itemPlan: __ListItemPlan<this>): PgSelectSinglePlan<TDataSource> {
    return new PgSelectSinglePlan(this, itemPlan);
  }

  // --------------------

  /**
   * Performs the given call back just before the given LockableParameter is
   * locked.
   *
   * @remarks To make sure we do things in the right order (e.g. ensure all the
   * `order by` values are established before attempting to interpret a
   * `cursor` for `before`/`after`) we need a locking system. This locking
   * system allows for final actions to take place _just before_ the element is
   * locked, for example _just before_ the order is locked we might want to
   * check that the ordering is unique, and if it is not then we may want to
   * add the primary key to the ordering.
   */
  public beforeLock(
    type: LockableParameter,
    callback: LockCallback<TDataSource>,
  ): void {
    this._assertParameterUnlocked(type);
    this._beforeLock[type].push(callback);
  }

  /**
   * Performs the given call back just after the given LockableParameter is
   * locked.
   */
  public afterLock(
    type: LockableParameter,
    callback: LockCallback<TDataSource>,
  ): void {
    this._assertParameterUnlocked(type);
    this._afterLock[type].push(callback);
  }

  private lockCallbacks(
    phase: "beforeLock" | "afterLock",
    type: LockableParameter,
  ) {
    const list = phase === "beforeLock" ? this._beforeLock : this._afterLock;
    const callbacks = list[type];
    const l = callbacks.length;
    if (l > 0) {
      const toCall = callbacks.splice(0, l);
      for (let i = 0; i < l; i++) {
        toCall[i](this);
      }
      if (callbacks.length > 0) {
        throw new Error(
          `beforeLock callback for '${type}' caused more beforeLock callbacks to be registered`,
        );
      }
    }
  }

  /**
   * Calls all the beforeLock actions for the given parameter and then locks
   * it.
   */
  private _lockParameter(type: LockableParameter): void {
    if (this._lockedParameter[type] !== false) {
      return;
    }
    this.lockCallbacks("beforeLock", type);
    this._lockedParameter[type] = isDev
      ? new Error("Initially locked here").stack
      : true;
    this.lockCallbacks("afterLock", type);
  }

  /**
   * Throw a helpful error if you're trying to modify something that's already
   * locked.
   */
  private _assertParameterUnlocked(type: LockableParameter): void {
    const isLocked = this._lockedParameter[type];
    if (isLocked !== false) {
      if (typeof isLocked === "string") {
        throw new Error(
          `'${type}' has already been locked\n    ` +
            isLocked.replace(/\n/g, "\n    ") +
            "\n",
        );
      }
      throw new Error(`'${type}' has already been locked`);
    }
  }

  private _lockAllParameters() {
    // // We must execute everything after `from` so we have the alias to reference
    // this._lockParameter("from");
    // this._lockParameter("join");
    this._lockParameter("orderBy");
    // // We must execute where after orderBy because cursor queries require all orderBy columns
    // this._lockParameter("cursorComparator");
    // this._lockParameter("whereBound");
    // this._lockParameter("where");
    // // 'where' -> 'whereBound' can affect 'offset'/'limit'
    // this._lockParameter("offset");
    // this._lockParameter("limit");
    // this._lockParameter("first");
    // this._lockParameter("last");
    // // We must execute select after orderBy otherwise we cannot generate a cursor
    // this._lockParameter("fixedSelectExpression");
    // this._lockParameter("selectCursor");
    // this._lockParameter("select");
  }
}

function joinMatches(
  j1: PgSelectPlanJoin,
  j2: PgSelectPlanJoin,
  sqlIsEquivalent: (a: SQL, b: SQL) => boolean,
): boolean {
  if (j1.type === "cross") {
    if (j2.type !== j1.type) {
      return false;
    }
    if (!sqlIsEquivalent(j1.source, j2.source)) {
      return false;
    }
    if (!sqlIsEquivalent(j1.alias, j2.alias)) {
      return false;
    }
    return true;
  } else {
    if (j2.type !== j1.type) {
      return false;
    }
    if (!sqlIsEquivalent(j1.source, j2.source)) {
      return false;
    }
    if (!sqlIsEquivalent(j1.alias, j2.alias)) {
      return false;
    }
    if (!arraysMatch(j1.conditions, j2.conditions, sqlIsEquivalent)) {
      return false;
    }
    return true;
  }
}

/**
 * Apply a default order in case our default is not unique.
 */
function ensureOrderIsUnique(plan: PgSelectPlan<any>) {
  const uniqueColumns: string[] = plan.source.uniques[0];
  if (uniqueColumns) {
    const ordersIsUnique = plan.orderIsUnique();
    if (!ordersIsUnique) {
      uniqueColumns.forEach((c) => {
        plan.orderBy({
          fragment: sql`${plan.alias}.${sql.identifier(c)}`,
          codec: plan.source.columns[c].codec,
          direction: "ASC",
        });
      });
      plan.setOrderIsUnique();
    }
  }
}

export function pgSelect<TDataSource extends PgSource<any, any, any, any>>(
  options: PgSelectOptions<TDataSource>,
): PgSelectPlan<TDataSource> {
  return new PgSelectPlan(options);
}
