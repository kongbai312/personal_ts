import{k as F,g as C,s as _,a as N,b as K,c as j,n as u,d as E,i as R,S as v,e as H}from"./_Uint8Array-ef34448e.js";import{bG as m,bH as B,bI as J,bf as W,bJ as Y}from"./index-0fd51d52.js";import{c as T,k as p,g as q,a as M,b as Q,d as V,e as X,i as Z}from"./_initCloneObject-9eeac9b3.js";function k(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}function z(e,t){return e&&T(t,F(t),e)}function ee(e,t){return e&&T(t,p(t),e)}function te(e,t){return T(e,C(e),t)}var re=Object.getOwnPropertySymbols,ne=re?function(e){for(var t=[];e;)N(t,C(e)),e=q(e);return t}:_;const x=ne;function ae(e,t){return T(e,x(e),t)}function oe(e){return K(e,p,x)}var se=Object.prototype,ce=se.hasOwnProperty;function ie(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&ce.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function be(e,t){var n=t?M(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var fe=/\w*$/;function ge(e){var t=new e.constructor(e.source,fe.exec(e));return t.lastIndex=e.lastIndex,t}var I=m?m.prototype:void 0,O=I?I.valueOf:void 0;function ye(e){return O?Object(O.call(e)):{}}var ue="[object Boolean]",Te="[object Date]",le="[object Map]",je="[object Number]",pe="[object RegExp]",Ae="[object Set]",de="[object String]",$e="[object Symbol]",Se="[object ArrayBuffer]",me="[object DataView]",Ie="[object Float32Array]",Oe="[object Float64Array]",we="[object Int8Array]",he="[object Int16Array]",Fe="[object Int32Array]",Ce="[object Uint8Array]",Ee="[object Uint8ClampedArray]",Be="[object Uint16Array]",Me="[object Uint32Array]";function xe(e,t,n){var o=e.constructor;switch(t){case Se:return M(e);case ue:case Te:return new o(+e);case me:return be(e,n);case Ie:case Oe:case we:case he:case Fe:case Ce:case Ee:case Be:case Me:return Q(e,n);case le:return new o;case je:case de:return new o(e);case pe:return ge(e);case Ae:return new o;case $e:return ye(e)}}var Le="[object Map]";function Ue(e){return B(e)&&j(e)==Le}var w=u&&u.isMap,Pe=w?E(w):Ue;const Ge=Pe;var De="[object Set]";function _e(e){return B(e)&&j(e)==De}var h=u&&u.isSet,Ne=h?E(h):_e;const Ke=Ne;var Re=1,ve=2,He=4,L="[object Arguments]",Je="[object Array]",We="[object Boolean]",Ye="[object Date]",qe="[object Error]",U="[object Function]",Qe="[object GeneratorFunction]",Ve="[object Map]",Xe="[object Number]",P="[object Object]",Ze="[object RegExp]",ke="[object Set]",ze="[object String]",et="[object Symbol]",tt="[object WeakMap]",rt="[object ArrayBuffer]",nt="[object DataView]",at="[object Float32Array]",ot="[object Float64Array]",st="[object Int8Array]",ct="[object Int16Array]",it="[object Int32Array]",bt="[object Uint8Array]",ft="[object Uint8ClampedArray]",gt="[object Uint16Array]",yt="[object Uint32Array]",r={};r[L]=r[Je]=r[rt]=r[nt]=r[We]=r[Ye]=r[at]=r[ot]=r[st]=r[ct]=r[it]=r[Ve]=r[Xe]=r[P]=r[Ze]=r[ke]=r[ze]=r[et]=r[bt]=r[ft]=r[gt]=r[yt]=!0;r[qe]=r[U]=r[tt]=!1;function l(e,t,n,o,f,s){var a,g=t&Re,y=t&ve,G=t&He;if(n&&(a=f?n(e,o,f,s):n(e)),a!==void 0)return a;if(!J(e))return e;var A=W(e);if(A){if(a=ie(e),!g)return V(e,a)}else{var b=j(e),d=b==U||b==Qe;if(R(e))return X(e,g);if(b==P||b==L||d&&!f){if(a=y||d?{}:Z(e),!g)return y?ae(e,ee(a,e)):te(e,z(a,e))}else{if(!r[b])return f?e:{};a=xe(e,b,g)}}s||(s=new v);var $=s.get(e);if($)return $;s.set(e,a),Ke(e)?e.forEach(function(c){a.add(l(c,t,n,c,e,s))}):Ge(e)&&e.forEach(function(c,i){a.set(i,l(c,t,n,i,e,s))});var D=G?y?oe:H:y?p:F,S=A?void 0:D(e);return k(S||e,function(c,i){S&&(i=c,c=e[i]),Y(a,i,l(c,t,n,i,e,s))}),a}export{l as b};
