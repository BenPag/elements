(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[275],{7933:function(n,e,t){"use strict";t.d(e,{a:function(){return r},c:function(){return i}});t(4173);var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{};function i(n,e,t){return t={path:e,exports:{},require:function(n,e){return o()}},n(t,t.exports),t.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},19790:function(n,e,t){"use strict";t.d(e,{c:function(){return o}});var r=t(59523),i=(t(16781),t(7933)),o=(0,i.c)((function(n){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var e={}.hasOwnProperty;function t(){for(var n=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=(0,r.Z)(o);if("string"===s||"number"===s)n.push(o);else if(Array.isArray(o)&&o.length){var a=t.apply(null,o);a&&n.push(a)}else if("object"===s)for(var c in o)e.call(o,c)&&o[c]&&n.push(c)}}return n.join(" ")}n.exports?(t.default=t,n.exports=t):window.classNames=t})()}))},40275:function(n,e,t){"use strict";t.r(e),t.d(e,{ino_icon:function(){return _}});var r,i=t(11487),o=t(63758),s=(t(43450),t(79321),t(58188),t(28673),t(6886),t(45794),t(77950),t(21850),t(67318)),a=t(19790),c=(t(7933),function(){function n(){(0,i.Z)(this,n)}return(0,o.Z)(n,null,[{key:"setSvgTitle",value:function(n,e){var t=this.parser.parseFromString(n,"image/svg+xml"),r=t.querySelector("title");return r&&(r.innerHTML=e),this.serializer.serializeToString(t)}},{key:"removeSvgTitle",value:function(n){var e=this.parser.parseFromString(n,"image/svg+xml"),t=e.querySelector("title");return t&&t.remove(),this.serializer.serializeToString(e)}}]),n}());c.parser=new DOMParser,c.serializer=new XMLSerializer;var u={status_abwesend:"status_away",status_aktuelle:"status_current",status_offboarding_laufend:"offboarding_running",status_onboarding_laufend:"onboarding_running",status_vergangene:"status_past",status_zukuenftige:"status_future"};function l(){if(!r){var n=window;n.inoIcons=n.inoIcons||{},r=n.inoIcons.map=n.inoIcons.map||new Map}return r}var f=function(n){return p(n)&&(n=n.trim(),g(n))?n:null};function h(n){var e=u[n]||n;if(e&&!g(e))return e}function v(n,e){var t=f(n);return t||(t=h(e),t?d(t):f(e))}function d(n){var e;return null!==(e=l().get(n))&&void 0!==e?e:(0,s.e)("./ino-icon/".concat(n,".svg"))}var g=function(n){return n.length>0&&/(\/|\.)/.test(n)},p=function(n){return"string"===typeof n},y=function(n){if(n){var e=document.createElement("div");e.innerHTML=n;for(var t=e.childNodes.length-1;t>=0;t--)"svg"!==e.childNodes[t].nodeName.toLowerCase()&&e.removeChild(e.childNodes[t]);var r=e.firstElementChild;if(r&&"svg"===r.nodeName.toLowerCase()){var i=r.getAttribute("class")||"";if(r.setAttribute("class",(i+" s-ion-icon").trim()),m(r))return e.innerHTML}}return""},m=function n(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var t=0;t<e.attributes.length;t++){var r=e.attributes[t].value;if(p(r)&&0===r.toLowerCase().indexOf("on"))return!1}for(var i=0;i<e.childNodes.length;i++)if(!n(e.childNodes[i]))return!1}return!0},w=new Map,b=new Map,k=function(n){var e=b.get(n);return void 0===e&&(e=fetch(n).then((function(e){if(e.ok)return e.text().then((function(e){w.set(n,y(e))}));w.set(n,"")})),b.set(n,e)),e},C=":host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em)}:host(.ino-icon--color-scheme-primary){--icon-color:var(\n    --ino-icon-color-primary,\n    var(--ino-global-primary-color, #3d40f5)\n  )}:host(.ino-icon--color-scheme-secondary){--icon-color:var(\n    --ino-icon-color-secondary,\n    var(--ino-global-secondary-color, #9ccd00)\n  )}:host{display:inline-flex;flex-direction:column;justify-content:center}:host i{font-size:inherit;display:flex;flex-direction:row;justify-content:center;font-style:normal}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);fill:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}",_=function(){function n(e){(0,i.Z)(this,n),(0,s.r)(this,e),this.clickEl=(0,s.c)(this,"clickEl",7)}return(0,o.Z)(n,[{key:"iconChanged",value:function(){this.loadIcon()}},{key:"watchHandler",value:function(n){n&&(this.svgContent=this.svgTitle?c.setSvgTitle(this.svgContent,this.svgTitle):c.removeSvgTitle(this.svgContent))}},{key:"componentWillLoad",value:function(){this.loadIcon()}},{key:"loadIcon",value:function(){var n=this,e=v(this.src,this.icon);e&&(w.has(e)?this.svgContent=w.get(e):k(e).then((function(){return n.svgContent=w.get(e)})))}},{key:"handleClick",value:function(n){n.preventDefault(),this.clickEl.emit(!0)}},{key:"handleKeyPress",value:function(n){"Enter"===n.code&&(n.preventDefault(),this.clickEl.emit(!0))}},{key:"render",value:function(){var n=this;if(this.svgContent){var e=(0,a.c)({"ino-icon--color-scheme-primary":!this.colorSecondary,"ino-icon--color-scheme-secondary":this.colorSecondary}),t={};return this.clickable&&(t={onClick:function(e){return n.handleClick(e)},onKeyPress:function(e){return n.handleKeyPress(e)},tabindex:0,role:"button"}),(0,s.h)(s.H,{class:e},(0,s.h)("i",Object.assign({innerHTML:this.svgContent},t)))}}}],[{key:"watchers",get:function(){return{icon:["iconChanged"],svgContent:["watchHandler"]}}}]),n}();_.style=C},4173:function(n,e,t){var r=t(23103),i=t(9859);r({global:!0},{globalThis:i})}}]);
//# sourceMappingURL=275-legacy.0664ef2c.js.map