"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[9054],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),h=r,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},65485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7896),r=(t(2784),t(30876));const o={layout:"page",path:"/postgraphile/running-postgraphile-as-a-library-in-docker/",title:"Running PostGraphile as a library in Docker"},i=void 0,l={unversionedId:"running-postgraphile-as-a-library-in-docker",id:"version-4.x/running-postgraphile-as-a-library-in-docker",title:"Running PostGraphile as a library in Docker",description:"The following guide describes how to run a network of Docker containers on a",source:"@site/versioned_docs/version-4.x/running-postgraphile-as-a-library-in-docker.md",sourceDirName:".",slug:"/running-postgraphile-as-a-library-in-docker",permalink:"/postgraphile/current/running-postgraphile-as-a-library-in-docker",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/versioned_docs/version-4.x/running-postgraphile-as-a-library-in-docker.md",tags:[],version:"4.x",frontMatter:{layout:"page",path:"/postgraphile/running-postgraphile-as-a-library-in-docker/",title:"Running PostGraphile as a library in Docker"},sidebar:"docs",previous:{title:"Running PostGraphile in Docker",permalink:"/postgraphile/current/running-postgraphile-in-docker"},next:{title:"Deploying to Heroku",permalink:"/postgraphile/current/deploying-heroku"}},p={},s=[{value:"Create PostGraphile Container",id:"create-postgraphile-container",level:3},{value:"Update Environment Variables",id:"update-environment-variables",level:4},{value:"Create Node.js Application",id:"create-nodejs-application",level:4},{value:"Create PostGraphile Dockerfile",id:"create-postgraphile-dockerfile",level:4},{value:"Update Docker Compose File",id:"update-docker-compose-file",level:4},{value:"Build Images And Run Containers",id:"build-images-and-run-containers",level:3},{value:"Build Images",id:"build-images",level:4},{value:"Run Containers",id:"run-containers",level:4},{value:"Re-initialize The Database",id:"re-initialize-the-database",level:4}],d={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following guide describes how to run a network of Docker containers on a\nlocal machine, including one container for a PostgreSQL database and one\ncontainer running PostGraphile."),(0,r.kt)("p",null,"It is following the same use case as the guide\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./running-postgraphile-in-docker/"},"Running PostGraphile in Docker"))," with one\ndifference, the PostGraphile container runs a ",(0,r.kt)("strong",{parentName:"p"},"Node.js application using\nPostGraphile as library")," instead of running PostGraphile via CLI. Running\nPostGraphile as a library opens doors to greater customization possibilities."),(0,r.kt)("p",null,"Follow the steps provided in the guide\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./running-postgraphile-in-docker/"},"Running PostGraphile in Docker"))," and come\nback to this guide to create the GraphQL container."),(0,r.kt)("h3",{id:"create-postgraphile-container"},"Create PostGraphile Container"),(0,r.kt)("p",null,"At this stage, the repository should look like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/\n\u251c\u2500 db/\n|  \u251c\u2500 init/\n|  |  \u251c\u2500 00-database.sql\n|  |  \u2514\u2500 01-data.sql\n|  \u2514\u2500 Dockerfile\n\u251c\u2500 .env\n\u2514\u2500 docker-compose.yml\n")),(0,r.kt)("h4",{id:"update-environment-variables"},"Update Environment Variables"),(0,r.kt)("p",null,"Update the file ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"PORT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," which will be used\nby PostGraphile to connect to the PostgreSQL database. Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL"),"\nfollows the syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres://<user>:<password>@db:5432/<db_name>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[...]\n# GRAPHQL\n# Parameters used by graphql container\nDATABASE_URL=postgres://postgres:change_me@db:5432/forum_example\nPORT=5433\n")),(0,r.kt)("h4",{id:"create-nodejs-application"},"Create Node.js Application"),(0,r.kt)("p",null,"Create a new folder ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," at the root of the repository. It will be used to\nstore the files necessary to create the PostGraphile container. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql"),"\nfolder, create a subfolder ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," and add a file ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," into it with the\nfollowing content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "postgraphile-as-library",\n  "version": "0.0.1",\n  "description": "PostGraphile as a library in a dockerized Node.js application.",\n  "author": "Alexis ROLLAND",\n  "license": "Apache-2.0",\n  "main": "server.js",\n  "keywords": ["nodejs", "postgraphile"],\n  "dependencies": {\n    "postgraphile": "^4.5.5",\n    "postgraphile-plugin-connection-filter": "^1.1.3"\n  }\n}\n')),(0,r.kt)("p",null,"This file will be used by NPM package manager to install the dependencies in the\nNode.js container. In particular ",(0,r.kt)("inlineCode",{parentName:"p"},"postgraphile")," and the excellent plugin\n",(0,r.kt)("inlineCode",{parentName:"p"},"postgraphile-plugin-connection-filter"),"."),(0,r.kt)("p",null,"In the same ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," folder, create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," with the following\ncontent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const http = require("http");\nconst { postgraphile } = require("postgraphile");\n\nhttp\n  .createServer(\n    postgraphile(process.env.DATABASE_URL, "public", {\n      watchPg: true,\n      graphiql: true,\n      enhanceGraphiql: true,\n    }),\n  )\n  .listen(process.env.PORT);\n')),(0,r.kt)("h4",{id:"create-postgraphile-dockerfile"},"Create PostGraphile Dockerfile"),(0,r.kt)("p",null,"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," folder (not in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"src"),")\nwith the following content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM node:alpine\nLABEL description="Instant high-performance GraphQL API for your PostgreSQL database https://github.com/graphile/postgraphile"\n\n# Set Node.js app folder\nRUN mkdir -p /home/node/app/node_modules\nWORKDIR /home/node/app\n\n# Copy dependencies\nCOPY ./src/package*.json .\nRUN chown -R node:node /home/node/app\n\n# Install dependencies\nUSER node\nRUN npm install\n\n# Copy application files\nCOPY --chown=node:node ./src .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("h4",{id:"update-docker-compose-file"},"Update Docker Compose File"),(0,r.kt)("p",null,"Update the file ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," section to include the\nGraphQL service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.3"\nservices:\n    db: [...]\n\n    graphql:\n        container_name: forum-example-graphql\n        restart: always\n        image: forum-example-graphql\n        build:\n            context: ./graphql\n        env_file:\n            - ./.env\n        depends_on:\n            - db\n        networks:\n            - network\n        ports:\n            - 5433:5433\n[...]\n')),(0,r.kt)("p",null,"At this stage, the repository should look like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/\n\u251c\u2500 db/\n|  \u251c\u2500 init/\n|  |  \u251c\u2500 00-database.sql\n|  |  \u2514\u2500 01-data.sql\n|  \u2514\u2500 Dockerfile\n\u251c\u2500 graphql/\n|  \u251c\u2500 src/\n|  |  \u251c\u2500 package.json\n|  |  \u2514\u2500 server.js\n|  \u2514\u2500 Dockerfile\n\u251c\u2500 .env\n\u2514\u2500 docker-compose.yml\n")),(0,r.kt)("h3",{id:"build-images-and-run-containers"},"Build Images And Run Containers"),(0,r.kt)("h4",{id:"build-images"},"Build Images"),(0,r.kt)("p",null,"You can build the Docker images by executing the following command from the root\nof the repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Build images for all services in docker-compose.yml\n$ docker-compose build\n\n# You can also build images one by one\n# For instance you can build the database image like this\n$ docker-compose build db\n\n# And build the graphql image like this\n$ docker-compose build graphql\n")),(0,r.kt)("h4",{id:"run-containers"},"Run Containers"),(0,r.kt)("p",null,"You can run the Docker containers by executing the following command from the\nroot of the repository. Note when running the database container for the first\ntime, Docker will automatically create a Docker Volume to persist the data from\nthe database. The Docker Volume is automatically named as\n",(0,r.kt)("inlineCode",{parentName:"p"},"<your_repository_name>_db"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Run containers for all services in docker-compose.yml\n$ docker-compose up\n\n# Run containers as daemon (in background)\n$ docker-compose up -d\n\n# Run only the database container as daemon\n$ docker-compose up -d db\n\n# Run only the GraphQL container as daemon\n$ docker-compose up -d graphql\n")),(0,r.kt)("p",null,"Each container can be accessed at the following addresses. Note if you run\nDocker Toolbox on Windows Home, you can get your Docker machine IP address with\nthe command ",(0,r.kt)("inlineCode",{parentName:"p"},"$ docker-machine ip default"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Container"),(0,r.kt)("th",{parentName:"tr",align:null},"Docker on Linux / Windows Pro"),(0,r.kt)("th",{parentName:"tr",align:null},"Docker on Windows Home"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GraphQL API Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://localhost:5433/graphiql")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://your_docker_machine_ip:5433/graphiql"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GraphQL API"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://localhost:5433/graphql")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://your_docker_machine_ip:5433/graphql"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL Database"),(0,r.kt)("td",{parentName:"tr",align:null},"host: ",(0,r.kt)("inlineCode",{parentName:"td"},"localhost"),", port: ",(0,r.kt)("inlineCode",{parentName:"td"},"5432")),(0,r.kt)("td",{parentName:"tr",align:null},"host: ",(0,r.kt)("inlineCode",{parentName:"td"},"your_docker_machine_ip"),", port: ",(0,r.kt)("inlineCode",{parentName:"td"},"5432"))))),(0,r.kt)("h4",{id:"re-initialize-the-database"},"Re-initialize The Database"),(0,r.kt)("p",null,"In case you do changes to the database schema by modifying the files in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/db/init"),", you will need to re-initialize the database to see these changes.\nThis means you need to delete the Docker Volume, the database Docker Image and\nrebuild it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Stop running containers\n$ docker-compose down\n\n# List Docker volumes\n$ docker volume ls\n\n# Delete volume\n$ docker volume rm <your_repository_name>_db\n\n# Delete database image to force rebuild\n$ docker rmi db\n\n# Run containers (will automatically rebuild the image)\n$ docker-compose up\n")))}u.isMDXComponent=!0}}]);