import{r as d,c,h as s,H as l,g as h}from"./index.c4fd3317.js";import{c as u}from"./index-b7e5b0c5.07a60787.js";import"./_commonjsHelpers-212d567a.0ea80d68.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const v="ino-radio-group .ino-radio-group-wrapper{width:fit-content;display:flex}ino-radio-group .ino-radio-group-wrapper--vertical{flex-direction:column}ino-radio-group .ino-radio-group-wrapper--horizontal{flex-direction:row}ino-radio-group ino-radio:last-child{margin-right:8px}",g=class{constructor(e){d(this,e),this.valueChange=c(this,"valueChange",7),this.alignment="horizontal"}valueChanged(e){this.updateRadios(e)}async componentDidLoad(){this.updateRadios(this.value),(await this.getRadios()).forEach(o=>{o.addEventListener("mouseover",()=>this.addHoverAnimation(o)),o.addEventListener("mouseout",()=>this.removeHoverAnimation())})}async disconnectedCallback(){(await this.getRadios()).forEach(o=>{o.removeEventListener("mouseover",()=>this.addHoverAnimation(o)),o.removeEventListener("mouseout",()=>this.removeHoverAnimation())})}async handleKeyDown(e){var o,i;if(!e.key.startsWith("Arrow"))return;e.preventDefault();const a=await this.getRadios(),t=a.find(n=>Boolean(n.checked));if(!t){this.valueChange.emit(a[0].value);return}let r;switch(e.key){case"ArrowDown":case"ArrowRight":r=(o=t.nextElementSibling)!==null&&o!==void 0?o:a[0];break;case"ArrowUp":case"ArrowLeft":r=(i=t.previousElementSibling)!==null&&i!==void 0?i:a[a.length-1];break}this.valueChange.emit(r.value)}async addHoverAnimation(e){const i=(await this.getRadios()).find(a=>Boolean(a.checked));!i||e===i||i.classList.add("ino-checked-hover")}async removeHoverAnimation(){const o=(await this.getRadios()).find(i=>i.classList.contains("ino-checked-hover"));!o||o.classList.remove("ino-checked-hover")}async updateRadios(e){const o=await this.getRadios();let i=!1;for(const a of o)a.checked&&a.classList.remove("ino-checked-hover"),!i&&a.value===e?(i=!0,a.checked=!0):a.checked=!1;i||console.warn(`No ino-radio button with value=${e} was found.`)}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}render(){const e=u({"ino-radio-group-wrapper":!0,"ino-radio-group-wrapper--vertical":this.alignment==="vertical","ino-radio-group-wrapper--horizontal":this.alignment==="horizontal"});return s(l,null,s("div",{class:e,tabIndex:0},s("slot",null)))}get el(){return h(this)}static get watchers(){return{value:["valueChanged"]}}};g.style=v;export{g as ino_radio_group};
