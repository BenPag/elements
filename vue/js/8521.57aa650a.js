"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[8521],{3662:function(n,t,e){e.d(t,{a:function(){return i},c:function(){return a},g:function(){return o}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e.g?e.g:"undefined"!==typeof self?self:{};function o(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n["default"]:n}function a(n,t,e){return e={path:t,exports:{},require:function(n,t){return r()}},n(e,e.exports),e.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},601:function(n,t,e){e.d(t,{M:function(){return d},_:function(){return o},a:function(){return a},b:function(){return r},c:function(){return l},d:function(){return s},e:function(){return c}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var i=function(n,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},i(n,t)};function o(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}var a=function(){return a=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var o in t=arguments[e],t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},a.apply(this,arguments)};function r(n){var t="function"===typeof Symbol&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&"number"===typeof n.length)return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(n,t){var e="function"===typeof Symbol&&n[Symbol.iterator];if(!e)return n;var i,o,a=e.call(n),r=[];try{while((void 0===t||t-- >0)&&!(i=a.next()).done)r.push(i.value)}catch(c){o={error:c}}finally{try{i&&!i.done&&(e=a["return"])&&e.call(a)}finally{if(o)throw o.error}}return r}function s(n,t,e){if(e||2===arguments.length)for(var i,o=0,a=t.length;o<a;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return n.concat(i||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d=function(){function n(n){void 0===n&&(n={}),this.adapter=n}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}(),l=function(){function n(n,t){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];this.root=n,this.initialize.apply(this,s([],c(e))),this.foundation=void 0===t?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return n.attachTo=function(t){return new n(t,new d({}))},n.prototype.initialize=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]},n.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},n.prototype.initialSyncWithDOM=function(){},n.prototype.destroy=function(){this.foundation.destroy()},n.prototype.listen=function(n,t,e){this.root.addEventListener(n,t,e)},n.prototype.unlisten=function(n,t,e){this.root.removeEventListener(n,t,e)},n.prototype.emit=function(n,t,e){var i;void 0===e&&(e=!1),"function"===typeof CustomEvent?i=new CustomEvent(n,{bubbles:e,detail:t}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(n,e,!1,t)),this.root.dispatchEvent(i)},n}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */},2183:function(n,t,e){e.d(t,{c:function(){return o}});var i=e(3662),o=(0,i.c)((function(n){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function e(){for(var n=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if("string"===a||"number"===a)n.push(o);else if(Array.isArray(o)&&o.length){var r=e.apply(null,o);r&&n.push(r)}else if("object"===a)for(var c in o)t.call(o,c)&&o[c]&&n.push(c)}}return n.join(" ")}n.exports?(e.default=e,n.exports=e):window.classNames=e})()}));
/*!
 * Crafted with ❤ by inovex GmbH
 */},8521:function(n,t,e){e.r(t),e.d(t,{ino_snackbar:function(){return I}});var i=e(1817),o=e(2183),a=e(601),r=e(822),c=(e(3662),{CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"}),s={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},d={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},l=d.ARIA_LIVE_DELAY_MS,p=s.ARIA_LIVE_LABEL_TEXT_ATTR;function u(n,t){void 0===t&&(t=n);var e=n.getAttribute("aria-live"),i=t.textContent.trim();i&&e&&(n.setAttribute("aria-live","off"),t.textContent="",t.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',t.setAttribute(p,i),setTimeout((function(){n.setAttribute("aria-live",e),t.removeAttribute(p),t.textContent=i}),l))}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var m=c.OPENING,b=c.OPEN,f=c.CLOSING,h=s.REASON_ACTION,_=s.REASON_DISMISS,y=function(n){function t(e){var i=n.call(this,(0,a.a)((0,a.a)({},t.defaultAdapter),e))||this;return i.opened=!1,i.animationFrame=0,i.animationTimer=0,i.autoDismissTimer=0,i.autoDismissTimeoutMs=d.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,i.closeOnEscape=!0,i}return(0,a._)(t,n),Object.defineProperty(t,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(m),this.adapter.removeClass(b),this.adapter.removeClass(f)},t.prototype.open=function(){var n=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(f),this.adapter.addClass(m),this.adapter.announce(),this.runNextAnimationFrame((function(){n.adapter.addClass(b),n.animationTimer=setTimeout((function(){var t=n.getTimeoutMs();n.handleAnimationTimerEnd(),n.adapter.notifyOpened(),t!==d.INDETERMINATE&&(n.autoDismissTimer=setTimeout((function(){n.close(_)}),t))}),d.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},t.prototype.close=function(n){var t=this;void 0===n&&(n=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(n),this.adapter.addClass(c.CLOSING),this.adapter.removeClass(c.OPEN),this.adapter.removeClass(c.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){t.handleAnimationTimerEnd(),t.adapter.notifyClosed(n)}),d.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.opened},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},t.prototype.setTimeoutMs=function(n){var t=d.MIN_AUTO_DISMISS_TIMEOUT_MS,e=d.MAX_AUTO_DISMISS_TIMEOUT_MS,i=d.INDETERMINATE;if(!(n===d.INDETERMINATE||n<=e&&n>=t))throw new Error("\n        timeoutMs must be an integer in the range "+t+"–"+e+"\n        (or "+i+" to disable), but got '"+n+"'");this.autoDismissTimeoutMs=n},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape},t.prototype.setCloseOnEscape=function(n){this.closeOnEscape=n},t.prototype.handleKeyDown=function(n){var t="Escape"===n.key||27===n.keyCode;t&&this.getCloseOnEscape()&&this.close(_)},t.prototype.handleActionButtonClick=function(n){this.close(h)},t.prototype.handleActionIconClick=function(n){this.close(_)},t.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(c.OPENING),this.adapter.removeClass(c.CLOSING)},t.prototype.runNextAnimationFrame=function(n){var t=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){t.animationFrame=0,clearTimeout(t.animationTimer),t.animationTimer=setTimeout(n,0)}))},t}(a.M),k=s.SURFACE_SELECTOR,g=s.LABEL_SELECTOR,v=s.ACTION_SELECTOR,E=s.DISMISS_SELECTOR,x=s.OPENING_EVENT,T=s.OPENED_EVENT,O=s.CLOSING_EVENT,S=s.CLOSED_EVENT,C=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,a._)(t,n),t.attachTo=function(n){return new t(n)},t.prototype.initialize=function(n){void 0===n&&(n=function(){return u}),this.announce=n()},t.prototype.initialSyncWithDOM=function(){var n=this;this.surfaceEl=this.root.querySelector(k),this.labelEl=this.root.querySelector(g),this.actionEl=this.root.querySelector(v),this.handleKeyDown=function(t){n.foundation.handleKeyDown(t)},this.handleSurfaceClick=function(t){var e=t.target;n.isActionButton(e)?n.foundation.handleActionButtonClick(t):n.isActionIcon(e)&&n.foundation.handleActionIconClick(t)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},t.prototype.destroy=function(){n.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},t.prototype.open=function(){this.foundation.open()},t.prototype.close=function(n){void 0===n&&(n=""),this.foundation.close(n)},t.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){n.root.classList.add(t)},announce:function(){n.announce(n.labelEl)},notifyClosed:function(t){return n.emit(S,t?{reason:t}:{})},notifyClosing:function(t){return n.emit(O,t?{reason:t}:{})},notifyOpened:function(){return n.emit(T,{})},notifyOpening:function(){return n.emit(x,{})},removeClass:function(t){return n.root.classList.remove(t)}};return new y(t)},Object.defineProperty(t.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(n){this.foundation.setTimeoutMs(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(n){this.foundation.setCloseOnEscape(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(n){this.labelEl.textContent=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(n){this.actionEl.textContent=n},enumerable:!1,configurable:!0}),t.prototype.registerKeyDownHandler=function(n){this.listen("keydown",n)},t.prototype.deregisterKeyDownHandler=function(n){this.unlisten("keydown",n)},t.prototype.registerSurfaceClickHandler=function(n){this.surfaceEl.addEventListener("click",n)},t.prototype.deregisterSurfaceClickHandler=function(n){this.surfaceEl.removeEventListener("click",n)},t.prototype.isActionButton=function(n){return Boolean((0,r.c)(n,v))},t.prototype.isActionIcon=function(n){return Boolean((0,r.c)(n,E))},t}(a.c);const A='.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width: 480px), (max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0;}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size{width:36px;height:36px;padding:6px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px;}ino-snackbar{}ino-snackbar .ino-snackbar-layout-container{display:block;top:var(--ino-snackbar-top, 0);bottom:var(--ino-snackbar-bottom, auto);left:var(--ino-snackbar-left, auto);right:var(--ino-snackbar-right, 0)}ino-snackbar.ino-snackbar--type-info{--snackbar-color:#3d40f5;--snackbar-color-light:#efeffe}ino-snackbar.ino-snackbar--type-error{--snackbar-color:#eb003b;--snackbar-color-light:#ffd2dd}ino-snackbar.ino-snackbar--type-success{--snackbar-color:#9ccd00;--snackbar-color-light:#edffb4}ino-snackbar .ino-snackbar-container{margin-top:5px;margin-right:5px;background-color:white;border:0.3px solid var(--snackbar-color);border-radius:15px;box-shadow:0 1px 2px var(--snackbar-color-light);justify-content:space-between;min-width:auto;max-width:350px;padding:16px 45px 16px 25px}ino-snackbar .ino-snackbar-container:hover~.ino-snackbar-close-btn{display:inline-flex}ino-snackbar .ino-snackbar-container:before{display:none}ino-snackbar .ino-snackbar-close-btn{display:none;position:absolute;top:0;right:0;width:22px;height:22px;border-radius:30px;padding:0;background-color:white;box-shadow:0 3px 6px #00000029;pointer-events:auto;--ino-icon-button-icon-color:black !important;--ino-icon-button-size:22px;--ino-icon-button-icon-size:8px}ino-snackbar .ino-snackbar-close-btn:hover{display:inline-flex}ino-snackbar .ino-snackbar-icon-container{background-color:var(--snackbar-color-light);border-radius:50%;justify-content:center;align-items:center;height:30px;width:30px}ino-snackbar .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-color-primary:var(--snackbar-color)}ino-snackbar.ino-snackbar--type-info .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-error .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-success .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar .ino-snackbar-message-container{display:flex;flex-direction:column;column-gap:7px;padding:0 0 0 20px}ino-snackbar .ino-snackbar-message-container .ino-snackbar-text-container{color:#74758b}ino-snackbar .ino-snackbar-message-container .ino-snackbar-action-btn{border:none;background-color:transparent;color:var(--snackbar-color);font-size:12px;font-weight:600;cursor:pointer;padding-left:0;padding-top:5px}',I=class{constructor(n){(0,i.r)(this,n),this.actionClick=(0,i.c)(this,"actionClick",7),this.hideEl=(0,i.c)(this,"hideEl",7),this.type="info",this.timeout=5e3,this.stayVisibleOnHover=!1,this.setupTimeout=()=>{this.snackbarInstance.timeoutMs=-1,this.timeout>=0&&(this.nodeTimeout=setTimeout((()=>this.snackbarInstance.close()),this.timeout))},this.interruptTimeout=()=>{this.nodeTimeout&&clearTimeout(this.nodeTimeout)},this.handleSnackbarHide=n=>{this.hideEl.emit(),n.stopPropagation()},this.mapTypeToIconName=n=>{switch(n){case"success":return"snackbar-checkmark";case"error":return"snackbar-error";case"info":default:return"snackbar-information"}}}componentDidLoad(){this.snackbarInstance=new C(this.snackbarElement),this.snackbarElement.addEventListener("MDCSnackbar:closing",this.handleSnackbarHide),this.setupTimeout(),this.stayVisibleOnHover&&(this.snackbarElement.addEventListener("mouseenter",this.interruptTimeout),this.snackbarElement.addEventListener("mouseleave",this.setupTimeout)),this.snackbarInstance.open(),this.message&&console.warn('[ino-snackbar] The attribute "message" is deprecated, please use the default slot instead.')}disconnectedCallback(){var n;null===(n=this.snackbarInstance)||void 0===n||n.destroy(),this.snackbarElement.removeEventListener("MDCSnackbar:closing",this.handleSnackbarHide),this.snackbarElement.removeEventListener("mouseenter",this.interruptTimeout),this.snackbarElement.removeEventListener("mouseleave",this.setupTimeout)}render(){const n=Boolean(this.actionText),t=(0,o.c)(`ino-snackbar--type-${this.type}`),e=(0,o.c)("mdc-snackbar","ino-snackbar-layout-container");return(0,i.h)(i.H,{class:t},(0,i.h)("div",{ref:n=>this.snackbarElement=n,class:e,"aria-live":"assertive","aria-atomic":"true"},(0,i.h)("div",{class:"mdc-snackbar__surface ino-snackbar-container"},(0,i.h)("div",{class:"mdc-snackbar__actions ino-snackbar-icon-container"},(0,i.h)("ino-icon",{class:"ino-snackbar-icon",icon:this.mapTypeToIconName(this.type)})),(0,i.h)("div",{class:"mdc-snackbar__label ino-snackbar-message-container","aria-atomic":"false"},(0,i.h)("div",{class:"ino-snackbar-text-container"},this.message?this.message:(0,i.h)("slot",null)),n&&(0,i.h)("div",null,(0,i.h)("button",{onClick:this.actionClick.emit,class:"ino-snackbar-action-btn"},this.actionText)))),(0,i.h)("ino-icon-button",{onClick:this.handleSnackbarHide,icon:"close",class:"ino-snackbar-close-btn","color-scheme":"dark"})))}get el(){return(0,i.g)(this)}};I.style=A},822:function(n,t,e){
/*!
 * Crafted with ❤ by inovex GmbH
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function i(n,t){if(n.closest)return n.closest(t);var e=n;while(e){if(o(e,t))return e;e=e.parentElement}return null}function o(n,t){var e=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return e.call(n,t)}function a(n){var t=n;if(null!==t.offsetParent)return t.scrollWidth;var e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);var i=e.scrollWidth;return document.documentElement.removeChild(e),i}e.d(t,{c:function(){return i},e:function(){return a},m:function(){return o}})}}]);
//# sourceMappingURL=8521.57aa650a.js.map