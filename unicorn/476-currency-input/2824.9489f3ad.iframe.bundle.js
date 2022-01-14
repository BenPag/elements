(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[2824],{"../elements/dist/esm-es5/ino-currency-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_currency_input:()=>CurrencyInput});__webpack_require__("../../node_modules/core-js/modules/es.number.is-nan.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.constructor.js");var index_e599b905=__webpack_require__("../elements/dist/esm-es5/index-e599b905.js"),config=new(function(){function n(){}return n.prototype.get=function(n,e){var o=this.storage&&this.storage[n];return null!=o?o:e},n.prototype.patch=function(n,e){this.storage&&this.storage[n]&&(this.storage[n]=e)},Object.defineProperty(n.prototype,"storage",{get:function get(){if("undefined"!=typeof window){var n=window.inoElements;if(n&&n.config)return n.config}return null},enumerable:!1,configurable:!0}),n}()),CurrencyInput=function(){function t(t){var e=this;(0,index_e599b905.r)(this,t),this.valueChange=(0,index_e599b905.c)(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=function(t){var n=t.detail;n=n?e.fromCurrencyString(n):null,Number.isNaN(n)||(e.hiddenValue=n,e.valueChange.emit(n)),t.stopPropagation()},this.handleFocus=function(){e.inoInputEl.value=e.trimCurrencyString(e.inoInputEl.value)},this.handleBlur=function(){var t=e.hiddenInputEl.value;t&&"null"!=t&&(e.inoInputEl.value=e.toCurrencyString(t))}}return t.prototype.valueChanged=function(t){var e;t&&"null"!==t?t!=(null===(e=this.hiddenInputEl)||void 0===e?void 0:e.value)&&(this.hiddenValue=t.toString(),this.inputValue=this.toCurrencyString(t)):(this.hiddenValue=null,this.inputValue=null)},t.prototype.componentDidLoad=function(){var e,t=this;this.inoInputEl=this.el.querySelector("ino-input"),null===(e=this.inoInputEl)||void 0===e||e.setUserInputInterceptor((function(e){return t.trimCurrencyString(e)})),this.inoInputEl||console.error("currency input requires ino-input as child"),"text"!==this.inoInputEl.type&&console.error('currency input has to be of type "text"'),this.initialize()},t.prototype.connectedCallback=function(){this.initialize()},t.prototype.disconnectedCallback=function(){var t,e,n;null===(t=this.inoInputEl)||void 0===t||t.removeEventListener("inoFocus",this.handleFocus),null===(e=this.inoInputEl)||void 0===e||e.removeEventListener("inoBlur",this.handleBlur),null===(n=this.inoInputEl)||void 0===n||n.removeEventListener("valueChange",this.handleValueChange)},t.prototype.initialize=function(){var t,e,n;this.hiddenInputEl&&this.setupHiddenInput(),null===(t=this.inoInputEl)||void 0===t||t.addEventListener("inoFocus",this.handleFocus),null===(e=this.inoInputEl)||void 0===e||e.addEventListener("inoBlur",this.handleBlur),null===(n=this.inoInputEl)||void 0===n||n.addEventListener("valueChange",this.handleValueChange)},Object.defineProperty(t.prototype,"hiddenValue",{set:function set(t){this.hiddenInputEl&&(this.hiddenInputEl.value=t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"inputValue",{set:function set(t){this.inoInputEl&&(this.inoInputEl.value=t)},enumerable:!1,configurable:!0}),t.prototype.setupHiddenInput=function(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)},t.prototype.getSeperator=function(){return this.toCurrencyString(0).charAt(1)},t.prototype.toCurrencyString=function(t){var e;if(t||0===t){var n=(null===(e=this.currencyLocale)||void 0===e?void 0:e.length)>0?this.currencyLocale:config.get("currencyLocale",this.defaultLocale);return Intl.NumberFormat(n,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(t))}return null},t.prototype.trimCurrencyString=function(t){if(!t)return t;var e=this.extractLeadingSymbol(t),n=this.getSeperator(),i=this.removeNonDecimalValues(t).split(n);return t=i[0],i.length>1&&(t+=n+i[1].substring(0,2)),e+t},t.prototype.fromCurrencyString=function(t){var e=this.extractLeadingSymbol(t),n=this.getSeperator(),i=this.removeNonDecimalValues(t).replace(n,".");return Number(e+i)},t.prototype.extractLeadingSymbol=function(t){var e,n=null===(e=this.inoInputEl)||void 0===e?void 0:e.min;return n&&Number(n)>=0?"":t.startsWith("-")?"-":""},t.prototype.removeNonDecimalValues=function(t){var e=new RegExp("[^"+this.getSeperator()+"0-9]","g");return t.replace(e,"")},t.prototype.render=function(){var t=this;return(0,index_e599b905.h)(index_e599b905.H,null,(0,index_e599b905.h)("input",{type:"hidden",ref:function ref(e){return t.hiddenInputEl=e},value:this.value}),(0,index_e599b905.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function get(){return(0,index_e599b905.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function get(){return{value:["valueChanged"]}},enumerable:!1,configurable:!0}),t}();CurrencyInput.style=""},"../../node_modules/core-js/modules/es.date.to-string.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var redefine=__webpack_require__("../../node_modules/core-js/internals/redefine.js"),DatePrototype=Date.prototype,nativeDateToString=DatePrototype.toString,getTime=DatePrototype.getTime;new Date(NaN)+""!="Invalid Date"&&redefine(DatePrototype,"toString",(function toString(){var value=getTime.call(this);return value==value?nativeDateToString.call(this):"Invalid Date"}))},"../../node_modules/core-js/modules/es.number.is-nan.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../node_modules/core-js/internals/export.js")({target:"Number",stat:!0},{isNaN:function isNaN(number){return number!=number}})}}]);
//# sourceMappingURL=2824.9489f3ad.iframe.bundle.js.map