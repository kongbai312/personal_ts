import{bL as p,bU as O,bM as y,c7 as x}from"./index-87b852de.js";import{l as v,f as m,m as w,o as P,U as u}from"./_Uint8Array-cd39271b.js";var i=Object.create,b=function(){function e(){}return function(n){if(!p(n))return{};if(i)return i(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}();const U=b;function N(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}function q(e,n,r,t){var g=!r;r||(r={});for(var a=-1,h=n.length;++a<h;){var o=n[a],s=t?t(r[o],e[o],o,r,e):void 0;s===void 0&&(s=e[o]),g?O(r,o,s):y(r,o,s)}return r}function A(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var C=Object.prototype,L=C.hasOwnProperty;function I(e){if(!p(e))return A(e);var n=v(e),r=[];for(var t in e)t=="constructor"&&(n||!L.call(e,t))||r.push(t);return r}function D(e){return m(e)?w(e,!0):I(e)}var K=P(Object.getPrototypeOf,Object);const T=K;var d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,B=f&&f.exports===d,l=B?x.Buffer:void 0,c=l?l.allocUnsafe:void 0;function F(e,n){if(n)return e.slice();var r=e.length,t=c?c(r):new e.constructor(r);return e.copy(t),t}function E(e){var n=new e.constructor(e.byteLength);return new u(n).set(new u(e)),n}function G(e,n){var r=n?E(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function H(e){return typeof e.constructor=="function"&&!v(e)?U(T(e)):{}}export{E as a,G as b,q as c,N as d,F as e,T as g,H as i,D as k};
