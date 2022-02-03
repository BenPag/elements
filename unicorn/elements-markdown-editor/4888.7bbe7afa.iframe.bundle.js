/*! For license information please see 4888.7bbe7afa.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[4888],{"../elements/dist/esm/_commonjsHelpers-9943807e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-e8aa1b36.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-9943807e.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-icon.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_icon:()=>Icon});__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _index_07dfb941_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../elements/dist/esm/index-07dfb941.js"),_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__("../elements/dist/esm/_commonjsHelpers-9943807e.js"),__webpack_require__("../elements/dist/esm/index-e8aa1b36.js"));function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var CACHED_MAP,SvgParser=function(){function SvgParser(){_classCallCheck(this,SvgParser)}return _createClass(SvgParser,null,[{key:"setSvgTitle",value:function setSvgTitle(svgContent,title){var parsedSVG=this.parser.parseFromString(svgContent,"image/svg+xml"),titleTag=parsedSVG.querySelector("title");return titleTag&&(titleTag.innerHTML=title),this.serializer.serializeToString(parsedSVG)}},{key:"removeSvgTitle",value:function removeSvgTitle(svgContent){var parsedSVG=this.parser.parseFromString(svgContent,"image/svg+xml"),titleTag=parsedSVG.querySelector("title");return titleTag&&titleTag.remove(),this.serializer.serializeToString(parsedSVG)}}]),SvgParser}();SvgParser.parser=new DOMParser,SvgParser.serializer=new XMLSerializer;var getSrc=function getSrc(src){return isStr(src)&&(src=src.trim(),isSrc(src))?src:null};function getUrl(src,icon){var url=getSrc(src);return url||((url=function getName(name){if(name&&!isSrc(name))return name}(icon))?function getNamedUrl(name){var url=function getIconMap(){if(!CACHED_MAP){var win=window;win.inoIcons=win.inoIcons||{},CACHED_MAP=win.inoIcons.map=win.inoIcons.map||new Map}return CACHED_MAP}().get(name);if(url)return url;return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_11__.e)("./ino-icon/"+name+".svg")}(url):(url=getSrc(icon))||null)}var isSrc=function isSrc(str){return str.length>0&&/(\/|\.)/.test(str)},isStr=function isStr(val){return"string"==typeof val},isValid=function isValid(elm){if(1===elm.nodeType){if("script"===elm.nodeName.toLowerCase())return!1;for(var i=0;i<elm.attributes.length;i++){var val=elm.attributes[i].value;if(isStr(val)&&0===val.toLowerCase().indexOf("on"))return!1}for(var _i=0;_i<elm.childNodes.length;_i++)if(!isValid(elm.childNodes[_i]))return!1}return!0},inoiconContent=new Map,requests=new Map,getSvgContent=function getSvgContent(url){var req=requests.get(url);return void 0===req&&(req=fetch(url).then((function(rsp){if(rsp.ok)return rsp.text().then((function(svgContent){inoiconContent.set(url,function validateContent(svgContent){if(svgContent){var div=document.createElement("div");div.innerHTML=svgContent;for(var i=div.childNodes.length-1;i>=0;i--)"svg"!==div.childNodes[i].nodeName.toLowerCase()&&div.removeChild(div.childNodes[i]);var svgElm=div.firstElementChild;if(svgElm&&"svg"===svgElm.nodeName.toLowerCase()){var svgClass=svgElm.getAttribute("class")||"";if(svgElm.setAttribute("class",(svgClass+" s-ion-icon").trim()),isValid(svgElm))return div.innerHTML}}return""}(svgContent))}));inoiconContent.set(url,"")})),requests.set(url,req)),req},Icon=function(){function Icon(hostRef){_classCallCheck(this,Icon),(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_11__.r)(this,hostRef),this.clickEl=(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"clickEl",7)}return _createClass(Icon,[{key:"iconChanged",value:function iconChanged(){this.loadIcon()}},{key:"watchHandler",value:function watchHandler(content){content&&(this.svgContent=this.svgTitle?SvgParser.setSvgTitle(this.svgContent,this.svgTitle):SvgParser.removeSvgTitle(this.svgContent))}},{key:"componentWillLoad",value:function componentWillLoad(){this.loadIcon()}},{key:"loadIcon",value:function loadIcon(){var _this=this,url=getUrl(this.src,this.icon);url&&(inoiconContent.has(url)?this.svgContent=inoiconContent.get(url):getSvgContent(url).then((function(){return _this.svgContent=inoiconContent.get(url)})))}},{key:"handleClick",value:function handleClick(e){e.preventDefault(),this.clickEl.emit(!0)}},{key:"handleKeyPress",value:function handleKeyPress(e){"Enter"===e.code&&(e.preventDefault(),this.clickEl.emit(!0))}},{key:"render",value:function render(){var _this2=this;if(this.svgContent){var hostClasses=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_13__.c)({"ino-icon--color-scheme-primary":!this.colorSecondary,"ino-icon--color-scheme-secondary":this.colorSecondary}),iconProps={};return this.clickable&&(iconProps={onClick:function onClick(e){return _this2.handleClick(e)},onKeyPress:function onKeyPress(e){return _this2.handleKeyPress(e)},tabindex:0,role:"button"}),(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_11__.h)(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_11__.H,{class:hostClasses},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_11__.h)("i",Object.assign({innerHTML:this.svgContent},iconProps)))}}}],[{key:"watchers",get:function get(){return{icon:["iconChanged"],svgContent:["watchHandler"]}}}]),Icon}();Icon.style=":host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em)}:host(.ino-icon--color-scheme-primary){--icon-color:var(\n    --ino-icon-color-primary,\n    var(--ino-global-primary-color, #3d40f5)\n  )}:host(.ino-icon--color-scheme-secondary){--icon-color:var(\n    --ino-icon-color-secondary,\n    var(--ino-global-secondary-color, #9ccd00)\n  )}:host{display:inline-flex;flex-direction:column;justify-content:center}:host i{font-size:inherit;display:flex;flex-direction:row;justify-content:center;font-style:normal}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);fill:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}"},"../../node_modules/core-js/modules/es.global-this.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../node_modules/core-js/internals/export.js")({global:!0},{globalThis:__webpack_require__("../../node_modules/core-js/internals/global.js")})}}]);
//# sourceMappingURL=4888.7bbe7afa.iframe.bundle.js.map