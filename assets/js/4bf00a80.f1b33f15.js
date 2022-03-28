"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[309],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5867:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(4996),s=["components"],l={title:"Share your stats with a private and secure link"},c=void 0,u={unversionedId:"shared-links",id:"shared-links",title:"Share your stats with a private and secure link",description:'In the "Visibility" area of your website settings there\'s a "Shared links" section. This is where you can decide to share your stats privately by generating a shared link. Click on the "+ new link" button to do so. The shared link is secure and impossible to guess by default.',source:"@site/docs/shared-links.md",sourceDirName:".",slug:"/shared-links",permalink:"/docs/shared-links",editUrl:"https://github.com/plausible/docs/edit/master/docs/shared-links.md",tags:[],version:"current",frontMatter:{title:"Share your stats with a private and secure link"},sidebar:"someSidebar",previous:{title:"Open up your website stats to the public",permalink:"/docs/visibility"},next:{title:"Embed your dashboard on another website using an iFrame",permalink:"/docs/embed-dashboard"}},d=[{value:"Shared link with a password protection",id:"shared-link-with-a-password-protection",children:[],level:2},{value:"Remove a particular shared link",id:"remove-a-particular-shared-link",children:[],level:2}],p={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'In the "',(0,i.kt)("strong",{parentName:"p"},"Visibility"),'" area of your website settings there\'s a "',(0,i.kt)("strong",{parentName:"p"},"Shared links"),'" section. This is where you can decide to share your stats privately by generating a shared link. Click on the "',(0,i.kt)("strong",{parentName:"p"},"+ new link"),'" button to do so. The shared link is secure and impossible to guess by default. '),(0,i.kt)("p",null,"This is useful for specific use cases such as if you want to share your website stats with (potential) partners or advertisers. Or if you're working for an agency or working as a freelancer and want to share the website stats ",(0,i.kt)("a",{parentName:"p",href:"https://plausible.io/for-freelancers-agencies"},"with your clients"),"."),(0,i.kt)("p",null,"People that you send your shared link to can view the stats dashboard without having a Plausible Analytics account and without needing to log in. They can only view the specific dashboard that you shared and cannot see any other sites that you have added to your Plausible account."),(0,i.kt)("img",{alt:"Plausible Analytics",src:(0,o.Z)("img/shared-stats.png")}),(0,i.kt)("h2",{id:"shared-link-with-a-password-protection"},"Shared link with a password protection"),(0,i.kt)("p",null,"You can add password protection to the shared link for extra security. Then people that you send your shared link to can only view the stats dashboard if they input the password you have chosen."),(0,i.kt)("p",null,'If you prefer to share your stats without the password protection you can keep the password field blank. Click the "',(0,i.kt)("strong",{parentName:"p"},"Create shared link"),'" button and your new shared link will be displayed.'),(0,i.kt)("img",{alt:"Plausible Analytics",src:(0,o.Z)("img/create-shared-link.png")}),(0,i.kt)("h2",{id:"remove-a-particular-shared-link"},"Remove a particular shared link"),(0,i.kt)("p",null,"You can click on the trash can icon if you want to remove the particular shared link."),(0,i.kt)("img",{alt:"Plausible Analytics",src:(0,o.Z)("img/shared-links-overview.png")}))}h.isMDXComponent=!0}}]);