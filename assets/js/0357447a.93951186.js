"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[1418],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7896),a=(r(2784),r(30876));const o={layout:"page",path:"/postgraphile/best-practices/",title:"PostGraphile best practices"},i=void 0,l={unversionedId:"best-practices",id:"version-4.x/best-practices",title:"PostGraphile best practices",description:"This guide is a work in progress. If you have ideas for best practices, please",source:"@site/versioned_docs/version-4.x/best-practices.md",sourceDirName:".",slug:"/best-practices",permalink:"/postgraphile/current/best-practices",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/versioned_docs/version-4.x/best-practices.md",tags:[],version:"4.x",frontMatter:{layout:"page",path:"/postgraphile/best-practices/",title:"PostGraphile best practices"},sidebar:"docs",previous:{title:"Evaluating",permalink:"/postgraphile/current/evaluating"},next:{title:"Production Considerations",permalink:"/postgraphile/current/production"}},s={},p=[{value:"Foreign Key Indexes",id:"foreign-key-indexes",level:3},{value:"Row Level Security",id:"row-level-security",level:3},{value:"Use Table GRANT for SELECT/DELETE and Column GRANT for INSERT/UPDATE",id:"use-table-grant-for-selectdelete-and-column-grant-for-insertupdate",level:3},{value:"Simplify Your GraphQL Field Names",id:"simplify-your-graphql-field-names",level:3},{value:"Enable the PostGraphile Recommended Options",id:"enable-the-postgraphile-recommended-options",level:3},{value:"Protect Your API",id:"protect-your-api",level:3},{value:"Use <code>LANGUAGE sql</code> Over <code>LANGUAGE plpgsql</code> Where Possible",id:"use-language-sql-over-language-plpgsql-where-possible",level:3},{value:"Name Triggers With A Numeric Prefix",id:"name-triggers-with-a-numeric-prefix",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'This guide is a work in progress. If you have ideas for best practices, please\nuse the "Suggest improvements to this page" link above to submit them, or\ndiscuss them in #documentation on\n',(0,a.kt)("a",{parentName:"p",href:"http://discord.gg/graphile"},"the PostGraphile Discord chat"),"."),(0,a.kt)("h3",{id:"foreign-key-indexes"},"Foreign Key Indexes"),(0,a.kt)("p",null,"PostgreSQL does ",(0,a.kt)("em",{parentName:"p"},"NOT")," add indexes to foreign keys by default. This isn't an\nissue for the forward relation (",(0,a.kt)("inlineCode",{parentName:"p"},"user_id")," \u2192 user), but for the reverse relation\n(user \u2192 things by ",(0,a.kt)("inlineCode",{parentName:"p"},"user_id"),") it can make the lookup very expensive. Always add\nindexes to your foreign keys."),(0,a.kt)("h3",{id:"row-level-security"},"Row Level Security"),(0,a.kt)("p",null,"If you're using RLS, it's best to enable it on every table in your database. You\nshould at least enable it on every table in your exposed schemas."),(0,a.kt)("h3",{id:"use-table-grant-for-selectdelete-and-column-grant-for-insertupdate"},"Use Table GRANT for SELECT/DELETE and Column GRANT for INSERT/UPDATE"),(0,a.kt)("p",null,"The following are fine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u2705 Fine\nGRANT SELECT ON users TO graphql_role;\n-- \u2705 Fine\nGRANT INSERT (column_1, column_2, ...) ON users TO graphql_role;\n-- \u2705 Fine\nGRANT UPDATE (column_a, column_b, ...) ON users TO graphql_role;\n-- \u2705 Fine\nGRANT DELETE ON users TO graphql_role;\n")),(0,a.kt)("p",null,"The following should be avoided:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \ud83d\uded1 DO NOT USE\nGRANT SELECT (column_a, column_b) ON users TO graphql_role;\n-- \ud83d\uded1 DO NOT USE\nGRANT INSERT ON users TO graphql_role;\n-- \ud83d\uded1 DO NOT USE\nGRANT UPDATE ON users TO graphql_role;\n")),(0,a.kt)("p",null,"Column-level SELECT grants\n",(0,a.kt)("a",{parentName:"p",href:"./requirements/#dont-use-column-based-select-grants"},"cause a lot of issues"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reduces the number of optimisations we can do"),(0,a.kt)("li",{parentName:"ul"},"Cannot ",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT * FROM")),(0,a.kt)("li",{parentName:"ul"},"Cannot use ",(0,a.kt)("inlineCode",{parentName:"li"},"RETURNING *")," (e.g. what we do in CRUD operations currently)"),(0,a.kt)("li",{parentName:"ul"},"Cannot pass a row type into a function (like we do for computed columns)")),(0,a.kt)("p",null,"Table-level INSERT/UPDATE grants are not advisable because they lack the\nexplicitness that should come from such operations."),(0,a.kt)("h3",{id:"simplify-your-graphql-field-names"},"Simplify Your GraphQL Field Names"),(0,a.kt)("p",null,"You can get a leg up on this\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphile-contrib/pg-simplify-inflector"},"using ",(0,a.kt)("inlineCode",{parentName:"a"},"@graphile-contrib/pg-simplify-inflector")),".\nThe long names PostGraphile uses by default are to try and avoid people getting\nnaming conflicts when they run PostGraphile for the first time. Once you're more\ncomfortable you should move to using shorter names as it's a GraphQL best\npractice."),(0,a.kt)("h3",{id:"enable-the-postgraphile-recommended-options"},"Enable the PostGraphile Recommended Options"),(0,a.kt)("p",null,"(Scan the docs for ",(0,a.kt)("inlineCode",{parentName:"p"},"[RECOMMENDED]"),", but take a moment to understand why they're\nrecommended and yet not enabled by default - they often require greater\nknowledge of PostGraphile and your database.)"),(0,a.kt)("h3",{id:"protect-your-api"},"Protect Your API"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"./production/"},"Production Considerations"),"."),(0,a.kt)("h3",{id:"use-language-sql-over-language-plpgsql-where-possible"},"Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"LANGUAGE sql")," Over ",(0,a.kt)("inlineCode",{parentName:"h3"},"LANGUAGE plpgsql")," Where Possible"),(0,a.kt)("p",null,"Performance reasons. Specifically, under many circumstances, functions in ",(0,a.kt)("inlineCode",{parentName:"p"},"SQL"),"\n(but not ",(0,a.kt)("inlineCode",{parentName:"p"},"plpgsql"),") can be inlined into the call-site and are thereby\ntransparent to the query planner. The PostgreSQL docs\n",(0,a.kt)("a",{parentName:"p",href:"https://wiki.postgresql.org/wiki/Inlining_of_SQL_functions"},"have a lot more details"),"."),(0,a.kt)("h3",{id:"name-triggers-with-a-numeric-prefix"},"Name Triggers With A Numeric Prefix"),(0,a.kt)("p",null,"e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"_200_do_a_thing")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"_800_do_something_else")),(0,a.kt)("p",null,"Reason: triggers in PostgreSQL run in lexicographical order."))}d.isMDXComponent=!0}}]);