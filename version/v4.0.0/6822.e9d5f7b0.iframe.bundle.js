/*! For license information please see 6822.e9d5f7b0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[6822],{12419:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__(4173);var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},61383:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__(18145),__webpack_require__(16781),__webpack_require__(34115),__webpack_require__(634),__webpack_require__(58188),__webpack_require__(20796),__webpack_require__(28673),__webpack_require__(15735),__webpack_require__(6886);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}var classnames=(0,__webpack_require__(12419).c)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=_typeof(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))},16822:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_img:()=>Image});__webpack_require__(95094);var _index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(79470),_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(12419),__webpack_require__(61383)),Image=function(){function i(i){(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,i),this.fallbackIcon="image_not_available",this.imgListItem=!1,this.ratioWidth=1,this.ratioHeight=1,this.composedRatioHeight="100%"}return i.prototype.heightChanged=function(){this.computeFixedDimensions()},i.prototype.widthChanged=function(){this.computeFixedDimensions()},i.prototype.ratioWidthChanged=function(){this.computeRatio()},i.prototype.ratioHeightChanged=function(){this.computeRatio()},i.prototype.componentWillLoad=function(){this.computeRatio(),this.computeFixedDimensions()},i.prototype.componentDidLoad=function(){var i=this;this.imgListItem||(this.el.querySelector("div").style.paddingTop=this.composedRatioHeight),this.imageEl.onerror=function(){return i.handleError()}},i.prototype.computeFixedDimensions=function(){isNaN(this.height)||(this.el.style.height=this.height+"px"),isNaN(this.width)||(this.el.style.width=this.width+"px")},i.prototype.computeRatio=function(){var i=this.ratioHeight/this.ratioWidth*100;this.composedRatioHeight=i+"%"},i.prototype.handleError=function(){this.imageEl.nextElementSibling.classList.add("ino-img__fallback-icon--visible")},i.prototype.render=function(){var i=this,t=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__.c)({"ino-img__rounded":this.rounded,"mdc-image-list__item":this.imgListItem}),e=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__.c)({"ino-img__composer":!this.imgListItem,"mdc-image-list__image-aspect-container":this.imgListItem}),o=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__.c)({"ino-img__image":!this.imgListItem,"mdc-image-list__image":this.imgListItem});return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:t},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:e},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("img",{class:o,alt:this.alt,decoding:this.decoding,ref:function ref(t){return i.imageEl=t},sizes:this.sizes,src:this.src,srcset:this.srcset,usemap:this.usemap,height:isNaN(this.height)?void 0:this.height,width:isNaN(this.width)?void 0:this.width}),(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"ino-img__fallback-icon"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("ino-icon",{icon:this.fallbackIcon}))),this.imgListItem&&(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"mdc-image-list__supporting"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:"mdc-image-list__label"},this.label)))},Object.defineProperty(i.prototype,"el",{get:function get(){return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(i,"watchers",{get:function get(){return{height:["heightChanged"],width:["widthChanged"],ratioWidth:["ratioWidthChanged"],ratioHeight:["ratioHeightChanged"]}},enumerable:!1,configurable:!0}),i}();Image.style='.mdc-image-list{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Lato, Verdana, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Lato, Verdana, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{-webkit-column-break-inside:avoid;-moz-column-break-inside:avoid;break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img:not(.mdc-image-list__item){display:inline-block;overflow:hidden;width:100%}ino-img .ino-img__composer{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}ino-img .ino-img__image{position:absolute;top:0;left:0}ino-img.ino-img__rounded .ino-img__image{border-radius:50%}ino-img.mdc-image-list__item{display:list-item}ino-img img:before{content:" ";display:block;position:absolute;width:inherit;height:inherit;background-color:#fff}ino-img .ino-img__fallback-icon{display:none;position:absolute;background-color:#e7e7e7;width:100%;height:100%;top:0;left:0}ino-img .ino-img__fallback-icon ino-icon{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:max(20px, 10%);height:max(20px, 10%);--icon-width:100%;--icon-height:100%}ino-img .ino-img__fallback-icon--visible{display:block}'},4173:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({global:!0},{globalThis:__webpack_require__(9859)})}}]);
//# sourceMappingURL=6822.e9d5f7b0.iframe.bundle.js.map