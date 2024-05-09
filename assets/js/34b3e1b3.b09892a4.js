"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[7177],{30876:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var a=o(2784);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),d=r,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||n;return o?a.createElement(m,i(i({ref:t},p),{},{components:o})):a.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7301:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=o(7896),r=(o(2784),o(30876));const n={layout:"page",path:"/postgraphile/evaluating/",title:"Evaluating",fullTitle:"Evaluating PostGraphile For Your Project"},i=void 0,s={unversionedId:"evaluating",id:"version-4.x/evaluating",title:"Evaluating",description:"Hopefully you\u2019ve been convinced that PostGraphile serves an awesome GraphQL API,",source:"@site/versioned_docs/version-4.x/evaluating.md",sourceDirName:".",slug:"/evaluating",permalink:"/postgraphile/current/evaluating",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/versioned_docs/version-4.x/evaluating.md",tags:[],version:"4.x",frontMatter:{layout:"page",path:"/postgraphile/evaluating/",title:"Evaluating",fullTitle:"Evaluating PostGraphile For Your Project"},sidebar:"docs",previous:{title:"PostgreSQL Schema Design",permalink:"/postgraphile/current/postgresql-schema-design"},next:{title:"PostGraphile best practices",permalink:"/postgraphile/current/best-practices"}},l={},u=[{value:"No Lock-In",id:"no-lock-in",level:3},{value:"Schema Driven APIs",id:"schema-driven-apis",level:3}],p={toc:u},c="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hopefully you\u2019ve been convinced that PostGraphile serves an awesome GraphQL API,\nbut now let\u2019s take a more critical look at whether or not you should adopt\nPostGraphile for your project."),(0,r.kt)("p",null,"PostGraphile\u2019s audience is for people who want to prioritize their product.\nPostGraphile allows you to define your content model in the database as you\nnormally would, however instead of building the bindings to the database (your\nAPI) PostGraphile takes care of it."),(0,r.kt)("p",null,"This takes a huge maintenance burden off your shoulders. Now you don\u2019t have to\nworry about optimizing the API and the database, instead you can focus on just\noptimizing your database. Scaling a database is well-understood - and you can\ncombine techniques - scaling vertically with larger database servers (more RAM,\nfaster storage), or horizontally with read replicas."),(0,r.kt)("h3",{id:"no-lock-in"},"No Lock-In"),(0,r.kt)("p",null,"PostGraphile does not lock you into using PostGraphile forever - in fact most of\nthe work you do implementing a PostGraphile API is in your database, which you\ncan take with you if you chose to move to a different system, so no work is\nlost. If you feel comfortable with the cost of building your API, PostGraphile\nis simple to switch with a custom solution - you can even export the GraphQL SDL\nPostGraphile builds for you so you just need to implement your own resolvers."),(0,r.kt)("p",null,"PostGraphile does not ask you to do anything too divergent with your PostgreSQL\nschema, allowing you to take your schema (and all your data) to whatever\nsolution you build next, and being confident that it was well designed - hand\nrolled by you! GraphQL itself provides a simple and clear deprecation path if\nyou want to start using different fields. And of course with Graphile Engine\nplugins you can extend (or remove) functionality as you wish."),(0,r.kt)("p",null,"Further, you can migrate away from PostGraphile bit by bit by placing a GraphQL\nproxy in front of it and redirecting certain resolvers to your new solution.\nThis enables you to move away from PostGraphile with zero downtime."),(0,r.kt)("p",null,"Ideally PostGraphile will scale with your company, however there is a simple\nexit path even years into the business. We welcome your contributions to help\nPostGraphile scale and meet your needs, and are very open to sponsored\nimprovements to the software."),(0,r.kt)("h3",{id:"schema-driven-apis"},"Schema Driven APIs"),(0,r.kt)("p",null,"If you fundamentally disagree with a one-to-one mapping of a SQL schema to an\nAPI (GraphQL or otherwise) this section is for you."),(0,r.kt)("p",null,"First of all, PostGraphile is not necessarily meant to be the be-all and end-all\nof your API. PostGraphile was created to allow you to focus on your product and\nnot the API. If you need to integrate external systems, there are plugin\ninterfaces to help you do that, and they're getting easier to use all the time.\nIf you want a custom API there is a simple transition path (read\n",(0,r.kt)("a",{parentName:"p",href:"#no-lock-in"},"no lock in"),"). If you still can\u2019t get over the one-to-one nature of\nPostGraphile consider the following arguments why putting your business logic in\nPostgreSQL is a good idea:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"PostgreSQL already has a powerful ",(0,r.kt)("a",{parentName:"li",href:"http://www.postgresql.org/docs/current/static/user-manag.html"},"user management system"),"\nwith fine grained ",(0,r.kt)("a",{parentName:"li",href:"http://www.postgresql.org/docs/current/static/ddl-rowsecurity.html"},"row level security"),". A custom API\nwould mean you have to build your own user management and security, and\nhaving to guarantee that every possible route to your database data is\nvetted by the same permissions logic (which PostgreSQL RLS does for you)."),(0,r.kt)("li",{parentName:"ol"},"PostgreSQL allows you to hide implementation details with ",(0,r.kt)("a",{parentName:"li",href:"http://www.postgresql.org/docs/current/static/sql-createview.html"},"views"),"\nof your data. Simple views can even be ",(0,r.kt)("a",{parentName:"li",href:"http://www.postgresql.org/docs/current/static/sql-createview.html#SQL-CREATEVIEW-UPDATABLE-VIEWS"},"auto-updatable"),".\nThis provides you with the same freedom and flexibility as you might want\nfrom a custom API except more performant."),(0,r.kt)("li",{parentName:"ol"},"PostgreSQL gives you automatic relations with the ",(0,r.kt)("inlineCode",{parentName:"li"},"REFERENCES")," constraint\nand PostGraphile ",(0,r.kt)("a",{parentName:"li",href:"./relations/"},"automatically detects them"),". With a custom\nAPI, you\u2019d need to hardcode these relationships, which can become quite a\nchore!"),(0,r.kt)("li",{parentName:"ol"},"For what it\u2019s worth, you can write in your favorite scripting language in\nPostgreSQL, including ",(0,r.kt)("a",{parentName:"li",href:"https://blog.heroku.com/archives/2013/6/5/javascript_in_your_postgres"},"JavaScript")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/knu/postgresql-plruby"},"Ruby"),"."),(0,r.kt)("li",{parentName:"ol"},"If you don\u2019t want to write your code inside PostgreSQL, you could also use\nPostgreSQL\u2019s ",(0,r.kt)("a",{parentName:"li",href:"http://www.postgresql.org/docs/current/static/sql-notify.html"},(0,r.kt)("inlineCode",{parentName:"a"},"NOTIFY"))," feature to fire events to a listening\nRuby or ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/pg-pubsub"},"JavaScript")," microservice (this could include email\ntransactions and event reporting), implement a job queue, or add a Graphile\nEngine plugin to wrap or replace a PostGraphile resolver.")),(0,r.kt)("p",null,"Still worried about a certain aspect of a schema driven API? Open an issue,\nwe're confident we can convince you otherwise \ud83d\ude09"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This article was originally written by\n",(0,r.kt)("a",{parentName:"em",href:"https://twitter.com/calebmer"},"Caleb Meredith"),".")))}h.isMDXComponent=!0}}]);