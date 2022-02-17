/*! For license information please see 1078.1c5ec92a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[1078],{"../elements/dist/esm/_commonjsHelpers-6ccee0aa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/component-b6824081.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>MDCFoundation,_:()=>__extends,a:()=>_assign,b:()=>MDCComponent,c:()=>__values,d:()=>__spread,e:()=>__read});__webpack_require__("../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _extendStatics=function extendStatics(d,b){return(_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)};function __extends(d,b){function __(){this.constructor=d}_extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var _assign=function __assign(){return(_assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};function __values(o){var s="function"==typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"==typeof o.length)return{next:function next(){return o&&i>=o.length&&(o=void 0),{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar}function __spread(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar}var MDCFoundation=function(){function MDCFoundation(adapter){void 0===adapter&&(adapter={}),this.adapter=adapter}return Object.defineProperty(MDCFoundation,"cssClasses",{get:function get(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(MDCFoundation,"strings",{get:function get(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(MDCFoundation,"numbers",{get:function get(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(MDCFoundation,"defaultAdapter",{get:function get(){return{}},enumerable:!0,configurable:!0}),MDCFoundation.prototype.init=function(){},MDCFoundation.prototype.destroy=function(){},MDCFoundation}(),MDCComponent=function(){function MDCComponent(root,foundation){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];this.root=root,this.initialize.apply(this,__spread(args)),this.foundation=void 0===foundation?this.getDefaultFoundation():foundation,this.foundation.init(),this.initialSyncWithDOM()}return MDCComponent.attachTo=function(root){return new MDCComponent(root,new MDCFoundation({}))},MDCComponent.prototype.initialize=function(){for(var _args=[],_i=0;_i<arguments.length;_i++)_args[_i]=arguments[_i]},MDCComponent.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},MDCComponent.prototype.initialSyncWithDOM=function(){},MDCComponent.prototype.destroy=function(){this.foundation.destroy()},MDCComponent.prototype.listen=function(evtType,handler,options){this.root.addEventListener(evtType,handler,options)},MDCComponent.prototype.unlisten=function(evtType,handler,options){this.root.removeEventListener(evtType,handler,options)},MDCComponent.prototype.emit=function(evtType,evtData,shouldBubble){var evt;void 0===shouldBubble&&(shouldBubble=!1),"function"==typeof CustomEvent?evt=new CustomEvent(evtType,{bubbles:shouldBubble,detail:evtData}):(evt=document.createEvent("CustomEvent")).initCustomEvent(evtType,shouldBubble,!1,evtData),this.root.dispatchEvent(evt)},MDCComponent}()},"../elements/dist/esm/index-7e3a00fd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-snackbar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_snackbar:()=>Snackbar});__webpack_require__("../../node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../elements/dist/esm/index-68c0d1c9.js"),_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../elements/dist/esm/index-7e3a00fd.js"),_component_b6824081_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../elements/dist/esm/component-b6824081.js"),_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../elements/dist/esm/ponyfill-495ec32d.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var cssClasses={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},strings={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},numbers={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},ARIA_LIVE_DELAY_MS=numbers.ARIA_LIVE_DELAY_MS,ARIA_LIVE_LABEL_TEXT_ATTR=strings.ARIA_LIVE_LABEL_TEXT_ATTR;function announce(ariaEl,labelEl){void 0===labelEl&&(labelEl=ariaEl);var priority=ariaEl.getAttribute("aria-live"),labelText=labelEl.textContent.trim();labelText&&priority&&(ariaEl.setAttribute("aria-live","off"),labelEl.textContent="",labelEl.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',labelEl.setAttribute(ARIA_LIVE_LABEL_TEXT_ATTR,labelText),setTimeout((function(){ariaEl.setAttribute("aria-live",priority),labelEl.removeAttribute(ARIA_LIVE_LABEL_TEXT_ATTR),labelEl.textContent=labelText}),ARIA_LIVE_DELAY_MS))}var OPENING=cssClasses.OPENING,OPEN=cssClasses.OPEN,CLOSING=cssClasses.CLOSING,REASON_ACTION=strings.REASON_ACTION,REASON_DISMISS=strings.REASON_DISMISS,MDCSnackbarFoundation=function(_super){function MDCSnackbarFoundation(adapter){var _this=_super.call(this,(0,_component_b6824081_js__WEBPACK_IMPORTED_MODULE_5__.a)((0,_component_b6824081_js__WEBPACK_IMPORTED_MODULE_5__.a)({},MDCSnackbarFoundation.defaultAdapter),adapter))||this;return _this.isOpen_=!1,_this.animationFrame_=0,_this.animationTimer_=0,_this.autoDismissTimer_=0,_this.autoDismissTimeoutMs_=numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,_this.closeOnEscape_=!0,_this}return(0,_component_b6824081_js__WEBPACK_IMPORTED_MODULE_5__._)(MDCSnackbarFoundation,_super),Object.defineProperty(MDCSnackbarFoundation,"cssClasses",{get:function get(){return cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(MDCSnackbarFoundation,"strings",{get:function get(){return strings},enumerable:!0,configurable:!0}),Object.defineProperty(MDCSnackbarFoundation,"numbers",{get:function get(){return numbers},enumerable:!0,configurable:!0}),Object.defineProperty(MDCSnackbarFoundation,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},announce:function announce(){},notifyClosed:function notifyClosed(){},notifyClosing:function notifyClosing(){},notifyOpened:function notifyOpened(){},notifyOpening:function notifyOpening(){},removeClass:function removeClass(){}}},enumerable:!0,configurable:!0}),MDCSnackbarFoundation.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter.removeClass(OPENING),this.adapter.removeClass(OPEN),this.adapter.removeClass(CLOSING)},MDCSnackbarFoundation.prototype.open=function(){var _this=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.removeClass(CLOSING),this.adapter.addClass(OPENING),this.adapter.announce(),this.runNextAnimationFrame_((function(){_this.adapter.addClass(OPEN),_this.animationTimer_=setTimeout((function(){var timeoutMs=_this.getTimeoutMs();_this.handleAnimationTimerEnd_(),_this.adapter.notifyOpened(),timeoutMs!==numbers.INDETERMINATE&&(_this.autoDismissTimer_=setTimeout((function(){_this.close(REASON_DISMISS)}),timeoutMs))}),numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},MDCSnackbarFoundation.prototype.close=function(reason){var _this=this;void 0===reason&&(reason=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter.notifyClosing(reason),this.adapter.addClass(cssClasses.CLOSING),this.adapter.removeClass(cssClasses.OPEN),this.adapter.removeClass(cssClasses.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){_this.handleAnimationTimerEnd_(),_this.adapter.notifyClosed(reason)}),numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},MDCSnackbarFoundation.prototype.isOpen=function(){return this.isOpen_},MDCSnackbarFoundation.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},MDCSnackbarFoundation.prototype.setTimeoutMs=function(timeoutMs){var minValue=numbers.MIN_AUTO_DISMISS_TIMEOUT_MS,maxValue=numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(timeoutMs===numbers.INDETERMINATE||timeoutMs<=maxValue&&timeoutMs>=minValue))throw new Error("\n        timeoutMs must be an integer in the range "+minValue+"–"+maxValue+"\n        (or "+numbers.INDETERMINATE+" to disable), but got '"+timeoutMs+"'");this.autoDismissTimeoutMs_=timeoutMs},MDCSnackbarFoundation.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},MDCSnackbarFoundation.prototype.setCloseOnEscape=function(closeOnEscape){this.closeOnEscape_=closeOnEscape},MDCSnackbarFoundation.prototype.handleKeyDown=function(evt){("Escape"===evt.key||27===evt.keyCode)&&this.getCloseOnEscape()&&this.close(REASON_DISMISS)},MDCSnackbarFoundation.prototype.handleActionButtonClick=function(_evt){this.close(REASON_ACTION)},MDCSnackbarFoundation.prototype.handleActionIconClick=function(_evt){this.close(REASON_DISMISS)},MDCSnackbarFoundation.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},MDCSnackbarFoundation.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(cssClasses.OPENING),this.adapter.removeClass(cssClasses.CLOSING)},MDCSnackbarFoundation.prototype.runNextAnimationFrame_=function(callback){var _this=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){_this.animationFrame_=0,clearTimeout(_this.animationTimer_),_this.animationTimer_=setTimeout(callback,0)}))},MDCSnackbarFoundation}(_component_b6824081_js__WEBPACK_IMPORTED_MODULE_5__.M),SURFACE_SELECTOR=strings.SURFACE_SELECTOR,LABEL_SELECTOR=strings.LABEL_SELECTOR,ACTION_SELECTOR=strings.ACTION_SELECTOR,DISMISS_SELECTOR=strings.DISMISS_SELECTOR,OPENING_EVENT=strings.OPENING_EVENT,OPENED_EVENT=strings.OPENED_EVENT,CLOSING_EVENT=strings.CLOSING_EVENT,CLOSED_EVENT=strings.CLOSED_EVENT,MDCSnackbar=function(_super){function MDCSnackbar(){return null!==_super&&_super.apply(this,arguments)||this}return(0,_component_b6824081_js__WEBPACK_IMPORTED_MODULE_5__._)(MDCSnackbar,_super),MDCSnackbar.attachTo=function(root){return new MDCSnackbar(root)},MDCSnackbar.prototype.initialize=function(announcerFactory){void 0===announcerFactory&&(announcerFactory=function announcerFactory(){return announce}),this.announce_=announcerFactory()},MDCSnackbar.prototype.initialSyncWithDOM=function(){var _this=this;this.surfaceEl_=this.root.querySelector(SURFACE_SELECTOR),this.labelEl_=this.root.querySelector(LABEL_SELECTOR),this.actionEl_=this.root.querySelector(ACTION_SELECTOR),this.handleKeyDown_=function(evt){return _this.foundation.handleKeyDown(evt)},this.handleSurfaceClick_=function(evt){var target=evt.target;_this.isActionButton_(target)?_this.foundation.handleActionButtonClick(evt):_this.isActionIcon_(target)&&_this.foundation.handleActionIconClick(evt)},this.registerKeyDownHandler_(this.handleKeyDown_),this.registerSurfaceClickHandler_(this.handleSurfaceClick_)},MDCSnackbar.prototype.destroy=function(){_super.prototype.destroy.call(this),this.deregisterKeyDownHandler_(this.handleKeyDown_),this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)},MDCSnackbar.prototype.open=function(){this.foundation.open()},MDCSnackbar.prototype.close=function(reason){void 0===reason&&(reason=""),this.foundation.close(reason)},MDCSnackbar.prototype.getDefaultFoundation=function(){var _this=this;return new MDCSnackbarFoundation({addClass:function addClass(className){return _this.root.classList.add(className)},announce:function announce(){return _this.announce_(_this.labelEl_)},notifyClosed:function notifyClosed(reason){return _this.emit(CLOSED_EVENT,reason?{reason}:{})},notifyClosing:function notifyClosing(reason){return _this.emit(CLOSING_EVENT,reason?{reason}:{})},notifyOpened:function notifyOpened(){return _this.emit(OPENED_EVENT,{})},notifyOpening:function notifyOpening(){return _this.emit(OPENING_EVENT,{})},removeClass:function removeClass(className){return _this.root.classList.remove(className)}})},Object.defineProperty(MDCSnackbar.prototype,"timeoutMs",{get:function get(){return this.foundation.getTimeoutMs()},set:function set(timeoutMs){this.foundation.setTimeoutMs(timeoutMs)},enumerable:!0,configurable:!0}),Object.defineProperty(MDCSnackbar.prototype,"closeOnEscape",{get:function get(){return this.foundation.getCloseOnEscape()},set:function set(closeOnEscape){this.foundation.setCloseOnEscape(closeOnEscape)},enumerable:!0,configurable:!0}),Object.defineProperty(MDCSnackbar.prototype,"isOpen",{get:function get(){return this.foundation.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(MDCSnackbar.prototype,"labelText",{get:function get(){return this.labelEl_.textContent},set:function set(labelText){this.labelEl_.textContent=labelText},enumerable:!0,configurable:!0}),Object.defineProperty(MDCSnackbar.prototype,"actionButtonText",{get:function get(){return this.actionEl_.textContent},set:function set(actionButtonText){this.actionEl_.textContent=actionButtonText},enumerable:!0,configurable:!0}),MDCSnackbar.prototype.registerKeyDownHandler_=function(handler){this.listen("keydown",handler)},MDCSnackbar.prototype.deregisterKeyDownHandler_=function(handler){this.unlisten("keydown",handler)},MDCSnackbar.prototype.registerSurfaceClickHandler_=function(handler){this.surfaceEl_.addEventListener("click",handler)},MDCSnackbar.prototype.deregisterSurfaceClickHandler_=function(handler){this.surfaceEl_.removeEventListener("click",handler)},MDCSnackbar.prototype.isActionButton_=function(target){return Boolean((0,_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_7__.c)(target,ACTION_SELECTOR))},MDCSnackbar.prototype.isActionIcon_=function(target){return Boolean((0,_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_7__.c)(target,DISMISS_SELECTOR))},MDCSnackbar}(_component_b6824081_js__WEBPACK_IMPORTED_MODULE_5__.b),Snackbar=function(){function Snackbar(hostRef){var _this2=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Snackbar),(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.r)(this,hostRef),this.actionClick=(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.c)(this,"actionClick",7),this.hideEl=(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.c)(this,"hideEl",7),this.type="info",this.timeout=5e3,this.stayVisibleOnHover=!1,this.setupTimeout=function(){_this2.snackbarInstance.timeoutMs=-1,_this2.timeout>=0&&(_this2.nodeTimeout=setTimeout((function(){return _this2.snackbarInstance.close()}),_this2.timeout))},this.interruptTimeout=function(){_this2.nodeTimeout&&clearTimeout(_this2.nodeTimeout)},this.handleSnackbarHide=function(e){_this2.hideEl.emit(),e.stopPropagation()},this.mapTypeToIconName=function(type){switch(type){case"success":return"snackbar-checkmark";case"error":return"snackbar-error";case"info":default:return"snackbar-information"}}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Snackbar,[{key:"componentDidLoad",value:function componentDidLoad(){this.snackbarInstance=new MDCSnackbar(this.snackbarElement),this.snackbarElement.addEventListener("MDCSnackbar:closing",this.handleSnackbarHide),this.setupTimeout(),this.stayVisibleOnHover&&(this.snackbarElement.addEventListener("mouseenter",this.interruptTimeout),this.snackbarElement.addEventListener("mouseleave",this.setupTimeout)),this.snackbarInstance.open()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;null===(_a=this.snackbarInstance)||void 0===_a||_a.destroy(),this.snackbarElement.removeEventListener("MDCSnackbar:closing",this.handleSnackbarHide),this.snackbarElement.removeEventListener("mouseenter",this.interruptTimeout),this.snackbarElement.removeEventListener("mouseleave",this.setupTimeout)}},{key:"render",value:function render(){var _this3=this,hasActionText=Boolean(this.actionText),hostClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_4__.c)("ino-snackbar--type-"+this.type),snackbarClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_4__.c)("mdc-snackbar","ino-snackbar-layout-container");return(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.H,{class:hostClasses},(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)("div",{ref:function ref(el){return _this3.snackbarElement=el},class:snackbarClasses,"aria-live":"assertive","aria-atomic":"true"},(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)("div",{class:"mdc-snackbar__surface ino-snackbar-container"},(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)("div",{class:"mdc-snackbar__actions ino-snackbar-icon-container"},(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)("ino-icon",{class:"ino-snackbar-icon",icon:this.mapTypeToIconName(this.type)})),(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)("div",{class:"mdc-snackbar__label ino-snackbar-message-container","aria-atomic":"false"},(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)("div",{class:"ino-snackbar-text-container"},this.message),hasActionText&&(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)("div",null,(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)("button",{onClick:this.actionClick.emit,class:"ino-snackbar-action-btn"},this.actionText)))),(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.h)("ino-icon-button",{onClick:this.handleSnackbarHide,icon:"close",class:"ino-snackbar-close-btn","color-scheme":"dark"})))}},{key:"el",get:function get(){return(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_3__.g)(this)}}]),Snackbar}();Snackbar.style=".mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width: 480px), (max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:0.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss:hover::before{opacity:0.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}ino-snackbar{}ino-snackbar .ino-snackbar-layout-container{display:block;top:var(--ino-snackbar-top, 0);bottom:var(--ino-snackbar-bottom, auto);left:var(--ino-snackbar-left, auto);right:var(--ino-snackbar-right, 0)}ino-snackbar.ino-snackbar--type-info{--snackbar-color:#3d40f5;--snackbar-color-light:#efeffe}ino-snackbar.ino-snackbar--type-error{--snackbar-color:#eb003b;--snackbar-color-light:#ffd2dd}ino-snackbar.ino-snackbar--type-success{--snackbar-color:#9ccd00;--snackbar-color-light:#edffb4}ino-snackbar .ino-snackbar-container{margin-top:5px;margin-right:5px;background-color:white;border:0.3px solid var(--snackbar-color);border-radius:15px;box-shadow:0 1px 2px var(--snackbar-color-light);justify-content:space-between;min-width:auto;max-width:350px;padding:16px 45px 16px 25px}ino-snackbar .ino-snackbar-container:hover~.ino-snackbar-close-btn{display:inline-flex}ino-snackbar .ino-snackbar-close-btn{display:none;position:absolute;top:0;right:0;width:22px;height:22px;border-radius:30px;padding:0;background-color:white;box-shadow:0 3px 6px #00000029;pointer-events:auto;--ino-icon-button-icon-color:black !important;--ino-icon-button-size:22px;--ino-icon-button-icon-size:8px}ino-snackbar .ino-snackbar-close-btn:hover{display:inline-flex}ino-snackbar .ino-snackbar-icon-container{background-color:var(--snackbar-color-light);border-radius:50%;justify-content:center;align-items:center;height:30px;width:30px}ino-snackbar .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-color-primary:var(--snackbar-color)}ino-snackbar.ino-snackbar--type-info .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-error .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-success .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar .ino-snackbar-message-container{display:flex;flex-direction:column;column-gap:7px;padding:0 0 0 20px}ino-snackbar .ino-snackbar-message-container .ino-snackbar-text-container{color:#74758b}ino-snackbar .ino-snackbar-message-container .ino-snackbar-action-btn{border:none;background-color:transparent;color:var(--snackbar-color);font-size:12px;font-weight:600;cursor:pointer;padding-left:0;padding-top:5px}"},"../elements/dist/esm/ponyfill-495ec32d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function closest(element,selector){if(element.closest)return element.closest(selector);for(var el=element;el;){if(matches(el,selector))return el;el=el.parentElement}return null}function matches(element,selector){return(element.matches||element.webkitMatchesSelector||element.msMatchesSelector).call(element,selector)}function estimateScrollWidth(element){var htmlEl=element;if(null!==htmlEl.offsetParent)return htmlEl.scrollWidth;var clone=htmlEl.cloneNode(!0);clone.style.setProperty("position","absolute"),clone.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(clone);var scrollWidth=clone.scrollWidth;return document.documentElement.removeChild(clone),scrollWidth}__webpack_require__.d(__webpack_exports__,{c:()=>closest,e:()=>estimateScrollWidth,m:()=>matches})},"../../node_modules/core-js/modules/es.global-this.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../node_modules/core-js/internals/export.js")({global:!0},{globalThis:__webpack_require__("../../node_modules/core-js/internals/global.js")})}}]);
//# sourceMappingURL=1078.1c5ec92a.iframe.bundle.js.map