(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[1843],{36929:function(t,e,r){r(77950),r(85940),r(45794),r(74069),r(48319),r(32501),r(16781),r(58188),r(1939),r(35883),r(95342),r(96708),r(43430),r(43450),r(17368),r(28450),r(51172),r(88233),r(28673),r(6886),r(27233),r(21850),r(52356),r(79321),r(18178);
/*!
 * Crafted with ❤ by inovex GmbH
 */
var n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};function s(t){return u(a(t=i(t)),t)}function i(t){return t.replace(h.comments,"").replace(h.port,"")}function a(t){var e=new o;e.start=0,e.end=t.length;for(var r=e,n=0,s=t.length;n<s;n++)if(t[n]===p){r.rules||(r.rules=[]);var i=r,a=i.rules[i.rules.length-1]||null;(r=new o).start=n+1,r.parent=i,r.previous=a,i.rules.push(r)}else t[n]===f&&(r.end=n+1,r=r.parent||e);return e}function u(t,e){var r=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){var n=t.previous?t.previous.end:t.parent.start;r=(r=(r=c(r=e.substring(n,t.start-1))).replace(h.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var o=t.parsedSelector=t.selector=r.trim();t.atRule=0===o.indexOf(d),t.atRule?0===o.indexOf(g)?t.type=l.MEDIA_RULE:o.match(h.keyframesRule)&&(t.type=l.KEYFRAMES_RULE,t.keyframesName=t.selector.split(h.multipleSpaces).pop()):0===o.indexOf(v)?t.type=l.MIXIN_RULE:t.type=l.STYLE_RULE}var s=t.rules;if(s)for(var i=0,a=s.length,p=void 0;i<a&&(p=s[i]);i++)u(p,e);return t}function c(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}var l={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},p="{",f="}",h={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},v="--",g="@media",d="@";function m(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var o=r+n.index;return{start:o,end:o+n[0].length}}return null}var y=/\bvar\(/,E=/\B--[\w-]+\s*:/,S=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,x=/^[\t ]+\n/gm;function b(t,e,r){return t[e]?t[e]:r?k(r,t):""}function R(t,e){for(var r=0,n=e;n<t.length;n++){var o=t[n];if("("===o)r++;else if(")"===o&&--r<=0)return n+1}return n}function w(t,e){var r=m(y,t,e);if(!r)return null;var n=R(t,r.start),o=t.substring(r.end,n-1).split(","),s=o[0],i=o.slice(1);return{start:r.start,end:n,propName:s.trim(),fallback:i.length>0?i.join(",").trim():void 0}}function M(t,e,r){var n=w(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var o=n.propName,s=null!=n.fallback?_(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return b(t,o,s)})),n.end}function k(t,e){for(var r="",n=0;n<t.length;n++){var o=t[n];r+="string"==typeof o?o:o(e)}return r}function I(t,e){for(var r=!1,n=!1,o=e;o<t.length;o++){var s=t[o];if(r)n&&'"'===s&&(r=!1),n||"'"!==s||(r=!1);else if('"'===s)r=!0,n=!0;else if("'"===s)r=!0,n=!1;else{if(";"===s)return o+1;if("}"===s)return o}}return o}function C(t){for(var e="",r=0;;){var n=m(E,t,r),o=n?n.start:t.length;if(e+=t.substring(r,o),!n)break;r=I(t,o)}return e}function _(t){var e=0;t=C(t=t.replace(S,"")).replace(x,"");for(var r=[];e<t.length;)e=M(t,r,e);return r}function A(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),o=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],o=k(t[1],r);o!==r[n]&&(r[n]=o,e=!0)})),!e)return"break"},s=0;s<10;s++)if("break"===o())break;return r}function L(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return t.type===l.STYLE_RULE})).forEach((function(t){var n=N(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:O(),nu:e})})),e++})),r}function O(t){return 1}var T="!important",U=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function N(t){for(var e,r=[];e=U.exec(t.trim());){var n=P(e[2]),o=n.value,s=n.important;r.push({prop:e[1].trim(),value:_(o),important:s})}return r}function P(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith(T);return e&&(t=t.substr(0,t.length-T.length).trim()),{value:t,important:e}}function Y(t,e,r){var n=[],o=q(e,t);return r.forEach((function(t){return n.push(t)})),o.forEach((function(t){return n.push(t)})),G($(n).filter((function(e){return H(t,e.selector)})))}function q(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}function $(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function G(t){return t.sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),t}function H(t,e){return":root"===e||"html"===e||t.matches(e)}function V(t){var e=s(t),r=_(t);return{original:t,template:r,selectors:L(e),usesCssVars:r.length>1}}function j(t,e){if(t.some((function(t){return t.styleEl===e})))return!1;var r=V(e.textContent);return r.styleEl=e,t.push(r),!0}function D(t){var e=A($(t));t.forEach((function(t){t.usesCssVars&&(t.styleEl.textContent=k(t.template,e))}))}function F(t,e){var r=t.template.map((function(r){return"string"==typeof r?B(r,t.scopeId,e):r})),o=t.selectors.map((function(r){return n(n({},r),{selector:B(r.selector,t.scopeId,e)})}));return n(n({},t),{template:r,selectors:o,scopeId:e})}function B(t,e,r){return W(t,"\\.".concat(e),".".concat(r))}function W(t,e,r){return t.replace(new RegExp(e,"g"),r)}function K(t,e){return Z(t,e),z(t,e).then((function(){D(e)}))}function X(t,e){"undefined"!=typeof MutationObserver&&new MutationObserver((function(){Z(t,e)&&D(e)})).observe(document.head,{childList:!0})}function z(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),o=0;o<n.length;o++)r.push(J(t,e,n[o]));return Promise.all(r)}function Z(t,e){return Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map((function(t){return j(e,t)})).some(Boolean)}function J(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(o){if(tt(o)&&r.parentNode){rt(o)&&(o=nt(o,n));var s=t.createElement("style");s.setAttribute("data-styles",""),s.textContent=o,j(e,s),r.parentNode.insertBefore(s,r),r.remove()}})).catch((function(t){console.error(t)}))}var Q=/[\s;{]--[-a-zA-Z0-9]+\s*:/m;function tt(t){return t.indexOf("var(")>-1||Q.test(t)}var et=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;function rt(t){return et.lastIndex=0,et.test(t)}function nt(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(et,(function(t,e){var n=r+e;return t.replace(e,n)}))}var ot=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.i=function(){var t=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise((function(e){t.win.requestAnimationFrame((function(){X(t.doc,t.globalScopes),K(t.doc,t.globalScopes).then((function(){return e()}))}))})))},t.prototype.addLink=function(t){var e=this;return J(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){j(this.globalScopes,t)&&this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var o=this.registerHostTemplate(r,e,n),s=this.doc.createElement("style");return s.setAttribute("data-no-shim",""),o.usesCssVars?n?(s["s-sc"]=e="".concat(o.scopeId,"-").concat(this.count),s.textContent="/*needs update*/",this.hostStyleMap.set(t,s),this.hostScopeMap.set(t,F(o,e)),this.count++):(o.styleEl=s,o.usesCssVars||(s.textContent=k(o.template,{})),this.globalScopes.push(o),this.updateGlobal(),this.hostScopeMap.set(t,o)):s.textContent=r,s},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=A(Y(t,this.hostScopeMap,this.globalScopes));r.textContent=k(e.template,n)}}},t.prototype.updateGlobal=function(){D(this.globalScopes)},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=V(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}();!function(t){!t||t.__cssshim||t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")||(t.__cssshim=new ot(t,t.document))}("undefined"!=typeof window&&window)},43430:function(t,e,r){"use strict";var n=r(23103),o=r(93819),s=r(92991),i=r(24229),a=r(96038),u=[],c=u.sort,l=i((function(){u.sort(void 0)})),p=i((function(){u.sort(null)})),f=a("sort"),h=l||!p||!f;n({target:"Array",proto:!0,forced:h},{sort:function(t){return void 0===t?c.call(s(this)):c.call(s(this),o(t))}})},17368:function(t,e,r){var n=r(7400),o=r(9859),s=r(46541),i=r(20835),a=r(31787).f,u=r(78151).f,c=r(48311),l=r(30895),p=r(25650),f=r(27487),h=r(24229),v=r(56407).enforce,g=r(71832),d=r(70095),m=d("match"),y=o.RegExp,E=y.prototype,S=/a/g,x=/a/g,b=new y(S)!==S,R=p.UNSUPPORTED_Y,w=n&&s("RegExp",!b||R||h((function(){return x[m]=!1,y(S)!=S||y(x)==x||"/a/i"!=y(S,"i")})));if(w){var M=function(t,e){var r,n=this instanceof M,o=c(t),s=void 0===e;if(!n&&o&&t.constructor===M&&s)return t;b?o&&!s&&(t=t.source):t instanceof M&&(s&&(e=l.call(t)),t=t.source),R&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,"")));var a=i(b?new y(t,e):y(t,e),n?this:E,M);if(R&&r){var u=v(a);u.sticky=!0}return a},k=function(t){t in M||a(M,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},I=u(y),C=0;while(I.length>C)k(I[C++]);E.constructor=M,M.prototype=E,f(o,"RegExp",M)}g("RegExp")},51172:function(t,e,r){var n=r(7400),o=r(25650).UNSUPPORTED_Y,s=r(31787).f,i=r(56407).get,a=RegExp.prototype;n&&o&&s(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==a){if(this instanceof RegExp)return!!i(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}})},88233:function(t,e,r){"use strict";var n=r(27487),o=r(21176),s=r(24229),i=r(30895),a="toString",u=RegExp.prototype,c=u[a],l=s((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),p=c.name!=a;(l||p)&&n(RegExp.prototype,a,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?i.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},74069:function(t,e,r){"use strict";var n=r(94954),o=r(21176),s=r(34237),i=r(58885),a=r(36637),u=r(98115);n("match",1,(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=o(t),c=String(this);if(!i.global)return u(i,c);var l=i.unicode;i.lastIndex=0;var p,f=[],h=0;while(null!==(p=u(i,c))){var v=String(p[0]);f[h]=v,""===v&&(i.lastIndex=a(c,s(i.lastIndex),l)),h++}return 0===h?null:f}]}))},9441:function(t,e,r){var n=r(47293),o=r(17854),s=o.RegExp;t.exports=n((function(){var t=s(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},28450:function(t,e,r){var n=r(17854),o=r(19781),s=r(9441),i=r(84326),a=r(3070).f,u=r(29909).get,c=RegExp.prototype,l=n.TypeError;o&&s&&a(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===i(this))return!!u(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})}}]);
//# sourceMappingURL=polyfills-css-shim-legacy.94855f2a.js.map