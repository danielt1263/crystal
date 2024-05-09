"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[2329],{30876:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(7896),r=(t(2784),t(30876));const l={layout:"page",path:"/postgraphile/enums/",title:"Enums"},i=void 0,o={unversionedId:"enums",id:"enums",title:"Enums",description:"PostGraphile will automatically map PostgreSQL enums into GraphQL enums; they'll",source:"@site/postgraphile/enums.md",sourceDirName:".",slug:"/enums",permalink:"/postgraphile/next/enums",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/enums.md",tags:[],version:"current",frontMatter:{layout:"page",path:"/postgraphile/enums/",title:"Enums"},sidebar:"docs",previous:{title:"Database Function Gallery",permalink:"/postgraphile/next/function-gallery"},next:{title:"Views",permalink:"/postgraphile/next/views"}},s={},p=[{value:"Enum tables",id:"enum-tables",level:3},{value:"With makeExtendSchemaPlugin",id:"with-makeextendschemaplugin",level:3},{value:"Other ways",id:"other-ways",level:3}],m={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"PostGraphile will automatically map PostgreSQL enums into GraphQL enums; they'll\nbe automatically renamed in order to make sure they conform to the GraphQL\nnaming requirements and conventions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create type animal_type as enum (\n  'CAT',\n  'DOG',\n  'FISH'\n);\ncreate table pets (\n  id serial primary key,\n  type animal_type not null,\n  name text not null\n);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@enum")," smart comments can be used to set the name (",(0,r.kt)("inlineCode",{parentName:"p"},"@enumName"),") or the\ndescription (",(0,r.kt)("inlineCode",{parentName:"p"},"@enumDescription"),") of PostgreSQL enums."),(0,r.kt)("p",null,"e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"COMMENT ON TYPE animal_type IS E'@enum\\n@enumName TypeOfAnimal';\n")),(0,r.kt)("p",null,"Sometimes people prefer not to use PostgreSQL enums due to their technical\nlimitations (e.g. you can never drop a value from a PostgreSQL enum, and you\ncannot add a value to it within a transaction). There are other ways to add\nenums to PostGraphile:"),(0,r.kt)("h3",{id:"enum-tables"},"Enum tables"),(0,r.kt)("p",null,"We can leverage PostgreSQL's foreign key relations to enforce that a value is\ncontained within a small set, defined by the values in some other table. To use\nthis feature, we must have a table in which to contain our enums, and we must\ntell PostGraphile that it is an enum table using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@enum")," ",(0,r.kt)("a",{parentName:"p",href:"./smart-tags/"},"smart\ntag"),". You may also include a column named 'description' to\nprovide the description for the enum value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table animal_type (\n  type text primary key,\n  description text\n);\ncomment on table animal_type is E'@enum';\ninsert into animal_type (type, description) values\n  ('CAT', 'A feline animal'),\n  ('DOG', 'A canine animal'),\n  ('FISH', 'An aquatic animal');\n\ncreate table pets (\n  id serial primary key,\n  type text not null references animal_type,\n  name text not null\n);\n")),(0,r.kt)("p",null,"We also support the ",(0,r.kt)("inlineCode",{parentName:"p"},"@enum")," smart tag on unique constraints (not indexes) so\nyou could use a single table to contain all your enums should you wish. We do\nnot recommend this specific pattern, but it's sometimes used in the ecosystem."),(0,r.kt)("p",null,"Should you wish to use a column other than ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," for the description of\nthe enum, put the smart comment ",(0,r.kt)("inlineCode",{parentName:"p"},"@enumDescription")," on the desired column."),(0,r.kt)("p",null,"To set the name of the resulting enum, you may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@enumName")," smart\ncomment, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"comment on table animal_type is E'@enum\\n@enumName TypeOfAnimal';\n")),(0,r.kt)("p",null,"The name must conform to the GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," restrictions."),(0,r.kt)("h3",{id:"with-makeextendschemaplugin"},"With makeExtendSchemaPlugin"),(0,r.kt)("p",null,"Use the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," GraphQL interface definition language (IDL/SDL) to\ndefine your enum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { constant } from "postgraphile/grafast";\nimport { gql, makeExtendSchemaPlugin } from "postgraphile/utils";\n\nconst myPlugin = makeExtendSchemaPlugin(() => ({\n  typeDefs: gql`\n    enum AnimalType {\n      """\n      A feline animal\n      """\n      CAT\n\n      """\n      A canine animal\n      """\n      DOG\n\n      """\n      An aquatic animal\n      """\n      FISH\n    }\n\n    extend type Pet {\n      type: AnimalType!\n    }\n  `,\n  plans: {\n    AnimalType: {\n      CAT: "cat",\n      DOG: "dog",\n      FISH: "fish",\n    },\n    Pet: {\n      type() {\n        /* TODO: add logic here */\n        return constant("cat");\n      },\n    },\n  },\n}));\n')),(0,r.kt)("h3",{id:"other-ways"},"Other ways"),(0,r.kt)("p",null,"You can also use the underlying Graphile Build API to add a new\n",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLEnumType"),"."))}c.isMDXComponent=!0}}]);