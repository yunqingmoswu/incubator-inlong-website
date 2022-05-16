"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1308],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),g=i,h=f["".concat(s,".").concat(g)]||f[g]||d[g]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Architecture"},s=void 0,c={unversionedId:"modules/agent/architecture",id:"version-0.11.0/modules/agent/architecture",title:"Architecture",description:"1. Overview of InLong-Agent",source:"@site/versioned_docs/version-0.11.0/modules/agent/architecture.md",sourceDirName:"modules/agent",slug:"/modules/agent/architecture",permalink:"/docs/0.11.0/modules/agent/architecture",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/agent/architecture.md",tags:[],version:"0.11.0",frontMatter:{title:"Architecture"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Build && Deployment",permalink:"/docs/0.11.0/modules/website/quick_start"},next:{title:"Build && Deployment",permalink:"/docs/0.11.0/modules/agent/quick_start"}},u={},d=[{value:"1. Overview of InLong-Agent",id:"1-overview-of-inlong-agent",level:2},{value:"The brief architecture diagram is as follows:",id:"the-brief-architecture-diagram-is-as-follows",level:3},{value:"design concept",id:"design-concept",level:3},{value:"Current status of use",id:"current-status-of-use",level:3},{value:"2. InLong-Agent architecture",id:"2-inlong-agent-architecture",level:2},{value:"3. Different kinds of agent",id:"3-different-kinds-of-agent",level:2},{value:"3.1 file agent",id:"31-file-agent",level:3},{value:"3.2 sql agent",id:"32-sql-agent",level:3},{value:"3.3 binlog agent",id:"33-binlog-agent",level:3}],f={toc:d};function g(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-overview-of-inlong-agent"},"1. Overview of InLong-Agent"),(0,o.kt)("p",null,"InLong-Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including file, sql, Binlog, metrics, etc."),(0,o.kt)("h3",{id:"the-brief-architecture-diagram-is-as-follows"},"The brief architecture diagram is as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6310).Z,width:"1652",height:"506"})),(0,o.kt)("h3",{id:"design-concept"},"design concept"),(0,o.kt)("p",null,"In order to solve the problem of data source diversity, InLong-agent abstracts multiple data sources into a unified source concept, and abstracts sinks to write data. When you need to access a new data source, you only need to configure the format and reading parameters of the data source to achieve efficient reading."),(0,o.kt)("h3",{id:"current-status-of-use"},"Current status of use"),(0,o.kt)("p",null,"InLong-Agent is widely used within the Tencent Group, undertaking most of the data collection business, and the amount of online data reaches tens of billions."),(0,o.kt)("h2",{id:"2-inlong-agent-architecture"},"2. InLong-Agent architecture"),(0,o.kt)("p",null,"The InLong Agent task is used as a data acquisition framework, constructed with a channel + plug-in architecture. Read and write the data source into a reader/writer plug-in, and then into the entire framework."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reader: Reader is the data collection module, responsible for collecting data from the data source and sending the data to the channel."),(0,o.kt)("li",{parentName:"ul"},"Writer: Writer is a data writing module, which reuses data continuously to the channel and writes the data to the destination."),(0,o.kt)("li",{parentName:"ul"},"Channel: The channel used to connect the reader and writer, and as the data transmission channel of the connection, which realizes the function of data reading and monitoring")),(0,o.kt)("h2",{id:"3-different-kinds-of-agent"},"3. Different kinds of agent"),(0,o.kt)("h3",{id:"31-file-agent"},"3.1 file agent"),(0,o.kt)("p",null,"File collection includes the following functions:"),(0,o.kt)("p",null,"User-configured path monitoring, able to monitor the created file information\nDirectory regular filtering, support YYYYMMDD+regular expression path configuration\nBreakpoint retransmission, when InLong-Agent restarts, it can automatically re-read from the last read position to ensure no reread or missed reading."),(0,o.kt)("h3",{id:"32-sql-agent"},"3.2 sql agent"),(0,o.kt)("p",null,"This type of data refers to the way it is executed through SQL\nSQL regular decomposition, converted into multiple SQL statements\nExecute SQL separately, pull the data set, the pull process needs to pay attention to the impact on mysql itself\nThe execution cycle, which is generally executed regularly"),(0,o.kt)("h3",{id:"33-binlog-agent"},"3.3 binlog agent"),(0,o.kt)("p",null,"This type of collection reads binlog and restores data by configuring mysql slave\nNeed to pay attention to multi-threaded parsing when binlog is read, and multi-threaded parsing data needs to be labeled in order\nThe code is based on the old version of dbsync, the main modification is to change the sending of tdbus-sender to push to agent-channel for integration"))}g.isMDXComponent=!0},6310:function(e,t,n){t.Z=n.p+"assets/images/architecture-4c55eb883104dccdff77e8b8e57f2678.png"}}]);