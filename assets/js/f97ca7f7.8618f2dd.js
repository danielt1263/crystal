"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[1757],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,m=u["".concat(p,".").concat(h)]||u[h]||f[h]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},46322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7896),o=(r(2784),r(30876));const i={layout:"page",path:"/postgraphile/introspection/",title:"Introspection?"},a=void 0,s={unversionedId:"introspection",id:"version-4.x/introspection",title:"Introspection?",description:"PostgreSQL has a powerful introspection API which allows us to ask it all about",source:"@site/versioned_docs/version-4.x/introspection.md",sourceDirName:".",slug:"/introspection",permalink:"/postgraphile/current/introspection",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/versioned_docs/version-4.x/introspection.md",tags:[],version:"4.x",frontMatter:{layout:"page",path:"/postgraphile/introspection/",title:"Introspection?"},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/postgraphile/current/code-of-conduct"},next:{title:"Why is it nullable?",permalink:"/postgraphile/current/why-nullable"}},p={},c=[],l={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"PostgreSQL has a powerful introspection API which allows us to ask it all about\na database - what schemas, tables, columns, constraints, indexes, functions,\ncomments, etc it has - and we use this information to construct the GraphQL\nschema automatically. You provide the list of schemas to inspect via the\n",(0,o.kt)("inlineCode",{parentName:"p"},"pgSchemas")," setting, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'pgSchemas: ["public"]'),"."),(0,o.kt)("p",null,"If you're interested to see how we do this, the introspection query can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphile/graphile-engine/blob/master/packages/graphile-build-pg/src/plugins/introspectionQuery.ts"},"in our GitHub"),"."))}f.isMDXComponent=!0}}]);