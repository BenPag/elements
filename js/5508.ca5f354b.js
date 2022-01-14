"use strict";(self["webpackChunk_inovex_de_elements_landingpage"]=self["webpackChunk_inovex_de_elements_landingpage"]||[]).push([[5508],{9742:function(e,i,n){n.d(i,{a:function(){return t},c:function(){return r}});var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function r(e,i,n){return n={path:i,exports:{},require:function(e,i){return o()}},e(n,n.exports),n.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},5875:function(e,i,n){n.d(i,{c:function(){return r}});var t=n(9742),r=(0,t.c)((function(e){
/*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
(function(){var i={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===o)for(var d in r)i.call(r,d)&&r[d]&&e.push(d)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}))},5508:function(e,i,n){n.r(i),n.d(i,{ino_input_file:function(){return l}});var t=n(2326),r=(n(9742),n(5875)),o="ino-input-file{--input-file-box-height:var(--ino-input-file-box-height, 300px);--input-file-box-width:var(--ino-input-file-box-width, 100%)}ino-input-file .ino-input-file__native-element{visibility:hidden;height:0;width:0}ino-input-file .ino-input-file__dnd{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:white;border:2px dashed #3d40f5;border-radius:20px;height:var(--input-file-box-height);width:var(--input-file-box-width)}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-align:center;align-items:center;margin-bottom:15px}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text label{color:#3d40f5;font-family:Lato, Verdana, sans-serif;font-size:1.25rem;font-weight:400}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-dragover:not(.ino-input-file__dnd-disabled){background-color:#f5f5ff}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled{background-color:#e7e7e7;border:2px solid #e7e7e7}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled label{color:#777777}",l=function(){function e(e){(0,t.r)(this,e),this.changeFile=(0,t.c)(this,"changeFile",7),this.eventListeners=[],this.label="Select file",this.dragAndDrop=!1,this.dragAndDropText="Drag your files here",this.dragAndDropSecondaryText="or"}return e.prototype.componentDidLoad=function(){this.configureDragAndDrop()},e.prototype.disconnectedCallback=function(){var e=this;this.eventListeners.forEach((function(i){return e.removeEventListeners(e.el,i[0],i[1])}))},e.prototype.addEventListeners=function(e,i,n){this.eventListeners.push([i,n]),i.split(" ").forEach((function(i){e.addEventListener(i,n)}))},e.prototype.browserSupportsDragAndDrop=function(){return"draggable"in this.el||"ondragstart"in this.el&&"ondrop"in this.el&&"FormData"in window&&"FileReader"in window},e.prototype.configureDragAndDrop=function(){var e=this;if(this.dragAndDrop&&this.browserSupportsDragAndDrop()){var i=this.el.querySelector(".ino-input-file__dnd");this.addEventListeners(this.el,"drag dragstart dragend dragover dragenter dragleave drop",(function(e){e.preventDefault(),e.stopPropagation()})),this.addEventListeners(this.el,"dragover dragenter",(function(){i.classList.add("ino-input-file__dnd-dragover")})),this.addEventListeners(this.el,"dragend dragleave drop",(function(){return i.classList.remove("ino-input-file__dnd-dragover")})),this.el.addEventListener("drop",(function(i){if(!e.disabled){var n=i.dataTransfer.files;e.multiple?e.changeFile.emit({e:i,files:Array.from(n)}):e.changeFile.emit({e:i,files:Array.from(n).slice(0,1)})}}))}},e.prototype.onFileChange=function(e){var i=e.target,n=i.files;this.changeFile.emit({e:e,files:Array.from(n)})},e.prototype.removeEventListeners=function(e,i,n){i.split(" ").forEach((function(i){return e.removeEventListener(i,n)}))},e.prototype.selectFiles=function(){var e=this.el.querySelector(".ino-input-file__native-element");e.click()},e.prototype.render=function(){var e=this,i=(0,r.c)({"ino-input-file__composer":!this.dragAndDrop,"ino-input-file__dnd":this.dragAndDrop,"ino-input-file__dnd-disabled":this.dragAndDrop&&this.disabled});return(0,t.h)(t.H,null,(0,t.h)("div",{class:i},this.dragAndDrop&&(0,t.h)("div",{class:"ino-input-file__dnd-text"},(0,t.h)("label",null,this.dragAndDropText),(0,t.h)("label",null,this.dragAndDropSecondaryText)),(0,t.h)("ino-button",{class:"ino-input-file__button",name:"file-paths",autoFocus:this.autoFocus,disabled:this.disabled,onClick:function(){return e.selectFiles()},"icon-leading":!0},(0,t.h)("ino-icon",{icon:"upload",slot:"icon-leading"}),this.label),(0,t.h)("input",{class:"ino-input-file__native-element",accept:this.accept,disabled:this.disabled,multiple:this.multiple,name:this.name,required:this.required,type:"file","aria-hidden":"true",onChange:function(i){return e.onFileChange(i)}})))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,t.g)(this)},enumerable:!1,configurable:!0}),e}();l.style=o}}]);
//# sourceMappingURL=5508.ca5f354b.js.map