parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GJTy":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"npqE":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
var t,e=arguments[3],r=require("process");!function(t){!function(n){var i="object"==typeof e?e:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=u(t);function u(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===i.Reflect?i.Reflect=t:o=u(i.Reflect,o),function(t){var e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,i=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",u="function"==typeof Object.create,a={__proto__:[]}instanceof Array,f=!u&&!a,c={create:u?function(){return I(Object.create(null))}:a?function(){return I({__proto__:null})}:function(){return I({})},has:f?function(t,r){return e.call(t,r)}:function(t,e){return e in t},get:f?function(t,r){return e.call(t,r)?t[r]:void 0}:function(t,e){return t[e]}},s=Object.getPrototypeOf(Function),h="object"==typeof r&&r.env&&!1,y=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[o]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,i=r+1;i<n;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,i)},e.prototype.entries=function(){return new r(this._keys,this._values,u)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[o]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function i(t,e){return e}function u(t,e){return[t,e]}}():Map,p=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new y}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[o]=function(){return this.keys()},t}():Set,l=new(h||"function"!=typeof WeakMap?function(){var t=16,r=c.create(),n=i();return function(){function t(){this._key=i()}return t.prototype.has=function(t){var e=o(t,!1);return void 0!==e&&c.has(e,this._key)},t.prototype.get=function(t){var e=o(t,!1);return void 0!==e?c.get(e,this._key):void 0},t.prototype.set=function(t,e){var r=o(t,!0);return r[this._key]=e,this},t.prototype.delete=function(t){var e=o(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=i()},t}();function i(){var t;do{t="@@WeakMap@@"+a()}while(c.has(r,t));return r[t]=!0,t}function o(t,r){if(!e.call(t,n)){if(!r)return;Object.defineProperty(t,n,{value:c.create()})}return t[n]}function u(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function a(){var e=function(t){if("function"==typeof Uint8Array)return"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):u(new Uint8Array(t),t);return u(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var i=e[n];4!==n&&6!==n&&8!==n||(r+="-"),i<16&&(r+="0"),r+=i.toString(16).toLowerCase()}return r}}():WeakMap);function v(t,e,r){var n=l.get(t);if(k(n)){if(!r)return;n=new y,l.set(t,n)}var i=n.get(e);if(k(i)){if(!r)return;i=new y,n.set(e,i)}return i}function _(t,e,r){var n=v(e,r,!1);return!k(n)&&!!n.has(t)}function d(t,e,r){var n=v(e,r,!1);if(!k(n))return n.get(t)}function w(t,e,r,n){var i=v(r,n,!0);i.set(t,e)}function g(t,e){var r=[],n=v(t,e,!1);if(k(n))return r;for(var i=n.keys(),u=function(t){var e=A(t,o);if(!x(e))throw new TypeError;var r=e.call(t);if(!O(r))throw new TypeError;return r}(i),a=0;;){var f=S(u);if(!f)return r.length=a,r;var c=f.value;try{r[a]=c}catch(s){try{P(u)}finally{throw s}}a++}}function b(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function k(t){return void 0===t}function m(t){return null===t}function O(t){return"object"==typeof t?null!==t:"function"==typeof t}function E(t,e){switch(b(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",n=A(t,i);if(void 0!==n){var o=n.call(t,r);if(O(o))throw new TypeError;return o}return function(t,e){if("string"===e){var r=t.toString;if(x(r)){var n=r.call(t);if(!O(n))return n}var i=t.valueOf;if(x(i)){var n=i.call(t);if(!O(n))return n}}else{var i=t.valueOf;if(x(i)){var n=i.call(t);if(!O(n))return n}var o=t.toString;if(x(o)){var n=o.call(t);if(!O(n))return n}}throw new TypeError}(t,"default"===r?"number":r)}function T(t){var e=E(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function j(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function x(t){return"function"==typeof t}function M(t){return"function"==typeof t}function A(t,e){var r=t[e];if(null!=r){if(!x(r))throw new TypeError;return r}}function S(t){var e=t.next();return!e.done&&e}function P(t){var e=t.return;e&&e.call(t)}function K(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===s)return e;if(e!==s)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var i=n.constructor;return"function"!=typeof i?e:i===t?e:i}function I(t){return t.__=void 0,delete t.__,t}t("decorate",function(t,e,r,n){if(k(r)){if(!j(t))throw new TypeError;if(!M(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=t[r],i=n(e);if(!k(i)&&!m(i)){if(!M(i))throw new TypeError;e=i}}return e}(t,e)}if(!j(t))throw new TypeError;if(!O(e))throw new TypeError;if(!O(n)&&!k(n)&&!m(n))throw new TypeError;return m(n)&&(n=void 0),r=T(r),function(t,e,r,n){for(var i=t.length-1;i>=0;--i){var o=t[i],u=o(e,r,n);if(!k(u)&&!m(u)){if(!O(u))throw new TypeError;n=u}}return n}(t,e,r,n)}),t("metadata",function(t,e){return function(r,n){if(!O(r))throw new TypeError;if(!k(n)&&!function(t){switch(b(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;w(t,e,r,n)}}),t("defineMetadata",function(t,e,r,n){if(!O(r))throw new TypeError;k(n)||(n=T(n));return w(t,e,r,n)}),t("hasMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));return function t(e,r,n){var i=_(e,r,n);if(i)return!0;var o=K(r);if(!m(o))return t(e,o,n);return!1}(t,e,r)}),t("hasOwnMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));return _(t,e,r)}),t("getMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));return function t(e,r,n){var i=_(e,r,n);if(i)return d(e,r,n);var o=K(r);if(!m(o))return t(e,o,n);return}(t,e,r)}),t("getOwnMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));return d(t,e,r)}),t("getMetadataKeys",function(t,e){if(!O(t))throw new TypeError;k(e)||(e=T(e));return function t(e,r){var n=g(e,r);var i=K(e);if(null===i)return n;var o=t(i,r);if(o.length<=0)return n;if(n.length<=0)return o;var u=new p;var a=[];for(var f=0,c=n;f<c.length;f++){var s=c[f],h=u.has(s);h||(u.add(s),a.push(s))}for(var y=0,l=o;y<l.length;y++){var s=l[y],h=u.has(s);h||(u.add(s),a.push(s))}return a}(t,e)}),t("getOwnMetadataKeys",function(t,e){if(!O(t))throw new TypeError;k(e)||(e=T(e));return g(t,e)}),t("deleteMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));var n=v(e,r,!1);if(k(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var i=l.get(e);return i.delete(r),i.size>0||(l.delete(e),!0)})}(o)}()}(t||(t={}));
},{"process":"GJTy"}],"v8p8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class t{hash(t,e){const r=Object.assign({msgFormat:"string",outFormat:"hex"},e);switch(t=u(t),r.msgFormat){default:case"string":t=u(t);break;case"hex-bytes":t=function(t){const e=t.replace(" ","");return""==e?"":e.match(/.{2}/g).map(t=>String.fromCharCode(parseInt(t,16))).join("")}(t)}const n=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s=(t+=String.fromCharCode(128)).length/4+2,h=Math.ceil(s/16),a=new Array(h);for(let l=0;l<h;l++){a[l]=new Array(16);for(let e=0;e<16;e++)a[l][e]=t.charCodeAt(64*l+4*e+0)<<24|t.charCodeAt(64*l+4*e+1)<<16|t.charCodeAt(64*l+4*e+2)<<8|t.charCodeAt(64*l+4*e+3)<<0}const i=8*(t.length-1)/Math.pow(2,32),c=8*(t.length-1)>>>0;a[h-1][14]=Math.floor(i),a[h-1][15]=c;for(let l=0;l<h;l++){const t=new Array(64);for(let n=0;n<16;n++)t[n]=a[l][n];for(let n=16;n<64;n++)t[n]=this.σ1(t[n-2])+t[n-7]+this.σ0(t[n-15])+t[n-16]>>>0;let e=o[0],r=o[1],s=o[2],h=o[3],i=o[4],c=o[5],R=o[6],u=o[7];for(let o=0;o<64;o++){const a=u+this.Σ1(i)+this.Ch(i,c,R)+n[o]+t[o],l=this.Σ0(e)+this.Maj(e,r,s);u=R,R=c,c=i,i=h+a>>>0,h=s,s=r,r=e,e=a+l>>>0}o[0]=o[0]+e>>>0,o[1]=o[1]+r>>>0,o[2]=o[2]+s>>>0,o[3]=o[3]+h>>>0,o[4]=o[4]+i>>>0,o[5]=o[5]+c>>>0,o[6]=o[6]+R>>>0,o[7]=o[7]+u>>>0}for(let l=0;l<o.length;l++)o[l]=("00000000"+o[l].toString(16)).slice(-8);const R="hex-w"==r.outFormat?" ":"";return o.join(R);function u(t){try{return(new TextEncoder).encode(t).reduce((t,e)=>t+String.fromCharCode(e),"")}catch(e){return unescape(encodeURIComponent(t))}}}ROTR(t,e){return e>>>t|e<<32-t}"Σ0"(t){return this.ROTR(2,t)^this.ROTR(13,t)^this.ROTR(22,t)}"Σ1"(t){return this.ROTR(6,t)^this.ROTR(11,t)^this.ROTR(25,t)}"σ0"(t){return this.ROTR(7,t)^this.ROTR(18,t)^t>>>3}"σ1"(t){return this.ROTR(17,t)^this.ROTR(19,t)^t>>>10}Ch(t,e,r){return t&e^~t&r}Maj(t,e,r){return t&e^t&r^e&r}}exports.Sha256=t,exports.sha256=new t;
},{}],"DzP1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./sha256");function r(r){return e.sha256.hash(r)}exports.createUniqueHash=r;
},{"./sha256":"v8p8"}],"XLXI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class e extends Error{constructor(r){super(`Cannot determine a class of the requesting service '${JSON.stringify(r)}'`),this.name="ServiceNotFoundError",Object.setPrototypeOf(this,e.prototype)}}exports.MissingProvidedServiceTypeError=e;
},{}],"TYvc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class e{constructor(e){this.name=e}}exports.Token=e;class s extends e{}exports.InjectionToken=s;
},{}],"wh7Q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../Token");class t extends Error{constructor(i){super(),this.name="ServiceNotFoundError","string"==typeof i?this.message=`Service '${i}' was not found, looks like it was not registered in the container. `+`Register it by calling Container.set('${JSON.stringify(i)}', ...) before using service.`:i instanceof e.Token&&i.name?this.message=`Service '${i.name}' was not found, looks like it was not registered in the container. `+"Register it by calling Container.set before using service.":i instanceof e.Token&&(this.message="Service with a given token was not found, looks like it was not registered in the container. Register it by calling Container.set before using service."),Object.setPrototypeOf(this,t.prototype)}}exports.ServiceNotFoundError=t;
},{"../Token":"TYvc"}],"BRSC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class t{constructor(){this._constructors=new Map}getConstructor(t){return this._constructors.get(t)}getByClass(t){return this._constructors.get(t.name).value}createConstructor(t,r){return this._constructors.has(t)?this.getConstructor(t):(this._constructors.set(t,r),this.getConstructor(t))}triggerOnInit(t){const r=this._constructors.get(t.name);r.value&&r.value.OnInit&&r.value.OnInit.bind(r.value)()}}exports.ConstructorWatcherService=t,exports.constructorWatcherService=new t;
},{}],"lWH0":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./constructor-watcher"));
},{"./constructor-watcher":"BRSC"}],"u1LW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./Container"),t=require("./error/MissingProvidedServiceTypeError"),r=require("./error/ServiceNotFoundError"),i=require("./Token"),n=require("../services/constructor-watcher");class s{constructor(e){this.services=new Map,this.id=e}has(e){return!!this.findService(e)}get(t){const r=e.Container.of(void 0),i=r.findService(t),n=this.findService(t);if(i&&!0===i.global)return this.getServiceValue(t,i);if(n)return this.getServiceValue(t,n);if(i&&this!==r){const e=Object.assign({},i);e.value=void 0;const r=this.getServiceValue(t,e);return this.set(t,r),r}return this.getServiceValue(t,i)}getMany(e){return this.filterServices(e).map(t=>this.getServiceValue(e,t))}set(e,t){if(e instanceof Array)return e.forEach(e=>this.set(e)),this;if("string"==typeof e||e instanceof i.Token)return this.set({id:e,value:t});if("object"==typeof e&&e.service)return this.set({id:e.service,value:t});if(e instanceof Function)return this.set({type:e,id:e,value:t});const r=e,n=this.services.get(r);return n&&!0!==n.multiple?Object.assign(n,r):this.services.set(r,r),this}remove(...e){return e.forEach(e=>{this.filterServices(e).forEach(e=>{this.services.delete(e)})}),this}reset(){return this.services.clear(),this}filterServices(e){return Array.from(this.services.values()).filter(t=>t.id?t.id===e:!!(t.type&&e instanceof Function)&&(t.type===e||e.prototype instanceof t.type))}findService(e){return Array.from(this.services.values()).find(t=>t.id?e instanceof Object&&t.id instanceof i.Token&&e.service instanceof i.Token?t.id===e.service:t.id===e:!!(t.type&&e instanceof Function)&&t.type===e)}getServiceValue(e,s){if(s&&void 0!==s.value)return s.value;if(!(s&&s.type||s&&s.factory||!("string"==typeof e||e instanceof i.Token)))throw new r.ServiceNotFoundError(e);let o=void 0;if(s&&s.type?o=s.type:s&&s.id instanceof Function?o=s.id:e instanceof Function&&(o=e),!s){if(!o)throw new t.MissingProvidedServiceTypeError(e);s={type:o},this.services.set(s,s)}const c=o&&Reflect&&Reflect.getMetadata?Reflect.getMetadata("design:paramtypes",o):void 0;let a,u=c?this.initializeParams(o,c):[];if(s.factory)u=u.filter(e=>void 0!==e),a=s.factory instanceof Array?this.get(s.factory[0])[s.factory[1]](...u):s.factory(...u,this);else{if(!o)throw new t.MissingProvidedServiceTypeError(e);u.unshift(null),u.push(this),o.prototype.OnBefore&&o.prototype.OnBefore.bind(o)(),a=new(o.bind.apply(o,u)),n.constructorWatcherService.createConstructor(o.name,{type:o,value:a}),a.OnInit&&a.OnInit.bind(a)()}return s&&!s.transient&&a&&(s.value=a),o&&this.applyPropertyHandlers(o,a),a}initializeParams(t,r){return r.map((r,i)=>{const n=Array.from(e.Container.handlers.values()).find(e=>e.object===t&&e.index===i);return n?n.value(this):r&&r.name&&!this.isTypePrimitive(r.name)?this.get(r):void 0})}isTypePrimitive(e){return-1!==["string","boolean","number","object"].indexOf(e.toLowerCase())}applyPropertyHandlers(t,r){e.Container.handlers.forEach(e=>{"number"!=typeof e.index&&(e.object.constructor===t||t.prototype instanceof e.object.constructor)&&(r[e.propertyName]=e.value(this))})}}exports.ContainerInstance=s;
},{"./Container":"XLQw","./error/MissingProvidedServiceTypeError":"XLXI","./error/ServiceNotFoundError":"wh7Q","./Token":"TYvc","../services/constructor-watcher":"lWH0"}],"XLQw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./ContainerInstance");class e{static of(e){if(void 0===e)return this.globalInstance;let s=this.instances.get(e);return s||(s=new t.ContainerInstance(e),this.instances.set(e,s)),s}static has(t){return this.globalInstance.has(t)}static get(t){return this.globalInstance.get(t)}static getMany(t){return this.globalInstance.getMany(t)}static set(t,e){return this.globalInstance.set(t,e),this}static remove(...t){return this.globalInstance.remove(...t),this}static reset(t){if(t){const e=this.instances.get(t);e&&(e.reset(),this.instances.delete(t))}else this.globalInstance.reset(),Array.from(this.instances.values()).forEach(t=>t.reset());return this}static registerHandler(t){return this.handlers.set(t,t),this}static import(t){return this}}e.globalInstance=new t.ContainerInstance(void 0),e.instances=new Map,e.handlers=new Map,exports.Container=e;
},{"./ContainerInstance":"u1LW"}],"dIzU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./create-unique-hash"),t=require("../container/Container"),n=require("../container/Token");function a(a,r){return i=>{const o=e.createUniqueHash(`${i}${JSON.stringify(a,null,4)}`);Object.defineProperty(i,"originalName",{value:i.name||i.constructor.name,writable:!1}),Object.defineProperty(i,"name",{value:o,writable:!0});const l=e=>e.charAt(0).toUpperCase()+e.slice(1);i.metadata={moduleName:i.originalName,moduleHash:o,options:a||null,type:r.type,raw:`\n        ---- @${l(r.type)} '${i.name}' metadata----\n        @${l(r.type)}(${JSON.stringify(a,null,4)})\n        ${i.originalName}\n        `};const s={type:i};"string"==typeof a||a instanceof n.Token?(s.id=a,s.multiple=a.multiple,s.global=a.global||!1,s.transient=a.transient):a&&(s.id=a.id,s.factory=a.factory,s.multiple=a.multiple,s.global=a.global||!1,s.transient=a.transient),t.Container.set(s)}}exports.ReflectDecorator=a;
},{"./create-unique-hash":"DzP1","../container/Container":"XLQw","../container/Token":"TYvc"}],"e2A8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../helpers/reflect.decorator");function r(r){return e.ReflectDecorator(r,{type:"service"})}exports.Service=r;
},{"../../helpers/reflect.decorator":"dIzU"}],"UeX4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../decorators/service/Service");exports.Injectable=e.Service;var r=require("./Container");exports.Container=r.Container;var n=require("./ContainerInstance");exports.ContainerInstance=n.ContainerInstance;var t=require("./Token");exports.InjectionToken=t.Token;
},{"../decorators/service/Service":"e2A8","./Container":"XLQw","./ContainerInstance":"u1LW","./Token":"TYvc"}],"vCxL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__extends=e,exports.__rest=n,exports.__decorate=o,exports.__param=a,exports.__metadata=u,exports.__awaiter=i,exports.__generator=c,exports.__exportStar=f,exports.__values=l,exports.__read=s,exports.__spread=p,exports.__spreadArrays=y,exports.__await=_,exports.__asyncGenerator=h,exports.__asyncDelegator=v,exports.__asyncValues=b,exports.__makeTemplateObject=d,exports.__importStar=x,exports.__importDefault=w,exports.__assign=void 0;var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};function e(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var r=function(){return exports.__assign=r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function n(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function o(t,e,r,n){var o,a=arguments.length,u=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(u=(a<3?o(u):a>3?o(e,r,u):o(e,r))||u);return a>3&&u&&Object.defineProperty(e,r,u),u}function a(t,e){return function(r,n){e(r,n,t)}}function u(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function i(t,e,r,n){return new(r||(r=Promise))(function(o,a){function u(t){try{c(n.next(t))}catch(e){a(e)}}function i(t){try{c(n.throw(t))}catch(e){a(e)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(u,i)}c((n=n.apply(t,e||[])).next())})}function c(t,e){var r,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(i){a=[6,i],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}function f(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}function l(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function s(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)u.push(n.value)}catch(i){o={error:i}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return u}function p(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t}function y(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var a=arguments[e],u=0,i=a.length;u<i;u++,o++)n[o]=a[u];return n}function _(t){return this instanceof _?(this.v=t,this):new _(t)}function h(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),a=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){a.push([t,e,r,n])>1||i(t,e)})})}function i(t,e){try{(r=o[t](e)).value instanceof _?Promise.resolve(r.value.v).then(c,f):l(a[0][2],r)}catch(n){l(a[0][3],n)}var r}function c(t){i("next",t)}function f(t){i("throw",t)}function l(t,e){t(e),a.shift(),a.length&&i(a[0][0],a[0][1])}}function v(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:_(t[n](e)),done:"return"===n}:o?o(e):e}:o}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof l?l(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise(function(n,o){(function(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)})(n,o,(e=t[r](e)).done,e.value)})}}}function d(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function x(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function w(t){return t&&t.__esModule?t:{default:t}}exports.__assign=r;
},{}],"Qnsq":[function(require,module,exports) {
"use strict";function e(e){return"function"==typeof e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isFunction=e;
},{}],"Q3iD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.config=void 0;var e=!1,r={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack;e=r},get useDeprecatedSynchronousErrorHandling(){return e}};exports.config=r;
},{}],"JfKC":[function(require,module,exports) {
"use strict";function e(e){setTimeout(function(){throw e},0)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hostReportError=e;
},{}],"wIlR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.empty=void 0;var e=require("./config"),r=require("./util/hostReportError"),o={closed:!0,next:function(e){},error:function(o){if(e.config.useDeprecatedSynchronousErrorHandling)throw o;(0,r.hostReportError)(o)},complete:function(){}};exports.empty=o;
},{"./config":"Q3iD","./util/hostReportError":"JfKC"}],"KeTG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isArray=void 0;var r=Array.isArray||function(r){return r&&"number"==typeof r.length};exports.isArray=r;
},{}],"nU7r":[function(require,module,exports) {
"use strict";function e(e){return null!==e&&"object"==typeof e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isObject=e;
},{}],"pMaL":[function(require,module,exports) {
"use strict";function r(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map(function(r,t){return t+1+") "+r.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}Object.defineProperty(exports,"__esModule",{value:!0}),exports.UnsubscriptionError=void 0,r.prototype=Object.create(Error.prototype);var t=r;exports.UnsubscriptionError=t;
},{}],"I8KM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Subscription=void 0;var r=require("./util/isArray"),i=require("./util/isObject"),s=require("./util/isFunction"),t=require("./util/UnsubscriptionError"),n=function(){function n(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._unsubscribe=r)}var o;return n.prototype.unsubscribe=function(){var o;if(!this.closed){var u=this._parentOrParents,c=this._unsubscribe,a=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,u instanceof n)u.remove(this);else if(null!==u)for(var f=0;f<u.length;++f){u[f].remove(this)}if((0,s.isFunction)(c))try{c.call(this)}catch(h){o=h instanceof t.UnsubscriptionError?e(h.errors):[h]}if((0,r.isArray)(a)){f=-1;for(var p=a.length;++f<p;){var l=a[f];if((0,i.isObject)(l))try{l.unsubscribe()}catch(h){o=o||[],h instanceof t.UnsubscriptionError?o=o.concat(e(h.errors)):o.push(h)}}}if(o)throw new t.UnsubscriptionError(o)}},n.prototype.add=function(r){var i=r;if(!r)return n.EMPTY;switch(typeof r){case"function":i=new n(r);case"object":if(i===this||i.closed||"function"!=typeof i.unsubscribe)return i;if(this.closed)return i.unsubscribe(),i;if(!(i instanceof n)){var s=i;(i=new n)._subscriptions=[s]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var t=i._parentOrParents;if(null===t)i._parentOrParents=this;else if(t instanceof n){if(t===this)return i;i._parentOrParents=[t,this]}else{if(-1!==t.indexOf(this))return i;t.push(this)}var e=this._subscriptions;return null===e?this._subscriptions=[i]:e.push(i),i},n.prototype.remove=function(r){var i=this._subscriptions;if(i){var s=i.indexOf(r);-1!==s&&i.splice(s,1)}},n.EMPTY=((o=new n).closed=!0,o),n}();function e(r){return r.reduce(function(r,i){return r.concat(i instanceof t.UnsubscriptionError?i.errors:i)},[])}exports.Subscription=n;
},{"./util/isArray":"KeTG","./util/isObject":"nU7r","./util/isFunction":"Qnsq","./util/UnsubscriptionError":"pMaL"}],"yAZp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$$rxSubscriber=exports.rxSubscriber=void 0;var r="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random();exports.rxSubscriber=r;var e=r;exports.$$rxSubscriber=e;
},{}],"RaFB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SafeSubscriber=exports.Subscriber=void 0;var r=u(require("tslib")),t=require("./util/isFunction"),e=require("./Observer"),n=require("./Subscription"),i=require("../internal/symbol/rxSubscriber"),s=require("./config"),o=require("./util/hostReportError");function c(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return c=function(){return r},r}function u(r){if(r&&r.__esModule)return r;var t=c();if(t&&t.has(r))return t.get(r);var e={};if(null!=r){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var s=n?Object.getOwnPropertyDescriptor(r,i):null;s&&(s.get||s.set)?Object.defineProperty(e,i,s):e[i]=r[i]}}return e.default=r,t&&t.set(r,e),e}var p=function(t){function n(r,i,s){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=e.empty;break;case 1:if(!r){o.destination=e.empty;break}if("object"==typeof r){r instanceof n?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new b(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new b(o,r,i,s)}return o}return r.__extends(n,t),n.prototype[i.rxSubscriber]=function(){return this},n.create=function(r,t,e){var i=new n(r,t,e);return i.syncErrorThrowable=!1,i},n.prototype.next=function(r){this.isStopped||this._next(r)},n.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},n.prototype._next=function(r){this.destination.next(r)},n.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},n.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},n.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},n}(n.Subscription);exports.Subscriber=p;var b=function(n){function i(r,i,s,o){var c,u=n.call(this)||this;u._parentSubscriber=r;var p=u;return(0,t.isFunction)(i)?c=i:i&&(c=i.next,s=i.error,o=i.complete,i!==e.empty&&(p=Object.create(i),(0,t.isFunction)(p.unsubscribe)&&u.add(p.unsubscribe.bind(p)),p.unsubscribe=u.unsubscribe.bind(u))),u._context=p,u._next=c,u._error=s,u._complete=o,u}return r.__extends(i,n),i.prototype.next=function(r){if(!this.isStopped&&this._next){var t=this._parentSubscriber;s.config.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},i.prototype.error=function(r){if(!this.isStopped){var t=this._parentSubscriber,e=s.config.useDeprecatedSynchronousErrorHandling;if(this._error)e&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(t.syncErrorThrowable)e?(t.syncErrorValue=r,t.syncErrorThrown=!0):(0,o.hostReportError)(r),this.unsubscribe();else{if(this.unsubscribe(),e)throw r;(0,o.hostReportError)(r)}}},i.prototype.complete=function(){var r=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var e=function(){return r._complete.call(r._context)};s.config.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}},i.prototype.__tryOrUnsub=function(r,t){try{r.call(this._context,t)}catch(e){if(this.unsubscribe(),s.config.useDeprecatedSynchronousErrorHandling)throw e;(0,o.hostReportError)(e)}},i.prototype.__tryOrSetError=function(r,t,e){if(!s.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,e)}catch(n){return s.config.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=n,r.syncErrorThrown=!0,!0):((0,o.hostReportError)(n),!0)}return!1},i.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},i}(p);exports.SafeSubscriber=b;
},{"tslib":"vCxL","./util/isFunction":"Qnsq","./Observer":"wIlR","./Subscription":"I8KM","../internal/symbol/rxSubscriber":"yAZp","./config":"Q3iD","./util/hostReportError":"JfKC"}],"wHmS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.canReportError=e;var r=require("../Subscriber");function e(e){for(;e;){var t=e,o=t.closed,i=t.destination,n=t.isStopped;if(o||n)return!1;e=i&&i instanceof r.Subscriber?i:null}return!0}
},{"../Subscriber":"RaFB"}],"SEU0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toSubscriber=i;var r=require("../Subscriber"),e=require("../symbol/rxSubscriber"),b=require("../Observer");function i(i,u,s){if(i){if(i instanceof r.Subscriber)return i;if(i[e.rxSubscriber])return i[e.rxSubscriber]()}return i||u||s?new r.Subscriber(i,u,s):new r.Subscriber(b.empty)}
},{"../Subscriber":"RaFB","../symbol/rxSubscriber":"yAZp","../Observer":"wIlR"}],"tjV3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.observable=void 0;var e="function"==typeof Symbol&&Symbol.observable||"@@observable";exports.observable=e;
},{}],"rXfM":[function(require,module,exports) {
"use strict";function e(){}Object.defineProperty(exports,"__esModule",{value:!0}),exports.noop=e;
},{}],"HQCS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pipe=r,exports.pipeFromArray=n;var e=require("./noop");function r(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n(e)}function n(r){return r?1===r.length?r[0]:function(e){return r.reduce(function(e,r){return r(e)},e)}:e.noop}
},{"./noop":"rXfM"}],"wbSE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Observable=void 0;var r=require("./util/canReportError"),e=require("./util/toSubscriber"),o=require("./symbol/observable"),t=require("./util/pipe"),n=require("./config"),i=function(){function i(r){this._isScalar=!1,r&&(this._subscribe=r)}return i.prototype.lift=function(r){var e=new i;return e.source=this,e.operator=r,e},i.prototype.subscribe=function(r,o,t){var i=this.operator,s=(0,e.toSubscriber)(r,o,t);if(i?s.add(i.call(s,this.source)):s.add(this.source||n.config.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),n.config.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},i.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(o){n.config.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=o),(0,r.canReportError)(e)?e.error(o):console.warn(o)}},i.prototype.forEach=function(r,e){var o=this;return new(e=s(e))(function(e,t){var n;n=o.subscribe(function(e){try{r(e)}catch(o){t(o),n&&n.unsubscribe()}},t,e)})},i.prototype._subscribe=function(r){var e=this.source;return e&&e.subscribe(r)},i.prototype[o.observable]=function(){return this},i.prototype.pipe=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return 0===r.length?this:(0,t.pipeFromArray)(r)(this)},i.prototype.toPromise=function(r){var e=this;return new(r=s(r))(function(r,o){var t;e.subscribe(function(r){return t=r},function(r){return o(r)},function(){return r(t)})})},i.create=function(r){return new i(r)},i}();function s(r){if(r||(r=n.config.Promise||Promise),!r)throw new Error("no Promise impl found");return r}exports.Observable=i;
},{"./util/canReportError":"wHmS","./util/toSubscriber":"SEU0","./symbol/observable":"tjV3","./util/pipe":"HQCS","./config":"Q3iD"}],"xQEi":[function(require,module,exports) {
"use strict";function r(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObjectUnsubscribedError=void 0,r.prototype=Object.create(Error.prototype);var e=r;exports.ObjectUnsubscribedError=e;
},{}],"fyc3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SubjectSubscription=void 0;var e=i(require("tslib")),t=require("./Subscription");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var i={};if(null!=e){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(i,n,u):i[n]=e[n]}}return i.default=e,t&&t.set(e,i),i}var s=function(t){function r(e,r){var i=t.call(this)||this;return i.subject=e,i.subscriber=r,i.closed=!1,i}return e.__extends(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var r=t.indexOf(this.subscriber);-1!==r&&t.splice(r,1)}}},r}(t.Subscription);exports.SubjectSubscription=s;
},{"tslib":"vCxL","./Subscription":"I8KM"}],"r9t1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AnonymousSubject=exports.Subject=exports.SubjectSubscriber=void 0;var r=c(require("tslib")),e=require("./Observable"),t=require("./Subscriber"),o=require("./Subscription"),s=require("./util/ObjectUnsubscribedError"),i=require("./SubjectSubscription"),n=require("../internal/symbol/rxSubscriber");function u(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return u=function(){return r},r}function c(r){if(r&&r.__esModule)return r;var e=u();if(e&&e.has(r))return e.get(r);var t={};if(null!=r){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){var i=o?Object.getOwnPropertyDescriptor(r,s):null;i&&(i.get||i.set)?Object.defineProperty(t,s,i):t[s]=r[s]}}return t.default=r,e&&e.set(r,t),t}var b=function(e){function t(r){var t=e.call(this,r)||this;return t.destination=r,t}return r.__extends(t,e),t}(t.Subscriber);exports.SubjectSubscriber=b;var p=function(t){function u(){var r=t.call(this)||this;return r.observers=[],r.closed=!1,r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return r.__extends(u,t),u.prototype[n.rxSubscriber]=function(){return new b(this)},u.prototype.lift=function(r){var e=new h(this,this);return e.operator=r,e},u.prototype.next=function(r){if(this.closed)throw new s.ObjectUnsubscribedError;if(!this.isStopped)for(var e=this.observers,t=e.length,o=e.slice(),i=0;i<t;i++)o[i].next(r)},u.prototype.error=function(r){if(this.closed)throw new s.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=r,this.isStopped=!0;for(var e=this.observers,t=e.length,o=e.slice(),i=0;i<t;i++)o[i].error(r);this.observers.length=0},u.prototype.complete=function(){if(this.closed)throw new s.ObjectUnsubscribedError;this.isStopped=!0;for(var r=this.observers,e=r.length,t=r.slice(),o=0;o<e;o++)t[o].complete();this.observers.length=0},u.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},u.prototype._trySubscribe=function(r){if(this.closed)throw new s.ObjectUnsubscribedError;return t.prototype._trySubscribe.call(this,r)},u.prototype._subscribe=function(r){if(this.closed)throw new s.ObjectUnsubscribedError;return this.hasError?(r.error(this.thrownError),o.Subscription.EMPTY):this.isStopped?(r.complete(),o.Subscription.EMPTY):(this.observers.push(r),new i.SubjectSubscription(this,r))},u.prototype.asObservable=function(){var r=new e.Observable;return r.source=this,r},u.create=function(r,e){return new h(r,e)},u}(e.Observable);exports.Subject=p;var h=function(e){function t(r,t){var o=e.call(this)||this;return o.destination=r,o.source=t,o}return r.__extends(t,e),t.prototype.next=function(r){var e=this.destination;e&&e.next&&e.next(r)},t.prototype.error=function(r){var e=this.destination;e&&e.error&&this.destination.error(r)},t.prototype.complete=function(){var r=this.destination;r&&r.complete&&this.destination.complete()},t.prototype._subscribe=function(r){return this.source?this.source.subscribe(r):o.Subscription.EMPTY},t}(p);exports.AnonymousSubject=h;
},{"tslib":"vCxL","./Observable":"wbSE","./Subscriber":"RaFB","./Subscription":"I8KM","./util/ObjectUnsubscribedError":"xQEi","./SubjectSubscription":"fyc3","../internal/symbol/rxSubscriber":"yAZp"}],"vT9o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refCount=o;var e=r(require("tslib")),n=require("../Subscriber");function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;var n=t();if(n&&n.has(e))return n.get(e);var r={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var i=o?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(r,c,i):r[c]=e[c]}}return r.default=e,n&&n.set(e,r),r}function o(){return function(e){return e.lift(new c(e))}}var c=function(){function e(e){this.connectable=e}return e.prototype.call=function(e,n){var t=this.connectable;t._refCount++;var r=new i(e,t),o=n.subscribe(r);return r.closed||(r.connection=t.connect()),o},e}(),i=function(n){function t(e,t){var r=n.call(this,e)||this;return r.connectable=t,r}return e.__extends(t,n),t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var n=e._refCount;if(n<=0)this.connection=null;else if(e._refCount=n-1,n>1)this.connection=null;else{var t=this.connection,r=e._connection;this.connection=null,!r||t&&r!==t||r.unsubscribe()}}else this.connection=null},t}(n.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"kkfD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.connectableObservableDescriptor=exports.ConnectableObservable=void 0;var e=u(require("tslib")),t=require("../Subject"),n=require("../Observable"),r=require("../Subscriber"),o=require("../Subscription"),c=require("../operators/refCount");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}}return n.default=e,t&&t.set(e,n),n}var s=function(t){function n(e,n){var r=t.call(this)||this;return r.source=e,r.subjectFactory=n,r._refCount=0,r._isComplete=!1,r}return e.__extends(n,t),n.prototype._subscribe=function(e){return this.getSubject().subscribe(e)},n.prototype.getSubject=function(){var e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject},n.prototype.connect=function(){var e=this._connection;return e||(this._isComplete=!1,(e=this._connection=new o.Subscription).add(this.source.subscribe(new a(this.getSubject(),this))),e.closed&&(this._connection=null,e=o.Subscription.EMPTY)),e},n.prototype.refCount=function(){return(0,c.refCount)()(this)},n}(n.Observable);exports.ConnectableObservable=s;var l=s.prototype,b={operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:l._subscribe},_isComplete:{value:l._isComplete,writable:!0},getSubject:{value:l.getSubject},connect:{value:l.connect},refCount:{value:l.refCount}};exports.connectableObservableDescriptor=b;var a=function(t){function n(e,n){var r=t.call(this,e)||this;return r.connectable=n,r}return e.__extends(n,t),n.prototype._error=function(e){this._unsubscribe(),t.prototype._error.call(this,e)},n.prototype._complete=function(){this.connectable._isComplete=!0,this._unsubscribe(),t.prototype._complete.call(this)},n.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}},n}(t.SubjectSubscriber),p=function(){function e(e){this.connectable=e}return e.prototype.call=function(e,t){var n=this.connectable;n._refCount++;var r=new f(e,n),o=t.subscribe(r);return r.closed||(r.connection=n.connect()),o},e}(),f=function(t){function n(e,n){var r=t.call(this,e)||this;return r.connectable=n,r}return e.__extends(n,t),n.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._refCount;if(t<=0)this.connection=null;else if(e._refCount=t-1,t>1)this.connection=null;else{var n=this.connection,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else this.connection=null},n}(r.Subscriber);
},{"tslib":"vCxL","../Subject":"r9t1","../Observable":"wbSE","../Subscriber":"RaFB","../Subscription":"I8KM","../operators/refCount":"vT9o"}],"dNgG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.groupBy=u,exports.GroupedObservable=void 0;var e=s(require("tslib")),t=require("../Subscriber"),r=require("../Subscription"),o=require("../Observable"),n=require("../Subject");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=o?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=e[n]}}return r.default=e,t&&t.set(e,r),r}function u(e,t,r,o){return function(n){return n.lift(new c(e,t,r,o))}}var c=function(){function e(e,t,r,o){this.keySelector=e,this.elementSelector=t,this.durationSelector=r,this.subjectSelector=o}return e.prototype.call=function(e,t){return t.subscribe(new p(e,this.keySelector,this.elementSelector,this.durationSelector,this.subjectSelector))},e}(),p=function(t){function r(e,r,o,n,i){var s=t.call(this,e)||this;return s.keySelector=r,s.elementSelector=o,s.durationSelector=n,s.subjectSelector=i,s.groups=null,s.attemptedToUnsubscribe=!1,s.count=0,s}return e.__extends(r,t),r.prototype._next=function(e){var t;try{t=this.keySelector(e)}catch(r){return void this.error(r)}this._group(e,t)},r.prototype._group=function(e,t){var r=this.groups;r||(r=this.groups=new Map);var o,i=r.get(t);if(this.elementSelector)try{o=this.elementSelector(e)}catch(c){this.error(c)}else o=e;if(!i){i=this.subjectSelector?this.subjectSelector():new n.Subject,r.set(t,i);var s=new a(t,i,this);if(this.destination.next(s),this.durationSelector){var u=void 0;try{u=this.durationSelector(new a(t,i))}catch(c){return void this.error(c)}this.add(u.subscribe(new l(t,i,this)))}}i.closed||i.next(o)},r.prototype._error=function(e){var t=this.groups;t&&(t.forEach(function(t,r){t.error(e)}),t.clear()),this.destination.error(e)},r.prototype._complete=function(){var e=this.groups;e&&(e.forEach(function(e,t){e.complete()}),e.clear()),this.destination.complete()},r.prototype.removeGroup=function(e){this.groups.delete(e)},r.prototype.unsubscribe=function(){this.closed||(this.attemptedToUnsubscribe=!0,0===this.count&&t.prototype.unsubscribe.call(this))},r}(t.Subscriber),l=function(t){function r(e,r,o){var n=t.call(this,r)||this;return n.key=e,n.group=r,n.parent=o,n}return e.__extends(r,t),r.prototype._next=function(e){this.complete()},r.prototype._unsubscribe=function(){var e=this.parent,t=this.key;this.key=this.parent=null,e&&e.removeGroup(t)},r}(t.Subscriber),a=function(t){function o(e,r,o){var n=t.call(this)||this;return n.key=e,n.groupSubject=r,n.refCountSubscription=o,n}return e.__extends(o,t),o.prototype._subscribe=function(e){var t=new r.Subscription,o=this.refCountSubscription,n=this.groupSubject;return o&&!o.closed&&t.add(new b(o)),t.add(n.subscribe(e)),t},o}(o.Observable);exports.GroupedObservable=a;var b=function(t){function r(e){var r=t.call(this)||this;return r.parent=e,e.count++,r}return e.__extends(r,t),r.prototype.unsubscribe=function(){var e=this.parent;e.closed||this.closed||(t.prototype.unsubscribe.call(this),e.count-=1,0===e.count&&e.attemptedToUnsubscribe&&e.unsubscribe())},r}(r.Subscription);
},{"tslib":"vCxL","../Subscriber":"RaFB","../Subscription":"I8KM","../Observable":"wbSE","../Subject":"r9t1"}],"MPU6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BehaviorSubject=void 0;var e=o(require("tslib")),t=require("./Subject"),r=require("./util/ObjectUnsubscribedError");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;var t=n();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}}return r.default=e,t&&t.set(e,r),r}var u=function(t){function n(e){var r=t.call(this)||this;return r._value=e,r}return e.__extends(n,t),Object.defineProperty(n.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),n.prototype._subscribe=function(e){var r=t.prototype._subscribe.call(this,e);return r&&!r.closed&&e.next(this._value),r},n.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new r.ObjectUnsubscribedError;return this._value},n.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},n}(t.Subject);exports.BehaviorSubject=u;
},{"tslib":"vCxL","./Subject":"r9t1","./util/ObjectUnsubscribedError":"xQEi"}],"arqX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Action=void 0;var e=n(require("tslib")),t=require("../Subscription");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}}return n.default=e,t&&t.set(e,n),n}var i=function(t){function r(e,r){return t.call(this)||this}return e.__extends(r,t),r.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},r}(t.Subscription);exports.Action=i;
},{"tslib":"vCxL","../Subscription":"I8KM"}],"llYF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AsyncAction=void 0;var t=r(require("tslib")),e=require("./Action");function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function r(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var c=n?Object.getOwnPropertyDescriptor(t,s):null;c&&(c.get||c.set)?Object.defineProperty(r,s,c):r[s]=t[s]}}return r.default=t,e&&e.set(t,r),r}var n=function(e){function i(t,i){var r=e.call(this,t,i)||this;return r.scheduler=t,r.work=i,r.pending=!1,r}return t.__extends(i,e),i.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var i=this.id,r=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(r,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},i.prototype.requestAsyncId=function(t,e,i){return void 0===i&&(i=0),setInterval(t.flush.bind(t,this),i)},i.prototype.recycleAsyncId=function(t,e,i){if(void 0===i&&(i=0),null!==i&&this.delay===i&&!1===this.pending)return e;clearInterval(e)},i.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(t,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},i.prototype._execute=function(t,e){var i=!1,r=void 0;try{this.work(t)}catch(n){i=!0,r=!!n&&n||new Error(n)}if(i)return this.unsubscribe(),r},i.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,i=e.actions,r=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&i.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},i}(e.Action);exports.AsyncAction=n;
},{"tslib":"vCxL","./Action":"arqX"}],"pLkv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.QueueAction=void 0;var e=n(require("tslib")),t=require("./AsyncAction");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}}return n.default=e,t&&t.set(e,n),n}var o=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n}return e.__extends(r,t),r.prototype.schedule=function(e,r){return void 0===r&&(r=0),r>0?t.prototype.schedule.call(this,e,r):(this.delay=r,this.state=e,this.scheduler.flush(this),this)},r.prototype.execute=function(e,r){return r>0||this.closed?t.prototype.execute.call(this,e,r):this._execute(e,r)},r.prototype.requestAsyncId=function(e,r,n){return void 0===n&&(n=0),null!==n&&n>0||null===n&&this.delay>0?t.prototype.requestAsyncId.call(this,e,r,n):e.flush(this)},r}(t.AsyncAction);exports.QueueAction=o;
},{"tslib":"vCxL","./AsyncAction":"llYF"}],"QglZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Scheduler=void 0;var e=function(){function e(t,o){void 0===o&&(o=e.now),this.SchedulerAction=t,this.now=o}return e.prototype.schedule=function(e,t,o){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(o,t)},e.now=function(){return Date.now()},e}();exports.Scheduler=e;
},{}],"hnPK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AsyncScheduler=void 0;var e=i(require("tslib")),t=require("../Scheduler");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var i={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(i,o,u):i[o]=e[o]}}return i.default=e,t&&t.set(e,i),i}var n=function(r){function i(e,n){void 0===n&&(n=t.Scheduler.now);var o=r.call(this,e,function(){return i.delegate&&i.delegate!==o?i.delegate.now():n()})||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return e.__extends(i,r),i.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),i.delegate&&i.delegate!==this?i.delegate.schedule(e,t,n):r.prototype.schedule.call(this,e,t,n)},i.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var r;this.active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}},i}(t.Scheduler);exports.AsyncScheduler=n;
},{"tslib":"vCxL","../Scheduler":"QglZ"}],"j0lZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.QueueScheduler=void 0;var e=n(require("tslib")),r=require("./AsyncScheduler");function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var r=t();if(r&&r.has(e))return r.get(e);var n={};if(null!=e){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=u?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}}return n.default=e,r&&r.set(e,n),n}var u=function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return e.__extends(t,r),t}(r.AsyncScheduler);exports.QueueScheduler=u;
},{"tslib":"vCxL","./AsyncScheduler":"hnPK"}],"HGOP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.queue=void 0;var e=require("./QueueAction"),u=require("./QueueScheduler"),r=new u.QueueScheduler(e.QueueAction);exports.queue=r;
},{"./QueueAction":"pLkv","./QueueScheduler":"j0lZ"}],"XsKQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.empty=t,exports.EMPTY=void 0;var e=require("../Observable"),r=new e.Observable(function(e){return e.complete()});function t(e){return e?n(e):r}function n(r){return new e.Observable(function(e){return r.schedule(function(){return e.complete()})})}exports.EMPTY=r;
},{"../Observable":"wbSE"}],"VqoH":[function(require,module,exports) {
"use strict";function e(e){return e&&"function"==typeof e.schedule}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isScheduler=e;
},{}],"lrFe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribeToArray=void 0;var e=function(e){return function(r){for(var o=0,t=e.length;o<t&&!r.closed;o++)r.next(e[o]);r.complete()}};exports.subscribeToArray=e;
},{}],"ZGwk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scheduleArray=t;var e=require("../Observable"),r=require("../Subscription");function t(t,n){return new e.Observable(function(e){var u=new r.Subscription,s=0;return u.add(n.schedule(function(){s!==t.length?(e.next(t[s++]),e.closed||u.add(this.schedule())):e.complete()})),u})}
},{"../Observable":"wbSE","../Subscription":"I8KM"}],"PJGF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fromArray=u;var e=require("../Observable"),r=require("../util/subscribeToArray"),s=require("../scheduled/scheduleArray");function u(u,a){return a?(0,s.scheduleArray)(u,a):new e.Observable((0,r.subscribeToArray)(u))}
},{"../Observable":"wbSE","../util/subscribeToArray":"lrFe","../scheduled/scheduleArray":"ZGwk"}],"wZuk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.of=t;var e=require("../util/isScheduler"),r=require("./fromArray"),u=require("../scheduled/scheduleArray");function t(){for(var t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];var o=t[t.length-1];return(0,e.isScheduler)(o)?(t.pop(),(0,u.scheduleArray)(t,o)):(0,r.fromArray)(t)}
},{"../util/isScheduler":"VqoH","./fromArray":"PJGF","../scheduled/scheduleArray":"ZGwk"}],"FdIu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.throwError=e;var r=require("../Observable");function e(e,o){return o?new r.Observable(function(r){return o.schedule(n,0,{error:e,subscriber:r})}):new r.Observable(function(r){return r.error(e)})}function n(r){var e=r.error;r.subscriber.error(e)}
},{"../Observable":"wbSE"}],"n7Mc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Notification=exports.NotificationKind=void 0;var e,t=require("./observable/empty"),r=require("./observable/of"),o=require("./observable/throwError");exports.NotificationKind=e,function(e){e.NEXT="N",e.ERROR="E",e.COMPLETE="C"}(e||(exports.NotificationKind=e={}));var i=function(){function e(e,t,r){this.kind=e,this.value=t,this.error=r,this.hasValue="N"===e}return e.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}},e.prototype.do=function(e,t,r){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return r&&r()}},e.prototype.accept=function(e,t,r){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,r)},e.prototype.toObservable=function(){switch(this.kind){case"N":return(0,r.of)(this.value);case"E":return(0,o.throwError)(this.error);case"C":return(0,t.empty)()}throw new Error("unexpected notification kind value")},e.createNext=function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification},e.createError=function(t){return new e("E",void 0,t)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e}();exports.Notification=i;
},{"./observable/empty":"XsKQ","./observable/of":"wZuk","./observable/throwError":"FdIu"}],"ezNs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.observeOn=s,exports.ObserveOnMessage=exports.ObserveOnSubscriber=exports.ObserveOnOperator=void 0;var e=n(require("tslib")),t=require("../Subscriber"),r=require("../Notification");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}}return r.default=e,t&&t.set(e,r),r}function s(e,t){return void 0===t&&(t=0),function(r){return r.lift(new o(e,t))}}var o=function(){function e(e,t){void 0===t&&(t=0),this.scheduler=e,this.delay=t}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.scheduler,this.delay))},e}();exports.ObserveOnOperator=o;var u=function(t){function i(e,r,i){void 0===i&&(i=0);var n=t.call(this,e)||this;return n.scheduler=r,n.delay=i,n}return e.__extends(i,t),i.dispatch=function(e){var t=e.notification,r=e.destination;t.observe(r),this.unsubscribe()},i.prototype.scheduleMessage=function(e){this.destination.add(this.scheduler.schedule(i.dispatch,this.delay,new c(e,this.destination)))},i.prototype._next=function(e){this.scheduleMessage(r.Notification.createNext(e))},i.prototype._error=function(e){this.scheduleMessage(r.Notification.createError(e)),this.unsubscribe()},i.prototype._complete=function(){this.scheduleMessage(r.Notification.createComplete()),this.unsubscribe()},i}(t.Subscriber);exports.ObserveOnSubscriber=u;var c=function(){return function(e,t){this.notification=e,this.destination=t}}();exports.ObserveOnMessage=c;
},{"tslib":"vCxL","../Subscriber":"RaFB","../Notification":"n7Mc"}],"Cp6P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReplaySubject=void 0;var e=c(require("tslib")),t=require("./Subject"),r=require("./scheduler/queue"),i=require("./Subscription"),n=require("./operators/observeOn"),o=require("./util/ObjectUnsubscribedError"),s=require("./SubjectSubscription");function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=i?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}}return r.default=e,t&&t.set(e,r),r}var h=function(t){function u(e,r,i){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===r&&(r=Number.POSITIVE_INFINITY);var n=t.call(this)||this;return n.scheduler=i,n._events=[],n._infiniteTimeWindow=!1,n._bufferSize=e<1?1:e,n._windowTime=r<1?1:r,r===Number.POSITIVE_INFINITY?(n._infiniteTimeWindow=!0,n.next=n.nextInfiniteTimeWindow):n.next=n.nextTimeWindow,n}return e.__extends(u,t),u.prototype.nextInfiniteTimeWindow=function(e){var r=this._events;r.push(e),r.length>this._bufferSize&&r.shift(),t.prototype.next.call(this,e)},u.prototype.nextTimeWindow=function(e){this._events.push(new f(this._getNow(),e)),this._trimBufferThenGetEvents(),t.prototype.next.call(this,e)},u.prototype._subscribe=function(e){var t,r=this._infiniteTimeWindow,u=r?this._events:this._trimBufferThenGetEvents(),c=this.scheduler,h=u.length;if(this.closed)throw new o.ObjectUnsubscribedError;if(this.isStopped||this.hasError?t=i.Subscription.EMPTY:(this.observers.push(e),t=new s.SubjectSubscription(this,e)),c&&e.add(e=new n.ObserveOnSubscriber(e,c)),r)for(var f=0;f<h&&!e.closed;f++)e.next(u[f]);else for(f=0;f<h&&!e.closed;f++)e.next(u[f].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),t},u.prototype._getNow=function(){return(this.scheduler||r.queue).now()},u.prototype._trimBufferThenGetEvents=function(){for(var e=this._getNow(),t=this._bufferSize,r=this._windowTime,i=this._events,n=i.length,o=0;o<n&&!(e-i[o].time<r);)o++;return n>t&&(o=Math.max(o,n-t)),o>0&&i.splice(0,o),i},u}(t.Subject);exports.ReplaySubject=h;var f=function(){return function(e,t){this.time=e,this.value=t}}();
},{"tslib":"vCxL","./Subject":"r9t1","./scheduler/queue":"HGOP","./Subscription":"I8KM","./operators/observeOn":"ezNs","./util/ObjectUnsubscribedError":"xQEi","./SubjectSubscription":"fyc3"}],"Scvc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AsyncSubject=void 0;var t=i(require("tslib")),e=require("./Subject"),r=require("./Subscription");function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}function i(t){if(t&&t.__esModule)return t;var e=o();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var s=i?Object.getOwnPropertyDescriptor(t,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=t[n]}}return r.default=t,e&&e.set(t,r),r}var n=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.value=null,t.hasNext=!1,t.hasCompleted=!1,t}return t.__extends(o,e),o.prototype._subscribe=function(t){return this.hasError?(t.error(this.thrownError),r.Subscription.EMPTY):this.hasCompleted&&this.hasNext?(t.next(this.value),t.complete(),r.Subscription.EMPTY):e.prototype._subscribe.call(this,t)},o.prototype.next=function(t){this.hasCompleted||(this.value=t,this.hasNext=!0)},o.prototype.error=function(t){this.hasCompleted||e.prototype.error.call(this,t)},o.prototype.complete=function(){this.hasCompleted=!0,this.hasNext&&e.prototype.next.call(this,this.value),e.prototype.complete.call(this)},o}(e.Subject);exports.AsyncSubject=n;
},{"tslib":"vCxL","./Subject":"r9t1","./Subscription":"I8KM"}],"Z56L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Immediate=void 0;var e=1,t={};function r(e){var r=t[e];r&&r()}var i={setImmediate:function(i){var n=e++;return t[n]=i,Promise.resolve().then(function(){return r(n)}),n},clearImmediate:function(e){delete t[e]}};exports.Immediate=i;
},{}],"k3eS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AsapAction=void 0;var e=i(require("tslib")),t=require("../util/Immediate"),r=require("./AsyncAction");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=n();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=i?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}}return r.default=e,t&&t.set(e,r),r}var o=function(r){function n(e,t){var n=r.call(this,e,t)||this;return n.scheduler=e,n.work=t,n}return e.__extends(n,r),n.prototype.requestAsyncId=function(e,n,i){return void 0===i&&(i=0),null!==i&&i>0?r.prototype.requestAsyncId.call(this,e,n,i):(e.actions.push(this),e.scheduled||(e.scheduled=t.Immediate.setImmediate(e.flush.bind(e,null))))},n.prototype.recycleAsyncId=function(e,n,i){if(void 0===i&&(i=0),null!==i&&i>0||null===i&&this.delay>0)return r.prototype.recycleAsyncId.call(this,e,n,i);0===e.actions.length&&(t.Immediate.clearImmediate(n),e.scheduled=void 0)},n}(r.AsyncAction);exports.AsapAction=o;
},{"tslib":"vCxL","../util/Immediate":"Z56L","./AsyncAction":"llYF"}],"czze":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AsapScheduler=void 0;var e=i(require("tslib")),t=require("./AsyncScheduler");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var i={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var s=n?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(i,u,s):i[u]=e[u]}}return i.default=e,t&&t.set(e,i),i}var n=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(r,t),r.prototype.flush=function(e){this.active=!0,this.scheduled=void 0;var t,r=this.actions,i=-1,n=r.length;e=e||r.shift();do{if(t=e.execute(e.state,e.delay))break}while(++i<n&&(e=r.shift()));if(this.active=!1,t){for(;++i<n&&(e=r.shift());)e.unsubscribe();throw t}},r}(t.AsyncScheduler);exports.AsapScheduler=n;
},{"tslib":"vCxL","./AsyncScheduler":"hnPK"}],"ZqYc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.asap=void 0;var e=require("./AsapAction"),r=require("./AsapScheduler"),s=new r.AsapScheduler(e.AsapAction);exports.asap=s;
},{"./AsapAction":"k3eS","./AsapScheduler":"czze"}],"jun6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.async=void 0;var e=require("./AsyncAction"),r=require("./AsyncScheduler"),c=new r.AsyncScheduler(e.AsyncAction);exports.async=c;
},{"./AsyncAction":"llYF","./AsyncScheduler":"hnPK"}],"m8qQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AnimationFrameAction=void 0;var e=n(require("tslib")),t=require("./AsyncAction");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=i?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}}return n.default=e,t&&t.set(e,n),n}var i=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n}return e.__extends(r,t),r.prototype.requestAsyncId=function(e,r,n){return void 0===n&&(n=0),null!==n&&n>0?t.prototype.requestAsyncId.call(this,e,r,n):(e.actions.push(this),e.scheduled||(e.scheduled=requestAnimationFrame(function(){return e.flush(null)})))},r.prototype.recycleAsyncId=function(e,r,n){if(void 0===n&&(n=0),null!==n&&n>0||null===n&&this.delay>0)return t.prototype.recycleAsyncId.call(this,e,r,n);0===e.actions.length&&(cancelAnimationFrame(r),e.scheduled=void 0)},r}(t.AsyncAction);exports.AnimationFrameAction=i;
},{"tslib":"vCxL","./AsyncAction":"llYF"}],"gboY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AnimationFrameScheduler=void 0;var e=i(require("tslib")),t=require("./AsyncScheduler");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var i={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=n?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(i,u,o):i[u]=e[u]}}return i.default=e,t&&t.set(e,i),i}var n=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(r,t),r.prototype.flush=function(e){this.active=!0,this.scheduled=void 0;var t,r=this.actions,i=-1,n=r.length;e=e||r.shift();do{if(t=e.execute(e.state,e.delay))break}while(++i<n&&(e=r.shift()));if(this.active=!1,t){for(;++i<n&&(e=r.shift());)e.unsubscribe();throw t}},r}(t.AsyncScheduler);exports.AnimationFrameScheduler=n;
},{"tslib":"vCxL","./AsyncScheduler":"hnPK"}],"zUKp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.animationFrame=void 0;var e=require("./AnimationFrameAction"),i=require("./AnimationFrameScheduler"),r=new i.AnimationFrameScheduler(e.AnimationFrameAction);exports.animationFrame=r;
},{"./AnimationFrameAction":"m8qQ","./AnimationFrameScheduler":"gboY"}],"RuMO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VirtualAction=exports.VirtualTimeScheduler=void 0;var e=n(require("tslib")),t=require("./AsyncAction"),r=require("./AsyncScheduler");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}}return r.default=e,t&&t.set(e,r),r}var o=function(t){function r(e,r){void 0===e&&(e=u),void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this,e,function(){return i.frame})||this;return i.maxFrames=r,i.frame=0,i.index=-1,i}return e.__extends(r,t),r.prototype.flush=function(){for(var e,t,r=this.actions,i=this.maxFrames;(t=r[0])&&t.delay<=i&&(r.shift(),this.frame=t.delay,!(e=t.execute(t.state,t.delay))););if(e){for(;t=r.shift();)t.unsubscribe();throw e}},r.frameTimeFactor=10,r}(r.AsyncScheduler);exports.VirtualTimeScheduler=o;var u=function(t){function r(e,r,i){void 0===i&&(i=e.index+=1);var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.index=i,n.active=!0,n.index=e.index=i,n}return e.__extends(r,t),r.prototype.schedule=function(e,i){if(void 0===i&&(i=0),!this.id)return t.prototype.schedule.call(this,e,i);this.active=!1;var n=new r(this.scheduler,this.work);return this.add(n),n.schedule(e,i)},r.prototype.requestAsyncId=function(e,t,i){void 0===i&&(i=0),this.delay=e.frame+i;var n=e.actions;return n.push(this),n.sort(r.sortActions),!0},r.prototype.recycleAsyncId=function(e,t,r){void 0===r&&(r=0)},r.prototype._execute=function(e,r){if(!0===this.active)return t.prototype._execute.call(this,e,r)},r.sortActions=function(e,t){return e.delay===t.delay?e.index===t.index?0:e.index>t.index?1:-1:e.delay>t.delay?1:-1},r}(t.AsyncAction);exports.VirtualAction=u;
},{"tslib":"vCxL","./AsyncAction":"llYF","./AsyncScheduler":"hnPK"}],"LXph":[function(require,module,exports) {
"use strict";function e(e){return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.identity=e;
},{}],"cUXi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isObservable=r;var e=require("../Observable");function r(r){return!!r&&(r instanceof e.Observable||"function"==typeof r.lift&&"function"==typeof r.subscribe)}
},{"../Observable":"wbSE"}],"Qh4I":[function(require,module,exports) {
"use strict";function r(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ArgumentOutOfRangeError=void 0,r.prototype=Object.create(Error.prototype);var e=r;exports.ArgumentOutOfRangeError=e;
},{}],"vsl0":[function(require,module,exports) {
"use strict";function r(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}Object.defineProperty(exports,"__esModule",{value:!0}),exports.EmptyError=void 0,r.prototype=Object.create(Error.prototype);var e=r;exports.EmptyError=e;
},{}],"SZK7":[function(require,module,exports) {
"use strict";function r(){return Error.call(this),this.message="Timeout has occurred",this.name="TimeoutError",this}Object.defineProperty(exports,"__esModule",{value:!0}),exports.TimeoutError=void 0,r.prototype=Object.create(Error.prototype);var e=r;exports.TimeoutError=e;
},{}],"dNh5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.map=o,exports.MapOperator=void 0;var t=n(require("tslib")),r=require("../Subscriber");function e(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return e=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var r=e();if(r&&r.has(t))return r.get(t);var n={};if(null!=t){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=o?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=t[i]}}return n.default=t,r&&r.set(t,n),n}function o(t,r){return function(e){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return e.lift(new i(t,r))}}var i=function(){function t(t,r){this.project=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new u(t,this.project,this.thisArg))},t}();exports.MapOperator=i;var u=function(r){function e(t,e,n){var o=r.call(this,t)||this;return o.project=e,o.count=0,o.thisArg=n||o,o}return t.__extends(e,r),e.prototype._next=function(t){var r;try{r=this.project.call(this.thisArg,t,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(r)},e}(r.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"lxDK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bindCallback=a;var r=require("../Observable"),e=require("../AsyncSubject"),t=require("../operators/map"),c=require("../util/canReportError"),n=require("../util/isArray"),u=require("../util/isScheduler");function a(s,o,l){if(o){if(!(0,u.isScheduler)(o))return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return a(s,l).apply(void 0,r).pipe((0,t.map)(function(r){return(0,n.isArray)(r)?o.apply(void 0,r):o(r)}))};l=o}return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var u,a=this,o={context:a,subject:u,callbackFunc:s,scheduler:l};return new r.Observable(function(r){if(l){var n={args:t,subscriber:r,params:o};return l.schedule(i,0,n)}if(!u){u=new e.AsyncSubject;try{s.apply(a,t.concat([function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];u.next(r.length<=1?r[0]:r),u.complete()}]))}catch(b){(0,c.canReportError)(u)?u.error(b):console.warn(b)}}return u.subscribe(r)})}}function i(r){var t=this,c=r.args,n=r.subscriber,u=r.params,a=u.callbackFunc,i=u.context,o=u.scheduler,l=u.subject;if(!l){l=u.subject=new e.AsyncSubject;try{a.apply(i,c.concat([function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var c=r.length<=1?r[0]:r;t.add(o.schedule(s,0,{value:c,subject:l}))}]))}catch(b){l.error(b)}}this.add(l.subscribe(n))}function s(r){var e=r.value,t=r.subject;t.next(e),t.complete()}function o(r){var e=r.err;r.subject.error(e)}
},{"../Observable":"wbSE","../AsyncSubject":"Scvc","../operators/map":"dNh5","../util/canReportError":"wHmS","../util/isArray":"KeTG","../util/isScheduler":"VqoH"}],"uTDa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bindNodeCallback=s;var e=require("../Observable"),r=require("../AsyncSubject"),t=require("../operators/map"),c=require("../util/canReportError"),u=require("../util/isScheduler"),n=require("../util/isArray");function s(i,o,l){if(o){if(!(0,u.isScheduler)(o))return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return s(i,l).apply(void 0,e).pipe((0,t.map)(function(e){return(0,n.isArray)(e)?o.apply(void 0,e):o(e)}))};l=o}return function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];var n={subject:void 0,args:t,callbackFunc:i,scheduler:l,context:this};return new e.Observable(function(e){var u=n.context,s=n.subject;if(l)return l.schedule(a,0,{params:n,subscriber:e,context:u});if(!s){s=n.subject=new r.AsyncSubject;try{i.apply(u,t.concat([function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=e.shift();t?s.error(t):(s.next(e.length<=1?e[0]:e),s.complete())}]))}catch(o){(0,c.canReportError)(s)?s.error(o):console.warn(o)}}return s.subscribe(e)})}}function a(e){var t=this,c=e.params,u=e.subscriber,n=e.context,s=c.callbackFunc,a=c.args,l=c.scheduler,b=c.subject;if(!b){b=c.subject=new r.AsyncSubject;try{s.apply(n,a.concat([function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var c=e.shift();if(c)t.add(l.schedule(o,0,{err:c,subject:b}));else{var u=e.length<=1?e[0]:e;t.add(l.schedule(i,0,{value:u,subject:b}))}}]))}catch(d){this.add(l.schedule(o,0,{err:d,subject:b}))}}this.add(b.subscribe(u))}function i(e){var r=e.value,t=e.subject;t.next(r),t.complete()}function o(e){var r=e.err;e.subject.error(r)}
},{"../Observable":"wbSE","../AsyncSubject":"Scvc","../operators/map":"dNh5","../util/canReportError":"wHmS","../util/isScheduler":"VqoH","../util/isArray":"KeTG"}],"hZYI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.OuterSubscriber=void 0;var e=n(require("tslib")),t=require("./Subscriber");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}}return n.default=e,t&&t.set(e,n),n}var i=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(r,t),r.prototype.notifyNext=function(e,t,r,n,i){this.destination.next(t)},r.prototype.notifyError=function(e,t){this.destination.error(e)},r.prototype.notifyComplete=function(e){this.destination.complete()},r}(t.Subscriber);exports.OuterSubscriber=i;
},{"tslib":"vCxL","./Subscriber":"RaFB"}],"aQbR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.InnerSubscriber=void 0;var e=n(require("tslib")),t=require("./Subscriber");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}}return n.default=e,t&&t.set(e,n),n}var i=function(t){function r(e,r,n){var i=t.call(this)||this;return i.parent=e,i.outerValue=r,i.outerIndex=n,i.index=0,i}return e.__extends(r,t),r.prototype._next=function(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)},r.prototype._error=function(e){this.parent.notifyError(e,this),this.unsubscribe()},r.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},r}(t.Subscriber);exports.InnerSubscriber=i;
},{"tslib":"vCxL","./Subscriber":"RaFB"}],"eggw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribeToPromise=void 0;var r=require("./hostReportError"),e=function(e){return function(o){return e.then(function(r){o.closed||(o.next(r),o.complete())},function(r){return o.error(r)}).then(null,r.hostReportError),o}};exports.subscribeToPromise=e;
},{"./hostReportError":"JfKC"}],"AqTP":[function(require,module,exports) {
"use strict";function t(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSymbolIterator=t,exports.$$iterator=exports.iterator=void 0;var r=t();exports.iterator=r;var e=r;exports.$$iterator=e;
},{}],"QEdH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribeToIterable=void 0;var e=require("../symbol/iterator"),r=function(r){return function(t){for(var o=r[e.iterator]();;){var n=o.next();if(n.done){t.complete();break}if(t.next(n.value),t.closed)break}return"function"==typeof o.return&&t.add(function(){o.return&&o.return()}),t}};exports.subscribeToIterable=r;
},{"../symbol/iterator":"AqTP"}],"buzG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribeToObservable=void 0;var e=require("../symbol/observable"),r=function(r){return function(o){var b=r[e.observable]();if("function"!=typeof b.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return b.subscribe(o)}};exports.subscribeToObservable=r;
},{"../symbol/observable":"tjV3"}],"LS84":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isArrayLike=void 0;var e=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e};exports.isArrayLike=e;
},{}],"Ok8F":[function(require,module,exports) {
"use strict";function e(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isPromise=e;
},{}],"vq9L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribeTo=void 0;var e=require("./subscribeToArray"),r=require("./subscribeToPromise"),i=require("./subscribeToIterable"),s=require("./subscribeToObservable"),o=require("./isArrayLike"),b=require("./isPromise"),u=require("./isObject"),t=require("../symbol/iterator"),a=require("../symbol/observable"),c=function(c){if(c&&"function"==typeof c[a.observable])return(0,s.subscribeToObservable)(c);if((0,o.isArrayLike)(c))return(0,e.subscribeToArray)(c);if((0,b.isPromise)(c))return(0,r.subscribeToPromise)(c);if(c&&"function"==typeof c[t.iterator])return(0,i.subscribeToIterable)(c);var n=(0,u.isObject)(c)?"an invalid object":"'"+c+"'";throw new TypeError("You provided "+n+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};exports.subscribeTo=c;
},{"./subscribeToArray":"lrFe","./subscribeToPromise":"eggw","./subscribeToIterable":"QEdH","./subscribeToObservable":"buzG","./isArrayLike":"LS84","./isPromise":"Ok8F","./isObject":"nU7r","../symbol/iterator":"AqTP","../symbol/observable":"tjV3"}],"JM7e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribeToResult=b;var e=require("../InnerSubscriber"),r=require("./subscribeTo"),s=require("../Observable");function b(b,i,u,c,n){if(void 0===n&&(n=new e.InnerSubscriber(b,u,c)),!n.closed)return i instanceof s.Observable?i.subscribe(n):(0,r.subscribeTo)(i)(n)}
},{"../InnerSubscriber":"aQbR","./subscribeTo":"vq9L","../Observable":"wbSE"}],"omVc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.combineLatest=a,exports.CombineLatestSubscriber=exports.CombineLatestOperator=void 0;var t=u(require("tslib")),e=require("../util/isScheduler"),r=require("../util/isArray"),i=require("../OuterSubscriber"),o=require("../util/subscribeToResult"),s=require("./fromArray");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function u(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=i?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}var l={};function a(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var o=null,n=null;return(0,e.isScheduler)(t[t.length-1])&&(n=t.pop()),"function"==typeof t[t.length-1]&&(o=t.pop()),1===t.length&&(0,r.isArray)(t[0])&&(t=t[0]),(0,s.fromArray)(t,n).lift(new c(o))}var c=function(){function t(t){this.resultSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new p(t,this.resultSelector))},t}();exports.CombineLatestOperator=c;var p=function(e){function r(t,r){var i=e.call(this,t)||this;return i.resultSelector=r,i.active=0,i.values=[],i.observables=[],i}return t.__extends(r,e),r.prototype._next=function(t){this.values.push(l),this.observables.push(t)},r.prototype._complete=function(){var t=this.observables,e=t.length;if(0===e)this.destination.complete();else{this.active=e,this.toRespond=e;for(var r=0;r<e;r++){var i=t[r];this.add((0,o.subscribeToResult)(this,i,i,r))}}},r.prototype.notifyComplete=function(t){0==(this.active-=1)&&this.destination.complete()},r.prototype.notifyNext=function(t,e,r,i,o){var s=this.values,n=s[r],u=this.toRespond?n===l?--this.toRespond:this.toRespond:0;s[r]=e,0===u&&(this.resultSelector?this._tryResultSelector(s):this.destination.next(s.slice()))},r.prototype._tryResultSelector=function(t){var e;try{e=this.resultSelector.apply(this,t)}catch(r){return void this.destination.error(r)}this.destination.next(e)},r}(i.OuterSubscriber);exports.CombineLatestSubscriber=p;
},{"tslib":"vCxL","../util/isScheduler":"VqoH","../util/isArray":"KeTG","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e","./fromArray":"PJGF"}],"lgBy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scheduleObservable=u;var e=require("../Observable"),r=require("../Subscription"),n=require("../symbol/observable");function u(u,t){return new e.Observable(function(e){var o=new r.Subscription;return o.add(t.schedule(function(){var r=u[n.observable]();o.add(r.subscribe({next:function(r){o.add(t.schedule(function(){return e.next(r)}))},error:function(r){o.add(t.schedule(function(){return e.error(r)}))},complete:function(){o.add(t.schedule(function(){return e.complete()}))}}))})),o})}
},{"../Observable":"wbSE","../Subscription":"I8KM","../symbol/observable":"tjV3"}],"aPE6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.schedulePromise=n;var e=require("../Observable"),r=require("../Subscription");function n(n,u){return new e.Observable(function(e){var t=new r.Subscription;return t.add(u.schedule(function(){return n.then(function(r){t.add(u.schedule(function(){e.next(r),t.add(u.schedule(function(){return e.complete()}))}))},function(r){t.add(u.schedule(function(){return e.error(r)}))})})),t})}
},{"../Observable":"wbSE","../Subscription":"I8KM"}],"XzIO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scheduleIterable=n;var e=require("../Observable"),r=require("../Subscription"),t=require("../symbol/iterator");function n(n,u){if(!n)throw new Error("Iterable cannot be null");return new e.Observable(function(e){var o,i=new r.Subscription;return i.add(function(){o&&"function"==typeof o.return&&o.return()}),i.add(u.schedule(function(){o=n[t.iterator](),i.add(u.schedule(function(){if(!e.closed){var r,t;try{var n=o.next();r=n.value,t=n.done}catch(u){return void e.error(u)}t?e.complete():(e.next(r),this.schedule())}}))})),i})}
},{"../Observable":"wbSE","../Subscription":"I8KM","../symbol/iterator":"AqTP"}],"CTP2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isInteropObservable=r;var e=require("../symbol/observable");function r(r){return r&&"function"==typeof r[e.observable]}
},{"../symbol/observable":"tjV3"}],"NjuQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isIterable=r;var e=require("../symbol/iterator");function r(r){return r&&"function"==typeof r[e.iterator]}
},{"../symbol/iterator":"AqTP"}],"mNZE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scheduled=a;var e=require("./scheduleObservable"),r=require("./schedulePromise"),i=require("./scheduleArray"),s=require("./scheduleIterable"),u=require("../util/isInteropObservable"),l=require("../util/isPromise"),t=require("../util/isArrayLike"),o=require("../util/isIterable");function a(a,b){if(null!=a){if((0,u.isInteropObservable)(a))return(0,e.scheduleObservable)(a,b);if((0,l.isPromise)(a))return(0,r.schedulePromise)(a,b);if((0,t.isArrayLike)(a))return(0,i.scheduleArray)(a,b);if((0,o.isIterable)(a)||"string"==typeof a)return(0,s.scheduleIterable)(a,b)}throw new TypeError((null!==a&&typeof a||a)+" is not observable")}
},{"./scheduleObservable":"lgBy","./schedulePromise":"aPE6","./scheduleArray":"ZGwk","./scheduleIterable":"XzIO","../util/isInteropObservable":"CTP2","../util/isPromise":"Ok8F","../util/isArrayLike":"LS84","../util/isIterable":"NjuQ"}],"WXUl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.from=u;var e=require("../Observable"),r=require("../util/subscribeTo"),s=require("../scheduled/scheduled");function u(u,b){return b?(0,s.scheduled)(u,b):u instanceof e.Observable?u:new e.Observable((0,r.subscribeTo)(u))}
},{"../Observable":"wbSE","../util/subscribeTo":"vq9L","../scheduled/scheduled":"mNZE"}],"nFsM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeMap=c,exports.MergeMapSubscriber=exports.MergeMapOperator=void 0;var e=s(require("tslib")),t=require("../util/subscribeToResult"),r=require("../OuterSubscriber"),i=require("../InnerSubscriber"),n=require("./map"),o=require("../observable/from");function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=i?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}}return r.default=e,t&&t.set(e,r),r}function c(e,t,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof t?function(i){return i.pipe(c(function(r,i){return(0,o.from)(e(r,i)).pipe((0,n.map)(function(e,n){return t(r,e,i,n)}))},r))}:("number"==typeof t&&(r=t),function(t){return t.lift(new p(e,r))})}var p=function(){function e(e,t){void 0===t&&(t=Number.POSITIVE_INFINITY),this.project=e,this.concurrent=t}return e.prototype.call=function(e,t){return t.subscribe(new a(e,this.project,this.concurrent))},e}();exports.MergeMapOperator=p;var a=function(r){function n(e,t,i){void 0===i&&(i=Number.POSITIVE_INFINITY);var n=r.call(this,e)||this;return n.project=t,n.concurrent=i,n.hasCompleted=!1,n.buffer=[],n.active=0,n.index=0,n}return e.__extends(n,r),n.prototype._next=function(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)},n.prototype._tryNext=function(e){var t,r=this.index++;try{t=this.project(e,r)}catch(i){return void this.destination.error(i)}this.active++,this._innerSub(t,e,r)},n.prototype._innerSub=function(e,r,n){var o=new i.InnerSubscriber(this,void 0,void 0);this.destination.add(o),(0,t.subscribeToResult)(this,e,r,n,o)},n.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},n.prototype.notifyNext=function(e,t,r,i,n){this.destination.next(t)},n.prototype.notifyComplete=function(e){var t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},n}(r.OuterSubscriber);exports.MergeMapSubscriber=a;
},{"tslib":"vCxL","../util/subscribeToResult":"JM7e","../OuterSubscriber":"hZYI","../InnerSubscriber":"aQbR","./map":"dNh5","../observable/from":"WXUl"}],"Nkv4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeAll=t;var e=require("./mergeMap"),r=require("../util/identity");function t(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),(0,e.mergeMap)(r.identity,t)}
},{"./mergeMap":"nFsM","../util/identity":"LXph"}],"Yxey":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.concatAll=r;var e=require("./mergeAll");function r(){return(0,e.mergeAll)(1)}
},{"./mergeAll":"Nkv4"}],"CsdO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.concat=o;var e=require("./of"),r=require("../operators/concatAll");function o(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];return(0,r.concatAll)()(e.of.apply(void 0,o))}
},{"./of":"wZuk","../operators/concatAll":"Yxey"}],"w9G6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defer=u;var e=require("../Observable"),r=require("./from"),t=require("./empty");function u(u){return new e.Observable(function(e){var o;try{o=u()}catch(i){return void e.error(i)}return(o?(0,r.from)(o):(0,t.empty)()).subscribe(e)})}
},{"../Observable":"wbSE","./from":"WXUl","./empty":"XsKQ"}],"R2GC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.forkJoin=u;var r=require("../Observable"),e=require("../util/isArray"),t=require("../operators/map"),n=require("../util/isObject"),o=require("./from");function u(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(1===r.length){var u=r[0];if((0,e.isArray)(u))return i(u,null);if((0,n.isObject)(u)&&Object.getPrototypeOf(u)===Object.prototype){var f=Object.keys(u);return i(f.map(function(r){return u[r]}),f)}}if("function"==typeof r[r.length-1]){var c=r.pop();return i(r=1===r.length&&(0,e.isArray)(r[0])?r[0]:r,null).pipe((0,t.map)(function(r){return c.apply(void 0,r)}))}return i(r,null)}function i(e,t){return new r.Observable(function(r){var n=e.length;if(0!==n)for(var u=new Array(n),i=0,f=0,c=function(c){var l=(0,o.from)(e[c]),a=!1;r.add(l.subscribe({next:function(r){a||(a=!0,f++),u[c]=r},error:function(e){return r.error(e)},complete:function(){++i!==n&&a||(f===n&&r.next(t?t.reduce(function(r,e,t){return r[e]=u[t],r},{}):u),r.complete())}}))},l=0;l<n;l++)c(l);else r.complete()})}
},{"../Observable":"wbSE","../util/isArray":"KeTG","../operators/map":"dNh5","../util/isObject":"nU7r","./from":"WXUl"}],"ZHZV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fromEvent=i;var e=require("../Observable"),n=require("../util/isArray"),t=require("../util/isFunction"),r=require("../operators/map"),o=Object.prototype.toString;function i(o,f,a,c){return(0,t.isFunction)(a)&&(c=a,a=void 0),c?i(o,f,a).pipe((0,r.map)(function(e){return(0,n.isArray)(e)?c.apply(void 0,e):c(e)})):new e.Observable(function(e){u(o,f,function(n){arguments.length>1?e.next(Array.prototype.slice.call(arguments)):e.next(n)},e,a)})}function u(e,n,t,r,o){var i;if(c(e)){var s=e;e.addEventListener(n,t,o),i=function(){return s.removeEventListener(n,t,o)}}else if(a(e)){var v=e;e.on(n,t),i=function(){return v.off(n,t)}}else if(f(e)){var p=e;e.addListener(n,t),i=function(){return p.removeListener(n,t)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var l=0,d=e.length;l<d;l++)u(e[l],n,t,r,o)}r.add(i)}function f(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}function a(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}function c(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}
},{"../Observable":"wbSE","../util/isArray":"KeTG","../util/isFunction":"Qnsq","../operators/map":"dNh5"}],"HFE7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fromEventPattern=i;var r=require("../Observable"),e=require("../util/isArray"),t=require("../util/isFunction"),n=require("../operators/map");function i(u,o,a){return a?i(u,o).pipe((0,n.map)(function(r){return(0,e.isArray)(r)?a.apply(void 0,r):a(r)})):new r.Observable(function(r){var e,n=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.next(1===e.length?e[0]:e)};try{e=u(n)}catch(i){return void r.error(i)}if((0,t.isFunction)(o))return function(){return o(n,e)}})}
},{"../Observable":"wbSE","../util/isArray":"KeTG","../util/isFunction":"Qnsq","../operators/map":"dNh5"}],"xNZb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generate=i;var e=require("../Observable"),r=require("../util/identity"),t=require("../util/isScheduler");function i(i,c,n,a,s){var u,d;if(1==arguments.length){var l=i;d=l.initialState,c=l.condition,n=l.iterate,u=l.resultSelector||r.identity,s=l.scheduler}else void 0===a||(0,t.isScheduler)(a)?(d=i,u=r.identity,s=a):(d=i,u=a);return new e.Observable(function(e){var r=d;if(s)return s.schedule(o,0,{subscriber:e,iterate:n,condition:c,resultSelector:u,state:r});for(;;){if(c){var t=void 0;try{t=c(r)}catch(a){return void e.error(a)}if(!t){e.complete();break}}var i=void 0;try{i=u(r)}catch(a){return void e.error(a)}if(e.next(i),e.closed)break;try{r=n(r)}catch(a){return void e.error(a)}}})}function o(e){var r=e.subscriber,t=e.condition;if(!r.closed){if(e.needIterate)try{e.state=e.iterate(e.state)}catch(c){return void r.error(c)}else e.needIterate=!0;if(t){var i=void 0;try{i=t(e.state)}catch(c){return void r.error(c)}if(!i)return void r.complete();if(r.closed)return}var o;try{o=e.resultSelector(e.state)}catch(c){return void r.error(c)}if(!r.closed&&(r.next(o),!r.closed))return this.schedule(e)}}
},{"../Observable":"wbSE","../util/identity":"LXph","../util/isScheduler":"VqoH"}],"SXp5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.iif=t;var e=require("./defer"),r=require("./empty");function t(t,i,u){return void 0===i&&(i=r.EMPTY),void 0===u&&(u=r.EMPTY),(0,e.defer)(function(){return t()?i:u})}
},{"./defer":"w9G6","./empty":"XsKQ"}],"wBpm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNumeric=e;var r=require("./isArray");function e(e){return!(0,r.isArray)(e)&&e-parseFloat(e)+1>=0}
},{"./isArray":"KeTG"}],"QHLS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.interval=i;var e=require("../Observable"),r=require("../scheduler/async"),u=require("../util/isNumeric");function i(i,c){return void 0===i&&(i=0),void 0===c&&(c=r.async),(!(0,u.isNumeric)(i)||i<0)&&(i=0),c&&"function"==typeof c.schedule||(c=r.async),new e.Observable(function(e){return e.add(c.schedule(s,i,{subscriber:e,counter:0,period:i})),e})}function s(e){var r=e.subscriber,u=e.counter,i=e.period;r.next(u),this.schedule({subscriber:r,counter:u+1,period:i},i)}
},{"../Observable":"wbSE","../scheduler/async":"jun6","../util/isNumeric":"wBpm"}],"DQig":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.merge=u;var e=require("../Observable"),r=require("../util/isScheduler"),l=require("../operators/mergeAll"),t=require("./fromArray");function u(){for(var u=[],o=0;o<arguments.length;o++)u[o]=arguments[o];var n=Number.POSITIVE_INFINITY,p=null,i=u[u.length-1];return(0,r.isScheduler)(i)?(p=u.pop(),u.length>1&&"number"==typeof u[u.length-1]&&(n=u.pop())):"number"==typeof i&&(n=u.pop()),null===p&&1===u.length&&u[0]instanceof e.Observable?u[0]:(0,l.mergeAll)(n)((0,t.fromArray)(u,p))}
},{"../Observable":"wbSE","../util/isScheduler":"VqoH","../operators/mergeAll":"Nkv4","./fromArray":"PJGF"}],"TBTl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.never=t,exports.NEVER=void 0;var e=require("../Observable"),r=require("../util/noop"),o=new e.Observable(r.noop);function t(){return o}exports.NEVER=o;
},{"../Observable":"wbSE","../util/noop":"rXfM"}],"VCq5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onErrorResumeNext=i;var e=require("../Observable"),r=require("./from"),t=require("../util/isArray"),n=require("./empty");function i(){for(var u=[],o=0;o<arguments.length;o++)u[o]=arguments[o];if(0===u.length)return n.EMPTY;var s=u[0],a=u.slice(1);return 1===u.length&&(0,t.isArray)(s)?i.apply(void 0,s):new e.Observable(function(e){var t=function(){return e.add(i.apply(void 0,a).subscribe(e))};return(0,r.from)(s).subscribe({next:function(r){e.next(r)},error:t,complete:t})})}
},{"../Observable":"wbSE","./from":"WXUl","../util/isArray":"KeTG","./empty":"XsKQ"}],"QHfc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pairs=s,exports.dispatch=i;var e=require("../Observable"),r=require("../Subscription");function s(s,t){return t?new e.Observable(function(e){var n=Object.keys(s),b=new r.Subscription;return b.add(t.schedule(i,0,{keys:n,index:0,subscriber:e,subscription:b,obj:s})),b}):new e.Observable(function(e){for(var r=Object.keys(s),i=0;i<r.length&&!e.closed;i++){var t=r[i];s.hasOwnProperty(t)&&e.next([t,s[t]])}e.complete()})}function i(e){var r=e.keys,s=e.index,i=e.subscriber,t=e.subscription,n=e.obj;if(!i.closed)if(s<r.length){var b=r[s];i.next([b,n[b]]),t.add(this.schedule({keys:r,index:s+1,subscriber:i,subscription:t,obj:n}))}else i.complete()}
},{"../Observable":"wbSE","../Subscription":"I8KM"}],"nij6":[function(require,module,exports) {
"use strict";function e(e,r){function t(){return!t.pred.apply(t.thisArg,arguments)}return t.pred=e,t.thisArg=r,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.not=e;
},{}],"HKzi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.filter=i;var t=n(require("tslib")),r=require("../Subscriber");function e(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return e=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var r=e();if(r&&r.has(t))return r.get(t);var n={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var o=i?Object.getOwnPropertyDescriptor(t,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=t[u]}}return n.default=t,r&&r.set(t,n),n}function i(t,r){return function(e){return e.lift(new u(t,r))}}var u=function(){function t(t,r){this.predicate=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new o(t,this.predicate,this.thisArg))},t}(),o=function(r){function e(t,e,n){var i=r.call(this,t)||this;return i.predicate=e,i.thisArg=n,i.count=0,i}return t.__extends(e,r),e.prototype._next=function(t){var r;try{r=this.predicate.call(this.thisArg,t,this.count++)}catch(e){return void this.destination.error(e)}r&&this.destination.next(t)},e}(r.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"wJ9V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.partition=s;var e=require("../util/not"),r=require("../util/subscribeTo"),t=require("../operators/filter"),i=require("../Observable");function s(s,u,b){return[(0,t.filter)(u,b)(new i.Observable((0,r.subscribeTo)(s))),(0,t.filter)((0,e.not)(u,b))(new i.Observable((0,r.subscribeTo)(s)))]}
},{"../util/not":"nij6","../util/subscribeTo":"vq9L","../operators/filter":"HKzi","../Observable":"wbSE"}],"bwYX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.race=u,exports.RaceSubscriber=exports.RaceOperator=void 0;var r=o(require("tslib")),e=require("../util/isArray"),t=require("./fromArray"),s=require("../OuterSubscriber"),i=require("../util/subscribeToResult");function n(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return n=function(){return r},r}function o(r){if(r&&r.__esModule)return r;var e=n();if(e&&e.has(r))return e.get(r);var t={};if(null!=r){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var o=s?Object.getOwnPropertyDescriptor(r,i):null;o&&(o.get||o.set)?Object.defineProperty(t,i,o):t[i]=r[i]}}return t.default=r,e&&e.set(r,t),t}function u(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];if(1===r.length){if(!(0,e.isArray)(r[0]))return r[0];r=r[0]}return(0,t.fromArray)(r,void 0).lift(new a)}var a=function(){function r(){}return r.prototype.call=function(r,e){return e.subscribe(new c(r))},r}();exports.RaceOperator=a;var c=function(e){function t(r){var t=e.call(this,r)||this;return t.hasFirst=!1,t.observables=[],t.subscriptions=[],t}return r.__extends(t,e),t.prototype._next=function(r){this.observables.push(r)},t.prototype._complete=function(){var r=this.observables,e=r.length;if(0===e)this.destination.complete();else{for(var t=0;t<e&&!this.hasFirst;t++){var s=r[t],n=(0,i.subscribeToResult)(this,s,s,t);this.subscriptions&&this.subscriptions.push(n),this.add(n)}this.observables=null}},t.prototype.notifyNext=function(r,e,t,s,i){if(!this.hasFirst){this.hasFirst=!0;for(var n=0;n<this.subscriptions.length;n++)if(n!==t){var o=this.subscriptions[n];o.unsubscribe(),this.remove(o)}this.subscriptions=null}this.destination.next(e)},t}(s.OuterSubscriber);exports.RaceSubscriber=c;
},{"tslib":"vCxL","../util/isArray":"KeTG","./fromArray":"PJGF","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"N84r":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.range=r,exports.dispatch=t;var e=require("../Observable");function r(r,s,i){return void 0===r&&(r=0),new e.Observable(function(e){void 0===s&&(s=r,r=0);var n=0,o=r;if(i)return i.schedule(t,0,{index:n,count:s,start:r,subscriber:e});for(;;){if(n++>=s){e.complete();break}if(e.next(o++),e.closed)break}})}function t(e){var r=e.start,t=e.index,s=e.count,i=e.subscriber;t>=s?i.complete():(i.next(r),i.closed||(e.index=t+1,e.start=r+1,this.schedule(e)))}
},{"../Observable":"wbSE"}],"RPvN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.timer=s;var e=require("../Observable"),r=require("../scheduler/async"),i=require("../util/isNumeric"),u=require("../util/isScheduler");function s(s,n,t){void 0===s&&(s=0);var d=-1;return(0,i.isNumeric)(n)?d=Number(n)<1?1:Number(n):(0,u.isScheduler)(n)&&(t=n),(0,u.isScheduler)(t)||(t=r.async),new e.Observable(function(e){var r=(0,i.isNumeric)(s)?s:+s-t.now();return t.schedule(c,r,{index:0,period:d,subscriber:e})})}function c(e){var r=e.index,i=e.period,u=e.subscriber;if(u.next(r),!u.closed){if(-1===i)return u.complete();e.index=r+1,this.schedule(e,i)}}
},{"../Observable":"wbSE","../scheduler/async":"jun6","../util/isNumeric":"wBpm","../util/isScheduler":"VqoH"}],"gc1W":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.using=t;var r=require("../Observable"),e=require("./from"),u=require("./empty");function t(t,n){return new r.Observable(function(r){var i,s;try{i=t()}catch(c){return void r.error(c)}try{s=n(i)}catch(c){return void r.error(c)}var o=(s?(0,e.from)(s):u.EMPTY).subscribe(r);return function(){o.unsubscribe(),i&&i.unsubscribe()}})}
},{"../Observable":"wbSE","./from":"WXUl","./empty":"XsKQ"}],"ff2A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.zip=l,exports.ZipSubscriber=exports.ZipOperator=void 0;var t=a(require("tslib")),e=require("./fromArray"),r=require("../util/isArray"),i=require("../Subscriber"),n=require("../OuterSubscriber"),o=require("../util/subscribeToResult"),s=require("../../internal/symbol/iterator");function u(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function a(t){if(t&&t.__esModule)return t;var e=u();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=i?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}}return r.default=t,e&&e.set(t,r),r}function l(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=t[t.length-1];return"function"==typeof i&&t.pop(),(0,e.fromArray)(t,void 0).lift(new p(i))}var p=function(){function t(t){this.resultSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.resultSelector))},t}();exports.ZipOperator=p;var c=function(e){function i(t,r,i){void 0===i&&(i=Object.create(null));var n=e.call(this,t)||this;return n.iterators=[],n.active=0,n.resultSelector="function"==typeof r?r:null,n.values=i,n}return t.__extends(i,e),i.prototype._next=function(t){var e=this.iterators;(0,r.isArray)(t)?e.push(new f(t)):"function"==typeof t[s.iterator]?e.push(new h(t[s.iterator]())):e.push(new y(this.destination,this,t))},i.prototype._complete=function(){var t=this.iterators,e=t.length;if(this.unsubscribe(),0!==e){this.active=e;for(var r=0;r<e;r++){var i=t[r];if(i.stillUnsubscribed)this.destination.add(i.subscribe(i,r));else this.active--}}else this.destination.complete()},i.prototype.notifyInactive=function(){this.active--,0===this.active&&this.destination.complete()},i.prototype.checkIterators=function(){for(var t=this.iterators,e=t.length,r=this.destination,i=0;i<e;i++){if("function"==typeof(s=t[i]).hasValue&&!s.hasValue())return}var n=!1,o=[];for(i=0;i<e;i++){var s,u=(s=t[i]).next();if(s.hasCompleted()&&(n=!0),u.done)return void r.complete();o.push(u.value)}this.resultSelector?this._tryresultSelector(o):r.next(o),n&&r.complete()},i.prototype._tryresultSelector=function(t){var e;try{e=this.resultSelector.apply(this,t)}catch(r){return void this.destination.error(r)}this.destination.next(e)},i}(i.Subscriber);exports.ZipSubscriber=c;var h=function(){function t(t){this.iterator=t,this.nextResult=t.next()}return t.prototype.hasValue=function(){return!0},t.prototype.next=function(){var t=this.nextResult;return this.nextResult=this.iterator.next(),t},t.prototype.hasCompleted=function(){var t=this.nextResult;return t&&t.done},t}(),f=function(){function t(t){this.array=t,this.index=0,this.length=0,this.length=t.length}return t.prototype[s.iterator]=function(){return this},t.prototype.next=function(t){var e=this.index++,r=this.array;return e<this.length?{value:r[e],done:!1}:{value:null,done:!0}},t.prototype.hasValue=function(){return this.array.length>this.index},t.prototype.hasCompleted=function(){return this.array.length===this.index},t}(),y=function(e){function r(t,r,i){var n=e.call(this,t)||this;return n.parent=r,n.observable=i,n.stillUnsubscribed=!0,n.buffer=[],n.isComplete=!1,n}return t.__extends(r,e),r.prototype[s.iterator]=function(){return this},r.prototype.next=function(){var t=this.buffer;return 0===t.length&&this.isComplete?{value:null,done:!0}:{value:t.shift(),done:!1}},r.prototype.hasValue=function(){return this.buffer.length>0},r.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},r.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},r.prototype.notifyNext=function(t,e,r,i,n){this.buffer.push(e),this.parent.checkIterators()},r.prototype.subscribe=function(t,e){return(0,o.subscribeToResult)(this,this.observable,this,e)},r}(n.OuterSubscriber);
},{"tslib":"vCxL","./fromArray":"PJGF","../util/isArray":"KeTG","../Subscriber":"RaFB","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e","../../internal/symbol/iterator":"AqTP"}],"iRqj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Observable",{enumerable:!0,get:function(){return e.Observable}}),Object.defineProperty(exports,"ConnectableObservable",{enumerable:!0,get:function(){return r.ConnectableObservable}}),Object.defineProperty(exports,"GroupedObservable",{enumerable:!0,get:function(){return t.GroupedObservable}}),Object.defineProperty(exports,"observable",{enumerable:!0,get:function(){return n.observable}}),Object.defineProperty(exports,"Subject",{enumerable:!0,get:function(){return i.Subject}}),Object.defineProperty(exports,"BehaviorSubject",{enumerable:!0,get:function(){return u.BehaviorSubject}}),Object.defineProperty(exports,"ReplaySubject",{enumerable:!0,get:function(){return o.ReplaySubject}}),Object.defineProperty(exports,"AsyncSubject",{enumerable:!0,get:function(){return b.AsyncSubject}}),Object.defineProperty(exports,"asapScheduler",{enumerable:!0,get:function(){return a.asap}}),Object.defineProperty(exports,"asyncScheduler",{enumerable:!0,get:function(){return l.async}}),Object.defineProperty(exports,"queueScheduler",{enumerable:!0,get:function(){return c.queue}}),Object.defineProperty(exports,"animationFrameScheduler",{enumerable:!0,get:function(){return p.animationFrame}}),Object.defineProperty(exports,"VirtualTimeScheduler",{enumerable:!0,get:function(){return s.VirtualTimeScheduler}}),Object.defineProperty(exports,"VirtualAction",{enumerable:!0,get:function(){return s.VirtualAction}}),Object.defineProperty(exports,"Scheduler",{enumerable:!0,get:function(){return f.Scheduler}}),Object.defineProperty(exports,"Subscription",{enumerable:!0,get:function(){return d.Subscription}}),Object.defineProperty(exports,"Subscriber",{enumerable:!0,get:function(){return m.Subscriber}}),Object.defineProperty(exports,"Notification",{enumerable:!0,get:function(){return g.Notification}}),Object.defineProperty(exports,"NotificationKind",{enumerable:!0,get:function(){return g.NotificationKind}}),Object.defineProperty(exports,"pipe",{enumerable:!0,get:function(){return y.pipe}}),Object.defineProperty(exports,"noop",{enumerable:!0,get:function(){return O.noop}}),Object.defineProperty(exports,"identity",{enumerable:!0,get:function(){return j.identity}}),Object.defineProperty(exports,"isObservable",{enumerable:!0,get:function(){return P.isObservable}}),Object.defineProperty(exports,"ArgumentOutOfRangeError",{enumerable:!0,get:function(){return x.ArgumentOutOfRangeError}}),Object.defineProperty(exports,"EmptyError",{enumerable:!0,get:function(){return v.EmptyError}}),Object.defineProperty(exports,"ObjectUnsubscribedError",{enumerable:!0,get:function(){return q.ObjectUnsubscribedError}}),Object.defineProperty(exports,"UnsubscriptionError",{enumerable:!0,get:function(){return E.UnsubscriptionError}}),Object.defineProperty(exports,"TimeoutError",{enumerable:!0,get:function(){return S.TimeoutError}}),Object.defineProperty(exports,"bindCallback",{enumerable:!0,get:function(){return h.bindCallback}}),Object.defineProperty(exports,"bindNodeCallback",{enumerable:!0,get:function(){return N.bindNodeCallback}}),Object.defineProperty(exports,"combineLatest",{enumerable:!0,get:function(){return R.combineLatest}}),Object.defineProperty(exports,"concat",{enumerable:!0,get:function(){return k.concat}}),Object.defineProperty(exports,"defer",{enumerable:!0,get:function(){return C.defer}}),Object.defineProperty(exports,"empty",{enumerable:!0,get:function(){return A.empty}}),Object.defineProperty(exports,"EMPTY",{enumerable:!0,get:function(){return A.EMPTY}}),Object.defineProperty(exports,"forkJoin",{enumerable:!0,get:function(){return T.forkJoin}}),Object.defineProperty(exports,"from",{enumerable:!0,get:function(){return V.from}}),Object.defineProperty(exports,"fromEvent",{enumerable:!0,get:function(){return U.fromEvent}}),Object.defineProperty(exports,"fromEventPattern",{enumerable:!0,get:function(){return B.fromEventPattern}}),Object.defineProperty(exports,"generate",{enumerable:!0,get:function(){return w.generate}}),Object.defineProperty(exports,"iif",{enumerable:!0,get:function(){return z.iif}}),Object.defineProperty(exports,"interval",{enumerable:!0,get:function(){return F.interval}}),Object.defineProperty(exports,"merge",{enumerable:!0,get:function(){return J.merge}}),Object.defineProperty(exports,"never",{enumerable:!0,get:function(){return L.never}}),Object.defineProperty(exports,"NEVER",{enumerable:!0,get:function(){return L.NEVER}}),Object.defineProperty(exports,"of",{enumerable:!0,get:function(){return M.of}}),Object.defineProperty(exports,"onErrorResumeNext",{enumerable:!0,get:function(){return G.onErrorResumeNext}}),Object.defineProperty(exports,"pairs",{enumerable:!0,get:function(){return K.pairs}}),Object.defineProperty(exports,"partition",{enumerable:!0,get:function(){return Y.partition}}),Object.defineProperty(exports,"race",{enumerable:!0,get:function(){return _.race}}),Object.defineProperty(exports,"range",{enumerable:!0,get:function(){return D.range}}),Object.defineProperty(exports,"throwError",{enumerable:!0,get:function(){return H.throwError}}),Object.defineProperty(exports,"timer",{enumerable:!0,get:function(){return I.timer}}),Object.defineProperty(exports,"using",{enumerable:!0,get:function(){return Q.using}}),Object.defineProperty(exports,"zip",{enumerable:!0,get:function(){return W.zip}}),Object.defineProperty(exports,"scheduled",{enumerable:!0,get:function(){return X.scheduled}}),Object.defineProperty(exports,"config",{enumerable:!0,get:function(){return Z.config}});var e=require("./internal/Observable"),r=require("./internal/observable/ConnectableObservable"),t=require("./internal/operators/groupBy"),n=require("./internal/symbol/observable"),i=require("./internal/Subject"),u=require("./internal/BehaviorSubject"),o=require("./internal/ReplaySubject"),b=require("./internal/AsyncSubject"),a=require("./internal/scheduler/asap"),l=require("./internal/scheduler/async"),c=require("./internal/scheduler/queue"),p=require("./internal/scheduler/animationFrame"),s=require("./internal/scheduler/VirtualTimeScheduler"),f=require("./internal/Scheduler"),d=require("./internal/Subscription"),m=require("./internal/Subscriber"),g=require("./internal/Notification"),y=require("./internal/util/pipe"),O=require("./internal/util/noop"),j=require("./internal/util/identity"),P=require("./internal/util/isObservable"),x=require("./internal/util/ArgumentOutOfRangeError"),v=require("./internal/util/EmptyError"),q=require("./internal/util/ObjectUnsubscribedError"),E=require("./internal/util/UnsubscriptionError"),S=require("./internal/util/TimeoutError"),h=require("./internal/observable/bindCallback"),N=require("./internal/observable/bindNodeCallback"),R=require("./internal/observable/combineLatest"),k=require("./internal/observable/concat"),C=require("./internal/observable/defer"),A=require("./internal/observable/empty"),T=require("./internal/observable/forkJoin"),V=require("./internal/observable/from"),U=require("./internal/observable/fromEvent"),B=require("./internal/observable/fromEventPattern"),w=require("./internal/observable/generate"),z=require("./internal/observable/iif"),F=require("./internal/observable/interval"),J=require("./internal/observable/merge"),L=require("./internal/observable/never"),M=require("./internal/observable/of"),G=require("./internal/observable/onErrorResumeNext"),K=require("./internal/observable/pairs"),Y=require("./internal/observable/partition"),_=require("./internal/observable/race"),D=require("./internal/observable/range"),H=require("./internal/observable/throwError"),I=require("./internal/observable/timer"),Q=require("./internal/observable/using"),W=require("./internal/observable/zip"),X=require("./internal/scheduled/scheduled"),Z=require("./internal/config");
},{"./internal/Observable":"wbSE","./internal/observable/ConnectableObservable":"kkfD","./internal/operators/groupBy":"dNgG","./internal/symbol/observable":"tjV3","./internal/Subject":"r9t1","./internal/BehaviorSubject":"MPU6","./internal/ReplaySubject":"Cp6P","./internal/AsyncSubject":"Scvc","./internal/scheduler/asap":"ZqYc","./internal/scheduler/async":"jun6","./internal/scheduler/queue":"HGOP","./internal/scheduler/animationFrame":"zUKp","./internal/scheduler/VirtualTimeScheduler":"RuMO","./internal/Scheduler":"QglZ","./internal/Subscription":"I8KM","./internal/Subscriber":"RaFB","./internal/Notification":"n7Mc","./internal/util/pipe":"HQCS","./internal/util/noop":"rXfM","./internal/util/identity":"LXph","./internal/util/isObservable":"cUXi","./internal/util/ArgumentOutOfRangeError":"Qh4I","./internal/util/EmptyError":"vsl0","./internal/util/ObjectUnsubscribedError":"xQEi","./internal/util/UnsubscriptionError":"pMaL","./internal/util/TimeoutError":"SZK7","./internal/observable/bindCallback":"lxDK","./internal/observable/bindNodeCallback":"uTDa","./internal/observable/combineLatest":"omVc","./internal/observable/concat":"CsdO","./internal/observable/defer":"w9G6","./internal/observable/empty":"XsKQ","./internal/observable/forkJoin":"R2GC","./internal/observable/from":"WXUl","./internal/observable/fromEvent":"ZHZV","./internal/observable/fromEventPattern":"HFE7","./internal/observable/generate":"xNZb","./internal/observable/iif":"SXp5","./internal/observable/interval":"QHLS","./internal/observable/merge":"DQig","./internal/observable/never":"TBTl","./internal/observable/of":"wZuk","./internal/observable/onErrorResumeNext":"VCq5","./internal/observable/pairs":"QHfc","./internal/observable/partition":"wJ9V","./internal/observable/race":"bwYX","./internal/observable/range":"N84r","./internal/observable/throwError":"FdIu","./internal/observable/timer":"RPvN","./internal/observable/using":"gc1W","./internal/observable/zip":"ff2A","./internal/scheduled/scheduled":"mNZE","./internal/config":"Q3iD"}],"Pdg2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.audit=o;var t=n(require("tslib")),e=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var u=n?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}function o(t){return function(e){return e.lift(new u(t))}}var u=function(){function t(t){this.durationSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.durationSelector))},t}(),s=function(e){function i(t,r){var i=e.call(this,t)||this;return i.durationSelector=r,i.hasValue=!1,i}return t.__extends(i,e),i.prototype._next=function(t){if(this.value=t,this.hasValue=!0,!this.throttled){var e=void 0;try{e=(0,this.durationSelector)(t)}catch(n){return this.destination.error(n)}var i=(0,r.subscribeToResult)(this,e);!i||i.closed?this.clearThrottle():this.add(this.throttled=i)}},i.prototype.clearThrottle=function(){var t=this.value,e=this.hasValue,r=this.throttled;r&&(this.remove(r),this.throttled=null,r.unsubscribe()),e&&(this.value=null,this.hasValue=!1,this.destination.next(t))},i.prototype.notifyNext=function(t,e,r,i){this.clearThrottle()},i.prototype.notifyComplete=function(){this.clearThrottle()},i}(e.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"jcYn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.auditTime=i;var e=require("../scheduler/async"),r=require("./audit"),t=require("../observable/timer");function i(i,u){return void 0===u&&(u=e.async),(0,r.audit)(function(){return(0,t.timer)(i,u)})}
},{"../scheduler/async":"jun6","./audit":"Pdg2","../observable/timer":"RPvN"}],"mG6b":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.buffer=u;var e=i(require("tslib")),t=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=n();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}}return r.default=e,t&&t.set(e,r),r}function u(e){return function(t){return t.lift(new o(e))}}var o=function(){function e(e){this.closingNotifier=e}return e.prototype.call=function(e,t){return t.subscribe(new f(e,this.closingNotifier))},e}(),f=function(t){function n(e,n){var i=t.call(this,e)||this;return i.buffer=[],i.add((0,r.subscribeToResult)(i,n)),i}return e.__extends(n,t),n.prototype._next=function(e){this.buffer.push(e)},n.prototype.notifyNext=function(e,t,r,n,i){var u=this.buffer;this.buffer=[],this.destination.next(u)},n}(t.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"f9IP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bufferCount=i;var t=n(require("tslib")),e=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var s=i?Object.getOwnPropertyDescriptor(t,u):null;s&&(s.get||s.set)?Object.defineProperty(n,u,s):n[u]=t[u]}}return n.default=t,e&&e.set(t,n),n}function i(t,e){return void 0===e&&(e=null),function(r){return r.lift(new u(t,e))}}var u=function(){function t(t,e){this.bufferSize=t,this.startBufferEvery=e,this.subscriberClass=e&&t!==e?f:s}return t.prototype.call=function(t,e){return e.subscribe(new this.subscriberClass(t,this.bufferSize,this.startBufferEvery))},t}(),s=function(e){function r(t,r){var n=e.call(this,t)||this;return n.bufferSize=r,n.buffer=[],n}return t.__extends(r,e),r.prototype._next=function(t){var e=this.buffer;e.push(t),e.length==this.bufferSize&&(this.destination.next(e),this.buffer=[])},r.prototype._complete=function(){var t=this.buffer;t.length>0&&this.destination.next(t),e.prototype._complete.call(this)},r}(e.Subscriber),f=function(e){function r(t,r,n){var i=e.call(this,t)||this;return i.bufferSize=r,i.startBufferEvery=n,i.buffers=[],i.count=0,i}return t.__extends(r,e),r.prototype._next=function(t){var e=this.bufferSize,r=this.startBufferEvery,n=this.buffers,i=this.count;this.count++,i%r==0&&n.push([]);for(var u=n.length;u--;){var s=n[u];s.push(t),s.length===e&&(n.splice(u,1),this.destination.next(s))}},r.prototype._complete=function(){for(var t=this.buffers,r=this.destination;t.length>0;){var n=t.shift();n.length>0&&r.next(n)}e.prototype._complete.call(this)},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"Axj2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bufferTime=s;var e=o(require("tslib")),t=require("../scheduler/async"),r=require("../Subscriber"),n=require("../util/isScheduler");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}}return r.default=e,t&&t.set(e,r),r}function s(e){var r=arguments.length,i=t.async;(0,n.isScheduler)(arguments[arguments.length-1])&&(i=arguments[arguments.length-1],r--);var o=null;r>=2&&(o=arguments[1]);var s=Number.POSITIVE_INFINITY;return r>=3&&(s=arguments[2]),function(t){return t.lift(new u(e,o,s,i))}}var u=function(){function e(e,t,r,n){this.bufferTimeSpan=e,this.bufferCreationInterval=t,this.maxBufferSize=r,this.scheduler=n}return e.prototype.call=function(e,t){return t.subscribe(new f(e,this.bufferTimeSpan,this.bufferCreationInterval,this.maxBufferSize,this.scheduler))},e}(),c=function(){return function(){this.buffer=[]}}(),f=function(t){function r(e,r,n,i,o){var s=t.call(this,e)||this;s.bufferTimeSpan=r,s.bufferCreationInterval=n,s.maxBufferSize=i,s.scheduler=o,s.contexts=[];var u=s.openContext();if(s.timespanOnly=null==n||n<0,s.timespanOnly){var c={subscriber:s,context:u,bufferTimeSpan:r};s.add(u.closeAction=o.schedule(l,r,c))}else{var f={subscriber:s,context:u},p={bufferTimeSpan:r,bufferCreationInterval:n,subscriber:s,scheduler:o};s.add(u.closeAction=o.schedule(h,r,f)),s.add(o.schedule(a,n,p))}return s}return e.__extends(r,t),r.prototype._next=function(e){for(var t,r=this.contexts,n=r.length,i=0;i<n;i++){var o=r[i],s=o.buffer;s.push(e),s.length==this.maxBufferSize&&(t=o)}t&&this.onBufferFull(t)},r.prototype._error=function(e){this.contexts.length=0,t.prototype._error.call(this,e)},r.prototype._complete=function(){for(var e=this.contexts,r=this.destination;e.length>0;){var n=e.shift();r.next(n.buffer)}t.prototype._complete.call(this)},r.prototype._unsubscribe=function(){this.contexts=null},r.prototype.onBufferFull=function(e){this.closeContext(e);var t=e.closeAction;if(t.unsubscribe(),this.remove(t),!this.closed&&this.timespanOnly){e=this.openContext();var r=this.bufferTimeSpan,n={subscriber:this,context:e,bufferTimeSpan:r};this.add(e.closeAction=this.scheduler.schedule(l,r,n))}},r.prototype.openContext=function(){var e=new c;return this.contexts.push(e),e},r.prototype.closeContext=function(e){this.destination.next(e.buffer);var t=this.contexts;(t?t.indexOf(e):-1)>=0&&t.splice(t.indexOf(e),1)},r}(r.Subscriber);function l(e){var t=e.subscriber,r=e.context;r&&t.closeContext(r),t.closed||(e.context=t.openContext(),e.context.closeAction=this.schedule(e,e.bufferTimeSpan))}function a(e){var t=e.bufferCreationInterval,r=e.bufferTimeSpan,n=e.subscriber,i=e.scheduler,o=n.openContext();n.closed||(n.add(o.closeAction=i.schedule(h,r,{subscriber:n,context:o})),this.schedule(e,t))}function h(e){var t=e.subscriber,r=e.context;t.closeContext(r)}
},{"tslib":"vCxL","../scheduler/async":"jun6","../Subscriber":"RaFB","../util/isScheduler":"VqoH"}],"ZTTP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bufferToggle=s;var t=o(require("tslib")),e=require("../Subscription"),r=require("../util/subscribeToResult"),n=require("../OuterSubscriber");function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function o(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=n?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}function s(t,e){return function(r){return r.lift(new u(t,e))}}var u=function(){function t(t,e){this.openings=t,this.closingSelector=e}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.openings,this.closingSelector))},t}(),c=function(n){function i(t,e,i){var o=n.call(this,t)||this;return o.openings=e,o.closingSelector=i,o.contexts=[],o.add((0,r.subscribeToResult)(o,e)),o}return t.__extends(i,n),i.prototype._next=function(t){for(var e=this.contexts,r=e.length,n=0;n<r;n++)e[n].buffer.push(t)},i.prototype._error=function(t){for(var e=this.contexts;e.length>0;){var r=e.shift();r.subscription.unsubscribe(),r.buffer=null,r.subscription=null}this.contexts=null,n.prototype._error.call(this,t)},i.prototype._complete=function(){for(var t=this.contexts;t.length>0;){var e=t.shift();this.destination.next(e.buffer),e.subscription.unsubscribe(),e.buffer=null,e.subscription=null}this.contexts=null,n.prototype._complete.call(this)},i.prototype.notifyNext=function(t,e,r,n,i){t?this.closeBuffer(t):this.openBuffer(e)},i.prototype.notifyComplete=function(t){this.closeBuffer(t.context)},i.prototype.openBuffer=function(t){try{var e=this.closingSelector.call(this,t);e&&this.trySubscribe(e)}catch(r){this._error(r)}},i.prototype.closeBuffer=function(t){var e=this.contexts;if(e&&t){var r=t.buffer,n=t.subscription;this.destination.next(r),e.splice(e.indexOf(t),1),this.remove(n),n.unsubscribe()}},i.prototype.trySubscribe=function(t){var n=this.contexts,i=new e.Subscription,o={buffer:[],subscription:i};n.push(o);var s=(0,r.subscribeToResult)(this,t,o);!s||s.closed?this.closeBuffer(o):(s.context=o,this.add(s),i.add(s))},i}(n.OuterSubscriber);
},{"tslib":"vCxL","../Subscription":"I8KM","../util/subscribeToResult":"JM7e","../OuterSubscriber":"hZYI"}],"Ul3A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bufferWhen=s;var t=o(require("tslib")),e=require("../Subscription"),r=require("../OuterSubscriber"),i=require("../util/subscribeToResult");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function o(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=i?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}function s(t){return function(e){return e.lift(new u(t))}}var u=function(){function t(t){this.closingSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.closingSelector))},t}(),c=function(r){function n(t,e){var i=r.call(this,t)||this;return i.closingSelector=e,i.subscribing=!1,i.openBuffer(),i}return t.__extends(n,r),n.prototype._next=function(t){this.buffer.push(t)},n.prototype._complete=function(){var t=this.buffer;t&&this.destination.next(t),r.prototype._complete.call(this)},n.prototype._unsubscribe=function(){this.buffer=null,this.subscribing=!1},n.prototype.notifyNext=function(t,e,r,i,n){this.openBuffer()},n.prototype.notifyComplete=function(){this.subscribing?this.complete():this.openBuffer()},n.prototype.openBuffer=function(){var t=this.closingSubscription;t&&(this.remove(t),t.unsubscribe());var r,n=this.buffer;this.buffer&&this.destination.next(n),this.buffer=[];try{r=(0,this.closingSelector)()}catch(o){return this.error(o)}t=new e.Subscription,this.closingSubscription=t,this.add(t),this.subscribing=!0,t.add((0,i.subscribeToResult)(this,r)),this.subscribing=!1},n}(r.OuterSubscriber);
},{"tslib":"vCxL","../Subscription":"I8KM","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"THoY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.catchError=o;var r=u(require("tslib")),e=require("../OuterSubscriber"),t=require("../InnerSubscriber"),i=require("../util/subscribeToResult");function n(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return n=function(){return r},r}function u(r){if(r&&r.__esModule)return r;var e=n();if(e&&e.has(r))return e.get(r);var t={};if(null!=r){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in r)if(Object.prototype.hasOwnProperty.call(r,u)){var o=i?Object.getOwnPropertyDescriptor(r,u):null;o&&(o.get||o.set)?Object.defineProperty(t,u,o):t[u]=r[u]}}return t.default=r,e&&e.set(r,t),t}function o(r){return function(e){var t=new c(r),i=e.lift(t);return t.caught=i}}var c=function(){function r(r){this.selector=r}return r.prototype.call=function(r,e){return e.subscribe(new s(r,this.selector,this.caught))},r}(),s=function(e){function n(r,t,i){var n=e.call(this,r)||this;return n.selector=t,n.caught=i,n}return r.__extends(n,e),n.prototype.error=function(r){if(!this.isStopped){var n=void 0;try{n=this.selector(r,this.caught)}catch(o){return void e.prototype.error.call(this,o)}this._unsubscribeAndRecycle();var u=new t.InnerSubscriber(this,void 0,void 0);this.add(u),(0,i.subscribeToResult)(this,n,void 0,void 0,u)}},n}(e.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../InnerSubscriber":"aQbR","../util/subscribeToResult":"JM7e"}],"TMFF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.combineAll=t;var e=require("../observable/combineLatest");function t(t){return function(r){return r.lift(new e.CombineLatestOperator(t))}}
},{"../observable/combineLatest":"omVc"}],"DJQm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.combineLatest=n;var e=require("../util/isArray"),r=require("../observable/combineLatest"),t=require("../observable/from"),o={};function n(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];var i=null;return"function"==typeof o[o.length-1]&&(i=o.pop()),1===o.length&&(0,e.isArray)(o[0])&&(o=o[0].slice()),function(e){return e.lift.call((0,t.from)([e].concat(o)),new r.CombineLatestOperator(i))}}
},{"../util/isArray":"KeTG","../observable/combineLatest":"omVc","../observable/from":"WXUl"}],"ZHmI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.concat=t;var e=require("../observable/concat");function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return function(r){return r.lift.call(e.concat.apply(void 0,[r].concat(t)))}}
},{"../observable/concat":"CsdO"}],"DoUK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.concatMap=r;var e=require("./mergeMap");function r(r,t){return(0,e.mergeMap)(r,t,1)}
},{"./mergeMap":"nFsM"}],"APQq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.concatMapTo=t;var e=require("./concatMap");function t(t,r){return(0,e.concatMap)(function(){return t},r)}
},{"./concatMap":"DoUK"}],"U1Ln":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.count=i;var t=n(require("tslib")),e=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var c=i?Object.getOwnPropertyDescriptor(t,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=t[o]}}return n.default=t,e&&e.set(t,n),n}function i(t){return function(e){return e.lift(new o(t,e))}}var o=function(){function t(t,e){this.predicate=t,this.source=e}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.predicate,this.source))},t}(),c=function(e){function r(t,r,n){var i=e.call(this,t)||this;return i.predicate=r,i.source=n,i.count=0,i.index=0,i}return t.__extends(r,e),r.prototype._next=function(t){this.predicate?this._tryPredicate(t):this.count++},r.prototype._tryPredicate=function(t){var e;try{e=this.predicate(t,this.index++,this.source)}catch(r){return void this.destination.error(r)}e&&this.count++},r.prototype._complete=function(){this.destination.next(this.count),this.destination.complete()},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"y9EZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=u;var t=n(require("tslib")),e=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var o=n?Object.getOwnPropertyDescriptor(t,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=t[u]}}return r.default=t,e&&e.set(t,r),r}function u(t){return function(e){return e.lift(new o(t))}}var o=function(){function t(t){this.durationSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.durationSelector))},t}(),s=function(e){function i(t,r){var i=e.call(this,t)||this;return i.durationSelector=r,i.hasValue=!1,i.durationSubscription=null,i}return t.__extends(i,e),i.prototype._next=function(t){try{var e=this.durationSelector.call(this,t);e&&this._tryNext(t,e)}catch(r){this.destination.error(r)}},i.prototype._complete=function(){this.emitValue(),this.destination.complete()},i.prototype._tryNext=function(t,e){var i=this.durationSubscription;this.value=t,this.hasValue=!0,i&&(i.unsubscribe(),this.remove(i)),(i=(0,r.subscribeToResult)(this,e))&&!i.closed&&this.add(this.durationSubscription=i)},i.prototype.notifyNext=function(t,e,r,i,n){this.emitValue()},i.prototype.notifyComplete=function(){this.emitValue()},i.prototype.emitValue=function(){if(this.hasValue){var t=this.value,r=this.durationSubscription;r&&(this.durationSubscription=null,r.unsubscribe(),this.remove(r)),this.value=null,this.hasValue=!1,e.prototype._next.call(this,t)}},i}(e.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"KBFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounceTime=i;var e=u(require("tslib")),t=require("../Subscriber"),n=require("../scheduler/async");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function u(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=u?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}}return n.default=e,t&&t.set(e,n),n}function i(e,t){return void 0===t&&(t=n.async),function(n){return n.lift(new s(e,t))}}var s=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new o(e,this.dueTime,this.scheduler))},e}(),o=function(t){function n(e,n,r){var u=t.call(this,e)||this;return u.dueTime=n,u.scheduler=r,u.debouncedSubscription=null,u.lastValue=null,u.hasValue=!1,u}return e.__extends(n,t),n.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(c,this.dueTime,this))},n.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},n.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}},n.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},n}(t.Subscriber);function c(e){e.debouncedNext()}
},{"tslib":"vCxL","../Subscriber":"RaFB","../scheduler/async":"jun6"}],"YBdz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultIfEmpty=i;var t=n(require("tslib")),e=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var o=i?Object.getOwnPropertyDescriptor(t,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=t[u]}}return n.default=t,e&&e.set(t,n),n}function i(t){return void 0===t&&(t=null),function(e){return e.lift(new u(t))}}var u=function(){function t(t){this.defaultValue=t}return t.prototype.call=function(t,e){return e.subscribe(new o(t,this.defaultValue))},t}(),o=function(e){function r(t,r){var n=e.call(this,t)||this;return n.defaultValue=r,n.isEmpty=!0,n}return t.__extends(r,e),r.prototype._next=function(t){this.isEmpty=!1,this.destination.next(t)},r.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"rxSS":[function(require,module,exports) {
"use strict";function e(e){return e instanceof Date&&!isNaN(+e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isDate=e;
},{}],"zkgx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.delay=u;var e=s(require("tslib")),t=require("../scheduler/async"),i=require("../util/isDate"),r=require("../Subscriber"),n=require("../Notification");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function s(e){if(e&&e.__esModule)return e;var t=o();if(t&&t.has(e))return t.get(e);var i={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=r?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(i,n,s):i[n]=e[n]}}return i.default=e,t&&t.set(e,i),i}function u(e,r){void 0===r&&(r=t.async);var n=(0,i.isDate)(e)?+e-r.now():Math.abs(e);return function(e){return e.lift(new c(n,r))}}var c=function(){function e(e,t){this.delay=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new a(e,this.delay,this.scheduler))},e}(),a=function(t){function i(e,i,r){var n=t.call(this,e)||this;return n.delay=i,n.scheduler=r,n.queue=[],n.active=!1,n.errored=!1,n}return e.__extends(i,t),i.dispatch=function(e){for(var t=e.source,i=t.queue,r=e.scheduler,n=e.destination;i.length>0&&i[0].time-r.now()<=0;)i.shift().notification.observe(n);if(i.length>0){var o=Math.max(0,i[0].time-r.now());this.schedule(e,o)}else this.unsubscribe(),t.active=!1},i.prototype._schedule=function(e){this.active=!0,this.destination.add(e.schedule(i.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))},i.prototype.scheduleNotification=function(e){if(!0!==this.errored){var t=this.scheduler,i=new h(t.now()+this.delay,e);this.queue.push(i),!1===this.active&&this._schedule(t)}},i.prototype._next=function(e){this.scheduleNotification(n.Notification.createNext(e))},i.prototype._error=function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()},i.prototype._complete=function(){this.scheduleNotification(n.Notification.createComplete()),this.unsubscribe()},i}(r.Subscriber),h=function(){return function(e,t){this.time=e,this.notification=t}}();
},{"tslib":"vCxL","../scheduler/async":"jun6","../util/isDate":"rxSS","../Subscriber":"RaFB","../Notification":"n7Mc"}],"iVuv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.delayWhen=u;var t=s(require("tslib")),e=require("../Subscriber"),r=require("../Observable"),i=require("../OuterSubscriber"),o=require("../util/subscribeToResult");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function s(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=i?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}function u(t,e){return e?function(r){return new b(r,e).lift(new c(t))}:function(e){return e.lift(new c(t))}}var c=function(){function t(t){this.delayDurationSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new p(t,this.delayDurationSelector))},t}(),p=function(e){function r(t,r){var i=e.call(this,t)||this;return i.delayDurationSelector=r,i.completed=!1,i.delayNotifierSubscriptions=[],i.index=0,i}return t.__extends(r,e),r.prototype.notifyNext=function(t,e,r,i,o){this.destination.next(t),this.removeSubscription(o),this.tryComplete()},r.prototype.notifyError=function(t,e){this._error(t)},r.prototype.notifyComplete=function(t){var e=this.removeSubscription(t);e&&this.destination.next(e),this.tryComplete()},r.prototype._next=function(t){var e=this.index++;try{var r=this.delayDurationSelector(t,e);r&&this.tryDelay(r,t)}catch(i){this.destination.error(i)}},r.prototype._complete=function(){this.completed=!0,this.tryComplete(),this.unsubscribe()},r.prototype.removeSubscription=function(t){t.unsubscribe();var e=this.delayNotifierSubscriptions.indexOf(t);return-1!==e&&this.delayNotifierSubscriptions.splice(e,1),t.outerValue},r.prototype.tryDelay=function(t,e){var r=(0,o.subscribeToResult)(this,t,e);r&&!r.closed&&(this.destination.add(r),this.delayNotifierSubscriptions.push(r))},r.prototype.tryComplete=function(){this.completed&&0===this.delayNotifierSubscriptions.length&&this.destination.complete()},r}(i.OuterSubscriber),b=function(e){function r(t,r){var i=e.call(this)||this;return i.source=t,i.subscriptionDelay=r,i}return t.__extends(r,e),r.prototype._subscribe=function(t){this.subscriptionDelay.subscribe(new l(t,this.source))},r}(r.Observable),l=function(e){function r(t,r){var i=e.call(this)||this;return i.parent=t,i.source=r,i.sourceSubscribed=!1,i}return t.__extends(r,e),r.prototype._next=function(t){this.subscribeToSource()},r.prototype._error=function(t){this.unsubscribe(),this.parent.error(t)},r.prototype._complete=function(){this.unsubscribe(),this.subscribeToSource()},r.prototype.subscribeToSource=function(){this.sourceSubscribed||(this.sourceSubscribed=!0,this.unsubscribe(),this.source.subscribe(this.parent))},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../Observable":"wbSE","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"v6b5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dematerialize=i;var e=n(require("tslib")),r=require("../Subscriber");function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var r=t();if(r&&r.has(e))return r.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}}return n.default=e,r&&r.set(e,n),n}function i(){return function(e){return e.lift(new u)}}var u=function(){function e(){}return e.prototype.call=function(e,r){return r.subscribe(new o(e))},e}(),o=function(r){function t(e){return r.call(this,e)||this}return e.__extends(t,r),t.prototype._next=function(e){e.observe(this.destination)},t}(r.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"H608":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.distinct=o,exports.DistinctSubscriber=void 0;var e=n(require("tslib")),t=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}}return r.default=e,t&&t.set(e,r),r}function o(e,t){return function(r){return r.lift(new s(e,t))}}var s=function(){function e(e,t){this.keySelector=e,this.flushes=t}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.keySelector,this.flushes))},e}(),u=function(t){function i(e,i,n){var o=t.call(this,e)||this;return o.keySelector=i,o.values=new Set,n&&o.add((0,r.subscribeToResult)(o,n)),o}return e.__extends(i,t),i.prototype.notifyNext=function(e,t,r,i,n){this.values.clear()},i.prototype.notifyError=function(e,t){this._error(e)},i.prototype._next=function(e){this.keySelector?this._useKeySelector(e):this._finalizeNext(e,e)},i.prototype._useKeySelector=function(e){var t,r=this.destination;try{t=this.keySelector(e)}catch(i){return void r.error(i)}this._finalizeNext(t,e)},i.prototype._finalizeNext=function(e,t){var r=this.values;r.has(e)||(r.add(e),this.destination.next(t))},i}(t.OuterSubscriber);exports.DistinctSubscriber=u;
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"hFX7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.distinctUntilChanged=i;var e=n(require("tslib")),t=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=i?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}}return n.default=e,t&&t.set(e,n),n}function i(e,t){return function(r){return r.lift(new o(e,t))}}var o=function(){function e(e,t){this.compare=e,this.keySelector=t}return e.prototype.call=function(e,t){return t.subscribe(new c(e,this.compare,this.keySelector))},e}(),c=function(t){function r(e,r,n){var i=t.call(this,e)||this;return i.keySelector=n,i.hasKey=!1,"function"==typeof r&&(i.compare=r),i}return e.__extends(r,t),r.prototype.compare=function(e,t){return e===t},r.prototype._next=function(e){var t;try{var r=this.keySelector;t=r?r(e):e}catch(i){return this.destination.error(i)}var n=!1;if(this.hasKey)try{n=(0,this.compare)(this.key,t)}catch(i){return this.destination.error(i)}else this.hasKey=!0;n||(this.key=t,this.destination.next(e))},r}(t.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"Egbr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.distinctUntilKeyChanged=e;var t=require("./distinctUntilChanged");function e(e,n){return(0,t.distinctUntilChanged)(function(t,i){return n?n(t[e],i[e]):t[e]===i[e]})}
},{"./distinctUntilChanged":"hFX7"}],"D7Ma":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.throwIfEmpty=i;var r=o(require("tslib")),t=require("../util/EmptyError"),e=require("../Subscriber");function n(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return n=function(){return r},r}function o(r){if(r&&r.__esModule)return r;var t=n();if(t&&t.has(r))return t.get(r);var e={};if(null!=r){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var u=o?Object.getOwnPropertyDescriptor(r,i):null;u&&(u.get||u.set)?Object.defineProperty(e,i,u):e[i]=r[i]}}return e.default=r,t&&t.set(r,e),e}function i(r){return void 0===r&&(r=a),function(t){return t.lift(new u(r))}}var u=function(){function r(r){this.errorFactory=r}return r.prototype.call=function(r,t){return t.subscribe(new c(r,this.errorFactory))},r}(),c=function(t){function e(r,e){var n=t.call(this,r)||this;return n.errorFactory=e,n.hasValue=!1,n}return r.__extends(e,t),e.prototype._next=function(r){this.hasValue=!0,this.destination.next(r)},e.prototype._complete=function(){if(this.hasValue)return this.destination.complete();var r=void 0;try{r=this.errorFactory()}catch(t){r=t}this.destination.error(r)},e}(e.Subscriber);function a(){return new t.EmptyError}
},{"tslib":"vCxL","../util/EmptyError":"vsl0","../Subscriber":"RaFB"}],"JVEz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.take=o;var t=u(require("tslib")),e=require("../Subscriber"),r=require("../util/ArgumentOutOfRangeError"),n=require("../observable/empty");function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function u(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var o=n?Object.getOwnPropertyDescriptor(t,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=t[u]}}return r.default=t,e&&e.set(t,r),r}function o(t){return function(e){return 0===t?(0,n.empty)():e.lift(new s(t))}}var s=function(){function t(t){if(this.total=t,this.total<0)throw new r.ArgumentOutOfRangeError}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.total))},t}(),a=function(e){function r(t,r){var n=e.call(this,t)||this;return n.total=r,n.count=0,n}return t.__extends(r,e),r.prototype._next=function(t){var e=this.total,r=++this.count;r<=e&&(this.destination.next(t),r===e&&(this.destination.complete(),this.unsubscribe()))},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../util/ArgumentOutOfRangeError":"Qh4I","../observable/empty":"XsKQ"}],"TbZV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.elementAt=f;var e=require("../util/ArgumentOutOfRangeError"),r=require("./filter"),t=require("./throwIfEmpty"),u=require("./defaultIfEmpty"),n=require("./take");function f(f,i){if(f<0)throw new e.ArgumentOutOfRangeError;var o=arguments.length>=2;return function(a){return a.pipe((0,r.filter)(function(e,r){return r===f}),(0,n.take)(1),o?(0,u.defaultIfEmpty)(i):(0,t.throwIfEmpty)(function(){return new e.ArgumentOutOfRangeError}))}}
},{"../util/ArgumentOutOfRangeError":"Qh4I","./filter":"HKzi","./throwIfEmpty":"D7Ma","./defaultIfEmpty":"YBdz","./take":"JVEz"}],"loee":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.endWith=o;var e=require("../observable/concat"),r=require("../observable/of");function o(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];return function(t){return(0,e.concat)(t,r.of.apply(void 0,o))}}
},{"../observable/concat":"CsdO","../observable/of":"wZuk"}],"eEZZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.every=n;var t=i(require("tslib")),e=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function i(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=n?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=t[o]}}return i.default=t,e&&e.set(t,i),i}function n(t,e){return function(r){return r.lift(new o(t,e,r))}}var o=function(){function t(t,e,r){this.predicate=t,this.thisArg=e,this.source=r}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.predicate,this.thisArg,this.source))},t}(),s=function(e){function r(t,r,i,n){var o=e.call(this,t)||this;return o.predicate=r,o.thisArg=i,o.source=n,o.index=0,o.thisArg=i||o,o}return t.__extends(r,e),r.prototype.notifyComplete=function(t){this.destination.next(t),this.destination.complete()},r.prototype._next=function(t){var e=!1;try{e=this.predicate.call(this.thisArg,t,this.index++,this.source)}catch(r){return void this.destination.error(r)}e||this.notifyComplete(!1)},r.prototype._complete=function(){this.notifyComplete(!0)},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"ifNj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.exhaust=o;var t=n(require("tslib")),e=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=n?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}function o(){return function(t){return t.lift(new s)}}var s=function(){function t(){}return t.prototype.call=function(t,e){return e.subscribe(new u(t))},t}(),u=function(e){function i(t){var r=e.call(this,t)||this;return r.hasCompleted=!1,r.hasSubscription=!1,r}return t.__extends(i,e),i.prototype._next=function(t){this.hasSubscription||(this.hasSubscription=!0,this.add((0,r.subscribeToResult)(this,t)))},i.prototype._complete=function(){this.hasCompleted=!0,this.hasSubscription||this.destination.complete()},i.prototype.notifyComplete=function(t){this.remove(t),this.hasSubscription=!1,this.hasCompleted&&this.destination.complete()},i}(e.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"DGWU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.exhaustMap=c;var t=u(require("tslib")),e=require("../OuterSubscriber"),r=require("../InnerSubscriber"),i=require("../util/subscribeToResult"),n=require("./map"),o=require("../observable/from");function s(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function u(t){if(t&&t.__esModule)return t;var e=s();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=i?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}}return r.default=t,e&&e.set(t,r),r}function c(t,e){return e?function(r){return r.pipe(c(function(r,i){return(0,o.from)(t(r,i)).pipe((0,n.map)(function(t,n){return e(r,t,i,n)}))}))}:function(e){return e.lift(new p(t))}}var p=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.project))},t}(),a=function(e){function n(t,r){var i=e.call(this,t)||this;return i.project=r,i.hasSubscription=!1,i.hasCompleted=!1,i.index=0,i}return t.__extends(n,e),n.prototype._next=function(t){this.hasSubscription||this.tryNext(t)},n.prototype.tryNext=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(i){return void this.destination.error(i)}this.hasSubscription=!0,this._innerSub(e,t,r)},n.prototype._innerSub=function(t,e,n){var o=new r.InnerSubscriber(this,void 0,void 0);this.destination.add(o),(0,i.subscribeToResult)(this,t,e,n,o)},n.prototype._complete=function(){this.hasCompleted=!0,this.hasSubscription||this.destination.complete(),this.unsubscribe()},n.prototype.notifyNext=function(t,e,r,i,n){this.destination.next(e)},n.prototype.notifyError=function(t){this.destination.error(t)},n.prototype.notifyComplete=function(t){this.destination.remove(t),this.hasSubscription=!1,this.hasCompleted&&this.destination.complete()},n}(e.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../InnerSubscriber":"aQbR","../util/subscribeToResult":"JM7e","./map":"dNh5","../observable/from":"WXUl"}],"iYcS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.expand=n,exports.ExpandSubscriber=exports.ExpandOperator=void 0;var e=s(require("tslib")),t=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=s?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}}return r.default=e,t&&t.set(e,r),r}function n(e,t,r){return void 0===t&&(t=Number.POSITIVE_INFINITY),void 0===r&&(r=void 0),t=(t||0)<1?Number.POSITIVE_INFINITY:t,function(i){return i.lift(new o(e,t,r))}}var o=function(){function e(e,t,r){this.project=e,this.concurrent=t,this.scheduler=r}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.project,this.concurrent,this.scheduler))},e}();exports.ExpandOperator=o;var u=function(t){function i(e,r,i,s){var n=t.call(this,e)||this;return n.project=r,n.concurrent=i,n.scheduler=s,n.index=0,n.active=0,n.hasCompleted=!1,i<Number.POSITIVE_INFINITY&&(n.buffer=[]),n}return e.__extends(i,t),i.dispatch=function(e){var t=e.subscriber,r=e.result,i=e.value,s=e.index;t.subscribeToProjection(r,i,s)},i.prototype._next=function(e){var t=this.destination;if(t.closed)this._complete();else{var r=this.index++;if(this.active<this.concurrent){t.next(e);try{var s=(0,this.project)(e,r);if(this.scheduler){var n={subscriber:this,result:s,value:e,index:r};this.destination.add(this.scheduler.schedule(i.dispatch,0,n))}else this.subscribeToProjection(s,e,r)}catch(o){t.error(o)}}else this.buffer.push(e)}},i.prototype.subscribeToProjection=function(e,t,i){this.active++,this.destination.add((0,r.subscribeToResult)(this,e,t,i))},i.prototype._complete=function(){this.hasCompleted=!0,this.hasCompleted&&0===this.active&&this.destination.complete(),this.unsubscribe()},i.prototype.notifyNext=function(e,t,r,i,s){this._next(t)},i.prototype.notifyComplete=function(e){var t=this.buffer;this.destination.remove(e),this.active--,t&&t.length>0&&this._next(t.shift()),this.hasCompleted&&0===this.active&&this.destination.complete()},i}(t.OuterSubscriber);exports.ExpandSubscriber=u;
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"x5qu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.finalize=u;var e=i(require("tslib")),r=require("../Subscriber"),t=require("../Subscription");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var r=n();if(r&&r.has(e))return r.get(e);var t={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c=i?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(t,u,c):t[u]=e[u]}}return t.default=e,r&&r.set(e,t),t}function u(e){return function(r){return r.lift(new c(e))}}var c=function(){function e(e){this.callback=e}return e.prototype.call=function(e,r){return r.subscribe(new o(e,this.callback))},e}(),o=function(r){function n(e,n){var i=r.call(this,e)||this;return i.add(new t.Subscription(n)),i}return e.__extends(n,r),n}(r.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../Subscription":"I8KM"}],"t6rP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.find=n,exports.FindValueSubscriber=exports.FindValueOperator=void 0;var e=i(require("tslib")),t=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var i={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]}}return i.default=e,t&&t.set(e,i),i}function n(e,t){if("function"!=typeof e)throw new TypeError("predicate is not a function");return function(r){return r.lift(new o(e,r,!1,t))}}var o=function(){function e(e,t,r,i){this.predicate=e,this.source=t,this.yieldIndex=r,this.thisArg=i}return e.prototype.call=function(e,t){return t.subscribe(new s(e,this.predicate,this.source,this.yieldIndex,this.thisArg))},e}();exports.FindValueOperator=o;var s=function(t){function r(e,r,i,n,o){var s=t.call(this,e)||this;return s.predicate=r,s.source=i,s.yieldIndex=n,s.thisArg=o,s.index=0,s}return e.__extends(r,t),r.prototype.notifyComplete=function(e){var t=this.destination;t.next(e),t.complete(),this.unsubscribe()},r.prototype._next=function(e){var t=this.predicate,r=this.thisArg,i=this.index++;try{t.call(r||this,e,i,this.source)&&this.notifyComplete(this.yieldIndex?i:e)}catch(n){this.destination.error(n)}},r.prototype._complete=function(){this.notifyComplete(this.yieldIndex?-1:void 0)},r}(t.Subscriber);exports.FindValueSubscriber=s;
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"GIlo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.findIndex=r;var e=require("../operators/find");function r(r,t){return function(n){return n.lift(new e.FindValueOperator(r,n,!0,t))}}
},{"../operators/find":"t6rP"}],"f9sd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.first=f;var r=require("../util/EmptyError"),e=require("./filter"),t=require("./take"),i=require("./defaultIfEmpty"),u=require("./throwIfEmpty"),n=require("../util/identity");function f(f,o){var p=arguments.length>=2;return function(l){return l.pipe(f?(0,e.filter)(function(r,e){return f(r,e,l)}):n.identity,(0,t.take)(1),p?(0,i.defaultIfEmpty)(o):(0,u.throwIfEmpty)(function(){return new r.EmptyError}))}}
},{"../util/EmptyError":"vsl0","./filter":"HKzi","./take":"JVEz","./defaultIfEmpty":"YBdz","./throwIfEmpty":"D7Ma","../util/identity":"LXph"}],"P82l":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ignoreElements=u;var e=n(require("tslib")),r=require("../Subscriber");function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var r=t();if(r&&r.has(e))return r.get(e);var n={};if(null!=e){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=u?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}}return n.default=e,r&&r.set(e,n),n}function u(){return function(e){return e.lift(new i)}}var i=function(){function e(){}return e.prototype.call=function(e,r){return r.subscribe(new o(e))},e}(),o=function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return e.__extends(t,r),t.prototype._next=function(e){},t}(r.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"LqVv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isEmpty=o;var t=n(require("tslib")),e=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=o?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=t[i]}}return n.default=t,e&&e.set(t,n),n}function o(){return function(t){return t.lift(new i)}}var i=function(){function t(){}return t.prototype.call=function(t,e){return e.subscribe(new u(t))},t}(),u=function(e){function r(t){return e.call(this,t)||this}return t.__extends(r,e),r.prototype.notifyComplete=function(t){var e=this.destination;e.next(t),e.complete()},r.prototype._next=function(t){this.notifyComplete(!1)},r.prototype._complete=function(){this.notifyComplete(!0)},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"FbHg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.takeLast=u;var t=o(require("tslib")),r=require("../Subscriber"),e=require("../util/ArgumentOutOfRangeError"),n=require("../observable/empty");function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function o(t){if(t&&t.__esModule)return t;var r=i();if(r&&r.has(t))return r.get(t);var e={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var u=n?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(e,o,u):e[o]=t[o]}}return e.default=t,r&&r.set(t,e),e}function u(t){return function(r){return 0===t?(0,n.empty)():r.lift(new a(t))}}var a=function(){function t(t){if(this.total=t,this.total<0)throw new e.ArgumentOutOfRangeError}return t.prototype.call=function(t,r){return r.subscribe(new s(t,this.total))},t}(),s=function(r){function e(t,e){var n=r.call(this,t)||this;return n.total=e,n.ring=new Array,n.count=0,n}return t.__extends(e,r),e.prototype._next=function(t){var r=this.ring,e=this.total,n=this.count++;r.length<e?r.push(t):r[n%e]=t},e.prototype._complete=function(){var t=this.destination,r=this.count;if(r>0)for(var e=this.count>=this.total?this.total:this.count,n=this.ring,i=0;i<e;i++){var o=r++%e;t.next(n[o])}t.complete()},e}(r.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../util/ArgumentOutOfRangeError":"Qh4I","../observable/empty":"XsKQ"}],"xu0X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.last=f;var t=require("../util/EmptyError"),e=require("./filter"),r=require("./takeLast"),i=require("./throwIfEmpty"),u=require("./defaultIfEmpty"),n=require("../util/identity");function f(f,o){var p=arguments.length>=2;return function(a){return a.pipe(f?(0,e.filter)(function(t,e){return f(t,e,a)}):n.identity,(0,r.takeLast)(1),p?(0,u.defaultIfEmpty)(o):(0,i.throwIfEmpty)(function(){return new t.EmptyError}))}}
},{"../util/EmptyError":"vsl0","./filter":"HKzi","./takeLast":"FbHg","./throwIfEmpty":"D7Ma","./defaultIfEmpty":"YBdz","../util/identity":"LXph"}],"yJbZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapTo=u;var e=n(require("tslib")),t=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=u?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}}return n.default=e,t&&t.set(e,n),n}function u(e){return function(t){return t.lift(new i(e))}}var i=function(){function e(e){this.value=e}return e.prototype.call=function(e,t){return t.subscribe(new o(e,this.value))},e}(),o=function(t){function r(e,r){var n=t.call(this,e)||this;return n.value=r,n}return e.__extends(r,t),r.prototype._next=function(e){this.destination.next(this.value)},r}(t.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"ZwCH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.materialize=o;var t=i(require("tslib")),e=require("../Subscriber"),r=require("../Notification");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function i(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var u=i?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}function o(){return function(t){return t.lift(new u)}}var u=function(){function t(){}return t.prototype.call=function(t,e){return e.subscribe(new c(t))},t}(),c=function(e){function n(t){return e.call(this,t)||this}return t.__extends(n,e),n.prototype._next=function(t){this.destination.next(r.Notification.createNext(t))},n.prototype._error=function(t){var e=this.destination;e.next(r.Notification.createError(t)),e.complete()},n.prototype._complete=function(){var t=this.destination;t.next(r.Notification.createComplete()),t.complete()},n}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../Notification":"n7Mc"}],"U785":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scan=i;var e=n(require("tslib")),t=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var u=i?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(n,s,u):n[s]=e[s]}}return n.default=e,t&&t.set(e,n),n}function i(e,t){var r=!1;return arguments.length>=2&&(r=!0),function(n){return n.lift(new s(e,t,r))}}var s=function(){function e(e,t,r){void 0===r&&(r=!1),this.accumulator=e,this.seed=t,this.hasSeed=r}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.accumulator,this.seed,this.hasSeed))},e}(),u=function(t){function r(e,r,n,i){var s=t.call(this,e)||this;return s.accumulator=r,s._seed=n,s.hasSeed=i,s.index=0,s}return e.__extends(r,t),Object.defineProperty(r.prototype,"seed",{get:function(){return this._seed},set:function(e){this.hasSeed=!0,this._seed=e},enumerable:!0,configurable:!0}),r.prototype._next=function(e){if(this.hasSeed)return this._tryNext(e);this.seed=e,this.destination.next(e)},r.prototype._tryNext=function(e){var t,r=this.index++;try{t=this.accumulator(this.seed,e,r)}catch(n){this.destination.error(n)}this.seed=t,this.destination.next(t)},r}(t.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"BORG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.reduce=n;var e=require("./scan"),t=require("./takeLast"),r=require("./defaultIfEmpty"),u=require("../util/pipe");function n(n,i){return arguments.length>=2?function(a){return(0,u.pipe)((0,e.scan)(n,i),(0,t.takeLast)(1),(0,r.defaultIfEmpty)(i))(a)}:function(r){return(0,u.pipe)((0,e.scan)(function(e,t,r){return n(e,t,r+1)}),(0,t.takeLast)(1))(r)}}
},{"./scan":"U785","./takeLast":"FbHg","./defaultIfEmpty":"YBdz","../util/pipe":"HQCS"}],"BgD2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.max=r;var e=require("./reduce");function r(r){var t="function"==typeof r?function(e,t){return r(e,t)>0?e:t}:function(e,r){return e>r?e:r};return(0,e.reduce)(t)}
},{"./reduce":"BORG"}],"sbfV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.merge=r;var e=require("../observable/merge");function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return function(t){return t.lift.call(e.merge.apply(void 0,[t].concat(r)))}}
},{"../observable/merge":"DQig"}],"S3q6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeMapTo=r;var e=require("./mergeMap");function r(r,t,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"==typeof t?(0,e.mergeMap)(function(){return r},t,n):("number"==typeof t&&(n=t),(0,e.mergeMap)(function(){return r},n))}
},{"./mergeMap":"nFsM"}],"wQne":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeScan=o,exports.MergeScanSubscriber=exports.MergeScanOperator=void 0;var t=s(require("tslib")),e=require("../util/subscribeToResult"),r=require("../OuterSubscriber"),i=require("../InnerSubscriber");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function s(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}}return r.default=t,e&&e.set(t,r),r}function o(t,e,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),function(i){return i.lift(new u(t,e,r))}}var u=function(){function t(t,e,r){this.accumulator=t,this.seed=e,this.concurrent=r}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.accumulator,this.seed,this.concurrent))},t}();exports.MergeScanOperator=u;var c=function(r){function n(t,e,i,n){var s=r.call(this,t)||this;return s.accumulator=e,s.acc=i,s.concurrent=n,s.hasValue=!1,s.hasCompleted=!1,s.buffer=[],s.active=0,s.index=0,s}return t.__extends(n,r),n.prototype._next=function(t){if(this.active<this.concurrent){var e=this.index++,r=this.destination,i=void 0;try{i=(0,this.accumulator)(this.acc,t,e)}catch(n){return r.error(n)}this.active++,this._innerSub(i,t,e)}else this.buffer.push(t)},n.prototype._innerSub=function(t,r,n){var s=new i.InnerSubscriber(this,void 0,void 0);this.destination.add(s),(0,e.subscribeToResult)(this,t,r,n,s)},n.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete()),this.unsubscribe()},n.prototype.notifyNext=function(t,e,r,i,n){var s=this.destination;this.acc=e,this.hasValue=!0,s.next(e)},n.prototype.notifyComplete=function(t){var e=this.buffer;this.destination.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete())},n}(r.OuterSubscriber);exports.MergeScanSubscriber=c;
},{"tslib":"vCxL","../util/subscribeToResult":"JM7e","../OuterSubscriber":"hZYI","../InnerSubscriber":"aQbR"}],"bAWd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.min=r;var e=require("./reduce");function r(r){var t="function"==typeof r?function(e,t){return r(e,t)<0?e:t}:function(e,r){return e<r?e:r};return(0,e.reduce)(t)}
},{"./reduce":"BORG"}],"M6Em":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.multicast=e,exports.MulticastOperator=void 0;var t=require("../observable/ConnectableObservable");function e(e,c){return function(o){var n;if(n="function"==typeof e?e:function(){return e},"function"==typeof c)return o.lift(new r(n,c));var s=Object.create(o,t.connectableObservableDescriptor);return s.source=o,s.subjectFactory=n,s}}var r=function(){function t(t,e){this.subjectFactory=t,this.selector=e}return t.prototype.call=function(t,e){var r=this.selector,c=this.subjectFactory(),o=r(c).subscribe(t);return o.add(e.subscribe(c)),o},t}();exports.MulticastOperator=r;
},{"../observable/ConnectableObservable":"kkfD"}],"S4UH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onErrorResumeNext=c,exports.onErrorResumeNextStatic=f;var e=s(require("tslib")),r=require("../observable/from"),t=require("../util/isArray"),i=require("../OuterSubscriber"),n=require("../InnerSubscriber"),o=require("../util/subscribeToResult");function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e){if(e&&e.__esModule)return e;var r=u();if(r&&r.has(e))return r.get(e);var t={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=i?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(t,n,o):t[n]=e[n]}}return t.default=e,r&&r.set(e,t),t}function c(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&(0,t.isArray)(e[0])&&(e=e[0]),function(r){return r.lift(new b(e))}}function f(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var n;return 1===e.length&&(0,t.isArray)(e[0])&&(e=e[0]),n=e.shift(),(0,r.from)(n,null).lift(new b(e))}var b=function(){function e(e){this.nextSources=e}return e.prototype.call=function(e,r){return r.subscribe(new a(e,this.nextSources))},e}(),a=function(r){function t(e,t){var i=r.call(this,e)||this;return i.destination=e,i.nextSources=t,i}return e.__extends(t,r),t.prototype.notifyError=function(e,r){this.subscribeToNextSource()},t.prototype.notifyComplete=function(e){this.subscribeToNextSource()},t.prototype._error=function(e){this.subscribeToNextSource(),this.unsubscribe()},t.prototype._complete=function(){this.subscribeToNextSource(),this.unsubscribe()},t.prototype.subscribeToNextSource=function(){var e=this.nextSources.shift();if(e){var r=new n.InnerSubscriber(this,void 0,void 0);this.destination.add(r),(0,o.subscribeToResult)(this,e,void 0,void 0,r)}else this.destination.complete()},t}(i.OuterSubscriber);
},{"tslib":"vCxL","../observable/from":"WXUl","../util/isArray":"KeTG","../OuterSubscriber":"hZYI","../InnerSubscriber":"aQbR","../util/subscribeToResult":"JM7e"}],"u6OS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pairwise=i;var e=n(require("tslib")),r=require("../Subscriber");function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var r=t();if(r&&r.has(e))return r.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}}return n.default=e,r&&r.set(e,n),n}function i(){return function(e){return e.lift(new u)}}var u=function(){function e(){}return e.prototype.call=function(e,r){return r.subscribe(new o(e))},e}(),o=function(r){function t(e){var t=r.call(this,e)||this;return t.hasPrev=!1,t}return e.__extends(t,r),t.prototype._next=function(e){var r;this.hasPrev?r=[this.prev,e]:this.hasPrev=!0,this.prev=e,r&&this.destination.next(r)},t}(r.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"jvG2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.partition=t;var e=require("../util/not"),r=require("./filter");function t(t,i){return function(n){return[(0,r.filter)(t,i)(n),(0,r.filter)((0,e.not)(t,i))(n)]}}
},{"../util/not":"nij6","./filter":"HKzi"}],"TdE4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pluck=e;var r=require("./map");function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=e.length;if(0===o)throw new Error("list of properties cannot be empty.");return function(n){return(0,r.map)(t(e,o))(n)}}function t(r,e){return function(t){for(var n=t,o=0;o<e;o++){var u=n[r[o]];if(void 0===u)return;n=u}return n}}
},{"./map":"dNh5"}],"TQAB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.publish=u;var e=require("../Subject"),t=require("./multicast");function u(u){return u?(0,t.multicast)(function(){return new e.Subject},u):(0,t.multicast)(new e.Subject)}
},{"../Subject":"r9t1","./multicast":"M6Em"}],"fUyM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.publishBehavior=t;var e=require("../BehaviorSubject"),r=require("./multicast");function t(t){return function(u){return(0,r.multicast)(new e.BehaviorSubject(t))(u)}}
},{"../BehaviorSubject":"MPU6","./multicast":"M6Em"}],"fQ7S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.publishLast=r;var e=require("../AsyncSubject"),t=require("./multicast");function r(){return function(r){return(0,t.multicast)(new e.AsyncSubject)(r)}}
},{"../AsyncSubject":"Scvc","./multicast":"M6Em"}],"aqWk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.publishReplay=u;var e=require("../ReplaySubject"),t=require("./multicast");function u(u,r,n,i){n&&"function"!=typeof n&&(i=n);var o="function"==typeof n?n:void 0,c=new e.ReplaySubject(u,r,i);return function(e){return(0,t.multicast)(function(){return c},o)(e)}}
},{"../ReplaySubject":"Cp6P","./multicast":"M6Em"}],"EAaA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.race=t;var r=require("../util/isArray"),e=require("../observable/race");function t(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return function(a){return 1===t.length&&(0,r.isArray)(t[0])&&(t=t[0]),a.lift.call(e.race.apply(void 0,[a].concat(t)))}}
},{"../util/isArray":"KeTG","../observable/race":"bwYX"}],"Fbxf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.repeat=u;var e=i(require("tslib")),t=require("../Subscriber"),r=require("../observable/empty");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=n();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}}return r.default=e,t&&t.set(e,r),r}function u(e){return void 0===e&&(e=-1),function(t){return 0===e?(0,r.empty)():e<0?t.lift(new o(-1,t)):t.lift(new o(e-1,t))}}var o=function(){function e(e,t){this.count=e,this.source=t}return e.prototype.call=function(e,t){return t.subscribe(new c(e,this.count,this.source))},e}(),c=function(t){function r(e,r,n){var i=t.call(this,e)||this;return i.count=r,i.source=n,i}return e.__extends(r,t),r.prototype.complete=function(){if(!this.isStopped){var e=this.source,r=this.count;if(0===r)return t.prototype.complete.call(this);r>-1&&(this.count=r-1),e.subscribe(this._unsubscribeAndRecycle())}},r}(t.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../observable/empty":"XsKQ"}],"CT9q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.repeatWhen=o;var t=n(require("tslib")),e=require("../Subject"),i=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function s(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=s();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=r?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}}return i.default=t,e&&e.set(t,i),i}function o(t){return function(e){return e.lift(new u(t))}}var u=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.notifier,e))},t}(),c=function(i){function s(t,e,r){var s=i.call(this,t)||this;return s.notifier=e,s.source=r,s.sourceIsBeingSubscribedTo=!0,s}return t.__extends(s,i),s.prototype.notifyNext=function(t,e,i,r,s){this.sourceIsBeingSubscribedTo=!0,this.source.subscribe(this)},s.prototype.notifyComplete=function(t){if(!1===this.sourceIsBeingSubscribedTo)return i.prototype.complete.call(this)},s.prototype.complete=function(){if(this.sourceIsBeingSubscribedTo=!1,!this.isStopped){if(this.retries||this.subscribeToRetries(),!this.retriesSubscription||this.retriesSubscription.closed)return i.prototype.complete.call(this);this._unsubscribeAndRecycle(),this.notifications.next()}},s.prototype._unsubscribe=function(){var t=this.notifications,e=this.retriesSubscription;t&&(t.unsubscribe(),this.notifications=null),e&&(e.unsubscribe(),this.retriesSubscription=null),this.retries=null},s.prototype._unsubscribeAndRecycle=function(){var t=this._unsubscribe;return this._unsubscribe=null,i.prototype._unsubscribeAndRecycle.call(this),this._unsubscribe=t,this},s.prototype.subscribeToRetries=function(){var t;this.notifications=new e.Subject;try{t=(0,this.notifier)(this.notifications)}catch(s){return i.prototype.complete.call(this)}this.retries=t,this.retriesSubscription=(0,r.subscribeToResult)(this,t)},s}(i.OuterSubscriber);
},{"tslib":"vCxL","../Subject":"r9t1","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"ZHEI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.retry=u;var r=n(require("tslib")),t=require("../Subscriber");function e(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return e=function(){return r},r}function n(r){if(r&&r.__esModule)return r;var t=e();if(t&&t.has(r))return t.get(r);var n={};if(null!=r){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var o=u?Object.getOwnPropertyDescriptor(r,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=r[i]}}return n.default=r,t&&t.set(r,n),n}function u(r){return void 0===r&&(r=-1),function(t){return t.lift(new i(r,t))}}var i=function(){function r(r,t){this.count=r,this.source=t}return r.prototype.call=function(r,t){return t.subscribe(new o(r,this.count,this.source))},r}(),o=function(t){function e(r,e,n){var u=t.call(this,r)||this;return u.count=e,u.source=n,u}return r.__extends(e,t),e.prototype.error=function(r){if(!this.isStopped){var e=this.source,n=this.count;if(0===n)return t.prototype.error.call(this,r);n>-1&&(this.count=n-1),e.subscribe(this._unsubscribeAndRecycle())}},e}(t.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"GHe2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.retryWhen=u;var r=n(require("tslib")),e=require("../Subject"),t=require("../OuterSubscriber"),i=require("../util/subscribeToResult");function s(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return s=function(){return r},r}function n(r){if(r&&r.__esModule)return r;var e=s();if(e&&e.has(r))return e.get(r);var t={};if(null!=r){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var u=i?Object.getOwnPropertyDescriptor(r,n):null;u&&(u.get||u.set)?Object.defineProperty(t,n,u):t[n]=r[n]}}return t.default=r,e&&e.set(r,t),t}function u(r){return function(e){return e.lift(new o(r,e))}}var o=function(){function r(r,e){this.notifier=r,this.source=e}return r.prototype.call=function(r,e){return e.subscribe(new c(r,this.notifier,this.source))},r}(),c=function(t){function s(r,e,i){var s=t.call(this,r)||this;return s.notifier=e,s.source=i,s}return r.__extends(s,t),s.prototype.error=function(r){if(!this.isStopped){var s=this.errors,n=this.retries,u=this.retriesSubscription;if(n)this.errors=null,this.retriesSubscription=null;else{s=new e.Subject;try{n=(0,this.notifier)(s)}catch(o){return t.prototype.error.call(this,o)}u=(0,i.subscribeToResult)(this,n)}this._unsubscribeAndRecycle(),this.errors=s,this.retries=n,this.retriesSubscription=u,s.next(r)}},s.prototype._unsubscribe=function(){var r=this.errors,e=this.retriesSubscription;r&&(r.unsubscribe(),this.errors=null),e&&(e.unsubscribe(),this.retriesSubscription=null),this.retries=null},s.prototype.notifyNext=function(r,e,t,i,s){var n=this._unsubscribe;this._unsubscribe=null,this._unsubscribeAndRecycle(),this._unsubscribe=n,this.source.subscribe(this)},s}(t.OuterSubscriber);
},{"tslib":"vCxL","../Subject":"r9t1","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"Rd9o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sample=u;var t=i(require("tslib")),e=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function i(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var o=i?Object.getOwnPropertyDescriptor(t,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=t[u]}}return r.default=t,e&&e.set(t,r),r}function u(t){return function(e){return e.lift(new o(t))}}var o=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){var n=new s(t),i=e.subscribe(n);return i.add((0,r.subscribeToResult)(n,this.notifier)),i},t}(),s=function(e){function r(){var t=null!==e&&e.apply(this,arguments)||this;return t.hasValue=!1,t}return t.__extends(r,e),r.prototype._next=function(t){this.value=t,this.hasValue=!0},r.prototype.notifyNext=function(t,e,r,n,i){this.emitValue()},r.prototype.notifyComplete=function(){this.emitValue()},r.prototype.emitValue=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.value))},r}(e.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"nb45":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sampleTime=u;var e=i(require("tslib")),t=require("../Subscriber"),r=require("../scheduler/async");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=n();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var s=i?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(r,u,s):r[u]=e[u]}}return r.default=e,t&&t.set(e,r),r}function u(e,t){return void 0===t&&(t=r.async),function(r){return r.lift(new s(e,t))}}var s=function(){function e(e,t){this.period=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new o(e,this.period,this.scheduler))},e}(),o=function(t){function r(e,r,n){var i=t.call(this,e)||this;return i.period=r,i.scheduler=n,i.hasValue=!1,i.add(n.schedule(c,r,{subscriber:i,period:r})),i}return e.__extends(r,t),r.prototype._next=function(e){this.lastValue=e,this.hasValue=!0},r.prototype.notifyNext=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))},r}(t.Subscriber);function c(e){var t=e.subscriber,r=e.period;t.notifyNext(),this.schedule(e,r)}
},{"tslib":"vCxL","../Subscriber":"RaFB","../scheduler/async":"jun6"}],"PMGC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sequenceEqual=o,exports.SequenceEqualSubscriber=exports.SequenceEqualOperator=void 0;var t=n(require("tslib")),e=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=o?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=t[i]}}return n.default=t,e&&e.set(t,n),n}function o(t,e){return function(r){return r.lift(new i(t,e))}}var i=function(){function t(t,e){this.compareTo=t,this.comparator=e}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.compareTo,this.comparator))},t}();exports.SequenceEqualOperator=i;var s=function(e){function r(t,r,n){var o=e.call(this,t)||this;return o.compareTo=r,o.comparator=n,o._a=[],o._b=[],o._oneComplete=!1,o.destination.add(r.subscribe(new u(t,o))),o}return t.__extends(r,e),r.prototype._next=function(t){this._oneComplete&&0===this._b.length?this.emit(!1):(this._a.push(t),this.checkValues())},r.prototype._complete=function(){this._oneComplete?this.emit(0===this._a.length&&0===this._b.length):this._oneComplete=!0,this.unsubscribe()},r.prototype.checkValues=function(){for(var t=this._a,e=this._b,r=this.comparator;t.length>0&&e.length>0;){var n=t.shift(),o=e.shift(),i=!1;try{i=r?r(n,o):n===o}catch(s){this.destination.error(s)}i||this.emit(!1)}},r.prototype.emit=function(t){var e=this.destination;e.next(t),e.complete()},r.prototype.nextB=function(t){this._oneComplete&&0===this._a.length?this.emit(!1):(this._b.push(t),this.checkValues())},r.prototype.completeB=function(){this._oneComplete?this.emit(0===this._a.length&&0===this._b.length):this._oneComplete=!0},r}(e.Subscriber);exports.SequenceEqualSubscriber=s;var u=function(e){function r(t,r){var n=e.call(this,t)||this;return n.parent=r,n}return t.__extends(r,e),r.prototype._next=function(t){this.parent.nextB(t)},r.prototype._error=function(t){this.parent.error(t),this.unsubscribe()},r.prototype._complete=function(){this.parent.completeB(),this.unsubscribe()},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"KBGh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.share=n;var e=require("./multicast"),r=require("./refCount"),t=require("../Subject");function u(){return new t.Subject}function n(){return function(t){return(0,r.refCount)()((0,e.multicast)(u)(t))}}
},{"./multicast":"M6Em","./refCount":"vT9o","../Subject":"r9t1"}],"xsrM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shareReplay=r;var e=require("../ReplaySubject");function r(e,r,t){var n;return n=e&&"object"==typeof e?e:{bufferSize:e,windowTime:r,refCount:!1,scheduler:t},function(e){return e.lift(u(n))}}function u(r){var u,t,n=r.bufferSize,i=void 0===n?Number.POSITIVE_INFINITY:n,o=r.windowTime,c=void 0===o?Number.POSITIVE_INFINITY:o,s=r.refCount,f=r.scheduler,b=0,d=!1,a=!1;return function(r){b++,u&&!d||(d=!1,u=new e.ReplaySubject(i,c,f),t=r.subscribe({next:function(e){u.next(e)},error:function(e){d=!0,u.error(e)},complete:function(){a=!0,u.complete()}}));var n=u.subscribe(this);this.add(function(){b--,n.unsubscribe(),t&&!a&&s&&0===b&&(t.unsubscribe(),t=void 0,u=void 0)})}}
},{"../ReplaySubject":"Cp6P"}],"angX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.single=o;var e=i(require("tslib")),t=require("../Subscriber"),r=require("../util/EmptyError");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=n();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}}return r.default=e,t&&t.set(e,r),r}function o(e){return function(t){return t.lift(new u(e,t))}}var u=function(){function e(e,t){this.predicate=e,this.source=t}return e.prototype.call=function(e,t){return t.subscribe(new s(e,this.predicate,this.source))},e}(),s=function(t){function n(e,r,n){var i=t.call(this,e)||this;return i.predicate=r,i.source=n,i.seenValue=!1,i.index=0,i}return e.__extends(n,t),n.prototype.applySingleValue=function(e){this.seenValue?this.destination.error("Sequence contains more than one element"):(this.seenValue=!0,this.singleValue=e)},n.prototype._next=function(e){var t=this.index++;this.predicate?this.tryNext(e,t):this.applySingleValue(e)},n.prototype.tryNext=function(e,t){try{this.predicate(e,t,this.source)&&this.applySingleValue(e)}catch(r){this.destination.error(r)}},n.prototype._complete=function(){var e=this.destination;this.index>0?(e.next(this.seenValue?this.singleValue:void 0),e.complete()):e.error(new r.EmptyError)},n}(t.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../util/EmptyError":"vsl0"}],"vMIz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.skip=i;var t=n(require("tslib")),e=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var u=i?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=t[o]}}return n.default=t,e&&e.set(t,n),n}function i(t){return function(e){return e.lift(new o(t))}}var o=function(){function t(t){this.total=t}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.total))},t}(),u=function(e){function r(t,r){var n=e.call(this,t)||this;return n.total=r,n.count=0,n}return t.__extends(r,e),r.prototype._next=function(t){++this.count>this.total&&this.destination.next(t)},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"iB53":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.skipLast=u;var t=i(require("tslib")),r=require("../Subscriber"),e=require("../util/ArgumentOutOfRangeError");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function i(t){if(t&&t.__esModule)return t;var r=n();if(r&&r.has(t))return r.get(t);var e={};if(null!=t){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var o=i?Object.getOwnPropertyDescriptor(t,u):null;o&&(o.get||o.set)?Object.defineProperty(e,u,o):e[u]=t[u]}}return e.default=t,r&&r.set(t,e),e}function u(t){return function(r){return r.lift(new o(t))}}var o=function(){function t(t){if(this._skipCount=t,this._skipCount<0)throw new e.ArgumentOutOfRangeError}return t.prototype.call=function(t,e){return 0===this._skipCount?e.subscribe(new r.Subscriber(t)):e.subscribe(new s(t,this._skipCount))},t}(),s=function(r){function e(t,e){var n=r.call(this,t)||this;return n._skipCount=e,n._count=0,n._ring=new Array(e),n}return t.__extends(e,r),e.prototype._next=function(t){var r=this._skipCount,e=this._count++;if(e<r)this._ring[e]=t;else{var n=e%r,i=this._ring,u=i[n];i[n]=t,this.destination.next(u)}},e}(r.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../util/ArgumentOutOfRangeError":"Qh4I"}],"xmsT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.skipUntil=o;var e=u(require("tslib")),t=require("../OuterSubscriber"),r=require("../InnerSubscriber"),n=require("../util/subscribeToResult");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=n?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}}return r.default=e,t&&t.set(e,r),r}function o(e){return function(t){return t.lift(new s(e))}}var s=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){return t.subscribe(new c(e,this.notifier))},e}(),c=function(t){function i(e,i){var u=t.call(this,e)||this;u.hasValue=!1;var o=new r.InnerSubscriber(u,void 0,void 0);return u.add(o),u.innerSubscription=o,(0,n.subscribeToResult)(u,i,void 0,void 0,o),u}return e.__extends(i,t),i.prototype._next=function(e){this.hasValue&&t.prototype._next.call(this,e)},i.prototype.notifyNext=function(e,t,r,n,i){this.hasValue=!0,this.innerSubscription&&this.innerSubscription.unsubscribe()},i.prototype.notifyComplete=function(){},i}(t.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../InnerSubscriber":"aQbR","../util/subscribeToResult":"JM7e"}],"qjDA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.skipWhile=n;var t=i(require("tslib")),e=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function i(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var u=n?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(i,o,u):i[o]=t[o]}}return i.default=t,e&&e.set(t,i),i}function n(t){return function(e){return e.lift(new o(t))}}var o=function(){function t(t){this.predicate=t}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.predicate))},t}(),u=function(e){function r(t,r){var i=e.call(this,t)||this;return i.predicate=r,i.skipping=!0,i.index=0,i}return t.__extends(r,e),r.prototype._next=function(t){var e=this.destination;this.skipping&&this.tryCallPredicate(t),this.skipping||e.next(t)},r.prototype.tryCallPredicate=function(t){try{var e=this.predicate(t,this.index++);this.skipping=Boolean(e)}catch(r){this.destination.error(r)}},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"doo6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.startWith=t;var e=require("../observable/concat"),r=require("../util/isScheduler");function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var u=t[t.length-1];return(0,r.isScheduler)(u)?(t.pop(),function(r){return(0,e.concat)(t,r,u)}):function(r){return(0,e.concat)(t,r)}}
},{"../observable/concat":"CsdO","../util/isScheduler":"VqoH"}],"r9wA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SubscribeOnObservable=void 0;var e=u(require("tslib")),r=require("../Observable"),t=require("../scheduler/asap"),i=require("../util/isNumeric");function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){if(e&&e.__esModule)return e;var r=s();if(r&&r.has(e))return r.get(e);var t={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var n=i?Object.getOwnPropertyDescriptor(e,u):null;n&&(n.get||n.set)?Object.defineProperty(t,u,n):t[u]=e[u]}}return t.default=e,r&&r.set(e,t),t}var n=function(r){function s(e,s,u){void 0===s&&(s=0),void 0===u&&(u=t.asap);var n=r.call(this)||this;return n.source=e,n.delayTime=s,n.scheduler=u,(!(0,i.isNumeric)(s)||s<0)&&(n.delayTime=0),u&&"function"==typeof u.schedule||(n.scheduler=t.asap),n}return e.__extends(s,r),s.create=function(e,r,i){return void 0===r&&(r=0),void 0===i&&(i=t.asap),new s(e,r,i)},s.dispatch=function(e){var r=e.source,t=e.subscriber;return this.add(r.subscribe(t))},s.prototype._subscribe=function(e){var r=this.delayTime,t=this.source;return this.scheduler.schedule(s.dispatch,r,{source:t,subscriber:e})},s}(r.Observable);exports.SubscribeOnObservable=n;
},{"tslib":"vCxL","../Observable":"wbSE","../scheduler/asap":"ZqYc","../util/isNumeric":"wBpm"}],"Et1l":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribeOn=r;var e=require("../observable/SubscribeOnObservable");function r(e,r){return void 0===r&&(r=0),function(n){return n.lift(new t(e,r))}}var t=function(){function r(e,r){this.scheduler=e,this.delay=r}return r.prototype.call=function(r,t){return new e.SubscribeOnObservable(t,this.delay,this.scheduler).subscribe(r)},r}();
},{"../observable/SubscribeOnObservable":"r9wA"}],"g5Rk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.switchMap=c;var t=s(require("tslib")),e=require("../OuterSubscriber"),r=require("../InnerSubscriber"),n=require("../util/subscribeToResult"),i=require("./map"),o=require("../observable/from");function u(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function s(t){if(t&&t.__esModule)return t;var e=u();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var o=n?Object.getOwnPropertyDescriptor(t,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=t[i]}}return r.default=t,e&&e.set(t,r),r}function c(t,e){return"function"==typeof e?function(r){return r.pipe(c(function(r,n){return(0,o.from)(t(r,n)).pipe((0,i.map)(function(t,i){return e(r,t,n,i)}))}))}:function(e){return e.lift(new p(t))}}var p=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new f(t,this.project))},t}(),f=function(e){function i(t,r){var n=e.call(this,t)||this;return n.project=r,n.index=0,n}return t.__extends(i,e),i.prototype._next=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(n){return void this.destination.error(n)}this._innerSub(e,t,r)},i.prototype._innerSub=function(t,e,i){var o=this.innerSubscription;o&&o.unsubscribe();var u=new r.InnerSubscriber(this,void 0,void 0);this.destination.add(u),this.innerSubscription=(0,n.subscribeToResult)(this,t,e,i,u)},i.prototype._complete=function(){var t=this.innerSubscription;t&&!t.closed||e.prototype._complete.call(this),this.unsubscribe()},i.prototype._unsubscribe=function(){this.innerSubscription=null},i.prototype.notifyComplete=function(t){this.destination.remove(t),this.innerSubscription=null,this.isStopped&&e.prototype._complete.call(this)},i.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},i}(e.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../InnerSubscriber":"aQbR","../util/subscribeToResult":"JM7e","./map":"dNh5","../observable/from":"WXUl"}],"CBg8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.switchAll=i;var e=require("./switchMap"),t=require("../util/identity");function i(){return(0,e.switchMap)(t.identity)}
},{"./switchMap":"g5Rk","../util/identity":"LXph"}],"Hs9S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.switchMapTo=e;var t=require("./switchMap");function e(e,r){return r?(0,t.switchMap)(function(){return e},r):(0,t.switchMap)(function(){return e})}
},{"./switchMap":"g5Rk"}],"qGSv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.takeUntil=u;var e=i(require("tslib")),t=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;var t=n();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}}return r.default=e,t&&t.set(e,r),r}function u(e){return function(t){return t.lift(new o(e))}}var o=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){var n=new s(e),i=(0,r.subscribeToResult)(n,this.notifier);return i&&!n.seenValue?(n.add(i),t.subscribe(n)):n},e}(),s=function(t){function r(e){var r=t.call(this,e)||this;return r.seenValue=!1,r}return e.__extends(r,t),r.prototype.notifyNext=function(e,t,r,n,i){this.seenValue=!0,this.complete()},r.prototype.notifyComplete=function(){},r}(t.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"EYJX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.takeWhile=i;var e=n(require("tslib")),t=require("../Subscriber");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}}return n.default=e,t&&t.set(e,n),n}function i(e,t){return void 0===t&&(t=!1),function(r){return r.lift(new o(e,t))}}var o=function(){function e(e,t){this.predicate=e,this.inclusive=t}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.predicate,this.inclusive))},e}(),u=function(t){function r(e,r,n){var i=t.call(this,e)||this;return i.predicate=r,i.inclusive=n,i.index=0,i}return e.__extends(r,t),r.prototype._next=function(e){var t,r=this.destination;try{t=this.predicate(e,this.index++)}catch(n){return void r.error(n)}this.nextOrComplete(e,t)},r.prototype.nextOrComplete=function(e,t){var r=this.destination;Boolean(t)?r.next(e):(this.inclusive&&r.next(e),r.complete())},r}(t.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB"}],"okAI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tap=p;var t=i(require("tslib")),e=require("../Subscriber"),r=require("../util/noop"),n=require("../util/isFunction");function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}function i(t){if(t&&t.__esModule)return t;var e=o();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var p=n?Object.getOwnPropertyDescriptor(t,i):null;p&&(p.get||p.set)?Object.defineProperty(r,i,p):r[i]=t[i]}}return r.default=t,e&&e.set(t,r),r}function p(t,e,r){return function(n){return n.lift(new c(t,e,r))}}var c=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.nextOrObserver,this.error,this.complete))},t}(),u=function(e){function o(t,o,i,p){var c=e.call(this,t)||this;return c._tapNext=r.noop,c._tapError=r.noop,c._tapComplete=r.noop,c._tapError=i||r.noop,c._tapComplete=p||r.noop,(0,n.isFunction)(o)?(c._context=c,c._tapNext=o):o&&(c._context=o,c._tapNext=o.next||r.noop,c._tapError=o.error||r.noop,c._tapComplete=o.complete||r.noop),c}return t.__extends(o,e),o.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(e){return void this.destination.error(e)}this.destination.next(t)},o.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},o.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},o}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../util/noop":"rXfM","../util/isFunction":"Qnsq"}],"Yoo8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.throttle=s,exports.defaultThrottleConfig=void 0;var t=n(require("tslib")),e=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=n?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}var o={leading:!0,trailing:!1};function s(t,e){return void 0===e&&(e=o),function(r){return r.lift(new u(t,e.leading,e.trailing))}}exports.defaultThrottleConfig=o;var u=function(){function t(t,e,r){this.durationSelector=t,this.leading=e,this.trailing=r}return t.prototype.call=function(t,e){return e.subscribe(new l(t,this.durationSelector,this.leading,this.trailing))},t}(),l=function(e){function i(t,r,i,n){var o=e.call(this,t)||this;return o.destination=t,o.durationSelector=r,o._leading=i,o._trailing=n,o._hasValue=!1,o}return t.__extends(i,e),i.prototype._next=function(t){this._hasValue=!0,this._sendValue=t,this._throttled||(this._leading?this.send():this.throttle(t))},i.prototype.send=function(){var t=this._hasValue,e=this._sendValue;t&&(this.destination.next(e),this.throttle(e)),this._hasValue=!1,this._sendValue=null},i.prototype.throttle=function(t){var e=this.tryDurationSelector(t);e&&this.add(this._throttled=(0,r.subscribeToResult)(this,e))},i.prototype.tryDurationSelector=function(t){try{return this.durationSelector(t)}catch(e){return this.destination.error(e),null}},i.prototype.throttlingDone=function(){var t=this._throttled,e=this._trailing;t&&t.unsubscribe(),this._throttled=null,e&&this.send()},i.prototype.notifyNext=function(t,e,r,i,n){this.throttlingDone()},i.prototype.notifyComplete=function(){this.throttlingDone()},i}(e.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"v3FQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.throttleTime=s;var t=l(require("tslib")),i=require("../Subscriber"),e=require("../scheduler/async"),r=require("./throttle");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function l(t){if(t&&t.__esModule)return t;var i=n();if(i&&i.has(t))return i.get(t);var e={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if(Object.prototype.hasOwnProperty.call(t,l)){var s=r?Object.getOwnPropertyDescriptor(t,l):null;s&&(s.get||s.set)?Object.defineProperty(e,l,s):e[l]=t[l]}}return e.default=t,i&&i.set(t,e),e}function s(t,i,n){return void 0===i&&(i=e.async),void 0===n&&(n=r.defaultThrottleConfig),function(e){return e.lift(new a(t,i,n.leading,n.trailing))}}var a=function(){function t(t,i,e,r){this.duration=t,this.scheduler=i,this.leading=e,this.trailing=r}return t.prototype.call=function(t,i){return i.subscribe(new u(t,this.duration,this.scheduler,this.leading,this.trailing))},t}(),u=function(i){function e(t,e,r,n,l){var s=i.call(this,t)||this;return s.duration=e,s.scheduler=r,s.leading=n,s.trailing=l,s._hasTrailingValue=!1,s._trailingValue=null,s}return t.__extends(e,i),e.prototype._next=function(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(o,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))},e.prototype._complete=function(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()},e.prototype.clearThrottle=function(){var t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)},e}(i.Subscriber);function o(t){t.subscriber.clearThrottle()}
},{"tslib":"vCxL","../Subscriber":"RaFB","../scheduler/async":"jun6","./throttle":"Yoo8"}],"n6SK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.timeInterval=u,exports.TimeInterval=void 0;var e=require("../scheduler/async"),r=require("./scan"),n=require("../observable/defer"),t=require("./map");function u(u){return void 0===u&&(u=e.async),function(e){return(0,n.defer)(function(){return e.pipe((0,r.scan)(function(e,r){var n=e.current;return{value:r,current:u.now(),last:n}},{current:u.now(),value:void 0,last:void 0}),(0,t.map)(function(e){var r=e.current,n=e.last,t=e.value;return new i(t,r-n)}))})}}var i=function(){return function(e,r){this.value=e,this.interval=r}}();exports.TimeInterval=i;
},{"../scheduler/async":"jun6","./scan":"U785","../observable/defer":"w9G6","./map":"dNh5"}],"L72b":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.timeoutWith=o;var t=n(require("tslib")),e=require("../scheduler/async"),i=require("../util/isDate"),r=require("../OuterSubscriber"),u=require("../util/subscribeToResult");function s(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=s();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var n=r?Object.getOwnPropertyDescriptor(t,u):null;n&&(n.get||n.set)?Object.defineProperty(i,u,n):i[u]=t[u]}}return i.default=t,e&&e.set(t,i),i}function o(t,r,u){return void 0===u&&(u=e.async),function(e){var s=(0,i.isDate)(t),n=s?+t-u.now():Math.abs(t);return e.lift(new c(n,s,r,u))}}var c=function(){function t(t,e,i,r){this.waitFor=t,this.absoluteTimeout=e,this.withObservable=i,this.scheduler=r}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))},t}(),a=function(e){function i(t,i,r,u,s){var n=e.call(this,t)||this;return n.absoluteTimeout=i,n.waitFor=r,n.withObservable=u,n.scheduler=s,n.action=null,n.scheduleTimeout(),n}return t.__extends(i,e),i.dispatchTimeout=function(t){var e=t.withObservable;t._unsubscribeAndRecycle(),t.add((0,u.subscribeToResult)(t,e))},i.prototype.scheduleTimeout=function(){var t=this.action;t?this.action=t.schedule(this,this.waitFor):this.add(this.action=this.scheduler.schedule(i.dispatchTimeout,this.waitFor,this))},i.prototype._next=function(t){this.absoluteTimeout||this.scheduleTimeout(),e.prototype._next.call(this,t)},i.prototype._unsubscribe=function(){this.action=null,this.scheduler=null,this.withObservable=null},i}(r.OuterSubscriber);
},{"tslib":"vCxL","../scheduler/async":"jun6","../util/isDate":"rxSS","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"Cp8V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.timeout=i;var r=require("../scheduler/async"),e=require("../util/TimeoutError"),t=require("./timeoutWith"),o=require("../observable/throwError");function i(i,u){return void 0===u&&(u=r.async),(0,t.timeoutWith)(i,(0,o.throwError)(new e.TimeoutError),u)}
},{"../scheduler/async":"jun6","../util/TimeoutError":"SZK7","./timeoutWith":"L72b","../observable/throwError":"FdIu"}],"pXuq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.timestamp=r,exports.Timestamp=void 0;var e=require("../scheduler/async"),t=require("./map");function r(r){return void 0===r&&(r=e.async),(0,t.map)(function(e){return new i(e,r.now())})}var i=function(){return function(e,t){this.value=e,this.timestamp=t}}();exports.Timestamp=i;
},{"../scheduler/async":"jun6","./map":"dNh5"}],"LA40":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toArray=t;var e=require("./reduce");function r(e,r,t){return 0===t?[r]:(e.push(r),e)}function t(){return(0,e.reduce)(r,[])}
},{"./reduce":"BORG"}],"Iygx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.window=u;var t=i(require("tslib")),e=require("../Subject"),r=require("../OuterSubscriber"),n=require("../util/subscribeToResult");function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}function i(t){if(t&&t.__esModule)return t;var e=o();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=n?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=t[i]}}return r.default=t,e&&e.set(t,r),r}function u(t){return function(e){return e.lift(new s(t))}}var s=function(){function t(t){this.windowBoundaries=t}return t.prototype.call=function(t,e){var r=new c(t),o=e.subscribe(r);return o.closed||r.add((0,n.subscribeToResult)(r,this.windowBoundaries)),o},t}(),c=function(r){function n(t){var n=r.call(this,t)||this;return n.window=new e.Subject,t.next(n.window),n}return t.__extends(n,r),n.prototype.notifyNext=function(t,e,r,n,o){this.openWindow()},n.prototype.notifyError=function(t,e){this._error(t)},n.prototype.notifyComplete=function(t){this._complete()},n.prototype._next=function(t){this.window.next(t)},n.prototype._error=function(t){this.window.error(t),this.destination.error(t)},n.prototype._complete=function(){this.window.complete(),this.destination.complete()},n.prototype._unsubscribe=function(){this.window=null},n.prototype.openWindow=function(){var t=this.window;t&&t.complete();var r=this.destination,n=this.window=new e.Subject;r.next(n)},n}(r.OuterSubscriber);
},{"tslib":"vCxL","../Subject":"r9t1","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"GYT2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.windowCount=o;var t=n(require("tslib")),e=require("../Subscriber"),i=require("../Subject");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=n?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=t[o]}}return i.default=t,e&&e.set(t,i),i}function o(t,e){return void 0===e&&(e=0),function(i){return i.lift(new s(t,e))}}var s=function(){function t(t,e){this.windowSize=t,this.startWindowEvery=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.windowSize,this.startWindowEvery))},t}(),u=function(e){function r(t,r,n){var o=e.call(this,t)||this;return o.destination=t,o.windowSize=r,o.startWindowEvery=n,o.windows=[new i.Subject],o.count=0,t.next(o.windows[0]),o}return t.__extends(r,e),r.prototype._next=function(t){for(var e=this.startWindowEvery>0?this.startWindowEvery:this.windowSize,r=this.destination,n=this.windowSize,o=this.windows,s=o.length,u=0;u<s&&!this.closed;u++)o[u].next(t);var c=this.count-n+1;if(c>=0&&c%e==0&&!this.closed&&o.shift().complete(),++this.count%e==0&&!this.closed){var w=new i.Subject;o.push(w),r.next(w)}},r.prototype._error=function(t){var e=this.windows;if(e)for(;e.length>0&&!this.closed;)e.shift().error(t);this.destination.error(t)},r.prototype._complete=function(){var t=this.windows;if(t)for(;t.length>0&&!this.closed;)t.shift().complete();this.destination.complete()},r.prototype._unsubscribe=function(){this.count=0,this.windows=null},r}(e.Subscriber);
},{"tslib":"vCxL","../Subscriber":"RaFB","../Subject":"r9t1"}],"Okss":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.windowTime=c;var e=u(require("tslib")),n=require("../Subject"),i=require("../scheduler/async"),t=require("../Subscriber"),r=require("../util/isNumeric"),o=require("../util/isScheduler");function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){if(e&&e.__esModule)return e;var n=s();if(n&&n.has(e))return n.get(e);var i={};if(null!=e){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=t?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(i,r,o):i[r]=e[r]}}return i.default=e,n&&n.set(e,i),i}function c(e){var n=i.async,t=null,s=Number.POSITIVE_INFINITY;return(0,o.isScheduler)(arguments[3])&&(n=arguments[3]),(0,o.isScheduler)(arguments[2])?n=arguments[2]:(0,r.isNumeric)(arguments[2])&&(s=arguments[2]),(0,o.isScheduler)(arguments[1])?n=arguments[1]:(0,r.isNumeric)(arguments[1])&&(t=arguments[1]),function(i){return i.lift(new d(e,t,s,n))}}var d=function(){function e(e,n,i,t){this.windowTimeSpan=e,this.windowCreationInterval=n,this.maxWindowSize=i,this.scheduler=t}return e.prototype.call=function(e,n){return n.subscribe(new l(e,this.windowTimeSpan,this.windowCreationInterval,this.maxWindowSize,this.scheduler))},e}(),a=function(n){function i(){var e=null!==n&&n.apply(this,arguments)||this;return e._numberOfNextedValues=0,e}return e.__extends(i,n),i.prototype.next=function(e){this._numberOfNextedValues++,n.prototype.next.call(this,e)},Object.defineProperty(i.prototype,"numberOfNextedValues",{get:function(){return this._numberOfNextedValues},enumerable:!0,configurable:!0}),i}(n.Subject),l=function(n){function i(e,i,t,r,o){var s=n.call(this,e)||this;s.destination=e,s.windowTimeSpan=i,s.windowCreationInterval=t,s.maxWindowSize=r,s.scheduler=o,s.windows=[];var u=s.openWindow();if(null!==t&&t>=0){var c={subscriber:s,window:u,context:null},d={windowTimeSpan:i,windowCreationInterval:t,subscriber:s,scheduler:o};s.add(o.schedule(h,i,c)),s.add(o.schedule(p,t,d))}else{var a={subscriber:s,window:u,windowTimeSpan:i};s.add(o.schedule(w,i,a))}return s}return e.__extends(i,n),i.prototype._next=function(e){for(var n=this.windows,i=n.length,t=0;t<i;t++){var r=n[t];r.closed||(r.next(e),r.numberOfNextedValues>=this.maxWindowSize&&this.closeWindow(r))}},i.prototype._error=function(e){for(var n=this.windows;n.length>0;)n.shift().error(e);this.destination.error(e)},i.prototype._complete=function(){for(var e=this.windows;e.length>0;){var n=e.shift();n.closed||n.complete()}this.destination.complete()},i.prototype.openWindow=function(){var e=new a;return this.windows.push(e),this.destination.next(e),e},i.prototype.closeWindow=function(e){e.complete();var n=this.windows;n.splice(n.indexOf(e),1)},i}(t.Subscriber);function w(e){var n=e.subscriber,i=e.windowTimeSpan,t=e.window;t&&n.closeWindow(t),e.window=n.openWindow(),this.schedule(e,i)}function p(e){var n=e.windowTimeSpan,i=e.subscriber,t=e.scheduler,r=e.windowCreationInterval,o=i.openWindow(),s={action:this,subscription:null},u={subscriber:i,window:o,context:s};s.subscription=t.schedule(h,n,u),this.add(s.subscription),this.schedule(e,r)}function h(e){var n=e.subscriber,i=e.window,t=e.context;t&&t.action&&t.subscription&&t.action.remove(t.subscription),n.closeWindow(i)}
},{"tslib":"vCxL","../Subject":"r9t1","../scheduler/async":"jun6","../Subscriber":"RaFB","../util/isNumeric":"wBpm","../util/isScheduler":"VqoH"}],"JiQj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.windowToggle=c;var t=s(require("tslib")),e=require("../Subject"),r=require("../Subscription"),n=require("../OuterSubscriber"),o=require("../util/subscribeToResult");function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function s(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=n?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}function c(t,e){return function(r){return r.lift(new u(t,e))}}var u=function(){function t(t,e){this.openings=t,this.closingSelector=e}return t.prototype.call=function(t,e){return e.subscribe(new p(t,this.openings,this.closingSelector))},t}(),p=function(n){function i(t,e,r){var i=n.call(this,t)||this;return i.openings=e,i.closingSelector=r,i.contexts=[],i.add(i.openSubscription=(0,o.subscribeToResult)(i,e,e)),i}return t.__extends(i,n),i.prototype._next=function(t){var e=this.contexts;if(e)for(var r=e.length,n=0;n<r;n++)e[n].window.next(t)},i.prototype._error=function(t){var e=this.contexts;if(this.contexts=null,e)for(var r=e.length,o=-1;++o<r;){var i=e[o];i.window.error(t),i.subscription.unsubscribe()}n.prototype._error.call(this,t)},i.prototype._complete=function(){var t=this.contexts;if(this.contexts=null,t)for(var e=t.length,r=-1;++r<e;){var o=t[r];o.window.complete(),o.subscription.unsubscribe()}n.prototype._complete.call(this)},i.prototype._unsubscribe=function(){var t=this.contexts;if(this.contexts=null,t)for(var e=t.length,r=-1;++r<e;){var n=t[r];n.window.unsubscribe(),n.subscription.unsubscribe()}},i.prototype.notifyNext=function(t,n,i,s,c){if(t===this.openings){var u=void 0;try{u=(0,this.closingSelector)(n)}catch(a){return this.error(a)}var p=new e.Subject,l=new r.Subscription,f={window:p,subscription:l};this.contexts.push(f);var b=(0,o.subscribeToResult)(this,u,f);b.closed?this.closeWindow(this.contexts.length-1):(b.context=f,l.add(b)),this.destination.next(p)}else this.closeWindow(this.contexts.indexOf(t))},i.prototype.notifyError=function(t){this.error(t)},i.prototype.notifyComplete=function(t){t!==this.openSubscription&&this.closeWindow(this.contexts.indexOf(t.context))},i.prototype.closeWindow=function(t){if(-1!==t){var e=this.contexts,r=e[t],n=r.window,o=r.subscription;e.splice(t,1),n.complete(),o.unsubscribe()}},i}(n.OuterSubscriber);
},{"tslib":"vCxL","../Subject":"r9t1","../Subscription":"I8KM","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"YaG1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.windowWhen=s;var t=r(require("tslib")),e=require("../Subject"),i=require("../OuterSubscriber"),n=require("../util/subscribeToResult");function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}function r(t){if(t&&t.__esModule)return t;var e=o();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var s=n?Object.getOwnPropertyDescriptor(t,r):null;s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=t[r]}}return i.default=t,e&&e.set(t,i),i}function s(t){return function(e){return e.lift(new u(t))}}var u=function(){function t(t){this.closingSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.closingSelector))},t}(),c=function(i){function o(t,e){var n=i.call(this,t)||this;return n.destination=t,n.closingSelector=e,n.openWindow(),n}return t.__extends(o,i),o.prototype.notifyNext=function(t,e,i,n,o){this.openWindow(o)},o.prototype.notifyError=function(t,e){this._error(t)},o.prototype.notifyComplete=function(t){this.openWindow(t)},o.prototype._next=function(t){this.window.next(t)},o.prototype._error=function(t){this.window.error(t),this.destination.error(t),this.unsubscribeClosingNotification()},o.prototype._complete=function(){this.window.complete(),this.destination.complete(),this.unsubscribeClosingNotification()},o.prototype.unsubscribeClosingNotification=function(){this.closingNotification&&this.closingNotification.unsubscribe()},o.prototype.openWindow=function(t){void 0===t&&(t=null),t&&(this.remove(t),t.unsubscribe());var i=this.window;i&&i.complete();var o,r=this.window=new e.Subject;this.destination.next(r);try{o=(0,this.closingSelector)()}catch(s){return this.destination.error(s),void this.window.error(s)}this.add(this.closingNotification=(0,n.subscribeToResult)(this,o))},o}(i.OuterSubscriber);
},{"tslib":"vCxL","../Subject":"r9t1","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"JDwQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withLatestFrom=i;var t=o(require("tslib")),e=require("../OuterSubscriber"),r=require("../util/subscribeToResult");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function o(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=o?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=t[i]}}return r.default=t,e&&e.set(t,r),r}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){var r;"function"==typeof t[t.length-1]&&(r=t.pop());var n=t;return e.lift(new s(n,r))}}var s=function(){function t(t,e){this.observables=t,this.project=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.observables,this.project))},t}(),u=function(e){function n(t,n,o){var i=e.call(this,t)||this;i.observables=n,i.project=o,i.toRespond=[];var s=n.length;i.values=new Array(s);for(var u=0;u<s;u++)i.toRespond.push(u);for(u=0;u<s;u++){var a=n[u];i.add((0,r.subscribeToResult)(i,a,a,u))}return i}return t.__extends(n,e),n.prototype.notifyNext=function(t,e,r,n,o){this.values[r]=e;var i=this.toRespond;if(i.length>0){var s=i.indexOf(r);-1!==s&&i.splice(s,1)}},n.prototype.notifyComplete=function(){},n.prototype._next=function(t){if(0===this.toRespond.length){var e=[t].concat(this.values);this.project?this._tryProject(e):this.destination.next(e)}},n.prototype._tryProject=function(t){var e;try{e=this.project.apply(this,t)}catch(r){return void this.destination.error(r)}this.destination.next(e)},n}(e.OuterSubscriber);
},{"tslib":"vCxL","../OuterSubscriber":"hZYI","../util/subscribeToResult":"JM7e"}],"UwLD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.zip=r;var e=require("../observable/zip");function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return function(t){return t.lift.call(e.zip.apply(void 0,[t].concat(r)))}}
},{"../observable/zip":"ff2A"}],"DmwP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.zipAll=r;var e=require("../observable/zip");function r(r){return function(t){return t.lift(new e.ZipOperator(r))}}
},{"../observable/zip":"ff2A"}],"cVrl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"audit",{enumerable:!0,get:function(){return e.audit}}),Object.defineProperty(exports,"auditTime",{enumerable:!0,get:function(){return r.auditTime}}),Object.defineProperty(exports,"buffer",{enumerable:!0,get:function(){return t.buffer}}),Object.defineProperty(exports,"bufferCount",{enumerable:!0,get:function(){return n.bufferCount}}),Object.defineProperty(exports,"bufferTime",{enumerable:!0,get:function(){return o.bufferTime}}),Object.defineProperty(exports,"bufferToggle",{enumerable:!0,get:function(){return i.bufferToggle}}),Object.defineProperty(exports,"bufferWhen",{enumerable:!0,get:function(){return u.bufferWhen}}),Object.defineProperty(exports,"catchError",{enumerable:!0,get:function(){return a.catchError}}),Object.defineProperty(exports,"combineAll",{enumerable:!0,get:function(){return p.combineAll}}),Object.defineProperty(exports,"combineLatest",{enumerable:!0,get:function(){return l.combineLatest}}),Object.defineProperty(exports,"concat",{enumerable:!0,get:function(){return s.concat}}),Object.defineProperty(exports,"concatAll",{enumerable:!0,get:function(){return c.concatAll}}),Object.defineProperty(exports,"concatMap",{enumerable:!0,get:function(){return f.concatMap}}),Object.defineProperty(exports,"concatMapTo",{enumerable:!0,get:function(){return b.concatMapTo}}),Object.defineProperty(exports,"count",{enumerable:!0,get:function(){return m.count}}),Object.defineProperty(exports,"debounce",{enumerable:!0,get:function(){return d.debounce}}),Object.defineProperty(exports,"debounceTime",{enumerable:!0,get:function(){return g.debounceTime}}),Object.defineProperty(exports,"defaultIfEmpty",{enumerable:!0,get:function(){return y.defaultIfEmpty}}),Object.defineProperty(exports,"delay",{enumerable:!0,get:function(){return x.delay}}),Object.defineProperty(exports,"delayWhen",{enumerable:!0,get:function(){return O.delayWhen}}),Object.defineProperty(exports,"dematerialize",{enumerable:!0,get:function(){return q.dematerialize}}),Object.defineProperty(exports,"distinct",{enumerable:!0,get:function(){return j.distinct}}),Object.defineProperty(exports,"distinctUntilChanged",{enumerable:!0,get:function(){return P.distinctUntilChanged}}),Object.defineProperty(exports,"distinctUntilKeyChanged",{enumerable:!0,get:function(){return h.distinctUntilKeyChanged}}),Object.defineProperty(exports,"elementAt",{enumerable:!0,get:function(){return w.elementAt}}),Object.defineProperty(exports,"endWith",{enumerable:!0,get:function(){return T.endWith}}),Object.defineProperty(exports,"every",{enumerable:!0,get:function(){return W.every}}),Object.defineProperty(exports,"exhaust",{enumerable:!0,get:function(){return k.exhaust}}),Object.defineProperty(exports,"exhaustMap",{enumerable:!0,get:function(){return M.exhaustMap}}),Object.defineProperty(exports,"expand",{enumerable:!0,get:function(){return A.expand}}),Object.defineProperty(exports,"filter",{enumerable:!0,get:function(){return E.filter}}),Object.defineProperty(exports,"finalize",{enumerable:!0,get:function(){return z.finalize}}),Object.defineProperty(exports,"find",{enumerable:!0,get:function(){return C.find}}),Object.defineProperty(exports,"findIndex",{enumerable:!0,get:function(){return L.findIndex}}),Object.defineProperty(exports,"first",{enumerable:!0,get:function(){return v.first}}),Object.defineProperty(exports,"groupBy",{enumerable:!0,get:function(){return I.groupBy}}),Object.defineProperty(exports,"ignoreElements",{enumerable:!0,get:function(){return U.ignoreElements}}),Object.defineProperty(exports,"isEmpty",{enumerable:!0,get:function(){return R.isEmpty}}),Object.defineProperty(exports,"last",{enumerable:!0,get:function(){return B.last}}),Object.defineProperty(exports,"map",{enumerable:!0,get:function(){return F.map}}),Object.defineProperty(exports,"mapTo",{enumerable:!0,get:function(){return K.mapTo}}),Object.defineProperty(exports,"materialize",{enumerable:!0,get:function(){return N.materialize}}),Object.defineProperty(exports,"max",{enumerable:!0,get:function(){return S.max}}),Object.defineProperty(exports,"merge",{enumerable:!0,get:function(){return _.merge}}),Object.defineProperty(exports,"mergeAll",{enumerable:!0,get:function(){return D.mergeAll}}),Object.defineProperty(exports,"mergeMap",{enumerable:!0,get:function(){return G.mergeMap}}),Object.defineProperty(exports,"flatMap",{enumerable:!0,get:function(){return G.mergeMap}}),Object.defineProperty(exports,"mergeMapTo",{enumerable:!0,get:function(){return H.mergeMapTo}}),Object.defineProperty(exports,"mergeScan",{enumerable:!0,get:function(){return J.mergeScan}}),Object.defineProperty(exports,"min",{enumerable:!0,get:function(){return Q.min}}),Object.defineProperty(exports,"multicast",{enumerable:!0,get:function(){return V.multicast}}),Object.defineProperty(exports,"observeOn",{enumerable:!0,get:function(){return X.observeOn}}),Object.defineProperty(exports,"onErrorResumeNext",{enumerable:!0,get:function(){return Y.onErrorResumeNext}}),Object.defineProperty(exports,"pairwise",{enumerable:!0,get:function(){return Z.pairwise}}),Object.defineProperty(exports,"partition",{enumerable:!0,get:function(){return $.partition}}),Object.defineProperty(exports,"pluck",{enumerable:!0,get:function(){return ee.pluck}}),Object.defineProperty(exports,"publish",{enumerable:!0,get:function(){return re.publish}}),Object.defineProperty(exports,"publishBehavior",{enumerable:!0,get:function(){return te.publishBehavior}}),Object.defineProperty(exports,"publishLast",{enumerable:!0,get:function(){return ne.publishLast}}),Object.defineProperty(exports,"publishReplay",{enumerable:!0,get:function(){return oe.publishReplay}}),Object.defineProperty(exports,"race",{enumerable:!0,get:function(){return ie.race}}),Object.defineProperty(exports,"reduce",{enumerable:!0,get:function(){return ue.reduce}}),Object.defineProperty(exports,"repeat",{enumerable:!0,get:function(){return ae.repeat}}),Object.defineProperty(exports,"repeatWhen",{enumerable:!0,get:function(){return pe.repeatWhen}}),Object.defineProperty(exports,"retry",{enumerable:!0,get:function(){return le.retry}}),Object.defineProperty(exports,"retryWhen",{enumerable:!0,get:function(){return se.retryWhen}}),Object.defineProperty(exports,"refCount",{enumerable:!0,get:function(){return ce.refCount}}),Object.defineProperty(exports,"sample",{enumerable:!0,get:function(){return fe.sample}}),Object.defineProperty(exports,"sampleTime",{enumerable:!0,get:function(){return be.sampleTime}}),Object.defineProperty(exports,"scan",{enumerable:!0,get:function(){return me.scan}}),Object.defineProperty(exports,"sequenceEqual",{enumerable:!0,get:function(){return de.sequenceEqual}}),Object.defineProperty(exports,"share",{enumerable:!0,get:function(){return ge.share}}),Object.defineProperty(exports,"shareReplay",{enumerable:!0,get:function(){return ye.shareReplay}}),Object.defineProperty(exports,"single",{enumerable:!0,get:function(){return xe.single}}),Object.defineProperty(exports,"skip",{enumerable:!0,get:function(){return Oe.skip}}),Object.defineProperty(exports,"skipLast",{enumerable:!0,get:function(){return qe.skipLast}}),Object.defineProperty(exports,"skipUntil",{enumerable:!0,get:function(){return je.skipUntil}}),Object.defineProperty(exports,"skipWhile",{enumerable:!0,get:function(){return Pe.skipWhile}}),Object.defineProperty(exports,"startWith",{enumerable:!0,get:function(){return he.startWith}}),Object.defineProperty(exports,"subscribeOn",{enumerable:!0,get:function(){return we.subscribeOn}}),Object.defineProperty(exports,"switchAll",{enumerable:!0,get:function(){return Te.switchAll}}),Object.defineProperty(exports,"switchMap",{enumerable:!0,get:function(){return We.switchMap}}),Object.defineProperty(exports,"switchMapTo",{enumerable:!0,get:function(){return ke.switchMapTo}}),Object.defineProperty(exports,"take",{enumerable:!0,get:function(){return Me.take}}),Object.defineProperty(exports,"takeLast",{enumerable:!0,get:function(){return Ae.takeLast}}),Object.defineProperty(exports,"takeUntil",{enumerable:!0,get:function(){return Ee.takeUntil}}),Object.defineProperty(exports,"takeWhile",{enumerable:!0,get:function(){return ze.takeWhile}}),Object.defineProperty(exports,"tap",{enumerable:!0,get:function(){return Ce.tap}}),Object.defineProperty(exports,"throttle",{enumerable:!0,get:function(){return Le.throttle}}),Object.defineProperty(exports,"throttleTime",{enumerable:!0,get:function(){return ve.throttleTime}}),Object.defineProperty(exports,"throwIfEmpty",{enumerable:!0,get:function(){return Ie.throwIfEmpty}}),Object.defineProperty(exports,"timeInterval",{enumerable:!0,get:function(){return Ue.timeInterval}}),Object.defineProperty(exports,"timeout",{enumerable:!0,get:function(){return Re.timeout}}),Object.defineProperty(exports,"timeoutWith",{enumerable:!0,get:function(){return Be.timeoutWith}}),Object.defineProperty(exports,"timestamp",{enumerable:!0,get:function(){return Fe.timestamp}}),Object.defineProperty(exports,"toArray",{enumerable:!0,get:function(){return Ke.toArray}}),Object.defineProperty(exports,"window",{enumerable:!0,get:function(){return Ne.window}}),Object.defineProperty(exports,"windowCount",{enumerable:!0,get:function(){return Se.windowCount}}),Object.defineProperty(exports,"windowTime",{enumerable:!0,get:function(){return _e.windowTime}}),Object.defineProperty(exports,"windowToggle",{enumerable:!0,get:function(){return De.windowToggle}}),Object.defineProperty(exports,"windowWhen",{enumerable:!0,get:function(){return Ge.windowWhen}}),Object.defineProperty(exports,"withLatestFrom",{enumerable:!0,get:function(){return He.withLatestFrom}}),Object.defineProperty(exports,"zip",{enumerable:!0,get:function(){return Je.zip}}),Object.defineProperty(exports,"zipAll",{enumerable:!0,get:function(){return Qe.zipAll}});var e=require("../internal/operators/audit"),r=require("../internal/operators/auditTime"),t=require("../internal/operators/buffer"),n=require("../internal/operators/bufferCount"),o=require("../internal/operators/bufferTime"),i=require("../internal/operators/bufferToggle"),u=require("../internal/operators/bufferWhen"),a=require("../internal/operators/catchError"),p=require("../internal/operators/combineAll"),l=require("../internal/operators/combineLatest"),s=require("../internal/operators/concat"),c=require("../internal/operators/concatAll"),f=require("../internal/operators/concatMap"),b=require("../internal/operators/concatMapTo"),m=require("../internal/operators/count"),d=require("../internal/operators/debounce"),g=require("../internal/operators/debounceTime"),y=require("../internal/operators/defaultIfEmpty"),x=require("../internal/operators/delay"),O=require("../internal/operators/delayWhen"),q=require("../internal/operators/dematerialize"),j=require("../internal/operators/distinct"),P=require("../internal/operators/distinctUntilChanged"),h=require("../internal/operators/distinctUntilKeyChanged"),w=require("../internal/operators/elementAt"),T=require("../internal/operators/endWith"),W=require("../internal/operators/every"),k=require("../internal/operators/exhaust"),M=require("../internal/operators/exhaustMap"),A=require("../internal/operators/expand"),E=require("../internal/operators/filter"),z=require("../internal/operators/finalize"),C=require("../internal/operators/find"),L=require("../internal/operators/findIndex"),v=require("../internal/operators/first"),I=require("../internal/operators/groupBy"),U=require("../internal/operators/ignoreElements"),R=require("../internal/operators/isEmpty"),B=require("../internal/operators/last"),F=require("../internal/operators/map"),K=require("../internal/operators/mapTo"),N=require("../internal/operators/materialize"),S=require("../internal/operators/max"),_=require("../internal/operators/merge"),D=require("../internal/operators/mergeAll"),G=require("../internal/operators/mergeMap"),H=require("../internal/operators/mergeMapTo"),J=require("../internal/operators/mergeScan"),Q=require("../internal/operators/min"),V=require("../internal/operators/multicast"),X=require("../internal/operators/observeOn"),Y=require("../internal/operators/onErrorResumeNext"),Z=require("../internal/operators/pairwise"),$=require("../internal/operators/partition"),ee=require("../internal/operators/pluck"),re=require("../internal/operators/publish"),te=require("../internal/operators/publishBehavior"),ne=require("../internal/operators/publishLast"),oe=require("../internal/operators/publishReplay"),ie=require("../internal/operators/race"),ue=require("../internal/operators/reduce"),ae=require("../internal/operators/repeat"),pe=require("../internal/operators/repeatWhen"),le=require("../internal/operators/retry"),se=require("../internal/operators/retryWhen"),ce=require("../internal/operators/refCount"),fe=require("../internal/operators/sample"),be=require("../internal/operators/sampleTime"),me=require("../internal/operators/scan"),de=require("../internal/operators/sequenceEqual"),ge=require("../internal/operators/share"),ye=require("../internal/operators/shareReplay"),xe=require("../internal/operators/single"),Oe=require("../internal/operators/skip"),qe=require("../internal/operators/skipLast"),je=require("../internal/operators/skipUntil"),Pe=require("../internal/operators/skipWhile"),he=require("../internal/operators/startWith"),we=require("../internal/operators/subscribeOn"),Te=require("../internal/operators/switchAll"),We=require("../internal/operators/switchMap"),ke=require("../internal/operators/switchMapTo"),Me=require("../internal/operators/take"),Ae=require("../internal/operators/takeLast"),Ee=require("../internal/operators/takeUntil"),ze=require("../internal/operators/takeWhile"),Ce=require("../internal/operators/tap"),Le=require("../internal/operators/throttle"),ve=require("../internal/operators/throttleTime"),Ie=require("../internal/operators/throwIfEmpty"),Ue=require("../internal/operators/timeInterval"),Re=require("../internal/operators/timeout"),Be=require("../internal/operators/timeoutWith"),Fe=require("../internal/operators/timestamp"),Ke=require("../internal/operators/toArray"),Ne=require("../internal/operators/window"),Se=require("../internal/operators/windowCount"),_e=require("../internal/operators/windowTime"),De=require("../internal/operators/windowToggle"),Ge=require("../internal/operators/windowWhen"),He=require("../internal/operators/withLatestFrom"),Je=require("../internal/operators/zip"),Qe=require("../internal/operators/zipAll");
},{"../internal/operators/audit":"Pdg2","../internal/operators/auditTime":"jcYn","../internal/operators/buffer":"mG6b","../internal/operators/bufferCount":"f9IP","../internal/operators/bufferTime":"Axj2","../internal/operators/bufferToggle":"ZTTP","../internal/operators/bufferWhen":"Ul3A","../internal/operators/catchError":"THoY","../internal/operators/combineAll":"TMFF","../internal/operators/combineLatest":"DJQm","../internal/operators/concat":"ZHmI","../internal/operators/concatAll":"Yxey","../internal/operators/concatMap":"DoUK","../internal/operators/concatMapTo":"APQq","../internal/operators/count":"U1Ln","../internal/operators/debounce":"y9EZ","../internal/operators/debounceTime":"KBFO","../internal/operators/defaultIfEmpty":"YBdz","../internal/operators/delay":"zkgx","../internal/operators/delayWhen":"iVuv","../internal/operators/dematerialize":"v6b5","../internal/operators/distinct":"H608","../internal/operators/distinctUntilChanged":"hFX7","../internal/operators/distinctUntilKeyChanged":"Egbr","../internal/operators/elementAt":"TbZV","../internal/operators/endWith":"loee","../internal/operators/every":"eEZZ","../internal/operators/exhaust":"ifNj","../internal/operators/exhaustMap":"DGWU","../internal/operators/expand":"iYcS","../internal/operators/filter":"HKzi","../internal/operators/finalize":"x5qu","../internal/operators/find":"t6rP","../internal/operators/findIndex":"GIlo","../internal/operators/first":"f9sd","../internal/operators/groupBy":"dNgG","../internal/operators/ignoreElements":"P82l","../internal/operators/isEmpty":"LqVv","../internal/operators/last":"xu0X","../internal/operators/map":"dNh5","../internal/operators/mapTo":"yJbZ","../internal/operators/materialize":"ZwCH","../internal/operators/max":"BgD2","../internal/operators/merge":"sbfV","../internal/operators/mergeAll":"Nkv4","../internal/operators/mergeMap":"nFsM","../internal/operators/mergeMapTo":"S3q6","../internal/operators/mergeScan":"wQne","../internal/operators/min":"bAWd","../internal/operators/multicast":"M6Em","../internal/operators/observeOn":"ezNs","../internal/operators/onErrorResumeNext":"S4UH","../internal/operators/pairwise":"u6OS","../internal/operators/partition":"jvG2","../internal/operators/pluck":"TdE4","../internal/operators/publish":"TQAB","../internal/operators/publishBehavior":"fUyM","../internal/operators/publishLast":"fQ7S","../internal/operators/publishReplay":"aqWk","../internal/operators/race":"EAaA","../internal/operators/reduce":"BORG","../internal/operators/repeat":"Fbxf","../internal/operators/repeatWhen":"CT9q","../internal/operators/retry":"ZHEI","../internal/operators/retryWhen":"GHe2","../internal/operators/refCount":"vT9o","../internal/operators/sample":"Rd9o","../internal/operators/sampleTime":"nb45","../internal/operators/scan":"U785","../internal/operators/sequenceEqual":"PMGC","../internal/operators/share":"KBGh","../internal/operators/shareReplay":"xsrM","../internal/operators/single":"angX","../internal/operators/skip":"vMIz","../internal/operators/skipLast":"iB53","../internal/operators/skipUntil":"xmsT","../internal/operators/skipWhile":"qjDA","../internal/operators/startWith":"doo6","../internal/operators/subscribeOn":"Et1l","../internal/operators/switchAll":"CBg8","../internal/operators/switchMap":"g5Rk","../internal/operators/switchMapTo":"Hs9S","../internal/operators/take":"JVEz","../internal/operators/takeLast":"FbHg","../internal/operators/takeUntil":"qGSv","../internal/operators/takeWhile":"EYJX","../internal/operators/tap":"okAI","../internal/operators/throttle":"Yoo8","../internal/operators/throttleTime":"v3FQ","../internal/operators/throwIfEmpty":"D7Ma","../internal/operators/timeInterval":"n6SK","../internal/operators/timeout":"Cp8V","../internal/operators/timeoutWith":"L72b","../internal/operators/timestamp":"pXuq","../internal/operators/toArray":"LA40","../internal/operators/window":"Iygx","../internal/operators/windowCount":"GYT2","../internal/operators/windowTime":"Okss","../internal/operators/windowToggle":"JiQj","../internal/operators/windowWhen":"YaG1","../internal/operators/withLatestFrom":"JDwQ","../internal/operators/zip":"UwLD","../internal/operators/zipAll":"DmwP"}],"bdM7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("rxjs"),t=require("rxjs/operators");class i{constructor(t){this.items=new e.BehaviorSubject([]),this.map=new Map,this.name=t.name,this.config=t.config,this.initHook(t)}get(e){return this.map.get(e)}initHook(e){this.config.maxAge&&this.onExpireAll(e)}onExpireAll(e){e.items.forEach(e=>this.onExpire(e.key))}putItemHook(e){this.config.maxAge&&this.onExpire(e.key)}getItem(e){return this.map.has(e)?this.get(e):null}putItem(e){this.map.set(e.key,e);const t=this.get(e.key),i=this.items.getValue().filter(t=>t.key!==e.key);return this.items.next([...i,t]),this.putItemHook(e),e}onExpire(i){return new e.Observable(e=>e.next()).pipe(t.timeoutWith(this.config.maxAge,e.of(1)),t.skip(1),t.take(1)).subscribe(()=>this.removeItem(i))}removeItem(e){const t=this.items.getValue().filter(t=>t.key!==e);this.map.delete(e),this.items.next(t)}getItemObservable(e){return this.items.asObservable().pipe(t.filter(()=>!!this.map.has(e)),t.map(()=>this.map.get(e)))}flushCache(){return this.items.asObservable().pipe(t.map(e=>(e.forEach(e=>this.removeItem(e.key)),!0)))}}exports.CacheLayer=i;
},{"rxjs":"iRqj","rxjs/operators":"cVrl"}],"H9PJ":[function(require,module,exports) {
"use strict";function e(e){return e.reduce((e,t)=>(e[t]=t,e),Object.create(null))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.InternalEvents=e(["load","config"]),exports.InternalLayers=e(["globalConfig","modules"]);
},{}],"EdiJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class e{constructor(){this.logging=!1,this.hashes=!0,this.date=!0,this.exitHandler=!0,this.fileService=!0}}exports.LoggerConfig=e;class s{}exports.PrivateCryptoModel=s;class t{}exports.ExperimentalFeatures=t;class i{}exports.InitOptionsConfig=i;class o{constructor(){this.init=!0,this.initOptions=new i,this.experimental=new t,this.logger=new e}}exports.ConfigModel=o;
},{}],"W4n9":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,o){var c,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(n=(i<3?c(n):i>3?c(t,r,n):c(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../decorators/service/Service"),r=require("./config.model");let o=class{constructor(){this.config=new r.ConfigModel}setConfig(e){Object.assign(this.config,e)}};o=e([t.Service()],o),exports.ConfigService=o;
},{"../../decorators/service/Service":"e2A8","./config.model":"EdiJ"}],"JpbC":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./config.model")),e(require("./config.service"));
},{"./config.model":"EdiJ","./config.service":"W4n9"}],"afQh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../container");function t(t){return function(r,n){Object.defineProperty(r,n,{get:()=>e.Container.get(t)})}}exports.Injector=t;
},{"../../container":"UeX4"}],"PZmt":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,o,r,t){var i,c=arguments.length,n=c<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,o,r,t);else for(var g=e.length-1;g>=0;g--)(i=e[g])&&(n=(c<3?i(n):c>3?i(o,r,n):i(o,r))||n);return c>3&&n&&Object.defineProperty(o,r,n),n},o=this&&this.__metadata||function(e,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,o)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("../../decorators/service/Service"),t=require("../config/index"),i=require("../../decorators/injector/injector.decorator");let c=class{log(e){if(this.configService.config.logger.logging){const o=[this.logDate(),e];return console.log(...o),o}}error(e){console.error(e)}logImporter(e){if(this.configService.config.logger.logging)return this.log(e)}logDate(){return this.configService.config.logger.date?`${Date.now().toPrecision()}`:""}logFileService(e){if(this.configService.config.logger.fileService)return this.log(e),"``"}logHashes(e){return this.configService.config.logger.hashes?e:""}logExitHandler(e){if(!this.configService.config.logger.exitHandler)return"";this.log(e)}};e([i.Injector(t.ConfigService),o("design:type",t.ConfigService)],c.prototype,"configService",void 0),c=e([r.Service()],c),exports.BootstrapLogger=c;
},{"../../decorators/service/Service":"e2A8","../config/index":"JpbC","../../decorators/injector/injector.decorator":"afQh"}],"gkD1":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./bootstrap-logger"));
},{"./bootstrap-logger":"PZmt"}],"ZBkS":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,a,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(n<3?s(i):n>3?s(t,a,i):s(t,a))||i);return n>3&&i&&Object.defineProperty(t,a,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("rxjs"),s=require("rxjs/operators"),n=require("./cache-layer"),i=require("../../helpers/events"),o=require("../../decorators/service/Service"),c=require("../bootstrap-logger/index"),m={TRY_TO_UNSUBSCRIBE:"Someone try to unsubscribe from collection directly... agghhh.. read docs! Blame: "};let h=e=class{constructor(e){this.logger=e,this._cachedLayers=new r.BehaviorSubject([]),this.map=new Map,this.config={}}static createCacheInstance(e){return new n.CacheLayer(e)}getLayer(e){return this.map.has(e)?this.map.get(e):this.createLayer({name:e})}getLayersByName(e){return Array.from(this.map.keys()).map(t=>{if(t!==i.InternalLayers.modules&&t!==i.InternalLayers.globalConfig){const a=this.getLayer(t).getItem(i.InternalEvents.config);if(a&&a.data&&e===a.data.moduleName)return this.getLayer(a.data.moduleHash)}}).filter(e=>!!e)}searchForDuplicateDependenciesInsideApp(){const e=[].concat.apply([],Array.from(this.map.keys()).map(e=>Array.from(this.getLayer(e).map.keys()).map(e=>this.isExcludedEvent(e)?null:e).filter(e=>!!e))).map(e=>Object.create({count:1,name:e})).reduce((e,t)=>(e[t.name]=(e[t.name]||0)+t.count,e),{}),t=Object.keys(e).filter(t=>e[t]>1);if(t.length){const e=this.searchForDuplicatesByHash(t[0]),a=e[0].class.metadata.type.charAt(0).toUpperCase()+e[0].class.metadata.type.slice(1);throw new Error(`\n                ${e[0].class.metadata.raw}\n                ${a}: '${e[0].originalName}' found multiple times!\n                ${a} hash: ${e[0].moduleHash}\n                Modules: [${e[0].moduleName}, ${e[1].moduleName}]\n\n                Hint: '${e[0].originalName}' class identity hash is identical in both\n                imported files inside ${e[0].moduleName} and ${e[1].moduleName}\n                consider removing one of the '${e[0].originalName}'\n            `)}return t}isExcludedEvent(e){return e===i.InternalEvents.config||e===i.InternalEvents.load}searchForItem(e){return Array.from(this.map.keys()).map(t=>{const a=this.getLayer(t),r=Array.from(a.map.keys()).filter(t=>this.isExcludedEvent(t)?void 0:t===e.name);if(r.length)return a.getItem(r[0]).data}).filter(e=>!!e)[0]}searchForDuplicatesByHash(e){return Array.from(this.map.keys()).map(t=>{const a=this.getLayer(t),r=Array.from(a.map.keys()).filter(t=>{if(!this.isExcludedEvent(t))return t===e});if(r.length){const e=a.getItem(r[0]),s=this.getLayer(t).getItem(i.InternalEvents.config);return{moduleName:s.data.moduleName,moduleHash:s.data.moduleHash,originalName:e.data.originalName,dupeName:e.key,raw:s.data.raw,class:e.data}}}).filter(e=>!!e)}createLayer(t){if(this.map.has(t.name))return this.map.get(t.name);t.items=t.items||[],t.config=t.config||this.config;const a=e.createCacheInstance(t);return this.map.set(a.name,a),this._cachedLayers.next([...this._cachedLayers.getValue(),a]),this.LayerHook(a),a}LayerHook(e){this.protectLayerFromInvaders(e),(e.config.cacheFlushInterval||this.config.cacheFlushInterval)&&this.OnExpire(e)}protectLayerFromInvaders(e){e.items.constructor.prototype.unsubsribeFromLayer=e.items.constructor.prototype.unsubscribe,e.items.constructor.prototype.unsubscribe=(()=>{console.error(m.TRY_TO_UNSUBSCRIBE+e.name)})}OnExpire(e){return new r.Observable(e=>e.next()).pipe(s.timeoutWith(e.config.cacheFlushInterval||this.config.cacheFlushInterval,r.of(1)),s.skip(1),s.take(1)).subscribe(()=>this.removeLayer(e))}removeLayer(e){this.map.delete(e.name),this._cachedLayers.next([...this._cachedLayers.getValue().filter(t=>t.name!==e.name)])}transferItems(e,t){const a=this.getLayer(e),r=[];return t.forEach(e=>{const t=this.createLayer(e);a.items.getValue().forEach(e=>t.putItem(e)),r.push(t)}),r}flushCache(){let e;return this._cachedLayers.pipe(s.take(1),s.map(t=>(e=t.map(e=>e.name),t.forEach(e=>this.removeLayer(e)),e.forEach(e=>this.createLayer({name:e})),!0)))}};h=e=t([o.Service(),a("design:paramtypes",[c.BootstrapLogger])],h),exports.CacheService=h;
},{"rxjs":"iRqj","rxjs/operators":"cVrl","./cache-layer":"bdM7","../../helpers/events":"H9PJ","../../decorators/service/Service":"e2A8","../bootstrap-logger/index":"gkD1"}],"XoUb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class e{constructor(){this.deleteOnExpire="aggressive",this.cacheFlushInterval=36e5,this.maxAge=9e5,this.localStorage=!1}}exports.CacheServiceConfigInterface=e;
},{}],"HUWP":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./cache-layer.service")),e(require("./cache-layer")),e(require("./cache-layer.interfaces"));
},{"./cache-layer.service":"ZBkS","./cache-layer":"bdM7","./cache-layer.interfaces":"XoUb"}],"RJxF":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,i){var s,n=arguments.length,u=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(u=(n<3?s(u):n>3?s(t,r,u):s(t,r))||u);return n>3&&u&&Object.defineProperty(t,r,u),u};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("rxjs"),r=require("../../decorators/service/Service");let i=class{constructor(){this.plugins=new t.BehaviorSubject([]),this.beforePlugins=new t.BehaviorSubject([]),this.afterPlugins=new t.BehaviorSubject([])}register(e){this.plugins.next([...this.plugins.getValue(),e])}registerBefore(e){this.beforePlugins.next([...this.plugins.getValue(),e])}registerAfter(e){this.afterPlugins.next([...this.plugins.getValue(),e])}getPlugins(){return this.plugins.getValue()}getAfterPlugins(){return this.afterPlugins.getValue()}getBeforePlugins(){return this.beforePlugins.getValue()}};i=e([r.Service()],i),exports.PluginService=i;
},{"rxjs":"iRqj","../../decorators/service/Service":"e2A8"}],"NEQF":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("../../decorators/service/Service"),n=require("../bootstrap-logger"),c=require("../../decorators/injector/injector.decorator"),i=require("rxjs");let a=class{constructor(){this.errorHandler=new i.Subject}init(){}exitHandler(t,r){this.errorHandler.next(r),t.cleanup&&this.logger.logExitHandler("AppStopped"),r&&console.log(r.stack),t.exit&&this.logger.logExitHandler("Unhandled error rejection"),e.exit(0)}onExitApp(t){return new i.Observable(r=>t&&t.length&&t.forEach(t=>e.on(t,e=>r.next(e))))}};t([c.Injector(n.BootstrapLogger),r("design:type",n.BootstrapLogger)],a.prototype,"logger",void 0),a=t([o.Service()],a),exports.ExitHandlerService=a;
},{"../../decorators/service/Service":"e2A8","../bootstrap-logger":"gkD1","../../decorators/injector/injector.decorator":"afQh","rxjs":"iRqj","process":"GJTy"}],"WBIM":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./exit-handler.service"));
},{"./exit-handler.service":"NEQF"}],"OH4P":[function(require,module,exports) {
var global = arguments[3];
var r,e=arguments[3];exports.fetch=s(e.fetch)&&s(e.ReadableStream),exports.writableStream=s(e.WritableStream),exports.abortController=s(e.AbortController),exports.blobConstructor=!1;try{new Blob([new ArrayBuffer(1)]),exports.blobConstructor=!0}catch(f){}function t(){if(void 0!==r)return r;if(e.XMLHttpRequest){r=new e.XMLHttpRequest;try{r.open("GET",e.XDomainRequest?"/":"https://example.com")}catch(f){r=null}}else r=null;return r}function o(r){var e=t();if(!e)return!1;try{return e.responseType=r,e.responseType===r}catch(f){}return!1}var a=void 0!==e.ArrayBuffer,n=a&&s(e.ArrayBuffer.prototype.slice);function s(r){return"function"==typeof r}exports.arraybuffer=exports.fetch||a&&o("arraybuffer"),exports.msstream=!exports.fetch&&n&&o("ms-stream"),exports.mozchunkedarraybuffer=!exports.fetch&&a&&o("moz-chunked-arraybuffer"),exports.overrideMimeType=exports.fetch||!!t()&&s(t().overrideMimeType),exports.vbArray=s(e.VBArray),r=null;
},{}],"GtRu":[function(require,module,exports) {
"function"==typeof Object.create?module.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:module.exports=function(t,e){if(e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t}};
},{}],"EdrQ":[function(require,module,exports) {
var process = require("process");
var n=require("process");function e(e,r,t,c){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function');var i,l,u=arguments.length;switch(u){case 0:case 1:return n.nextTick(e);case 2:return n.nextTick(function(){e.call(null,r)});case 3:return n.nextTick(function(){e.call(null,r,t)});case 4:return n.nextTick(function(){e.call(null,r,t,c)});default:for(i=new Array(u-1),l=0;l<i.length;)i[l++]=arguments[l];return n.nextTick(function(){e.apply(null,i)})}}void 0===n||!n.version||0===n.version.indexOf("v0.")||0===n.version.indexOf("v1.")&&0!==n.version.indexOf("v1.8.")?module.exports={nextTick:e}:module.exports=n;
},{"process":"GJTy"}],"vWqU":[function(require,module,exports) {
var r={}.toString;module.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)};
},{}],"RV6R":[function(require,module,exports) {
"use strict";var e,t="object"==typeof Reflect?Reflect:null,n=t&&"function"==typeof t.apply?t.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};function r(e){console&&console.warn&&console.warn(e)}e=t&&"function"==typeof t.ownKeys?t.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}module.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function u(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function f(e,t,n,i){var o,s,f;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),f=s[t]),void 0===f)f=s[t]=n,++e._eventsCount;else if("function"==typeof f?f=s[t]=i?[n,f]:[f,n]:i?f.unshift(n):f.push(n),(o=u(e))>0&&f.length>o&&!f.warned){f.warned=!0;var p=new Error("Possible EventEmitter memory leak detected. "+f.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");p.name="MaxListenersExceededWarning",p.emitter=e,p.type=t,p.count=f.length,r(p)}return e}function p(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,n(this.listener,this.target,e))}function v(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=p.bind(r);return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?y(i):c(i,i.length)}function a(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function c(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function l(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function y(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var f=o[e];if(void 0===f)return!1;if("function"==typeof f)n(f,this,t);else{var p=f.length,v=c(f,p);for(r=0;r<p;++r)n(v[r],this,t)}return!0},o.prototype.addListener=function(e,t){return f(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return f(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,v(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,v(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():l(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return h(this,e,!0)},o.prototype.rawListeners=function(e){return h(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):a.call(e,t)},o.prototype.listenerCount=a,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]};
},{}],"aNgx":[function(require,module,exports) {
module.exports=require("events").EventEmitter;
},{"events":"RV6R"}],"g68V":[function(require,module,exports) {
"use strict";exports.byteLength=u,exports.toByteArray=i,exports.fromByteArray=d;for(var r=[],t=[],e="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,a=n.length;o<a;++o)r[o]=n[o],t[n.charCodeAt(o)]=o;function h(r){var t=r.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=r.indexOf("=");return-1===e&&(e=t),[e,e===t?0:4-e%4]}function u(r){var t=h(r),e=t[0],n=t[1];return 3*(e+n)/4-n}function c(r,t,e){return 3*(t+e)/4-e}function i(r){var n,o,a=h(r),u=a[0],i=a[1],f=new e(c(r,u,i)),A=0,d=i>0?u-4:u;for(o=0;o<d;o+=4)n=t[r.charCodeAt(o)]<<18|t[r.charCodeAt(o+1)]<<12|t[r.charCodeAt(o+2)]<<6|t[r.charCodeAt(o+3)],f[A++]=n>>16&255,f[A++]=n>>8&255,f[A++]=255&n;return 2===i&&(n=t[r.charCodeAt(o)]<<2|t[r.charCodeAt(o+1)]>>4,f[A++]=255&n),1===i&&(n=t[r.charCodeAt(o)]<<10|t[r.charCodeAt(o+1)]<<4|t[r.charCodeAt(o+2)]>>2,f[A++]=n>>8&255,f[A++]=255&n),f}function f(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function A(r,t,e){for(var n,o=[],a=t;a<e;a+=3)n=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(255&r[a+2]),o.push(f(n));return o.join("")}function d(t){for(var e,n=t.length,o=n%3,a=[],h=0,u=n-o;h<u;h+=16383)a.push(A(t,h,h+16383>u?u:h+16383));return 1===o?(e=t[n-1],a.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],a.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),a.join("")}t["-".charCodeAt(0)]=62,t["_".charCodeAt(0)]=63;
},{}],"Ukn4":[function(require,module,exports) {
exports.read=function(a,o,t,r,h){var M,p,w=8*h-r-1,f=(1<<w)-1,e=f>>1,i=-7,N=t?h-1:0,n=t?-1:1,s=a[o+N];for(N+=n,M=s&(1<<-i)-1,s>>=-i,i+=w;i>0;M=256*M+a[o+N],N+=n,i-=8);for(p=M&(1<<-i)-1,M>>=-i,i+=r;i>0;p=256*p+a[o+N],N+=n,i-=8);if(0===M)M=1-e;else{if(M===f)return p?NaN:1/0*(s?-1:1);p+=Math.pow(2,r),M-=e}return(s?-1:1)*p*Math.pow(2,M-r)},exports.write=function(a,o,t,r,h,M){var p,w,f,e=8*M-h-1,i=(1<<e)-1,N=i>>1,n=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,s=r?0:M-1,u=r?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,p=i):(p=Math.floor(Math.log(o)/Math.LN2),o*(f=Math.pow(2,-p))<1&&(p--,f*=2),(o+=p+N>=1?n/f:n*Math.pow(2,1-N))*f>=2&&(p++,f/=2),p+N>=i?(w=0,p=i):p+N>=1?(w=(o*f-1)*Math.pow(2,h),p+=N):(w=o*Math.pow(2,N-1)*Math.pow(2,h),p=0));h>=8;a[t+s]=255&w,s+=u,w/=256,h-=8);for(p=p<<h|w,e+=h;e>0;a[t+s]=255&p,s+=u,p/=256,e-=8);a[t+s-u]|=128*l};
},{}],"mgai":[function(require,module,exports) {

var global = arguments[3];
var t=arguments[3],r=require("base64-js"),e=require("ieee754"),n=require("isarray");function i(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(r){return!1}}function o(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,r){if(o()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=f.prototype:(null===t&&(t=new f(r)),t.length=r),t}function f(t,r,e){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return s(this,t,r,e)}function s(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?g(t,r,e,n):"string"==typeof r?l(t,r,e):y(t,r)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,r,e,n){return h(r),r<=0?u(t,r):void 0!==e?"string"==typeof n?u(t,r).fill(e,n):u(t,r).fill(e):u(t,r)}function c(t,r){if(h(r),t=u(t,r<0?0:0|w(r)),!f.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!f.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(r,e),i=(t=u(t,n)).write(r,e);return i!==n&&(t=t.slice(0,i)),t}function p(t,r){var e=r.length<0?0:0|w(r.length);t=u(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function g(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),f.TYPED_ARRAY_SUPPORT?(t=r).__proto__=f.prototype:t=p(t,r),t}function y(t,r){if(f.isBuffer(r)){var e=0|w(r.length);return 0===(t=u(t,e)).length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||W(r.length)?u(t,0):p(t,r);if("Buffer"===r.type&&n(r.data))return p(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function w(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function d(t){return+t!=t&&(t=0),f.alloc(+t)}function v(t,r){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return $(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return K(t).length;default:if(n)return $(t).length;r=(""+r).toLowerCase(),n=!0}}function E(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return x(this,r,e);case"utf8":case"utf-8":return Y(this,r,e);case"ascii":return L(this,r,e);case"latin1":case"binary":return D(this,r,e);case"base64":return S(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function R(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=f.from(r,n)),f.isBuffer(r))return 0===r.length?-1:_(t,r,e,n,i);if("number"==typeof r)return r&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):_(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function _(t,r,e,n,i){var o,u=1,f=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,s/=2,e/=2}function h(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(i){var a=-1;for(o=e;o<f;o++)if(h(t,o)===h(r,-1===a?0:o-a)){if(-1===a&&(a=o),o-a+1===s)return a*u}else-1!==a&&(o-=o-a),a=-1}else for(e+s>f&&(e=f-s),o=e;o>=0;o--){for(var c=!0,l=0;l<s;l++)if(h(t,o+l)!==h(r,l)){c=!1;break}if(c)return o}return-1}function A(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(isNaN(f))return u;t[e+u]=f}return u}function m(t,r,e,n){return Q($(r,t.length-e),t,e,n)}function P(t,r,e,n){return Q(G(r),t,e,n)}function T(t,r,e,n){return P(t,r,e,n)}function B(t,r,e,n){return Q(K(r),t,e,n)}function U(t,r,e,n){return Q(H(r,t.length-e),t,e,n)}function S(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function Y(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,u,f,s,h=t[i],a=null,c=h>239?4:h>223?3:h>191?2:1;if(i+c<=e)switch(c){case 1:h<128&&(a=h);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&h)<<6|63&o)>127&&(a=s);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(s=(15&h)<<12|(63&o)<<6|63&u)>2047&&(s<55296||s>57343)&&(a=s);break;case 4:o=t[i+1],u=t[i+2],f=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&f)&&(s=(15&h)<<18|(63&o)<<12|(63&u)<<6|63&f)>65535&&s<1114112&&(a=s)}null===a?(a=65533,c=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=c}return O(n)}exports.Buffer=f,exports.SlowBuffer=d,exports.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:i(),exports.kMaxLength=o(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,r,e){return s(null,t,r,e)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,r,e){return a(null,t,r,e)},f.allocUnsafe=function(t){return c(null,t)},f.allocUnsafeSlow=function(t){return c(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,r){if(!f.isBuffer(t)||!f.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,r){if(!n(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var i=f.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var u=t[e];if(!f.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(i,o),o+=u.length}return i},f.byteLength=v,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)b(this,r,r+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)b(this,r,r+3),b(this,r+1,r+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)b(this,r,r+7),b(this,r+1,r+6),b(this,r+2,r+5),b(this,r+3,r+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Y(this,0,t):E.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=exports.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,r,e,n,i){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),s=Math.min(o,u),h=this.slice(n,i),a=t.slice(r,e),c=0;c<s;++c)if(h[c]!==a[c]){o=h[c],u=a[c];break}return o<u?-1:u<o?1:0},f.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},f.prototype.indexOf=function(t,r,e){return R(this,t,r,e,!0)},f.prototype.lastIndexOf=function(t,r,e){return R(this,t,r,e,!1)},f.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return A(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":return P(this,t,r,e);case"latin1":case"binary":return T(this,t,r,e);case"base64":return B(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var I=4096;function O(t){var r=t.length;if(r<=I)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=I));return e}function L(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function D(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function x(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=Z(t[o]);return i}function C(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function M(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function k(t,r,e,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function N(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function z(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function F(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function j(t,r,n,i,o){return o||F(t,r,n,4,3.4028234663852886e38,-3.4028234663852886e38),e.write(t,r,n,i,23,4),n+4}function q(t,r,n,i,o){return o||F(t,r,n,8,1.7976931348623157e308,-1.7976931348623157e308),e.write(t,r,n,i,52,8),n+8}f.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),f.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=f.prototype;else{var i=r-t;e=new f(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},f.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},f.prototype.readUInt8=function(t,r){return r||M(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,r){return r||M(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,r){return r||M(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,r){return r||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,r){return r||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},f.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},f.prototype.readInt8=function(t,r){return r||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,r){r||M(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt16BE=function(t,r){r||M(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt32LE=function(t,r){return r||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,r){return r||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,r){return r||M(t,4,this.length),e.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,r){return r||M(t,4,this.length),e.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,r){return r||M(t,8,this.length),e.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,r){return r||M(t,8,this.length),e.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||k(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},f.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||k(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},f.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},f.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):N(this,t,r,!0),r+2},f.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):N(this,t,r,!1),r+2},f.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):z(this,t,r,!0),r+4},f.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):z(this,t,r,!1),r+4},f.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);k(this,t,r,e,i-1,-i)}var o=0,u=1,f=0;for(this[r]=255&t;++o<e&&(u*=256);)t<0&&0===f&&0!==this[r+o-1]&&(f=1),this[r+o]=(t/u>>0)-f&255;return r+e},f.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);k(this,t,r,e,i-1,-i)}var o=e-1,u=1,f=0;for(this[r+o]=255&t;--o>=0&&(u*=256);)t<0&&0===f&&0!==this[r+o+1]&&(f=1),this[r+o]=(t/u>>0)-f&255;return r+e},f.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},f.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):N(this,t,r,!0),r+2},f.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):N(this,t,r,!1),r+2},f.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):z(this,t,r,!0),r+4},f.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):z(this,t,r,!1),r+4},f.prototype.writeFloatLE=function(t,r,e){return j(this,t,r,!0,e)},f.prototype.writeFloatBE=function(t,r,e){return j(this,t,r,!1,e)},f.prototype.writeDoubleLE=function(t,r,e){return q(this,t,r,!0,e)},f.prototype.writeDoubleBE=function(t,r,e){return q(this,t,r,!1,e)},f.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},f.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var u=f.isBuffer(t)?t:$(new f(t,n).toString()),s=u.length;for(o=0;o<e-r;++o)this[o+r]=u[o%s]}return this};var V=/[^+\/0-9A-Za-z-_]/g;function X(t){if((t=J(t).replace(V,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}function J(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Z(t){return t<16?"0"+t.toString(16):t.toString(16)}function $(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function G(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function H(t,r){for(var e,n,i,o=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,i=e%256,o.push(i),o.push(n);return o}function K(t){return r.toByteArray(X(t))}function Q(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function W(t){return t!=t}
},{"base64-js":"g68V","ieee754":"Ukn4","isarray":"vWqU","buffer":"mgai"}],"rExz":[function(require,module,exports) {

var r=require("buffer"),e=r.Buffer;function n(r,e){for(var n in r)e[n]=r[n]}function o(r,n,o){return e(r,n,o)}e.from&&e.alloc&&e.allocUnsafe&&e.allocUnsafeSlow?module.exports=r:(n(r,exports),exports.Buffer=o),n(e,o),o.from=function(r,n,o){if("number"==typeof r)throw new TypeError("Argument must not be a number");return e(r,n,o)},o.alloc=function(r,n,o){if("number"!=typeof r)throw new TypeError("Argument must be a number");var f=e(r);return void 0!==n?"string"==typeof o?f.fill(n,o):f.fill(n):f.fill(0),f},o.allocUnsafe=function(r){if("number"!=typeof r)throw new TypeError("Argument must be a number");return e(r)},o.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return r.SlowBuffer(e)};
},{"buffer":"mgai"}],"iCz4":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
var r=require("buffer").Buffer;function t(r){return Array.isArray?Array.isArray(r):"[object Array]"===a(r)}function e(r){return"boolean"==typeof r}function n(r){return null===r}function o(r){return null==r}function i(r){return"number"==typeof r}function u(r){return"string"==typeof r}function s(r){return"symbol"==typeof r}function f(r){return void 0===r}function p(r){return"[object RegExp]"===a(r)}function c(r){return"object"==typeof r&&null!==r}function l(r){return"[object Date]"===a(r)}function y(r){return"[object Error]"===a(r)||r instanceof Error}function x(r){return"function"==typeof r}function b(r){return null===r||"boolean"==typeof r||"number"==typeof r||"string"==typeof r||"symbol"==typeof r||void 0===r}function a(r){return Object.prototype.toString.call(r)}exports.isArray=t,exports.isBoolean=e,exports.isNull=n,exports.isNullOrUndefined=o,exports.isNumber=i,exports.isString=u,exports.isSymbol=s,exports.isUndefined=f,exports.isRegExp=p,exports.isObject=c,exports.isDate=l,exports.isError=y,exports.isFunction=x,exports.isPrimitive=b,exports.isBuffer=r.isBuffer;
},{"buffer":"mgai"}],"Vh0v":[function(require,module,exports) {

},{}],"RQdU":[function(require,module,exports) {

"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var n=require("safe-buffer").Buffer,e=require("util");function i(t,n,e){t.copy(n,e)}module.exports=function(){function e(){t(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(t){var n={data:t,next:null};this.length>0?this.tail.next=n:this.head=n,this.tail=n,++this.length},e.prototype.unshift=function(t){var n={data:t,next:this.head};0===this.length&&(this.tail=n),this.head=n,++this.length},e.prototype.shift=function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(t){if(0===this.length)return"";for(var n=this.head,e=""+n.data;n=n.next;)e+=t+n.data;return e},e.prototype.concat=function(t){if(0===this.length)return n.alloc(0);if(1===this.length)return this.head.data;for(var e=n.allocUnsafe(t>>>0),h=this.head,a=0;h;)i(h.data,e,a),a+=h.data.length,h=h.next;return e},e}(),e&&e.inspect&&e.inspect.custom&&(module.exports.prototype[e.inspect.custom]=function(){var t=e.inspect({length:this.length});return this.constructor.name+" "+t});
},{"safe-buffer":"rExz","util":"Vh0v"}],"oUye":[function(require,module,exports) {
"use strict";var t=require("process-nextick-args");function e(e,a){var r=this,s=this._readableState&&this._readableState.destroyed,d=this._writableState&&this._writableState.destroyed;return s||d?(a?a(e):!e||this._writableState&&this._writableState.errorEmitted||t.nextTick(i,this,e),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!a&&e?(t.nextTick(i,r,e),r._writableState&&(r._writableState.errorEmitted=!0)):a&&a(e)}),this)}function a(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function i(t,e){t.emit("error",e)}module.exports={destroy:e,undestroy:a};
},{"process-nextick-args":"EdrQ"}],"hMto":[function(require,module,exports) {
var global = arguments[3];
var r=arguments[3];function t(r,t){if(e("noDeprecation"))return r;var n=!1;return function(){if(!n){if(e("throwDeprecation"))throw new Error(t);e("traceDeprecation")?console.trace(t):console.warn(t),n=!0}return r.apply(this,arguments)}}function e(t){try{if(!r.localStorage)return!1}catch(n){return!1}var e=r.localStorage[t];return null!=e&&"true"===String(e).toLowerCase()}module.exports=t;
},{}],"pR7S":[function(require,module,exports) {
var process = require("process");

var global = arguments[3];
var e=require("process"),t=arguments[3],n=require("process-nextick-args");function r(e,t,n){this.chunk=e,this.encoding=t,this.callback=n,this.next=null}function i(e){var t=this;this.next=null,this.entry=null,this.finish=function(){W(t,e)}}module.exports=g;var o,s=n.nextTick;g.WritableState=y;var f=require("core-util-is");f.inherits=require("inherits");var u={deprecate:require("util-deprecate")},a=require("./internal/streams/stream"),c=require("safe-buffer").Buffer,l=t.Uint8Array||function(){};function d(e){return c.from(e)}function h(e){return c.isBuffer(e)||e instanceof l}var b,p=require("./internal/streams/destroy");function w(){}function y(e,t){o=o||require("./_stream_duplex"),e=e||{};var n=t instanceof o;this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var r=e.highWaterMark,s=e.writableHighWaterMark,f=this.objectMode?16:16384;this.highWaterMark=r||0===r?r:n&&(s||0===s)?s:f,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var u=!1===e.decodeStrings;this.decodeStrings=!u,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){S(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new i(this)}function g(e){if(o=o||require("./_stream_duplex"),!(b.call(g,this)||this instanceof o))return new g(e);this._writableState=new y(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),a.call(this)}function k(e,t){var r=new Error("write after end");e.emit("error",r),n.nextTick(t,r)}function v(e,t,r,i){var o=!0,s=!1;return null===r?s=new TypeError("May not write null values to stream"):"string"==typeof r||void 0===r||t.objectMode||(s=new TypeError("Invalid non-string/buffer chunk")),s&&(e.emit("error",s),n.nextTick(i,s),o=!1),o}function q(e,t,n){return e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=c.from(t,n)),t}function _(e,t,n,r,i,o){if(!n){var s=q(t,r,i);r!==s&&(n=!0,i="buffer",r=s)}var f=t.objectMode?1:r.length;t.length+=f;var u=t.length<t.highWaterMark;if(u||(t.needDrain=!0),t.writing||t.corked){var a=t.lastBufferedRequest;t.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:o,next:null},a?a.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else m(e,t,!1,f,r,i,o);return u}function m(e,t,n,r,i,o,s){t.writelen=r,t.writecb=s,t.writing=!0,t.sync=!0,n?e._writev(i,t.onwrite):e._write(i,o,t.onwrite),t.sync=!1}function R(e,t,r,i,o){--t.pendingcb,r?(n.nextTick(o,i),n.nextTick(T,e,t),e._writableState.errorEmitted=!0,e.emit("error",i)):(o(i),e._writableState.errorEmitted=!0,e.emit("error",i),T(e,t))}function x(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function S(e,t){var n=e._writableState,r=n.sync,i=n.writecb;if(x(n),t)R(e,n,r,t,i);else{var o=E(n);o||n.corked||n.bufferProcessing||!n.bufferedRequest||j(e,n),r?s(M,e,n,o,i):M(e,n,o,i)}}function M(e,t,n,r){n||B(e,t),t.pendingcb--,r(),T(e,t)}function B(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function j(e,t){t.bufferProcessing=!0;var n=t.bufferedRequest;if(e._writev&&n&&n.next){var r=t.bufferedRequestCount,o=new Array(r),s=t.corkedRequestsFree;s.entry=n;for(var f=0,u=!0;n;)o[f]=n,n.isBuf||(u=!1),n=n.next,f+=1;o.allBuffers=u,m(e,t,!0,t.length,o,"",s.finish),t.pendingcb++,t.lastBufferedRequest=null,s.next?(t.corkedRequestsFree=s.next,s.next=null):t.corkedRequestsFree=new i(t),t.bufferedRequestCount=0}else{for(;n;){var a=n.chunk,c=n.encoding,l=n.callback;if(m(e,t,!1,t.objectMode?1:a.length,a,c,l),n=n.next,t.bufferedRequestCount--,t.writing)break}null===n&&(t.lastBufferedRequest=null)}t.bufferedRequest=n,t.bufferProcessing=!1}function E(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function C(e,t){e._final(function(n){t.pendingcb--,n&&e.emit("error",n),t.prefinished=!0,e.emit("prefinish"),T(e,t)})}function P(e,t){t.prefinished||t.finalCalled||("function"==typeof e._final?(t.pendingcb++,t.finalCalled=!0,n.nextTick(C,e,t)):(t.prefinished=!0,e.emit("prefinish")))}function T(e,t){var n=E(t);return n&&(P(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),n}function F(e,t,r){t.ending=!0,T(e,t),r&&(t.finished?n.nextTick(r):e.once("finish",r)),t.ended=!0,e.writable=!1}function W(e,t,n){var r=e.entry;for(e.entry=null;r;){var i=r.callback;t.pendingcb--,i(n),r=r.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}f.inherits(g,a),y.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(y.prototype,"buffer",{get:u.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(b=Function.prototype[Symbol.hasInstance],Object.defineProperty(g,Symbol.hasInstance,{value:function(e){return!!b.call(this,e)||this===g&&(e&&e._writableState instanceof y)}})):b=function(e){return e instanceof this},g.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},g.prototype.write=function(e,t,n){var r=this._writableState,i=!1,o=!r.objectMode&&h(e);return o&&!c.isBuffer(e)&&(e=d(e)),"function"==typeof t&&(n=t,t=null),o?t="buffer":t||(t=r.defaultEncoding),"function"!=typeof n&&(n=w),r.ended?k(this,n):(o||v(this,r,e,n))&&(r.pendingcb++,i=_(this,r,o,e,t,n)),i},g.prototype.cork=function(){this._writableState.corked++},g.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||j(this,e))},g.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(g.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),g.prototype._write=function(e,t,n){n(new Error("_write() is not implemented"))},g.prototype._writev=null,g.prototype.end=function(e,t,n){var r=this._writableState;"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),null!=e&&this.write(e,t),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||F(this,r,n)},Object.defineProperty(g.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),g.prototype.destroy=p.destroy,g.prototype._undestroy=p.undestroy,g.prototype._destroy=function(e,t){this.end(),t(e)};
},{"process-nextick-args":"EdrQ","core-util-is":"iCz4","inherits":"GtRu","util-deprecate":"hMto","./internal/streams/stream":"aNgx","safe-buffer":"rExz","./internal/streams/destroy":"oUye","./_stream_duplex":"kMCo","process":"GJTy"}],"kMCo":[function(require,module,exports) {
"use strict";var e=require("process-nextick-args"),t=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};module.exports=l;var r=require("core-util-is");r.inherits=require("inherits");var i=require("./_stream_readable"),a=require("./_stream_writable");r.inherits(l,i);for(var o=t(a.prototype),s=0;s<o.length;s++){var n=o[s];l.prototype[n]||(l.prototype[n]=a.prototype[n])}function l(e){if(!(this instanceof l))return new l(e);i.call(this,e),a.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",h)}function h(){this.allowHalfOpen||this._writableState.ended||e.nextTick(d,this)}function d(e){e.end()}Object.defineProperty(l.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),l.prototype._destroy=function(t,r){this.push(null),this.end(),e.nextTick(r,t)};
},{"process-nextick-args":"EdrQ","core-util-is":"iCz4","inherits":"GtRu","./_stream_readable":"MhjF","./_stream_writable":"pR7S"}],"rbRB":[function(require,module,exports) {

"use strict";var t=require("safe-buffer").Buffer,e=t.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function s(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}function i(i){var a=s(i);if("string"!=typeof a&&(t.isEncoding===e||!e(i)))throw new Error("Unknown encoding: "+i);return a||i}function a(e){var s;switch(this.encoding=i(e),this.encoding){case"utf16le":this.text=c,this.end=f,s=4;break;case"utf8":this.fillLast=l,s=4;break;case"base64":this.text=d,this.end=g,s=3;break;default:return this.write=N,void(this.end=v)}this.lastNeed=0,this.lastTotal=0,this.lastChar=t.allocUnsafe(s)}function r(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function n(t,e,s){var i=e.length-1;if(i<s)return 0;var a=r(e[i]);return a>=0?(a>0&&(t.lastNeed=a-1),a):--i<s||-2===a?0:(a=r(e[i]))>=0?(a>0&&(t.lastNeed=a-2),a):--i<s||-2===a?0:(a=r(e[i]))>=0?(a>0&&(2===a?a=0:t.lastNeed=a-3),a):0}function h(t,e,s){if(128!=(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}function l(t){var e=this.lastTotal-this.lastNeed,s=h(this,t,e);return void 0!==s?s:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function u(t,e){var s=n(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=s;var i=t.length-(s-this.lastNeed);return t.copy(this.lastChar,0,i),t.toString("utf8",e,i)}function o(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e}function c(t,e){if((t.length-e)%2==0){var s=t.toString("utf16le",e);if(s){var i=s.charCodeAt(s.length-1);if(i>=55296&&i<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],s.slice(0,-1)}return s}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function f(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var s=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,s)}return e}function d(t,e){var s=(t.length-e)%3;return 0===s?t.toString("base64",e):(this.lastNeed=3-s,this.lastTotal=3,1===s?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-s))}function g(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function N(t){return t.toString(this.encoding)}function v(t){return t&&t.length?this.write(t):""}exports.StringDecoder=a,a.prototype.write=function(t){if(0===t.length)return"";var e,s;if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";s=this.lastNeed,this.lastNeed=0}else s=0;return s<t.length?e?e+this.text(t,s):this.text(t,s):e||""},a.prototype.end=o,a.prototype.text=u,a.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length};
},{"safe-buffer":"rExz"}],"MhjF":[function(require,module,exports) {

var global = arguments[3];
var process = require("process");
var e=arguments[3],t=require("process"),n=require("process-nextick-args");module.exports=_;var r,i=require("isarray");_.ReadableState=w;var a=require("events").EventEmitter,d=function(e,t){return e.listeners(t).length},o=require("./internal/streams/stream"),s=require("safe-buffer").Buffer,u=e.Uint8Array||function(){};function l(e){return s.from(e)}function h(e){return s.isBuffer(e)||e instanceof u}var p=require("core-util-is");p.inherits=require("inherits");var f=require("util"),c=void 0;c=f&&f.debuglog?f.debuglog("stream"):function(){};var g,b=require("./internal/streams/BufferList"),m=require("./internal/streams/destroy");p.inherits(_,o);var v=["error","close","destroy","pause","resume"];function y(e,t,n){if("function"==typeof e.prependListener)return e.prependListener(t,n);e._events&&e._events[t]?i(e._events[t])?e._events[t].unshift(n):e._events[t]=[n,e._events[t]]:e.on(t,n)}function w(e,t){e=e||{};var n=t instanceof(r=r||require("./_stream_duplex"));this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var i=e.highWaterMark,a=e.readableHighWaterMark,d=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:n&&(a||0===a)?a:d,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new b,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(g||(g=require("string_decoder/").StringDecoder),this.decoder=new g(e.encoding),this.encoding=e.encoding)}function _(e){if(r=r||require("./_stream_duplex"),!(this instanceof _))return new _(e);this._readableState=new w(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),o.call(this)}function M(e,t,n,r,i){var a,d=e._readableState;null===t?(d.reading=!1,x(e,d)):(i||(a=k(d,t)),a?e.emit("error",a):d.objectMode||t&&t.length>0?("string"==typeof t||d.objectMode||Object.getPrototypeOf(t)===s.prototype||(t=l(t)),r?d.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):S(e,d,t,!0):d.ended?e.emit("error",new Error("stream.push() after EOF")):(d.reading=!1,d.decoder&&!n?(t=d.decoder.write(t),d.objectMode||0!==t.length?S(e,d,t,!1):C(e,d)):S(e,d,t,!1))):r||(d.reading=!1));return j(d)}function S(e,t,n,r){t.flowing&&0===t.length&&!t.sync?(e.emit("data",n),e.read(0)):(t.length+=t.objectMode?1:n.length,r?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&q(e)),C(e,t)}function k(e,t){var n;return h(t)||"string"==typeof t||void 0===t||e.objectMode||(n=new TypeError("Invalid non-string/buffer chunk")),n}function j(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}Object.defineProperty(_.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),_.prototype.destroy=m.destroy,_.prototype._undestroy=m.undestroy,_.prototype._destroy=function(e,t){this.push(null),t(e)},_.prototype.push=function(e,t){var n,r=this._readableState;return r.objectMode?n=!0:"string"==typeof e&&((t=t||r.defaultEncoding)!==r.encoding&&(e=s.from(e,t),t=""),n=!0),M(this,e,t,!1,n)},_.prototype.unshift=function(e){return M(this,e,null,!0,!1)},_.prototype.isPaused=function(){return!1===this._readableState.flowing},_.prototype.setEncoding=function(e){return g||(g=require("string_decoder/").StringDecoder),this._readableState.decoder=new g(e),this._readableState.encoding=e,this};var R=8388608;function E(e){return e>=R?e=R:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function L(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=E(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function x(e,t){if(!t.ended){if(t.decoder){var n=t.decoder.end();n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,q(e)}}function q(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(c("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?n.nextTick(W,e):W(e))}function W(e){c("emit readable"),e.emit("readable"),B(e)}function C(e,t){t.readingMore||(t.readingMore=!0,n.nextTick(D,e,t))}function D(e,t){for(var n=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(c("maybeReadMore read 0"),e.read(0),n!==t.length);)n=t.length;t.readingMore=!1}function O(e){return function(){var t=e._readableState;c("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&d(e,"data")&&(t.flowing=!0,B(e))}}function T(e){c("readable nexttick read 0"),e.read(0)}function U(e,t){t.resumeScheduled||(t.resumeScheduled=!0,n.nextTick(P,e,t))}function P(e,t){t.reading||(c("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),B(e),t.flowing&&!t.reading&&e.read(0)}function B(e){var t=e._readableState;for(c("flow",t.flowing);t.flowing&&null!==e.read(););}function H(e,t){return 0===t.length?null:(t.objectMode?n=t.buffer.shift():!e||e>=t.length?(n=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):n=I(e,t.buffer,t.decoder),n);var n}function I(e,t,n){var r;return e<t.head.data.length?(r=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):r=e===t.head.data.length?t.shift():n?A(e,t):F(e,t),r}function A(e,t){var n=t.head,r=1,i=n.data;for(e-=i.length;n=n.next;){var a=n.data,d=e>a.length?a.length:e;if(d===a.length?i+=a:i+=a.slice(0,e),0===(e-=d)){d===a.length?(++r,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=a.slice(d));break}++r}return t.length-=r,i}function F(e,t){var n=s.allocUnsafe(e),r=t.head,i=1;for(r.data.copy(n),e-=r.data.length;r=r.next;){var a=r.data,d=e>a.length?a.length:e;if(a.copy(n,n.length-e,0,d),0===(e-=d)){d===a.length?(++i,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=a.slice(d));break}++i}return t.length-=i,n}function z(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,n.nextTick(G,t,e))}function G(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function J(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}_.prototype.read=function(e){c("read",e),e=parseInt(e,10);var t=this._readableState,n=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return c("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?z(this):q(this),null;if(0===(e=L(e,t))&&t.ended)return 0===t.length&&z(this),null;var r,i=t.needReadable;return c("need readable",i),(0===t.length||t.length-e<t.highWaterMark)&&c("length less than watermark",i=!0),t.ended||t.reading?c("reading or ended",i=!1):i&&(c("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=L(n,t))),null===(r=e>0?H(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&z(this)),null!==r&&this.emit("data",r),r},_.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},_.prototype.pipe=function(e,r){var i=this,a=this._readableState;switch(a.pipesCount){case 0:a.pipes=e;break;case 1:a.pipes=[a.pipes,e];break;default:a.pipes.push(e)}a.pipesCount+=1,c("pipe count=%d opts=%j",a.pipesCount,r);var o=(!r||!1!==r.end)&&e!==t.stdout&&e!==t.stderr?u:v;function s(t,n){c("onunpipe"),t===i&&n&&!1===n.hasUnpiped&&(n.hasUnpiped=!0,c("cleanup"),e.removeListener("close",b),e.removeListener("finish",m),e.removeListener("drain",l),e.removeListener("error",g),e.removeListener("unpipe",s),i.removeListener("end",u),i.removeListener("end",v),i.removeListener("data",f),h=!0,!a.awaitDrain||e._writableState&&!e._writableState.needDrain||l())}function u(){c("onend"),e.end()}a.endEmitted?n.nextTick(o):i.once("end",o),e.on("unpipe",s);var l=O(i);e.on("drain",l);var h=!1;var p=!1;function f(t){c("ondata"),p=!1,!1!==e.write(t)||p||((1===a.pipesCount&&a.pipes===e||a.pipesCount>1&&-1!==J(a.pipes,e))&&!h&&(c("false write response, pause",i._readableState.awaitDrain),i._readableState.awaitDrain++,p=!0),i.pause())}function g(t){c("onerror",t),v(),e.removeListener("error",g),0===d(e,"error")&&e.emit("error",t)}function b(){e.removeListener("finish",m),v()}function m(){c("onfinish"),e.removeListener("close",b),v()}function v(){c("unpipe"),i.unpipe(e)}return i.on("data",f),y(e,"error",g),e.once("close",b),e.once("finish",m),e.emit("pipe",i),a.flowing||(c("pipe resume"),i.resume()),e},_.prototype.unpipe=function(e){var t=this._readableState,n={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,n),this);if(!e){var r=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var a=0;a<i;a++)r[a].emit("unpipe",this,n);return this}var d=J(t.pipes,e);return-1===d?this:(t.pipes.splice(d,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,n),this)},_.prototype.on=function(e,t){var r=o.prototype.on.call(this,e,t);if("data"===e)!1!==this._readableState.flowing&&this.resume();else if("readable"===e){var i=this._readableState;i.endEmitted||i.readableListening||(i.readableListening=i.needReadable=!0,i.emittedReadable=!1,i.reading?i.length&&q(this):n.nextTick(T,this))}return r},_.prototype.addListener=_.prototype.on,_.prototype.resume=function(){var e=this._readableState;return e.flowing||(c("resume"),e.flowing=!0,U(this,e)),this},_.prototype.pause=function(){return c("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(c("pause"),this._readableState.flowing=!1,this.emit("pause")),this},_.prototype.wrap=function(e){var t=this,n=this._readableState,r=!1;for(var i in e.on("end",function(){if(c("wrapped end"),n.decoder&&!n.ended){var e=n.decoder.end();e&&e.length&&t.push(e)}t.push(null)}),e.on("data",function(i){(c("wrapped data"),n.decoder&&(i=n.decoder.write(i)),n.objectMode&&null==i)||(n.objectMode||i&&i.length)&&(t.push(i)||(r=!0,e.pause()))}),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));for(var a=0;a<v.length;a++)e.on(v[a],this.emit.bind(this,v[a]));return this._read=function(t){c("wrapped _read",t),r&&(r=!1,e.resume())},this},Object.defineProperty(_.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),_._fromList=H;
},{"process-nextick-args":"EdrQ","isarray":"vWqU","events":"RV6R","./internal/streams/stream":"aNgx","safe-buffer":"rExz","core-util-is":"iCz4","inherits":"GtRu","util":"Vh0v","./internal/streams/BufferList":"RQdU","./internal/streams/destroy":"oUye","./_stream_duplex":"kMCo","string_decoder/":"rbRB","process":"GJTy"}],"r2hX":[function(require,module,exports) {
"use strict";module.exports=n;var t=require("./_stream_duplex"),r=require("core-util-is");function e(t,r){var e=this._transformState;e.transforming=!1;var n=e.writecb;if(!n)return this.emit("error",new Error("write callback called multiple times"));e.writechunk=null,e.writecb=null,null!=r&&this.push(r),n(t);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function n(r){if(!(this instanceof n))return new n(r);t.call(this,r),this._transformState={afterTransform:e.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,r&&("function"==typeof r.transform&&(this._transform=r.transform),"function"==typeof r.flush&&(this._flush=r.flush)),this.on("prefinish",i)}function i(){var t=this;"function"==typeof this._flush?this._flush(function(r,e){a(t,r,e)}):a(this,null,null)}function a(t,r,e){if(r)return t.emit("error",r);if(null!=e&&t.push(e),t._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(t._transformState.transforming)throw new Error("Calling transform done when still transforming");return t.push(null)}r.inherits=require("inherits"),r.inherits(n,t),n.prototype.push=function(r,e){return this._transformState.needTransform=!1,t.prototype.push.call(this,r,e)},n.prototype._transform=function(t,r,e){throw new Error("_transform() is not implemented")},n.prototype._write=function(t,r,e){var n=this._transformState;if(n.writecb=e,n.writechunk=t,n.writeencoding=r,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},n.prototype._read=function(t){var r=this._transformState;null!==r.writechunk&&r.writecb&&!r.transforming?(r.transforming=!0,this._transform(r.writechunk,r.writeencoding,r.afterTransform)):r.needTransform=!0},n.prototype._destroy=function(r,e){var n=this;t.prototype._destroy.call(this,r,function(t){e(t),n.emit("close")})};
},{"./_stream_duplex":"kMCo","core-util-is":"iCz4","inherits":"GtRu"}],"DVDL":[function(require,module,exports) {
"use strict";module.exports=i;var r=require("./_stream_transform"),e=require("core-util-is");function i(e){if(!(this instanceof i))return new i(e);r.call(this,e)}e.inherits=require("inherits"),e.inherits(i,r),i.prototype._transform=function(r,e,i){i(null,r)};
},{"./_stream_transform":"r2hX","core-util-is":"iCz4","inherits":"GtRu"}],"WJ8y":[function(require,module,exports) {
exports=module.exports=require("./lib/_stream_readable.js"),exports.Stream=exports,exports.Readable=exports,exports.Writable=require("./lib/_stream_writable.js"),exports.Duplex=require("./lib/_stream_duplex.js"),exports.Transform=require("./lib/_stream_transform.js"),exports.PassThrough=require("./lib/_stream_passthrough.js");
},{"./lib/_stream_readable.js":"MhjF","./lib/_stream_writable.js":"pR7S","./lib/_stream_duplex.js":"kMCo","./lib/_stream_transform.js":"r2hX","./lib/_stream_passthrough.js":"DVDL"}],"yy1b":[function(require,module,exports) {
var process = require("process");
var Buffer = require("buffer").Buffer;
var global = arguments[3];
var e=require("process"),r=require("buffer").Buffer,t=arguments[3],s=require("./capability"),a=require("inherits"),o=require("readable-stream"),n=exports.readyStates={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},u=exports.IncomingMessage=function(a,n,u,i){var c=this;if(o.Readable.call(c),c._mode=u,c.headers={},c.rawHeaders=[],c.trailers={},c.rawTrailers=[],c.on("end",function(){e.nextTick(function(){c.emit("close")})}),"fetch"===u){if(c._fetchResponse=n,c.url=n.url,c.statusCode=n.status,c.statusMessage=n.statusText,n.headers.forEach(function(e,r){c.headers[r.toLowerCase()]=e,c.rawHeaders.push(r,e)}),s.writableStream){var d=new WritableStream({write:function(e){return new Promise(function(t,s){c._destroyed?s():c.push(new r(e))?t():c._resumeFetch=t})},close:function(){t.clearTimeout(i),c._destroyed||c.push(null)},abort:function(e){c._destroyed||c.emit("error",e)}});try{return void n.body.pipeTo(d).catch(function(e){t.clearTimeout(i),c._destroyed||c.emit("error",e)})}catch(p){}}var h=n.body.getReader();!function e(){h.read().then(function(s){if(!c._destroyed){if(s.done)return t.clearTimeout(i),void c.push(null);c.push(new r(s.value)),e()}}).catch(function(e){t.clearTimeout(i),c._destroyed||c.emit("error",e)})}()}else{if(c._xhr=a,c._pos=0,c.url=a.responseURL,c.statusCode=a.status,c.statusMessage=a.statusText,a.getAllResponseHeaders().split(/\r?\n/).forEach(function(e){var r=e.match(/^([^:]+):\s*(.*)/);if(r){var t=r[1].toLowerCase();"set-cookie"===t?(void 0===c.headers[t]&&(c.headers[t]=[]),c.headers[t].push(r[2])):void 0!==c.headers[t]?c.headers[t]+=", "+r[2]:c.headers[t]=r[2],c.rawHeaders.push(r[1],r[2])}}),c._charset="x-user-defined",!s.overrideMimeType){var f=c.rawHeaders["mime-type"];if(f){var l=f.match(/;\s*charset=([^;])(;|$)/);l&&(c._charset=l[1].toLowerCase())}c._charset||(c._charset="utf-8")}}};a(u,o.Readable),u.prototype._read=function(){var e=this._resumeFetch;e&&(this._resumeFetch=null,e())},u.prototype._onXHRProgress=function(){var e=this,s=e._xhr,a=null;switch(e._mode){case"text:vbarray":if(s.readyState!==n.DONE)break;try{a=new t.VBArray(s.responseBody).toArray()}catch(d){}if(null!==a){e.push(new r(a));break}case"text":try{a=s.responseText}catch(d){e._mode="text:vbarray";break}if(a.length>e._pos){var o=a.substr(e._pos);if("x-user-defined"===e._charset){for(var u=new r(o.length),i=0;i<o.length;i++)u[i]=255&o.charCodeAt(i);e.push(u)}else e.push(o,e._charset);e._pos=a.length}break;case"arraybuffer":if(s.readyState!==n.DONE||!s.response)break;a=s.response,e.push(new r(new Uint8Array(a)));break;case"moz-chunked-arraybuffer":if(a=s.response,s.readyState!==n.LOADING||!a)break;e.push(new r(new Uint8Array(a)));break;case"ms-stream":if(a=s.response,s.readyState!==n.LOADING)break;var c=new t.MSStreamReader;c.onprogress=function(){c.result.byteLength>e._pos&&(e.push(new r(new Uint8Array(c.result.slice(e._pos)))),e._pos=c.result.byteLength)},c.onload=function(){e.push(null)},c.readAsArrayBuffer(a)}e._xhr.readyState===n.DONE&&"ms-stream"!==e._mode&&e.push(null)};
},{"./capability":"OH4P","inherits":"GtRu","readable-stream":"WJ8y","process":"GJTy","buffer":"mgai"}],"zxDR":[function(require,module,exports) {

var e=require("buffer").Buffer;module.exports=function(f){if(f instanceof Uint8Array){if(0===f.byteOffset&&f.byteLength===f.buffer.byteLength)return f.buffer;if("function"==typeof f.buffer.slice)return f.buffer.slice(f.byteOffset,f.byteOffset+f.byteLength)}if(e.isBuffer(f)){for(var r=new Uint8Array(f.length),t=f.length,n=0;n<t;n++)r[n]=f[n];return r.buffer}throw new Error("Argument must be a Buffer")};
},{"buffer":"mgai"}],"GFwW":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
var global = arguments[3];
var process = require("process");
var e=require("buffer").Buffer,t=arguments[3],r=require("process"),o=require("./capability"),n=require("inherits"),i=require("./response"),s=require("readable-stream"),a=require("to-arraybuffer"),c=i.IncomingMessage,u=i.readyStates;function d(e,t){return o.fetch&&t?"fetch":o.mozchunkedarraybuffer?"moz-chunked-arraybuffer":o.msstream?"ms-stream":o.arraybuffer&&e?"arraybuffer":o.vbArray&&e?"text:vbarray":"text"}var f=module.exports=function(t){var r,n=this;s.Writable.call(n),n._opts=t,n._body=[],n._headers={},t.auth&&n.setHeader("Authorization","Basic "+new e(t.auth).toString("base64")),Object.keys(t.headers).forEach(function(e){n.setHeader(e,t.headers[e])});var i=!0;if("disable-fetch"===t.mode||"requestTimeout"in t&&!o.abortController)i=!1,r=!0;else if("prefer-streaming"===t.mode)r=!1;else if("allow-wrong-content-type"===t.mode)r=!o.overrideMimeType;else{if(t.mode&&"default"!==t.mode&&"prefer-fast"!==t.mode)throw new Error("Invalid value for opts.mode");r=!0}n._mode=d(r,i),n._fetchTimer=null,n.on("finish",function(){n._onFinish()})};function h(e){try{var t=e.status;return null!==t&&0!==t}catch(r){return!1}}n(f,s.Writable),f.prototype.setHeader=function(e,t){var r=e.toLowerCase();-1===p.indexOf(r)&&(this._headers[r]={name:e,value:t})},f.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];return t?t.value:null},f.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},f.prototype._onFinish=function(){var n=this;if(!n._destroyed){var i=n._opts,s=n._headers,c=null;"GET"!==i.method&&"HEAD"!==i.method&&(c=o.arraybuffer?a(e.concat(n._body)):o.blobConstructor?new t.Blob(n._body.map(function(e){return a(e)}),{type:(s["content-type"]||{}).value||""}):e.concat(n._body).toString());var d=[];if(Object.keys(s).forEach(function(e){var t=s[e].name,r=s[e].value;Array.isArray(r)?r.forEach(function(e){d.push([t,e])}):d.push([t,r])}),"fetch"===n._mode){var f=null;if(o.abortController){var h=new AbortController;f=h.signal,n._fetchAbortController=h,"requestTimeout"in i&&0!==i.requestTimeout&&(n._fetchTimer=t.setTimeout(function(){n.emit("requestTimeout"),n._fetchAbortController&&n._fetchAbortController.abort()},i.requestTimeout))}t.fetch(n._opts.url,{method:n._opts.method,headers:d,body:c||void 0,mode:"cors",credentials:i.withCredentials?"include":"same-origin",signal:f}).then(function(e){n._fetchResponse=e,n._connect()},function(e){t.clearTimeout(n._fetchTimer),n._destroyed||n.emit("error",e)})}else{var p=n._xhr=new t.XMLHttpRequest;try{p.open(n._opts.method,n._opts.url,!0)}catch(l){return void r.nextTick(function(){n.emit("error",l)})}"responseType"in p&&(p.responseType=n._mode.split(":")[0]),"withCredentials"in p&&(p.withCredentials=!!i.withCredentials),"text"===n._mode&&"overrideMimeType"in p&&p.overrideMimeType("text/plain; charset=x-user-defined"),"requestTimeout"in i&&(p.timeout=i.requestTimeout,p.ontimeout=function(){n.emit("requestTimeout")}),d.forEach(function(e){p.setRequestHeader(e[0],e[1])}),n._response=null,p.onreadystatechange=function(){switch(p.readyState){case u.LOADING:case u.DONE:n._onXHRProgress()}},"moz-chunked-arraybuffer"===n._mode&&(p.onprogress=function(){n._onXHRProgress()}),p.onerror=function(){n._destroyed||n.emit("error",new Error("XHR error"))};try{p.send(c)}catch(l){return void r.nextTick(function(){n.emit("error",l)})}}}},f.prototype._onXHRProgress=function(){h(this._xhr)&&!this._destroyed&&(this._response||this._connect(),this._response._onXHRProgress())},f.prototype._connect=function(){var e=this;e._destroyed||(e._response=new c(e._xhr,e._fetchResponse,e._mode,e._fetchTimer),e._response.on("error",function(t){e.emit("error",t)}),e.emit("response",e._response))},f.prototype._write=function(e,t,r){this._body.push(e),r()},f.prototype.abort=f.prototype.destroy=function(){this._destroyed=!0,t.clearTimeout(this._fetchTimer),this._response&&(this._response._destroyed=!0),this._xhr?this._xhr.abort():this._fetchAbortController&&this._fetchAbortController.abort()},f.prototype.end=function(e,t,r){"function"==typeof e&&(r=e,e=void 0),s.Writable.prototype.end.call(this,e,t,r)},f.prototype.flushHeaders=function(){},f.prototype.setTimeout=function(){},f.prototype.setNoDelay=function(){},f.prototype.setSocketKeepAlive=function(){};var p=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"];
},{"./capability":"OH4P","inherits":"GtRu","./response":"yy1b","readable-stream":"WJ8y","to-arraybuffer":"zxDR","buffer":"mgai","process":"GJTy"}],"i7eL":[function(require,module,exports) {
module.exports=o;var r=Object.prototype.hasOwnProperty;function o(){for(var o={},t=0;t<arguments.length;t++){var e=arguments[t];for(var a in e)r.call(e,a)&&(o[a]=e[a])}return o}
},{}],"Kgq8":[function(require,module,exports) {
module.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};
},{}],"QZo6":[function(require,module,exports) {
var global = arguments[3];
var define;
var o,e=arguments[3];!function(n){var r="object"==typeof exports&&exports&&!exports.nodeType&&exports,t="object"==typeof module&&module&&!module.nodeType&&module,u="object"==typeof e&&e;u.global!==u&&u.window!==u&&u.self!==u||(n=u);var i,f,c=2147483647,l=36,s=1,p=26,a=38,d=700,h=72,v=128,g="-",w=/^xn--/,x=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,m={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=l-s,b=Math.floor,j=String.fromCharCode;function A(o){throw new RangeError(m[o])}function I(o,e){for(var n=o.length,r=[];n--;)r[n]=e(o[n]);return r}function E(o,e){var n=o.split("@"),r="";return n.length>1&&(r=n[0]+"@",o=n[1]),r+I((o=o.replace(y,".")).split("."),e).join(".")}function F(o){for(var e,n,r=[],t=0,u=o.length;t<u;)(e=o.charCodeAt(t++))>=55296&&e<=56319&&t<u?56320==(64512&(n=o.charCodeAt(t++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),t--):r.push(e);return r}function O(o){return I(o,function(o){var e="";return o>65535&&(e+=j((o-=65536)>>>10&1023|55296),o=56320|1023&o),e+=j(o)}).join("")}function S(o,e){return o+22+75*(o<26)-((0!=e)<<5)}function T(o,e,n){var r=0;for(o=n?b(o/d):o>>1,o+=b(o/e);o>C*p>>1;r+=l)o=b(o/C);return b(r+(C+1)*o/(o+a))}function L(o){var e,n,r,t,u,i,f,a,d,w,x,y=[],m=o.length,C=0,j=v,I=h;for((n=o.lastIndexOf(g))<0&&(n=0),r=0;r<n;++r)o.charCodeAt(r)>=128&&A("not-basic"),y.push(o.charCodeAt(r));for(t=n>0?n+1:0;t<m;){for(u=C,i=1,f=l;t>=m&&A("invalid-input"),((a=(x=o.charCodeAt(t++))-48<10?x-22:x-65<26?x-65:x-97<26?x-97:l)>=l||a>b((c-C)/i))&&A("overflow"),C+=a*i,!(a<(d=f<=I?s:f>=I+p?p:f-I));f+=l)i>b(c/(w=l-d))&&A("overflow"),i*=w;I=T(C-u,e=y.length+1,0==u),b(C/e)>c-j&&A("overflow"),j+=b(C/e),C%=e,y.splice(C++,0,j)}return O(y)}function M(o){var e,n,r,t,u,i,f,a,d,w,x,y,m,C,I,E=[];for(y=(o=F(o)).length,e=v,n=0,u=h,i=0;i<y;++i)(x=o[i])<128&&E.push(j(x));for(r=t=E.length,t&&E.push(g);r<y;){for(f=c,i=0;i<y;++i)(x=o[i])>=e&&x<f&&(f=x);for(f-e>b((c-n)/(m=r+1))&&A("overflow"),n+=(f-e)*m,e=f,i=0;i<y;++i)if((x=o[i])<e&&++n>c&&A("overflow"),x==e){for(a=n,d=l;!(a<(w=d<=u?s:d>=u+p?p:d-u));d+=l)I=a-w,C=l-w,E.push(j(S(w+I%C,0))),a=b(I/C);E.push(j(S(a,0))),u=T(n,m,r==t),n=0,++r}++n,++e}return E.join("")}if(i={version:"1.4.1",ucs2:{decode:F,encode:O},decode:L,encode:M,toASCII:function(o){return E(o,function(o){return x.test(o)?"xn--"+M(o):o})},toUnicode:function(o){return E(o,function(o){return w.test(o)?L(o.slice(4).toLowerCase()):o})}},"function"==typeof o&&"object"==typeof o.amd&&o.amd)o("punycode",function(){return i});else if(r&&t)if(module.exports==r)t.exports=i;else for(f in i)i.hasOwnProperty(f)&&(r[f]=i[f]);else n.punycode=i}(this);
},{}],"cSRg":[function(require,module,exports) {
"use strict";module.exports={isString:function(n){return"string"==typeof n},isObject:function(n){return"object"==typeof n&&null!==n},isNull:function(n){return null===n},isNullOrUndefined:function(n){return null==n}};
},{}],"DDfG":[function(require,module,exports) {
"use strict";function r(r,e){return Object.prototype.hasOwnProperty.call(r,e)}module.exports=function(t,n,o,a){n=n||"&",o=o||"=";var s={};if("string"!=typeof t||0===t.length)return s;var p=/\+/g;t=t.split(n);var u=1e3;a&&"number"==typeof a.maxKeys&&(u=a.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var i=0;i<c;++i){var y,l,f,v,b=t[i].replace(p,"%20"),d=b.indexOf(o);d>=0?(y=b.substr(0,d),l=b.substr(d+1)):(y=b,l=""),f=decodeURIComponent(y),v=decodeURIComponent(l),r(s,f)?e(s[f])?s[f].push(v):s[f]=[s[f],v]:s[f]=v}return s};var e=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)};
},{}],"AsCk":[function(require,module,exports) {
"use strict";var n=function(n){switch(typeof n){case"string":return n;case"boolean":return n?"true":"false";case"number":return isFinite(n)?n:"";default:return""}};module.exports=function(o,u,c,a){return u=u||"&",c=c||"=",null===o&&(o=void 0),"object"==typeof o?r(t(o),function(t){var a=encodeURIComponent(n(t))+c;return e(o[t])?r(o[t],function(e){return a+encodeURIComponent(n(e))}).join(u):a+encodeURIComponent(n(o[t]))}).join(u):a?encodeURIComponent(n(a))+c+encodeURIComponent(n(o)):""};var e=Array.isArray||function(n){return"[object Array]"===Object.prototype.toString.call(n)};function r(n,e){if(n.map)return n.map(e);for(var r=[],t=0;t<n.length;t++)r.push(e(n[t],t));return r}var t=Object.keys||function(n){var e=[];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.push(r);return e};
},{}],"lfsp":[function(require,module,exports) {
"use strict";exports.decode=exports.parse=require("./decode"),exports.encode=exports.stringify=require("./encode");
},{"./decode":"DDfG","./encode":"AsCk"}],"Eb6W":[function(require,module,exports) {
"use strict";var t=require("punycode"),s=require("./util");function h(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}exports.parse=b,exports.resolve=O,exports.resolveObject=d,exports.format=q,exports.Url=h;var e=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,r=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,o=["<",">",'"',"`"," ","\r","\n","\t"],n=["{","}","|","\\","^","`"].concat(o),i=["'"].concat(n),l=["%","/","?",";","#"].concat(i),p=["/","?","#"],c=255,u=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=require("querystring");function b(t,e,a){if(t&&s.isObject(t)&&t instanceof h)return t;var r=new h;return r.parse(t,e,a),r}function q(t){return s.isString(t)&&(t=b(t)),t instanceof h?t.format():h.prototype.format.call(t)}function O(t,s){return b(t,!1,!0).resolve(s)}function d(t,s){return t?b(t,!1,!0).resolveObject(s):s}h.prototype.parse=function(h,a,o){if(!s.isString(h))throw new TypeError("Parameter 'url' must be a string, not "+typeof h);var n=h.indexOf("?"),b=-1!==n&&n<h.indexOf("#")?"?":"#",q=h.split(b);q[0]=q[0].replace(/\\/g,"/");var O=h=q.join(b);if(O=O.trim(),!o&&1===h.split("#").length){var d=r.exec(O);if(d)return this.path=O,this.href=O,this.pathname=d[1],d[2]?(this.search=d[2],this.query=a?y.parse(this.search.substr(1)):this.search.substr(1)):a&&(this.search="",this.query={}),this}var j=e.exec(O);if(j){var x=(j=j[0]).toLowerCase();this.protocol=x,O=O.substr(j.length)}if(o||j||O.match(/^\/\/[^@\/]+@[^@\/]+/)){var A="//"===O.substr(0,2);!A||j&&v[j]||(O=O.substr(2),this.slashes=!0)}if(!v[j]&&(A||j&&!g[j])){for(var C,I,w=-1,U=0;U<p.length;U++){-1!==(k=O.indexOf(p[U]))&&(-1===w||k<w)&&(w=k)}-1!==(I=-1===w?O.lastIndexOf("@"):O.lastIndexOf("@",w))&&(C=O.slice(0,I),O=O.slice(I+1),this.auth=decodeURIComponent(C)),w=-1;for(U=0;U<l.length;U++){var k;-1!==(k=O.indexOf(l[U]))&&(-1===w||k<w)&&(w=k)}-1===w&&(w=O.length),this.host=O.slice(0,w),O=O.slice(w),this.parseHost(),this.hostname=this.hostname||"";var N="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!N)for(var R=this.hostname.split(/\./),S=(U=0,R.length);U<S;U++){var $=R[U];if($&&!$.match(u)){for(var z="",H=0,L=$.length;H<L;H++)$.charCodeAt(H)>127?z+="x":z+=$[H];if(!z.match(u)){var Z=R.slice(0,U),_=R.slice(U+1),E=$.match(f);E&&(Z.push(E[1]),_.unshift(E[2])),_.length&&(O="/"+_.join(".")+O),this.hostname=Z.join(".");break}}}this.hostname.length>c?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=t.toASCII(this.hostname));var P=this.port?":"+this.port:"",T=this.hostname||"";this.host=T+P,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==O[0]&&(O="/"+O))}if(!m[x])for(U=0,S=i.length;U<S;U++){var B=i[U];if(-1!==O.indexOf(B)){var D=encodeURIComponent(B);D===B&&(D=escape(B)),O=O.split(B).join(D)}}var F=O.indexOf("#");-1!==F&&(this.hash=O.substr(F),O=O.slice(0,F));var G=O.indexOf("?");if(-1!==G?(this.search=O.substr(G),this.query=O.substr(G+1),a&&(this.query=y.parse(this.query)),O=O.slice(0,G)):a&&(this.search="",this.query={}),O&&(this.pathname=O),g[x]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){P=this.pathname||"";var J=this.search||"";this.path=P+J}return this.href=this.format(),this},h.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var h=this.protocol||"",e=this.pathname||"",a=this.hash||"",r=!1,o="";this.host?r=t+this.host:this.hostname&&(r=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(o=y.stringify(this.query));var n=this.search||o&&"?"+o||"";return h&&":"!==h.substr(-1)&&(h+=":"),this.slashes||(!h||g[h])&&!1!==r?(r="//"+(r||""),e&&"/"!==e.charAt(0)&&(e="/"+e)):r||(r=""),a&&"#"!==a.charAt(0)&&(a="#"+a),n&&"?"!==n.charAt(0)&&(n="?"+n),h+r+(e=e.replace(/[?#]/g,function(t){return encodeURIComponent(t)}))+(n=n.replace("#","%23"))+a},h.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},h.prototype.resolveObject=function(t){if(s.isString(t)){var e=new h;e.parse(t,!1,!0),t=e}for(var a=new h,r=Object.keys(this),o=0;o<r.length;o++){var n=r[o];a[n]=this[n]}if(a.hash=t.hash,""===t.href)return a.href=a.format(),a;if(t.slashes&&!t.protocol){for(var i=Object.keys(t),l=0;l<i.length;l++){var p=i[l];"protocol"!==p&&(a[p]=t[p])}return g[a.protocol]&&a.hostname&&!a.pathname&&(a.path=a.pathname="/"),a.href=a.format(),a}if(t.protocol&&t.protocol!==a.protocol){if(!g[t.protocol]){for(var c=Object.keys(t),u=0;u<c.length;u++){var f=c[u];a[f]=t[f]}return a.href=a.format(),a}if(a.protocol=t.protocol,t.host||v[t.protocol])a.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),a.pathname=m.join("/")}if(a.search=t.search,a.query=t.query,a.host=t.host||"",a.auth=t.auth,a.hostname=t.hostname||t.host,a.port=t.port,a.pathname||a.search){var y=a.pathname||"",b=a.search||"";a.path=y+b}return a.slashes=a.slashes||t.slashes,a.href=a.format(),a}var q=a.pathname&&"/"===a.pathname.charAt(0),O=t.host||t.pathname&&"/"===t.pathname.charAt(0),d=O||q||a.host&&t.pathname,j=d,x=a.pathname&&a.pathname.split("/")||[],A=(m=t.pathname&&t.pathname.split("/")||[],a.protocol&&!g[a.protocol]);if(A&&(a.hostname="",a.port=null,a.host&&(""===x[0]?x[0]=a.host:x.unshift(a.host)),a.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),d=d&&(""===m[0]||""===x[0])),O)a.host=t.host||""===t.host?t.host:a.host,a.hostname=t.hostname||""===t.hostname?t.hostname:a.hostname,a.search=t.search,a.query=t.query,x=m;else if(m.length)x||(x=[]),x.pop(),x=x.concat(m),a.search=t.search,a.query=t.query;else if(!s.isNullOrUndefined(t.search)){if(A)a.hostname=a.host=x.shift(),(k=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=k.shift(),a.host=a.hostname=k.shift());return a.search=t.search,a.query=t.query,s.isNull(a.pathname)&&s.isNull(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.href=a.format(),a}if(!x.length)return a.pathname=null,a.search?a.path="/"+a.search:a.path=null,a.href=a.format(),a;for(var C=x.slice(-1)[0],I=(a.host||t.host||x.length>1)&&("."===C||".."===C)||""===C,w=0,U=x.length;U>=0;U--)"."===(C=x[U])?x.splice(U,1):".."===C?(x.splice(U,1),w++):w&&(x.splice(U,1),w--);if(!d&&!j)for(;w--;w)x.unshift("..");!d||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),I&&"/"!==x.join("/").substr(-1)&&x.push("");var k,N=""===x[0]||x[0]&&"/"===x[0].charAt(0);A&&(a.hostname=a.host=N?"":x.length?x.shift():"",(k=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=k.shift(),a.host=a.hostname=k.shift()));return(d=d||a.host&&x.length)&&!N&&x.unshift(""),x.length?a.pathname=x.join("/"):(a.pathname=null,a.path=null),s.isNull(a.pathname)&&s.isNull(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.auth=t.auth||a.auth,a.slashes=a.slashes||t.slashes,a.href=a.format(),a},h.prototype.parseHost=function(){var t=this.host,s=a.exec(t);s&&(":"!==(s=s[0])&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)};
},{"punycode":"QZo6","./util":"cSRg","querystring":"lfsp"}],"GAvy":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t=require("./lib/request"),r=require("./lib/response"),n=require("xtend"),o=require("builtin-status-codes"),s=require("url"),u=exports;u.request=function(r,o){r="string"==typeof r?s.parse(r):n(r);var u=-1===e.location.protocol.search(/^https?:$/)?"http:":"",E=r.protocol||u,a=r.hostname||r.host,C=r.port,i=r.path||"/";a&&-1!==a.indexOf(":")&&(a="["+a+"]"),r.url=(a?E+"//"+a:"")+(C?":"+C:"")+i,r.method=(r.method||"GET").toUpperCase(),r.headers=r.headers||{};var T=new t(r);return o&&T.on("response",o),T},u.get=function(e,t){var r=u.request(e,t);return r.end(),r},u.ClientRequest=t,u.IncomingMessage=r.IncomingMessage,u.Agent=function(){},u.Agent.defaultMaxSockets=4,u.globalAgent=new u.Agent,u.STATUS_CODES=o,u.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"];
},{"./lib/request":"GFwW","./lib/response":"yy1b","xtend":"i7eL","builtin-status-codes":"Kgq8","url":"Eb6W"}],"F5Ib":[function(require,module,exports) {
var t=require("http"),r=require("url"),o=module.exports;for(var e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);function p(t){if("string"==typeof t&&(t=r.parse(t)),t.protocol||(t.protocol="https:"),"https:"!==t.protocol)throw new Error('Protocol "'+t.protocol+'" not supported. Expected "https:"');return t}o.request=function(r,o){return r=p(r),t.request.call(this,r,o)},o.get=function(r,o){return r=p(r),t.get.call(this,r,o)};
},{"http":"GAvy","url":"Eb6W"}],"o3Km":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,c){var a,o=arguments.length,i=o<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,r):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,c);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("../cache/index"),c=require("../../container"),a=require("../bootstrap-logger"),o=require("../../decorators/service/Service");let i=class extends r.CacheService{constructor(){super(c.Container.get(a.BootstrapLogger)),this.cacheLayer=this.createLayer({name:"request-cache-layer"})}put(e,t){return this.cacheLayer.putItem({key:e,data:t})}get(e){return this.cacheLayer.getItem(e)}};i=e([o.Service(),t("design:paramtypes",[])],i),exports.RequestCacheService=i;
},{"../cache/index":"HUWP","../../container":"UeX4","../bootstrap-logger":"gkD1","../../decorators/service/Service":"e2A8"}],"qchL":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,r,t,o){var c,a=arguments.length,s=a<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,r,t,o);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(s=(a<3?c(s):a>3?c(r,t,s):c(r,t))||s);return a>3&&s&&Object.defineProperty(r,t,s),s},r=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../decorators/service/Service"),o=require("rxjs"),c=require("http"),a=require("https"),s=require("./request.cache.service"),i=require("../../decorators/injector/injector.decorator"),n=require("rxjs/operators"),p=require("../bootstrap-logger");let u=class{get(e,r){return this.cache.cacheLayer.map.has(e)?(this.logger.log(`Item returned from cacahe: ${e}`),o.of(this.cache.cacheLayer.get(e).data)):new o.Observable(r=>{e.includes("https://")?a.get(e,e=>{let t="";e.on("data",e=>t+=e),e.on("end",()=>r.next(t))}).on("error",e=>{console.error("Error: "+e.message),r.error(e)}):c.get(e,e=>{let t="";e.on("data",e=>t+=e),e.on("end",()=>r.next(t))}).on("error",e=>{console.error("Error: "+e.message),r.error(e)})}).pipe(n.tap(r=>this.cache.cacheLayer.putItem({key:e,data:r})))}};e([i.Injector(s.RequestCacheService),r("design:type",s.RequestCacheService)],u.prototype,"cache",void 0),e([i.Injector(p.BootstrapLogger),r("design:type",p.BootstrapLogger)],u.prototype,"logger",void 0),u=e([t.Service()],u),exports.RequestService=u;
},{"../../decorators/service/Service":"e2A8","rxjs":"iRqj","http":"GAvy","https":"F5Ib","./request.cache.service":"o3Km","../../decorators/injector/injector.decorator":"afQh","rxjs/operators":"cVrl","../bootstrap-logger":"gkD1"}],"gGlI":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./request.service")),e(require("./request.cache.service"));
},{"./request.service":"qchL","./request.cache.service":"o3Km"}],"l9I5":[function(require,module,exports) {
var process = require("process");
var r=require("process");function t(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function e(r){"string"!=typeof r&&(r+="");var t,e=0,n=-1,o=!0;for(t=r.length-1;t>=0;--t)if(47===r.charCodeAt(t)){if(!o){e=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":r.slice(e,n)}function n(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}exports.resolve=function(){for(var e="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var i=s>=0?arguments[s]:r.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,o="/"===i.charAt(0))}return(o?"/":"")+(e=t(n(e.split("/"),function(r){return!!r}),!o).join("/"))||"."},exports.normalize=function(r){var e=exports.isAbsolute(r),s="/"===o(r,-1);return(r=t(n(r.split("/"),function(r){return!!r}),!e).join("/"))||e||(r="."),r&&s&&(r+="/"),(e?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(n(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),s=Math.min(n.length,o.length),i=s,u=0;u<s;u++)if(n[u]!==o[u]){i=u;break}var f=[];for(u=i;u<n.length;u++)f.push("..");return(f=f.concat(o.slice(i))).join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){if("string"!=typeof r&&(r+=""),0===r.length)return".";for(var t=r.charCodeAt(0),e=47===t,n=-1,o=!0,s=r.length-1;s>=1;--s)if(47===(t=r.charCodeAt(s))){if(!o){n=s;break}}else o=!1;return-1===n?e?"/":".":e&&1===n?"/":r.slice(0,n)},exports.basename=function(r,t){var n=e(r);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},exports.extname=function(r){"string"!=typeof r&&(r+="");for(var t=-1,e=0,n=-1,o=!0,s=0,i=r.length-1;i>=0;--i){var u=r.charCodeAt(i);if(47!==u)-1===n&&(o=!1,n=i+1),46===u?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){e=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===e+1?"":r.slice(t,n)};var o="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
},{"process":"GJTy"}],"CM3K":[function(require,module,exports) {
var process = require("process");
var e=require("process");Object.defineProperty(exports,"__esModule",{value:!0});const t=require("path"),o=require("fs"),r=parseInt("0777",8);function n(c,i,s,u){"function"==typeof i?(s=i,i={}):i&&"object"==typeof i||(i={mode:i});let a=i.mode;const d=i.fs||o;void 0===a&&(a=r&~e.umask()),u||(u=null);const f=s||function(){};c=t.resolve(c),d.mkdir(c,a,function(e){if(!e)return f(null,u=u||c);switch(e.code){case"ENOENT":n(t.dirname(c),i,function(e,t){e?f(e,t):n(c,i,f,t)});break;default:d.stat(c,function(t,o){t||!o.isDirectory()?f(e,u):f(null,u)})}})}function c(n,i,s){i&&"object"==typeof i||(i={mode:i});let u=i.mode;const a=i.fs||o;void 0===u&&(u=r&~e.umask()),s||(s=null),n=t.resolve(n);try{a.mkdirSync(n,u),s=s||n}catch(d){switch(d.code){case"ENOENT":s=c(t.dirname(n),i,s),c(n,i,s);break;default:let e;try{e=a.statSync(n)}catch(f){throw d}if(!e.isDirectory())throw d}}return s}exports.mkdirp=n,exports.mkdirpSync=c;
},{"path":"l9I5","fs":"Vh0v","process":"GJTy"}],"i6ji":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,r,t,i){var n,o=arguments.length,l=o<3?r:null===i?i=Object.getOwnPropertyDescriptor(r,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,t,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(o<3?n(l):o>3?n(r,t,l):n(r,t))||l);return o>3&&l&&Object.defineProperty(r,t,l),l},r=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../decorators/service/Service"),i=require("fs"),n=require("rxjs"),o=require("rxjs/operators"),l=require("../bootstrap-logger"),s=require("../../decorators/injector/injector.decorator"),c=require("path"),a=require("./dist");let u=class{writeFile(e,r,t,i){return this.mkdirp(e).pipe(o.tap(()=>{this.logger.logFileService(`Bootstrap: @Service('${t}'): Saved inside ${e}`)}),o.switchMap(()=>this.writeFileAsyncP(e,r,i)))}writeFileAsync(e,r,t,i){return this.mkdirp(e).pipe(o.switchMap(()=>this.writeFileAsyncP(e,r,i)),o.map(()=>(this.logger.logFileService(`Bootstrap: external @Module('${t}') namespace: Saved inside ${e}`),`${e}/${r}`)))}writeFileSync(e,r){return i.writeFileSync.bind(null)(e,JSON.stringify(r,null,2)+"\n",{encoding:"utf-8"})}readFile(e){return JSON.parse(i.readFileSync.bind(null)(e,{encoding:"utf-8"}))}isPresent(e){return i.existsSync(e)}writeFileAsyncP(e,r,t){return new n.Observable(n=>i.writeFile(`${e}/${r}`,t,()=>n.next(!0)))}mkdirp(e){return new n.Observable(r=>{a.mkdirp(e,e=>{e?(console.error(e),r.error(!1)):r.next(!0),r.complete()})})}fileWalker(e,r="node_modules"){return new n.Observable(t=>{this.filewalker(e,(e,r)=>{e?t.error(e):t.next(r),t.complete()},r)})}filewalker(e,r,t="node_modules"){let n=[];const o=this.filewalker.bind(this);i.readdir(e,(l,s)=>{if(l)return r(l);let a=s.length;if(!a)return r(null,n);s.forEach(l=>{l=c.resolve(e,l),i.stat(l,(e,i)=>{i&&i.isDirectory()?(n.push(l),l.includes(t)?--a||r(null,n):o(l,(e,t)=>{n=n.concat(t),--a||r(null,n)},t)):(n.push(l),--a||r(null,n))})})})}};e([s.Injector(l.BootstrapLogger),r("design:type",l.BootstrapLogger)],u.prototype,"logger",void 0),u=e([t.Service()],u),exports.FileService=u;
},{"../../decorators/service/Service":"e2A8","fs":"Vh0v","rxjs":"iRqj","rxjs/operators":"cVrl","../bootstrap-logger":"gkD1","../../decorators/injector/injector.decorator":"afQh","path":"l9I5","./dist":"CM3K"}],"W0s8":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./file.service"));
},{"./file.service":"i6ji"}],"B7aS":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,o){var c,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var f=e.length-1;f>=0;f--)(c=e[f])&&(n=(i<3?c(n):i>3?c(t,r,n):c(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("../../decorators/service/Service"),o=require("../../decorators/injector/injector.decorator"),c=require("../config/index");let i=class{gZipAll(){}};e([o.Injector(c.ConfigService),t("design:type",c.ConfigService)],i.prototype,"config",void 0),i=e([r.Service()],i),exports.CompressionService=i;
},{"../../decorators/service/Service":"e2A8","../../decorators/injector/injector.decorator":"afQh","../config/index":"JpbC"}],"G2Re":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=this&&this.__decorate||function(e,t,s,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(r<3?o(a):r>3?o(t,s,a):o(t,s))||a);return r>3&&a&&Object.defineProperty(t,s,a),a};Object.defineProperty(exports,"__esModule",{value:!0});const s=require("../../decorators/service/Service"),i=require("rxjs"),o=require("child_process");let r=class{constructor(){this.packagesToDownload=new i.BehaviorSubject([]),this.packages=[]}setPackages(e){this.packagesToDownload.next([...this.packagesToDownload.getValue(),...e])}preparePackages(){const e=this.packagesToDownload.getValue()||[];this.packages=[...new Set(e.map(e=>`${e.name}@${e.version}`))]}installPackages(){return new Promise((t,s)=>{this.preparePackages(),this.child&&(this.child.stdout.removeAllListeners("data"),this.child.stderr.removeAllListeners("data"),this.child.removeAllListeners("exit"),this.child.kill()),console.log(`Installing npm packages on child process! ${this.packages.toString()}`),this.child=o.spawn("npm",["i",...this.packages]),this.child.stdout.on("data",t=>e.stdout.write(t)),this.child.stderr.on("data",t=>{e.stdout.write(t)}),this.child.on("exit",e=>{console.log(`Child process exited with code ${e}`),console.log(`Installing npm packages DONE! ${this.packages.toString()}`),this.child=null})})}};r=t([s.Service()],r),exports.NpmService=r;
},{"../../decorators/service/Service":"e2A8","rxjs":"iRqj","child_process":"Vh0v","process":"GJTy"}],"xDW0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IPFS_PROVIDERS=[{name:"cloudflare",link:"https://cloudflare-ipfs.com/ipfs/"},{name:"main-ipfs-node",link:"https://ipfs.io/ipfs/"},{name:"infura",link:"https://ipfs.infura.io/ipfs/"},{name:"local",link:"http://127.0.0.1:8080/ipfs/"}];
},{}],"vzL6":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
var Buffer = require("buffer").Buffer;
var define;
var __filename = "/home/rampage/Desktop/work/repos/private/ui-kit/node_modules/systemjs/dist/system.src.js";
var e,t=require("process"),r=arguments[3],n=require("buffer").Buffer,o="/home/rampage/Desktop/work/repos/private/ui-kit/node_modules/systemjs/dist/system.src.js";!function(){"use strict";var e="undefined"!=typeof window&&"undefined"!=typeof document,i=void 0!==t&&t.versions&&t.versions.node,a=void 0!==t&&"string"==typeof t.platform&&t.platform.match(/^win/),s="undefined"!=typeof self?self:r,u="undefined"!=typeof Symbol;function l(e){return u?Symbol():"@@"+e}var c,d=u&&Symbol.toStringTag;if("undefined"!=typeof document&&document.getElementsByTagName){if(!(c=document.baseURI)){var f=document.getElementsByTagName("base");c=f[0]&&f[0].href||window.location.href}}else"undefined"!=typeof location&&(c=location.href);if(c){var p=(c=c.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==p&&(c=c.substr(0,p+1))}else{if(void 0===t||!t.cwd)throw new TypeError("No environment baseURI");c="file://"+(a?"/":"")+t.cwd(),a&&(c=c.replace(/\\/g,"/"))}"/"!==c[c.length-1]&&(c+="/");var g="_"==new Error(0,"_").fileName;function h(t,r){e||(r=r.replace(a?/file:\/\/\//g:/file:\/\//g,""));var n,o=(t.message||t)+"\n  "+r;n=g&&t.fileName?new Error(o,t.fileName,t.lineNumber):new Error(o);var s=t.originalErr?t.originalErr.stack:t.stack;return n.stack=i?o+"\n  "+s:s,n.originalErr=t.originalErr||t,n}function m(e,t){throw new RangeError('Unable to resolve "'+e+'" to '+t)}var v=/\\/g;function y(e,t){" "!==e[0]&&" "!==e[e.length-1]||(e=e.trim());var r=t&&t.substr(0,t.indexOf(":")+1),n=e[0],o=e[1];if("/"===n&&"/"===o)return r||m(e,t),-1!==e.indexOf("\\")&&(e=e.replace(v,"/")),r+e;if("."===n&&("/"===o||"."===o&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===n){-1!==e.indexOf("\\")&&(e=e.replace(v,"/"));var a,s=!r||"/"!==t[r.length];if(s?(void 0===t&&m(e,t),a=t):a="/"===t[r.length+1]?"file:"!==r?(a=t.substr(r.length+2)).substr(a.indexOf("/")+1):t.substr(8):t.substr(r.length+1),"/"===n){if(!s)return t.substr(0,t.length-a.length-1)+e;m(e,t)}for(var u=a.substr(0,a.lastIndexOf("/")+1)+e,l=[],c=-1,d=0;d<u.length;d++)if(-1===c)if("."!==u[d])c=d;else{if("."!==u[d+1]||"/"!==u[d+2]&&d+2!==u.length){if("/"!==u[d+1]&&d+1!==u.length){c=d;continue}d+=1}else l.pop(),d+=2;s&&0===l.length&&m(e,t)}else"/"===u[d]&&(l.push(u.substring(c,d+1)),c=-1);return-1!==c&&l.push(u.substr(c)),t.substr(0,t.length-a.length)+l.join("")}return-1!==e.indexOf(":")?i&&":"===e[1]&&"\\"===e[2]&&e[0].match(/[a-z]/i)?"file:///"+e.replace(v,"/"):e:void 0}var b=Promise.resolve();function w(e){if(e.values)return e.values();if("undefined"==typeof Symbol||!Symbol.iterator)throw new Error("Symbol.iterator not supported in this browser");var t={};return t[Symbol.iterator]=function(){var t=Object.keys(e),r=0;return{next:function(){return r<t.length?{value:e[t[r++]],done:!1}:{value:void 0,done:!0}}}},t}function k(){this.registry=new _}function x(e){if(void 0!==e){if(e instanceof M==!1&&"module"!==e[d])throw new TypeError("Module instantiation did not return a valid namespace object.");return e}}k.prototype.constructor=k,k.prototype.import=function(e,t){if("string"!=typeof e)throw new TypeError("Loader import method must be passed a module key string");var r=this;return b.then(function(){return r[O](e,t)}).then(x).catch(function(r){throw h(r,"Loading "+e+(t?" from "+t:""))})};var E=k.resolve=l("resolve"),O=k.resolveInstantiate=l("resolveInstantiate");function S(e){if(void 0===e)throw new RangeError("No resolution found.");return e}k.prototype[O]=function(e,t){var r=this;return r.resolve(e,t).then(function(e){return r.registry.get(e)})},k.prototype.resolve=function(e,t){var r=this;return b.then(function(){return r[E](e,t)}).then(S).catch(function(r){throw h(r,"Resolving "+e+(t?" to "+t:""))})};var j="undefined"!=typeof Symbol&&Symbol.iterator,P=l("registry");function _(){this[P]={}}j&&(_.prototype[Symbol.iterator]=function(){return this.entries()[Symbol.iterator]()},_.prototype.entries=function(){var e=this[P];return w(Object.keys(e).map(function(t){return[t,e[t]]}))}),_.prototype.keys=function(){return w(Object.keys(this[P]))},_.prototype.values=function(){var e=this[P];return w(Object.keys(e).map(function(t){return e[t]}))},_.prototype.get=function(e){return this[P][e]},_.prototype.set=function(e,t){if(!(t instanceof M||"module"===t[d]))throw new Error("Registry must be set with an instance of Module Namespace");return this[P][e]=t,this},_.prototype.has=function(e){return Object.hasOwnProperty.call(this[P],e)},_.prototype.delete=function(e){return!!Object.hasOwnProperty.call(this[P],e)&&(delete this[P][e],!0)};var R=l("baseObject");function M(e){Object.defineProperty(this,R,{value:e}),Object.keys(e).forEach(C,this)}function C(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[R][e]}})}M.prototype=Object.create(null),d&&Object.defineProperty(M.prototype,d,{value:"Module"});var L=Promise.resolve(),A=l("register-internal");function K(){k.call(this);var e=this.registry.delete;this.registry.delete=function(r){var n=e.call(this,r);return t.hasOwnProperty(r)&&!t[r].linkRecord&&(delete t[r],n=!0),n};var t={};this[A]={lastRegister:void 0,records:t},this.trace=!1}K.prototype=Object.create(k.prototype),K.prototype.constructor=K;var I=K.instantiate=l("instantiate");function D(e,t,r){return e.records[t]={key:t,registration:r,module:void 0,importerSetters:void 0,loadError:void 0,evalError:void 0,linkRecord:{instantiatePromise:void 0,dependencies:void 0,execute:void 0,executingRequire:!1,moduleObj:void 0,setters:void 0,depsInstantiatePromise:void 0,dependencyInstantiations:void 0,evaluatePromise:void 0}}}function F(e,t,r,n,o){return r.instantiatePromise||(r.instantiatePromise=(t.registration?L:L.then(function(){return o.lastRegister=void 0,e[I](t.key,e[I].length>1&&function(e,t,r){return function(){var e=r.lastRegister;return e?(r.lastRegister=void 0,t.registration=e,!0):!!t.registration}}(0,t,o))})).then(function(i){if(void 0!==i){if(!(i instanceof M||"module"===i[d]))throw new TypeError("Instantiate did not return a valid Module object.");return delete o.records[t.key],e.trace&&U(e,t,r),n[t.key]=i}var a=t.registration;if(t.registration=void 0,!a)throw new TypeError("Module instantiation did not call an anonymous or correctly named System.register.");return r.dependencies=a[0],t.importerSetters=[],r.moduleObj={},a[2]?(r.moduleObj.default=r.moduleObj.__useDefault={},r.executingRequire=a[1],r.execute=a[2]):function(e,t,r,n){var o=r.moduleObj,i=t.importerSetters,a=!1,u=n.call(s,function(e,t){if("object"==typeof e){var r=!1;for(var n in e)t=e[n],"__useDefault"===n||n in o&&o[n]===t||(r=!0,o[n]=t);if(!1===r)return t}else{if((a||e in o)&&o[e]===t)return t;o[e]=t}for(var s=0;s<i.length;s++)i[s](o);return t},new T(e,t.key));r.setters=u.setters||[],r.execute=u.execute,u.exports&&(r.moduleObj=o=u.exports,a=!0)}(e,t,r,a[1]),t}).catch(function(e){throw t.linkRecord=void 0,t.loadError=t.loadError||h(e,"Instantiating "+t.key)}))}function q(e,t,r,n,o,i){return e.resolve(t,r).then(function(r){i&&(i[t]=r);var a=o.records[r],s=n[r];if(s&&(!a||a.module&&s!==a.module))return s;if(a&&a.loadError)throw a.loadError;(!a||!s&&a.module)&&(a=D(o,r,a&&a.registration));var u=a.linkRecord;return u?F(e,a,u,n,o):a})}function U(e,t,r){e.loads=e.loads||{},e.loads[t.key]={key:t.key,deps:r.dependencies,dynamicDeps:[],depMap:r.depMap||{}}}function T(e,t){this.loader=e,this.key=this.id=t,this.meta={url:t}}function z(e,t){e.linkRecord=void 0;var r=h(t,"Evaluating "+e.key);throw void 0===e.evalError&&(e.evalError=r),r}function J(e,t,r,n,o,i){for(var a,s,u=0;u<r.dependencies.length;u++){var l;if(!((l=r.dependencyInstantiations[u])instanceof M||"module"===l[d])&&(a=l.linkRecord))if(l.evalError)z(t,l.evalError);else if(a.setters){if(-1===i.indexOf(l)){i.push(l);try{var c=J(e,l,a,n,o,i)}catch(p){z(t,p)}c&&(s=s||[]).push(c.catch(function(e){z(t,e)}))}}else try{N(e,l,a,n,o,[l])}catch(p){z(t,p)}}if(s)return r.evaluatePromise=Promise.all(s).then(function(){if(r.execute){try{var e=r.execute.call($)}catch(p){z(t,p)}if(e)return e.catch(function(e){z(t,e)}).then(function(){return t.linkRecord=void 0,n[t.key]=t.module=new M(r.moduleObj)})}t.linkRecord=void 0,n[t.key]=t.module=new M(r.moduleObj)});if(r.execute){try{var f=r.execute.call($)}catch(p){z(t,p)}if(f)return r.evaluatePromise=f.catch(function(e){z(t,e)}).then(function(){return t.linkRecord=void 0,n[t.key]=t.module=new M(r.moduleObj)})}t.linkRecord=void 0,n[t.key]=t.module=new M(r.moduleObj)}function N(e,t,r,n,o,i){var a={id:t.key},u=r.moduleObj;Object.defineProperty(a,"exports",{configurable:!0,set:function(e){u.default=u.__useDefault=e},get:function(){return u.__useDefault}});var l=function(e,t,r,n,o,i,a){return function(s){for(var u=0;u<r.length;u++)if(r[u]===s){var l,c=n[u];if(c instanceof M||"module"===c[d])l=c;else{if(c.evalError)throw c.evalError;void 0!==c.module||-1!==a.indexOf(c)||c.linkRecord.evaluatePromise||(c.linkRecord.setters?J(e,c,c.linkRecord,o,i,[c]):(a.push(c),N(e,c,c.linkRecord,o,i,a))),l=c.module||c.linkRecord.moduleObj}return"__useDefault"in l?l.__useDefault:l}throw new Error("Module "+s+" not declared as a System.registerDynamic dependency of "+t)}}(e,t.key,r.dependencies,r.dependencyInstantiations,n,o,i);if(!r.executingRequire)for(var c=0;c<r.dependencies.length;c++)l(r.dependencies[c]);try{var f=r.execute.call(s,l,u.default,a);void 0!==f&&(a.exports=f)}catch(h){z(t,h)}t.linkRecord=void 0,a.exports!==u.__useDefault&&(u.default=u.__useDefault=a.exports);var p=u.default;if(p&&p.__esModule)for(var g in p)Object.hasOwnProperty.call(p,g)&&(u[g]=p[g]);if(n[t.key]=t.module=new M(r.moduleObj),t.importerSetters)for(c=0;c<t.importerSetters.length;c++)t.importerSetters[c](t.module);t.importerSetters=void 0}K.prototype[K.resolve=k.resolve]=function(e,t){return y(e,t||c)},K.prototype[I]=function(e,t){},K.prototype[k.resolveInstantiate]=function(e,t){var r=this,n=this[A],o=this.registry[P];return function(e,t,r,n,o){var i=n[t];if(i)return Promise.resolve(i);var a=o.records[t];if(a&&!a.module)return a.loadError?Promise.reject(a.loadError):F(e,a,a.linkRecord,n,o);return e.resolve(t,r).then(function(t){if(i=n[t])return i;if((a=o.records[t])&&!a.module||(a=D(o,t,a&&a.registration)),a.loadError)return Promise.reject(a.loadError);var r=a.linkRecord;return r?F(e,a,r,n,o):a})}(r,e,t,o,n).then(function(e){if(e instanceof M||"module"===e[d])return e;var t=e.linkRecord;if(!t){if(e.module)return e.module;throw e.evalError}return function(e,t,r,n,o){var i=[];return function t(r,a){if(!a)return L;if(-1!==i.indexOf(r))return L;i.push(r);return function(e,t,r,n,o){if(r.depsInstantiatePromise)return r.depsInstantiatePromise;for(var i=Array(r.dependencies.length),a=0;a<r.dependencies.length;a++)i[a]=q(e,r.dependencies[a],t.key,n,o,e.trace&&r.depMap||(r.depMap={}));var s=Promise.all(i).then(function(e){if(r.dependencyInstantiations=e,r.setters)for(var n=0;n<e.length;n++){var o=r.setters[n];if(o){var i=e[n];if(i instanceof M||"module"===i[d])o(i);else{if(i.loadError)throw i.loadError;o(i.module||i.linkRecord.moduleObj),i.importerSetters&&i.importerSetters.push(o)}}}return t});e.trace&&(s=s.then(function(){return U(e,t,r),t}));return(s=s.catch(function(e){throw r.depsInstantiatePromise=void 0,h(e,"Loading "+t.key)})).catch(function(){}),r.depsInstantiatePromise=s}(e,r,a,n,o).then(function(){for(var e,r=0;r<a.dependencies.length;r++){var n=a.dependencyInstantiations[r];n instanceof M||"module"===n[d]||(e=e||[]).push(t(n,n.linkRecord))}if(e)return Promise.all(e)})}(t,r)}(r,e,t,o,n).then(function(){return function(e,t,r,n,o){if(t.module)return t.module;if(t.evalError)throw t.evalError;if(r.evaluatePromise)return r.evaluatePromise;if(r.setters){var i=J(e,t,r,n,o,[t]);if(i)return i}else N(e,t,r,n,o,[t]);return t.module}(r,e,t,o,n)})})},K.prototype.register=function(e,t,r){var n=this[A];void 0===r?n.lastRegister=[e,t,void 0]:(n.records[e]||D(n,e,void 0)).registration=[t,r,void 0]},K.prototype.registerDynamic=function(e,t,r,n){var o=this[A];"string"!=typeof e?o.lastRegister=[e,t,r]:(o.records[e]||D(o,e,void 0)).registration=[t,r,n]},T.prototype.import=function(e){return this.loader.trace&&this.loader.loads[this.key].dynamicDeps.push(e),this.loader.import(e,this.key)};var $=Object.create(null);Object.freeze&&Object.freeze($);var W=Promise.resolve();function B(){}var G=new M({});var H,Z=l("loader-config"),X=l("metadata"),Y="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts;function Q(e,t){(t||this.warnings&&"undefined"!=typeof console&&console.warn)&&console.warn(e)}function V(e,t){for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function ee(e,t){for(var r in t)Object.hasOwnProperty.call(t,r)&&void 0===e[r]&&(e[r]=t[r]);return e}function te(e,t,r){for(var n in t)if(Object.hasOwnProperty.call(t,n)){var o=t[n];void 0===e[n]?e[n]=o:o instanceof Array&&e[n]instanceof Array?e[n]=[].concat(r?o:e[n]).concat(r?e[n]:o):"object"==typeof o&&null!==o&&"object"==typeof e[n]?e[n]=(r?ee:V)(V({},e[n]),o):r||(e[n]=o)}}var re=!1,ne=!1;function oe(e){if(re||ne){var t=document.createElement("link");re?(t.rel="preload",t.as="script"):t.rel="prefetch",t.href=e,document.head.appendChild(t)}else{(new Image).src=e}}if(e&&function(){var e=document.createElement("link").relList;if(e&&e.supports){ne=!0;try{re=e.supports("preload")}catch(t){}}}(),e){var ie=window.onerror;window.onerror=function(e,t){ie&&ie.apply(this,arguments)}}function ae(e,t,r,n,o){if(e=e.replace(/#/g,"%23"),Y)return function(e,t,r){try{importScripts(e)}catch(n){r(n)}t()}(e,n,o);var i=document.createElement("script");function a(){n(),u()}function s(t){u(),o(new Error("Fetching "+e))}function u(){i.removeEventListener("load",a,!1),i.removeEventListener("error",s,!1),document.head.removeChild(i)}i.type="text/javascript",i.charset="utf-8",i.async=!0,t&&(i.crossOrigin=t),r&&(i.integrity=r),i.addEventListener("load",a,!1),i.addEventListener("error",s,!1),i.src=e,document.head.appendChild(i)}function se(e,t){for(var r=e.split(".");r.length;)t=t[r.shift()];return t}function ue(e,t,r){var n=ce(t,r);if(n){var o=t[n]+r.substr(n.length),i=y(o,c);return void 0!==i?i:e+o}return-1!==r.indexOf(":")?r:e+r}function le(e){var t=this.name;if(t.substr(0,e.length)===e&&(t.length===e.length||"/"===t[e.length]||"/"===e[e.length-1]||":"===e[e.length-1])){var r=e.split("/").length;r>this.len&&(this.match=e,this.len=r)}}function ce(e,t){if(Object.hasOwnProperty.call(e,t))return t;var r={name:t,match:void 0,len:0};return Object.keys(e).forEach(le,r),r.match}var de,fe=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`)\s*\)/g;function pe(e,t,r,n){if("file:///"===e.substr(0,8)){if(he)return ge(e,t,r,n);throw new Error("Unable to fetch file URLs in this environment.")}e=e.replace(/#/g,"%23");var o={headers:{Accept:"application/x-es-module, */*"}};return r&&(o.integrity=r),t&&("string"==typeof t&&(o.headers.Authorization=t),o.credentials="include"),fetch(e,o).then(function(e){if(e.ok)return n?e.arrayBuffer():e.text();throw new Error("Fetch error: "+e.status+" "+e.statusText)})}function ge(e,t,r,n){return new Promise(function(r,o){e=e.replace(/#/g,"%23");var i=new XMLHttpRequest;function a(){r(n?i.response:i.responseText)}function s(){o(new Error("XHR error: "+(i.status?" ("+i.status+(i.statusText?" "+i.statusText:"")+")":"")+" loading "+e))}n&&(i.responseType="arraybuffer"),i.onreadystatechange=function(){4===i.readyState&&(0==i.status?i.response?a():(i.addEventListener("error",s),i.addEventListener("load",a)):200===i.status?a():s())},i.open("GET",e,!0),i.setRequestHeader&&(i.setRequestHeader("Accept","application/x-es-module, */*"),t&&("string"==typeof t&&i.setRequestHeader("Authorization",t),i.withCredentials=!0)),i.send(null)})}var he="undefined"!=typeof XMLHttpRequest,me="undefined"!=typeof fetch,ve="undefined"!=typeof self&&void 0!==self.fetch?pe:he?ge:"undefined"!=typeof require&&void 0!==t?function(e,t,r,n){return"file:///"!=e.substr(0,8)?me?pe(e,t,r,n):Promise.reject(new Error('Unable to fetch "'+e+'". Only file URLs of the form file:/// supported running in Node without fetch.')):(de=de||require("fs"),e=a?e.replace(/\//g,"\\").substr(8):e.substr(7),new Promise(function(t,r){de.readFile(e,function(e,o){if(e)return r(e);if(n)t(o);else{var i=o+"";"\ufeff"===i[0]&&(i=i.substr(1)),t(i)}})}))}:function(){throw new Error("No fetch method is defined for this environment.")};function ye(e,t,r){var n,o={pluginKey:void 0,pluginArgument:void 0,pluginModule:void 0,packageKey:void 0,packageConfig:void 0,load:void 0};r&&(t.pluginFirst?-1!==(n=r.lastIndexOf("!"))&&(o.pluginArgument=o.pluginKey=r.substr(0,n)):-1!==(n=r.indexOf("!"))&&(o.pluginArgument=o.pluginKey=r.substr(n+1)),o.packageKey=ce(t.packages,r),o.packageKey&&(o.packageConfig=t.packages[o.packageKey]));return o}function be(e,t){var r=Oe(e.pluginFirst,t);if(r){var n=be.call(this,e,r.plugin);return Se(e.pluginFirst,we.call(this,e,r.argument,void 0,!1,!1),n)}return we.call(this,e,t,void 0,!1,!1)}function we(e,t,r,n,o){var i=y(t,r||c);if(i)return ue(e.baseURL,e.paths,i);if(n){var a=ce(e.map,t);if(a&&(i=y(t=e.map[a]+t.substr(a.length),c)))return ue(e.baseURL,e.paths,i)}if(this.registry.has(t))return t;if("@node/"===t.substr(0,6))return t;var s=o&&"/"!==t[t.length-1],u=ue(e.baseURL,e.paths,s?t+"/":t);return s?u.substr(0,u.length-1):u}function ke(e,t,r,n,o,i){if(o&&o.packageConfig&&"."!==t[0]){var a=o.packageConfig.map,s=a&&ce(a,t);if(s&&"string"==typeof a[s]){var u=_e(this,e,o.packageConfig,o.packageKey,s,t,n,i);if(u)return u}}var l=we.call(this,e,t,r,!0,!0),c=Ce(e,l);if(n.packageKey=c&&c.packageKey||ce(e.packages,l),!n.packageKey)return l;if(-1!==e.packageConfigKeys.indexOf(l))return n.packageKey=void 0,l;n.packageConfig=e.packages[n.packageKey]||(e.packages[n.packageKey]=ze());var d=l.substr(n.packageKey.length+1);return function(e,t,r,n,o,i,a){if(!o){if(!r.main)return n;o="./"===r.main.substr(0,2)?r.main.substr(2):r.main}if(r.map){var s="./"+o,u=ce(r.map,s);if(u||(s="./"+je(t,r,n,o,a))!=="./"+o&&(u=ce(r.map,s)),u){var l=_e(e,t,r,n,u,s,i,a);if(l)return l}}return n+"/"+je(t,r,n,o,a)}(this,e,n.packageConfig,n.packageKey,d,n,i)}function xe(e,t,r,n,o,i){var a=this;return W.then(function(){if(o&&o.packageConfig&&"./"!==t.substr(0,2)){var r=o.packageConfig.map,s=r&&ce(r,t);if(s)return Re(a,e,o.packageConfig,o.packageKey,s,t,n,i)}return W}).then(function(o){if(o)return o;var s=we.call(a,e,t,r,!0,!0),u=Ce(e,s);return n.packageKey=u&&u.packageKey||ce(e.packages,s),n.packageKey?-1!==e.packageConfigKeys.indexOf(s)?(n.packageKey=void 0,n.load=Ee(),n.load.format="json",n.load.loader="",Promise.resolve(s)):(n.packageConfig=e.packages[n.packageKey]||(e.packages[n.packageKey]=ze()),(u&&!n.packageConfig.configured?function(e,t,r,n,o){var i=e.pluginLoader||e;-1===t.packageConfigKeys.indexOf(r)&&t.packageConfigKeys.push(r);return i.import(r).then(function(e){Je(n.packageConfig,e,n.packageKey,!0,t),n.packageConfig.configured=!0}).catch(function(e){throw h(e,"Unable to fetch package configuration file "+r)})}(a,e,u.configPath,n):W).then(function(){var t=s.substr(n.packageKey.length+1);return function(e,t,r,n,o,i,a){if(!o){if(!r.main)return Promise.resolve(n);o="./"===r.main.substr(0,2)?r.main.substr(2):r.main}var s,u;r.map&&(s="./"+o,(u=ce(r.map,s))||(s="./"+je(t,r,n,o,a))!=="./"+o&&(u=ce(r.map,s)));return(u?Re(e,t,r,n,u,s,i,a):W).then(function(e){return e?Promise.resolve(e):Promise.resolve(n+"/"+je(t,r,n,o,a))})}(a,e,n.packageConfig,n.packageKey,t,n,i)})):Promise.resolve(s)})}function Ee(){return{extension:"",deps:void 0,format:void 0,loader:void 0,scriptLoad:void 0,globals:void 0,nonce:void 0,integrity:void 0,sourceMap:void 0,exports:void 0,encapsulateGlobal:!1,crossOrigin:void 0,cjsRequireDetection:!0,cjsDeferDepsExecute:!1,esModule:!1}}function Oe(e,t){var r,n,o=e?t.indexOf("!"):t.lastIndexOf("!");if(-1!==o)return e?(r=t.substr(o+1),n=t.substr(0,o)):(r=t.substr(0,o),n=t.substr(o+1)||r.substr(r.lastIndexOf(".")+1)),{argument:r,plugin:n}}function Se(e,t,r){return e?r+"!"+t:t+"!"+r}function je(e,t,r,n,o){if(!n||!t.defaultExtension||"/"===n[n.length-1]||o)return n;var i=!1;if(t.meta&&Le(t.meta,n,function(e,t,r){if(0===r||e.lastIndexOf("*")!==e.length-1)return i=!0}),!i&&e.meta&&Le(e.meta,r+"/"+n,function(e,t,r){if(0===r||e.lastIndexOf("*")!==e.length-1)return i=!0}),i)return n;var a="."+t.defaultExtension;return n.substr(n.length-a.length)!==a?n+a:n}function Pe(e,t,r){return!(t.substr(0,e.length)===e&&r.length>e.length)}function _e(e,t,r,n,o,i,a,s){"/"===i[i.length-1]&&(i=i.substr(0,i.length-1));var u=r.map[o];if("object"==typeof u)throw new Error("Synchronous conditional normalization not supported sync normalizing "+o+" in "+n);if(Pe(o,u,i)&&"string"==typeof u)return ke.call(e,t,u+i.substr(o.length),n+"/",a,a,s)}function Re(e,t,r,n,o,i,a,s){"/"===i[i.length-1]&&(i=i.substr(0,i.length-1));var u=r.map[o];if("string"==typeof u)return Pe(o,u,i)?xe.call(e,t,u+i.substr(o.length),n+"/",a,a,s).then(function(t){return Fe.call(e,t,n+"/",a)}):W;var l=[],c=[];for(var d in u){var f=Ke(d);c.push({condition:f,map:u[d]}),l.push(K.prototype.import.call(e,f.module,n))}return Promise.all(l).then(function(e){for(var t=0;t<c.length;t++){var r=c[t].condition,n=se(r.prop,"__useDefault"in e[t]?e[t].__useDefault:e[t]);if(!r.negate&&n||r.negate&&!n)return c[t].map}}).then(function(r){if(r)return Pe(o,r,i)?xe.call(e,t,r+i.substr(o.length),n+"/",a,a,s).then(function(t){return Fe.call(e,t,n+"/",a)}):W})}var Me={};function Ce(e,t){for(var r,n,o,i,a,s=!1,u=0;u<e.packageConfigPaths.length;u++){var l=e.packageConfigPaths[u],c=Me[l]||(Me[l]=(i=void 0,a=void 0,i=(o=l).lastIndexOf("*"),{length:a=Math.max(i+1,o.lastIndexOf("/")),regEx:new RegExp("^("+o.substr(0,a).replace(/[.+?^${}()|[\]\\]/g,"\\$&").replace(/\*/g,"[^\\/]+")+")(\\/|$)"),wildcard:-1!==i}));if(!(t.length<c.length)){var d=t.match(c.regEx);!d||r&&(s&&c.wildcard||!(r.length<d[1].length))||(r=d[1],s=!c.wildcard,n=r+l.substr(c.length))}}if(r)return{packageKey:r,configPath:n}}function Le(e,t,r){var n;for(var o in e){var i="./"===o.substr(0,2)?"./":"";if(i&&(o=o.substr(2)),-1!==(n=o.indexOf("*"))&&o.substr(0,n)===t.substr(0,n)&&o.substr(n+1)===t.substr(t.length-o.length+n+1)&&r(o,e[i+o],o.split("/").length))return}var a=e[t]&&Object.hasOwnProperty.call(e,t)?e[t]:e["./"+t];a&&r(a,a,0)}var Ae=["browser","node","dev","build","production","default"];function Ke(e){var t,r,n,o=e.lastIndexOf("|");return-1!==o?(t=e.substr(o+1),r=e.substr(0,o),"~"===t[0]&&(n=!0,t=t.substr(1))):(n="~"===e[0],t="default",r=e.substr(n),-1!==Ae.indexOf(r)&&(t=r,r=null)),{module:r||"@system-env",prop:t,negate:n}}function Ie(e,t,r){return K.prototype.import.call(this,e.module,t).then(function(t){var n=se(e.prop,t);if(r&&"boolean"!=typeof n)throw new TypeError("Condition did not resolve to a boolean.");return e.negate?!n:n})}var De=/#\{[^\}]+\}/;function Fe(e,t,r){var n=e.match(De);if(!n)return Promise.resolve(e);var o=Ke.call(this,n[0].substr(2,n[0].length-3));return Ie.call(this,o,t,!1).then(function(r){if("string"!=typeof r)throw new TypeError("The condition value for "+e+" doesn't resolve to a string.");if(-1!==r.indexOf("/"))throw new TypeError("Unabled to interpolate conditional "+e+(t?" in "+t:"")+"\n\tThe condition value "+r+' cannot contain a "/" separator.');return e.replace(De,r)})}var qe=["browserConfig","nodeConfig","devConfig","buildConfig","productionConfig"];function Ue(e,t,r){for(var n=0;n<qe.length;n++){var o=qe[n];t[o]&&Dt[o.substr(0,o.length-6)]&&r(t[o])}}function Te(e,t){var r=e[t];return r instanceof Array?e[t].concat([]):"object"==typeof r?function e(t,r){var n={};for(var o in t){var i=t[o];r>1?i instanceof Array?n[o]=[].concat(i):"object"==typeof i?n[o]=e(i,r-1):"packageConfig"!==o&&(n[o]=i):n[o]=i}return n}(r,3):e[t]}function ze(){return{defaultExtension:void 0,main:void 0,format:void 0,meta:void 0,map:void 0,packageConfig:void 0,configured:!1}}function Je(e,t,r,n,o){for(var i in t)"main"===i||"format"===i||"defaultExtension"===i||"configured"===i?n&&void 0!==e[i]||(e[i]=t[i]):"map"===i?(n?ee:V)(e.map=e.map||{},t.map):"meta"===i?(n?ee:V)(e.meta=e.meta||{},t.meta):Object.hasOwnProperty.call(t,i)&&Q.call(o,'"'+i+'" is not a valid package configuration option in package '+r);return void 0===e.defaultExtension&&(e.defaultExtension="js"),void 0===e.main&&e.map&&e.map["."]?(e.main=e.map["."],delete e.map["."]):"object"==typeof e.main&&(e.map=e.map||{},e.map["./@main"]=e.main,e.main.default=e.main.default||"./",e.main="@main"),e}var Ne=void 0!==n;try{Ne&&"YQ=="!==new n("a").toString("base64")&&(Ne=!1)}catch(Zt){Ne=!1}var $e,We,Be,Ge,He="\n//# sourceMappingURL=data:application/json;base64,";function Ze(e,t,r,o){var i,a=e.lastIndexOf("\n");if(t){if("object"!=typeof t)throw new TypeError("load.metadata.sourceMap must be set to an object.");t=JSON.stringify(t)}return(o?"(function(System, SystemJS) {":"")+e+(o?"\n})(System, System);":"")+("\n//# sourceURL="!=e.substr(a,15)?"\n//# sourceURL="+r+(t?"!transpiled":""):"")+(t&&(i=t,Ne?He+new n(i).toString("base64"):"undefined"!=typeof btoa?He+btoa(unescape(encodeURIComponent(i))):"")||"")}var Xe=0;function Ye(e){0==Xe++&&(Ge=s.System),s.System=s.SystemJS=e}function Qe(){0==--Xe&&(s.System=s.SystemJS=Ge)}var Ve,et=!1;function tt(e,t,r,n,o,i,a){if(t){if(i&&et)return function(e,t,r,n,o){$e||($e=document.head||document.body||document.documentElement);var i=document.createElement("script");i.text=Ze(t,r,n,!1);var a,s=window.onerror;if(window.onerror=function(e){a=addToError(e,"Evaluating "+n),s&&s.apply(this,arguments)},Ye(e),o&&i.setAttribute("nonce",o),$e.appendChild(i),$e.removeChild(i),Qe(),window.onerror=s,a)return a}(e,t,r,n,i);try{Ye(e),!We&&e._nodeRequire&&(We=e._nodeRequire("vm"),Be=We.runInThisContext("typeof System !== 'undefined' && System")===e),Be?We.runInThisContext(Ze(t,r,n,!a),{filename:n+(r?"!transpiled":"")}):(0,eval)(Ze(t,r,n,!a)),Qe()}catch(Zt){return Qe(),Zt}}}function rt(e){function t(r,n,o,i){if("object"==typeof r&&!(r instanceof Array))return t.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof r&&"function"==typeof n&&(r=[r]),!(r instanceof Array)){if("string"==typeof r){var a=e.decanonicalize(r,i),s=e.get(a);if(!s)throw new Error('Module not already loaded loading "'+r+'" as '+a+(i?' from "'+i+'".':"."));return"__useDefault"in s?s.__useDefault:s}throw new TypeError("Invalid require")}for(var u=[],l=0;l<r.length;l++)u.push(e.import(r[l],i));Promise.all(u).then(function(e){n&&n.apply(null,e)},o)}function r(r,n,o){var i,a,u;function l(r,l,c){for(var d=[],f=0;f<n.length;f++)d.push(r(n[f]));if(c.uri=c.id,c.config=B,-1!==u&&d.splice(u,0,c),-1!==a&&d.splice(a,0,l),-1!==i){var p=function(n,o,i){return"string"==typeof n&&"function"!=typeof o?r(n):t.call(e,n,o,i,c.id)};p.toUrl=function(t){return e.normalizeSync(t,c.id)},d.splice(i,0,p)}var g=s.require;s.require=t;var h=o.apply(-1===a?s:l,d);s.require=g,void 0!==h&&(c.exports=h)}"string"!=typeof r&&(o=n,n=r,r=null),n instanceof Array||(n=["require","exports","module"].splice(0,(o=n).length)),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),r||wt&&(n=n.concat(wt),wt=void 0),-1!==(i=n.indexOf("require"))&&(n.splice(i,1),r||(n=n.concat(function(e,t){var r=((e=e.replace(at,"")).match(ht)[1].split(",")[t]||"require").replace(mt,""),n=vt[r]||(vt[r]=new RegExp(pt+r+gt,"g"));n.lastIndex=0;var o,i=[];for(;o=n.exec(e);)i.push(o[2]||o[3]);return i}(o.toString(),i)))),-1!==(a=n.indexOf("exports"))&&n.splice(a,1),-1!==(u=n.indexOf("module"))&&n.splice(u,1),r?(e.registerDynamic(r,n,!1,l),bt?(bt=void 0,kt=!0):kt||(bt=[n,l])):e.registerDynamic(n,!1,xt?yt(l):l)}r.amd={},e.amdDefine=r,e.amdRequire=t}function nt(e){return"file:///"===e.substr(0,8)?e.substr(7+!!a):Ve&&e.substr(0,Ve.length)===Ve?e.substr(Ve.length):e}function ot(e,t){return nt(this.normalizeSync(e,t))}function it(e){var t,r=e.lastIndexOf("!"),n=(t=-1!==r?e.substr(0,r):e).split("/");return n.pop(),n=n.join("/"),{filename:nt(t),dirname:nt(n)}}e&&"undefined"!=typeof document&&document.getElementsByTagName&&(window.chrome&&window.chrome.extension||navigator.userAgent.match(/^Node\.js/)||(et=!0)),"undefined"!=typeof window&&"undefined"!=typeof document&&window.location&&(Ve=location.protocol+"//"+location.hostname+(location.port?":"+location.port:""));var at=/(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,st=/("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g;var ut,lt=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","mozPaintCount","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];function ct(e){if(-1===lt.indexOf(e)){try{var t=s[e]}catch(Zt){lt.push(e)}this(e,t)}}function dt(e){if("string"==typeof e)return se(e,s);if(!(e instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},r=0;r<e.length;r++)t[e[r].split(".").pop()]=se(e[r],s);return t}function ft(e,t,r,n){var o,i=s.define;if(s.define=void 0,r)for(var a in o={},r)o[a]=s[a],s[a]=r[a];return t||(ut={},Object.keys(s).forEach(ct,function(e,t){ut[e]=t})),function(){var e,r=t?dt(t):{},a=!!t;if(t&&!n||Object.keys(s).forEach(ct,function(o,i){ut[o]!==i&&void 0!==i&&(n&&(s[o]=void 0),t||(r[o]=i,void 0!==e?a||e===i||(a=!0):e=i))}),r=a?r:e,o)for(var u in o)s[u]=o[u];return s.define=i,r}}var pt="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",gt="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",ht=/\(([^\)]*)\)/,mt=/^\s+|\s+$/g,vt={};function yt(e){return function(t,r,n){e(t,r,n),"object"!=typeof(r=n.exports)&&"function"!=typeof r||"__esModule"in r||Object.defineProperty(n.exports,"__esModule",{value:!0})}}var bt,wt,kt=!1,xt=!1;var Et,Ot=(e||Y)&&"undefined"!=typeof navigator&&navigator.userAgent&&!navigator.userAgent.match(/MSIE (9|10).0/);function St(e,t){!e.load.esModule||"object"!=typeof t&&"function"!=typeof t||"__esModule"in t||Object.defineProperty(t,"__esModule",{value:!0})}function jt(e,t,r,n,o){return Promise.resolve(r).then(function(t){return"detect"===n.load.format&&(n.load.format=void 0),function(e,t){var r=e.match(Ft);if(!r)return;for(var n=r[0].match(qt),o=0;o<n.length;o++){var i=n[o],a=i.length,s=i.substr(0,1);if(";"==i.substr(a-1,1)&&a--,'"'==s||"'"==s){var u=i.substr(1,i.length-3),l=u.substr(0,u.indexOf(" "));if(l){var c=u.substr(l.length+1,u.length-l.length-1);"deps"===l&&(l="deps[]"),"[]"===l.substr(l.length-2,2)?(l=l.substr(0,l.length-2),t.load[l]=t.load[l]||[],t.load[l].push(c)):"use"!==l&&Ut(t.load,l,c)}else t.load[u]=!0}}}(t,n),n.pluginModule?(n.pluginLoad.source=t,n.pluginModule.translate?Promise.resolve(n.pluginModule.translate.call(e,n.pluginLoad,n.traceOpts)).then(function(e){if(n.load.sourceMap){if("object"!=typeof n.load.sourceMap)throw new Error("metadata.load.sourceMap must be set to an object.");Kt(n.pluginLoad.address,n.load.sourceMap)}return"string"==typeof e?e:n.pluginLoad.source}):t):t}).then(function(r){return n.load.format||'"bundle"'!==r.substring(0,8)?"register"===n.load.format||!n.load.format&&Mt(r)?(n.load.format="register",r):"esm"===n.load.format||!n.load.format&&r.match(_t)?(n.load.format="esm",function(e,t,r,n,o){if(!e.transpiler)throw new TypeError("Unable to dynamically transpile ES module\n   A loader plugin needs to be configured via `SystemJS.config({ transpiler: 'transpiler-module' })`.");if(n.load.deps){for(var i="",a=0;a<n.load.deps.length;a++)i+='import "'+n.load.deps[a]+'"; ';t=i+t}return e.import.call(e,e.transpiler).then(function(o){if(!(o=o.__useDefault||o).translate)throw new Error(e.transpiler+" is not a valid transpiler plugin.");return o===n.pluginModule?t:("string"==typeof n.load.sourceMap&&(n.load.sourceMap=JSON.parse(n.load.sourceMap)),n.pluginLoad=n.pluginLoad||{name:r,address:r,source:t,metadata:n.load},n.load.deps=n.load.deps||[],Promise.resolve(o.translate.call(e,n.pluginLoad,n.traceOpts)).then(function(e){var t=n.load.sourceMap;return t&&"object"==typeof t&&Kt(r,t),"esm"===n.load.format&&Mt(e)&&(n.load.format="register"),e}))},function(e){throw h(e,"Unable to load transpiler to transpile "+r)})}(e,r,t,n)):r:(n.load.format="system",r)}).then(function(t){if("string"!=typeof t||!n.pluginModule||!n.pluginModule.instantiate)return t;var r=!1;return n.pluginLoad.source=t,Promise.resolve(n.pluginModule.instantiate.call(e,n.pluginLoad,function(e){if(t=e.source,n.load=e.metadata,r)throw new Error("Instantiate must only be called once.");r=!0})).then(function(e){return r?t:function(e){if(e){if(e instanceof M||"module"===e[d])return e;if(e.__esModule)return new M(e)}return new M({default:e,__useDefault:e})}(e)})}).then(function(r){if("string"!=typeof r)return r;n.load.format||(n.load.format=function(e){return e.match(Ct)?"amd":(Lt.lastIndex=0,fe.lastIndex=0,fe.exec(e)||Lt.exec(e)?"cjs":"global")}(r));var i=!1;switch(n.load.format){case"esm":case"register":case"system":if(l=tt(e,r,n.load.sourceMap,t,n.load.integrity,n.load.nonce,!1))throw l;return o()?void 0:G;case"json":var a=JSON.parse(r);return e.newModule({default:a,__useDefault:a});case"amd":var u=s.define;s.define=e.amdDefine,function(e,t){wt=e,xt=t,bt=void 0,kt=!1}(n.load.deps,n.load.esModule);var l=tt(e,r,n.load.sourceMap,t,n.load.integrity,n.load.nonce,!1);if((i=o())||(!function(e){bt?e.registerDynamic(wt?bt[0].concat(wt):bt[0],!1,xt?yt(bt[1]):bt[1]):kt&&e.registerDynamic([],!1,B)}(e),i=o()),s.define=u,l)throw l;break;case"cjs":var c=n.load.deps,d=(n.load.deps||[]).concat(n.load.cjsRequireDetection?function(e){fe.lastIndex=at.lastIndex=st.lastIndex=0;var t,r=[],n=[],o=[];function i(e,t){for(var r=0;r<e.length;r++)if(e[r][0]<t.index&&e[r][1]>t.index)return!0;return!1}if(e.length/e.split("\n").length<200){for(;t=st.exec(e);)n.push([t.index,t.index+t[0].length]);for(;t=at.exec(e);)i(n,t)||o.push([t.index+t[1].length,t.index+t[0].length-1])}for(;t=fe.exec(e);)if(!i(n,t)&&!i(o,t)){var a=t[1].substr(1,t[1].length-2);if(a.match(/"|'/))continue;r.push(a)}return r}(r):[]);for(var f in n.load.globals)n.load.globals[f]&&d.push(n.load.globals[f]);e.registerDynamic(d,!0,function(o,i,a){if(o.resolve=function(t){return ot.call(e,t,a.id)},a.paths=[],a.require=o,!n.load.cjsDeferDepsExecute&&c)for(var u=0;u<c.length;u++)o(c[u]);var l=it(a.id),d={exports:i,args:[o,i,a,l.filename,l.dirname,s,s]},f="(function (require, exports, module, __filename, __dirname, global, GLOBAL";if(n.load.globals)for(var p in n.load.globals)d.args.push(o(n.load.globals[p])),f+=", "+p;var g=s.define;s.define=void 0,s.__cjsWrapper=d,r=f+") {"+r.replace(At,"")+"\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);";var h=tt(e,r,n.load.sourceMap,t,n.load.integrity,n.load.nonce,!1);if(h)throw h;St(n,i),s.__cjsWrapper=void 0,s.define=g}),i=o();break;case"global":d=n.load.deps||[];for(var f in n.load.globals){var p=n.load.globals[f];p&&d.push(p)}e.registerDynamic(d,!1,function(o,i,a){var s;if(n.load.globals)for(var u in s={},n.load.globals)n.load.globals[u]&&(s[u]=o(n.load.globals[u]));var l=n.load.exports;l&&(r+="\n"+Pt+'["'+l+'"] = '+l+";");var c=ft(a.id,l,s,n.load.encapsulateGlobal),d=tt(e,r,n.load.sourceMap,t,n.load.integrity,n.load.nonce,!0);if(d)throw d;var f=c();return St(n,f),f}),i=o();break;default:throw new TypeError('Unknown module format "'+n.load.format+'" for "'+t+'".'+("es6"===n.load.format?' Use "esm" instead here.':""))}if(!i)throw new Error("Module "+t+" detected as "+n.load.format+" but didn't execute correctly.")})}var Pt="undefined"!=typeof self?"self":"global",_t=/(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?(?!type)([^"'\(\)\n; ]+)\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/,Rt=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;function Mt(e){var t=e.match(Rt);if(!t)return!1;var r=t[0].length;return e.startsWith("System.register",r)||e.startsWith("SystemJS.register",r)}var Ct=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/,Lt=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/,At=/^\#\!.*/;function Kt(e,t){var r=e.split("!")[0];t.file&&t.file!=e||(t.file=r+"!transpiled"),(!t.sources||t.sources.length<=1&&(!t.sources[0]||t.sources[0]===e))&&(t.sources=[r])}var It,Dt,Ft=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,qt=/\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;function Ut(e,t,r){for(var n,o=t.split(".");o.length>1;)e=e[n=o.shift()]=e[n]||{};void 0===e[n=o.shift()]&&(e[n]=r)}if("undefined"==typeof Promise)throw new Error("SystemJS needs a Promise polyfill.");if("undefined"!=typeof document){var Tt=document.getElementsByTagName("script"),zt=Tt[Tt.length-1];document.currentScript&&(zt.defer||zt.async)&&(zt=document.currentScript),It=zt&&zt.src}else if("undefined"!=typeof importScripts)try{throw new Error("_")}catch(Zt){Zt.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){It=t})}else void 0!==o&&(It=o);function Jt(){var e;K.call(this),this._loader={},this[X]={},this[Z]={baseURL:c,paths:{},packageConfigPaths:[],packageConfigKeys:[],map:{},packages:{},depCache:{},meta:{},bundles:{},production:!1,transpiler:void 0,loadedBundles:{},warnings:!1,pluginFirst:!1,wasm:!1},this.scriptSrc=It,this._nodeRequire=Et,this.registry.set("@empty",G),Nt.call(this,!1,!1),(e=this).set("@@cjs-helpers",e.newModule({requireResolve:ot.bind(e),getPathVars:it})),e.set("@@global-helpers",e.newModule({prepareGlobal:ft})),rt(this)}function Nt(t,r){this[Z].production=t,this.registry.set("@system-env",Dt=this.newModule({browser:e,node:!!this._nodeRequire,production:!r&&t,dev:r||!t,build:r,default:!0}))}Jt.prototype=Object.create(K.prototype),Jt.prototype.constructor=Jt,Jt.prototype[Jt.resolve=K.resolve]=Jt.prototype.normalize=function(e,t){var r=this[Z],n={pluginKey:void 0,pluginArgument:void 0,pluginModule:void 0,packageKey:void 0,packageConfig:void 0,load:void 0},o=ye(0,r,t),i=this;return Promise.resolve().then(function(){var r=e.lastIndexOf("#?");if(-1===r)return Promise.resolve(e);var n=Ke.call(i,e.substr(r+2));return Ie.call(i,n,t,!0).then(function(t){return t?e.substr(0,r):"@empty"})}).then(function(e){var a=Oe(r.pluginFirst,e);return a?(n.pluginKey=a.plugin,Promise.all([xe.call(i,r,a.argument,o&&o.pluginArgument||t,n,o,!0),i.resolve(a.plugin,t)]).then(function(e){if(n.pluginArgument=e[0],n.pluginKey=e[1],n.pluginArgument===n.pluginKey)throw new Error("Plugin "+n.pluginArgument+" cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.");return Se(r.pluginFirst,e[0],e[1])})):xe.call(i,r,e,o&&o.pluginArgument||t,n,o,!1)}).then(function(e){return Fe.call(i,e,t,o)}).then(function(e){return function(e,t,r){r.load=r.load||{extension:"",deps:void 0,format:void 0,loader:void 0,scriptLoad:void 0,globals:void 0,nonce:void 0,integrity:void 0,sourceMap:void 0,exports:void 0,encapsulateGlobal:!1,crossOrigin:void 0,cjsRequireDetection:!0,cjsDeferDepsExecute:!1,esModule:!1};var n,o=0;for(var i in e.meta)if(-1!==(n=i.indexOf("*"))&&i.substr(0,n)===t.substr(0,n)&&i.substr(n+1)===t.substr(t.length-i.length+n+1)){var a=i.split("/").length;a>o&&(o=a),te(r.load,e.meta[i],o!==a)}if(e.meta[t]&&te(r.load,e.meta[t],!1),r.packageKey){var s=t.substr(r.packageKey.length+1),u={};if(r.packageConfig.meta){var o=0;Le(r.packageConfig.meta,s,function(e,t,r){r>o&&(o=r),te(u,t,r&&o>r)}),te(r.load,u,!1)}!r.packageConfig.format||r.pluginKey||r.load.loader||(r.load.format=r.load.format||r.packageConfig.format)}}.call(i,r,e,n),n.pluginKey||!n.load.loader?e:i.resolve(n.load.loader,e).then(function(t){return n.pluginKey=t,n.pluginArgument=e,e})}).then(function(e){return i[X][e]=n,e})},Jt.prototype.load=function(e,t){return Q.call(this[Z],"System.load is deprecated."),this.import(e,t)},Jt.prototype.decanonicalize=Jt.prototype.normalizeSync=Jt.prototype.resolveSync=function e(t,r){var n=this[Z],o={pluginKey:void 0,pluginArgument:void 0,pluginModule:void 0,packageKey:void 0,packageConfig:void 0,load:void 0},i=i||ye(0,n,r),a=Oe(n.pluginFirst,t);return a?(o.pluginKey=e.call(this,a.plugin,r),Se(n.pluginFirst,ke.call(this,n,a.argument,i.pluginArgument||r,o,i,!!o.pluginKey),o.pluginKey)):ke.call(this,n,t,i.pluginArgument||r,o,i,!!o.pluginKey)},Jt.prototype[Jt.instantiate=K.instantiate]=function(t,r){var n=this,o=this[Z];return(function(t,r,n){var o;if(e&&(o=t.depCache[n]))for(var i=0;i<o.length;i++)r.normalize(o[i],n).then(oe);else{var a=!1;for(var s in t.bundles){for(var i=0;i<t.bundles[s].length;i++){var u=t.bundles[s][i];if(u===n){a=!0;break}if(-1!==u.indexOf("*")){var l=u.split("*");if(2!==l.length){t.bundles[s].splice(i--,1);continue}if(n.substr(0,l[0].length)===l[0]&&n.substr(n.length-l[1].length,l[1].length)===l[1]){a=!0;break}}}if(a)return r.import(s)}}}(o,this,t)||W).then(function(){if(!r()){var i=n[X][t];if("@node/"===t.substr(0,6)){if(!n._nodeRequire)throw new TypeError("Error loading "+t+". Can only load node core modules in Node.");return n.registerDynamic([],!1,function(){return function(e,t){if("."===e[0])throw new Error("Node module "+e+" can't be loaded as it is not a package require.");if(!H){var r=this._nodeRequire("module"),n=decodeURI(t.substr(a?8:7));(H=new r(n)).paths=r._nodeModulePaths(n)}return H.require(e)}.call(n,t.substr(6),n.baseURL)}),void r()}return i.load.scriptLoad?!i.load.pluginKey&&Ot||(i.load.scriptLoad=!1,Q.call(o,'scriptLoad not supported for "'+t+'"')):!1!==i.load.scriptLoad&&!i.load.pluginKey&&Ot&&(i.load.deps||i.load.globals||!("system"===i.load.format||"register"===i.load.format||"global"===i.load.format&&i.load.exports)||(i.load.scriptLoad=!0)),i.load.scriptLoad?new Promise(function(e,o){if("amd"===i.load.format&&s.define!==n.amdDefine)throw new Error("Loading AMD with scriptLoad requires setting the global `"+Pt+".define = SystemJS.amdDefine`");ae(t,i.load.crossOrigin,i.load.integrity,function(){if(!r()){i.load.format="global";var t=i.load.exports&&dt(i.load.exports);n.registerDynamic([],!1,function(){return St(i,t),t}),r()}e()},o)}):function(e,t,r){return r.pluginKey?e.import(r.pluginKey).then(function(e){r.pluginModule=e,r.pluginLoad={name:t,address:r.pluginArgument,source:void 0,metadata:r.load},r.load.deps=r.load.deps||[]}):W}(n,t,i).then(function(){return function(t,r,n,o,i){return n.load.exports&&!n.load.format&&(n.load.format="global"),W.then(function(){if(n.pluginModule&&n.pluginModule.locate)return Promise.resolve(n.pluginModule.locate.call(t,n.pluginLoad)).then(function(e){e&&(n.pluginLoad.address=e)})}).then(function(){return n.pluginModule?(i=!1,n.pluginModule.fetch?n.pluginModule.fetch.call(t,n.pluginLoad,function(e){return ve(e.address,n.load.authorization,n.load.integrity,!1)}):ve(n.pluginLoad.address,n.load.authorization,n.load.integrity,!1)):ve(r,n.load.authorization,n.load.integrity,i)}).then(function(a){return i&&"string"!=typeof a?function(e,t,r){var n=new Uint8Array(t);return 0===n[0]&&97===n[1]&&115===n[2]?WebAssembly.compile(t).then(function(t){var n=[],o=[],i={};return WebAssembly.Module.imports&&WebAssembly.Module.imports(t).forEach(function(e){var t=e.module;o.push(function(e){i[t]=e}),-1===n.indexOf(t)&&n.push(t)}),e.register(n,function(e){return{setters:o,execute:function(){e(new WebAssembly.Instance(t,i).exports)}}}),r(),!0}):Promise.resolve(!1)}(t,a,o).then(function(i){if(!i){var s=e?new TextDecoder("utf-8").decode(new Uint8Array(a)):a.toString();return jt(t,r,s,n,o)}}):jt(t,r,a,n,o)})}(n,t,i,r,o.wasm)})}}).then(function(e){return delete n[X][t],e})},Jt.prototype.config=function(e,t){var r,n=this,o=this[Z];if("warnings"in e&&(o.warnings=e.warnings),"wasm"in e&&(o.wasm="undefined"!=typeof WebAssembly&&e.wasm),("production"in e||"build"in e)&&Nt.call(n,!!e.production,!!(e.build||Dt&&Dt.build)),!t)for(var i in Ue(0,e,function(e){r=r||e.baseURL}),(r=r||e.baseURL)&&(o.baseURL=y(r,c)||y("./"+r,c),"/"!==o.baseURL[o.baseURL.length-1]&&(o.baseURL+="/")),e.paths&&V(o.paths,e.paths),Ue(0,e,function(e){e.paths&&V(o.paths,e.paths)}),o.paths)-1!==o.paths[i].indexOf("*")&&(Q.call(o,"Path config "+i+" -> "+o.paths[i]+" is no longer supported as wildcards are deprecated."),delete o.paths[i]);if(e.defaultJSExtensions&&Q.call(o,"The defaultJSExtensions configuration option is deprecated.\n  Use packages defaultExtension instead.",!0),"boolean"==typeof e.pluginFirst&&(o.pluginFirst=e.pluginFirst),e.map)for(var i in e.map){var a=e.map[i];if("string"==typeof a){var s=we.call(n,o,a,void 0,!1,!1);"/"===s[s.length-1]&&":"!==i[i.length-1]&&"/"!==i[i.length-1]&&(s=s.substr(0,s.length-1)),o.map[i]=s}else{m=(m=we.call(n,o,"/"!==i[i.length-1]?i+"/":i,void 0,!0,!0)).substr(0,m.length-1);var u=o.packages[m];u||((u=o.packages[m]={defaultExtension:void 0,main:void 0,format:void 0,meta:void 0,map:void 0,packageConfig:void 0,configured:!1}).defaultExtension=""),Je(u,{map:a},m,!1,o)}}if(e.packageConfigPaths){for(var l=[],d=0;d<e.packageConfigPaths.length;d++){var f=e.packageConfigPaths[d],p=Math.max(f.lastIndexOf("*")+1,f.lastIndexOf("/")),g=we.call(n,o,f.substr(0,p),void 0,!1,!1);l[d]=g+f.substr(p)}o.packageConfigPaths=l}if(e.bundles)for(var i in e.bundles){var h=[];for(d=0;d<e.bundles[i].length;d++)h.push(n.normalizeSync(e.bundles[i][d]));o.bundles[i]=h}if(e.packages)for(var i in e.packages){if(i.match(/^([^\/]+:)?\/\/$/))throw new TypeError('"'+i+'" is not a valid package name.');var m;m=(m=we.call(n,o,"/"!==i[i.length-1]?i+"/":i,void 0,!0,!0)).substr(0,m.length-1),Je(o.packages[m]=o.packages[m]||{defaultExtension:void 0,main:void 0,format:void 0,meta:void 0,map:void 0,packageConfig:void 0,configured:!1},e.packages[i],m,!1,o)}if(e.depCache)for(var i in e.depCache)o.depCache[n.normalizeSync(i)]=[].concat(e.depCache[i]);if(e.meta)for(var i in e.meta)if("*"===i[0])V(o.meta[i]=o.meta[i]||{},e.meta[i]);else{var v=we.call(n,o,i,void 0,!0,!0);V(o.meta[v]=o.meta[v]||{},e.meta[i])}for(var b in"transpiler"in e&&(o.transpiler=e.transpiler),e)-1===$t.indexOf(b)&&-1===qe.indexOf(b)&&(n[b]=e[b]);Ue(0,e,function(e){n.config(e,!0)})},Jt.prototype.getConfig=function(e){if(e){if(-1!==$t.indexOf(e))return Te(this[Z],e);throw new Error('"'+e+'" is not a valid configuration name. Must be one of '+$t.join(", ")+".")}for(var t={},r=0;r<$t.length;r++){var n=$t[r],o=Te(this[Z],n);void 0!==o&&(t[n]=o)}return t},Jt.prototype.global=s,Jt.prototype.import=function(){return K.prototype.import.apply(this,arguments).then(function(e){return"__useDefault"in e?e.__useDefault:e})};for(var $t=["baseURL","map","paths","packages","packageConfigPaths","depCache","meta","bundles","transpiler","warnings","pluginFirst","production","wasm"],Wt="undefined"!=typeof Proxy,Bt=0;Bt<$t.length;Bt++)!function(e){Object.defineProperty(Jt.prototype,e,{get:function(){var t=Te(this[Z],e);return Wt&&"object"==typeof t&&(t=new Proxy(t,{set:function(t,r){throw new Error("Cannot set SystemJS."+e+'["'+r+'"] directly. Use SystemJS.config({ '+e+': { "'+r+'": ... } }) rather.')}})),t},set:function(t){throw new Error("Setting `SystemJS."+e+"` directly is no longer supported. Use `SystemJS.config({ "+e+": ... })`.")}})}($t[Bt]);function Gt(e,t){Q.call(e[Z],"SystemJS."+t+" is deprecated for SystemJS.registry."+t)}Jt.prototype.delete=function(e){return Gt(this,"delete"),this.registry.delete(e)},Jt.prototype.get=function(e){return Gt(this,"get"),this.registry.get(e)},Jt.prototype.has=function(e){return Gt(this,"has"),this.registry.has(e)},Jt.prototype.set=function(e,t){return Gt(this,"set"),this.registry.set(e,t)},Jt.prototype.newModule=function(e){return new M(e)},Jt.prototype.isModule=function(e){return e instanceof M||"module"===e[d]},Jt.prototype.register=function(e,t,r){return"string"==typeof e&&(e=be.call(this,this[Z],e)),K.prototype.register.call(this,e,t,r)},Jt.prototype.registerDynamic=function(e,t,r,n){return"string"==typeof e&&(e=be.call(this,this[Z],e)),K.prototype.registerDynamic.call(this,e,t,r,n)},Jt.prototype.version="0.21.4 Dev";var Ht=new Jt;(e||Y)&&(s.SystemJS=s.System=Ht),"undefined"!=typeof module&&module.exports&&(module.exports=Ht)}();
},{"fs":"Vh0v","process":"GJTy","buffer":"mgai"}],"eS8b":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=this&&this.__decorate||function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("../../decorators/service/Service"),o=require("rxjs"),s=require("rxjs/operators"),n=require("../request"),a=require("../file"),l=require("../bootstrap-logger/bootstrap-logger"),c=require("../../decorators/injector/injector.decorator"),p=require("../compression/compression.service"),d=require("../npm-service/npm.service"),h=require("./providers"),g=require("systemjs");let f=class{constructor(){this.defaultJsonFolder=`${e.cwd()}/package.json`,this.defaultTypescriptConfigJsonFolder=`${e.cwd()}/tsconfig.json`,this.providers=new o.BehaviorSubject(h.IPFS_PROVIDERS),this.defaultProvider=this.getProvider("main-ipfs-node"),this.defaultNamespaceFolder="@types",this.defaultOutputFolder="node_modules"}setDefaultProvider(e){this.defaultProvider=this.getProvider(e)}getProvider(e){return this.providers.getValue().filter(t=>t.name===e)[0].link}setProviders(...e){this.providers.next([...this.providers.getValue(),...e])}importExternalModule(e){return o.from(g.import(e))}validateConfig(e){if(!e)throw new Error("Bootstrap: missing config")}isWeb(){let e=!1;try{window&&(e=!0)}catch(t){}return e}loadTypescriptConfigJson(){let e={};try{e=this.fileService.readFile(this.defaultTypescriptConfigJsonFolder)}catch(t){console.error(`\n            Error in loading tsconfig.json in ${this.defaultTypescriptConfigJsonFolder}\n            Error: ${t}\n            Fallback to creating tsconfig.json\n            `)}return e.compilerOptions=e.compilerOptions||{},e.compilerOptions.typeRoots=e.compilerOptions.typeRoots||[],e}addNamespaceToTypeRoots(e){const t=`./${this.defaultOutputFolder}/@types/${e}`,i=this.loadTypescriptConfigJson();return i.compilerOptions.typeRoots.filter(e=>e===t).length||(i.compilerOptions.typeRoots.push(t),this.writeTypescriptConfigFile(i)),o.of(!0)}writeTypescriptConfigFile(t){this.fileService.writeFileSync(e.cwd()+"/tsconfig.json",t)}loadPackageJson(){let e;try{e=this.fileService.readFile(this.defaultJsonFolder)}catch(t){e={}}return e}loadNpmPackageJson(){let t;try{t=this.fileService.readFile(`${e.cwd()}/package.json`)}catch(i){t={}}return t}prepareDependencies(){const e=this.loadNpmPackageJson();return e.dependencies?Object.keys(e.dependencies).map(t=>({name:t,version:e.dependencies[t]})):[]}isModulePresent(e){let t=this.loadPackageJson().ipfs;const i=[];return t||(t=this.defaultIpfsConfig()),t.forEach(t=>{const r=t.dependencies.filter(t=>t===e);r.length&&i.push(r[0])}),i.length}filterUniquePackages(){let e=this.loadPackageJson().ipfs,t=[];if(e||(e=this.defaultIpfsConfig()),e.forEach(e=>{const i=e.dependencies.map(e=>({count:1,name:e})).reduce((e,t)=>(e[t.name]=(e[t.name]||0)+t.count,e),{}),r=Object.keys(i).filter(e=>i[e]>1);t=[...t,...r]}),t.length)throw new Error(`There are packages which are with the same hash ${JSON.stringify(t)}`);return t.length}defaultIpfsConfig(){return[{provider:this.defaultProvider,dependencies:[]}]}addPackageToJson(e){const t=this.loadPackageJson();let i=t.ipfs;i||(i=this.defaultIpfsConfig());const r=this.prepareDependencies();r.length&&(t.packages=r),this.isModulePresent(e)?this.logger.log(`Package with hash: ${e} present and will not be downloaded!`):(i[0].dependencies.push(e),t.ipfs=i),this.fileService.writeFileSync(this.defaultJsonFolder,t)}downloadIpfsModules(e){const t=e.map(e=>this.downloadIpfsModule(e));return o.combineLatest(t.length?t:o.of())}downloadIpfsModuleConfig(e){return this.requestService.get(e.provider+e.hash,e.hash).pipe(s.map(t=>{if(!t)throw new Error("Recieved undefined from provided address"+e.provider+e.hash);let i=t;const r="\x3c!--meta-rxdi-ipfs-module--\x3e";if(i.includes(r))try{i=t.split(r)[1]}catch(o){}return i}),s.map(e=>{let t=e;try{t=JSON.parse(e)}catch(i){}return t}))}combineDependencies(e,t){return o.combineLatest(e.length?e.map(e=>this.downloadIpfsModule({provider:t.provider,hash:e})):o.of(""))}writeFakeIndexIfMultiModule(e,t){return 2===t.length?this.fileService.writeFileAsyncP(`${e}${this.defaultNamespaceFolder}/${t[0]}`,"index.d.ts",""):o.of(!0)}downloadIpfsModule(t){if(!t.provider)throw new Error(`Missing configuration inside ${t.hash}`);if(!t.hash)throw new Error(`Missing configuration inside ${t.provider}`);let i,r;const o=t.provider+t.hash;let n,a,l,c,p,d;return this.downloadIpfsModuleConfig(t).pipe(s.tap(e=>{e.module||console.log("Todo: create logic to load module which is not from rxdi infrastructure for now can be used useDynamic which will do the same job!")}),s.filter(e=>!!e.module),s.map(o=>(a=o.name,l=a.split("/"),i=`${e.cwd()}/${this.defaultOutputFolder}/`,r=`${t.provider}${o.module}`,n=`${t.provider}${o.typings}`,o.dependencies=o.dependencies||[],o.packages=o.packages||[],c=o,this.npmService.setPackages(o.packages),p=2===a.split("/").length,d=p?a:a.split("/")[0],this.logger.logFileService(`Package config for module ${a} downloaded! ${JSON.stringify(o)}`),o)),s.switchMap(e=>this.combineDependencies(e.dependencies,t)),s.switchMap(()=>(this.logger.logFileService(`--------------------${a}--------------------`),this.logger.logFileService(`\nDownloading... ${o} `),this.logger.logFileService(`Config: ${JSON.stringify(c,null,2)} \n`),this.requestService.get(r,t.hash))),s.switchMap(e=>this.fileService.writeFile(i+a,"index.js",a,e)),s.switchMap(()=>this.requestService.get(n,t.hash)),s.switchMap(e=>this.fileService.writeFile(i+`${this.defaultNamespaceFolder}/${d}`,"index.d.ts",a,e)),s.tap(()=>{void 0}),s.switchMap(()=>this.addNamespaceToTypeRoots(a.split("/")[0])),s.map(()=>({provider:t.provider,hash:t.hash,version:c.version,name:c.name,dependencies:c.dependencies,packages:c.packages})),s.tap(()=>{c.packages.length&&this.npmService.installPackages()}))}downloadTypings(e,t,i,r){return e?this.requestService.get(e).pipe(s.take(1),s.map(e=>(this.logger.logFileService("Done!"),e)),s.switchMap(e=>this.fileService.writeFile(t,i,r.typingsFileName,e))):o.of(!0)}importModule(t,i,{folderOverride:r,waitUntil:n}={}){const a=o.timer(n||2e4);return this.validateConfig(t),this.isWeb()?(g.config(Object.assign({map:{[i]:t.link}},t.SystemJsConfig)),g.import(t.link)):new o.Observable(i=>{const o=t.fileName,n=t.namespace,a=t.link,l=t.extension,c=t.SystemJsConfig||{},p=t.outputFolder||`/${this.defaultOutputFolder}/`,d=`${r||e.cwd()}${p}/${n}/${o}.${l}`,h=`${r||e.cwd()}${p}${n}`,f=`${o}.${l}`;Object.assign(c,{paths:Object.assign({[o]:d},c.paths)}),g.config(c),this.fileService.isPresent(d)?(this.logger.logImporter(`Bootstrap -> @Service('${o}'): present inside .${p}${n}/${o}.${l} folder and loaded from there`),this.importExternalModule(o).pipe(s.take(1)).subscribe(e=>{i.next(e),i.complete()},e=>{i.error(e),i.complete()})):(this.logger.logImporter(`Bootstrap -> @Service('${o}'): will be downloaded inside .${p}${n}/${o}.${l} folder and loaded from there`),this.logger.logImporter(`Bootstrap -> @Service('${o}'): ${a} downloading...`),this.requestService.get(a).pipe(s.take(1),s.tap(()=>this.logger.logImporter("Done!")),s.switchMap(e=>this.fileService.writeFile(h,f,t.fileName,e)),s.switchMap(()=>this.downloadTypings(t.typings,h,f,t)),s.switchMap(()=>this.importExternalModule(o))).subscribe(e=>{i.next(e),i.complete()},e=>{i.error(e),i.complete()}))}).pipe(s.takeUntil(a)).toPromise()}};t([c.Injector(n.RequestService),i("design:type",n.RequestService)],f.prototype,"requestService",void 0),t([c.Injector(a.FileService),i("design:type",a.FileService)],f.prototype,"fileService",void 0),t([c.Injector(l.BootstrapLogger),i("design:type",l.BootstrapLogger)],f.prototype,"logger",void 0),t([c.Injector(p.CompressionService),i("design:type",p.CompressionService)],f.prototype,"compressionService",void 0),t([c.Injector(d.NpmService),i("design:type",d.NpmService)],f.prototype,"npmService",void 0),f=t([r.Service()],f),exports.ExternalImporter=f;
},{"../../decorators/service/Service":"e2A8","rxjs":"iRqj","rxjs/operators":"cVrl","../request":"gGlI","../file":"W0s8","../bootstrap-logger/bootstrap-logger":"PZmt","../../decorators/injector/injector.decorator":"afQh","../compression/compression.service":"B7aS","../npm-service/npm.service":"G2Re","./providers":"xDW0","systemjs":"vzL6","process":"GJTy"}],"UwOa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class e{}exports.ExternalImporterConfig=e;class r{}exports.ExternalImporterIpfsConfig=r;
},{}],"kY0u":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./external-importer")),e(require("./external-importer-config"));
},{"./external-importer":"eS8b","./external-importer-config":"UwOa"}],"rdI5":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,c){var o,a=arguments.length,s=a<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,r):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,c);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../decorators/service/Service");let r=class{constructor(){this.lazyFactories=new Map}setLazyFactory(e,t){return this.lazyFactories.set(e,t),this.getLazyFactory(e)}getLazyFactory(e){return this.lazyFactories.get(e)}};r=e([t.Service()],r),exports.LazyFactory=r;
},{"../../decorators/service/Service":"e2A8"}],"E392":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,a,r){var o,i=arguments.length,d=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(d=(i<3?o(d):i>3?o(t,a,d):o(t,a))||d);return i>3&&d&&Object.defineProperty(t,a,d),d};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../../decorators/service/Service");let a=class{validateEmpty(e,t,a){if(!e){const e=a.charAt(0).toUpperCase()+a.slice(1);throw new Error(`\n            ${t.metadata.raw}\n            -> @Module: ${t.metadata.moduleName}\n            -> @Module hash: ${t.metadata.moduleHash}\n                --\x3e Maybe you forgot to import some ${e} inside ${t.metadata.moduleName} ?\n\n                Hint: run ts-lint again, looks like imported ${e} is undefined or null inside ${t.metadata.moduleName}\n            `)}}genericWrongPluggableError(e,t,a){if(e.metadata.type!==a){const r=e.metadata.type.charAt(0).toUpperCase()+e.metadata.type.slice(1),o=a.charAt(0).toUpperCase()+a.slice(1);throw new Error(`\n            ${t.metadata.raw}\n            -> @Module: '${t.metadata.moduleName}'\n            -> @Module hash: '${t.metadata.moduleHash}'\n                --\x3e @${r} '${e.metadata.moduleName}' provided, where expected class decorated with '@${o}' instead,\n            -> @Hint: please provide class with @Service decorator or remove ${e.metadata.moduleName} class\n            `)}}validateImports(e,t){if("module"!==e.metadata.type)throw new Error(`\n            ${t.metadata.raw}\n            -> @Module: '${t.metadata.moduleName}'\n            -> @Module hash: '${t.metadata.moduleHash}'\n                --\x3e @${e.metadata.type.charAt(0).toUpperCase()+e.metadata.type.slice(1)} '${e.originalName}' provided, where expected class decorated with '@Module' instead,\n            -> @Hint: please provide class with @Module decorator or remove ${e.originalName} from imports\n            `)}validateServices(e,t){this.validateEmpty(e,t,"service"),e.provide||this.genericWrongPluggableError(e,t,"service")}validatePlugin(e,t){this.validateEmpty(e,t,"plugin"),e.provide||this.genericWrongPluggableError(e,t,"plugin")}validateController(e,t){this.validateEmpty(e,t,"controller"),e.provide||this.genericWrongPluggableError(e,t,"controller")}validateEffect(e,t){this.validateEmpty(e,t,"effect"),e.provide||this.genericWrongPluggableError(e,t,"effect")}validateComponent(e,t){this.validateEmpty(e,t,"component"),e.provide||this.genericWrongPluggableError(e,t,"component")}};a=e([t.Service()],a),exports.ModuleValidators=a;
},{"../../../decorators/service/Service":"e2A8"}],"v9Ne":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,r,t,o){var c,s=arguments.length,l=s<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,t,o);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(l=(s<3?c(l):s>3?c(r,t,l):c(r,t))||l);return s>3&&l&&Object.defineProperty(r,t,l),l};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("../../decorators/service/Service"),t=require("rxjs");let o=class{constructor(){this.controllers=new t.BehaviorSubject([])}register(e){this.controllers.next([...this.controllers.getValue(),e])}getControllers(){return this.controllers.getValue()}};o=e([r.Service()],o),exports.ControllersService=o;
},{"../../decorators/service/Service":"e2A8","rxjs":"iRqj"}],"PEU0":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,c){var s,f=arguments.length,o=f<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,r):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,c);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(o=(f<3?s(o):f>3?s(t,r,o):s(t,r))||o);return f>3&&o&&Object.defineProperty(t,r,o),o};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../decorators/service/Service"),r=require("rxjs");let c=class{constructor(){this.effects=new r.BehaviorSubject([])}register(e){this.effects.next([...this.effects.getValue(),e])}getEffects(){return this.effects.getValue()}};c=e([t.Service()],c),exports.EffectsService=c;
},{"../../decorators/service/Service":"e2A8","rxjs":"iRqj"}],"OQHo":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,o){var c,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(s=(n<3?c(s):n>3?c(t,r,s):c(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../decorators/service/Service"),r=require("rxjs");let o=class{constructor(){this.components=new r.BehaviorSubject([])}register(e){this.components.next([...this.components.getValue(),e])}getComponents(){return this.components.getValue()}};o=e([t.Service()],o),exports.ComponentsService=o;
},{"../../decorators/service/Service":"e2A8","rxjs":"iRqj"}],"xPjh":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,o){var s,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(c<3?s(i):c>3?s(t,r,i):s(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../decorators/service/Service"),r=require("rxjs");let o=class{constructor(){this.bootstraps=new r.BehaviorSubject([])}register(e){this.bootstraps.next([...this.bootstraps.getValue(),e])}getBootstraps(){return this.bootstraps.getValue()}};o=e([t.Service()],o),exports.BootstrapsServices=o;
},{"../../decorators/service/Service":"e2A8","rxjs":"iRqj"}],"KK7K":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,r,t,s){var c,i=arguments.length,o=i<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,s);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(o=(i<3?c(o):i>3?c(r,t,o):c(r,t))||o);return i>3&&o&&Object.defineProperty(r,t,o),o};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("../../decorators/service/Service"),t=require("rxjs");let s=class{constructor(){this.services=new t.BehaviorSubject([])}register(e){this.services.next([...this.services.getValue(),e])}getServices(){return this.services.getValue()}};s=e([r.Service()],s),exports.ServicesService=s;
},{"../../decorators/service/Service":"e2A8","rxjs":"iRqj"}],"uRVZ":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,o){var s,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(a=(i<3?s(a):i>3?s(t,r,a):s(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("rxjs"),o=require("../../container"),s=require("../../decorators/service/Service"),i=require("../lazy-factory/lazy-factory.service"),a=require("../plugin/plugin.service"),c=require("../external-importer"),n=require("../../decorators/injector/injector.decorator"),p=require("./helpers/validators"),v=require("../constructor-watcher/constructor-watcher"),l=require("../controllers/controllers.service"),d=require("../effect/effect.service"),u=require("../components/components.service"),y=require("../bootstraps/bootstraps.service"),f=require("../services/services.service");let h=class{constructor(){this.watcherService=v.constructorWatcherService}setServices(e,t,r){e.forEach(e=>{this.validators.validateServices(e,t),this.setInjectedDependencies(e),e.provide&&e.provide.constructor===Function&&(e.provide=e.provide.name),e.provide&&e.useFactory?this.setUseFactory(e):e.provide&&e.useDynamic?this.setUseDynamic(e):e.provide&&e.useClass&&e.useClass.constructor===Function?this.setUseClass(e):e.provide&&e.useValue?this.setUseValue(e):(r.putItem({data:e,key:e.name}),this.servicesService.register(e))})}setInjectedDependencies(e){e.deps=e.deps||[],e.deps.length&&(e.deps=e.deps.map(e=>o.Container.get(e)))}setUseValue(e){o.Container.set(e.provide,e.useValue),e.lazy&&this.lazyFactoryService.setLazyFactory(e.provide,r.of(o.Container.get(e.provide)))}setUseClass(e){e.lazy?this.lazyFactoryService.setLazyFactory(e.provide,r.of(o.Container.get(e.useClass))):o.Container.set(e.provide,o.Container.get(e.useClass))}setUseDynamic(e){const t=this.externalImporter.importModule(e.useDynamic,e.provide);this.lazyFactoryService.setLazyFactory(e.provide,t)}setUseFactory(e){const t=e.useFactory;e.useFactory=(()=>t(...e.deps)),e.lazy?this.lazyFactoryService.setLazyFactory(e.provide,e.useFactory()):o.Container.set(e.provide,e.useFactory())}setControllers(e,t,r){e.forEach(e=>{this.validators.validateController(e,t),r.putItem({data:e,key:e.name}),this.controllersService.register(e)})}setEffects(e,t,r){e.forEach(e=>{this.validators.validateEffect(e,t),r.putItem({data:e,key:e.name}),this.effectsService.register(e)})}setComponents(e,t,r){e.forEach(e=>{this.validators.validateComponent(e,t),r.putItem({data:e,key:e.name}),this.componentsService.register(e)})}setPlugins(e,t,r){e.forEach(e=>{this.validators.validatePlugin(e,t),r.putItem({data:e,key:e.name}),this.pluginService.register(e)})}setBootstraps(e,t,r){e.forEach(e=>{this.validators.validateEmpty(e,t,e.metadata.type),r.putItem({data:e,key:e.name}),this.bootstraps.register(e)})}setAfterPlugins(e,t,r){e.forEach(e=>{this.validators.validatePlugin(e,t),r.putItem({data:e,key:e.name}),this.pluginService.registerAfter(e)})}setBeforePlugins(e,t,r){e.forEach(e=>{this.validators.validatePlugin(e,t),r.putItem({data:e,key:e.name}),this.pluginService.registerBefore(e)})}setImports(e,t){e.forEach(e=>{if(this.validators.validateImports(e,t),!e)throw new Error("Missing import module");o.Container.get(e)})}};e([n.Injector(i.LazyFactory),t("design:type",i.LazyFactory)],h.prototype,"lazyFactoryService",void 0),e([n.Injector(a.PluginService),t("design:type",a.PluginService)],h.prototype,"pluginService",void 0),e([n.Injector(u.ComponentsService),t("design:type",u.ComponentsService)],h.prototype,"componentsService",void 0),e([n.Injector(l.ControllersService),t("design:type",l.ControllersService)],h.prototype,"controllersService",void 0),e([n.Injector(d.EffectsService),t("design:type",d.EffectsService)],h.prototype,"effectsService",void 0),e([n.Injector(y.BootstrapsServices),t("design:type",y.BootstrapsServices)],h.prototype,"bootstraps",void 0),e([n.Injector(c.ExternalImporter),t("design:type",c.ExternalImporter)],h.prototype,"externalImporter",void 0),e([n.Injector(p.ModuleValidators),t("design:type",p.ModuleValidators)],h.prototype,"validators",void 0),e([n.Injector(f.ServicesService),t("design:type",f.ServicesService)],h.prototype,"servicesService",void 0),h=e([s.Service()],h),exports.ModuleService=h;
},{"rxjs":"iRqj","../../container":"UeX4","../../decorators/service/Service":"e2A8","../lazy-factory/lazy-factory.service":"rdI5","../plugin/plugin.service":"RJxF","../external-importer":"kY0u","../../decorators/injector/injector.decorator":"afQh","./helpers/validators":"E392","../constructor-watcher/constructor-watcher":"BRSC","../controllers/controllers.service":"v9Ne","../effect/effect.service":"PEU0","../components/components.service":"OQHo","../bootstraps/bootstraps.service":"xPjh","../services/services.service":"KK7K"}],"HWS8":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./module.service")),e(require("./helpers/validators"));
},{"./module.service":"uRVZ","./helpers/validators":"E392"}],"VZoY":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(n<3?a(i):n>3?a(t,r,i):a(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("../../container"),o=require("../cache/cache-layer.service"),a=require("../../helpers/events"),n=require("rxjs/operators"),i=require("rxjs"),s=require("../bootstrap-logger/bootstrap-logger"),c=require("../../decorators/injector/injector.decorator"),l=require("../../decorators/service/Service");let p=class{resolveDependencies(e,t,r){this.cacheService.getLayer(a.InternalLayers.modules).putItem({key:e,data:t});const o=this.cacheService.getLayer(e);return o.putItem({key:a.InternalEvents.config,data:{moduleName:r,moduleHash:e}}),o.getItemObservable(a.InternalEvents.load).pipe(n.switchMap(e=>e.data?o.items.asObservable():i.of(null)),n.filter(e=>e&&e.length),n.map(this.resolveContainerDependencies(t,r)))}resolveContainerDependencies(e,t){return o=>(o.forEach(o=>{if(o.key===a.InternalEvents.load||o.key===a.InternalEvents.config)return;const n=this.cacheService.searchForItem(o.data);if(n){if(n.provide)return n;const o=n.metadata.type.charAt(0).toUpperCase()+n.metadata.type.slice(1);return this.bootstrapLogger.log(`Start -> @Module('${t}')${this.bootstrapLogger.logHashes(`(${e.name})`)}: @${o}('${n.originalName}')${this.bootstrapLogger.logHashes(`(${n.name})`)}`+" initialized!"),r.Container.get(n)}throw new Error("not found")}),o)}};e([c.Injector(s.BootstrapLogger),t("design:type",s.BootstrapLogger)],p.prototype,"bootstrapLogger",void 0),e([c.Injector(o.CacheService),t("design:type",o.CacheService)],p.prototype,"cacheService",void 0),p=e([l.Service()],p),exports.ResolverService=p;
},{"../../container":"UeX4","../cache/cache-layer.service":"ZBkS","../../helpers/events":"H9PJ","rxjs/operators":"cVrl","rxjs":"iRqj","../bootstrap-logger/bootstrap-logger":"PZmt","../../decorators/injector/injector.decorator":"afQh","../../decorators/service/Service":"e2A8"}],"qTa0":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./resolver.service"));
},{"./resolver.service":"VZoY"}],"B7IU":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,c){var o,s=arguments.length,i=s<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,r):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,c);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../decorators/service/Service"),r=require("rxjs");let c=class{constructor(){this.appStarted=new r.Subject}};c=e([t.Service()],c),exports.AfterStarterService=c;
},{"../../decorators/service/Service":"e2A8","rxjs":"iRqj"}],"LPDP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../container/Container");exports.logExtendedInjectables=((n,t)=>{e.Container.has(n)&&t&&console.log(`Warn: Injection Token '${n.name||n}' is extended after it has being declared! ${JSON.stringify(e.Container.get(n))}`)});
},{"../container/Container":"XLQw"}],"yLvu":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,i,r){var s,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(n<3?s(a):n>3?s(t,i,a):s(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(s,n){function a(e){try{c(r.next(e))}catch(t){n(t)}}function o(e){try{c(r.throw(e))}catch(t){n(t)}}function c(e){e.done?s(e.value):new i(function(t){t(e.value)}).then(a,o)}c((r=r.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("rxjs"),s=require("../../container"),n=require("../bootstrap-logger/bootstrap-logger"),a=require("../cache/cache-layer.service"),o=require("../../helpers/events"),c=require("../lazy-factory/lazy-factory.service"),l=require("../config/config.service"),h=require("../plugin/plugin.service"),f=require("rxjs/operators"),g=require("../effect/effect.service"),p=require("../controllers/controllers.service"),u=require("../components/components.service"),v=require("../bootstraps/bootstraps.service"),d=require("../services/services.service"),y=require("../after-starter/after-starter.service"),S=require("../../helpers/log"),m=require("../../decorators/service/Service");let b=class{constructor(e,t,i,r,s,n,a,c,l,h,f){this.logger=e,this.cacheService=t,this.lazyFactoriesService=i,this.configService=r,this.controllersService=s,this.effectsService=n,this.pluginService=a,this.componentsService=c,this.bootstrapsService=l,this.servicesService=h,this.afterStarterService=f,this.globalConfig=this.cacheService.createLayer({name:o.InternalLayers.globalConfig})}start(e,t){this.configService.setConfig(t),this.globalConfig.putItem({key:o.InternalEvents.config,data:t}),s.Container.get(e);const i=Array.from(this.lazyFactoriesService.lazyFactories.keys());return r.of(i).pipe(f.map(e=>this.prepareAsyncChainables(e)),f.switchMap(e=>r.combineLatest(e).pipe(f.take(1),f.map(e=>this.attachLazyLoadedChainables(i,e)),f.map(()=>this.validateSystem()),f.switchMap(()=>r.combineLatest(this.asyncChainableControllers())),f.switchMap(()=>r.combineLatest(this.asyncChainablePluginsBeforeRegister())),f.switchMap(()=>r.combineLatest(this.asyncChainablePluginsRegister())),f.switchMap(()=>r.combineLatest(this.asyncChainablePluginsAfterRegister())),f.switchMap(()=>r.combineLatest(this.asyncChainableServices())),f.switchMap(()=>r.combineLatest(this.asyncChainableEffects())),f.switchMap(()=>r.combineLatest(this.asyncChainableComponents())),f.map(()=>this.loadApplication()),f.switchMap(()=>r.combineLatest(this.asyncChainableBootstraps())),f.map(()=>this.final()))))}final(){return this.afterStarterService.appStarted.next(!0),this.configService.config.init||this.logger.log("Bootstrap -> press start!"),s.Container}asyncChainableComponents(){return[r.of(!0),...this.componentsService.getComponents().filter(e=>this.genericFilter(e,"components")).map(e=>i(this,void 0,void 0,function*(){return yield s.Container.get(e)}))]}asyncChainableBootstraps(){return[r.of(!0),...this.bootstrapsService.getBootstraps().map(e=>i(this,void 0,void 0,function*(){return yield s.Container.get(e)}))]}asyncChainableEffects(){return[r.of(!0),...this.effectsService.getEffects().filter(e=>this.genericFilter(e,"effects")).map(e=>i(this,void 0,void 0,function*(){return yield s.Container.get(e)}))]}asyncChainableServices(){return[r.of(!0),...this.servicesService.getServices().filter(e=>this.genericFilter(e,"services")).map(e=>i(this,void 0,void 0,function*(){return yield s.Container.get(e)}))]}asyncChainableControllers(){return[r.of(!0),...this.controllersService.getControllers().filter(e=>this.genericFilter(e,"controllers")).map(e=>i(this,void 0,void 0,function*(){return yield s.Container.get(e)}))]}asyncChainablePluginsRegister(){return[r.of(!0),...this.pluginService.getPlugins().filter(e=>this.genericFilter(e,"plugins")).map(e=>i(this,void 0,void 0,function*(){return yield this.registerPlugin(e)}))]}asyncChainablePluginsAfterRegister(){return[r.of(!0),...this.pluginService.getAfterPlugins().filter(e=>this.genericFilter(e,"pluginsAfter")).map(e=>i(this,void 0,void 0,function*(){return yield this.registerPlugin(e)}))]}asyncChainablePluginsBeforeRegister(){return[r.of(!0),...this.pluginService.getBeforePlugins().filter(e=>this.genericFilter(e,"pluginsBefore")).map(e=>i(this,void 0,void 0,function*(){return yield this.registerPlugin(e)}))]}genericFilter(e,t){return this.configService.config.initOptions[t]||e.metadata.options&&e.metadata.options.init||this.configService.config.init}registerPlugin(e){return i(this,void 0,void 0,function*(){const t=s.Container.get(e);return yield t.register(),t})}prepareAsyncChainables(e){const t=[r.of(!0)],i={},s=e=>e.name||e;return e.map(e=>{const n=Date.now();i[s(e)]={started:n,end:null},this.logger.log(`Bootstrap -> @Service('${s(e)}'): loading...`);const a=r.from(this.lazyFactoriesService.getLazyFactory(e)).pipe(f.shareReplay(1));t.push(a),a.subscribe(()=>{this.logger.log(`Bootstrap -> @Service('${s(e)}'): loading finished after ${Date.now()-i[s(e)].started}ms !`),delete i[s(e)]})}),t}validateSystem(){this.configService.config.strict&&this.cacheService.searchForDuplicateDependenciesInsideApp()}attachLazyLoadedChainables(e,t){t.splice(0,1);let i=0;return e.map(e=>{S.logExtendedInjectables(e,this.configService.config.experimental.logExtendedInjectables),s.Container.set(e,t[i++])}),!0}loadApplication(){return Array.from(this.cacheService.getLayer(o.InternalLayers.modules).map.keys()).forEach(e=>this.cacheService.getLayer(e).putItem({key:o.InternalEvents.load,data:this.configService.config.init})),!0}};b=e([m.Service(),t("design:paramtypes",[n.BootstrapLogger,a.CacheService,c.LazyFactory,l.ConfigService,p.ControllersService,g.EffectsService,h.PluginService,u.ComponentsService,v.BootstrapsServices,d.ServicesService,y.AfterStarterService])],b),exports.BootstrapService=b;
},{"rxjs":"iRqj","../../container":"UeX4","../bootstrap-logger/bootstrap-logger":"PZmt","../cache/cache-layer.service":"ZBkS","../../helpers/events":"H9PJ","../lazy-factory/lazy-factory.service":"rdI5","../config/config.service":"W4n9","../plugin/plugin.service":"RJxF","rxjs/operators":"cVrl","../effect/effect.service":"PEU0","../controllers/controllers.service":"v9Ne","../components/components.service":"OQHo","../bootstraps/bootstraps.service":"xPjh","../services/services.service":"KK7K","../after-starter/after-starter.service":"B7IU","../../helpers/log":"LPDP","../../decorators/service/Service":"e2A8"}],"A3Nb":[function(require,module,exports) {
var process = require("process");
var e=require("process");Object.defineProperty(exports,"__esModule",{value:!0});const i=require("../services/exit-handler/exit-handler.service"),n=require("../container");exports.exitHandlerInit=(()=>{const t=n.Container.get(i.ExitHandlerService);t.init(),e.on("exit",t.exitHandler.bind(t,{cleanup:!0})),e.on("SIGINT",t.exitHandler.bind(t,{exit:!0})),e.on("SIGUSR1",t.exitHandler.bind(t,{exit:!0})),e.on("SIGUSR2",t.exitHandler.bind(t,{exit:!0})),e.on("uncaughtException",t.exitHandler.bind(t,{exit:!0}))});
},{"../services/exit-handler/exit-handler.service":"NEQF","../container":"UeX4","process":"GJTy"}],"YNNE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("reflect-metadata");const e=require("../container"),r=require("../services/bootstrap/bootstrap.service"),t=require("./exit-handler");t.exitHandlerInit();const o=e.Container.get(r.BootstrapService);exports.Bootstrap=((e,r)=>o.start(e,r)),exports.BootstrapPromisify=((e,r)=>o.start(e,r).toPromise()),exports.BootstrapFramework=((r,t,s)=>(o.configService.setConfig(s),t.map(r=>e.Container.get(r)),o.start(r,s))),exports.setup=((e,r=[],t)=>{const o=require("../decorators/module/module.decorator").Module;return exports.BootstrapFramework(o({imports:e.imports||[],providers:e.providers||[],services:e.services||[],bootstrap:e.bootstrap||[],components:e.components||[],controllers:e.controllers||[],effects:e.effects||[],plugins:e.plugins||[],afterPlugins:e.afterPlugins||[],beforePlugins:e.beforePlugins||[]})(function(){}),r,t)}),exports.createTestBed=exports.setup;
},{"reflect-metadata":"npqE","../container":"UeX4","../services/bootstrap/bootstrap.service":"yLvu","./exit-handler":"A3Nb","../decorators/module/module.decorator":"cyNL"}],"JMsd":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./bootstrap")),e(require("./create-unique-hash")),e(require("./generic-constructor")),e(require("./sha256"));
},{"./bootstrap":"YNNE","./create-unique-hash":"DzP1","./generic-constructor":"RsfA","./sha256":"v8p8"}],"G5K2":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,a){var i,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n<3?i(o):n>3?i(t,r,o):i(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../../decorators/service/Service"),r=require("../../helpers");let a=class{generateHashData(e,t){const r=e.services||[],a=e.imports||[],i=r=>r&&r.provide?r.provide:r?(this.validateCustomInjectable(r,e,t),{moduleName:r.metadata.moduleName,hash:r.metadata.moduleHash}):void 0;return[[...r.map(e=>i(e))],[...a.map(e=>i(e))]]}validateCustomInjectableKeys(e){}validateCustomInjectable(e,t,r){if(!e.metadata&&!e.provide)throw new Error(`\n                ---- Wrong service ${JSON.stringify(e)} provided inside '${r.name}' ----\n                @Module({\n                    services: ${JSON.stringify([...t.services.filter(e=>!e.metadata),...t.services.filter(e=>e&&e.metadata&&e.metadata.moduleName).map(e=>e.metadata.moduleName)])}\n                })\n                ${JSON.stringify(`${r}`,null,2)}\n\n                Hint: System recieved Object but it is not with appropriate format you must provide object with following parameters:\n\n                YourObject: ${JSON.stringify(e)}\n\n                Option 1. [YourClass]\n\n                Option 2. [{provide: 'your-value', useClass: YourClass}]\n\n                Option 3. [{provide: 'your-value', deps: [YourClass], useFactory: (test: YourClass) => {}}]\n\n                Option 4. [{provide: 'your-value', useDynamic: {}}]\n\n                Option 5. [{provide: 'your-value', useValue: 'your-value'}]\n            `)}parseModuleTemplate(e,t,r){return`\n            ---- @gapi module '${e}' metadata----\n            @Module({\n                imports: ${JSON.stringify(t[1],null,"\t")},\n                services: ${JSON.stringify(t[0],null,"\t")}\n            })\n            ${JSON.stringify(r,null,2)}\n        `}createUniqueHash(e){return r.createUniqueHash(e)}};a=e([t.Service()],a),exports.MetadataService=a;
},{"../../decorators/service/Service":"e2A8","../../helpers":"JMsd"}],"qbTU":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./metadata.service"));
},{"./metadata.service":"G5K2"}],"x7x0":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./compression.service"));
},{"./compression.service":"B7aS"}],"h9KG":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./effect.service"));
},{"./effect.service":"PEU0"}],"tKAb":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./controllers.service"));
},{"./controllers.service":"v9Ne"}],"zGXY":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./components.service"));
},{"./components.service":"OQHo"}],"GM0Z":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./bootstraps.service"));
},{"./bootstraps.service":"xPjh"}],"xo3S":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./services.service"));
},{"./services.service":"KK7K"}],"zsRG":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,i){var n,c=arguments.length,l=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(c<3?n(l):c>3?n(t,r,l):n(t,r))||l);return c>3&&l&&Object.defineProperty(t,r,l),l},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("../plugin/plugin.service"),i=require("../../decorators/service/Service");let n=class{constructor(e){this.pluginService=e}listPlugins(){return this.pluginService.getPlugins()}getPlugin(e){return this.pluginService.getPlugins().filter(t=>t.name===e.name)[0]}};n=e([i.Service(),t("design:paramtypes",[r.PluginService])],n),exports.PluginManager=n;
},{"../plugin/plugin.service":"RJxF","../../decorators/service/Service":"e2A8"}],"LNpx":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./cache/index")),e(require("./plugin/plugin.service")),e(require("./bootstrap-logger/index")),e(require("./exit-handler/index")),e(require("./external-importer/index")),e(require("./module/index")),e(require("./resolver/index")),e(require("./config/index")),e(require("./metadata/index")),e(require("./compression/index")),e(require("./file/index")),e(require("./constructor-watcher/index")),e(require("./effect/index")),e(require("./controllers/index")),e(require("./components/index")),e(require("./bootstraps/index")),e(require("./services/index")),e(require("./plugin-manager/plugin-manager")),e(require("./after-starter/after-starter.service"));
},{"./cache/index":"HUWP","./plugin/plugin.service":"RJxF","./bootstrap-logger/index":"gkD1","./exit-handler/index":"WBIM","./external-importer/index":"kY0u","./module/index":"HWS8","./resolver/index":"qTa0","./config/index":"JpbC","./metadata/index":"qbTU","./compression/index":"x7x0","./file/index":"W0s8","./constructor-watcher/index":"lWH0","./effect/index":"h9KG","./controllers/index":"tKAb","./components/index":"zGXY","./bootstraps/index":"GM0Z","./services/index":"xo3S","./plugin-manager/plugin-manager":"zsRG","./after-starter/after-starter.service":"B7IU"}],"RsfA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../container"),s=require("../services"),t=e.Container.get(s.ModuleService),r=e.Container.get(s.BootstrapLogger);function o(s,o,n){return function(i,l){return s?(s.imports&&t.setImports(s.imports,o),s.services&&t.setServices(s.services,o,n),s.providers&&t.setServices(s.providers,o,n),s.controllers&&t.setControllers(s.controllers,o,n),s.effects&&t.setEffects(s.effects,o,n),s.components&&t.setComponents(s.components,o,n),s.beforePlugins&&t.setBeforePlugins(s.beforePlugins,o,n),s.plugins&&t.setPlugins(s.plugins,o,n),s.afterPlugins&&t.setAfterPlugins(s.afterPlugins,o,n),s.bootstrap&&t.setBootstraps(s.bootstrap,o,n),r.log(`Bootstrap -> @Module('${i.originalName}')${r.logHashes(`(${i.name})`)}: finished!`),e.Container.get(i)):new i}}exports.GenericConstruct=o;
},{"../container":"UeX4","../services":"LNpx"}],"cyNL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../container"),r=require("../../services/cache/cache-layer.service"),o=require("../../helpers/generic-constructor"),t=require("../../services/bootstrap-logger/bootstrap-logger"),s=require("../../services/resolver/resolver.service"),n=require("../../services/metadata/metadata.service"),i=require("../../services/module/module.service"),a=e.Container.get(t.BootstrapLogger),c=e.Container.get(s.ResolverService),l=e.Container.get(r.CacheService),u=e.Container.get(n.MetadataService),g=e.Container.get(i.ModuleService);function m(r){return t=>{r=r||{};const s=Object.assign(t),n=t.name||t.constructor.name,i=u.generateHashData(r,s),m=u.parseModuleTemplate(n,i,`${t}`),d=u.createUniqueHash(m);Object.defineProperty(s,"originalName",{value:s.name||s.constructor.name,writable:!1}),Object.defineProperty(s,"name",{value:d,writable:!0});const f=l.createLayer({name:d});s.metadata={moduleName:s.originalName,moduleHash:d,options:null,type:"module",raw:m};const p=function(...e){return a.log(`Bootstrap -> @Module('${s.originalName}')${a.logHashes(`(${s.name})`)}: loading...`),o.GenericConstruct(r,s,f)(s,e)};if(Object.assign(p,s),c.resolveDependencies(d,s,n).subscribe(()=>a.log(`Start -> @Module('${s.originalName}')${a.logHashes(`(${s.name})`)}: loaded!`)),Object.getOwnPropertyNames(s).filter(e=>"function"==typeof s[e]).map(e=>Object.defineProperty(p,e,{configurable:!0,writable:!0,value:s[e]})),s.forRoot){const e=p.forRoot;p.forRoot=function(...r){const o=e(...r);if(!o)throw new Error(`forRoot configuration inside ${p.name} is returning undefined or null`);return o.frameworkImports&&g.setImports(o.frameworkImports,s),o.services&&g.setServices(o.services,s,f),o.providers&&g.setServices(o.providers,s,f),o.components&&g.setComponents(o.components,s,f),o.effects&&g.setEffects(o.effects,s,f),o.controllers&&g.setControllers(o.controllers,s,f),o.beforePlugins&&g.setBeforePlugins(o.beforePlugins,s,f),o.plugins&&g.setPlugins(o.plugins,s,f),o.afterPlugins&&g.setAfterPlugins(o.afterPlugins,s,f),o.ngModule?o.ngModule:o.module?o.module:o}}const v={type:p};return e.Container.set(v),p}}exports.Module=m,exports.NgModule=m;
},{"../../container":"UeX4","../../services/cache/cache-layer.service":"ZBkS","../../helpers/generic-constructor":"RsfA","../../services/bootstrap-logger/bootstrap-logger":"PZmt","../../services/resolver/resolver.service":"VZoY","../../services/metadata/metadata.service":"G5K2","../../services/module/module.service":"uRVZ"}],"sVx2":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./module.decorator"));
},{"./module.decorator":"cyNL"}],"YHe9":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./injector.decorator"));
},{"./injector.decorator":"afQh"}],"bNAw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../container"),r=require("../../services/module/module.service");function t(t){return e.Container.get(r.ModuleService).watcherService.getByClass(t)}exports.InjectSoft=t;
},{"../../container":"UeX4","../../services/module/module.service":"uRVZ"}],"Itwv":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./inject-soft.decorator"));
},{"./inject-soft.decorator":"bNAw"}],"jZW9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class e extends Error{constructor(t,r){super(`Cannot inject value into '${t.constructor.name}.${r}'. `+"Please make sure you setup reflect-metadata properly and you don't use interfaces without service tokens as injection value."),this.name="ServiceNotFoundError",Object.setPrototypeOf(this,e.prototype)}}exports.CannotInjectError=e;
},{}],"X4lW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../container/Token"),n=require("../container/error/CannotInjectError");exports.getIdentifier=((r,t,o)=>{let i;if((i="string"==typeof r?r:r instanceof e.Token?r:r())===Object)throw new n.CannotInjectError(t,o);return i}),exports.isClient=(()=>"undefined"!=typeof window&&void 0!==window.document);
},{"../container/Token":"TYvc","../container/error/CannotInjectError":"jZW9"}],"zS3q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../container/Container"),t=require("../../helpers/get-identifier");function n(n){return function(r,i,o){t.isClient()&&n&&"function"==typeof n?Object.defineProperty(r,i,{get:()=>e.Container.get(n)}):(n||(n=(()=>Reflect.getMetadata("design:type",r,i))),e.Container.registerHandler({object:r,propertyName:i,index:o,value:e=>e.get(t.getIdentifier(n,r,i))}))}}exports.Inject=n;
},{"../../container/Container":"XLQw","../../helpers/get-identifier":"X4lW"}],"k6OJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../helpers/reflect.decorator");function r(r){return e.ReflectDecorator(r,{type:"controller"})}exports.Controller=r;
},{"../../helpers/reflect.decorator":"dIzU"}],"hf5R":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./controller.decorator"));
},{"./controller.decorator":"k6OJ"}],"YeKy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../helpers/reflect.decorator");function t(t){return e.ReflectDecorator(t,{type:"effect"})}exports.Effect=t;
},{"../../helpers/reflect.decorator":"dIzU"}],"Qrlq":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./effect.decorator"));
},{"./effect.decorator":"YeKy"}],"ChlH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../helpers/reflect.decorator");function r(r){return e.ReflectDecorator(r,{type:"plugin"})}exports.Plugin=r;
},{"../../helpers/reflect.decorator":"dIzU"}],"Hc7x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../helpers/reflect.decorator");function t(t){return e.ReflectDecorator(t,{type:"component"})}exports.Component=t;
},{"../../helpers/reflect.decorator":"dIzU"}],"euq5":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./component.decorator"));
},{"./component.decorator":"Hc7x"}],"xSbC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../container/Container"),t=require("../../container/Token"),n=require("../../helpers/get-identifier");function r(r){return function(i,o,a){n.isClient()&&r instanceof t.Token?Object.defineProperty(i,o,{get:()=>e.Container.getMany(n.getIdentifier(r,i,o))}):(r||(r=(()=>Reflect.getMetadata("design:type",i,o))),e.Container.registerHandler({object:i,propertyName:o,index:a,value:e=>e.getMany(n.getIdentifier(r,i,o))}))}}exports.InjectMany=r;
},{"../../container/Container":"XLQw","../../container/Token":"TYvc","../../helpers/get-identifier":"X4lW"}],"F7IJ":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./module/index")),e(require("./injector/index")),e(require("./inject-soft/index")),e(require("./inject/Inject")),e(require("./controller/index")),e(require("./effect/index")),e(require("./plugin/Plugin")),e(require("./service/Service")),e(require("./component/index")),e(require("./inject-many/InjectMany"));var r=require("./service/Service");exports.Injectable=r.Service;
},{"./module/index":"sVx2","./injector/index":"YHe9","./inject-soft/index":"Itwv","./inject/Inject":"zS3q","./controller/index":"hf5R","./effect/index":"Qrlq","./plugin/Plugin":"ChlH","./service/Service":"e2A8","./component/index":"euq5","./inject-many/InjectMany":"xSbC"}],"lhgc":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),require("reflect-metadata"),e(require("./container/index")),e(require("./decorators/index")),e(require("./helpers/index")),e(require("./services/index"));
},{"reflect-metadata":"npqE","./container/index":"UeX4","./decorators/index":"F7IJ","./helpers/index":"JMsd","./services/index":"LNpx"}],"LD9u":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=new WeakMap;exports.directive=(t=>(...s)=>{const r=t(...s);return e.set(r,!0),r}),exports.isDirective=(t=>"function"==typeof t&&e.has(t));
},{}],"F3pP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isCEPolyfill=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,exports.reparentNodes=((e,o,l=null,s=null)=>{for(;o!==l;){const l=o.nextSibling;e.insertBefore(o,s),o=l}}),exports.removeNodes=((e,o,l=null)=>{for(;o!==l;){const l=o.nextSibling;e.removeChild(o),o=l}});
},{}],"ynuv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.noChange={},exports.nothing={};
},{}],"HLpd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.marker=`{{lit-${String(Math.random()).slice(2)}}}`,exports.nodeMarker=`\x3c!--${exports.marker}--\x3e`,exports.markerRegex=new RegExp(`${exports.marker}|${exports.nodeMarker}`),exports.boundAttributeSuffix="$lit$";class e{constructor(e,r){this.parts=[],this.element=r;const s=[],o=[],n=document.createTreeWalker(r.content,133,null,!1);let x=0,a=-1,i=0;const{strings:p,values:{length:l}}=e;for(;i<l;){const e=n.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const r=e.attributes,{length:s}=r;let o=0;for(let e=0;e<s;e++)t(r[e].name,exports.boundAttributeSuffix)&&o++;for(;o-- >0;){const t=p[i],r=exports.lastAttributeNameRegex.exec(t)[2],s=r.toLowerCase()+exports.boundAttributeSuffix,o=e.getAttribute(s);e.removeAttribute(s);const n=o.split(exports.markerRegex);this.parts.push({type:"attribute",index:a,name:r,strings:n}),i+=n.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const r=e.data;if(r.indexOf(exports.marker)>=0){const o=e.parentNode,n=r.split(exports.markerRegex),x=n.length-1;for(let r=0;r<x;r++){let s,x=n[r];if(""===x)s=exports.createMarker();else{const e=exports.lastAttributeNameRegex.exec(x);null!==e&&t(e[2],exports.boundAttributeSuffix)&&(x=x.slice(0,e.index)+e[1]+e[2].slice(0,-exports.boundAttributeSuffix.length)+e[3]),s=document.createTextNode(x)}o.insertBefore(s,e),this.parts.push({type:"node",index:++a})}""===n[x]?(o.insertBefore(exports.createMarker(),e),s.push(e)):e.data=n[x],i+=x}}else if(8===e.nodeType)if(e.data===exports.marker){const t=e.parentNode;null!==e.previousSibling&&a!==x||(a++,t.insertBefore(exports.createMarker(),e)),x=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(s.push(e),a--),i++}else{let t=-1;for(;-1!==(t=e.data.indexOf(exports.marker,t+1));)this.parts.push({type:"node",index:-1}),i++}}else n.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}exports.Template=e;const t=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t};exports.isTemplatePartActive=(e=>-1!==e.index),exports.createMarker=(()=>document.createComment("")),exports.lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
},{}],"c92z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./dom"),t=require("./template");class s{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const s=e.isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),o=[],r=this.template.parts,n=document.createTreeWalker(s,133,null,!1);let i,p=0,l=0,a=n.nextNode();for(;p<r.length;)if(i=r[p],t.isTemplatePartActive(i)){for(;l<i.index;)l++,"TEMPLATE"===a.nodeName&&(o.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=o.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));p++}else this.__parts.push(void 0),p++;return e.isCEPolyfill&&(document.adoptNode(s),customElements.upgrade(s)),s}}exports.TemplateInstance=s;
},{"./dom":"F3pP","./template":"HLpd"}],"ZIgH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./dom"),t=require("./template");class s{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){const e=this.strings.length-1;let s="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],l=e.lastIndexOf("\x3c!--");r=(l>-1||r)&&-1===e.indexOf("--\x3e",l+1);const i=t.lastAttributeNameRegex.exec(e);s+=null===i?e+(r?t.marker:t.nodeMarker):e.substr(0,i.index)+i[1]+i[2]+t.boundAttributeSuffix+i[3]+t.marker}return s+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}exports.TemplateResult=s;class r extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),s=t.content,r=s.firstChild;return s.removeChild(r),e.reparentNodes(s,r.firstChild),t}}exports.SVGTemplateResult=r;
},{"./dom":"F3pP","./template":"HLpd"}],"zoHw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./directive"),t=require("./dom"),i=require("./part"),s=require("./template-instance"),n=require("./template-result"),r=require("./template");exports.isPrimitive=(e=>null===e||!("object"==typeof e||"function"==typeof e)),exports.isIterable=(e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]));class o{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new a(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(exports.isPrimitive(e)||!exports.isIterable(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}exports.AttributeCommitter=o;class a{constructor(e){this.value=void 0,this.committer=e}setValue(t){t===i.noChange||exports.isPrimitive(t)&&t===this.value||(this.value=t,e.isDirective(t)||(this.committer.dirty=!0))}commit(){for(;e.isDirective(this.value);){const e=this.value;this.value=i.noChange,e(this)}this.value!==i.noChange&&this.committer.commit()}}function h(e){return new l(e)}exports.AttributePart=a;class l{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(r.createMarker()),this.endNode=e.appendChild(r.createMarker())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=r.createMarker()),e.__insert(this.endNode=r.createMarker())}insertAfterPart(e){e.__insert(this.startNode=r.createMarker()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;e.isDirective(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i.noChange,e(this)}const t=this.__pendingValue;t!==i.noChange&&(exports.isPrimitive(t)?t!==this.value&&this.__commitText(t):t instanceof n.TemplateResult?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):exports.isIterable(t)?this.__commitIterable(t):t===i.nothing?(this.value=i.nothing,this.clear()):this.__commitText(t))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof s.TemplateInstance&&this.value.template===t)this.value.update(e.values);else{const i=new s.TemplateInstance(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const n of e)void 0===(i=t[s])&&void 0===i&&(i=h(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(n),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){t.removeNodes(this.startNode.parentNode,e.nextSibling,this.endNode)}}exports.NodePart=l;class u{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;e.isDirective(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i.noChange,e(this)}if(this.__pendingValue===i.noChange)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=i.noChange}}exports.BooleanAttributePart=u;class d extends o{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new c(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}exports.PropertyCommitter=d;class c extends a{}exports.PropertyPart=c;let p=!1;try{const e={get capture(){return p=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(v){}class _{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;e.isDirective(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i.noChange,e(this)}if(this.__pendingValue===i.noChange)return;const t=this.__pendingValue,s=this.value,n=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),r=null!=t&&(null==s||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=m(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=i.noChange}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}exports.EventPart=_;const m=e=>e&&(p?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
},{"./directive":"LD9u","./dom":"F3pP","./part":"ynuv","./template-instance":"c92z","./template-result":"ZIgH","./template":"HLpd"}],"EVc8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./parts");class t{handleAttributeExpressions(t,r,s,n){const o=r[0];if("."===o){return new e.PropertyCommitter(t,r.slice(1),s).parts}return"@"===o?[new e.EventPart(t,r.slice(1),n.eventContext)]:"?"===o?[new e.BooleanAttributePart(t,r.slice(1),s)]:new e.AttributeCommitter(t,r,s).parts}handleTextExpression(t){return new e.NodePart(t)}}exports.DefaultTemplateProcessor=t,exports.defaultTemplateProcessor=new t;
},{"./parts":"zoHw"}],"CXTr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./template");function t(t){let r=exports.templateCaches.get(t.type);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},exports.templateCaches.set(t.type,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(e.marker);return void 0===(s=r.keyString.get(n))&&(s=new e.Template(t,t.getTemplateElement()),r.keyString.set(n,s)),r.stringsArray.set(t.strings,s),s}exports.templateFactory=t,exports.templateCaches=new Map;
},{"./template":"HLpd"}],"GdJo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./dom"),t=require("./parts"),r=require("./template-factory");exports.parts=new WeakMap,exports.render=((s,o,a)=>{let p=exports.parts.get(o);void 0===p&&(e.removeNodes(o,o.firstChild),exports.parts.set(o,p=new t.NodePart(Object.assign({templateFactory:r.templateFactory},a))),p.appendInto(o)),p.setValue(s),p.commit()});
},{"./dom":"F3pP","./parts":"zoHw","./template-factory":"CXTr"}],"ggSM":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}l((r=r.apply(e,t||[])).next())})},t=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}};Object.defineProperty(exports,"__esModule",{value:!0});const n=require("../lit-html.js");exports.asyncAppend=n.directive((r,o)=>i=>e(this,void 0,void 0,function*(){var e,a;if(!(i instanceof n.NodePart))throw new Error("asyncAppend can only be used in text bindings");if(r===i.value)return;let c;i.value=r;let l=0;try{for(var u,s=t(r);!(u=yield s.next()).done;){let e=u.value;if(i.value!==r)break;0===l&&i.clear(),void 0!==o&&(e=o(e,l));let t=i.startNode;void 0!==c&&(t=n.createMarker(),c.endNode=t,i.endNode.parentNode.insertBefore(t,i.endNode)),(c=new n.NodePart(i.options)).insertAfterNode(t),c.setValue(e),c.commit(),l++}}catch(d){e={error:d}}finally{try{u&&!u.done&&(a=s.return)&&(yield a.call(s))}finally{if(e)throw e.error}}}));
},{"../lit-html.js":"bTF2"}],"s2RD":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}l((r=r.apply(e,t||[])).next())})},t=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}};Object.defineProperty(exports,"__esModule",{value:!0});const n=require("../lit-html.js");exports.asyncReplace=n.directive((r,o)=>i=>e(this,void 0,void 0,function*(){var e,a;if(!(i instanceof n.NodePart))throw new Error("asyncReplace can only be used in text bindings");if(r===i.value)return;const c=new n.NodePart(i.options);i.value=r;let l=0;try{for(var u,s=t(r);!(u=yield s.next()).done;){let e=u.value;if(i.value!==r)break;0===l&&(i.clear(),c.appendIntoPart(i)),void 0!==o&&(e=o(e,l)),c.setValue(e),c.commit(),l++}}catch(f){e={error:f}}finally{try{u&&!u.done&&(a=s.return)&&(yield a.call(s))}finally{if(e)throw e.error}}}));
},{"../lit-html.js":"bTF2"}],"QIUD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../lib/template-instance.js"),t=require("../lit-html.js"),n=new WeakMap;exports.cache=t.directive(a=>o=>{if(!(o instanceof t.NodePart))throw new Error("cache can only be used in text bindings");let s=n.get(o);void 0===s&&(s=new WeakMap,n.set(o,s));const i=o.value;if(i instanceof e.TemplateInstance){if(a instanceof t.TemplateResult&&i.template===o.options.templateFactory(a))return void o.setValue(a);{let e=s.get(i.template);void 0===e&&(e={instance:i,nodes:document.createDocumentFragment()},s.set(i.template,e)),t.reparentNodes(e.nodes,o.startNode.nextSibling,o.endNode)}}if(a instanceof t.TemplateResult){const e=o.options.templateFactory(a),t=s.get(e);void 0!==t&&(o.setValue(t.nodes),o.commit(),o.value=t.instance)}o.setValue(a)});
},{"../lib/template-instance.js":"c92z","../lit-html.js":"bTF2"}],"p8kd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../lit-html.js"),e=new WeakMap;exports.classMap=t.directive(s=>r=>{if(!(r instanceof t.AttributePart)||r instanceof t.PropertyPart||"class"!==r.committer.name||r.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=r,{element:n}=i;e.has(r)||(n.className=i.strings.join(" "));const{classList:a}=n,o=e.get(r);for(const t in o)t in s||a.remove(t);for(const t in s){const e=s[t];if(!o||e!==o[t]){a[e?"add":"remove"](t)}}e.set(r,s)});
},{"../lit-html.js":"bTF2"}],"TYrz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const r=require("../lit-html.js"),e=new WeakMap;exports.guard=r.directive((r,t)=>s=>{const a=e.get(s);if(Array.isArray(r)){if(Array.isArray(a)&&a.length===r.length&&r.every((r,e)=>r===a[e]))return}else if(a===r&&(void 0!==r||e.has(s)))return;s.setValue(t()),e.set(s,Array.isArray(r)?Array.from(r):r)});
},{"../lit-html.js":"bTF2"}],"oaiK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../lit-html.js");exports.ifDefined=e.directive(t=>i=>{if(void 0===t&&i instanceof e.AttributePart){if(t!==i.value){const e=i.committer.name;i.committer.element.removeAttribute(e)}}else i.setValue(t)});
},{"../lit-html.js":"bTF2"}],"GDtx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../lit-html.js"),t=(t,o)=>{const r=t.startNode.parentNode,n=void 0===o?t.endNode:o.startNode,s=r.insertBefore(e.createMarker(),n);r.insertBefore(e.createMarker(),n);const l=new e.NodePart(t.options);return l.insertAfterNode(s),l},o=(e,t)=>(e.setValue(t),e.commit(),e),r=(t,o,r)=>{const n=t.startNode.parentNode,s=r?r.startNode:t.endNode,l=o.endNode.nextSibling;l!==s&&e.reparentNodes(n,o.startNode,l,s)},n=t=>{e.removeNodes(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},s=(e,t,o)=>{const r=new Map;for(let n=t;n<=o;n++)r.set(e[n],n);return r},l=new WeakMap,i=new WeakMap;exports.repeat=e.directive((d,a,f)=>{let c;return void 0===f?f=a:void 0!==a&&(c=a),a=>{if(!(a instanceof e.NodePart))throw new Error("repeat can only be used in text bindings");const N=l.get(a)||[],u=i.get(a)||[],p=[],g=[],v=[];let h,w,M=0;for(const e of d)v[M]=c?c(e,M):M,g[M]=f(e,M),M++;let b=0,x=N.length-1,k=0,m=g.length-1;for(;b<=x&&k<=m;)if(null===N[b])b++;else if(null===N[x])x--;else if(u[b]===v[k])p[k]=o(N[b],g[k]),b++,k++;else if(u[x]===v[m])p[m]=o(N[x],g[m]),x--,m--;else if(u[b]===v[m])p[m]=o(N[b],g[m]),r(a,N[b],p[m+1]),b++,m--;else if(u[x]===v[k])p[k]=o(N[x],g[k]),r(a,N[x],N[b]),x--,k++;else if(void 0===h&&(h=s(v,k,m),w=s(u,b,x)),h.has(u[b]))if(h.has(u[x])){const e=w.get(v[k]),n=void 0!==e?N[e]:null;if(null===n){const e=t(a,N[b]);o(e,g[k]),p[k]=e}else p[k]=o(n,g[k]),r(a,n,N[b]),N[e]=null;k++}else n(N[x]),x--;else n(N[b]),b++;for(;k<=m;){const e=t(a,p[m+1]);o(e,g[k]),p[k++]=e}for(;b<=x;){const e=N[b++];null!==e&&n(e)}l.set(a,p),i.set(a,v)}});
},{"../lit-html.js":"bTF2"}],"PJrB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../lit-html.js"),e=new WeakMap;exports.styleMap=t.directive(r=>s=>{if(!(s instanceof t.AttributePart)||s instanceof t.PropertyPart||"style"!==s.committer.name||s.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:n}=s,{style:i}=n.element;e.has(s)||(i.cssText=n.strings.join(" "));const o=e.get(s);for(const t in o)t in r||(-1===t.indexOf("-")?i[t]=null:i.removeProperty(t));for(const t in r)-1===t.indexOf("-")?i[t]=r[t]:i.setProperty(t,r[t]);e.set(s,r)});
},{"../lit-html.js":"bTF2"}],"AKci":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../lib/parts.js"),t=require("../lit-html.js"),n=new WeakMap;exports.unsafeHTML=t.directive(r=>i=>{if(!(i instanceof t.NodePart))throw new Error("unsafeHTML can only be used in text bindings");const s=n.get(i);if(void 0!==s&&e.isPrimitive(r)&&r===s.value&&i.value===s.fragment)return;const o=document.createElement("template");o.innerHTML=r;const a=document.importNode(o.content,!0);i.setValue(a),n.set(i,{value:r,fragment:a})});
},{"../lib/parts.js":"zoHw","../lit-html.js":"bTF2"}],"Laul":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../lib/parts.js"),t=require("../lit-html.js"),s=new WeakMap,n=2147483647;exports.until=t.directive((...t)=>l=>{let d=s.get(l);void 0===d&&(d={lastRenderedIndex:n,values:[]},s.set(l,d));const r=d.values;let i=r.length;d.values=t;for(let s=0;s<t.length&&!(s>d.lastRenderedIndex);s++){const a=t[s];if(e.isPrimitive(a)||"function"!=typeof a.then){l.setValue(a),d.lastRenderedIndex=s;break}s<i&&a===r[s]||(d.lastRenderedIndex=n,i=0,Promise.resolve(a).then(e=>{const t=d.values.indexOf(a);t>-1&&t<d.lastRenderedIndex&&(d.lastRenderedIndex=t,l.setValue(e),l.commit())}))}});
},{"../lib/parts.js":"zoHw","../lit-html.js":"bTF2"}],"hZHT":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./async-append")),e(require("./async-replace")),e(require("./cache")),e(require("./class-map")),e(require("./guard")),e(require("./if-defined")),e(require("./repeat")),e(require("./style-map")),e(require("./unsafe-html")),e(require("./until"));
},{"./async-append":"ggSM","./async-replace":"s2RD","./cache":"QIUD","./class-map":"p8kd","./guard":"TYrz","./if-defined":"oaiK","./repeat":"GDtx","./style-map":"PJrB","./unsafe-html":"AKci","./until":"Laul"}],"bTF2":[function(require,module,exports) {
"use strict";function e(e){for(var t in e)exports.hasOwnProperty(t)||(exports[t]=e[t])}Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./lib/default-template-processor.js"),r=require("./lib/template-result.js");var s=require("./lib/default-template-processor.js");exports.DefaultTemplateProcessor=s.DefaultTemplateProcessor,exports.defaultTemplateProcessor=s.defaultTemplateProcessor;var a=require("./lib/directive");exports.directive=a.directive,exports.isDirective=a.isDirective;var o=require("./lib/dom.js");exports.removeNodes=o.removeNodes,exports.reparentNodes=o.reparentNodes;var i=require("./lib/part.js");exports.noChange=i.noChange,exports.nothing=i.nothing;var p=require("./lib/parts.js");exports.AttributeCommitter=p.AttributeCommitter,exports.AttributePart=p.AttributePart,exports.BooleanAttributePart=p.BooleanAttributePart,exports.EventPart=p.EventPart,exports.isIterable=p.isIterable,exports.isPrimitive=p.isPrimitive,exports.NodePart=p.NodePart,exports.PropertyCommitter=p.PropertyCommitter,exports.PropertyPart=p.PropertyPart;var l=require("./lib/render.js");exports.parts=l.parts,exports.render=l.render;var m=require("./lib/template-factory.js");exports.templateCaches=m.templateCaches,exports.templateFactory=m.templateFactory;var u=require("./lib/template-instance.js");exports.TemplateInstance=u.TemplateInstance;var n=require("./lib/template-result.js");exports.SVGTemplateResult=n.SVGTemplateResult,exports.TemplateResult=n.TemplateResult;var x=require("./lib/template.js");exports.createMarker=x.createMarker,exports.isTemplatePartActive=x.isTemplatePartActive,exports.Template=x.Template,(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0"),exports.html=((e,...s)=>new r.TemplateResult(e,s,"html",t.defaultTemplateProcessor)),exports.svg=((e,...s)=>new r.SVGTemplateResult(e,s,"svg",t.defaultTemplateProcessor)),e(require("./directives/index"));
},{"./lib/default-template-processor.js":"EVc8","./lib/template-result.js":"ZIgH","./lib/directive":"LD9u","./lib/dom.js":"F3pP","./lib/part.js":"ynuv","./lib/parts.js":"zoHw","./lib/render.js":"GdJo","./lib/template-factory.js":"CXTr","./lib/template-instance.js":"c92z","./lib/template.js":"HLpd","./directives/index":"hZHT"}],"CQBs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./template.js"),t=133;function n(e,n){const{element:{content:r},parts:l}=e,u=document.createTreeWalker(r,t,null,!1);let c=o(l),d=l[c],s=-1,i=0;const a=[];let p=null;for(;u.nextNode();){s++;const e=u.currentNode;for(e.previousSibling===p&&(p=null),n.has(e)&&(a.push(e),null===p&&(p=e)),null!==p&&i++;void 0!==d&&d.index===s;)d.index=null!==p?-1:d.index-i,d=l[c=o(l,c)]}a.forEach(e=>e.parentNode.removeChild(e))}exports.removeNodesFromTemplate=n;const r=e=>{let n=11===e.nodeType?0:1;const r=document.createTreeWalker(e,t,null,!1);for(;r.nextNode();)n++;return n},o=(t,n=-1)=>{for(let r=n+1;r<t.length;r++){const n=t[r];if(e.isTemplatePartActive(n))return r}return-1};function l(e,n,l=null){const{element:{content:u},parts:c}=e;if(null==l)return void u.appendChild(n);const d=document.createTreeWalker(u,t,null,!1);let s=o(c),i=0,a=-1;for(;d.nextNode();){for(a++,d.currentNode===l&&(i=r(n),l.parentNode.insertBefore(n,l));-1!==s&&c[s].index===a;){if(i>0){for(;-1!==s;)c[s].index+=i,s=o(c,s);return}s=o(c,s)}}}exports.insertNodeIntoTemplate=l;
},{"./template.js":"HLpd"}],"zCSZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./dom.js"),t=require("./modify-template.js"),r=require("./render.js"),s=require("./template-factory.js"),o=require("./template-instance.js"),n=require("./template-result.js"),a=require("./template.js");var l=require("../lit-html.js");exports.html=l.html,exports.svg=l.svg,exports.TemplateResult=l.TemplateResult;const i=(e,t)=>`${e}--${t}`;let d=!0;void 0===window.ShadyCSS?d=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),d=!1);const p=e=>t=>{const r=i(t.type,e);let o=s.templateCaches.get(r);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},s.templateCaches.set(r,o));let n=o.stringsArray.get(t.strings);if(void 0!==n)return n;const l=t.strings.join(a.marker);if(void 0===(n=o.keyString.get(l))){const r=t.getTemplateElement();d&&window.ShadyCSS.prepareTemplateDom(r,e),n=new a.Template(t,r),o.keyString.set(l,n)}return o.stringsArray.set(t.strings,n),n},m=["html","svg"],c=e=>{m.forEach(r=>{const o=s.templateCaches.get(i(r,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:r}}=e,s=new Set;Array.from(r.querySelectorAll("style")).forEach(e=>{s.add(e)}),t.removeNodesFromTemplate(e,s)})})},S=new Set,y=(e,r,s)=>{S.add(s);const o=e.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(r.element,s);const a=document.createElement("style");for(let t=0;t<n;t++){const e=o[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}c(s);const l=r.element.content;t.insertNodeIntoTemplate(r,a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(r.element,s);const i=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==i)e.insertBefore(i.cloneNode(!0),e.firstChild);else{l.insertBefore(a,l.firstChild);const e=new Set;e.add(a),t.removeNodesFromTemplate(r,e)}};exports.render=((t,s,a)=>{if(!a||"object"!=typeof a||!a.scopeName)throw new Error("The `scopeName` option is required.");const l=a.scopeName,i=r.parts.has(s),m=d&&11===s.nodeType&&!!s.host&&t instanceof n.TemplateResult,c=m&&!S.has(l),h=c?document.createDocumentFragment():s;if(r.render(t,h,Object.assign({templateFactory:p(l)},a)),c){const t=r.parts.get(h);r.parts.delete(h),t.value instanceof o.TemplateInstance&&y(h,t.value.template,l),e.removeNodes(s,s.firstChild),s.appendChild(h),r.parts.set(s,t)}!i&&m&&window.ShadyCSS.styleElement(s.host)});
},{"./dom.js":"F3pP","./modify-template.js":"CQBs","./render.js":"GdJo","./template-factory.js":"CXTr","./template-instance.js":"c92z","./template-result.js":"ZIgH","./template.js":"HLpd","../lit-html.js":"bTF2"}],"kj3A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../lit-html/lit-html"),s=new WeakMap;exports.subscribe=e.directive(e=>r=>{if(!("then"in e||"subscribe"in e))throw new Error("subscribableOrPromiseLike must be a subscribable or a promise like");const i=s.get(r);if(void 0!==i&&e===i.subscribableOrPromiseLike)return;const t=t=>{void 0!==i&&r.value===i.value&&e===i.subscribableOrPromiseLike||(r.setValue(t),r.commit(),s.set(r,{value:t,subscribableOrPromiseLike:e}))};"then"in e?e.then(t):e.subscribe(t)}),exports.async=exports.subscribe;
},{"../lit-html/lit-html":"bTF2"}],"UtvA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../lit-rx"),t=require("rxjs"),r=require("rxjs/operators");function o(o){return(c,n)=>{const s=c.constructor.prototype.connectedCallback||function(){};c.constructor.prototype.connectedCallback=function(){return o&&(this[n]=e.async(this[n].pipe(r.shareReplay({scheduler:t.animationFrameScheduler,refCount:!0})))),this[n]=e.async(this[n]),s.call(this)}}}exports.TemplateObservable=o;
},{"../lit-rx":"kj3A","rxjs":"iRqj","rxjs/operators":"cVrl"}],"Xj1L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/core"),t=require("../lit-html/lit-html"),n=require("rxjs"),o=(e,t,n)=>(window.customElements.define(e,t,n),t),s=(e,t,n)=>{const{kind:o,elements:s}=t;return{kind:o,elements:s,finisher(t){window.customElements.define(e,t,n)}}},r=()=>{let t;try{(t=e.Container.get("router-outlet").getValue()).unfreezeRouter()}catch(n){}};exports.customElement=((i,l={})=>c=>{if(!i||i&&i.indexOf("-")<=0)throw new Error(`You need at least 1 dash in the custom element name! ${c}`);const p=c;p.is=(()=>i),p.setElement=(e=>(l.container=e,p)),l.styles=l.styles||[],p.prototype.getTemplateResult=function(){return this};const a=p.prototype.OnInit||function(){},d=p.prototype.OnDestroy||function(){},u=p.prototype.OnUpdate||function(){},h=p.prototype.OnUpdateFirst||function(){},y=p.prototype.connectedCallback||function(){},m=p.prototype.disconnectedCallback||function(){},f=p.prototype.update||function(){},b=p.prototype.firstUpdated||function(){};l.template||(l.template=p.prototype.render),l.style&&l.styles.push(l.style),p.styles=l.styles,p.subscriptions=new Map,p.prototype.render=l.template;const x=p.prototype.render||function(){};p.prototype.OnInit=function(){if(l.container&&(t.render(l.template.call(this),l.container),l.style)){const e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=l.style.toString():e.appendChild(document.createTextNode(l.style.toString())),l.container.prepend(e)}return a.call(this)},p.prototype.disconnectedCallback=function(){l.providers&&l.providers.length&&l.providers.forEach(t=>{console.log(t,"Will be removed"),e.Container.reset(t),e.Container.remove(t)}),p.subscriptions.forEach(e=>e.unsubscribe()),d.call(this),m.call(this),r()},p.prototype.render=function(){return x.call(this)},p.prototype.update=function(){f.call(this),u.call(this)},p.prototype.firstUpdated=function(){b.call(this),h.call(this)},p.prototype.connectedCallback=function(){if(l.providers&&l.providers.length&&(console.log(l.providers),l.providers.forEach(t=>e.Container.get(t))),Object.keys(this).forEach(e=>{if(n.isObservable(this[e])){const t=this[e].subscribe.bind(this[e]);this[e].subscribe=((e,n)=>{const o=t(e,n);return p.subscriptions.set(o,o),o})}}),l.template||(l.template=(()=>t.html``)),!this.performUpdate){l.template=l.template.bind(this);const e=document.importNode(l.template(this).getTemplateElement().content,!0);if(l.style){const t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=l.style.toString():t.appendChild(document.createTextNode(l.style.toString())),e.append(t)}l.useShadow?this.attachShadow({mode:"open"}).append(e):this.appendChild(e)}y.call(this),a.call(this)},"function"==typeof p?o(i,p,{extends:l.extends}):s(i,p,{extends:l.extends}),e.Component(l)(p)}),exports.Component=(e=>exports.customElement(e.selector,e));
},{"@rxdi/core":"lhgc","../lit-html/lit-html":"bTF2","rxjs":"iRqj"}],"QI8l":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class e extends HTMLElement{}exports.RXDIElement=e;
},{}],"LAnW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/core");function t(e,t){return e.setElement(t),e}function r(t){return e.Container.get(t)}function n(e){return e.getTemplateResult()}exports.setElement=t,exports.MockComponent=r,exports.getTemplateResult=n;
},{"@rxdi/core":"lhgc"}],"EeXj":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./template-observable")),e(require("./component.decorator")),e(require("./tokens")),e(require("./test.helpers"));
},{"./template-observable":"UtvA","./component.decorator":"Xj1L","./tokens":"QI8l","./test.helpers":"LAnW"}],"PL0W":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,r,s){return new(r||(r=Promise))(function(i,o){function a(t){try{p(s.next(t))}catch(e){o(e)}}function n(t){try{p(s.throw(t))}catch(e){o(e)}}function p(t){t.done?i(t.value):new r(function(e){e(t.value)}).then(a,n)}p((s=s.apply(t,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../decorators/index");window.JSCompiler_renameProperty=((t,e)=>t),exports.defaultConverter={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},exports.notEqual=((t,e)=>e!==t&&(e==e||t==t));const r={attribute:!0,type:String,converter:exports.defaultConverter,reflect:!1,hasChanged:exports.notEqual},s=Promise.resolve(!0),i=1,o=4,a=8,n=16,p=32;class h extends e.RXDIElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=s,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const s=this._attributeNameForProperty(r,e);void 0!==s&&(this._attributeToPropertyMap.set(s,r),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=r){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const r=this[t];this[s]=e,this._requestUpdate(t,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=exports.notEqual){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,s=e.converter||exports.defaultConverter,i="function"==typeof s?s:s.fromAttribute;return i?i(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,s=e.converter;return(s&&s.toAttribute||exports.defaultConverter.toAttribute)(t,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|p,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,s=r){const i=this.constructor,o=i._attributeNameForProperty(t,s);if(void 0!==o){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|a,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=this._updateState&~a}}_attributeToProperty(t,e){if(this._updateState&a)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||r;this._updateState=this._updateState|n,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~n}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,o=i._classProperties.get(t)||r;i._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||this._updateState&n||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}_enqueueUpdate(){return t(this,void 0,void 0,function*(){let t,e;this._updateState=this._updateState|o;const r=this._updatePromise;this._updatePromise=new Promise((r,s)=>{t=r,e=s});try{yield r}catch(s){}this._hasConnected||(yield new Promise(t=>this._hasConnectedResolver=t));try{const t=this.performUpdate();null!=t&&(yield t)}catch(s){e(s)}t(!this._hasRequestedUpdate)})}get _hasConnected(){return this._updateState&p}get _hasRequestedUpdate(){return this._updateState&o}get hasUpdated(){return this._updateState&i}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(r){throw t=!1,r}finally{this._markUpdated()}t&&(this._updateState&i||(this._updateState=this._updateState|i,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~o}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}h.finalized=!0,exports.UpdatingElement=h;
},{"../../decorators/index":"EeXj"}],"aAt2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=(e,t)=>(window.customElements.define(e,t),t),t=(e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}},r=r=>n=>"function"==typeof n?e(r,n):t(r,n),n=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}}),i=(e,t,r)=>{t.constructor.createProperty(r,e)};function o(e){return(t,r)=>void 0!==r?i(e,t,r):n(e,t)}function s(e){return(t,r)=>{const n={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?u(n,t,r):l(n,t)}}function c(e){return(t,r)=>{const n={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==r?u(n,t,r):l(n,t)}}exports.property=o,exports.query=s,exports.queryAll=c;const u=(e,t,r)=>{Object.defineProperty(t,r,e)},l=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),d=(e,t)=>Object.assign({},t,{finisher(r){Object.assign(r.prototype[t.key],e)}}),p=(e,t,r)=>{Object.assign(t[r],e)};exports.eventOptions=(e=>(t,r)=>void 0!==r?p(e,t,r):d(e,t));
},{}],"GNBJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.supportsAdoptingStyleSheets="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;const e=Symbol();class t{constructor(t,s){if(s!==e)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(exports.supportsAdoptingStyleSheets?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}exports.CSSResult=t,exports.unsafeCSS=(s=>new t(String(s),e));const s=e=>{if(e instanceof t)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)};exports.css=((r,...n)=>{const o=n.reduce((e,t,n)=>e+s(t)+r[n+1],r[0]);return new t(o,e)});
},{}],"IGkF":[function(require,module,exports) {
"use strict";function e(e){for(var t in e)exports.hasOwnProperty(t)||(exports[t]=e[t])}Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../lit-html/lit-html"),s=require("../lit-html/lib/shady-render"),i=require("./lib/updating-element");e(require("./lib/updating-element")),e(require("./lib/decorators"));const r=require("./lib/css-tag");function n(e,t=[]){for(let s=0,i=e.length;s<i;s++){const i=e[s];Array.isArray(i)?n(i,t):t.push(i)}return t}e(require("./lib/css-tag")),(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const o=e=>e.flat?e.flat(1/0):n(e);class d extends i.UpdatingElement{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){o(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow?this.attachShadow({mode:"open"}):this}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?r.supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const s=this.render();s instanceof t.TemplateResult&&this.constructor.render(s,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}d.finalized=!0,d.render=s.render,exports.LitElement=d;
},{"../lit-html/lit-html":"bTF2","../lit-html/lib/shady-render":"zCSZ","./lib/updating-element":"PL0W","./lib/decorators":"aAt2","./lib/css-tag":"GNBJ"}],"u6yF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../lit-element/lit-element");class t extends e.LitElement{createRenderRoot(){return this}}exports.BaseComponent=t;
},{"../lit-element/lit-element":"IGkF"}],"R8ie":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./mixins/index")),e(require("./decorators/index")),e(require("./lit-html/lit-html")),e(require("./lit-rx/index")),e(require("./lit-element/lit-element"));
},{"./mixins/index":"u6yF","./decorators/index":"EeXj","./lit-html/lit-html":"bTF2","./lit-rx/index":"kj3A","./lit-element/lit-element":"IGkF"}],"K9Mm":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/core"),s=require("rxjs"),r=require("rxjs/operators"),n=require("@rxdi/lit-html");let i=class{constructor(){this.openSubject=new s.BehaviorSubject({left:-270}),this.template=new s.ReplaySubject,this.stylesSubject=new s.BehaviorSubject(n.css`
    :host {
      position: absolute;
      top: 0;
      transition: left 0.3s ease-out;
      bottom: 0;
      left: -270px;
      box-sizing: border-box;
      min-width: 270px;
      background: #fff;
      overflow-y: auto;
    }
  `)}getOpenSubject(){return this.openSubject.asObservable()}getTemplateSubject(){return this.template.asObservable()}getStylesSubject(){return this.stylesSubject.asObservable()}setStylesSubject(e){this.stylesSubject.next(e)}open(e={navOptions:{left:0,delay:20}}){this.removeRef(),this.createRef(),this.attachRef(e.ref),e.styles&&this.stylesSubject.next(e.styles),this.template.next(e.template||n.html``),this.openSubject.next(e.navOptions)}getNavRef(){return this.navRef}close(e={left:-270,delay:300}){this.openSubject.pipe(r.take(1),r.delay(e.delay)).subscribe(()=>this.removeRef()),this.openSubject.next(e)}removeRef(){this.navRef&&(this.navRef.remove(),this.navRef=null)}createRef(){this.navRef=document.createElement("rx-nav")}attachRef(e){return e?e.appendChild(this.navRef):document.body.appendChild(this.navRef)}};i=e([t.Injectable({init:!0})],i),exports.Nav=i;
},{"@rxdi/core":"lhgc","rxjs":"iRqj","rxjs/operators":"cVrl","@rxdi/lit-html":"R8ie"}],"oiGC":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,s,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(l=(r<3?a(l):r>3?a(t,s,l):a(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const i=require("@rxdi/lit-html"),a=require("@rxdi/core"),r=require("./nav.service"),l=require("rxjs/operators"),n=require("rxjs");let o=class extends i.LitElement{constructor(){super(...arguments),this.styles=this.nav.getStylesSubject(),this.template=this.nav.getTemplateSubject(),this.defaultDelay=30,this.openSubject=this.nav.getOpenSubject().pipe(l.mergeMap(e=>n.of(e).pipe(l.delay(this.initDelaySet?this.defaultDelay:e.delay||this.defaultDelay),l.tap(()=>this.initDelaySet=!0))),l.map(e=>i.html`
        <style>
          :host {
            left: ${e.left}px;
          }
        </style>
      `))}close(){this.nav.close()}};t([a.Inject(r.Nav),s("design:type","function"==typeof(e=void 0!==r.Nav&&r.Nav)?e:Object)],o.prototype,"nav",void 0),o=t([i.Component({selector:"rx-nav",template(){return i.html`
      <style>
          :host {
          z-index: 1000;
        }
          ${i.async(this.styles)}
      </style>
      ${i.async(this.openSubject)} ${i.async(this.template)}
    `}})],o),exports.NavComponent=o;
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","./nav.service":"K9Mm","rxjs/operators":"cVrl","rxjs":"iRqj"}],"e2p2":[function(require,module,exports) {
"use strict";var e,r=this&&this.__decorate||function(e,r,t,o){var n,c=arguments.length,i=c<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,t,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(r,t,i):n(r,t))||i);return c>3&&i&&Object.defineProperty(r,t,i),i};function t(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/core"),n=require("./nav.service"),c=require("./nav.component");let i=e=class{static forRoot(){return{module:e,providers:[n.Nav],components:[c.NavComponent]}}};i=e=r([o.Module()],i),exports.NavModule=i,t(require("./nav.component")),t(require("./nav.service"));
},{"@rxdi/core":"lhgc","./nav.service":"K9Mm","./nav.component":"oiGC"}],"XCbS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppComponent=void 0;var e,t=require("@rxdi/lit-html"),o=require("@rxdi/core"),n=require("../../../src/nav"),r=require("rxjs/operators"),i=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends t.LitElement{OnInit(){this.openNav()}openNav(){this.navService.getNavRef()||this.navService.open({navOptions:{delay:0,left:0},template:t.html`
        <nav-component></nav-component>
      `,styles:t.css`
        :host {
          position: relative;
          top: 0;
          /* transition: left 0.3s ease-out; */
          bottom: 0;
          left: -270px;
          box-sizing: border-box;
          background: #fff;
          overflow-y: auto;
        }
      `,ref:document.getElementById("rx-nav")})}closeNav(){this.navService.close()}};exports.AppComponent=a,i([(0,o.Inject)(n.Nav),l("design:type","function"==typeof(e=void 0!==n.Nav&&n.Nav)?e:Object)],a.prototype,"navService",void 0),exports.AppComponent=a=i([(0,t.Component)({selector:"app-component",template(){return t.html`
      <!-- ${(0,t.async)(this.navService.getOpenSubject().pipe((0,r.map)(e=>e.left>=0?t.html`
                <style>
                  .test {
                    margin-left: 500px;
                  }
                </style>
              `:(console.log("vlizam"),t.html`
              <style>
                .test {
                  margin-left: 0px;
                }
              </style>
            `))))} -->
      <style>
      /*  */
      </style>
      <div style="display: flex">
        <div class="rx-nav" id="rx-nav"></div>
        <div class="test" style="transition: margin-left .5s;width: 100%;">
          <div style="display: flex;     ">
            <rx-button
              palette="primary"
              @click=${()=>this.openNav()}
              style="width: 100%; background-color: red"
            >
              OpenNav
            </rx-button>
            <rx-button
              palette="primary"
              @click=${()=>this.closeNav()}
              style="width: 100%; background-color: red"
            >
              CloseNav
            </rx-button>
          </div>

          <router-outlet></router-outlet>
        </div>
      </div>
    `},container:document.getElementById("app")})],a);
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","../../../src/nav":"e2p2","rxjs/operators":"cVrl"}],"hRlH":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,a=0,n=t.Prism={util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function(e){switch(n.util.type(e)){case"Object":var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=n.util.clone(e[a]));return t;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var i=(r=r||n.languages)[e];if(2==arguments.length){for(var s in a=arguments[1])a.hasOwnProperty(s)&&(i[s]=a[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);l[o]=i[o]}return n.languages.DFS(n.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,t,a,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),s=0;r=i[s++];)n.highlightElement(r,!0===e,a.callback)},highlightElement:function(a,r,i){for(var s,l,o=a;o&&!e.test(o.className);)o=o.parentNode;o&&(s=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[s]),a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var c={element:a,language:s,grammar:l,code:a.textContent};if(n.hooks.run("before-sanity-check",c),c.code&&c.grammar)if(n.hooks.run("before-highlight",c),r&&t.Worker){var u=new Worker(n.filename);u.onmessage=function(e){c.highlightedCode=e.data,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=n.highlight(c.code,c.grammar,c.language),n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(a),n.hooks.run("after-highlight",c),n.hooks.run("complete",c);else n.hooks.run("complete",c)},highlight:function(e,t,a){var i=n.tokenize(e,t);return r.stringify(n.util.encode(i),a)},tokenize:function(e,t,a){var r=n.Token,i=[e],s=t.rest;if(s){for(var l in s)t[l]=s[l];delete t.rest}e:for(var l in t)if(t.hasOwnProperty(l)&&t[l]){var o=t[l];o="Array"===n.util.type(o)?o:[o];for(var c=0;c<o.length;++c){var u=o[c],g=u.inside,p=!!u.lookbehind,d=!!u.greedy,f=0,h=u.alias;if(d&&!u.pattern.global){var m=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,m+"g")}u=u.pattern||u;for(var b=0,y=0;b<i.length;y+=i[b].length,++b){var w=i[b];if(i.length>e.length)break e;if(!(w instanceof r)){u.lastIndex=0;var v=1;if(!(j=u.exec(w))&&d&&b!=i.length-1){if(u.lastIndex=y,!(j=u.exec(e)))break;for(var k=j.index+(p?j[1].length:0),x=j.index+j[0].length,_=b,A=y,S=i.length;_<S&&A<x;++_)k>=(A+=i[_].length)&&(++b,y=A);if(i[b]instanceof r||i[_-1].greedy)continue;v=_-b,w=e.slice(y,A),j.index-=y}if(j){p&&(f=j[1].length);x=(k=j.index+f)+(j=j[0].slice(f)).length;var j,L=w.slice(0,k),C=w.slice(x),N=[b,v];L&&N.push(L);var P=new r(l,g?n.tokenize(j,g):j,h,j,d);N.push(P),C&&N.push(C),Array.prototype.splice.apply(i,N)}}}}}return i},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},r=n.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(r.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(a){return r.stringify(a,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}n.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=(l?" ":"")+o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(l?" "+l:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(t.addEventListener("message",function(e){var a=JSON.parse(e.data),r=a.language,i=a.code,s=a.immediateClose;t.postMessage(n.highlight(i,n.languages[r],r)),s&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),t.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=a),void 0!==e&&(e.Prism=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|async|await|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,a.languages.c=a.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),a.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0},directive:{pattern:/(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,lookbehind:!0,alias:"keyword"}}},constant:/\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/}),delete a.languages.c["class-name"],delete a.languages.c.boolean,a.languages.csharp=a.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,/("|')(\\?.)*?\1/],number:/\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i}),a.languages.insertBefore("csharp","keyword",{"generic-method":{pattern:/[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,alias:"function",inside:{keyword:a.languages.csharp.keyword,punctuation:/[<>(),.:]/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}}),a.languages.cpp=a.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,boolean:/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),a.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}}),a.languages.java=a.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),a.languages.insertBefore("java","function",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0}}),a.languages.json={property:/"(?:\\.|[^|"])*"(?=\s*:)/gi,string:/"(?!:)(?:\\.|[^|"])*"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,boolean:/\b(true|false)\b/gi,null:/\bnull\b/gi},a.languages.jsonp=a.languages.json,function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;var a=e.util.clone(e.languages.jsx);delete a.punctuation,a=e.languages.insertBefore("jsx","operator",{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:a}),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:a,alias:"language-javascript"}},e.languages.jsx.tag)}(a),a.languages.scss=a.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-_\w]+/,variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}}}),a.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),a.languages.scss.property={pattern:/(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}},a.languages.insertBefore("scss","important",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),a.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),a.languages.scss.atrule.inside.rest=a.util.clone(a.languages.scss),a.languages.typescript=a.languages.extend("javascript",{keyword:/\b(break|case|async|await|readonly|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/}),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e={html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",asciidoc:"AsciiDoc",aspnet:"ASP.NET (C#)",autoit:"AutoIt",autohotkey:"AutoHotkey",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",fsharp:"F#",glsl:"GLSL",graphql:"GraphQL",http:"HTTP",inform7:"Inform 7",json:"JSON",latex:"LaTeX",livescript:"LiveScript",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",parigp:"PARI/GP",php:"PHP","php-extras":"PHP Extras",powershell:"PowerShell",properties:".properties",protobuf:"Protocol Buffers",jsx:"React JSX",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vhdl:"VHDL",vim:"vim",wiki:"Wiki markup",xojo:"Xojo (REALbasic)",yaml:"YAML"};a.hooks.add("before-highlight",function(t){var a=t.element.parentNode;if(a&&/pre/i.test(a.nodeName)){var n,r,i=a.getAttribute("data-language")||e[t.language]||t.language.substring(0,1).toUpperCase()+t.language.substring(1),s=a.previousSibling;s&&/\s*\bprism-show-language\b\s*/.test(s.className)&&s.firstChild&&/\s*\bprism-show-language-label\b\s*/.test(s.firstChild.className)?r=s.firstChild:(n=document.createElement("div"),(r=document.createElement("div")).className="prism-show-language-label",n.className="prism-show-language",n.appendChild(r),a.parentNode.insertBefore(n,a)),r.innerHTML=i}})}}();
},{}],"SMAs":[function(require,module,exports) {
"use strict";function e(e){return null==e}function r(e){return"object"==typeof e&&null!==e}function t(r){return Array.isArray(r)?r:e(r)?[]:[r]}function o(e,r){var t,o,n,u;if(r)for(t=0,o=(u=Object.keys(r)).length;t<o;t+=1)e[n=u[t]]=r[n];return e}function n(e,r){var t,o="";for(t=0;t<r;t+=1)o+=e;return o}function u(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e}module.exports.isNothing=e,module.exports.isObject=r,module.exports.toArray=t,module.exports.repeat=n,module.exports.isNegativeZero=u,module.exports.extend=o;
},{}],"AQwz":[function(require,module,exports) {
"use strict";function t(t,r){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=r,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t.prototype.toString=function(t){var r=this.name+": ";return r+=this.reason||"(unknown reason)",!t&&this.mark&&(r+=" "+this.mark.toString()),r},module.exports=t;
},{}],"Ju92":[function(require,module,exports) {
"use strict";var t=require("./common");function i(t,i,n,e,r){this.name=t,this.buffer=i,this.position=n,this.line=e,this.column=r}i.prototype.getSnippet=function(i,n){var e,r,s,o,h;if(!this.buffer)return null;for(i=i||4,n=n||75,e="",r=this.position;r>0&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(r-1));)if(r-=1,this.position-r>n/2-1){e=" ... ",r+=5;break}for(s="",o=this.position;o<this.buffer.length&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o));)if((o+=1)-this.position>n/2-1){s=" ... ",o-=5;break}return h=this.buffer.slice(r,o),t.repeat(" ",i)+e+h+s+"\n"+t.repeat(" ",i+this.position-r+e.length)+"^"},i.prototype.toString=function(t){var i,n="";return this.name&&(n+='in "'+this.name+'" '),n+="at line "+(this.line+1)+", column "+(this.column+1),t||(i=this.getSnippet())&&(n+=":\n"+i),n},module.exports=i;
},{"./common":"SMAs"}],"XcPh":[function(require,module,exports) {
"use strict";var e=require("./exception"),n=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function i(e){var n={};return null!==e&&Object.keys(e).forEach(function(t){e[t].forEach(function(e){n[String(e)]=t})}),n}function s(s,r){if(r=r||{},Object.keys(r).forEach(function(t){if(-1===n.indexOf(t))throw new e('Unknown option "'+t+'" is met in definition of "'+s+'" YAML type.')}),this.tag=s,this.kind=r.kind||null,this.resolve=r.resolve||function(){return!0},this.construct=r.construct||function(e){return e},this.instanceOf=r.instanceOf||null,this.predicate=r.predicate||null,this.represent=r.represent||null,this.defaultStyle=r.defaultStyle||null,this.styleAliases=i(r.styleAliases||null),-1===t.indexOf(this.kind))throw new e('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}module.exports=s;
},{"./exception":"AQwz"}],"nYLM":[function(require,module,exports) {
"use strict";var i=require("./common"),e=require("./exception"),t=require("./type");function n(i,e,t){var c=[];return i.include.forEach(function(i){t=n(i,e,t)}),i[e].forEach(function(i){t.forEach(function(e,t){e.tag===i.tag&&e.kind===i.kind&&c.push(t)}),t.push(i)}),t.filter(function(i,e){return-1===c.indexOf(e)})}function c(){var i,e,t={scalar:{},sequence:{},mapping:{},fallback:{}};function n(i){t[i.kind][i.tag]=t.fallback[i.tag]=i}for(i=0,e=arguments.length;i<e;i+=1)arguments[i].forEach(n);return t}function o(i){this.include=i.include||[],this.implicit=i.implicit||[],this.explicit=i.explicit||[],this.implicit.forEach(function(i){if(i.loadKind&&"scalar"!==i.loadKind)throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=n(this,"implicit",[]),this.compiledExplicit=n(this,"explicit",[]),this.compiledTypeMap=c(this.compiledImplicit,this.compiledExplicit)}o.DEFAULT=null,o.create=function(){var n,c;switch(arguments.length){case 1:n=o.DEFAULT,c=arguments[0];break;case 2:n=arguments[0],c=arguments[1];break;default:throw new e("Wrong number of arguments for Schema.create function")}if(n=i.toArray(n),c=i.toArray(c),!n.every(function(i){return i instanceof o}))throw new e("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!c.every(function(i){return i instanceof t}))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new o({include:n,explicit:c})},module.exports=o;
},{"./common":"SMAs","./exception":"AQwz","./type":"XcPh"}],"Fal9":[function(require,module,exports) {
"use strict";var r=require("../type");module.exports=new r("tag:yaml.org,2002:str",{kind:"scalar",construct:function(r){return null!==r?r:""}});
},{"../type":"XcPh"}],"U5Pz":[function(require,module,exports) {
"use strict";var e=require("../type");module.exports=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}});
},{"../type":"XcPh"}],"a4cL":[function(require,module,exports) {
"use strict";var r=require("../type");module.exports=new r("tag:yaml.org,2002:map",{kind:"mapping",construct:function(r){return null!==r?r:{}}});
},{"../type":"XcPh"}],"EJga":[function(require,module,exports) {
"use strict";var e=require("../schema");module.exports=new e({explicit:[require("../type/str"),require("../type/seq"),require("../type/map")]});
},{"../schema":"nYLM","../type/str":"Fal9","../type/seq":"U5Pz","../type/map":"a4cL"}],"C9fO":[function(require,module,exports) {
"use strict";var n=require("../type");function e(n){if(null===n)return!0;var e=n.length;return 1===e&&"~"===n||4===e&&("null"===n||"Null"===n||"NULL"===n)}function r(){return null}function u(n){return null===n}module.exports=new n("tag:yaml.org,2002:null",{kind:"scalar",resolve:e,construct:r,predicate:u,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"});
},{"../type":"XcPh"}],"GrS1":[function(require,module,exports) {
"use strict";var e=require("../type");function r(e){if(null===e)return!1;var r=e.length;return 4===r&&("true"===e||"True"===e||"TRUE"===e)||5===r&&("false"===e||"False"===e||"FALSE"===e)}function t(e){return"true"===e||"True"===e||"TRUE"===e}function n(e){return"[object Boolean]"===Object.prototype.toString.call(e)}module.exports=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:r,construct:t,predicate:n,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});
},{"../type":"XcPh"}],"elsh":[function(require,module,exports) {
"use strict";var r=require("../common"),t=require("../type");function e(r){return 48<=r&&r<=57||65<=r&&r<=70||97<=r&&r<=102}function n(r){return 48<=r&&r<=55}function i(r){return 48<=r&&r<=57}function o(r){if(null===r)return!1;var t,o=r.length,c=0,u=!1;if(!o)return!1;if("-"!==(t=r[c])&&"+"!==t||(t=r[++c]),"0"===t){if(c+1===o)return!0;if("b"===(t=r[++c])){for(c++;c<o;c++)if("_"!==(t=r[c])){if("0"!==t&&"1"!==t)return!1;u=!0}return u&&"_"!==t}if("x"===t){for(c++;c<o;c++)if("_"!==(t=r[c])){if(!e(r.charCodeAt(c)))return!1;u=!0}return u&&"_"!==t}for(;c<o;c++)if("_"!==(t=r[c])){if(!n(r.charCodeAt(c)))return!1;u=!0}return u&&"_"!==t}if("_"===t)return!1;for(;c<o;c++)if("_"!==(t=r[c])){if(":"===t)break;if(!i(r.charCodeAt(c)))return!1;u=!0}return!(!u||"_"===t)&&(":"!==t||/^(:[0-5]?[0-9])+$/.test(r.slice(c)))}function c(r){var t,e,n=r,i=1,o=[];return-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(t=n[0])&&"+"!==t||("-"===t&&(i=-1),t=(n=n.slice(1))[0]),"0"===n?0:"0"===t?"b"===n[1]?i*parseInt(n.slice(2),2):"x"===n[1]?i*parseInt(n,16):i*parseInt(n,8):-1!==n.indexOf(":")?(n.split(":").forEach(function(r){o.unshift(parseInt(r,10))}),n=0,e=1,o.forEach(function(r){n+=r*e,e*=60}),i*n):i*parseInt(n,10)}function u(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!r.isNegativeZero(t)}module.exports=new t("tag:yaml.org,2002:int",{kind:"scalar",resolve:o,construct:c,predicate:u,represent:{binary:function(r){return r>=0?"0b"+r.toString(2):"-0b"+r.toString(2).slice(1)},octal:function(r){return r>=0?"0"+r.toString(8):"-0"+r.toString(8).slice(1)},decimal:function(r){return r.toString(10)},hexadecimal:function(r){return r>=0?"0x"+r.toString(16).toUpperCase():"-0x"+r.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}});
},{"../common":"SMAs","../type":"XcPh"}],"Pr8W":[function(require,module,exports) {
"use strict";var e=require("../common"),r=require("../type"),t=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function a(e){return null!==e&&!(!t.test(e)||"_"===e[e.length-1])}function n(e){var r,t,a,n;return t="-"===(r=e.replace(/_/g,"").toLowerCase())[0]?-1:1,n=[],"+-".indexOf(r[0])>=0&&(r=r.slice(1)),".inf"===r?1===t?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===r?NaN:r.indexOf(":")>=0?(r.split(":").forEach(function(e){n.unshift(parseFloat(e,10))}),r=0,a=1,n.forEach(function(e){r+=e*a,a*=60}),t*r):t*parseFloat(r,10)}var c=/^[-+]?[0-9]+e/;function s(r,t){var a;if(isNaN(r))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===r)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===r)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(r))return"-0.0";return a=r.toString(10),c.test(a)?a.replace("e",".e"):a}function u(r){return"[object Number]"===Object.prototype.toString.call(r)&&(r%1!=0||e.isNegativeZero(r))}module.exports=new r("tag:yaml.org,2002:float",{kind:"scalar",resolve:a,construct:n,predicate:u,represent:s,defaultStyle:"lowercase"});
},{"../common":"SMAs","../type":"XcPh"}],"ZUfC":[function(require,module,exports) {
"use strict";var e=require("../schema");module.exports=new e({include:[require("./failsafe")],implicit:[require("../type/null"),require("../type/bool"),require("../type/int"),require("../type/float")]});
},{"../schema":"nYLM","./failsafe":"EJga","../type/null":"C9fO","../type/bool":"GrS1","../type/int":"elsh","../type/float":"Pr8W"}],"wwCT":[function(require,module,exports) {
"use strict";var e=require("../schema");module.exports=new e({include:[require("./json")]});
},{"../schema":"nYLM","./json":"ZUfC"}],"eBHa":[function(require,module,exports) {
"use strict";var e=require("../type"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),r=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function n(e){return null!==e&&(null!==t.exec(e)||null!==r.exec(e))}function l(e){var n,l,u,i,a,o,c,s,f=0,g=null;if(null===(n=t.exec(e))&&(n=r.exec(e)),null===n)throw new Error("Date resolve error");if(l=+n[1],u=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(l,u,i));if(a=+n[4],o=+n[5],c=+n[6],n[7]){for(f=n[7].slice(0,3);f.length<3;)f+="0";f=+f}return n[9]&&(g=6e4*(60*+n[10]+ +(n[11]||0)),"-"===n[9]&&(g=-g)),s=new Date(Date.UTC(l,u,i,a,o,c,f)),g&&s.setTime(s.getTime()-g),s}function u(e){return e.toISOString()}module.exports=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:n,construct:l,instanceOf:Date,represent:u});
},{"../type":"XcPh"}],"yG2a":[function(require,module,exports) {
"use strict";var e=require("../type");function r(e){return"<<"===e||null===e}module.exports=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:r});
},{"../type":"XcPh"}],"i4Y6":[function(require,module,exports) {
"use strict";var r;try{var e=require;r=e("buffer").Buffer}catch(i){}var n=require("../type"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";function t(r){if(null===r)return!1;var e,n,t=0,f=r.length,s=u;for(n=0;n<f;n++)if(!((e=s.indexOf(r.charAt(n)))>64)){if(e<0)return!1;t+=6}return t%8==0}function f(e){var n,t,f=e.replace(/[\r\n=]/g,""),s=f.length,a=u,i=0,h=[];for(n=0;n<s;n++)n%4==0&&n&&(h.push(i>>16&255),h.push(i>>8&255),h.push(255&i)),i=i<<6|a.indexOf(f.charAt(n));return 0===(t=s%4*6)?(h.push(i>>16&255),h.push(i>>8&255),h.push(255&i)):18===t?(h.push(i>>10&255),h.push(i>>2&255)):12===t&&h.push(i>>4&255),r?r.from?r.from(h):new r(h):h}function s(r){var e,n,t="",f=0,s=r.length,a=u;for(e=0;e<s;e++)e%3==0&&e&&(t+=a[f>>18&63],t+=a[f>>12&63],t+=a[f>>6&63],t+=a[63&f]),f=(f<<8)+r[e];return 0===(n=s%3)?(t+=a[f>>18&63],t+=a[f>>12&63],t+=a[f>>6&63],t+=a[63&f]):2===n?(t+=a[f>>10&63],t+=a[f>>4&63],t+=a[f<<2&63],t+=a[64]):1===n&&(t+=a[f>>2&63],t+=a[f<<4&63],t+=a[64],t+=a[64]),t}function a(e){return r&&r.isBuffer(e)}module.exports=new n("tag:yaml.org,2002:binary",{kind:"scalar",resolve:t,construct:f,predicate:a,represent:s});
},{"../type":"XcPh"}],"dG94":[function(require,module,exports) {
"use strict";var r=require("../type"),e=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function n(r){if(null===r)return!0;var n,o,u,i,c,l=[],f=r;for(n=0,o=f.length;n<o;n+=1){if(u=f[n],c=!1,"[object Object]"!==t.call(u))return!1;for(i in u)if(e.call(u,i)){if(c)return!1;c=!0}if(!c)return!1;if(-1!==l.indexOf(i))return!1;l.push(i)}return!0}function o(r){return null!==r?r:[]}module.exports=new r("tag:yaml.org,2002:omap",{kind:"sequence",resolve:n,construct:o});
},{"../type":"XcPh"}],"bJLp":[function(require,module,exports) {
"use strict";var e=require("../type"),r=Object.prototype.toString;function t(e){if(null===e)return!0;var t,n,u,l,o,c=e;for(o=new Array(c.length),t=0,n=c.length;t<n;t+=1){if(u=c[t],"[object Object]"!==r.call(u))return!1;if(1!==(l=Object.keys(u)).length)return!1;o[t]=[l[0],u[l[0]]]}return!0}function n(e){if(null===e)return[];var r,t,n,u,l,o=e;for(l=new Array(o.length),r=0,t=o.length;r<t;r+=1)n=o[r],u=Object.keys(n),l[r]=[u[0],n[u[0]]];return l}module.exports=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:n});
},{"../type":"XcPh"}],"rVo6":[function(require,module,exports) {
"use strict";var r=require("../type"),t=Object.prototype.hasOwnProperty;function e(r){if(null===r)return!0;var e,n=r;for(e in n)if(t.call(n,e)&&null!==n[e])return!1;return!0}function n(r){return null!==r?r:{}}module.exports=new r("tag:yaml.org,2002:set",{kind:"mapping",resolve:e,construct:n});
},{"../type":"XcPh"}],"tLdR":[function(require,module,exports) {
"use strict";var e=require("../schema");module.exports=new e({include:[require("./core")],implicit:[require("../type/timestamp"),require("../type/merge")],explicit:[require("../type/binary"),require("../type/omap"),require("../type/pairs"),require("../type/set")]});
},{"../schema":"nYLM","./core":"wwCT","../type/timestamp":"eBHa","../type/merge":"yG2a","../type/binary":"i4Y6","../type/omap":"dG94","../type/pairs":"bJLp","../type/set":"rVo6"}],"fT4J":[function(require,module,exports) {
"use strict";var e=require("../../type");function r(){return!0}function n(){}function t(){return""}function u(e){return void 0===e}module.exports=new e("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:r,construct:n,predicate:u,represent:t});
},{"../../type":"XcPh"}],"bAag":[function(require,module,exports) {
"use strict";var e=require("../../type");function r(e){if(null===e)return!1;if(0===e.length)return!1;var r=e,t=/\/([gim]*)$/.exec(e),n="";if("/"===r[0]){if(t&&(n=t[1]),n.length>3)return!1;if("/"!==r[r.length-n.length-1])return!1}return!0}function t(e){var r=e,t=/\/([gim]*)$/.exec(e),n="";return"/"===r[0]&&(t&&(n=t[1]),r=r.slice(1,r.length-n.length-1)),new RegExp(r,n)}function n(e){var r="/"+e.source+"/";return e.global&&(r+="g"),e.multiline&&(r+="m"),e.ignoreCase&&(r+="i"),r}function i(e){return"[object RegExp]"===Object.prototype.toString.call(e)}module.exports=new e("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:r,construct:t,predicate:i,represent:n});
},{"../../type":"XcPh"}],"a0mu":[function(require,module,exports) {
"use strict";var e;try{var r=require;e=r("esprima")}catch(p){"undefined"!=typeof window&&(e=window.esprima)}var n=require("../../type");function t(r){if(null===r)return!1;try{var n="("+r+")",t=e.parse(n,{range:!0});return"Program"===t.type&&1===t.body.length&&"ExpressionStatement"===t.body[0].type&&("ArrowFunctionExpression"===t.body[0].expression.type||"FunctionExpression"===t.body[0].expression.type)}catch(o){return!1}}function o(r){var n,t="("+r+")",o=e.parse(t,{range:!0}),i=[];if("Program"!==o.type||1!==o.body.length||"ExpressionStatement"!==o.body[0].type||"ArrowFunctionExpression"!==o.body[0].expression.type&&"FunctionExpression"!==o.body[0].expression.type)throw new Error("Failed to resolve function");return o.body[0].expression.params.forEach(function(e){i.push(e.name)}),n=o.body[0].expression.body.range,"BlockStatement"===o.body[0].expression.body.type?new Function(i,t.slice(n[0]+1,n[1]-1)):new Function(i,"return "+t.slice(n[0],n[1]))}function i(e){return e.toString()}function s(e){return"[object Function]"===Object.prototype.toString.call(e)}module.exports=new n("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:t,construct:o,predicate:s,represent:i});
},{"../../type":"XcPh"}],"HKwV":[function(require,module,exports) {
"use strict";var e=require("../schema");module.exports=e.DEFAULT=new e({include:[require("./default_safe")],explicit:[require("../type/js/undefined"),require("../type/js/regexp"),require("../type/js/function")]});
},{"../schema":"nYLM","./default_safe":"tLdR","../type/js/undefined":"fT4J","../type/js/regexp":"bAag","../type/js/function":"a0mu"}],"puZk":[function(require,module,exports) {
"use strict";var t=require("./common"),n=require("./exception"),i=require("./mark"),e=require("./schema/default_safe"),o=require("./schema/default_full"),r=Object.prototype.hasOwnProperty,a=1,s=2,l=3,p=4,c=1,u=2,d=3,h=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,f=/[\x85\u2028\u2029]/,g=/[,\[\]\{\}]/,A=/^(?:!|!!|![a-z\-]+!)$/i,m=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function C(t){return Object.prototype.toString.call(t)}function k(t){return 10===t||13===t}function b(t){return 9===t||32===t}function v(t){return 9===t||32===t||10===t||13===t}function y(t){return 44===t||91===t||93===t||123===t||125===t}function x(t){var n;return 48<=t&&t<=57?t-48:97<=(n=32|t)&&n<=102?n-97+10:-1}function w(t){return 120===t?2:117===t?4:85===t?8:0}function I(t){return 48<=t&&t<=57?t-48:-1}function M(t){return 48===t?"\0":97===t?"":98===t?"\b":116===t?"\t":9===t?"\t":110===t?"\n":118===t?"\v":102===t?"\f":114===t?"\r":101===t?"":32===t?" ":34===t?'"':47===t?"/":92===t?"\\":78===t?"":95===t?" ":76===t?"\u2028":80===t?"\u2029":""}function F(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}for(var j=new Array(256),S=new Array(256),q=0;q<256;q++)j[q]=M(q)?1:0,S[q]=M(q);function L(t,n){this.input=t,this.filename=n.filename||null,this.schema=n.schema||o,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function O(t,e){return new n(e,new i(t.filename,t.input,t.position,t.line,t.position-t.lineStart))}function D(t,n){throw O(t,n)}function T(t,n){t.onWarning&&t.onWarning.call(null,O(t,n))}var B={YAML:function(t,n,i){var e,o,r;null!==t.version&&D(t,"duplication of %YAML directive"),1!==i.length&&D(t,"YAML directive accepts exactly one argument"),null===(e=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&D(t,"ill-formed argument of the YAML directive"),o=parseInt(e[1],10),r=parseInt(e[2],10),1!==o&&D(t,"unacceptable YAML version of the document"),t.version=i[0],t.checkLineBreaks=r<2,1!==r&&2!==r&&T(t,"unsupported YAML version of the document")},TAG:function(t,n,i){var e,o;2!==i.length&&D(t,"TAG directive accepts exactly two arguments"),e=i[0],o=i[1],A.test(e)||D(t,"ill-formed tag handle (first argument) of the TAG directive"),r.call(t.tagMap,e)&&D(t,'there is a previously declared suffix for "'+e+'" tag handle'),m.test(o)||D(t,"ill-formed tag prefix (second argument) of the TAG directive"),t.tagMap[e]=o}};function Y(t,n,i,e){var o,r,a,s;if(n<i){if(s=t.input.slice(n,i),e)for(o=0,r=s.length;o<r;o+=1)9===(a=s.charCodeAt(o))||32<=a&&a<=1114111||D(t,"expected valid JSON character");else h.test(s)&&D(t,"the stream contains non-printable characters");t.result+=s}}function G(n,i,e,o){var a,s,l,p;for(t.isObject(e)||D(n,"cannot merge mappings; the provided source object is unacceptable"),l=0,p=(a=Object.keys(e)).length;l<p;l+=1)s=a[l],r.call(i,s)||(i[s]=e[s],o[s]=!0)}function W(t,n,i,e,o,a,s,l){var p,c;if(Array.isArray(o))for(p=0,c=(o=Array.prototype.slice.call(o)).length;p<c;p+=1)Array.isArray(o[p])&&D(t,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===C(o[p])&&(o[p]="[object Object]");if("object"==typeof o&&"[object Object]"===C(o)&&(o="[object Object]"),o=String(o),null===n&&(n={}),"tag:yaml.org,2002:merge"===e)if(Array.isArray(a))for(p=0,c=a.length;p<c;p+=1)G(t,n,a[p],i);else G(t,n,a,i);else t.json||r.call(i,o)||!r.call(n,o)||(t.line=s||t.line,t.position=l||t.position,D(t,"duplicated mapping key")),n[o]=a,delete i[o];return n}function $(t){var n;10===(n=t.input.charCodeAt(t.position))?t.position++:13===n?(t.position++,10===t.input.charCodeAt(t.position)&&t.position++):D(t,"a line break is expected"),t.line+=1,t.lineStart=t.position}function _(t,n,i){for(var e=0,o=t.input.charCodeAt(t.position);0!==o;){for(;b(o);)o=t.input.charCodeAt(++t.position);if(n&&35===o)do{o=t.input.charCodeAt(++t.position)}while(10!==o&&13!==o&&0!==o);if(!k(o))break;for($(t),o=t.input.charCodeAt(t.position),e++,t.lineIndent=0;32===o;)t.lineIndent++,o=t.input.charCodeAt(++t.position)}return-1!==i&&0!==e&&t.lineIndent<i&&T(t,"deficient indentation"),e}function z(t){var n,i=t.position;return!(45!==(n=t.input.charCodeAt(i))&&46!==n||n!==t.input.charCodeAt(i+1)||n!==t.input.charCodeAt(i+2)||(i+=3,0!==(n=t.input.charCodeAt(i))&&!v(n)))}function E(n,i){1===i?n.result+=" ":i>1&&(n.result+=t.repeat("\n",i-1))}function P(t,n,i){var e,o,r,a,s,l,p,c,u=t.kind,d=t.result;if(v(c=t.input.charCodeAt(t.position))||y(c)||35===c||38===c||42===c||33===c||124===c||62===c||39===c||34===c||37===c||64===c||96===c)return!1;if((63===c||45===c)&&(v(e=t.input.charCodeAt(t.position+1))||i&&y(e)))return!1;for(t.kind="scalar",t.result="",o=r=t.position,a=!1;0!==c;){if(58===c){if(v(e=t.input.charCodeAt(t.position+1))||i&&y(e))break}else if(35===c){if(v(t.input.charCodeAt(t.position-1)))break}else{if(t.position===t.lineStart&&z(t)||i&&y(c))break;if(k(c)){if(s=t.line,l=t.lineStart,p=t.lineIndent,_(t,!1,-1),t.lineIndent>=n){a=!0,c=t.input.charCodeAt(t.position);continue}t.position=r,t.line=s,t.lineStart=l,t.lineIndent=p;break}}a&&(Y(t,o,r,!1),E(t,t.line-s),o=r=t.position,a=!1),b(c)||(r=t.position+1),c=t.input.charCodeAt(++t.position)}return Y(t,o,r,!1),!!t.result||(t.kind=u,t.result=d,!1)}function J(t,n){var i,e,o;if(39!==(i=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,e=o=t.position;0!==(i=t.input.charCodeAt(t.position));)if(39===i){if(Y(t,e,t.position,!0),39!==(i=t.input.charCodeAt(++t.position)))return!0;e=t.position,t.position++,o=t.position}else k(i)?(Y(t,e,o,!0),E(t,_(t,!1,n)),e=o=t.position):t.position===t.lineStart&&z(t)?D(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);D(t,"unexpected end of the stream within a single quoted scalar")}function N(t,n){var i,e,o,r,a,s;if(34!==(s=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,i=e=t.position;0!==(s=t.input.charCodeAt(t.position));){if(34===s)return Y(t,i,t.position,!0),t.position++,!0;if(92===s){if(Y(t,i,t.position,!0),k(s=t.input.charCodeAt(++t.position)))_(t,!1,n);else if(s<256&&j[s])t.result+=S[s],t.position++;else if((a=w(s))>0){for(o=a,r=0;o>0;o--)(a=x(s=t.input.charCodeAt(++t.position)))>=0?r=(r<<4)+a:D(t,"expected hexadecimal character");t.result+=F(r),t.position++}else D(t,"unknown escape sequence");i=e=t.position}else k(s)?(Y(t,i,e,!0),E(t,_(t,!1,n)),i=e=t.position):t.position===t.lineStart&&z(t)?D(t,"unexpected end of the document within a double quoted scalar"):(t.position++,e=t.position)}D(t,"unexpected end of the stream within a double quoted scalar")}function H(t,n){var i,e,o,r,s,l,p,c,u,d,h=!0,f=t.tag,g=t.anchor,A={};if(91===(d=t.input.charCodeAt(t.position)))o=93,l=!1,e=[];else{if(123!==d)return!1;o=125,l=!0,e={}}for(null!==t.anchor&&(t.anchorMap[t.anchor]=e),d=t.input.charCodeAt(++t.position);0!==d;){if(_(t,!0,n),(d=t.input.charCodeAt(t.position))===o)return t.position++,t.tag=f,t.anchor=g,t.kind=l?"mapping":"sequence",t.result=e,!0;h||D(t,"missed comma between flow collection entries"),u=null,r=s=!1,63===d&&v(t.input.charCodeAt(t.position+1))&&(r=s=!0,t.position++,_(t,!0,n)),i=t.line,Z(t,n,a,!1,!0),c=t.tag,p=t.result,_(t,!0,n),d=t.input.charCodeAt(t.position),!s&&t.line!==i||58!==d||(r=!0,d=t.input.charCodeAt(++t.position),_(t,!0,n),Z(t,n,a,!1,!0),u=t.result),l?W(t,e,A,c,p,u):r?e.push(W(t,null,A,c,p,u)):e.push(p),_(t,!0,n),44===(d=t.input.charCodeAt(t.position))?(h=!0,d=t.input.charCodeAt(++t.position)):h=!1}D(t,"unexpected end of the stream within a flow collection")}function K(n,i){var e,o,r,a,s=c,l=!1,p=!1,h=i,f=0,g=!1;if(124===(a=n.input.charCodeAt(n.position)))o=!1;else{if(62!==a)return!1;o=!0}for(n.kind="scalar",n.result="";0!==a;)if(43===(a=n.input.charCodeAt(++n.position))||45===a)c===s?s=43===a?d:u:D(n,"repeat of a chomping mode identifier");else{if(!((r=I(a))>=0))break;0===r?D(n,"bad explicit indentation width of a block scalar; it cannot be less than one"):p?D(n,"repeat of an indentation width identifier"):(h=i+r-1,p=!0)}if(b(a)){do{a=n.input.charCodeAt(++n.position)}while(b(a));if(35===a)do{a=n.input.charCodeAt(++n.position)}while(!k(a)&&0!==a)}for(;0!==a;){for($(n),n.lineIndent=0,a=n.input.charCodeAt(n.position);(!p||n.lineIndent<h)&&32===a;)n.lineIndent++,a=n.input.charCodeAt(++n.position);if(!p&&n.lineIndent>h&&(h=n.lineIndent),k(a))f++;else{if(n.lineIndent<h){s===d?n.result+=t.repeat("\n",l?1+f:f):s===c&&l&&(n.result+="\n");break}for(o?b(a)?(g=!0,n.result+=t.repeat("\n",l?1+f:f)):g?(g=!1,n.result+=t.repeat("\n",f+1)):0===f?l&&(n.result+=" "):n.result+=t.repeat("\n",f):n.result+=t.repeat("\n",l?1+f:f),l=!0,p=!0,f=0,e=n.position;!k(a)&&0!==a;)a=n.input.charCodeAt(++n.position);Y(n,e,n.position,!1)}}return!0}function Q(t,n){var i,e,o=t.tag,r=t.anchor,a=[],s=!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=a),e=t.input.charCodeAt(t.position);0!==e&&45===e&&v(t.input.charCodeAt(t.position+1));)if(s=!0,t.position++,_(t,!0,-1)&&t.lineIndent<=n)a.push(null),e=t.input.charCodeAt(t.position);else if(i=t.line,Z(t,n,l,!1,!0),a.push(t.result),_(t,!0,-1),e=t.input.charCodeAt(t.position),(t.line===i||t.lineIndent>n)&&0!==e)D(t,"bad indentation of a sequence entry");else if(t.lineIndent<n)break;return!!s&&(t.tag=o,t.anchor=r,t.kind="sequence",t.result=a,!0)}function R(t,n,i){var e,o,r,a,l,c=t.tag,u=t.anchor,d={},h={},f=null,g=null,A=null,m=!1,C=!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=d),l=t.input.charCodeAt(t.position);0!==l;){if(e=t.input.charCodeAt(t.position+1),r=t.line,a=t.position,63!==l&&58!==l||!v(e)){if(!Z(t,i,s,!1,!0))break;if(t.line===r){for(l=t.input.charCodeAt(t.position);b(l);)l=t.input.charCodeAt(++t.position);if(58===l)v(l=t.input.charCodeAt(++t.position))||D(t,"a whitespace character is expected after the key-value separator within a block mapping"),m&&(W(t,d,h,f,g,null),f=g=A=null),C=!0,m=!1,o=!1,f=t.tag,g=t.result;else{if(!C)return t.tag=c,t.anchor=u,!0;D(t,"can not read an implicit mapping pair; a colon is missed")}}else{if(!C)return t.tag=c,t.anchor=u,!0;D(t,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===l?(m&&(W(t,d,h,f,g,null),f=g=A=null),C=!0,m=!0,o=!0):m?(m=!1,o=!0):D(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,l=e;if((t.line===r||t.lineIndent>n)&&(Z(t,n,p,!0,o)&&(m?g=t.result:A=t.result),m||(W(t,d,h,f,g,A,r,a),f=g=A=null),_(t,!0,-1),l=t.input.charCodeAt(t.position)),t.lineIndent>n&&0!==l)D(t,"bad indentation of a mapping entry");else if(t.lineIndent<n)break}return m&&W(t,d,h,f,g,null),C&&(t.tag=c,t.anchor=u,t.kind="mapping",t.result=d),C}function U(t){var n,i,e,o,a=!1,s=!1;if(33!==(o=t.input.charCodeAt(t.position)))return!1;if(null!==t.tag&&D(t,"duplication of a tag property"),60===(o=t.input.charCodeAt(++t.position))?(a=!0,o=t.input.charCodeAt(++t.position)):33===o?(s=!0,i="!!",o=t.input.charCodeAt(++t.position)):i="!",n=t.position,a){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&62!==o);t.position<t.length?(e=t.input.slice(n,t.position),o=t.input.charCodeAt(++t.position)):D(t,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!v(o);)33===o&&(s?D(t,"tag suffix cannot contain exclamation marks"):(i=t.input.slice(n-1,t.position+1),A.test(i)||D(t,"named tag handle cannot contain such characters"),s=!0,n=t.position+1)),o=t.input.charCodeAt(++t.position);e=t.input.slice(n,t.position),g.test(e)&&D(t,"tag suffix cannot contain flow indicator characters")}return e&&!m.test(e)&&D(t,"tag name cannot contain such characters: "+e),a?t.tag=e:r.call(t.tagMap,i)?t.tag=t.tagMap[i]+e:"!"===i?t.tag="!"+e:"!!"===i?t.tag="tag:yaml.org,2002:"+e:D(t,'undeclared tag handle "'+i+'"'),!0}function V(t){var n,i;if(38!==(i=t.input.charCodeAt(t.position)))return!1;for(null!==t.anchor&&D(t,"duplication of an anchor property"),i=t.input.charCodeAt(++t.position),n=t.position;0!==i&&!v(i)&&!y(i);)i=t.input.charCodeAt(++t.position);return t.position===n&&D(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(n,t.position),!0}function X(t){var n,i,e;if(42!==(e=t.input.charCodeAt(t.position)))return!1;for(e=t.input.charCodeAt(++t.position),n=t.position;0!==e&&!v(e)&&!y(e);)e=t.input.charCodeAt(++t.position);return t.position===n&&D(t,"name of an alias node must contain at least one character"),i=t.input.slice(n,t.position),t.anchorMap.hasOwnProperty(i)||D(t,'unidentified alias "'+i+'"'),t.result=t.anchorMap[i],_(t,!0,-1),!0}function Z(t,n,i,e,o){var c,u,d,h,f,g,A,m,C=1,k=!1,b=!1;if(null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,c=u=d=p===i||l===i,e&&_(t,!0,-1)&&(k=!0,t.lineIndent>n?C=1:t.lineIndent===n?C=0:t.lineIndent<n&&(C=-1)),1===C)for(;U(t)||V(t);)_(t,!0,-1)?(k=!0,d=c,t.lineIndent>n?C=1:t.lineIndent===n?C=0:t.lineIndent<n&&(C=-1)):d=!1;if(d&&(d=k||o),1!==C&&p!==i||(A=a===i||s===i?n:n+1,m=t.position-t.lineStart,1===C?d&&(Q(t,m)||R(t,m,A))||H(t,A)?b=!0:(u&&K(t,A)||J(t,A)||N(t,A)?b=!0:X(t)?(b=!0,null===t.tag&&null===t.anchor||D(t,"alias node should not have any properties")):P(t,A,a===i)&&(b=!0,null===t.tag&&(t.tag="?")),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):0===C&&(b=d&&Q(t,m))),null!==t.tag&&"!"!==t.tag)if("?"===t.tag){for(h=0,f=t.implicitTypes.length;h<f;h+=1)if((g=t.implicitTypes[h]).resolve(t.result)){t.result=g.construct(t.result),t.tag=g.tag,null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);break}}else r.call(t.typeMap[t.kind||"fallback"],t.tag)?(g=t.typeMap[t.kind||"fallback"][t.tag],null!==t.result&&g.kind!==t.kind&&D(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+g.kind+'", not "'+t.kind+'"'),g.resolve(t.result)?(t.result=g.construct(t.result),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):D(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")):D(t,"unknown tag !<"+t.tag+">");return null!==t.listener&&t.listener("close",t),null!==t.tag||null!==t.anchor||b}function tt(t){var n,i,e,o,a=t.position,s=!1;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap={},t.anchorMap={};0!==(o=t.input.charCodeAt(t.position))&&(_(t,!0,-1),o=t.input.charCodeAt(t.position),!(t.lineIndent>0||37!==o));){for(s=!0,o=t.input.charCodeAt(++t.position),n=t.position;0!==o&&!v(o);)o=t.input.charCodeAt(++t.position);for(e=[],(i=t.input.slice(n,t.position)).length<1&&D(t,"directive name must not be less than one character in length");0!==o;){for(;b(o);)o=t.input.charCodeAt(++t.position);if(35===o){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&!k(o));break}if(k(o))break;for(n=t.position;0!==o&&!v(o);)o=t.input.charCodeAt(++t.position);e.push(t.input.slice(n,t.position))}0!==o&&$(t),r.call(B,i)?B[i](t,i,e):T(t,'unknown document directive "'+i+'"')}_(t,!0,-1),0===t.lineIndent&&45===t.input.charCodeAt(t.position)&&45===t.input.charCodeAt(t.position+1)&&45===t.input.charCodeAt(t.position+2)?(t.position+=3,_(t,!0,-1)):s&&D(t,"directives end mark is expected"),Z(t,t.lineIndent-1,p,!1,!0),_(t,!0,-1),t.checkLineBreaks&&f.test(t.input.slice(a,t.position))&&T(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&z(t)?46===t.input.charCodeAt(t.position)&&(t.position+=3,_(t,!0,-1)):t.position<t.length-1&&D(t,"end of the stream or a document separator is expected")}function nt(t,n){n=n||{},0!==(t=String(t)).length&&(10!==t.charCodeAt(t.length-1)&&13!==t.charCodeAt(t.length-1)&&(t+="\n"),65279===t.charCodeAt(0)&&(t=t.slice(1)));var i=new L(t,n);for(i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)tt(i);return i.documents}function it(t,n,i){var e,o,r=nt(t,i);if("function"!=typeof n)return r;for(e=0,o=r.length;e<o;e+=1)n(r[e])}function et(t,i){var e=nt(t,i);if(0!==e.length){if(1===e.length)return e[0];throw new n("expected a single document in the stream, but found more")}}function ot(n,i,o){if("function"!=typeof i)return it(n,t.extend({schema:e},o));it(n,i,t.extend({schema:e},o))}function rt(n,i){return et(n,t.extend({schema:e},i))}module.exports.loadAll=it,module.exports.load=et,module.exports.safeLoadAll=ot,module.exports.safeLoad=rt;
},{"./common":"SMAs","./exception":"AQwz","./mark":"Ju92","./schema/default_safe":"tLdR","./schema/default_full":"HKwV"}],"ZuFa":[function(require,module,exports) {
"use strict";var e=require("./common"),t=require("./exception"),n=require("./schema/default_full"),r=require("./schema/default_safe"),i=Object.prototype.toString,o=Object.prototype.hasOwnProperty,s=9,l=10,u=32,a=33,c=34,f=35,d=37,p=38,h=39,m=42,g=44,y=45,v=58,w=62,b=63,O=64,x=91,A=93,j=96,F=123,C=124,k=125,M={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},I=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function L(e,t){var n,r,i,s,l,u,a;if(null===t)return{};for(n={},i=0,s=(r=Object.keys(t)).length;i<s;i+=1)l=r[i],u=String(t[l]),"!!"===l.slice(0,2)&&(l="tag:yaml.org,2002:"+l.slice(2)),(a=e.compiledTypeMap.fallback[l])&&o.call(a.styleAliases,u)&&(u=a.styleAliases[u]),n[l]=u;return n}function _(n){var r,i,o;if(r=n.toString(16).toUpperCase(),n<=255)i="x",o=2;else if(n<=65535)i="u",o=4;else{if(!(n<=4294967295))throw new t("code point within a string may not be greater than 0xFFFFFFFF");i="U",o=8}return"\\"+i+e.repeat("0",o-r.length)+r}function K(t){this.schema=t.schema||n,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=e.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=L(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function S(t,n){for(var r,i=e.repeat(" ",n),o=0,s=-1,l="",u=t.length;o<u;)-1===(s=t.indexOf("\n",o))?(r=t.slice(o),o=u):(r=t.slice(o,s+1),o=s+1),r.length&&"\n"!==r&&(l+=i),l+=r;return l}function T(t,n){return"\n"+e.repeat(" ",t.indent*n)}function D(e,t){var n,r;for(n=0,r=e.implicitTypes.length;n<r;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}function N(e){return e===u||e===s}function W(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function q(e){return W(e)&&65279!==e&&e!==g&&e!==x&&e!==A&&e!==F&&e!==k&&e!==v&&e!==f}function R(e){return W(e)&&65279!==e&&!N(e)&&e!==y&&e!==b&&e!==v&&e!==g&&e!==x&&e!==A&&e!==F&&e!==k&&e!==f&&e!==p&&e!==m&&e!==a&&e!==C&&e!==w&&e!==h&&e!==c&&e!==d&&e!==O&&e!==j}function Y(e){return/^\n* /.test(e)}var E=1,P=2,U=3,z=4,B=5;function G(e,t,n,r,i){var o,s,u=!1,a=!1,c=-1!==r,f=-1,d=R(e.charCodeAt(0))&&!N(e.charCodeAt(e.length-1));if(t)for(o=0;o<e.length;o++){if(!W(s=e.charCodeAt(o)))return B;d=d&&q(s)}else{for(o=0;o<e.length;o++){if((s=e.charCodeAt(o))===l)u=!0,c&&(a=a||o-f-1>r&&" "!==e[f+1],f=o);else if(!W(s))return B;d=d&&q(s)}a=a||c&&o-f-1>r&&" "!==e[f+1]}return u||a?n>9&&Y(e)?B:a?z:U:d&&!i(e)?E:P}function H(e,n,r,i){e.dump=function(){if(0===n.length)return"''";if(!e.noCompatMode&&-1!==I.indexOf(n))return"'"+n+"'";var o=e.indent*Math.max(1,r),s=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),l=i||e.flowLevel>-1&&r>=e.flowLevel;switch(G(n,l,e.indent,s,function(t){return D(e,t)})){case E:return n;case P:return"'"+n.replace(/'/g,"''")+"'";case U:return"|"+J(n,e.indent)+Q(S(n,o));case z:return">"+J(n,e.indent)+Q(S(V(n,s),o));case B:return'"'+Z(n,s)+'"';default:throw new t("impossible error: invalid scalar style")}}()}function J(e,t){var n=Y(e)?String(t):"",r="\n"===e[e.length-1];return n+(r&&("\n"===e[e.length-2]||"\n"===e)?"+":r?"":"-")+"\n"}function Q(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function V(e,t){for(var n,r,i,o=/(\n+)([^\n]*)/g,s=(n=-1!==(n=e.indexOf("\n"))?n:e.length,o.lastIndex=n,X(e.slice(0,n),t)),l="\n"===e[0]||" "===e[0];i=o.exec(e);){var u=i[1],a=i[2];r=" "===a[0],s+=u+(l||r||""===a?"":"\n")+X(a,t),l=r}return s}function X(e,t){if(""===e||" "===e[0])return e;for(var n,r,i=/ [^ ]/g,o=0,s=0,l=0,u="";n=i.exec(e);)(l=n.index)-o>t&&(r=s>o?s:l,u+="\n"+e.slice(o,r),o=r+1),s=l;return u+="\n",e.length-o>t&&s>o?u+=e.slice(o,s)+"\n"+e.slice(s+1):u+=e.slice(o),u.slice(1)}function Z(e){for(var t,n,r,i="",o=0;o<e.length;o++)(t=e.charCodeAt(o))>=55296&&t<=56319&&(n=e.charCodeAt(o+1))>=56320&&n<=57343?(i+=_(1024*(t-55296)+n-56320+65536),o++):i+=!(r=M[t])&&W(t)?e[o]:r||_(t);return i}function $(e,t,n){var r,i,o="",s=e.tag;for(r=0,i=n.length;r<i;r+=1)ie(e,t,n[r],!1,!1)&&(0!==r&&(o+=","+(e.condenseFlow?"":" ")),o+=e.dump);e.tag=s,e.dump="["+o+"]"}function ee(e,t,n,r){var i,o,s="",u=e.tag;for(i=0,o=n.length;i<o;i+=1)ie(e,t+1,n[i],!0,!0)&&(r&&0===i||(s+=T(e,t)),e.dump&&l===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=u,e.dump=s||"[]"}function te(e,t,n){var r,i,o,s,l,u="",a=e.tag,c=Object.keys(n);for(r=0,i=c.length;r<i;r+=1)l=e.condenseFlow?'"':"",0!==r&&(l+=", "),s=n[o=c[r]],ie(e,t,o,!1,!1)&&(e.dump.length>1024&&(l+="? "),l+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),ie(e,t,s,!1,!1)&&(u+=l+=e.dump));e.tag=a,e.dump="{"+u+"}"}function ne(e,n,r,i){var o,s,u,a,c,f,d="",p=e.tag,h=Object.keys(r);if(!0===e.sortKeys)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new t("sortKeys must be a boolean or a function");for(o=0,s=h.length;o<s;o+=1)f="",i&&0===o||(f+=T(e,n)),a=r[u=h[o]],ie(e,n+1,u,!0,!0,!0)&&((c=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&l===e.dump.charCodeAt(0)?f+="?":f+="? "),f+=e.dump,c&&(f+=T(e,n)),ie(e,n+1,a,!0,c)&&(e.dump&&l===e.dump.charCodeAt(0)?f+=":":f+=": ",d+=f+=e.dump));e.tag=p,e.dump=d||"{}"}function re(e,n,r){var s,l,u,a,c,f;for(u=0,a=(l=r?e.explicitTypes:e.implicitTypes).length;u<a;u+=1)if(((c=l[u]).instanceOf||c.predicate)&&(!c.instanceOf||"object"==typeof n&&n instanceof c.instanceOf)&&(!c.predicate||c.predicate(n))){if(e.tag=r?c.tag:"?",c.represent){if(f=e.styleMap[c.tag]||c.defaultStyle,"[object Function]"===i.call(c.represent))s=c.represent(n,f);else{if(!o.call(c.represent,f))throw new t("!<"+c.tag+'> tag resolver accepts not "'+f+'" style');s=c.represent[f](n,f)}e.dump=s}return!0}return!1}function ie(e,n,r,o,s,l){e.tag=null,e.dump=r,re(e,r,!1)||re(e,r,!0);var u=i.call(e.dump);o&&(o=e.flowLevel<0||e.flowLevel>n);var a,c,f="[object Object]"===u||"[object Array]"===u;if(f&&(c=-1!==(a=e.duplicates.indexOf(r))),(null!==e.tag&&"?"!==e.tag||c||2!==e.indent&&n>0)&&(s=!1),c&&e.usedDuplicates[a])e.dump="*ref_"+a;else{if(f&&c&&!e.usedDuplicates[a]&&(e.usedDuplicates[a]=!0),"[object Object]"===u)o&&0!==Object.keys(e.dump).length?(ne(e,n,e.dump,s),c&&(e.dump="&ref_"+a+e.dump)):(te(e,n,e.dump),c&&(e.dump="&ref_"+a+" "+e.dump));else if("[object Array]"===u){var d=e.noArrayIndent&&n>0?n-1:n;o&&0!==e.dump.length?(ee(e,d,e.dump,s),c&&(e.dump="&ref_"+a+e.dump)):($(e,d,e.dump),c&&(e.dump="&ref_"+a+" "+e.dump))}else{if("[object String]"!==u){if(e.skipInvalid)return!1;throw new t("unacceptable kind of an object to dump "+u)}"?"!==e.tag&&H(e,e.dump,n,l)}null!==e.tag&&"?"!==e.tag&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function oe(e,t){var n,r,i=[],o=[];for(se(e,i,o),n=0,r=o.length;n<r;n+=1)t.duplicates.push(i[o[n]]);t.usedDuplicates=new Array(r)}function se(e,t,n){var r,i,o;if(null!==e&&"object"==typeof e)if(-1!==(i=t.indexOf(e)))-1===n.indexOf(i)&&n.push(i);else if(t.push(e),Array.isArray(e))for(i=0,o=e.length;i<o;i+=1)se(e[i],t,n);else for(i=0,o=(r=Object.keys(e)).length;i<o;i+=1)se(e[r[i]],t,n)}function le(e,t){var n=new K(t=t||{});return n.noRefs||oe(e,n),ie(n,0,e,!0,!0)?n.dump+"\n":""}function ue(t,n){return le(t,e.extend({schema:r},n))}module.exports.dump=le,module.exports.safeDump=ue;
},{"./common":"SMAs","./exception":"AQwz","./schema/default_full":"HKwV","./schema/default_safe":"tLdR"}],"BW56":[function(require,module,exports) {
"use strict";var e=require("./js-yaml/loader"),o=require("./js-yaml/dumper");function s(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}module.exports.Type=require("./js-yaml/type"),module.exports.Schema=require("./js-yaml/schema"),module.exports.FAILSAFE_SCHEMA=require("./js-yaml/schema/failsafe"),module.exports.JSON_SCHEMA=require("./js-yaml/schema/json"),module.exports.CORE_SCHEMA=require("./js-yaml/schema/core"),module.exports.DEFAULT_SAFE_SCHEMA=require("./js-yaml/schema/default_safe"),module.exports.DEFAULT_FULL_SCHEMA=require("./js-yaml/schema/default_full"),module.exports.load=e.load,module.exports.loadAll=e.loadAll,module.exports.safeLoad=e.safeLoad,module.exports.safeLoadAll=e.safeLoadAll,module.exports.dump=o.dump,module.exports.safeDump=o.safeDump,module.exports.YAMLException=require("./js-yaml/exception"),module.exports.MINIMAL_SCHEMA=require("./js-yaml/schema/failsafe"),module.exports.SAFE_SCHEMA=require("./js-yaml/schema/default_safe"),module.exports.DEFAULT_SCHEMA=require("./js-yaml/schema/default_full"),module.exports.scan=s("scan"),module.exports.parse=s("parse"),module.exports.compose=s("compose"),module.exports.addConstructor=s("addConstructor");
},{"./js-yaml/loader":"puZk","./js-yaml/dumper":"ZuFa","./js-yaml/type":"XcPh","./js-yaml/schema":"nYLM","./js-yaml/schema/failsafe":"EJga","./js-yaml/schema/json":"ZUfC","./js-yaml/schema/core":"wwCT","./js-yaml/schema/default_safe":"tLdR","./js-yaml/schema/default_full":"HKwV","./js-yaml/exception":"AQwz"}],"fmFj":[function(require,module,exports) {
"use strict";var e=require("./lib/js-yaml.js");module.exports=e;
},{"./lib/js-yaml.js":"BW56"}],"F7mU":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:m,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:m,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:m,lheading:/^([^\n]+)\n {0,3}(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function r(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||_.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=c(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d{1,9}\.)/,n.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,n.item=c(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=c(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=c(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=c(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag",n._tag).getRegex(),n.blockquote=c(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=b({},n),n.gfm=b({},n.normal,{fences:/^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=c(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=b({},n.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=b({},n.normal,{html:c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),r.rules=n,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){var r,s,i,l,o,a,h,p,u,c,g,f,d,m,b,y;for(e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e)){var _=this.tokens[this.tokens.length-1];e=e.substring(i[0].length),_&&"paragraph"===_.type?_.text+="\n"+i[0].trimRight():(i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?i:x(i,"\n")}))}else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2]?i[2].trim():i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if((i=this.rules.nptable.exec(e))&&(a={type:"table",header:k(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(i[0].length),g=0;g<a.align.length;g++)/^ *-+: *$/.test(a.align[g])?a.align[g]="right":/^ *:-+: *$/.test(a.align[g])?a.align[g]="center":/^ *:-+ *$/.test(a.align[g])?a.align[g]="left":a.align[g]=null;for(g=0;g<a.cells.length;g++)a.cells[g]=k(a.cells[g],a.header.length);this.tokens.push(a)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),h={type:"list_start",ordered:m=(l=i[2]).length>1,start:m?+l:"",loose:!1},this.tokens.push(h),p=[],r=!1,d=(i=i[0].match(this.rules.item)).length,g=0;g<d;g++)c=(a=i[g]).length,~(a=a.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(c-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+c+"}","gm"),"")),g!==d-1&&(o=n.bullet.exec(i[g+1])[0],(l.length>1?1===o.length:o.length>1||this.options.smartLists&&o!==l)&&(e=i.slice(g+1).join("\n")+e,g=d-1)),s=r||/\n\n(?!\s*$)/.test(a),g!==d-1&&(r="\n"===a.charAt(a.length-1),s||(s=r)),s&&(h.loose=!0),y=void 0,(b=/^\[[ xX]\] /.test(a))&&(y=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:b,checked:y,loose:s},p.push(u),this.tokens.push(u),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(h.loose)for(d=p.length,g=0;g<d;g++)p[g].loose=!0;this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),f=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[f]||(this.tokens.links[f]={href:i[2],title:i[3]});else if((i=this.rules.table.exec(e))&&(a={type:"table",header:k(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(i[0].length),g=0;g<a.align.length;g++)/^ *-+: *$/.test(a.align[g])?a.align[g]="right":/^ *:-+: *$/.test(a.align[g])?a.align[g]="center":/^ *:-+ *$/.test(a.align[g])?a.align[g]="left":a.align[g]=null;for(g=0;g<a.cells.length;g++)a.cells[g]=k(a.cells[g].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var s={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:m,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:m,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};function i(e,t){if(this.options=t||_.defaults,this.links=e,this.rules=s.normal,this.renderer=this.options.renderer||new l,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=s.pedantic:this.options.gfm&&(this.options.breaks?this.rules=s.breaks:this.rules=s.gfm)}function l(e){this.options=e||_.defaults}function o(){}function a(e){this.tokens=[],this.token=null,this.options=e||_.defaults,this.options.renderer=this.options.renderer||new l,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new h}function h(){this.seen={}}function p(e,t){if(t){if(p.escapeTest.test(e))return e.replace(p.escapeReplace,function(e){return p.replacements[e]})}else if(p.escapeTestNoEncode.test(e))return e.replace(p.escapeReplaceNoEncode,function(e){return p.replacements[e]});return e}function u(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function c(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function g(e,t,n){if(e){try{var r=decodeURIComponent(u(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(s){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!d.test(n)&&(n=function(e,t){f[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?f[" "+e]=e+"/":f[" "+e]=x(e,"/",!0));return e=f[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(s){return null}return n}s._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",s.em=c(s.em).replace(/punctuation/g,s._punctuation).getRegex(),s._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,s._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,s._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,s.autolink=c(s.autolink).replace("scheme",s._scheme).replace("email",s._email).getRegex(),s._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,s.tag=c(s.tag).replace("comment",n._comment).replace("attribute",s._attribute).getRegex(),s._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/,s._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/,s._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,s.link=c(s.link).replace("label",s._label).replace("href",s._href).replace("title",s._title).getRegex(),s.reflink=c(s.reflink).replace("label",s._label).getRegex(),s.normal=b({},s),s.pedantic=b({},s.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",s._label).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",s._label).getRegex()}),s.gfm=b({},s.normal,{escape:c(s.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),s.gfm.url=c(s.gfm.url,"i").replace("email",s.gfm._extended_email).getRegex(),s.breaks=b({},s.gfm,{br:c(s.br).replace("{2,}","*").getRegex(),text:c(s.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),i.rules=s,i.output=function(e,t,n){return new i(t,n).output(e)},i.prototype.output=function(e){for(var t,n,r,s,l,o,a="";e;)if(l=this.rules.escape.exec(e))e=e.substring(l[0].length),a+=p(l[1]);else if(l=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(l[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(l[0])&&(this.inRawBlock=!1),e=e.substring(l[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):p(l[0]):l[0];else if(l=this.rules.link.exec(e)){var h=y(l[2],"()");if(h>-1){var u=l[0].length-(l[2].length-h)-(l[3]||"").length;l[2]=l[2].substring(0,h),l[0]=l[0].substring(0,u).trim(),l[3]=""}e=e.substring(l[0].length),this.inLink=!0,r=l[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=t[1],s=t[3]):s="":s=l[3]?l[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),a+=this.outputLink(l,{href:i.escapes(r),title:i.escapes(s)}),this.inLink=!1}else if((l=this.rules.reflink.exec(e))||(l=this.rules.nolink.exec(e))){if(e=e.substring(l[0].length),t=(l[2]||l[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){a+=l[0].charAt(0),e=l[0].substring(1)+e;continue}this.inLink=!0,a+=this.outputLink(l,t),this.inLink=!1}else if(l=this.rules.strong.exec(e))e=e.substring(l[0].length),a+=this.renderer.strong(this.output(l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.em.exec(e))e=e.substring(l[0].length),a+=this.renderer.em(this.output(l[6]||l[5]||l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.code.exec(e))e=e.substring(l[0].length),a+=this.renderer.codespan(p(l[2].trim(),!0));else if(l=this.rules.br.exec(e))e=e.substring(l[0].length),a+=this.renderer.br();else if(l=this.rules.del.exec(e))e=e.substring(l[0].length),a+=this.renderer.del(this.output(l[1]));else if(l=this.rules.autolink.exec(e))e=e.substring(l[0].length),r="@"===l[2]?"mailto:"+(n=p(this.mangle(l[1]))):n=p(l[1]),a+=this.renderer.link(r,null,n);else if(this.inLink||!(l=this.rules.url.exec(e))){if(l=this.rules.text.exec(e))e=e.substring(l[0].length),this.inRawBlock?a+=this.renderer.text(l[0]):a+=this.renderer.text(p(this.smartypants(l[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===l[2])r="mailto:"+(n=p(l[0]));else{do{o=l[0],l[0]=this.rules._backpedal.exec(l[0])[0]}while(o!==l[0]);n=p(l[0]),r="www."===l[1]?"http://"+n:n}e=e.substring(l[0].length),a+=this.renderer.link(r,null,n)}return a},i.escapes=function(e){return e?e.replace(i.rules._escapes,"$1"):e},i.prototype.outputLink=function(e,t){var n=t.href,r=t.title?p(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,p(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},l.prototype.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var s=this.options.highlight(e,r);null!=s&&s!==e&&(n=!0,e=s)}return r?'<pre><code class="'+this.options.langPrefix+p(r,!0)+'">'+(n?e:p(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:p(e,!0))+"</code></pre>"},l.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},l.prototype.html=function(e){return e},l.prototype.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},l.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},l.prototype.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},l.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},l.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},l.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},l.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},l.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},l.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},l.prototype.strong=function(e){return"<strong>"+e+"</strong>"},l.prototype.em=function(e){return"<em>"+e+"</em>"},l.prototype.codespan=function(e){return"<code>"+e+"</code>"},l.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},l.prototype.del=function(e){return"<del>"+e+"</del>"},l.prototype.link=function(e,t,n){if(null===(e=g(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+p(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"},l.prototype.image=function(e,t,n){if(null===(e=g(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},l.prototype.text=function(e){return e},o.prototype.strong=o.prototype.em=o.prototype.codespan=o.prototype.del=o.prototype.text=function(e){return e},o.prototype.link=o.prototype.image=function(e,t,n){return""+n},o.prototype.br=function(){return""},a.parse=function(e,t){return new a(t).parse(e)},a.prototype.parse=function(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,b({},this.options,{renderer:new o})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},a.prototype.next=function(){return this.token=this.tokens.pop(),this.token},a.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},a.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},a.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,u(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",i="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(s,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var l=this.token.ordered,o=this.token.start;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,l,o);case"list_item_start":i="";var a=this.token.loose,h=this.token.checked,p=this.token.task;for(this.token.task&&(i+=this.renderer.checkbox(h));"list_item_end"!==this.next().type;)i+=a||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(i,p,h);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var c='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(c);console.log(c)}},h.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},p.escapeTest=/[&<>"']/,p.escapeReplace=/[&<>"']/g,p.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,p.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var f={},d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(){}function b(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function k(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,s=t;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function x(e,t,n){if(0===e.length)return"";for(var r=0;r<e.length;){var s=e.charAt(e.length-r-1);if(s!==t||n){if(s===t||!n)break;r++}else r++}return e.substr(0,e.length-r)}function y(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=0,r=0;r<e.length;r++)if("\\"===e[r])r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&--n<0)return r;return-1}function _(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null);var s,i,l=(t=b({},_.defaults,t||{})).highlight,o=0;try{s=r.lex(e,t)}catch(u){return n(u)}i=s.length;var h=function(e){if(e)return t.highlight=l,n(e);var r;try{r=a.parse(s,t)}catch(u){e=u}return t.highlight=l,e?n(e):n(null,r)};if(!l||l.length<3)return h();if(delete t.highlight,!i)return h();for(;o<s.length;o++)!function(e){"code"!==e.type?--i||h():l(e.text,e.lang,function(t,n){return t?h(t):null==n||n===e.text?--i||h():(e.text=n,e.escaped=!0,void(--i||h()))})}(s[o])}else try{return t&&(t=b({},_.defaults,t)),a.parse(r.lex(e,t),t)}catch(u){if(u.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||_.defaults).silent)return"<p>An error occurred:</p><pre>"+p(u.message+"",!0)+"</pre>";throw u}}m.exec=m,_.options=_.setOptions=function(e){return b(_.defaults,e),_},_.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new l,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},_.defaults=_.getDefaults(),_.Parser=a,_.parser=a.parse,_.Renderer=l,_.TextRenderer=o,_.Lexer=r,_.lexer=r.lex,_.InlineLexer=i,_.inlineLexer=i.output,_.Slugger=h,_.parse=_,"undefined"!=typeof module&&"object"==typeof exports?module.exports=_:"function"==typeof e&&e.amd?e(function(){return _}):t.marked=_}(this||("undefined"!=typeof window?window:t));
},{}],"JBkG":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,n){var s,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(c=(i<3?s(c):i>3?s(t,r,c):s(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(s,i){function c(e){try{l(n.next(e))}catch(t){i(t)}}function a(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(c,a)}l((n=n.apply(e,t||[])).next())})},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const s=require("@rxdi/core");require("./prism");const i=n(require("js-yaml")),c=n(require("marked"));let a=class{constructor(){this.renderer=new c.default.Renderer,this.cache=new Map,this.cacheCopy=new Map,this.initParser()}get getCacheCopy(){return this.cacheCopy}highlightElements(e){return[].forEach.call(e,e=>{e.className&&Prism.highlightElement(e)})}flushCache(){this.cache.clear()}readAndCompile(e){return`<div class="content">\n      ${c.default(e,{renderer:this.renderer})}\n    </div>`+"\n"}fetchMarkdown(e){return r(this,void 0,void 0,function*(){if(this.cache.has(e))return this.cache.get(e);const t=yield fetch(e);if(200!==t.status)throw new Error(`Unable to load markdown status is ${t.status}`);const r=yield t.text(),n=r.split("```").filter(e=>e.includes("typescript")).map(e=>e.replace("typescript","").trim());this.cacheCopy.set(e,n);const s=this.readAndCompile(r);return this.cache.set(e,s),this.cache.get(e)})}fetchDefinitions(e){return r(this,void 0,void 0,function*(){if(this.cache.has(e))return this.cache.get(e);const t=yield fetch(e);if(200!==t.status)throw new Error(`Unable to load config status is ${t.status}`);const r=yield t.text(),n=i.default.load(r);return this.cache.set(e,n),r})}crypto(e){let t="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length;for(let s=0;s<e;s++)t+=r.charAt(Math.floor(Math.random()*n));return t}escapeBrackets(e){return e=(e=e.replace(new RegExp("{","g"),"&#123;")).replace(new RegExp("}","g"),"&#125;")}appendEmptyLine(e){const t=e.indexOf('">');return e.slice(0,t+'">'.length)+"\n"+e.slice(t+'">'.length,e.length)}replaceFilename(e,t,r,n){const s=n+r.length,i=t.indexOf(")"),c="app"+this.crypto(20),a=t.slice(s+1,i);return'\n<span class="filename">'+(a.length>0?`\n  {{ '${a}' | extension: ${c}.isJsActive }}`:"")+`\n<app-tabs #${c}></app-tabs>\n</span>`+e(t.slice(i+1),c).trim()}parseSwitcher(e,t,r,n,s){const i=t.slice(0,n).trim(),c=t.slice(n+r.length,t.length).trim(),a=(e,t)=>s?e.slice(0,4)+` [class.hide]="${"js"===t?"!":""}${s}.isJsActive"`+e.slice(4,e.length):e;return a(e(i,"typescript"),"ts")+a(e(c,"typescript"),"js")}insertText(e,t,r){return e.slice(0,t)+r+e.slice(t)}initParser(){const e=this.renderer.table;this.renderer.table=((t,r)=>t.includes("<th></th>")?e.call(this.renderer,"",r):e.call(this.renderer,t,r));const t=this.renderer.code;this.renderer.code=((e,r,n,s)=>{const i=e.indexOf("@@filename");if(i>=0)return this.replaceFilename(e=>this.renderer.code(e,r,n),e,"@@filename",i);const c=e.indexOf("@@switch");if(c>=0){const t=this.parseSwitcher((e,t)=>this.renderer.code(e,t,n),e,"@@switch",c,s);return this.escapeBrackets(t)}let a=t.call(this.renderer,e,r,n);return a+=`\n      <script>\n        console.log('AAAA')\n      const el = document.createElement('input');\n      el.value = "${JSON.stringify({registry:"https://ui-registry.graphql-server.com/upload"})}";\n      const test = document.querySelectorAll('pre');\n      console.log(test)\n      // el.select();\n      // document.execCommand('copy');\n      // this.shadowRoot.removeChild(el);\n      <\/script>\n      `,a=s?a:this.appendEmptyLine(a),this.escapeBrackets(a)});const r=this.renderer.link;this.renderer.link=((e,t,n)=>(e.includes("http")||e.includes("mailto"),r.call(this.renderer,e,t,n)));const n=this.renderer.heading.bind(this.renderer);this.renderer.heading=((...e)=>{let t=n(...e);if(!t.includes("h4"))return t;const r=t.indexOf("<h")+3;return t=this.insertText(t,r," appAnchor"),t=this.insertText(t,t.indexOf('">')+2,"<span>"),this.insertText(t,t.length-6,"</span>")});const s=this.renderer.blockquote.bind(this.renderer);this.renderer.blockquote=(e=>{let t=s(e);return t=(t=(t=t.replace("<p>","")).replace("</p>","")).replace("<blockquote>",'<blockquote class="warning">')})}};a=e([s.Injectable(),t("design:paramtypes",[])],a),exports.MarkdownParserService=a;
},{"@rxdi/core":"lhgc","./prism":"hRlH","js-yaml":"fmFj","marked":"F7mU"}],"xRoC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/lit-html");exports.style=t.css`
  .transition {
    -webkit-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  .transition-fast {
    -webkit-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  .transition-slow {
    -webkit-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  /* CLEARFIX */
  .clearfix {
    *zoom: 1;
  }
  .clearfix:before,
  .clearfix:after {
    content: ' ';
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  .center-element {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .center-left {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .center-top {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .box-sizing {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .toc-wrapper {
    width: 250px;
    padding-left: 32px;
    box-sizing: border-box;
    position: fixed;
    top: 65px;
    right: 0px;
    background-color: rgba(34, 39, 44, 0.9);
    border-radius: 10px;
    z-index: 1001;
  }
  .toc-wrapper ul {
    position: relative;
    padding: 0;
  }
  .toc-wrapper ul::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    bottom: 10px;
    width: 2px;
    background: #efefef;
  }
  .toc-wrapper li {
    display: block;
    position: relative;
    padding-left: 30px;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 6px;
    cursor: pointer;
  }
  .toc-wrapper li:hover {
    color: #37a5bc;
  }
  .toc-wrapper .current {
    color: #37a5bc;
    font-weight: 600;
  }
  .toc-wrapper .current::before {
    background: #37a5bc;
    border-color: #37a5bc;
    border-width: 1px;
    left: -3px;
  }
  .toc-wrapper li::before {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    content: '';
    background: #fdfdfd;
    border: 2px solid #efefef;
    left: -4px;
    width: 6px;
    height: 6px;
    top: 50%;
    display: inline-block;
    position: absolute;
  }
  .toc-wrapper li:last-of-type::before {
    top: auto;
    bottom: 0;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"NHKw":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var f=e.length-1;f>=0;f--)(o=e[f])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/core"),n=require("rxjs");let r=class{constructor(){this.menu=new n.BehaviorSubject([]),this.scrollTopOffset=100}setItems(e){this.menu.next(e)}clearMenu(){this.menu.next([])}addItem(e){this.menu.next([...this.menu.getValue(),e])}lookupHeadings(e){if(!e)return;const t=e.querySelectorAll("h3, h4"),n=e=>{const t=e&&e.indexOf("#");return t>=0?e.slice(0,t):e},r=Array.from(t).map(e=>({offsetTop:e.offsetTop,textContent:n(e.textContent),elementRef:e}));if(r&&r.length){const e=this.findCurrentHeading(t);this.setItems([...r.map(e=>({elementRef:e.elementRef,title:e.textContent}))]),e>0&&this.navigateToAnchor(r[e].elementRef)}}findCurrentHeading(e){for(let t=0;t<e.length;t++){if(e.length-1===t)return this.activeId=t;if(e[t+1].offsetTop>=window.pageYOffset+this.scrollTopOffset+15)return this.activeId=t}}navigateToAnchor(e){e&&window.scroll({top:e.offsetTop-100,behavior:"smooth"})}};r=e([t.Injectable()],r),exports.MarkdownParserMenuProvider=r;
},{"@rxdi/core":"lhgc","rxjs":"iRqj"}],"GhRS":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(i<3?n(c):i>3?n(t,r,c):n(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/lit-html"),n=require("./toc.component.css"),i=require("@rxdi/core"),c=require("../markdown-menu.provider"),s=require("rxjs/operators");let l=class extends o.LitElement{constructor(){super(...arguments),this.opened=!0,this.menus=this.menuProvider.menu.pipe(s.filter(()=>!!this.opened),s.filter(e=>!!e.length),s.map(e=>this.createMenusTemplate(e)))}clickAnchor(e){this.menuProvider.navigateToAnchor(e)}createMenusTemplate(e){return o.html`
      ${e.map(e=>this.createSingleItem(e))}
    `}createSingleItem(e){return o.html`
      <li @click=${()=>this.clickAnchor(e.elementRef)}>
        ${e.title}
      </li>
    `}OnDestroy(){this.menuProvider.menu.next([])}};t([o.property({type:Boolean}),r("design:type",Object)],l.prototype,"opened",void 0),t([i.Inject(c.MarkdownParserMenuProvider),r("design:type","function"==typeof(e=void 0!==c.MarkdownParserMenuProvider&&c.MarkdownParserMenuProvider)?e:Object)],l.prototype,"menuProvider",void 0),l=t([o.Component({selector:"toc-component",style:n.style,template(){return o.html`
      ${o.async(this.menus.pipe(s.map(e=>o.html`
              <div class="toc-wrapper">
                <ul>
                  ${e}
                </ul>
              </div>
            `)))}
    `}})],l),exports.TocComponent=l;
},{"@rxdi/lit-html":"R8ie","./toc.component.css":"xRoC","@rxdi/core":"lhgc","../markdown-menu.provider":"NHKw","rxjs/operators":"cVrl"}],"tf1s":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/lit-html");exports.style=t.css`
  .content h1 {
    font-size: 35px;
    font-weight: bold;
  }
  .content h2 {
    font-size: 30px;
    font-weight: 500;
  }
  .content h3 {
    font-size: 25px;
    font-weight: 500;
  }
  p code {
    color: #2c3e5c !important;
  }
  .container {
    margin: 50px auto;
    width: 80%;
  }

  img {
    width: 100%;
  }

  .filename {
    background: #151515;
    color: #fff;
    padding: 12px 30px;
    margin: 35px 0 -35px;
    display: block;
    min-height: 25px;
    position: relative;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    overflow: hidden;
    font-size: 15px;
  }
  .language-yml {
    color: #930404 !important;
  }
  .filename + pre[class*='language-'],
  .hide + pre[class*='language-'],
  .filename + div + pre[class*='language-'],
  .hide + div + pre[class*='language-'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  code {
    font-family: Inconsolata, Consolas, 'Courier New', monospace;
    padding: 2px 6px;
    color: #2876d2;
    border-radius: 4px;
    font-size: 15px;
    white-space: pre-wrap;
    background: #f0f2f3;
  }
  pre {
    box-shadow: 0 5px 55px rgba(162, 162, 162, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
  }
  code[class*='language-'],
  pre[class*='language-'] {
    letter-spacing: normal;
    color: #1c1f24;
    background: none;
    font-family: Inconsolata, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
      monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 25px;
    font-size: 16px;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }
  pre[class*='language-'],
  :not(pre) > code[class*='language-'] {
    background: #f5f5f5;
    border-radius: 6px;
  }
  /* Code blocks */
  pre[class*='language-'] {
    padding: 0 30px 26px;
    margin: 35px 0;
    overflow: auto;
    border: 0;
  }
  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.15em 0.2em 0.05em;
    border-radius: 0.3em;
    border: 0.13em solid #7a6652;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #7a8186;
  }
  .token.punctuation {
    opacity: 0.7;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #ffc093;
  }
  .language-html .tag {
    color: #3178d0;
  }
  .language-html .punctuation {
    color: #3178d0;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #3594e2;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #caffa8;
  }
  .token.function,
  .token.operator {
    color: #36a3b9;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #b32f82;
  }
  .token.regex,
  .token.important {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .token.deleted {
    color: red;
  }
  div.prism-show-language {
    position: relative;
  }
  div.prism-show-language > div.prism-show-language-label {
    display: none;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .transition {
    -webkit-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  .transition-fast {
    -webkit-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  .transition-slow {
    -webkit-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  /* CLEARFIX */
  .clearfix {
    *zoom: 1;
  }
  .clearfix:before,
  .clearfix:after {
    content: ' ';
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  .center-element {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .center-left {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .center-top {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .box-sizing {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  *:focus {
    outline: none;
  }
  /* Main Layout */
  .bg {
    background-image: linear-gradient(#1c1f24, #24292f);
  }
  .bg.context {
    background-color: #21262c;
  }
  .version-labels {
    background-color: #6f42be;
  }
  .version-labels.new {
    background-color: #33a743;
  }
  .version-labels.new {
    background-color: #2767d7;
  }
  .version-labels .sha {
    background-color: #554888;
  }
  ul {
    border-left: 1px solid #303539;
    list-style-type: none;
  }
  li {
    padding-bottom: 5px;
    list-style-type: none;
  }
  li p {
    margin: 10px;
  }
  .suggestion-label {
    background-color: #2766d6;
  }
  .flex {
    display: flex;
  }
  .spacer {
    flex: 1 3 auto;
  }
  .pointer {
    cursor: pointer;
  }
  .center {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #0894e2;
  }
  strong {
    font-weight: 600;
  }
  hr {
    width: 100%;
    height: 4px;
    background: #37a5bc;
    border: 0;
    margin: 50px 0;
  }
  h4 {
    font-size: 20px;
  }
  blockquote {
    line-height: 1.6;
    position: relative;
    margin: 35px 0;
    background: #f9eff1;
    padding: 20px;
  }
  blockquote::before {
    height: 100%;
    width: 5px;
    content: '';
    background: #37a5bc;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  blockquote strong {
    color: #37a5bc;
  }
  blockquote strong:first-of-type {
    display: block;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
  }
  blockquote.warning {
    background: #3e3d3a;
  }
  blockquote.warning::before {
    background: #ffb36f;
  }
  blockquote.warning strong,
  blockquote.warning a {
    color: #ed8529;
  }
  blockquote.info {
    background: rgba(8, 148, 226, 0.038);
  }
  blockquote.info::before {
    background: #0894e2;
  }
  blockquote.info strong,
  blockquote.info a {
    color: #0894e2;
  }
  figure {
    margin: 60px 30px;
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    figure {
      margin: 60px 0;
    }
  }
  figure img {
    max-width: 100%;
    height: auto;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.08);
  }
  figcaption {
    color: rgba(243, 245, 247, 0.9);
    font-size: 16px;
    margin: 20px 0;
  }
  figcaption p {
    font-size: 16px;
  }
  table {
    width: 100%;
    margin: 40px 0;
  }
  @media only screen and (max-width: 767px) {
    tr {
      margin-bottom: 20px;
      display: block;
    }
    tr:last-of-type {
      margin-bottom: 0;
    }
  }
  th {
    padding: 20px;
    background: #efefef;
  }
  tr:nth-of-type(even) td {
    background: #f7f7f7;
  }
  tr:nth-of-type(odd) td:first-of-type {
    border-right: 1px solid #f0f2f3;
  }
  @media only screen and (max-width: 767px) {
    tr:nth-of-type(odd) td:first-of-type {
      border-right: 0;
      border-bottom: 1px solid #f0f2f3;
    }
  }
  tr:nth-of-type(even) td:first-of-type {
    border-right: 1px solid #fff;
  }
  @media only screen and (max-width: 767px) {
    tr:nth-of-type(even) td:first-of-type {
      border-right: 0;
      border-bottom: 1px solid #fff;
    }
  }
  tr td {
    padding: 20px 30px;
    vertical-align: top;
  }
  @media only screen and (max-width: 767px) {
    tr td {
      display: block;
      padding: 20px;
    }
  }
  .file-tree {
    background: #f9f9f9;
    border: 4px solid #f5f5f5;
    margin: 40px 0;
    padding: 16px 32px;
  }
  .file-tree .item {
    display: block;
    line-height: 32px;
    font-size: 15px;
    color: #5a5a5a;
  }
  .file-tree .children {
    padding-left: 30px;
    position: relative;
    overflow: hidden;
  }
  .file-tree .children .item {
    position: relative;
  }
  .file-tree .children .item:before {
    content: '';
    left: -18px;
    bottom: 16px;
    width: 16px;
    height: 9999px;
    position: absolute;
    border-width: 0 0 1px 1px;
    border-style: solid;
    border-color: #dbdbdb;
    border-radius: 0 0 0 3px;
  }
  .external {
    background: #f7f7f7;
  }
  .external::before {
    background: #e8e8e8;
  }
  .ps > .ps__scrollbar-y-rail {
    width: 10px;
  }
  .ps:hover > .ps__scrollbar-y-rail > .ps__scrollbar-y,
  .ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y,
  .ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y {
    width: 6px !important;
    background: #151515;
  }
  .ps > .ps__scrollbar-y-rail > .ps__scrollbar-y {
    border-radius: 0;
    -webkit-border-radius: 0;
  }
  .hide {
    display: none !important;
  }
  /*
   * Container style
   */
  .ps {
    overflow: hidden !important;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
    -ms-touch-action: auto;
  }
  /*
   * Scrollbar rail styles
   */
  .ps__rail-x {
    display: none;
    opacity: 0;
    transition: background-color 0.2s linear, opacity 0.2s linear;
    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
    height: 15px;
    /* there must be 'bottom' or 'top' for ps__rail-x */
    bottom: 0px;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps__rail-y {
    display: none;
    opacity: 0;
    transition: background-color 0.2s linear, opacity 0.2s linear;
    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
    width: 15px;
    /* there must be 'right' or 'left' for ps__rail-y */
    right: 0;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps--active-x > .ps__rail-x,
  .ps--active-y > .ps__rail-y {
    display: block;
    background-color: transparent;
  }
  .ps:hover > .ps__rail-x,
  .ps:hover > .ps__rail-y,
  .ps--focus > .ps__rail-x,
  .ps--focus > .ps__rail-y,
  .ps--scrolling-x > .ps__rail-x,
  .ps--scrolling-y > .ps__rail-y {
    opacity: 0.6;
  }
  .ps__rail-x:hover,
  .ps__rail-y:hover,
  .ps__rail-x:focus,
  .ps__rail-y:focus {
    background-color: #eee;
    opacity: 0.9;
  }
  /*
   * Scrollbar thumb styles
   */
  .ps__thumb-x {
    background-color: #aaa;
    border-radius: 6px;
    transition: background-color 0.2s linear, height 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, height 0.2s ease-in-out;
    height: 6px;
    /* there must be 'bottom' for ps__thumb-x */
    bottom: 2px;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps__thumb-y {
    background-color: #aaa;
    border-radius: 6px;
    transition: background-color 0.2s linear, width 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;
    width: 6px;
    /* there must be 'right' for ps__thumb-y */
    right: 2px;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps__rail-x:hover > .ps__thumb-x,
  .ps__rail-x:focus > .ps__thumb-x {
    background-color: #999;
    height: 11px;
  }
  .ps__rail-y:hover > .ps__thumb-y,
  .ps__rail-y:focus > .ps__thumb-y {
    background-color: #999;
    width: 11px;
  }
  /* MS supports */
  @supports (-ms-overflow-style: none) {
    .ps {
      overflow: auto !important;
    }
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .ps {
      overflow: auto !important;
    }
  }
  /*
   TODO: Remove important flags after this bug if fixed:
   https://github.com/angular/flex-layout/issues/381
   */
  perfect-scrollbar {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    /* stylelint-disable */
    /* stylelint-enable */
  }
  perfect-scrollbar[hidden] {
    display: none;
  }
  perfect-scrollbar[fxflex] {
    display: flex;
    flex-direction: column;
    -webkit-box-orient: column;
    -webkit-box-direction: column;
    height: auto;
    min-width: 0;
    min-height: 0;
  }
  perfect-scrollbar[fxflex] > .ps {
    flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    width: auto;
    height: auto;
    min-width: 0;
    min-height: 0;
  }
  perfect-scrollbar[fxlayout] > .ps,
  perfect-scrollbar[fxlayout] > .ps > .ps-content {
    display: flex;
    flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    align-items: inherit;
    place-content: inherit;
    -webkit-box-pack: inherit;
    -webkit-box-align: inherit;
    flex-direction: inherit;
    -webkit-box-orient: inherit;
    -webkit-box-direction: inherit;
    width: 100%;
    height: 100%;
  }
  perfect-scrollbar[fxlayout='row'] > .ps,
  perfect-scrollbar[fxlayout='row'] > .ps > .ps-content {
    flex-direction: row !important;
    -webkit-box-orient: row !important;
    -webkit-box-direction: row !important;
  }
  perfect-scrollbar[fxlayout='column'] > .ps,
  perfect-scrollbar[fxlayout='column'] > .ps > .ps-content {
    flex-direction: column !important;
    -webkit-box-orient: column !important;
    -webkit-box-direction: column !important;
  }
  perfect-scrollbar > .ps {
    position: static;
    display: block;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit;
  }
  perfect-scrollbar > .ps > .ps-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    overflow: hidden;
    pointer-events: none;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {
    position: absolute;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {
    left: 0;
    min-width: 100%;
    min-height: 24px;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {
    top: 0;
    min-width: 24px;
    min-height: 100%;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {
    top: 0;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {
    left: 0;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {
    right: 0;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {
    bottom: 0;
  }
  perfect-scrollbar > .ps.ps--active-y > .ps__rail-y {
    top: 0 !important;
    right: 0 !important;
    width: 10px;
    cursor: default;
    transition: width 200ms linear, opacity 200ms linear,
      background-color 200ms linear;
  }
  perfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover {
    width: 15px;
  }
  perfect-scrollbar > .ps.ps--active-x > .ps__rail-x {
    bottom: 0 !important;
    left: 0 !important;
    height: 10px;
    cursor: default;
    transition: height 200ms linear, opacity 200ms linear,
      background-color 200ms linear;
  }
  perfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover {
    height: 15px;
  }
  perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {
    margin: 0 0 10px;
  }
  perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {
    margin: 0 10px 0 0;
  }
  perfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y {
    opacity: 0.9;
    background-color: #eee;
  }
  perfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {
    opacity: 0.9;
    background-color: #eee;
  }
  perfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y {
    opacity: 0.6;
  }
  perfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {
    opacity: 0.6;
  }
  perfect-scrollbar.ps-show-active
    > .ps.ps--active-y
    > .ps-overlay:not(.ps-at-top)
    .ps-indicator-top {
    opacity: 1;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active
    > .ps.ps--active-y
    > .ps-overlay:not(.ps-at-bottom)
    .ps-indicator-bottom {
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active
    > .ps.ps--active-x
    > .ps-overlay:not(.ps-at-left)
    .ps-indicator-left {
    opacity: 1;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active
    > .ps.ps--active-x
    > .ps-overlay:not(.ps-at-right)
    .ps-indicator-right {
    opacity: 1;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-y
    > .ps-overlay.ps-at-top
    .ps-indicator-top {
    background: linear-gradient(
      to bottom,
      rgba(170, 170, 170, 0.5) 0%,
      rgba(170, 170, 170, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-y
    > .ps-overlay.ps-at-top
    .ps-indicator-top.ps-indicator-show {
    opacity: 1;
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-y
    > .ps-overlay.ps-at-bottom
    .ps-indicator-bottom {
    background: linear-gradient(
      to top,
      rgba(170, 170, 170, 0.5) 0%,
      rgba(170, 170, 170, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-y
    > .ps-overlay.ps-at-bottom
    .ps-indicator-bottom.ps-indicator-show {
    opacity: 1;
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-x
    > .ps-overlay.ps-at-left
    .ps-indicator-left {
    background: linear-gradient(
      to right,
      rgba(170, 170, 170, 0.5) 0%,
      rgba(170, 170, 170, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-x
    > .ps-overlay.ps-at-left
    .ps-indicator-left.ps-indicator-show {
    opacity: 1;
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-x
    > .ps-overlay.ps-at-right
    .ps-indicator-right {
    background: linear-gradient(
      to left,
      rgba(170, 170, 170, 0.5) 0%,
      rgba(170, 170, 170, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-x
    > .ps-overlay.ps-at-right
    .ps-indicator-right.ps-indicator-show {
    opacity: 1;
  }
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      width: 100%;
    }
    .content {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"tte7":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const i=require("@rxdi/core"),o=require("rxjs"),r=require("rxjs/operators");let n=class{constructor(){this.width=new o.BehaviorSubject(document.body.clientWidth),this.height=new o.BehaviorSubject(document.body.clientHeight),this.scrollDebounceTime=10,this.scrollSubscription=o.fromEvent(window,"scroll").pipe(r.debounceTime(this.scrollDebounceTime)),this.isPositionFixed=!0,window.addEventListener("resize",()=>this.setWindowSize())}setWindowSize(){this.height.next(document.body.clientHeight),this.width.next(document.body.clientWidth)}getBoth(){return{width:this.width.getValue(),height:this.height.getValue()}}combineBoth(){return o.of(this.getBoth()).pipe(r.combineLatest(this.height,this.width),r.map(()=>this.getBoth()))}};n=e([i.Injectable({init:!0}),t("design:paramtypes",[])],n),exports.ResponsiveService=n;
},{"@rxdi/core":"lhgc","rxjs":"iRqj","rxjs/operators":"cVrl"}],"f3cG":[function(require,module,exports) {
"use strict";function e(e){return e.reduce((e,t)=>(e[t]=t,e),Object.create(null))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.strEnum=e;
},{}],"oZ1d":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../helpers/str-enum");exports.PalettesUnion=e.strEnum(["root","default","primary","secondary","danger","warning"]),exports.Palettes="palettes",exports.Styles=e.strEnum(["spacer","pointer","images","flex","center","transitions"]);
},{"../helpers/str-enum":"f3cG"}],"AhHs":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,s,r){var l,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(n=(i<3?l(n):i>3?l(t,s,n):l(t,s))||n);return i>3&&n&&Object.defineProperty(t,s,n),n};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/core"),s=require("../../settings"),r=require("rxjs/operators");let l=class{constructor(){this.palletes=t.Container.get(s.Palettes)}changeStyle(e){this.palletes.next(e)}OnInit(){this.palletes.subscribe(e=>{this.style&&this.style.remove(),this.style=document.createElement("style"),this.style.innerHTML=Object.entries(e).map(([e,t])=>` /* ${e} pallete */ ${t.cssText}`).join(" "),document.head.appendChild(this.style)})}getStyles(){return this.palletes.asObservable().pipe(r.map(e=>Object.values(e)),r.map(e=>e.map(e=>e.cssText)),r.shareReplay({bufferSize:1,refCount:!0}))}};l=e([t.Injectable({init:!0})],l),exports.DynamicCssService=l;
},{"@rxdi/core":"lhgc","../../settings":"oZ1d","rxjs/operators":"cVrl"}],"wYaI":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./responsive/responsive.service")),e(require("./dynamic-css/dynamic-css"));
},{"./responsive/responsive.service":"tte7","./dynamic-css/dynamic-css":"AhHs"}],"aWCv":[function(require,module,exports) {
"use strict";var e,t,r,o=this&&this.__decorate||function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},n=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))(function(i,n){function s(e){try{p(o.next(e))}catch(t){n(t)}}function a(e){try{p(o.throw(e))}catch(t){n(t)}}function p(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(s,a)}p((o=o.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const s=require("@rxdi/lit-html"),a=require("./markdown-reader.component.css"),p=require("@rxdi/core"),c=require("../markdown.service"),d=require("../markdown-menu.provider"),h=require("../../services"),l=require("rxjs/operators");let m=class extends s.LitElement{constructor(){super(...arguments),this.html="",this.widthHeight=this.responsive.combineBoth()}OnInit(){this.widthHeight.pipe(l.tap(({width:e})=>{this.disableTocComponent=e<600})).subscribe()}OnUpdate(){return n(this,void 0,void 0,function*(){const e=this.getRouteParams();yield this.fetch(e.namespace,e.repo,e.filePath),this.mdParser.highlightElements(this.tags),this.mdParserMenu.lookupHeadings(this.shadowRoot)})}getRouteParams(){let e={};return this.location&&(e=this.location.params),{namespace:e.namespace||this.namespace,repo:e.repo||this.repo,filePath:e.filePath||this.filePath}}fetch(e="rxdi",t="starter-client-lit-html",r="README.md"){return n(this,void 0,void 0,function*(){try{this.html=yield this.mdParser.fetchMarkdown(this.link||`https://raw.githubusercontent.com/${e}/${t}/master/${r}`)}catch(o){this.dispatchEvent(new CustomEvent("onError",{detail:o}))}this.dispatchEvent(new CustomEvent("onSuccess"))})}};o([s.property(),i("design:type",Object)],m.prototype,"html",void 0),o([s.property({type:Boolean}),i("design:type",Boolean)],m.prototype,"disableTocComponent",void 0),o([s.property(),i("design:type",String)],m.prototype,"link",void 0),o([s.property(),i("design:type",String)],m.prototype,"namespace",void 0),o([s.property(),i("design:type",String)],m.prototype,"repo",void 0),o([s.property(),i("design:type",String)],m.prototype,"filePath",void 0),o([s.property(),i("design:type",String)],m.prototype,"markdownReaderJSON",void 0),o([p.Inject(c.MarkdownParserService),i("design:type","function"==typeof(e=void 0!==c.MarkdownParserService&&c.MarkdownParserService)?e:Object)],m.prototype,"mdParser",void 0),o([p.Inject(d.MarkdownParserMenuProvider),i("design:type","function"==typeof(t=void 0!==d.MarkdownParserMenuProvider&&d.MarkdownParserMenuProvider)?t:Object)],m.prototype,"mdParserMenu",void 0),o([p.Inject(h.ResponsiveService),i("design:type","function"==typeof(r=void 0!==h.ResponsiveService&&h.ResponsiveService)?r:Object)],m.prototype,"responsive",void 0),o([s.queryAll("code"),i("design:type",Array)],m.prototype,"tags",void 0),m=o([s.Component({selector:"markdown-reader",style:a.style,template(){return s.html`
      ${this.disableTocComponent?"":s.html`
            <toc-component src=""></toc-component>
          `}
      ${this.html?"":s.html`
            <loading-screen-component></loading-screen-component>
          `}
      ${this.html?s.html`
            <div class="container">
              ${s.unsafeHTML(this.html)}
            </div>
          `:""}
    `}})],m),exports.MarkdownReaderComponent=m;
},{"@rxdi/lit-html":"R8ie","./markdown-reader.component.css":"tf1s","@rxdi/core":"lhgc","../markdown.service":"JBkG","../markdown-menu.provider":"NHKw","../../services":"wYaI","rxjs/operators":"cVrl"}],"srSX":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,r,o,t){var n,c=arguments.length,d=c<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,r,o,t);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(d=(c<3?n(d):c>3?n(r,o,d):n(r,o))||d);return c>3&&d&&Object.defineProperty(r,o,d),d};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/core"),o=require("./markdown.service"),t=require("./toc/toc.component"),n=require("./markdown-menu.provider"),c=require("./reader/markdown-reader.component");let d=class{};d=e([r.Module({components:[t.TocComponent,c.MarkdownReaderComponent],providers:[o.MarkdownParserService,n.MarkdownParserMenuProvider]})],d),exports.MarkdownReaderModule=d;
},{"@rxdi/core":"lhgc","./markdown.service":"JBkG","./toc/toc.component":"GhRS","./markdown-menu.provider":"NHKw","./reader/markdown-reader.component":"aWCv"}],"l0JX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
},{}],"nmXx":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./markdown-reader.component")),e(require("./markdown-reader.component.css")),e(require("./markdown-reader.component.interface"));
},{"./markdown-reader.component":"aWCv","./markdown-reader.component.css":"tf1s","./markdown-reader.component.interface":"l0JX"}],"X0WN":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./markdown.module")),e(require("./markdown-menu.provider")),e(require("./markdown.service")),e(require("./reader/index"));
},{"./markdown.module":"srSX","./markdown-menu.provider":"NHKw","./markdown.service":"JBkG","./reader/index":"nmXx"}],"gE8N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.DEFAULT=e.css`
  :root {
    --default-bg-color: transparent;
    --default-color: #222;
    --default-border: 1px solid #e5e5e5;
    --default-hover-color: transparent;
    --default-hover-border: 1px solid #999;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"VwDY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html");exports.PRIMARY=r.css`
  :root {
    --primary-bg-color: #1e87f0;
    --primary-color: #fff;
    --primary-border: 1px solid transparent;
    --primary-hover-color: #0f7ae5;
    --primary-active-color: #0e6dcd;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"tTZD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.DANGER=e.css`
  :root {
    --danger-bg-color: #f0506e;
    --danger-color: #fff;
    --danger-border: 1px solid transparent;
    --danger-hover-color: #ee395b;
    --danger-active-color: #ec2147;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"rI9q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/lit-html");exports.SECONDARY=o.css`
  :root {
    --secondary-bg-color: #222;
    --secondary-color: #fff;
    --secondary-border: 1px solid transparent;
    --secondary-hover-color: #333;
    --secondary-active-color: #000;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"f1bC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html");exports.WARNING=r.css`
  :root {
    --warning-bg-color: #faa05a;
    --warning-color: #fff;
    --warning-border: 1px solid transparent;
    --warning-hover-color: #e19457;
    --warning-active-color: #ef9a56;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"kZxw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.ROOT=e.css`
  :root {
    --bp-s: 640px;
    --bp-m: 960px;
    --bp-l: 1200px;
    --bp-xl: 1600px;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"fUdq":[function(require,module,exports) {
"use strict";var e,r=this&&this.__decorate||function(e,r,t,s){var i,c=arguments.length,o=c<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(c<3?i(o):c>3?i(r,t,o):i(r,t))||o);return c>3&&o&&Object.defineProperty(r,t,o),o};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/core"),s=require("./settings"),i=require("rxjs"),c=require("./styles/chunks/palettes/default"),o=require("./styles/chunks/palettes/primary"),a=require("./styles/chunks/palettes/danger"),n=require("./styles/chunks/palettes/secondary"),u=require("./services/dynamic-css/dynamic-css"),l=require("./services"),d=require("./styles/chunks/palettes/warning"),p=require("./styles/chunks/palettes/root");let y=e=class{static forRoot(r={}){return{module:e,providers:[l.ResponsiveService,{provide:s.Palettes,useValue:new i.BehaviorSubject(r.palettes||{root:p.ROOT,default:c.DEFAULT,primary:o.PRIMARY,secondary:n.SECONDARY,danger:a.DANGER,warning:d.WARNING})},u.DynamicCssService]}}};y=e=r([t.Module()],y),exports.ReactiveUiModule=y;
},{"@rxdi/core":"lhgc","./settings":"oZ1d","rxjs":"iRqj","./styles/chunks/palettes/default":"gE8N","./styles/chunks/palettes/primary":"VwDY","./styles/chunks/palettes/danger":"tTZD","./styles/chunks/palettes/secondary":"rI9q","./services/dynamic-css/dynamic-css":"AhHs","./services":"wYaI","./styles/chunks/palettes/warning":"f1bC","./styles/chunks/palettes/root":"kZxw"}],"RPEn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/core");exports.MODAL_DIALOG_DATA=new e.InjectionToken("rxdi-ui-kit-modal-data"),exports.MODAL_DIALOG_OPTIONS=new e.InjectionToken("rxdi-ui-kit-modal-options");
},{"@rxdi/core":"lhgc"}],"oRay":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/lit-html");exports.style=o.css`
  .backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.32);
  }

  .container {
    padding: 50px 50px;
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    transform: translateY(0);
    margin: 0 auto;
    background: #fff;
    width: 600px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    transition: 0.3s linear;
    transition-property: opacity, transform;
    max-width: calc(100% - 0.01px) !important;
    padding: 30px 30px;
    color: #666;
    z-index: 12;
  }

  h1 {
    margin-top: 0;
    font-size: 30px;
    line-height: 1.3;
    margin: 0 0 0px 0;
    font-family: ProximaNova, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
    color: #222;
    text-transform: none;
  }

  button {
    position: absolute;
    z-index: 1010;
    top: 10px;
    right: 10px;
    padding: 5px;
    border: none;
    cursor: pointer;
    text-transform: none;
    outline: none;
    background-color: transparent;
  }
  p {
    font-size: 15px;
    font-weight: normal;
    line-height: 1.5;
    color: #666;
  }
`,exports.button=o.css`
  button {
    opacity: 0.7;
  }

  button:hover {
    opacity: 1;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"cCLz":[function(require,module,exports) {
"use strict";var e,t,o,i,r=this&&this.__decorate||function(e,t,o,i){var r,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,o,l):r(t,o))||l);return n>3&&l&&Object.defineProperty(t,o,l),l},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const l=require("@rxdi/lit-html"),a=require("@rxdi/core"),s=require("../../modal/modal.service"),c=require("../../modal/interface"),d=require("./interface"),p=require("./style.css");let f=class extends l.LitElement{OnUpdateFirst(){this.options.backdropClose&&this.backdrop.addEventListener("click",()=>this.close())}close(){this.modalService.close(!0)}};r([a.Inject(s.ModalService),n("design:type","function"==typeof(e=void 0!==s.ModalService&&s.ModalService)?e:Object)],f.prototype,"modalService",void 0),r([a.Injector(c.MODAL_DIALOG_DATA),n("design:type","function"==typeof(t=void 0!==d.DialogData&&d.DialogData)?t:Object)],f.prototype,"data",void 0),r([a.Injector(c.MODAL_DIALOG_OPTIONS),n("design:type","function"==typeof(o=void 0!==c.MODAL_DIALOG_OPTIONS&&c.MODAL_DIALOG_OPTIONS)?o:Object)],f.prototype,"options",void 0),r([l.query(".backdrop"),n("design:type","function"==typeof(i="undefined"!=typeof HTMLElement&&HTMLElement)?i:Object)],f.prototype,"backdrop",void 0),f=r([l.Component({selector:"rx-modal-main",styles:[p.style,p.button],template(){return l.html`
      <style>
        ${this.data.style}
      </style>
      <div class="container">
        <div class="dialog">
          <button @click=${()=>this.close()}>
            ${l.svg`
              <svg width="14" height="14" viewBox="0 0 14 14">
                <line fill="none" stroke="#666" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                <line fill="none" stroke="#666" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
              </svg>
            `}
          </button>
          ${this.data.template?l.html`
                ${this.data.template}
              `:l.html`
                <h1>${this.data.title}</h1>
                <p>
                  ${this.data.description}
                </p>
              `}
        </div>
      </div>
      <div class="backdrop"></div>
    `}})],f),exports.MainModalComponent=f;
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","../../modal/modal.service":"D8DB","../../modal/interface":"RPEn","./interface":"l0JX","./style.css":"oRay"}],"D8DB":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t};Object.defineProperty(exports,"__esModule",{value:!0});const n=require("@rxdi/core"),r=require("@rxdi/lit-html"),s=require("rxjs"),a=require("./interface"),l=require("rxjs/operators");let c=class{constructor(){this.originalOptions=Object.assign({},this.options),this.modalTemplate=new s.ReplaySubject,this.closeSubject$=new s.Subject}open(e,t){return this.overflow("hidden"),new s.Observable(o=>{this.createModalPortal(),t&&this.setSettings(t),this.closeSubject$.pipe(l.take(1)).subscribe(e=>{t&&this.setSettings(this.originalOptions),this.overflow("visible"),o.next(e),o.complete()}),this.modalTemplate.next(e)})}openCustomModal(e,t={backdropClose:!0}){return this.overflow("hidden"),s.from(Promise.resolve().then(()=>i(require("../modals/main/main")))).pipe(l.map(e=>e.MainModalComponent),l.switchMap(o=>this.openComponent(o,e,{backdropClose:t.backdropClose,style:t.style||r.css`
              .wrapper {
                position: fixed;
                top: 0;
                left: 0;
                align-items: center;
                justify-content: center;
                pointer-events: none;
                width: 100%;
                height: 100%;
              }
              .content {
                width: 100%;
                height: 100%;
                z-index: 20;
                position: fixed;
                pointer-events: all;
              }
            `})),l.tap(()=>this.overflow("visible")))}overflow(e){this.options.hideScroll&&(document.body.style.overflow=e)}openComponent(e,t={},o){return o&&this.setSettings(o),this.overflow("hidden"),new s.Observable(i=>{const s=e.is;if(!s)throw new Error("Provide static method `is` inside component or if you use regular html`` template use `open` method instead of `openComponent`");this.createModalPortal(),n.Container.remove(a.MODAL_DIALOG_DATA),n.Container.set(a.MODAL_DIALOG_DATA,t),this.modalTemplate.next(r.html`
          ${r.unsafeHTML(`<${s()}></${s()}>`)}
        `),this.closeSubject$.pipe(l.take(1)).subscribe(e=>{o&&this.setSettings(this.originalOptions),i.next(e),this.overflow("visible"),i.complete()})})}setSettings(e){n.Container.remove(a.MODAL_DIALOG_OPTIONS),n.Container.set(a.MODAL_DIALOG_OPTIONS,e)}openSequence(e){const t=e=>e;return s.of(e).pipe(l.map(e=>e.map(e=>this.openComponent(e.component,e.data,e.options))),l.concatMap(t),l.concatMap(t))}getTemplate(){return this.modalTemplate.asObservable()}getRef(){return this.modalRef}close(e){this.removeModalPortal(),this.closeSubject$.next(e)}createModalContainer(){this.modalRef=document.createElement("modal-container")}appendReference(){document.body.appendChild(this.modalRef)}createModalPortal(){this.modalRef&&this.removeModalPortal(),this.createModalContainer(),this.appendReference()}removeModalPortal(){this.modalRef.remove()}};t([n.Injector(a.MODAL_DIALOG_OPTIONS),o("design:type","function"==typeof(e=void 0!==a.MODAL_DIALOG_OPTIONS&&a.MODAL_DIALOG_OPTIONS)?e:Object)],c.prototype,"options",void 0),c=t([n.Injectable()],c),exports.ModalService=c;
},{"@rxdi/core":"lhgc","@rxdi/lit-html":"R8ie","rxjs":"iRqj","./interface":"RPEn","rxjs/operators":"cVrl","../modals/main/main":"cCLz"}],"PXQi":[function(require,module,exports) {
"use strict";var e,t,o=this&&this.__decorate||function(e,t,o,i){var r,c=arguments.length,n=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(c<3?r(n):c>3?r(t,o,n):r(t,o))||n);return c>3&&n&&Object.defineProperty(t,o,n),n},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html"),c=require("@rxdi/core"),n=require("./modal.service"),l=require("./interface");let s=class extends r.LitElement{constructor(){super(...arguments),this.template=this.modalService.getTemplate()}};o([c.Inject(n.ModalService),i("design:type","function"==typeof(e=void 0!==n.ModalService&&n.ModalService)?e:Object)],s.prototype,"modalService",void 0),o([c.Injector(l.MODAL_DIALOG_OPTIONS),i("design:type","function"==typeof(t=void 0!==l.MODAL_DIALOG_OPTIONS&&l.MODAL_DIALOG_OPTIONS)?t:Object)],s.prototype,"options",void 0),s=o([r.Component({selector:"modal-container",template(){return r.html`
      <style>
        ${this.options.style}
      </style>
      <div class="wrapper">
        <div class="content">${r.async(this.template)}</div>
        <div
          @click=${()=>this.options.backdropClose&&this.modalService.close()}
          class="backdrop"
        ></div>
      </div>
    `}})],s),exports.ModalContainerComponent=s;
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","./modal.service":"D8DB","./interface":"RPEn"}],"sSrl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.defaultModalStyle=e.css`
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }

  .backdrop {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: all;
    z-index: 10;
  }

  .content {
    z-index: 20;
    position: absolute;
    /* width: 100%; */
    /* height: 100%; */
    pointer-events: all;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"mF9g":[function(require,module,exports) {
"use strict";var e,r=this&&this.__decorate||function(e,r,t,o){var l,n=arguments.length,c=n<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,r,t,o);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(c=(n<3?l(c):n>3?l(r,t,c):l(r,t))||c);return n>3&&c&&Object.defineProperty(r,t,c),c};function t(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/core"),l=require("./modal.service"),n=require("./modal-container.component"),c=require("./interface"),i=require("./default.css");let s=e=class{static forRoot(r={}){return r.style||(r.style=i.defaultModalStyle),{module:e,providers:[l.ModalService,{provide:c.MODAL_DIALOG_OPTIONS,useValue:r}],components:[n.ModalContainerComponent]}}};s=e=r([o.Module()],s),exports.ModalModule=s,t(require("./modal.service"));
},{"@rxdi/core":"lhgc","./modal.service":"D8DB","./modal-container.component":"PXQi","./interface":"RPEn","./default.css":"sSrl"}],"KX2f":[function(require,module,exports) {
"use strict";function e(e){return e=e||[],Array.isArray(e)?e:[e]}function t(e){return`[Vaadin.Router] ${e}`}function n(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Router=exports.Resolver=void 0;const r="module",o="nomodule",i=[r,o];function a(e){if(!e.match(/.+\.[m]?js$/))throw new Error(t(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function s(e){if(!e||!_(e.path))throw new Error(t('Expected route config to be an object with a "path" string property, or an array of such objects'));const n=e.bundle,s=["component","redirect","bundle"];if(!(p(e.action)||Array.isArray(e.children)||p(e.children)||d(n)||s.some(t=>_(e[t]))))throw new Error(t(`Expected route config "${e.path}" to include either "${s.join('", "')}" `+'or "action" function but none found.'));if(n)if(_(n))a(n);else{if(!i.some(e=>e in n))throw new Error(t('Expected route bundle to include either "'+o+'" or "'+r+'" keys, or both'));i.forEach(e=>e in n&&a(n[e]))}e.redirect&&["bundle","component"].forEach(n=>{n in e&&console.warn(t(`Route config "${e.path}" has both "redirect" and "${n}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function c(t){e(t).forEach(e=>s(e))}function l(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||((n=document.createElement("script")).setAttribute("src",e),t===r?n.setAttribute("type",r):t===o&&n.setAttribute(o,""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=(t=>{n.__dynamicImportLoaded=!0,e(t)}),n.onerror=(e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)}),null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function h(e){return _(e)?l(e):Promise.race(i.filter(t=>t in e).map(t=>l(e[t],t)))}function u(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function d(e){return"object"==typeof e&&!!e}function p(e){return"function"==typeof e}function _(e){return"string"==typeof e}function f(e){const n=new Error(t(`Page not found (${e.pathname})`));return n.context=e,n.code=404,n}const m=new class{};function g(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}function v(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let a=0;a<n.length;a++){const e=n[a];if(e.nodeName&&"a"===e.nodeName.toLowerCase()){t=e;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||g(t))!==window.location.origin)return;const{pathname:r,search:o,hash:i}=t;u("go",{pathname:r,search:o,hash:i})&&e.preventDefault()}const w={activate(){window.document.addEventListener("click",v)},inactivate(){window.document.removeEventListener("click",v)}},y=/Trident/.test(navigator.userAgent);function b(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;u("go",{pathname:t,search:n,hash:r})}y&&!p(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const E={activate(){window.addEventListener("popstate",b)},inactivate(){window.removeEventListener("popstate",b)}};var x=V,C=L,R=j,A=I,O=M,k="/",$="./",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function L(e,t){for(var n,r=[],o=0,i=0,a="",s=t&&t.delimiter||k,c=t&&t.delimiters||$,l=!1;null!==(n=P.exec(e));){var h=n[0],u=n[1],d=n.index;if(a+=e.slice(i,d),i=d+h.length,u)a+=u[1],l=!0;else{var p="",_=e[i],f=n[2],m=n[3],g=n[4],v=n[5];if(!l&&a.length){var w=a.length-1;c.indexOf(a[w])>-1&&(p=a[w],a=a.slice(0,w))}a&&(r.push(a),a="",l=!1);var y=""!==p&&void 0!==_&&_!==p,b="+"===v||"*"===v,E="?"===v||"*"===v,x=p||s,C=m||g;r.push({name:f||o++,prefix:p,delimiter:x,optional:E,repeat:b,partial:y,pattern:C?U(C):"[^"+B(x)+"]+?"})}}return(a||i<e.length)&&r.push(a+e.substr(i)),r}function j(e,t){return I(L(e,t))}function I(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var c,l=n?n[s.name]:void 0;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===l.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(c=i(l[h],s),!t[a].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');o+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(o+=s.prefix)}else{if(c=i(String(l),s),!t[a].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function B(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function N(e){return e&&e.sensitive?"":"i"}function T(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function S(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(V(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",N(n))}function F(e,t,n){return M(L(e,n),t,n)}function M(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.start,i=!1!==n.end,a=B(n.delimiter||k),s=n.delimiters||$,c=[].concat(n.endsWith||[]).map(B).concat("$").join("|"),l=o?"^":"",h=0===e.length,u=0;u<e.length;u++){var d=e[u];if("string"==typeof d)l+=B(d),h=u===e.length-1&&s.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+B(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.partial?l+=B(d.prefix)+"("+p+")?":l+="(?:"+B(d.prefix)+"("+p+"))?":l+=B(d.prefix)+"("+p+")"}}return i?(r||(l+="(?:"+a+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+a+"(?="+c+"))?"),h||(l+="(?="+a+"|"+c+")")),new RegExp(l,N(n))}function V(e,t,n){return e instanceof RegExp?T(e,t):Array.isArray(e)?S(e,t,n):F(e,t,n)}x.parse=C,x.compile=R,x.tokensToFunction=A,x.tokensToRegExp=O;const{hasOwnProperty:H}=Object.prototype,D=new Map;function K(e){try{return decodeURIComponent(e)}catch(t){return e}}function W(e,t,n,r,o){const i=`${e}|${n=!!n}`;let a=D.get(i);if(!a){const t=[];a={keys:t,pattern:x(e,t,{end:n,strict:""===e})},D.set(i,a)}const s=a.pattern.exec(t);if(!s)return null;const c=Object.assign({},o);for(let l=1;l<s.length;l++){const e=a.keys[l-1],t=e.name,n=s[l];void 0===n&&H.call(c,t)||(e.repeat?c[t]=n?n.split(e.delimiter).map(K):[]:c[t]=n?K(n):n)}return{path:s[0],keys:(r||[]).concat(a.keys),params:c}}function q(e,t,n,r,o){let i,a,s=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!i&&(i=W(c,t,!h,r,o)))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;s<h.length;){if(!a){const r=h[s];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),a=q(r,t.substr(o),n,i.keys,i.params)}const r=a.next(l);if(!r.done)return{done:!1,value:r.value};a=null,s++}return{done:!0}}}}function z(e){if(p(e.route.action))return e.route.action(e)}function Q(e,t){let n=t;for(;n;)if((n=n.parent)===e)return!0;return!1}function J(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}function G(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};!function(e,t){return!t.parent||!e||!e.length||e[e.length-1].route!==t.parent}(e.chain,n)?e.chain.push(t):e.chain=[t]}}D.set("|false",{keys:[],pattern:/(?:)/});class X{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||z,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){c(t);const n=[...e(t)];this.root.__children=n}addRoutes(t){return c(t),this.root.__children.push(...e(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,_(e)?{pathname:e}:e),n=q(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,a=t;function s(e,c=o.value.route,l){const h=null===l&&o.value.route;return o=i||n.next(h),i=null,e||!o.done&&Q(c,o.value.route)?o.done?Promise.reject(f(t)):(G(t,o.value),a=Object.assign({},t,o.value),Promise.resolve(r(a)).then(t=>null!=t&&t!==m?(a.result=t.result||t,a):s(e,c,t))):(i=o,Promise.resolve(m))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(e=>{const t=J(a);if(e?console.warn(t):e=new Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}exports.Resolver=X,X.pathToRegexp=x;const{pathToRegexp:Y}=X,Z=new Map;function ee(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let o=0;o<n.length;o++){const r=n[o];r.parent=t,ee(e,r,r.__children||r.children)}}function te(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}".`+" Try seting unique 'name' route properties.");return n&&n[0]}function ne(e){let t=e.path;return void 0!==(t=Array.isArray(t)?t[0]:t)?t:""}function re(e,t={}){if(!(e instanceof X))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=te(n,r);if(!(i||(n.clear(),ee(n,e.root,e.root.__children),i=te(n,r))))throw new Error(`Route "${r}" not found`);let a=Z.get(i.fullPath);if(!a){let e=ne(i),t=i.parent;for(;t;){const n=ne(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=Y.parse(e),r=Y.tokensToFunction(n),o=Object.create(null);for(let i=0;i<n.length;i++)_(n[i])||(o[n[i].name]=!0);a={toPath:r,keys:o},Z.set(e,a),i.fullPath=e}let s=a.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];a.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(s+="?"===r.charAt(0)?r:`?${r}`)}return s}}let oe=[];function ie(e){oe.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),oe=e}const ae=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},se=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function ce(e,t){return e.classList.add(t),new Promise(n=>{if(ae(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),se(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}const le=256;function he(e){return null!=e}function ue(e){const t=Object.assign({},e);return delete t.next,t}function de({pathname:e="",search:t="",hash:n="",chain:r=[],params:o={},redirectFrom:i,resolver:a},s){const c=r.map(e=>e.route);return{baseUrl:a&&a.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:s||c.length&&c[c.length-1]||null,params:o,redirectFrom:i,getUrl:(e={})=>we(be.pathToRegexp.compile(ye(c))(Object.assign({},o,e)),a)}}function pe(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function _e(e,t){t.location=de(e);const n=e.chain.map(e=>e.route).indexOf(e.route);return e.chain[n].element=t,t}function fe(e,t,n){if(p(e))return e.apply(n,t)}function me(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?fe(n[e],t,n):void 0}function ge(n,r){if(!Array.isArray(n)&&!d(n))throw new Error(t(`Incorrect "children" value for the route ${r.path}: expected array or object, but got ${n}`));r.__children=[];const o=e(n);for(let e=0;e<o.length;e++)s(o[e]),r.__children.push(o[e])}function ve(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function we(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ye(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class be extends X{constructor(e,t){const n=document.head.querySelector("base");super([],Object.assign({baseUrl:n&&n.getAttribute("href")},t)),this.resolveRoute=(e=>this.__resolveRoute(e));const r=be.NavigationTrigger;be.setTriggers.apply(be,Object.keys(r).map(e=>r[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=de({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const n=e.route;let r=Promise.resolve();p(n.children)&&(r=r.then(()=>n.children(ue(e))).then(e=>{he(e)||p(n.children)||(e=n.children),ge(e,n)}));const o={redirect:t=>pe(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return r.then(()=>{if(this.__isLatestRender(e))return fe(n.action,[e,o],n)}).then(e=>he(e)&&(e instanceof HTMLElement||e.redirect||e===m)?e:_(n.redirect)?o.redirect(n.redirect):n.bundle?h(n.bundle).then(()=>{},()=>{throw new Error(t(`Bundle not found: ${n.bundle}. Check if the file name is correct`))}):void 0).then(e=>he(e)?e:_(n.component)?o.component(n.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},_(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const n=this.__previousContext;if(e===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=de(e),u("location-changed",{router:this,location:this.location}),t&&this.__updateBrowserHistory(e,e.redirectFrom),e.__skipAttach)return this.__copyUnchangedElements(e,n),this.__previousContext=e,this.location;this.__addAppearingContent(e,n);const r=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,n),r.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ve(this.__outlet&&this.__outlet.children),this.location=de(Object.assign(r,{resolver:this})),u("error",Object.assign({router:this,error:e},r)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const r=n!==t?n:e;return n.next().then(e=>{if(null===e||e===m){if(we(ye(n.chain),n.resolver)!==n.pathname)throw f(r)}return e&&e!==m?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const r=e.result;return r instanceof HTMLElement?(_e(e,r),Promise.resolve(e)):r.redirect?this.__redirect(r.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(t(`Invalid route resolution result for path "${e.pathname}". `+`Expected redirect object or HTML element, but got: "${n(r)}". `+"Double check the action return value for the route.")))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let o=Promise.resolve();const i=()=>({cancel:!0}),a=t=>pe(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)n[a].path===r[a].path&&e.search===t.search||(o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[a]));for(let s=0;s<r.length;s++)n[s].path===r[s].path&&e.search===t.search||(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:a},r[s])),n[s].element.location=de(e,n[s].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t])}for(let s=e.__divergedChainIndex;!e.__skipAttach&&s<r.length;s++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:a},r[s]);return o.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const o=de(t);return e.then(e=>{if(this.__isLatestRender(t)){return me("onBeforeLeave",[o,n,this],r.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,r){const o=de(t,r.route);return e.then(e=>{if(this.__isLatestRender(t)){return me("onBeforeEnter",[o,n,this],r.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,n,r){if(n>le)throw new Error(t(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(n||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(t(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let r=n;for(let o=e.__divergedChainIndex;o<e.chain.length;o++){const t=e.chain[o].element;t&&(r.appendChild(t),this.__addedByRouter.set(t,!0),r===n&&this.__appearingContent.push(t),r=t)}}__removeDisappearingContent(){this.__disappearingContent&&ve(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ve(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=de(e);fe(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&ve(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=de(e,e.chain[t].route);fe(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let a=o.length;a>0;a--)if(o[a-1].route.animate){i=o[a-1].route.animate;break}if(t&&n&&i){const e=d(i)&&i.leave||"leaving",o=d(i)&&i.enter||"entering";r.push(ce(t,e)),r.push(ce(n,o))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;_(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){ie(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=re(this)),we(this.__urlForName(e,t),this)}urlForPath(e,t){return we(be.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=_(e)?this.__createUrl(e,"http://a"):e;return u("go",{pathname:t,search:n,hash:r})}}exports.Router=be;const Ee=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,xe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ce(){return $e(function(){return!0})}function Re(){try{return!!Ae()||!!Oe()&&(xe?!ke():!Ce())}catch(e){return!1}}function Ae(){return localStorage.getItem("vaadin.developmentmode.force")}function Oe(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ke(){if(xe){if(Object.keys(xe).map(e=>xe[e]).filter(e=>e.productionMode).length>0)return!0}return!1}function $e(e,t){if("function"!=typeof e)return;const n=Ee.exec(e.toString());if(n)try{e=new Function(n[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return e(t)}window.Vaadin=window.Vaadin||{};const Pe=function(e,t){if(window.Vaadin.developmentMode)return $e(e,t)};function Le(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=Re());const je=function(){return Pe(Le)};window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.5.0"}),Pe(Le),be.NavigationTrigger={POPSTATE:E,CLICK:w};
},{}],"thVK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@vaadin/router");class t extends e.Router{constructor(e,t){super(e,t),this.options=t,this.activePath="/",window.addEventListener("vaadin-router-location-changed",e=>{this.options.log&&console.log(`You are at '${e.detail.location.pathname}'`),this.activePath=e.detail.location.pathname})}freezeRouter(){this.freeze=!0}unfreezeRouter(){this.freeze=!1}setRoutes(e){return super.setRoutes(e),e}setOutlet(e){super.setOutlet(e)}go(t){return this.activePath!==t&&!this.freeze&&(this.activePath=t,this.options.freeze&&this.freezeRouter(),e.Router.go(t))}urlForName(e,t){return super.urlForName(e,t)}urlForPath(e,t){return super.urlForPath(e,t)}setTriggers(t){e.Router.setTriggers(t)}getOutlet(){return super.getOutlet()}getRoutes(){return super.getRoutes()}removeRoutes(){super.removeRoutes()}render(e,t){return super.render(e,t)}subscribe(){super.subscribe()}unsubscribe(){super.unsubscribe()}addRoutes(e){return super.addRoutes(e)}}exports.Outlet=t;
},{"@vaadin/router":"KX2f"}],"mrFC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/core");function t(){return(t,r)=>{Object.defineProperty(t,r,{get:()=>e.Container.get(exports.RouterRoutlet).getValue()})}}exports.Router=t,exports.RouterRoutlet="router-outlet",exports.RouterInitialized="router-initialized",exports.Routes="router-routes",exports.RouterOptions="router-options";
},{"@rxdi/core":"lhgc"}],"DItH":[function(require,module,exports) {
"use strict";var t=this&&this.__decorate||function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s},e=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__param||function(t,e){return function(r,i){e(r,i,t)}},i=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))(function(o,n){function s(t){try{u(i.next(t))}catch(e){n(e)}}function c(t){try{u(i.throw(t))}catch(e){n(e)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,c)}u((i=i.apply(t,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/core"),n=require("./outlet"),s=require("./injection.tokens");let c=class{constructor(t,e,r,o){this.routes=t,this.routerOptions=e,this.routerInitialized=r,this.routerPlate=o,this.subscription=this.routerInitialized.asObservable().subscribe(t=>i(this,void 0,void 0,function*(){if(t){yield t.requestUpdate();const e=t.shadowRoot.querySelector(`#${t.id}`),r=new n.Outlet(e,this.routerOptions);r.setRoutes(this.routes),this.routerPlate.next(r),this.subscription.unsubscribe()}}))}};c=t([o.Service(),r(0,o.Inject(s.Routes)),r(1,o.Inject(s.RouterOptions)),r(2,o.Inject(s.RouterInitialized)),r(3,o.Inject(s.RouterRoutlet)),e("design:paramtypes",[Array,Object,Object,Object])],c),exports.RouterService=c;
},{"@rxdi/core":"lhgc","./outlet":"thVK","./injection.tokens":"mrFC"}],"bIww":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,o){var i,n=arguments.length,c=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(n<3?i(c):n>3?i(t,r,c):i(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/core"),o=require("@rxdi/lit-html"),i=require("./injection.tokens");let n=class extends o.LitElement{constructor(){super(...arguments),this.id=i.RouterRoutlet}connectedCallback(){super.connectedCallback(),this.routerInitialized.next(this)}render(){return o.html`
      <slot name="header"></slot>
      ${o.html`
        <main id="${this.id}"></main>
      `}
      <slot name="footer"></slot>
    `}};e([r.Injector(i.RouterInitialized),t("design:type",Object)],n.prototype,"routerInitialized",void 0),e([o.property(),t("design:type",String)],n.prototype,"id",void 0),n=e([o.customElement(i.RouterRoutlet)],n),exports.RouterComponent=n;
},{"@rxdi/core":"lhgc","@rxdi/lit-html":"R8ie","./injection.tokens":"mrFC"}],"g6E2":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,n,e,i){return new(e||(e=Promise))(function(o,r){function c(t){try{a(i.next(t))}catch(n){r(n)}}function u(t){try{a(i.throw(t))}catch(n){r(n)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(c,u)}a((i=i.apply(t,n||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const n=require("rxjs"),e=require("./injection.tokens"),i=require("@rxdi/core"),o=new Map;function r(n){if(n.children&&"function"==typeof n.children){const e=n.children;n.children=function(i,r){return t(this,void 0,void 0,function*(){yield e(i,r);let t=[...exports.ChildRoutesObservable.getValue().map(t=>Object.assign({},t))];return o.has(n.path)||o.set(n.path,t),o.get(n.path)})}}return n}function c(o,r,c){return t(this,void 0,void 0,function*(){if(n.isObservable(o)&&(o=o.toPromise()),yield o)return o;{const t=i.Container.get(e.RouterOptions);let n;return n="/"===c.path?r.redirect("/not-found"):r.redirect(c.parent.path||"/"),t.log&&console.error(`Guard ${c.canActivate.originalName} activated!`),n}})}function u(n){if(n.canActivate){const e=i.Container.get(n.canActivate);if(n.action){const i=n.action;n.action=function(o,r){return t(this,void 0,void 0,function*(){return yield i(o,r),c(e.canActivate.bind(e)(o,r),r,n)})}}else{n.action=e.canActivate.bind(e);const i=n.action;n.action=function(e,o){return t(this,void 0,void 0,function*(){return c(yield i(e,o),o,n)})}}}return n}function a(t){return"function"==typeof t.component&&(t.component=t.component.is()),t}function s(t){const n=t.find(t=>"(.*)"===t.path);t=t.sort(function(t,n){return t.path<n.path?-1:n.path<t.path?1:0}),n&&(t.splice(t.indexOf(n),1),t.push(n));const e=[...t].map(t=>a(u(r(t))));return exports.ChildRoutesObservable.next(null),e}exports.ChildRoutesObservable=new n.BehaviorSubject(null),exports.loadRoutes=s;
},{"rxjs":"iRqj","./injection.tokens":"mrFC","@rxdi/core":"lhgc"}],"cZWU":[function(require,module,exports) {
"use strict";function e(){return function(e,t){Object.defineProperty(e,t,{get:function(){return this.location.params}})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.RouteParams=e;
},{}],"RzAM":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,l=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(l=(c<3?r(l):c>3?r(t,o,l):r(t,o))||l);return c>3&&l&&Object.defineProperty(t,o,l),l};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/lit-html");let o=class extends HTMLElement{};o=e([t.Component({selector:"not-found-component-rxdi",useShadow:!0,template:()=>t.html`
    <h1>Not found component!</h1>
    <p>Please check your URL.2222daad</p>
  `})],o),exports.NotFoundComponent=o,exports.NotFoundPathConfig={path:"(.*)",component:"not-found-component-rxdi"};
},{"@rxdi/lit-html":"R8ie"}],"tW8N":[function(require,module,exports) {
"use strict";var e,r=this&&this.__decorate||function(e,r,t,o){var u,i=arguments.length,n=i<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,t,o);else for(var s=e.length-1;s>=0;s--)(u=e[s])&&(n=(i<3?u(n):i>3?u(r,t,n):u(r,t))||n);return i>3&&n&&Object.defineProperty(r,t,n),n};function t(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/core"),u=require("./router.service"),i=require("rxjs"),n=require("./router.component"),s=require("./injection.tokens"),c=require("./helpers");let l=e=class{static forRoot(r,t){return{module:e,services:[{provide:s.RouterOptions,useValue:t||{}},{provide:s.Routes,useValue:c.loadRoutes(r)},{provide:s.RouterInitialized,useFactory:()=>new i.BehaviorSubject(null)},{provide:s.RouterRoutlet,useFactory:()=>new i.BehaviorSubject(null)},{provide:"initRouter",deps:[u.RouterService],useFactory:e=>e}],components:[n.RouterComponent]}}static forChild(r){return c.ChildRoutesObservable.next(c.loadRoutes(r)),e}};l=e=r([o.Module()],l),exports.RouterModule=l,t(require("./injection.tokens")),t(require("./outlet")),t(require("./decorators")),t(require("./router.component")),t(require("./not-found.component")),t(require("./helpers"));
},{"@rxdi/core":"lhgc","./router.service":"DItH","rxjs":"iRqj","./router.component":"bIww","./injection.tokens":"mrFC","./helpers":"g6E2","./outlet":"thVK","./decorators":"cZWU","./not-found.component":"RzAM"}],"FvGY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.style=void 0;var o=require("@rxdi/lit-html");const t=o.css`
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  background: #a6463e;
}

.button:active {
  background-color: #c0998d;
  background-size: 100%;
  transition: background 0s;
}

.button:focus {
  outline: 0 !important;
}
`;exports.style=t;
},{"@rxdi/lit-html":"R8ie"}],"neJn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.style=void 0;var r=require("@rxdi/lit-html");const e=r.css`
  .container {
    width: 80%;
    margin: 0 auto;
  }


  input[type='text'],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type='submit'] {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .input-group {
    color: #333;
    float: left;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 20px;
    width: 650px;
  }

  .error-message {
    color: #cc0033;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin: 5px 0 0;
  }

  .input-group .error-message {
    display: none;
  }

  /* Error Styling */

  .error label {
    color: #cc0033;
  }

  .error input[type='text'] {
    background-color: #fce4e4;
    border: 1px solid #cc0033;
    outline: none;
  }

  .error .error-message {
    display: inline-block;
  }

  input[type='submit']:hover {
    background-color: #45a049;
  }

  .input-container {
    width: 650px;
    margin: 50px auto;
  }


`;exports.style=e;
},{"@rxdi/lit-html":"R8ie"}],"SbH7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RegularMarkdownComponent=void 0;var e,r,t=require("@rxdi/lit-html"),o=require("../app.component.css"),n=require("rxjs"),i=require("rxjs/operators"),a=require("./markdown-regular.css"),s=require("../../../../src/markdown-reader"),p=require("@rxdi/core"),c=function(e,r,t,o){var n,i=arguments.length,a=i<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(r,t,a):n(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a},d=function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)};let l=class extends t.LitElement{constructor(){super(...arguments),this.inputLink="https://raw.githubusercontent.com/rxdi/starter-client-lit-html/master/README.md"}changeText(e){return this.error=!1,(0,n.of)(e.target).pipe((0,i.map)(e=>e.value),(0,i.debounceTime)(1e3),(0,i.tap)(e=>this.inputLink=e)).subscribe(e=>{console.log(e)})}onError(e){this.error=e.detail.message}copy(e){return(0,n.of)(e).pipe((0,i.map)(e=>{const r=document.createElement("input");return r.value=e,this.shadowRoot.appendChild(r),r}),(0,i.switchMap)(e=>(0,n.combineLatest)((0,n.of)(e),this.requestUpdate())),(0,i.tap)(([e])=>{e.select(),document.execCommand("copy"),e.remove()}))}};exports.RegularMarkdownComponent=l,c([(0,t.property)(),d("design:type",Object)],l.prototype,"inputLink",void 0),c([(0,t.property)({type:Boolean}),d("design:type",Boolean)],l.prototype,"error",void 0),c([(0,t.query)("markdown-reader"),d("design:type","function"==typeof(e=void 0!==s.MarkdownReaderComponent&&s.MarkdownReaderComponent)?e:Object)],l.prototype,"reader",void 0),c([(0,p.Inject)(s.MarkdownParserService),d("design:type","function"==typeof(r=void 0!==s.MarkdownParserService&&s.MarkdownParserService)?r:Object)],l.prototype,"markdown",void 0),exports.RegularMarkdownComponent=l=c([(0,t.Component)({selector:"regular-markdown-component",style:t.css`
    ${o.style}
    ${a.style}
  `,template(){return t.html`
      <div class="input-container">
        <div class="input-group ${this.error?"error":""}">
          <label>Password *</label>
          <input
            type="text"
            .value="${this.inputLink}"
            @input="${this.changeText}"
          />
          <div class="error-message">${this.error}</div>
        </div>
      </div>

      <markdown-reader
        @onError=${e=>this.onError(e)}
        link=${this.inputLink}
        @onSuccess=${()=>{Array.from(Array.from(this.reader.shadowRoot.children)[1].querySelectorAll(".language-typescript")).forEach((e,r)=>{(0,n.fromEvent)(e,"click").pipe((0,i.map)(()=>this.markdown.getCacheCopy.get(this.inputLink)[r]),(0,i.filter)(e=>!!e),(0,i.switchMap)(e=>this.copy(e))).subscribe()})}}
      ></markdown-reader>
    `}})],l);
},{"@rxdi/lit-html":"R8ie","../app.component.css":"FvGY","rxjs":"iRqj","rxjs/operators":"cVrl","./markdown-regular.css":"neJn","../../../../src/markdown-reader":"X0WN","@rxdi/core":"lhgc"}],"Onv4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResponsiveViewComponent=void 0;var e,t=require("@rxdi/lit-html"),i=require("@rxdi/core"),r=require("../../../../src/services/index"),o=function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends t.LitElement{constructor(){super(...arguments),this.subscription=this.responsive.combineBoth().subscribe(e=>this.widthHeight=e)}OnDestroy(){this.subscription&&this.subscription.unsubscribe()}printResolutions(){return[200,300,400,500,600,700,800,900,1e3,1100,1200,1300,1400,1500].map(e=>t.html`
        <p>
          (Resolution ${e}px)
          ${this.widthHeight.width>e?"MATCHED":"NOT-MATCHED"}
        </p>
      `)}};exports.ResponsiveViewComponent=n,o([(0,i.Inject)(r.ResponsiveService),s("design:type","function"==typeof(e=void 0!==r.ResponsiveService&&r.ResponsiveService)?e:Object)],n.prototype,"responsive",void 0),o([(0,t.property)({type:Object}),s("design:type",Object)],n.prototype,"widthHeight",void 0),exports.ResponsiveViewComponent=n=o([(0,t.Component)({selector:"responsive-view",style:t.css``,template(){return t.html`
      <p>Move your browser width or height by pressing F12 on Chrome</p>
      ${JSON.stringify(this.widthHeight)} ${this.printResolutions()}

      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/services/responsive/README.md"
      ></markdown-reader>
    `}})],n);
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","../../../../src/services/index":"wYaI"}],"cwfd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AccordionViewComponent=void 0;var e=require("@rxdi/lit-html"),t=function(e,t,o,i){var r,n=arguments.length,c=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n<3?r(c):n>3?r(t,o,c):r(t,o))||c);return n>3&&c&&Object.defineProperty(t,o,c),c};let o=class extends e.LitElement{constructor(){super(...arguments),this.items=[{title:e.html`
        <span style="color: red">Item 1</span>
      `,content:e.html`
        <span style="color: red"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
        >
      `},{title:"Item 2",content:"\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      Duis aute irure dolor reprehenderit."},{title:"Item 3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"Item 4",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]}};exports.AccordionViewComponent=o,exports.AccordionViewComponent=o=t([(0,e.Component)({selector:"accordion-view-component",template(){return e.html`
      <div style="max-width: 200px; background-color: white">
        <rx-accordion .items=${this.items}></rx-accordion>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/accordion/README.md"
      ></markdown-reader>
    `}})],o);
},{"@rxdi/lit-html":"R8ie"}],"i0Ro":[function(require,module,exports) {
module.exports="/ui-kit/glyph.e72576d6.svg";
},{}],"bbMR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImageViewComponent=void 0;var e=require("@rxdi/lit-html"),t=r(require("@rxdi/ui-kit/images/glyph.svg"));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var m=e.length-1;m>=0;m--)(i=e[m])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let i=class extends e.LitElement{constructor(){super(...arguments),this.onLoad=(e=>{console.log(e.target)})}};exports.ImageViewComponent=i,exports.ImageViewComponent=i=o([(0,e.Component)({selector:"image-view-component",template(){return e.html`
      <div style="max-width: 200px; background-color: white">
        <rx-image
          image="https://getuikit.com/images/icon-clipboard.svg"
        ></rx-image>
        <rx-image image=${t.default} @onLoad=${this.onLoad}></rx-image>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/image/README.md"
      ></markdown-reader>
    `}})],i);
},{"@rxdi/lit-html":"R8ie","@rxdi/ui-kit/images/glyph.svg":"i0Ro"}],"jitd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BadgeViewComponent=void 0;var e,t=require("@rxdi/lit-html"),r=require("@rxdi/core"),a=require("../../../../src/modal/modal.service"),o=function(e,t,r,a){var o,d=arguments.length,n=d<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(d<3?o(n):d>3?o(t,r,n):o(t,r))||n);return d>3&&n&&Object.defineProperty(t,r,n),n},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends t.LitElement{OnInit(){}};exports.BadgeViewComponent=n,o([(0,r.Inject)(a.ModalService),d("design:type","function"==typeof(e=void 0!==a.ModalService&&a.ModalService)?e:Object)],n.prototype,"modalService",void 0),exports.BadgeViewComponent=n=o([(0,t.Component)({selector:"badge-view-component",style:t.css`
    rx-badge {
      display: block;
    }
  `,template:()=>t.html`
      <rx-badge>1</rx-badge>
      <rx-badge background="red" color="white">10</rx-badge>
      <rx-badge palette="primary">100</rx-badge>
      <rx-badge palette="primary">1000</rx-badge>
      <rx-badge palette="primary">10000</rx-badge>
      <rx-badge palette="secondary">100000</rx-badge>
      <rx-badge palette="danger">1000000</rx-badge>
      <rx-badge palette="warning">10000000</rx-badge>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/badge/README.md"
      ></markdown-reader>
    `})],n);
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","../../../../src/modal/modal.service":"D8DB"}],"tG34":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.OverflowText=void 0;const i="\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\nenim ad minim veniam, quis nostrud exercitation ullamco laboris\nnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat\nnulla pariatur. Excepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\nenim ad minim veniam, quis nostrud exercitation ullamco laboris\nnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat\nnulla pariatur. Excepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\nenim ad minim veniam, quis nostrud exercitation ullamco laboris\nnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat\nnulla pariatur. Excepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\nenim ad minim veniam, quis nostrud exercitation ullamco laboris\nnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat\nnulla pariatur. Excepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\nenim ad minim veniam, quis nostrud exercitation ullamco laboris\nnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat\nnulla pariatur. Excepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\nenim ad minim veniam, quis nostrud exercitation ullamco laboris\nnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat\nnulla pariatur. Excepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\nenim ad minim veniam, quis nostrud exercitation ullamco laboris\nnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat\nnulla pariatur. Excepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt mollit anim id est laborum.\n";exports.OverflowText=i;
},{}],"feq3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModalViewService=void 0;var e,t=require("@rxdi/core"),i=require("../../../../src/modal/modal.service"),o=require("@rxdi/lit-html"),r=require("./data"),a=function(e,t,i,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(l=(a<3?r(l):a>3?r(t,i,l):r(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class{openCustomModal(){return this.modalService.openCustomModal({title:"Default",description:"\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n          aliquip ex ea commodo consequat. Duis aute irure dolor in\n          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n          culpa qui officia deserunt mollit anim id est laborum.\n          "},{backdropClose:!0})}openBasicModal(){return this.modalService.open(o.html`
        <div style="text-align: right;padding: 20px 20px;">
          <rx-button palette="primary" @click=${()=>this.modalService.close()}
            >Close</rx-button
          >
        </div>
      `)}openCustomMainModal(){return this.modalService.openCustomModal({template:o.html`
          <div style="padding: 15px 30px;border-bottom: 1px solid #e5e5e5;">
            <h1>Custom modal</h1>
          </div>
          <div
            style="padding: 10px 30px 10px 30px; border-bottom: 1px solid #e5e5e5;"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div style="text-align: right;padding: 20px 20px;">
            <rx-button @click=${()=>this.modalService.close()}
              >Cancel</rx-button
            >
            <rx-button palette="primary">Save</rx-button>
          </div>
        `,style:o.css`
          .dialog {
            padding: 0 !important;
          }
        `},{backdropClose:!1})}openOverflowCustomModal(){return this.modalService.openCustomModal({template:o.html`
          <div style="padding: 15px 30px;border-bottom: 1px solid #e5e5e5;">
            <h1>Overflow</h1>
          </div>
          <div class="content">
            <p>
              ${r.OverflowText}
            </p>
          </div>
          <div style="text-align: right;padding: 20px 20px;">
            <rx-button @click=${()=>this.modalService.close()}
              >Cancel</rx-button
            >
            <rx-button palette="primary">Save</rx-button>
          </div>
        `,style:o.css`
          .dialog {
            padding: 0 !important;
          }
          .content {
            padding: 10px 30px 10px 30px;
            border-bottom: 1px solid #e5e5e5;
            overflow: auto;
            min-height: 150px;
            max-height: 555px;
          }
        `},{backdropClose:!0})}openFullScreenModal(){return this.modalService.openCustomModal({template:o.html`
          <div class="flex-grid">
            <img src="https://getuikit.com/docs/images/photo.jpg" />
            <h1>Full-screen modal</h1>
          </div>
        `,style:o.css`
          .container {
            padding: 0px !important;
          }
          .flex-grid {
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
            list-style: none;
          }
          img {
            background-position: 50% 50%;
            background-repeat: no-repeat;
            width: 50%;
            min-height: calc(100vh);
            box-sizing: border-box;
            background-size: cover;
          }
          .dialog {
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
          }

          .container {
            height: 100%;
          }
        `},{backdropClose:!1})}};exports.ModalViewService=n,a([(0,t.Inject)(i.ModalService),l("design:type","function"==typeof(e=void 0!==i.ModalService&&i.ModalService)?e:Object)],n.prototype,"modalService",void 0),exports.ModalViewService=n=a([(0,t.Injectable)()],n);
},{"@rxdi/core":"lhgc","../../../../src/modal/modal.service":"D8DB","@rxdi/lit-html":"R8ie","./data":"tG34"}],"mX0t":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TestModal=void 0;var e,t=require("@rxdi/core"),o=require("../../../../src/modal/interface"),r=require("@rxdi/lit-html"),i=require("../../../../src/modal/modal.service"),l=function(e,t,o,r){var i,l=arguments.length,c=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(c=(l<3?i(c):l>3?i(t,o,c):i(t,o))||c);return l>3&&c&&Object.defineProperty(t,o,c),c},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends r.LitElement{constructor(){super(...arguments),this.modalRef=this.modalService.getRef()}OnInit(){console.log("test-modal initialized")}OnDestroy(){console.log("test-modal destroyed")}close(){this.modalService.close(this.data)}};exports.TestModal=d,l([(0,t.Injector)(o.MODAL_DIALOG_DATA),c("design:type",Number)],d.prototype,"data",void 0),l([(0,t.Inject)(i.ModalService),c("design:type","function"==typeof(e=void 0!==i.ModalService&&i.ModalService)?e:Object)],d.prototype,"modalService",void 0),exports.TestModal=d=l([(0,r.Component)({selector:"test-modal",template(){return r.html`
      <div>
        Test Modal ${JSON.stringify(this.data)}
        <div style="text-align: right;padding: 20px 20px;">
          <rx-button palette="primary" @click=${()=>this.close()}
            >Close</rx-button
          >
        </div>
      </div>
    `}})],d);
},{"@rxdi/core":"lhgc","../../../../src/modal/interface":"RPEn","@rxdi/lit-html":"R8ie","../../../../src/modal/modal.service":"D8DB"}],"jCtu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModalViewComponent=void 0;var e,o,t=require("@rxdi/lit-html"),r=require("@rxdi/core"),i=require("../../../../src/modal/modal.service"),l=require("rxjs"),n=require("rxjs/operators"),a=require("./modal-view.service"),c=require("./test-modal.component"),d=function(e,o,t,r){var i,l=arguments.length,n=l<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,o,t,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(l<3?i(n):l>3?i(o,t,n):i(o,t))||n);return l>3&&n&&Object.defineProperty(o,t,n),n},s=function(e,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,o)};let p=class extends t.LitElement{openCustomModal(){this.modalViewService.openCustomModal().subscribe()}openCustomMainModal(){this.modalViewService.openCustomMainModal().subscribe()}openBasicModal(){this.modalViewService.openBasicModal().subscribe()}openAdvancedModal(){this.modalService.openComponent(c.TestModal,{test:"I am a test data"}).subscribe(console.log)}openModalSequence(){const e=Array(5).fill(null).map((e,o)=>({component:c.TestModal,data:o}));(0,l.of)(e).pipe((0,n.switchMap)(e=>this.modalService.openSequence(e))).subscribe(console.log)}openOverflowCustomModal(){this.modalViewService.openOverflowCustomModal().subscribe(console.log)}openFullScreenModal(){this.modalViewService.openFullScreenModal().subscribe(console.log)}};exports.ModalViewComponent=p,d([(0,r.Inject)(a.ModalViewService),s("design:type","function"==typeof(e=void 0!==a.ModalViewService&&a.ModalViewService)?e:Object)],p.prototype,"modalViewService",void 0),d([(0,r.Inject)(i.ModalService),s("design:type","function"==typeof(o=void 0!==i.ModalService&&i.ModalService)?o:Object)],p.prototype,"modalService",void 0),exports.ModalViewComponent=p=d([(0,t.Component)({selector:"modal-view-component",style:t.css`

  `,template(){return t.html`
      <div>
        <rx-button palette="primary" @click=${()=>this.openBasicModal()}
          >Open Basic Modal</rx-button
        >
        <rx-button palette="primary" @click=${()=>this.openAdvancedModal()}
          >Open Advanced Modal</rx-button
        >
        <rx-button palette="primary" @click=${()=>this.openModalSequence()}
          >Open Modal Sequence</rx-button
        >
        <rx-button palette="primary" @click=${()=>this.openCustomModal()}
          >Open Main Modal</rx-button
        >
        <rx-button palette="primary" @click=${()=>this.openCustomMainModal()}
          >Open Main Custom Modal</rx-button
        >
        <rx-button
          palette="primary"
          @click=${()=>this.openOverflowCustomModal()}
          >Open Overflow Custom Modal</rx-button
        >
        <rx-button palette="primary" @click=${()=>this.openFullScreenModal()}
          >Open Fullscreen Modal</rx-button
        >
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/modal/README.md"
      ></markdown-reader>
    `}})],p);
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","../../../../src/modal/modal.service":"D8DB","rxjs":"iRqj","rxjs/operators":"cVrl","./modal-view.service":"feq3","./test-modal.component":"mX0t"}],"DgQ9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ButtonViewComponent=void 0;var t=require("@rxdi/lit-html"),e=function(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i};let r=class extends t.LitElement{};exports.ButtonViewComponent=r,exports.ButtonViewComponent=r=e([(0,t.Component)({selector:"button-view-component",style:t.css`
    .container {
      background-color: white;
      text-align: center;
      padding: 50px;
      user-select: none;
    }
  `,template:()=>t.html`
      <div class="container">
        <rx-button>Default</rx-button>
        <rx-button palette="primary">Primary</rx-button>
        <rx-button palette="secondary">Secondary</rx-button>
        <rx-button palette="danger">Danger</rx-button>
        <rx-button palette="warning">Warning</rx-button>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/button/README.md"
      ></markdown-reader>
    `})],r);
},{"@rxdi/lit-html":"R8ie"}],"iAp7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ArticleData=e;var i=require("@rxdi/lit-html");function e(){return{heading:"My Super Heading",meta:i.html`
      Written by <a>Super User</a> on 12 April 2012. Posted in
      <a>Blog</a>
    `,information:"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n      minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n      aliquip ex ea commodo consequat. Duis aute irure dolor in\n      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n      culpa qui officia deserunt mollit anim id est laborum.\n      ",lead:"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n      minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n      aliquip.\n    ",section:i.html`
      <div @click=${()=>this.openModalArticle()}>Read more</div>
      <div style="margin-left: 15px;">5 Comments</div>
    `}}
},{"@rxdi/lit-html":"R8ie"}],"XMfu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ArticleViewComponent=void 0;var e,t=require("@rxdi/lit-html"),r=require("../../../../src/modal/modal.service"),o=require("@rxdi/core"),i=require("./data"),c=function(e,t,r,o){var i,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(c<3?i(a):c>3?i(t,r,a):i(t,r))||a);return c>3&&a&&Object.defineProperty(t,r,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends t.LitElement{openModalArticle(){this.modalService.openCustomModal({template:t.html`
          <rx-article .data=${i.ArticleData.call(this)}></rx-article>
        `}).subscribe()}};exports.ArticleViewComponent=l,c([(0,o.Inject)(r.ModalService),a("design:type","function"==typeof(e=void 0!==r.ModalService&&r.ModalService)?e:Object)],l.prototype,"modalService",void 0),exports.ArticleViewComponent=l=c([(0,t.Component)({selector:"article-view-component",style:t.css`
    .container {
      background-color: white;
      padding: 50px;
    }
  `,template(){return t.html`
      <div class="container">
        <rx-article .data=${i.ArticleData.call(this)}></rx-article>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/article/README.md"
      ></markdown-reader>
    `}})],l);
},{"@rxdi/lit-html":"R8ie","../../../../src/modal/modal.service":"D8DB","@rxdi/core":"lhgc","./data":"iAp7"}],"LW6G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DividerViewComponent=void 0;var e=require("@rxdi/lit-html"),r=function(e,r,t,i){var o,d=arguments.length,n=d<3?r:null===i?i=Object.getOwnPropertyDescriptor(r,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,t,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(n=(d<3?o(n):d>3?o(r,t,n):o(r,t))||n);return d>3&&n&&Object.defineProperty(r,t,n),n};let t=class extends e.LitElement{};exports.DividerViewComponent=t,exports.DividerViewComponent=t=r([(0,e.Component)({selector:"divider-view-component",style:e.css`
    .container {
      padding: 50px;
      background: white;
      color: #666;
    }
  `,template:()=>e.html`
      <div class="container">
        <h1>Regular Divider</h1>
        <rx-divider></rx-divider>

        <h1>Icon Divider</h1>
        <rx-divider type="icon"></rx-divider>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/divider/README.md"
      ></markdown-reader>
    `})],t);
},{"@rxdi/lit-html":"R8ie"}],"JKyV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LabelViewComponent=void 0;var e=require("@rxdi/lit-html"),r=function(e,r,t,l){var a,n=arguments.length,o=n<3?r:null===l?l=Object.getOwnPropertyDescriptor(r,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,l);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(o=(n<3?a(o):n>3?a(r,t,o):a(r,t))||o);return n>3&&o&&Object.defineProperty(r,t,o),o};let t=class extends e.LitElement{};exports.LabelViewComponent=t,exports.LabelViewComponent=t=r([(0,e.Component)({selector:"label-view-component",style:e.css`
    .container {
      background-color: white;
      padding: 50px;
      user-select: none;
    }
    rx-label {
      margin-right: 10px;
    }
  `,template:()=>e.html`
      <div class="container">
        <rx-label>Default</rx-label>
        <rx-label palette="primary">Primary</rx-label>
        <rx-label palette="secondary">Secondary</rx-label>
        <rx-label palette="warning">Warning</rx-label>
        <rx-label palette="danger">Danger</rx-label>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/label/README.md"
      ></markdown-reader>
    `})],t);
},{"@rxdi/lit-html":"R8ie"}],"fA4d":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.notification=void 0;var t=require("@rxdi/lit-html");const i=t.svg`
<svg fill="white" viewBox="0 0 300 300" width="28" height="28" class="jss830">
            <path d="M149.996 0C67.157 0 .001 67.161.001 149.997S67.157 300 149.996 300s150.003-67.163 150.003-150.003S232.835 0 149.996 0zm.003 232.951c-10.766 0-19.499-8.725-19.499-19.499h38.995c.002 10.774-8.73 19.499-19.496 19.499zm65.89-39.051h-.005v-.001c0 7.21-5.843 7.685-13.048 7.685H97.16c-7.208 0-13.046-.475-13.046-7.685v-1.242c0-5.185 3.045-9.625 7.42-11.731l4.142-35.753c0-26.174 18.51-48.02 43.152-53.174v-13.88c0-6.17 5.003-11.173 11.176-11.173 6.17 0 11.173 5.003 11.173 11.173V92c24.642 5.153 43.152 26.997 43.152 53.174l4.142 35.758c4.375 2.109 7.418 6.541 7.418 11.726v1.242z">
          </path></svg>
`;exports.notification=i;
},{"@rxdi/lit-html":"R8ie"}],"B4BC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DropDownViewComponent=void 0;var e=require("@rxdi/lit-html"),t=require("./dropdown.svg"),r=function(e,t,r,o){var n,i=arguments.length,p=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(p=(i<3?n(p):i>3?n(t,r,p):n(t,r))||p);return i>3&&p&&Object.defineProperty(t,r,p),p};let o=class extends e.LitElement{};exports.DropDownViewComponent=o,exports.DropDownViewComponent=o=r([(0,e.Component)({selector:"dropdown-view",template:()=>e.html`
      <rx-dropdown
        style="margin-right: 5px;"
        .menuItems=${[e.html`
            <a href="#" class="item">You need to setup your SSL certificate!</a>
          `,e.html`
            <a href="#" class="item">You need to setup your SSL certificate!</a>
          `,e.html`
            <a href="#" class="item">You need to setup your SSL certificate!</a>
          `]}
      >
        <div style="margin-right: 10px;margin-top: 3px;">
          ${t.notification}
        </div>
      </rx-dropdown>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/dropdown/README.md"
      ></markdown-reader>
    `})],o);
},{"@rxdi/lit-html":"R8ie","./dropdown.svg":"fA4d"}],"p3Sc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NavViewComponent=void 0;var e,t=require("@rxdi/lit-html"),o=require("@rxdi/core"),n=require("../../../../src/nav"),r=function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends t.LitElement{openNavigation(){this.nav.open({navOptions:{left:0,delay:0},template:t.html`
        <div>
          <p>daadad</p>
        </div>
      `,styles:t.css`
        p {
          color: black;
        }
        :host {
          position: absolute;
          top: 0;
          transition: left 0.3s ease-out;
          bottom: 0;
          left: -300px;
          box-sizing: border-box;
          min-width: 300px;
          background: #fff;
          overflow-y: auto;
        }
      `})}closeNavigation(){this.nav.close({delay:300,left:-300})}};exports.NavViewComponent=a,r([(0,o.Inject)(n.Nav),i("design:type","function"==typeof(e=void 0!==n.Nav&&n.Nav)?e:Object)],a.prototype,"nav",void 0),exports.NavViewComponent=a=r([(0,t.Component)({selector:"nav-view-component",style:t.css`
    .container {
      width: 300px;
      margin: 0 auto;
    }
  `,template(){return t.html`
      <div class="container">
        <rx-button @click=${()=>this.openNavigation()} palette="primary"
          >Open</rx-button
        >

        <rx-button @click=${()=>this.closeNavigation()} palette="primary"
          >Close</rx-button
        >
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/nav/README.md"
      ></markdown-reader>
    `}})],a);
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","../../../../src/nav":"e2p2"}],"wymD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CardViewComponent=void 0;var e,t=require("@rxdi/lit-html"),r=require("../article-view/data"),a=require("@rxdi/core"),i=require("../../../../src/modal/modal.service"),d=function(e,t,r,a){var i,d=arguments.length,o=d<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(d<3?i(o):d>3?i(t,r,o):i(t,r))||o);return d>3&&o&&Object.defineProperty(t,r,o),o},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends t.LitElement{openModalArticle(){this.modalService.openCustomModal({template:t.html`
          <rx-article .data=${r.ArticleData.call(this)}></rx-article>
        `}).subscribe()}};exports.CardViewComponent=c,d([(0,a.Inject)(i.ModalService),o("design:type","function"==typeof(e=void 0!==i.ModalService&&i.ModalService)?e:Object)],c.prototype,"modalService",void 0),exports.CardViewComponent=c=d([(0,t.Component)({selector:"card-view",style:t.css`
    .container {
      max-width: 800px;
      margin-bottom: 20px;
      background-color: white;
    }
    .margin {
      margin-bottom: 20px;
    }
    .padding {
      padding: 50px;
    }

    .padding-30 {
      padding: 30px;
    }
    .flex {
      display: flex;
    }
    .flex div {
      margin-right: 10px;
    }
    .button::part(text) {
      color: white;
    }
    .button-text::part(text) {
      color: black;
    }
    .rx-card::part(card) {
      background-color: #f8f8f8;
    }
    h3 {
      font-size: 24px;
      line-height: 1.4;
      margin: 0 0 20px 0;
      font-weight: 300;
    }
    p {
      line-height: 1.5;
    }
  `,template(){return t.html`
      <div class="container padding">
        <rx-card>
          <div class="margin padding">Default</div>
        </rx-card>
        <rx-card palette="primary">
          <div class="margin padding">Primary</div>
        </rx-card>
        <rx-card palette="secondary">
          <div class="margin padding">Secondary</div>
        </rx-card>
        <rx-card palette="warning">
          <div class="margin padding">Warning</div>
        </rx-card>
        <rx-card palette="danger">
          <div class="margin padding">Danger</div>
        </rx-card>
        <div class="flex margin">
          <div>
            <rx-card palette="secondary">
              <div class="padding-30 padding">
                <h3>Light</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <rx-button class="button">BUTTON</rx-button>
              </div>
            </rx-card>
          </div>
          <div>
            <rx-card class="rx-card" palette="secondary">
              <div class="padding-30 padding">
                <h3 style="color: #222">Light</h3>
                <p style="color: #666">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <rx-button class="button button-text">BUTTON</rx-button>
              </div>
            </rx-card>
          </div>
        </div>
        <rx-card>
          <div class="margin padding">
            <rx-article .data=${r.ArticleData.call(this)}></rx-article>
          </div>
        </rx-card>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/card/README.md"
      ></markdown-reader>
    `}})],c);
},{"@rxdi/lit-html":"R8ie","../article-view/data":"iAp7","@rxdi/core":"lhgc","../../../../src/modal/modal.service":"D8DB"}],"vjjz":[function(require,module,exports) {
"use strict";function t(t){return t.reduce((t,e)=>(t[e]=e,t),Object.create(null))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputValidityState=t(["badInput","customError","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort","typeMismatch","valid","valueMissing"]);
},{}],"TqKC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class e{constructor(){this.o=new Map}unsubscribe(){[...this.o.values()].forEach(e=>this.o.delete(e))}}exports.$Subscription=e;class t extends e{constructor(e){super(),this.init=!0,this.fn=e}subscribe(e){return this.o.set(e,e),"function"==typeof this.fn&&this.init&&(this.fn(this),this.init=!1),{unsubscribe:()=>{this.o.delete(e)}}}complete(){this.unsubscribe()}next(e){[...this.o.values()].forEach(t=>t(e))}}exports.$Observable=t;class r extends t{constructor(e){"function"==typeof e&&super(e),super(null),this.setValue(e)}setValue(e){this.v=e}next(e){this.setValue(e),super.next(e)}getValue(){return this.v}asObservable(){return this}}function s(){try{return require("rxjs").BehaviorSubject}catch(e){}return r}function n(){try{return require("rxjs").Observable}catch(e){}return t}function u(){try{return require("rxjs").Subscription}catch(t){}return e}function i(){}function o(e){return new(s())(e)}function c(e){return new(n())(e)}function h(){return new(u())}exports.$BehaviorSubject=r,exports.noop=i,exports.BehaviorSubject=o,exports.Observable=c,exports.Subscription=h;
},{"rxjs":"iRqj"}],"pIiP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./form.tokens"),t=require("./rx-fake");class r{constructor(e,r){this.validators=new Map,this.valid=!0,this.invalid=!1,this.errors={},this.errorMap=new Map,this.inputs=new Map,this.options={},this._valueChanges=new t.BehaviorSubject(e)}init(){this.setFormElement(this.querySelectForm(this.parentElement.shadowRoot||this.parentElement)).setInputs(this.mapEventToInputs(this.querySelectorAllInputs()))}prepareValues(){return Object.keys(this.value).forEach(e=>{const t=this.value[e];if(this.errors[e]=this.errors[e]||{},t.constructor===Array){if(t[1]&&t[1].constructor===Array&&t[1].forEach(t=>{const r=this.validators.get(e)||[];this.validators.set(e,[...r,t])}),t[0].constructor!==String&&t[0].constructor!==Number&&t[0].constructor!==Boolean)throw new Error("Input value must be of type 'string', 'boolean' or 'number'");this.value[e]=t[0]}}),this}setParentElement(e){return this.parentElement=e,this}getParentElement(){return this.parentElement}setOptions(e){return this.options=e,this}getOptions(){return this.options}get valueChanges(){return this._valueChanges.asObservable()}updateValueAndValidity(){this.resetErrors();const e=this.querySelectorAllInputs().map(e=>(e.setCustomValidity(""),this.setElementValidity(e),this.setElementDirty(e),e)).map(e=>this.validate(e)).filter(e=>e.errors.length);return this.getParentElement().requestUpdate(),e}updateValueAndValidityOnEvent(e){const t=this;return function(r){t.setElementDirty(this);const s=`input[name="${this.name}"]`,i=[...t.getFormElement().querySelectorAll(s).values()].length;let n=this.value;1!==i||"checkbox"!==this.type&&"radio"!==this.type||(n=String(this.checked)),"number"===this.type&&(n=Number(n));const a=[...t.getFormElement().querySelectorAll(`input[name="${this.name}"]:checked`).values()];i>1&&(t.options.multi||"checkbox"!==this.type||(n=a.map(e=>e.value)),t.options.multi&&(a.forEach(e=>e.checked=!1),this.checked=!0)),t.resetErrors();const l=t.applyValidationContext(t.validate(this));return t.options.strict?(l&&(t.setElementValidity(this,l),t.setValue(this.name,n)),t.parentElement.requestUpdate(),e.call(t.parentElement,r)):(t.setElementValidity(this,l),t.setValue(this.name,n),t.parentElement.requestUpdate(),e.call(t.parentElement,r))}}applyValidationContext({errors:e,element:t}){const r=this.getFormElement();return e.length?(this.invalid=r.invalid=!0,this.valid=r.valid=!1,!1):(this.errors[t.name]={},this.invalid=r.invalid=!1,this.valid=r.valid=!0,!0)}querySelectForm(e){const t=e.querySelector(`form[name="${this.options.name}"]`);if(!t)throw new Error(`Form element with name "${this.options.name}" not present inside ${this.getParentElement().outerHTML} component`);return t.addEventListener("submit",e=>{e.preventDefault(),e.stopPropagation()}),t}querySelectAll(e){return[...this.form.querySelectorAll(e).values()]}querySelectorAllInputs(){return[...this.querySelectAll("input"),...this.querySelectAll("select")].filter(e=>this.isInputPresentOnStage(e)).filter(e=>!!e.name)}mapEventToInputs(e=[]){return e.map(e=>{const t=`on${this.options.strategy}`;e[t]||(e[t]=function(){});const r=Object.keys(e.attributes).map(t=>e.attributes[t].name.startsWith("#")?e.attributes[t]:null).filter(e=>!!e);if(r.length){const t=r.find(e=>e.name.startsWith("#"));this.parentElement[t.name.replace("#","")]=e}return e.addEventListener("blur",()=>{this.setElementDirty(e),this.parentElement.requestUpdate(),this.setElementValidity(e)}),e[t]=this.updateValueAndValidityOnEvent(e[t]),e})}setElementValidity(e,t){const r=t||this.applyValidationContext(this.validate(e));e.valid=r,e.invalid=!r}setElementDirty(e){e.touched=!0,e.dirty=!0}isInputPresentOnStage(e){if('<input type="submit" style="display: none;">'===e.outerHTML)return;const t=Object.keys(this.value).filter(t=>t===e.name);if(!t.length)throw new Error(`Missing input element with name ${e.name} for form ${this.getFormElement().name}`);return t.length}validate(t){let r=[];return t.setCustomValidity(""),t.checkValidity()?(r=this.mapInputErrors(t)).length?(this.setFormValidity(!1),t.setCustomValidity(r[0].message),{element:t,errors:r}):{errors:[],element:t}:{errors:r.concat(Object.keys(e.InputValidityState).map(e=>t.validity[e]?{key:e,message:t.validationMessage}:null).filter(e=>!!e)),element:t}}mapInputErrors(e){return(this.validators.get(e.name)||[]).map(t=>{this.errors[e.name]=this.errors[e.name]||{};const r=t.bind(this.getParentElement())(e);if(r&&r.key)return this.errors[e.name][r.key]=r.message,this.errorMap.set(t,r.key),{key:r.key,message:r.message};this.errorMap.has(t)&&delete this.errors[e.name][this.errorMap.get(t)]}).filter(e=>!!e)}get(e){return this.inputs.get(e)}getError(e,t){return this.errors[e][t]}hasError(e,t){return!!this.getError(e,t)}reset(){this.form.reset(),this.resetErrors(),this.setFormValidity(),this.inputs.clear()}setFormValidity(e=!0){this.valid=e,this.invalid=!e}resetErrors(){this.errors=Object.keys(this.errors).reduce((e,t)=>(e[t]={},e),{}),this.errorMap.clear()}get value(){return this._valueChanges.getValue()}set value(e){this._valueChanges.next(e)}unsubscribe(){this.reset(),this._valueChanges.unsubscribe()}getValue(e){return this.value[e]}setValue(e,t){const r=this.value;return r[e]=t,this.value=r,r}setFormValue(e){this.value=e}setFormElement(e){return this.form=e,this}setInputs(e){this.inputs=new Map(e.map(e=>[e.name,e]))}getFormElement(){return this.form}}exports.FormGroup=r;
},{"./form.tokens":"vjjz","./rx-fake":"TqKC"}],"bc55":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./form.group"),o=require("./rx-fake");function r(r={strategy:"none"}){return function(e,n){if(!r.name)throw new Error("Missing form name");const c=e.constructor.prototype.disconnectedCallback||o.noop,s=e.constructor.prototype.firstUpdated||o.noop,i=e.constructor.prototype.connectedCallback||o.noop;e.constructor.prototype.connectedCallback=function(){if(!(this[n]instanceof t.FormGroup))throw new Error("Value provided is not an instance of FormGroup!");return this[n].setParentElement(this).setOptions(r).prepareValues(),i.call(this)},e.constructor.prototype.firstUpdated=function(){return this[n].init(),s.call(this)},e.constructor.prototype.disconnectedCallback=function(){return this[n].unsubscribe(),c.call(this)}}}exports.Form=r;
},{"./form.group":"pIiP","./rx-fake":"TqKC"}],"DQYs":[function(require,module,exports) {
"use strict";function r(r){for(var e in r)exports.hasOwnProperty(e)||(exports[e]=r[e])}Object.defineProperty(exports,"__esModule",{value:!0}),r(require("./form.decorator")),r(require("./form.group")),r(require("./form.tokens"));
},{"./form.decorator":"bc55","./form.group":"pIiP","./form.tokens":"vjjz"}],"L3LI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputErrorTemplate=s,exports.EmailValidator=i;var e=require("@rxdi/lit-html");function s(s){if(s&&s.invalid&&(s.dirty||s.touched),s){if(s&&s.invalid&&(s.dirty||s.touched)){const i=s.validationMessage;return s.classList.add("rx-danger"),s.classList.add("rx-outline"),e.html`
        <span
          style="color: #a94442;font-size: 13px;height: 50px;"
          class="validation-error"
          >${i}</span
        >
      `}s.valid&&(s.classList.remove("rx-danger"),s.classList.remove("rx-outline")),s.disabled?s.classList.add("rx-disabled"):s.classList.remove("rx-disabled")}return""}function i(e){if(!e.checked)return e.classList.add("is-invalid"),{key:"remember-me",message:"Please check remember me"};e.classList.remove("is-invalid")}
},{"@rxdi/lit-html":"R8ie"}],"aTj8":[function(require,module,exports) {
"use strict";var n=this&&this.__makeTemplateObject||function(n,r){return Object.defineProperty?Object.defineProperty(n,"raw",{value:r}):n.raw=r,n};Object.defineProperty(exports,"__esModule",{value:!0});var r,e=require("@rxdi/lit-html");exports.InputStyle=e.css(r||(r=n(['\n\n\n  input[type="range"] {\n    -webkit-appearance: slider-horizontal;\n    color: rgb(157, 150, 142);\n    border: initial;\n  }\n\n  .rx-input,\n  .rx-select,\n  .rx-textarea {\n    max-width: 100%;\n    width: 100%;\n    padding: 0 10px;\n    box-sizing : border-box;\n    background: #fff;\n    color: #666;\n    border: 1px solid #e5e5e5;\n    transition: 0.2s ease-in-out;\n    transition-property: color, background-color, border;\n  }\n  .rx-radio,\n  .rx-checkbox {\n    display: inline-block;\n    height: 16px;\n    width: 16px;\n    overflow: hidden;\n    margin-top: -4px;\n    vertical-align: middle;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    outline: none;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    border: 1px solid #ccc;\n    transition: 0.2s ease-in-out;\n    transition-property: background-color, border;\n    cursor: pointer;\n  }\n  .rx-range {\n    box-sizing: border-box;\n    margin: 0;\n    vertical-align: middle;\n    max-width: 100%;\n    width: 100%;\n    -webkit-appearance: none;\n    background: transparent;\n    padding: 0;\n  }\n\n  .rx-checkbox:checked {\n    background-color: #1e87f0;\n    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A")\n  }\n  .rx-radio {\n    border-radius: 50%;\n  }\n  .rx-radio:checked {\n    background-color: #1e87f0;\n    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E")\n  }\n  .rx-select {\n    height: 40px;\n    vertical-align: middle;\n    display: inline-block;\n  }\n  .rx-input {\n    height: 40px;\n    vertical-align: middle;\n    display: inline-block;\n  }\n  .rx-textarea {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    padding: 15px;\n    vertical-align: top;\n  }\n  .rx-danger {\n    color: #a94442;\n    border-color: #a94442;\n  }\n  .rx-success {\n    color: #32d296;\n    border-color: #32d296;\n  }\n  .rx-outline:focus {\n    outline: none;\n    /* outline-color: blue; */\n  }\n  .rx-disabled {\n    background-color: #f8f8f8;\n    color: #999;\n    border-color: #e5e5e5;\n  }\n\n'],['\n\n\n  input[type="range"] {\n    -webkit-appearance: slider-horizontal;\n    color: rgb(157, 150, 142);\n    border: initial;\n  }\n\n  .rx-input,\n  .rx-select,\n  .rx-textarea {\n    max-width: 100%;\n    width: 100%;\n    padding: 0 10px;\n    box-sizing : border-box;\n    background: #fff;\n    color: #666;\n    border: 1px solid #e5e5e5;\n    transition: 0.2s ease-in-out;\n    transition-property: color, background-color, border;\n  }\n  .rx-radio,\n  .rx-checkbox {\n    display: inline-block;\n    height: 16px;\n    width: 16px;\n    overflow: hidden;\n    margin-top: -4px;\n    vertical-align: middle;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    outline: none;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    border: 1px solid #ccc;\n    transition: 0.2s ease-in-out;\n    transition-property: background-color, border;\n    cursor: pointer;\n  }\n  .rx-range {\n    box-sizing: border-box;\n    margin: 0;\n    vertical-align: middle;\n    max-width: 100%;\n    width: 100%;\n    -webkit-appearance: none;\n    background: transparent;\n    padding: 0;\n  }\n\n  .rx-checkbox:checked {\n    background-color: #1e87f0;\n    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A")\n  }\n  .rx-radio {\n    border-radius: 50%;\n  }\n  .rx-radio:checked {\n    background-color: #1e87f0;\n    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E")\n  }\n  .rx-select {\n    height: 40px;\n    vertical-align: middle;\n    display: inline-block;\n  }\n  .rx-input {\n    height: 40px;\n    vertical-align: middle;\n    display: inline-block;\n  }\n  .rx-textarea {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    padding: 15px;\n    vertical-align: top;\n  }\n  .rx-danger {\n    color: #a94442;\n    border-color: #a94442;\n  }\n  .rx-success {\n    color: #32d296;\n    border-color: #32d296;\n  }\n  .rx-outline:focus {\n    outline: none;\n    /* outline-color: blue; */\n  }\n  .rx-disabled {\n    background-color: #f8f8f8;\n    color: #999;\n    border-color: #e5e5e5;\n  }\n\n'])));
},{"@rxdi/lit-html":"R8ie"}],"ZY77":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FormsViewComponent=void 0;var e=require("@rxdi/lit-html"),t=require("@rxdi/forms"),r=require("./error"),a=require("@rxdi/ui-kit/styles/form/input"),i=function(e,t,r,a){var i,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,a);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends e.LitElement{constructor(){super(...arguments),this.form=new t.FormGroup({password:"",disabled:"",email:"",rememberMe:["",[r.EmailValidator]],select:"",checkbox:"",radio:"",number:1,range:""})}OnUpdateFirst(){this.form.get("disabled").classList.add("rx-disabled"),this.form.get("disabled").disabled=!0,this.form.valueChanges.subscribe(console.log.bind(console))}onSubmit(e){console.log(this.form.value)}hasErrors(){return this.form.updateValueAndValidity().length}};exports.FormsViewComponent=s,i([(0,t.Form)({strategy:"input",name:"my-form",strict:!0,multi:!1}),o("design:type",Object)],s.prototype,"form",void 0),exports.FormsViewComponent=s=i([(0,e.Component)({selector:"forms-view-component",style:e.css`
    ${a.InputStyle}
    .container {
      margin: 0 auto;
      width: 630px;
      padding: 50px;
      background-color: white;
    }
    .height {
      height: 30px;
    }
    label {
      color: #666;
    }
  `,template(){return e.html`
      <div class="container">
        <form
          id="my-form"
          name="my-form"
          style="display: grid; margin-top: 50px;"
          @submit=${e=>!this.hasErrors()&&this.onSubmit(e)}
          novalidate
        >
          <input
            name="email"
            type="email"
            value=${this.form.value.email}
            placeholder="Email address"
            class="rx-input"
            required
            autofocus
          />
          <div class="height">
            ${(0,r.InputErrorTemplate)(this.form.get("email"))}
          </div>
          <input
            name="number"
            type="number"
            value=${this.form.value.number}
            placeholder="Email addressNumber"
            class="rx-input"
            required
            autofocus
          />
          <div class="height">
            ${(0,r.InputErrorTemplate)(this.form.get("number"))}
          </div>
          <input
            style="margin-top: 20px;"
            type="password"
            required
            class="rx-input"
            value=${this.form.value.password}
            name="password"
            placeholder="Password"
          />

          <div class="height">
            ${(0,r.InputErrorTemplate)(this.form.get("password"))}
          </div>
          <div class="height"></div>
          <select form="my-form" name="select" class="rx-select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <div class="height"></div>
          <input
            style="margin-top: 20px;"
            type="text"
            class="rx-input"
            value=${this.form.value.disabled}
            name="disabled"
            placeholder="Disabled input"
          />
          <div class="height"></div>
          <label>
            <input
              class="rx-checkbox"
              type="checkbox"
              value="free"
              name="checkbox"
            />
            Free
          </label>
          <div class="height"></div>
          <label>
            <input
              class="rx-checkbox"
              type="checkbox"
              value="monthly"
              name="checkbox"
            />
            Monthly
          </label>
          <div class="height"></div>
          <label>
            <input
              class="rx-checkbox"
              type="checkbox"
              value="premium"
              name="checkbox"
            />
            Premium
          </label>
          <div class="height"></div>
          <label>
            <input class="rx-radio" type="radio" value="1" name="radio" />
            Radio 1
          </label>
          <div class="height"></div>
          <label>
            <input class="rx-radio" type="radio" value="2" name="radio" />
            Radio 2
          </label>

          <div class="height">
            ${(0,r.InputErrorTemplate)(this.form.get("radio"))}
          </div>
          <textarea
            class="rx-textarea"
            rows="5"
            placeholder="Textarea"
          ></textarea>

          <!-- <rx-if .exp=${()=>this.form.get("password").invalid}>dadadaa</rx-if> -->
          <div class="height"></div>

          <div>
            <label>
              <input
                class="rx-checkbox"
                name="rememberMe"
                value="gosho"
                type="checkbox"
                required
              />
              Remember me
            </label>
          </div>
          <div class="height">
            ${(0,r.InputErrorTemplate)(this.form.get("rememberMe"))}
          </div>

          <div>
            <input
              class="rx-range"
              type="range"
              name="range"
              value="2"
              min="0"
              max="10"
              step="0.1"
            />
          </div>
          <div class="height">
            ${(0,r.InputErrorTemplate)(this.form.get("range"))}
          </div>
          <rx-button type="submit" palette="primary">Submit</rx-button>
        </form>
      </div>

      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/forms/master/README.md"
      ></markdown-reader>
    `}})],s);
},{"@rxdi/lit-html":"R8ie","@rxdi/forms":"DQYs","./error":"L3LI","@rxdi/ui-kit/styles/form/input":"aTj8"}],"wuRl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ProgressViewComponent=void 0;var e=require("@rxdi/lit-html"),r=require("rxjs"),t=require("rxjs/operators"),s=function(e,r,t,s){var o,p=arguments.length,i=p<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,t,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(p<3?o(i):p>3?o(r,t,i):o(r,t))||i);return p>3&&i&&Object.defineProperty(r,t,i),i};let o=class extends e.LitElement{constructor(){super(...arguments),this.reset$=new r.BehaviorSubject(0),this.progressValue$=this.reset$.pipe((0,t.switchMap)(()=>(0,r.interval)(100).pipe((0,t.take)(101))))}reset(){this.reset$.next(0)}};exports.ProgressViewComponent=o,exports.ProgressViewComponent=o=s([(0,e.Component)({selector:"progress-view-component",template(){return e.html`
      <style>
        :host {
          padding: 20px;
          display: block;
        }

        rx-progress {
          margin: 20px 0;
        }
      </style>

      <h3>Progress</h3>
      <h4>Simple</h4>
      <rx-progress value="25" palette="primary"></rx-progress>
      <h4>Rounded</h4>
      <rx-progress value="50" rounded palette="danger"></rx-progress>
      <h4>Height</h4>
      <rx-progress value="75" height="20" palette="warning"></rx-progress>
      <h4>Label</h4>
      <rx-progress value="45" height="20" label palette="primary"></rx-progress>

      <br />

      <h4>Full</h4>
      <rx-progress
        .value="${(0,e.async)(this.progressValue$)}"
        height="12"
        label
        rounded
        palette="primary"
      ></rx-progress>

      <rx-button palette="primary" @click="${this.reset}">reset</rx-button>

      <h4>Circle</h4>
      <rx-progress palette="primary" height="12" .value="${(0,e.async)(this.progressValue$)}" type="circle"></rx-progress>
      <rx-progress palette="danger" height="10" value="25" type="circle"></rx-progress>
      <rx-progress palette="warning" height="8" value="75" type="circle"></rx-progress>

      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/progress/README.md"
      ></markdown-reader>
    `}})],o);
},{"@rxdi/lit-html":"R8ie","rxjs":"iRqj","rxjs/operators":"cVrl"}],"NuJt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AlertViewComponent=void 0;var e=require("@rxdi/lit-html"),t=function(e,t,r,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(l=(a<3?o(l):a>3?o(t,r,l):o(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let r=class extends e.LitElement{};exports.AlertViewComponent=r,exports.AlertViewComponent=r=t([(0,e.Component)({selector:"alert-view-component",style:e.css`
    .container {
      width: auto;
      margin: 0 auto;
      padding: 20px;
      display: grid;
    }
    rx-alert {
      margin-top: 10px;
    }
  `,template:()=>e.html`
      <div class="container">
        <rx-alert>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="success">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="warning">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="danger">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/alert/README.md"
      ></markdown-reader>
    `})],r);
},{"@rxdi/lit-html":"R8ie"}],"adJr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DescriptionListViewComponent=void 0;var i=require("@rxdi/lit-html"),t=function(i,t,e,r){var o,s=arguments.length,d=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(i,t,e,r);else for(var n=i.length-1;n>=0;n--)(o=i[n])&&(d=(s<3?o(d):s>3?o(t,e,d):o(t,e))||d);return s>3&&d&&Object.defineProperty(t,e,d),d};let e=class extends i.LitElement{};exports.DescriptionListViewComponent=e,exports.DescriptionListViewComponent=e=t([(0,i.Component)({selector:"rx-description-list",style:i.css`
    .container {
      padding: 50px;
      margin: 0px auto;
      background-color: white;
    }
    rx-description.orange::part(description) {
      color: orange;
    }
    rx-description::part(border) {
      /* padding:0px; */
      /* margin: 0px; */
    }
  `,template:()=>i.html`
      <div class="container">
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </rx-description>
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description class="orange">
          <div slot="description">DESCRIPTION TERM</div>
        </rx-description>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/description-list/README.md"
      ></markdown-reader>
    `})],e);
},{"@rxdi/lit-html":"R8ie"}],"whxV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DotnavViewComponent=void 0;var e=require("@rxdi/lit-html"),t=function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let o=class extends e.LitElement{};exports.DotnavViewComponent=o,exports.DotnavViewComponent=o=t([(0,e.Component)({selector:"dotnav-view-component",style:e.css`
    .container {
      padding: 50px;
      background: white;
      color: #666;
    }
  `,template:()=>e.html`
      <div class="container">
        <h1>Horizontal</h1>
        <rx-dotnav orientation="row">
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </rx-dotnav>
        <h1>Vertical</h1>
        <rx-dotnav orientation="column">
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </rx-dotnav>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/dotnav/README.md"
      ></markdown-reader>
    `})],o);
},{"@rxdi/lit-html":"R8ie"}],"QleU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadingViewComponent=void 0;var e=require("@rxdi/lit-html"),t=function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends e.LitElement{constructor(){super(...arguments),this.loading=!0}OnUpdateFirst(){setTimeout(()=>this.loading=!1,3e3)}};exports.LoadingViewComponent=n,t([(0,e.property)({type:Boolean}),o("design:type",Object)],n.prototype,"loading",void 0),exports.LoadingViewComponent=n=t([(0,e.Component)({selector:"lading-view-component",style:e.css`
    .container {
      margin: 50px auto;
      width: 300px;
      text-align: center;
      user-select: none;
    }
  `,template(){return e.html`
      <div class="container">
        <h3>Remove loading after 3 seconds</h3>
        <rx-loading .if=${()=>this.loading}></rx-loading>
        <h3>Infinite</h3>
        <rx-loading></rx-loading>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/loading/README.md"
      ></markdown-reader>
    `}})],n);
},{"@rxdi/lit-html":"R8ie"}],"zZQi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SpinnerViewComponent=void 0;var e=require("@rxdi/lit-html"),r=function(e,r,n,t){var i,o=arguments.length,s=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,r,n,t);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(s=(o<3?i(s):o>3?i(r,n,s):i(r,n))||s);return o>3&&s&&Object.defineProperty(r,n,s),s};let n=class extends e.LitElement{};exports.SpinnerViewComponent=n,exports.SpinnerViewComponent=n=r([(0,e.Component)({selector:"spinner-view-component",style:e.css`
  .container {
    margin: 0px auto;
    padding: 50px;
    background-color: white;
    text-align: center;
    user-select: none;
  }

  h3 {
      color: #333;
  }
`,template:()=>e.html`
        <div class="container">
        <h3>Regular spinner</h3>
        <rx-spinner></rx-spinner>
        <h3>Medium spinner</h3>
        <rx-spinner height="80" width="80" stroke="0.3"></rx-spinner>
        <h3>Large spinner</h3>
        <rx-spinner height="135" width="135" stroke="0.2"></rx-spinner>
        </div>
        <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/spinner/README.md"
      ></markdown-reader>
    `})],n);
},{"@rxdi/lit-html":"R8ie"}],"n7fI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TabsViewComponent=void 0;var e=require("@rxdi/lit-html"),t=function(e,t,a,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i<3?s(o):i>3?s(t,a,o):s(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o};let a=class extends e.LitElement{constructor(){super(...arguments),this.pages=[{name:"Tab 1",view:e.html`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      `,active:!0},{name:"Tab 2",view:e.html`
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur, sed do eiusmod.
      `,active:!1},{name:e.html`
        Tab 3
      `,view:e.html`
        dada3
      `,active:!1}]}};exports.TabsViewComponent=a,exports.TabsViewComponent=a=t([(0,e.Component)({selector:"tabs-view-component",style:e.css`
    .container {
      margin: 0px auto;
      padding: 50px;
      background-color: white;
      text-align: center;
      user-select: none;
    }
    h3 {
      color: #333;
    }
  `,template(){return e.html`
      <div class="container">
        <h3>Default</h3>
        <rx-tabs .pages=${this.pages}></rx-tabs>
        <h3>Primary</h3>
        <rx-tabs palette="primary" .pages=${this.pages}></rx-tabs>
        <h3>Secondary</h3>
        <rx-tabs palette="secondary" .pages=${this.pages}></rx-tabs>
        <h3>Warning</h3>
        <rx-tabs palette="warning" .pages=${this.pages}></rx-tabs>
        <h3>Danger</h3>
        <rx-tabs palette="danger" .pages=${this.pages}></rx-tabs>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/tabs/README.md"
      ></markdown-reader>
    `}})],a);
},{"@rxdi/lit-html":"R8ie"}],"MVQp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppRoutingModule=void 0;var e=require("@rxdi/core"),o=require("@rxdi/router"),n=require("./markdown-reader/markdown-regular.component"),i=require("./responsive/responsive.component"),t=require("./accordion-view/accordion-view.component"),r=require("./image-view/image-view.component"),p=require("./badge-view/badge-vew.component"),a=require("./modal/modal-view.component"),m=require("./button-view/button-view.component"),c=require("./article-view/article-view.component"),u=require("./divider-view/divider-view.component"),w=require("./label-view/label-view.component"),d=require("./dropdown-view/dropdown-view.component"),v=require("./nav-view/nav-view.component"),s=require("./card-view/card-view.component"),l=require("./forms/forms-view.component"),k=require("./progress-view/progress-view.component"),h=require("../../../src/markdown-reader"),g=require("./alert-view/alert-view.component"),q=require("./description-list-view/description-list-view.component"),C=require("./dotnav-view/dotnav-view.component"),V=require("./loading-view/loading-view.component"),b=require("./spinner-view/spinner-view.component"),f=require("./tabs-view/tabs-view.component"),R=function(e,o,n,i){var t,r=arguments.length,p=r<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,n,i);else for(var a=e.length-1;a>=0;a--)(t=e[a])&&(p=(r<3?t(p):r>3?t(o,n,p):t(o,n))||p);return r>3&&p&&Object.defineProperty(o,n,p),p};let M=class{};exports.AppRoutingModule=M,exports.AppRoutingModule=M=R([(0,e.Module)({imports:[o.RouterModule.forRoot([{path:"/",redirect:"/ui-kit"},{path:"/ui-kit",component:n.RegularMarkdownComponent},{path:"/ui-kit/markdown-reader/:namespace/:repo/:filePath",component:h.MarkdownReaderComponent},{path:"/ui-kit/responsive",component:i.ResponsiveViewComponent},{path:"/ui-kit/accordion",component:t.AccordionViewComponent},{path:"/ui-kit/image",component:r.ImageViewComponent},{path:"/ui-kit/badge",component:p.BadgeViewComponent},{path:"/ui-kit/modal",component:a.ModalViewComponent},{path:"/ui-kit/button",component:m.ButtonViewComponent},{path:"/ui-kit/article",component:c.ArticleViewComponent},{path:"/ui-kit/divider",component:u.DividerViewComponent},{path:"/ui-kit/label",component:w.LabelViewComponent},{path:"/ui-kit/dropdown",component:d.DropDownViewComponent},{path:"/ui-kit/nav",component:v.NavViewComponent},{path:"/ui-kit/card",component:s.CardViewComponent},{path:"/ui-kit/forms",component:l.FormsViewComponent},{path:"/ui-kit/progress",component:k.ProgressViewComponent},{path:"/ui-kit/alert",component:g.AlertViewComponent},{path:"/ui-kit/description",component:q.DescriptionListViewComponent},{path:"/ui-kit/dotnav",component:C.DotnavViewComponent},{path:"/ui-kit/loading",component:V.LoadingViewComponent},{path:"/ui-kit/spinner",component:b.SpinnerViewComponent},{path:"/ui-kit/tabs",component:f.TabsViewComponent}],{log:!0,baseUrl:"/ui-kit"})]})],M);
},{"@rxdi/core":"lhgc","@rxdi/router":"tW8N","./markdown-reader/markdown-regular.component":"SbH7","./responsive/responsive.component":"Onv4","./accordion-view/accordion-view.component":"cwfd","./image-view/image-view.component":"bbMR","./badge-view/badge-vew.component":"jitd","./modal/modal-view.component":"jCtu","./button-view/button-view.component":"DgQ9","./article-view/article-view.component":"XMfu","./divider-view/divider-view.component":"LW6G","./label-view/label-view.component":"JKyV","./dropdown-view/dropdown-view.component":"B4BC","./nav-view/nav-view.component":"p3Sc","./card-view/card-view.component":"wymD","./forms/forms-view.component":"ZY77","./progress-view/progress-view.component":"wuRl","../../../src/markdown-reader":"X0WN","./alert-view/alert-view.component":"NuJt","./description-list-view/description-list-view.component":"adJr","./dotnav-view/dotnav-view.component":"whxV","./loading-view/loading-view.component":"QleU","./spinner-view/spinner-view.component":"zZQi","./tabs-view/tabs-view.component":"n7fI"}],"GZ5L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.FLEX=e.css`
  .flex {
    display: flex;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"KLoL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.POINTER=e.css`
  .pointer {
    cursor: pointer;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"lTKU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.CENTER=e.css`
  .center {
    margin: 0 auto;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"X8zG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.SPACER=e.css`
  .spacer {
    flex: 1 3 auto;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"wZHx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html"),r=require("./chunks/palettes/default"),s=require("./chunks/flex"),u=require("./chunks/pointer"),t=require("./chunks/center"),c=require("./chunks/spacer"),i=require("./chunks/palettes/primary"),n=require("./chunks/palettes/secondary");exports.MAIN_CSS=e.css`
  ${s.FLEX}
  ${c.SPACER}
  ${u.POINTER}
  ${t.CENTER}
  ${r.DEFAULT}
  ${i.PRIMARY}
  ${n.SECONDARY}
`;
},{"@rxdi/lit-html":"R8ie","./chunks/palettes/default":"gE8N","./chunks/flex":"GZ5L","./chunks/pointer":"KLoL","./chunks/center":"lTKU","./chunks/spacer":"X8zG","./chunks/palettes/primary":"VwDY","./chunks/palettes/secondary":"rI9q"}],"YwVR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/lit-html");exports.TRANSITIONS=t.css`
  /* ========================================================================
   Component: Transition
 ========================================================================== */
  /* Toggle (Hover + Focus)
 ========================================================================== */
  /*
 * 1. Prevent tab highlighting on iOS.
 */
  .transition-toggle {
    /* 1 */
    -webkit-tap-highlight-color: transparent;
  }

  .transition-toggle:focus {
    outline: none;
  }
  /* Transitions
 ========================================================================== */
  /*
 * The toggle is triggered on touch devices by two methods:
 * 1. Using :focus and tabindex
 * 2. Using :hover and a touchstart event listener registered on the document
 *    (Doesn't work on Surface touch devices)
 *
 * Note: Transitions don't work with postion-center-* classes because they also use transform,
 *       therefore it's recommended to use an extra div for the transition.
 */
  .transition-fade,
  [class*='transition-scale'],
  [class*='transition-slide'] {
    transition: 0.3s ease-out;
    transition-property: opacity, transform, filter;
    opacity: 0;
  }
  /*
 * Fade
 */
  .transition-toggle:hover .transition-fade,
  .transition-toggle:focus .transition-fade,
  .transition-active.active .transition-fade {
    opacity: 1;
  }
  /*
 * Scale
 */
  .transition-scale-up {
    transform: scale(1, 1);
  }
  .transition-scale-down {
    transform: scale(1.1, 1.1);
  }
  /* Show */
  .transition-toggle:hover .transition-scale-up,
  .transition-toggle:focus .transition-scale-up,
  .transition-active.active .transition-scale-up {
    opacity: 1;
    transform: scale(1.1, 1.1);
  }
  .transition-toggle:hover .transition-scale-down,
  .transition-toggle:focus .transition-scale-down,
  .transition-active.active .transition-scale-down {
    opacity: 1;
    transform: scale(1, 1);
  }
  /*
 * Slide
 */
  .transition-reset {
    transform: translateY(0) translateX(0);
  }
  .transition-slide-top {
    transform: translateY(-100%);
  }
  .transition-slide-bottom {
    transform: translateY(100%);
  }
  .transition-slide-left {
    transform: translateX(-100%);
  }
  .transition-slide-right {
    transform: translateX(100%);
  }
  .transition-slide-top-small {
    transform: translateY(-10px);
  }
  .transition-slide-bottom-small {
    transform: translateY(10px);
  }
  .transition-slide-left-small {
    transform: translateX(-10px);
  }
  .transition-slide-right-small {
    transform: translateX(10px);
  }
  .transition-slide-top-medium {
    transform: translateY(-50px);
  }
  .transition-slide-bottom-medium {
    transform: translateY(50px);
  }
  .transition-slide-left-medium {
    transform: translateX(-50px);
  }
  .transition-slide-right-medium {
    transform: translateX(50px);
  }
  /* Show */
  .transition-toggle:hover
    [class*='transition-slide']
    .transition-toggle:focus
    [class*='transition-slide'],
  .transition-active.active [class*='transition-slide'] {
    opacity: 1;
    transform: translate(0, 0);
  }
  /* Opacity modifier
 ========================================================================== */
  .transition-opaque {
    opacity: 1;
  }
  /* Duration modifiers
 ========================================================================== */
  .transition-slow {
    transition-duration: 0.7s;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"tws7":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./main")),e(require("./transitions"));
},{"./main":"wZHx","./transitions":"YwVR"}],"Qcir":[function(require,module,exports) {
module.exports="/ui-kit/minus.428d7201.svg";
},{}],"JLCr":[function(require,module,exports) {
module.exports="/ui-kit/plus.e6cef85c.svg";
},{}],"RAVT":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/lit-html"),i=require("../styles"),r=require("../styles/transitions"),o=e(require("../images/minus.svg")),s=e(require("../images/plus.svg"));exports.style=t.css`
  ${i.MAIN_CSS}
  ${r.TRANSITIONS}
  .title {
    display: block;
    font-size: 20px;
    line-height: 1.4;
    color: #222;
  }
  .title.userSelect {
    user-select: none;
  }
  .item {
    background: white;
    margin-top: 20px;
    min-width: 200px;
  }
  .container {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .title::before {
    content: '';
    width: 1.4em;
    height: 1.4em;
    margin-left: 10px;
    float: right;
    color: black;
    background-image: url(${t.unsafeCSS(s.default)});
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .title.collapsed::before {
    background-image: url(${t.unsafeCSS(o.default)});
  }
  .content {
    color: #666;
    font-size: 15px;
  }
`;
},{"@rxdi/lit-html":"R8ie","../styles":"tws7","../styles/transitions":"YwVR","../images/minus.svg":"Qcir","../images/plus.svg":"JLCr"}],"NhnV":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,s,i){var l,o=arguments.length,c=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(c=(o<3?l(c):o>3?l(t,s,c):l(t,s))||c);return o>3&&c&&Object.defineProperty(t,s,c),c},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const s=require("@rxdi/lit-html"),i=require("../accordion/style");let l=class extends s.LitElement{constructor(){super(...arguments),this.items={}}itemClicked(e){this.items[e].collapsed=!this.items[e].collapsed,this.multiple||this.collapse(e),this.items=Object.assign({},this.items),this.dispatchEvent(new CustomEvent("itemClicked",{detail:this.items[e]}))}collapse(e=""){Object.keys(this.items).forEach(t=>{t!==e&&(this.items[t].collapsed=!1)})}};e([s.property({type:Object}),t("design:type",Object)],l.prototype,"items",void 0),e([s.property({type:Boolean}),t("design:type",Boolean)],l.prototype,"multiple",void 0),l=e([s.Component({selector:"rx-accordion",styles:[i.style],template(){return s.html`
      <div class="container">
        ${Object.entries(this.items).map(([e,t])=>s.html`
            <div class="item">
              <span
                @click=${()=>this.itemClicked(e)}
                class=${s.classMap({pointer:!0,userSelect:!0,title:!0,collapsed:t.collapsed})}
                >${t.title}</span
              >
              ${t.collapsed?s.html`
                    <span class="content">
                      ${t.content}
                    </span>
                  `:""}
            </div>
          `)}
      </div>
    `}})],l),exports.AccordionComponent=l;
},{"@rxdi/lit-html":"R8ie","../accordion/style":"RAVT"}],"oj6B":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./accordion.component")),e(require("./model"));
},{"./accordion.component":"NhnV","./model":"l0JX"}],"nReW":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,i,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(s=(n<3?o(s):n>3?o(t,i,s):o(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html"),o=require("rxjs"),n=require("rxjs/operators");let s=class extends r.LitElement{constructor(){super(...arguments),this.width="80px",this.height="80px"}OnUpdateFirst(){this.onLoadSubscription=o.fromEvent(this.element,"load").pipe(n.map(e=>this.dispatchEvent(new CustomEvent("onLoad",{detail:e})))).subscribe(),this.onErrorSubscription=o.fromEvent(this.element,"error").pipe(n.map(e=>this.dispatchEvent(new CustomEvent("onError",{detail:e})))).subscribe()}OnDestroy(){this.onErrorSubscription.unsubscribe(),this.onLoadSubscription.unsubscribe()}};t([r.property({type:String}),i("design:type",String)],s.prototype,"image",void 0),t([r.property({type:String}),i("design:type",Object)],s.prototype,"width",void 0),t([r.property({type:String}),i("design:type",Object)],s.prototype,"height",void 0),t([r.query("img"),i("design:type","function"==typeof(e="undefined"!=typeof HTMLImageElement&&HTMLImageElement)?e:Object)],s.prototype,"element",void 0),s=t([r.Component({selector:"rx-image",template(){return r.html`
      <style>
        :host {
          display: block;
          width: ${this.width};
          height: ${this.height};
        }
        img {
          visibility: hidden;
          width: 1px;
          position: absolute;
          height: 1px;
        }
      </style>
      <img src=${this.image} />
      <span
        style=${r.styleMap({display:"block",width:"100%",height:"100%","background-image":`url(${this.image})`,"background-repeat":"no-repeat","background-size":"contain"})}
      ></span>
    `}})],s),exports.RxImageComponent=s;
},{"@rxdi/lit-html":"R8ie","rxjs":"iRqj","rxjs/operators":"cVrl"}],"N7t6":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./image.component"));
},{"./image.component":"nReW"}],"iXmO":[function(require,module,exports) {
"use strict";var e,t,r=this&&this.__decorate||function(e,t,r,s){var o,i=arguments.length,p=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(p=(i<3?o(p):i>3?o(t,r,p):o(t,r))||p);return i>3&&p&&Object.defineProperty(t,r,p),p},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/lit-html"),i=require("@rxdi/core"),p=require("rxjs/operators"),l=require("rxjs"),n=require("../services"),c=require("../styles");let a=class extends o.LitElement{constructor(){super(...arguments),this.$items=l.of([])}calculateColumns(e){let t;return this.columns?this.columns:(e<700?t=1:e<1e3?t=2:e<1450?t=3:e>1450&&(t=4),t)}calculateRows(e,t){return this.rows?this.rows:Math.round(e/t)+2}calculateTemplateColumns(e,t,r){const s=t*r,i=s-r;return o.html`
      <div class="flex center">
        ${e.length?o.html`
              ${e.slice(i,s).map(e=>this.getTemplate(e))}
            `:"No components found"}
      </div>
    `}getTemplate(e){return e?o.html`
      ${this.template?this.template(e):o.html`
            ${e}
          `}
      <span class="spacer"></span>
    `:o.html``}};r([i.Inject(n.ResponsiveService),s("design:type","function"==typeof(e=void 0!==n.ResponsiveService&&n.ResponsiveService)?e:Object)],a.prototype,"responsive",void 0),r([o.property({type:Number}),s("design:type",Number)],a.prototype,"fill",void 0),r([o.property({attribute:!1}),s("design:type",Object)],a.prototype,"$items",void 0),r([o.property({attribute:!1}),s("design:type",Function)],a.prototype,"template",void 0),r([o.property({type:Number}),s("design:type",Number)],a.prototype,"columns",void 0),r([o.property({type:Number}),s("design:type",Number)],a.prototype,"rows",void 0),a=r([o.Component({selector:"rx-grid",styles:[c.MAIN_CSS],template(){return o.html`
      ${o.async(l.from(l.isObservable(this.$items)?this.$items:l.of(this.$items)).pipe(p.map(e=>e.length?e:Array.from(Array(this.fill).keys())),p.switchMap(e=>l.combineLatest(l.of(e),this.responsive.width.pipe(p.map(e=>this.calculateColumns(e))))),p.switchMap(([e,t])=>l.combineLatest([l.of(e),l.of(this.calculateRows(e.length,t)),l.of(t)]))).pipe(p.map(([e,t,r])=>o.html`
                ${Array.from(Array(t).keys()).map(t=>o.html`
                    <div class="flex">
                      ${this.calculateTemplateColumns(e,t,r)}
                    </div>
                  `)}
              `)))}
    `}})],a),exports.GridComponent=a;
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","rxjs/operators":"cVrl","rxjs":"iRqj","../services":"wYaI","../styles":"tws7"}],"C2jj":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,o,r){var i,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,o,l):i(t,o))||l);return n>3&&l&&Object.defineProperty(t,o,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html"),i=require("../settings");let n=class extends r.LitElement{constructor(){super(...arguments),this.background="#1e87f0",this.color="#fff"}};t([r.property({type:String}),o("design:type",Object)],n.prototype,"background",void 0),t([r.property({type:String}),o("design:type",Object)],n.prototype,"color",void 0),t([r.property({type:String}),o("design:type","function"==typeof(e=void 0!==i.PalettesUnion&&i.PalettesUnion)?e:Object)],n.prototype,"palette",void 0),n=t([r.Component({selector:"rx-badge",template(){return r.html`
    <style>
    .badge {
      box-sizing: border-box;
      min-width: 22px;
      height: 22px;
      padding: 0 5px;
      border-radius: 500px;
      vertical-align: middle;
      font-size: 14px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: var(--${this.palette}-color);
      background: var(--${this.palette}-bg-color);
    }
    </style>
      <span
        style=${r.styleMap(this.palette?{}:{color:this.color,background:this.background})}
        class="badge"
        ><slot></slot
      ></span>
    `}})],n),exports.BadgeComponent=n;
},{"@rxdi/lit-html":"R8ie","../settings":"oZ1d"}],"Ofur":[function(require,module,exports) {
"use strict";var t,e=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(l=(i<3?n(l):i>3?n(e,o,l):n(e,o))||l);return i>3&&l&&Object.defineProperty(e,o,l),l},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html"),n=require("../settings");let i=class extends r.LitElement{constructor(){super(...arguments),this.palette="default"}OnUpdateFirst(){if("submit"===this.type){const t=this.getFormElement();if(t){const e=document.createElement("input");e.style.display="none",e.type=this.type,t.append(e),this.addEventListener("click",()=>e.click())}}}getFormElement(){let t,e="";for(const o of Array(100).fill("parentElement")){const r=this.findForm(e);if(r){t=r;break}e+=`.${o}`}return t}get(t={},e=""){return e.replace(/\[(.+?)\]/g,".$1").split(".").reduce((t,e)=>t[e]?t[e]:t,t)}findForm(t){let e;return(e=t?this.get(this.parentElement,t):this.parentElement)&&"FORM"!==e.tagName?null:e}};e([r.property({type:String}),o("design:type","function"==typeof(t=void 0!==n.PalettesUnion&&n.PalettesUnion)?t:Object)],i.prototype,"palette",void 0),e([r.property({type:String}),o("design:type",String)],i.prototype,"type",void 0),e([r.property({type:Boolean}),o("design:type",Boolean)],i.prototype,"shadow",void 0),i=e([r.Component({selector:"rx-button",template(){return r.html`
      <style>
        :host {
          margin: 0;
          border: none;
          overflow: visible;
          font: inherit;
          color: var(--${this.palette}-color);
          background: var(--${this.palette}-bg-color);
          border: var(--${this.palette}-border);
          color: #222;
          cursor: pointer;
          color: inherit;
          text-transform: none;
          -webkit-appearance: none;
          border-radius: 0;
          display: inline-block;
          box-sizing: border-box;
          padding: 0 30px;
          vertical-align: middle;
          font-size: 14px;
          line-height: 38px;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          transition: 0.1s ease-in-out;
          transition-property: color, background-color, border-color;
        }
        :host(:hover) {
          background-color: var(--${this.palette}-hover-color);
        }
        :host(:active) {
          background-color: var(--${this.palette}-active-color);
        }
        slot {
          user-select: none;
          color: var(--${this.palette}-color);
        }
      </style>
      ${this.shadow?r.html`<style>:host {box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 2px;}</style>`:""}
      <slot part="text"></slot>
    `}})],i),exports.ButtonComponent=i;
},{"@rxdi/lit-html":"R8ie","../settings":"oZ1d"}],"nn9i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.style=e.css`
  .article {
    color: #666;
  }

  .title {
    font-size: 38px;
    line-height: 1.2;
    font-weight: 300;
    margin-top: 0px;
    text-transform: none;
  }

  a {
    cursor: pointer;
    user-select: none;
  }

  a:hover {
    color: #666;
  }
  h1 a {
    text-decoration: none;
  }

  .article-meta {
    font-size: 14px;
    line-height: 1.4;
    color: #999;
  }
  .text-lead {
    font-size: 24px;
    line-height: 1.5;
    font-weight: 300;
    color: #222;
  }
  .section {
    width: 250px;
    display: flex;
    text-transform: uppercase;
  }
  .section div {
    padding: 0;
    line-height: 1.5;
    background: none;
    color: #222;
    font-size: 14px;
    position: relative;
  }
  .section div:hover {
    cursor: pointer;
  }
  .section div:hover::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #222;
    transition: right 0.3s ease-out;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"pT1A":[function(require,module,exports) {
"use strict";var t,e=this&&this.__decorate||function(t,e,a,r){var i,c=arguments.length,l=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,a,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(l=(c<3?i(l):c>3?i(e,a,l):i(e,a))||l);return c>3&&l&&Object.defineProperty(e,a,l),l},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html"),i=require("./interface"),c=require("./style");let l=class extends r.LitElement{constructor(){super(...arguments),this.data={}}};e([r.property({type:Object}),a("design:type","function"==typeof(t=void 0!==i.Article&&i.Article)?t:Object)],l.prototype,"data",void 0),l=e([r.Component({selector:"rx-article",style:c.style,template(){return r.html`
      <article class="article">
        <h1 class="title">
          <a>${this.data.heading}</a>
        </h1>
        <p class="article-meta">
          ${this.data.meta}
        </p>
        <p class="text-lead">
          ${this.data.lead}
        </p>
        <p>
          ${this.data.information}
        </p>
        <div class="section">
          ${this.data.section}
        </div>
      </article>
    `}})],l),exports.ArticleComponent=l;
},{"@rxdi/lit-html":"R8ie","./interface":"l0JX","./style":"nn9i"}],"lvFV":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,r,o){var l,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(n=(i<3?l(n):i>3?l(t,r,n):l(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/lit-html"),l=require("../settings");let i=class extends o.LitElement{constructor(){super(...arguments),this.palette="default"}};t([o.property(),r("design:type","function"==typeof(e=void 0!==l.PalettesUnion&&l.PalettesUnion)?e:Object)],i.prototype,"palette",void 0),i=t([o.Component({selector:"rx-label",template(){return o.html`
      <style>
        :host {
          color: var(--${this.palette}-color);
          background: var(--${this.palette}-bg-color);
          border: var(--${this.palette}-border);
          display: inline-block;
          padding: 0 10px;
          line-height: 1.5;
          font-size: 12px;
          vertical-align: middle;
          white-space: nowrap;
          border-radius: 2px;
          text-transform: uppercase;
        }
      </style>
      <slot></slot>
    `}})],i),exports.LabelComponent=i;
},{"@rxdi/lit-html":"R8ie","../settings":"oZ1d"}],"kpCZ":[function(require,module,exports) {
"use strict";var t,e=this&&this.__decorate||function(t,e,r,o){var a,p=arguments.length,s=p<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(s=(p<3?a(s):p>3?a(e,r,s):a(e,r))||s);return p>3&&s&&Object.defineProperty(e,r,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/lit-html"),a=require("../settings");let p=class extends o.LitElement{constructor(){super(...arguments),this.shadow="1",this.palette="default"}};e([o.property({type:String}),r("design:type",String)],p.prototype,"shadow",void 0),e([o.property({type:Boolean}),r("design:type",Boolean)],p.prototype,"invert",void 0),e([o.property({type:String}),r("design:type","function"==typeof(t=void 0!==a.PalettesUnion&&a.PalettesUnion)?t:Object)],p.prototype,"palette",void 0),p=e([o.Component({selector:"rx-card",style:o.css`
    .card {
      border-radius: 8px;
      margin: 0px;
    }

    .card-1 {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.14);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .card-1:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08),
        0 10px 10px rgba(0, 0, 0, 0.08);
    }

    .black {
      box-shadow: 0 14px 28px rgba(233, 233, 233, 0.2),
        0 10px 10px rgba(232, 232, 232, 0.18);
    }

    .card-2 {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .card-3 {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .card-4 {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .card-5 {
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
    }
  `,template(){return o.html`
      <style>
        .card {
          color: var(--${this.palette}-color);
          background-color:  var(--${this.palette}-bg-color);;
        }
      </style>
      <div part="card" class="card card-${this.shadow}${this.invert?" black":""}">
        <slot></slot>
      </div>
    `}})],p),exports.CardComponent=p;
},{"@rxdi/lit-html":"R8ie","../settings":"oZ1d"}],"vZQS":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const n=require("@rxdi/lit-html"),r=require("rxjs"),i=require("rxjs/operators"),s=require("../settings");let p=class extends n.LitElement{constructor(){super(...arguments),this.isOpened=!1,this.palette="primary",this.menuItems=[],this.defaultTemplate=n.html`
    <button class="dropbtn">
      Dropdown
    </button>
  `,this.clickEvent=r.fromEvent(document,"click").pipe(i.filter(()=>!this.entered))}OnInit(){this.clickEvent.subscribe(()=>this.isOpened=!1)}onDropdownClicked(){this.isOpened=!this.isOpened,this.dispatchEvent(new CustomEvent("buttonClicked",{detail:this.isOpened}))}};t([n.property({type:Boolean}),o("design:type",Object)],p.prototype,"isOpened",void 0),t([n.property({type:String}),o("design:type","function"==typeof(e=void 0!==s.PalettesUnion&&s.PalettesUnion)?e:Object)],p.prototype,"palette",void 0),t([n.property({type:Array}),o("design:type",Object)],p.prototype,"menuItems",void 0),t([n.property({type:Object}),o("design:type",Object)],p.prototype,"defaultTemplate",void 0),p=t([n.Component({selector:"rx-dropdown",style:n.css`
    .dropbtn {
      background-color: #3498db;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }

    .dropbtn:hover,
    .dropbtn:focus {
      background-color: #2980b9;
    }

    .dropdown {
      position: relative;
      display: inline-block;
      transition: all 0.5s ease;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      min-width: 160px;
      overflow: auto;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown-content .item {
      padding: 12px 16px;

      text-decoration: none;
      display: block;
    }

    .show {
      display: block;
    }
  `,template(){return n.html`
      <style>
        .dropdown-content {
          background-color: var(--${this.palette}-bg-color);
        }
        .dropdown-content .item {
          color: var(--${this.palette}-color);
        }
        .dropdown a:hover {
          background-color: var(--${this.palette}-hover-color);
        }
      </style>
      <div
        class="dropdown"
        @mouseenter=${()=>this.entered=!0}
        @mouseleave=${()=>this.entered=!1}
      >
        <div style="cursor: pointer;" @click=${this.onDropdownClicked}>
          <slot></slot>
        </div>
        ${this.isOpened?n.html`
              <div class="dropdown-content show">
                <slot name="first-item"></slot>
                ${this.menuItems.map(e=>n.html`
                      ${e}
                    `)}
                <slot name="last-item"></slot>
              </div>
            `:""}
      </div>
    `}})],p),exports.DropdownComponent=p;
},{"@rxdi/lit-html":"R8ie","rxjs":"iRqj","rxjs/operators":"cVrl","../settings":"oZ1d"}],"fOvE":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,o,r){var n,c=arguments.length,i=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(c<3?n(i):c>3?n(t,o,i):n(t,o))||i);return c>3&&i&&Object.defineProperty(t,o,i),i},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/lit-html");let r=class extends o.LitElement{};e([o.property({attribute:!1}),t("design:type",Function)],r.prototype,"exp",void 0),r=e([o.Component({selector:"rx-if",template(){return o.html`
      ${this.exp()?o.html`
            <slot></slot>
          `:""}
    `}})],r),exports.IfComponent=r;
},{"@rxdi/lit-html":"R8ie"}],"J1LA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.style=e.css`
  .icon {
    margin-bottom: 0;
    position: relative;
    height: 20px;
    background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A);
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  hr {
    border: 0;
  }
  .default {
    overflow: visible;
    text-align: inherit;
    margin: 0 0 20px 0;
    border: 0;
    border-top: 1px solid #e5e5e5;
  }
  .icon::before {
    right: calc(50% + (50px / 2));
    width: 100%;
    content: '';
    position: absolute;
    top: 50%;
    max-width: calc(50% - (50px / 2));
    border-bottom: 1px solid #e5e5e5;
  }
  .icon::after {
    left: calc(50% + (50px / 2));
    width: 100%;
    content: '';
    position: absolute;
    top: 50%;
    max-width: calc(50% - (50px / 2));
    border-bottom: 1px solid #e5e5e5;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"OXJN":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,o){var i,n=arguments.length,c=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(n<3?i(c):n>3?i(t,r,c):i(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html"),o=require("./style");let i=class extends r.LitElement{constructor(){super(...arguments),this.type="default"}};e([r.property({type:String}),t("design:type",String)],i.prototype,"type",void 0),i=e([r.Component({selector:"rx-divider",style:o.style,template(){return"icon"===this.type?r.html`
        <hr class="icon" />
      `:r.html`
      <hr class="default" />
    `}})],i),exports.DividerComponent=i;
},{"@rxdi/lit-html":"R8ie","./style":"J1LA"}],"y5Oc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/lit-html");exports.progressCss=t.css`
  .rect-auto,
  .uikit.p51 .slice,
  .uikit.p52 .slice,
  .uikit.p53 .slice,
  .uikit.p54 .slice,
  .uikit.p55 .slice,
  .uikit.p56 .slice,
  .uikit.p57 .slice,
  .uikit.p58 .slice,
  .uikit.p59 .slice,
  .uikit.p60 .slice,
  .uikit.p61 .slice,
  .uikit.p62 .slice,
  .uikit.p63 .slice,
  .uikit.p64 .slice,
  .uikit.p65 .slice,
  .uikit.p66 .slice,
  .uikit.p67 .slice,
  .uikit.p68 .slice,
  .uikit.p69 .slice,
  .uikit.p70 .slice,
  .uikit.p71 .slice,
  .uikit.p72 .slice,
  .uikit.p73 .slice,
  .uikit.p74 .slice,
  .uikit.p75 .slice,
  .uikit.p76 .slice,
  .uikit.p77 .slice,
  .uikit.p78 .slice,
  .uikit.p79 .slice,
  .uikit.p80 .slice,
  .uikit.p81 .slice,
  .uikit.p82 .slice,
  .uikit.p83 .slice,
  .uikit.p84 .slice,
  .uikit.p85 .slice,
  .uikit.p86 .slice,
  .uikit.p87 .slice,
  .uikit.p88 .slice,
  .uikit.p89 .slice,
  .uikit.p90 .slice,
  .uikit.p91 .slice,
  .uikit.p92 .slice,
  .uikit.p93 .slice,
  .uikit.p94 .slice,
  .uikit.p95 .slice,
  .uikit.p96 .slice,
  .uikit.p97 .slice,
  .uikit.p98 .slice,
  .uikit.p99 .slice,
  .uikit.p100 .slice {
    clip: rect(auto, auto, auto, auto);
  }

  .pie,
  .uikit .bar,
  .uikit.p51 .fill,
  .uikit.p52 .fill,
  .uikit.p53 .fill,
  .uikit.p54 .fill,
  .uikit.p55 .fill,
  .uikit.p56 .fill,
  .uikit.p57 .fill,
  .uikit.p58 .fill,
  .uikit.p59 .fill,
  .uikit.p60 .fill,
  .uikit.p61 .fill,
  .uikit.p62 .fill,
  .uikit.p63 .fill,
  .uikit.p64 .fill,
  .uikit.p65 .fill,
  .uikit.p66 .fill,
  .uikit.p67 .fill,
  .uikit.p68 .fill,
  .uikit.p69 .fill,
  .uikit.p70 .fill,
  .uikit.p71 .fill,
  .uikit.p72 .fill,
  .uikit.p73 .fill,
  .uikit.p74 .fill,
  .uikit.p75 .fill,
  .uikit.p76 .fill,
  .uikit.p77 .fill,
  .uikit.p78 .fill,
  .uikit.p79 .fill,
  .uikit.p80 .fill,
  .uikit.p81 .fill,
  .uikit.p82 .fill,
  .uikit.p83 .fill,
  .uikit.p84 .fill,
  .uikit.p85 .fill,
  .uikit.p86 .fill,
  .uikit.p87 .fill,
  .uikit.p88 .fill,
  .uikit.p89 .fill,
  .uikit.p90 .fill,
  .uikit.p91 .fill,
  .uikit.p92 .fill,
  .uikit.p93 .fill,
  .uikit.p94 .fill,
  .uikit.p95 .fill,
  .uikit.p96 .fill,
  .uikit.p97 .fill,
  .uikit.p98 .fill,
  .uikit.p99 .fill,
  .uikit.p100 .fill {
    position: absolute;
    border: 0.08em solid #307bbb;
    width: 0.84em;
    height: 0.84em;
    clip: rect(0em, 0.5em, 1em, 0em);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  .pie-fill,
  .uikit.p51 .bar:after,
  .uikit.p51 .fill,
  .uikit.p52 .bar:after,
  .uikit.p52 .fill,
  .uikit.p53 .bar:after,
  .uikit.p53 .fill,
  .uikit.p54 .bar:after,
  .uikit.p54 .fill,
  .uikit.p55 .bar:after,
  .uikit.p55 .fill,
  .uikit.p56 .bar:after,
  .uikit.p56 .fill,
  .uikit.p57 .bar:after,
  .uikit.p57 .fill,
  .uikit.p58 .bar:after,
  .uikit.p58 .fill,
  .uikit.p59 .bar:after,
  .uikit.p59 .fill,
  .uikit.p60 .bar:after,
  .uikit.p60 .fill,
  .uikit.p61 .bar:after,
  .uikit.p61 .fill,
  .uikit.p62 .bar:after,
  .uikit.p62 .fill,
  .uikit.p63 .bar:after,
  .uikit.p63 .fill,
  .uikit.p64 .bar:after,
  .uikit.p64 .fill,
  .uikit.p65 .bar:after,
  .uikit.p65 .fill,
  .uikit.p66 .bar:after,
  .uikit.p66 .fill,
  .uikit.p67 .bar:after,
  .uikit.p67 .fill,
  .uikit.p68 .bar:after,
  .uikit.p68 .fill,
  .uikit.p69 .bar:after,
  .uikit.p69 .fill,
  .uikit.p70 .bar:after,
  .uikit.p70 .fill,
  .uikit.p71 .bar:after,
  .uikit.p71 .fill,
  .uikit.p72 .bar:after,
  .uikit.p72 .fill,
  .uikit.p73 .bar:after,
  .uikit.p73 .fill,
  .uikit.p74 .bar:after,
  .uikit.p74 .fill,
  .uikit.p75 .bar:after,
  .uikit.p75 .fill,
  .uikit.p76 .bar:after,
  .uikit.p76 .fill,
  .uikit.p77 .bar:after,
  .uikit.p77 .fill,
  .uikit.p78 .bar:after,
  .uikit.p78 .fill,
  .uikit.p79 .bar:after,
  .uikit.p79 .fill,
  .uikit.p80 .bar:after,
  .uikit.p80 .fill,
  .uikit.p81 .bar:after,
  .uikit.p81 .fill,
  .uikit.p82 .bar:after,
  .uikit.p82 .fill,
  .uikit.p83 .bar:after,
  .uikit.p83 .fill,
  .uikit.p84 .bar:after,
  .uikit.p84 .fill,
  .uikit.p85 .bar:after,
  .uikit.p85 .fill,
  .uikit.p86 .bar:after,
  .uikit.p86 .fill,
  .uikit.p87 .bar:after,
  .uikit.p87 .fill,
  .uikit.p88 .bar:after,
  .uikit.p88 .fill,
  .uikit.p89 .bar:after,
  .uikit.p89 .fill,
  .uikit.p90 .bar:after,
  .uikit.p90 .fill,
  .uikit.p91 .bar:after,
  .uikit.p91 .fill,
  .uikit.p92 .bar:after,
  .uikit.p92 .fill,
  .uikit.p93 .bar:after,
  .uikit.p93 .fill,
  .uikit.p94 .bar:after,
  .uikit.p94 .fill,
  .uikit.p95 .bar:after,
  .uikit.p95 .fill,
  .uikit.p96 .bar:after,
  .uikit.p96 .fill,
  .uikit.p97 .bar:after,
  .uikit.p97 .fill,
  .uikit.p98 .bar:after,
  .uikit.p98 .fill,
  .uikit.p99 .bar:after,
  .uikit.p99 .fill,
  .uikit.p100 .bar:after,
  .uikit.p100 .fill {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .uikit {
    position: relative;
    font-size: 120px;
    width: 1em;
    height: 1em;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    float: left;
    margin: 0 0.1em 0.1em 0;
    background-color: #cccccc;
  }
  .uikit *,
  .uikit *:before,
  .uikit *:after {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .uikit.center {
    float: none;
    margin: 0 auto;
  }
  .uikit.big {
    font-size: 240px;
  }
  .uikit.small {
    font-size: 80px;
  }
  .uikit > span {
    position: absolute;
    width: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    width: 5em;
    line-height: 5em;
    font-size: 0.2em;
    color: #cccccc;
    display: block;
    text-align: center;
    white-space: nowrap;
    -webkit-transition-property: all;
    -moz-transition-property: all;
    -o-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .uikit:after {
    position: absolute;
    top: 0.08em;
    left: 0.08em;
    display: block;
    content: ' ';
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    background-color: whitesmoke;
    width: 0.84em;
    height: 0.84em;
    -webkit-transition-property: all;
    -moz-transition-property: all;
    -o-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-timing-function: ease-in;
    -moz-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }
  .uikit .slice {
    position: absolute;
    width: 1em;
    height: 1em;
    clip: rect(0em, 1em, 1em, 0.5em);
  }
  .uikit.p1 .bar {
    -webkit-transform: rotate(3.6deg);
    -moz-transform: rotate(3.6deg);
    -ms-transform: rotate(3.6deg);
    -o-transform: rotate(3.6deg);
    transform: rotate(3.6deg);
  }
  .uikit.p2 .bar {
    -webkit-transform: rotate(7.2deg);
    -moz-transform: rotate(7.2deg);
    -ms-transform: rotate(7.2deg);
    -o-transform: rotate(7.2deg);
    transform: rotate(7.2deg);
  }
  .uikit.p3 .bar {
    -webkit-transform: rotate(10.8deg);
    -moz-transform: rotate(10.8deg);
    -ms-transform: rotate(10.8deg);
    -o-transform: rotate(10.8deg);
    transform: rotate(10.8deg);
  }
  .uikit.p4 .bar {
    -webkit-transform: rotate(14.4deg);
    -moz-transform: rotate(14.4deg);
    -ms-transform: rotate(14.4deg);
    -o-transform: rotate(14.4deg);
    transform: rotate(14.4deg);
  }
  .uikit.p5 .bar {
    -webkit-transform: rotate(18deg);
    -moz-transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    -o-transform: rotate(18deg);
    transform: rotate(18deg);
  }
  .uikit.p6 .bar {
    -webkit-transform: rotate(21.6deg);
    -moz-transform: rotate(21.6deg);
    -ms-transform: rotate(21.6deg);
    -o-transform: rotate(21.6deg);
    transform: rotate(21.6deg);
  }
  .uikit.p7 .bar {
    -webkit-transform: rotate(25.2deg);
    -moz-transform: rotate(25.2deg);
    -ms-transform: rotate(25.2deg);
    -o-transform: rotate(25.2deg);
    transform: rotate(25.2deg);
  }
  .uikit.p8 .bar {
    -webkit-transform: rotate(28.8deg);
    -moz-transform: rotate(28.8deg);
    -ms-transform: rotate(28.8deg);
    -o-transform: rotate(28.8deg);
    transform: rotate(28.8deg);
  }
  .uikit.p9 .bar {
    -webkit-transform: rotate(32.4deg);
    -moz-transform: rotate(32.4deg);
    -ms-transform: rotate(32.4deg);
    -o-transform: rotate(32.4deg);
    transform: rotate(32.4deg);
  }
  .uikit.p10 .bar {
    -webkit-transform: rotate(36deg);
    -moz-transform: rotate(36deg);
    -ms-transform: rotate(36deg);
    -o-transform: rotate(36deg);
    transform: rotate(36deg);
  }
  .uikit.p11 .bar {
    -webkit-transform: rotate(39.6deg);
    -moz-transform: rotate(39.6deg);
    -ms-transform: rotate(39.6deg);
    -o-transform: rotate(39.6deg);
    transform: rotate(39.6deg);
  }
  .uikit.p12 .bar {
    -webkit-transform: rotate(43.2deg);
    -moz-transform: rotate(43.2deg);
    -ms-transform: rotate(43.2deg);
    -o-transform: rotate(43.2deg);
    transform: rotate(43.2deg);
  }
  .uikit.p13 .bar {
    -webkit-transform: rotate(46.8deg);
    -moz-transform: rotate(46.8deg);
    -ms-transform: rotate(46.8deg);
    -o-transform: rotate(46.8deg);
    transform: rotate(46.8deg);
  }
  .uikit.p14 .bar {
    -webkit-transform: rotate(50.4deg);
    -moz-transform: rotate(50.4deg);
    -ms-transform: rotate(50.4deg);
    -o-transform: rotate(50.4deg);
    transform: rotate(50.4deg);
  }
  .uikit.p15 .bar {
    -webkit-transform: rotate(54deg);
    -moz-transform: rotate(54deg);
    -ms-transform: rotate(54deg);
    -o-transform: rotate(54deg);
    transform: rotate(54deg);
  }
  .uikit.p16 .bar {
    -webkit-transform: rotate(57.6deg);
    -moz-transform: rotate(57.6deg);
    -ms-transform: rotate(57.6deg);
    -o-transform: rotate(57.6deg);
    transform: rotate(57.6deg);
  }
  .uikit.p17 .bar {
    -webkit-transform: rotate(61.2deg);
    -moz-transform: rotate(61.2deg);
    -ms-transform: rotate(61.2deg);
    -o-transform: rotate(61.2deg);
    transform: rotate(61.2deg);
  }
  .uikit.p18 .bar {
    -webkit-transform: rotate(64.8deg);
    -moz-transform: rotate(64.8deg);
    -ms-transform: rotate(64.8deg);
    -o-transform: rotate(64.8deg);
    transform: rotate(64.8deg);
  }
  .uikit.p19 .bar {
    -webkit-transform: rotate(68.4deg);
    -moz-transform: rotate(68.4deg);
    -ms-transform: rotate(68.4deg);
    -o-transform: rotate(68.4deg);
    transform: rotate(68.4deg);
  }
  .uikit.p20 .bar {
    -webkit-transform: rotate(72deg);
    -moz-transform: rotate(72deg);
    -ms-transform: rotate(72deg);
    -o-transform: rotate(72deg);
    transform: rotate(72deg);
  }
  .uikit.p21 .bar {
    -webkit-transform: rotate(75.6deg);
    -moz-transform: rotate(75.6deg);
    -ms-transform: rotate(75.6deg);
    -o-transform: rotate(75.6deg);
    transform: rotate(75.6deg);
  }
  .uikit.p22 .bar {
    -webkit-transform: rotate(79.2deg);
    -moz-transform: rotate(79.2deg);
    -ms-transform: rotate(79.2deg);
    -o-transform: rotate(79.2deg);
    transform: rotate(79.2deg);
  }
  .uikit.p23 .bar {
    -webkit-transform: rotate(82.8deg);
    -moz-transform: rotate(82.8deg);
    -ms-transform: rotate(82.8deg);
    -o-transform: rotate(82.8deg);
    transform: rotate(82.8deg);
  }
  .uikit.p24 .bar {
    -webkit-transform: rotate(86.4deg);
    -moz-transform: rotate(86.4deg);
    -ms-transform: rotate(86.4deg);
    -o-transform: rotate(86.4deg);
    transform: rotate(86.4deg);
  }
  .uikit.p25 .bar {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .uikit.p26 .bar {
    -webkit-transform: rotate(93.6deg);
    -moz-transform: rotate(93.6deg);
    -ms-transform: rotate(93.6deg);
    -o-transform: rotate(93.6deg);
    transform: rotate(93.6deg);
  }
  .uikit.p27 .bar {
    -webkit-transform: rotate(97.2deg);
    -moz-transform: rotate(97.2deg);
    -ms-transform: rotate(97.2deg);
    -o-transform: rotate(97.2deg);
    transform: rotate(97.2deg);
  }
  .uikit.p28 .bar {
    -webkit-transform: rotate(100.8deg);
    -moz-transform: rotate(100.8deg);
    -ms-transform: rotate(100.8deg);
    -o-transform: rotate(100.8deg);
    transform: rotate(100.8deg);
  }
  .uikit.p29 .bar {
    -webkit-transform: rotate(104.4deg);
    -moz-transform: rotate(104.4deg);
    -ms-transform: rotate(104.4deg);
    -o-transform: rotate(104.4deg);
    transform: rotate(104.4deg);
  }
  .uikit.p30 .bar {
    -webkit-transform: rotate(108deg);
    -moz-transform: rotate(108deg);
    -ms-transform: rotate(108deg);
    -o-transform: rotate(108deg);
    transform: rotate(108deg);
  }
  .uikit.p31 .bar {
    -webkit-transform: rotate(111.6deg);
    -moz-transform: rotate(111.6deg);
    -ms-transform: rotate(111.6deg);
    -o-transform: rotate(111.6deg);
    transform: rotate(111.6deg);
  }
  .uikit.p32 .bar {
    -webkit-transform: rotate(115.2deg);
    -moz-transform: rotate(115.2deg);
    -ms-transform: rotate(115.2deg);
    -o-transform: rotate(115.2deg);
    transform: rotate(115.2deg);
  }
  .uikit.p33 .bar {
    -webkit-transform: rotate(118.8deg);
    -moz-transform: rotate(118.8deg);
    -ms-transform: rotate(118.8deg);
    -o-transform: rotate(118.8deg);
    transform: rotate(118.8deg);
  }
  .uikit.p34 .bar {
    -webkit-transform: rotate(122.4deg);
    -moz-transform: rotate(122.4deg);
    -ms-transform: rotate(122.4deg);
    -o-transform: rotate(122.4deg);
    transform: rotate(122.4deg);
  }
  .uikit.p35 .bar {
    -webkit-transform: rotate(126deg);
    -moz-transform: rotate(126deg);
    -ms-transform: rotate(126deg);
    -o-transform: rotate(126deg);
    transform: rotate(126deg);
  }
  .uikit.p36 .bar {
    -webkit-transform: rotate(129.6deg);
    -moz-transform: rotate(129.6deg);
    -ms-transform: rotate(129.6deg);
    -o-transform: rotate(129.6deg);
    transform: rotate(129.6deg);
  }
  .uikit.p37 .bar {
    -webkit-transform: rotate(133.2deg);
    -moz-transform: rotate(133.2deg);
    -ms-transform: rotate(133.2deg);
    -o-transform: rotate(133.2deg);
    transform: rotate(133.2deg);
  }
  .uikit.p38 .bar {
    -webkit-transform: rotate(136.8deg);
    -moz-transform: rotate(136.8deg);
    -ms-transform: rotate(136.8deg);
    -o-transform: rotate(136.8deg);
    transform: rotate(136.8deg);
  }
  .uikit.p39 .bar {
    -webkit-transform: rotate(140.4deg);
    -moz-transform: rotate(140.4deg);
    -ms-transform: rotate(140.4deg);
    -o-transform: rotate(140.4deg);
    transform: rotate(140.4deg);
  }
  .uikit.p40 .bar {
    -webkit-transform: rotate(144deg);
    -moz-transform: rotate(144deg);
    -ms-transform: rotate(144deg);
    -o-transform: rotate(144deg);
    transform: rotate(144deg);
  }
  .uikit.p41 .bar {
    -webkit-transform: rotate(147.6deg);
    -moz-transform: rotate(147.6deg);
    -ms-transform: rotate(147.6deg);
    -o-transform: rotate(147.6deg);
    transform: rotate(147.6deg);
  }
  .uikit.p42 .bar {
    -webkit-transform: rotate(151.2deg);
    -moz-transform: rotate(151.2deg);
    -ms-transform: rotate(151.2deg);
    -o-transform: rotate(151.2deg);
    transform: rotate(151.2deg);
  }
  .uikit.p43 .bar {
    -webkit-transform: rotate(154.8deg);
    -moz-transform: rotate(154.8deg);
    -ms-transform: rotate(154.8deg);
    -o-transform: rotate(154.8deg);
    transform: rotate(154.8deg);
  }
  .uikit.p44 .bar {
    -webkit-transform: rotate(158.4deg);
    -moz-transform: rotate(158.4deg);
    -ms-transform: rotate(158.4deg);
    -o-transform: rotate(158.4deg);
    transform: rotate(158.4deg);
  }
  .uikit.p45 .bar {
    -webkit-transform: rotate(162deg);
    -moz-transform: rotate(162deg);
    -ms-transform: rotate(162deg);
    -o-transform: rotate(162deg);
    transform: rotate(162deg);
  }
  .uikit.p46 .bar {
    -webkit-transform: rotate(165.6deg);
    -moz-transform: rotate(165.6deg);
    -ms-transform: rotate(165.6deg);
    -o-transform: rotate(165.6deg);
    transform: rotate(165.6deg);
  }
  .uikit.p47 .bar {
    -webkit-transform: rotate(169.2deg);
    -moz-transform: rotate(169.2deg);
    -ms-transform: rotate(169.2deg);
    -o-transform: rotate(169.2deg);
    transform: rotate(169.2deg);
  }
  .uikit.p48 .bar {
    -webkit-transform: rotate(172.8deg);
    -moz-transform: rotate(172.8deg);
    -ms-transform: rotate(172.8deg);
    -o-transform: rotate(172.8deg);
    transform: rotate(172.8deg);
  }
  .uikit.p49 .bar {
    -webkit-transform: rotate(176.4deg);
    -moz-transform: rotate(176.4deg);
    -ms-transform: rotate(176.4deg);
    -o-transform: rotate(176.4deg);
    transform: rotate(176.4deg);
  }
  .uikit.p50 .bar {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .uikit.p51 .bar {
    -webkit-transform: rotate(183.6deg);
    -moz-transform: rotate(183.6deg);
    -ms-transform: rotate(183.6deg);
    -o-transform: rotate(183.6deg);
    transform: rotate(183.6deg);
  }
  .uikit.p52 .bar {
    -webkit-transform: rotate(187.2deg);
    -moz-transform: rotate(187.2deg);
    -ms-transform: rotate(187.2deg);
    -o-transform: rotate(187.2deg);
    transform: rotate(187.2deg);
  }
  .uikit.p53 .bar {
    -webkit-transform: rotate(190.8deg);
    -moz-transform: rotate(190.8deg);
    -ms-transform: rotate(190.8deg);
    -o-transform: rotate(190.8deg);
    transform: rotate(190.8deg);
  }
  .uikit.p54 .bar {
    -webkit-transform: rotate(194.4deg);
    -moz-transform: rotate(194.4deg);
    -ms-transform: rotate(194.4deg);
    -o-transform: rotate(194.4deg);
    transform: rotate(194.4deg);
  }
  .uikit.p55 .bar {
    -webkit-transform: rotate(198deg);
    -moz-transform: rotate(198deg);
    -ms-transform: rotate(198deg);
    -o-transform: rotate(198deg);
    transform: rotate(198deg);
  }
  .uikit.p56 .bar {
    -webkit-transform: rotate(201.6deg);
    -moz-transform: rotate(201.6deg);
    -ms-transform: rotate(201.6deg);
    -o-transform: rotate(201.6deg);
    transform: rotate(201.6deg);
  }
  .uikit.p57 .bar {
    -webkit-transform: rotate(205.2deg);
    -moz-transform: rotate(205.2deg);
    -ms-transform: rotate(205.2deg);
    -o-transform: rotate(205.2deg);
    transform: rotate(205.2deg);
  }
  .uikit.p58 .bar {
    -webkit-transform: rotate(208.8deg);
    -moz-transform: rotate(208.8deg);
    -ms-transform: rotate(208.8deg);
    -o-transform: rotate(208.8deg);
    transform: rotate(208.8deg);
  }
  .uikit.p59 .bar {
    -webkit-transform: rotate(212.4deg);
    -moz-transform: rotate(212.4deg);
    -ms-transform: rotate(212.4deg);
    -o-transform: rotate(212.4deg);
    transform: rotate(212.4deg);
  }
  .uikit.p60 .bar {
    -webkit-transform: rotate(216deg);
    -moz-transform: rotate(216deg);
    -ms-transform: rotate(216deg);
    -o-transform: rotate(216deg);
    transform: rotate(216deg);
  }
  .uikit.p61 .bar {
    -webkit-transform: rotate(219.6deg);
    -moz-transform: rotate(219.6deg);
    -ms-transform: rotate(219.6deg);
    -o-transform: rotate(219.6deg);
    transform: rotate(219.6deg);
  }
  .uikit.p62 .bar {
    -webkit-transform: rotate(223.2deg);
    -moz-transform: rotate(223.2deg);
    -ms-transform: rotate(223.2deg);
    -o-transform: rotate(223.2deg);
    transform: rotate(223.2deg);
  }
  .uikit.p63 .bar {
    -webkit-transform: rotate(226.8deg);
    -moz-transform: rotate(226.8deg);
    -ms-transform: rotate(226.8deg);
    -o-transform: rotate(226.8deg);
    transform: rotate(226.8deg);
  }
  .uikit.p64 .bar {
    -webkit-transform: rotate(230.4deg);
    -moz-transform: rotate(230.4deg);
    -ms-transform: rotate(230.4deg);
    -o-transform: rotate(230.4deg);
    transform: rotate(230.4deg);
  }
  .uikit.p65 .bar {
    -webkit-transform: rotate(234deg);
    -moz-transform: rotate(234deg);
    -ms-transform: rotate(234deg);
    -o-transform: rotate(234deg);
    transform: rotate(234deg);
  }
  .uikit.p66 .bar {
    -webkit-transform: rotate(237.6deg);
    -moz-transform: rotate(237.6deg);
    -ms-transform: rotate(237.6deg);
    -o-transform: rotate(237.6deg);
    transform: rotate(237.6deg);
  }
  .uikit.p67 .bar {
    -webkit-transform: rotate(241.2deg);
    -moz-transform: rotate(241.2deg);
    -ms-transform: rotate(241.2deg);
    -o-transform: rotate(241.2deg);
    transform: rotate(241.2deg);
  }
  .uikit.p68 .bar {
    -webkit-transform: rotate(244.8deg);
    -moz-transform: rotate(244.8deg);
    -ms-transform: rotate(244.8deg);
    -o-transform: rotate(244.8deg);
    transform: rotate(244.8deg);
  }
  .uikit.p69 .bar {
    -webkit-transform: rotate(248.4deg);
    -moz-transform: rotate(248.4deg);
    -ms-transform: rotate(248.4deg);
    -o-transform: rotate(248.4deg);
    transform: rotate(248.4deg);
  }
  .uikit.p70 .bar {
    -webkit-transform: rotate(252deg);
    -moz-transform: rotate(252deg);
    -ms-transform: rotate(252deg);
    -o-transform: rotate(252deg);
    transform: rotate(252deg);
  }
  .uikit.p71 .bar {
    -webkit-transform: rotate(255.6deg);
    -moz-transform: rotate(255.6deg);
    -ms-transform: rotate(255.6deg);
    -o-transform: rotate(255.6deg);
    transform: rotate(255.6deg);
  }
  .uikit.p72 .bar {
    -webkit-transform: rotate(259.2deg);
    -moz-transform: rotate(259.2deg);
    -ms-transform: rotate(259.2deg);
    -o-transform: rotate(259.2deg);
    transform: rotate(259.2deg);
  }
  .uikit.p73 .bar {
    -webkit-transform: rotate(262.8deg);
    -moz-transform: rotate(262.8deg);
    -ms-transform: rotate(262.8deg);
    -o-transform: rotate(262.8deg);
    transform: rotate(262.8deg);
  }
  .uikit.p74 .bar {
    -webkit-transform: rotate(266.4deg);
    -moz-transform: rotate(266.4deg);
    -ms-transform: rotate(266.4deg);
    -o-transform: rotate(266.4deg);
    transform: rotate(266.4deg);
  }
  .uikit.p75 .bar {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  .uikit.p76 .bar {
    -webkit-transform: rotate(273.6deg);
    -moz-transform: rotate(273.6deg);
    -ms-transform: rotate(273.6deg);
    -o-transform: rotate(273.6deg);
    transform: rotate(273.6deg);
  }
  .uikit.p77 .bar {
    -webkit-transform: rotate(277.2deg);
    -moz-transform: rotate(277.2deg);
    -ms-transform: rotate(277.2deg);
    -o-transform: rotate(277.2deg);
    transform: rotate(277.2deg);
  }
  .uikit.p78 .bar {
    -webkit-transform: rotate(280.8deg);
    -moz-transform: rotate(280.8deg);
    -ms-transform: rotate(280.8deg);
    -o-transform: rotate(280.8deg);
    transform: rotate(280.8deg);
  }
  .uikit.p79 .bar {
    -webkit-transform: rotate(284.4deg);
    -moz-transform: rotate(284.4deg);
    -ms-transform: rotate(284.4deg);
    -o-transform: rotate(284.4deg);
    transform: rotate(284.4deg);
  }
  .uikit.p80 .bar {
    -webkit-transform: rotate(288deg);
    -moz-transform: rotate(288deg);
    -ms-transform: rotate(288deg);
    -o-transform: rotate(288deg);
    transform: rotate(288deg);
  }
  .uikit.p81 .bar {
    -webkit-transform: rotate(291.6deg);
    -moz-transform: rotate(291.6deg);
    -ms-transform: rotate(291.6deg);
    -o-transform: rotate(291.6deg);
    transform: rotate(291.6deg);
  }
  .uikit.p82 .bar {
    -webkit-transform: rotate(295.2deg);
    -moz-transform: rotate(295.2deg);
    -ms-transform: rotate(295.2deg);
    -o-transform: rotate(295.2deg);
    transform: rotate(295.2deg);
  }
  .uikit.p83 .bar {
    -webkit-transform: rotate(298.8deg);
    -moz-transform: rotate(298.8deg);
    -ms-transform: rotate(298.8deg);
    -o-transform: rotate(298.8deg);
    transform: rotate(298.8deg);
  }
  .uikit.p84 .bar {
    -webkit-transform: rotate(302.4deg);
    -moz-transform: rotate(302.4deg);
    -ms-transform: rotate(302.4deg);
    -o-transform: rotate(302.4deg);
    transform: rotate(302.4deg);
  }
  .uikit.p85 .bar {
    -webkit-transform: rotate(306deg);
    -moz-transform: rotate(306deg);
    -ms-transform: rotate(306deg);
    -o-transform: rotate(306deg);
    transform: rotate(306deg);
  }
  .uikit.p86 .bar {
    -webkit-transform: rotate(309.6deg);
    -moz-transform: rotate(309.6deg);
    -ms-transform: rotate(309.6deg);
    -o-transform: rotate(309.6deg);
    transform: rotate(309.6deg);
  }
  .uikit.p87 .bar {
    -webkit-transform: rotate(313.2deg);
    -moz-transform: rotate(313.2deg);
    -ms-transform: rotate(313.2deg);
    -o-transform: rotate(313.2deg);
    transform: rotate(313.2deg);
  }
  .uikit.p88 .bar {
    -webkit-transform: rotate(316.8deg);
    -moz-transform: rotate(316.8deg);
    -ms-transform: rotate(316.8deg);
    -o-transform: rotate(316.8deg);
    transform: rotate(316.8deg);
  }
  .uikit.p89 .bar {
    -webkit-transform: rotate(320.4deg);
    -moz-transform: rotate(320.4deg);
    -ms-transform: rotate(320.4deg);
    -o-transform: rotate(320.4deg);
    transform: rotate(320.4deg);
  }
  .uikit.p90 .bar {
    -webkit-transform: rotate(324deg);
    -moz-transform: rotate(324deg);
    -ms-transform: rotate(324deg);
    -o-transform: rotate(324deg);
    transform: rotate(324deg);
  }
  .uikit.p91 .bar {
    -webkit-transform: rotate(327.6deg);
    -moz-transform: rotate(327.6deg);
    -ms-transform: rotate(327.6deg);
    -o-transform: rotate(327.6deg);
    transform: rotate(327.6deg);
  }
  .uikit.p92 .bar {
    -webkit-transform: rotate(331.2deg);
    -moz-transform: rotate(331.2deg);
    -ms-transform: rotate(331.2deg);
    -o-transform: rotate(331.2deg);
    transform: rotate(331.2deg);
  }
  .uikit.p93 .bar {
    -webkit-transform: rotate(334.8deg);
    -moz-transform: rotate(334.8deg);
    -ms-transform: rotate(334.8deg);
    -o-transform: rotate(334.8deg);
    transform: rotate(334.8deg);
  }
  .uikit.p94 .bar {
    -webkit-transform: rotate(338.4deg);
    -moz-transform: rotate(338.4deg);
    -ms-transform: rotate(338.4deg);
    -o-transform: rotate(338.4deg);
    transform: rotate(338.4deg);
  }
  .uikit.p95 .bar {
    -webkit-transform: rotate(342deg);
    -moz-transform: rotate(342deg);
    -ms-transform: rotate(342deg);
    -o-transform: rotate(342deg);
    transform: rotate(342deg);
  }
  .uikit.p96 .bar {
    -webkit-transform: rotate(345.6deg);
    -moz-transform: rotate(345.6deg);
    -ms-transform: rotate(345.6deg);
    -o-transform: rotate(345.6deg);
    transform: rotate(345.6deg);
  }
  .uikit.p97 .bar {
    -webkit-transform: rotate(349.2deg);
    -moz-transform: rotate(349.2deg);
    -ms-transform: rotate(349.2deg);
    -o-transform: rotate(349.2deg);
    transform: rotate(349.2deg);
  }
  .uikit.p98 .bar {
    -webkit-transform: rotate(352.8deg);
    -moz-transform: rotate(352.8deg);
    -ms-transform: rotate(352.8deg);
    -o-transform: rotate(352.8deg);
    transform: rotate(352.8deg);
  }
  .uikit.p99 .bar {
    -webkit-transform: rotate(356.4deg);
    -moz-transform: rotate(356.4deg);
    -ms-transform: rotate(356.4deg);
    -o-transform: rotate(356.4deg);
    transform: rotate(356.4deg);
  }
  .uikit.p100 .bar {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  .uikit:hover {
    cursor: default;
  }
  .uikit:hover > span {
    width: 3.33em;
    line-height: 3.33em;
    font-size: 0.3em;
    color: #307bbb;
  }
  .uikit:hover:after {
    top: 0.04em;
    left: 0.04em;
    width: 0.92em;
    height: 0.92em;
  }
`;
},{"@rxdi/lit-html":"R8ie"}],"aOBu":[function(require,module,exports) {
"use strict";var t,e=this&&this.__decorate||function(t,e,i,r){var s,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(l=(o<3?s(l):o>3?s(e,i,l):s(e,i))||l);return o>3&&l&&Object.defineProperty(e,i,l),l},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html"),s=require("../settings"),o=require("./circle.css");let l=class extends r.LitElement{constructor(){super(...arguments),this.palette="default",this.height=8,this._value=0,this.rounded=!1,this.label=!1,this.type="bar"}get value(){return this._value}set value(t){const e=this._value;this._value=t>100?100:t,this.requestUpdate("value",e)}};e([r.property({type:String}),i("design:type","function"==typeof(t=void 0!==s.PalettesUnion&&s.PalettesUnion)?t:Object)],l.prototype,"palette",void 0),e([r.property({type:Number}),i("design:type",Object)],l.prototype,"height",void 0),e([r.property({type:Number}),i("design:type",Number),i("design:paramtypes",[Number])],l.prototype,"value",null),e([r.property({type:Boolean}),i("design:type",Object)],l.prototype,"rounded",void 0),e([r.property({type:Boolean}),i("design:type",Object)],l.prototype,"label",void 0),e([r.property({type:String}),i("design:type",String)],l.prototype,"type",void 0),l=e([r.Component({selector:"rx-progress",template(){return r.html`
      <style>
        :host {
          display: ${"bar"===this.type?"block":"inline-block"};
        }
        .container {
          display: flex;
          height: ${"circle"===this.type?this.height<=12?10*this.height+20:140:this.height}px;
          overflow: hidden;
          width: ${"circle"===this.type?this.height<=12?10*this.height+20+"px":"140px":"100%"};

          justify-content: ${"bar"===this.type?"start":"center"};
          align-items: ${"bar"===this.type?"flex-start":"center"};
        }
        .bar {
          width: ${this.value}%;
          height: 100%;
          background-color: var(--${this.palette}-bg-color);
          transition: width 0.4s ease;
          border-radius: ${this.rounded?this.height/2+"px":"0px"};
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .label {
          font-size: 0.5em;
          font-weight: bold;
        }

        ${"circle"===this.type?o.progressCss:""} .uikit.dark {
          background-color: #777777;
        }
        .uikit.dark .bar,
        .uikit.dark .fill {
          border-color: var(--${this.palette}-bg-color) !important;
        }
        .uikit.dark > span {
          color: var(--${this.palette}-color);
        }
        .uikit.dark:after {
          background-color: #666666;
        }
        .uikit.dark:hover > span {
          color: var(--${this.palette}-color);
        }

        .uikit {
          font-size: ${this.height<=12?10*this.height:120}px;
        }
      </style>
      <div class="container">
        ${"bar"===this.type?r.html`
              <div class="bar">
                ${this.label&&this.value>5?r.html`
                      <span class="label">${this.label?this.value+"%":""}</span>
                    `:""}
              </div>
            `:r.html`
              <div class="uikit p${this.value} dark">
                <span>${this.value}%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
            `}
      </div>
    `}})],l),exports.ProgressComponent=l;
},{"@rxdi/lit-html":"R8ie","../settings":"oZ1d","./circle.css":"y5Oc"}],"U6nI":[function(require,module,exports) {
"use strict";var t,e=this&&this.__decorate||function(t,e,o,s){var i,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,s);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(l=(r<3?i(l):r>3?i(e,o,l):i(e,o))||l);return r>3&&l&&Object.defineProperty(e,o,l),l},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(exports,"__esModule",{value:!0});const s=require("@rxdi/lit-html"),i=require("../settings");let r=class extends s.LitElement{constructor(){super(...arguments),this.stroke="#FFF",this.strokeWidth="1.4",this.width="20",this.height="20"}};e([s.property({type:String}),o("design:type","function"==typeof(t=void 0!==i.PalettesUnion&&i.PalettesUnion)?t:Object)],r.prototype,"palette",void 0),e([s.property(),o("design:type",Object)],r.prototype,"stroke",void 0),e([s.property(),o("design:type",Object)],r.prototype,"strokeWidth",void 0),e([s.property(),o("design:type",Object)],r.prototype,"width",void 0),e([s.property(),o("design:type",Object)],r.prototype,"height",void 0),r=e([s.Component({selector:"rx-close",template(){return s.html`
      <style>
        svg line {
          stroke-width: ${this.strokeWidth};
        }
        svg:hover {
          stroke: blue;
        }
      </style>
      ${this.palette?s.html`
            <style>
              svg line {
                stroke: var(--${this.palette}-bg-color);
              }
            </style>
          `:s.html`
            <style>
              svg line {
                stroke: ${this.stroke};
              }
            </style>
          `}
      ${s.svg`<svg
        width=${this.width}
        height=${this.height}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="close-large">
          <line x1="1" y1="1" x2="19" y2="19"></line>
          <line x1="19" y1="1" x2="1" y2="19"></line>
      </svg>`}
    `}})],r),exports.CloseComponent=r;
},{"@rxdi/lit-html":"R8ie","../settings":"oZ1d"}],"Sovf":[function(require,module,exports) {
"use strict";var t=this&&this.__decorate||function(t,e,r,o){var s,i=arguments.length,n=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i<3?s(n):i>3?s(e,r,n):s(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},e=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html");let o=class extends r.LitElement{constructor(){super(...arguments),this.orientation="row"}OnUpdateFirst(){this.dots=this.selectAllHrefs(),this.attachListeners()}selectAllHrefs(){return[...Array.from(this.querySelectorAll("a"))]}attachListeners(){this.dots.forEach(t=>this.attachListener(t))}attachListener(t){t.addEventListener("click",()=>this.focusElement(t))}focusElement(t){this.dots.forEach(t=>t.classList.remove("focus")),t.classList.add("focus")}};t([r.property({type:String}),e("design:type",String)],o.prototype,"orientation",void 0),t([r.property({type:Array}),e("design:type",Array)],o.prototype,"dots",void 0),o=t([r.Component({selector:"rx-dotnav",style:r.css`
    a {
      display: block;
      cursor: pointer;
      box-sizing: border-box;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: transparent;
      text-indent: 100%;
      overflow: hidden;
      white-space: nowrap;
      border: 1px solid rgba(102, 102, 102, 0.4);
      transition: 0.2s ease-in-out;
      transition-property: background-color, border-color;
    }
    .focus {
      background-color: rgba(102, 102, 102, 0.6);
      outline: none;
      border-color: transparent;
    }
  `,template(){return r.html`
      ${"row"===this.orientation?r.html`
            <style>
              a {
                margin-top: 0px;
                margin-right: 12px;
              }
            </style>
          `:r.html`
            <style>
              a {
                margin-top: 12px;
                margin-right: 0px;
              }
            </style>
          `}
      <div
        style=${r.styleMap({display:"flex","flex-direction":this.orientation})}
      >
        ${this.dots}
      </div>
    `}})],o),exports.DotnavComponent=o;
},{"@rxdi/lit-html":"R8ie"}],"bh7V":[function(require,module,exports) {
"use strict";var i=this&&this.__decorate||function(i,e,t,s){var l,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(i,e,t,s);else for(var o=i.length-1;o>=0;o--)(l=i[o])&&(r=(n<3?l(r):n>3?l(e,t,r):l(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},e=this&&this.__metadata||function(i,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(i,e)};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/lit-html");let s=class extends t.LitElement{constructor(){super(...arguments),this.if=(()=>!0)}};i([t.property({attribute:!1}),e("design:type",Function)],s.prototype,"if",void 0),s=i([t.Component({selector:"rx-loading",style:t.css`
    .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
    }
    .lds-ellipsis div {
      position: absolute;
      top: 27px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #fff;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds-ellipsis div:nth-child(1) {
      left: 6px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(2) {
      left: 6px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(3) {
      left: 26px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(4) {
      left: 45px;
      animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(19px, 0);
      }
    }
  `,template(){return t.html`
      ${this.if()?t.html`
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      `:""}
    `}})],s),exports.LoadingComponent=s;
},{"@rxdi/lit-html":"R8ie"}],"xViC":[function(require,module,exports) {
"use strict";var t,e=this&&this.__decorate||function(t,e,i,o){var n,s=arguments.length,l=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(l=(s<3?n(l):s>3?n(e,i,l):n(e,i))||l);return s>3&&l&&Object.defineProperty(e,i,l),l},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function l(t){try{a(o.next(t))}catch(e){s(e)}}function r(t){try{a(o.throw(t))}catch(e){s(e)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(l,r)}a((o=o.apply(t,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const n=require("@rxdi/lit-html");let s=class extends n.LitElement{onClose(){this.dispatchEvent(new CustomEvent("onClose",{detail:this})),this.remove()}OnUpdateFirst(){"primary"===this.palette?this.setPaletteStyle("#d8eafc","#1e87f0"):"success"===this.palette?this.setPaletteStyle("#edfbf6","#32d296"):"warning"===this.palette?this.setPaletteStyle("#fff6ee","#faa05a"):"danger"===this.palette?this.setPaletteStyle("#fef4f6","#f0506e"):"default"===this.palette&&this.setPaletteStyle("#f8f8f8","#666")}setPaletteStyle(t,e){this.paletteStyle=n.css`
      :host {
        background: ${n.unsafeCSS(t)};
        color: ${n.unsafeCSS(e)};
      }
    `}};e([n.property({type:String}),i("design:type",String)],s.prototype,"palette",void 0),e([n.property({type:Object}),i("design:type","function"==typeof(t=void 0!==n.CSSResult&&n.CSSResult)?t:Object)],s.prototype,"paletteStyle",void 0),e([n.property({type:Boolean}),i("design:type",Boolean)],s.prototype,"transition",void 0),s=e([n.Component({selector:"rx-alert",style:n.css`
    :host {
      position: relative;
      padding: 15px 29px 15px 15px;
    }

    slot {
      font-size: 15px;
      font-weight: normal;
      line-height: 1.5;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }

    a {
      position: absolute;
      top: 15px;
      right: 15px;
      color: inherit;
      opacity: 0.4;
    }
    a:hover {
      cursor: pointer;
      color: inherit;
      opacity: 0.8;
    }
  `,template(){return n.html`
      <style>
        ${this.paletteStyle}
      </style>
      <a @click=${()=>o(this,void 0,void 0,function*(){return this.onClose()})}>
        ${n.svg`
              <svg width="14" height="14" viewBox="0 0 14 14">
                <line fill="none" stroke="#666" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                <line fill="none" stroke="#666" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
              </svg>
            `}</a
      >
      <slot part="text"></slot>
    `}})],s),exports.AlertComponent=s;
},{"@rxdi/lit-html":"R8ie"}],"QP1J":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/lit-html");exports.Spinner=((r,t)=>e.svg`<svg width=${r} height=${t} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" data-svg="spinner"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"></circle></svg>`);
},{"@rxdi/lit-html":"R8ie"}],"WYTc":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var p=e.length-1;p>=0;p--)(n=e[p])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("@rxdi/lit-html"),s=require("./spinner.svg");let n=class extends r.LitElement{constructor(){super(...arguments),this.speed=2.4,this.width=30,this.height=30,this.stroke=1}};e([r.property({type:Number}),t("design:type",Object)],n.prototype,"speed",void 0),e([r.property({type:Number}),t("design:type",Object)],n.prototype,"width",void 0),e([r.property({type:Number}),t("design:type",Object)],n.prototype,"height",void 0),e([r.property({type:Number}),t("design:type",Object)],n.prototype,"stroke",void 0),n=e([r.Component({selector:"rx-spinner",style:r.css`
    svg {
      vertical-align: middle;
    }

    .uk-spinner > * > * {
      stroke-dasharray: 88px;
      stroke-dashoffset: 0;
      transform-origin: center;

      stroke: #666;
      stroke-linecap: round;
    }

    @keyframes uk-spinner-rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(270deg);
      }
    }

    .uk-spinner > * > * {
      stroke-dasharray: 88px;
      stroke-dashoffset: 0;
      transform-origin: center;
      stroke-linecap: round;
    }

    @keyframes uk-spinner-dash {
      0% {
        stroke-dashoffset: 88px;
      }

      50% {
        stroke-dashoffset: 22px;
        transform: rotate(135deg);
      }

      100% {
        stroke-dashoffset: 88px;
        transform: rotate(450deg);
      }
    }
  `,template(){return r.html`
      <style>
        .uk-spinner > * {
          animation: uk-spinner-rotate ${r.unsafeCSS(this.speed)}s linear infinite;
        }

        .uk-spinner > * > * {
          stroke-width: ${r.unsafeCSS(this.stroke)};
          animation: uk-spinner-dash ${r.unsafeCSS(this.speed)}s ease-in-out
            infinite;
        }
      </style>
      <div uk-spinner="" class="uk-icon uk-spinner">
        ${s.Spinner(this.width,this.height)}
      </div>
    `}})],n),exports.SpinnerComponent=n;
},{"@rxdi/lit-html":"R8ie","./spinner.svg":"QP1J"}],"ZXoM":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,a,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,a,r):s(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const i=require("@rxdi/lit-html"),s=require("../settings");let o=class extends i.LitElement{constructor(){super(...arguments),this.palette="default",this.pages=[]}};t([i.property({type:String}),a("design:type","function"==typeof(e=void 0!==s.PalettesUnion&&s.PalettesUnion)?e:Object)],o.prototype,"palette",void 0),t([i.property({type:Array}),a("design:type",Array)],o.prototype,"pages",void 0),o=t([i.Component({selector:"rx-tabs",style:i.css`
    .tabs {
      display: flex;
      flex-wrap: wrap;
      margin-left: -20px;
      padding: 0;
      list-style: none;
      position: relative;
    }
    .switcher {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .tabs > * {
      flex: none;
      padding-left: 20px;
      position: relative;
    }
    .tabs > .active > a {
      color: #222;
    }
    .tabs > * > a {
      display: block;
      text-align: center;
      padding: 9px 20px;
      color: #999;
      border-bottom: 2px solid transparent;
      font-size: 12px;
      text-transform: uppercase;
      transition: color 0.1s ease-in-out;
      line-height: 20px;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }
    a:hover {
      color: #333;
    }
    li {
      color: #666;
    }
  `,template(){return i.html`
      <style>
        .tabs > .active > a {
          border-color: var(--${this.palette}-bg-color);
        }
      </style>
      <ul class="tabs">
        ${this.pages.map(e=>i.html`
            <li class=${i.classMap({active:e.active})}>
              <a
                @click=${()=>{this.pages=this.pages.map(e=>(e.active=!1,e)),e.active=!0,this.pages=[...this.pages]}}
                >${e.name}</a
              >
            </li>
          `)}
      </ul>

      <ul class="switcher">
        ${this.pages.filter(e=>e.active).map(e=>i.html`
              <li>
                ${e.view}
              </li>
            `)}
      </ul>
    `}})],o),exports.TabsComponent=o;
},{"@rxdi/lit-html":"R8ie","../settings":"oZ1d"}],"Toop":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,o,r){var i,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(s<3?i(n):s>3?i(t,o,n):i(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("@rxdi/lit-html");let o=class extends t.LitElement{};o=e([t.Component({selector:"rx-description",style:t.css`
    .description {
      color: #222;
      font-size: 14px;
      font-weight: normal;
      text-transform: uppercase;
    }

    .text {
      color: #666;
      font-size: 15px;
      font-weight: normal;
      line-height: 1.5;
    }

    .border {
      border-top: 1px solid #e5e5e5;
      margin-top: 20px;
      padding-top: 20px;
    }
  `,template:()=>t.html`
      <div class="container" part="container">
        <slot name="description" class="description" part="description"></slot>
        <slot name="text" class="text" part="text"></slot>
        <div class="border" part="border"></div>
      </div>
    `})],o),exports.DescriptionListComponent=o;
},{"@rxdi/lit-html":"R8ie"}],"ynE3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NavComponent=void 0;var t,e=require("@rxdi/lit-html"),r=require("@rxdi/core"),a=require("../../../../src/nav"),o=function(t,e,r,a){var o,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,a);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(n=(i<3?o(n):i>3?o(e,r,n):o(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let n=class extends e.LitElement{};exports.NavComponent=n,o([(0,r.Inject)(a.Nav),i("design:type","function"==typeof(t=void 0!==a.Nav&&a.Nav)?t:Object)],n.prototype,"nav",void 0),exports.NavComponent=n=o([(0,e.Component)({selector:"nav-component",template(){return e.html`
      <style>
        rx-button {
          width: 200px;
        }
      </style>
      <div style="top:0px;background: #1c1f24;display: grid">
        <a href="/ui-kit/"><rx-button palette="primary">Markdown Link</rx-button> </a>
        <a href="/ui-kit/markdown-reader/rxdi/ui-components/README.md"
          ><rx-button palette="primary">Markdown Route Params</rx-button>
        </a>
        <a href="/ui-kit/responsive"
          ><rx-button palette="primary">Responsive Service</rx-button>
        </a>
        <a href="/ui-kit/accordion"
          ><rx-button palette="primary">Accordion</rx-button>
        </a>
        <a href="/ui-kit/image"><rx-button palette="primary">Image</rx-button> </a>
        <a href="/ui-kit/badge"><rx-button palette="primary">Badge</rx-button> </a>
        <a href="/ui-kit/modal"><rx-button palette="primary">Modal</rx-button> </a>
        <a href="/ui-kit/button"><rx-button palette="primary">Button</rx-button> </a>
        <a href="/ui-kit/article"><rx-button palette="primary">Article</rx-button> </a>
        <a href="/ui-kit/divider"><rx-button palette="primary">Divider</rx-button> </a>
        <a href="/ui-kit/label"><rx-button palette="primary">Label</rx-button> </a>
        <a href="/ui-kit/nav"><rx-button palette="primary">Nav</rx-button> </a>
        <a href="/ui-kit/dropdown"><rx-button palette="primary">Dropdown</rx-button> </a>
        <a href="/ui-kit/card"><rx-button palette="primary">Card</rx-button> </a>
        <a href="/ui-kit/forms"><rx-button palette="primary">Forms</rx-button> </a>
        <a href="/ui-kit/progress"><rx-button palette="primary">Progress</rx-button> </a>
        <a href="/ui-kit/alert"><rx-button palette="primary">Alert</rx-button> </a>
        <a href="/ui-kit/description"><rx-button palette="primary">Description List</rx-button> </a>
        <a href="/ui-kit/dotnav"><rx-button palette="primary">Dotnav</rx-button> </a>
        <a href="/ui-kit/loading"><rx-button palette="primary">Loading</rx-button> </a>
        <a href="/ui-kit/spinner"><rx-button palette="primary">Spinner</rx-button> </a>
        <a href="/ui-kit/tabs"><rx-button palette="primary">Tabs</rx-button> </a>

        <!-- <rx-button
          palette="danger"
          @click=${()=>this.nav.setStylesSubject(e.css`
              :host {
                position: absolute;
              }
            `)}
          >Absolute</rx-button
        >

        <rx-button
          palette="danger"
          @click=${()=>this.nav.setStylesSubject(e.css`
              :host {
                position: relative;
              }
            `)}
          >Relative</rx-button
        > -->
      </div>
    `}})],n);
},{"@rxdi/lit-html":"R8ie","@rxdi/core":"lhgc","../../../../src/nav":"e2p2"}],"ThiH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppComponentsModule=void 0;var e=require("@rxdi/core"),o=require("../../../src/accordion"),n=require("../../../src/image"),r=require("../../../src/grid/grid.component"),t=require("../../../src/badge/badge.component"),c=require("../../../src/button/button.component"),p=require("../../../src/article/article.component"),i=require("../../../src/label/label.component"),s=require("../../../src/card/card.component"),m=require("../../../src/dropdown/dropdown.component"),d=require("../../../src/if/if.component"),a=require("../../../src/divider/divider.component"),u=require("../../../src/progress/progress.component"),l=require("../../../src/close/close.component"),C=require("../../../src/dotnav/dotnav.component"),q=require("../../../src/loading/loading.component"),g=require("../../../src/alert/alert.component"),v=require("../../../src/spinner/spinner.component"),b=require("../../../src/tabs/tabs.component"),f=require("../../../src/description-list/description-list.component"),w=require("./markdown-reader/markdown-regular.component"),A=require("./accordion-view/accordion-view.component"),x=require("./nav-view/nav-component"),M=function(e,o,n,r){var t,c=arguments.length,p=c<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,n,r);else for(var i=e.length-1;i>=0;i--)(t=e[i])&&(p=(c<3?t(p):c>3?t(o,n,p):t(o,n))||p);return c>3&&p&&Object.defineProperty(o,n,p),p};let y=class{};exports.AppComponentsModule=y,exports.AppComponentsModule=y=M([(0,e.Module)({components:[w.RegularMarkdownComponent,A.AccordionViewComponent,o.AccordionComponent,n.RxImageComponent,r.GridComponent,t.BadgeComponent,c.ButtonComponent,p.ArticleComponent,a.DividerComponent,i.LabelComponent,m.DropdownComponent,x.NavComponent,s.CardComponent,u.ProgressComponent,d.IfComponent,l.CloseComponent,g.AlertComponent,f.DescriptionListComponent,C.DotnavComponent,q.LoadingComponent,v.SpinnerComponent,b.TabsComponent]})],y);
},{"@rxdi/core":"lhgc","../../../src/accordion":"oj6B","../../../src/image":"N7t6","../../../src/grid/grid.component":"iXmO","../../../src/badge/badge.component":"C2jj","../../../src/button/button.component":"Ofur","../../../src/article/article.component":"pT1A","../../../src/label/label.component":"lvFV","../../../src/card/card.component":"kpCZ","../../../src/dropdown/dropdown.component":"vZQS","../../../src/if/if.component":"fOvE","../../../src/divider/divider.component":"OXJN","../../../src/progress/progress.component":"aOBu","../../../src/close/close.component":"U6nI","../../../src/dotnav/dotnav.component":"Sovf","../../../src/loading/loading.component":"bh7V","../../../src/alert/alert.component":"xViC","../../../src/spinner/spinner.component":"WYTc","../../../src/tabs/tabs.component":"ZXoM","../../../src/description-list/description-list.component":"Toop","./markdown-reader/markdown-regular.component":"SbH7","./accordion-view/accordion-view.component":"cwfd","./nav-view/nav-component":"ynE3"}],"Gsig":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppModule=void 0;var e=require("@rxdi/core"),o=require("./app.component"),r=require("../../../src/markdown-reader"),t=require("../../../src"),p=require("../../../src/modal"),u=require("../../../src/nav"),l=require("./app.routing.module"),d=require("./app.components.module"),n=function(e,o,r,t){var p,u=arguments.length,l=u<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,o,r,t);else for(var d=e.length-1;d>=0;d--)(p=e[d])&&(l=(u<3?p(l):u>3?p(o,r,l):p(o,r))||l);return u>3&&l&&Object.defineProperty(o,r,l),l};let c=class{};exports.AppModule=c,exports.AppModule=c=n([(0,e.Module)({imports:[d.AppComponentsModule,l.AppRoutingModule,p.ModalModule.forRoot({backdropClose:!0}),t.ReactiveUiModule.forRoot(),r.MarkdownReaderModule,u.NavModule.forRoot()],bootstrap:[o.AppComponent]})],c);
},{"@rxdi/core":"lhgc","./app.component":"XCbS","../../../src/markdown-reader":"X0WN","../../../src":"fUdq","../../../src/modal":"mF9g","../../../src/nav":"e2p2","./app.routing.module":"MVQp","./app.components.module":"ThiH"}],"ZCfc":[function(require,module,exports) {
"use strict";var e=require("@rxdi/core"),o=require("./src/app/app.module");window.addEventListener("load",()=>{(0,e.Bootstrap)(o.AppModule,{init:!1}).subscribe(()=>console.log("App Started!"),e=>console.error(e))}),module.hot&&module.hot.dispose(()=>document.body.innerHTML="");
},{"@rxdi/core":"lhgc","./src/app/app.module":"Gsig"}]},{},["ZCfc"], null)
//# sourceMappingURL=/ui-kit/main.0f56c3e3.js.map