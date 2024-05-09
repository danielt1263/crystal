"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[1859],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={layout:"page",path:"/postgraphile/tables/",title:"PostgreSQL Tables"},l=void 0,o={unversionedId:"tables",id:"version-4.x/tables",title:"PostgreSQL Tables",description:"PostGraphile automatically adds a number of elements to the generated GraphQL",source:"@site/versioned_docs/version-4.x/tables.md",sourceDirName:".",slug:"/tables",permalink:"/postgraphile/current/tables",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/versioned_docs/version-4.x/tables.md",tags:[],version:"4.x",frontMatter:{layout:"page",path:"/postgraphile/tables/",title:"PostgreSQL Tables"},sidebar:"docs",previous:{title:"Inflection",permalink:"/postgraphile/current/inflection"},next:{title:"Relations",permalink:"/postgraphile/current/relations"}},s={},p=[{value:"Permissions",id:"permissions",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"PostGraphile automatically adds a number of elements to the generated GraphQL\nschema based on the tables and columns found in the inspected schema."),(0,r.kt)("p",null,"An example of a PostgreSQL table is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE app_public.users (\n  id serial PRIMARY KEY,\n  username citext NOT NULL unique,\n  name text NOT NULL,\n  about text,\n  organization_id int NOT NULL\n    REFERENCES app_public.organizations ON DELETE CASCADE,\n  is_admin boolean NOT NULL DEFAULT false,\n  created_at timestamptz NOT NULL DEFAULT now(),\n  updated_at timestamptz NOT NULL DEFAULT now()\n);\n")),(0,r.kt)("p",null,"For a table like this, PostGraphile will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a GraphQL type, ",(0,r.kt)("inlineCode",{parentName:"li"},"User"),", for the table, named in UpperCamelCase &\nsingularized\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphile/graphile-engine/blob/f332cb11fc32c7b50428c8d19d88121ead00d95d/packages/graphile-build-pg/src/plugins/PgBasicsPlugin.js#L485-L487"},"inflector: ",(0,r.kt)("inlineCode",{parentName:"a"},"tableType")),").",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add fields to this type for the columns (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"username"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"about"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"organizationId"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"isAdmin"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"createdAt"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"updatedAt"),"), named in camelCase\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphile/graphile-engine/blob/f332cb11fc32c7b50428c8d19d88121ead00d95d/packages/graphile-build-pg/src/plugins/PgBasicsPlugin.js#L488-L490"},"inflector: ",(0,r.kt)("inlineCode",{parentName:"a"},"tableType")),")."),(0,r.kt)("li",{parentName:"ul"},"Add a ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeId")," ",(0,r.kt)("a",{parentName:"li",href:"./node-id/"},"globally unique identifier")," field if the table\nhas a primary key."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"./relations/"},"fields for the relevant relations")," (e.g.\n",(0,r.kt)("inlineCode",{parentName:"li"},"organizationByOrganizationId"),"*",")."))),(0,r.kt)("li",{parentName:"ul"},"Add to related table types:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reverse ",(0,r.kt)("a",{parentName:"li",href:"./relations/"},"relations for each forward relation")," (e.g.\n",(0,r.kt)("inlineCode",{parentName:"li"},"Organization.usersByOrganizationId"),"*",")."))),(0,r.kt)("li",{parentName:"ul"},"Add to the root ",(0,r.kt)("inlineCode",{parentName:"li"},"Query")," type:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query implements Node {\n  allUsers(\n    first: Int\n    last: Int\n    offset: Int\n    before: Cursor\n    after: Cursor\n    orderBy: [UsersOrderBy!] = [PRIMARY_KEY_ASC]\n    condition: UserCondition\n  ): UsersConnection\n\n  userById(id: Int!): User\n\n  userByUsername(username: String!): User\n\n  user(nodeId: ID!): User\n}\n")),(0,r.kt)("p",null,"--\x3e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"allUsers")," ",(0,r.kt)("a",{parentName:"li",href:"./connections/"},"connection")," field with pagination, filtering,\nand ordering (inflector: ",(0,r.kt)("inlineCode",{parentName:"li"},"allRows"),")"),(0,r.kt)("li",{parentName:"ul"},"A number of ",(0,r.kt)("inlineCode",{parentName:"li"},"userByKey(key: ...)")," fields (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"userById"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"userByUsername"),"),\none for each of the unique constraints on the table (inflector:\n",(0,r.kt)("inlineCode",{parentName:"li"},"rowByUniqueKeys"),")"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"foo(nodeId: ID!)")," field to get the row by its ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeId")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"./crud-mutations/"},"CRUD Mutations")," to the root ",(0,r.kt)("inlineCode",{parentName:"li"},"Mutation")," type")),(0,r.kt)("p",null,"*"," Remember these fields can be simplified by loading the\n",(0,r.kt)("inlineCode",{parentName:"p"},"@graphile-contrib/pg-simplify-inflector")," plugin."),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"./relations/"},"relations"),", ",(0,r.kt)("a",{parentName:"p",href:"./connections/"},"connections"),",\n",(0,r.kt)("a",{parentName:"p",href:"./filtering/"},"filtering")," and ",(0,r.kt)("a",{parentName:"p",href:"./crud-mutations/"},"CRUD Mutations"),"."),(0,r.kt)("h3",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-ignore-rbac")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreRBAC: false")," (highly recommended)\nthen PostGraphile will only expose the tables/columns/fields you have access to.\nFor example if you perform\n",(0,r.kt)("inlineCode",{parentName:"p"},"GRANT UPDATE (username, name) ON users TO graphql_visitor;")," then the\n",(0,r.kt)("inlineCode",{parentName:"p"},"updateUser")," mutations will only accept ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," fields - the other\ncolumns will not be present."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-ignore-rbac")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreRBAC: false")," in the library)\ninspects the RBAC (GRANT / REVOKE) privileges in the database and reflects these\nin your GraphQL schema. As is GraphQL best practices, this still only results in\none GraphQL schema (not one per user), so it takes the user account you connect\nto PostgreSQL with (from your connection string) and walks all the roles that\nthis user can become within the database, and uses the union of all these\npermissions. Using this flag is recommended, as it results in a much leaner\nschema that doesn't contain functionality that you can't actually use."),(0,r.kt)("p",null,"*"," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE: We strongly ",(0,r.kt)("a",{parentName:"em",href:"./requirements/"},"advise against")," using column-based\n",(0,r.kt)("inlineCode",{parentName:"em"},"SELECT")," grants with PostGraphile. Instead, split your permission concerns into\nseparate tables and join them with one-to-one relations."))))}m.isMDXComponent=!0}}]);