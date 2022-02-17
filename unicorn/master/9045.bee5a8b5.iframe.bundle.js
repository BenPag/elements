/*! For license information please see 9045.bee5a8b5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[9045],{"../elements/dist/esm/_commonjsHelpers-6ccee0aa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/component-utils-f155794d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>generateUniqueId,f:()=>focusIfExists,g:()=>getSlotContent,h:()=>hasSlotContent,m:()=>moveCursorToEnd});__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js");function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}function getSlotContent(el,slotName){return el.querySelector('[slot="'+slotName+'"]')}function hasSlotContent(el,slotName){return el.querySelectorAll('[slot="'+slotName+'"]').length>0}function focusIfExists(el){var _a;null===(_a=el.querySelector("[data-ino-focus]"))||void 0===_a||_a.focus()}function moveCursorToEnd(el){var len=el.value.length;el.setSelectionRange&&(el.focus(),el.setSelectionRange(len,len))}},"../elements/dist/esm/index-7e3a00fd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-fab-set.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_fab_set:()=>Fab});__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../elements/dist/esm/index-68c0d1c9.js"),_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../elements/dist/esm/index-7e3a00fd.js"),_component_utils_f155794d_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../elements/dist/esm/component-utils-f155794d.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Fab=function(){function Fab(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Fab),(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.dialDirection="top",this.topBottomLocation="bottom",this.leftRightLocation="left",this.openDial=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Fab,[{key:"render",value:function render(){var hostClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_2__.c)({"ino-fab-set--open-dial":this.openDial},"ino-top-bottom-location-"+this.topBottomLocation,"ino-left-right-location-"+this.leftRightLocation),speedDialClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_2__.c)({"ino-speed-dial":!0}),directionClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_2__.c)("ino-fab-set-wrapper","ino-direction-"+this.dialDirection),hasClosedIcon=(0,_component_utils_f155794d_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.el,"icon-closed"),hasOpenedIcon=(0,_component_utils_f155794d_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.el,"icon-opened");return(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:hostClasses},(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:directionClasses},(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:speedDialClasses},(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null)),(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.h)("ino-fab",{id:"primary-fab",class:"ino-fab-set-button","edge-position":"none","tooltip-placement":"none"},hasClosedIcon?(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{slot:"icon-leading",name:"icon-closed"}):(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.h)("ino-icon",{class:"ino-fab-set-icon ino-fab-set-icon--closed",slot:"icon-leading",icon:"_fab_set_arrow_up"}),hasOpenedIcon?(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{slot:"icon-leading",name:"icon-opened"}):(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.h)("ino-icon",{class:"ino-fab-set-icon ino-fab-set-icon--opened",slot:"icon-leading",icon:"_fab_set_arrow_down"}))))}},{key:"el",get:function get(){return(0,_index_68c0d1c9_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}]),Fab}();Fab.style=":host{position:fixed;display:flex;width:auto}:host .ino-fab-set-wrapper{display:flex}:host .ino-fab-set-wrapper ::slotted(*){padding:5px}:host .ino-fab-set-wrapper ::slotted(*) .mdc-fab .mdc-fab__icon{font-size:25px}:host .ino-fab-set-wrapper .ino-speed-dial{display:none;align-items:center}:host .ino-fab-set-wrapper .ino-fab-set-button{padding:5px;align-self:center}:host .ino-fab-set-wrapper ::slotted([slot=icon-opened]),:host .ino-fab-set-wrapper .ino-fab-set-icon--opened{display:none}:host .ino-fab-set-wrapper ::slotted([slot=icon-closed]),:host .ino-fab-set-wrapper .ino-fab-set-icon--closed{display:block}:host(.ino-fab-set--open-dial) .ino-speed-dial{display:flex}:host(.ino-fab-set--open-dial) ino-fab{transition-duration:100ms}:host(.ino-top-bottom-location-top){top:20px}:host(.ino-top-bottom-location-bottom){bottom:20px}:host(.ino-left-right-location-left){left:20px}:host(.ino-left-right-location-right){right:20px}:host .ino-direction-top.ino-fab-set-wrapper{flex-direction:column}:host .ino-direction-top.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-bottom .ino-fab-set-icon{transform:rotate(180deg)}:host .ino-direction-bottom.ino-fab-set-wrapper{flex-direction:column-reverse}:host .ino-direction-bottom.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-left .ino-fab-set-icon{transform:rotate(270deg)}:host .ino-direction-left.ino-fab-set-wrapper{flex-direction:row}:host .ino-direction-left.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-right .ino-fab-set-icon{transform:rotate(90deg)}:host .ino-direction-right.ino-fab-set-wrapper{flex-direction:row-reverse}:host .ino-direction-right.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}"},"../../node_modules/core-js/modules/es.global-this.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../node_modules/core-js/internals/export.js")({global:!0},{globalThis:__webpack_require__("../../node_modules/core-js/internals/global.js")})}}]);
//# sourceMappingURL=9045.bee5a8b5.iframe.bundle.js.map