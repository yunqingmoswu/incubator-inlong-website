"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2604],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},27969:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={title:"Deployment",sidebar_position:2},u=void 0,l={unversionedId:"modules/dashboard/quick_start",id:"modules/dashboard/quick_start",title:"Deployment",description:"Prepare Docker Image",source:"@site/docs/modules/dashboard/quick_start.md",sourceDirName:"modules/dashboard",slug:"/modules/dashboard/quick_start",permalink:"/docs/next/modules/dashboard/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/dashboard/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/dashboard/overview"},next:{title:"Overview",permalink:"/docs/next/modules/sort-standalone/overview"}},s={},d=[{value:"Prepare Docker Image",id:"prepare-docker-image",level:2},{value:"Run",id:"run",level:2}],p={toc:d};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prepare-docker-image"},"Prepare Docker Image"),(0,a.kt)("p",null,"pull image from central hub\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull inlong/dashboard:latest\n")),(0,a.kt)("p",null,"or build image from source\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn package -DskipTests -Pdocker -pl inlong-dashboard\n")),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# MANAGER_API_ADDRESS must be replaced by inlong-manager address\ndocker run -d --name dashboard -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/dashboard\n")))}m.isMDXComponent=!0}}]);