"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[8944],{3662:function(t,e,n){n.d(e,{a:function(){return i},c:function(){return s},g:function(){return o}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t}function s(t,e,n){return n={path:e,exports:{},require:function(t,e){return l()}},t(n,n.exports),n.exports}function l(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},7537:function(t,e,n){
/*!
 * Crafted with ❤ by inovex GmbH
 */
function i(){return"_"+Math.random().toString(36).substr(2,9)}function o(t,e){return t.querySelector(`[slot="${e}"]`)}function s(t,e){var n;return e?t.querySelectorAll(`[slot="${e}"]`).length>0:0===(null===(n=t.querySelector("slot"))||void 0===n?void 0:n.assignedElements().length)}function l(t){var e;null===(e=t.querySelector("[data-ino-focus]"))||void 0===e||e.focus()}function r(t){const e=t.value.length;t.setSelectionRange&&(t.focus(),t.setSelectionRange(e,e))}function u(t){t.stopPropagation(),t.preventDefault()}n.d(e,{a:function(){return i},f:function(){return l},g:function(){return o},h:function(){return s},m:function(){return r},p:function(){return u}})},2183:function(t,e,n){n.d(e,{c:function(){return o}});var i=n(3662),o=(0,i.c)((function(t){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var e={}.hasOwnProperty;function n(){for(var t=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if("string"===s||"number"===s)t.push(o);else if(Array.isArray(o)&&o.length){var l=n.apply(null,o);l&&t.push(l)}else if("object"===s)for(var r in o)e.call(o,r)&&o[r]&&t.push(r)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}));
/*!
 * Crafted with ❤ by inovex GmbH
 */},8944:function(t,e,n){n.r(e),n.d(e,{ino_autocomplete:function(){return h}});var i=n(1817),o=n(2183),s=n(7537);n(3662);
/*!
 * Crafted with ❤ by inovex GmbH
 */
class l{constructor(){this.timeout=null}debounce(t,e=300){this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.timeout=setTimeout((()=>{t(),this.timeout=null}),e)}}const r=":host{position:relative}:host .menu{width:var(--input-width, max-content);max-height:var(--ino-autocomplete-list-max-height, 225px);position:absolute;top:76px;z-index:10;background-color:white;box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);border-bottom-left-radius:5px;border-bottom-right-radius:5px;overflow:auto}:host .menu-hidden{display:none}:host .menu-shown{display:block}:host .no-options-text{padding-left:16px;padding-right:16px;color:#9b9b9b}",u=-1,h=class{constructor(t){(0,i.r)(this,t),this.valueChange=(0,i.c)(this,"valueChange",7),this.debouncer=new l,this._selectedOptionIndex=u,this.menuIsVisible=!1,this.noOptionsIsVisible=!1,this.debounceTimeout=300,this.noOptionsText="No Option",this.onEnterPress=()=>{this.onOptionSelect(),this.inputEl.getInputElement().then(s.m)},this.onOptionSelect=()=>{this.selectedOption&&(this.inputChanged(this.selectedOption.innerText),this.emitValueOfSelectedOption(),this.closeMenu())},this.onArrowDownPress=()=>{const t=this.filteredOptionEls.findIndex((t=>{var e;return t.value===(null===(e=this.selectedOption)||void 0===e?void 0:e.value)}))+1,e=t>=this.filteredOptionEls.length,n=e?0:t;this.selectedOptionIndex=this.optionEls.indexOf(this.filteredOptionEls[n])},this.onArrowUpPress=()=>{const t=this.filteredOptionEls.findIndex((t=>{var e;return t.value===(null===(e=this.selectedOption)||void 0===e?void 0:e.value)}))-1,e=t<0,n=e?this.filteredOptionEls.length-1:t;this.selectedOptionIndex=this.optionEls.indexOf(this.filteredOptionEls[n])},this.scroll=t=>{t.preventDefault();const{offsetTop:e,clientHeight:n}=this.selectedOption,{scrollTop:i,clientHeight:o}=this.menuContainer;(e+n/2>i+o||e<i)&&this.menuContainer.scrollTo(0,e)},this.setupInput=()=>{if(this.inputEl=(0,s.g)(this.el,"input"),!this.inputEl)throw new Error('The slot "input" is empty. Please provide an <ino-input> element to that slot.');this.inputEl.value&&console.warn("The value property of the <ino-input> is managed by the <ino-autocomplete> and therefore should not be set manually."),this.inputEl.addEventListener("inoFocus",this.onInoInputFocus),this.inputEl.addEventListener("inoBlur",this.onInoInputBlur),this.menuContainer.style.setProperty("--input-width",window.getComputedStyle(this.inputEl).width),this.setOptionByValue(this.value)},this.onInoInputFocus=()=>{this.inputEl.disabled||this.openMenu()},this.onInoInputBlur=t=>{var e;if(this.isOptionClick(t.detail))return;this.closeMenu();const n=this.optionEls.findIndex((t=>t.innerText.trim()===this.inputEl.value.trim()));n!==this.selectedOptionIndex&&(this.selectedOptionIndex=n,this.emitValueOfSelectedOption()),this.inputChanged((null===(e=this.selectedOption)||void 0===e?void 0:e.innerText)||"")},this.isOptionClick=t=>t.relatedTarget&&(t.relatedTarget.matches(".mdc-list-item")||t.relatedTarget.matches("ino-option")),this.emitValueOfSelectedOption=()=>{var t;this.valueChange.emit(null===(t=this.selectedOption)||void 0===t?void 0:t.value)},this.inputChanged=t=>{this.inputEl&&(this.inputEl.value=t||"",this.debouncer.debounce((()=>this.filterOptions(this.inputEl.value)),this.debounceTimeout))},this.filterOptions=t=>{this.filteredOptionEls=this.optionEls.filter((e=>{const n=e.innerText.trim().toLowerCase().includes(t.trim().toLowerCase());return e.style.display=n?"block":"none",n})),this.noOptionsIsVisible=0===this.filteredOptionEls.length},this.setupOptions=()=>{this.optionEls=Array.from(this.el.getElementsByTagName("ino-option")),this.filteredOptionEls=this.optionEls,this.setOptionByValue(this.value)},this.setOptionByValue=t=>{var e;this.optionEls&&(this.selectedOptionIndex=this.optionEls.findIndex((e=>e.value===t)),this.inputChanged(null===(e=this.selectedOption)||void 0===e?void 0:e.innerText))},this.onListItemClick=t=>{const{parentElement:e}=t.target;if("ino-option"!==e.nodeName.toLowerCase()&&"ino-option"!==e.parentElement.nodeName.toLowerCase())return;const n="ino-option"===e.nodeName.toLowerCase()?e:e.parentElement;this.selectedOptionIndex=this.optionEls.findIndex((t=>t.value===n.value)),this.onOptionSelect()},this.openMenu=()=>this.menuIsVisible=!0,this.closeMenu=()=>this.menuIsVisible=!1}set selectedOptionIndex(t){this.selectedOption&&(this.selectedOption.selected=!1),this._selectedOptionIndex=t,this.selectedOption=t>=0?this.optionEls[t]:void 0,this.selectedOption&&(this.selectedOption.selected=!0)}get selectedOptionIndex(){return this._selectedOptionIndex}onValueChange(t,e){t!==e&&this.setOptionByValue(t)}componentDidLoad(){this.setupInput()}disconnectedCallback(){this.inputEl.removeEventListener("inoFocus",this.onInoInputFocus),this.inputEl.removeEventListener("inoBlur",this.onInoInputBlur)}onInoInputValueChange(t){"ino-input"===t.target.tagName.toLowerCase()&&(t.stopImmediatePropagation(),this.inputChanged(t.detail))}onKeyDown(t){if(!this.filteredOptionEls||0===this.filteredOptionEls.length)return;const e=["Enter","Escape","Tab"];switch(this.menuIsVisible||e.includes(t.code)||this.openMenu(),t.code){case"Enter":this.onEnterPress();break;case"ArrowDown":this.openMenu(),this.onArrowDownPress(),this.scroll(t);break;case"ArrowUp":this.openMenu(),this.onArrowUpPress(),this.scroll(t);break;case"Escape":this.closeMenu();break;case"Tab":break;default:this.openMenu()}}render(){const t=(0,o.c)({"no-options-found":this.noOptionsIsVisible,"menu-open":this.menuIsVisible}),e=(0,o.c)({menu:!0,"menu-hidden":!this.menuIsVisible,"menu-shown":this.menuIsVisible});return(0,i.h)(i.H,{class:t},(0,i.h)("slot",{name:"input"}),(0,i.h)("div",{class:e,ref:t=>this.menuContainer=t,onMouseDown:t=>this.onListItemClick(t)},(0,i.h)("div",{class:"mdc-list"},this.noOptionsIsVisible&&(0,i.h)("p",{class:"no-options-text"},this.noOptionsText),(0,i.h)("slot",{onSlotchange:this.setupOptions}))))}get el(){return(0,i.g)(this)}static get watchers(){return{value:["onValueChange"]}}};h.style=r}}]);
//# sourceMappingURL=8944.fa5e82e9.js.map