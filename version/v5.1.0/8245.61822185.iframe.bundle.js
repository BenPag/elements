(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[8245],{68245:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_sidebar:()=>InoSidebar});__webpack_require__(52506),__webpack_require__(47256),__webpack_require__(26936),__webpack_require__(95094);var _r,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(79470),_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(12419),__webpack_require__(61383)),_component_55a0c58e_js__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__(48824),__webpack_require__(89161),__webpack_require__(25328),__webpack_require__(97092)),__extends=(__webpack_require__(6605),_r=function r(t,e){return(_r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])})(t,e)},function(t,e){function i(){this.constructor=t}_r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),MDCCustomDrawer=function(r){function t(t){var e=r.call(this,t)||this;return e.foundation.handleKeydown=function(){},e}return __extends(t,r),t}(_component_55a0c58e_js__WEBPACK_IMPORTED_MODULE_10__.M),InoSidebar=function(){function r(r){(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.r)(this,r),this.openChange=(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.c)(this,"openChange",7),this.alignRight=!1,this.open=!1}return r.prototype.openChanged=function(r){this.drawer&&(this.drawer.open=r,this.openChange.emit(r))},r.prototype.componentDidLoad=function(){this.drawer=new MDCCustomDrawer(this.el.shadowRoot.querySelector(".mdc-drawer")),this.drawer&&(this.drawer.open=this.open)},r.prototype.render=function(){var r=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_6__.c)({"mdc-drawer":!0,"mdc-drawer--modal":!0,"ino-sidebar--right":this.alignRight});return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.h)(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.H,{name:this.name,open:this.open},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.h)("aside",{class:r},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.h)("div",{class:"mdc-drawer__header"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot",{name:"header"})),(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.h)("div",{class:"mdc-drawer__content"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.h)("div",{tabindex:"0"}),(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot",{name:"content"}))),(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.h)("div",{class:"mdc-drawer-scrim"}))},Object.defineProperty(r.prototype,"el",{get:function get(){return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_4__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(r,"watchers",{get:function get(){return{open:["openChanged"]}},enumerable:!1,configurable:!0}),r}();InoSidebar.style='.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#3d40f5}.mdc-drawer .mdc-list-item--activated{color:rgba(61, 64, 245, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-list-item__text,.mdc-drawer .mdc-list-item__graphic{pointer-events:none}.mdc-drawer--animate{-webkit-transform:translateX(-100%);transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{-webkit-transform:translateX(100%);transform:translateX(100%)}.mdc-drawer--opening{-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition-duration:250ms;transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{-webkit-transform:translateX(0);transform:translateX(0)}.mdc-drawer--closing{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition-duration:200ms;transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{-webkit-transform:translateX(100%);transform:translateX(100%)}.mdc-drawer__header{-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:-ms-flexbox;display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{-webkit-box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:-ms-flexbox;display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{-webkit-transition-duration:250ms;transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{-webkit-transition-duration:200ms;transition-duration:200ms;opacity:0}:host{--sidebar-width:var(--ino-sidebar-width, 250px)}:host .mdc-drawer{height:100%;-webkit-box-shadow:0 8px 16px 0 rgba(61, 64, 245, 0.3), 0 16px 32px 0 rgba(61, 214, 245, 0.14);box-shadow:0 8px 16px 0 rgba(61, 64, 245, 0.3), 0 16px 32px 0 rgba(61, 214, 245, 0.14);width:var(--sidebar-width)}:host .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:var(--sidebar-width);margin-right:0}[dir=rtl] :host .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,:host .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:var(--sidebar-width)}:host .mdc-drawer.ino-sidebar--right{left:unset;right:0}:host .mdc-drawer.ino-sidebar--right.mdc-drawer--modal{right:0}:host .mdc-drawer.ino-sidebar--right.mdc-drawer--animate{-webkit-transform:translateX(100%);transform:translateX(100%)}:host .mdc-drawer.ino-sidebar--right.mdc-drawer--opening{-webkit-transform:translateX(0);transform:translateX(0)}:host .mdc-drawer.ino-sidebar--right.mdc-drawer--closing{-webkit-transform:translateX(100%);transform:translateX(100%)}:host .mdc-drawer-scrim{display:none}'}}]);
//# sourceMappingURL=8245.61822185.iframe.bundle.js.map