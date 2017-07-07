"use strict";
const assert = require("assert");
const { getArgumentValues } = require("graphql/execution/values");
const { getNamedType, isCompositeType } = require("graphql");
const debug = require("debug")("graphql-parse-resolve-info");

// Originally based on https://github.com/tjmehta/graphql-parse-fields

function getAliasFromResolveInfo(resolveInfo) {
  const asts = resolveInfo.fieldASTs || resolveInfo.fieldNodes;
  return asts.reduce(function(alias, val) {
    if (!alias) {
      if (val.kind === "Field") {
        alias = val.alias ? val.alias.value : val.name && val.name.value;
      }
    }
    return alias;
  }, null);
}

function parseResolveInfo(resolveInfo, options = {}) {
  const fieldNodes = resolveInfo.fieldASTs || resolveInfo.fieldNodes;
  const { parentType } = resolveInfo;
  if (!fieldNodes) {
    throw new Error("No fieldNodes provided!");
  }
  if (options.keepRoot == null) {
    options.keepRoot = false;
  }
  if (options.deep == null) {
    options.deep = true;
  }
  let tree = fieldTreeFromAST(
    fieldNodes,
    resolveInfo,
    undefined,
    options,
    parentType
  );
  if (!options.keepRoot) {
    const typeKey = firstKey(tree);
    tree = tree[typeKey];
    const fieldKey = firstKey(tree);
    tree = tree[fieldKey];
  }
  return tree;
}

function getFieldFromAST(ast, parentType) {
  if (ast.kind === "Field") {
    const fieldName = ast.name.value;
    return parentType.getFields()[fieldName];
  }
  return;
}

let iNum = 1;
function fieldTreeFromAST(
  inASTs,
  resolveInfo,
  initTree,
  options,
  parentType,
  depth = ""
) {
  const instance = iNum++;
  debug(
    "%s[%d] Entering fieldTreeFromAST with parent type '%s'",
    depth,
    instance,
    parentType
  );
  let { fragments, variableValues } = resolveInfo;
  fragments = fragments || {};
  initTree = initTree || {};
  options = options || {};
  const asts = Array.isArray(inASTs) ? inASTs : [inASTs];
  initTree[parentType.name] = initTree[parentType.name] || {};
  const outerDepth = depth;
  return asts.reduce(function(tree, val, idx) {
    const depth = `${outerDepth}  `;
    const kind = val.kind;
    debug(
      "%s[%d] Processing AST %d of %d; kind = %s",
      depth,
      instance,
      idx + 1,
      asts.length,
      kind
    );
    const name = val.name && val.name.value;
    const isReserved = name && name !== "__id" && name.substr(0, 2) === "__";
    if (kind === "Field" && !isReserved) {
      const alias = val.alias ? val.alias.value : name;
      debug("%s[%d] Field '%s' (alias = '%s')", depth, instance, name, alias);
      const field = getFieldFromAST(val, parentType);
      const fieldGqlType = getNamedType(field.type);
      const args = getArgumentValues(field, val, variableValues) || {};
      if (!tree[parentType.name][alias]) {
        tree[parentType.name][alias] = {
          alias,
          name,
          args,
          fieldsByTypeName: isCompositeType(fieldGqlType)
            ? {
                [fieldGqlType.name]: {},
              }
            : {},
        };
      }
      if (val.selectionSet && options.deep) {
        debug("%s[%d] Recursing into subfields", depth, instance);
        fieldTreeFromAST(
          val.selectionSet.selections,
          resolveInfo,
          tree[parentType.name][alias].fieldsByTypeName,
          options,
          fieldGqlType,
          `${depth}  `
        );
      } else {
        // No fields to add
        debug("%s[%d] Exiting (no fields to add)", depth, instance);
      }
    } else if (kind === "FragmentSpread" && options.deep) {
      debug("%s[%d] Fragment spread '%s'", depth, instance, name);
      const fragment = fragments[name];
      assert(fragment, 'unknown fragment "' + name + '"');
      let fragmentType = parentType;
      if (fragment.typeCondition) {
        fragmentType = getType(resolveInfo, fragment.typeCondition);
      }
      if (fragmentType) {
        fieldTreeFromAST(
          fragment.selectionSet.selections,
          resolveInfo,
          tree,
          options,
          fragmentType,
          `${depth}  `
        );
      }
    } else if (kind === "InlineFragment" && options.deep) {
      const fragment = val;
      let fragmentType = parentType;
      if (fragment.typeCondition) {
        fragmentType = getType(resolveInfo, fragment.typeCondition);
      }
      debug(
        "%s[%d] Inline fragment (parent = '%s', type = '%s')",
        depth,
        instance,
        parentType,
        fragmentType
      );
      if (fragmentType) {
        fieldTreeFromAST(
          fragment.selectionSet.selections,
          resolveInfo,
          tree,
          options,
          fragmentType,
          `${depth}  `
        );
      }
    } else if (isReserved) {
      debug(
        "%s[%d] IGNORING because field '%s' is reserved",
        depth,
        instance,
        name
      );
    } else {
      debug(
        "%s[%d] IGNORING because kind '%s' not understood",
        depth,
        instance,
        kind
      );
    }
    // Ref: https://github.com/postgraphql/postgraphql/pull/342/files#diff-d6702ec9fed755c88b9d70b430fda4d8R148
    return tree;
  }, initTree);
}

function firstKey(obj) {
  for (const key in obj) {
    return key;
  }
}

function getType(resolveInfo, typeCondition) {
  const { schema } = resolveInfo;
  const { kind, name } = typeCondition;
  if (kind === "NamedType") {
    const typeName = name.value;
    return schema.getType(typeName);
  }
}

function simplifyParsedResolveInfoFragmentWithType(
  parsedResolveInfoFragment,
  Type
) {
  const { fieldsByTypeName } = parsedResolveInfoFragment;
  const fields = {};
  const StrippedType = getNamedType(Type);
  Object.assign(fields, fieldsByTypeName[StrippedType.name]);
  if (StrippedType.getInterfaces) {
    // GraphQL ensures that the subfields cannot clash, so it's safe to simply overwrite them
    for (const Interface of StrippedType.getInterfaces()) {
      Object.assign(fields, fieldsByTypeName[Interface.name]);
    }
  }
  return Object.assign({}, parsedResolveInfoFragment, {
    fields,
  });
}

exports.parseResolveInfo = parseResolveInfo;
exports.parse = parseResolveInfo;
exports.simplifyParsedResolveInfoFragmentWithType = simplifyParsedResolveInfoFragmentWithType;
exports.simplify = simplifyParsedResolveInfoFragmentWithType;
exports.getAliasFromResolveInfo = getAliasFromResolveInfo;
exports.getAlias = getAliasFromResolveInfo;
