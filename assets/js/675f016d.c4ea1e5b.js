"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[8590],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(2784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7896),l=(n(2784),n(30876));const i={layout:"page",path:"/postgraphile/smart-tags/",title:"Smart Tags"},r=void 0,o={unversionedId:"smart-tags",id:"version-4.x/smart-tags",title:"Smart Tags",description:"You can customise your PostGraphile GraphQL schema by tagging tables, columns,",source:"@site/versioned_docs/version-4.x/smart-tags.md",sourceDirName:".",slug:"/smart-tags",permalink:"/postgraphile/current/smart-tags",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/versioned_docs/version-4.x/smart-tags.md",tags:[],version:"4.x",frontMatter:{layout:"page",path:"/postgraphile/smart-tags/",title:"Smart Tags"},sidebar:"docs",previous:{title:"Debugging",permalink:"/postgraphile/current/debugging"},next:{title:"The postgraphile.tags.json5 file",permalink:"/postgraphile/current/smart-tags-file"}},s={},m=[{value:"The @ character",id:"the--character",level:3},{value:"Valid values",id:"valid-values",level:3},{value:"Ways of adding tags",id:"ways-of-adding-tags",level:3},{value:"Example",id:"example",level:3},{value:"Built-in smart tags",id:"built-in-smart-tags",level:3},{value:"@deprecated",id:"deprecated",level:4},{value:"@hasDefault",id:"hasdefault",level:4},{value:"@name",id:"name",level:4},{value:"@fieldName",id:"fieldname",level:4},{value:"@foreignFieldName",id:"foreignfieldname",level:4},{value:"@resultFieldName",id:"resultfieldname",level:4},{value:"@omit",id:"omit",level:4},{value:"Example",id:"example-1",level:6},{value:"@sortable",id:"sortable",level:4},{value:"@filterable",id:"filterable",level:4},{value:"Sorting and filtering non-scalar computed columns",id:"sorting-and-filtering-non-scalar-computed-columns",level:5},{value:"@simpleCollections",id:"simplecollections",level:4},{value:"@arg0variant, @arg1variant, ...",id:"arg0variant-arg1variant-",level:4},{value:"Tags to add virtual constraint",id:"tags-to-add-virtual-constraint",level:4},{value:"@notNull",id:"notnull",level:5},{value:"@primaryKey",id:"primarykey",level:5},{value:"@foreignKey",id:"foreignkey",level:5},{value:"@unique",id:"unique",level:5},{value:"Smart Tags on virtual constraints",id:"smart-tags-on-virtual-constraints",level:5}],p={toc:m},u="wrapper";function d(e){let{components:t,...i}=e;return(0,l.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can customise your PostGraphile GraphQL schema by tagging tables, columns,\nfunctions, relations, etc. These changes could be renaming something, omitting\nthings from your GraphQL schema, or anything else a plugin supports!"),(0,l.kt)("p",null,'We call this functionality "Smart Tags" and it allows you to easily customise\nthe generated GraphQL schema without making breaking changes to your database.'),(0,l.kt)("p",null,"If you're using PostGraphile in ",(0,l.kt)("inlineCode",{parentName:"p"},"--watch")," mode, you should be able to see in\nPostGraphile's GraphiQL client that the related types and fields will reflect\nthe change almost immediately. If you're not using ",(0,l.kt)("inlineCode",{parentName:"p"},"--watch")," then you may need\nto restart the server for smart tag changes to take effect."),(0,l.kt)("h3",{id:"the--character"},"The @ character"),(0,l.kt)("p",null,"We often refer to things like the ",(0,l.kt)("inlineCode",{parentName:"p"},"@omit")," smart tag or the ",(0,l.kt)("inlineCode",{parentName:"p"},"@name")," smart tag;\nreally these tags are just ",(0,l.kt)("inlineCode",{parentName:"p"},"omit")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," respectively; but in the\n",(0,l.kt)("a",{parentName:"p",href:"./smart-comments/"},"Smart Comment")," syntax (the oldest form of smart tags in\nPostGraphile) the ",(0,l.kt)("inlineCode",{parentName:"p"},"@")," is required to denote a smart tag, and this pattern has\nstuck when referring to smart tags."),(0,l.kt)("p",null,"You will also often see the\n",(0,l.kt)("a",{parentName:"p",href:"./smart-comments/#smart-comment-spec"},"smart comment syntax")," used to refer to\nsmart tags in general, it's because the syntax is a little easier to write\nquickly. Read the ",(0,l.kt)("a",{parentName:"p",href:"./smart-comments/#smart-comment-spec"},"Smart Comments Spec"),"\nand you'll soon learn to translate ",(0,l.kt)("inlineCode",{parentName:"p"},"@omit update,delete")," to\n",(0,l.kt)("inlineCode",{parentName:"p"},'omit: "update,delete"')," (and vice-versa) in your head."),(0,l.kt)("h3",{id:"valid-values"},"Valid values"),(0,l.kt)("p",null,"Tags have a limited set of valid values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"a string"),(0,l.kt)("li",{parentName:"ul"},"an array of strings")),(0,l.kt)("p",null,"Some tags only support one or two of these types of values."),(0,l.kt)("h3",{id:"ways-of-adding-tags"},"Ways of adding tags"),(0,l.kt)("p",null,"There's multiple ways of adding tags to entities:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"./smart-tags-file/"},"postgraphile.tags.json5")," file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./smart-comments/"},"Smart Comments")," in the database via ",(0,l.kt)("inlineCode",{parentName:"li"},"COMMENT")),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("a",{parentName:"li",href:"./make-pg-smart-tags-plugin/"},(0,l.kt)("inlineCode",{parentName:"a"},"makePgSmartTagsPlugin"))," instance"),(0,l.kt)("li",{parentName:"ul"},"Your own custom ",(0,l.kt)("a",{parentName:"li",href:"./extending-raw/"},"Graphile Engine plugin"))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"In this example we're going to use Smart Comments for brevity, but this works\nwith all the ways of adding smart tags.")),(0,l.kt)("p",null,"Here is a basic table, with the name changed from ",(0,l.kt)("inlineCode",{parentName:"p"},"original_table")," to\n",(0,l.kt)("inlineCode",{parentName:"p"},"renamed_table"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table original_table (\n  col1 int\n);\n\ncomment on table original_table is E'@name renamed_table';\n")),(0,l.kt)("p",null,"The column can also be renamed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on column original_table.col1 is E'@name colA';\n")),(0,l.kt)("p",null,"The same can be done for types and custom queries:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create type flibble as (f text);\n\ncreate function getFlamble() returns SETOF flibble as $$\n    select (body)::flibble from post\n$$ language sql;\n\ncomment on type flibble is E'@name flamble';\ncomment on function getFlamble() is E'@name allFlambles';\n")),(0,l.kt)("p",null,"Smart comments are also reflected in GraphiQL. Here, we are querying the table\n",(0,l.kt)("inlineCode",{parentName:"p"},"original_table")," by looking at ",(0,l.kt)("inlineCode",{parentName:"p"},"allOriginalTables"),":"),(0,l.kt)("div",{class:"full-width"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GraphiQL displaying allOriginalTables",src:n(71805).Z,width:"973",height:"238"}))),(0,l.kt)("p",null,"Next, we add the smart comment ",(0,l.kt)("inlineCode",{parentName:"p"},"@name renamed_table")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"original_table")," and the\nrename is instantly reflected in GraphiQL:"),(0,l.kt)("div",{class:"full-width"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GraphiQL displaying the renamed allOriginalTables",src:n(63744).Z,width:"998",height:"249"}))),(0,l.kt)("p",null,"So now the query needs to use the new name for the table:"),(0,l.kt)("div",{class:"full-width"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GraphiQL displaying allRenamedTables",src:n(95366).Z,width:"993",height:"246"}))),(0,l.kt)("h3",{id:"built-in-smart-tags"},"Built-in smart tags"),(0,l.kt)("p",null,"Any plugin may implement support for smart tags, so refer to those plugins'\ndocumentation. The following are smart tags built into PostGraphile."),(0,l.kt)("h4",{id:"deprecated"},"@deprecated"),(0,l.kt)("p",null,"You can deprecate a database column using the ",(0,l.kt)("inlineCode",{parentName:"p"},"deprecated")," tag. If you need\nmultiple lines, you can specify the tag multiple times, one per line of output\ntext."),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"columns")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'attribute: {\n  my_column: {\n    tags: {\n      deprecated: "Use myOtherColumn instead."\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on column my_schema.my_table.my_column is\n  E'@deprecated Use myOtherColumn instead.';\n")),(0,l.kt)("h4",{id:"hasdefault"},"@hasDefault"),(0,l.kt)("p",null,"You can indicate that a column has a default - be that implemented via a\ntrigger, or maybe as an instead of insert rule - so the field will be nullable\nin create","*"," mutations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on column my_schema.my_table.my_column is E'@hasDefault';\n")),(0,l.kt)("h4",{id:"name"},"@name"),(0,l.kt)("p",null,"You can add a smart tag to an entity to rename that entity. For tables, columns,\ncustom types and many functions you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," tag. For more complex\nthings we use different tags, such as for foreign key constraints we have\n",(0,l.kt)("inlineCode",{parentName:"p"},"fieldName")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"foreignFieldName"),"."),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tables"),(0,l.kt)("li",{parentName:"ul"},"Views"),(0,l.kt)("li",{parentName:"ul"},"Materialized views"),(0,l.kt)("li",{parentName:"ul"},"Composite types (one direction only)"),(0,l.kt)("li",{parentName:"ul"},"Columns"),(0,l.kt)("li",{parentName:"ul"},"Types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./custom-queries/"},"Custom Query")," functions: the ",(0,l.kt)("inlineCode",{parentName:"li"},"Query")," field name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./custom-mutations/"},"Custom Mutation")," functions: the ",(0,l.kt)("inlineCode",{parentName:"li"},"Mutation")," field name")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'class: {\n  post: {\n    tags: {\n      name: "message"\n    }\n  }\n},\nprocedure: {\n  search_posts: {\n    tags: {\n      name: "returnPostsMatching"\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on table post is\n  E'@name message';\ncomment on function search_posts(text) is\n  E'@name returnPostsMatching';\n")),(0,l.kt)("h4",{id:"fieldname"},"@fieldName"),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"foreign key constraints: the local field name for the relationship (see also\n",(0,l.kt)("inlineCode",{parentName:"li"},"@foreignFieldName"),")"),(0,l.kt)("li",{parentName:"ul"},"unique constraints: the root finder field name"),(0,l.kt)("li",{parentName:"ul"},"computed column functions: the field name this function creates")),(0,l.kt)("h4",{id:"foreignfieldname"},"@foreignFieldName"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"foreignFieldName")," applies to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'foreign key constraints: the field on the remote type (the "backwards"\nrelation)')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'foreignFieldName: "threads",\nfieldName: "author"\n')),(0,l.kt)("p",null,"See also: ",(0,l.kt)("inlineCode",{parentName:"p"},"@fieldName")),(0,l.kt)("h4",{id:"resultfieldname"},"@resultFieldName"),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./custom-mutations/"},"Custom Mutation")," functions: the field on the mutation\npayload type")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'procedure: {\n  authenticate: {\n    tags: {\n      name: "login",\n      resultFieldName: "token",\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on function authenticate(text, text) is\n  E'@resultFieldName token\\n@name login';\n")),(0,l.kt)("h4",{id:"omit"},"@omit"),(0,l.kt)("p",null,"To remove an entity from your API, you can use the 'omit' smart tag. If you only\nwant to omit the entity from certain operations you can list them. For example,\n",(0,l.kt)("inlineCode",{parentName:"p"},"@omit update")," on a table would prevent the table from having an update-related\nfunctionality whilst still including queries, create and delete. ",(0,l.kt)("inlineCode",{parentName:"p"},"@omit update"),"\non a column would prevent the column appearing in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Patch")," type, so it cannot\nbe updated (but can still be created) via GraphQL."),(0,l.kt)("p",null,"Here's a quick-reference for the operations we currently support (you'll want to\nexperiment with them as there wasn't space to put all the caveats in the\ntable!):"),(0,l.kt)("div",{class:"big-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u2063"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Table effect"),(0,l.kt)("th",{parentName:"tr",align:null},"Column effect"),(0,l.kt)("th",{parentName:"tr",align:null},"Function effect"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"create"))),(0,l.kt)("td",{parentName:"tr",align:null},"omit ",(0,l.kt)("inlineCode",{parentName:"td"},"create")," mutation"),(0,l.kt)("td",{parentName:"tr",align:null},"omit from ",(0,l.kt)("inlineCode",{parentName:"td"},"create")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"R"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"read"))),(0,l.kt)("td",{parentName:"tr",align:null},"omit completely"),(0,l.kt)("td",{parentName:"tr",align:null},"completely omitted"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"U"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"update"))),(0,l.kt)("td",{parentName:"tr",align:null},"omit ",(0,l.kt)("inlineCode",{parentName:"td"},"update")," mutations"),(0,l.kt)("td",{parentName:"tr",align:null},"omit from ",(0,l.kt)("inlineCode",{parentName:"td"},"update")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"delete"))),(0,l.kt)("td",{parentName:"tr",align:null},"omit ",(0,l.kt)("inlineCode",{parentName:"td"},"delete")," mutations"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"filter"))),(0,l.kt)("td",{parentName:"tr",align:null},"omit ",(0,l.kt)("inlineCode",{parentName:"td"},"condition")," arg"),(0,l.kt)("td",{parentName:"tr",align:null},"omit from ",(0,l.kt)("inlineCode",{parentName:"td"},"condition")),(0,l.kt)("td",{parentName:"tr",align:null},"no filtering")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"O"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"order"))),(0,l.kt)("td",{parentName:"tr",align:null},"omit ",(0,l.kt)("inlineCode",{parentName:"td"},"orderBy")," arg"),(0,l.kt)("td",{parentName:"tr",align:null},"omit from ",(0,l.kt)("inlineCode",{parentName:"td"},"orderBy")),(0,l.kt)("td",{parentName:"tr",align:null},"no ordering")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"all"))),(0,l.kt)("td",{parentName:"tr",align:null},"no ",(0,l.kt)("inlineCode",{parentName:"td"},"allFoos")," query"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"many"))),(0,l.kt)("td",{parentName:"tr",align:null},"no foreign key fields"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"execute"))),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"function not present"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning:")," This functionality is not intended for implementing permissions,\nit's for removing things from your API that you don't need. You should back\nthese up with database permissions if needed.")),(0,l.kt)("p",null,"Multiple actions can be listed using commas (no spaces!), as in the following\nexample which disables mutations on a table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'class: {\n  table_name: {\n    tags: {\n      omit: "create,update,delete"\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on table table_name is E'@omit create,update,delete';\n")),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tables"),(0,l.kt)("li",{parentName:"ul"},"Views"),(0,l.kt)("li",{parentName:"ul"},"Materialized views"),(0,l.kt)("li",{parentName:"ul"},"Composite types (one direction only)"),(0,l.kt)("li",{parentName:"ul"},"Columns"),(0,l.kt)("li",{parentName:"ul"},"Custom Queries"),(0,l.kt)("li",{parentName:"ul"},"Custom Mutations"),(0,l.kt)("li",{parentName:"ul"},"Computed Columns"),(0,l.kt)("li",{parentName:"ul"},"Unique constraints"),(0,l.kt)("li",{parentName:"ul"},"Foreign key constraints")),(0,l.kt)("h6",{id:"example-1"},"Example"),(0,l.kt)("p",null,"On a simple table called ",(0,l.kt)("inlineCode",{parentName:"p"},"book")," we have added a smart comment omitting the\n",(0,l.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," operations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table forum_example.book (\n  col1 int\n);\n\ncomment on table forum_example.book is E'@omit update,delete';\n")),(0,l.kt)("p",null,"The results are immediately reflected in GraphiQL. We can also disable ",(0,l.kt)("inlineCode",{parentName:"p"},"create"),"\noperations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on table forum_example.book is E'@omit create,update,delete';\n")),(0,l.kt)("p",null,"On the left, you can see the documentation for all the fields and types\nregarding ",(0,l.kt)("inlineCode",{parentName:"p"},"book")," before the ",(0,l.kt)("inlineCode",{parentName:"p"},"create")," operation was omitted. On the right, you\ncan see the reduced fields and types once the ",(0,l.kt)("inlineCode",{parentName:"p"},"create")," operation is omitted."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GraphiQL displaying an omit smart comment example",src:n(20797).Z,width:"720",height:"477"})),(0,l.kt)("h4",{id:"sortable"},"@sortable"),(0,l.kt)("p",null,"Since version\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/graphile/postgraphile/releases/tag/v4.3.1"},"v4.3.1")),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Functions returning ",(0,l.kt)("inlineCode",{parentName:"li"},"SETOF")," a table-like composite type (e.g. a table type,\nview, materialized view, etc, but ",(0,l.kt)("em",{parentName:"li"},"not")," a custom type): adds the ",(0,l.kt)("inlineCode",{parentName:"li"},"orderBy"),"\nargument to this connection, allowing to ",(0,l.kt)("em",{parentName:"li"},"sort")," the set by its\ncolumns/attributes."),(0,l.kt)("li",{parentName:"ul"},"Computed column functions with no required parameters and returning a scalar\nor array: allows this function to be used as an order in the ",(0,l.kt)("inlineCode",{parentName:"li"},"orderBy"),"\nargument for the parent table, allowing to ",(0,l.kt)("em",{parentName:"li"},"sort")," the parent table ",(0,l.kt)("em",{parentName:"li"},"by")," this\nfunction's return value. parent table.")),(0,l.kt)("p",null,"If used on a computed function that returns a SETOF ",(0,l.kt)("em",{parentName:"p"},"record type")," it will make\nthe connection ",(0,l.kt)("em",{parentName:"p"},"sortable")," (like it would with any other ",(0,l.kt)("inlineCode",{parentName:"p"},"SETOF")," function) and\nNOT a ",(0,l.kt)("em",{parentName:"p"},"sort by")," for its parent table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on function foo() is E'@sortable';\ncomment on function users_foo(users) is E'@sortable';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  # If the function returns a set of table rows\n  foo(orderBy: [ID_ASC]) { ... }\n  user(nodeId: ...) {\n    foo(orderBy: [ID_ASC]) { ... }\n  }\n\n  # If the function return a scalar\n  allUsers(orderBy: [FOO_ASC]) { ... }\n}\n")),(0,l.kt)("h4",{id:"filterable"},"@filterable"),(0,l.kt)("p",null,"Since version\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/graphile/postgraphile/releases/tag/v4.3.1"},"v4.3.1"),"."),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Functions returning ",(0,l.kt)("inlineCode",{parentName:"li"},"SETOF")," a table-like composite type (e.g. a table type,\nview, materialized view, etc, but ",(0,l.kt)("em",{parentName:"li"},"not")," a custom type): adds the ",(0,l.kt)("inlineCode",{parentName:"li"},"condition"),"\nargument to this connection, allowing to ",(0,l.kt)("em",{parentName:"li"},"filter")," the set by any of its scalar\nfields."),(0,l.kt)("li",{parentName:"ul"},"Computed column functions with no required parameters and returning a scalar\nor array: allows this function to be used as field in the ",(0,l.kt)("inlineCode",{parentName:"li"},"condition")," argument\nfor the parent table, allowing to ",(0,l.kt)("em",{parentName:"li"},"filter by")," this function's value the parent\ntable.")),(0,l.kt)("p",null,"If used on a computed function that returns a SETOF ",(0,l.kt)("em",{parentName:"p"},"record type")," it will make\nthe connection ",(0,l.kt)("em",{parentName:"p"},"filterable")," (like it would with any other ",(0,l.kt)("inlineCode",{parentName:"p"},"SETOF")," function) and\nNOT a ",(0,l.kt)("em",{parentName:"p"},"filter by")," for its parent table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on function foo() is E'@filterable';\ncomment on function users_foo(users) is E'@filterable';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  # If the function returns a set of table rows\n  foo(condition: {firstName: "Alice"}) { ... }\n\n  # If the function return a scalar\n  allUsers(condition: {foo: "FOO_VALUE"}) { ... }\n}\n')),(0,l.kt)("h5",{id:"sorting-and-filtering-non-scalar-computed-columns"},"Sorting and filtering non-scalar computed columns"),(0,l.kt)("p",null,"If your computed column is returning a composite type, the recommended approach\nis to wrap it with a computed column that returns the scalar field you want to\nsort and/or filter by. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- non scalar function\nCREATE OR REPLACE FUNCTION user_object(user user) RETURNS object AS $$\nSELECT * FROM object where id = user.object_id;\n$$ language SQL STABLE;\n\n-- wrapper. Note the () for notation. Failing to use them will throw an error\nCREATE OR REPLACE FUNCTION user_object_field(user user) RETURNS varchar AS $$\nSELECT (user_object(user)).field;\n$$ language SQL STABLE;\n\n-- don't forget the comments...\ncomment on function user_object_field() is E'@sortable';\n")),(0,l.kt)("p",null,"Note that this will only work with a single composite type. If your computed\nfunction returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"SETOF")," composite type one option is to use an ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY")," and\nthe\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/graphile-contrib/postgraphile-plugin-connection-filter"},"connection-filter plugin"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- non scalar setof function\nCREATE OR REPLACE FUNCTION user_objects(user user) RETURNS SETOF object AS $$\nSELECT * FROM object where owner_id = user.id; -- one user, many objects\n$$ language SQL STABLE;\n\n-- wrapper. Note the () for notation. Failing to use them will throw an error\nCREATE OR REPLACE FUNCTION user_object_fields(user user) RETURNS varchar[] AS $$\nSELECT ARRAY_AGG((user_objects(user)).field);\n$$ language SQL STABLE;\n\n-- don't forget the comments...\ncomment on function user_object_fields() is E'@sortable';\n")),(0,l.kt)("p",null,"Now you can use the array as a ",(0,l.kt)("em",{parentName:"p"},"filter by"),", for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  # get all users who own an object with field == 'foo'\n  allUsers(filter: { object_fields: { contains: \"foo\" } }) {\n    nodes {\n      id\n    }\n  }\n}\n")),(0,l.kt)("h4",{id:"simplecollections"},"@simpleCollections"),(0,l.kt)("p",null,"You can control whether simple collections are enabled by default using\n",(0,l.kt)("inlineCode",{parentName:"p"},"--simple-collections omit|both|only")," (or\n",(0,l.kt)("inlineCode",{parentName:"p"},'simpleCollections: "omit"|"both"|"only"'),"); however sometimes you want to\noverride this on a case by case setting - for example if you want relay\nconnections for almost all collections, except when it comes to a user's email\naddresses where you want to use a simple list."),(0,l.kt)("p",null,"You can do this with the ",(0,l.kt)("inlineCode",{parentName:"p"},"@simpleCollections omit"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"@simpleCollections both"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"@simpleCollections only")," smart comments."),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tables"),(0,l.kt)("li",{parentName:"ul"},"Views"),(0,l.kt)("li",{parentName:"ul"},"Materialized views"),(0,l.kt)("li",{parentName:"ul"},"Custom Query functions"),(0,l.kt)("li",{parentName:"ul"},"Computed Column functions")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on table email is\n  E'@simpleCollections both';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on constraint email_user_id_fkey on email is\n  E'@simpleCollections both';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on function search_people(query text) is\n  E'@simpleCollections both';\n")),(0,l.kt)("h4",{id:"arg0variant-arg1variant-"},"@arg0variant, @arg1variant, ..."),(0,l.kt)("p",null,"When building a custom mutation, you probably want to use the composite type\nthat is generated when creating a table in PostgreSQL as a function argument,\nlike this (note this is just an example for illustrative purposes):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table example(\n  id uuid primary key,\n  name text not null\n);\n\ncreate function new_example(input example) returns example as $$\n  insert into example (id, name) values (input.id, input.name) returning *;\n$$ language sql volatile;\n")),(0,l.kt)("p",null,"By default, composite types will be translated into a GraphQL types by\nPostGraphile with the same characteristics, i.e. all ",(0,l.kt)("inlineCode",{parentName:"p"},"not null"),' columns will\nbecome non-nullable fields. You can let PostGraphile know that you want to\nconvert the composite type into another "variant" GraphQL type with a smart\ncomment. Variants include ',(0,l.kt)("inlineCode",{parentName:"p"},"patch")," (which is equivalent to the argument to\n",(0,l.kt)("inlineCode",{parentName:"p"},"update*")," mutations) and ",(0,l.kt)("inlineCode",{parentName:"p"},"base")," (which makes every column both available\n(ignores permissions) and nullable). For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table example(\n  id uuid primary key,\n  name text not null\n);\n\ncreate function new_example_with_auto_id(input example) returns example as $$\n  insert into example (id, name) values (gen_random_uuid(), input.name) returning *;\n$$ language sql volatile;\n\ncomment on function new_example_with_auto_id(input example) is\n  E'@arg0variant patch';\n")),(0,l.kt)("p",null,"This uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"patch")," variant from PostGraphile's update mutations which has all\nthe fields except ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),". This will mean that the custom mutation will not ask for\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," on the client-side anymore (because it will generate it itself). Note\nhow ",(0,l.kt)("inlineCode",{parentName:"p"},"arg0")," refers to the first function parameter (we use a 0-indexed counter of\nthe arguments), thus ",(0,l.kt)("inlineCode",{parentName:"p"},"arg2")," would be the third parameter."),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom Query functions"),(0,l.kt)("li",{parentName:"ul"},"Custom Mutation functions"),(0,l.kt)("li",{parentName:"ul"},"Computed Column functions")),(0,l.kt)("h4",{id:"tags-to-add-virtual-constraint"},"Tags to add virtual constraint"),(0,l.kt)("p",null,'You can add "virtual" (fake) constraints to types in PostgreSQL using smart\ncomments. The primary use case for this is to make views act more table-like -\nallowing you to express the connections between tables and views. It\'s also\nuseful on composite types.'),(0,l.kt)("h5",{id:"notnull"},"@notNull"),(0,l.kt)("p",null,"Allows marking the column as non-nullable."),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"columns")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'attribute: {\n  "my_view.my_column": {\n    tags: {\n      notNull: true\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on column my_view.my_column is E'@notNull`;\n")),(0,l.kt)("h5",{id:"primarykey"},"@primaryKey"),(0,l.kt)("p",null,"Primary key columns will automatically be marked as ",(0,l.kt)("inlineCode",{parentName:"p"},"@notNull"),", as they would in\nPostgreSQL."),(0,l.kt)("p",null,"If you declare something as a primary key it ",(0,l.kt)("em",{parentName:"p"},"must")," be unique. We do not check\nit's unique - we trust you - but if it isn't unique then we're not sure what\nwill happen..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'class: {\n  my_view: {\n    tags: {\n      primaryKey: "id"\n      // or:\n      //   primaryKey: "type,identifier"\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on view my_view is E'@primaryKey id';\n-- or\ncomment on view my_view is E'@primaryKey type,identifier';\n")),(0,l.kt)("h5",{id:"foreignkey"},"@foreignKey"),(0,l.kt)("p",null,"The foreign key adds virtual constraints pretending to be foreign keys. It has\nthe following syntax which mirrors the PostgreSQL foreign key constraint:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@foreignKey (col1, ...) references [my_schema.]my_table [(col1, ...)]")),(0,l.kt)("p",null,"In the tags file you must omit the leading ",(0,l.kt)("inlineCode",{parentName:"p"},"@foreignKey")," text since it is\nspecified as the key (rather than the value) in the tags object \u2500 see example\nbelow."),(0,l.kt)("p",null,"The schema is optional if the target table is in the same schema. If you're\nreferencing a Primary Key on the remote table/view then you can skip the final\ncolumn specification should you wish. Otherwise, you must reference columns\nmatching a unique constraint."),(0,l.kt)("p",null,"Applies to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tables"),(0,l.kt)("li",{parentName:"ul"},"Views"),(0,l.kt)("li",{parentName:"ul"},"Materialized views"),(0,l.kt)("li",{parentName:"ul"},"Composite types (one direction only)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'class: {\n  my_materialized_view: {\n    tags: {\n      foreignKey: "(key_1, key_2) references other_table (key_1, key_2)"\n    }\n  }\n}\n\n// or if you want multiple foreignKeys\nclass: {\n  my_materialized_view: {\n    tags: {\n      foreignKey: [\n        "(key_1, key_2) references other_table (key_1, key_2)",\n        "(key_3, key_4) references some_other_table (key_3, key_4)"\n      ]\n    }\n  }\n}\n\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on materialized view my_materialized_view is E'@foreignKey (key_1, key_2) references other_table (key_1, key_2)';\n\n-- or if you want multiple foreignKeys\ncomment on materialized view my_materialized_view is E'@foreignKey (key_1, key_2) references other_table (key_1, key_2)\\n@foreignKey (key_3, key_4) references some_other_table (key_3, key_4)';\n")),(0,l.kt)("h5",{id:"unique"},"@unique"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"From PostGraphile 4.9.1")),(0,l.kt)("p",null,'Introduces a "fake" unique constraint, so ',(0,l.kt)("inlineCode",{parentName:"p"},"@unique col1,col2")," is somewhat\nequivalent to the following, except it can also be applied to entities that\ncannot have unique constraints, e.g. views. It is up to you to ensure that your\ndata is indeed unique on the given columns."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- `@unique col1,col2` is roughly equivalent to:\nALTER TABLE foo ADD CONSTRAINT fake_unique UNIQUE (col1, col2);\n")),(0,l.kt)("p",null,"More than one ",(0,l.kt)("inlineCode",{parentName:"p"},"@unique")," tag may be specified."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'class: {\n  my_view: {\n    tags: {\n      unique: [\n        "id",\n        "org_id,slug"\n      ]\n      // or:\n      //   unique: "id"\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"comment on view my_view is E'@unique id\\n@unique org,slug';\n")),(0,l.kt)("h5",{id:"smart-tags-on-virtual-constraints"},"Smart Tags on virtual constraints"),(0,l.kt)("p",null,"You can also add smart tags on virtual constraints, for example adding the\n",(0,l.kt)("inlineCode",{parentName:"p"},"fieldName")," smart tag to a virtual foreign key constraint, by appending the pipe\ncharacter ",(0,l.kt)("inlineCode",{parentName:"p"},"|")," followed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"@"),"-prefixed smart tag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'class: {\n  my_materialized_view: {\n    tags: {\n      foreignKey: "(key_1, key_2) references other_table (key_1, key_2)|@fieldName field_1"\n    }\n  }\n}\n')))}d.isMDXComponent=!0},20797:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/smart-comments-omit-example-227c3aa7c74696500f202f9f02cb91e8.png"},71805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/smart-comments-rename-example1-dab7db266e897c9370771c10fca834b5.png"},63744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/smart-comments-rename-example2-e8f07da1855bfc26083dedc2c989cfdf.png"},95366:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/smart-comments-rename-example3-845a672f892c1d63bfd7958b04fe90cb.png"}}]);