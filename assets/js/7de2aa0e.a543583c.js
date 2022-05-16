"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],u={title:"Deployment"},s=void 0,l={unversionedId:"modules/audit/quick_start",id:"version-1.1.0/modules/audit/quick_start",title:"Deployment",description:"All deploying files at inlong-audit directory, if you use MySQL to store audit data, you need to first create the database through sql/apacheinlongaudit.sql.",source:"@site/versioned_docs/version-1.1.0/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/docs/modules/audit/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.1.0/modules/audit/quick_start.md",tags:[],version:"1.1.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/audit/overview"},next:{title:"Auto Push",permalink:"/docs/data_node/extract_node/auto_push"}},c={},p=[{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"Configure MessageQueue",id:"configure-messagequeue",level:3},{value:"Start",id:"start",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"Configure",id:"configure",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Start",id:"start-1",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All deploying files at ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-audit")," directory, if you use MySQL to store audit data, you need to first create the database through ",(0,i.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit.sql"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit.sql\n")),(0,i.kt)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,i.kt)("h3",{id:"configure-messagequeue"},"Configure MessageQueue"),(0,i.kt)("p",null,"You can choose Apache Pulsar or InLong TubeMQ as your MessageQueue service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If using Pulsar, the configuration file is ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-pulsar.conf"),". Change the Pulsar service url for next configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.port = 10081\nagent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://localhost:6650\nagent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://localhost:6650\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If using TubeMQ, the configuration file is ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-tube.conf"),". Change the TubeMQ master address for next configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.port = 10081\nagent1.sinks.tube-sink-msg1.master-host-port-list = localhost:8715\nagent1.sinks.tube-sink-msg1.topic = inlong-audit\nagent1.sinks.tube-sink-msg2.master-host-port-list = localhost:8715\nagent1.sinks.tube-sink-msg2.topic = inlong-audit\n")),(0,i.kt)("h3",{id:"start"},"Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"# By default, pulsar is used as the MessageQueue, and the audit-proxy-pulsar.conf configuration file is loaded.\nbash +x ./bin/proxy-start.sh [pulsar\uff5ctube]\n")),(0,i.kt)("h2",{id:"audit-store"},"Audit Store"),(0,i.kt)("h3",{id:"configure"},"Configure"),(0,i.kt)("p",null,"The configuration file  is ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/application.properties"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"# proxy.type: pulsar / tube\naudit.config.proxy.type=pulsar\n\n# store.server: mysql / elasticsearch \naudit.config.store.mode=mysql\n\n# audit pulsar config (optional), replace PULSAR_BROKER_LIST with your Pulsar service url\naudit.pulsar.server.url=pulsar://PULSAR_BROKER_LIST\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=sub-audit\n\n# audit tube config (optional), replace TUBE_LIST with your TubeMQ master address\naudit.tube.masterlist=TUBE_LIST\naudit.tube.topic=inlong-audit\naudit.tube.consumer.group.name=inlong-audit-consumer\n\n# mysql\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n")),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the backend database is MySQL, please download ",(0,i.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the backend database is PostgreSQL, there's no need for additional dependencies."))),(0,i.kt)("h3",{id:"start-1"},"Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/store-start.sh\n")),(0,i.kt)("p",null,"The default listen port is ",(0,i.kt)("inlineCode",{parentName:"p"},"10081"),"."))}m.isMDXComponent=!0}}]);