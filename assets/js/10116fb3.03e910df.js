"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[3288],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7896),r=(t(2784),t(30876));const i={title:"makeExtendSchemaPlugin"},o="New makeExtendSchemaPlugin",l={unversionedId:"migrating-from-v4/make-extend-schema-plugin",id:"migrating-from-v4/make-extend-schema-plugin",title:"makeExtendSchemaPlugin",description:"The move from PostGraphile V4 to V5 sees the transition from the hacky and",source:"@site/postgraphile/migrating-from-v4/make-extend-schema-plugin.md",sourceDirName:"migrating-from-v4",slug:"/migrating-from-v4/make-extend-schema-plugin",permalink:"/postgraphile/next/migrating-from-v4/make-extend-schema-plugin",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/migrating-from-v4/make-extend-schema-plugin.md",tags:[],version:"current",frontMatter:{title:"makeExtendSchemaPlugin"},sidebar:"docs",previous:{title:"makeAddInflectorsPlugin",permalink:"/postgraphile/next/migrating-from-v4/make-add-inflectors-plugin"},next:{title:"makeAddPgTableConditionPlugin",permalink:"/postgraphile/next/migrating-from-v4/make-add-pg-table-condition-plugin"}},s={},p=[{value:"<code>@requires</code>",id:"requires",level:2},{value:"<code>@pgField</code>",id:"pgfield",level:2},{value:"<code>@pgQuery</code>",id:"pgquery",level:2},{value:"<code>selectGraphQLResultFromTable</code>",id:"selectgraphqlresultfromtable",level:2},{value:"<code>embed</code>",id:"embed",level:2},{value:"Savepoints",id:"savepoints",level:2},{value:"<code>context.pgClient.query</code>",id:"contextpgclientquery",level:2},{value:"QueryBuilder &quot;named children&quot;",id:"querybuilder-named-children",level:2},{value:"QueryBuilder itself",id:"querybuilder-itself",level:2},{value:"<code>build.getTypeAndIdentifiersFromNodeId</code>",id:"buildgettypeandidentifiersfromnodeid",level:2}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"new-makeextendschemaplugin"},"New makeExtendSchemaPlugin"),(0,r.kt)("p",null,"The move from PostGraphile V4 to V5 sees the transition from the hacky and\nchaotic lookahead system to our new clean and performant Gra",(0,r.kt)("em",{parentName:"p"},"fast")," planning and\nexecution engine. This means that many of the workarounds of the past are no\nlonger needed, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Directives: ",(0,r.kt)("inlineCode",{parentName:"li"},"@requires"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"@pgField"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"@pgQuery")),(0,r.kt)("li",{parentName:"ul"},"Helper functions: ",(0,r.kt)("inlineCode",{parentName:"li"},"selectGraphQLResultFromTable"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"embed")),(0,r.kt)("li",{parentName:"ul"},"Savepoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context.pgClient.query")),(0,r.kt)("li",{parentName:"ul"},'QueryBuilder "named children"'),(0,r.kt)("li",{parentName:"ul"},"QueryBuilder itself"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"build.getTypeAndIdentifiersFromNodeId")),(0,r.kt)("li",{parentName:"ul"},"hacks to ensure the type is loaded before we reference it by name")),(0,r.kt)("p",null,"TODO: find an alternative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"@scope")," directive."),(0,r.kt)("p",null,"The reason for the above changes is that instead of using resolvers, Version 5\nuses plans. ",(0,r.kt)("em",{parentName:"p"},"Technically")," you can continue to use resolvers when dealing with\nexternal systems, but you will need to use plans to replace the above directive\nbehavior so you might as well adopt plans, right? \ud83d\ude09"),(0,r.kt)("h2",{id:"requires"},(0,r.kt)("inlineCode",{parentName:"h2"},"@requires")),(0,r.kt)("p",null,"In V4 we had ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires(columns: [...])")," which would ensure the parent object\npassed into your resolver had the given columns (though they might have\ndifferent capitalization \ud83d\ude2c)."),(0,r.kt)("p",null,"In a V5 plan you can simply ",(0,r.kt)("inlineCode",{parentName:"p"},".get(...)")," each of the columns from the parent\nplan."),(0,r.kt)("p",null,"Here's an example from the V4 documentation converted to V5. It uses a\n",(0,r.kt)("a",{parentName:"p",href:"https://grafast.org/grafast/step-library/standard-steps/lambda"},"lambda step")," to\nconvert the ",(0,r.kt)("inlineCode",{parentName:"p"},"price_in_us_cents")," to AUD via the ",(0,r.kt)("inlineCode",{parentName:"p"},"convertUsdToAud")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="V4 -> V5 conversion"',title:'"V4',"->":!0,V5:!0,'conversion"':!0},'-const { makeExtendSchemaPlugin, gql } = require("graphile-utils");\n+const { makeExtendSchemaPlugin, gql } = require("postgraphile/utils");\n const { convertUsdToAud } = require("ficticious-npm-library");\n+const { lambda } = require(\'postgraphile/grafast\');\n\n-const MyForeignExchangePlugin = makeExtendSchemaPlugin((build, options) => {\n+const MyForeignExchangePlugin = makeExtendSchemaPlugin((build) => {\n+  const { options } = build;\n   return {\n     typeDefs: gql`\n       extend type Product {\n-        priceInAuCents: Int! @requires(columns: ["price_in_us_cents"])\n+        priceInAuCents: Int!\n       }\n     `,\n-    resolvers: {\n+    plans: {\n       Product: {\n-        priceInAuCents: async (product) => {\n-          // Note that the columns are converted to fields, so the case changes\n-          // from `price_in_us_cents` to `priceInUsCents`\n-          const { priceInUsCents } = product;\n-          return await convertUsdToAud(priceInUsCents);\n-        },\n+        priceInAuCents($product) {\n+          const $cents = $product.get(\'price_in_us_cents\');\n+          return lambda($cents, cents => convertUsdToAud(cents));\n+        },\n       },\n     },\n   };\n });\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We've used ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda")," because the ",(0,r.kt)("inlineCode",{parentName:"p"},"convertUsdToAud")," function converts one value at\na time; however if we had a function capable of bulk converting many currency\nvalues at the same time it would be more efficient to call that function (once)\nvia ",(0,r.kt)("a",{parentName:"p",href:"https://grafast.org/grafast/step-library/standard-steps/loadOne"},(0,r.kt)("inlineCode",{parentName:"a"},"loadOne")),"\nrather than once-per-value as with ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda"),".")),(0,r.kt)("h2",{id:"pgfield"},(0,r.kt)("inlineCode",{parentName:"h2"},"@pgField")),(0,r.kt)("p",null,"This directive was always a workaround and is no longer meaningful in V5 - just\nmake sure you add the right plans to the right fields and everything should work\nhow you desire, and in a much more efficient and straightforward way than many\npatterns (particularly around mutation payloads) in V4."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't always try to do everything in one field. It's better to give the\nsubfields plans so that the related logic only needs to be executed if the\nfield is actually requested, and it can also simplify the code.")),(0,r.kt)("h2",{id:"pgquery"},(0,r.kt)("inlineCode",{parentName:"h2"},"@pgQuery")),(0,r.kt)("p",null,"In V4, ",(0,r.kt)("inlineCode",{parentName:"p"},"@pgQuery")," existed to inline SQL into your GraphQL operation, often as a\nperformance optimization to work around computed column functions or similar\nthat were not being inlined by PostgreSQL."),(0,r.kt)("p",null,"In V5, this concern should be handled via a plan. You have a number of choices\nof what plan you need, depending on what you're trying to achieve."),(0,r.kt)("p",null,"For leaf fields, if you need to do the calculation in the database rather than\nin JS, you might use an SQL expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"}," module.exports = makeExtendSchemaPlugin(build => {\n   const { pgSql: sql } = build;\n   return {\n     typeDefs: gql`\n       extend type User {\n-        nameWithSuffix(suffix: String!): String! @pgQuery(\n-          fragment: ${embed(\n-            (queryBuilder, args) =>\n-              sql.fragment`(${queryBuilder.getTableAlias()}.name || ' ' || ${sql.value(\n-                args.suffix\n-              )}::text)`\n-          )}\n-        )\n+        nameWithSuffix(suffix: String!): String!\n       }\n     `,\n+    plans: {\n+      User: {\n+        nameWithSuffix($user, { $suffix }) {\n+          return $user.select(\n+            sql`${$user.getClassStep().alias}.name || ' ' || ${$user.placeholder($suffix, TYPES.text)}`,\n+            TYPES.text,\n+          );\n+        }\n+      }\n+    }\n   };\n });\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The above is ",(0,r.kt)("em",{parentName:"p"},"not")," an example of an SQL injection attack, the code uses the\n",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," tagged template literal function from the ",(0,r.kt)("a",{parentName:"p",href:"https://star.graphile.org/pg-sql2"},(0,r.kt)("inlineCode",{parentName:"a"},"pg-sql2"),"\nmodule")," to ensure that all parameters are\ncorrectly handled.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A more performant (and simpler) solution to this would have been to do it in JS:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'+    plans: {\n+      User: {\n+        nameWithSuffix($user, { $suffix }) {\n+          return lambda(\n+            [$user.get("name"), $suffix],\n+            ([name, suffix]) => `${name} ${suffix}`,\n+          );\n+        },\n+      },\n+    },\n'))),(0,r.kt)("p",null,"Please refer to the\n",(0,r.kt)("a",{parentName:"p",href:"https://grafast.org/grafast/step-library/dataplan-pg/"},"@dataplan/pg"),"\ndocumentation for additional details."),(0,r.kt)("h2",{id:"selectgraphqlresultfromtable"},(0,r.kt)("inlineCode",{parentName:"h2"},"selectGraphQLResultFromTable")),(0,r.kt)("p",null,'In Version 4, this method was needed to kick off a "look-ahead" enhanced data\nfetch from a GraphQL resolver, but was always at risk of introducing the N+1\nproblem. Many users found it confusing, and would often try and use it to\nretrieve data for themselves to use inside a resolver, which did not align with\nits intent at all.'),(0,r.kt)("p",null,"In Version 5 there is no need for this helper any more - every plan step is\nopted into the planning system without any ceremony, and the N+1 problem is\nautomatically solved by Gra",(0,r.kt)("em",{parentName:"p"},"fast"),". The method to retrieve the data to use in\nthe plan, and the method to populate the data are now the same so there's no\nmore confusion between the two methods."),(0,r.kt)("p",null,"Here's an example of porting an example from the Version 4 documentation to\nVersion 5. First we find the ",(0,r.kt)("inlineCode",{parentName:"p"},"pgResource")," that represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"match_user"),"\nfunction then we add a plan for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Query.matchingUser")," field that executes the\nfunction, passing through the ",(0,r.kt)("inlineCode",{parentName:"p"},"searchText")," argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"}," module.exports = makeExtendSchemaPlugin((build) => {\n+  const matchUser = build.input.pgRegistry.pgResources.match_user;\n   return {\n     typeDefs: /* GraphQL */ `\n       type Query {\n         matchingUser(searchText: String!): User\n       }\n     `,\n-    resolvers: {\n-      Query: {\n-        matchingUser: async (parent, args, context, resolveInfo) => {\n-          const [row] = await resolveInfo.graphile.selectGraphQLResultFromTable(\n-            sql.fragment`(select * from match_user(${sql.value(\n-              args.searchText,\n-            )}))`,\n-            () => {}, // no-op\n-          );\n-          return row;\n-        },\n-      },\n-    },\n+    plans: {\n+      Query: {\n+        matchingUser($parent, { $searchText }) {\n+          return matchUser.execute({ step: $searchText });\n+        },\n+      },\n+    },\n   };\n });\n")),(0,r.kt)("h2",{id:"embed"},(0,r.kt)("inlineCode",{parentName:"h2"},"embed")),(0,r.kt)("p",null,"There is currently no replacement for ",(0,r.kt)("inlineCode",{parentName:"p"},"embed"),". You shouldn't need it any more;\nif you think you do, please come ask in ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/graphile"},"the\nDiscord"),"."),(0,r.kt)("h2",{id:"savepoints"},"Savepoints"),(0,r.kt)("p",null,"In PostGraphile V4 every GraphQL request was wrapped in a transaction. In order\nto be compliant with the GraphQL specification every mutation needed to be\nwrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"SAVEPOINT"),' to ensure that if a single mutation failed, all the\nother mutations would not be rolled back (so called "partial success").'),(0,r.kt)("p",null,"In PostGraphile V5, transactions are created on demand, so the use of savepoints\nis no longer necessary. That's good if you're\n",(0,r.kt)("a",{parentName:"p",href:"https://about.gitlab.com/blog/2021/09/29/why-we-spent-the-last-month-eliminating-postgresql-subtransactions/"},"concerned about SAVEPOINT impact on performance"),"."),(0,r.kt)("h2",{id:"contextpgclientquery"},(0,r.kt)("inlineCode",{parentName:"h2"},"context.pgClient.query")),(0,r.kt)("p",null,"In V4 we provision a Postgres client at the beginning of every GraphQL request\nand place it in a transaction, even if it isn't needed. This client was added to\nthe GraphQL context as ",(0,r.kt)("inlineCode",{parentName:"p"},"pgClient"),", and you could use it in your mutations."),(0,r.kt)("p",null,"In V5, Postgres clients are provisioned on demand, so you can either use a built\nin mutation step, or for more complex mutations you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"withPgClient")," to\nrun arbitrary (asynchronous) code with access to a pgClient (which you may place\nin a transaction if you like), or ",(0,r.kt)("inlineCode",{parentName:"p"},"withPgClientTransaction")," to do the same with\na client that's already in a transaction. Note that this pgClient is a generic\nadaptor, so if you want to deal with your Postgres client of choice here (",(0,r.kt)("inlineCode",{parentName:"p"},"pg"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"postgres"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pg-promise"),", etc) you can do so!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { object } from "postgraphile/grafast";\n// highlight-next-line\nimport { withPgClientTransaction } from "postgraphile/@dataplan/pg";\nimport { makeExtendSchemaPlugin } from "postgraphile/utils";\n\nexport default makeExtendSchemaPlugin((build) => {\n  const { sql } = build;\n  /**\n   * The \'executor\' tells us which database we\'re talking to.\n   * You can get this from any source via `pgResource.executor`; here we use the\n   * executor from the \'users\' source.\n   */\n  const executor = build.input.pgRegistry.pgResources.users.executor;\n\n  return {\n    typeDefs: /* GraphQL */ `\n      input MyCustomMutationInput {\n        count: Int\n      }\n      type MyCustomMutationPayload {\n        numbers: [Int!]\n      }\n      extend type Mutation {\n        """\n        An example mutation that doesn\'t really do anything; uses Postgres\'\n        generate_series() to return a list of numbers.\n        """\n        myCustomMutation(input: MyCustomMutationInput!): MyCustomMutationPayload\n      }\n    `,\n\n    plans: {\n      Mutation: {\n        myCustomMutation(_$root, { $input: { $count } }) {\n          /**\n           * This step dictates the data that will be passed as the second argument\n           * to the `withPgClientTransaction` callback. This is typically\n           * information about the field arguments, details from the GraphQL\n           * context, or data from previously executed steps.\n           */\n          const $data = object({\n            count: $count,\n          });\n\n          // Callback will be called with a client that\'s in a transaction,\n          // whatever it returns (plain data) will be the result of the\n          // `withPgClientTransaction` step; if it throws an error then the\n          // transaction will roll back and the error will be the result of the\n          // step.\n          // highlight-start\n          const $transactionResult = withPgClientTransaction(\n            executor,\n            $data,\n            async (client, data) => {\n              // The data from the `$data` step above\n              const { count } = data;\n\n              // Run some SQL\n              const { rows } = await client.query(\n                sql.compile(\n                  sql`select i from generate_series(1, ${sql.value(\n                    count ?? 1,\n                  )}) as i;`,\n                ),\n              );\n\n              // Do some asynchronous work (e.g. talk to Stripe or whatever)\n              await sleep(2);\n\n              // Maybe run some more SQL as part of the transaction\n              await client.query(sql.compile(sql`select 1;`));\n\n              // Return whatever data you\'ll need later\n              return rows.map((row) => row.i);\n            },\n          );\n          // highlight-end\n\n          return $transactionResult;\n        },\n      },\n      MyCustomMutationPayload: {\n        numbers($transactionResult) {\n          return $transactionResult;\n        },\n      },\n    },\n  };\n});\n')),(0,r.kt)("p",null,"Another example of makeExtendSchemaPlugin being used can be found ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/jamesallain/ca09979840c4530f72ce16378e49b927"},(0,r.kt)("inlineCode",{parentName:"a"},"here")),"."),(0,r.kt)("h2",{id:"querybuilder-named-children"},'QueryBuilder "named children"'),(0,r.kt)("p",null,"This concept is no longer useful or needed, and can be ported to much more\ndirect Gra",(0,r.kt)("em",{parentName:"p"},"fast")," steps. If you need help, do reach out on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/graphile"},"the\nDiscord"),"."),(0,r.kt)("h2",{id:"querybuilder-itself"},"QueryBuilder itself"),(0,r.kt)("p",null,"QueryBuilder no longer exists, instead you'll mostly be using the helpers on\n",(0,r.kt)("a",{parentName:"p",href:"https://grafast.org/grafast/step-library/dataplan-pg/"},(0,r.kt)("inlineCode",{parentName:"a"},"pgSelect"))," and similar steps."),(0,r.kt)("h2",{id:"buildgettypeandidentifiersfromnodeid"},(0,r.kt)("inlineCode",{parentName:"h2"},"build.getTypeAndIdentifiersFromNodeId")),(0,r.kt)("p",null,"This helper has been replaced with\n",(0,r.kt)("a",{parentName:"p",href:"https://grafast.org/grafast/step-library/standard-steps/node"},(0,r.kt)("inlineCode",{parentName:"a"},"specFromNodeId")),'.\nEach GraphQL type that implements Node registers a "node ID handler"; if you\nknow the ',(0,r.kt)("inlineCode",{parentName:"p"},"typeName")," you're expecting you can get this via\n",(0,r.kt)("inlineCode",{parentName:"p"},"build.getNodeIdHandler(typeName)"),'. From this, you can determine the "codec"\nthat was used to encode the NodeID, and passing these two things to\n',(0,r.kt)("inlineCode",{parentName:"p"},"specFromNodeId")," along with the node ID itself should return a specification of\nyour node, typically something like ",(0,r.kt)("inlineCode",{parentName:"p"},"{id: $id}")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"$id")," is an executable\nstep), but can vary significantly depending on the node type."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const typeName = "User";\nconst handler = build.getNodeIdHandler(typeName);\n\nconst plans = {\n  Mutation: {\n    updateUser(parent, fieldArgs) {\n      const spec = specFromNodeId(handler, fieldArgs.$id);\n      const plan = object({ result: pgUpdateSingle(userSource, spec) });\n      fieldArgs.apply(plan);\n      return plan;\n    },\n  },\n};\n')))}c.isMDXComponent=!0}}]);