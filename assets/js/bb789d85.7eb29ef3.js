"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[5613],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7896),a=(n(2784),n(30876));const r={},o="Behavior",l={unversionedId:"behavior",id:"behavior",title:"Behavior",description:"For all but the simplest APIs you will want to control which parts of your data",source:"@site/postgraphile/behavior.md",sourceDirName:".",slug:"/behavior",permalink:"/postgraphile/next/behavior",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/behavior.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Required knowledge",permalink:"/postgraphile/next/required-knowledge"},next:{title:"Exporting your schema",permalink:"/postgraphile/next/exporting-schema"}},s={},p=[{value:"Terminology",id:"terminology",level:2},{value:"Determining entity behavior",id:"determining-entity-behavior",level:2},{value:"Global default behavior",id:"global-default-behavior",level:2},{value:"Core behaviors",id:"core-behaviors",level:2},{value:"Fragment matching algorithm",id:"fragment-matching-algorithm",level:2},{value:"Future expansions",id:"future-expansions",level:2},{value:"Behaviors to avoid",id:"behaviors-to-avoid",level:2},{value:"Setting and consuming behaviors in a plugin",id:"setting-and-consuming-behaviors-in-a-plugin",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"behavior"},"Behavior"),(0,a.kt)("p",null,'For all but the simplest APIs you will want to control which parts of your data\nsources are exposed and how they are exposed. New to PostGraphile version 5 is\nthe "behavior" system that gives you granular control over these topics.'),(0,a.kt)("h2",{id:"terminology"},"Terminology"),(0,a.kt)("p",null,'A "behavior string" is a text-based string with a relatively simple syntax; here\nare some examples:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"insert")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+list -connection -list:filter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-insert -update -delete query:*:filter +connection -list"))),(0,a.kt)("p",null,'A behavior string is made of a list of "behavior fragments" separated by spaces.\nEach behavior fragment optionally starts with a ',(0,a.kt)("inlineCode",{parentName:"p"},"+")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," symbol (if neither is\nspecified then ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),' is inferred) followed by a "scope string." A scope string is\none or more "scope phrases" joined by colons (',(0,a.kt)("inlineCode",{parentName:"p"},":"),"). A scope phrase is either a\nsimple alphanumeric word (in camelCase), or an asterisk (",(0,a.kt)("inlineCode",{parentName:"p"},"*"),")."),(0,a.kt)("h2",{id:"determining-entity-behavior"},"Determining entity behavior"),(0,a.kt)("p",null,"Many entities that PostGraphile processes when generating a schema (for example:\ntables, columns, functions, types, etc.) have associated behaviors which\ninfluence whether and how that entity is exposed. You may influence their\nresulting behaviors by adding your own behavior strings to the entity, either\ndirectly or via smart tags/smart comments. For example, if you don't want users\nto be able to modify entries in the ",(0,a.kt)("inlineCode",{parentName:"p"},"forums")," table, you might add a database\ncomment such as ",(0,a.kt)("inlineCode",{parentName:"p"},"comment on table forums is '@behavior -create -update\n-delete';")," (this is just one of many ways of attaching behaviors)."),(0,a.kt)("p",null,"The final behavior string of an entity is made by concatenating the behavior\nstrings from various sources; typically this follows the following pattern:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default behaviors from plugins"),(0,a.kt)("li",{parentName:"ul"},"Global default behavior"),(0,a.kt)("li",{parentName:"ul"},"Inferred behaviors from plugins"),(0,a.kt)("li",{parentName:"ul"},"(Secondary entity behaviors)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E.g. if the entity is a column, then secondary entity behaviors may include\nthe behavior of the data type of the column (codec)"))),(0,a.kt)("li",{parentName:"ul"},"Entity behavior (from smart tags/smart comments)")),(0,a.kt)("p",null,"The highest precedence behaviors are at the end the behavior string, and the\nlowest priority behaviors are at the start."),(0,a.kt)("p",null,'When determining if an entity possesses a given "filter" behavior, the system\nwill scan backwards through the entity\'s behavior string for the first fragment\nthat matches the filter; if the matching fragment has a ',(0,a.kt)("inlineCode",{parentName:"p"},"-")," modifier then the\nentity does not possess that behavior (even if a positive fragment existed\nearlier in the behavior string) otherwise it does."),(0,a.kt)("h2",{id:"global-default-behavior"},"Global default behavior"),(0,a.kt)("p",null,'If you want to make wide-sweeping changes to behaviors, you can add "default\nbehaviors" via the ',(0,a.kt)("inlineCode",{parentName:"p"},"preset.schema.defaultBehavior")," setting. For example if you\nwant your schema to use lists by default, eschewing the more verbose (but\ntypically superior) connections pattern, you might have a configuration\nsomething like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// graphile.config.mjs\n\nconst preset = {\n  //...\n  schema: {\n    //...\n    defaultBehavior: "-connection +list",\n  },\n};\n\nexport default preset;\n')),(0,a.kt)("p",null,'These global defaults can still be overridden by each entity, so they\'re a\ngood way of making wide ranging "default" behaviors without locking yourself in\ntoo hard.'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you're authoring a preset that is not the final configuration for a schema\nthen this default behavior setting is likely to be overridden (replaced) by the\nuser's configuration. Instead, preset authors should add a plugin that has a\n",(0,a.kt)("inlineCode",{parentName:"p"},"schema.globalBehavior")," entry. If this entry is a string, the behavior will be\nprepended. If it's a callback, then it should return an array of behavior\nstrings to be joined, one of which should be the current (passed in) behavior.\nTypically you want a tuple where the first entry is your new behaviors and the\nsecond entry is the current (passed-in) behavior (this way the user's\n",(0,a.kt)("inlineCode",{parentName:"p"},"defaultBehavior")," will have higher precedence to your ",(0,a.kt)("inlineCode",{parentName:"p"},"globalBehavior"),")."),(0,a.kt)("p",{parentName:"admonition"},'A similar "lists by default" plugin might look like this:'),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const FavourListsPlugin = {\n  name: "FavourListsPlugin",\n  version: "0.0.0",\n  schema: {\n    globalBehavior: "-connection +list",\n  },\n};\n')),(0,a.kt)("p",{parentName:"admonition"},"or, equivalently, like this:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const FavourListsPlugin = {\n  name: "FavourListsPlugin",\n  version: "0.0.0",\n  schema: {\n    globalBehavior(currentBehavior, resolvedPreset) {\n      return ["-connection +list", currentBehavior];\n    },\n  },\n};\n'))),(0,a.kt)("h2",{id:"core-behaviors"},"Core behaviors"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TODO"),": We really need an automated registry of this, and to validate plugins\nagainst it. But for now, this list will have to suffice."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Scopes are least specific on the right (broad operations like ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"update"),") and narrow more as prefixes are added to the left (",(0,a.kt)("inlineCode",{parentName:"p"},"resource:update"),"\nis narrower than ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),"; ",(0,a.kt)("inlineCode",{parentName:"p"},"constraint:resource:update")," is narrower still).")),(0,a.kt)("p",null,"The following are behaviors that the core\nPostGraphile/graphile-build/graphile-build-pg plugins utilise:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"select")," - can select this resource/column/etc. Note this does not necessarily\nmean you can do ",(0,a.kt)("inlineCode",{parentName:"li"},"select * from users")," but it might mean that it's possible to\nsee details about a ",(0,a.kt)("inlineCode",{parentName:"li"},"users")," when it's returned by a function or similar. (In\nthis case the ",(0,a.kt)("inlineCode",{parentName:"li"},"codec")," has ",(0,a.kt)("inlineCode",{parentName:"li"},"select")," but the ",(0,a.kt)("inlineCode",{parentName:"li"},"resource")," has ",(0,a.kt)("inlineCode",{parentName:"li"},"-select"),".)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource:select")," - can select rows from this resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"insert:resource:select")," - can select the row that was inserted (on the mutation payload)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"update:resource:select")," - can select the row that was updated (on the mutation payload)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delete:resource:select")," - can select the row that was deleted (on the mutation payload)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delete:resource:nodeId")," - can select the nodeId of the row that was deleted (on the mutation payload)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource:insert")," - can insert into this resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource:update")," - can update a record in this resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource:delete")," - can delete a record in this resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource:list"),' - "list" field for a resource at any level'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource:connection"),' - "connection" field for a resource at any level'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"constraint:resource:update")," - can update a record by this constraint"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"constraint:resource:delete")," - can delete a record by this constraint"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodeId:resource:update")," - can update a record by its NodeID"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodeId:resource:delete")," - can delete a record by its NodeID"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attribute:select")," - can this attribute be selected?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attribute:insert")," - can this attribute be inserted into?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attribute:update")," - can this attribute be updated?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attribute:base"),' - should we add this attribute to the "base" input type?'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodeId:insert")," - can we insert to the columns represented by this nodeId which represents a table related via foreign key constraint?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodeId:update")," - can we update the columns represented by this nodeId which represents a table related via foreign key constraint?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodeId:base"),' - should we add a nodeId input representing this foreign key constraint to the "base" input type?'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type:node")," - should the GraphQLObjectType (",(0,a.kt)("inlineCode",{parentName:"li"},"type"),") this codec represents\nimplement the GraphQL Global Object Identification specification"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interface:node")," - should the GraphQLInterfaceType (",(0,a.kt)("inlineCode",{parentName:"li"},"interface"),") this codec\nrepresents implement the GraphQL Global Object Identification specification"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list")," - list (simple collection)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connection")," - connection (GraphQL Cursor Pagination Spec)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query:resource:list"),' - "list" field for a resource at the root Query level'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query:resource:connection"),' - "connection" field for a resource at the root Query level'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query:interface:list"),' - "list" field for a interface at the root Query level'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query:interface:connection"),' - "connection" field for a interface at the root Query level'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryField")," - for procedures: should it become a field on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Query")," type?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"typeField")," - for procedures: should it become a field on a non-operation\ntype?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryField:resource:connection")," - should we represent this resource with a connection on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Query")," type?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryField:resource:list")," - should we represent this resource with a list on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Query")," type?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"typeField:resource:connection")," - should we represent this resource with a connection on a non-operation type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"typeField:resource:list")," - should we represent this resource with a list on a non-operation type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mutationField")," - for procedures: should it become a mutation (field on\n",(0,a.kt)("inlineCode",{parentName:"li"},"Mutation"),")?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"order")," - can we sort this thing? (resource)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query:resource:list:order")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query:resource:connection:order")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"orderBy")," - can we order by this thing (e.g. column)?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proc:orderBy")," - can we order by the result of this proc (function resource)?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attribute:orderBy")," - can we order by this attribute (column, property)?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filterBy")," - can we filter by this thing (e.g. column, table, etc)?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proc:filterBy")," - can we filter by the result of this proc (function resource)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attribute:filterBy")," - can we filter by this attribute (column, property)?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"condition:attribute:filterBy")," - can we filter by this attribute (column, property) in the ",(0,a.kt)("inlineCode",{parentName:"li"},"condition")," argument?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"single")," - can we get just one?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query:resource:single")," - can we get a single one of these (resource) at the root?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"singularRelation:resource:single")," - can we get a single one of these (resource) from a\ntype?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"singularRelation:resource:list")," - should we add a list field to navigate this singular\nrelationship (when we know there can be at most one)?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"singularRelation:resource:connection")," - should we add a connection field to navigate\nthis singular relationship (when we know there can be at most one)?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manyRelation:resource:list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manyRelation:resource:connection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jwt")," - should the given codec behave as if it were a JWT?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"insert:input:record")," - input to the 'insert' mutation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"totalCount")," - on a codec, should we add the ",(0,a.kt)("inlineCode",{parentName:"li"},"totalCount")," field?")),(0,a.kt)("h2",{id:"fragment-matching-algorithm"},"Fragment matching algorithm"),(0,a.kt)("p",null,"When determining if a fragment matches the filter, we use the following\nalgorithm:"),(0,a.kt)("p",null,"ScopeMatches(fragment, filter):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Let ",(0,a.kt)("inlineCode",{parentName:"li"},"filterPhrases")," be ",(0,a.kt)("inlineCode",{parentName:"li"},"filter")," split on ",(0,a.kt)("inlineCode",{parentName:"li"},":"),"."),(0,a.kt)("li",{parentName:"ul"},"Let ",(0,a.kt)("inlineCode",{parentName:"li"},"fragmentPhrases")," be the scope of ",(0,a.kt)("inlineCode",{parentName:"li"},"fragment")," split on ",(0,a.kt)("inlineCode",{parentName:"li"},":"),"."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"fragmentPhrases")," has more parts than ",(0,a.kt)("inlineCode",{parentName:"li"},"filterPhrases"),", return false."),(0,a.kt)("li",{parentName:"ul"},"Let ",(0,a.kt)("inlineCode",{parentName:"li"},"positive")," be false if ",(0,a.kt)("inlineCode",{parentName:"li"},"fragment")," starts with ",(0,a.kt)("inlineCode",{parentName:"li"},"-"),", otherwise true."),(0,a.kt)("li",{parentName:"ul"},"Make ",(0,a.kt)("inlineCode",{parentName:"li"},"fragmentPhrases")," have the same length as ",(0,a.kt)("inlineCode",{parentName:"li"},"filterPhrases")," by prepending\nthe requisite number of ",(0,a.kt)("inlineCode",{parentName:"li"},"*")," phrases to it."),(0,a.kt)("li",{parentName:"ul"},"For each corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"filterPhrase")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"fragmentPhrase")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"filterPhrases"),"\nand ",(0,a.kt)("inlineCode",{parentName:"li"},"fragmentPhrases"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"filterPhrase")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"fragmentPhrase")," is not ",(0,a.kt)("inlineCode",{parentName:"li"},"*"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"positive")," is\nfalse; return false."),(0,a.kt)("li",{parentName:"ul"},"If neither ",(0,a.kt)("inlineCode",{parentName:"li"},"filterPhrase")," nor ",(0,a.kt)("inlineCode",{parentName:"li"},"fragmentPhrase")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"*")," and they are not\nequal, return false."))),(0,a.kt)("li",{parentName:"ul"},"Return true.")),(0,a.kt)("h2",{id:"future-expansions"},"Future expansions"),(0,a.kt)("p",null,"Would be good to add additional data, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"query:resource:single[pk]"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"query:resource:single[node]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"query:single[unique]")," could all be be added, and would\nallow you to set a rule like ",(0,a.kt)("inlineCode",{parentName:"p"},"-query:resource:single +query:single[node]")," to only allow\nthe node accessors."),(0,a.kt)("h2",{id:"behaviors-to-avoid"},"Behaviors to avoid"),(0,a.kt)("p",null,"In order to avoid ambiguities, do not use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create")," - use ",(0,a.kt)("inlineCode",{parentName:"li"},"insert")," instead"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root:")," - use ",(0,a.kt)("inlineCode",{parentName:"li"},"query:"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"mutation:")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"subscription:")," instead")),(0,a.kt)("h2",{id:"setting-and-consuming-behaviors-in-a-plugin"},"Setting and consuming behaviors in a plugin"),(0,a.kt)("p",null,"TODO: document this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const MyPlugin = {\n  name: "MyPlugin",\n  version: "0.0.0",\n\n  schema: {\n    // Register default behaviors (optional)\n    entityBehaviors: {\n      // Apply \'myCodecBehavior\' by default to _all_ codecs\n      pgCodec: "myCodecBehavior",\n\n      // Apply \'myResourceBehavior\' to resources with truthy `isUnique` (overrides defaults)\n      pgResource(behavior, resource) {\n        if (resource.isUnique) {\n          return [behavior, "myResourceBehavior"];\n        } else {\n          return behavior;\n        }\n      },\n    },\n\n    // Do something with behaviors (optional)\n    hooks: {\n      GraphQLObjectType_fields_field(field, build, context) {\n        const codec = context.scope.pgFieldCodec;\n        if (\n          !codec ||\n          !build.behavior.pgCodecMatches(codec, "myCodecBehavior")\n        ) {\n          return field;\n        }\n\n        // Behavior matches! Do stuff here...\n\n        return field;\n      },\n    },\n  },\n};\n')))}c.isMDXComponent=!0}}]);