"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[630],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7896),a=(n(2784),n(30876));const o={layout:"page",path:"/postgraphile/deploying-docker/",title:"Deploying with Docker"},i=void 0,l={unversionedId:"deploying-docker",id:"deploying-docker",title:"Deploying with Docker",description:"This documentation is copied from Version 4 and has not been updated to Version",source:"@site/postgraphile/deploying-docker.md",sourceDirName:".",slug:"/deploying-docker",permalink:"/postgraphile/next/deploying-docker",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/postgraphile/website/postgraphile/deploying-docker.md",tags:[],version:"current",frontMatter:{layout:"page",path:"/postgraphile/deploying-docker/",title:"Deploying with Docker"},sidebar:"docs",previous:{title:"Deploying to Heroku",permalink:"/postgraphile/next/deploying-heroku"},next:{title:"Deploying to AWS Lambda",permalink:"/postgraphile/next/deploying-lambda"}},p={},s=[{value:"Custom Dockerfile",id:"custom-dockerfile",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This documentation is copied from Version 4 and has not been updated to Version\n5 yet; it may not be valid.")),(0,a.kt)("p",null,"PostGraphile has an official Docker image which is suitable to use if you don't\nneed custom plugins and are deploying PostGraphile as standalone:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/graphile/postgraphile/"},"https://hub.docker.com/r/graphile/postgraphile/")),(0,a.kt)("p",null,"Our Docker images are versioned:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"graphile/postgraphile:4"),' will give you the latest stable in the "v4.x.x" line\n(no alphas, betas, rcs); ',(0,a.kt)("strong",{parentName:"li"},"this is the recommended version to use")),(0,a.kt)("li",{parentName:"ul"},"Every new versioned git tag will be available using the exact same tag; e.g.\n",(0,a.kt)("inlineCode",{parentName:"li"},"v5.6.7-alpha.8")," would become ",(0,a.kt)("inlineCode",{parentName:"li"},"graphile/postgraphile:v5.6.7-alpha.8")),(0,a.kt)("li",{parentName:"ul"},"Every new ",(0,a.kt)("inlineCode",{parentName:"li"},"vX.Y.Z")," git tag (i.e. no alpha/beta/rc) will automatically release\n",(0,a.kt)("inlineCode",{parentName:"li"},"graphile/postgraphile:X-Y")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"graphile/postgraphile:X-Y-Z")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"graphile/postgraphile:latest")," will give you the latest ",(0,a.kt)("em",{parentName:"li"},"stable")," (but beware\nof major version bumps!)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"graphile/postgraphile:next")," will give you the equivalent of what's on\n",(0,a.kt)("inlineCode",{parentName:"li"},"master")," right now (i.e. pre-release/bleeding edge/nightly)")),(0,a.kt)("p",null,"From time to time ",(0,a.kt)("inlineCode",{parentName:"p"},"graphile/postgraphile:4")," may lag behind where it should be\nbecause it's the only manual step in the above. If this happens, give Benjie a\npoke over Discord and he'll push the latest v4.x.y tag to the ",(0,a.kt)("inlineCode",{parentName:"p"},"v4")," branch via\n",(0,a.kt)("inlineCode",{parentName:"p"},"git push origin v4.x.y:v4"),"."),(0,a.kt)("p",null,"A request was made for clarification on why there are Docker versions with dots\nand other Docker versions with dashes; hopefully this clears things up:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"X-Y")," are the versions that you should use, they will be updated over\ntime with compatible bug fixes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-Y-Z")," for completeness, and may include alpha/beta/etc versions of that\nspecific release in future"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vX.Y.Z-foo.A")," or whatever are the explicit git tags which will only ever\nbuild once and will not be kept up to date as the project advances. Use these\nif you need to pin an explicit version... explicitly.")),(0,a.kt)("h3",{id:"custom-dockerfile"},"Custom Dockerfile"),(0,a.kt)("p",null,"Should you want to deploy a more custom app then a custom Dockerfile is likely\nin order. To reduce the size of your final image, we recommend using a\nmulti-stage build."),(0,a.kt)("p",null,"There's a few critical things to keep in mind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PostGraphile CLI listens, by default, on ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost"),"; you may need to override\nthis, e.g. with ",(0,a.kt)("inlineCode",{parentName:"li"},"--host 0.0.0.0")),(0,a.kt)("li",{parentName:"ul"},"PostGraphile needs to be able to connect to your database; ensure that Docker\nis networked such that this is possible")),(0,a.kt)("p",null,"To speed up builds, we recommend you pay attention to your ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore")," file;\nhere's an example to get you started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# .dockerignore\n.env\n.git\n.github\n.next\n.vscode\nnode_modules\n\n*Dockerfile*\n*docker-compose*\n\n**/dist\n**/__tests__\n")),(0,a.kt)("p",null,"The content of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," will vary greatly depending on your repository\nsetup, but here's an example for inspiration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Dockerfile\n\n# Global args, set before the first FROM, shared by all stages\nARG NODE_ENV="production"\n\n################################################################################\n# Build stage 1 - `yarn build`\n\nFROM node:12-alpine as builder\n# Import our shared args\nARG NODE_ENV\n\n# Cache node_modules for as long as possible\nCOPY package.json yarn.lock /app/\nWORKDIR /app/\nRUN yarn install --frozen-lockfile --production=false --no-progress\n\n# Copy over the server source code\nCOPY server/ /app/server/\n\n# Finally run the build script\nRUN yarn run build\n\n################################################################################\n# Build stage 2 - COPY the relevant things (multiple steps)\n\nFROM node:12-alpine as clean\n# Import our shared args\nARG NODE_ENV\n\n# Copy over selectively just the tings we need, try and avoid the rest\nCOPY --from=builder /app/package.json /app/yarn.lock /app/\nCOPY --from=builder /app/server/dist/ /app/server/dist/\n\n################################################################################\n# Build stage FINAL - COPY everything, once, and then do a clean `yarn install`\n\nFROM node:12-alpine\n# Import our shared args\nARG NODE_ENV\n\nEXPOSE 5000\nWORKDIR /app/\n# Copy everything from stage 2, it\'s already been filtered\nCOPY --from=clean /app/ /app/\n\n# Install yarn ASAP because it\'s the slowest\nRUN yarn install --frozen-lockfile --production=true --no-progress\n\nLABEL description="My PostGraphile-powered server"\n\n# You might want to disable GRAPHILE_TURBO if you have issues\nENV GRAPHILE_TURBO=1\nENV NODE_ENV=$NODE_ENV\nENTRYPOINT yarn start\n')))}c.isMDXComponent=!0}}]);