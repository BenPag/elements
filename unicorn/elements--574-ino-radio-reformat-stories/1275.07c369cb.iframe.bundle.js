/*! For license information please see 1275.07c369cb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[1275],{"../elements/dist/esm/component-utils-f155794d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>generateUniqueId,f:()=>focusIfExists,g:()=>getSlotContent,h:()=>hasSlotContent,m:()=>moveCursorToEnd});__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js");function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}function getSlotContent(el,slotName){return el.querySelector('[slot="'+slotName+'"]')}function hasSlotContent(el,slotName){return el.querySelectorAll('[slot="'+slotName+'"]').length>0}function focusIfExists(el){var _a;null===(_a=el.querySelector("[data-ino-focus]"))||void 0===_a||_a.focus()}function moveCursorToEnd(el){var len=el.value.length;el.setSelectionRange&&(el.focus(),el.setSelectionRange(len,len))}},"../elements/dist/esm/ino-popover.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_popover:()=>Popover});__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../elements/dist/esm/index-5082bac1.js"),_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../elements/dist/esm/index-7e3a00fd.js"),_tippy_esm_b9178e7b_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../elements/dist/esm/tippy.esm-b9178e7b.js"),_component_utils_f155794d_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../elements/dist/esm/component-utils-f155794d.js"),_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../elements/dist/esm/ponyfill-495ec32d.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var hideOnPopperBlur={name:"hideOnPopperBlur",defaultValue:!0,fn:function fn(instance){return{onCreate:function onCreate(){instance.popper.addEventListener("focusout",(function(event){instance.props.hideOnPopperBlur&&event.relatedTarget&&!instance.popper.contains(event.relatedTarget)&&instance.hide()}))}}}},hideOnEsc={name:"hideOnEsc",defaultValue:!0,fn:function fn(_ref){var hide=_ref.hide;function onKeyDown(e){"Escape"===e.key&&hide()}return{onShow:function onShow(){document.addEventListener("keydown",onKeyDown)},onHide:function onHide(){document.removeEventListener("keydown",onKeyDown)}}}},Popover=function(){function Popover(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Popover),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.r)(this,hostRef),this.visibleChanged=(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"visibleChanged",7),this.placement="auto",this.attachToBody=!1,this.hideOnBlur=!1,this.hideOnEsc=!1,this.distance=10,this.colorScheme="primary",this.interactive=!1,this.followCursor=!1,this.trigger="mouseenter focus",this.controlled=!1,this.visible=!1}var _getTippyInstance;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Popover,[{key:"placementChanged",value:function placementChanged(){var _a;null===(_a=this.tippyInstance)||void 0===_a||_a.setProps({placement:this.placement})}},{key:"bodyChanged",value:function bodyChanged(){this.create()}},{key:"forChanged",value:function forChanged(){this.create()}},{key:"hideOnBlurChanged",value:function hideOnBlurChanged(){this.create()}},{key:"hideOnEscChanged",value:function hideOnEscChanged(){this.create()}},{key:"distanceChanged",value:function distanceChanged(){var _a;null===(_a=this.tippyInstance)||void 0===_a||_a.setProps({offset:[0,this.distance]})}},{key:"interactiveChanged",value:function interactiveChanged(){this.create()}},{key:"followCursorChanged",value:function followCursorChanged(){this.create()}},{key:"triggerChanged",value:function triggerChanged(){var _a;null===(_a=this.tippyInstance)||void 0===_a||_a.setProps({trigger:this.trigger})}},{key:"getTippyInstance",value:(_getTippyInstance=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",this.tippyInstance);case 1:case"end":return _context.stop()}}),_callee,this)}))),function getTippyInstance(){return _getTippyInstance.apply(this,arguments)})},{key:"controlledChanged",value:function controlledChanged(){this.create()}},{key:"visibleChangeHandler",value:function visibleChangeHandler(show){var _a,_b;this.controlled&&(show?null===(_a=this.tippyInstance)||void 0===_a||_a.show():null===(_b=this.tippyInstance)||void 0===_b||_b.hide())}},{key:"componentDidLoad",value:function componentDidLoad(){this.create()}},{key:"create",value:function create(){var _a,_this=this;null===(_a=this.tippyInstance)||void 0===_a||_a.destroy(),!this.target&&this.for&&console.warn("The element with the id '"+this.for+"' could not be found.");var plugins=[];this.hideOnBlur&&plugins.push(hideOnPopperBlur),this.hideOnEsc&&plugins.push(hideOnEsc);var shouldFollowCursor=this.followCursor&&"false"!==this.followCursor;shouldFollowCursor&&plugins.push(_tippy_esm_b9178e7b_js__WEBPACK_IMPORTED_MODULE_11__.f);var options={allowHTML:!0,animation:"scale-subtle",appendTo:this.attachToBody?document.body:this.popoverContainer,content:this.popoverContent,duration:100,followCursor:!!shouldFollowCursor&&this.followCursor,placement:this.placement,trigger:this.trigger,offset:[0,this.distance],plugins:[].concat(plugins,[{fn:function fn(){return{onMount:function onMount(){var datepickers=Array.from(_this.el.querySelectorAll("ino-datepicker"));null==datepickers||datepickers.forEach((function(datepicker){return datepicker.redraw()}));var target=_this.popoverContent.querySelector("ino-input[data-ino-focus],ino-datepicker[data-ino-focus],  ino-textarea[data-ino-focus]");null==target||target.setFocus()},onShow:function onShow(){if(_this.controlled&&!_this.visible)return _this.visibleChanged.emit(!0),!1},onHide:function onHide(){if(_this.controlled&&_this.visible)return _this.visibleChanged.emit(!1),!1}}}}]),onShow:function onShow(){if(_this.controlled&&!_this.visible)return _this.visibleChanged.emit(!0),!1},onHide:function onHide(){if(_this.controlled&&_this.visible)return _this.visibleChanged.emit(!1),!1}};this.interactive&&(options.interactive=!0),this.tippyInstance=(0,_tippy_esm_b9178e7b_js__WEBPACK_IMPORTED_MODULE_11__.t)(this.target,options)}},{key:"target",get:function get(){var slotContent=(0,_component_utils_f155794d_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.el,"popover-trigger");return slotContent||(this.for?document.getElementById(this.for):this.el.parentElement)}},{key:"handlePopoverClick",value:function handlePopoverClick(e){e.target&&((0,_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_14__.c)(e.target,"[data-ino-close]")&&this.tippyInstance.hide())}},{key:"render",value:function render(){var _this2=this,popoverClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_10__.c)("ino-popover","ino-popover--color-scheme-"+this.colorScheme,"ino-popover__content");return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)(_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.H,null,(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot",{name:"popover-trigger"}),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("div",{ref:function ref(_ref2){return _this2.popoverContainer=_ref2}},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("div",{class:popoverClasses,role:"tooltip",ref:function ref(_ref3){return _this2.popoverContent=_ref3},onClick:this.handlePopoverClick.bind(this)},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot",null))))}},{key:"el",get:function get(){return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.g)(this)}}],[{key:"watchers",get:function get(){return{placement:["placementChanged"],attachToBody:["bodyChanged"],for:["forChanged"],hideOnBlur:["hideOnBlurChanged"],hideOnEsc:["hideOnEscChanged"],distance:["distanceChanged"],interactive:["interactiveChanged"],followCursor:["followCursorChanged"],trigger:["triggerChanged"],controlled:["controlledChanged"],visible:["visibleChangeHandler"]}}}]),Popover}();Popover.style=".tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}.ino-popover>*{border-radius:6px}.ino-popover.ino-popover--color-scheme-primary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-secondary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#bbd962;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-light>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#e7e7e7;color:#000;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-transparent>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}"},"../elements/dist/esm/ponyfill-495ec32d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function closest(element,selector){if(element.closest)return element.closest(selector);for(var el=element;el;){if(matches(el,selector))return el;el=el.parentElement}return null}function matches(element,selector){return(element.matches||element.webkitMatchesSelector||element.msMatchesSelector).call(element,selector)}function estimateScrollWidth(element){var htmlEl=element;if(null!==htmlEl.offsetParent)return htmlEl.scrollWidth;var clone=htmlEl.cloneNode(!0);clone.style.setProperty("position","absolute"),clone.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(clone);var scrollWidth=clone.scrollWidth;return document.documentElement.removeChild(clone),scrollWidth}__webpack_require__.d(__webpack_exports__,{c:()=>closest,e:()=>estimateScrollWidth,m:()=>matches})}}]);
//# sourceMappingURL=1275.07c369cb.iframe.bundle.js.map