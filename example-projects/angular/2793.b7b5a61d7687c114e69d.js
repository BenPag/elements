(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[2793,3137,4670,3207,7491,2813,5210,7584,2518],{4681:(e,i,t)=>{"use strict";t.d(i,{a:()=>s,c:()=>n,g:()=>o});var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,i,t){return e(t={path:i,exports:{},require:function(e,i){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}},3137:(e,i,t)=>{"use strict";t.d(i,{c:()=>s});var s=(0,t(4681).c)(function(e){!function(){var i={}.hasOwnProperty;function t(){for(var e=[],s=0;s<arguments.length;s++){var o=arguments[s];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var r=t.apply(null,o);r&&e.push(r)}else if("object"===n)for(var l in o)i.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t}()})},2793:(e,i,t)=>{"use strict";t.r(i),t.d(i,{ino_carousel:()=>r});var s,o=t(3712),n=t(3137);t(4681),function(e){e[e.LEFT=0]="LEFT",e[e.RIGHT=1]="RIGHT"}(s||(s={}));let r=class{constructor(e){(0,o.r)(this,e),this.valueChange=(0,o.e)(this,"valueChange",7),this.currentSlide=0,this.slideCounter=1,this.autoplay=!1,this.animated=!1,this.hideButtons=!1,this.infinite=!1,this.intermission=5e3,this.reverse=!1,this.addAnimationToSlide=e=>{this.animated&&(e.classList.contains("ino-carousel--animated")||e.classList.add("ino-carousel--animated"))},this.configureSlides=()=>{this.slides.length<1||this.selectSlide(this.value)||this.slides[this.currentSlide].classList.add("ino-carousel-slide--selected")},this.configureAutoplay=()=>{this.slides.length<1||(this.autoplay?this.timer=setInterval(this.nextSlide,this.intermission):clearInterval(this.timer))},this.nextSlide=()=>{if(this.slides.length<1)throw new Error("There are no slides to display");this.slides[this.currentSlide].classList.remove("ino-carousel-slide--selected"),this.addAnimationToSlide(this.slides[this.currentSlide]),this.currentSlide=this.getNextSlide(),this.addAnimationToSlide(this.slides[this.currentSlide]),this.slides[this.currentSlide].classList.add("ino-carousel-slide--selected"),this.slideCounter++,!this.infinite&&this.slideCounter>=this.slides.length&&(this.slideCounter=1,clearInterval(this.timer))},this.mod=(e,i)=>(e%i+i)%i,this.getNextSlide=()=>this.mod(this.reverse?this.currentSlide-1:this.currentSlide+1,this.slides.length)}valueChanged(e){this.addAnimationToSlide(this.slides[this.currentSlide]),this.selectSlide(e),this.addAnimationToSlide(this.slides[this.currentSlide])}autoplayChanged(){this.configureAutoplay()}componentDidLoad(){this.slides=this.getSlides(),this.configureSlides(),this.configureAutoplay()}selectSlide(e){let i=!1;return this.slides.forEach(t=>{e===t.value?(t.classList.add("ino-carousel-slide--selected"),this.currentSlide=this.slides.indexOf(t),i=!0):t.classList.remove("ino-carousel-slide--selected")}),i}emitSlideChange(e){var i,t;const o=this.getSlides();if(!o||0===o.length)return;const n=this.getSlides()[this.currentSlide];if(!n)return void this.valueChange.emit(o[0].value);let r;switch(e){case s.RIGHT:r=null!==(i=n.nextElementSibling)&&void 0!==i?i:o[0];break;case s.LEFT:r=null!==(t=n.previousElementSibling)&&void 0!==t?t:o[o.length-1]}this.valueChange.emit(r.value)}getSlides(){return Array.from(this.el.querySelectorAll("ino-carousel-slide"))}render(){const e=(0,n.c)({"ino-carousel":!0,"ino-carousel--no-buttons":this.hideButtons});return(0,o.h)(o.f,{value:this.value},(0,o.h)("div",{class:e},(0,o.h)("div",{class:"ino-carousel__container"},(0,o.h)("slot",null)),(0,o.h)("div",{class:"ino-carousel__left-arrow"},(0,o.h)("ino-icon-button",{icon:"arrow_left",onClick:()=>this.emitSlideChange(s.LEFT)})),(0,o.h)("div",{class:"ino-carousel__right-arrow"},(0,o.h)("ino-icon-button",{icon:"arrow_right",onClick:()=>this.emitSlideChange(s.RIGHT)}))))}get el(){return(0,o.g)(this)}static get watchers(){return{value:["valueChanged"],autoplay:["autoplayChanged"]}}};r.style="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-width:var(--ino-carousel-width, 700px);--carousel-height:var(--ino-carousel-height, 400px);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms)}ino-carousel .ino-carousel{position:relative;height:var(--carousel-height);width:var(--carousel-width);overflow:hidden}ino-carousel .ino-carousel__left-arrow,ino-carousel .ino-carousel__right-arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}ino-carousel .ino-carousel__left-arrow ino-icon,ino-carousel .ino-carousel__right-arrow ino-icon{--icon-color:var(--carousel-icon-color)}ino-carousel .ino-carousel--no-buttons .ino-carousel__left-arrow,ino-carousel .ino-carousel--no-buttons .ino-carousel__right-arrow{display:none}ino-carousel .ino-carousel__right-arrow{right:16px}ino-carousel .ino-carousel__left-arrow{left:16px}ino-carousel .ino-carousel__container{height:100%}ino-carousel .ino-carousel--animated.ino-carousel-slide--selected{animation:fadeIn var(--carousel-animation-duration)}@keyframes fadeIn{from{opacity:0}to{opacity:1}}ino-carousel .ino-carousel--animated:not(.ino-carousel-slide--selected){animation:fadeOut var(--carousel-animation-duration)}@keyframes fadeOut{from{opacity:1}to{opacity:0}}"}}]);