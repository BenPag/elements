/*! For license information please see 4699.2d9c128e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[4699],{"../elements/dist/esm/_commonjsHelpers-212d567a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-b7e5b0c5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-img.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_img:()=>Image});__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../elements/dist/esm/index-dbb9ab19.js"),_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../elements/dist/esm/index-b7e5b0c5.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Image=function(){function Image(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Image),(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.fallbackIcon="image_not_available",this.imgListItem=!1,this.ratioWidth=1,this.ratioHeight=1,this.composedRatioHeight="100%"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Image,[{key:"heightChanged",value:function heightChanged(){this.computeFixedDimensions()}},{key:"widthChanged",value:function widthChanged(){this.computeFixedDimensions()}},{key:"ratioWidthChanged",value:function ratioWidthChanged(){this.computeRatio()}},{key:"ratioHeightChanged",value:function ratioHeightChanged(){this.computeRatio()}},{key:"componentWillLoad",value:function componentWillLoad(){this.computeRatio(),this.computeFixedDimensions()}},{key:"componentDidLoad",value:function componentDidLoad(){var _this=this;this.imgListItem||(this.el.querySelector("div").style.paddingTop=this.composedRatioHeight),this.imageEl.onerror=function(){return _this.handleError()}}},{key:"computeFixedDimensions",value:function computeFixedDimensions(){isNaN(this.height)||(this.el.style.height=this.height+"px"),isNaN(this.width)||(this.el.style.width=this.width+"px")}},{key:"computeRatio",value:function computeRatio(){var ratio=this.ratioHeight/this.ratioWidth*100;this.composedRatioHeight=ratio+"%"}},{key:"handleError",value:function handleError(){this.imageEl.nextElementSibling.classList.add("ino-img__fallback-icon--visible")}},{key:"render",value:function render(){var _this2=this,hostClasses=(0,_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_2__.c)({"ino-img__rounded":this.rounded,"mdc-image-list__item":this.imgListItem}),divClasses=(0,_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_2__.c)({"ino-img__composer":!this.imgListItem,"mdc-image-list__image-aspect-container":this.imgListItem}),imgClasses=(0,_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_2__.c)({"ino-img__image":!this.imgListItem,"mdc-image-list__image":this.imgListItem});return(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:hostClasses},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:divClasses},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.h)("img",{class:imgClasses,alt:this.alt,decoding:this.decoding,ref:function ref(_ref){return _this2.imageEl=_ref},sizes:this.sizes,src:this.src,srcset:this.srcset,usemap:this.usemap,height:isNaN(this.height)?void 0:this.height,width:isNaN(this.width)?void 0:this.width}),(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"ino-img__fallback-icon"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.h)("ino-icon",{icon:this.fallbackIcon}))),this.imgListItem&&(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"mdc-image-list__supporting"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:"mdc-image-list__label"},this.label)))}},{key:"el",get:function get(){return(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"watchers",get:function get(){return{height:["heightChanged"],width:["widthChanged"],ratioWidth:["ratioWidthChanged"],ratioHeight:["ratioHeightChanged"]}}}]),Image}();Image.style='.mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img:not(.mdc-image-list__item){display:inline-block;overflow:hidden;width:100%}ino-img .ino-img__composer{position:relative;box-sizing:border-box}ino-img .ino-img__image{position:absolute;top:0;left:0}ino-img.ino-img__rounded .ino-img__image{border-radius:50%}ino-img.mdc-image-list__item{display:list-item}ino-img img:before{content:" ";display:block;position:absolute;width:inherit;height:inherit;background-color:#fff}ino-img .ino-img__fallback-icon{display:none;position:absolute;background-color:#e7e7e7;width:100%;height:100%;top:0;left:0}ino-img .ino-img__fallback-icon ino-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:max(20px, 10%);height:max(20px, 10%);--icon-width:100%;--icon-height:100%}ino-img .ino-img__fallback-icon--visible{display:block}'}}]);
//# sourceMappingURL=4699.2d9c128e.iframe.bundle.js.map