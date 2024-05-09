"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[7982],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={layout:"page",path:"/postgraphile/views/",title:"Views"},s=void 0,o={unversionedId:"views",id:"views",title:"Views",description:"Views are a great solution for abstraction. PostGraphile supports reading from",source:"@site/postgraphile/views.md",sourceDirName:".",slug:"/views",permalink:"/postgraphile/next/views",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/views.md",tags:[],version:"current",frontMatter:{layout:"page",path:"/postgraphile/views/",title:"Views"},sidebar:"docs",previous:{title:"Enums",permalink:"/postgraphile/next/enums"},next:{title:"Polymorphism",permalink:"/postgraphile/next/polymorphism"}},l={},p=[{value:"Abstract Business Logic",id:"abstract-business-logic",level:3},{value:"Flatten joined tables",id:"flatten-joined-tables",level:3},{value:"Authorization",id:"authorization",level:3},{value:"API Layer",id:"api-layer",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Views are a great solution for abstraction. PostGraphile supports reading from\nand writing to views; however PostgreSQL lacks the powerful introspection\ncapabilities on views that it has on tables, so we cannot easily automatically\ninfer the relations. However, you can\n",(0,a.kt)("a",{parentName:"p",href:"./smart-tags/#virtual-constraints"},'use our "smart tags" functionality to add constraints to views'),"\nwhich will make them a lot more table-like (giving them a primary key so you can\nget a ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeId")," and maybe CRUD mutations; adding foreign key references between views and other views or\ntables; setting columns as non-null)."),(0,a.kt)("h3",{id:"abstract-business-logic"},"Abstract Business Logic"),(0,a.kt)("p",null,"We can prepare certain queries in advance and expose the results through\nGraphQL. For example, say we want just the ",(0,a.kt)("inlineCode",{parentName:"p"},"Comedy")," films from our ",(0,a.kt)("inlineCode",{parentName:"p"},"films"),"\ntable, we can create a view that contains this specific film type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE app_public.films (\n  id serial PRIMARY KEY,\n  name text,\n  release_year int,\n  kind text\n);\n\nCREATE VIEW comedies AS\n    SELECT *\n    FROM app_public.films\n    WHERE kind = 'Comedy';\n")),(0,a.kt)("p",null,"And query this view as if it were a normal table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  comedies(first: 20) {\n    name\n    releaseYear\n  }\n}\n")),(0,a.kt)("h3",{id:"flatten-joined-tables"},"Flatten joined tables"),(0,a.kt)("p",null,'Views enable you to expose a simple "flattened" object built from multiple\ntables.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE app_public.person (\n  id serial PRIMARY KEY\n);\n\nCREATE TABLE app_public.address (\n  person_id int PRIMARY KEY REFERENCES app_public.person,\n  country text,\n  street text,\n);\n\nCREATE VIEW person_view AS\n  SELECT person.id, address.country, address.street\n  FROM app_public.person person\n  INNER JOIN app_public.address\n  ON person.id = address.person_id;\n")),(0,a.kt)("p",null,"The GraphQL query using this view is flatter than the query using the underlying\ntables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query Before {\n  person {\n    id\n    address {\n      country\n      street\n    }\n  }\n}\n\nquery After {\n  personView {\n    id\n    country\n    street\n  }\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can use ",(0,a.kt)("a",{parentName:"p",href:"./smart-tags/"},"smart tags")," to change the GraphQL\nfield name.")),(0,a.kt)("h3",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"Authorization can be enforced using ",(0,a.kt)("inlineCode",{parentName:"p"},"views")," as well, for example, exposing some\ndata only to authenticated users:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE app_public.person (\n  id serial PRIMARY KEY\n);\n\nCREATE TABLE app_public.personal_data (\n  id serial PRIMARY KEY,\n  secret1 text,\n  secret2 int,\n  person_id references app_public.person (id)\n);\n\nCREATE VIEW personal_data_view\n  WITH (security_barrier, check_option = 'cascaded')\n  AS\n    SELECT personal_data.*\n    FROM app_public.personal_data personal_data\n    WHERE person_id = current_user_id()\n")),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"current_user_id()")," here is a function that might return something like\n",(0,a.kt)("inlineCode",{parentName:"p"},"nullif(current_setting('jwt.claims.user_id', true), '')::int"),")"),(0,a.kt)("h3",{id:"api-layer"},"API Layer"),(0,a.kt)("p",null,"Using views, one can create an access layer that will remain consistent even\nwhile making changes to the underlying tables - for example when splitting\ntables or combining them. Note that simple name changes can be solved using\nsmart tags without the need for views. Much of what can be achieved with views\ncan also be achieved with functions or plugins, so consider those options too."))}d.isMDXComponent=!0}}]);