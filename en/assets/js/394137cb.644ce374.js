"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24867],{3905:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return p}});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=d(l),p=r,m=k["".concat(u,".").concat(p)]||k[p]||s[p]||o;return l?n.createElement(m,a(a({ref:t},c),{},{components:l})):n.createElement(m,a({ref:t},c))}));function p(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=l.length,a=new Array(o);a[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<o;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},18699:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var n=l(83117),r=l(80102),o=(l(67294),l(3905)),a=["components"],i={title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},u=void 0,d={unversionedId:"apis/media/video/chooseVideo",id:"version-3.x/apis/media/video/chooseVideo",isDocsHomePage:!1,title:"Taro.chooseVideo(option)",description:"Takes a video or selects a video from the mobile album.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/video/chooseVideo.md",sourceDirName:"apis/media/video",slug:"/apis/media/video/chooseVideo",permalink:"/taro/en/docs/apis/media/video/chooseVideo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/video/chooseVideo.md",tags:[],version:"3.x",frontMatter:{title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},sidebar:"version-3.x/API",previous:{title:"compressVideo",permalink:"/taro/en/docs/apis/media/video/compressVideo"},next:{title:"chooseMedia",permalink:"/taro/en/docs/apis/media/video/chooseMedia"}},c=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"camera",id:"camera",children:[],level:3},{value:"sourceType",id:"sourcetype",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:c};function k(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Takes a video or selects a video from the mobile album."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/video/wx.chooseVideo.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<void>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"camera"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"back" | "front"')),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Indicates the default camera to be enabled. On some Android phones, the setting cannot take effect because it is not supported in ROM.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"compressed"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Indicates whether to compress the selected video file")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"maxDuration"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The maximum duration of a recorded video (in sec)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"sourceType"),(0,o.kt)("td",null,(0,o.kt)("code",null,'("album" | "camera")[]')),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The source of the video")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"duration"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Duration of the selected video")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"height"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Returns the height of the selected video")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"size"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Amount of data of the selected video")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"tempFilePath"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Temporary file path of the selected video")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"width"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Returns the width of the selected video")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"errMsg"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Call result")))),(0,o.kt)("h3",{id:"camera"},"camera"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"back"),(0,o.kt)("td",null,"Enables the rear camera by default")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"front"),(0,o.kt)("td",null,"Enables the front camera by default")))),(0,o.kt)("h3",{id:"sourcetype"},"sourceType"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"album"),(0,o.kt)("td",null,"Selects a video from the album")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"camera"),(0,o.kt)("td",null,"Takes a video with the camera")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseVideo({\n  sourceType: ['album','camera'],\n  maxDuration: 60,\n  camera: 'back',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.chooseVideo"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);