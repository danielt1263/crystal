"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[807],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7896),a=(n(2784),n(30876));const o={sidebar_position:8},l="Computed columns",i={unversionedId:"examples/computed-columns",id:"version-4.x/examples/computed-columns",title:"Computed columns",description:"Below, you'll find the result of running various GraphQL queries against the",source:"@site/versioned_docs/version-4.x/examples/computed-columns.md",sourceDirName:"examples",slug:"/examples/computed-columns",permalink:"/postgraphile/current/examples/computed-columns",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/versioned_docs/version-4.x/examples/computed-columns.md",tags:[],version:"4.x",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docs",previous:{title:"Custom mutations",permalink:"/postgraphile/current/examples/custom-mutations"},next:{title:"Usage",permalink:"/postgraphile/current/usage"}},p={},s=[{value:"Topic summary",id:"topic-summary",level:2},{value:"Topic summary with argument",id:"topic-summary-with-argument",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"computed-columns"},"Computed columns"),(0,a.kt)("p",null,"Below, you'll find the result of running various GraphQL queries against the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphile/examples/tree/master/db"},"examples repo schema"),".\nThis is intended to be an introduction and quick reference, for full information\nplease use the documentation links."),(0,a.kt)("p",null,"Please be aware that these examples use the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphile-contrib/pg-simplify-inflector"},"@graphile-contrib/pg-simplify-inflector"),"\nplugin to simplify the field names over the defaults."),(0,a.kt)("h2",{id:"topic-summary"},"Topic summary"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  topic(id: 2) {\n    body\n    bodySummary\n  }\n}\n")),(0,a.kt)("p",null,"Generated with SQL like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"create function app_public.topics_body_summary(\n  t app_public.topics,\n  max_length int = 30\n)\nreturns text\nlanguage sql stable\nas $$\n  select case\n    when length(t.body) > max_length\n    then left(t.body, max_length - 3) || '...'\n    else t.body\n    end;\n$$;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "topic": {\n    "body": "PostGraphile is a powerful, idomatic, and elegant tool.",\n    "bodySummary": "PostGraphile is a powerful,..."\n  }\n}\n')),(0,a.kt)("h2",{id:"topic-summary-with-argument"},"Topic summary with argument"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  topic(id: 2) {\n    body\n    bodySummary(maxLength: 20)\n  }\n}\n")),(0,a.kt)("p",null,"Generated with SQL like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"create function app_public.topics_body_summary(\n  t app_public.topics,\n  max_length int = 30\n)\nreturns text\nlanguage sql stable\nas $$\n  select case\n    when length(t.body) > max_length\n    then left(t.body, max_length - 3)\n           || '...'\n    else t.body\n    end;\n$$;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "topic": {\n    "body": "PostGraphile is a powerful, idomatic, and elegant tool.",\n    "bodySummary": "PostGraphile is a..."\n  }\n}\n')))}m.isMDXComponent=!0}}]);