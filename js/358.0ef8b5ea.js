"use strict";(self["webpackChunk_inovex_de_elements_landingpage"]=self["webpackChunk_inovex_de_elements_landingpage"]||[]).push([[358],{9742:function(n,e,t){t.d(e,{a:function(){return r},c:function(){return o}});var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{};function o(n,e,t){return t={path:e,exports:{},require:function(n,e){return i()}},n(t,t.exports),t.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},5875:function(n,e,t){t.d(e,{c:function(){return o}});var r=t(9742),o=(0,r.c)((function(n){
/*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
(function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)&&o.length){var c=t.apply(null,o);c&&n.push(c)}else if("object"===i)for(var s in o)e.call(o,s)&&o[s]&&n.push(s)}}return n.join(" ")}n.exports?(t.default=t,n.exports=t):window.classNames=t})()}))},358:function(n,e,t){t.r(e),t.d(e,{ino_icon:function(){return x}});var r,o=t(2326),i=(t(9742),t(5875)),c=function(){function n(){}return n.setSvgTitle=function(n,e){var t=this.parser.parseFromString(n,"image/svg+xml"),r=t.querySelector("title");return r&&(r.innerHTML=e),this.serializer.serializeToString(t)},n.removeSvgTitle=function(n){var e=this.parser.parseFromString(n,"image/svg+xml"),t=e.querySelector("title");return t&&t.remove(),this.serializer.serializeToString(e)},n}();function s(){if(!r){var n=window;n.inoIcons=n.inoIcons||{},r=n.inoIcons.map=n.inoIcons.map||new Map}return r}c.parser=new DOMParser,c.serializer=new XMLSerializer;var l=function(n){return d(n)&&(n=n.trim(),h(n))?n:null};function a(n){if(n&&!h(n))return n}function u(n,e){var t=l(n);return t||(t=a(e),t?f(t):(t=l(e),t||null))}function f(n){var e=s().get(n);return e||(0,o.e)("./ino-icon/"+n+".svg")}var h=function(n){return n.length>0&&/(\/|\.)/.test(n)},d=function(n){return"string"===typeof n},p=function(n){if(n){var e=document.createElement("div");e.innerHTML=n;for(var t=e.childNodes.length-1;t>=0;t--)"svg"!==e.childNodes[t].nodeName.toLowerCase()&&e.removeChild(e.childNodes[t]);var r=e.firstElementChild;if(r&&"svg"===r.nodeName.toLowerCase()){var o=r.getAttribute("class")||"";if(r.setAttribute("class",(o+" s-ion-icon").trim()),v(r))return e.innerHTML}}return""},v=function(n){if(1===n.nodeType){if("script"===n.nodeName.toLowerCase())return!1;for(var e=0;e<n.attributes.length;e++){var t=n.attributes[e].value;if(d(t)&&0===t.toLowerCase().indexOf("on"))return!1}for(e=0;e<n.childNodes.length;e++)if(!v(n.childNodes[e]))return!1}return!0},g=new Map,m=new Map,y=function(n){var e=m.get(n);return void 0===e&&(e=fetch(n).then((function(e){if(e.ok)return e.text().then((function(e){g.set(n,p(e))}));g.set(n,"")})),m.set(n,e)),e},w=":host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em)}:host(.ino-icon--color-scheme-primary){--icon-color:var(\n    --ino-icon-color-primary,\n    var(--ino-global-primary-color, #3d40f5)\n  )}:host(.ino-icon--color-scheme-secondary){--icon-color:var(\n    --ino-icon-color-secondary,\n    var(--ino-global-secondary-color, #9ccd00)\n  )}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}:host i{font-size:inherit;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}",x=function(){function n(n){(0,o.r)(this,n),this.clickEl=(0,o.c)(this,"clickEl",7)}return n.prototype.iconChanged=function(){this.loadIcon()},n.prototype.watchHandler=function(n){n&&(this.svgContent=this.svgTitle?c.setSvgTitle(this.svgContent,this.svgTitle):c.removeSvgTitle(this.svgContent))},n.prototype.componentWillLoad=function(){this.loadIcon()},n.prototype.loadIcon=function(){var n=this,e=u(this.src,this.icon);e&&(g.has(e)?this.svgContent=g.get(e):y(e).then((function(){return n.svgContent=g.get(e)})))},n.prototype.handleClick=function(n){n.preventDefault(),this.clickEl.emit(!0)},n.prototype.handleKeyPress=function(n){"Enter"===n.code&&(n.preventDefault(),this.clickEl.emit(!0))},n.prototype.render=function(){var n=this;if(this.svgContent){var e=(0,i.c)({"ino-icon--color-scheme-primary":!this.colorSecondary,"ino-icon--color-scheme-secondary":this.colorSecondary}),t={};return this.clickable&&(t={onClick:function(e){return n.handleClick(e)},onKeyPress:function(e){return n.handleKeyPress(e)},tabindex:0,role:"button"}),(0,o.h)(o.H,{class:e},(0,o.h)("i",Object.assign({innerHTML:this.svgContent},t)))}},Object.defineProperty(n,"watchers",{get:function(){return{icon:["iconChanged"],svgContent:["watchHandler"]}},enumerable:!1,configurable:!0}),n}();x.style=w}}]);
//# sourceMappingURL=358.0ef8b5ea.js.map