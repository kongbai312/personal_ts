import{ap as fe,o as te,a3 as me,W as pe,x as W,ac as ve,P as ye,i as x,aq as ge,ar as se,M as Q,U as X,as as he,K as be,at as Ce,L as we,au as U,l as G,a0 as Y,d as P,z as B,r as w,X as Ee,N as _e,v as Ie,O as Z,q as L,b as M,c as q,e as O,C as _,f as o,D as ke,w as C,j,av as De,E as Se,F as K,aw as ae,k as ne,ax as Me,ay as Te,az as Be,s as T,aA as Le,aB as $e,a6 as Ae,h as Fe,$ as J,ai as Oe,V as Pe,A as ze,m as Ne,al as Re,G as Ve,T as qe,H as Ye,I as Ue,p as He,g as We,_ as Xe}from"./index-0fd51d52.js";import{E as je}from"./el-image-viewer-c39134ac.js";import{P as H}from"./vnode-fcfcbcd7.js";import{F as Ke,i as xe,E as Ge}from"./focus-trap-cc64eb8c.js";import{U as le,u as ee}from"./index-a4ce7e26.js";import{g as Qe}from"./scroll-7b3bea3e.js";import{u as oe}from"./index-0692bdcf.js";const Ze=(...e)=>t=>{e.forEach(n=>{fe(n)?n(t):n.value=t})},Je=(e,t,n)=>{let u={offsetX:0,offsetY:0};const s=l=>{const m=l.clientX,d=l.clientY,{offsetX:f,offsetY:v}=u,y=e.value.getBoundingClientRect(),c=y.left,p=y.top,$=y.width,z=y.height,N=document.documentElement.clientWidth,A=document.documentElement.clientHeight,R=-c+f,V=-p+v,F=N-c-$+f,I=A-p-z+v,E=k=>{const a=Math.min(Math.max(f+k.clientX-m,R),F),b=Math.min(Math.max(v+k.clientY-d,V),I);u={offsetX:a,offsetY:b},e.value&&(e.value.style.transform=`translate(${W(a)}, ${W(b)})`)},h=()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",h)},r=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",s)},i=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",s)};te(()=>{me(()=>{n.value?r():i()})}),pe(()=>{i()})},eo=(e,t={})=>{ve(e)||ye("[useLockscreen]","You need to pass a ref param to this function");const n=t.ns||x("popup"),u=ge(()=>n.bm("parent","hidden"));if(!se||Q(document.body,u.value))return;let s=0,r=!1,i="0";const l=()=>{setTimeout(()=>{we(document==null?void 0:document.body,u.value),r&&document&&(document.body.style.width=i)},200)};X(e,m=>{if(!m){l();return}r=!Q(document.body,u.value),r&&(i=document.body.style.width),s=Qe(n.namespace.value);const d=document.documentElement.clientHeight<document.body.scrollHeight,f=he(document.body,"overflowY");s>0&&(d||f==="scroll")&&r&&(document.body.style.width=`calc(100% - ${s}px)`),be(document.body,u.value)}),Ce(()=>l())},ie=e=>{if(!e)return{onClick:U,onMousedown:U,onMouseup:U};let t=!1,n=!1;return{onClick:i=>{t&&n&&e(i),t=n=!1},onMousedown:i=>{t=i.target===i.currentTarget},onMouseup:i=>{n=i.target===i.currentTarget}}},oo=G({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:Y([String,Array,Object])},zIndex:{type:Y([String,Number])}}),to={click:e=>e instanceof MouseEvent},so="overlay";var ao=P({name:"ElOverlay",props:oo,emits:to,setup(e,{slots:t,emit:n}){const u=x(so),s=m=>{n("click",m)},{onClick:r,onMousedown:i,onMouseup:l}=ie(e.customMaskEvent?void 0:s);return()=>e.mask?B("div",{class:[u.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:r,onMousedown:i,onMouseup:l},[w(t,"default")],H.STYLE|H.CLASS|H.PROPS,["onClick","onMouseup","onMousedown"]):Ee("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[w(t,"default")])}});const no=ao,ce=Symbol("dialogInjectionKey"),re=G({center:Boolean,alignCenter:Boolean,closeIcon:{type:_e},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),lo={close:()=>!0},io=["aria-level"],co=["aria-label"],ro=["id"],uo=P({name:"ElDialogContent"}),fo=P({...uo,props:re,emits:lo,setup(e){const t=e,{t:n}=Ie(),{Close:u}=Me,{dialogRef:s,headerRef:r,bodyId:i,ns:l,style:m}=Z(ce),{focusTrapRef:d}=Z(Ke),f=L(()=>[l.b(),l.is("fullscreen",t.fullscreen),l.is("draggable",t.draggable),l.is("align-center",t.alignCenter),{[l.m("center")]:t.center},t.customClass]),v=Ze(d,s),y=L(()=>t.draggable);return Je(s,r,y),(c,p)=>(M(),q("div",{ref:o(v),class:_(o(f)),style:ae(o(m)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:r,class:_(o(l).e("header"))},[w(c.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":c.ariaLevel,class:_(o(l).e("title"))},ke(c.title),11,io)]),c.showClose?(M(),q("button",{key:0,"aria-label":o(n)("el.dialog.close"),class:_(o(l).e("headerbtn")),type:"button",onClick:p[0]||(p[0]=$=>c.$emit("close"))},[B(o(Se),{class:_(o(l).e("close"))},{default:C(()=>[(M(),j(De(c.closeIcon||o(u))))]),_:1},8,["class"])],10,co)):K("v-if",!0)],2),O("div",{id:o(i),class:_(o(l).e("body"))},[w(c.$slots,"default")],10,ro),c.$slots.footer?(M(),q("footer",{key:0,class:_(o(l).e("footer"))},[w(c.$slots,"footer")],2)):K("v-if",!0)],6))}});var mo=ne(fo,[["__file","dialog-content.vue"]]);const po=G({...re,appendToBody:Boolean,appendTo:{type:Y(String),default:"body"},beforeClose:{type:Y(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),vo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[le]:e=>Te(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},yo=(e,t)=>{var n;const s=Fe().emit,{nextZIndex:r}=Be();let i="";const l=ee(),m=ee(),d=T(!1),f=T(!1),v=T(!1),y=T((n=e.zIndex)!=null?n:r());let c,p;const $=Le("namespace",$e),z=L(()=>{const g={},S=`--${$.value}-dialog`;return e.fullscreen||(e.top&&(g[`${S}-margin-top`]=e.top),e.width&&(g[`${S}-width`]=W(e.width))),g}),N=L(()=>e.alignCenter?{display:"flex"}:{});function A(){s("opened")}function R(){s("closed"),s(le,!1),e.destroyOnClose&&(v.value=!1)}function V(){s("close")}function F(){p==null||p(),c==null||c(),e.openDelay&&e.openDelay>0?{stop:c}=J(()=>k(),e.openDelay):k()}function I(){c==null||c(),p==null||p(),e.closeDelay&&e.closeDelay>0?{stop:p}=J(()=>a(),e.closeDelay):a()}function E(){function g(S){S||(f.value=!0,d.value=!1)}e.beforeClose?e.beforeClose(g):I()}function h(){e.closeOnClickModal&&E()}function k(){se&&(d.value=!0)}function a(){d.value=!1}function b(){s("openAutoFocus")}function D(){s("closeAutoFocus")}function ue(g){var S;((S=g.detail)==null?void 0:S.focusReason)==="pointer"&&g.preventDefault()}e.lockScroll&&eo(d);function de(){e.closeOnPressEscape&&E()}return X(()=>e.modelValue,g=>{g?(f.value=!1,F(),v.value=!0,y.value=xe(e.zIndex)?r():y.value++,Ae(()=>{s("open"),t.value&&(t.value.scrollTop=0)})):d.value&&I()}),X(()=>e.fullscreen,g=>{t.value&&(g?(i=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=i)}),te(()=>{e.modelValue&&(d.value=!0,v.value=!0,F())}),{afterEnter:A,afterLeave:R,beforeLeave:V,handleClose:E,onModalClick:h,close:I,doClose:a,onOpenAutoFocus:b,onCloseAutoFocus:D,onCloseRequested:de,onFocusoutPrevented:ue,titleId:l,bodyId:m,closed:f,style:z,overlayDialogStyle:N,rendered:v,visible:d,zIndex:y}},go=["aria-label","aria-labelledby","aria-describedby"],ho=P({name:"ElDialog",inheritAttrs:!1}),bo=P({...ho,props:po,emits:vo,setup(e,{expose:t}){const n=e,u=Oe();oe({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},L(()=>!!u.title)),oe({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},L(()=>!!n.customClass));const s=x("dialog"),r=T(),i=T(),l=T(),{visible:m,titleId:d,bodyId:f,style:v,overlayDialogStyle:y,rendered:c,zIndex:p,afterEnter:$,afterLeave:z,beforeLeave:N,handleClose:A,onModalClick:R,onOpenAutoFocus:V,onCloseAutoFocus:F,onCloseRequested:I,onFocusoutPrevented:E}=yo(n,r);Pe(ce,{dialogRef:r,headerRef:i,bodyId:f,ns:s,rendered:c,style:v});const h=ie(R),k=L(()=>n.draggable&&!n.fullscreen);return t({visible:m,dialogContentRef:l}),(a,b)=>(M(),j(Ye,{to:a.appendTo,disabled:a.appendTo!=="body"?!1:!a.appendToBody},[B(qe,{name:"dialog-fade",onAfterEnter:o($),onAfterLeave:o(z),onBeforeLeave:o(N),persisted:""},{default:C(()=>[ze(B(o(no),{"custom-mask-event":"",mask:a.modal,"overlay-class":a.modalClass,"z-index":o(p)},{default:C(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":a.title||void 0,"aria-labelledby":a.title?void 0:o(d),"aria-describedby":o(f),class:_(`${o(s).namespace.value}-overlay-dialog`),style:ae(o(y)),onClick:b[0]||(b[0]=(...D)=>o(h).onClick&&o(h).onClick(...D)),onMousedown:b[1]||(b[1]=(...D)=>o(h).onMousedown&&o(h).onMousedown(...D)),onMouseup:b[2]||(b[2]=(...D)=>o(h).onMouseup&&o(h).onMouseup(...D))},[B(o(Ge),{loop:"",trapped:o(m),"focus-start-el":"container",onFocusAfterTrapped:o(V),onFocusAfterReleased:o(F),onFocusoutPrevented:o(E),onReleaseRequested:o(I)},{default:C(()=>[o(c)?(M(),j(mo,Ne({key:0,ref_key:"dialogContentRef",ref:l},a.$attrs,{"custom-class":a.customClass,center:a.center,"align-center":a.alignCenter,"close-icon":a.closeIcon,draggable:o(k),fullscreen:a.fullscreen,"show-close":a.showClose,title:a.title,"aria-level":a.headerAriaLevel,onClose:o(A)}),Re({header:C(()=>[a.$slots.title?w(a.$slots,"title",{key:1}):w(a.$slots,"header",{key:0,close:o(A),titleId:o(d),titleClass:o(s).e("title")})]),default:C(()=>[w(a.$slots,"default")]),_:2},[a.$slots.footer?{name:"footer",fn:C(()=>[w(a.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,go)]),_:3},8,["mask","overlay-class","z-index"]),[[Ve,o(m)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Co=ne(bo,[["__file","dialog.vue"]]);const wo=Ue(Co);const Eo=""+new URL("wechat-8ba79a1e.jpg",import.meta.url).href,_o=""+new URL("qq-2b03b122.jpg",import.meta.url).href,Io=e=>(He("data-v-5086d833"),e=e(),We(),e),ko=Io(()=>O("span",{class:"contactDialog_header"},"添加作者联系",-1)),Do={class:"contactDialog_container"},So=P({__name:"pr_contactDialog",props:{activeIcon:{default:"qq"},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const n=t,u=s=>{n("update:modelValue",!1),s()};return(s,r)=>{const i=je,l=wo;return M(),q("div",null,[B(l,{modelValue:s.modelValue,class:"contactDialog","show-close":!1,center:"","before-close":u},{header:C(()=>[ko]),default:C(()=>[O("div",Do,[B(i,{src:s.activeIcon&&s.activeIcon==="qq"?o(_o):o(Eo),class:"wechatImg",fit:"contain"},null,8,["src"])])]),_:1},8,["modelValue"])])}}});const Oo=Xe(So,[["__scopeId","data-v-5086d833"]]);export{no as E,Oo as _,vo as a,wo as b,po as d,yo as u};
