"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37826],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=p(r),m=o,b=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,i(i({ref:e},u),{},{components:r})):n.createElement(b,i({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12469:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={slug:"2021-03-10-taro-3-1-lts",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.1 \u7248\u672c",authors:"JJ",tags:["v3"],description:"\u81ea Taro 3.1 \u4f53\u9a8c\u7248\u63a8\u51fa\u540e\uff0c\u6211\u4eec\u4e0d\u65ad\u5730\u6839\u636e\u793e\u533a\u7684\u53cd\u9988\u610f\u89c1\u5bf9 3.1 \u7248\u672c\u8fdb\u884c\u6253\u78e8\u3002\u7ecf\u5386\u4e86 12 \u4e2a beta \u7248\u672c\u540e\uff0c\u7ec8\u4e8e\u8fce\u6765\u4e86 3.1 \u6b63\u5f0f\u7248\u3002"},l=void 0,p={permalink:"/taro/blog/2021-03-10-taro-3-1-lts",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2021-03-10-taro-3-1-lts.md",source:"@site/blog/2021-03-10-taro-3-1-lts.md",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.1 \u7248\u672c",description:"\u81ea Taro 3.1 \u4f53\u9a8c\u7248\u63a8\u51fa\u540e\uff0c\u6211\u4eec\u4e0d\u65ad\u5730\u6839\u636e\u793e\u533a\u7684\u53cd\u9988\u610f\u89c1\u5bf9 3.1 \u7248\u672c\u8fdb\u884c\u6253\u78e8\u3002\u7ecf\u5386\u4e86 12 \u4e2a beta \u7248\u672c\u540e\uff0c\u7ec8\u4e8e\u8fce\u6765\u4e86 3.1 \u6b63\u5f0f\u7248\u3002",date:"2021-03-10T00:00:00.000Z",formattedDate:"2021\u5e743\u670810\u65e5",tags:[{label:"v3",permalink:"/taro/blog/tags/v-3"}],readingTime:9.125,truncated:!0,authors:[{name:"JJ",title:"Taro \u56e2\u961f\u6210\u5458",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png",key:"JJ"}],prevItem:{title:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",permalink:"/taro/blog/2021-04-08-taro-3.2"},nextItem:{title:"Taro \u52a9\u529b\u4eac\u559c\u62fc\u62fc\u9879\u76ee\u6027\u80fd\u4f53\u9a8c\u4f18\u5316",permalink:"/taro/blog/2021-02-08-taro-jxpp"}},u={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u81ea Taro 3.1 \u4f53\u9a8c\u7248\u63a8\u51fa\u540e\uff0c\u6211\u4eec\u4e0d\u65ad\u5730\u6839\u636e\u793e\u533a\u7684\u53cd\u9988\u610f\u89c1\u5bf9 3.1 \u7248\u672c\u8fdb\u884c\u6253\u78e8\u3002\u4e3b\u8981\u6539\u8fdb\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u5f00\u653e\u5f0f\u67b6\u6784"),"\u3001\u5f15\u5165\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomWrapper")," \u7ec4\u4ef6\u4ee5\u89e3\u51b3\u6027\u80fd\u95ee\u9898\u3001\u63d0\u51fa\u4e86\u539f\u751f\u5c0f\u7a0b\u5e8f",(0,a.kt)("strong",{parentName:"p"},"\u6e10\u8fdb\u5f0f\u6df7\u5408\u4f7f\u7528 Taro")," \u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("p",null,"\u7ecf\u5386\u4e86 12 \u4e2a beta \u7248\u672c\u540e\uff0c\u7ec8\u4e8e\u8fce\u6765\u4e86 3.1 \u6b63\u5f0f\u7248\ud83c\udf89"))}m.isMDXComponent=!0}}]);