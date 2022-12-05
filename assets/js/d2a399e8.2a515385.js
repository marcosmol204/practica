"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[366],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>m});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},p=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},h={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||a;return t?r.createElement(d,i(i({ref:o},p),{},{components:t})):r.createElement(d,i({ref:o},p))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4355:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const a={slug:"monorepo-backend",title:"Which Monorepo is right for a Node.js BACKEND\xa0now?",authors:["goldbergyoni","michaelsalomon"],tags:["monorepo","decisions"]},i="Which Monorepo is right for a Node.js BACKEND\xa0now?",s={permalink:"/blog/monorepo-backend",editUrl:"https://github.com/practicajs/practica/tree/main/docs/blog/which-monorepo/index.md",source:"@site/blog/which-monorepo/index.md",title:"Which Monorepo is right for a Node.js BACKEND\xa0now?",description:"As a Node.js starter, choosing the right libraries and frameworks for our users is the bread and butter of our work in Practica.js. In this post, we'd like to share our considerations in choosing our monorepo tooling",date:"2022-11-10T07:09:54.000Z",formattedDate:"November 10, 2022",tags:[{label:"monorepo",permalink:"/blog/tags/monorepo"},{label:"decisions",permalink:"/blog/tags/decisions"}],readingTime:16.925,hasTruncateMarker:!0,authors:[{name:"Yoni Goldberg",title:"Practica.js core maintainer",url:"https://github.com/goldbergyoni",imageURL:"https://github.com/goldbergyoni.png",key:"goldbergyoni"},{name:"Michael Salomon",title:"Practica.js core maintainer",url:"https://github.com/mikicho",imageURL:"https://avatars.githubusercontent.com/u/11459632?v=4",key:"michaelsalomon"}],frontMatter:{slug:"monorepo-backend",title:"Which Monorepo is right for a Node.js BACKEND\xa0now?",authors:["goldbergyoni","michaelsalomon"],tags:["monorepo","decisions"]},nextItem:{title:"Popular Node.js patterns and tools to re-consider",permalink:"/blog/popular-nodejs-pattern-and-tools-to-reconsider"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"What are we looking\xa0at",id:"what-are-we-lookingat",level:2}],p={toc:c};function h(e){let{components:o,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As a Node.js starter, choosing the right libraries and frameworks for our users is the bread and butter of our work in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/practicajs/practica"},"Practica.js"),". In this post, we'd like to share our considerations in choosing our monorepo tooling"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Monorepos",src:t(1377).Z,width:"1400",height:"796"})),(0,n.kt)("h2",{id:"what-are-we-lookingat"},"What are we looking\xa0at"),(0,n.kt)("p",null,"The Monorepo market is hot like fire. Weirdly, now when the demand for Monoreps is exploding, one of the leading libraries \u2014  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna/issues/2703"},"Lerna- has just retired."),"  When looking closely, it might not be just a coincidence \u2014 With so many disruptive and shiny features brought on by new vendors, Lerna failed to keep up with the pace and stay relevant. This bloom of new tooling gets many confused \u2014 What is the right choice for my next project? What should I look at when choosing a Monorepo tool? This post is all about curating this information overload, covering the new tooling, emphasizing what is important, and finally share some recommendations. If you are here for tools and features, you\u2019re in the right place, although you might find yourself on a soul-searching journey to what is your desired development workflow."),(0,n.kt)("p",null,"This post is concerned with backend-only and Node.js. It also scoped to  ",(0,n.kt)("em",{parentName:"p"},"typical"),"  business solutions. If you\u2019re Google/FB developer who is faced with 8,000 packages \u2014 sorry, you need special gear. Consequently, monster Monorepo tooling like  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/thundergolfer/example-bazel-monorepo"},"Bazel"),"  is left-out. We will cover here some of the most popular Monorepo tools including Turborepo, Nx, PNPM, Yarn/npm workspace, and Lerna (although it\u2019s not actually maintained anymore \u2014 it\u2019s a good baseline for comparison)."),(0,n.kt)("p",null,"Let\u2019s start? When human beings use the term Monorepo, they typically refer to one or more of the following  ",(0,n.kt)("em",{parentName:"p"},"4 layers below.")," Each one of them can bring value to your project, each has different consequences, tooling, and features:"))}h.isMDXComponent=!0},1377:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/monorepo-high-level-291b29cc962144a43d78143889ba5d3b.png"}}]);