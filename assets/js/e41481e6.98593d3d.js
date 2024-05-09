"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[6465],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=s,m=u["".concat(l,".").concat(g)]||u[g]||h[g]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),s=(n(2784),n(30876));const o={layout:"page",path:"/postgraphile/testing-jest/",title:"Testing with Jest"},a=void 0,i={unversionedId:"testing-jest",id:"version-4.x/testing-jest",title:"Testing with Jest",description:"Testing the database",source:"@site/versioned_docs/version-4.x/testing-jest.md",sourceDirName:".",slug:"/testing-jest",permalink:"/postgraphile/current/testing-jest",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/versioned_docs/version-4.x/testing-jest.md",tags:[],version:"4.x",frontMatter:{layout:"page",path:"/postgraphile/testing-jest/",title:"Testing with Jest"},sidebar:"docs",previous:{title:"Migrating from PostGraphQL v3",permalink:"/postgraphile/current/v3-migration"},next:{title:"Bundling PostGraphile with Webpack",permalink:"/postgraphile/current/bundling-webpack"}},l={},p=[{value:"Testing the database",id:"testing-the-database",level:3},{value:"Testing the GraphQL middleware",id:"testing-the-graphql-middleware",level:3}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"testing-the-database"},"Testing the database"),(0,s.kt)("p",null,"Making sure your database functions, triggers, permissions, etc work correctly\nis critical; there are many tools out there that you can use to do this, but if\nyou're already developing in a JavaScript environment it may feel natural to add\nthem to your Jest suite."),(0,s.kt)("p",null,"The pattern is effectively to spin up a transaction, set any relevant Postgres\nsettings (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"role"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"jwt.claims.user_id"),", etc), run the SQL you want to test,\ncheck the results, and then rollback the transaction; i.e.:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"-- start transaction\nbegin;\n\n-- set relevant transaction settings; the `, true` means \"local\" - i.e. it'll\n-- be rolled back with the transaction - do not forget to add this!\nselect\n  set_config('role', 'YOUR_GRAPHQL_ROLE_HERE', true),\n  set_config('jwt.claims.user_id', 27, true),\n  set_config...;\n\n-- run the SQL you want to test\nselect * from my_function();\n\n-- rollback the transaction\nrollback;\n")),(0,s.kt)("p",null,"Each of the statements above would normally have to be issued via\n",(0,s.kt)("inlineCode",{parentName:"p"},"pgClient.query(...)")," using a Postgres client that your retrieve from a\n",(0,s.kt)("inlineCode",{parentName:"p"},"pg.Pool")," (and release afterwards); however that's a lot of boilerplate for our\ntests, so it makes sense to extract the common patterns into helper functions."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"(Click to expand.) Create some helpers in ",(0,s.kt)("tt",null,"test_helpers.ts"),". "),(0,s.kt)("p",null,"The following code is in TypeScript; you can convert it to JavaScript via\n",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play"},"https://www.typescriptlang.org/play")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { Pool, PoolClient } from "pg";\n\nif (!process.env.TEST_DATABASE_URL) {\n  throw new Error("Cannot run tests without a TEST_DATABASE_URL");\n}\nexport const TEST_DATABASE_URL: string = process.env.TEST_DATABASE_URL;\n\nconst pools = {};\n\n// Make sure we release those pgPools so that our tests exit!\nafterAll(() => {\n  const keys = Object.keys(pools);\n  return Promise.all(\n    keys.map(async (key) => {\n      try {\n        const pool = pools[key];\n        delete pools[key];\n        await pool.end();\n      } catch (e) {\n        console.error("Failed to release connection!");\n        console.error(e);\n      }\n    }),\n  );\n});\n\nconst withDbFromUrl = async <T>(url: string, fn: ClientCallback<T>) => {\n  const pool = poolFromUrl(url);\n  const client = await pool.connect();\n  await client.query("BEGIN ISOLATION LEVEL SERIALIZABLE;");\n\n  try {\n    await fn(client);\n  } catch (e) {\n    // Error logging can be helpful:\n    if (typeof e.code === "string" && e.code.match(/^[0-9A-Z]{5}$/)) {\n      console.error([e.message, e.code, e.detail, e.hint, e.where].join("\\n"));\n    }\n    throw e;\n  } finally {\n    await client.query("ROLLBACK;");\n    await client.query("RESET ALL;"); // Shouldn\'t be necessary, but just in case...\n    await client.release();\n  }\n};\n\nexport const withRootDb = <T>(fn: ClientCallback<T>) =>\n  withDbFromUrl(TEST_DATABASE_URL, fn);\n\nexport const becomeRoot = (client: PoolClient) => client.query("reset role");\n\n/******************************************************************************\n **                                                                          **\n **     BELOW HERE, YOU\'LL WANT TO CUSTOMISE FOR YOUR OWN DATABASE SCHEMA    **\n **                                                                          **\n ******************************************************************************/\n\nexport type User = {\n  id: string;\n  username: string;\n  _password?: string;\n  _email?: string;\n};\nexport type Organization = { id: string; name: string };\n\nexport const becomeUser = async (\n  client: PoolClient,\n  userOrUserId: User | string | null,\n) => {\n  await becomeRoot(client);\n  const session = userOrUserId\n    ? await createSession(\n        client,\n        typeof userOrUserId === "object" ? userOrUserId.id : userOrUserId,\n      )\n    : null;\n  await client.query(\n    `select set_config(\'role\', $1::text, true),\n            set_config(\'jwt.claims.session_id\', $2::text, true)`,\n    [process.env.DATABASE_VISITOR, session ? session.uuid : ""],\n  );\n};\n\n// Enables multiple calls to `createUsers` within the same test to still have\n// deterministic results without conflicts.\nlet userCreationCounter = 0;\nbeforeEach(() => {\n  userCreationCounter = 0;\n});\n\nexport const createUsers = async function createUsers(\n  client: PoolClient,\n  count: number = 1,\n  verified: boolean = true,\n) {\n  const users = [];\n  if (userCreationCounter > 25) {\n    throw new Error("Too many users created!");\n  }\n  for (let i = 0; i < count; i++) {\n    const userLetter = "abcdefghijklmnopqrstuvwxyz"[userCreationCounter];\n    userCreationCounter++;\n    const password = userLetter.repeat(12);\n    const email = `${userLetter}${i || ""}@b.c`;\n    const user: User = (\n      await client.query(\n        `SELECT * FROM app_private.really_create_user(\n          username := $1,\n          email := $2,\n          email_is_verified := $3,\n          name := $4,\n          avatar_url := $5,\n          password := $6\n        )`,\n        [\n          `testuser_${userLetter}`,\n          email,\n          verified,\n          `User ${userLetter}`,\n          null,\n          password,\n        ],\n      )\n    ).rows[0];\n    expect(user.id).not.toBeNull();\n    user._email = email;\n    user._password = password;\n    users.push(user);\n  }\n  return users;\n};\n'))),(0,s.kt)("p",null,"Then a test file might look like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3-13}","{3-13}":!0},'import { becomeUser, createUsers, withRootDb } from "../test_helpers";\n\ntest("can delete self", () =>\n  withRootDb(async (pgClient) => {\n    const [user] = await createUsers(pgClient, 1);\n\n    await becomeUser(pgClient, user);\n    const {\n      rows: [deletedUser],\n    } = await pgClient.query(\n      "delete from app_public.users where id = $1 returning *",\n      [user.id],\n    );\n    expect(deletedUser).toBeTruthy();\n  }));\n')),(0,s.kt)("p",null,"For more thorough test helpers (and to see this working in practice), check out\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/graphile/starter"},"Graphile Starter"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/graphile/starter/blob/main/@app/db/__tests__/app_public/functions/invite_to_organization.test.ts"},"@app/db/","_","_","tests","_","_","/app","_","public/functions/invite","_","to","_","organization.test.ts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/graphile/starter/blob/main/@app/db/__tests__/helpers.ts"},"@app/db/","_","_","tests","_","_","/helpers.ts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/graphile/starter/blob/main/@app/__tests__/helpers.ts"},"@app/","_","_","tests","_","_","/helpers.ts"))),(0,s.kt)("h3",{id:"testing-the-graphql-middleware"},"Testing the GraphQL middleware"),(0,s.kt)("p",null,"Whereas testing the database functionality can be thought of as unit tests,\ntesting the GraphQL middleware is more akin to integration tests - they pretend\nto go through the middleware (exercising pgSettings / JWT / etc) and you can\nplace assertions on the results."),(0,s.kt)("p",null,"First, make sure that you've extracted your PostGraphile (library mode) options\ninto a function that you can import in your tests; for example your PostGraphile\nserver file might look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6-11,17}","{6-11,17}":!0},'const express = require("express");\nconst { postgraphile } = require("postgraphile");\n\nconst app = express();\n\nfunction postgraphileOptions() {\n  return {\n    dynamicJson: true,\n  };\n}\nexports.postgraphileOptions = postgraphileOptions;\n\napp.use(\n  postgraphile(\n    process.env.DATABASE_URL || "postgres:///",\n    ["app_public"],\n    postgraphileOptions(),\n  ),\n);\n\napp.listen(process.env.PORT || 3000);\n')),(0,s.kt)("details",null,(0,s.kt)("summary",null,"(Click to expand.) Create a ",(0,s.kt)("tt",null,"test_helper.ts")," file for running your queries, responsible for importing this ",(0,s.kt)("tt",null,"postgraphileOptions")," function and setting up/tearing down the transaction. Don't forget to set the environment variables used by this file. "),(0,s.kt)("p",null,"The following code is in TypeScript; you can convert it to JavaScript via\n",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play"},"https://www.typescriptlang.org/play")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { Request, Response } from "express";\nimport { ExecutionResult, graphql, GraphQLSchema } from "graphql";\nimport { Pool, PoolClient } from "pg";\nimport {\n  createPostGraphileSchema,\n  PostGraphileOptions,\n  withPostGraphileContext,\n} from "postgraphile";\n\nimport { getPostGraphileOptions } from "../src/middleware/installPostGraphile";\n\nconst MockReq = require("mock-req");\n\nlet known: Record<string, { counter: number; values: Map<unknown, string> }> =\n  {};\nbeforeEach(() => {\n  known = {};\n});\n/*\n * This function replaces values that are expected to change with static\n * placeholders so that our snapshot testing doesn\'t throw an error\n * every time we run the tests because time has ticked on in it\'s inevitable\n * march toward the future.\n */\nexport function sanitize(json: any): any {\n  /* This allows us to maintain stable references whilst dealing with variable values */\n  function mask(value: unknown, type: string) {\n    if (!known[type]) {\n      known[type] = { counter: 0, values: new Map() };\n    }\n    const o = known[type];\n    if (!o.values.has(value)) {\n      o.values.set(value, `[${type}-${++o.counter}]`);\n    }\n    return o.values.get(value);\n  }\n\n  if (Array.isArray(json)) {\n    return json.map((val) => sanitize(val));\n  } else if (json && typeof json === "object") {\n    const result = { ...json };\n    for (const k in result) {\n      if (k === "nodeId" && typeof result[k] === "string") {\n        result[k] = mask(result[k], "nodeId");\n      } else if (\n        k === "id" ||\n        k === "uuid" ||\n        (k.endsWith("Id") &&\n          (typeof json[k] === "number" || typeof json[k] === "string")) ||\n        (k.endsWith("Uuid") && typeof k === "string")\n      ) {\n        result[k] = mask(result[k], "id");\n      } else if (\n        (k.endsWith("At") || k === "datetime") &&\n        typeof json[k] === "string"\n      ) {\n        result[k] = mask(result[k], "timestamp");\n      } else if (\n        k.match(/^deleted[A-Za-z0-9]+Id$/) &&\n        typeof json[k] === "string"\n      ) {\n        result[k] = mask(result[k], "nodeId");\n      } else if (k === "email" && typeof json[k] === "string") {\n        result[k] = mask(result[k], "email");\n      } else if (k === "username" && typeof json[k] === "string") {\n        result[k] = mask(result[k], "username");\n      } else {\n        result[k] = sanitize(json[k]);\n      }\n    }\n    return result;\n  } else {\n    return json;\n  }\n}\n\n// Contains the PostGraphile schema and rootPgPool\ninterface ICtx {\n  rootPgPool: Pool;\n  options: PostGraphileOptions<Request, Response>;\n  schema: GraphQLSchema;\n}\nlet ctx: ICtx | null = null;\n\nexport const setup = async () => {\n  const rootPgPool = new Pool({\n    connectionString: process.env.TEST_DATABASE_URL,\n  });\n\n  const options = getPostGraphileOptions({ rootPgPool });\n  const schema = await createPostGraphileSchema(\n    rootPgPool,\n    "app_public",\n    options,\n  );\n\n  // Store the context\n  ctx = {\n    rootPgPool,\n    options,\n    schema,\n  };\n};\n\nexport const teardown = async () => {\n  try {\n    if (!ctx) {\n      return null;\n    }\n    const { rootPgPool } = ctx;\n    ctx = null;\n    rootPgPool.end();\n    return null;\n  } catch (e) {\n    console.error(e);\n    return null;\n  }\n};\n\nexport const runGraphQLQuery = async function runGraphQLQuery(\n  query: string, // The GraphQL query string\n  variables: { [key: string]: any } | null, // The GraphQL variables\n  reqOptions: { [key: string]: any } | null, // Any additional items to set on `req` (e.g. `{user: {id: 17}}`)\n  checker: (\n    result: ExecutionResult,\n    context: { pgClient: PoolClient },\n  ) => void | ExecutionResult | Promise<void | ExecutionResult> = () => {}, // Place test assertions in this function\n) {\n  if (!ctx) throw new Error("No ctx!");\n  const { schema, rootPgPool, options } = ctx;\n  const req = new MockReq({\n    url: options.graphqlRoute || "/graphql",\n    method: "POST",\n    headers: {\n      Accept: "application/json",\n      "Content-Type": "application/json",\n    },\n    ...reqOptions,\n  });\n  const res: any = { req };\n  req.res = res;\n\n  const {\n    pgSettings: pgSettingsGenerator,\n    additionalGraphQLContextFromRequest,\n  } = options;\n  const pgSettings =\n    (typeof pgSettingsGenerator === "function"\n      ? await pgSettingsGenerator(req)\n      : pgSettingsGenerator) || {};\n\n  // Because we\'re connected as the database owner, we should manually switch to\n  // the authenticator role\n  if (!pgSettings.role) {\n    pgSettings.role = process.env.DATABASE_AUTHENTICATOR;\n  }\n\n  await withPostGraphileContext(\n    {\n      ...options,\n      pgPool: rootPgPool,\n      pgSettings,\n      pgForceTransaction: true,\n    },\n    async (context) => {\n      let checkResult;\n      const { pgClient } = context;\n      try {\n        // This runs our GraphQL query, passing the replacement client\n        const additionalContext = additionalGraphQLContextFromRequest\n          ? await additionalGraphQLContextFromRequest(req, res)\n          : null;\n        const result = await graphql(\n          schema,\n          query,\n          null,\n          {\n            ...context,\n            ...additionalContext,\n            __TESTING: true,\n          },\n          variables,\n        );\n        // Expand errors\n        if (result.errors) {\n          if (options.handleErrors) {\n            result.errors = options.handleErrors(result.errors);\n          } else {\n            // This does a similar transform that PostGraphile does to errors.\n            // It\'s not the same. Sorry.\n            result.errors = result.errors.map((rawErr) => {\n              const e = Object.create(rawErr);\n              Object.defineProperty(e, "originalError", {\n                value: rawErr.originalError,\n                enumerable: false,\n              });\n\n              if (e.originalError) {\n                Object.keys(e.originalError).forEach((k) => {\n                  try {\n                    e[k] = e.originalError[k];\n                  } catch (err) {\n                    // Meh.\n                  }\n                });\n              }\n              return e;\n            });\n          }\n        }\n\n        // This is were we call the `checker` so you can do your assertions.\n        // Also note that we pass the `replacementPgClient` so that you can\n        // query the data in the database from within the transaction before it\n        // gets rolled back.\n        checkResult = await checker(result, {\n          pgClient,\n        });\n\n        // You don\'t have to keep this, I just like knowing when things change!\n        expect(sanitize(result)).toMatchSnapshot();\n\n        return checkResult == null ? result : checkResult;\n      } finally {\n        // Rollback the transaction so no changes are written to the DB - this\n        // makes our tests fairly deterministic.\n        await pgClient.query("rollback");\n      }\n    },\n  );\n};\n'))),(0,s.kt)("p",null,"For more thorough test helpers (and to see this working in practice), check out\nGraphile Starter:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/graphile/starter/blob/main/@app/server/__tests__/queries/currentUser.test.ts"},"@app/server/","_","_","tests","_","_","/queries/currentUser.test.ts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/graphile/starter/blob/main/@app/server/__tests__/helpers.ts"},"@app/server/","_","_","tests","_","_","/helpers.ts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/graphile/starter/blob/main/@app/__tests__/helpers.ts"},"@app/","_","_","tests","_","_","/helpers.ts"))),(0,s.kt)("p",null,"Your test might look something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"{9,24-25}","{9,24-25}":!0},'const { setup, teardown, runGraphQLQuery } = require("../test_helper");\n\nbeforeAll(setup);\nafterAll(teardown);\n\ntest("GraphQL query nodeId", async () => {\n  await runGraphQLQuery(\n    // GraphQL query goes here:\n    `{ __typename }`,\n\n    // GraphQL variables go here:\n    {},\n\n    // Any additional properties you want `req` to have (e.g. if you\'re using\n    // `pgSettings`) go here:\n    {\n      // Assuming you\'re using Passport.js / pgSettings, you could pretend\n      // to be logged in by setting `req.user` to `{id: 17}`:\n      user: { id: 17 },\n    },\n\n    // This function runs all your test assertions:\n    async (json, { pgClient }) => {\n      expect(json.errors).toBeFalsy();\n      expect(json.data.__typename).toEqual("Query");\n\n      // If you need to, you can query the DB within the context of this\n      // function - e.g. to check that your mutation made the changes you\'d\n      // expect.\n      const { rows } = await pgClient.query(\n        `SELECT * FROM app_public.users WHERE id = $1`,\n        [17],\n      );\n      if (rows.length !== 1) {\n        throw new Error("User not found!");\n      }\n    },\n  );\n});\n')))}h.isMDXComponent=!0}}]);