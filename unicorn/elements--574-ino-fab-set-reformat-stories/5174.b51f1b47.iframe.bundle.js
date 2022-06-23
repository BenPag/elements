/*! For license information please see 5174.b51f1b47.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[5174],{"../elements/dist/esm/_commonjsHelpers-6ccee0aa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/component-utils-1c4ae7be.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>generateUniqueId,f:()=>focusIfExists,g:()=>getSlotContent,h:()=>hasSlotContent,m:()=>moveCursorToEnd,p:()=>preventEvent});__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js");function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}function getSlotContent(el,slotName){return el.querySelector('[slot="'+slotName+'"]')}function hasSlotContent(el,slotName){var _a;return slotName?el.querySelectorAll('[slot="'+slotName+'"]').length>0:0===(null===(_a=el.querySelector("slot"))||void 0===_a?void 0:_a.assignedElements().length)}function focusIfExists(el){var _a;null===(_a=el.querySelector("[data-ino-focus]"))||void 0===_a||_a.focus()}function moveCursorToEnd(el){var len=el.value.length;el.setSelectionRange&&(el.focus(),el.setSelectionRange(len,len))}function preventEvent(event){event.stopPropagation(),event.preventDefault()}},"../elements/dist/esm/index-7e3a00fd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-autocomplete.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_autocomplete:()=>Autocomplete});__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js");var _index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../elements/dist/esm/index-5082bac1.js"),_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../elements/dist/esm/index-7e3a00fd.js"),_component_utils_1c4ae7be_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../elements/dist/esm/component-utils-1c4ae7be.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var Debouncer=function(){function Debouncer(){_classCallCheck(this,Debouncer),this.timeout=null}return _createClass(Debouncer,[{key:"debounce",value:function debounce(func){var _this=this,timeout=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.timeout=setTimeout((function(){func(),_this.timeout=null}),timeout)}}]),Debouncer}(),Autocomplete=function(){function Autocomplete(hostRef){var _this2=this;_classCallCheck(this,Autocomplete),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.r)(this,hostRef),this.valueChange=(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.c)(this,"valueChange",7),this.debouncer=new Debouncer,this._selectedOptionIndex=-1,this.menuIsVisible=!1,this.noOptionsIsVisible=!1,this.debounceTimeout=300,this.noOptionsText="No Option",this.onEnterPress=function(){_this2.onOptionSelect(),_this2.inputEl.getInputElement().then(_component_utils_1c4ae7be_js__WEBPACK_IMPORTED_MODULE_12__.m)},this.onOptionSelect=function(){_this2.selectedOption&&(_this2.inputChanged(_this2.selectedOption.innerText),_this2.emitValueOfSelectedOption(),_this2.closeMenu())},this.onArrowDownPress=function(){var nextIndex=_this2.filteredOptionEls.findIndex((function(o){var _a;return o.value===(null===(_a=_this2.selectedOption)||void 0===_a?void 0:_a.value)}))+1,filteredOptionIndex=nextIndex>=_this2.filteredOptionEls.length?0:nextIndex;_this2.selectedOptionIndex=_this2.optionEls.indexOf(_this2.filteredOptionEls[filteredOptionIndex])},this.onArrowUpPress=function(){var nextIndex=_this2.filteredOptionEls.findIndex((function(o){var _a;return o.value===(null===(_a=_this2.selectedOption)||void 0===_a?void 0:_a.value)}))-1,filteredOptionIndex=nextIndex<0?_this2.filteredOptionEls.length-1:nextIndex;_this2.selectedOptionIndex=_this2.optionEls.indexOf(_this2.filteredOptionEls[filteredOptionIndex])},this.scroll=function(ev){ev.preventDefault();var _this2$selectedOption=_this2.selectedOption,offsetTop=_this2$selectedOption.offsetTop,optionHeight=_this2$selectedOption.clientHeight,_this2$menuContainer=_this2.menuContainer,scrollTop=_this2$menuContainer.scrollTop;(offsetTop+optionHeight/2>scrollTop+_this2$menuContainer.clientHeight||offsetTop<scrollTop)&&_this2.menuContainer.scrollTo(0,offsetTop)},this.setupInput=function(){if(_this2.inputEl=(0,_component_utils_1c4ae7be_js__WEBPACK_IMPORTED_MODULE_12__.g)(_this2.el,"input"),!_this2.inputEl)throw new Error('The slot "input" is empty. Please provide an <ino-input> element to that slot.');_this2.inputEl.value&&console.warn("The value property of the <ino-input> is managed by the <ino-autocomplete> and therefore should not be set manually."),_this2.inputEl.addEventListener("inoFocus",_this2.onInoInputFocus),_this2.inputEl.addEventListener("inoBlur",_this2.onInoInputBlur),_this2.menuContainer.style.setProperty("--input-width",window.getComputedStyle(_this2.inputEl).width),_this2.setOptionByValue(_this2.value)},this.onInoInputFocus=function(){_this2.inputEl.disabled||_this2.openMenu()},this.onInoInputBlur=function(event){var _a;if(!_this2.isOptionClick(event.detail)){_this2.closeMenu();var newIndex=_this2.optionEls.findIndex((function(option){return option.innerText.trim()===_this2.inputEl.value.trim()}));newIndex!==_this2.selectedOptionIndex&&(_this2.selectedOptionIndex=newIndex,_this2.emitValueOfSelectedOption()),_this2.inputChanged((null===(_a=_this2.selectedOption)||void 0===_a?void 0:_a.innerText)||"")}},this.isOptionClick=function(ev){return ev.relatedTarget&&(ev.relatedTarget.matches(".mdc-list-item")||ev.relatedTarget.matches("ino-option"))},this.emitValueOfSelectedOption=function(){var _a;_this2.valueChange.emit(null===(_a=_this2.selectedOption)||void 0===_a?void 0:_a.value)},this.inputChanged=function(searchTerm){_this2.inputEl&&(_this2.inputEl.value=searchTerm||"",_this2.debouncer.debounce((function(){return _this2.filterOptions(_this2.inputEl.value)}),_this2.debounceTimeout))},this.filterOptions=function(newVal){_this2.filteredOptionEls=_this2.optionEls.filter((function(option){var matched=option.innerText.trim().toLowerCase().includes(newVal.trim().toLowerCase());return option.style.display=matched?"block":"none",matched})),_this2.noOptionsIsVisible=0===_this2.filteredOptionEls.length},this.setupOptions=function(){_this2.optionEls=Array.from(_this2.el.getElementsByTagName("ino-option")),_this2.filteredOptionEls=_this2.optionEls,_this2.setOptionByValue(_this2.value)},this.setOptionByValue=function(value){var _a;_this2.optionEls&&(_this2.selectedOptionIndex=_this2.optionEls.findIndex((function(oEl){return oEl.value===value})),_this2.inputChanged(null===(_a=_this2.selectedOption)||void 0===_a?void 0:_a.innerText))},this.onListItemClick=function(ev){var parentElement=ev.target.parentElement;if("ino-option"===parentElement.nodeName.toLowerCase()||"ino-option"===parentElement.parentElement.nodeName.toLowerCase()){var inoOption="ino-option"===parentElement.nodeName.toLowerCase()?parentElement:parentElement.parentElement;_this2.selectedOptionIndex=_this2.optionEls.findIndex((function(oEl){return oEl.value===inoOption.value})),_this2.onOptionSelect()}},this.openMenu=function(){return _this2.menuIsVisible=!0},this.closeMenu=function(){return _this2.menuIsVisible=!1}}return _createClass(Autocomplete,[{key:"selectedOptionIndex",get:function get(){return this._selectedOptionIndex},set:function set(index){this.selectedOption&&(this.selectedOption.selected=!1),this._selectedOptionIndex=index,this.selectedOption=index>=0?this.optionEls[index]:void 0,this.selectedOption&&(this.selectedOption.selected=!0)}},{key:"onValueChange",value:function onValueChange(newValue,oldValue){newValue!==oldValue&&this.setOptionByValue(newValue)}},{key:"componentDidLoad",value:function componentDidLoad(){this.setupInput()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.inputEl.removeEventListener("inoFocus",this.onInoInputFocus),this.inputEl.removeEventListener("inoBlur",this.onInoInputBlur)}},{key:"onInoInputValueChange",value:function onInoInputValueChange(ev){"ino-input"===ev.target.tagName.toLowerCase()&&(ev.stopImmediatePropagation(),this.inputChanged(ev.detail))}},{key:"onKeyDown",value:function onKeyDown(ev){if(this.filteredOptionEls&&0!==this.filteredOptionEls.length){switch(this.menuIsVisible||["Enter","Escape","Tab"].includes(ev.code)||this.openMenu(),ev.code){case"Enter":this.onEnterPress();break;case"ArrowDown":this.openMenu(),this.onArrowDownPress(),this.scroll(ev);break;case"ArrowUp":this.openMenu(),this.onArrowUpPress(),this.scroll(ev);break;case"Escape":this.closeMenu();break;case"Tab":break;default:this.openMenu()}}}},{key:"render",value:function render(){var _this3=this,hostClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_11__.c)({"no-options-found":this.noOptionsIsVisible,"menu-open":this.menuIsVisible}),menuClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_11__.c)({menu:!0,"menu-hidden":!this.menuIsVisible,"menu-shown":this.menuIsVisible});return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.h)(_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.H,{class:hostClasses},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot",{name:"input"}),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:menuClasses,ref:function ref(el){return _this3.menuContainer=el},onMouseDown:function onMouseDown(ev){return _this3.onListItemClick(ev)}},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"mdc-list"},this.noOptionsIsVisible&&(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.h)("p",{class:"no-options-text"},this.noOptionsText),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot",{onSlotchange:this.setupOptions}))))}},{key:"el",get:function get(){return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_10__.g)(this)}}],[{key:"watchers",get:function get(){return{value:["onValueChange"]}}}]),Autocomplete}();Autocomplete.style=":host{position:relative}:host .menu{width:var(--input-width, max-content);max-height:var(--ino-autocomplete-list-max-height, 225px);position:absolute;top:76px;z-index:10;background-color:white;box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);border-bottom-left-radius:5px;border-bottom-right-radius:5px;overflow:auto}:host .menu-hidden{display:none}:host .menu-shown{display:block}:host .no-options-text{padding-left:16px;padding-right:16px;color:#9b9b9b}"}}]);
//# sourceMappingURL=5174.b51f1b47.iframe.bundle.js.map