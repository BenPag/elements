(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[4224],{84224:function(t,e,r){"use strict";r.r(e),r.d(e,{scopeCss:function(){return H}});var n=r(15083),c=(r(77950),r(85940),r(17368),r(28450),r(51172),r(88233),r(74069),r(44112),r(18178),r(48319),r(16781),r(45794),r(18827),r(58188),r(21850),r(32501),r(43450),r(1939),function(t){var e,r=[],n=0;t=t.replace(/(\[[^\]]*\])/g,(function(t,e){var c="__ph-".concat(n,"__");return r.push(e),n++,c})),e=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,e,c){var o="__ph-".concat(n,"__");return r.push(c),n++,e+o}));var c={content:e,placeholders:r};return c}),o=function(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))},i="-shadowcsshost",s="-shadowcssslotted",a="-shadowcsscontext",u=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+i+u,"gim"),f=new RegExp("("+a+u,"gim"),p=new RegExp("("+s+u,"gim"),g=i+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,v=[/::shadow/g,/::content/g],d="([>\\s~+[.,{:][\\s\\S]*)?$",m=/-shadowcsshost/gim,x=/:host/gim,E=/::slotted/gim,R=/:host-context/gim,w=/\/\*\s*[\s\S]*?\*\//g,_=function(t){return t.replace(w,"")},S=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,b=function(t){return t.match(S)||[]},y=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,k=/([{}])/g,O=/(^.*?[^\\])??((:+)(.*)|$)/,W="{",T="}",I="%BLOCK%",j=function(t,e){var r=A(t),n=0;return r.escapedString.replace(y,(function(){var t=arguments.length<=2?void 0:arguments[2],c="",o=arguments.length<=4?void 0:arguments[4],i="";o&&o.startsWith("{"+I)&&(c=r.blocks[n++],o=o.substring(I.length+1),i="{");var s={selector:t,content:c},a=e(s);return"".concat(arguments.length<=1?void 0:arguments[1]).concat(a.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(i).concat(a.content).concat(o)}))},A=function(t){for(var e=t.split(k),r=[],n=[],c=0,o=[],i=0;i<e.length;i++){var s=e[i];s===T&&c--,c>0?o.push(s):(o.length>0&&(n.push(o.join("")),r.push(I),o=[]),r.push(s)),s===W&&c++}o.length>0&&(n.push(o.join("")),r.push(I));var a={escapedString:r.join(""),blocks:n};return a},C=function(t){return t=t.replace(R,a).replace(x,i).replace(E,s),t},U=function(t,e,r){return t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){for(var c=e[2].split(","),o=[],i=0;i<c.length;i++){var s=c[i].trim();if(!s)break;o.push(r(g,s,e[3]))}return o.join(",")}return g+e[3]}))},P=function(t,e,r){return t+e.replace(i,"")+r},L=function(t){return U(t,l,P)},$=function(t,e,r){return e.indexOf(i)>-1?P(t,e,r):t+e+r+", "+e+" "+t+r},q=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(p,(function(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];if(e[2]){for(var o=e[2].trim(),i=e[3],s=r+o+i,a="",u=e[4]-1;u>=0;u--){var l=e[5][u];if("}"===l||","===l)break;a=l+a}var f=a+s,p="".concat(a.trimRight()).concat(s.trim());if(f.trim()!==p.trim()){var h="".concat(p,", ").concat(f);n.push({orgSelector:f,updatedSelector:h})}return s}return g+e[3]})),{selectors:n,cssText:t}},B=function(t){return U(t,f,$)},D=function(t){return v.reduce((function(t,e){return t.replace(e," ")}),t)},K=function(t){var e=/\[/g,r=/\]/g;return t=t.replace(e,"\\[").replace(r,"\\]"),new RegExp("^("+t+")"+d,"m")},N=function(t,e){var r=K(e);return!r.test(t)},Y=function(t,e){return t.replace(O,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return r+e+n+c}))},M=function(t,e,r){if(m.lastIndex=0,m.test(t)){var n=".".concat(r);return t.replace(h,(function(t,e){return Y(e,n)})).replace(m,n+" ")}return e+" "+t},Z=function(t,e,r){var n=/\[is=([^\]]*)\]/g;e=e.replace(n,(function(t){return arguments.length<=1?void 0:arguments[1]}));var i="."+e,s=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(g)>-1)n=M(t,e,r);else{var c=t.replace(m,"");c.length>0&&(n=Y(c,i))}return n},a=c(t);t=a.content;var u,l="",f=0,p=/( |>|\+|~(?!=))\s*/g,h=t.indexOf(g)>-1,v=!h;while(null!==(u=p.exec(t))){var d=u[1],x=t.slice(f,u.index).trim();v=v||x.indexOf(g)>-1;var E=v?s(x):x;l+="".concat(E," ").concat(d," "),f=p.lastIndex}var R=t.substring(f);return v=v||R.indexOf(g)>-1,l+=v?s(R):R,o(a.placeholders,l)},z=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():N(t,e)?Z(t,e,r).trim():t.trim()})).join(", ")},F=function t(e,r,n,c,o){return j(e,(function(e){var o=e.selector,i=e.content;"@"!==e.selector[0]?o=z(e.selector,r,n,c):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(i=t(e.content,r,n,c));var s={selector:o.replace(/\s{2,}/g," ").trim(),content:i};return s}))},G=function(t,e,r,n,c){t=C(t),t=L(t),t=B(t);var o=q(t,n);return t=o.cssText,t=D(t),e&&(t=F(t,e,r,n)),t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(r)),t=t.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:t.trim(),slottedSelectors:o.selectors}},H=function(t,e,r){var c=e+"-h",o=e+"-s",i=b(t);t=_(t);var s=[];if(r){var a=function(t){var e="/*!@___".concat(s.length,"___*/"),r="/*!@".concat(t.selector,"*/");return s.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=j(t,(function(t){return"@"!==t.selector[0]?a(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=j(t.content,a),t):t}))}var u=G(t,e,c,o);return t=[u.cssText].concat((0,n.Z)(i)).join("\n"),r&&s.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}},17368:function(t,e,r){var n=r(7400),c=r(9859),o=r(46541),i=r(20835),s=r(31787).f,a=r(78151).f,u=r(48311),l=r(30895),f=r(25650),p=r(27487),g=r(24229),h=r(56407).enforce,v=r(71832),d=r(70095),m=d("match"),x=c.RegExp,E=x.prototype,R=/a/g,w=/a/g,_=new x(R)!==R,S=f.UNSUPPORTED_Y,b=n&&o("RegExp",!_||S||g((function(){return w[m]=!1,x(R)!=R||x(w)==w||"/a/i"!=x(R,"i")})));if(b){var y=function(t,e){var r,n=this instanceof y,c=u(t),o=void 0===e;if(!n&&c&&t.constructor===y&&o)return t;_?c&&!o&&(t=t.source):t instanceof y&&(o&&(e=l.call(t)),t=t.source),S&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,"")));var s=i(_?new x(t,e):x(t,e),n?this:E,y);if(S&&r){var a=h(s);a.sticky=!0}return s},k=function(t){t in y||s(y,t,{configurable:!0,get:function(){return x[t]},set:function(e){x[t]=e}})},O=a(x),W=0;while(O.length>W)k(O[W++]);E.constructor=y,y.prototype=E,p(c,"RegExp",y)}v("RegExp")},51172:function(t,e,r){var n=r(7400),c=r(25650).UNSUPPORTED_Y,o=r(31787).f,i=r(56407).get,s=RegExp.prototype;n&&c&&o(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==s){if(this instanceof RegExp)return!!i(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}})},88233:function(t,e,r){"use strict";var n=r(27487),c=r(21176),o=r(24229),i=r(30895),s="toString",a=RegExp.prototype,u=a[s],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=s;(l||f)&&n(RegExp.prototype,s,(function(){var t=c(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in a)?i.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},74069:function(t,e,r){"use strict";var n=r(94954),c=r(21176),o=r(34237),i=r(58885),s=r(36637),a=r(98115);n("match",1,(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=c(t),u=String(this);if(!i.global)return a(i,u);var l=i.unicode;i.lastIndex=0;var f,p=[],g=0;while(null!==(f=a(i,u))){var h=String(f[0]);p[g]=h,""===h&&(i.lastIndex=s(u,o(i.lastIndex),l)),g++}return 0===g?null:p}]}))},18827:function(t,e,r){"use strict";var n=r(23103),c=r(1017).end,o=r(9445),i=o("trimEnd"),s=i?function(){return c(this)}:"".trimEnd;n({target:"String",proto:!0,forced:i},{trimEnd:s,trimRight:s})},9441:function(t,e,r){var n=r(47293),c=r(17854),o=c.RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},28450:function(t,e,r){var n=r(17854),c=r(19781),o=r(9441),i=r(84326),s=r(3070).f,a=r(29909).get,u=RegExp.prototype,l=n.TypeError;c&&o&&s(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===i(this))return!!a(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})}}]);
//# sourceMappingURL=4224-legacy.bdab98c6.js.map