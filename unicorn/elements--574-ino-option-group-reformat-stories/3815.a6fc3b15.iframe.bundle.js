/*! For license information please see 3815.a6fc3b15.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[3815],{"../elements/dist/esm/_commonjsHelpers-6ccee0aa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-7e3a00fd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-icon-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_icon_button:()=>IconButton});__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_5082bac1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../elements/dist/esm/index-5082bac1.js"),_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../elements/dist/esm/index-7e3a00fd.js"),_component_780a5882_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../elements/dist/esm/component-780a5882.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js"),__webpack_require__("../elements/dist/esm/component-97c8fef9.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var IconButton=function(){function IconButton(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,IconButton),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.clickEl=(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"clickEl",7),this.colorScheme="primary",this.type="button"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(IconButton,[{key:"activatedChanged",value:function activatedChanged(activated){activated?this.maybeCreateRipple():this.maybeDestroyRipple()}},{key:"clickHandler",value:function clickHandler(e){this.disabled?(e.preventDefault(),e.stopPropagation()):this.clickEl.emit()}},{key:"componentDidLoad",value:function componentDidLoad(){this.maybeCreateRipple()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.maybeDestroyRipple()}},{key:"maybeCreateRipple",value:function maybeCreateRipple(){this.activated||(this.mdcInstance=new _component_780a5882_js__WEBPACK_IMPORTED_MODULE_3__.M(this.el.querySelector(".mdc-icon-button")),this.mdcInstance.unbounded=!0)}},{key:"maybeDestroyRipple",value:function maybeDestroyRipple(){var _a;null===(_a=this.mdcInstance)||void 0===_a||_a.destroy()}},{key:"render",value:function render(){var hostClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_2__.c)("ino-icon-button--color-scheme-"+this.colorScheme,{"ino-icon-button--filled":this.filled}),iconButtonClasses=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_2__.c)({"mdc-icon-button":!0,"mdc-ripple-upgraded--background-focused":this.activated});return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:hostClasses},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_1__.h)("button",{autoFocus:this.autoFocus,class:iconButtonClasses,disabled:this.disabled,type:this.type},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"mdc-icon-button__ripple"}),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_1__.h)("ino-icon",{icon:this.icon,class:"mdc-icon-button__icon"})))}},{key:"el",get:function get(){return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"watchers",get:function get(){return{activated:["activatedChanged"]}}}]),IconButton}();IconButton.style='.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size{width:40px;height:40px;padding:8px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button .mdc-icon-button__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-icon-button .mdc-icon-button__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded .mdc-icon-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation .mdc-icon-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation .mdc-icon-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before,.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-icon-button:hover .mdc-icon-button__ripple::before,.mdc-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button .mdc-icon-button__ripple{pointer-events:none;z-index:1}ino-icon-button{}ino-icon-button ino-icon{--icon-color:var(--ino-icon-button-icon-color, #777777);--ino-icon-height:var(--ino-icon-button-icon-size, 24px);--ino-icon-width:var(--ino-icon-button-icon-size, 24px)}ino-icon-button .mdc-icon-button{width:var(--ino-icon-button-size, 48px);height:var(--ino-icon-button-size, 48px);padding:calc((var(--ino-icon-button-size, 48px) - var(--ino-icon-button-icon-size, 24px)) / 2);font-size:var(--ino-icon-button-icon-size, 24px);background-color:var(--ino-icon-button-background-color, transparent);border-radius:50%}ino-icon-button .mdc-icon-button .mdc-icon-button__ripple::before,ino-icon-button .mdc-icon-button .mdc-icon-button__ripple::after{background-color:var(--ino-icon-button-background-active-color, #777777)}ino-icon-button .mdc-icon-button.mdc-ripple-upgraded--background-focused ino-icon,ino-icon-button .mdc-icon-button:focus ino-icon{--icon-color:var(--ino-icon-button-icon-active-color, #777777)}ino-icon-button.ino-icon-button--color-scheme-primary{--ino-icon-button-icon-color:#3d40f5;--ino-icon-button-icon-active-color:#3d40f5;--ino-icon-button-background-active-color:#3d40f5}ino-icon-button.ino-icon-button--color-scheme-primary.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#3d40f5;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-secondary{--ino-icon-button-icon-color:#9ccd00;--ino-icon-button-icon-active-color:#9ccd00;--ino-icon-button-background-active-color:#9ccd00}ino-icon-button.ino-icon-button--color-scheme-secondary.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#9ccd00;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-success{--ino-icon-button-icon-color:#9ccd00;--ino-icon-button-icon-active-color:#9ccd00;--ino-icon-button-background-active-color:#9ccd00}ino-icon-button.ino-icon-button--color-scheme-success.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#9ccd00;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-warning{--ino-icon-button-icon-color:#ffde03;--ino-icon-button-icon-active-color:#ffde03;--ino-icon-button-background-active-color:#ffde03}ino-icon-button.ino-icon-button--color-scheme-warning.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#ffde03;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-error{--ino-icon-button-icon-color:#eb003b;--ino-icon-button-icon-active-color:#eb003b;--ino-icon-button-background-active-color:#eb003b}ino-icon-button.ino-icon-button--color-scheme-error.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#eb003b;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-light{--ino-icon-button-icon-color:#c1c1c1;--ino-icon-button-icon-active-color:#c1c1c1;--ino-icon-button-background-active-color:#c1c1c1}ino-icon-button.ino-icon-button--color-scheme-light.ino-icon-button--filled{--ino-icon-button-icon-color:#000;--ino-icon-button-icon-active-color:#000;--ino-icon-button-background-color:#c1c1c1;--ino-icon-button-background-active-color:#000}ino-icon-button.ino-icon-button--color-scheme-dark{--ino-icon-button-icon-color:#777777;--ino-icon-button-icon-active-color:#777777;--ino-icon-button-background-active-color:#777777}ino-icon-button.ino-icon-button--color-scheme-dark.ino-icon-button--filled{--ino-icon-button-icon-color:#ffffff;--ino-icon-button-icon-active-color:#ffffff;--ino-icon-button-background-color:#777777;--ino-icon-button-background-active-color:#ffffff}ino-icon-button button:disabled ino-icon{--icon-color:#9d9d9d}'},"../../node_modules/core-js/modules/es.global-this.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../node_modules/core-js/internals/export.js")({global:!0},{globalThis:__webpack_require__("../../node_modules/core-js/internals/global.js")})}}]);
//# sourceMappingURL=3815.a6fc3b15.iframe.bundle.js.map