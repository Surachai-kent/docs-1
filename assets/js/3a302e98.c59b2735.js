"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5406],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7536:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=(r(4996),["components"]),c={title:"How to add the script to your Carrd site"},s=void 0,u={unversionedId:"carrd-integration",id:"carrd-integration",title:"How to add the script to your Carrd site",description:'You can add Plausible Analytics tracking code to your Carrd website by adding an "Embed" component. Carrd is a one-page website builder that doesn\'t support normal navigation. You need to use our special hash-based script on Carrd sites.',source:"@site/docs/carrd-integration.md",sourceDirName:".",slug:"/carrd-integration",permalink:"/docs/carrd-integration",editUrl:"https://github.com/plausible/docs/edit/master/docs/carrd-integration.md",tags:[],version:"current",frontMatter:{title:"How to add the script to your Carrd site"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'You can add Plausible Analytics tracking code to your Carrd website by adding an "',(0,o.kt)("strong",{parentName:"p"},"Embed"),"\" component. Carrd is a one-page website builder that doesn't support normal navigation. You need to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/hash-based-routing"},"our special hash-based script")," on Carrd sites."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Go to the editor of your Carrd website and add an "',(0,o.kt)("strong",{parentName:"p"},"Embed"),'" component.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Change the type to "',(0,o.kt)("strong",{parentName:"p"},"Code"),'" and give it any name that you want.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Paste your Plausible Analytics hash-based script tag into the "',(0,o.kt)("strong",{parentName:"p"},"Code"),'" field.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Here's what the full script tag will look like (make sure to replace your-domain with the domain you've added to Plausible Analytics):"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.hash.js"><\/script>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'After adding your code, click on the "',(0,o.kt)("strong",{parentName:"li"},"Save"),'" button.')),(0,o.kt)("p",null,"Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here ",(0,o.kt)("a",{parentName:"p",href:"/docs/troubleshoot-integration"},"how to verify the integration"),"."),(0,o.kt)("p",null,"Thanks to Marius for contributing ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@rasmus1610/how-to-integrate-plausible-io-web-analytics-with-your-carrd-co-website-b9d4a05f87bf"},"these instructions"),"!"))}d.isMDXComponent=!0}}]);