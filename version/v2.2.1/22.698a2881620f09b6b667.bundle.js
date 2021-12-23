/*! For license information please see 22.698a2881620f09b6b667.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1388:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ino_carousel",(function(){return InoCarousel}));var _index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_index_306dbf37_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(1431),__webpack_require__(1432)),InoCarousel=function(){function e(e){var i=this;Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.j)(this,e),this.currentSlide=0,this.slideCounter=1,this.inoAutoplay=!1,this.inoAnimated=!1,this.inoHideButtons=!1,this.inoInfinite=!1,this.inoIntermission=5e3,this.inoReverse=!1,this.addAnimationToSlide=function(e){i.inoAnimated&&(e.classList.contains("ino-carousel--animated")||e.classList.add("ino-carousel--animated"))},this.configureSlides=function(){i.slides.length<1||i.selectSlide(i.value)||i.slides[i.currentSlide].classList.add("ino-carousel-slide--selected")},this.configureAutoplay=function(){i.slides.length<1||(i.inoAutoplay?i.timer=setInterval(i.nextSlide,i.inoIntermission):clearInterval(i.timer))},this.nextSlide=function(){if(i.slides.length<1)throw new Error("There are no slides to display");i.slides[i.currentSlide].classList.remove("ino-carousel-slide--selected"),i.addAnimationToSlide(i.slides[i.currentSlide]),i.currentSlide=i.getNextSlide(),i.addAnimationToSlide(i.slides[i.currentSlide]),i.slides[i.currentSlide].classList.add("ino-carousel-slide--selected"),i.slideCounter++,!i.inoInfinite&&i.slideCounter>=i.slides.length&&(i.slideCounter=1,clearInterval(i.timer))},this.mod=function(e,i){return(e%i+i)%i},this.getNextSlide=function(){return i.inoReverse?i.mod(i.currentSlide-1,i.slides.length):i.mod(i.currentSlide+1,i.slides.length)}}return e.prototype.valueChanged=function(e){this.addAnimationToSlide(this.slides[this.currentSlide]),this.selectSlide(e),this.addAnimationToSlide(this.slides[this.currentSlide])},e.prototype.inoAutoplayChanged=function(){this.configureAutoplay()},e.prototype.componentDidLoad=function(){this.slides=this.getSlides(),this.configureSlides(),this.configureAutoplay()},e.prototype.selectSlide=function(e){var i=this,o=!1;return this.slides.forEach((function(t){e===t.value?(t.classList.add("ino-carousel-slide--selected"),i.currentSlide=i.slides.indexOf(t),o=!0):t.classList.remove("ino-carousel-slide--selected")})),o},e.prototype.getSlides=function(){return Array.from(this.el.querySelectorAll("ino-carousel-slide"))},e.prototype.render=function(){var e=Object(_index_306dbf37_js__WEBPACK_IMPORTED_MODULE_2__.a)({"ino-carousel":!0,"ino-carousel--no-buttons":this.inoHideButtons});return Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.b,{value:this.value},Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:e},Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-carousel__container"},Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-carousel__left-arrow"},Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ino-icon-button",{"ino-icon":"arrow_left"})),Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-carousel__right-arrow"},Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ino-icon-button",{"ino-icon":"arrow_right"}))))},Object.defineProperty(e.prototype,"el",{get:function get(){return Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function get(){return{value:["valueChanged"],inoAutoplay:["inoAutoplayChanged"]}},enumerable:!1,configurable:!0}),e}();InoCarousel.style="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-width:var(--ino-carousel-width, 700px);--carousel-height:var(--ino-carousel-height, 400px);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms)}ino-carousel .ino-carousel{position:relative;height:var(--carousel-height);width:var(--carousel-width);overflow:hidden}ino-carousel .ino-carousel__left-arrow,ino-carousel .ino-carousel__right-arrow{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;bottom:0;-ms-flex-direction:column;flex-direction:column;height:100%}ino-carousel .ino-carousel__left-arrow ino-icon,ino-carousel .ino-carousel__right-arrow ino-icon{--icon-color:var(--carousel-icon-color)}ino-carousel .ino-carousel--no-buttons .ino-carousel__left-arrow,ino-carousel .ino-carousel--no-buttons .ino-carousel__right-arrow{display:none}ino-carousel .ino-carousel__right-arrow{right:16px}ino-carousel .ino-carousel__left-arrow{left:16px}ino-carousel .ino-carousel__container{height:100%}ino-carousel .ino-carousel--animated.ino-carousel-slide--selected{-webkit-animation:fadeIn var(--carousel-animation-duration);animation:fadeIn var(--carousel-animation-duration)}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}ino-carousel .ino-carousel--animated:not(.ino-carousel-slide--selected){-webkit-animation:fadeOut var(--carousel-animation-duration);animation:fadeOut var(--carousel-animation-duration)}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}"},1431:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){__webpack_require__.d(__webpack_exports__,"a",(function(){return commonjsGlobal})),__webpack_require__.d(__webpack_exports__,"b",(function(){return createCommonjsModule}));var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}}).call(this,__webpack_require__(56))},1432:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));var _commonjsHelpers_7b8ed50b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1431);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}var classnames=Object(_commonjsHelpers_7b8ed50b_js__WEBPACK_IMPORTED_MODULE_0__.b)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=_typeof(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))}}]);
//# sourceMappingURL=22.698a2881620f09b6b667.bundle.js.map