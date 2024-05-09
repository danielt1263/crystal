"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[4122],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=i,u=c["".concat(p,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7896),i=(n(2784),n(30876));const o={title:"Polymorphism"},r="Polymorphism in PostGraphile",l={unversionedId:"polymorphism",id:"polymorphism",title:"Polymorphism",description:"Polymorphism in PostgreSQL schemas can take many forms. For PostGraphile to",source:"@site/postgraphile/polymorphism.md",sourceDirName:".",slug:"/polymorphism",permalink:"/postgraphile/next/polymorphism",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/polymorphism.md",tags:[],version:"current",frontMatter:{title:"Polymorphism"},sidebar:"docs",previous:{title:"Views",permalink:"/postgraphile/next/views"},next:{title:"Refs",permalink:"/postgraphile/next/refs"}},p={},s=[{value:"@interface mode:single",id:"interface-modesingle",level:2},{value:"@interface mode:relational",id:"interface-moderelational",level:2},{value:"@interface mode:union",id:"interface-modeunion",level:2},{value:"@unionMember",id:"unionmember",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polymorphism-in-postgraphile"},"Polymorphism in PostGraphile"),(0,i.kt)("p",null,"Polymorphism in PostgreSQL schemas can take many forms. For PostGraphile to\ndetect and generate GraphQL interfaces and unions (rather than regular object\ntypes) from your database tables, you need to provide PostGraphile some hints\nor instructions; one way to do this is with smart tags. Which smart tags to\napply will depend on what shape your data is."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Under the hood, PostGraphile polymorphism is powered by\n",(0,i.kt)("a",{parentName:"p",href:"https://grafast.org/grafast/step-library/dataplan-pg/polymorphism"},"@dataplan/pg's polymorphism"),";\nsome restrictions may apply to what PostGraphile generates for polymorphic\ntypes and fields based on what ",(0,i.kt)("inlineCode",{parentName:"p"},"@dataplan/pg")," supports.")),(0,i.kt)("h2",{id:"interface-modesingle"},"@interface mode:single"),(0,i.kt)("p",null,"In the simplest case you have a single table that represents all of your\npossible polymorphic types, perhaps using a 'type' column or similar to\nindicate the underlying type. For this style, you should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add the ",(0,i.kt)("inlineCode",{parentName:"li"},"@interface"),"\nsmart tag to the table, with ",(0,i.kt)("inlineCode",{parentName:"li"},"mode:single")," and the name of the type column indicated via the\n",(0,i.kt)("inlineCode",{parentName:"li"},"type:")," parameter."),(0,i.kt)("li",{parentName:"ul"},"add ",(0,i.kt)("inlineCode",{parentName:"li"},"@type")," smart tags to the table for each possible value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," column")),(0,i.kt)("p",null,"For example you might have a table like this one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create type polymorphic.item_type as enum (\n  'TOPIC',\n  'POST',\n  'DIVIDER',\n  'CHECKLIST',\n  'CHECKLIST_ITEM'\n);\n\ncreate table polymorphic.single_table_items (\n  id serial primary key,\n\n  -- Rails-style polymorphic column\n  type polymorphic.item_type not null default 'POST'::polymorphic.item_type,\n\n  -- Shared attributes:\n  parent_id int references polymorphic.single_table_items on delete cascade,\n  root_topic_id int constraint single_table_items_root_topic_fkey references polymorphic.single_table_items on delete cascade,\n  position bigint not null default 0,\n  created_at timestamptz not null default now(),\n  updated_at timestamptz not null default now(),\n  is_explicitly_archived bool not null default false,\n  archived_at timestamptz,\n\n  -- Attributes that may be used by one or more item subtypes.\n  title text,\n  description text,\n  note text,\n  color text\n);\n\n")),(0,i.kt)("p",null,"To have PostGraphile generate an interface for this table, you might use a comment such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"comment on table polymorphic.single_table_items is $$\n  @interface mode:single type:type\n  @type TOPIC name:SingleTableTopic attributes:title\n  @type POST name:SingleTablePost attributes:title,description,note\n  @type DIVIDER name:SingleTableDivider attributes:title,color\n  @type CHECKLIST name:SingleTableChecklist attributes:title\n  @type CHECKLIST_ITEM name:SingleTableChecklistItem attributes:description,note\n  $$;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@type")," tags take the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," column as the first argument and\nthen accept ",(0,i.kt)("inlineCode",{parentName:"p"},"name:")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"attributes:")," arguments; ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," being the name to create\nthe GraphQL object type with and ",(0,i.kt)("inlineCode",{parentName:"p"},"attributes:")," to be a comma-separated list of any\ncolumns that are specific to this type (and shouldn't be on the main\ninterface)."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," column doesn't have to be an enum, any string-y type is fine but do\nensure that all possible values it can have are declared in your ",(0,i.kt)("inlineCode",{parentName:"p"},"@type")," smart\ntags!")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For polymorphism to work, your table must have a primary key; we\ncurrently do not automatically detect the lack of primary key, so\nyou may receive unexpected results (typically ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"s) without one.\nIf you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"table"),", make sure to define a\nprimary key using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@primaryKey")," smart tag.")),(0,i.kt)("h2",{id:"interface-moderelational"},"@interface mode:relational"),(0,i.kt)("p",null,"A slightly more complex case is having a table that defines the common fields\nas above, but then you join in additional data from other tables in a\nrelational manner. This is similar to the above, but we use ",(0,i.kt)("inlineCode",{parentName:"p"},"mode:relational"),"\nand the ",(0,i.kt)("inlineCode",{parentName:"p"},"@type")," tags declare the table that each type ",(0,i.kt)("inlineCode",{parentName:"p"},"references")," rather than\nthe columns that are specific to that type."),(0,i.kt)("p",null,"For example, for the following set of related relationally-polymorphic tables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table polymorphic.relational_items (\n  id serial primary key,\n\n  -- This column is used to tell us which table we need to join to\n  type polymorphic.item_type not null default 'POST'::polymorphic.item_type,\n\n  -- Shared attributes (also 'id'):\n  parent_id int references polymorphic.relational_items on delete cascade,\n  root_topic_id int, -- constraint being created below\n  position bigint not null default 0,\n  created_at timestamptz not null default now(),\n  updated_at timestamptz not null default now(),\n  is_explicitly_archived bool not null default false,\n  archived_at timestamptz\n);\n\ncreate table polymorphic.relational_topics (\n  id int primary key references polymorphic.relational_items,\n  title text not null\n);\nalter table polymorphic.relational_items add constraint relational_items_root_topic_fkey foreign key (root_topic_id) references polymorphic.relational_topics on delete cascade;\ncreate table polymorphic.relational_posts (\n  id int primary key references polymorphic.relational_items,\n  title text not null,\n  description text default '-- Enter description here --',\n  note text\n);\ncreate table polymorphic.relational_dividers (\n  id int primary key references polymorphic.relational_items,\n  title text,\n  color text\n);\ncreate table polymorphic.relational_checklists (\n  id int primary key references polymorphic.relational_items,\n  title text not null\n);\ncreate table polymorphic.relational_checklist_items (\n  id int primary key references polymorphic.relational_items,\n  description text not null,\n  note text\n);\n")),(0,i.kt)("p",null,"You might use a comment such as this one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"comment on table polymorphic.relational_items is $$\n  @interface mode:relational type:type\n  @type TOPIC references:relational_topics\n  @type POST references:relational_posts\n  @type DIVIDER references:relational_dividers\n  @type CHECKLIST references:relational_checklists\n  @type CHECKLIST_ITEM references:relational_checklist_items\n  $$;\n")),(0,i.kt)("h2",{id:"interface-modeunion"},"@interface mode:union"),(0,i.kt)("p",null,"Sometimes you might have multiple independent tables that you want to be part\nof an interface, for this you can define a composite type that declares the\nshared attributes, and then add the ",(0,i.kt)("inlineCode",{parentName:"p"},"@interface")," smart tag to this composite\ntype, with ",(0,i.kt)("inlineCode",{parentName:"p"},"mode:union")," (this is an SQL ",(0,i.kt)("inlineCode",{parentName:"p"},"union"),", not a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"union"),"!)."),(0,i.kt)("p",null,"For example, imagine that we have a table for AWS applications and a table for\nGCP applications (and maybe more for other cloud providers):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table polymorphic.aws_applications (\n  id int primary key,\n  name text not null,\n  last_deployed timestamptz,\n  person_id int references polymorphic.people,\n  organization_id int references polymorphic.organizations,\n  aws_id text\n);\n\ncreate table polymorphic.gcp_applications (\n  id int primary key,\n  name text not null,\n  last_deployed timestamptz,\n  person_id int references polymorphic.people,\n  organization_id int references polymorphic.organizations,\n  gcp_id text\n);\n")),(0,i.kt)("p",null,"To have all of these tables implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," interface, we might\nadd the following to our database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Declare a composite type to detail the common fields\ncreate type polymorphic.applications as (\n  id int,\n  name text,\n  last_deployed timestamptz\n);\n\n-- Mark this composite type as an interface named Application\ncomment on type polymorphic.applications is $$\n  @interface mode:union\n  @name Application\n  $$;\n\n-- Have our tables implement this interface\ncomment on table polymorphic.aws_applications is $$\n  @implements Application\n  $$;\ncomment on table polymorphic.gcp_applications is $$\n  @implements Application\n  $$;\n")),(0,i.kt)("h2",{id:"unionmember"},"@unionMember"),(0,i.kt)("p",null,"For cases where you want multiple tables that don't necessarily share any\nfields or relations to be part of a GraphQL union, you can give them the\n",(0,i.kt)("inlineCode",{parentName:"p"},"@unionMember")," smart tag."),(0,i.kt)("p",null,"For example, consider these independent tables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table polymorphic.people (\n  person_id serial primary key,\n  username text not null unique\n);\n\ncreate table polymorphic.organizations (\n  organization_id serial primary key,\n  name text not null unique\n);\n")),(0,i.kt)("p",null,"We could define a union that contains them both via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"comment on table polymorphic.people is $$\n  @unionMember PersonOrOrganization\n  $$;\ncomment on table polymorphic.organizations is $$\n  @unionMember PersonOrOrganization\n  $$;\n")),(0,i.kt)("p",null,"And we could reference this type from an ",(0,i.kt)("inlineCode",{parentName:"p"},"@ref")," smart tag; for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table polymorphic.log_entries (\n  id serial primary key,\n  person_id int references polymorphic.people on delete cascade,\n  organization_id int references polymorphic.organizations on delete cascade,\n  text text not null,\n  constraint owned_by_person_or_organization check ((person_id is null) <> (organization_id is null))\n);\n\ncomment on table polymorphic.log_entries is $$\n  @ref author to:PersonOrOrganization singular\n  @refVia author via:(person_id)->people(person_id)\n  @refVia author via:(organization_id)->organizations(organization_id)\n  $$;\n")),(0,i.kt)("p",null,"Now ",(0,i.kt)("inlineCode",{parentName:"p"},"LogEntry.author")," will be a ",(0,i.kt)("inlineCode",{parentName:"p"},"PersonOrOrganization")," by following the given relationships."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"log_entries")," table only has one reference to ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," and one to\n",(0,i.kt)("inlineCode",{parentName:"p"},"organizations")," we can use a shorthand for the ",(0,i.kt)("inlineCode",{parentName:"p"},"via:"),"s:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"comment on table polymorphic.log_entries is $$\n  @ref author to:PersonOrOrganization singular\n  @refVia author via:people\n  @refVia author via:organizations\n  $$;\n"))))}d.isMDXComponent=!0}}]);