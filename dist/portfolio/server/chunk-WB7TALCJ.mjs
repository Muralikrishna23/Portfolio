import './polyfills.server.mjs';
import{$ as I4,A as p1,B as K1,C as j,D as Q1,E as P4,F as v,G as z,H as V,I as F4,J as E4,K as o1,L as k2,M as w2,N as T4,O as _2,P as D2,Q as P2,R as p,S as T,T as D1,U as b,W as O4,a as y4,b as A4,ba as F2,c as S4,ca as P1,d as k4,da as J,e as Y1,ea as Z4,f as A1,fa as E2,g as z1,ga as B4,h as t1,i as u1,ia as d1,j as A2,ja as K,k as x,ka as R4,l as n1,la as q4,m as S,n as Y,o as w4,oa as j4,p as _4,q as J1,r as S1,s as k1,sa as G4,t as D4,u as S2,v as N,va as U4,w as M,wa as W4,x as w1,xa as $4,y as _1,z as q}from"./chunk-FLEWBEAN.mjs";import{a as s,b as C,h as R}from"./chunk-5XUXGTUW.mjs";var Y4=()=>{},i4={},M3={},H3=null,V3={mark:Y4,measure:Y4};try{typeof window<"u"&&(i4=window),typeof document<"u"&&(M3=document),typeof MutationObserver<"u"&&(H3=MutationObserver),typeof performance<"u"&&(V3=performance)}catch{}var{userAgent:J4=""}=i4.navigator||{},c1=i4,H=M3,K4=H3,X1=V3,Y5=!!c1.document,W=!!H.documentElement&&!!H.head&&typeof H.addEventListener=="function"&&typeof H.createElement=="function",g3=~J4.indexOf("MSIE")||~J4.indexOf("Trident/"),g="classic",L3="duotone",k="sharp",w="sharp-duotone",t8=[g,L3,k,w],n8={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Q4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},o8=["kit"],r8=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,s8=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,l8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},f8={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},h8={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},m8={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},v8={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},z8={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},x3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},u8=["solid","regular","light","thin","duotone","brands"],b3=[1,2,3,4,5,6,7,8,9,10],p8=b3.concat([11,12,13,14,15,16,17,18,19,20]),F1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d8=[...Object.keys(m8),...u8,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",F1.GROUP,F1.SWAP_OPACITY,F1.PRIMARY,F1.SECONDARY].concat(b3.map(c=>"".concat(c,"x"))).concat(p8.map(c=>"w-".concat(c))),C8={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},M8={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},H8={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},X4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},G="___FONT_AWESOME___",R2=16,N3="fa",y3="svg-inline--fa",f1="data-fa-i2svg",q2="data-fa-pseudo-element",V8="data-fa-pseudo-element-pending",t4="data-prefix",n4="data-icon",c3="fontawesome-i2svg",g8="async",L8=["HTML","HEAD","STYLE","SCRIPT"],A3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),S3=[g,k,w];function B1(c){return new Proxy(c,{get(e,a){return a in e?e[a]:e[g]}})}var k3=s({},x3);k3[g]=s(s(s({},x3[g]),Q4.kit),Q4["kit-duotone"]);var s1=B1(k3),j2=s({},z8);j2[g]=s(s(s({},j2[g]),X4.kit),X4["kit-duotone"]);var I1=B1(j2),G2=s({},v8);G2[g]=s(s({},G2[g]),H8.kit);var l1=B1(G2),U2=s({},h8);U2[g]=s(s({},U2[g]),M8.kit);var x8=B1(U2),b8=r8,w3="fa-layers-text",N8=s8,y8=s({},n8),J5=B1(y8),A8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],T2=F1,H1=new Set;Object.keys(I1[g]).map(H1.add.bind(H1));Object.keys(I1[k]).map(H1.add.bind(H1));Object.keys(I1[w]).map(H1.add.bind(H1));var S8=[...o8,...d8],T1=c1.FontAwesomeConfig||{};function k8(c){var e=H.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function w8(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}H&&typeof H.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[a,i]=e,t=w8(k8(a));t!=null&&(T1[i]=t)});var _3={styleDefault:"solid",familyDefault:"classic",cssPrefix:N3,replacementClass:y3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};T1.familyPrefix&&(T1.cssPrefix=T1.familyPrefix);var V1=s(s({},_3),T1);V1.autoReplaceSvg||(V1.observeMutations=!1);var h={};Object.keys(_3).forEach(c=>{Object.defineProperty(h,c,{enumerable:!0,set:function(e){V1[c]=e,O1.forEach(a=>a(h))},get:function(){return V1[c]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(c){V1.cssPrefix=c,O1.forEach(e=>e(h))},get:function(){return V1.cssPrefix}});c1.FontAwesomeConfig=h;var O1=[];function _8(c){return O1.push(c),()=>{O1.splice(O1.indexOf(c),1)}}var Q=R2,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D8(c){if(!c||!W)return;let e=H.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let a=H.head.childNodes,i=null;for(let t=a.length-1;t>-1;t--){let n=a[t],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=n)}return H.head.insertBefore(e,i),c}var P8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z1(){let c=12,e="";for(;c-- >0;)e+=P8[Math.random()*62|0];return e}function g1(c){let e=[];for(let a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function o4(c){return c.classList?g1(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function D3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F8(c){return Object.keys(c||{}).reduce((e,a)=>e+"".concat(a,'="').concat(D3(c[a]),'" '),"").trim()}function t2(c){return Object.keys(c||{}).reduce((e,a)=>e+"".concat(a,": ").concat(c[a].trim(),";"),"")}function r4(c){return c.size!==O.size||c.x!==O.x||c.y!==O.y||c.rotate!==O.rotate||c.flipX||c.flipY}function E8(c){let{transform:e,containerWidth:a,iconWidth:i}=c,t={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),r="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(n," ").concat(o," ").concat(r)},f={transform:"translate(".concat(i/2*-1," -256)")};return{outer:t,inner:l,path:f}}function T8(c){let{transform:e,width:a=R2,height:i=R2,startCentered:t=!1}=c,n="";return t&&g3?n+="translate(".concat(e.x/Q-a/2,"em, ").concat(e.y/Q-i/2,"em) "):t?n+="translate(calc(-50% + ".concat(e.x/Q,"em), calc(-50% + ").concat(e.y/Q,"em)) "):n+="translate(".concat(e.x/Q,"em, ").concat(e.y/Q,"em) "),n+="scale(".concat(e.size/Q*(e.flipX?-1:1),", ").concat(e.size/Q*(e.flipY?-1:1),") "),n+="rotate(".concat(e.rotate,"deg) "),n}var O8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function P3(){let c=N3,e=y3,a=h.cssPrefix,i=h.replacementClass,t=O8;if(a!==c||i!==e){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),r=new RegExp("\\.".concat(e),"g");t=t.replace(n,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(r,".".concat(i))}return t}var a3=!1;function O2(){h.autoAddCss&&!a3&&(D8(P3()),a3=!0)}var I8={mixout(){return{dom:{css:P3,insertCss:O2}}},hooks(){return{beforeDOMElementCreation(){O2()},beforeI2svg(){O2()}}}},U=c1||{};U[G]||(U[G]={});U[G].styles||(U[G].styles={});U[G].hooks||(U[G].hooks={});U[G].shims||(U[G].shims=[]);var I=U[G],F3=[],E3=function(){H.removeEventListener("DOMContentLoaded",E3),e2=1,F3.map(c=>c())},e2=!1;W&&(e2=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),e2||H.addEventListener("DOMContentLoaded",E3));function Z8(c){W&&(e2?setTimeout(c,0):F3.push(c))}function R1(c){let{tag:e,attributes:a={},children:i=[]}=c;return typeof c=="string"?D3(c):"<".concat(e," ").concat(F8(a),">").concat(i.map(R1).join(""),"</").concat(e,">")}function e3(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var B8=function(e,a){return function(i,t,n,o){return e.call(a,i,t,n,o)}},I2=function(e,a,i,t){var n=Object.keys(e),o=n.length,r=t!==void 0?B8(a,t):a,l,f,m;for(i===void 0?(l=1,m=e[n[0]]):(l=0,m=i);l<o;l++)f=n[l],m=r(m,e[f],f,e);return m};function R8(c){let e=[],a=0,i=c.length;for(;a<i;){let t=c.charCodeAt(a++);if(t>=55296&&t<=56319&&a<i){let n=c.charCodeAt(a++);(n&64512)==56320?e.push(((t&1023)<<10)+(n&1023)+65536):(e.push(t),a--)}else e.push(t)}return e}function W2(c){let e=R8(c);return e.length===1?e[0].toString(16):null}function q8(c,e){let a=c.length,i=c.charCodeAt(e),t;return i>=55296&&i<=56319&&a>e+1&&(t=c.charCodeAt(e+1),t>=56320&&t<=57343)?(i-55296)*1024+t-56320+65536:i}function i3(c){return Object.keys(c).reduce((e,a)=>{let i=c[a];return!!i.icon?e[i.iconName]=i.icon:e[a]=i,e},{})}function $2(c,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:i=!1}=a,t=i3(e);typeof I.hooks.addPack=="function"&&!i?I.hooks.addPack(c,i3(e)):I.styles[c]=s(s({},I.styles[c]||{}),t),c==="fas"&&$2("fa",e)}var{styles:r1,shims:j8}=I,G8={[g]:Object.values(l1[g]),[k]:Object.values(l1[k]),[w]:Object.values(l1[w])},s4=null,T3={},O3={},I3={},Z3={},B3={},U8={[g]:Object.keys(s1[g]),[k]:Object.keys(s1[k]),[w]:Object.keys(s1[w])};function W8(c){return~S8.indexOf(c)}function $8(c,e){let a=e.split("-"),i=a[0],t=a.slice(1).join("-");return i===c&&t!==""&&!W8(t)?t:null}var R3=()=>{let c=i=>I2(r1,(t,n,o)=>(t[o]=I2(n,i,{}),t),{});T3=c((i,t,n)=>(t[3]&&(i[t[3]]=n),t[2]&&t[2].filter(r=>typeof r=="number").forEach(r=>{i[r.toString(16)]=n}),i)),O3=c((i,t,n)=>(i[n]=n,t[2]&&t[2].filter(r=>typeof r=="string").forEach(r=>{i[r]=n}),i)),B3=c((i,t,n)=>{let o=t[2];return i[n]=n,o.forEach(r=>{i[r]=n}),i});let e="far"in r1||h.autoFetchSvg,a=I2(j8,(i,t)=>{let n=t[0],o=t[1],r=t[2];return o==="far"&&!e&&(o="fas"),typeof n=="string"&&(i.names[n]={prefix:o,iconName:r}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:o,iconName:r}),i},{names:{},unicodes:{}});I3=a.names,Z3=a.unicodes,s4=n2(h.styleDefault,{family:h.familyDefault})};_8(c=>{s4=n2(c.styleDefault,{family:h.familyDefault})});R3();function l4(c,e){return(T3[c]||{})[e]}function Y8(c,e){return(O3[c]||{})[e]}function X(c,e){return(B3[c]||{})[e]}function q3(c){return I3[c]||{prefix:null,iconName:null}}function J8(c){let e=Z3[c],a=l4("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function a1(){return s4}var f4=()=>({prefix:null,iconName:null,rest:[]});function n2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:a=g}=e,i=s1[a][c],t=I1[a][c]||I1[a][i],n=c in I.styles?c:null;return t||n||null}var K8={[g]:Object.keys(l1[g]),[k]:Object.keys(l1[k]),[w]:Object.keys(l1[w])};function o2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:a=!1}=e,i={[g]:"".concat(h.cssPrefix,"-").concat(g),[k]:"".concat(h.cssPrefix,"-").concat(k),[w]:"".concat(h.cssPrefix,"-").concat(w)},t=null,n=g,o=t8.filter(l=>l!==L3);o.forEach(l=>{(c.includes(i[l])||c.some(f=>K8[l].includes(f)))&&(n=l)});let r=c.reduce((l,f)=>{let m=$8(h.cssPrefix,f);if(r1[f]?(f=G8[n].includes(f)?x8[n][f]:f,t=f,l.prefix=f):U8[n].indexOf(f)>-1?(t=f,l.prefix=n2(f,{family:n})):m?l.iconName=m:f!==h.replacementClass&&!o.some(u=>f===i[u])&&l.rest.push(f),!a&&l.prefix&&l.iconName){let u=t==="fa"?q3(l.iconName):{},d=X(l.prefix,l.iconName);u.prefix&&(t=null),l.iconName=u.iconName||d||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!r1.far&&r1.fas&&!h.autoFetchSvg&&(l.prefix="fas")}return l},f4());return(c.includes("fa-brands")||c.includes("fab"))&&(r.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(r.prefix="fad"),!r.prefix&&n===k&&(r1.fass||h.autoFetchSvg)&&(r.prefix="fass",r.iconName=X(r.prefix,r.iconName)||r.iconName),!r.prefix&&n===w&&(r1.fasds||h.autoFetchSvg)&&(r.prefix="fasds",r.iconName=X(r.prefix,r.iconName)||r.iconName),(r.prefix==="fa"||t==="fa")&&(r.prefix=a1()||"fas"),r}var Y2=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];let t=a.reduce(this._pullDefinitions,{});Object.keys(t).forEach(n=>{this.definitions[n]=s(s({},this.definitions[n]||{}),t[n]),$2(n,t[n]);let o=l1[g][n];o&&$2(o,t[n]),R3()})}reset(){this.definitions={}}_pullDefinitions(e,a){let i=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(i).map(t=>{let{prefix:n,iconName:o,icon:r}=i[t],l=r[2];e[n]||(e[n]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(e[n][f]=r)}),e[n][o]=r}),e}},t3=[],C1={},M1={},Q8=Object.keys(M1);function X8(c,e){let{mixoutsTo:a}=e;return t3=c,C1={},Object.keys(M1).forEach(i=>{Q8.indexOf(i)===-1&&delete M1[i]}),t3.forEach(i=>{let t=i.mixout?i.mixout():{};if(Object.keys(t).forEach(n=>{typeof t[n]=="function"&&(a[n]=t[n]),typeof t[n]=="object"&&Object.keys(t[n]).forEach(o=>{a[n]||(a[n]={}),a[n][o]=t[n][o]})}),i.hooks){let n=i.hooks();Object.keys(n).forEach(o=>{C1[o]||(C1[o]=[]),C1[o].push(n[o])})}i.provides&&i.provides(M1)}),a}function J2(c,e){for(var a=arguments.length,i=new Array(a>2?a-2:0),t=2;t<a;t++)i[t-2]=arguments[t];return(C1[c]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function h1(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),i=1;i<e;i++)a[i-1]=arguments[i];(C1[c]||[]).forEach(n=>{n.apply(null,a)})}function e1(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return M1[c]?M1[c].apply(null,e):void 0}function K2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,a=c.prefix||a1();if(e)return e=X(a,e)||e,e3(j3.definitions,a,e)||e3(I.styles,a,e)}var j3=new Y2,c0=()=>{h.autoReplaceSvg=!1,h.observeMutations=!1,h1("noAuto")},a0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(h1("beforeI2svg",c),e1("pseudoElements2svg",c),e1("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,Z8(()=>{i0({autoReplaceSvgRoot:e}),h1("watch",c)})}},e0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:X(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=n2(c[0]);return{prefix:a,iconName:X(a,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(h.cssPrefix,"-"))>-1||c.match(b8))){let e=o2(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||a1(),iconName:X(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=a1();return{prefix:e,iconName:X(e,c)||c}}}},_={noAuto:c0,config:h,dom:a0,parse:e0,library:j3,findIconDefinition:K2,toHtml:R1},i0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=H}=c;(Object.keys(I.styles).length>0||h.autoFetchSvg)&&W&&h.autoReplaceSvg&&_.dom.i2svg({node:e})};function r2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(a=>R1(a))}}),Object.defineProperty(c,"node",{get:function(){if(!W)return;let a=H.createElement("div");return a.innerHTML=c.html,a.children}}),c}function t0(c){let{children:e,main:a,mask:i,attributes:t,styles:n,transform:o}=c;if(r4(o)&&a.found&&!i.found){let{width:r,height:l}=a,f={x:r/l/2,y:.5};t.style=t2(C(s({},n),{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:t,children:e}]}function n0(c){let{prefix:e,iconName:a,children:i,attributes:t,symbol:n}=c,o=n===!0?"".concat(e,"-").concat(h.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(s({},t),{id:o}),children:i}]}]}function h4(c){let{icons:{main:e,mask:a},prefix:i,iconName:t,transform:n,symbol:o,title:r,maskId:l,titleId:f,extra:m,watchable:u=!1}=c,{width:d,height:y}=a.found?a:e,$=i==="fak",i1=[h.replacementClass,t?"".concat(h.cssPrefix,"-").concat(t):""].filter(v1=>m.classes.indexOf(v1)===-1).filter(v1=>v1!==""||!!v1).concat(m.classes).join(" "),P={children:[],attributes:C(s({},m.attributes),{"data-prefix":i,"data-icon":t,class:i1,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(y)})},B=$&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/y*16*.0625,"em")}:{};u&&(P.attributes[f1]=""),r&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(f||Z1())},children:[r]}),delete P.attributes.title);let A=C(s({},P),{prefix:i,iconName:t,main:e,mask:a,maskId:l,transform:n,symbol:o,styles:s(s({},B),m.styles)}),{children:F,attributes:m1}=a.found&&e.found?e1("generateAbstractMask",A)||{children:[],attributes:{}}:e1("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=F,A.attributes=m1,o?n0(A):t0(A)}function n3(c){let{content:e,width:a,height:i,transform:t,title:n,extra:o,watchable:r=!1}=c,l=C(s(s({},o.attributes),n?{title:n}:{}),{class:o.classes.join(" ")});r&&(l[f1]="");let f=s({},o.styles);r4(t)&&(f.transform=T8({transform:t,startCentered:!0,width:a,height:i}),f["-webkit-transform"]=f.transform);let m=t2(f);m.length>0&&(l.style=m);let u=[];return u.push({tag:"span",attributes:l,children:[e]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function o0(c){let{content:e,title:a,extra:i}=c,t=C(s(s({},i.attributes),a?{title:a}:{}),{class:i.classes.join(" ")}),n=t2(i.styles);n.length>0&&(t.style=n);let o=[];return o.push({tag:"span",attributes:t,children:[e]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var{styles:Z2}=I;function Q2(c){let e=c[0],a=c[1],[i]=c.slice(4),t=null;return Array.isArray(i)?t={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(T2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(T2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(T2.PRIMARY),fill:"currentColor",d:i[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:t}}var r0={found:!1,width:512,height:512};function s0(c,e){!A3&&!h.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function X2(c,e){let a=e;return e==="fa"&&h.styleDefault!==null&&(e=a1()),new Promise((i,t)=>{if(a==="fa"){let n=q3(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&Z2[e]&&Z2[e][c]){let n=Z2[e][c];return i(Q2(n))}s0(c,e),i(C(s({},r0),{icon:h.showMissingIcons&&c?e1("missingIconAbstract")||{}:{}}))})}var o3=()=>{},c4=h.measurePerformance&&X1&&X1.mark&&X1.measure?X1:{mark:o3,measure:o3},E1='FA "6.6.0"',l0=c=>(c4.mark("".concat(E1," ").concat(c," begins")),()=>G3(c)),G3=c=>{c4.mark("".concat(E1," ").concat(c," ends")),c4.measure("".concat(E1," ").concat(c),"".concat(E1," ").concat(c," begins"),"".concat(E1," ").concat(c," ends"))},m4={begin:l0,end:G3},c2=()=>{};function r3(c){return typeof(c.getAttribute?c.getAttribute(f1):null)=="string"}function f0(c){let e=c.getAttribute?c.getAttribute(t4):null,a=c.getAttribute?c.getAttribute(n4):null;return e&&a}function h0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h.replacementClass)}function m0(){return h.autoReplaceSvg===!0?a2.replace:a2[h.autoReplaceSvg]||a2.replace}function v0(c){return H.createElementNS("http://www.w3.org/2000/svg",c)}function z0(c){return H.createElement(c)}function U3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:a=c.tag==="svg"?v0:z0}=e;if(typeof c=="string")return H.createTextNode(c);let i=a(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){i.appendChild(U3(n,{ceFn:a}))}),i}function u0(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var a2={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(a=>{e.parentNode.insertBefore(U3(a),e)}),e.getAttribute(f1)===null&&h.keepOriginalSource){let a=H.createComment(u0(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(c){let e=c[0],a=c[1];if(~o4(e).indexOf(h.replacementClass))return a2.replace(c);let i=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){let n=a[0].attributes.class.split(" ").reduce((o,r)=>(r===h.replacementClass||r.match(i)?o.toSvg.push(r):o.toNode.push(r),o),{toNode:[],toSvg:[]});a[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}let t=a.map(n=>R1(n)).join(`
`);e.setAttribute(f1,""),e.innerHTML=t}};function s3(c){c()}function W3(c,e){let a=typeof e=="function"?e:c2;if(c.length===0)a();else{let i=s3;h.mutateApproach===g8&&(i=c1.requestAnimationFrame||s3),i(()=>{let t=m0(),n=m4.begin("mutate");c.map(t),n(),a()})}}var v4=!1;function $3(){v4=!0}function a4(){v4=!1}var i2=null;function l3(c){if(!K4||!h.observeMutations)return;let{treeCallback:e=c2,nodeCallback:a=c2,pseudoElementsCallback:i=c2,observeMutationsRoot:t=H}=c;i2=new K4(n=>{if(v4)return;let o=a1();g1(n).forEach(r=>{if(r.type==="childList"&&r.addedNodes.length>0&&!r3(r.addedNodes[0])&&(h.searchPseudoElements&&i(r.target),e(r.target)),r.type==="attributes"&&r.target.parentNode&&h.searchPseudoElements&&i(r.target.parentNode),r.type==="attributes"&&r3(r.target)&&~A8.indexOf(r.attributeName))if(r.attributeName==="class"&&f0(r.target)){let{prefix:l,iconName:f}=o2(o4(r.target));r.target.setAttribute(t4,l||o),f&&r.target.setAttribute(n4,f)}else h0(r.target)&&a(r.target)})}),W&&i2.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function p0(){i2&&i2.disconnect()}function d0(c){let e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce((i,t)=>{let n=t.split(":"),o=n[0],r=n.slice(1);return o&&r.length>0&&(i[o]=r.join(":").trim()),i},{})),a}function C0(c){let e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),i=c.innerText!==void 0?c.innerText.trim():"",t=o2(o4(c));return t.prefix||(t.prefix=a1()),e&&a&&(t.prefix=e,t.iconName=a),t.iconName&&t.prefix||(t.prefix&&i.length>0&&(t.iconName=Y8(t.prefix,c.innerText)||l4(t.prefix,W2(c.innerText))),!t.iconName&&h.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=c.firstChild.data)),t}function M0(c){let e=g1(c.attributes).reduce((t,n)=>(t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t),{}),a=c.getAttribute("title"),i=c.getAttribute("data-fa-title-id");return h.autoA11y&&(a?e["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(i||Z1()):(e["aria-hidden"]="true",e.focusable="false")),e}function H0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function f3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:a,prefix:i,rest:t}=C0(c),n=M0(c),o=J2("parseNodeAttributes",{},c),r=e.styleParser?d0(c):[];return s({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:t,styles:r,attributes:n}},o)}var{styles:V0}=I;function Y3(c){let e=h.autoReplaceSvg==="nest"?f3(c,{styleParser:!1}):f3(c);return~e.extra.classes.indexOf(w3)?e1("generateLayersText",c,e):e1("generateSvgReplacementMutation",c,e)}var Z=new Set;S3.map(c=>{Z.add("fa-".concat(c))});Object.keys(s1[g]).map(Z.add.bind(Z));Object.keys(s1[k]).map(Z.add.bind(Z));Object.keys(s1[w]).map(Z.add.bind(Z));Z=[...Z];function h3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();let a=H.documentElement.classList,i=m=>a.add("".concat(c3,"-").concat(m)),t=m=>a.remove("".concat(c3,"-").concat(m)),n=h.autoFetchSvg?Z:S3.map(m=>"fa-".concat(m)).concat(Object.keys(V0));n.includes("fa")||n.push("fa");let o=[".".concat(w3,":not([").concat(f1,"])")].concat(n.map(m=>".".concat(m,":not([").concat(f1,"])"))).join(", ");if(o.length===0)return Promise.resolve();let r=[];try{r=g1(c.querySelectorAll(o))}catch{}if(r.length>0)i("pending"),t("complete");else return Promise.resolve();let l=m4.begin("onTree"),f=r.reduce((m,u)=>{try{let d=Y3(u);d&&m.push(d)}catch(d){A3||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise((m,u)=>{Promise.all(f).then(d=>{W3(d,()=>{i("active"),i("complete"),t("pending"),typeof e=="function"&&e(),l(),m()})}).catch(d=>{l(),u(d)})})}function g0(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Y3(c).then(a=>{a&&W3([a],e)})}function L0(c){return function(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:K2(e||{}),{mask:t}=a;return t&&(t=(t||{}).icon?t:K2(t||{})),c(i,C(s({},a),{mask:t}))}}var x0=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=O,symbol:i=!1,mask:t=null,maskId:n=null,title:o=null,titleId:r=null,classes:l=[],attributes:f={},styles:m={}}=e;if(!c)return;let{prefix:u,iconName:d,icon:y}=c;return r2(s({type:"icon"},c),()=>(h1("beforeDOMElementCreation",{iconDefinition:c,params:e}),h.autoA11y&&(o?f["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(r||Z1()):(f["aria-hidden"]="true",f.focusable="false")),h4({icons:{main:Q2(y),mask:t?Q2(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:s(s({},O),a),symbol:i,title:o,maskId:n,titleId:r,extra:{attributes:f,styles:m,classes:l}})))},b0={mixout(){return{icon:L0(x0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=h3,c.nodeCallback=g0,c}}},provides(c){c.i2svg=function(e){let{node:a=H,callback:i=()=>{}}=e;return h3(a,i)},c.generateSvgReplacementMutation=function(e,a){let{iconName:i,title:t,titleId:n,prefix:o,transform:r,symbol:l,mask:f,maskId:m,extra:u}=a;return new Promise((d,y)=>{Promise.all([X2(i,o),f.iconName?X2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then($=>{let[i1,P]=$;d([e,h4({icons:{main:i1,mask:P},prefix:o,iconName:i,transform:r,symbol:l,maskId:m,title:t,titleId:n,extra:u,watchable:!0})])}).catch(y)})},c.generateAbstractIcon=function(e){let{children:a,attributes:i,main:t,transform:n,styles:o}=e,r=t2(o);r.length>0&&(i.style=r);let l;return r4(n)&&(l=e1("generateAbstractTransformGrouping",{main:t,transform:n,containerWidth:t.width,iconWidth:t.width})),a.push(l||t.icon),{children:a,attributes:i}}}},N0={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:a=[]}=e;return r2({type:"layer"},()=>{h1("beforeDOMElementCreation",{assembler:c,params:e});let i=[];return c(t=>{Array.isArray(t)?t.map(n=>{i=i.concat(n.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers"),...a].join(" ")},children:i}]})}}}},y0={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:a=null,classes:i=[],attributes:t={},styles:n={}}=e;return r2({type:"counter",content:c},()=>(h1("beforeDOMElementCreation",{content:c,params:e}),o0({content:c.toString(),title:a,extra:{attributes:t,styles:n,classes:["".concat(h.cssPrefix,"-layers-counter"),...i]}})))}}}},A0={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=O,title:i=null,classes:t=[],attributes:n={},styles:o={}}=e;return r2({type:"text",content:c},()=>(h1("beforeDOMElementCreation",{content:c,params:e}),n3({content:c,transform:s(s({},O),a),title:i,extra:{attributes:n,styles:o,classes:["".concat(h.cssPrefix,"-layers-text"),...t]}})))}}},provides(c){c.generateLayersText=function(e,a){let{title:i,transform:t,extra:n}=a,o=null,r=null;if(g3){let l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/l,r=f.height/l}return h.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,n3({content:e.innerHTML,width:o,height:r,transform:t,title:i,extra:n,watchable:!0})])}}},S0=new RegExp('"',"ug"),m3=[1105920,1112319],v3=s(s(s({FontAwesome:{normal:"fas",400:"fas"}},f8),l8),C8),e4=Object.keys(v3).reduce((c,e)=>(c[e.toLowerCase()]=v3[e],c),{}),k0=Object.keys(e4).reduce((c,e)=>{let a=e4[e];return c[e]=a[900]||[...Object.entries(a)][0][1],c},{});function w0(c){let e=c.replace(S0,""),a=q8(e,0),i=a>=m3[0]&&a<=m3[1],t=e.length===2?e[0]===e[1]:!1;return{value:W2(t?e[0]:e),isSecondary:i||t}}function _0(c,e){let a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),t=isNaN(i)?"normal":i;return(e4[a]||{})[t]||k0[a]}function z3(c,e){let a="".concat(V8).concat(e.replace(":","-"));return new Promise((i,t)=>{if(c.getAttribute(a)!==null)return i();let o=g1(c.children).filter(d=>d.getAttribute(q2)===e)[0],r=c1.getComputedStyle(c,e),l=r.getPropertyValue("font-family"),f=l.match(N8),m=r.getPropertyValue("font-weight"),u=r.getPropertyValue("content");if(o&&!f)return c.removeChild(o),i();if(f&&u!=="none"&&u!==""){let d=r.getPropertyValue("content"),y=_0(l,m),{value:$,isSecondary:i1}=w0(d),P=f[0].startsWith("FontAwesome"),B=l4(y,$),A=B;if(P){let F=J8($);F.iconName&&F.prefix&&(B=F.iconName,y=F.prefix)}if(B&&!i1&&(!o||o.getAttribute(t4)!==y||o.getAttribute(n4)!==A)){c.setAttribute(a,A),o&&c.removeChild(o);let F=H0(),{extra:m1}=F;m1.attributes[q2]=e,X2(B,y).then(v1=>{let e8=h4(C(s({},F),{icons:{main:v1,mask:f4()},prefix:y,iconName:A,extra:m1,watchable:!0})),y2=H.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(y2,c.firstChild):c.appendChild(y2),y2.outerHTML=e8.map(i8=>R1(i8)).join(`
`),c.removeAttribute(a),i()}).catch(t)}else i()}else i()})}function D0(c){return Promise.all([z3(c,"::before"),z3(c,"::after")])}function P0(c){return c.parentNode!==document.head&&!~L8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(q2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function u3(c){if(W)return new Promise((e,a)=>{let i=g1(c.querySelectorAll("*")).filter(P0).map(D0),t=m4.begin("searchPseudoElements");$3(),Promise.all(i).then(()=>{t(),a4(),e()}).catch(()=>{t(),a4(),a()})})}var F0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=u3,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:a=H}=e;h.searchPseudoElements&&u3(a)}}},p3=!1,E0={mixout(){return{dom:{unwatch(){$3(),p3=!0}}}},hooks(){return{bootstrap(){l3(J2("mutationObserverCallbacks",{}))},noAuto(){p0()},watch(c){let{observeMutationsRoot:e}=c;p3?a4():l3(J2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},d3=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((a,i)=>{let t=i.toLowerCase().split("-"),n=t[0],o=t.slice(1).join("-");if(n&&o==="h")return a.flipX=!0,a;if(n&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(n){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},e)},T0={mixout(){return{parse:{transform:c=>d3(c)}}},hooks(){return{parseNodeAttributes(c,e){let a=e.getAttribute("data-fa-transform");return a&&(c.transform=d3(a)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:a,transform:i,containerWidth:t,iconWidth:n}=e,o={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(r," ").concat(l," ").concat(f)},u={transform:"translate(".concat(n/2*-1," -256)")},d={outer:o,inner:m,path:u};return{tag:"g",attributes:s({},d.outer),children:[{tag:"g",attributes:s({},d.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:s(s({},a.icon.attributes),d.path)}]}]}}}},B2={x:0,y:0,width:"100%",height:"100%"};function C3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function O0(c){return c.tag==="g"?c.children:[c]}var I0={hooks(){return{parseNodeAttributes(c,e){let a=e.getAttribute("data-fa-mask"),i=a?o2(a.split(" ").map(t=>t.trim())):f4();return i.prefix||(i.prefix=a1()),c.mask=i,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:a,attributes:i,main:t,mask:n,maskId:o,transform:r}=e,{width:l,icon:f}=t,{width:m,icon:u}=n,d=E8({transform:r,containerWidth:m,iconWidth:l}),y={tag:"rect",attributes:C(s({},B2),{fill:"white"})},$=f.children?{children:f.children.map(C3)}:{},i1={tag:"g",attributes:s({},d.inner),children:[C3(s({tag:f.tag,attributes:s(s({},f.attributes),d.path)},$))]},P={tag:"g",attributes:s({},d.outer),children:[i1]},B="mask-".concat(o||Z1()),A="clip-".concat(o||Z1()),F={tag:"mask",attributes:C(s({},B2),{id:B,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,P]},m1={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:O0(u)},F]};return a.push(m1,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(B,")")},B2)}),{children:a,attributes:i}}}},Z0={provides(c){let e=!1;c1.matchMedia&&(e=c1.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let a=[],i={fill:"currentColor"},t={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:C(s({},i),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=C(s({},t),{attributeName:"opacity"}),o={tag:"circle",attributes:C(s({},i),{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:C(s({},t),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(s({},n),{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:C(s({},i),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:C(s({},n),{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:C(s({},i),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(s({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},B0={hooks(){return{parseNodeAttributes(c,e){let a=e.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return c.symbol=i,c}}}},R0=[I8,b0,N0,y0,A0,F0,E0,T0,I0,Z0,B0];X8(R0,{mixoutsTo:_});var K5=_.noAuto,J3=_.config,Q5=_.library,K3=_.dom,Q3=_.parse,X5=_.findIconDefinition,c7=_.toHtml,X3=_.icon,a7=_.layer,q0=_.text,j0=_.counter;var G0=["*"],U0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},W0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},$0=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(a=>e[a]?a:null).filter(a=>a)},z4=new WeakSet,c6="fa-auto-css";function Y0(c,e){if(!e.autoAddCss||z4.has(c))return;if(c.getElementById(c6)!=null){e.autoAddCss=!1,z4.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",c6),a.innerHTML=K3.css();let i=c.head.childNodes,t=null;for(let n=i.length-1;n>-1;n--){let o=i[n],r=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(t=o)}c.head.insertBefore(a,t),e.autoAddCss=!1,z4.add(c)}var J0=c=>c.prefix!==void 0&&c.iconName!==void 0,K0=(c,e)=>J0(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},Q0=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(a){J3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275prov=z1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),X0=(()=>{class c{constructor(){this.definitions={}}addIcons(...a){for(let i of a){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let t of i.icon[2])typeof t=="string"&&(this.definitions[i.prefix][t]=i)}}addIconPacks(...a){for(let i of a){let t=Object.keys(i).map(n=>i[n]);this.addIcons(...t)}}getIconDefinition(a,i){return a in this.definitions&&i in this.definitions[a]?this.definitions[a][i]:null}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275prov=z1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),c5=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275dir=S({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Y]})}}return c})(),a5=(()=>{class c{constructor(a,i){this.renderer=a,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}static{this.\u0275fac=function(i){return new(i||c)(M(w1),M(k1))}}static{this.\u0275cmp=x({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Y,b],ngContentSelectors:G0,decls:1,vars:0,template:function(i,t){i&1&&(k2(),w2(0))},encapsulation:2})}}return c})(),a6=(()=>{class c{constructor(a,i,t,n,o){this.sanitizer=a,this.config=i,this.iconLibrary=t,this.stackItem=n,this.document=A2(B4),o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){W0();return}if(a){let i=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(i!=null){let t=this.buildParams();Y0(this.document,this.config);let n=X3(i,t);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(a){let i=K0(a,this.config.defaultPrefix);if("icon"in i)return i;let t=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return t??(U0(i),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?Q3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:$0(a),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(i){return new(i||c)(M(q4),M(Q0),M(X0),M(c5,8),M(a5,8))}}static{this.\u0275cmp=x({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,t){i&2&&(E4("innerHTML",t.renderedIconHTML,D4),K1("title",t.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Y,b],decls:0,vars:0,template:function(i,t){},encapsulation:2})}}return c})();var s2=(()=>{class c{static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275mod=n1({type:c})}static{this.\u0275inj=t1({})}}return c})();var e6={prefix:"fab",iconName:"java",icon:[384,512,[],"f4e4","M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"]};var i6={prefix:"fab",iconName:"git-alt",icon:[448,512,[],"f841","M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"]};var t6={prefix:"fab",iconName:"angular",icon:[448,512,[],"f420","M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"]};var n6={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]};var o6={prefix:"fab",iconName:"css3",icon:[512,512,[],"f13c","M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"]};var r6={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]};var s6={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"]};function i5(c,e){if(c&1&&(v(0,"li"),V(1,"fa-icon",3),v(2,"span",4),p(3),z()()),c&2){let a=e.$implicit;N(),j("icon",a.icon),N(2),T(a.name)}}var f6=(()=>{class c{constructor(){this.skills=[{name:"Java",icon:e6},{name:"SQL",icon:s6},{name:"HTML",icon:n6},{name:"CSS",icon:o6},{name:"JavaScript",icon:r6},{name:"Angular",icon:t6},{name:"Git",icon:i6}]}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-skills"]],standalone:!0,features:[b],decls:6,vars:1,consts:[[1,"skills-container"],[1,"skill"],[4,"ngFor","ngForOf"],[1,"icon",3,"icon"],[1,"skill-name"]],template:function(i,t){i&1&&(v(0,"div",0)(1,"div",1)(2,"h1"),p(3," I have experience in working with the following technologies"),z(),v(4,"ul"),p1(5,i5,4,2,"li",2),z()()()),i&2&&(N(5),j("ngForOf",t.skills))},dependencies:[s2,a6,K,d1],styles:[".skills-container[_ngcontent-%COMP%]{display:flex;justify-content:left;align-items:start;flex-wrap:wrap;padding:20px}.skill[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:20px;transition:transform .5s ease;cursor:pointer}.skill[_ngcontent-%COMP%]:hover{transform:translate(10px)}.skill[_ngcontent-%COMP%]:hover{transform:translate(-10px)}.icon[_ngcontent-%COMP%]{font-size:2.5em;color:#0c6ae4;margin-bottom:10px}.skill-name[_ngcontent-%COMP%]{font-size:2.5em;text-align:center}"]})}}return c})();function t5(c,e){if(c&1&&(v(0,"li"),p(1),z()),c&2){let a=e.$implicit;N(),T(a)}}var h6=(()=>{class c{constructor(){this.name="Muralikrishna Jakkamsetti",this.title="Java Developer",this.description="I am a passionate developer with experience in Java, SQL, Servlets, JSP, Data Structures and Algorithms, HTML, CSS, and Angular. I love solving complex problems and building robust applications.",this.skills=["Java","SQL","Angular","HTML","CSS","JavaScript","Git"]}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-about"]],standalone:!0,features:[b],decls:14,vars:4,consts:[[1,"about-container"],[1,"skills-section"],[4,"ngFor","ngForOf"]],template:function(i,t){i&1&&(v(0,"div",0)(1,"h1"),p(2,"About Me"),z(),v(3,"h2"),p(4),z(),v(5,"h3"),p(6),z(),v(7,"p"),p(8),z(),v(9,"div",1)(10,"h4"),p(11,"Skills"),z(),v(12,"ul"),p1(13,t5,2,1,"li",2),z()()()),i&2&&(N(4),T(t.name),N(2),T(t.title),N(2),T(t.description),N(5),j("ngForOf",t.skills))},dependencies:[K,d1],styles:[".about-container[_ngcontent-%COMP%]{text-align:center;padding:50px;max-width:800px;margin:0 auto}h1[_ngcontent-%COMP%]{font-size:2.5em;margin-bottom:10px;color:#ff5722}h2[_ngcontent-%COMP%]{font-size:1.8em;margin-top:5px}h3[_ngcontent-%COMP%]{font-size:1.4em;color:#777;margin-bottom:20px}p[_ngcontent-%COMP%]{font-size:1.2em;line-height:1.6}.skills-section[_ngcontent-%COMP%]{margin-top:30px}.skills-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.5em;margin-bottom:10px}.skills-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;display:flex;flex-wrap:wrap;justify-content:center}.skills-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#ff5722;color:#fff;padding:10px 15px;margin:5px;border-radius:20px;font-size:1em}"]})}}return c})();function n5(c,e){if(c&1&&(v(0,"div",2),V(1,"img",3),v(2,"div",4)(3,"h2"),p(4),z(),v(5,"p"),p(6),z(),v(7,"a",5),p(8,"View Project"),z()()()),c&2){let a=e.$implicit;N(),T4("alt",a.title),j("src",a.image,S2),N(3),T(a.title),N(2),T(a.description),N(),j("href",a.link,S2)}}var m6=(()=>{class c{constructor(){this.projects=[{title:"Portfolio Website",description:"A personal portfolio website built with Angular and Bootstrap.",image:"../assets/images/portfolio.png",link:"https://github.com/Muralikrishna23/Portfolio"},{title:"E-Library",description:"This web app is built using Java,jsp,jdbc,oracleand UI design",image:"assets/ecommerce.jpg",link:""},{title:"Todo app",description:"This app was buit using angular",image:"",link:"https://github.com/Muralikrishna23/To-do"}]}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-projects"]],standalone:!0,features:[b],decls:5,vars:1,consts:[[1,"projects-container"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"project-image",3,"src","alt"],[1,"card-content"],["target","_blank",1,"project-link",3,"href"]],template:function(i,t){i&1&&(v(0,"div",0)(1,"h1"),p(2,"My Projects"),z(),V(3,"br"),p1(4,n5,9,5,"div",1),z()),i&2&&(N(4),j("ngForOf",t.projects))},dependencies:[K,d1],styles:[".projects-container[_ngcontent-%COMP%]{text-align:center;padding:50px;max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:20px;justify-content:center}.card[_ngcontent-%COMP%]{width:300px;background-color:#fff;border-radius:8px;box-shadow:0 4px 8px #0003;overflow:hidden;transition:transform .3s,box-shadow .3s;display:flex;flex-direction:column;align-items:center;text-align:left}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 6px 12px #0000004d}.project-image[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.card-content[_ngcontent-%COMP%]{padding:15px}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5em;color:#333;margin:10px 0}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em;color:#666;line-height:1.6}.project-link[_ngcontent-%COMP%]{margin-top:10px;display:inline-block;color:#ff5722;text-decoration:none;font-weight:700;transition:color .3s}.project-link[_ngcontent-%COMP%]:hover{color:#e64a19}"]})}}return c})();var V6=(()=>{class c{constructor(a,i){this._renderer=a,this._elementRef=i,this.onChange=t=>{},this.onTouched=()=>{}}setProperty(a,i){this._renderer.setProperty(this._elementRef.nativeElement,a,i)}registerOnTouched(a){this.onTouched=a}registerOnChange(a){this.onChange=a}setDisabledState(a){this.setProperty("disabled",a)}static{this.\u0275fac=function(i){return new(i||c)(M(w1),M(k1))}}static{this.\u0275dir=S({type:c})}}return c})(),o5=(()=>{class c extends V6{static{this.\u0275fac=(()=>{let a;return function(t){return(a||(a=J1(c)))(t||c)}})()}static{this.\u0275dir=S({type:c,features:[q]})}}return c})(),g6=new u1("");var r5={provide:g6,useExisting:A1(()=>p2),multi:!0};function s5(){let c=E2()?E2().getUserAgent():"";return/android (\d+)/.test(c.toLowerCase())}var l5=new u1(""),p2=(()=>{class c extends V6{constructor(a,i,t){super(a,i),this._compositionMode=t,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!s5())}writeValue(a){let i=a??"";this.setProperty("value",i)}_handleInput(a){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(a)}_compositionStart(){this._composing=!0}_compositionEnd(a){this._composing=!1,this._compositionMode&&this.onChange(a)}static{this.\u0275fac=function(i){return new(i||c)(M(w1),M(k1),M(l5,8))}}static{this.\u0275dir=S({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,t){i&1&&o1("input",function(o){return t._handleInput(o.target.value)})("blur",function(){return t.onTouched()})("compositionstart",function(){return t._compositionStart()})("compositionend",function(o){return t._compositionEnd(o.target.value)})},features:[D1([r5]),q]})}}return c})();function f5(c){return c==null||(typeof c=="string"||Array.isArray(c))&&c.length===0}var p4=new u1(""),L6=new u1("");function h5(c){return f5(c.value)?{required:!0}:null}function v6(c){return null}function x6(c){return c!=null}function b6(c){return O4(c)?A4(c):c}function N6(c){let e={};return c.forEach(a=>{e=a!=null?s(s({},e),a):e}),Object.keys(e).length===0?null:e}function y6(c,e){return e.map(a=>a(c))}function m5(c){return!c.validate}function A6(c){return c.map(e=>m5(e)?e:a=>e.validate(a))}function v5(c){if(!c)return null;let e=c.filter(x6);return e.length==0?null:function(a){return N6(y6(a,e))}}function d4(c){return c!=null?v5(A6(c)):null}function z5(c){if(!c)return null;let e=c.filter(x6);return e.length==0?null:function(a){let i=y6(a,e).map(b6);return k4(i).pipe(S4(N6))}}function C4(c){return c!=null?z5(A6(c)):null}function z6(c,e){return c===null?[e]:Array.isArray(c)?[...c,e]:[c,e]}function u5(c){return c._rawValidators}function p5(c){return c._rawAsyncValidators}function u4(c){return c?Array.isArray(c)?c:[c]:[]}function f2(c,e){return Array.isArray(c)?c.includes(e):c===e}function u6(c,e){let a=u4(e);return u4(c).forEach(t=>{f2(a,t)||a.push(t)}),a}function p6(c,e){return u4(e).filter(a=>!f2(c,a))}var h2=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=d4(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=C4(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,a){return this.control?this.control.hasError(e,a):!1}getError(e,a){return this.control?this.control.getError(e,a):null}},b1=class extends h2{get formDirective(){return null}get path(){return null}},$1=class extends h2{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},m2=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},d5={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},q7=C(s({},d5),{"[class.ng-submitted]":"isSubmitted"}),S6=(()=>{class c extends m2{constructor(a){super(a)}static{this.\u0275fac=function(i){return new(i||c)(M($1,2))}}static{this.\u0275dir=S({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,t){i&2&&Q1("ng-untouched",t.isUntouched)("ng-touched",t.isTouched)("ng-pristine",t.isPristine)("ng-dirty",t.isDirty)("ng-valid",t.isValid)("ng-invalid",t.isInvalid)("ng-pending",t.isPending)},features:[q]})}}return c})(),k6=(()=>{class c extends m2{constructor(a){super(a)}static{this.\u0275fac=function(i){return new(i||c)(M(b1,10))}}static{this.\u0275dir=S({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,t){i&2&&Q1("ng-untouched",t.isUntouched)("ng-touched",t.isTouched)("ng-pristine",t.isPristine)("ng-dirty",t.isDirty)("ng-valid",t.isValid)("ng-invalid",t.isInvalid)("ng-pending",t.isPending)("ng-submitted",t.isSubmitted)},features:[q]})}}return c})();var q1="VALID",l2="INVALID",L1="PENDING",j1="DISABLED",N1=class{},v2=class extends N1{constructor(e,a){super(),this.value=e,this.source=a}},U1=class extends N1{constructor(e,a){super(),this.pristine=e,this.source=a}},W1=class extends N1{constructor(e,a){super(),this.touched=e,this.source=a}},x1=class extends N1{constructor(e,a){super(),this.status=e,this.source=a}};function w6(c){return(d2(c)?c.validators:c)||null}function C5(c){return Array.isArray(c)?d4(c):c||null}function _6(c,e){return(d2(e)?e.asyncValidators:c)||null}function M5(c){return Array.isArray(c)?C4(c):c||null}function d2(c){return c!=null&&!Array.isArray(c)&&typeof c=="object"}function H5(c,e,a){let i=c.controls;if(!(e?Object.keys(i):i).length)throw new Y1(1e3,"");if(!i[a])throw new Y1(1001,"")}function V5(c,e,a){c._forEachChild((i,t)=>{if(a[t]===void 0)throw new Y1(1002,"")})}var z2=class{constructor(e,a){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=P1(()=>this.statusReactive()),this.statusReactive=_1(void 0),this._pristine=P1(()=>this.pristineReactive()),this.pristineReactive=_1(!0),this._touched=P1(()=>this.touchedReactive()),this.touchedReactive=_1(!1),this._events=new y4,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(a)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return J(this.statusReactive)}set status(e){J(()=>this.statusReactive.set(e))}get valid(){return this.status===q1}get invalid(){return this.status===l2}get pending(){return this.status==L1}get disabled(){return this.status===j1}get enabled(){return this.status!==j1}get pristine(){return J(this.pristineReactive)}set pristine(e){J(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return J(this.touchedReactive)}set touched(e){J(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(u6(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(u6(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(p6(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(p6(e,this._rawAsyncValidators))}hasValidator(e){return f2(this._rawValidators,e)}hasAsyncValidator(e){return f2(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let a=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(C(s({},e),{sourceControl:i})),a&&e.emitEvent!==!1&&this._events.next(new W1(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(a=>a.markAllAsTouched(e))}markAsUntouched(e={}){let a=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),a&&e.emitEvent!==!1&&this._events.next(new W1(!1,i))}markAsDirty(e={}){let a=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(C(s({},e),{sourceControl:i})),a&&e.emitEvent!==!1&&this._events.next(new U1(!1,i))}markAsPristine(e={}){let a=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(t=>{t.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),a&&e.emitEvent!==!1&&this._events.next(new U1(!0,i))}markAsPending(e={}){this.status=L1;let a=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x1(this.status,a)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(C(s({},e),{sourceControl:a}))}disable(e={}){let a=this._parentMarkedDirty(e.onlySelf);this.status=j1,this.errors=null,this._forEachChild(t=>{t.disable(C(s({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new v2(this.value,i)),this._events.next(new x1(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(s({},e),{skipPristineCheck:a}),this),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let a=this._parentMarkedDirty(e.onlySelf);this.status=q1,this._forEachChild(i=>{i.enable(C(s({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(s({},e),{skipPristineCheck:a}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,a){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},a),this._parent._updateTouched({},a))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===q1||this.status===L1)&&this._runAsyncValidator(i,e.emitEvent)}let a=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new v2(this.value,a)),this._events.next(new x1(this.status,a)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(C(s({},e),{sourceControl:a}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(a=>a._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j1:q1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,a){if(this.asyncValidator){this.status=L1,this._hasOwnPendingAsyncValidator={emitEvent:a!==!1};let i=b6(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(t=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(t,{emitEvent:a,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,a={}){this.errors=e,this._updateControlsErrors(a.emitEvent!==!1,this,a.shouldHaveEmitted)}get(e){let a=e;return a==null||(Array.isArray(a)||(a=a.split(".")),a.length===0)?null:a.reduce((i,t)=>i&&i._find(t),this)}getError(e,a){let i=a?this.get(a):this;return i&&i.errors?i.errors[e]:null}hasError(e,a){return!!this.getError(e,a)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,a,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new x1(this.status,a)),this._parent&&this._parent._updateControlsErrors(e,a,i)}_initObservables(){this.valueChanges=new S1,this.statusChanges=new S1}_calculateStatus(){return this._allControlsDisabled()?j1:this.errors?l2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(L1)?L1:this._anyControlsHaveStatus(l2)?l2:q1}_anyControlsHaveStatus(e){return this._anyControls(a=>a.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,a){let i=!this._anyControlsDirty(),t=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,a),t&&this._events.next(new U1(this.pristine,a))}_updateTouched(e={},a){this.touched=this._anyControlsTouched(),this._events.next(new W1(this.touched,a)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,a)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){d2(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let a=this._parent&&this._parent.dirty;return!e&&!!a&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=C5(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=M5(this._rawAsyncValidators)}},u2=class extends z2{constructor(e,a,i){super(w6(a),_6(i,a)),this.controls=e,this._initObservables(),this._setUpdateStrategy(a),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,a){return this.controls[e]?this.controls[e]:(this.controls[e]=a,a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange),a)}addControl(e,a,i={}){this.registerControl(e,a),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,a={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:a.emitEvent}),this._onCollectionChange()}setControl(e,a,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],a&&this.registerControl(e,a),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,a={}){V5(this,!0,e),Object.keys(e).forEach(i=>{H5(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:a.emitEvent})}),this.updateValueAndValidity(a)}patchValue(e,a={}){e!=null&&(Object.keys(e).forEach(i=>{let t=this.controls[i];t&&t.patchValue(e[i],{onlySelf:!0,emitEvent:a.emitEvent})}),this.updateValueAndValidity(a))}reset(e={},a={}){this._forEachChild((i,t)=>{i.reset(e?e[t]:null,{onlySelf:!0,emitEvent:a.emitEvent})}),this._updatePristine(a,this),this._updateTouched(a,this),this.updateValueAndValidity(a)}getRawValue(){return this._reduceChildren({},(e,a,i)=>(e[i]=a.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(a,i)=>i._syncPendingControls()?!0:a);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(a=>{let i=this.controls[a];i&&e(i,a)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[a,i]of Object.entries(this.controls))if(this.contains(a)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(a,i,t)=>((i.enabled||this.disabled)&&(a[t]=i.value),a))}_reduceChildren(e,a){let i=e;return this._forEachChild((t,n)=>{i=a(i,t,n)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var M4=new u1("CallSetDisabledState",{providedIn:"root",factory:()=>H4}),H4="always";function g5(c,e){return[...e.path,c]}function D6(c,e,a=H4){P6(c,e),e.valueAccessor.writeValue(c.value),(c.disabled||a==="always")&&e.valueAccessor.setDisabledState?.(c.disabled),x5(c,e),N5(c,e),b5(c,e),L5(c,e)}function d6(c,e){c.forEach(a=>{a.registerOnValidatorChange&&a.registerOnValidatorChange(e)})}function L5(c,e){if(e.valueAccessor.setDisabledState){let a=i=>{e.valueAccessor.setDisabledState(i)};c.registerOnDisabledChange(a),e._registerOnDestroy(()=>{c._unregisterOnDisabledChange(a)})}}function P6(c,e){let a=u5(c);e.validator!==null?c.setValidators(z6(a,e.validator)):typeof a=="function"&&c.setValidators([a]);let i=p5(c);e.asyncValidator!==null?c.setAsyncValidators(z6(i,e.asyncValidator)):typeof i=="function"&&c.setAsyncValidators([i]);let t=()=>c.updateValueAndValidity();d6(e._rawValidators,t),d6(e._rawAsyncValidators,t)}function x5(c,e){e.valueAccessor.registerOnChange(a=>{c._pendingValue=a,c._pendingChange=!0,c._pendingDirty=!0,c.updateOn==="change"&&F6(c,e)})}function b5(c,e){e.valueAccessor.registerOnTouched(()=>{c._pendingTouched=!0,c.updateOn==="blur"&&c._pendingChange&&F6(c,e),c.updateOn!=="submit"&&c.markAsTouched()})}function F6(c,e){c._pendingDirty&&c.markAsDirty(),c.setValue(c._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(c._pendingValue),c._pendingChange=!1}function N5(c,e){let a=(i,t)=>{e.valueAccessor.writeValue(i),t&&e.viewToModelUpdate(i)};c.registerOnChange(a),e._registerOnDestroy(()=>{c._unregisterOnChange(a)})}function y5(c,e){c==null,P6(c,e)}function A5(c,e){if(!c.hasOwnProperty("model"))return!1;let a=c.model;return a.isFirstChange()?!0:!Object.is(e,a.currentValue)}function S5(c){return Object.getPrototypeOf(c.constructor)===o5}function k5(c,e){c._syncPendingControls(),e.forEach(a=>{let i=a.control;i.updateOn==="submit"&&i._pendingChange&&(a.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function w5(c,e){if(!e)return null;Array.isArray(e);let a,i,t;return e.forEach(n=>{n.constructor===p2?a=n:S5(n)?i=n:t=n}),t||i||a||null}var _5={provide:b1,useExisting:A1(()=>V4)},G1=Promise.resolve(),V4=(()=>{class c extends b1{get submitted(){return J(this.submittedReactive)}constructor(a,i,t){super(),this.callSetDisabledState=t,this._submitted=P1(()=>this.submittedReactive()),this.submittedReactive=_1(!1),this._directives=new Set,this.ngSubmit=new S1,this.form=new u2({},d4(a),C4(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(a){G1.then(()=>{let i=this._findContainer(a.path);a.control=i.registerControl(a.name,a.control),D6(a.control,a,this.callSetDisabledState),a.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(a)})}getControl(a){return this.form.get(a.path)}removeControl(a){G1.then(()=>{let i=this._findContainer(a.path);i&&i.removeControl(a.name),this._directives.delete(a)})}addFormGroup(a){G1.then(()=>{let i=this._findContainer(a.path),t=new u2({});y5(t,a),i.registerControl(a.name,t),t.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(a){G1.then(()=>{let i=this._findContainer(a.path);i&&i.removeControl(a.name)})}getFormGroup(a){return this.form.get(a.path)}updateModel(a,i){G1.then(()=>{this.form.get(a.path).setValue(i)})}setValue(a){this.control.setValue(a)}onSubmit(a){return this.submittedReactive.set(!0),k5(this.form,this._directives),this.ngSubmit.emit(a),a?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(a=void 0){this.form.reset(a),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(a){return a.pop(),a.length?this.form.get(a):this.form}static{this.\u0275fac=function(i){return new(i||c)(M(p4,10),M(L6,10),M(M4,8))}}static{this.\u0275dir=S({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,t){i&1&&o1("submit",function(o){return t.onSubmit(o)})("reset",function(){return t.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[D1([_5]),q]})}}return c})();function C6(c,e){let a=c.indexOf(e);a>-1&&c.splice(a,1)}function M6(c){return typeof c=="object"&&c!==null&&Object.keys(c).length===2&&"value"in c&&"disabled"in c}var D5=class extends z2{constructor(e=null,a,i){super(w6(a),_6(i,a)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(a),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),d2(a)&&(a.nonNullable||a.initialValueIsDefault)&&(M6(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,a={}){this.value=this._pendingValue=e,this._onChange.length&&a.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,a.emitViewToModelChange!==!1)),this.updateValueAndValidity(a)}patchValue(e,a={}){this.setValue(e,a)}reset(e=this.defaultValue,a={}){this._applyFormState(e),this.markAsPristine(a),this.markAsUntouched(a),this.setValue(this.value,a),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){C6(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){C6(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){M6(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var P5={provide:$1,useExisting:A1(()=>g4)},H6=Promise.resolve(),g4=(()=>{class c extends $1{constructor(a,i,t,n,o,r){super(),this._changeDetectorRef=o,this.callSetDisabledState=r,this.control=new D5,this._registered=!1,this.name="",this.update=new S1,this._parent=a,this._setValidators(i),this._setAsyncValidators(t),this.valueAccessor=w5(this,n)}ngOnChanges(a){if(this._checkForErrors(),!this._registered||"name"in a){if(this._registered&&(this._checkName(),this.formDirective)){let i=a.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in a&&this._updateDisabled(a),A5(a,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(a){this.viewModel=a,this.update.emit(a)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){D6(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(a){H6.then(()=>{this.control.setValue(a,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(a){let i=a.isDisabled.currentValue,t=i!==0&&F2(i);H6.then(()=>{t&&!this.control.disabled?this.control.disable():!t&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(a){return this._parent?g5(a,this._parent):[a]}static{this.\u0275fac=function(i){return new(i||c)(M(b1,9),M(p4,10),M(L6,10),M(g6,10),M(I4,8),M(M4,8))}}static{this.\u0275dir=S({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[D1([P5]),q,Y]})}}return c})(),E6=(()=>{class c{static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275dir=S({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return c})();var F5=(()=>{class c{constructor(){this._validator=v6}ngOnChanges(a){if(this.inputName in a){let i=this.normalizeInput(a[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):v6,this._onChange&&this._onChange()}}validate(a){return this._validator(a)}registerOnValidatorChange(a){this._onChange=a}enabled(a){return a!=null}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275dir=S({type:c,features:[Y]})}}return c})();var E5={provide:p4,useExisting:A1(()=>L4),multi:!0};var L4=(()=>{class c extends F5{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=F2,this.createValidator=a=>h5}enabled(a){return a}static{this.\u0275fac=(()=>{let a;return function(t){return(a||(a=J1(c)))(t||c)}})()}static{this.\u0275dir=S({type:c,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,t){i&2&&K1("required",t._enabled?"":null)},inputs:{required:"required"},features:[D1([E5]),q]})}}return c})();var T5=(()=>{class c{static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275mod=n1({type:c})}static{this.\u0275inj=t1({})}}return c})();var T6=(()=>{class c{static withConfig(a){return{ngModule:c,providers:[{provide:M4,useValue:a.callSetDisabledState??H4}]}}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275mod=n1({type:c})}static{this.\u0275inj=t1({imports:[T5]})}}return c})();var D=class{constructor(e=0,a="Network Error"){this.status=e,this.text=a}};var O6=()=>{if(!(typeof localStorage>"u"))return{get:c=>Promise.resolve(localStorage.getItem(c)),set:(c,e)=>Promise.resolve(localStorage.setItem(c,e)),remove:c=>Promise.resolve(localStorage.removeItem(c))}};var L={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:O6()};var y1=c=>c?typeof c=="string"?{publicKey:c}:c.toString()==="[object Object]"?c:{}:{};var I6=(c,e="https://api.emailjs.com")=>{if(!c)return;let a=y1(c);L.publicKey=a.publicKey,L.blockHeadless=a.blockHeadless,L.storageProvider=a.storageProvider,L.blockList=a.blockList,L.limitRate=a.limitRate,L.origin=a.origin||e};var C2=(i,t,...n)=>R(void 0,[i,t,...n],function*(c,e,a={}){let o=yield fetch(L.origin+c,{method:"POST",headers:a,body:e}),r=yield o.text(),l=new D(o.status,r);if(o.ok)return l;throw l});var M2=(c,e,a)=>{if(!c||typeof c!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"};var Z6=c=>{if(c&&c.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"};var H2=c=>c.webdriver||!c.languages||c.languages.length===0;var V2=()=>new D(451,"Unavailable For Headless Browser");var B6=(c,e)=>{if(!Array.isArray(c))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"};var I5=c=>!c.list?.length||!c.watchVariable,Z5=(c,e)=>c instanceof FormData?c.get(e):c[e],g2=(c,e)=>{if(I5(c))return!1;B6(c.list,c.watchVariable);let a=Z5(e,c.watchVariable);return typeof a!="string"?!1:c.list.includes(a)};var L2=()=>new D(403,"Forbidden");var R6=(c,e)=>{if(typeof c!="number"||c<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"};var B5=(c,e,a)=>R(void 0,null,function*(){let i=Number((yield a.get(c))||0);return e-Date.now()+i}),x2=(c,e,a)=>R(void 0,null,function*(){if(!e.throttle||!a)return!1;R6(e.throttle,e.id);let i=e.id||c;return(yield B5(i,e.throttle,a))>0?!0:(yield a.set(i,Date.now().toString()),!1)});var b2=()=>new D(429,"Too Many Requests");var q6=(c,e,a,i)=>R(void 0,null,function*(){let t=y1(i),n=t.publicKey||L.publicKey,o=t.blockHeadless||L.blockHeadless,r=t.storageProvider||L.storageProvider,l=s(s({},L.blockList),t.blockList),f=s(s({},L.limitRate),t.limitRate);return o&&H2(navigator)?Promise.reject(V2()):(M2(n,c,e),Z6(a),a&&g2(l,a)?Promise.reject(L2()):(yield x2(location.pathname,f,r))?Promise.reject(b2()):C2("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:n,service_id:c,template_id:e,template_params:a}),{"Content-type":"application/json"}))});var j6=c=>{if(!c||c.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"};var R5=c=>typeof c=="string"?document.querySelector(c):c,G6=(c,e,a,i)=>R(void 0,null,function*(){let t=y1(i),n=t.publicKey||L.publicKey,o=t.blockHeadless||L.blockHeadless,r=L.storageProvider||t.storageProvider,l=s(s({},L.blockList),t.blockList),f=s(s({},L.limitRate),t.limitRate);if(o&&H2(navigator))return Promise.reject(V2());let m=R5(a);M2(n,c,e),j6(m);let u=new FormData(m);return g2(l,u)?Promise.reject(L2()):(yield x2(location.pathname,f,r))?Promise.reject(b2()):(u.append("lib_version","4.4.1"),u.append("service_id",c),u.append("template_id",e),u.append("user_id",n),C2("/api/v1.0/email/send-form",u))});var U6={init:I6,send:q6,sendForm:G6,EmailJSResponseStatus:D};var W6=(()=>{class c{sendEmail(a){a.preventDefault(),U6.sendForm("service_f7vi5vn","template_accqmim",a.target,{publicKey:"Af2_8j24WbRM2tllX"}).then(()=>{alert("Message sent successfully!")},i=>{console.log("FAILED...",i.text),alert("Failed to send the message. Please try again later.")})}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-contact"]],standalone:!0,features:[b],decls:19,vars:0,consts:[["contactForm","ngForm"],[1,"contact-card"],[3,"submit"],[1,"form-group"],["for","name"],["type","text","id","from_name","name","from_name","required","","ngModel","","placeholder","Your Name",1,"form-control"],["for","email"],["type","email","id","email_id","name","email_id","required","","ngModel","","placeholder","Your Email",1,"form-control"],["for","message"],["id","message","name","message","required","","ngModel","","placeholder","Your Message",1,"form-control"],["type","submit",1,"submit-btn"]],template:function(i,t){if(i&1){let n=F4();v(0,"div",1)(1,"h2"),p(2,"Contact Me"),z(),v(3,"form",2,0),o1("submit",function(r){return w4(n),_4(t.sendEmail(r))}),v(5,"div",3)(6,"label",4),p(7,"Name"),z(),V(8,"input",5),z(),v(9,"div",3)(10,"label",6),p(11,"Email"),z(),V(12,"input",7),z(),v(13,"div",3)(14,"label",8),p(15,"Message"),z(),V(16,"textarea",9),z(),v(17,"button",10),p(18,"Send Message"),z()()()}},dependencies:[T6,E6,p2,S6,k6,L4,g4,V4],styles:[".contact-card[_ngcontent-%COMP%]{width:100%;max-width:500px;margin:20px auto 0;padding:20px;background-color:#fff;border-radius:8px;box-shadow:0 4px 8px #0003;text-align:center}.contact-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#13100f;font-size:2em;margin-bottom:15px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px;text-align:left}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px;color:#333}.form-control[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:1em;border:1px solid #ddd;border-radius:4px}textarea.form-control[_ngcontent-%COMP%]{resize:vertical;min-height:100px}.submit-btn[_ngcontent-%COMP%]{background-color:#157cf1;color:#fff;padding:10px 20px;font-size:1em;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s}.submit-btn[_ngcontent-%COMP%]:hover{background-color:#e64a19}"]})}}return c})();var $6=(()=>{class c{constructor(){this.darkThemeClass="dark-theme",this.lightThemeClass="light-theme"}enableDarkTheme(){document.body.classList.remove(this.lightThemeClass),document.body.classList.add(this.darkThemeClass)}enableLightTheme(){document.body.classList.remove(this.darkThemeClass),document.body.classList.add(this.lightThemeClass)}toggleTheme(a){a?this.enableDarkTheme():this.enableLightTheme()}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275prov=z1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();var Y6=(()=>{class c{constructor(a){this.themeService=a,this.isDarkMode=!1}ngOnInit(){let a=localStorage.getItem("theme");this.isDarkMode=a==="dark",this.themeService.toggleTheme(this.isDarkMode)}toggleTheme(){this.isDarkMode=!this.isDarkMode,this.themeService.toggleTheme(this.isDarkMode),localStorage.setItem("theme",this.isDarkMode?"dark":"light")}static{this.\u0275fac=function(i){return new(i||c)(M($6))}}static{this.\u0275cmp=x({type:c,selectors:[["app-navbar"]],standalone:!0,features:[b],decls:22,vars:2,consts:[[1,"navbar"],[1,"container"],["href","#",1,"navbar-brand"],[1,"navbar-links"],["routerLink","home"],["routerLink","about"],["routerLink","skills"],["routerLink","projects"],["routerLink","contact"],[1,"btn","btn-outline-light","theme-toggle",3,"click"]],template:function(i,t){i&1&&(v(0,"nav",0)(1,"div",1),V(2,"a",2),v(3,"ul",3)(4,"li")(5,"a",4),p(6,"Home"),z()(),v(7,"li")(8,"a",5),p(9,"About me"),z()(),v(10,"li")(11,"a",6),p(12,"Skills"),z()(),v(13,"li")(14,"a",7),p(15,"Projects"),z()(),v(16,"li")(17,"a",8),p(18,"Contact"),z()(),v(19,"li")(20,"button",9),o1("click",function(){return t.toggleTheme()}),V(21,"i"),z()()()()()),i&2&&(N(21),P4(t.isDarkMode?"bi bi-sun-fill":"bi bi-moon-fill"))},dependencies:[U4],styles:[".navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;padding:10px 20px;background-color:#000;color:#f0f8ff;position:sticky;top:0;width:100%;text-decoration:none}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;margin-left:50px}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:#72787e;border-radius:5px}.navbar-brand[_ngcontent-%COMP%]{font-size:24px;font-weight:700}.navbar-links[_ngcontent-%COMP%]{list-style:none;display:flex;justify-content:end;margin:0;padding:0}.navbar-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}.theme-toggle[_ngcontent-%COMP%]{color:#fff;border:none;padding:5px 10px;cursor:pointer;border-radius:90%}.theme-toggle[_ngcontent-%COMP%]:hover{background-color:#545e69;border-radius:90%}.btn[_ngcontent-%COMP%]{background-color:gray;justify-content:flex-end;size:200px}"]})}}return c})();var N2=(()=>{class c{static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-footer"]],standalone:!0,features:[b],decls:12,vars:0,consts:[[1,"footer"],["href","https://www.linkedin.com/in/muralikrishna-jakkamsetti-57bb901b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXlGPAKjWRVSCzhUZHBetpw%3D%3D","target","_blank","aria-label","LinkedIn"],[1,"fa","fa-linkedin"],["href","https://github.com/Muralikrishna23","target","_blank","aria-label","GitHub"],[1,"fa","fa-github"],["href","https://twitter.com/","target","_blank","aria-label","Twitter"],[1,"fa","fa-twitter"],["href","https://facebook.com/","target","_blank","aria-label","Facebook"],[1,"fa","fa-facebook"],["href","https://instagram.com/","target","_blank","aria-label","Instagram"],[1,"fa","fa-instagram"]],template:function(i,t){i&1&&(v(0,"div",0)(1,"div")(2,"a",1),V(3,"i",2),z(),v(4,"a",3),V(5,"i",4),z(),v(6,"a",5),V(7,"i",6),z(),v(8,"a",7),V(9,"i",8),z(),v(10,"a",9),V(11,"i",10),z()()())},dependencies:[s2],styles:[".footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:10px;background-color:#333;color:#fff;margin-top:20px}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 10px;color:#fff;font-size:1.2em;text-decoration:none;transition:color .3s}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#2294ff}.footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}.fa[_ngcontent-%COMP%]{padding:10px;font-size:20px;width:20px;text-align:center;text-decoration:none;margin:5px 2px}.fa[_ngcontent-%COMP%]:hover{opacity:.7}p[_ngcontent-%COMP%]{text-align:center;background-color:#333}"]})}}return c})();var J6=(()=>{class c{constructor(){this.title="portfolio"}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-root"]],standalone:!0,features:[b],decls:6,vars:0,template:function(i,t){i&1&&(v(0,"header")(1,"h1"),p(2,"Muralikrishna Jakkamsetti"),z()(),V(3,"app-navbar")(4,"router-outlet")(5,"app-footer"))},dependencies:[G4,Y6,N2],styles:['header[_ngcontent-%COMP%]{text-align:center;padding:1em 0;color:transparent;font-size:2.5em;background-image:url("./media/background1-PRYI3P3R.jpg")}']})}}return c})();function x4(){return x4=Object.assign?Object.assign.bind():function(c){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},x4.apply(this,arguments)}var j5={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(c){},onComplete:function(c){},preStringTyped:function(c,e){},onStringTyped:function(c,e){},onLastStringBackspaced:function(c){},onTypingPaused:function(c,e){},onTypingResumed:function(c,e){},onReset:function(c){},onStop:function(c,e){},onStart:function(c,e){},onDestroy:function(c){}},G5=new(function(){function c(){}var e=c.prototype;return e.load=function(a,i,t){if(a.el=typeof t=="string"?document.querySelector(t):t,a.options=x4({},j5,i),a.isInput=a.el.tagName.toLowerCase()==="input",a.attr=a.options.attr,a.bindInputFocusEvents=a.options.bindInputFocusEvents,a.showCursor=!a.isInput&&a.options.showCursor,a.cursorChar=a.options.cursorChar,a.cursorBlinking=!0,a.elContent=a.attr?a.el.getAttribute(a.attr):a.el.textContent,a.contentType=a.options.contentType,a.typeSpeed=a.options.typeSpeed,a.startDelay=a.options.startDelay,a.backSpeed=a.options.backSpeed,a.smartBackspace=a.options.smartBackspace,a.backDelay=a.options.backDelay,a.fadeOut=a.options.fadeOut,a.fadeOutClass=a.options.fadeOutClass,a.fadeOutDelay=a.options.fadeOutDelay,a.isPaused=!1,a.strings=a.options.strings.map(function(f){return f.trim()}),a.stringsElement=typeof a.options.stringsElement=="string"?document.querySelector(a.options.stringsElement):a.options.stringsElement,a.stringsElement){a.strings=[],a.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(a.stringsElement.children),o=n.length;if(o)for(var r=0;r<o;r+=1)a.strings.push(n[r].innerHTML.trim())}for(var l in a.strPos=0,a.currentElContent=this.getCurrentElContent(a),a.currentElContent&&a.currentElContent.length>0&&(a.strPos=a.currentElContent.length-1,a.strings.unshift(a.currentElContent)),a.sequence=[],a.strings)a.sequence[l]=l;a.arrayPos=0,a.stopNum=0,a.loop=a.options.loop,a.loopCount=a.options.loopCount,a.curLoop=0,a.shuffle=a.options.shuffle,a.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},a.typingComplete=!1,a.autoInsertCss=a.options.autoInsertCss,a.autoInsertCss&&(this.appendCursorAnimationCss(a),this.appendFadeOutAnimationCss(a))},e.getCurrentElContent=function(a){return a.attr?a.el.getAttribute(a.attr):a.isInput?a.el.value:a.contentType==="html"?a.el.innerHTML:a.el.textContent},e.appendCursorAnimationCss=function(a){var i="data-typed-js-cursor-css";if(a.showCursor&&!document.querySelector("["+i+"]")){var t=document.createElement("style");t.setAttribute(i,"true"),t.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(t)}},e.appendFadeOutAnimationCss=function(a){var i="data-typed-fadeout-js-css";if(a.fadeOut&&!document.querySelector("["+i+"]")){var t=document.createElement("style");t.setAttribute(i,"true"),t.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(t)}},c}()),K6=new(function(){function c(){}var e=c.prototype;return e.typeHtmlChars=function(a,i,t){if(t.contentType!=="html")return i;var n=a.substring(i).charAt(0);if(n==="<"||n==="&"){var o;for(o=n==="<"?">":";";a.substring(i+1).charAt(0)!==o&&!(1+ ++i>a.length););i++}return i},e.backSpaceHtmlChars=function(a,i,t){if(t.contentType!=="html")return i;var n=a.substring(i).charAt(0);if(n===">"||n===";"){var o;for(o=n===">"?"<":"&";a.substring(i-1).charAt(0)!==o&&!(--i<0););i--}return i},c}()),b4=function(){function c(a,i){G5.load(this,i,a),this.begin()}var e=c.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(a){a===void 0&&(a=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,a&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var a=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){a.strPos===0?a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos):a.backspace(a.strings[a.sequence[a.arrayPos]],a.strPos)},this.startDelay)},e.typewrite=function(a,i){var t=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=K6.typeHtmlChars(a,i,t);var r=0,l=a.substring(i);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var f=1;f+=(l=/\d+/.exec(l)[0]).length,r=parseInt(l),t.temporaryPause=!0,t.options.onTypingPaused(t.arrayPos,t),a=a.substring(0,i)+a.substring(i+f),t.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;a.substring(i+o).charAt(0)!=="`"&&(o++,!(i+o>a.length)););var m=a.substring(0,i),u=a.substring(m.length+1,i+o),d=a.substring(i+o+1);a=m+u+d,o--}t.timeout=setTimeout(function(){t.toggleBlinking(!1),i>=a.length?t.doneTyping(a,i):t.keepTyping(a,i,o),t.temporaryPause&&(t.temporaryPause=!1,t.options.onTypingResumed(t.arrayPos,t))},r)},n):this.setPauseStatus(a,i,!0)},e.keepTyping=function(a,i,t){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=a.substring(0,i+=t);this.replaceText(n),this.typewrite(a,i)},e.doneTyping=function(a,i){var t=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){t.backspace(a,i)},this.backDelay))},e.backspace=function(a,i){var t=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=K6.backSpaceHtmlChars(a,i,t);var o=a.substring(0,i);if(t.replaceText(o),t.smartBackspace){var r=t.strings[t.arrayPos+1];t.stopNum=r&&o===r.substring(0,i)?i:0}i>t.stopNum?(i--,t.backspace(a,i)):i<=t.stopNum&&(t.arrayPos++,t.arrayPos===t.strings.length?(t.arrayPos=0,t.options.onLastStringBackspaced(),t.shuffleStringsIfNeeded(),t.begin()):t.typewrite(t.strings[t.sequence[t.arrayPos]],i))},n)}else this.setPauseStatus(a,i,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(a,i,t){this.pause.typewrite=t,this.pause.curString=a,this.pause.curStrPos=i},e.toggleBlinking=function(a){this.cursor&&(this.pause.status||this.cursorBlinking!==a&&(this.cursorBlinking=a,a?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(a){return Math.round(Math.random()*a/2)+a},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var a=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){a.arrayPos++,a.replaceText(""),a.strings.length>a.arrayPos?a.typewrite(a.strings[a.sequence[a.arrayPos]],0):(a.typewrite(a.strings[0],0),a.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(a){this.attr?this.el.setAttribute(this.attr,a):this.isInput?this.el.value=a:this.contentType==="html"?this.el.innerHTML=a:this.el.textContent=a},e.bindFocusEvents=function(){var a=this;this.isInput&&(this.el.addEventListener("focus",function(i){a.stop()}),this.el.addEventListener("blur",function(i){a.el.value&&a.el.value.length!==0||a.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},c}();var Q6=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=n1({type:c}),c.\u0275inj=t1({imports:[[]]}),c})();var U5=["typedElement"],N4=(()=>{class c{ngOnInit(){let a={strings:["Java Developer","FullStackDeveloper","Problem solver"],typeSpeed:50,backSpeed:25,loop:!0};new b4(this.typedElement.nativeElement,a)}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-home"]],viewQuery:function(i,t){if(i&1&&_2(U5,7),i&2){let n;D2(n=P2())&&(t.typedElement=n.first)}},standalone:!0,features:[b],decls:11,vars:0,consts:[["typedElement",""],[1,"home"],[1,"type"],["href","../../assets/Muralikrishna_Jakkamsetti_1.pdf","download","",1,"download-btn"]],template:function(i,t){i&1&&(v(0,"div",1)(1,"h1"),p(2,"Muralikrishna Jakkamsetti"),z(),V(3,"br"),v(4,"h2",2),p(5,"I am "),V(6,"span",null,0),z(),V(8,"br"),v(9,"a",3),p(10,"My Resume"),z()())},dependencies:[Q6,K,$4],styles:[".home[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}ngx-typed-js[_ngcontent-%COMP%]{font-size:24px;margin-top:20px}.h1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:50px}.download-btn[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;margin-top:20px;background-color:#ff5722;color:#fff;text-decoration:none;border-radius:5px;transition:background-color .3s}.download-btn[_ngcontent-%COMP%]:hover{background-color:#e64a19}"]})}}return c})();var X6=[{path:"home",component:N4},{path:"projects",component:m6},{path:"skills",component:f6},{path:"",component:N4},{path:"about",component:h6},{path:"contact",component:W6},{path:"footer",component:N2}];var c8={providers:[W4(X6)]};var W5={providers:[j4()]},a8=Z4(c8,W5);var $5=()=>R4(J6,a8),Qc=$5;export{Qc as a};
