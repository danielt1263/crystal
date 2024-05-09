"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[2138],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),f=a,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={layout:"page",path:"/postgraphile/connections/",title:"Connections"},i=void 0,s={unversionedId:"connections",id:"connections",title:"Connections",description:"When a GraphQL field is expected to return a large list of database records, we",source:"@site/postgraphile/connections.md",sourceDirName:".",slug:"/connections",permalink:"/postgraphile/next/connections",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/connections.md",tags:[],version:"current",frontMatter:{layout:"page",path:"/postgraphile/connections/",title:"Connections"},sidebar:"docs",previous:{title:"Relations",permalink:"/postgraphile/next/relations"},next:{title:"Filtering",permalink:"/postgraphile/next/filtering"}},l={},c=[{value:"Advice",id:"advice",level:3},{value:"Benchmarking",id:"benchmarking",level:3}],p={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a GraphQL field is expected to return a large list of database records, we\ntypically implement a connection adhering to the\n",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/relay/graphql/connections.htm"},"GraphQL Cursor Connections Specification"),"\n(with a few enhancements). This connection allows you to perform cursor-based\npagination with ease, and is seen as a GraphQL best practice because it leaves\nspace for you to neatly expand your schema with additional functionality, for\nexample adding aggregation support across the connection or exposing join-table\nfields via the connection edges."),(0,a.kt)("p",null,"The enhancements that we apply on top of Relay's connection spec include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"totalCount")," - the total number of records matching the query (excluding\ncursor/limit/offset constraints); note that this does ",(0,a.kt)("inlineCode",{parentName:"li"},"count(*)")," and thus has a\nperformance overhead"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodes")," - just the nodes (no ",(0,a.kt)("inlineCode",{parentName:"li"},"edge")," wrapper) useful if you don't need the\ncursor for every entry and want a simple data structure"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PageInfo.startCursor")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"PageInfo.endCursor")," - useful for pagination if you\nuse ",(0,a.kt)("inlineCode",{parentName:"li"},"nodes { ... }")," rather than ",(0,a.kt)("inlineCode",{parentName:"li"},"edges { cursor, node { ... } }"))),(0,a.kt)("p",null,"Many connections (specifically those coming from tables, views and relations)\nsupport ",(0,a.kt)("a",{parentName:"p",href:"./filtering/"},"filtering")," the return results with a conditon."),(0,a.kt)("h3",{id:"advice"},"Advice"),(0,a.kt)("p",null,'Connections are a bit more complex than lists and thus have a performance\noverhead. This is generally a justified trade-off in that it gives you more\nfuture flexibility (meaning you can stick to GraphQL\'s "versionless schema"\nideal) and a feature that regular pagination cannot give you (namely cursor\npagination, which is highly effective in infinite scrolling contexts where the\nunderlying data is constantly being added to, such as news feeds). However, if\nperformance is critical to you or if you prefer simple lists over GraphQL\nconnections then you can use ',(0,a.kt)("a",{parentName:"p",href:"/postgraphile/next/behavior"},"behaviors")," to configure your\npreferences. To enable lists and disable connections, you might add something\nlike this to your preset:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="graphile.config.mjs"',title:'"graphile.config.mjs"'},'const preset = {\n  schema: {\n    defaultBehavior: "-connection +list",\n  },\n};\n')),(0,a.kt)("p",null,"You can also enable both with ",(0,a.kt)("inlineCode",{parentName:"p"},"+connection +list"),". You can even configure this\non a per-entity basis with ",(0,a.kt)("a",{parentName:"p",href:"/postgraphile/next/smart-tags#behavior"},"smart tags")," if you like!"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"If you're comparing the performance of two GraphQL servers be sure to make sure\nthe comparison is fair by using either lists on both or connections on both.\nYou can have PostGraphile generate lists rather than connections by using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"defaultBehavior")," setting detailed in the advice above."),(0,a.kt)("p",null,"If you read a research paper comparing performance of different GraphQL servers\nand they don't ensure basic equivalence by using either lists on both or\nconnections on both then the results of that research are questionable at best.\nWe advise that you don't base any decisions on such low effort research."),(0,a.kt)("p",null,"Should you wish to do a fair comparison between PostGraphile and any other\nsoftware feel free to reach out for advice on how to make the PostGraphile\nschema as similar as possible to the target schema. PostGraphile is highly\nconfigurable and although it uses best practices such as connections by default\nyou can easily change settings to match other offerings which may have defaults\nthat prioritize performance or simplicity over GraphQL best practices."))}u.isMDXComponent=!0}}]);