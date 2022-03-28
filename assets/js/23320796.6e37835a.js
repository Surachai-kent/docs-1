"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2614],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6467:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4996),l=["components"],d={title:"Pageview goals"},p=void 0,s={unversionedId:"pageview-goals",id:"pageview-goals",title:"Pageview goals",description:"Pageview goals allow you to measure how many people visit a specific section of your site (for instance dynamically created checkout pages for ecommerce) and get referral sources and other details for those conversions.",source:"@site/docs/pageview-goals.md",sourceDirName:".",slug:"/pageview-goals",permalink:"/docs/pageview-goals",editUrl:"https://github.com/plausible/docs/edit/master/docs/pageview-goals.md",tags:[],version:"current",frontMatter:{title:"Pageview goals"},sidebar:"someSidebar",previous:{title:"Introduction to goals and events",permalink:"/docs/goal-conversions"},next:{title:"Custom event goals",permalink:"/docs/custom-event-goals"}},u=[{value:"Pageview goals support wildcards",id:"pageview-goals-support-wildcards",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pageview goals allow you to measure how many people visit a specific section of your site (for instance dynamically created checkout pages for ecommerce) and get referral sources and other details for those conversions. "),(0,o.kt)("p",null,"Since page views are collected automatically, you don\u2019t need to change your website\u2019s code to measure page URL goals."),(0,o.kt)("p",null,'To get started with "',(0,o.kt)("strong",{parentName:"p"},"Pageview Goals"),'", go to ',(0,o.kt)("a",{parentName:"p",href:"/docs/website-settings"},"your website's settings"),' in Plausible Analytics and visit the "',(0,o.kt)("strong",{parentName:"p"},"Goals"),'" section. You should see an empty list with a prompt to add a goal.'),(0,o.kt)("img",{alt:"Add your first goal",src:(0,i.Z)("img/goal-conversions.png")}),(0,o.kt)("p",null,'Click on the "',(0,o.kt)("strong",{parentName:"p"},"+ Add goal"),'" button to go to the goal creation form.'),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Pageview")," as the goal trigger and enter the pathname of the page you would like your visitors to hit. The pathname must match the page path you can see in your Plausible Analytics dashboard."),(0,o.kt)("img",{alt:"Add your pageview goal",src:(0,i.Z)("img/add-pageview-goal.png")}),(0,o.kt)("p",null,'Next, click on the "',(0,o.kt)("strong",{parentName:"p"},"Add goal"),'" button and you\u2019ll be taken back to the goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who reached the specified page or group of pages. Goal conversions are listed at the very bottom of the dashboard.'),(0,o.kt)("h2",{id:"pageview-goals-support-wildcards"},"Pageview goals support wildcards"),(0,o.kt)("p",null,"Pageview goals support wildcards in the following format:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Asterisks (",(0,o.kt)("inlineCode",{parentName:"li"},"*"),") expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but ",(0,o.kt)("strong",{parentName:"li"},"cannot")," be in the place of slashes."),(0,o.kt)("li",{parentName:"ul"},"Double asterisks (",(0,o.kt)("inlineCode",{parentName:"li"},"**"),") expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent ",(0,o.kt)("strong",{parentName:"li"},"any")," characters, even slashes.")),(0,o.kt)("p",null,"You can use pageview rules in this format to group different pages or to create goals for dynamic URLs. "),(0,o.kt)("p",null,"You can for instance track all the blog posts by using ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog**")," (if your blog subdirectory is named ",(0,o.kt)("inlineCode",{parentName:"p"},"blog"),") or track Woocommerce checkout pages for your ecommerce (",(0,o.kt)("inlineCode",{parentName:"p"},"/checkout/order-received/*"),"). "),(0,o.kt)("p",null,"See below for more examples of common use cases and how they would function."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Input"),(0,o.kt)("th",{parentName:"tr",align:null},"Includes pages with a URL path of:"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"**keyword**")),(0,o.kt)("td",{parentName:"tr",align:null},'use double asterisks in front and back in the same way that you would use "contain". It finds any URL containing a specific keyword')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/blog**")),(0,o.kt)("td",{parentName:"tr",align:null},"use this to for instance group all of your blog posts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/blog4")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/blog4")," and exactly ",(0,o.kt)("inlineCode",{parentName:"td"},"/blog4")," with nothing before or after it, so not ",(0,o.kt)("inlineCode",{parentName:"td"},"/blog45")," nor ",(0,o.kt)("inlineCode",{parentName:"td"},"/blog4/new")," nor ",(0,o.kt)("inlineCode",{parentName:"td"},"/blog"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/rule/*")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/rule/<anything>"),", with ",(0,o.kt)("inlineCode",{parentName:"td"},"<anything>")," being any set of characters (length >=0), but not a forward slash - for example, both ",(0,o.kt)("inlineCode",{parentName:"td"},"/rule/1")," as well as ",(0,o.kt)("inlineCode",{parentName:"td"},"/rule/general-rule-14"),", but not ",(0,o.kt)("inlineCode",{parentName:"td"},"/rule/4/details")," nor ",(0,o.kt)("inlineCode",{parentName:"td"},"/rules"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/how-to-*")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/how-to-<anything>")," - for example, ",(0,o.kt)("inlineCode",{parentName:"td"},"/how-to-play")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"/how-to-succeed"),", but not ",(0,o.kt)("inlineCode",{parentName:"td"},"how-to-/blog"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/*/admin")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/<anything>/admin")," - for example, ",(0,o.kt)("inlineCode",{parentName:"td"},"/sites/admin"),", but not ",(0,o.kt)("inlineCode",{parentName:"td"},"/sites/admin/page-2")," nor ",(0,o.kt)("inlineCode",{parentName:"td"},"/sites/2/admin")," nor ",(0,o.kt)("inlineCode",{parentName:"td"},"/admin"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/*/priv/*")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/<anything>/priv/<anything>")," - for example, ",(0,o.kt)("inlineCode",{parentName:"td"},"/admin/priv/sites"),", but not ",(0,o.kt)("inlineCode",{parentName:"td"},"/priv")," nor ",(0,o.kt)("inlineCode",{parentName:"td"},"/priv/page")," nor ",(0,o.kt)("inlineCode",{parentName:"td"},"/admin/priv"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/rule/*/*")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/rule/<anything>/<anything>")," - for example, ",(0,o.kt)("inlineCode",{parentName:"td"},"/rule/4/new/")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"/rule/10/edit"),", but not ",(0,o.kt)("inlineCode",{parentName:"td"},"/rule")," nor ",(0,o.kt)("inlineCode",{parentName:"td"},"/rule/10/new/save"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/wp/**")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/wp/<anything, even slashes>")," - for example, ",(0,o.kt)("inlineCode",{parentName:"td"},"/wp/assets/subdirectory/another/image.png")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"/wp/admin"),", and everything in between, but not ",(0,o.kt)("inlineCode",{parentName:"td"},"/page/wp"))))),(0,o.kt)("br",null))}m.isMDXComponent=!0}}]);