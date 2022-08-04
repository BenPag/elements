import{r as f,c as v,h as a,H as m,a as p}from"./index.b0db46e4.js";import{c as C}from"./index-b7e5b0c5.07a60787.js";import"./_commonjsHelpers-212d567a.0ea80d68.js";/*!
 * Crafted with ❤ by inovex GmbH
 */class s{static setSvgTitle(e,n){const i=this.parser.parseFromString(e,"image/svg+xml"),c=i.querySelector("title");return c&&(c.innerHTML=n),this.serializer.serializeToString(i)}static removeSvgTitle(e){const n=this.parser.parseFromString(e,"image/svg+xml"),i=n.querySelector("title");return i&&i.remove(),this.serializer.serializeToString(n)}}s.parser=new DOMParser;s.serializer=new XMLSerializer;let r;const y={status_abwesend:"status_away",status_aktuelle:"status_current",status_offboarding_laufend:"offboarding_running",status_onboarding_laufend:"onboarding_running",status_vergangene:"status_past",status_zukuenftige:"status_future"};function w(){if(!r){const t=window;t.inoIcons=t.inoIcons||{},r=t.inoIcons.map=t.inoIcons.map||new Map}return r}const l=t=>u(t)&&(t=t.trim(),d(t))?t:null;function S(t){const e=y[t]||t;if(e&&!d(e))return e}function b(t,e){let n=l(t);return n||(n=S(e),n?_(n):l(e))}function _(t){var e;return(e=w().get(t))!==null&&e!==void 0?e:p(`./ino-icon/${t}.svg`)}const d=t=>t.length>0&&/(\/|\.)/.test(t),u=t=>typeof t=="string",T=t=>{if(t){const e=document.createElement("div");e.innerHTML=t;for(let i=e.childNodes.length-1;i>=0;i--)e.childNodes[i].nodeName.toLowerCase()!=="svg"&&e.removeChild(e.childNodes[i]);const n=e.firstElementChild;if(n&&n.nodeName.toLowerCase()==="svg"){const i=n.getAttribute("class")||"";if(n.setAttribute("class",(i+" s-ion-icon").trim()),g(n))return e.innerHTML}}return""},g=t=>{if(t.nodeType===1){if(t.nodeName.toLowerCase()==="script")return!1;for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].value;if(u(n)&&n.toLowerCase().indexOf("on")===0)return!1}for(let e=0;e<t.childNodes.length;e++)if(!g(t.childNodes[e]))return!1}return!0},o=new Map,h=new Map,k=t=>{let e=h.get(t);return e===void 0&&(e=fetch(t).then(n=>{if(n.ok)return n.text().then(i=>{o.set(t,T(i))});o.set(t,"")}),h.set(t,e)),e},I=`:host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em)}:host(.ino-icon--color-scheme-primary){--icon-color:var(
    --ino-icon-color-primary,
    var(--ino-global-primary-color, #3d40f5)
  )}:host(.ino-icon--color-scheme-secondary){--icon-color:var(
    --ino-icon-color-secondary,
    var(--ino-global-secondary-color, #9ccd00)
  )}:host{display:inline-flex;flex-direction:column;justify-content:center}:host i{font-size:inherit;display:flex;flex-direction:row;justify-content:center;font-style:normal}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);fill:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}`,N=class{constructor(t){f(this,t),this.clickEl=v(this,"clickEl",7)}iconChanged(){this.loadIcon()}watchHandler(t){t&&(this.svgContent=this.svgTitle?s.setSvgTitle(this.svgContent,this.svgTitle):s.removeSvgTitle(this.svgContent))}componentWillLoad(){this.loadIcon()}loadIcon(){const t=b(this.src,this.icon);t&&(o.has(t)?this.svgContent=o.get(t):k(t).then(()=>this.svgContent=o.get(t)))}handleClick(t){t.preventDefault(),this.clickEl.emit(!0)}handleKeyPress(t){t.code==="Enter"&&(t.preventDefault(),this.clickEl.emit(!0))}render(){if(!this.svgContent)return;const t=C({"ino-icon--color-scheme-primary":!this.colorSecondary,"ino-icon--color-scheme-secondary":this.colorSecondary});let e={};return this.clickable&&(e={onClick:n=>this.handleClick(n),onKeyPress:n=>this.handleKeyPress(n),tabindex:0,role:"button"}),a(m,{class:t},a("i",Object.assign({innerHTML:this.svgContent},e)))}static get watchers(){return{icon:["iconChanged"],svgContent:["watchHandler"]}}};N.style=I;export{N as ino_icon};
