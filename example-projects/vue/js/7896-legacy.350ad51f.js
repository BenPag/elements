(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[7896],{7933:function(e,t,n){"use strict";n.d(t,{a:function(){return r},c:function(){return o}});n(4173);var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function o(e,t,n){return n={path:t,exports:{},require:function(e,t){return i()}},e(n,n.exports),n.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},19790:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(59523),o=(n(16781),n(7933)),i=(0,o.c)((function(e){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=(0,r.Z)(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)&&i.length){var s=n.apply(null,i);s&&e.push(s)}else if("object"===a)for(var u in i)t.call(i,u)&&i[u]&&e.push(u)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}))},23024:function(e,t,n){"use strict";n.d(t,{f:function(){return nn},t:function(){return tn}});n(58188),n(88233),n(77950),n(21850),n(18178),n(79321),n(28673),n(6886),n(93244),n(1939),n(26936),n(95342),n(48319),n(43450),n(34769),n(85940),n(43430),n(49228),n(32501),n(45794);
/*!
 * Crafted with ❤ by inovex GmbH
 */
function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function o(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function i(e){var t=o(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function a(e){var t=o(e).Element;return e instanceof t||e instanceof Element}function s(e){var t=o(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function u(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function c(e){return e!==o(e)&&s(e)?u(e):i(e)}function f(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return(a(e)?e.ownerDocument:e.document).documentElement}function l(e){return r(p(e)).left+i(e).scrollLeft}function d(e){return o(e).getComputedStyle(e)}function m(e){var t=d(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function v(e,t,n){void 0===n&&(n=!1);var o=p(t),i=r(e),a={scrollLeft:0,scrollTop:0},u={x:0,y:0};return n||(("body"!==f(t)||m(o))&&(a=c(t)),s(t)?(u=r(t),u.x+=t.clientLeft,u.y+=t.clientTop):o&&(u.x=l(o))),{x:i.left+a.scrollLeft-u.x,y:i.top+a.scrollTop-u.y,width:i.width,height:i.height}}function h(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function g(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||e.host||p(e)}function b(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:s(e)&&m(e)?e:b(g(e))}function y(e,t){void 0===t&&(t=[]);var n=b(e),r="body"===f(n),i=o(n),a=r?[i].concat(i.visualViewport||[],m(n)?n:[]):n,s=t.concat(a);return r?s:s.concat(y(g(a)))}function w(e){return["table","td","th"].indexOf(f(e))>=0}function x(e){return s(e)&&"fixed"!==d(e).position?e.offsetParent:null}function O(e){var t=o(e),n=x(e);while(n&&w(n))n=x(n);return n&&"body"===f(n)&&"static"===d(n).position?t:n||t}var E="top",T="bottom",A="right",L="left",D="auto",j=[E,T,A,L],M="start",k="end",C="clippingParents",P="viewport",S="popper",R="reference",V=j.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+k])}),[]),B=[].concat(j,[D]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+k])}),[]),H="beforeRead",W="read",I="afterRead",N="beforeMain",q="main",U="afterMain",_="beforeWrite",X="write",Y="afterWrite",F=[H,W,I,N,q,U,_,X,Y];function z(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name);var i=[].concat(e.requires||[],e.requiresIfExists||[]);i.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function $(e){var t=z(e);return F.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function J(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function Z(e){return e.split("-")[0]}function G(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,{},t,{options:Object.assign({},n.options,{},t.options),data:Object.assign({},n.data,{},t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ee(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?K:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,{},i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],u=!1,c={state:o,setOptions:function(n){p(),o.options=Object.assign({},i,{},o.options,{},n),o.scrollParents={reference:a(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(t)};var s=$(G([].concat(r,o.options.modifiers)));return o.orderedModifiers=s.filter((function(e){return e.enabled})),f(),c.update()},forceUpdate:function(){if(!u){var e=o.elements,t=e.reference,n=e.popper;if(Q(t,n)){o.rects={reference:v(t,O(n),"fixed"===o.options.strategy),popper:h(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,f=void 0===s?{}:s,p=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:p,instance:c})||o)}else o.reset=!1,r=-1}}},update:J((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){p(),u=!0}};if(!Q(e,t))return c;function f(){o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:c,options:r}),u=function(){};s.push(a||u)}}))}function p(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var te={passive:!0};function ne(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,u=void 0===s||s,c=o(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach((function(e){e.addEventListener("scroll",n.update,te)})),u&&c.addEventListener("resize",n.update,te),function(){a&&f.forEach((function(e){e.removeEventListener("scroll",n.update,te)})),u&&c.removeEventListener("resize",n.update,te)}}var re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ne,data:{}};function oe(e){return e.split("-")[1]}function ie(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ae(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Z(o):null,a=o?oe(o):null,s=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2;switch(i){case E:t={x:s,y:n.y-r.height};break;case T:t={x:s,y:n.y+n.height};break;case A:t={x:n.x+n.width,y:u};break;case L:t={x:n.x-r.width,y:u};break;default:t={x:n.x,y:n.y}}var c=i?ie(i):null;if(null!=c){var f="y"===c?"height":"width";switch(a){case M:t[c]=Math.floor(t[c])-Math.floor(n[f]/2-r[f]/2);break;case k:t[c]=Math.floor(t[c])+Math.ceil(n[f]/2-r[f]/2);break}}return t}function se(e){var t=e.state,n=e.name;t.modifiersData[n]=ae({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ue={name:"popperOffsets",enabled:!0,phase:"read",fn:se,data:{}},ce={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fe(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:Math.round(t*o)/o||0,y:Math.round(n*o)/o||0}}function pe(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.offsets,s=e.position,u=e.gpuAcceleration,c=e.adaptive,f=fe(a),l=f.x,d=f.y,m=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),h=L,g=E,b=window;if(c){var y=O(n);y===o(n)&&(y=p(n)),i===E&&(g=T,d-=y.clientHeight-r.height,d*=u?1:-1),i===L&&(h=A,l-=y.clientWidth-r.width,l*=u?1:-1)}var w,x=Object.assign({position:s},c&&ce);return u?Object.assign({},x,(w={},w[g]=v?"0":"",w[h]=m?"0":"",w.transform=(b.devicePixelRatio||1)<2?"translate("+l+"px, "+d+"px)":"translate3d("+l+"px, "+d+"px, 0)",w)):Object.assign({},x,(t={},t[g]=v?d+"px":"",t[h]=m?l+"px":"",t.transform="",t))}function le(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s={placement:Z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,{},pe(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,{},pe(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var de={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:le,data:{}};function me(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&f(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))}function ve(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),a=i.reduce((function(e,t){return e[t]="",e}),{});s(r)&&f(r)&&(Object.assign(r.style,a),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}}var he={name:"applyStyles",enabled:!0,phase:"write",fn:me,effect:ve,requires:["computeStyles"]};function ge(e,t,n){var r=Z(e),o=[L,E].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[L,A].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function be(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=B.reduce((function(e,n){return e[n]=ge(n,t.rects,i),e}),{}),s=a[t.placement],u=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}var ye={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:be},we={left:"right",right:"left",bottom:"top",top:"bottom"};function xe(e){return e.replace(/left|right|bottom|top/g,(function(e){return we[e]}))}var Oe={start:"end",end:"start"};function Ee(e){return e.replace(/start|end/g,(function(e){return Oe[e]}))}function Te(e){var t=o(e),n=t.visualViewport,r=t.innerWidth,i=t.innerHeight;return n&&/iPhone|iPod|iPad/.test(navigator.platform)&&(r=n.width,i=n.height),{width:r,height:i,x:0,y:0}}function Ae(e){var t=o(e),n=i(e),r=v(p(e),t);return r.height=Math.max(r.height,t.innerHeight),r.width=Math.max(r.width,t.innerWidth),r.x=-n.scrollLeft,r.y=-n.scrollTop,r}function Le(e){return parseFloat(e)||0}function De(e){var t=s(e)?d(e):{};return{top:Le(t.borderTopWidth),right:Le(t.borderRightWidth),bottom:Le(t.borderBottomWidth),left:Le(t.borderLeftWidth)}}function je(e){var t=o(e),n=De(e),r="html"===f(e),i=l(e),a=e.clientWidth+n.right,s=e.clientHeight+n.bottom;return r&&t.innerHeight-e.clientHeight>50&&(s=t.innerHeight-n.bottom),{top:r?0:e.clientTop,right:e.clientLeft>n.left?n.right:r?t.innerWidth-a-i:e.offsetWidth-a,bottom:r?t.innerHeight-s:e.offsetHeight-s,left:r?i:e.clientLeft}}function Me(e,t){var n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ce(e,t){return t===P?ke(Te(e)):s(t)?r(t):ke(Ae(p(e)))}function Pe(e){var t=y(e),n=["absolute","fixed"].indexOf(d(e).position)>=0,r=n&&s(e)?O(e):e;return a(r)?t.filter((function(e){return a(e)&&Me(e,r)})):[]}function Se(e,t,n){var r="clippingParents"===t?Pe(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=Ce(e,n),o=je(s(n)?n:p(e));return t.top=Math.max(r.top+o.top,t.top),t.right=Math.min(r.right-o.right,t.right),t.bottom=Math.min(r.bottom-o.bottom,t.bottom),t.left=Math.max(r.left+o.left,t.left),t}),Ce(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Re(){return{top:0,right:0,bottom:0,left:0}}function Ve(e){return Object.assign({},Re(),{},e)}function Be(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function He(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,s=n.boundary,u=void 0===s?C:s,c=n.rootBoundary,f=void 0===c?P:c,l=n.elementContext,d=void 0===l?S:l,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,g=void 0===h?0:h,b=Ve("number"!==typeof g?g:Be(g,j)),y=d===S?R:S,w=e.elements.reference,x=e.rects.popper,O=e.elements[v?y:d],L=Se(a(O)?O:O.contextElement||p(e.elements.popper),u,f),D=r(w),M=ae({reference:D,element:x,strategy:"absolute",placement:i}),k=ke(Object.assign({},x,{},M)),V=d===S?k:D,B={top:L.top-V.top+b.top,bottom:V.bottom-L.bottom+b.bottom,left:L.left-V.left+b.left,right:V.right-L.right+b.right},H=e.modifiersData.offset;if(d===S&&H){var W=H[i];Object.keys(B).forEach((function(e){var t=[A,T].indexOf(e)>=0?1:-1,n=[E,T].indexOf(e)>=0?"y":"x";B[e]+=W[n]*t}))}return B}function We(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,c=void 0===u?B:u,f=oe(r),p=(f?s?V:V.filter((function(e){return oe(e)===f})):j).filter((function(e){return c.indexOf(e)>=0})),l=p.reduce((function(t,n){return t[n]=He(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Z(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}function Ie(e){if(Z(e)===D)return[];var t=xe(e);return[Ee(e),t,Ee(t)]}function Ne(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,u=n.fallbackPlacements,c=n.padding,f=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,v=n.allowedAutoPlacements,h=t.options.placement,g=Z(h),b=g===h,y=u||(b||!m?[xe(h)]:Ie(h)),w=[h].concat(y).reduce((function(e,n){return e.concat(Z(n)===D?We(t,{placement:n,boundary:f,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),x=t.rects.reference,O=t.rects.popper,j=new Map,k=!0,C=w[0],P=0;P<w.length;P++){var S=w[P],R=Z(S),V=oe(S)===M,B=[E,T].indexOf(R)>=0,H=B?"width":"height",W=He(t,{placement:S,boundary:f,rootBoundary:p,altBoundary:l,padding:c}),I=B?V?A:L:V?T:E;x[H]>O[H]&&(I=xe(I));var N=xe(I),q=[];if(i&&q.push(W[R]<=0),s&&q.push(W[I]<=0,W[N]<=0),q.every((function(e){return e}))){C=S,k=!1;break}j.set(S,q)}if(k)for(var U=m?3:1,_=function(e){var t=w.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},X=U;X>0;X--){var Y=_(X);if("break"===Y)break}t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}}var qe={name:"flip",enabled:!0,phase:"main",fn:Ne,requiresIfExists:["offset"],data:{_skip:!1}};function Ue(e){return"x"===e?"y":"x"}function _e(e,t,n){return Math.max(e,Math.min(t,n))}function Xe(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,u=n.boundary,c=n.rootBoundary,f=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,v=void 0===m?0:m,g=He(t,{boundary:u,rootBoundary:c,padding:p,altBoundary:f}),b=Z(t.placement),y=oe(t.placement),w=!y,x=ie(b),D=Ue(x),j=t.modifiersData.popperOffsets,k=t.rects.reference,C=t.rects.popper,P="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,S={x:0,y:0};if(j){if(i){var R="y"===x?E:L,V="y"===x?T:A,B="y"===x?"height":"width",H=j[x],W=j[x]+g[R],I=j[x]-g[V],N=d?-C[B]/2:0,q=y===M?k[B]:C[B],U=y===M?-C[B]:-k[B],_=t.elements.arrow,X=d&&_?h(_):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Re(),F=Y[R],z=Y[V],$=_e(0,k[B],X[B]),J=w?k[B]/2-N-$-F-P:q-$-F-P,G=w?-k[B]/2+N+$+z+P:U+$+z+P,K=t.elements.arrow&&O(t.elements.arrow),Q=K?"y"===x?K.clientTop||0:K.clientLeft||0:0,ee=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,te=j[x]+J-ee-Q,ne=j[x]+G-ee,re=_e(d?Math.min(W,te):W,H,d?Math.max(I,ne):I);j[x]=re,S[x]=re-H}if(s){var ae="x"===x?E:L,se="x"===x?T:A,ue=j[D],ce=ue+g[ae],fe=ue-g[se],pe=_e(ce,ue,fe);j[D]=pe,S[D]=pe-ue}t.modifiersData[r]=S}}var Ye={name:"preventOverflow",enabled:!0,phase:"main",fn:Xe,requiresIfExists:["offset"]};function Fe(e){var t,n=e.state,r=e.name,o=n.elements.arrow,i=n.modifiersData.popperOffsets,a=Z(n.placement),s=ie(a),u=[L,A].indexOf(a)>=0,c=u?"height":"width";if(o&&i){var f=n.modifiersData[r+"#persistent"].padding,p=h(o),l="y"===s?E:L,d="y"===s?T:A,m=n.rects.reference[c]+n.rects.reference[s]-i[s]-n.rects.popper[c],v=i[s]-n.rects.reference[s],g=O(o),b=g?"y"===s?g.clientHeight||0:g.clientWidth||0:0,y=m/2-v/2,w=f[l],x=b-p[c]-f[d],D=b/2-p[c]/2+y,j=_e(w,D,x),M=s;n.modifiersData[r]=(t={},t[M]=j,t.centerOffset=j-D,t)}}function ze(e){var t=e.state,n=e.options,r=e.name,o=n.element,i=void 0===o?"[data-popper-arrow]":o,a=n.padding,s=void 0===a?0:a;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&Me(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[r+"#persistent"]={padding:Ve("number"!==typeof s?s:Be(s,j))})}var $e={name:"arrow",enabled:!0,phase:"main",fn:Fe,effect:ze,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Je(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ze(e){return[E,A,T,L].some((function(t){return e[t]>=0}))}function Ge(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=He(t,{elementContext:"reference"}),s=He(t,{altBoundary:!0}),u=Je(a,r),c=Je(s,o,i),f=Ze(u),p=Ze(c);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}var Ke={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ge},Qe=[re,ue,de,he,ye,qe,Ye,$e,Ke],et=ee({defaultModifiers:Qe}),tt="tippy-box",nt="tippy-content",rt="tippy-backdrop",ot="tippy-arrow",it="tippy-svg-arrow",at={passive:!0,capture:!0};function st(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function ut(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function ct(e,t){return"function"===typeof e?e.apply(void 0,t):e}function ft(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function pt(e){return e.split(/\s+/).filter(Boolean)}function lt(e){return[].concat(e)}function dt(e,t){-1===e.indexOf(t)&&e.push(t)}function mt(e){return e.filter((function(t,n){return e.indexOf(t)===n}))}function vt(e){return e.split("-")[0]}function ht(e){return[].slice.call(e)}function gt(){return document.createElement("div")}function bt(e){return["Element","Fragment"].some((function(t){return ut(e,t)}))}function yt(e){return ut(e,"NodeList")}function wt(e){return ut(e,"MouseEvent")}function xt(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Ot(e){return bt(e)?[e]:yt(e)?ht(e):Array.isArray(e)?e:ht(document.querySelectorAll(e))}function Et(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Tt(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function At(e){var t=lt(e),n=t[0];return n&&n.ownerDocument||document}function Lt(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props,a=i.interactiveBorder,s=vt(o.placement),u=o.modifiersData.offset;if(!u)return!0;var c="bottom"===s?u.top.y:0,f="top"===s?u.bottom.y:0,p="right"===s?u.left.x:0,l="left"===s?u.right.x:0,d=t.top-r+c>a,m=r-t.bottom-f>a,v=t.left-n+p>a,h=n-t.right-l>a;return d||m||v||h}))}function Dt(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var jt={isTouch:!1},Mt=0;function kt(){jt.isTouch||(jt.isTouch=!0,window.performance&&document.addEventListener("mousemove",Ct))}function Ct(){var e=performance.now();e-Mt<20&&(jt.isTouch=!1,document.removeEventListener("mousemove",Ct)),Mt=e}function Pt(){var e=document.activeElement;if(xt(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function St(){document.addEventListener("touchstart",kt,at),window.addEventListener("blur",Pt)}var Rt="undefined"!==typeof window&&"undefined"!==typeof document,Vt=Rt?navigator.userAgent:"",Bt=/MSIE |Trident\//.test(Vt),Ht={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Wt={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},It=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Ht,{},Wt),Nt=Object.keys(It),qt=function(e){var t=Object.keys(e);t.forEach((function(t){It[t]=e[t]}))};function Ut(e){var t=e.plugins||[],n=t.reduce((function(t,n){var r=n.name,o=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:o),t}),{});return Object.assign({},e,{},n)}function _t(e,t){var n=t?Object.keys(Ut(Object.assign({},It,{plugins:t}))):Nt,r=n.reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(o){t[n]=r}return t}),{});return r}function Xt(e,t){var n=Object.assign({},t,{content:ct(t.content,[e])},t.ignoreAttributes?{}:_t(e,t.plugins));return n.aria=Object.assign({},It.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}var Yt=function(){return"innerHTML"};function Ft(e,t){e[Yt()]=t}function zt(e){var t=gt();return!0===e?t.className=ot:(t.className=it,bt(e)?t.appendChild(e):Ft(t,e)),t}function $t(e,t){bt(t.content)?(Ft(e,""),e.appendChild(t.content)):"function"!==typeof t.content&&(t.allowHTML?Ft(e,t.content):e.textContent=t.content)}function Jt(e){var t=e.firstElementChild,n=ht(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(nt)})),arrow:n.find((function(e){return e.classList.contains(ot)||e.classList.contains(it)})),backdrop:n.find((function(e){return e.classList.contains(rt)}))}}function Zt(e){var t=gt(),n=gt();n.className=tt,n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=gt();function o(n,r){var o=Jt(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"===typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"===typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||$t(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(zt(r.arrow))):i.appendChild(zt(r.arrow)):s&&i.removeChild(s)}return r.className=nt,r.setAttribute("data-state","hidden"),$t(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}Zt.$$tippy=!0;var Gt=1,Kt=[],Qt=[];function en(e,t){var n,r,o,i,a,s,u,c=Xt(e,Object.assign({},It,{},Ut(t))),f=!1,p=!1,l=!1,d=!1,m=[],v=ft(Z,c.interactiveDebounce),h=At(c.triggerTarget||e),g=Gt++,b=null,y=mt(c.plugins),w={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},x={id:g,reference:e,popper:gt(),popperInstance:b,props:c,state:w,plugins:y,clearDelayTimeouts:ue,setProps:ce,setContent:fe,show:pe,hide:le,hideWithInteractivity:de,enable:ae,disable:se,unmount:me,destroy:ve};if(!c.render)return x;var O=c.render(x),E=O.popper,T=O.onUpdate;E.setAttribute("data-tippy-root",""),E.id="tippy-"+x.id,x.popper=E,e._tippy=x,E._tippy=x;var A=y.map((function(e){return e.fn(x)})),L=e.hasAttribute("aria-expanded");return z(),B(),S(),R("onCreate",[x]),c.showOnCreate&&oe(),E.addEventListener("mouseenter",(function(){x.props.interactive&&x.state.isVisible&&x.clearDelayTimeouts()})),E.addEventListener("mouseleave",(function(e){x.props.interactive&&x.props.trigger.indexOf("mouseenter")>=0&&(h.addEventListener("mousemove",v),v(e))})),x;function D(){var e=x.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===D()[0]}function M(){var e;return!!(null==(e=x.props.render)?void 0:e.$$tippy)}function k(){return u||e}function C(){return Jt(E)}function P(e){return x.state.isMounted&&!x.state.isVisible||jt.isTouch||i&&"focus"===i.type?0:st(x.props.delay,e?0:1,It.delay)}function S(){E.style.pointerEvents=x.props.interactive&&x.state.isVisible?"":"none",E.style.zIndex=""+x.props.zIndex}function R(e,t,n){var r;(void 0===n&&(n=!0),A.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=x.props)[e].apply(r,t)}function V(){var t=x.props.aria;if(t.content){var n="aria-"+t.content,r=E.id,o=lt(x.props.triggerTarget||e);o.forEach((function(e){var t=e.getAttribute(n);if(x.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function B(){if(!L&&x.props.aria.expanded){var t=lt(x.props.triggerTarget||e);t.forEach((function(e){x.props.interactive?e.setAttribute("aria-expanded",x.state.isVisible&&e===k()?"true":"false"):e.removeAttribute("aria-expanded")}))}}function H(){h.body.removeEventListener("mouseleave",ie),h.removeEventListener("mousemove",v),Kt=Kt.filter((function(e){return e!==v}))}function W(e){if((!jt.isTouch||!l&&"mousedown"!==e.type)&&(!x.props.interactive||!E.contains(e.target))){if(k().contains(e.target)){if(jt.isTouch)return;if(x.state.isVisible&&x.props.trigger.indexOf("click")>=0)return}else R("onClickOutside",[x,e]);!0===x.props.hideOnClick&&(f=!1,x.clearDelayTimeouts(),x.hide(),p=!0,setTimeout((function(){p=!1})),x.state.isMounted||U())}}function I(){l=!0}function N(){l=!1}function q(){h.addEventListener("mousedown",W,!0),h.addEventListener("touchend",W,at),h.addEventListener("touchstart",N,at),h.addEventListener("touchmove",I,at)}function U(){h.removeEventListener("mousedown",W,!0),h.removeEventListener("touchend",W,at),h.removeEventListener("touchstart",N,at),h.removeEventListener("touchmove",I,at)}function _(e,t){Y(e,(function(){!x.state.isVisible&&E.parentNode&&E.parentNode.contains(E)&&t()}))}function X(e,t){Y(e,t)}function Y(e,t){var n=C().box;function r(e){e.target===n&&(Dt(n,"remove",r),t())}if(0===e)return t();Dt(n,"remove",a),Dt(n,"add",r),a=r}function F(t,n,r){void 0===r&&(r=!1);var o=lt(x.props.triggerTarget||e);o.forEach((function(e){e.addEventListener(t,n,r),m.push({node:e,eventType:t,handler:n,options:r})}))}function z(){j()&&(F("touchstart",J,{passive:!0}),F("touchend",G,{passive:!0})),pt(x.props.trigger).forEach((function(e){if("manual"!==e)switch(F(e,J),e){case"mouseenter":F("mouseleave",G);break;case"focus":F(Bt?"focusout":"blur",K);break;case"focusin":F("focusout",K);break}}))}function $(){m.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),m=[]}function J(e){var t,n=!1;if(x.state.isEnabled&&!Q(e)&&!p){var r="focus"===(null==(t=i)?void 0:t.type);i=e,u=e.currentTarget,B(),!x.state.isVisible&&wt(e)&&Kt.forEach((function(t){return t(e)})),"click"===e.type&&(x.props.trigger.indexOf("mouseenter")<0||f)&&!1!==x.props.hideOnClick&&x.state.isVisible?n=!0:oe(e),"click"===e.type&&(f=!n),n&&!r&&ie(e)}}function Z(t){var n=t.target,r=e.contains(n)||E.contains(n);if("mousemove"!==t.type||!r){var o=re().concat(E).map((function(e){var t,n=e._tippy,r=null==(t=n.popperInstance)?void 0:t.state;return r?{popperRect:e.getBoundingClientRect(),popperState:r,props:c}:null})).filter(Boolean);Lt(o,t)&&(H(),ie(t))}}function G(e){var t=Q(e)||x.props.trigger.indexOf("click")>=0&&f;t||(x.props.interactive?x.hideWithInteractivity(e):ie(e))}function K(e){x.props.trigger.indexOf("focusin")<0&&e.target!==k()||x.props.interactive&&e.relatedTarget&&E.contains(e.relatedTarget)||ie(e)}function Q(e){return!!jt.isTouch&&j()!==e.type.indexOf("touch")>=0}function ee(){te();var t=x.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,u=M()?Jt(E).arrow:null,c=i?{getBoundingClientRect:i,contextElement:i.contextElement||k()}:e,f={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(M()){var n=C(),r=n.box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?r.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?r.setAttribute("data-"+e,""):r.removeAttribute("data-"+e)})),t.attributes.popper={}}}},p=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},f];M()&&u&&p.push({name:"arrow",options:{element:u,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),x.popperInstance=et(c,E,Object.assign({},n,{placement:r,onFirstUpdate:s,modifiers:p}))}function te(){x.popperInstance&&(x.popperInstance.destroy(),x.popperInstance=null)}function ne(){var e,t=x.props.appendTo,n=k();e=x.props.interactive&&t===It.appendTo||"parent"===t?n.parentNode:ct(t,[n]),e.contains(E)||e.appendChild(E),ee()}function re(){return ht(E.querySelectorAll("[data-tippy-root]"))}function oe(e){x.clearDelayTimeouts(),e&&R("onTrigger",[x,e]),q();var t=P(!0),r=D(),o=r[0],i=r[1];jt.isTouch&&"hold"===o&&i&&(t=i),t?n=setTimeout((function(){x.show()}),t):x.show()}function ie(e){if(x.clearDelayTimeouts(),R("onUntrigger",[x,e]),x.state.isVisible){if(!(x.props.trigger.indexOf("mouseenter")>=0&&x.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&f)){var t=P(!1);t?r=setTimeout((function(){x.state.isVisible&&x.hide()}),t):o=requestAnimationFrame((function(){x.hide()}))}}else U()}function ae(){x.state.isEnabled=!0}function se(){x.hide(),x.state.isEnabled=!1}function ue(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(o)}function ce(t){if(!x.state.isDestroyed){R("onBeforeUpdate",[x,t]),$();var n=x.props,r=Xt(e,Object.assign({},x.props,{},t,{ignoreAttributes:!0}));x.props=r,z(),n.interactiveDebounce!==r.interactiveDebounce&&(H(),v=ft(Z,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?lt(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded"),B(),S(),T&&T(n,r),x.popperInstance&&(ee(),re().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),R("onAfterUpdate",[x,t])}}function fe(e){x.setProps({content:e})}function pe(){var e=x.state.isVisible,t=x.state.isDestroyed,n=!x.state.isEnabled,r=jt.isTouch&&!x.props.touch,o=st(x.props.duration,0,It.duration);if(!(e||t||n||r)&&!k().hasAttribute("disabled")&&(R("onShow",[x],!1),!1!==x.props.onShow(x))){if(x.state.isVisible=!0,M()&&(E.style.visibility="visible"),S(),q(),x.state.isMounted||(E.style.transition="none"),M()){var i=C(),a=i.box,u=i.content;Et([a,u],0)}s=function(){if(x.state.isVisible&&!d){if(d=!0,E.style.transition=x.props.moveTransition,M()&&x.props.animation){var e=C(),t=e.box,n=e.content;Et([t,n],o),Tt([t,n],"visible")}V(),B(),dt(Qt,x),x.state.isMounted=!0,R("onMount",[x]),x.props.animation&&M()&&X(o,(function(){x.state.isShown=!0,R("onShown",[x])}))}},ne()}}function le(){var e=!x.state.isVisible,t=x.state.isDestroyed,n=!x.state.isEnabled,r=st(x.props.duration,1,It.duration);if(!(e||t||n)&&(R("onHide",[x],!1),!1!==x.props.onHide(x))){if(x.state.isVisible=!1,x.state.isShown=!1,d=!1,M()&&(E.style.visibility="hidden"),H(),U(),S(),M()){var o=C(),i=o.box,a=o.content;x.props.animation&&(Et([i,a],r),Tt([i,a],"hidden"))}V(),B(),x.props.animation?M()&&_(r,x.unmount):x.unmount()}}function de(e){h.body.addEventListener("mouseleave",ie),h.addEventListener("mousemove",v),dt(Kt,v),v(e)}function me(){x.state.isVisible&&x.hide(),x.state.isMounted&&(te(),re().forEach((function(e){e._tippy.unmount()})),E.parentNode&&E.parentNode.removeChild(E),Qt=Qt.filter((function(e){return e!==x})),x.state.isMounted=!1,R("onHidden",[x]))}function ve(){x.state.isDestroyed||(x.clearDelayTimeouts(),x.unmount(),$(),delete e._tippy,x.state.isDestroyed=!0,R("onDestroy",[x]))}}function tn(e,t){void 0===t&&(t={});var n=It.plugins.concat(t.plugins||[]);St();var r=Object.assign({},t,{plugins:n}),o=Ot(e),i=o.reduce((function(e,t){var n=t&&en(t,r);return n&&e.push(n),e}),[]);return bt(e)?i[0]:i}tn.defaultProps=It,tn.setDefaultProps=qt,tn.currentInput=jt;var nn={name:"followCursor",defaultValue:!1,fn:function(e){var t=e.reference,n=At(e.props.triggerTarget||t),r=null;function o(){return"manual"===e.props.trigger.trim()}function i(){var t=!!o()||null!==r&&!(0===r.clientX&&0===r.clientY);return e.props.followCursor&&t}function a(){return jt.isTouch||"initial"===e.props.followCursor&&e.state.isVisible}function s(t){t&&e.setProps({getReferenceClientRect:null})}function u(){i()?f():s(e.props.followCursor)}function c(){i()&&l(r)}function f(){n.addEventListener("mousemove",l)}function p(){n.removeEventListener("mousemove",l)}function l(n){r={clientX:n.clientX,clientY:n.clientY};var o=!n.target||t.contains(n.target),i=e.props.followCursor,s=n.clientX,u=n.clientY,c=t.getBoundingClientRect(),f=s-c.left,l=u-c.top;!o&&e.props.interactive||e.setProps({getReferenceClientRect:function(){var e=t.getBoundingClientRect(),n=s,r=u;"initial"===i&&(n=e.left+f,r=e.top+l);var o="horizontal"===i?e.top:r,a="vertical"===i?e.right:n,c="horizontal"===i?e.bottom:r,p="vertical"===i?e.left:n;return{width:a-p,height:c-o,top:o,right:a,bottom:c,left:p}}}),a()&&p()}return{onAfterUpdate:function(e,t){var n=t.followCursor;void 0===n||n||s(!0)},onMount:function(){c()},onShow:function(){o()&&(r={clientX:0,clientY:0},u())},onTrigger:function(e,t){r||(wt(t)&&(r={clientX:t.clientX,clientY:t.clientY}),u())},onUntrigger:function(){e.state.isVisible||(p(),r=null)},onHidden:function(){p(),r=null}}}};tn.setDefaultProps({render:Zt})},43430:function(e,t,n){"use strict";var r=n(23103),o=n(93819),i=n(92991),a=n(24229),s=n(96038),u=[],c=u.sort,f=a((function(){u.sort(void 0)})),p=a((function(){u.sort(null)})),l=s("sort"),d=f||!p||!l;r({target:"Array",proto:!0,forced:d},{sort:function(e){return void 0===e?c.call(i(this)):c.call(i(this),o(e))}})},4173:function(e,t,n){var r=n(23103),o=n(9859);r({global:!0},{globalThis:o})},88233:function(e,t,n){"use strict";var r=n(27487),o=n(21176),i=n(24229),a=n(30895),s="toString",u=RegExp.prototype,c=u[s],f=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),p=c.name!=s;(f||p)&&r(RegExp.prototype,s,(function(){var e=o(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in u)?a.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})}}]);
//# sourceMappingURL=7896-legacy.350ad51f.js.map