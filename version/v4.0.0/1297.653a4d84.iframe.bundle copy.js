/*! For license information please see 1297.653a4d84.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[1297],{12419:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__(4173);var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},61383:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__(18145),__webpack_require__(16781),__webpack_require__(34115),__webpack_require__(634),__webpack_require__(58188),__webpack_require__(20796),__webpack_require__(28673),__webpack_require__(15735),__webpack_require__(6886);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}var classnames=(0,__webpack_require__(12419).c)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=_typeof(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))},11297:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_fab_set:()=>Fab});__webpack_require__(95094);var _index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(79470),_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(12419),__webpack_require__(61383)),Fab=function(){function o(o){(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,o),this.dialDirection="top",this.topBottomLocation="bottom",this.leftRightLocation="left",this.openDial=!1}return o.prototype.render=function(){var o=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__.c)({"ino-fab-set--open-dial":this.openDial},"ino-top-bottom-location-"+this.topBottomLocation,"ino-left-right-location-"+this.leftRightLocation),t=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__.c)({"ino-speed-dial":!0}),e=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__.c)("ino-fab-set-wrapper","ino-direction-"+this.dialDirection);return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:o},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:e},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:t},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null)),(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("ino-fab",{id:"primary-fab","edge-position":"none","tooltip-placement":"none"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("ino-icon",{slot:"icon-leading",icon:"_fab_set_arrow_up"}))))},Object.defineProperty(o.prototype,"el",{get:function get(){return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)},enumerable:!1,configurable:!0}),o}();Fab.style=":host{position:fixed;display:-ms-flexbox;display:flex;width:auto}:host .ino-fab-set-wrapper{display:-ms-flexbox;display:flex}:host .ino-fab-set-wrapper ::slotted(*){padding:5px}:host .ino-fab-set-wrapper ::slotted(*) .mdc-fab .mdc-fab__icon{font-size:25px}:host .ino-fab-set-wrapper .ino-speed-dial{display:none;-ms-flex-align:center;align-items:center}:host(.ino-fab-set--open-dial) .ino-speed-dial{display:-ms-flexbox;display:flex}:host(.ino-fab-set--open-dial) ino-fab{-webkit-transition-duration:100ms;transition-duration:100ms}:host(.ino-top-bottom-location-top){top:20px}:host(.ino-top-bottom-location-bottom){bottom:20px}:host(.ino-left-right-location-left){left:20px}:host(.ino-left-right-location-right){right:20px}:host .ino-direction-top.ino-fab-set-wrapper{-ms-flex-direction:column;flex-direction:column}:host .ino-direction-top.ino-fab-set-wrapper .ino-speed-dial{-ms-flex-direction:column;flex-direction:column}:host .ino-direction-top ino-fab{-webkit-transform:rotate(0deg);transform:rotate(0deg)}:host(.ino-fab-set--open-dial) .ino-direction-top ino-fab{-webkit-transform:scaleY(-1);transform:scaleY(-1)}:host .ino-direction-bottom.ino-fab-set-wrapper{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host .ino-direction-bottom.ino-fab-set-wrapper .ino-speed-dial{-ms-flex-direction:column;flex-direction:column}:host .ino-direction-bottom ino-fab{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.ino-fab-set--open-dial) .ino-direction-bottom ino-fab{-webkit-transform:scaleY(1);transform:scaleY(1)}:host .ino-direction-left.ino-fab-set-wrapper{-ms-flex-direction:row;flex-direction:row}:host .ino-direction-left.ino-fab-set-wrapper .ino-speed-dial{-ms-flex-direction:row;flex-direction:row}:host .ino-direction-left ino-fab{-webkit-transform:rotate(270deg);transform:rotate(270deg)}:host(.ino-fab-set--open-dial) .ino-direction-left ino-fab{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host .ino-direction-right.ino-fab-set-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host .ino-direction-right.ino-fab-set-wrapper .ino-speed-dial{-ms-flex-direction:row;flex-direction:row}:host .ino-direction-right ino-fab{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.ino-fab-set--open-dial) .ino-direction-right ino-fab{-webkit-transform:rotate(270deg);transform:rotate(270deg)}"},4173:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({global:!0},{globalThis:__webpack_require__(9859)})}}]);
//# sourceMappingURL=1297.653a4d84.iframe.bundle.js.map