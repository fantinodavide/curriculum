(()=>{"use strict";var e={290:function(e,t,r){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=r(564),o=r(564),l=(0,o.createElementVNode)("header",null,[(0,o.createElementVNode)("h1",{style:{"margin-top":"0"}},"Fantino Davide"),(0,o.createElementVNode)("h3",null,"Full Stack Developer")],-1),i={id:"main"},c={name:"App"},d=r(360),u=r(392);t["default"]=(0,n.defineComponent)(a(a({},c),{setup:function(e){return function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[l,(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("aside",null,[(0,o.createVNode)(d.default,{title:"info"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(u.default,{title:"address",desc:"Viale Vittorio Veneto 13, 12061 Carrú (CN), Pedmont, Italy"}),(0,o.createVNode)(u.default,{title:"phone",desc:"+39 3914639240"}),(0,o.createVNode)(u.default,{title:"email",desc:"fantinodavide02@gmail.com"}),(0,o.createVNode)(u.default,{title:"github",desc:"https://github.com/fantinodavide"}),(0,o.createVNode)(u.default,{title:"linkedin",desc:"https://www.linkedin.com/in/fantino-davide"}),(0,o.createVNode)(u.default,{title:"curriculum vitae",desc:"https://cv.fantinodavide.it"})]})),_:1}),(0,o.createVNode)(d.default,{title:"skills"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(u.default,{title:"web client-side",desc:"HTML, CSS, JavaScript, Vue.JS, Angular.JS, JQuery",array:""}),(0,o.createVNode)(u.default,{title:"web server-side",desc:"Node.JS, PHP",array:""}),(0,o.createVNode)(u.default,{title:"others",desc:"C, C#, C++, Python",array:""}),(0,o.createVNode)(u.default,{title:"softwares",desc:"FileZilla, Fusion 360, IdeaMaker, SuperSlicer, Simplify3D, AutoCAD, PhotoShop, Word, PowerPoint, Excel",array:""}),(0,o.createVNode)(u.default,{title:"Operating Systems",desc:"Windows=5,Linux=5,MacOS=2",array:"",range:""}),(0,o.createVNode)(u.default,{title:"personality",desc:"Relationing=4,Strategy=5,Communication=3.5,dedication=5",array:"",range:""}),(0,o.createVNode)(u.default,{title:"languages",desc:"Italian=5,English=3,French=1",array:"",range:""})]})),_:1})])])],64)}}}))},863:(e,t,r)=>{Object.defineProperty(t,"X",{value:!0});var a={props:{value:Number,title:String,max:{default:5}},methods:{isUrl:function(e){var t=/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;return e.match(t)},isEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.match(t)}}},n=r(564),o=function(){(0,n.useCssVars)((function(e){return{"70f2147e":100/e.max*e.value+"%"}}))},l=a.setup;a.setup=l?function(e,t){return o(),l(e,t)}:o,t.Z=a},556:function(e,t,r){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=r(564),o=r(564),l={key:0},i={key:1},c=["href"],d={key:3},u={key:4},s={props:{title:String,desc:{required:!0,type:String},array:{default:!1,required:!1,type:Boolean},range:{default:!1,required:!1,type:Boolean},skiptitle:{default:!1,required:!1,type:Boolean}},methods:{isUrl:function(e){var t=/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;return e.match(t)},isEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.match(t)}},created:function(){console.log(JSON.parse(JSON.stringify(this.$props)))}},f=r(376),p=r(699);t["default"]=(0,n.defineComponent)(a(a({},s),{__name:"section-desc",setup:function(e){return function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[e.skiptitle?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("h4",l,(0,o.toDisplayString)(e.title),1)),e.array||t.isUrl(e.desc)?!e.array&&t.isUrl(e.desc)?((0,o.openBlock)(),(0,o.createElementBlock)("a",{key:2,href:t.isEmail(e.desc)?"mailto:":""+e.desc,target:"__blank"},(0,o.toDisplayString)(e.desc.replace("https://","").replace("www.","")),9,c)):e.range?((0,o.openBlock)(),(0,o.createElementBlock)("div",d,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.desc.split(","),(function(e){return(0,o.openBlock)(),(0,o.createBlock)(p.default,{title:e.trim().split("=")[0],value:e.trim().split("=")[1]},null,8,["title","value"])})),256))])):((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.desc.split(","),(function(e){return(0,o.openBlock)(),(0,o.createBlock)(f.default,{skew:"",value:e.trim()},null,8,["value"])})),256))])):((0,o.openBlock)(),(0,o.createElementBlock)("p",i,(0,o.toDisplayString)(e.desc),1))],64)}}}))},924:(e,t)=>{Object.defineProperty(t,"X",{value:!0}),t.Z={props:{title:String}}},633:(e,t)=>{Object.defineProperty(t,"X",{value:!0}),t.Z={props:{value:String,skew:{required:!1,type:Boolean}},methods:{isUrl:function(e){var t=/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;return e.match(t)},isEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.match(t)}}}},241:(e,t,r)=>{t.s=void 0;var a=r(564),n=function(e){return(0,a.pushScopeId)("data-v-b5798fec"),e=e(),(0,a.popScopeId)(),e},o={key:0},l=n((function(){return(0,a.createElementVNode)("div",null,null,-1)}));function i(e,t,r,n,i,c){return""!=r.title?((0,a.openBlock)(),(0,a.createElementBlock)("span",o,[(0,a.createTextVNode)((0,a.toDisplayString)(r.title)+" ",1),l])):(0,a.createCommentVNode)("",!0)}t.s=i},117:(e,t,r)=>{t.s=void 0;var a=r(564);function n(e,t,r,n,o,l){return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createElementVNode)("h2",null,(0,a.toDisplayString)(r.title),1),(0,a.renderSlot)(e.$slots,"default",{},void 0,!0)])}t.s=n},756:(e,t,r)=>{t.s=void 0;var a=r(564);function n(e,t,r,n,o,l){return(0,a.openBlock)(),(0,a.createElementBlock)("span",null,(0,a.toDisplayString)(r.value),1)}t.s=n},286:(e,t,r)=>{var a=r(564),n=r(555);(0,a.createApp)(n.default).mount("#app")},555:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(285),n={};for(const i in a)"default"!==i&&(n[i]=()=>a[i]);r.d(t,n);r(849);const o=a["default"],l=o},699:(e,t,r)=>{r.r(t),r.d(t,{__esModule:()=>n.X,default:()=>i});var a=r(241),n=r(863),o=r(744);const l=(0,o.Z)(n.Z,[["render",a.s],["__scopeId","data-v-b5798fec"]]),i=l},392:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(691),n={};for(const c in a)"default"!==c&&(n[c]=()=>a[c]);r.d(t,n);r(99);var o=r(744);const l=(0,o.Z)(a["default"],[["__scopeId","data-v-b1861764"]]),i=l},360:(e,t,r)=>{r.r(t),r.d(t,{__esModule:()=>n.X,default:()=>i});var a=r(117),n=r(924),o=r(744);const l=(0,o.Z)(n.Z,[["render",a.s],["__scopeId","data-v-161090fb"]]),i=l},376:(e,t,r)=>{r.r(t),r.d(t,{__esModule:()=>n.X,default:()=>i});var a=r(756),n=r(633),o=r(744);const l=(0,o.Z)(n.Z,[["render",a.s],["__scopeId","data-v-fbd57d72"]]),i=l},849:()=>{},99:()=>{},285:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n.a});var a=r(290),n=r.n(a),o={};for(const l in a)"default"!==l&&(o[l]=()=>a[l]);r.d(t,o)},691:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n.a});var a=r(556),n=r.n(a),o={};for(const l in a)"default"!==l&&(o[l]=()=>a[l]);r.d(t,o)}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,a,n,o)=>{if(!a){var l=1/0;for(u=0;u<e.length;u++){for(var[a,n,o]=e[u],i=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[l,i,c]=a,d=0;if(l.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(a);d<l.length;d++)o=l[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},a=self["webpackChunkfdcv"]=self["webpackChunkfdcv"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[998],(()=>r(286)));a=r.O(a)})();
//# sourceMappingURL=app.90d462d5.js.map