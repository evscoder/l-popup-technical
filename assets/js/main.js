!function(){"use strict";var t,e={854:function(t,e,n){var i=n(671),o=n(144),s=n(942),r="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,u=/iPhone|iPad|Android|blackberry|windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent),c=/iPhone|iPad/i.test(navigator.userAgent),a=n(898),l=function(){function t(){(0,i.Z)(this,t),(0,s.Z)(this,"onEnterInput",(function(t){var e=t.target,n=e.closest(".input");""===e.value?n.classList.remove("filled"):(n.classList.add("filled"),n.classList.remove("error"))})),(0,s.Z)(this,"onBlurInput",(function(t){var e=t.target,n=e.closest(".input");e.classList.contains("js-input-phone")&&16!==e.value.length&&setTimeout((function(){n.classList.add("error")}),100)})),this.inputs=document.querySelectorAll(".js-input"),this.inputPhone=document.querySelectorAll(".js-input-phone"),this.init()}return(0,o.Z)(t,[{key:"phoneMask",value:function(){this.inputPhone.forEach((function(t){(0,a.ZP)(t,{mask:"+{7}(000)000-00-00"})}))}},{key:"init",value:function(){var t=this;this.inputs.forEach((function(e){e.addEventListener("input",t.onEnterInput),e.addEventListener("blur",t.onBlurInput)})),this.phoneMask()}}]),t}(),d=function(){function t(){(0,i.Z)(this,t),this.modal=document.querySelector(".window-popup"),this.modal&&(this.toggle=document.querySelectorAll("[data-modal]"),this.closeTrigger=document.querySelectorAll('[data-dismiss="modal"]'),this.onInit())}return(0,o.Z)(t,[{key:"onInit",value:function(){this.toggle.forEach((function(e){e.addEventListener("click",(function(e){return t.show(e)}))})),this.closeTrigger.forEach((function(e){e.addEventListener("click",(function(e){return t.close(e)}))}))}}],[{key:"toggleClass",value:function(t){t.classList.add("is-active"),t.classList.add("is-animate"),console.log(t)}},{key:"show",value:function(e){var n=e.currentTarget.getAttribute("data-modal"),i=document.querySelector(n);e.preventDefault(),e.target.closest(".modal")?setTimeout((function(){t.toggleClass(i)}),1e3):t.toggleClass(i)}},{key:"close",value:function(t){var e=t.target.closest(".modal");e.classList.remove("is-animate"),setTimeout((function(){e.classList.remove("is-active")}),1e3)}}]),t}(),f=n(785),h=n(411),v=function(){function t(){var e=this;if((0,i.Z)(this,t),(0,s.Z)(this,"onSubmit",(function(t){t.preventDefault();var n=e.agree.parentNode;n.classList.remove("error"),e.inputs.forEach((function(t){var e=t.closest(".input");e.classList.remove("error"),""===t.value&&e.classList.add("error"),t.classList.contains("js-input-phone")&&16!==t.value.length&&e.classList.add("error")}));var i=(0,f.Z)(e.inputs).some((function(t){return t.closest(".error")}));if(e.agree.checked||n.classList.add("error"),!i&&e.agree.checked){var o=document.querySelector(".js-subscribe-popup-success");o.classList.add("visible"),setTimeout((function(){o.classList.remove("visible")}),2e3)}})),this.form=document.querySelector(".js-subscribe-form"),this.form){this.inputs=this.form.querySelectorAll(".js-input"),this.agree=this.form.querySelector("#agree"),this.init();var n=document.getElementById("subscribeScene");new h(n)}}return(0,o.Z)(t,[{key:"init",value:function(){this.form.addEventListener("submit",this.onSubmit)}}]),t}();new(function(){function t(){var e=this;(0,i.Z)(this,t),(0,s.Z)(this,"onLoaded",(function(){document.body.classList.add("load")})),(0,s.Z)(this,"onReady",(function(){window.addEventListener("load",e.onLoaded),new l,new v,new d})),this.setDetected(),this.init()}return(0,o.Z)(t,[{key:"setDetected",value:function(){r&&document.documentElement.classList.add("is-touch"),u&&document.documentElement.classList.add("is-mobile-platform"),c&&document.documentElement.classList.add("ios")}},{key:"init",value:function(){document.addEventListener("DOMContentLoaded",this.onReady)}},{key:"dispose",value:function(){}}]),t}())}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var s=n[t]={exports:{}};return e[t](s,s.exports,i),s.exports}i.m=e,t=[],i.O=function(e,n,o,s){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],s=t[l][2];for(var u=!0,c=0;c<n.length;c++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[c])}))?n.splice(c--,1):(u=!1,s<r&&(r=s));if(u){t.splice(l--,1);var a=o();void 0!==a&&(e=a)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,o,s]},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={179:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,r=n[0],u=n[1],c=n[2],a=0;if(r.some((function(e){return 0!==t[e]}))){for(o in u)i.o(u,o)&&(i.m[o]=u[o]);if(c)var l=c(i)}for(e&&e(n);a<r.length;a++)s=r[a],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(l)},n=self.webpackChunkawesome_project=self.webpackChunkawesome_project||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=i.O(void 0,[736],(function(){return i(854)}));o=i.O(o)}();
//# sourceMappingURL=main.js.map