"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[3906],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7896),o=(r(2784),r(30876));const a={sidebar_position:7},s="Custom mutations",i={unversionedId:"examples/custom-mutations",id:"version-4.x/examples/custom-mutations",title:"Custom mutations",description:"Below, you'll find the result of running various GraphQL queries against the",source:"@site/versioned_docs/version-4.x/examples/custom-mutations.md",sourceDirName:"examples",slug:"/examples/custom-mutations",permalink:"/postgraphile/current/examples/custom-mutations",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/versioned_docs/version-4.x/examples/custom-mutations.md",tags:[],version:"4.x",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"Custom queries",permalink:"/postgraphile/current/examples/custom-queries"},next:{title:"Computed columns",permalink:"/postgraphile/current/examples/computed-columns"}},l={},p=[{value:"Forgot password",id:"forgot-password",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-mutations"},"Custom mutations"),(0,o.kt)("p",null,"Below, you'll find the result of running various GraphQL queries against the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphile/examples/tree/master/db"},"examples repo schema"),".\nThis is intended to be an introduction and quick reference, for full information\nplease use the documentation links."),(0,o.kt)("p",null,"Please be aware that these examples use the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphile-contrib/pg-simplify-inflector"},"@graphile-contrib/pg-simplify-inflector"),"\nplugin to simplify the field names over the defaults."),(0,o.kt)("h2",{id:"forgot-password"},"Forgot password"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  forgotPassword(input: { email: "benjie@example.com" }) {\n    success\n  }\n}\n')),(0,o.kt)("p",null,"Generated with SQL like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create function forgot_password(email text)\nreturns boolean\nlanguage plpgsql volatile\nas $$\n  ...\n$$;\n-- Optionally rename the result field:\ncomment on function\n  forgot_password(email text)\n  is '@resultFieldName success';\n\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "forgotPassword": {\n    "success": true\n  }\n}\n')))}m.isMDXComponent=!0}}]);