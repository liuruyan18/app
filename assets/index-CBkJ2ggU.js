import{A as G}from"./index-CXCzEs_M.js";var A={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */var J=A.exports,j;function K(){return j||(j=1,function(P,R){(function(_,g){P.exports=g()})(J,function(){return function(){var x={686:function(c,u,t){t.d(u,{default:function(){return B}});var f=t(279),s=t.n(f),l=t(370),h=t.n(l),y=t(817),m=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=m()(n);return d("cut"),e},p=v;function E(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var N=function(n,e){var r=E(n);e.container.appendChild(r);var o=m()(r);return d("copy"),r.remove(),o},D=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=N(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=N(n.value,e):(r=m()(n),d("copy")),r},O=D;function w(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(e){return typeof e}:w=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(i)}var F=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,a=n.target,b=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(a!==void 0)if(a&&w(a)==="object"&&a.nodeType===1){if(r==="copy"&&a.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(a.hasAttribute("readonly")||a.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return O(b,{container:o});if(a)return r==="cut"?p(a):O(a,{container:o})},H=F;function S(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(e){return typeof e}:S=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(i)}function I(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function M(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function z(i,n,e){return n&&M(i.prototype,n),e&&M(i,e),i}function U(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&L(i,n)}function L(i,n){return L=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},L(i,n)}function Y(i){var n=V();return function(){var r=T(i),o;if(n){var a=T(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return $(this,o)}}function $(i,n){return n&&(S(n)==="object"||typeof n=="function")?n:q(i)}function q(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function V(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function T(i){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(i)}function k(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var X=function(i){U(e,i);var n=Y(e);function e(r,o){var a;return I(this,e),a=n.call(this),a.resolveOptions(o),a.listenClick(r),a}return z(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=S(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var a=this;this.listener=h()(o,"click",function(b){return a.onClick(b)})}},{key:"onClick",value:function(o){var a=o.delegateTarget||o.currentTarget,b=this.action(a)||"copy",C=H({action:b,container:this.container,target:this.target(a),text:this.text(a)});this.emit(C?"success":"error",{action:b,text:C,trigger:a,clearSelection:function(){a&&a.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return k("action",o)}},{key:"defaultTarget",value:function(o){var a=k("target",o);if(a)return document.querySelector(a)}},{key:"defaultText",value:function(o){return k("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return O(o,a)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],a=typeof o=="string"?[o]:o,b=!!document.queryCommandSupported;return a.forEach(function(C){b=b&&!!document.queryCommandSupported(C)}),b}}]),e}(s()),B=X},828:function(c){var u=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function f(s,l){for(;s&&s.nodeType!==u;){if(typeof s.matches=="function"&&s.matches(l))return s;s=s.parentNode}}c.exports=f},438:function(c,u,t){var f=t(828);function s(y,m,d,v,p){var E=h.apply(this,arguments);return y.addEventListener(d,E,p),{destroy:function(){y.removeEventListener(d,E,p)}}}function l(y,m,d,v,p){return typeof y.addEventListener=="function"?s.apply(null,arguments):typeof d=="function"?s.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(E){return s(E,m,d,v,p)}))}function h(y,m,d,v){return function(p){p.delegateTarget=f(p.target,m),p.delegateTarget&&v.call(y,p)}}c.exports=l},879:function(c,u){u.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},u.nodeList=function(t){var f=Object.prototype.toString.call(t);return t!==void 0&&(f==="[object NodeList]"||f==="[object HTMLCollection]")&&"length"in t&&(t.length===0||u.node(t[0]))},u.string=function(t){return typeof t=="string"||t instanceof String},u.fn=function(t){var f=Object.prototype.toString.call(t);return f==="[object Function]"}},370:function(c,u,t){var f=t(879),s=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!f.string(v))throw new TypeError("Second argument must be a String");if(!f.fn(p))throw new TypeError("Third argument must be a Function");if(f.node(d))return h(d,v,p);if(f.nodeList(d))return y(d,v,p);if(f.string(d))return m(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(E){E.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(E){E.removeEventListener(v,p)})}}}function m(d,v,p){return s(document.body,d,v,p)}c.exports=l},817:function(c){function u(t){var f;if(t.nodeName==="SELECT")t.focus(),f=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var s=t.hasAttribute("readonly");s||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),s||t.removeAttribute("readonly"),f=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),h=document.createRange();h.selectNodeContents(t),l.removeAllRanges(),l.addRange(h),f=l.toString()}return f}c.exports=u},279:function(c){function u(){}u.prototype={on:function(t,f,s){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:f,ctx:s}),this},once:function(t,f,s){var l=this;function h(){l.off(t,h),f.apply(s,arguments)}return h._=f,this.on(t,h,s)},emit:function(t){var f=[].slice.call(arguments,1),s=((this.e||(this.e={}))[t]||[]).slice(),l=0,h=s.length;for(l;l<h;l++)s[l].fn.apply(s[l].ctx,f);return this},off:function(t,f){var s=this.e||(this.e={}),l=s[t],h=[];if(l&&f)for(var y=0,m=l.length;y<m;y++)l[y].fn!==f&&l[y].fn._!==f&&h.push(l[y]);return h.length?s[t]=h:delete s[t],this}},c.exports=u,c.exports.TinyEmitter=u}},_={};function g(c){if(_[c])return _[c].exports;var u=_[c]={exports:{}};return x[c](u,u.exports,g),u.exports}return function(){g.n=function(c){var u=c&&c.__esModule?function(){return c.default}:function(){return c};return g.d(u,{a:u}),u}}(),function(){g.d=function(c,u){for(var t in u)g.o(u,t)&&!g.o(c,t)&&Object.defineProperty(c,t,{enumerable:!0,get:u[t]})}}(),function(){g.o=function(c,u){return Object.prototype.hasOwnProperty.call(c,u)}}(),g(686)}().default})}(A)),A.exports}var Q=K();const W=G(Q),et=P=>({toClipboard(R,x){return new Promise((_,g)=>{const c=document.createElement("button"),u=new W(c,{text:()=>R,action:()=>"copy",container:x!==void 0?x:document.body});u.on("success",t=>{u.destroy(),_(t)}),u.on("error",t=>{u.destroy(),g(t)}),document.body.appendChild(c),c.click(),document.body.removeChild(c)})}});export{et as u};
