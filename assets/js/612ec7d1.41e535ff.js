"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1692],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"MySQL SQL",sidebar_position:3},l=void 0,c={unversionedId:"modules/agent/sql",id:"version-1.0.0/modules/agent/sql",title:"MySQL SQL",description:"Overview",source:"@site/versioned_docs/version-1.0.0/modules/agent/sql.md",sourceDirName:"modules/agent",slug:"/modules/agent/sql",permalink:"/docs/1.0.0/modules/agent/sql",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/modules/agent/sql.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"MySQL SQL",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/docs/1.0.0/modules/agent/file"},next:{title:"Overview",permalink:"/docs/1.0.0/modules/dataproxy/overview"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Create A MySQL Job",id:"create-a-mysql-job",level:2},{value:"Parameter Description",id:"parameter-description",level:2},{value:"Example",id:"example",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Currently, Agent supports MYSQL version 5.1.x , 5.5.x , 5.6.x , 5.7.x , 8.0.x\nCurrently, the Agent only supports the curl request to create a Job to submit collection tasks, and temporarily does not support the manager front-end to create SQL collection"),(0,a.kt)("h2",{id:"create-a-mysql-job"},"Create A MySQL Job"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Apply for access on the manager, when filling in the data information, select the message source as "Independent Push"'),(0,a.kt)("li",{parentName:"ol"},"Select the source data field separator"),(0,a.kt)("li",{parentName:"ol"},"Fill in the source data fields, and the field order should be consistent with the field order in the sql query result"),(0,a.kt)("li",{parentName:"ol"},"Create a SQL read task using curl request")),(0,a.kt)("h2",{id:"parameter-description"},"Parameter Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Each parameter used in SQL Agent Job is described as\n1. job.sql.command: The actual executed sql statement, for example: select * from apache_inlong_manager.user\n2. job.sql.user: the user used when connecting to the database, for example: abc\n3. job.sql.password: The password used when connecting to the database, for example: 123456\n4. job.sql.hostname: The IP address of the connected database, for example: 127.0.0.1\n5. job.sql.port: the connected database port, for example: 3306\n6. job.sql.separator: The separator used to separate multiple fields needs to be used with the manager front-end\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8008/config/job\' \\--header \'Content-Type: application/json\' \\--data \'{\n  "job": {\n    "sql": {\n      "command": "select * from apache_inlong_manager.user",\n      "user":  "root",\n      "password": "inlong",\n      "hostname": "10.0.0.6",\n      "port": "3306",\n      "separator": "|"\n    },\n    "id": 1,\n    "thread": {\n      "running": {\n        "core": "4"\n      }\n    },\n    "name": "test",\n    "source": "org.apache.inlong.agent.plugin.sources.DataBaseSource",\n    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n  },\n  "proxy": {\n    "inlongGroupId": "b_test_tube_hive_20211221_01",\n    "inlongStreamId": "test_data_stream_20211221_01_01"\n  },\n  "op": "add"\n}\n\'\n')))}m.isMDXComponent=!0}}]);