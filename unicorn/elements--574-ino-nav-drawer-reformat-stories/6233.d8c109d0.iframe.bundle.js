/*! For license information please see 6233.d8c109d0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[6233],{"../elements/dist/esm/_commonjsHelpers-6ccee0aa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-7e3a00fd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-input-file.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_input_file:()=>InputFile,__namedExportsOrder:()=>__namedExportsOrder});__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../elements/dist/esm/index-5082bac1.js"),_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../elements/dist/esm/index-7e3a00fd.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-6ccee0aa.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var InputFile=function(){function InputFile(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,InputFile),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.r)(this,hostRef),this.changeFile=(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"changeFile",7),this.eventListeners=[],this.label="Select file",this.dragAndDrop=!1,this.dragAndDropText="Drag your files here",this.dragAndDropSecondaryText="or"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(InputFile,[{key:"componentDidLoad",value:function componentDidLoad(){this.configureDragAndDrop()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this=this;this.eventListeners.forEach((function(tuple){return _this.removeEventListeners(_this.el,tuple[0],tuple[1])}))}},{key:"addEventListeners",value:function addEventListeners(el,events,fn){this.eventListeners.push([events,fn]),events.split(" ").forEach((function(e){el.addEventListener(e,fn)}))}},{key:"browserSupportsDragAndDrop",value:function browserSupportsDragAndDrop(){return"draggable"in this.el||"ondragstart"in this.el&&"ondrop"in this.el&&"FormData"in window&&"FileReader"in window}},{key:"configureDragAndDrop",value:function configureDragAndDrop(){var _this2=this;if(this.dragAndDrop&&this.browserSupportsDragAndDrop()){var box=this.el.querySelector(".ino-input-file__dnd");this.addEventListeners(this.el,"drag dragstart dragend dragover dragenter dragleave drop",(function(e){e.preventDefault(),e.stopPropagation()})),this.addEventListeners(this.el,"dragover dragenter",(function(){box.classList.add("ino-input-file__dnd-dragover")})),this.addEventListeners(this.el,"dragend dragleave drop",(function(){return box.classList.remove("ino-input-file__dnd-dragover")})),this.el.addEventListener("drop",(function(e){if(!_this2.disabled){var files=e.dataTransfer.files;_this2.multiple?_this2.changeFile.emit({e,files:Array.from(files)}):_this2.changeFile.emit({e,files:Array.from(files).slice(0,1)})}}))}}},{key:"onFileChange",value:function onFileChange(e){var files=e.target.files;this.changeFile.emit({e,files:Array.from(files)})}},{key:"removeEventListeners",value:function removeEventListeners(el,events,fn){events.split(" ").forEach((function(e){return el.removeEventListener(e,fn)}))}},{key:"selectFiles",value:function selectFiles(){this.el.querySelector(".ino-input-file__native-element").click()}},{key:"render",value:function render(){var _this3=this,classes=(0,_index_7e3a00fd_js__WEBPACK_IMPORTED_MODULE_10__.c)({"ino-input-file__composer":!this.dragAndDrop,"ino-input-file__dnd":this.dragAndDrop,"ino-input-file__dnd-disabled":this.dragAndDrop&&this.disabled});return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)(_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.H,null,(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("div",{class:classes},this.dragAndDrop&&(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("div",{class:"ino-input-file__dnd-text"},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("label",null,this.dragAndDropText),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("label",null,this.dragAndDropSecondaryText)),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("ino-button",{class:"ino-input-file__button",name:"file-paths",autoFocus:this.autoFocus,disabled:this.disabled,onClick:function onClick(){return _this3.selectFiles()},"icon-leading":!0},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("ino-icon",{icon:"upload",slot:"icon-leading"}),this.label),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.h)("input",{class:"ino-input-file__native-element",accept:this.accept,disabled:this.disabled,multiple:this.multiple,name:this.name,required:this.required,type:"file","aria-hidden":"true",onChange:function onChange(e){return _this3.onFileChange(e)}})))}},{key:"el",get:function get(){return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_9__.g)(this)}}]),InputFile}();InputFile.style="ino-input-file{--input-file-box-height:var(--ino-input-file-box-height, 300px);--input-file-box-width:var(--ino-input-file-box-width, 100%)}ino-input-file .ino-input-file__native-element{visibility:hidden;height:0;width:0}ino-input-file .ino-input-file__dnd{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:white;border:2px dashed #3d40f5;border-radius:20px;height:var(--input-file-box-height);width:var(--input-file-box-width)}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;margin-bottom:15px}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text label{color:#3d40f5;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1.25rem;font-weight:400}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-dragover:not(.ino-input-file__dnd-disabled){background-color:#f5f5ff}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled{background-color:#e7e7e7;border:2px solid #e7e7e7}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled label{color:#777777}";var __namedExportsOrder=["ino_input_file"]}}]);
//# sourceMappingURL=6233.d8c109d0.iframe.bundle.js.map