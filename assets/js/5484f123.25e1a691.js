"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[2029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},o=void 0,c={unversionedId:"the-basics/getting-started-quickly",id:"the-basics/getting-started-quickly",title:"getting-started-quickly",description:"Run Practica.js from the Command Line",source:"@site/docs/the-basics/getting-started-quickly.md",sourceDirName:"the-basics",slug:"/the-basics/getting-started-quickly",permalink:"/the-basics/getting-started-quickly",draft:!1,editUrl:"https://github.com/practicajs/practica/tree/main/docs/docs/the-basics/getting-started-quickly.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is practica.js",permalink:"/the-basics/what-is-practica"},next:{title:"Coding with Practica",permalink:"/the-basics/coding-with-practica"}},s={},l=[{value:"Run Practica.js from the Command Line",id:"run-practicajs-from-the-command-line",level:3},{value:"Start the Project",id:"start-the-project",level:3},{value:"Next Steps",id:"next-steps",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"run-practicajs-from-the-command-line"},"Run Practica.js from the Command Line"),(0,n.kt)("p",null,"Run practica CLI and generate our default app (you can customize it using different flags):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npx @practica/create-node-app immediate --install-dependencies\n")),(0,n.kt)("p",null,"\u2728 And you're done! That's it. The code's all been generated."),(0,n.kt)("p",null,"We also have a CLI interactive mode:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npx @practica/create-node-app interactive\n")),(0,n.kt)("p",null,"Note that for now, it can generate an app that is based on Express and PostgreSQL only. Other options will get added soon"),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"start-the-project"},"Start the Project"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd {your chosen folder name}\nnpm install\n")),(0,n.kt)("p",null,"Then choose whether to start the app:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run\n")),(0,n.kt)("p",null,"or run the tests:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")),(0,n.kt)("p",null,"Pretty straight forward, right?"),(0,n.kt)("p",null,"You just got a Node.js Monorepo solution with one example component/Microservice and multiple libraries. Based on this hardened solution you can build a robust application. The example component/Microservice is located under: ",(0,n.kt)("em",{parentName:"p"},"{your chosen folder name}/services/order-service"),". This is where you'll find the API and a good spot to start your journey from."),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"next-steps"},"Next Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2705 Start coding. The code we generate is minimal by design and based on known libraries. This should help you get up to speed quickly."),(0,n.kt)("li",{parentName:"ul"},"\u2705 Read our ",(0,n.kt)("a",{parentName:"li",href:"https://practica.dev/the-basics/coding-with-practica/"},"'coding with practica'")," guide."),(0,n.kt)("li",{parentName:"ul"},"\u2705 Master it by reading our ",(0,n.kt)("a",{parentName:"li",href:"https://practica.dev"},"docs at https://practica.dev"),".")))}u.isMDXComponent=!0}}]);