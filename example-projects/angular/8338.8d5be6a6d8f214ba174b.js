(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[8338,3137,4670,3207,7491,2813,5210,7584,2518],{4681:(e,r,o)=>{"use strict";o.d(r,{a:()=>n,c:()=>i,g:()=>t});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,r,o){return e(o={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}},3137:(e,r,o)=>{"use strict";o.d(r,{c:()=>n});var n=(0,o(4681).c)(function(e){!function(){var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)&&t.length){var a=o.apply(null,t);a&&e.push(a)}else if("object"===i)for(var l in t)r.call(t,l)&&t[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o}()})},8338:(e,r,o)=>{"use strict";o.r(r),o.d(r,{ino_radio_group:()=>a});var n=o(8533),t=o(3712),i=o(3137);o(4681);let a=class{constructor(e){(0,t.r)(this,e),this.valueChange=(0,t.e)(this,"valueChange",7),this.alignment="horizontal"}valueChanged(e){this.updateRadios(e)}componentDidLoad(){var e=this;return(0,n.Z)(function*(){e.updateRadios(e.value),(yield e.getRadios()).forEach(r=>{r.addEventListener("mouseover",()=>e.addHoverAnimation(r)),r.addEventListener("mouseout",()=>e.removeHoverAnimation())})})()}disconnectedCallback(){var e=this;return(0,n.Z)(function*(){(yield e.getRadios()).forEach(r=>{r.removeEventListener("mouseover",()=>e.addHoverAnimation(r)),r.removeEventListener("mouseout",()=>e.removeHoverAnimation())})})()}handleKeyDown(e){var r=this;return(0,n.Z)(function*(){var o,n;if(!e.key.startsWith("Arrow"))return;e.preventDefault();const t=yield r.getRadios(),i=t.find(e=>Boolean(e.checked));if(!i)return void r.valueChange.emit(t[0].value);let a;switch(e.key){case"ArrowDown":case"ArrowRight":a=null!==(o=i.nextElementSibling)&&void 0!==o?o:t[0];break;case"ArrowUp":case"ArrowLeft":a=null!==(n=i.previousElementSibling)&&void 0!==n?n:t[t.length-1]}r.valueChange.emit(a.value)})()}addHoverAnimation(e){var r=this;return(0,n.Z)(function*(){const o=(yield r.getRadios()).find(e=>Boolean(e.checked));o&&e!==o&&o.classList.add("ino-checked-hover")})()}removeHoverAnimation(){var e=this;return(0,n.Z)(function*(){const r=(yield e.getRadios()).find(e=>e.classList.contains("ino-checked-hover"));r&&r.classList.remove("ino-checked-hover")})()}updateRadios(e){var r=this;return(0,n.Z)(function*(){const o=yield r.getRadios();let n=!1;for(const r of o)r.checked&&r.classList.remove("ino-checked-hover"),n||r.value!==e?r.checked=!1:(n=!0,r.checked=!0);n||console.warn(`No ino-radio button with value=${e} was found.`)})()}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}render(){const e=(0,i.c)({"ino-radio-group-wrapper":!0,"ino-radio-group-wrapper--vertical":"vertical"===this.alignment,"ino-radio-group-wrapper--horizontal":"horizontal"===this.alignment});return(0,t.h)(t.f,null,(0,t.h)("div",{class:e,tabIndex:0},(0,t.h)("slot",null)))}get el(){return(0,t.g)(this)}static get watchers(){return{value:["valueChanged"]}}};a.style="ino-radio-group .ino-radio-group-wrapper{width:fit-content;display:flex}ino-radio-group .ino-radio-group-wrapper--vertical{flex-direction:column}ino-radio-group .ino-radio-group-wrapper--horizontal{flex-direction:row}ino-radio-group ino-radio:last-child{margin-right:8px}"}}]);