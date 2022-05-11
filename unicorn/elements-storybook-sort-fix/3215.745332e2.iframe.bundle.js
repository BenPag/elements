/*! For license information please see 3215.745332e2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[3215],{"../elements/dist/esm/ino-currency-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_currency_input:()=>CurrencyInput,__namedExportsOrder:()=>__namedExportsOrder});__webpack_require__("../../node_modules/core-js/modules/es.number.is-nan.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_5082bac1_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../elements/dist/esm/index-5082bac1.js"),_config_5f0f1b9e_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../elements/dist/esm/config-5f0f1b9e.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var CurrencyInput=function(){function CurrencyInput(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CurrencyInput),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_12__.r)(this,hostRef),this.valueChange=(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_12__.c)(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=function(e){var value=e.detail;value=value?_this.fromCurrencyString(value):null,Number.isNaN(value)||(_this.hiddenValue=value,_this.valueChange.emit(value)),e.stopPropagation()},this.handleFocus=function(){_this.inoInputEl.value=_this.trimCurrencyString(_this.inoInputEl.value)},this.handleBlur=function(){var value=_this.hiddenInputEl.value;value&&"null"!=value&&(_this.inoInputEl.value=_this.toCurrencyString(value))}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CurrencyInput,[{key:"valueChanged",value:function valueChanged(value){var _a;value&&"null"!==value?value!=(null===(_a=this.hiddenInputEl)||void 0===_a?void 0:_a.value)&&(this.hiddenValue=value.toString(),this.inputValue=this.toCurrencyString(value)):(this.hiddenValue=null,this.inputValue=null)}},{key:"componentDidLoad",value:function componentDidLoad(){var _a,_this2=this;this.inoInputEl=this.el.querySelector("ino-input"),null===(_a=this.inoInputEl)||void 0===_a||_a.setUserInputInterceptor((function(value){return _this2.trimCurrencyString(value)})),this.inoInputEl||console.error("currency input requires ino-input as child"),"text"!==this.inoInputEl.type&&console.error('currency input has to be of type "text"'),this.initialize()}},{key:"connectedCallback",value:function connectedCallback(){this.initialize()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _a,_b,_c;null===(_a=this.inoInputEl)||void 0===_a||_a.removeEventListener("inoFocus",this.handleFocus),null===(_b=this.inoInputEl)||void 0===_b||_b.removeEventListener("inoBlur",this.handleBlur),null===(_c=this.inoInputEl)||void 0===_c||_c.removeEventListener("valueChange",this.handleValueChange)}},{key:"initialize",value:function initialize(){var _a,_b,_c;this.hiddenInputEl&&this.setupHiddenInput(),null===(_a=this.inoInputEl)||void 0===_a||_a.addEventListener("inoFocus",this.handleFocus),null===(_b=this.inoInputEl)||void 0===_b||_b.addEventListener("inoBlur",this.handleBlur),null===(_c=this.inoInputEl)||void 0===_c||_c.addEventListener("valueChange",this.handleValueChange)}},{key:"hiddenValue",set:function set(value){this.hiddenInputEl&&(this.hiddenInputEl.value=value)}},{key:"inputValue",set:function set(value){this.inoInputEl&&(this.inoInputEl.value=value)}},{key:"setupHiddenInput",value:function setupHiddenInput(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}},{key:"getSeperator",value:function getSeperator(){return this.toCurrencyString(0).charAt(1)}},{key:"toCurrencyString",value:function toCurrencyString(value){var _a;if(!value&&0!==value)return null;var locale=(null===(_a=this.currencyLocale)||void 0===_a?void 0:_a.length)>0?this.currencyLocale:_config_5f0f1b9e_js__WEBPACK_IMPORTED_MODULE_13__.c.get("currencyLocale",this.defaultLocale);return Intl.NumberFormat(locale,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(value))}},{key:"trimCurrencyString",value:function trimCurrencyString(value){if(!value)return value;var leadingSymbol=this.extractLeadingSymbol(value),separator=this.getSeperator(),numberParts=this.removeNonDecimalValues(value).split(separator);return value=numberParts[0],numberParts.length>1&&(value+=separator+numberParts[1].substring(0,2)),leadingSymbol+value}},{key:"fromCurrencyString",value:function fromCurrencyString(value){var leadingSymbol=this.extractLeadingSymbol(value),separator=this.getSeperator(),newValue=this.removeNonDecimalValues(value).replace(separator,".");return Number(leadingSymbol+newValue)}},{key:"extractLeadingSymbol",value:function extractLeadingSymbol(value){var _a,min=null===(_a=this.inoInputEl)||void 0===_a?void 0:_a.min;return min&&Number(min)>=0?"":value.startsWith("-")?"-":""}},{key:"removeNonDecimalValues",value:function removeNonDecimalValues(value){var currencyRegex=new RegExp("[^"+this.getSeperator()+"0-9]","g");return value.replace(currencyRegex,"")}},{key:"render",value:function render(){var _this3=this;return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_12__.h)(_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_12__.H,null,(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_12__.h)("input",{type:"hidden",ref:function ref(el){return _this3.hiddenInputEl=el},value:this.value}),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot",null))}},{key:"el",get:function get(){return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_12__.g)(this)}}],[{key:"watchers",get:function get(){return{value:["valueChanged"]}}}]),CurrencyInput}();CurrencyInput.style="";var __namedExportsOrder=["ino_currency_input"]}}]);
//# sourceMappingURL=3215.745332e2.iframe.bundle.js.map