/*! For license information please see 52.a275c4dceeb9813acbca.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1429:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ino_tab_bar",(function(){return TabBar}));var horizontalScrollbarHeight_,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1438),_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1441),_ponyfill_b3c8879a_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1439),__awaiter=function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function s(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){t.done?n(t.value):o(t.value).then(a,s)}c((r=r.apply(t,e||[])).next())}))},__generator=function(t,e){var r,o,i,a,n={label:0,sent:function sent(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,o=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(!(i=n.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){n=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(6===a[0]&&n.label<i[1]){n.label=i[1],i=a;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(a);break}i[2]&&n.ops.pop(),n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s],o=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},cssClasses={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},strings={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"},MDCTabScrollerRTL=function t(t){this.adapter=t},MDCTabScrollerRTLDefault=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),e=this.calculateScrollEdges_().right;return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges_(),n=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue_(e.right-t);return{finalScrollPosition:r,scrollDelta:r-n}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)},e}(MDCTabScrollerRTL),MDCTabScrollerRTLNegative=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(t-e)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue_(-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.getAnimatingScrollPosition=function(t,e){return t-e},e.prototype.calculateScrollEdges_=function(){var t=this.adapter.getScrollContentOffsetWidth();return{left:this.adapter.getScrollAreaOffsetWidth()-t,right:0}},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.max(Math.min(e.right,t),e.left)},e}(MDCTabScrollerRTL),MDCTabScrollerRTLReverse=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue_(t);return{finalScrollPosition:n,scrollDelta:e-n}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e+t);return{finalScrollPosition:n,scrollDelta:e-n}},e.prototype.getAnimatingScrollPosition=function(t,e){return t+e},e.prototype.calculateScrollEdges_=function(){return{left:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth(),right:0}},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.right,t),e.left)},e}(MDCTabScrollerRTL),MDCTabScrollerFoundation=function(t){function e(n){var r=t.call(this,Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)(Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)({},e.defaultAdapter),n))||this;return r.isAnimating_=!1,r}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),Object.defineProperty(e,"cssClasses",{get:function get(){return cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function get(){return strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function get(){return{eventTargetMatchesSelector:function eventTargetMatchesSelector(){return!1},addClass:function addClass(){},removeClass:function removeClass(){},addScrollAreaClass:function addScrollAreaClass(){},setScrollAreaStyleProperty:function setScrollAreaStyleProperty(){},setScrollContentStyleProperty:function setScrollContentStyleProperty(){},getScrollContentStyleValue:function getScrollContentStyleValue(){return""},setScrollAreaScrollLeft:function setScrollAreaScrollLeft(){},getScrollAreaScrollLeft:function getScrollAreaScrollLeft(){return 0},getScrollContentOffsetWidth:function getScrollContentOffsetWidth(){return 0},getScrollAreaOffsetWidth:function getScrollAreaOffsetWidth(){return 0},computeScrollAreaClientRect:function computeScrollAreaClientRect(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function computeScrollContentClientRect(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function computeHorizontalScrollbarHeight(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();var t=this.calculateCurrentTranslateX_();return this.adapter.getScrollAreaScrollLeft()-t},e.prototype.handleInteraction=function(){this.isAnimating_&&this.stopScrollAnimation_()},e.prototype.handleTransitionEnd=function(t){var n=t.target;this.isAnimating_&&this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate_(this.getIncrementScrollOperation_(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var e=this.getIncrementScrollOperation_(t);0!==e.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_},e.prototype.calculateCurrentTranslateX_=function(){var t=this.adapter.getScrollContentStyleValue("transform");if("none"===t)return 0;var e=/\((.+?)\)/.exec(t);if(!e)return 0;var n=e[1],o=Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.g)(n.split(","),6)[4];return parseFloat(o)},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)},e.prototype.computeCurrentScrollPositionRTL_=function(){var t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.scrollTo_=function(t){var e=this.getScrollPosition(),n=this.clampScrollValue_(t),r=n-e;this.animate_({finalScrollPosition:n,scrollDelta:r})},e.prototype.scrollToRTL_=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate_(e)},e.prototype.getIncrementScrollOperation_=function(t){if(this.isRTL_())return this.getRTLScroller().incrementScrollRTL(t);var e=this.getScrollPosition(),n=t+e,r=this.clampScrollValue_(n);return{finalScrollPosition:r,scrollDelta:r-e}},e.prototype.animate_=function(t){var n=this;0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame((function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")})),this.isAnimating_=!0)},e.prototype.stopScrollAnimation_=function(){this.isAnimating_=!1;var t=this.getAnimatingScrollPosition_();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition_=function(){var t=this.calculateCurrentTranslateX_(),e=this.adapter.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t},e.prototype.rtlScrollerFactory_=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var e=this.adapter.getScrollAreaScrollLeft();if(e<0)return this.adapter.setScrollAreaScrollLeft(t),new MDCTabScrollerRTLNegative(this.adapter);var n=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),o=Math.round(r.right-n.right);return this.adapter.setScrollAreaScrollLeft(t),o===e?new MDCTabScrollerRTLReverse(this.adapter):new MDCTabScrollerRTLDefault(this.adapter)},e.prototype.isRTL_=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.a);var MDCTabScroller=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area_=this.root.querySelector(MDCTabScrollerFoundation.strings.AREA_SELECTOR),this.content_=this.root.querySelector(MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction_=function(){return t.foundation.handleInteraction()},this.handleTransitionEnd_=function(e){return t.foundation.handleTransitionEnd(e)},this.area_.addEventListener("wheel",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.area_.addEventListener("touchstart",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.area_.addEventListener("pointerdown",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.area_.addEventListener("mousedown",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.area_.addEventListener("keydown",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.content_.addEventListener("transitionend",this.handleTransitionEnd_)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.area_.removeEventListener("wheel",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.area_.removeEventListener("touchstart",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.area_.removeEventListener("pointerdown",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.area_.removeEventListener("mousedown",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.area_.removeEventListener("keydown",this.handleInteraction_,Object(_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.c)()),this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)},e.prototype.getDefaultFoundation=function(){var t=this;return new MDCTabScrollerFoundation({eventTargetMatchesSelector:function eventTargetMatchesSelector(t,e){return Object(_ponyfill_b3c8879a_js__WEBPACK_IMPORTED_MODULE_3__.c)(t,e)},addClass:function addClass(e){return t.root.classList.add(e)},removeClass:function removeClass(e){return t.root.classList.remove(e)},addScrollAreaClass:function addScrollAreaClass(e){return t.area_.classList.add(e)},setScrollAreaStyleProperty:function setScrollAreaStyleProperty(e,n){return t.area_.style.setProperty(e,n)},setScrollContentStyleProperty:function setScrollContentStyleProperty(e,n){return t.content_.style.setProperty(e,n)},getScrollContentStyleValue:function getScrollContentStyleValue(e){return window.getComputedStyle(t.content_).getPropertyValue(e)},setScrollAreaScrollLeft:function setScrollAreaScrollLeft(e){return t.area_.scrollLeft=e},getScrollAreaScrollLeft:function getScrollAreaScrollLeft(){return t.area_.scrollLeft},getScrollContentOffsetWidth:function getScrollContentOffsetWidth(){return t.content_.offsetWidth},getScrollAreaOffsetWidth:function getScrollAreaOffsetWidth(){return t.area_.offsetWidth},computeScrollAreaClientRect:function computeScrollAreaClientRect(){return t.area_.getBoundingClientRect()},computeScrollContentClientRect:function computeScrollContentClientRect(){return t.content_.getBoundingClientRect()},computeHorizontalScrollbarHeight:function computeHorizontalScrollbarHeight(){return function _computeHorizontalScrollbarHeight(t,e){if(void 0===e&&(e=!0),e&&void 0!==horizontalScrollbarHeight_)return horizontalScrollbarHeight_;var n=t.createElement("div");n.classList.add(cssClasses.SCROLL_TEST),t.body.appendChild(n);var r=n.offsetHeight-n.clientHeight;return t.body.removeChild(n),e&&(horizontalScrollbarHeight_=r),r}(document)}})},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content_.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.d),cssClasses$1={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},strings$1={CONTENT_SELECTOR:".mdc-tab-indicator__content"},MDCTabIndicatorFoundation=function(t){function e(n){return t.call(this,Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)(Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)({},e.defaultAdapter),n))||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),Object.defineProperty(e,"cssClasses",{get:function get(){return cssClasses$1},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function get(){return strings$1},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},computeContentClientRect:function computeContentClientRect(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function setContentStyleProperty(){}}},enumerable:!0,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.a),MDCFadingTabIndicatorFoundation=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),e.prototype.activate=function(){this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE)},e}(MDCTabIndicatorFoundation),MDCSlidingTabIndicatorFoundation=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),e.prototype.activate=function(t){if(t){var e=this.computeContentClientRect(),n=t.width/e.width,r=t.left-e.left;this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION),this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")}else this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE)},e}(MDCTabIndicatorFoundation),MDCTabIndicator=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content_=this.root.querySelector(MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function addClass(e){return t.root.classList.add(e)},removeClass:function removeClass(e){return t.root.classList.remove(e)},computeContentClientRect:function computeContentClientRect(){return t.content_.getBoundingClientRect()},setContentStyleProperty:function setContentStyleProperty(e,n){return t.content_.style.setProperty(e,n)}};return this.root.classList.contains(MDCTabIndicatorFoundation.cssClasses.FADE)?new MDCFadingTabIndicatorFoundation(e):new MDCSlidingTabIndicatorFoundation(e)},e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.d),cssClasses$2={ACTIVE:"mdc-tab--active"},strings$2={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"},MDCTabFoundation=function(t){function e(n){var r=t.call(this,Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)(Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)({},e.defaultAdapter),n))||this;return r.focusOnActivate_=!0,r}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),Object.defineProperty(e,"cssClasses",{get:function get(){return cssClasses$2},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function get(){return strings$2},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},hasClass:function hasClass(){return!1},setAttr:function setAttr(){},activateIndicator:function activateIndicator(){},deactivateIndicator:function deactivateIndicator(){},notifyInteracted:function notifyInteracted(){},getOffsetLeft:function getOffsetLeft(){return 0},getOffsetWidth:function getOffsetWidth(){return 0},getContentOffsetLeft:function getContentOffsetLeft(){return 0},getContentOffsetWidth:function getContentOffsetWidth(){return 0},focus:function focus(){}}},enumerable:!0,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(cssClasses$2.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate_=t},e.prototype.activate=function(t){this.adapter.addClass(cssClasses$2.ACTIVE),this.adapter.setAttr(strings$2.ARIA_SELECTED,"true"),this.adapter.setAttr(strings$2.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate_&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(cssClasses$2.ACTIVE),this.adapter.setAttr(strings$2.ARIA_SELECTED,"false"),this.adapter.setAttr(strings$2.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),e=this.adapter.getOffsetLeft(),n=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:e+r,contentRight:e+r+n,rootLeft:e,rootRight:e+t}},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.a),MDCTab=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e){void 0===t&&(t=function t(_t,e){return new _component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.a(_t,e)}),void 0===e&&(e=function e(t){return new MDCTabIndicator(t)}),this.id=this.root.id;var n=this.root.querySelector(MDCTabFoundation.strings.RIPPLE_SELECTOR),r=Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)(Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)({},_component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.a.createAdapter(this)),{addClass:function addClass(t){return n.classList.add(t)},removeClass:function removeClass(t){return n.classList.remove(t)},updateCssVariable:function updateCssVariable(t,e){return n.style.setProperty(t,e)}}),o=new _component_873f6020_js__WEBPACK_IMPORTED_MODULE_2__.b(r);this.ripple_=t(this.root,o);var i=this.root.querySelector(MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator_=e(i),this.content_=this.root.querySelector(MDCTabFoundation.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick_=function(){return t.foundation.handleClick()},this.listen("click",this.handleClick_)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this;return new MDCTabFoundation({setAttr:function setAttr(e,n){return t.root.setAttribute(e,n)},addClass:function addClass(e){return t.root.classList.add(e)},removeClass:function removeClass(e){return t.root.classList.remove(e)},hasClass:function hasClass(e){return t.root.classList.contains(e)},activateIndicator:function activateIndicator(e){return t.tabIndicator_.activate(e)},deactivateIndicator:function deactivateIndicator(){return t.tabIndicator_.deactivate()},notifyInteracted:function notifyInteracted(){return t.emit(MDCTabFoundation.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function getOffsetLeft(){return t.root.offsetLeft},getOffsetWidth:function getOffsetWidth(){return t.root.offsetWidth},getContentOffsetLeft:function getContentOffsetLeft(){return t.content_.offsetLeft},getContentOffsetWidth:function getContentOffsetWidth(){return t.content_.offsetWidth},focus:function focus(){return t.root.focus()}})},Object.defineProperty(e.prototype,"active",{get:function get(){return this.foundation.isActive()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function set(t){this.foundation.setFocusOnActivate(t)},enumerable:!0,configurable:!0}),e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator_.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},e.prototype.focus=function(){this.root.focus()},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.d),strings$3={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},numbers={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32},ACCEPTABLE_KEYS=new Set;ACCEPTABLE_KEYS.add(strings$3.ARROW_LEFT_KEY),ACCEPTABLE_KEYS.add(strings$3.ARROW_RIGHT_KEY),ACCEPTABLE_KEYS.add(strings$3.END_KEY),ACCEPTABLE_KEYS.add(strings$3.HOME_KEY),ACCEPTABLE_KEYS.add(strings$3.ENTER_KEY),ACCEPTABLE_KEYS.add(strings$3.SPACE_KEY);var KEYCODE_MAP=new Map;KEYCODE_MAP.set(numbers.ARROW_LEFT_KEYCODE,strings$3.ARROW_LEFT_KEY),KEYCODE_MAP.set(numbers.ARROW_RIGHT_KEYCODE,strings$3.ARROW_RIGHT_KEY),KEYCODE_MAP.set(numbers.END_KEYCODE,strings$3.END_KEY),KEYCODE_MAP.set(numbers.HOME_KEYCODE,strings$3.HOME_KEY),KEYCODE_MAP.set(numbers.ENTER_KEYCODE,strings$3.ENTER_KEY),KEYCODE_MAP.set(numbers.SPACE_KEYCODE,strings$3.SPACE_KEY);var MDCTabBarFoundation=function(t){function e(n){var r=t.call(this,Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)(Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.c)({},e.defaultAdapter),n))||this;return r.useAutomaticActivation_=!1,r}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),Object.defineProperty(e,"strings",{get:function get(){return strings$3},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function get(){return numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function get(){return{scrollTo:function scrollTo(){},incrementScroll:function incrementScroll(){},getScrollPosition:function getScrollPosition(){return 0},getScrollContentWidth:function getScrollContentWidth(){return 0},getOffsetWidth:function getOffsetWidth(){return 0},isRTL:function isRTL(){return!1},setActiveTab:function setActiveTab(){},activateTabAtIndex:function activateTabAtIndex(){},deactivateTabAtIndex:function deactivateTabAtIndex(){},focusTabAtIndex:function focusTabAtIndex(){},getTabIndicatorClientRectAtIndex:function getTabIndicatorClientRectAtIndex(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function getTabDimensionsAtIndex(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function getPreviousActiveTabIndex(){return-1},getFocusedTabIndex:function getFocusedTabIndex(){return-1},getIndexOfTabById:function getIndexOfTabById(){return-1},getTabListLength:function getTabListLength(){return 0},notifyTabActivated:function notifyTabActivated(){}}},enumerable:!0,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation_=t},e.prototype.activateTab=function(t){var n,e=this.adapter.getPreviousActiveTabIndex();this.indexIsInRange_(t)&&t!==e&&(-1!==e&&(this.adapter.deactivateTabAtIndex(e),n=this.adapter.getTabIndicatorClientRectAtIndex(e)),this.adapter.activateTabAtIndex(t,n),this.scrollIntoView(t),this.adapter.notifyTabActivated(t))},e.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent_(t);if(void 0!==e)if(this.isActivationKey_(e)||t.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(e))return;var n=this.determineTargetFromKey_(this.adapter.getPreviousActiveTabIndex(),e);this.adapter.setActiveTab(n),this.scrollIntoView(n)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey_(e))this.adapter.setActiveTab(r);else{n=this.determineTargetFromKey_(r,e);this.adapter.focusTabAtIndex(n),this.scrollIntoView(n)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange_(t))return 0===t?this.adapter.scrollTo(0):t===this.adapter.getTabListLength()-1?this.adapter.scrollTo(this.adapter.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(t):void this.scrollIntoView_(t)},e.prototype.determineTargetFromKey_=function(t,e){var n=this.isRTL_(),r=this.adapter.getTabListLength()-1,s=t;return e===strings$3.END_KEY?s=r:e===strings$3.ARROW_LEFT_KEY&&!n||e===strings$3.ARROW_RIGHT_KEY&&n?s-=1:e===strings$3.ARROW_RIGHT_KEY&&!n||e===strings$3.ARROW_LEFT_KEY&&n?s+=1:s=0,s<0?s=r:s>r&&(s=0),s},e.prototype.calculateScrollIncrement_=function(t,e,n,r){var o=this.adapter.getTabDimensionsAtIndex(e),i=o.contentLeft-n-r,s=o.contentRight-n-numbers.EXTRA_SCROLL_AMOUNT,c=i+numbers.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(s,0):Math.max(c,0)},e.prototype.calculateScrollIncrementRTL_=function(t,e,n,r,o){var i=this.adapter.getTabDimensionsAtIndex(e),a=o-i.contentLeft-n,c=o-i.contentRight-n-r+numbers.EXTRA_SCROLL_AMOUNT,l=a-numbers.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(c,0):Math.min(l,0)},e.prototype.findAdjacentTabIndexClosestToEdge_=function(t,e,n,r){var o=e.rootLeft-n,i=e.rootRight-n-r,a=o+i;return o<0||a<0?t-1:i>0||a>0?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL_=function(t,e,n,r,o){var i=o-e.rootLeft-r-n,a=o-e.rootRight-n,s=i+a;return i>0||s>0?t+1:a<0||s<0?t-1:-1},e.prototype.getKeyFromEvent_=function(t){return ACCEPTABLE_KEYS.has(t.key)?t.key:KEYCODE_MAP.get(t.keyCode)},e.prototype.isActivationKey_=function(t){return t===strings$3.SPACE_KEY||t===strings$3.ENTER_KEY},e.prototype.indexIsInRange_=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL_=function(){return this.adapter.isRTL()},e.prototype.scrollIntoView_=function(t){var e=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.findAdjacentTabIndexClosestToEdge_(t,r,e,n);if(this.indexIsInRange_(o)){var i=this.calculateScrollIncrement_(t,o,e,n);this.adapter.incrementScroll(i)}},e.prototype.scrollIntoViewRTL_=function(t){var e=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.adapter.getScrollContentWidth(),i=this.findAdjacentTabIndexClosestToEdgeRTL_(t,r,e,n,o);if(this.indexIsInRange_(i)){var a=this.calculateScrollIncrementRTL_(t,i,e,n,o);this.adapter.incrementScroll(a)}},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.a),strings$4=MDCTabBarFoundation.strings,tabIdCounter=0,MDCTabBar=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function set(t){this.tabList_.forEach((function(e){return e.focusOnActivate=t}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function set(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!0,configurable:!0}),e.prototype.initialize=function(t,e){void 0===t&&(t=function t(_t2){return new MDCTab(_t2)}),void 0===e&&(e=function e(t){return new MDCTabScroller(t)}),this.tabList_=this.instantiateTabs_(t),this.tabScroller_=this.instantiateTabScroller_(e)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction_=function(e){return t.foundation.handleTabInteraction(e)},this.handleKeyDown_=function(e){return t.foundation.handleKeyDown(e)},this.listen(MDCTabFoundation.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.listen("keydown",this.handleKeyDown_);for(var e=0;e<this.tabList_.length;e++)if(this.tabList_[e].active){this.scrollIntoView(e);break}},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.unlisten(MDCTabFoundation.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.unlisten("keydown",this.handleKeyDown_),this.tabList_.forEach((function(t){return t.destroy()})),this.tabScroller_&&this.tabScroller_.destroy()},e.prototype.getDefaultFoundation=function(){var t=this;return new MDCTabBarFoundation({scrollTo:function scrollTo(e){return t.tabScroller_.scrollTo(e)},incrementScroll:function incrementScroll(e){return t.tabScroller_.incrementScroll(e)},getScrollPosition:function getScrollPosition(){return t.tabScroller_.getScrollPosition()},getScrollContentWidth:function getScrollContentWidth(){return t.tabScroller_.getScrollContentWidth()},getOffsetWidth:function getOffsetWidth(){return t.root.offsetWidth},isRTL:function isRTL(){return"rtl"===window.getComputedStyle(t.root).getPropertyValue("direction")},setActiveTab:function setActiveTab(e){return t.foundation.activateTab(e)},activateTabAtIndex:function activateTabAtIndex(e,n){return t.tabList_[e].activate(n)},deactivateTabAtIndex:function deactivateTabAtIndex(e){return t.tabList_[e].deactivate()},focusTabAtIndex:function focusTabAtIndex(e){return t.tabList_[e].focus()},getTabIndicatorClientRectAtIndex:function getTabIndicatorClientRectAtIndex(e){return t.tabList_[e].computeIndicatorClientRect()},getTabDimensionsAtIndex:function getTabDimensionsAtIndex(e){return t.tabList_[e].computeDimensions()},getPreviousActiveTabIndex:function getPreviousActiveTabIndex(){for(var e=0;e<t.tabList_.length;e++)if(t.tabList_[e].active)return e;return-1},getFocusedTabIndex:function getFocusedTabIndex(){var e=t.getTabElements_(),n=document.activeElement;return e.indexOf(n)},getIndexOfTabById:function getIndexOfTabById(e){for(var n=0;n<t.tabList_.length;n++)if(t.tabList_[n].id===e)return n;return-1},getTabListLength:function getTabListLength(){return t.tabList_.length},notifyTabActivated:function notifyTabActivated(e){return t.emit(strings$4.TAB_ACTIVATED_EVENT,{index:e},!0)}})},e.prototype.activateTab=function(t){this.foundation.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},e.prototype.getTabElements_=function(){return[].slice.call(this.root.querySelectorAll(strings$4.TAB_SELECTOR))},e.prototype.instantiateTabs_=function(t){return this.getTabElements_().map((function(e){return e.id=e.id||"mdc-tab-"+ ++tabIdCounter,t(e)}))},e.prototype.instantiateTabScroller_=function(t){var e=this.root.querySelector(strings$4.TAB_SCROLLER_SELECTOR);return e?t(e):null},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_1__.d),TabBar=function(){function t(t){Object(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.j)(this,t),this.activeTabChange=Object(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"activeTabChange",7),this.inoActiveTab=0}return t.prototype.activeTabChangedWatcher=function(t){this.mdcInstance&&this.mdcInstance.activateTab(t)},t.prototype.componentDidLoad=function(){this.mdcInstance=new MDCTabBar(this.el.querySelector(".mdc-tab-bar")),this.mdcInstance.activateTab(this.inoActiveTab)},t.prototype.disconnectedCallback=function(){var t;null===(t=this.mdcInstance)||void 0===t||t.destroy()},t.prototype.interactionHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:return t.stopPropagation(),[4,Promise.all(Array.from(this.el.querySelectorAll("ino-tab")))];case 1:return e=r.sent(),n=e.indexOf(t.detail),this.activeTabChange.emit(n),[2]}}))}))},t.prototype.render=function(){return Object(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.b,null,Object(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-tab-bar",role:"tablist"},Object(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-tab-scroller"},Object(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-tab-scroller__scroll-area"},Object(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-tab-scroller__scroll-content"},Object(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))))},Object.defineProperty(t.prototype,"el",{get:function get(){return Object(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function get(){return{inoActiveTab:["activeTabChangedWatcher"]}},enumerable:!1,configurable:!0}),t}();TabBar.style=".mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{-webkit-transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-transform:none;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{-ms-flex-pack:start;justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{-ms-flex-pack:end;justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{-ms-flex-pack:center;justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}"}}]);
//# sourceMappingURL=52.a275c4dceeb9813acbca.bundle.js.map