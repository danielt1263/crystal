"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[4348],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const o={layout:"page",path:"/postgraphile/usage-schema/",title:"Usage - Schema Only"},i="PostGraphile schema-only usage",s={unversionedId:"usage-schema",id:"usage-schema",title:"Usage - Schema Only",description:"The PostGraphile library mode gives you a lot of excellent features for running",source:"@site/postgraphile/usage-schema.md",sourceDirName:".",slug:"/usage-schema",permalink:"/postgraphile/next/usage-schema",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/usage-schema.md",tags:[],version:"current",frontMatter:{layout:"page",path:"/postgraphile/usage-schema/",title:"Usage - Schema Only"},sidebar:"docs",previous:{title:"Usage - Library",permalink:"/postgraphile/next/usage-library"},next:{title:"Configuration",permalink:"/postgraphile/next/config"}},l={},p=[{value:"Getting the schema",id:"getting-the-schema",level:2},{value:"Easy execution: <code>grafast()</code>",id:"easy-execution-grafast",level:2},{value:"Execution with <code>hookArgs()</code>",id:"execution-with-hookargs",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postgraphile-schema-only-usage"},"PostGraphile schema-only usage"),(0,r.kt)("p",null,"The PostGraphile library mode gives you a lot of excellent features for running\nyour own GraphQL server. However, if you want to execute a PostGraphile query in\nNode.js without having to go through HTTP you can use some other exported\nfunctions that PostGraphile provides."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you're looking for Apollo Client SSR support for PostGraphile without a\nnetwork roundtrip, check out\n",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/graphile/starter/blob/516cf0cf35f1d9e0904f74e68d3a2dc51a59225d/%40app/lib/src/GraphileApolloLink.ts"},"GraphileApolloLink in Graphile Starter"),".")),(0,r.kt)("h2",{id:"getting-the-schema"},"Getting the schema"),(0,r.kt)("p",null,"The first function you will need is ",(0,r.kt)("inlineCode",{parentName:"p"},"makeSchema")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"watchSchema")," if you want\nto get a new schema each time the database is updated) which creates your\nPostGraphile GraphQL schema by introspecting your database."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"makeSchema")," function accepts a ",(0,r.kt)("a",{parentName:"p",href:"/postgraphile/next/config"},"configuration preset")," and\nreturns a promise to a SchemaResult, which is an object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema")," - the GraphQL schema"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resolvedPreset")," - the resolved preset")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { makeSchema } from "postgraphile";\nimport preset from "./graphile.config.js";\n\nconst { schema, resolvedPreset } = await makeSchema(preset);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you already have a PostGraphile instance (",(0,r.kt)("inlineCode",{parentName:"p"},"pgl"),"), you can instead get the\nGraphQL schema and ",(0,r.kt)("inlineCode",{parentName:"p"},"resolvedPreset")," via:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { schema, resolvedPreset } = await pgl.getSchemaResult();\n"))),(0,r.kt)("h2",{id:"easy-execution-grafast"},"Easy execution: ",(0,r.kt)("inlineCode",{parentName:"h2"},"grafast()")),(0,r.kt)("p",null,"Now that you have ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resolvedPreset"),", you can execute a GraphQL\nquery via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { grafast } from "grafast";\n\nconst { data, errors } = await grafast({\n  schema,\n  resolvedPreset,\n  requestContext: {\n    // This is the "request context" - it is **NOT** the GraphQL context\n  },\n  source: /* GraphQL */ `\n    query MyQuery {\n      __typename\n    }\n  `,\n  variableValues: {},\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"grafast()")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql()")," except it also accepts two additional\noptional entries in the ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," object: the ",(0,r.kt)("inlineCode",{parentName:"p"},"resolvedPreset")," and the ",(0,r.kt)("em",{parentName:"p"},"request\ncontext")," ",(0,r.kt)("inlineCode",{parentName:"p"},"requestContext"),". If you pass these parameters then ",(0,r.kt)("inlineCode",{parentName:"p"},"grafast")," will\ntake care of building the ",(0,r.kt)("em",{parentName:"p"},"GraphQL context")," for you based on what is in your\npreset."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not confuse ",(0,r.kt)("inlineCode",{parentName:"p"},"requestContext")," with the GraphQL context; ",(0,r.kt)("inlineCode",{parentName:"p"},"requestContext")," is\nthe parameter passed to your ",(0,r.kt)("inlineCode",{parentName:"p"},"preset.grafast.context(requestContext)")," callback\n(and any plugins that need it) containing details of where the request came\nfrom. In a node HTTP web server it would typically be something like\n",(0,r.kt)("inlineCode",{parentName:"p"},"requestContext = { node: { req, res } }")," and would be used to extract things\nlike the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header to determine who is making the request.\nDifferent servers and situations may add alternative or additional information.")),(0,r.kt)("h2",{id:"execution-with-hookargs"},"Execution with ",(0,r.kt)("inlineCode",{parentName:"h2"},"hookArgs()")),(0,r.kt)("p",null,"If you do not (or can not) pass these parameters to ",(0,r.kt)("inlineCode",{parentName:"p"},"grafast()")," then you will\nneed to call ",(0,r.kt)("inlineCode",{parentName:"p"},"hookArgs()")," yourself to build the GraphQL context that PostGraphile\nwill need in order to communicate with the database. This also means that\nyou're taking care of parsing and validating the GraphQL request yourself."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're doing this inside a server framework, they will often give you a way\nto hook the args before they're dispatched to execute - that is where you would\ncall ",(0,r.kt)("inlineCode",{parentName:"p"},"hookArgs()"),".")),(0,r.kt)("p",null,"Here's a full example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeSchema } from "postgraphile";\nimport { parse, validate } from "postgraphile/graphql";\nimport { hookArgs, execute } from "postgraphile/grafast";\n\nimport preset from "./graphile.config.js";\n\n// Trigger schema building outside of `executeQuery` so we only do it once:\nconst schemaResultPromise = makeSchema(preset);\n\n/**\n * Given a request context `requestContext`, GraphQL query text `source` and\n * optionally variable values and operation name, execute the given GraphQL\n * operation against our schema and return the result.\n */\nexport async function executeQuery(\n  requestContext: Grafast.RequestContext,\n  source: string,\n  variableValues?: Record<string, unknown> | null,\n  operationName?: string,\n) {\n  // Finish loading the schema:\n  const { schema, resolvedPreset } = await schemaResultPromise;\n\n  // Parse the GraphQL query text:\n  const document = parse(source);\n\n  // Validate the GraphQL document against the schema:\n  const errors = validate(schema, document);\n  if (errors.length > 0) {\n    throw new Error(`Validation error(s) occurred`, { cause: errors });\n  }\n\n  // Prepare the execution arguments:\n  const args = await hookArgs(\n    {\n      schema,\n      document,\n      variableValues,\n      operationName,\n    },\n    resolvedPreset,\n    requestContext,\n  );\n\n  // Execute the request using Grafast:\n  return await execute(args, resolvedPreset);\n}\n')))}h.isMDXComponent=!0}}]);