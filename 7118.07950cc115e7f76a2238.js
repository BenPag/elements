(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[7118],{5897:(e,t,n)=>{"use strict";n.d(t,{a:()=>o,c:()=>i,g:()=>r});var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},4898:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});var o=(0,n(5897).c)(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===i)for(var l in r)t.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})},7118:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ino_icon:()=>g});var o=n(648),r=n(4898);n(5897);class i{static setSvgTitle(e,t){const n=this.parser.parseFromString(e,"image/svg+xml"),o=n.querySelector("title");return o&&(o.innerHTML=t),this.serializer.serializeToString(n)}static removeSvgTitle(e){const t=this.parser.parseFromString(e,"image/svg+xml"),n=t.querySelector("title");return n&&n.remove(),this.serializer.serializeToString(t)}}let s;i.parser=new DOMParser,i.serializer=new XMLSerializer;const l={status_abwesend:"status_away",status_aktuelle:"status_current",status_offboarding_laufend:"offboarding_running",status_onboarding_laufend:"onboarding_running",status_vergangene:"status_past",status_zukuenftige:"status_future"},c=e=>u(e)&&(e=e.trim(),a(e))?e:null,a=e=>e.length>0&&/(\/|\.)/.test(e),u=e=>"string"==typeof e,h=e=>{if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].value;if(u(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(let t=0;t<e.childNodes.length;t++)if(!h(e.childNodes[t]))return!1}return!0},d=new Map,f=new Map,g=class{constructor(e){(0,o.r)(this,e),this.clickEl=(0,o.c)(this,"clickEl",7)}iconChanged(){this.loadIcon()}watchHandler(e){e&&(this.svgContent=this.svgTitle?i.setSvgTitle(this.svgContent,this.svgTitle):i.removeSvgTitle(this.svgContent))}componentWillLoad(){this.loadIcon()}loadIcon(){const e=function(e,t){let n=c(e);return n||(n=function(e){const t=l[e]||e;if(t&&!a(t))return t}(t),n?(r=n,null!==(i=function(){if(!s){const e=window;e.inoIcons=e.inoIcons||{},s=e.inoIcons.map=e.inoIcons.map||new Map}return s}().get(r))&&void 0!==i?i:(0,o.e)(`./ino-icon/${r}.svg`)):c(t));var r,i}(this.src,this.icon);e&&(d.has(e)?this.svgContent=d.get(e):(e=>{let t=f.get(e);return void 0===t&&(t=fetch(e).then(t=>{if(t.ok)return t.text().then(t=>{d.set(e,(e=>{if(e){const t=document.createElement("div");t.innerHTML=e;for(let e=t.childNodes.length-1;e>=0;e--)"svg"!==t.childNodes[e].nodeName.toLowerCase()&&t.removeChild(t.childNodes[e]);const n=t.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()){const e=n.getAttribute("class")||"";if(n.setAttribute("class",(e+" s-ion-icon").trim()),h(n))return t.innerHTML}}return""})(t))});d.set(e,"")}),f.set(e,t)),t})(e).then(()=>this.svgContent=d.get(e)))}handleClick(e){e.preventDefault(),this.clickEl.emit(!0)}handleKeyPress(e){"Enter"===e.code&&(e.preventDefault(),this.clickEl.emit(!0))}render(){if(!this.svgContent)return;const e=(0,r.c)({"ino-icon--color-scheme-primary":!this.colorSecondary,"ino-icon--color-scheme-secondary":this.colorSecondary});let t={};return this.clickable&&(t={onClick:e=>this.handleClick(e),onKeyPress:e=>this.handleKeyPress(e),tabindex:0,role:"button"}),(0,o.h)(o.H,{class:e},(0,o.h)("i",Object.assign({innerHTML:this.svgContent},t)))}static get watchers(){return{icon:["iconChanged"],svgContent:["watchHandler"]}}};g.style=":host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em)}:host(.ino-icon--color-scheme-primary){--icon-color:var(\n    --ino-icon-color-primary,\n    var(--ino-global-primary-color, #3d40f5)\n  )}:host(.ino-icon--color-scheme-secondary){--icon-color:var(\n    --ino-icon-color-secondary,\n    var(--ino-global-secondary-color, #9ccd00)\n  )}:host{display:inline-flex;flex-direction:column;justify-content:center}:host i{font-size:inherit;display:flex;flex-direction:row;justify-content:center;font-style:normal}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);fill:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}"}}]);