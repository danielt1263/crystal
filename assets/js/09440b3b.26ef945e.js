"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[8027],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7896),o=(n(2784),n(30876));const i={layout:"page",path:"/postgraphile/functions/",title:"Database Functions"},r=void 0,s={unversionedId:"functions",id:"functions",title:"Database Functions",description:"One of the easiest ways to add more capabilities to your PostGraphile schema is",source:"@site/postgraphile/functions.md",sourceDirName:".",slug:"/functions",permalink:"/postgraphile/next/functions",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/functions.md",tags:[],version:"current",frontMatter:{layout:"page",path:"/postgraphile/functions/",title:"Database Functions"},sidebar:"docs",previous:{title:'Globally Unique Object Identification ("id" / "nodeId")',permalink:"/postgraphile/next/node-id"},next:{title:"Computed Columns",permalink:"/postgraphile/next/computed-columns"}},l={},u=[{value:"Understanding function performance",id:"understanding-function-performance",level:2},{value:"Example: archiving forums",id:"example-archiving-forums",level:3},{value:"Example: row-level security function",id:"example-row-level-security-function",level:3},{value:"Recommended Reading",id:"recommended-reading",level:2},{value:"Procedural Languages",id:"procedural-languages",level:2},{value:"Named Arguments",id:"named-arguments",level:2},{value:"Solving naming conflicts",id:"solving-naming-conflicts",level:2},{value:"Use function name",id:"use-function-name",level:3},{value:"Numeric arguments",id:"numeric-arguments",level:3},{value:"Variable substitution",id:"variable-substitution",level:3},{value:"VOLATILE (Mutation) Functions",id:"volatile-mutation-functions",level:2},{value:"STABLE/IMMUTABLE (Query) Functions",id:"stableimmutable-query-functions",level:2},{value:"SETOF Functions - Connections",id:"setof-functions---connections",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the easiest ways to add more capabilities to your PostGraphile schema is\nwith PostgreSQL functions. The three main methods are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./computed-columns/"},"Computed Columns")," enable you to add a computed field to\na table type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./custom-queries/"},"Custom Queries")," enable you to add a root level Query field\nwhich can return a scalar, list, custom type, table row or even a table\nconnection"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./custom-mutations/"},"Custom Mutations")," enable you to add a root level\nMutation field which can cause modifications to your database and return\nnothing (",(0,o.kt)("inlineCode",{parentName:"li"},"void"),"), a scalar, list, custom type, table row or list of table rows\n(but not a connection, since you cannot paginate over a mutation)")),(0,o.kt)("p",null,"If you want to leverage database functionality rather than PostGraphile plugins\nto enhance your API then it's very important to understand PostgreSQL\nfunctions. Functions allow you to define business logic in the database using\nSQL or one of many other scripting languages."),(0,o.kt)("p",null,"For some function examples, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphile/postgraphile/blob/v4/examples/forum/schema.sql"},"forum example SQL schema"),"."),(0,o.kt)("h2",{id:"understanding-function-performance"},"Understanding function performance"),(0,o.kt)("p",null,"Well written business logic in the database will often be significantly more\nperformant then writing the business logic in the application layer. This is\nbecause PostgreSQL is finely tuned for data intensive uses."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's ",(0,o.kt)("em",{parentName:"p"},"very easy")," to have very poor performance in the database if\nyou try and move your procedural programming language knowledge over without\nmaking accomodations for the new paradigm you're in. In PostgreSQL, every\nfunction call and every statement executed has a performance overhead, so if\nyou don't adapt your coding patterns to be optimal for a database, you will\nlikely get poor performance. This poor performance from poorly written database\nfunctions is one of the reasons some critics claim that business logic in the\ndatabase should not be used.")),(0,o.kt)("p",null,"JavaScript programmers will likely be tempted to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FOR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"FOREACH")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"LOOP")," constructs to manipulate rows, since that's what they would do in their\nJavaScript code. But doing so might result in PostgreSQL having to perform\nhundreds, thousands, or even millions of SQL queries and function calls under\nthe hood of your function."),(0,o.kt)("p",null,"In PostgreSQL you should ",(0,o.kt)("strong",{parentName:"p"},"almost never")," use these looping constructs, instead\nyou should perform set operations where possible."),(0,o.kt)("h3",{id:"example-archiving-forums"},"Example: archiving forums"),(0,o.kt)("p",null,"Imagine you want a function capable of archiving a number of forums, and thus\nset the ",(0,o.kt)("inlineCode",{parentName:"p"},"is_archived")," for each post in that forum. You might do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="BAD! Don\'t do this!"',title:'"BAD!',"Don't":!0,do:!0,'this!"':!0},"create function archive_forums(forum_ids int[]) returns void as $$\ndeclare\n  target_forum_id int;\nbegin\n  /* BAD: looping should be avoided! */\n  foreach target_forum_id in array forum_ids loop\n    update forums set is_archived = true where id = target_forum_id;\n    update posts set is_archived = true where forum_id = target_forum_id;\n  end loop;\nend;\n$$ language plpgsql volatile;\n")),(0,o.kt)("p",null,"If you feed in 100 values, then this would turn into executing 200 SQL queries."),(0,o.kt)("p",null,"A better approach would be to do bulk updates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="More efficient"',title:'"More','efficient"':!0},"create function archive_forums(forum_ids int[]) returns void as $$\n  update forums set is_archived = true where id = ANY(forum_ids);\n  update posts set is_archived = true where forum_id = ANY(forum_ids);\n$$ language sql volatile;\n")),(0,o.kt)("p",null,"If the mutation you made to a later table is dependent on values in an earlier\ntable then you could do it all in a single statement using a ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/queries-with.html"},"common table\nexpression"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Single query example"',title:'"Single',query:!0,'example"':!0},"create function archive_forums(forum_ids int[]) returns void as $$\n  with updated_forums as (\n    update forums\n    set is_archived = true\n    where id = ANY(forum_ids)\n    returning id\n  )\n    update posts\n    set is_archived = true\n    from updated_forums\n    where posts.forum_id = updated_forums.id;\n$$ language sql volatile;\n")),(0,o.kt)("h3",{id:"example-row-level-security-function"},"Example: row-level security function"),(0,o.kt)("p",null,"Another common mistake that we see people make is passing row values to\nfunction calls in RLS policies. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="BAD! Uses row data in function call"',title:'"BAD!',Uses:!0,row:!0,data:!0,in:!0,function:!0,'call"':!0},"create function current_user_is_member_of(target_organization_id int) returns boolean as $$\n  select exists(\n    select 1\n    from memebrs\n    where organization_id = target_organization_id\n    and user_id = current_user_id()\n  );\n$$ language sql stable security definer;\n\ncreate policy select_members\n  for select on members\n  using (\n    /* highlight-next-line */\n    current_user_is_member_of(members.organization_id)\n  );\n")),(0,o.kt)("p",null,"Here each new value for ",(0,o.kt)("inlineCode",{parentName:"p"},"members.organization_id")," is passed to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"current_user_is_member_of")," function, meaning that (depending on the other\nfilters used in the query) we may be calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"current_user_is_member_of"),"\nfunction for every unique ",(0,o.kt)("inlineCode",{parentName:"p"},"organization_id")," in the database. And that's the best\ncase, at worst PostgreSQL may call the function for every row. Ouch!"),(0,o.kt)("p",null,"Instead, we should ensure that functions called in RLS policies never accept a\nrow value as argument. We can do this by restructuring the logic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Much better - only a single function call"',title:'"Much',better:!0,"-":!0,only:!0,a:!0,single:!0,function:!0,'call"':!0},"create function current_user_organization_ids() returns setof int as $$\n  select organization_id\n  from memebrs\n  where user_id = current_user_id();\n$$ language sql stable security definer;\n\ncreate policy select_members\n  for select on members\n  using (\n    /* highlight-next-line */\n    organization_id in (select current_user_organization_ids())\n  );\n")),(0,o.kt)("p",null,"Here, PostgreSQL can call the function once at the start and then can use a\nsimple index check to select the rows that are visible according to the RLS\npolicy. This can be ",(0,o.kt)("strong",{parentName:"p"},"literally thousands of times faster")," than the previous\nexample."),(0,o.kt)("p",null,"You might think that this is likely to be ",(0,o.kt)("em",{parentName:"p"},"less performant")," when you're\nfetching individual rows, but as a general rule of thumb PostgreSQL can read\nmillions of rows per second (and even more if it just needs index values), so\ndetermining the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"organization_id"),"s a user is a member of is so trivial\nyou can almost ignore it."),(0,o.kt)("h2",{id:"recommended-reading"},"Recommended Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PostgreSQL ",(0,o.kt)("a",{parentName:"li",href:"http://www.postgresql.org/docs/current/static/sql-createfunction.html"},(0,o.kt)("inlineCode",{parentName:"a"},"CREATE FUNCTION"))," documentation for actually creating\nfunctions."),(0,o.kt)("li",{parentName:"ul"},"PostgreSQL ",(0,o.kt)("a",{parentName:"li",href:"http://www.postgresql.org/docs/current/static/sql-createtrigger.html"},(0,o.kt)("inlineCode",{parentName:"a"},"CREATE TRIGGER"))," documentation."),(0,o.kt)("li",{parentName:"ul"},"StackOverflow answer describing ",(0,o.kt)("a",{parentName:"li",href:"http://stackoverflow.com/a/11166268/1568890"},"computed columns in PostgreSQL"),".")),(0,o.kt)("h2",{id:"procedural-languages"},"Procedural Languages"),(0,o.kt)("p",null,"Functions in PostgreSQL require you to use either SQL or a procedural language.\nThe most common procedural language in PostgreSQL is ",(0,o.kt)("a",{parentName:"p",href:"http://www.postgresql.org/docs/current/static/plpgsql.html"},"PL/pgSQL"),"."),(0,o.kt)("p",null,"SQL is probably the easiest to use language for functions as you are most\nlikely already familiar with it. Because it lacks the looping constructs, it\nalso encourages you to write your functions in a performant way. We advise that\nif your function can be written in SQL, it probably should be."),(0,o.kt)("p",null,"PL/pgSQL is PostgreSQL\u2019s custom procedural language, it's fairly easy to pick up\nand there are plenty of StackOverflow and other resources for this language.\nYou\u2019ll need to learn PL/pgSQL (or one of the other procedural languages) if you\nwant to write any triggers, because SQL can\u2019t be used for triggers. Don\u2019t\nworry - you can definitely make awesome applications without a deep knowledge of\nPL/pgSQL."),(0,o.kt)("p",null,"A simple function written with ",(0,o.kt)("inlineCode",{parentName:"p"},"LANGUAGE sql")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION add(a int, b int) RETURNS int AS $$\n  select a + b;\n$$ LANGUAGE sql IMMUTABLE STRICT;\n")),(0,o.kt)("p",null,"The same function with ",(0,o.kt)("inlineCode",{parentName:"p"},"LANGUAGE plpgsql")," could look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION add(a int, b int) RETURNS int AS $$\nBEGIN\n  RETURN a + b;\nEND;\n$$ LANGUAGE plpgsql IMMUTABLE STRICT;\n")),(0,o.kt)("p",null,"If you don\u2019t want to use PL/pgSQL or SQL, many popular scripting languages can\nbe used ",(0,o.kt)("em",{parentName:"p"},"inside")," PostgreSQL to write your functions! You can see a few of these\nprojects here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/plv8/plv8"},"JavaScript (plv8)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/knu/postgresql-plruby"},"Ruby (plruby)"))),(0,o.kt)("p",null,"For example, a function defined using JavaScript could look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- This does look the exact same as the PL/pgSQL example\u2026\nCREATE FUNCTION add(a int, b int) RETURNS int AS $$\n  return a + b;\n$$ LANGUAGE plv8 IMMUTABLE STRICT;\n\n-- Here\u2019s a better example from the plv8 repo\u2026\nCREATE FUNCTION plv8_test(keys text[], vals text[]) RETURNS text AS $$\n  var object = {}\n  for (var i = 0; i < keys.length; i++) {\n    object[keys[i]] = vals[i]\n  }\n  return JSON.stringify(object)\n$$ LANGUAGE plv8 IMMUTABLE STRICT;\n")),(0,o.kt)("h2",{id:"named-arguments"},"Named Arguments"),(0,o.kt)("p",null,"PostgreSQL allows you to mix named and positional (unnamed) arguments in your\nfunctions. However, GraphQL will ",(0,o.kt)("em",{parentName:"p"},"only")," allow named arguments. So if you don\u2019t\nname an argument, PostGraphile will give it a name like ",(0,o.kt)("inlineCode",{parentName:"p"},"arg1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"arg2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"arg3"),",\nand so on. An example of a function with unnamed arguments is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION add(int, int) RETURNS int AS $$\n  SELECT $1 + $2;\n$$ LANGUAGE sql IMMUTABLE STRICT;\n")),(0,o.kt)("p",null,"Whereas named arguments look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION add(a int, b int) RETURNS int AS $$\n  select a + b;\n$$ LANGUAGE sql IMMUTABLE STRICT;\n")),(0,o.kt)("p",null,"For the sake of your schema and your coworkers, you should always use named\narguments."),(0,o.kt)("h2",{id:"solving-naming-conflicts"},"Solving naming conflicts"),(0,o.kt)("p",null,"Sometimes the names you have chosen for your function parameters will conflict\nwith names of columns or other identifiers accessible within your function. You\ncan solve this in a number of ways."),(0,o.kt)("h3",{id:"use-function-name"},"Use function name"),(0,o.kt)("p",null,"You can use the function's name to disambiguate a function argument from a\ncolumn value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"create function get_user(id int) returns users as $$\n  select * from users where users.id = get_user.id;\n$$ language sql stable;\n")),(0,o.kt)("p",null,"(If you happen to give your function the same name as your table, then you can\ngive the table an alias in the function body query to help disambiguate.)"),(0,o.kt)("h3",{id:"numeric-arguments"},"Numeric arguments"),(0,o.kt)("p",null,"An alternative approach is to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/xfunc-sql.html#XFUNC-SQL-FUNCTION-ARGUMENTS"},"numeric\narguments"),"\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"$1")," for the first argument, ",(0,o.kt)("inlineCode",{parentName:"p"},"$2")," for the second, and so on, the\nrepresent the argument values, and use the table name to disambiguate column\nvalues:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"create function get_user(id int) returns users as $$\n  select * from users where users.id = $1;\n$$ language sql stable;\n")),(0,o.kt)("h3",{id:"variable-substitution"},"Variable substitution"),(0,o.kt)("p",null,"The two approaches above work well in general, but there are some cases where\nit is not enough. For example when you have an upsert (",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT...ON CONFLICT"),")\nstatement in a ",(0,o.kt)("inlineCode",{parentName:"p"},"plpgsql")," language function, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create function upsert_value(id int, value text) returns void as $$\nbegin\n  insert into my_table (id, value)\n    values(id, value)\n    /* highlight-next-line */\n    on conflict (id) -- This will error\n    do update set value = excluded.value;\nend;\n$$ language plpgsql volatile;\n")),(0,o.kt)("p",null,"In this case the ",(0,o.kt)("inlineCode",{parentName:"p"},"on conflict (id)")," causes an issue because PL/pgSQL does not\nknow if ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," refers to the table column or the function argument, and adding the\ntable name inside the parenthesis is a syntax error."),(0,o.kt)("p",null,"To solve this, you can change language to ",(0,o.kt)("inlineCode",{parentName:"p"},"sql")," which will treat columns\npreferentially. Alternatively you can tell the function to solve conflicts by\nusing the column:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"create function upsert_value(id int, value text) returns void as $$\n#variable_conflict use_column\nbegin\n  insert into my_table (id, value)\n    values(id, value)\n    on conflict (id)\n    do update set value = excluded.value;\nend;\n$$ language plpgsql volatile;\n")),(0,o.kt)("p",null,"To better understand these conflicts and solutions, refer to the PostgreSQL docs\nfor\n",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/plpgsql-implementation.html#PLPGSQL-VAR-SUBST"},"variable substitution"),"."),(0,o.kt)("h2",{id:"volatile-mutation-functions"},"VOLATILE (Mutation) Functions"),(0,o.kt)("p",null,"By default, a function is \u201cvolatile\u201d. For example, a function defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION my_function(a int, b int) RETURNS int AS $$ \u2026 $$ LANGUAGE sql;\n")),(0,o.kt)("p",null,"Is equivalent to a function defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION my_function(a int, b int) RETURNS int AS $$ \u2026 $$ LANGUAGE sql VOLATILE;\n")),(0,o.kt)("p",null,"From the PostgreSQL docs:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"VOLATILE")," indicates that the function value can change even within a single\ntable scan, so no optimizations can be made\u2026 But note that any function that\nhas side-effects must be classified volatile, even if its result is quite\npredictable, to prevent calls from being optimized away; an example is\n",(0,o.kt)("inlineCode",{parentName:"p"},"setval()"),".")),(0,o.kt)("p",null,"In simpler terms ",(0,o.kt)("inlineCode",{parentName:"p"},"VOLATILE")," basically means you are changing data or\nstate."),(0,o.kt)("p",null,"Anyone familiar with HTTP could compare a ",(0,o.kt)("inlineCode",{parentName:"p"},"VOLATILE")," function to \u201cunsafe\u201d HTTP\nmethods like ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE"),"."),(0,o.kt)("p",null,"Certain VOLATILE functions will be exposed by PostGraphile as\n",(0,o.kt)("a",{parentName:"p",href:"./custom-mutations/"},"custom mutations"),"."),(0,o.kt)("h2",{id:"stableimmutable-query-functions"},"STABLE/IMMUTABLE (Query) Functions"),(0,o.kt)("p",null,"If your function does not modify any data or state, you should declare it as\n",(0,o.kt)("inlineCode",{parentName:"p"},"STABLE"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If your function depends only on its arguments and does not fetch\ndata from other sources, nor is it dependent on configuration variables, then\nyou can declare it as ",(0,o.kt)("inlineCode",{parentName:"p"},"IMMUTABLE")," which is a stricter form of ",(0,o.kt)("inlineCode",{parentName:"p"},"STABLE"),"."),(0,o.kt)("p",{parentName:"admonition"},"We advise that you don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"IMMUTABLE")," until you become expert - stick to ",(0,o.kt)("inlineCode",{parentName:"p"},"STABLE"),".")),(0,o.kt)("p",null,"By marking your function as ",(0,o.kt)("inlineCode",{parentName:"p"},"STABLE")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"IMMUTABLE"),", PostgreSQL knows that it\ncan apply a number of optimisations, including memoization to avoiding calling\nit multiple times for the same inputs during the same statement. Memoization is\na possible choice PostgreSQL may make, it is not guaranteed."),(0,o.kt)("p",null,"Here's examples of defining functions as STABLE/IMMUTABLE:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION my_function(a int, b int) RETURNS int AS $$ \u2026 $$ LANGUAGE sql STABLE;\n\n-- or\u2026\n\nCREATE FUNCTION my_function(a int, b int) RETURNS int AS $$ \u2026 $$ LANGUAGE sql IMMUTABLE;\n\n-- or if you wanted to return a row from a table\u2026\n\nCREATE FUNCTION my_function(a int, b int) RETURNS my_table AS $$ \u2026 $$ LANGUAGE sql STABLE;\n")),(0,o.kt)("p",null,"From the PostgreSQL docs:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"IMMUTABLE")," indicates that the function cannot modify the database and always\nreturns the same result when given the same argument values; that is, it does\nnot do database lookups or otherwise use information not directly present in\nits argument list. If this option is given, any call of the function with\nall-constant arguments can be immediately replaced with the function value.")),(0,o.kt)("p",null,"and\u2026"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"STABLE")," indicates that the function cannot modify the database, and that\nwithin a single table scan it will consistently return the same result for the\nsame argument values, but that its result could change across SQL statements.\nThis is the appropriate selection for functions whose results depend on\ndatabase lookups, parameter variables (such as the current time zone), etc.\n(It is inappropriate for AFTER triggers that wish to query rows modified by\nthe current command).")),(0,o.kt)("p",null,"To use the HTTP analogy again, ",(0,o.kt)("inlineCode",{parentName:"p"},"IMMUTABLE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"STABLE")," are comparable to \u201csafe\u201d\nHTTP methods like ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HEAD"),"."),(0,o.kt)("p",null,"Certain STABLE/IMMUTABLE functions will be exposed by PostGraphile as\n",(0,o.kt)("a",{parentName:"p",href:"./custom-queries/"},"custom queries")," or ",(0,o.kt)("a",{parentName:"p",href:"./computed-columns/"},"computed columns"),"."),(0,o.kt)("h2",{id:"setof-functions---connections"},"SETOF Functions - Connections"),(0,o.kt)("p",null,"As well as scalars, compound types, and arrays of these, PostgreSQL functions\ncan also return sets. Sets emulate tables, and so it's natural for PostGraphile\nto expose these to GraphQL using ",(0,o.kt)("a",{parentName:"p",href:"./connections/"},"connections")," (or, if your\nbehaviors are configured to prefer lists, as lists)."),(0,o.kt)("p",null,"SETOF functions can be a powerful way of exposing data to the user that may be\ntoo much for them to handle all at once and require pagination."),(0,o.kt)("p",null,"To create a function that returns a connection, you could use SQL such as this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Assuming we already have a table named `person`\u2026\nCREATE FUNCTION my_function(a int, b int) RETURNS SETOF person AS $$ \u2026 $$ LANGUAGE sql STABLE;\n")),(0,o.kt)("p",null,"This function would be recognised as a ",(0,o.kt)("a",{parentName:"p",href:"./custom-queries/"},"custom query"),", and\ncould be queried like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{2}","{2}":!0},"{\n  myFunction(a: 1, b: 2, first: 2) {\n    pageInfo {\n      hasNextPage\n      hasPrevPage\n    }\n    edges {\n      cursor\n      node {\n        id\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"More information on constructing advanced queries can be found\n",(0,o.kt)("a",{parentName:"p",href:"./custom-queries/"},"here"),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The original (pre-2018?) version of this article was written by ",(0,o.kt)("a",{parentName:"em",href:"https://twitter.com/calebmer"},"Caleb\nMeredith"),"; thanks Caleb! It has been heavily\nedited and expanded since.")))}m.isMDXComponent=!0}}]);