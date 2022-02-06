import "graphile-build";

import type {
  PgSelectSinglePlan,
  PgSource,
  PgSourceRelation,
  PgTypeCodec,
} from "@dataplan/pg";
import { PgSourceBuilder } from "@dataplan/pg";
import type { ListPlan } from "graphile-crystal";
import { access, constant, list } from "graphile-crystal";
import { EXPORTABLE, isSafeIdentifier } from "graphile-exporter";
import type { Plugin, PluginGatherConfig, PluginHook } from "graphile-plugin";
import type { GraphQLInterfaceType } from "graphql";
import sql from "pg-sql2";

import { getBehavior } from "../behavior";
import { version } from "../index";
import type { PgClass, PgNamespace } from "../introspection";

interface State {}
interface Cache {}

export const PgTableNodePlugin: Plugin = {
  name: "PgTableNodePlugin",
  description: "Add the 'Node' interface to table types",
  version: version,

  schema: {
    hooks: {
      init(_, build) {
        const tableSources = build.input.pgSources.filter((source) => {
          if (source.codec.isAnonymous) return false;
          if (!source.codec.columns) return false;
          if (source.parameters) return false;
          if (!source.uniques) return false;
          if (!source.uniques[0]) return false;
          const behavior = getBehavior(source.extensions);
          if (behavior && !behavior.includes("node")) {
            return false;
          }
          return true;
        });

        const sourcesByCodec = new Map();
        for (const source of tableSources) {
          let list = sourcesByCodec.get(source.codec);
          if (!list) {
            list = [];
            sourcesByCodec.set(source.codec, list);
          }
          list.push(source);
        }

        for (const [codec, sources] of sourcesByCodec.entries()) {
          const tableTypeName = build.inflection.tableType(codec);
          if (sources.length !== 1) {
            console.warn(
              `Found multiple table sources for codec '${codec.name}'; we don't currently support that but we _could_ - get in touch if you need this.`,
            );
            continue;
          }
          const pgSource = sources[0];
          const pk = pgSource.uniques[0].columns as string[];

          const clean =
            isSafeIdentifier(tableTypeName) &&
            pk.every((columnName) => isSafeIdentifier(columnName));

          build.registerNodeIdHandler(tableTypeName, {
            codecName: "base64JSON",
            plan: clean
              ? EXPORTABLE(
                  eval(
                    `(list, constant) => $record => list([constant(${JSON.stringify(
                      tableTypeName,
                    )}), ${pk
                      .map(
                        (columnName) =>
                          `$record.get(${JSON.stringify(columnName)})`,
                      )
                      .join(", ")}])`,
                  ),
                  [list, constant],
                )
              : EXPORTABLE(
                  (constant, list, pk, tableTypeName) =>
                    ($record: PgSelectSinglePlan<any, any, any, any>) => {
                      return list([
                        constant(tableTypeName),
                        ...pk.map((column) => $record.get(column)),
                      ]);
                    },
                  [constant, list, pk, tableTypeName],
                ),
            get: clean
              ? EXPORTABLE(
                  eval(
                    `(pgSource, access) => $list => pgSource.get({ ${pk.map(
                      (columnName, index) =>
                        `${columnName}: access($list, [${index + 1}])`,
                    )} })`,
                  ),
                  [pgSource, access],
                )
              : EXPORTABLE(
                  (access, pgSource, pk) => ($list: ListPlan<any[]>) => {
                    const spec = pk.reduce((memo, column, index) => {
                      memo[column] = access($list, [index + 1]);
                      return memo;
                    }, {});
                    return pgSource.get(spec);
                  },
                  [access, pgSource, pk],
                ),
            match: EXPORTABLE(
              (tableTypeName) => (obj) => {
                return obj[0] === tableTypeName;
              },
              [tableTypeName],
            ),
          });
        }

        return _;
      },
    },
  },
};