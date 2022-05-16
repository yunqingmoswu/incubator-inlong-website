"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4619],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,f=d["".concat(c,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u603b\u89c8"},c=void 0,p={unversionedId:"modules/manager/overview",id:"version-1.1.0/modules/manager/overview",title:"\u603b\u89c8",description:"1 Apache InLong Manager\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/modules/manager/overview.md",sourceDirName:"modules/manager",slug:"/modules/manager/overview",permalink:"/zh-CN/docs/modules/manager/overview",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.1.0/modules/manager/overview.md",tags:[],version:"1.1.0",frontMatter:{title:"\u603b\u89c8"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6d41\u793a\u4f8b",permalink:"/zh-CN/docs/modules/sort/dataflow_example"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/manager/quick_start"}},u={},m=[{value:"1 Apache InLong Manager\u4ecb\u7ecd",id:"1-apache-inlong-manager\u4ecb\u7ecd",level:2},{value:"2 Architecture",id:"2-architecture",level:2},{value:"3 \u6a21\u5757\u5206\u5de5",id:"3-\u6a21\u5757\u5206\u5de5",level:2},{value:"4 \u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b",id:"4-\u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"5 \u6570\u636e\u6a21\u578b",id:"5-\u6570\u636e\u6a21\u578b",level:2}],d={toc:m};function s(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-apache-inlong-manager\u4ecb\u7ecd"},"1 Apache InLong Manager\u4ecb\u7ecd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u6807\u5b9a\u4f4d\uff1aApache inlong \u5b9a\u4f4d\u4e3a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u5b8c\u6574\u8986\u76d6\u5927\u6570\u636e\u63a5\u5165\u573a\u666f\u4ece\u6570\u636e\u91c7\u96c6\u3001\u4f20\u8f93\u3001\u5206\u62e3\u3001\u843d\u5730\u7684\u6280\u672f\u80fd\u529b\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5e73\u53f0\u4ef7\u503c\uff1a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5e73\u53f0\u4e2d\u81ea\u5e26\u7684\u7ba1\u7406\u3001\u914d\u7f6e\u5e73\u53f0\u5b8c\u6210\u4efb\u52a1\u7684\u914d\u7f6e\u3001\u7ba1\u7406\u3001\u6307\u6807\u76d1\u63a7\uff0c\u540c\u65f6\u901a\u8fc7\u5e73\u53f0\u5728\u6d41\u7a0b\u4e2d\u5404\u4e3b\u8981\u73af\u8282\u63d0\u4f9bSPI\u6269\u5c55\u70b9\u6309\u9700\u8981\u5b9e\u73b0\u81ea\u5b9a\u4e49\u903b\u8f91\u3002\u4fdd\u8bc1\u529f\u80fd\u7a33\u5b9a\u9ad8\u6548\u7684\u540c\u65f6\u964d\u4f4e\u5e73\u53f0\u4f7f\u7528\u95e8\u69db\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apache InLong Manager\u4f5c\u4e3a\u6574\u4e2a\u6570\u636e\u96c6\u6210\u5e73\u53f0\u9762\u5411\u7528\u6237\u7684\u7edf\u4e00\u7ba1\u7406\u5165\u53e3\uff0c\u7528\u6237\u767b\u5f55\u540e\u4f1a\u6839\u636e\u5bf9\u5e94\u89d2\u8272\u63d0\u4f9b\u4e0d\u540c\u7684\u529f\u80fd\u6743\u9650\u4ee5\u53ca\u6570\u636e\u6743\u9650\u3002\u9875\u9762\u63d0\u4f9b\u5e73\u53f0\u5404\u57fa\u7840\u96c6\u7fa4\uff08\u5982mq\u3001\u5206\u62e3\uff09\u7ef4\u62a4\u5165\u53e3\uff0c\u53ef\u968f\u65f6\u67e5\u770b\u7ef4\u62a4\u57fa\u672c\u4fe1\u606f\u3001\u5bb9\u91cf\u89c4\u5212\u8c03\u6574\u3002\u540c\u65f6\u4e1a\u52a1\u7528\u6237\u53ef\u5b8c\u6210\u6570\u636e\u63a5\u5165\u4efb\u52a1\u7684\u521b\u5efa\u3001\u4fee\u6539\u7ef4\u62a4\u3001\u6307\u6807\u67e5\u770b\u3001\u63a5\u5165\u5bf9\u8d26\u7b49\u529f\u80fd\u3002\u5176\u5bf9\u5e94\u7684\u540e\u53f0\u670d\u52a1\u5728\u7528\u6237\u521b\u5efa\u5e76\u542f\u52a8\u4efb\u52a1\u7684\u540c\u65f6\u4f1a\u4e0e\u5e95\u5c42\u5404\u6a21\u5757\u8fdb\u884c\u6570\u636e\u4ea4\u4e92\uff0c\u5c06\u5404\u6a21\u5757\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\u901a\u8fc7\u5408\u7406\u7684\u65b9\u5f0f\u4e0b\u53d1\u3002\u8d77\u5230\u534f\u8c03\u4e32\u8054\u540e\u53f0\u4e1a\u52a1\u6267\u884c\u6d41\u7a0b\u7684\u4f5c\u7528\u3002"))),(0,i.kt)("h2",{id:"2-architecture"},"2 Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(87325).Z,width:"965",height:"507"})),(0,i.kt)("h2",{id:"3-\u6a21\u5757\u5206\u5de5"},"3 \u6a21\u5757\u5206\u5de5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6a21\u5757"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u804c\u8d23"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"manager-common"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u5757\u516c\u5171\u4ee3\u7801\uff0c\u5165\u5f02\u5e38\u5b9a\u4e49\uff0c\u5de5\u5177\u7c7b\uff0c\u679a\u4e3e\u7b49")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"manager-dao"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5e93\u64cd\u4f5c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"manager-service"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u903b\u8f91\u5c42")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"manager-web"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u524d\u7aef\u4ea4\u4e92\u5bf9\u5e94\u63a5\u53e3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"manager-workflow-engine"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u6d41\u5f15\u64ce")))),(0,i.kt)("h2",{id:"4-\u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b"},"4 \u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(68370).Z,width:"1285",height:"852"})),(0,i.kt)("h2",{id:"5-\u6570\u636e\u6a21\u578b"},"5 \u6570\u636e\u6a21\u578b"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(79369).Z,width:"1441",height:"673"})))}s.isMDXComponent=!0},79369:function(e,t,n){t.Z=n.p+"assets/images/datamodel-7c788db64ee2c4f646d063d43a8675a6.jpg"},87325:function(e,t,n){t.Z=n.p+"assets/images/inlong-manager-a3645b4c9d18fd67a2bb591656eaf4d6.png"},68370:function(e,t,n){t.Z=n.p+"assets/images/interactive-7dd8e370ae4885484e6a4576cb5de26f.jpg"}}]);