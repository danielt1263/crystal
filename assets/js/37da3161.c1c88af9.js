"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[1008],{30876:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(2784);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(t),u=s,d=h["".concat(p,".").concat(u)]||h[u]||m[u]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[h]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7896),s=(t(2784),t(30876));const a={layout:"page",path:"/postgraphile/multiple-schemas/",title:"Multiple GraphQL schemas with PostGraphile"},o=void 0,i={unversionedId:"multiple-schemas",id:"multiple-schemas",title:"Multiple GraphQL schemas with PostGraphile",description:"Each PostGraphile instance only creates a single GraphQL schema \u2500 you don't get",source:"@site/postgraphile/multiple-schemas.md",sourceDirName:".",slug:"/multiple-schemas",permalink:"/postgraphile/next/multiple-schemas",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/multiple-schemas.md",tags:[],version:"current",frontMatter:{layout:"page",path:"/postgraphile/multiple-schemas/",title:"Multiple GraphQL schemas with PostGraphile"},sidebar:"docs",previous:{title:"Bundling PostGraphile with Webpack",permalink:"/postgraphile/next/bundling-webpack"},next:{title:"Running PostGraphile in Docker",permalink:"/postgraphile/next/running-postgraphile-in-docker"}},p={},l=[{value:"Multiple endpoints",id:"multiple-endpoints",level:3},{value:"Single endpoint, multiple GraphQL schemas",id:"single-endpoint-multiple-graphql-schemas",level:3}],c={toc:l},h="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(h,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Each PostGraphile instance only creates a single GraphQL schema \u2500 you don't get\none schema per user based on permissions, for example. Typically, in GraphQL, a\nsingle schema is what you want \u2500 it allows you to use the various GraphQL\ntooling for autocomplete, linting, mapping, etc using the same shared schema."),(0,s.kt)("p",null,'However it sometimes makes sense to provide two or more different schemas; for\nexample if you have two completely independent use-cases, or if you need to\ngenerate a special "admin" schema that only admins can access.'),(0,s.kt)("p",null,"Typically it's a good idea to put different schemas on different URIs; it makes\nit easier to point to the relevant schema, download its description, and perform\nthe relevant linting/etc with it. If someone is not allowed access to a schema\nthey simply cannot access that endpoint."),(0,s.kt)("p",null,"It's possible to run multiple PostGraphile schemas in a single Node.js server,\neither mounting them at different endpoints or on the same URI and use a simple\nmiddleware to switch between them. The key thing is to not to build more\nPostGraphile instances then the number of services you have - do not build a\nPostGraphile instance per request! (This is because every time you create a\nPostGraphile instance, it will perform a fresh introspection of your database\nschema and generate the GraphQL API from that - this would cause considerable\nlag, and unnecessary load on your database!)"),(0,s.kt)("h3",{id:"multiple-endpoints"},"Multiple endpoints"),(0,s.kt)("p",null,"Here's an example of mounting multiple PostGraphiles at different endpoints:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { createServer } from "node:http";\nimport express from "express";\nimport postgraphile from "postgraphile";\nimport { grafserv } from "postgraphile/grafserv/express/v4";\nimport userPreset from "./graphile.config.mjs";\n\n// Create an express app\nconst app = express();\n// (Add any Express middleware you want here.)\n\n// Create a Node HTTP server, mounting Express into it\nconst server = createServer(app);\nserver.on("error", (e) => {\n  console.error(e);\n});\n\n// Definitions of the PostgreSQL service we wish to expose via separate\n// GraphQL APIs:\nconst services = {\n  admin: "postgres:///admin",\n  user: "postgres:///user",\n};\n\n// Loop over the services, and add them to our Express app\nfor (const [service, connectionString] of Object.entries(services)) {\n  // Build a preset specifically for this service\n  const preset = {\n    extends: [userPreset],\n    pgServices: [makePgService({ connectionString })],\n    grafserv: {\n      graphqlPath: `/${service}/graphql`,\n      graphiqlPath: `/${service}`,\n    },\n  };\n  // Build a PostGraphile instance for this service\n  export const pgl = postgraphile(preset);\n  // Create the Grafserv instance for this PostGraphile instance using the Express adaptor\n  const serv = pgl.createServ(grafserv);\n  // Add the Grafserv instance\'s route handlers to the Express app, and register\n  // websockets if desired\n  await serv.addTo(app, server);\n  // TODO: check that enabling websockets on multiple grafservs via the same server doesn\'t cause any issues\n}\n\n// Start the Express server\nserver.listen(userPreset.grafserv?.port ?? 5678);\n')),(0,s.kt)("h3",{id:"single-endpoint-multiple-graphql-schemas"},"Single endpoint, multiple GraphQL schemas"),(0,s.kt)("p",null,"It's also possible to switch which PostGraphile instance to use for a single\nendpoint based on some information provided in the HTTP request, but how you\nwould do this is dependent on what webserver framework you're using."),(0,s.kt)("p",null,"If you're using something simple like Node, Express or Connect then you can\nbuild middlewares for each instance and then write a custom middleware to call\nthe right one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// TODO: this is untested!\nimport { createServer } from "node:http";\nimport express from "express";\nimport postgraphile from "postgraphile";\nimport { grafserv } from "postgraphile/grafserv/express/v4";\nimport userPreset from "./graphile.config.mjs";\n\n// Create an express app\nconst app = express();\n// (Add any Express middleware you want here.)\n\n// Create a Node HTTP server, mounting Express into it\nconst server = createServer(app);\nserver.on("error", (e) => {\n  console.error(e);\n});\n\n// A preset shared between our services which disables websockets and\n// subscriptions since they are not supported\nconst commonPreset = {\n  extends: [userPreset],\n  grafserv: { websockets: false },\n  disablePlugins: ["SubscriptionPlugin"],\n};\n\n// The services we wish to switch between\nconst services = {\n  admin: {\n    handler: express(),\n    pgl: postgraphile({\n      extends: [commonPreset],\n      pgServices: [makePgService({ connectionString: "postgres:///admin" })],\n    }),\n  },\n  user: {\n    handler: express(),\n    pgl: postgraphile({\n      extends: [commonPreset],\n      pgServices: [makePgService({ connectionString: "postgres:///user" })],\n    }),\n  },\n};\n\n// Mount the PostGraphile instances into the handlers\nfor (const { handler, pgl } of Object.values(services)) {\n  const serv = pgl.createServ(grafserv);\n  serv.addTo(handler);\n}\n\n// Add a custom middleware to switch between these handlers\napp.use((req, res, next) => {\n  const isAdmin = req.user?.isAdmin;\n  if (isAdmin) {\n    services.admin.handler(req, res, next);\n  } else {\n    services.user.handler(req, res, next);\n  }\n});\n\n// Start the Express server\nserver.listen(userPreset.grafserv?.port ?? 5678);\n')))}m.isMDXComponent=!0}}]);