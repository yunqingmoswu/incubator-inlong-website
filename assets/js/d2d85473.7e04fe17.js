"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2921],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52791:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Overview"},l=void 0,c={unversionedId:"modules/manager/overview",id:"version-0.12.0/modules/manager/overview",title:"Overview",description:"1 Introduction to Apache InLong Manager",source:"@site/versioned_docs/version-0.12.0/modules/manager/overview.md",sourceDirName:"modules/manager",slug:"/modules/manager/overview",permalink:"/docs/0.12.0/modules/manager/overview",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/manager/overview.md",tags:[],version:"0.12.0",frontMatter:{title:"Overview"},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Zookeeper Configure",permalink:"/docs/0.12.0/modules/sort/protocol_introduction"},next:{title:"Deployment",permalink:"/docs/0.12.0/modules/manager/quick_start"}},d={},u=[{value:"1 Introduction to Apache InLong Manager",id:"1-introduction-to-apache-inlong-manager",level:2},{value:"2 Architecture",id:"2-architecture",level:2},{value:"3 Module division of labor",id:"3-module-division-of-labor",level:2},{value:"4 use process",id:"4-use-process",level:2},{value:"5 data model",id:"5-data-model",level:2}],m={toc:u};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-introduction-to-apache-inlong-manager"},"1 Introduction to Apache InLong Manager"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Target positioning: Apache inlong is positioned as a one-stop integration framework for massive data, providing complete coverage of big data access scenarios from data collection, transmission, sorting, and technical capabilities.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Platform value: Users can complete task configuration, management, and indicator monitoring through the platform's built-in management and configuration platform. At the same time, the platform provides SPI extension points in the main links of the process to implement custom logic as needed. Ensure stable and efficient functions while lowering the threshold for platform use.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Apache InLong Manager is the user-oriented unified UI of the entire data access platform. After the user logs in, it will provide different function permissions and data permissions according to the corresponding role. The page provides maintenance portals for the platform's basic clusters (such as mq, sorting), and you can view basic maintenance information and capacity planning adjustments at any time. At the same time, business users can complete the creation, modification and maintenance of data access tasks, and index viewing and reconciliation functions. The corresponding background service will interact with the underlying modules when users create and start tasks, and deliver the tasks that each module needs to perform in a reasonable way. Play the role of coordinating the execution process of the serial back-end business."))),(0,o.kt)("h2",{id:"2-architecture"},"2 Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31978).Z,width:"965",height:"507"})),(0,o.kt)("h2",{id:"3-module-division-of-labor"},"3 Module division of labor"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Module"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Responsibilities"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"manager-common"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Module common code, entry exception definition, tool class, enumeration, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"manager-dao"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Database Operation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"manager-service"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Business Logic Layer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"manager-web"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Front-end interactive response interface")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"manager-workflow-engine"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Workflow Engine")))),(0,o.kt)("h2",{id:"4-use-process"},"4 use process"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(95040).Z,width:"1285",height:"852"})),(0,o.kt)("h2",{id:"5-data-model"},"5 data model"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(51481).Z,width:"1441",height:"673"})))}p.isMDXComponent=!0},51481:function(e,t,n){t.Z=n.p+"assets/images/datamodel-7c788db64ee2c4f646d063d43a8675a6.jpg"},31978:function(e,t,n){t.Z=n.p+"assets/images/inlong-manager-a3645b4c9d18fd67a2bb591656eaf4d6.png"},95040:function(e,t,n){t.Z=n.p+"assets/images/interactive-7dd8e370ae4885484e6a4576cb5de26f.jpg"}}]);