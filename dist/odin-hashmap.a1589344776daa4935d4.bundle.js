!function(){"use strict";function e(){var t={value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object.defineProperties(t,{nextNode:{get:function(){return r},set:function(){throw Error("Read-only property (nextNode) cannot be assigned!")},configurable:!1,enumerable:!0},previousNode:{get:function(){return n},set:function(){throw Error("Read-only property (nextNode) cannot be assigned!")},configurable:!1,enumerable:!0}});var i={},o=function(t){if(null!==t&&!(t instanceof e))throw TypeError("Node value must be 'Node' or 'null'!");return!0};return Object.defineProperties(i,{setNext:{value:function(e){o(e)&&(r=e)},writable:!1,configurable:!1,enumerable:!1},setPrev:{value:function(e){o(e)&&(n=e)},writable:!1,configurable:!1,enumerable:!1}}),Object.setPrototypeOf(i,e.prototype),Object.setPrototypeOf(t,i),Object.freeze(i),Object.seal(t),t}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(){var e=[];return function(r,n){if("object"!==t(n)||null===n)return"bigint"==typeof n?String(n):n;for(;e.length>0&&e.at(-1)!==this;)e.pop();return e.includes(n)?"[Circular]":(e.push(n),n)}}function n(){if(2!==arguments.length)throw TypeError("Expect exactly 2 arguments!");var e=arguments.length<=0?void 0:arguments[0],n=arguments.length<=1?void 0:arguments[1];return t(e)===t(n)&&("object"===t(e)&&null!==e||"object"===t(n)&&null!==n?JSON.stringify(e,r())===JSON.stringify(n,r()):e===n||Object.is(e,n))}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:String(t)}function u(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function l(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,h(e,t,"set"),r),r}function s(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,h(e,t,"get"))}function h(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}Object.freeze(e.prototype);var f,c=new WeakMap,v=new WeakMap,y=new WeakMap,p=function(){function t(){var e=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c,{writable:!0,value:null}),u(this,v,{writable:!0,value:null}),u(this,y,{writable:!0,value:0});for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];n.length>0&&n.forEach((function(t){return e.append(t)}))}var r,i;return r=t,i=[{key:"head",get:function(){return s(this,c)}},{key:"tail",get:function(){return s(this,v)}},{key:"length",get:function(){return s(this,y)}},{key:"append",value:function(){for(var t=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return n.forEach((function(r){var n;if(0===s(t,y))l(t,c,e(r)),l(t,v,s(t,c));else if(1===s(t,y))l(t,v,e(r,null,s(t,c))),s(t,c).setNext(s(t,v));else{var i=e(r,null,s(t,v));s(t,v).setNext(i),l(t,v,i)}l(t,y,(n=s(t,y),++n))})),this}},{key:"prepend",value:function(){for(var t=arguments.length-1;t>=0;t--){var r,n=t<0||arguments.length<=t?void 0:arguments[t];if(0===s(this,y))l(this,c,e(n)),l(this,v,s(this,c));else if(1===s(this,y))l(this,c,e(n,s(this,v))),s(this,v).setPrev(s(this,c));else{var i=e(n,s(this,c));s(this,c).setPrev(i),l(this,c,i)}l(this,y,(r=s(this,y),++r))}return this}},{key:"at",value:function(e){var t=Number(e);if(!Number.isInteger(t)||t>-1&&t>s(this,y)-1||t<0&&Math.abs(t)>s(this,y))throw Error("Invalid index!");if(0===s(this,y))throw Error("The linked list is empty!");if(t<0){for(var r=s(this,v);t<-1;)r=r.previousNode,t++;return r}for(var n=s(this,c);t>0;)n=n.nextNode,t--;return n}},{key:"contains",value:function(e){for(var t=s(this,c);null!==t;){if(n(t.value,e))return!0;t=t.nextNode}return!1}},{key:"pop",value:function(){var t;if(0===s(this,y))return null;var r=e(s(this,v).value);return 1===s(this,y)?(l(this,c,null),l(this,v,s(this,c))):(l(this,v,s(this,v).previousNode),s(this,v).setNext(null)),l(this,y,(t=s(this,y),--t)),r}},{key:"shift",value:function(){var t;if(0===s(this,y))return null;var r=e(s(this,c).value);return 1===s(this,y)?(l(this,c,null),l(this,v,s(this,c))):(l(this,c,s(this,c).nextNode),s(this,c).setPrev(null)),l(this,y,(t=s(this,y),--t)),r}},{key:"find",value:function(e){for(var t=0,r=s(this,c);null!==r;){if(n(r.value,e))return t;t++,r=r.nextNode}return null}},{key:"toString",value:function(){for(var e="null",t=s(this,v);null!==t;)e="( ".concat(t.value," ) -> ").concat(e),t=t.previousNode;return e}},{key:"insertAt",value:function(t,r){if(!Number.isInteger(r)||r>-1&&r>s(this,y)||r<0&&Math.abs(r)>s(this,y)+1)throw TypeError("Node index must be an integer in the range of (0 : ".concat(s(this,y),") or (-1 : -").concat(s(this,y)+1,")!"));if(0===s(this,y)||1===s(this,y)&&(r>0||-1===r))this.append(t),console.log("appended");else if(1===s(this,y)&&(0===r||r<-1))this.prepend(t),console.log("prepended");else{var n;if(0===r||r===-1*(s(this,y)+1)){var i=s(this,c);l(this,c,e(t,i)),i.setPrev(s(this,c))}else if(r===s(this,y)||-1===r){var o=s(this,v);l(this,v,e(t,null,o)),o.setNext(s(this,v))}else if(r<0){for(var a=s(this,v),u=r;u<-1;u++)a=a.previousNode;var h=e(t,a.nextNode,a);a.nextNode.setPrev(h),a.setNext(h)}else{for(var f=s(this,c),p=0;p<r;p++)f=f.nextNode;var d=e(t,f,f.previousNode);f.previousNode.setNext(d),f.setPrev(d)}l(this,y,(n=s(this,y),++n))}return this}},{key:"removeAt",value:function(e){var t;if(0===s(this,y))return null;if(!Number.isInteger(e)||e>-1&&e>s(this,y)-1||e<0&&Math.abs(e)>s(this,y))throw Error("Invalid index!");var r=null;if(0===e||e===-1*s(this,y))r=s(this,c),l(this,c,r.nextNode),s(this,y)>1&&s(this,c).setPrev(null);else if(e===s(this,y)-1||-1===e)r=s(this,v),l(this,v,r.previousNode),s(this,y)>1&&s(this,v).setNext(null);else{if(e<0){r=s(this,v);for(var n=e;n<-1;n++)r=r.previousNode}else{r=s(this,c);for(var i=0;i<e;i++)r=r.nextNode}r.previousNode.setNext(r.nextNode),r.nextNode.setPrev(r.previousNode)}return l(this,y,(t=s(this,y),--t)),r}},{key:"forEach",value:function(e){if("function"!=typeof e)throw TypeError('The given argument must be of type "function"!');for(var t=0,r=s(this,c);null!==r;)e(r.value,t),r=r.nextNode,t++}},{key:"filter",value:function(e){if("function"!=typeof e)throw TypeError('The given argument must be of type "function"!');for(var r=new t,n=0,i=s(this,c);null!==i;){var o=e(i.value,n);if("boolean"!=typeof o)throw TypeError('The given function must return a "boolean" value!');o&&r.append(i.value),i=i.nextNode,n++}return r}},{key:"map",value:function(e){if("function"!=typeof e)throw TypeError('The given argument must be of type "function"!');for(var r=new t,n=0,i=s(this,c);null!==i;)r.append(e(i.value,n)),i=i.nextNode,n++;return r}}],i&&o(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),t}();function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function m(e){var t=function(e,t){if("object"!=b(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:String(t)}function w(e,t){E(e,t),t.add(e)}function k(e,t,r){E(e,t),t.set(e,r)}function E(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function T(e,t,r){return P(e,t),r}function N(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}function x(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,S(e,t,"set"),r),r}function j(e,t){return A(e,S(e,t,"get"))}function S(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function O(e,t,r){return P(e,t),function(e,t){if(void 0===e)throw new TypeError("attempted to get private static field before its declaration")}(r),A(e,r)}function P(e,t){if(e!==t)throw new TypeError("Private static access of wrong provenance")}function A(e,t){return t.get?t.get.call(e):t.value}Object.freeze(p),Object.freeze(p.prototype),Object.freeze(Object.getPrototypeOf(p));var M=new WeakMap,z=new WeakMap,C=new WeakSet,W=new WeakSet,I=new WeakSet,R=new WeakSet,Z=new WeakSet,L=function(){function e(){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,Z),w(this,R),w(this,I),w(this,W),w(this,C),k(this,M,{writable:!0,value:Array(16)}),k(this,z,{writable:!0,value:0}),arguments.length>0)throw TypeError("HashMap constructor does not expect any arguments!");Object.freeze(this)}var t,r,n;return t=e,r=[{key:"capacity",get:function(){return j(this,M).length}},{key:"length",get:function(){return j(this,z)}},{key:"set",value:function(){var t;if(arguments.length<2)throw TypeError('The "set" method expects 2 arguments: .set(key, value)');var r={key:arguments.length<=0?void 0:arguments[0],value:arguments.length<=1?void 0:arguments[1]},n=N(this,I,U).call(this,T(e,e,H).call(e,r.key)),i=N(this,C,Y).call(this,n);if(void 0===i){var o=new p;o.append(r),N(this,W,F).call(this,n,o)}else{var a=T(e,e,J).call(e,i,r.key);null===a?i.append(r):a.value=r}return x(this,z,(t=j(this,z),++t)),N(this,R,$).call(this),this}},{key:"get",value:function(){if(arguments.length<1)throw TypeError('The "get" method expects 1 argument: .get(key)');var t=arguments.length<=0?void 0:arguments[0],r=N(this,I,U).call(this,T(e,e,H).call(e,t)),n=N(this,C,Y).call(this,r);if(void 0!==n){var i=T(e,e,J).call(e,n,t);if(null!==i)return i.value.value}return null}},{key:"has",value:function(){if(arguments.length<1)throw TypeError('The "has" method expect 1 argument: .has(key)');var t=arguments.length<=0?void 0:arguments[0],r=N(this,I,U).call(this,T(e,e,H).call(e,t)),n=N(this,C,Y).call(this,r);return void 0!==n&&null!==T(e,e,J).call(e,n,t)}},{key:"remove",value:function(){if(arguments.length<1)throw TypeError('The "remove" method expect 1 argument: .remove(key)');var t=arguments.length<=0?void 0:arguments[0],r=N(this,I,U).call(this,T(e,e,H).call(e,t)),n=N(this,C,Y).call(this,r);if(void 0!==n){var i,o=T(e,e,J).call(e,n,t);return!!o&&(n.removeAt(n.find(o.value)),0===n.length&&N(this,W,F).call(this,r,void 0),x(this,z,(i=j(this,z),--i)),!0)}return!1}},{key:"clear",value:function(){var e=this;if(arguments.length>0)throw TypeError('The "clear" method expect ZERO (0) arguments: .clear()');j(this,M).forEach((function(t,r){return N(e,W,F).call(e,r,void 0)})),x(this,z,0)}},{key:"keys",value:function(){if(arguments.length>0)throw TypeError('The "keys" method expect ZERO (0) arguments: .keys()');return N(this,Z,q).call(this,"keys")}},{key:"values",value:function(){if(arguments.length>0)throw TypeError('The "values" method expect ZERO (0) arguments: .values()');return N(this,Z,q).call(this,"values")}},{key:"entries",value:function(){if(arguments.length>0)throw TypeError('The "entries" method expect ZERO (0) arguments: .entries()');return N(this,Z,q).call(this,"entries")}}],n=[{key:"FACTOR",get:function(){return O(e,e,B)}},{key:"SCALE",get:function(){return O(e,e,D)}}],r&&g(t.prototype,r),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){if("object"===b(e))throw TypeError('The "key" (first argument) cannot be of TYPE "object"');if(""===e)throw TypeError('The "key" (first argument) cannot be EMPTY "string"');return String(e)}function J(e,t){for(var r=e.head;r;){if(r.value.key===t)return r;r=r.nextNode}return null}function Y(e){if(e<0||e>=j(this,M).length)throw new Error("Trying to access index out of bound");return j(this,M)[e]}function F(e,t){if(e<0||e>=j(this,M).length)throw new Error("Trying to access index out of bound");j(this,M)[e]=t}function U(e){for(var t=0,r=0;r<e.length;r++)t+=31*e.charCodeAt(r)%j(this,M).length;return t%j(this,M).length}function $(){var e=this;if(j(this,z)/j(this,M).length>O(f,f,B)){var t=this.entries();x(this,M,Array(Math.floor(j(this,M).length*O(f,f,D)))),x(this,z,0),t.forEach((function(t){var r,n,i=(n=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,u=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,i=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw i}}return u}}(r,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],a=i[1];return e.set(o,a)}))}}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"entries";e=e.toLocaleLowerCase();var t=[];return j(this,M).forEach((function(r){r&&r.forEach((function(r){switch(e){case"keys":t.push(r.key);break;case"values":t.push(r.value);break;default:t.push([r.key,r.value])}}))})),t}f=L;var B={writable:!0,value:.75},D={writable:!0,value:1.5};Object.freeze(Object.getPrototypeOf(L)),Object.freeze(L.prototype),Object.freeze(L),window.HashMap=L}();
//# sourceMappingURL=odin-hashmap.a1589344776daa4935d4.bundle.js.map