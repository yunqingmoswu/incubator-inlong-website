"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7851],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Deployment"},l=void 0,p={unversionedId:"modules/tubemq/deployment",id:"version-0.11.0/modules/tubemq/deployment",title:"Deployment",description:"1 Compile and Package Project\uff1a",source:"@site/versioned_docs/version-0.11.0/modules/tubemq/deployment.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/deployment",permalink:"/docs/0.11.0/modules/tubemq/deployment",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/tubemq/deployment.md",tags:[],version:"0.11.0",frontMatter:{title:"Deployment"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Consumer Example",permalink:"/docs/0.11.0/modules/tubemq/consumer_example"},next:{title:"Error Code",permalink:"/docs/0.11.0/modules/tubemq/error_code"}},d={},c=[{value:"1 Compile and Package Project\uff1a",id:"1-compile-and-package-project",level:2},{value:"2 Server Deployment",id:"2-server-deployment",level:2},{value:"3 Configuration System",id:"3-configuration-system",level:2},{value:"4 Start up Master\uff1a",id:"4-start-up-master",level:2},{value:"5 Start up Broker\uff1a",id:"5-start-up-broker",level:2},{value:"6 Topic Configuration and Activation\uff1a",id:"6-topic-configuration-and-activation",level:2},{value:"7 Message Production and Consumption\uff1a",id:"7-message-production-and-consumption",level:2}],u={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-compile-and-package-project"},"1 Compile and Package Project\uff1a"),(0,i.kt)("p",null,"Enter the root directory of project and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mvn clean package -Dmaven.test.skip\n")),(0,i.kt)("p",null,"e.g. We put the TubeMQ project package at ",(0,i.kt)("inlineCode",{parentName:"p"},"E:/"),", then run the above command. Compilation is complete when all subdirectories are compiled successfully."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(35697).Z,width:"735",height:"360"})),(0,i.kt)("p",null,"We can also run individual compilation in each subdirectory. Steps are the same as the whole project's compilation."),(0,i.kt)("h2",{id:"2-server-deployment"},"2 Server Deployment"),(0,i.kt)("p",null,"As example above, entry directory ",(0,i.kt)("inlineCode",{parentName:"p"},"..\\InLong\\inlong-tubemq\\tubemq-server\\target"),", we can see several JARs. ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-inlong-tubemq-server-0.9.0-incubating-SNAPSHOT-bin.tar.gz")," is the complete server-side installation package\uff0c including execution scripts, configuration files, dependencies, and frontend source code. ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-inlong-tubemq-server-0.9.0-incubating-SNAPSHOT.jar")," is a server-side processing package included in ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," of the complete project installer. Consider to daily changes and upgrades are most made to server side, we place this jar separately so that we just need to replace this jar during upgrade."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(77490).Z,width:"1390",height:"411"})),(0,i.kt)("p",null,"Here we have a complete package deployed onto server and we place it in ",(0,i.kt)("inlineCode",{parentName:"p"},"/data/inlong")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(80212).Z,width:"900",height:"222"})),(0,i.kt)("h2",{id:"3-configuration-system"},"3 Configuration System"),(0,i.kt)("p",null,"There are 3 roles in server package: Master, Broker and Tools. Master and Broker can be deployed on the same or different machine. It depends on the bussiness layouts. As example below, we have 3 machine to startup a complete production and consumption cluster with 2 Masters."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Machine"),(0,i.kt)("th",{parentName:"tr",align:null},"Role"),(0,i.kt)("th",{parentName:"tr",align:null},"TCP Port"),(0,i.kt)("th",{parentName:"tr",align:null},"TLS Port"),(0,i.kt)("th",{parentName:"tr",align:null},"WEB Port"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9.23.27.24"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Master")),(0,i.kt)("td",{parentName:"tr",align:null},"8099"),(0,i.kt)("td",{parentName:"tr",align:null},"8199"),(0,i.kt)("td",{parentName:"tr",align:null},"8080"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata stored at ",(0,i.kt)("inlineCode",{parentName:"td"},"/stage/meta_data"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Broker"),(0,i.kt)("td",{parentName:"tr",align:null},"8123"),(0,i.kt)("td",{parentName:"tr",align:null},"8124"),(0,i.kt)("td",{parentName:"tr",align:null},"8081"),(0,i.kt)("td",{parentName:"tr",align:null},"Message stored at",(0,i.kt)("inlineCode",{parentName:"td"},"/stage/msg_data"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"ZooKeeper"),(0,i.kt)("td",{parentName:"tr",align:null},"2181"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Offset stored at root directory",(0,i.kt)("inlineCode",{parentName:"td"},"/tubemq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9.23.28.24"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Master")),(0,i.kt)("td",{parentName:"tr",align:null},"8099"),(0,i.kt)("td",{parentName:"tr",align:null},"8199"),(0,i.kt)("td",{parentName:"tr",align:null},"8080"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata stored at ",(0,i.kt)("inlineCode",{parentName:"td"},"/stage/meta_data"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Broker"),(0,i.kt)("td",{parentName:"tr",align:null},"8123"),(0,i.kt)("td",{parentName:"tr",align:null},"8124"),(0,i.kt)("td",{parentName:"tr",align:null},"8081"),(0,i.kt)("td",{parentName:"tr",align:null},"Message stored at",(0,i.kt)("inlineCode",{parentName:"td"},"/stage/msg_data"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9.23.27.160"),(0,i.kt)("td",{parentName:"tr",align:null},"Producer"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Consumer"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"|"),(0,i.kt)("p",null,"Something should be noticed during deploying Master:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Master cluster can be deployed in 1, 2 or 3 machines. 3 machines is suggested if HA is necessary so that reading/writing configuration and access to new production/consumption is still available when one of them is shutdown. In common situation, 2 machines provide readable configuration and proper state of production/consumption already registered when one is shutdown. The minimum is 1 and it provides proper state of production/consumption already registered when is shutdown."),(0,i.kt)("li",{parentName:"ol"},"For machines with Master Role, we should promise clock synchronization. At the same time, IP address of each Master machine should be set in ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/hosts")," on each Master machine.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(39871).Z,width:"383",height:"73"})),(0,i.kt)("p",null,"Take ",(0,i.kt)("inlineCode",{parentName:"p"},"9.23.27.24")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"9.23.28.24")," as examples, if we want to deploy both Master and Broker role on them, we need to configure in ",(0,i.kt)("inlineCode",{parentName:"p"},"/conf/master.ini"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/resources/velocity.properties")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/conf/broker.ini"),". First set up the configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"9.23.27.24"),","),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(70727).Z,width:"1294",height:"1000"})),(0,i.kt)("p",null,"then it is ",(0,i.kt)("inlineCode",{parentName:"p"},"9.23.28.24"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(52320).Z,width:"1356",height:"999"})),(0,i.kt)("p",null,"Note that the upper right corner is configured with Master's web frontend configuration and configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"file.resource.loader.path")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"/resources/velocity.properties")," need to be modified according to the Master's installation path."),(0,i.kt)("h2",{id:"4-start-up-master"},"4 Start up Master\uff1a"),(0,i.kt)("p",null,"After configuration, entry directory ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," of Master environment and start up master."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(91779).Z,width:"1000",height:"182"})),(0,i.kt)("p",null,"We First start up ",(0,i.kt)("inlineCode",{parentName:"p"},"9.23.27.24"),", and then start up Master on ",(0,i.kt)("inlineCode",{parentName:"p"},"9.23.28.24"),". The following messages indicate that the master and backup master have been successfully started up and the external service ports are reachable."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(12808).Z,width:"1556",height:"385"})),(0,i.kt)("p",null,"Visiting Master's Administrator panel(",(0,i.kt)("a",{parentName:"p",href:"http://9.23.27.24:8080"},"http://9.23.27.24:8080"),"), search operation working well indicates that master has been successfully started up."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(57584).Z,width:"1874",height:"390"})),(0,i.kt)("h2",{id:"5-start-up-broker"},"5 Start up Broker\uff1a"),(0,i.kt)("p",null,"Starting up Broker is a little bit different to starting Master: Master is responsible for managing the entire TubeMQ cluster, including Broker node with Topic configuration on them, production and consumption managament. So we need to add metadata on Master before starting up Broker."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15210).Z,width:"1901",height:"834"})),(0,i.kt)("p",null,"Confirm and create a draft record of Broker."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(91893).Z,width:"1893",height:"424"})),(0,i.kt)("p",null,"We try to start up the Broker."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(76266).Z,width:"1160",height:"203"})),(0,i.kt)("p",null,"But we got an error message."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(22415).Z,width:"1920",height:"233"})),(0,i.kt)("p",null,"Because the broker record is currently in draft status and it is not available now. Let's go back to Master Administrator panel and publish."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(86248).Z,width:"1887",height:"767"})),(0,i.kt)("p",null,"Every changing operation need to text in an Authorization Code when submited to Master. Authorization Code is defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"confModAuthToken")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"master.ini"),". If you have the Code of this cluster, we consider you as administrator and you have permission to operate the modification."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(93256).Z,width:"1913",height:"432"})),(0,i.kt)("p",null,"Then we restart the Broker."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(32505).Z,width:"1166",height:"92"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38293).Z,width:"1919",height:"314"})),(0,i.kt)("p",null,"Check the Master Control Panel, broker has successfully registered."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23279).Z,width:"1915",height:"435"})),(0,i.kt)("h2",{id:"6-topic-configuration-and-activation"},"6 Topic Configuration and Activation\uff1a"),(0,i.kt)("p",null,"Configuration of Topic is similar with Broker's, we should add metadata on Master before using them, otherwise it will report an Not Found Error during production/consumption. For example, if we try to consum a non-existent topic ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),",\n",(0,i.kt)("img",{src:n(73456).Z,width:"1716",height:"254"})),(0,i.kt)("p",null,"Demo returns error message.\n",(0,i.kt)("img",{src:n(87536).Z,width:"1920",height:"534"})),(0,i.kt)("p",null,"First we add a topic in topic list page in Master Control Panel."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38489).Z,width:"1910",height:"764"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(51093).Z,width:"1918",height:"762"})),(0,i.kt)("p",null,"Choose publish scope and confirm after submit topic detail. After adding a new topic, we need to overload the topic."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(44308).Z,width:"1910",height:"439"})),(0,i.kt)("p",null,"Topic is available after overload. We can see some status of topic has changed after overload."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72369).Z,width:"1909",height:"446"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," When we are executing overload opertaion, we should make it in batches. Overload operations are controlled by state machines. It would become unwritable and un readale, read-only, readable and writable in order before published. Waiting for overloads on all brokers make topic temporary unreadable and unwritable, which result in production and consumption failure, especially production failure."),(0,i.kt)("h2",{id:"7-message-production-and-consumption"},"7 Message Production and Consumption\uff1a"),(0,i.kt)("p",null,"We pack Demo for test in package or ",(0,i.kt)("inlineCode",{parentName:"p"},"tubemq-client-0.9.0-incubating-SNAPSHOT.jar")," can be used for implementing your own production and consumption.\nWe run Producer Demo in below script and we can see data accepted on Broker.\n",(0,i.kt)("img",{src:n(598).Z,width:"1897",height:"298"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1878).Z,width:"1911",height:"227"})),(0,i.kt)("p",null,"Then we run the Consumption Demo and we can see that consumption is also working properly.\n",(0,i.kt)("img",{src:n(98313).Z,width:"1899",height:"506"})),(0,i.kt)("p",null,"As we can see, files relative to broker's production and consumption already exist."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(56459).Z,width:"1070",height:"119"})),(0,i.kt)("p",null,'Here, the compilation, deployment, system configuration, startup, production and consumption of TubeMQ has been completed!\nIf you need to get further, please refer to "TubeMQ HTTP API" and make your appropriate configuration settings.'))}m.isMDXComponent=!0},39871:function(e,t){t.Z="data:image/png;base64,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"},15210:function(e,t,n){t.Z=n.p+"assets/images/sys_broker_configure-f62da13b910e11d5328022df4ac8fb6e.png"},93256:function(e,t,n){t.Z=n.p+"assets/images/sys_broker_deploy-960e5250a271407d6a3349d22d115af8.png"},23279:function(e,t,n){t.Z=n.p+"assets/images/sys_broker_finished-3de5f5aad97de3ab60f1611bb20d1f2e.png"},91893:function(e,t,n){t.Z=n.p+"assets/images/sys_broker_online-9be62d1c8e9f7a8a61524d769b519347.png"},86248:function(e,t,n){t.Z=n.p+"assets/images/sys_broker_online_2-3d2c5998549dc0784fa8a07aa99c7cac.png"},32505:function(e,t,n){t.Z=n.p+"assets/images/sys_broker_restart_1-7b3c7b14b5b18aad16fa56c4b7da6c02.png"},38293:function(e,t,n){t.Z=n.p+"assets/images/sys_broker_restart_2-ad631cc9ef637ac91414ba85da1fea93.png"},76266:function(e,t,n){t.Z=n.p+"assets/images/sys_broker_start-74cd9a7c21b8c8657ce1c1e919e07f34.png"},22415:function(e,t,n){t.Z=n.p+"assets/images/sys_broker_start_error-f695b99ce0e63cc2b085904dbf131bcf.png"},35697:function(e,t,n){t.Z=n.p+"assets/images/sys_compile-afba3f1e66e6fa5e81c08fd43f68b969.png"},70727:function(e,t,n){t.Z=n.p+"assets/images/sys_configure_1-65cb9392e6e3fa695ff13c6a68deea0d.png"},52320:function(e,t,n){t.Z=n.p+"assets/images/sys_configure_2-b56851b99b004de0c52bf1d0024ef9e1.png"},57584:function(e,t,n){t.Z=n.p+"assets/images/sys_master_console-212b1466ca4c17167f7a827d09284aad.png"},91779:function(e,t,n){t.Z=n.p+"assets/images/sys_master_start-e7bf249361e4767f3f467e8a4a2462dc.png"},12808:function(e,t,n){t.Z=n.p+"assets/images/sys_master_startted-b64dba208789754a593b936333ee8d71.png"},56459:function(e,t,n){t.Z=n.p+"assets/images/sys_node_log-6ef2d911b495fcb6b0914dd5da97a5cc.png"},1878:function(e,t,n){t.Z=n.p+"assets/images/sys_node_status-54e011781d6923d34c617772f48971ca.png"},98313:function(e,t,n){t.Z=n.p+"assets/images/sys_node_status_2-054bb83ab9ddc187c604df5a02d98895.png"},77490:function(e,t,n){t.Z=n.p+"assets/images/sys_package-f2fd18c8fe2cce7e853b89707ef246de.png"},80212:function(e,t,n){t.Z=n.p+"assets/images/sys_package_list-3d28301118d002b3d22b2ae39c42ca50.png"},38489:function(e,t,n){t.Z=n.p+"assets/images/sys_topic_create-c26d3b45de85af6958d80b7fc24cd9c2.png"},44308:function(e,t,n){t.Z=n.p+"assets/images/sys_topic_deploy-ddee2f69406173a224014533966c552a.png"},87536:function(e,t,n){t.Z=n.p+"assets/images/sys_topic_error-e7a5c0a4c7ac34391b11b5dc373c7a3e.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/sys_topic_finished-d6523140132196743830d225307d4577.png"},51093:function(e,t,n){t.Z=n.p+"assets/images/sys_topic_select-eb84fec5a5d04b9266d3e6857843f858.png"},73456:function(e,t,n){t.Z=n.p+"assets/images/test_sendmessage-2c9547aa3b283f8f96fe3f7f77a84c2d.png"},598:function(e,t,n){t.Z=n.p+"assets/images/test_sendmessage_2-aca82f8640f949e0e144b6501995de43.png"}}]);