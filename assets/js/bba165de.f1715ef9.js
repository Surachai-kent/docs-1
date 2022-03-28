"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6081],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),g=r,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||n;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2744:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=a(7462),r=a(3366),n=(a(7294),a(3905)),i=(a(4996),["components"]),s={title:"How to add the script to your site using Google Tag Manager"},l=void 0,u={unversionedId:"google-tag-manager",id:"google-tag-manager",title:"How to add the script to your site using Google Tag Manager",description:"You can use \"Google Tag Manager\" to add Plausible Analytics tracking code to your website. Here's the process if you're tracking a domain name or subdomain (see the note below if you'd like to track a subfolder using GTM):",source:"@site/docs/google-tag-manager.md",sourceDirName:".",slug:"/google-tag-manager",permalink:"/docs/google-tag-manager",editUrl:"https://github.com/plausible/docs/edit/master/docs/google-tag-manager.md",tags:[],version:"current",frontMatter:{title:"How to add the script to your site using Google Tag Manager"}},c=[{value:"Track a subfolder or report to multiple dashboards",id:"track-a-subfolder-or-report-to-multiple-dashboards",children:[],level:2},{value:"Concerns about using Google Tag Manager",id:"concerns-about-using-google-tag-manager",children:[{value:"GTM adds extra complexity",id:"gtm-adds-extra-complexity",children:[],level:3},{value:"GTM is blocked by many browsers and extensions",id:"gtm-is-blocked-by-many-browsers-and-extensions",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'You can use "',(0,n.kt)("strong",{parentName:"p"},"Google Tag Manager"),"\" to add Plausible Analytics tracking code to your website. Here's the process if you're tracking a domain name or subdomain (see the note below if you'd like to track a subfolder using GTM):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'In your Google Tag Manager account, click on "',(0,n.kt)("strong",{parentName:"li"},"Add a new tag"),'"'),(0,n.kt)("li",{parentName:"ul"},'Click on the "',(0,n.kt)("strong",{parentName:"li"},"Choose a tag type to begin setup"),'"'),(0,n.kt)("li",{parentName:"ul"},'Use the search functionality to search for "',(0,n.kt)("strong",{parentName:"li"},"Custom HTML"),'"'),(0,n.kt)("li",{parentName:"ul"},"In the HTML field within the Custom HTML section, paste ",(0,n.kt)("a",{parentName:"li",href:"/docs/plausible-script"},"your Plausible snippet")),(0,n.kt)("li",{parentName:"ul"},"Be careful about extras you enable such as tag firing priority, tag sequencing, consent checks etc as they all may affect when and how our script loads"),(0,n.kt)("li",{parentName:"ul"},'Then click to "',(0,n.kt)("strong",{parentName:"li"},"Choose a trigger to make this tag fire"),'"'),(0,n.kt)("li",{parentName:"ul"},'Select the "',(0,n.kt)("strong",{parentName:"li"},"All Pages"),'" and filter "',(0,n.kt)("strong",{parentName:"li"},"Page View"),'" as the trigger if you want to count all of your pages'),(0,n.kt)("li",{parentName:"ul"},"Give your tag a name"),(0,n.kt)("li",{parentName:"ul"},'Click on the "',(0,n.kt)("strong",{parentName:"li"},"Save"),'" button'),(0,n.kt)("li",{parentName:"ul"},'Click "',(0,n.kt)("strong",{parentName:"li"},"Submit"),'" to submit your changes'),(0,n.kt)("li",{parentName:"ul"},'Then click on the "',(0,n.kt)("strong",{parentName:"li"},"Publish"),'" button')),(0,n.kt)("p",null,"That's it! Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here ",(0,n.kt)("a",{parentName:"p",href:"/docs/troubleshoot-integration"},"how to verify the integration"),"."),(0,n.kt)("h2",{id:"track-a-subfolder-or-report-to-multiple-dashboards"},"Track a subfolder or report to multiple dashboards"),(0,n.kt)("p",null,"If you'd like to track a subfolder (yourdomain.com/subfolder) or report to ",(0,n.kt)("a",{parentName:"p",href:"/docs/plausible-script#can-i-send-stats-to-multiple-dashboards-at-the-same-time"},"multiple dashboards at the same time"),", the snippet you need to insert in the HTML field within the Custom HTML section should look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  var script = document.createElement('script');\n  script.defer = true;\n  script.dataset.domain = \"YOUR-DATA-DOMAIN\";\n  script.src = \"https://plausible.io/js/script.js\";\n  document.getElementsByTagName('head')[0].appendChild(script);\n<\/script>\n")),(0,n.kt)("p",null,'In case your Plausible site is a subfolder, enter "yoursite.com/subfolder" as the "',(0,n.kt)("strong",{parentName:"p"},"script.dataset.domain"),'" value. If you want to report to multiple dashboards at the same time, set the "',(0,n.kt)("strong",{parentName:"p"},"script.dataset.domain"),'" value to "firstsite.com,secondsite.com". '),(0,n.kt)("h2",{id:"concerns-about-using-google-tag-manager"},"Concerns about using Google Tag Manager"),(0,n.kt)("p",null,"There are a couple of concerns when using Plausible with Google Tag Manager:"),(0,n.kt)("h3",{id:"gtm-adds-extra-complexity"},"GTM adds extra complexity"),(0,n.kt)("p",null,"Google Tag Manager adds extra complexity and additional ways things can go wrong. Plausible is very simple and we've made it so it's easy to integrate and start counting visitors to your site. If you follow the above steps, Plausible will work all fine with Google Tag Manager. If you plan to use any more advanced options that GTM gives you access to, please do make sure to verify and test the tracking. "),(0,n.kt)("p",null,"GTM allows you to select tag firing priority, tag firing options, tag sequencing and so much more. Deviating from the simple setup by adding any of the extras may affect the way the Plausible script loads and counts your traffic. It's best to have in-house expertise and experience with GTM if you plan to use the more advanced options. "),(0,n.kt)("p",null,"Do make sure to check the consent settings area of GTM so our script is allowed to fire when it's supposed to. Please do test things in the browser console and ensure that our script is firing as intended when it's live on your site."),(0,n.kt)("h3",{id:"gtm-is-blocked-by-many-browsers-and-extensions"},"GTM is blocked by many browsers and extensions"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://plausible.io/blog/google-analytics-adblockers-missing-data"},"Google Tag Manager script is blocked")," (or shimmed) by several browsers including Brave, Firefox and ",(0,n.kt)("a",{parentName:"p",href:"https://plausible.io/blog/safari-privacy-report"},"Safari")," and many browser extensions. This means that any scripts you're using with Google Tag Manager will be blocked too by a certain percentage of your visitors. "),(0,n.kt)("p",null,"Plausible integrated without GTM or by using ",(0,n.kt)("a",{parentName:"p",href:"/docs/proxy/introduction"},"our proxy")," will be blocked by fewer people which means you will get more accurate stats if you use Plausible without GTM."))}d.isMDXComponent=!0}}]);