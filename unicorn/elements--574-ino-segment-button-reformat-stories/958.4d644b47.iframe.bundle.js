/*! For license information please see 958.4d644b47.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[958],{"../elements/dist/esm/_commonjsHelpers-6ccee0aa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-7e3a00fd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-img-list.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_img_list:()=>InoImgList,__namedExportsOrder:()=>__namedExportsOrder});__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_5082bac1_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../elements/dist/esm/index-5082bac1.js"),_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../elements/dist/esm/index-7e3a00fd.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var InoImgList=function(){function InoImgList(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,InoImgList),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_3__.r)(this,hostRef),this.masonry=!1,this.encloseLabel=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(InoImgList,[{key:"componentDidLoad",value:function componentDidLoad(){this.masonry&&this.el.querySelectorAll(".mdc-image-list__image-aspect-container").forEach((function(img){img.classList.remove("mdc-image-list__image-aspect-container")}))}},{key:"render",value:function render(){var classes=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_4__.c)({"mdc-image-list":!0,"mdc-image-list--masonry":this.masonry,"mdc-image-list--with-text-protection":this.encloseLabel});return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_3__.H,null,(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_3__.h)("ul",{class:classes},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot",null)))}},{key:"el",get:function get(){return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_3__.g)(this)}}]),InoImgList}();InoImgList.style=".mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img-list{--img-list-cols:var(--ino-img-list-cols, 3)}ino-img-list ul:not(.mdc-image-list--masonry) .mdc-image-list__item{width:calc(100% / var(--img-list-cols) - (4px + 1px / var(--img-list-cols)));margin:2px}ino-img-list ul.mdc-image-list--masonry{column-count:var(--img-list-cols);column-gap:16px}ino-img-list ul.mdc-image-list--masonry .mdc-image-list__item{margin-bottom:16px}";var __namedExportsOrder=["ino_img_list"]}}]);
//# sourceMappingURL=958.4d644b47.iframe.bundle.js.map