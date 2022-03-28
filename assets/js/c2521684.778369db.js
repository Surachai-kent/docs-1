"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7095],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8552:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Hash-based routing"},l=void 0,u={unversionedId:"hash-based-routing",id:"hash-based-routing",title:"Hash-based routing",description:"Plausible Analytics integrates automatically with pushState based frontend routers. However, if you're using a frontend",source:"@site/docs/hash-based-routing.md",sourceDirName:".",slug:"/hash-based-routing",permalink:"/docs/hash-based-routing",editUrl:"https://github.com/plausible/docs/edit/master/docs/hash-based-routing.md",tags:[],version:"current",frontMatter:{title:"Hash-based routing"}},c=[],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Plausible Analytics integrates automatically with ",(0,o.kt)("inlineCode",{parentName:"p"},"pushState")," based frontend routers. However, if you're using a frontend\nframework that uses the URL hash for routing, you need to take an extra step to install the hash-based tracker instead of the default one. This is the same process you need to follow with ",(0,o.kt)("a",{parentName:"p",href:"/docs/carrd-integration"},"Carrd")," and other website builders that don't support normal navigation."),(0,o.kt)("p",null,"The hash-based tracker is available by changing your script to load ",(0,o.kt)("inlineCode",{parentName:"p"},"https://plausible.io/js/script.hash.js")," instead of\nthe default ",(0,o.kt)("inlineCode",{parentName:"p"},"https://plausible.io/js/script.js"),"."),(0,o.kt)("p",null,"Here's what the full script tag will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.hash.js"><\/script>\n')),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("a",{parentName:"p",href:"/docs/proxy/introduction"},"a proxy"),", you can add the ",(0,o.kt)("inlineCode",{parentName:"p"},".hash.js")," as follows: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://yourproxylocation.com/js/index.hash.js")),(0,o.kt)("p",null,"This tracker will change two things about how events are collected:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Trigger pageviews on the ",(0,o.kt)("inlineCode",{parentName:"li"},"hashchange")," event"),(0,o.kt)("li",{parentName:"ul"},"Normally the hash part of the URL is discarded in your Plausible dashboard. In hash-mode, the hash part is preserved in your stats so you can see the different pages your visitors have viewed.")))}d.isMDXComponent=!0}}]);