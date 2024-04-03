import{N as me,n as i,a5 as Q,bz as lt,bA as G,S as j,Z as Ve,j as ge,d as oe,h as ne,f as Oe,R as he,aN as nt,V as Qt,a7 as H,y as le,F as Ee,b,c as I,r as k,e as M,B as z,A as d,z as B,q as O,o as Te,a4 as U,C as $,ay as ve,ar as X,s as Xt,al as L,a6 as Yt,bB as Zt,b0 as Jt,at as xt,aL as _t,aH as el,a3 as tl,bC as Ie,I as ll,X as nl,k as ol,b4 as sl,a0 as fe,M as Je,b3 as al,P as il,bD as rl,af as ul,E as dl,U as ot,a9 as K,bE as cl,x as A,w as R,Y as xe,ad as _e,i as F,aE as te,aQ as pl,ax as we,bF as fl,H as vl,ab as st}from"./index-8ce67ff0.js";import{i as ml,u as bl,E as gl}from"./el-input-93e0b2b0.js";import{a as hl,E as Sl,C as yl}from"./el-popper-7f7758db.js";import{t as Cl,E as Ol}from"./index-2fc0f4e7.js";import{e as Il}from"./strings-11fef22b.js";import{i as be}from"./isEqual-9ed2f0da.js";import{u as at,U as W,C as it}from"./index-29923eeb.js";import{u as wl,a as Vl}from"./use-form-item-cad9d1c2.js";import{u as El}from"./use-form-common-props-6c5e2881.js";import{s as Tl}from"./scroll-7c191e2c.js";import{t as $l,d as Ml}from"./debounce-bc8addf0.js";import{b as Rl}from"./_baseIteratee-4f1044a2.js";var et=1/0,kl=17976931348623157e292;function Dl(e){if(!e)return e===0?e:0;if(e=$l(e),e===et||e===-et){var n=e<0?-1:1;return n*kl}return e===e?e:0}function Bl(e){var n=Dl(e),s=n%1;return n===n?s?n-s:n:0}function Ll(e,n,s,f){for(var r=e.length,v=s+(f?1:-1);f?v--:++v<r;)if(n(e[v],v,e))return v;return-1}var Nl=Math.max,Fl=Math.min;function Wl(e,n,s){var f=e==null?0:e.length;if(!f)return-1;var r=f-1;return s!==void 0&&(r=Bl(s),r=s<0?Nl(f+r,0):Fl(r,f-1)),Ll(e,Rl(n),r,!0)}const rt=Symbol("ElSelectGroup"),Se=Symbol("ElSelect");function zl(e,n){const s=me(Se),f=me(rt,{disabled:!1}),r=i(()=>s.props.multiple?u(s.props.modelValue,e.value):u([s.props.modelValue],e.value)),v=i(()=>{if(s.props.multiple){const m=s.props.modelValue||[];return!r.value&&m.length>=s.props.multipleLimit&&s.props.multipleLimit>0}else return!1}),l=i(()=>e.label||(Q(e.value)?"":e.value)),h=i(()=>e.value||e.label||""),c=i(()=>e.disabled||n.groupDisabled||v.value),S=Ve(),u=(m=[],g)=>{if(Q(e.value)){const a=s.props.valueKey;return m&&m.some(T=>lt(G(T,a))===G(g,a))}else return m&&m.includes(g)},E=()=>{!e.disabled&&!f.disabled&&(s.states.hoveringIndex=s.optionsArray.indexOf(S.proxy))},w=m=>{const g=new RegExp(Il(m),"i");n.visible=g.test(l.value)||e.created};return j(()=>l.value,()=>{!e.created&&!s.props.remote&&s.setSelected()}),j(()=>e.value,(m,g)=>{const{remote:a,valueKey:T}=s.props;if(be(m,g)||(s.onOptionDestroy(g,S.proxy),s.onOptionCreate(S.proxy)),!e.created&&!a){if(T&&Q(m)&&Q(g)&&m[T]===g[T])return;s.setSelected()}}),j(()=>f.disabled,()=>{n.groupDisabled=f.disabled},{immediate:!0}),{select:s,currentLabel:l,currentValue:h,itemSelected:r,isDisabled:c,hoverItem:E,updateOption:w}}const Pl=oe({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const n=ne("select"),s=at(),f=i(()=>[n.be("dropdown","item"),n.is("disabled",Oe(h)),n.is("selected",Oe(l)),n.is("hovering",Oe(w))]),r=he({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:v,itemSelected:l,isDisabled:h,select:c,hoverItem:S,updateOption:u}=zl(e,r),{visible:E,hover:w}=nt(r),m=Ve().proxy;c.onOptionCreate(m),Qt(()=>{const a=m.value,{selected:T}=c.states,se=(c.props.multiple?T:[T]).some(ae=>ae.value===m.value);H(()=>{c.states.cachedOptions.get(a)===m&&!se&&c.states.cachedOptions.delete(a)}),c.onOptionDestroy(a,m)});function g(){e.disabled!==!0&&r.groupDisabled!==!0&&c.handleOptionSelect(m)}return{ns:n,id:s,containerKls:f,currentLabel:v,itemSelected:l,isDisabled:h,select:c,hoverItem:S,updateOption:u,visible:E,hover:w,selectOptionClick:g,states:r}}}),Kl=["id","aria-disabled","aria-selected"];function Al(e,n,s,f,r,v){return le((b(),I("li",{id:e.id,class:d(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:n[0]||(n[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:n[1]||(n[1]=B((...l)=>e.selectOptionClick&&e.selectOptionClick(...l),["stop"]))},[k(e.$slots,"default",{},()=>[M("span",null,z(e.currentLabel),1)])],42,Kl)),[[Ee,e.visible]])}var $e=ge(Pl,[["render",Al],["__file","option.vue"]]);const Hl=oe({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=me(Se),n=ne("select"),s=i(()=>e.props.popperClass),f=i(()=>e.props.multiple),r=i(()=>e.props.fitInputWidth),v=O("");function l(){var h;v.value=`${(h=e.selectRef)==null?void 0:h.offsetWidth}px`}return Te(()=>{l(),U(e.selectRef,l)}),{ns:n,minWidth:v,popperClass:s,isMultiple:f,isFitInputWidth:r}}});function Ul(e,n,s,f,r,v){return b(),I("div",{class:d([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ve({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(b(),I("div",{key:0,class:d(e.ns.be("dropdown","header"))},[k(e.$slots,"header")],2)):$("v-if",!0),k(e.$slots,"default"),e.$slots.footer?(b(),I("div",{key:1,class:d(e.ns.be("dropdown","footer"))},[k(e.$slots,"footer")],2)):$("v-if",!0)],6)}var Gl=ge(Hl,[["render",Ul],["__file","select-dropdown.vue"]]);function jl(e){const n=O(!1);return{handleCompositionStart:()=>{n.value=!0},handleCompositionUpdate:v=>{const l=v.target.value,h=l[l.length-1]||"";n.value=!ml(h)},handleCompositionEnd:v=>{n.value&&(n.value=!1,X(e)&&e(v))}}}const ql=11,Ql=(e,n)=>{const{t:s}=Xt(),f=at(),r=ne("select"),v=ne("input"),l=he({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),h=O(null),c=O(null),S=O(null),u=O(null),E=O(null),w=O(null),m=O(null),g=O(null),a=O(null),T=O(null),Y=O(null),se=O(null),{wrapperRef:ae,isFocused:Me,handleFocus:dt,handleBlur:Re}=bl(E,{afterFocus(){e.automaticDropdown&&!C.value&&(C.value=!0,l.menuVisibleOnFocus=!0)},beforeBlur(t){var o,p;return((o=S.value)==null?void 0:o.isFocusInsideContent(t))||((p=u.value)==null?void 0:p.isFocusInsideContent(t))},afterBlur(){C.value=!1,l.menuVisibleOnFocus=!1}}),C=O(!1),Z=O(),{form:ke,formItem:J}=wl(),{inputId:ct}=Vl(e,{formItemContext:J}),ie=i(()=>e.disabled||(ke==null?void 0:ke.disabled)),pt=i(()=>V.value.some(t=>t.value==="")),ye=i(()=>e.multiple?L(e.modelValue)&&e.modelValue.length>0:!Yt(e.modelValue)&&(e.modelValue!==""||pt.value)),ft=i(()=>e.clearable&&!ie.value&&l.inputHovering&&ye.value),De=i(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),vt=i(()=>r.is("reverse",De.value&&C.value)),Be=i(()=>(J==null?void 0:J.validateState)||""),mt=i(()=>Zt[Be.value]),bt=i(()=>e.remote?300:0),Le=i(()=>e.loading?e.loadingText||s("el.select.loading"):e.remote&&!l.inputValue&&l.options.size===0?!1:e.filterable&&l.inputValue&&l.options.size>0&&x.value===0?e.noMatchText||s("el.select.noMatch"):l.options.size===0?e.noDataText||s("el.select.noData"):null),x=i(()=>V.value.filter(t=>t.visible).length),V=i(()=>{const t=Array.from(l.options.values()),o=[];return l.optionValues.forEach(p=>{const y=t.findIndex(N=>N.value===p);y>-1&&o.push(t[y])}),o.length>=t.length?o:t}),gt=i(()=>Array.from(l.cachedOptions.values())),ht=i(()=>{const t=V.value.filter(o=>!o.created).some(o=>o.currentLabel===l.inputValue);return e.filterable&&e.allowCreate&&l.inputValue!==""&&!t}),Ne=()=>{e.filterable&&X(e.filterMethod)||e.filterable&&e.remote&&X(e.remoteMethod)||V.value.forEach(t=>{var o;(o=t.updateOption)==null||o.call(t,l.inputValue)})},Fe=El(),St=i(()=>["small"].includes(Fe.value)?"small":"default"),yt=i({get(){return C.value&&Le.value!==!1},set(t){C.value=t}}),Ct=i(()=>L(e.modelValue)?e.modelValue.length===0&&!l.inputValue:e.filterable?!l.inputValue:!0),Ot=i(()=>{var t;const o=(t=e.placeholder)!=null?t:s("el.select.placeholder");return e.multiple||!ye.value?o:l.selectedLabel});j(()=>e.modelValue,(t,o)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(l.inputValue="",re("")),ue(),!be(t,o)&&e.validateEvent&&(J==null||J.validate("change").catch(p=>Jt()))},{flush:"post",deep:!0}),j(()=>C.value,t=>{t?re(l.inputValue):(l.inputValue="",l.previousQuery=null,l.isBeforeHide=!0),n("visible-change",t)}),j(()=>l.options.entries(),()=>{var t;if(!xt)return;const o=((t=h.value)==null?void 0:t.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!_t(e.modelValue)||!Array.from(o).includes(document.activeElement))&&ue(),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value&&We()},{flush:"post"}),j(()=>l.hoveringIndex,t=>{el(t)&&t>-1?Z.value=V.value[t]||{}:Z.value={},V.value.forEach(o=>{o.hover=Z.value===o})}),tl(()=>{l.isBeforeHide||Ne()});const re=t=>{l.previousQuery!==t&&(l.previousQuery=t,e.filterable&&X(e.filterMethod)?e.filterMethod(t):e.filterable&&e.remote&&X(e.remoteMethod)&&e.remoteMethod(t),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value?H(We):H(It))},We=()=>{const t=V.value.filter(y=>y.visible&&!y.disabled&&!y.states.groupDisabled),o=t.find(y=>y.created),p=t[0];l.hoveringIndex=qe(V.value,o||p)},ue=()=>{if(e.multiple)l.selectedLabel="";else{const o=ze(e.modelValue);l.selectedLabel=o.currentLabel,l.selected=o;return}const t=[];L(e.modelValue)&&e.modelValue.forEach(o=>{t.push(ze(o))}),l.selected=t},ze=t=>{let o;const p=Ie(t).toLowerCase()==="object",y=Ie(t).toLowerCase()==="null",N=Ie(t).toLowerCase()==="undefined";for(let P=l.cachedOptions.size-1;P>=0;P--){const D=gt.value[P];if(p?G(D.value,e.valueKey)===G(t,e.valueKey):D.value===t){o={value:t,currentLabel:D.currentLabel,isDisabled:D.isDisabled};break}}if(o)return o;const q=p?t.label:!y&&!N?t:"";return{value:t,currentLabel:q}},It=()=>{e.multiple?l.hoveringIndex=V.value.findIndex(t=>l.selected.some(o=>ee(o)===ee(t))):l.hoveringIndex=V.value.findIndex(t=>ee(t)===ee(l.selected))},wt=()=>{l.selectionWidth=c.value.getBoundingClientRect().width},Pe=()=>{l.calculatorWidth=w.value.getBoundingClientRect().width},Vt=()=>{l.collapseItemWidth=Y.value.getBoundingClientRect().width},Ce=()=>{var t,o;(o=(t=S.value)==null?void 0:t.updatePopper)==null||o.call(t)},Ke=()=>{var t,o;(o=(t=u.value)==null?void 0:t.updatePopper)==null||o.call(t)},Ae=()=>{l.inputValue.length>0&&!C.value&&(C.value=!0),re(l.inputValue)},He=t=>{if(l.inputValue=t.target.value,e.remote)Ue();else return Ae()},Ue=Ml(()=>{Ae()},bt.value),_=t=>{be(e.modelValue,t)||n(it,t)},Et=t=>Wl(t,o=>!l.disabledOptions.has(o)),Tt=t=>{if(e.multiple&&t.code!==ll.delete&&t.target.value.length<=0){const o=e.modelValue.slice(),p=Et(o);if(p<0)return;o.splice(p,1),n(W,o),_(o)}},$t=(t,o)=>{const p=l.selected.indexOf(o);if(p>-1&&!ie.value){const y=e.modelValue.slice();y.splice(p,1),n(W,y),_(y),n("remove-tag",o.value)}t.stopPropagation(),ce()},Ge=t=>{t.stopPropagation();const o=e.multiple?[]:void 0;if(e.multiple)for(const p of l.selected)p.isDisabled&&o.push(p.value);n(W,o),_(o),l.hoveringIndex=-1,C.value=!1,n("clear"),ce()},je=t=>{if(e.multiple){const o=(e.modelValue||[]).slice(),p=qe(o,t.value);p>-1?o.splice(p,1):(e.multipleLimit<=0||o.length<e.multipleLimit)&&o.push(t.value),n(W,o),_(o),t.created&&re(""),e.filterable&&!e.reserveKeyword&&(l.inputValue="")}else n(W,t.value),_(t.value),C.value=!1;ce(),!C.value&&H(()=>{de(t)})},qe=(t=[],o)=>{if(!Q(o))return t.indexOf(o);const p=e.valueKey;let y=-1;return t.some((N,q)=>lt(G(N,p))===G(o,p)?(y=q,!0):!1),y},de=t=>{var o,p,y,N,q;const pe=L(t)?t[0]:t;let P=null;if(pe!=null&&pe.value){const D=V.value.filter(Ze=>Ze.value===pe.value);D.length>0&&(P=D[0].$el)}if(S.value&&P){const D=(N=(y=(p=(o=S.value)==null?void 0:o.popperRef)==null?void 0:p.contentRef)==null?void 0:y.querySelector)==null?void 0:N.call(y,`.${r.be("dropdown","wrap")}`);D&&Tl(D,P)}(q=se.value)==null||q.handleScroll()},Mt=t=>{l.options.set(t.value,t),l.cachedOptions.set(t.value,t),t.disabled&&l.disabledOptions.set(t.value,t)},Rt=(t,o)=>{l.options.get(t)===o&&l.options.delete(t)},{handleCompositionStart:kt,handleCompositionUpdate:Dt,handleCompositionEnd:Bt}=jl(t=>He(t)),Lt=i(()=>{var t,o;return(o=(t=S.value)==null?void 0:t.popperRef)==null?void 0:o.contentRef}),Nt=()=>{H(()=>de(l.selected))},ce=()=>{var t;(t=E.value)==null||t.focus()},Ft=()=>{Qe()},Wt=t=>{Ge(t)},Qe=t=>{if(C.value=!1,Me.value){const o=new FocusEvent("focus",t);H(()=>Re(o))}},zt=()=>{l.inputValue.length>0?l.inputValue="":C.value=!1},Xe=()=>{ie.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:C.value=!C.value)},Pt=()=>{C.value?V.value[l.hoveringIndex]&&je(V.value[l.hoveringIndex]):Xe()},ee=t=>Q(t.value)?G(t.value,e.valueKey):t.value,Kt=i(()=>V.value.filter(t=>t.visible).every(t=>t.disabled)),At=i(()=>e.multiple?e.collapseTags?l.selected.slice(0,e.maxCollapseTags):l.selected:[]),Ht=i(()=>e.multiple?e.collapseTags?l.selected.slice(e.maxCollapseTags):[]:[]),Ye=t=>{if(!C.value){C.value=!0;return}if(!(l.options.size===0||x.value===0)&&!Kt.value){t==="next"?(l.hoveringIndex++,l.hoveringIndex===l.options.size&&(l.hoveringIndex=0)):t==="prev"&&(l.hoveringIndex--,l.hoveringIndex<0&&(l.hoveringIndex=l.options.size-1));const o=V.value[l.hoveringIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Ye(t),H(()=>de(Z.value))}},Ut=()=>{if(!c.value)return 0;const t=window.getComputedStyle(c.value);return Number.parseFloat(t.gap||"6px")},Gt=i(()=>{const t=Ut();return{maxWidth:`${Y.value&&e.maxCollapseTags===1?l.selectionWidth-l.collapseItemWidth-t:l.selectionWidth}px`}}),jt=i(()=>({maxWidth:`${l.selectionWidth}px`})),qt=i(()=>({width:`${Math.max(l.calculatorWidth,ql)}px`}));return e.multiple&&!L(e.modelValue)&&n(W,[]),!e.multiple&&L(e.modelValue)&&n(W,""),U(c,wt),U(w,Pe),U(a,Ce),U(ae,Ce),U(T,Ke),U(Y,Vt),Te(()=>{ue()}),{inputId:ct,contentId:f,nsSelect:r,nsInput:v,states:l,isFocused:Me,expanded:C,optionsArray:V,hoverOption:Z,selectSize:Fe,filteredOptionsCount:x,resetCalculatorWidth:Pe,updateTooltip:Ce,updateTagTooltip:Ke,debouncedOnInputChange:Ue,onInput:He,deletePrevTag:Tt,deleteTag:$t,deleteSelected:Ge,handleOptionSelect:je,scrollToOption:de,hasModelValue:ye,shouldShowPlaceholder:Ct,currentPlaceholder:Ot,showClose:ft,iconComponent:De,iconReverse:vt,validateState:Be,validateIcon:mt,showNewOption:ht,updateOptions:Ne,collapseTagSize:St,setSelected:ue,selectDisabled:ie,emptyText:Le,handleCompositionStart:kt,handleCompositionUpdate:Dt,handleCompositionEnd:Bt,onOptionCreate:Mt,onOptionDestroy:Rt,handleMenuEnter:Nt,handleFocus:dt,focus:ce,blur:Ft,handleBlur:Re,handleClearClick:Wt,handleClickOutside:Qe,handleEsc:zt,toggleMenu:Xe,selectOption:Pt,getValueKey:ee,navigateOptions:Ye,dropdownMenuVisible:yt,showTagList:At,collapseTagList:Ht,tagStyle:Gt,collapseTagStyle:jt,inputStyle:qt,popperRef:Lt,inputRef:E,tooltipRef:S,tagTooltipRef:u,calculatorRef:w,prefixRef:m,suffixRef:g,selectRef:h,wrapperRef:ae,selectionRef:c,scrollbarRef:se,menuRef:a,tagMenuRef:T,collapseItemRef:Y}};var Xl=oe({name:"ElOptions",setup(e,{slots:n}){const s=me(Se);let f=[];return()=>{var r,v;const l=(r=n.default)==null?void 0:r.call(n),h=[];function c(S){L(S)&&S.forEach(u=>{var E,w,m,g;const a=(E=(u==null?void 0:u.type)||{})==null?void 0:E.name;a==="ElOptionGroup"?c(!nl(u.children)&&!L(u.children)&&X((w=u.children)==null?void 0:w.default)?(m=u.children)==null?void 0:m.default():u.children):a==="ElOption"?h.push((g=u.props)==null?void 0:g.value):L(u.children)&&c(u.children)})}return l.length&&c((v=l[0])==null?void 0:v.children),be(h,f)||(f=h,s&&(s.states.optionValues=h)),l}}});const Yl=ol({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:sl,effect:{type:fe(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:fe(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:hl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Je,default:al},fitInputWidth:Boolean,suffixIcon:{type:Je,default:il},tagType:{...Cl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:fe(String),values:rl,default:"bottom-start"},fallbackPlacements:{type:fe(Array),default:["bottom-start","top-start","right","left"]},ariaLabel:{type:String,default:void 0}}),tt="ElSelect",Zl=oe({name:tt,componentName:tt,components:{ElInput:gl,ElSelectMenu:Gl,ElOption:$e,ElOptions:Xl,ElTag:Ol,ElScrollbar:ul,ElTooltip:Sl,ElIcon:dl},directives:{ClickOutside:yl},props:Yl,emits:[W,it,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:n}){const s=Ql(e,n);return ot(Se,he({props:e,states:s.states,optionsArray:s.optionsArray,handleOptionSelect:s.handleOptionSelect,onOptionCreate:s.onOptionCreate,onOptionDestroy:s.onOptionDestroy,selectRef:s.selectRef,setSelected:s.setSelected})),{...s}}}),Jl=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],xl=["textContent"];function _l(e,n,s,f,r,v){const l=K("el-tag"),h=K("el-tooltip"),c=K("el-icon"),S=K("el-option"),u=K("el-options"),E=K("el-scrollbar"),w=K("el-select-menu"),m=cl("click-outside");return le((b(),I("div",{ref:"selectRef",class:d([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:n[16]||(n[16]=g=>e.states.inputHovering=!0),onMouseleave:n[17]||(n[17]=g=>e.states.inputHovering=!1),onClick:n[18]||(n[18]=B((...g)=>e.toggleMenu&&e.toggleMenu(...g),["prevent","stop"]))},[A(h,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:n[15]||(n[15]=g=>e.states.isBeforeHide=!1)},{default:R(()=>{var g;return[M("div",{ref:"wrapperRef",class:d([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(b(),I("div",{key:0,ref:"prefixRef",class:d(e.nsSelect.e("prefix"))},[k(e.$slots,"prefix")],2)):$("v-if",!0),M("div",{ref:"selectionRef",class:d([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?k(e.$slots,"tag",{key:0},()=>[(b(!0),I(xe,null,_e(e.showTagList,a=>(b(),I("div",{key:e.getValueKey(a),class:d(e.nsSelect.e("selected-item"))},[A(l,{closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.tagStyle),onClose:T=>e.deleteTag(T,a)},{default:R(()=>[M("span",{class:d(e.nsSelect.e("tags-text"))},z(a.currentLabel),3)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(b(),F(h,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:R(()=>[M("div",{ref:"collapseItemRef",class:d(e.nsSelect.e("selected-item"))},[A(l,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.collapseTagStyle)},{default:R(()=>[M("span",{class:d(e.nsSelect.e("tags-text"))}," + "+z(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:R(()=>[M("div",{ref:"tagMenuRef",class:d(e.nsSelect.e("selection"))},[(b(!0),I(xe,null,_e(e.collapseTagList,a=>(b(),I("div",{key:e.getValueKey(a),class:d(e.nsSelect.e("selected-item"))},[A(l,{class:"in-tooltip",closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:T=>e.deleteTag(T,a)},{default:R(()=>[M("span",{class:d(e.nsSelect.e("tags-text"))},z(a.currentLabel),3)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):$("v-if",!0)]):$("v-if",!0),e.selectDisabled?$("v-if",!0):(b(),I("div",{key:1,class:d([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[le(M("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":n[0]||(n[0]=a=>e.states.inputValue=a),type:"text",class:d([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ve(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((g=e.hoverOption)==null?void 0:g.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:n[1]||(n[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[2]||(n[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onKeydown:[n[3]||(n[3]=te(B(a=>e.navigateOptions("next"),["stop","prevent"]),["down"])),n[4]||(n[4]=te(B(a=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),n[5]||(n[5]=te(B((...a)=>e.handleEsc&&e.handleEsc(...a),["stop","prevent"]),["esc"])),n[6]||(n[6]=te(B((...a)=>e.selectOption&&e.selectOption(...a),["stop","prevent"]),["enter"])),n[7]||(n[7]=te(B((...a)=>e.deletePrevTag&&e.deletePrevTag(...a),["stop"]),["delete"]))],onCompositionstart:n[8]||(n[8]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionupdate:n[9]||(n[9]=(...a)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...a)),onCompositionend:n[10]||(n[10]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a)),onInput:n[11]||(n[11]=(...a)=>e.onInput&&e.onInput(...a)),onClick:n[12]||(n[12]=B((...a)=>e.toggleMenu&&e.toggleMenu(...a),["stop"]))},null,46,Jl),[[pl,e.states.inputValue]]),e.filterable?(b(),I("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:d(e.nsSelect.e("input-calculator")),textContent:z(e.states.inputValue)},null,10,xl)):$("v-if",!0)],2)),e.shouldShowPlaceholder?(b(),I("div",{key:2,class:d([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[M("span",null,z(e.currentPlaceholder),1)],2)):$("v-if",!0)],2),M("div",{ref:"suffixRef",class:d(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(b(),F(c,{key:0,class:d([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:R(()=>[(b(),F(we(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.showClose&&e.clearIcon?(b(),F(c,{key:1,class:d([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:R(()=>[(b(),F(we(e.clearIcon)))]),_:1},8,["class","onClick"])):$("v-if",!0),e.validateState&&e.validateIcon?(b(),F(c,{key:2,class:d([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:R(()=>[(b(),F(we(e.validateIcon)))]),_:1},8,["class"])):$("v-if",!0)],2)],2)]}),content:R(()=>[A(w,{ref:"menuRef"},{default:R(()=>[e.$slots.header?(b(),I("div",{key:0,class:d(e.nsSelect.be("dropdown","header")),onClick:n[13]||(n[13]=B(()=>{},["stop"]))},[k(e.$slots,"header")],2)):$("v-if",!0),le(A(E,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:d([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:R(()=>[e.showNewOption?(b(),F(S,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):$("v-if",!0),A(u,null,{default:R(()=>[k(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Ee,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(b(),I("div",{key:1,class:d(e.nsSelect.be("dropdown","loading"))},[k(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(b(),I("div",{key:2,class:d(e.nsSelect.be("dropdown","empty"))},[k(e.$slots,"empty",{},()=>[M("span",null,z(e.emptyText),1)])],2)):$("v-if",!0),e.$slots.footer?(b(),I("div",{key:3,class:d(e.nsSelect.be("dropdown","footer")),onClick:n[14]||(n[14]=B(()=>{},["stop"]))},[k(e.$slots,"footer")],2)):$("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[m,e.handleClickOutside,e.popperRef]])}var en=ge(Zl,[["render",_l],["__file","select.vue"]]);const tn=oe({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const n=ne("select"),s=O(null),f=Ve(),r=O([]);ot(rt,he({...nt(e)}));const v=i(()=>r.value.some(c=>c.visible===!0)),l=c=>{const S=[];return L(c.children)&&c.children.forEach(u=>{var E,w;u.type&&u.type.name==="ElOption"&&u.component&&u.component.proxy?S.push(u.component.proxy):(E=u.children)!=null&&E.length?S.push(...l(u)):(w=u.component)!=null&&w.subTree&&S.push(...l(u.component.subTree))}),S},h=()=>{r.value=l(f.subTree)};return Te(()=>{h()}),fl(s,h,{attributes:!0,subtree:!0,childList:!0}),{groupRef:s,visible:v,ns:n}}});function ln(e,n,s,f,r,v){return le((b(),I("ul",{ref:"groupRef",class:d(e.ns.be("group","wrap"))},[M("li",{class:d(e.ns.be("group","title"))},z(e.label),3),M("li",null,[M("ul",{class:d(e.ns.b("group"))},[k(e.$slots,"default")],2)])],2)),[[Ee,e.visible]])}var ut=ge(tn,[["render",ln],["__file","option-group.vue"]]);const bn=vl(en,{Option:$e,OptionGroup:ut}),gn=st($e);st(ut);export{gn as E,bn as a};