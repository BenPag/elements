"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[7702],{7933:function(t,e,n){n.d(e,{a:function(){return i},c:function(){return r}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function r(t,e,n){return n={path:e,exports:{},require:function(t,e){return o()}},t(n,n.exports),n.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},9586:function(t,e,n){n.d(e,{M:function(){return R},a:function(){return T},b:function(){return x}});var i=n(601),r=n(4145),o=n(822),a=n(3036),s={ROOT:"mdc-text-field-character-counter"},u={ROOT_SELECTOR:"."+s.ROOT},l=function(t){function e(n){return t.call(this,(0,i.a)((0,i.a)({},e.defaultAdapter),n))||this}return(0,i._)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return u},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter.setContent(t+" / "+e)},e}(i.M),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i._)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={setContent:function(e){t.root.textContent=e}};return new l(e)},e}(i.c),d={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},p={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},h={LABEL_SCALE:.75},f=["pattern","min","max","required","step","minlength","maxlength"],g=["color","date","datetime-local","month","range","time","week"],b=["mousedown","touchstart"],y=["click","keydown"],I=function(t){function e(n,r){void 0===r&&(r={});var o=t.call(this,(0,i.a)((0,i.a)({},e.defaultAdapter),n))||this;return o.isFocused=!1,o.receivedUserInput=!1,o.valid=!0,o.useNativeValidation=!0,o.validateOnValueChange=!0,o.helperText=r.helperText,o.characterCounter=r.characterCounter,o.leadingIcon=r.leadingIcon,o.trailingIcon=r.trailingIcon,o.inputFocusHandler=function(){o.activateFocus()},o.inputBlurHandler=function(){o.deactivateFocus()},o.inputInputHandler=function(){o.handleInput()},o.setPointerXOffset=function(t){o.setTransformOrigin(t)},o.textFieldInteractionHandler=function(){o.handleTextFieldInteraction()},o.validationAttributeChangeHandler=function(t){o.handleValidationAttributeChange(t)},o}return(0,i._)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return g.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,e,n,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=(0,i.b)(b),a=o.next();!a.done;a=o.next()){var s=a.value;this.adapter.registerInputInteractionHandler(s,this.setPointerXOffset)}}catch(c){t={error:c}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}try{for(var u=(0,i.b)(y),l=u.next();!l.done;l=u.next()){s=l.value;this.adapter.registerTextFieldInteractionHandler(s,this.textFieldInteractionHandler)}}catch(d){n={error:d}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,e,n,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=(0,i.b)(b),a=o.next();!a.done;a=o.next()){var s=a.value;this.adapter.deregisterInputInteractionHandler(s,this.setPointerXOffset)}}catch(c){t={error:c}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}try{for(var u=(0,i.b)(y),l=u.next();!l.done;l=u.next()){s=l.value;this.adapter.deregisterTextFieldInteractionHandler(s,this.textFieldInteractionHandler)}}catch(d){n={error:d}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var e=this;t.some((function(t){return f.indexOf(t)>-1&&(e.styleValidity(!0),e.adapter.setLabelRequired(e.getNativeInput().required),!0)})),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(t){var e=this.adapter.getLabelWidth()*h.LABEL_SCALE;this.adapter.notchOutline(e)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText||!this.helperText.isPersistent()&&this.helperText.isValidation()&&this.valid||this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!this.isDisabled()&&!this.adapter.hasOutline()){var e=t.touches,n=e?e[0]:t,i=n.target.getBoundingClientRect(),r=n.clientX-i.left;this.adapter.setLineRippleTransformOrigin(r)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var e=this.isValid();this.styleValidity(e)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var e=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(e)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var e=this.getNativeInput().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,e)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){this.helperText.setValidity(t);var i=this.helperText.isValidation();if(!i)return;var r=this.helperText.isVisible(),o=this.helperText.getId();r&&o?this.adapter.setInputAttr(d.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(d.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(r)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(i.M),v={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},L={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+v.ROOT},O=function(t){function e(n){return t.call(this,(0,i.a)((0,i.a)({},e.defaultAdapter),n))||this}return(0,i._)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return v},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return L},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return"true"!==this.adapter.getAttr(L.ARIA_HIDDEN)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(v.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(v.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(v.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(v.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(v.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(v.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(L.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var e=this.adapter.hasClass(v.HELPER_TEXT_PERSISTENT),n=this.adapter.hasClass(v.HELPER_TEXT_VALIDATION_MSG),i=n&&!t;i?(this.showToScreenReader(),"alert"===this.adapter.getAttr(L.ROLE)?this.refreshAlertRole():this.adapter.setAttr(L.ROLE,"alert")):this.adapter.removeAttr(L.ROLE),e||i||this.hide()},e.prototype.hide=function(){this.adapter.setAttr(L.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(L.ROLE),requestAnimationFrame((function(){t.adapter.setAttr(L.ROLE,"alert")}))},e}(i.M),T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i._)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},getAttr:function(e){return t.root.getAttribute(e)},setAttr:function(e,n){return t.root.setAttribute(e,n)},removeAttr:function(e){return t.root.removeAttribute(e)},setContent:function(e){t.root.textContent=e}};return new O(e)},e}(i.c),E={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},C={ROOT:"mdc-text-field__icon"},m=["click","keydown"],A=function(t){function e(n){var r=t.call(this,(0,i.a)((0,i.a)({},e.defaultAdapter),n))||this;return r.savedTabIndex=null,r.interactionHandler=function(t){r.handleInteraction(t)},r}return(0,i._)(e,t),Object.defineProperty(e,"strings",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,e;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var n=(0,i.b)(m),r=n.next();!r.done;r=n.next()){var o=r.value;this.adapter.registerInteractionHandler(o,this.interactionHandler)}}catch(a){t={error:a}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,e;try{for(var n=(0,i.b)(m),r=n.next();!r.done;r=n.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.interactionHandler)}}catch(a){t={error:a}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",E.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var e="Enter"===t.key||13===t.keyCode;("click"===t.type||e)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(i.M),x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i._)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={getAttr:function(e){return t.root.getAttribute(e)},setAttr:function(e,n){return t.root.setAttribute(e,n)},removeAttr:function(e){return t.root.removeAttribute(e)},setContent:function(e){t.root.textContent=e},registerInteractionHandler:function(e,n){return t.listen(e,n)},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n)},notifyIconAction:function(){return t.emit(A.strings.ICON_EVENT,{},!0)}};return new A(e)},e}(i.c),R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i._)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e,n,i,o,s,u){void 0===t&&(t=function(t,e){return new r.M(t,e)}),void 0===e&&(e=function(t){return new a.a(t)}),void 0===n&&(n=function(t){return new T(t)}),void 0===i&&(i=function(t){return new c(t)}),void 0===o&&(o=function(t){return new x(t)}),void 0===s&&(s=function(t){return new a.M(t)}),void 0===u&&(u=function(t){return new a.b(t)}),this.input=this.root.querySelector(d.INPUT_SELECTOR);var h=this.root.querySelector(d.LABEL_SELECTOR);this.label=h?s(h):null;var f=this.root.querySelector(d.LINE_RIPPLE_SELECTOR);this.lineRipple=f?e(f):null;var g=this.root.querySelector(d.OUTLINE_SELECTOR);this.outline=g?u(g):null;var b=O.strings,y=this.root.nextElementSibling,I=y&&y.classList.contains(p.HELPER_LINE),v=I&&y&&y.querySelector(b.ROOT_SELECTOR);this.helperText=v?n(v):null;var L=l.strings,E=this.root.querySelector(L.ROOT_SELECTOR);!E&&I&&y&&(E=y.querySelector(L.ROOT_SELECTOR)),this.characterCounter=E?i(E):null;var C=this.root.querySelector(d.LEADING_ICON_SELECTOR);this.leadingIcon=C?o(C):null;var m=this.root.querySelector(d.TRAILING_ICON_SELECTOR);this.trailingIcon=m?o(m):null,this.prefix=this.root.querySelector(d.PREFIX_SELECTOR),this.suffix=this.root.querySelector(d.SUFFIX_SELECTOR),this.ripple=this.createRipple(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple&&this.lineRipple.destroy(),this.helperText&&this.helperText.destroy(),this.characterCounter&&this.characterCounter.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.trailingIcon&&this.trailingIcon.destroy(),this.label&&this.label.destroy(),this.outline&&this.outline.destroy(),t.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.isDisabled()},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input.required},set:function(t){this.input.required=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input.pattern},set:function(t){this.input.pattern=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input.minLength},set:function(t){this.input.minLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input.maxLength},set:function(t){t<0?this.input.removeAttribute("maxLength"):this.input.maxLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input.min},set:function(t){this.input.min=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input.max},set:function(t){this.input.max=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input.step},set:function(t){this.input.step=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation.setTrailingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation.setTrailingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation.setUseNativeValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"prefixText",{get:function(){return this.prefix?this.prefix.textContent:null},set:function(t){this.prefix&&(this.prefix.textContent=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"suffixText",{get:function(){return this.suffix?this.suffix.textContent:null},set:function(t){this.suffix&&(this.suffix.textContent=t)},enumerable:!1,configurable:!0}),e.prototype.focus=function(){this.input.focus()},e.prototype.layout=function(){var t=this.foundation.shouldFloat;this.foundation.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=(0,i.a)((0,i.a)((0,i.a)((0,i.a)((0,i.a)({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods());return new I(t,this.getFoundationMap())},e.prototype.getRootAdapterMethods=function(){var t=this;return{addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},registerTextFieldInteractionHandler:function(e,n){t.listen(e,n)},deregisterTextFieldInteractionHandler:function(e,n){t.unlisten(e,n)},registerValidationAttributeChangeHandler:function(e){var n=function(t){return t.map((function(t){return t.attributeName})).filter((function(t){return t}))},i=new MutationObserver((function(t){return e(n(t))})),r={attributes:!0};return i.observe(t.input,r),i},deregisterValidationAttributeChangeHandler:function(t){t.disconnect()}}},e.prototype.getInputAdapterMethods=function(){var t=this;return{getNativeInput:function(){return t.input},setInputAttr:function(e,n){t.input.setAttribute(e,n)},removeInputAttr:function(e){t.input.removeAttribute(e)},isFocused:function(){return document.activeElement===t.input},registerInputInteractionHandler:function(e,n){t.input.addEventListener(e,n,(0,r.a)())},deregisterInputInteractionHandler:function(e,n){t.input.removeEventListener(e,n,(0,r.a)())}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{floatLabel:function(e){t.label&&t.label.float(e)},getLabelWidth:function(){return t.label?t.label.getWidth():0},hasLabel:function(){return Boolean(t.label)},shakeLabel:function(e){t.label&&t.label.shake(e)},setLabelRequired:function(e){t.label&&t.label.setRequired(e)}}},e.prototype.getLineRippleAdapterMethods=function(){var t=this;return{activateLineRipple:function(){t.lineRipple&&t.lineRipple.activate()},deactivateLineRipple:function(){t.lineRipple&&t.lineRipple.deactivate()},setLineRippleTransformOrigin:function(e){t.lineRipple&&t.lineRipple.setRippleCenter(e)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{closeOutline:function(){t.outline&&t.outline.closeNotch()},hasOutline:function(){return Boolean(t.outline)},notchOutline:function(e){t.outline&&t.outline.notch(e)}}},e.prototype.getFoundationMap=function(){return{characterCounter:this.characterCounter?this.characterCounter.foundationForTextField:void 0,helperText:this.helperText?this.helperText.foundationForTextField:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForTextField:void 0,trailingIcon:this.trailingIcon?this.trailingIcon.foundationForTextField:void 0}},e.prototype.createRipple=function(t){var e=this,n=this.root.classList.contains(p.TEXTAREA),a=this.root.classList.contains(p.OUTLINED);if(n||a)return null;var s=(0,i.a)((0,i.a)({},r.M.createAdapter(this)),{isSurfaceActive:function(){return(0,o.m)(e.input,":active")},registerInteractionHandler:function(t,n){e.input.addEventListener(t,n,(0,r.a)())},deregisterInteractionHandler:function(t,n){e.input.removeEventListener(t,n,(0,r.a)())}});return t(this.root,new r.b(s))},e}(i.c)},9790:function(t,e,n){n.d(e,{c:function(){return r}});var i=n(7933),r=(0,i.c)((function(t){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var e={}.hasOwnProperty;function n(){for(var t=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var a=n.apply(null,r);a&&t.push(a)}else if("object"===o)for(var s in r)e.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}));
/*!
 * Crafted with ❤ by inovex GmbH
 */}}]);
//# sourceMappingURL=7702.9c904a68.js.map