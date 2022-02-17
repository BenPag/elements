/*! For license information please see 8770.8507038e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[8770],{"../elements/dist/esm/ino-radio-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_radio_group:()=>RadioGroup});__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.find.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js");var _index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../elements/dist/esm/index-68c0d1c9.js");function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var RadioGroup=function(){function RadioGroup(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,RadioGroup),(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_16__.r)(this,hostRef)}var _updateRadios,_removeHoverAnimation,_addHoverAnimation,_disconnectedCallback,_componentDidLoad;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(RadioGroup,[{key:"valueChanged",value:function valueChanged(value){this.updateRadios(value)}},{key:"componentDidLoad",value:(_componentDidLoad=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var _this=this;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return this.updateRadios(this.value),_context.next=3,this.getRadios();case 3:_context.sent.forEach((function(radio){radio.addEventListener("mouseover",(function(){return _this.addHoverAnimation(radio)})),radio.addEventListener("mouseout",(function(){return _this.removeHoverAnimation()}))}));case 5:case"end":return _context.stop()}}),_callee,this)}))),function componentDidLoad(){return _componentDidLoad.apply(this,arguments)})},{key:"disconnectedCallback",value:(_disconnectedCallback=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(){var _this2=this;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,this.getRadios();case 2:_context2.sent.forEach((function(radio){radio.removeEventListener("mouseover",(function(){return _this2.addHoverAnimation(radio)})),radio.removeEventListener("mouseout",(function(){return _this2.removeHoverAnimation()}))}));case 4:case"end":return _context2.stop()}}),_callee2,this)}))),function disconnectedCallback(){return _disconnectedCallback.apply(this,arguments)})},{key:"addHoverAnimation",value:(_addHoverAnimation=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(hoveredRadio){var radios,checkedRadio;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,this.getRadios();case 2:if(radios=_context3.sent,(checkedRadio=radios.find((function(radio){return Boolean(radio.checked)})))&&hoveredRadio!==checkedRadio){_context3.next=6;break}return _context3.abrupt("return");case 6:checkedRadio.classList.add("ino-checked-hover");case 7:case"end":return _context3.stop()}}),_callee3,this)}))),function addHoverAnimation(_x){return _addHoverAnimation.apply(this,arguments)})},{key:"removeHoverAnimation",value:(_removeHoverAnimation=_asyncToGenerator(regeneratorRuntime.mark((function _callee4(){var radios,checkedRadio;return regeneratorRuntime.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.next=2,this.getRadios();case 2:if(radios=_context4.sent,checkedRadio=radios.find((function(radio){return radio.classList.contains("ino-checked-hover")}))){_context4.next=6;break}return _context4.abrupt("return");case 6:checkedRadio.classList.remove("ino-checked-hover");case 7:case"end":return _context4.stop()}}),_callee4,this)}))),function removeHoverAnimation(){return _removeHoverAnimation.apply(this,arguments)})},{key:"updateRadios",value:(_updateRadios=_asyncToGenerator(regeneratorRuntime.mark((function _callee5(value){var radios,hasChecked,_iterator,_step,radio;return regeneratorRuntime.wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return _context5.next=2,this.getRadios();case 2:radios=_context5.sent,hasChecked=!1,_iterator=_createForOfIteratorHelper(radios);try{for(_iterator.s();!(_step=_iterator.n()).done;)(radio=_step.value).checked&&radio.classList.remove("ino-checked-hover"),hasChecked||radio.value!==value?radio.checked=!1:(hasChecked=!0,radio.checked=!0)}catch(err){_iterator.e(err)}finally{_iterator.f()}hasChecked||console.warn("No ino-radio button with value="+value+" was found.");case 7:case"end":return _context5.stop()}}),_callee5,this)}))),function updateRadios(_x2){return _updateRadios.apply(this,arguments)})},{key:"getRadios",value:function getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}},{key:"render",value:function render(){return(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_16__.h)(_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_16__.H,null,(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_16__.h)("slot",null))}},{key:"el",get:function get(){return(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_16__.g)(this)}}],[{key:"watchers",get:function get(){return{value:["valueChanged"]}}}]),RadioGroup}();RadioGroup.style=""}}]);
//# sourceMappingURL=8770.8507038e.iframe.bundle.js.map