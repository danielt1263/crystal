"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[476],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,k=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return r?a.createElement(k,s(s({ref:t},u),{},{components:r})):a.createElement(k,s({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},66021:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={layout:"page",path:"/postgraphile/background-tasks/",title:"Background Tasks in PostGraphile"},s=void 0,i={unversionedId:"background-tasks",id:"background-tasks",title:"Background Tasks in PostGraphile",description:"In your GraphQL server typically most processing will be done in the",source:"@site/postgraphile/background-tasks.md",sourceDirName:".",slug:"/background-tasks",permalink:"/postgraphile/next/background-tasks",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/background-tasks.md",tags:[],version:"current",frontMatter:{layout:"page",path:"/postgraphile/background-tasks/",title:"Background Tasks in PostGraphile"},sidebar:"docs",previous:{title:"GraphQL Subscriptions",permalink:"/postgraphile/next/subscriptions"},next:{title:"Reserved keywords and table names",permalink:"/postgraphile/next/reserved-keywords"}},l={},p=[{value:"Tasks queues and workers for Postgres",id:"tasks-queues-and-workers-for-postgres",level:3},{value:"Choosing your Task Queue",id:"choosing-your-task-queue",level:4},{value:"Graphile Worker",id:"graphile-worker",level:3},{value:"Limitations",id:"limitations",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'In your GraphQL server typically most processing will be done in the\n"foreground", as part of the request-response cycle. However, since clients\ntypically wait for this request cycle to complete before allowing the user to\ncontinue to the next task, if this processing is slow (and by slow we mean\nanything over a couple hundred milliseconds) it will make your application feel\nsluggish and can frustrate your users. Because of this desire for low-latency\nAPIs, it\'s good practice to only perform essential calculations during the\nrequest-response cycle, and to "queue" additional tasks for background\nprocessing.'),(0,n.kt)("p",null,"Examples of potential background tasks include creating PDFs, sending emails,\ncalling an external API that may be slow, performing big calculations, and the\nlike. Background tasks are also a good way of dealing with tasks where temporary\nfailures are expected, for example you might not be able to send an email\nimmediately - rather than failing the request-response cycle we can just try\nagain (and again, and again) over the coming seconds, minutes, and hours.\nAnother task you might want to solve with background tasks is running code\nperiodically, detached from a user action. These are all good cases for\nbackground processing: the code runs outside of main request-response cycle,\nstoring the result somewhere (typically on the database) and (optionally)\nnotifying the client once it has finished."),(0,n.kt)("p",null,"Task queues are systems that enable background processing for an application.\nThey enable a way to persist this background processing tasks, notify the\nworkers and handle errors and re-tries."),(0,n.kt)("h3",{id:"tasks-queues-and-workers-for-postgres"},"Tasks queues and workers for Postgres"),(0,n.kt)("p",null,"There are several exisiting solutions that can integrate with a PostgreSQL\ndatabase or expose a Node.js-friendly API."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphile/worker"},"Graphile Worker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/tasks/"},"GCP Cloud Tasks")," (via Graphile Worker)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://contribsys.com/faktory/"},"Faktory")," (via Graphile Worker)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rabbitmq.com/"},"RabbitMQ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/pg-boss"},"pg-boss"))),(0,n.kt)("h4",{id:"choosing-your-task-queue"},"Choosing your Task Queue"),(0,n.kt)("p",null,"An important topic you will need to consider is how tasks are created in your\nqueue."),(0,n.kt)("p",null,"Since we generally recommend database-driven development, the recommend approach\nis to use Graphile Worker (or Graphile Worker + another task queue through task\ndelegation) since you can add jobs to the queue both from inside PostgreSQL\nfunctions (and thus triggers) and from any other source."),(0,n.kt)("p",null,"Other important considerations when choosing a task queue would be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complexity"),(0,n.kt)("li",{parentName:"ul"},"Throughput requirements"),(0,n.kt)("li",{parentName:"ul"},"DevOps complexity"),(0,n.kt)("li",{parentName:"ul"},"Tracability"),(0,n.kt)("li",{parentName:"ul"},"Privacy")),(0,n.kt)("h3",{id:"graphile-worker"},"Graphile Worker"),(0,n.kt)("p",null,"Graphile Worker is a natural fit for a PostGraphile stack due to its\nPostgreSQL-first nature. It is a simple library that runs Node.js code (or any\ncode Node.js can delegate to) when a task is queued within the database. Thanks\nto PostgreSQL's ",(0,n.kt)("inlineCode",{parentName:"p"},"LISTEN/NOTIFY")," pubsub features, Graphile Worker is notified\nwhen a task is queued and can fetch, execute, and complete a trivial task in\n2-3ms from when it was queued; this results in your system feeling very snappy."),(0,n.kt)("p",null,"Graphile Worker stores tasks into its own schema within PostgreSQL, and offers a\nsimple SQL API to create jobs. Queueing a job might look like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT graphile_worker.add_job('hello', json_build_object('name', 'Bobby Tables'));\n")),(0,n.kt)("p",null,"Tasks are created in JavaScript/TypeScript, so it fits directly into your\nPostGraphile stack"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// tasks/hello.js\nmodule.exports = async (payload, helpers) => {\n  const { name } = payload;\n  helpers.logger.info(`Hello, ${name}`);\n};\n")),(0,n.kt)("p",null,"Check the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphile/worker"},"Graphile Worker docs")," for details\non how to set up and use it."),(0,n.kt)("h4",{id:"limitations"},"Limitations"),(0,n.kt)("p",null,"Despite all the benefits, Graphile Worker stills lacks some features provided by\nother more mature tasks queues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Currently Graphile Worker doesn't expose a GUI to monitor or manage tasks."),(0,n.kt)("li",{parentName:"ul"},"??")))}d.isMDXComponent=!0}}]);