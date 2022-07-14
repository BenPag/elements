"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[1206],{7537:function(e,t,n){
/*!
 * Crafted with ❤ by inovex GmbH
 */
function o(){return"_"+Math.random().toString(36).substr(2,9)}function i(e,t){return e.querySelector(`[slot="${t}"]`)}function r(e,t){var n;return t?e.querySelectorAll(`[slot="${t}"]`).length>0:0===(null===(n=e.querySelector("slot"))||void 0===n?void 0:n.assignedElements().length)}function a(e){var t;null===(t=e.querySelector("[data-ino-focus]"))||void 0===t||t.focus()}function s(e){const t=e.value.length;e.setSelectionRange&&(e.focus(),e.setSelectionRange(t,t))}function l(e){e.stopPropagation(),e.preventDefault()}n.d(t,{a:function(){return o},f:function(){return a},g:function(){return i},h:function(){return r},m:function(){return s},p:function(){return l}})},1206:function(e,t,n){n.r(t),n.d(t,{ino_popover:function(){return u}});var o=n(7318),i=n(9790),r=n(3024),a=n(7537),s=n(822);n(7933);
/*!
 * Crafted with ❤ by inovex GmbH
 */
const l={name:"hideOnPopperBlur",defaultValue:!0,fn(e){return{onCreate(){e.popper.addEventListener("focusout",(t=>{e.props.hideOnPopperBlur&&t.relatedTarget&&!e.popper.contains(t.relatedTarget)&&e.hide()}))}}}},c={name:"hideOnEsc",defaultValue:!0,fn({hide:e}){function t(t){"Escape"===t.key&&e()}return{onShow(){document.addEventListener("keydown",t)},onHide(){document.removeEventListener("keydown",t)}}}},h=".tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}.ino-popover>*{border-radius:6px}.ino-popover.ino-popover--color-scheme-primary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-secondary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#bbd962;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-light>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#e7e7e7;color:#000;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-transparent>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}",d="data-ino-close";let u=class{constructor(e){(0,o.r)(this,e),this.visibleChanged=(0,o.c)(this,"visibleChanged",7),this.placement="auto",this.attachToBody=!1,this.hideOnBlur=!1,this.hideOnEsc=!1,this.distance=10,this.colorScheme="primary",this.interactive=!1,this.followCursor=!1,this.trigger="mouseenter focus",this.controlled=!1,this.visible=!1}placementChanged(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({placement:this.placement})}bodyChanged(){this.create()}forChanged(){this.create()}hideOnBlurChanged(){this.create()}hideOnEscChanged(){this.create()}distanceChanged(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({offset:[0,this.distance]})}interactiveChanged(){this.create()}followCursorChanged(){this.create()}triggerChanged(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({trigger:this.trigger})}async getTippyInstance(){return this.tippyInstance}controlledChanged(){this.create()}visibleChangeHandler(e){var t,n;this.controlled&&(e?null===(t=this.tippyInstance)||void 0===t||t.show():null===(n=this.tippyInstance)||void 0===n||n.hide())}componentDidLoad(){this.create()}create(){var e;null===(e=this.tippyInstance)||void 0===e||e.destroy(),!this.target&&this.for&&console.warn(`The element with the id '${this.for}' could not be found.`);const t=[];this.hideOnBlur&&t.push(l),this.hideOnEsc&&t.push(c);const n=this.followCursor&&"false"!==this.followCursor;n&&t.push(r.f);const o={allowHTML:!0,animation:"scale-subtle",appendTo:this.attachToBody?document.body:this.popoverContainer,content:this.popoverContent,duration:100,followCursor:!!n&&this.followCursor,placement:this.placement,trigger:this.trigger,offset:[0,this.distance],plugins:[...t,{fn:()=>({onMount:()=>{const e=Array.from(this.el.querySelectorAll("ino-datepicker"));null===e||void 0===e||e.forEach((e=>e.redraw()));const t=this.popoverContent.querySelector("ino-input[data-ino-focus],ino-datepicker[data-ino-focus],  ino-textarea[data-ino-focus]");null===t||void 0===t||t.setFocus()},onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}})}],onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}};this.interactive&&(o["interactive"]=!0),this.tippyInstance=(0,r.t)(this.target,o)}get target(){const e=(0,a.g)(this.el,"popover-trigger");return e||(this.for?document.getElementById(this.for):this.el.parentElement)}handlePopoverClick(e){if(!e.target)return;const t=(0,s.c)(e.target,`[${d}]`);t&&this.tippyInstance.hide()}render(){const e=(0,i.c)("ino-popover",`ino-popover--color-scheme-${this.colorScheme}`,"ino-popover__content");return(0,o.h)(o.H,null,(0,o.h)("slot",{name:"popover-trigger"}),(0,o.h)("div",{ref:e=>this.popoverContainer=e},(0,o.h)("div",{class:e,role:"tooltip",ref:e=>this.popoverContent=e,onClick:this.handlePopoverClick.bind(this)},(0,o.h)("slot",null))))}get el(){return(0,o.g)(this)}static get watchers(){return{placement:["placementChanged"],attachToBody:["bodyChanged"],for:["forChanged"],hideOnBlur:["hideOnBlurChanged"],hideOnEsc:["hideOnEscChanged"],distance:["distanceChanged"],interactive:["interactiveChanged"],followCursor:["followCursorChanged"],trigger:["triggerChanged"],controlled:["controlledChanged"],visible:["visibleChangeHandler"]}}};u.style=h},822:function(e,t,n){
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
function o(e,t){if(e.closest)return e.closest(t);var n=e;while(n){if(i(n,t))return n;n=n.parentElement}return null}function i(e,t){var n=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return n.call(e,t)}function r(e){var t=e;if(null!==t.offsetParent)return t.scrollWidth;var n=t.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var o=n.scrollWidth;return document.documentElement.removeChild(n),o}n.d(t,{c:function(){return o},e:function(){return r},m:function(){return i}})}}]);
//# sourceMappingURL=1206.a7915bad.js.map