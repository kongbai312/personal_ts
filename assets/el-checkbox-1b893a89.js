import{b6 as Q,b8 as X,Y as W,aI as Y,aB as O,O as z,q as k,aM as P,U as _,b1 as ee,a8 as le,$ as ae,s as T,am as N,bf as A,a6 as pe,bE as Z,n as $,d as L,l as te,h as R,b as y,i as ne,w as oe,e as H,B as x,f as t,z as F,c as V,af as D,A as w,c9 as G,r as j,Z as ke,ab as se,C as ue,D as M,ay as ie,j as K,az as he,k as ge,a1 as Ce,V as xe,ca as ye,aO as Ve,I as Se,ac as re}from"./index-14bc0a0e.js";import{U}from"./index-fb887b28.js";import{a as Le,u as J}from"./use-form-common-props-1589159e.js";import{u as q,a as de}from"./use-form-item-2eb2aa5e.js";import{i as Be}from"./isEqual-60a6a73d.js";const be={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Q,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...X(["ariaControls"])},ce={[U]:e=>W(e)||Y(e)||O(e),change:e=>W(e)||Y(e)||O(e)},B=Symbol("checkboxGroupContextKey"),Ee=({model:e,isChecked:c})=>{const d=z(B,void 0),n=k(()=>{var b,v;const o=(b=d==null?void 0:d.max)==null?void 0:b.value,f=(v=d==null?void 0:d.min)==null?void 0:v.value;return!P(o)&&e.value.length>=o&&!c.value||!P(f)&&e.value.length<=f&&c.value});return{isDisabled:Le(k(()=>(d==null?void 0:d.disabled.value)||n.value)),isLimitDisabled:n}},Ie=(e,{model:c,isLimitExceeded:d,hasOwnLabel:n,isDisabled:m,isLabeledByFormItem:b})=>{const v=z(B,void 0),{formItem:o}=q(),{emit:f}=ae();function r(l){var u,h,i,a;return[!0,e.trueValue,e.trueLabel].includes(l)?(h=(u=e.trueValue)!=null?u:e.trueLabel)!=null?h:!0:(a=(i=e.falseValue)!=null?i:e.falseLabel)!=null?a:!1}function s(l,u){f("change",r(l),u)}function p(l){if(d.value)return;const u=l.target;f("change",r(u.checked),l)}async function g(l){d.value||!n.value&&!m.value&&b.value&&(l.composedPath().some(i=>i.tagName==="LABEL")||(c.value=r([!1,e.falseValue,e.falseLabel].includes(c.value)),await le(),s(c.value,l)))}const S=k(()=>(v==null?void 0:v.validateEvent)||e.validateEvent);return _(()=>e.modelValue,()=>{S.value&&(o==null||o.validate("change").catch(l=>ee()))}),{handleChange:p,onClickRoot:g}},$e=e=>{const c=T(!1),{emit:d}=ae(),n=z(B,void 0),m=k(()=>P(n)===!1),b=T(!1),v=k({get(){var o,f;return m.value?(o=n==null?void 0:n.modelValue)==null?void 0:o.value:(f=e.modelValue)!=null?f:c.value},set(o){var f,r;m.value&&N(o)?(b.value=((f=n==null?void 0:n.max)==null?void 0:f.value)!==void 0&&o.length>(n==null?void 0:n.max.value)&&o.length>v.value.length,b.value===!1&&((r=n==null?void 0:n.changeEvent)==null||r.call(n,o))):(d(U,o),c.value=o)}});return{model:v,isGroup:m,isLimitExceeded:b}},Ne=(e,c,{model:d})=>{const n=z(B,void 0),m=T(!1),b=k(()=>A(e.value)?e.label:e.value),v=k(()=>{const s=d.value;return O(s)?s:N(s)?pe(b.value)?s.map(Z).some(p=>Be(p,b.value)):s.map(Z).includes(b.value):s!=null?s===e.trueValue||s===e.trueLabel:!!s}),o=J(k(()=>{var s;return(s=n==null?void 0:n.size)==null?void 0:s.value}),{prop:!0}),f=J(k(()=>{var s;return(s=n==null?void 0:n.size)==null?void 0:s.value})),r=k(()=>!!c.default||!A(b.value));return{checkboxButtonSize:o,isChecked:v,isFocused:m,checkboxSize:f,hasOwnLabel:r,actualValue:b}},ve=(e,c)=>{const{formItem:d}=q(),{model:n,isGroup:m,isLimitExceeded:b}=$e(e),{isFocused:v,isChecked:o,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:s,actualValue:p}=Ne(e,c,{model:n}),{isDisabled:g}=Ee({model:n,isChecked:o}),{inputId:S,isLabeledByFormItem:l}=de(e,{formItemContext:d,disableIdGeneration:s,disableIdManagement:m}),{handleChange:u,onClickRoot:h}=Ie(e,{model:n,isLimitExceeded:b,hasOwnLabel:s,isDisabled:g,isLabeledByFormItem:l});return(()=>{function a(){var E,I;N(n.value)&&!n.value.includes(p.value)?n.value.push(p.value):n.value=(I=(E=e.trueValue)!=null?E:e.trueLabel)!=null?I:!0}e.checked&&a()})(),$({from:"controls",replacement:"aria-controls",version:"2.8.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!e.controls)),$({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>m.value&&A(e.value))),$({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!e.trueLabel)),$({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!e.falseLabel)),{inputId:S,isLabeledByFormItem:l,isChecked:o,isDisabled:g,isFocused:v,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:s,model:n,actualValue:p,handleChange:u,onClickRoot:h}},ze=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],Fe=["id","indeterminate","disabled","value","name","tabindex"],De=L({name:"ElCheckbox"}),we=L({...De,props:be,emits:ce,setup(e){const c=e,d=te(),{inputId:n,isLabeledByFormItem:m,isChecked:b,isDisabled:v,isFocused:o,checkboxSize:f,hasOwnLabel:r,model:s,actualValue:p,handleChange:g,onClickRoot:S}=ve(c,d),l=R("checkbox"),u=k(()=>[l.b(),l.m(f.value),l.is("disabled",v.value),l.is("bordered",c.border),l.is("checked",b.value)]),h=k(()=>[l.e("input"),l.is("disabled",v.value),l.is("checked",b.value),l.is("indeterminate",c.indeterminate),l.is("focus",o.value)]);return(i,a)=>(y(),ne(ie(!t(r)&&t(m)?"span":"label"),{class:x(t(u)),"aria-controls":i.indeterminate?i.controls||i.ariaControls:null,onClick:t(S)},{default:oe(()=>{var E,I;return[H("span",{class:x(t(h))},[i.trueValue||i.falseValue||i.trueLabel||i.falseLabel?F((y(),V("input",{key:0,id:t(n),"onUpdate:modelValue":a[0]||(a[0]=C=>D(s)?s.value=C:null),class:x(t(l).e("original")),type:"checkbox",indeterminate:i.indeterminate,name:i.name,tabindex:i.tabindex,disabled:t(v),"true-value":(E=i.trueValue)!=null?E:i.trueLabel,"false-value":(I=i.falseValue)!=null?I:i.falseLabel,onChange:a[1]||(a[1]=(...C)=>t(g)&&t(g)(...C)),onFocus:a[2]||(a[2]=C=>o.value=!0),onBlur:a[3]||(a[3]=C=>o.value=!1),onClick:a[4]||(a[4]=w(()=>{},["stop"]))},null,42,ze)),[[G,t(s)]]):F((y(),V("input",{key:1,id:t(n),"onUpdate:modelValue":a[5]||(a[5]=C=>D(s)?s.value=C:null),class:x(t(l).e("original")),type:"checkbox",indeterminate:i.indeterminate,disabled:t(v),value:t(p),name:i.name,tabindex:i.tabindex,onChange:a[6]||(a[6]=(...C)=>t(g)&&t(g)(...C)),onFocus:a[7]||(a[7]=C=>o.value=!0),onBlur:a[8]||(a[8]=C=>o.value=!1),onClick:a[9]||(a[9]=w(()=>{},["stop"]))},null,42,Fe)),[[G,t(s)]]),H("span",{class:x(t(l).e("inner"))},null,2)],2),t(r)?(y(),V("span",{key:0,class:x(t(l).e("label"))},[j(i.$slots,"default"),i.$slots.default?M("v-if",!0):(y(),V(ke,{key:0},[se(ue(i.label),1)],64))],2)):M("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var Ge=K(we,[["__file","checkbox.vue"]]);const Ue=["name","tabindex","disabled","true-value","false-value"],Oe=["name","tabindex","disabled","value"],Pe=L({name:"ElCheckboxButton"}),Te=L({...Pe,props:be,emits:ce,setup(e){const c=e,d=te(),{isFocused:n,isChecked:m,isDisabled:b,checkboxButtonSize:v,model:o,actualValue:f,handleChange:r}=ve(c,d),s=z(B,void 0),p=R("checkbox"),g=k(()=>{var l,u,h,i;const a=(u=(l=s==null?void 0:s.fill)==null?void 0:l.value)!=null?u:"";return{backgroundColor:a,borderColor:a,color:(i=(h=s==null?void 0:s.textColor)==null?void 0:h.value)!=null?i:"",boxShadow:a?`-1px 0 0 0 ${a}`:void 0}}),S=k(()=>[p.b("button"),p.bm("button",v.value),p.is("disabled",b.value),p.is("checked",m.value),p.is("focus",n.value)]);return(l,u)=>{var h,i;return y(),V("label",{class:x(t(S))},[l.trueValue||l.falseValue||l.trueLabel||l.falseLabel?F((y(),V("input",{key:0,"onUpdate:modelValue":u[0]||(u[0]=a=>D(o)?o.value=a:null),class:x(t(p).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:t(b),"true-value":(h=l.trueValue)!=null?h:l.trueLabel,"false-value":(i=l.falseValue)!=null?i:l.falseLabel,onChange:u[1]||(u[1]=(...a)=>t(r)&&t(r)(...a)),onFocus:u[2]||(u[2]=a=>n.value=!0),onBlur:u[3]||(u[3]=a=>n.value=!1),onClick:u[4]||(u[4]=w(()=>{},["stop"]))},null,42,Ue)),[[G,t(o)]]):F((y(),V("input",{key:1,"onUpdate:modelValue":u[5]||(u[5]=a=>D(o)?o.value=a:null),class:x(t(p).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:t(b),value:t(f),onChange:u[6]||(u[6]=(...a)=>t(r)&&t(r)(...a)),onFocus:u[7]||(u[7]=a=>n.value=!0),onBlur:u[8]||(u[8]=a=>n.value=!1),onClick:u[9]||(u[9]=w(()=>{},["stop"]))},null,42,Oe)),[[G,t(o)]]),l.$slots.default||l.label?(y(),V("span",{key:2,class:x(t(p).be("button","inner")),style:he(t(m)?t(g):void 0)},[j(l.$slots,"default",{},()=>[se(ue(l.label),1)])],6)):M("v-if",!0)],2)}}});var me=K(Te,[["__file","checkbox-button.vue"]]);const Ae=ge({modelValue:{type:Ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Q,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...X(["ariaLabel"])}),Me={[U]:e=>N(e),change:e=>N(e)},Re=L({name:"ElCheckboxGroup"}),je=L({...Re,props:Ae,emits:Me,setup(e,{emit:c}){const d=e,n=R("checkbox"),{formItem:m}=q(),{inputId:b,isLabeledByFormItem:v}=de(d,{formItemContext:m}),o=async r=>{c(U,r),await le(),c("change",r)},f=k({get(){return d.modelValue},set(r){o(r)}});return xe(B,{...ye(Ve(d),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:o}),$({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-checkbox-group",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!d.label)),_(()=>d.modelValue,()=>{d.validateEvent&&(m==null||m.validate("change").catch(r=>ee()))}),(r,s)=>{var p;return y(),ne(ie(r.tag),{id:t(b),class:x(t(n).b("group")),role:"group","aria-label":t(v)?void 0:r.label||r.ariaLabel||"checkbox-group","aria-labelledby":t(v)?(p=t(m))==null?void 0:p.labelId:void 0},{default:oe(()=>[j(r.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var fe=K(je,[["__file","checkbox-group.vue"]]);const He=Se(Ge,{CheckboxButton:me,CheckboxGroup:fe});re(me);re(fe);export{He as E};