import './polyfills.server.mjs';
import{A as G1,B as j,C as U1,D as y4,E as z,F as m,G as H,H as A4,I as S4,J as t1,K as x2,L as b2,M as k4,N as N2,O as y2,P as A2,Q as p,R as T,S as k1,T as b,V as w4,_ as _4,a as V4,aa as S2,b as g4,ba as D4,c as L4,ca as k2,d as q1,da as P4,e as b1,f as v1,fa as u1,g as i1,ga as J,h as z1,ha as F4,i as g2,ia as E4,j as N1,k as x,l as n1,la as T4,m as S,n as Y,o as x4,p as b4,pa as I4,q as j1,r as y1,s as A1,sa as O4,t as N4,ta as Z4,u as L2,ua as B4,v as N,w as M,x as S1,y as q,z as p1}from"./chunk-T5WJJR2M.mjs";import{a as s,b as C,h as R}from"./chunk-VVCT4QZE.mjs";var R4=()=>{},K2={},m3={},v3=null,z3={mark:R4,measure:R4};try{typeof window<"u"&&(K2=window),typeof document<"u"&&(m3=document),typeof MutationObserver<"u"&&(v3=MutationObserver),typeof performance<"u"&&(z3=performance)}catch{}var{userAgent:q4=""}=K2.navigator||{},X=K2,V=m3,j4=v3,W1=z3,B5=!!X.document,W=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",p3=~q4.indexOf("MSIE")||~q4.indexOf("Trident/"),g="classic",u3="duotone",k="sharp",w="sharp-duotone",K6=[g,u3,k,w],Q6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},G4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},X6=["kit"],c8=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,a8=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,e8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},i8={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},n8={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},t8={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},o8={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},r8={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},d3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},s8=["solid","regular","light","thin","duotone","brands"],C3=[1,2,3,4,5,6,7,8,9,10],l8=C3.concat([11,12,13,14,15,16,17,18,19,20]),w1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},f8=[...Object.keys(t8),...s8,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",w1.GROUP,w1.SWAP_OPACITY,w1.PRIMARY,w1.SECONDARY].concat(C3.map(c=>"".concat(c,"x"))).concat(l8.map(c=>"w-".concat(c))),h8={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},m8={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},v8={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},U4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},G="___FONT_AWESOME___",E2=16,M3="fa",H3="svg-inline--fa",l1="data-fa-i2svg",T2="data-fa-pseudo-element",z8="data-fa-pseudo-element-pending",Q2="data-prefix",X2="data-icon",W4="fontawesome-i2svg",p8="async",u8=["HTML","HEAD","STYLE","SCRIPT"],V3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),g3=[g,k,w];function T1(c){return new Proxy(c,{get(e,a){return a in e?e[a]:e[g]}})}var L3=s({},d3);L3[g]=s(s(s({},d3[g]),G4.kit),G4["kit-duotone"]);var r1=T1(L3),I2=s({},r8);I2[g]=s(s(s({},I2[g]),U4.kit),U4["kit-duotone"]);var F1=T1(I2),O2=s({},o8);O2[g]=s(s({},O2[g]),v8.kit);var s1=T1(O2),Z2=s({},n8);Z2[g]=s(s({},Z2[g]),m8.kit);var d8=T1(Z2),C8=c8,x3="fa-layers-text",M8=a8,H8=s({},Q6),R5=T1(H8),V8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],w2=w1,M1=new Set;Object.keys(F1[g]).map(M1.add.bind(M1));Object.keys(F1[k]).map(M1.add.bind(M1));Object.keys(F1[w]).map(M1.add.bind(M1));var g8=[...X6,...f8],D1=X.FontAwesomeConfig||{};function L8(c){var e=V.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function x8(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}V&&typeof V.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[a,i]=e,n=x8(L8(a));n!=null&&(D1[i]=n)});var b3={styleDefault:"solid",familyDefault:"classic",cssPrefix:M3,replacementClass:H3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};D1.familyPrefix&&(D1.cssPrefix=D1.familyPrefix);var H1=s(s({},b3),D1);H1.autoReplaceSvg||(H1.observeMutations=!1);var h={};Object.keys(b3).forEach(c=>{Object.defineProperty(h,c,{enumerable:!0,set:function(e){H1[c]=e,P1.forEach(a=>a(h))},get:function(){return H1[c]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(c){H1.cssPrefix=c,P1.forEach(e=>e(h))},get:function(){return H1.cssPrefix}});X.FontAwesomeConfig=h;var P1=[];function b8(c){return P1.push(c),()=>{P1.splice(P1.indexOf(c),1)}}var K=E2,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function N8(c){if(!c||!W)return;let e=V.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let a=V.head.childNodes,i=null;for(let n=a.length-1;n>-1;n--){let t=a[n],o=(t.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=t)}return V.head.insertBefore(e,i),c}var y8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function E1(){let c=12,e="";for(;c-- >0;)e+=y8[Math.random()*62|0];return e}function V1(c){let e=[];for(let a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function c4(c){return c.classList?V1(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function N3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A8(c){return Object.keys(c||{}).reduce((e,a)=>e+"".concat(a,'="').concat(N3(c[a]),'" '),"").trim()}function Q1(c){return Object.keys(c||{}).reduce((e,a)=>e+"".concat(a,": ").concat(c[a].trim(),";"),"")}function a4(c){return c.size!==I.size||c.x!==I.x||c.y!==I.y||c.rotate!==I.rotate||c.flipX||c.flipY}function S8(c){let{transform:e,containerWidth:a,iconWidth:i}=c,n={transform:"translate(".concat(a/2," 256)")},t="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),r="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(t," ").concat(o," ").concat(r)},f={transform:"translate(".concat(i/2*-1," -256)")};return{outer:n,inner:l,path:f}}function k8(c){let{transform:e,width:a=E2,height:i=E2,startCentered:n=!1}=c,t="";return n&&p3?t+="translate(".concat(e.x/K-a/2,"em, ").concat(e.y/K-i/2,"em) "):n?t+="translate(calc(-50% + ".concat(e.x/K,"em), calc(-50% + ").concat(e.y/K,"em)) "):t+="translate(".concat(e.x/K,"em, ").concat(e.y/K,"em) "),t+="scale(".concat(e.size/K*(e.flipX?-1:1),", ").concat(e.size/K*(e.flipY?-1:1),") "),t+="rotate(".concat(e.rotate,"deg) "),t}var w8=`:root, :host {
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
}`;function y3(){let c=M3,e=H3,a=h.cssPrefix,i=h.replacementClass,n=w8;if(a!==c||i!==e){let t=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),r=new RegExp("\\.".concat(e),"g");n=n.replace(t,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(r,".".concat(i))}return n}var $4=!1;function _2(){h.autoAddCss&&!$4&&(N8(y3()),$4=!0)}var _8={mixout(){return{dom:{css:y3,insertCss:_2}}},hooks(){return{beforeDOMElementCreation(){_2()},beforeI2svg(){_2()}}}},U=X||{};U[G]||(U[G]={});U[G].styles||(U[G].styles={});U[G].hooks||(U[G].hooks={});U[G].shims||(U[G].shims=[]);var O=U[G],A3=[],S3=function(){V.removeEventListener("DOMContentLoaded",S3),J1=1,A3.map(c=>c())},J1=!1;W&&(J1=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),J1||V.addEventListener("DOMContentLoaded",S3));function D8(c){W&&(J1?setTimeout(c,0):A3.push(c))}function I1(c){let{tag:e,attributes:a={},children:i=[]}=c;return typeof c=="string"?N3(c):"<".concat(e," ").concat(A8(a),">").concat(i.map(I1).join(""),"</").concat(e,">")}function Y4(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var P8=function(e,a){return function(i,n,t,o){return e.call(a,i,n,t,o)}},D2=function(e,a,i,n){var t=Object.keys(e),o=t.length,r=n!==void 0?P8(a,n):a,l,f,v;for(i===void 0?(l=1,v=e[t[0]]):(l=0,v=i);l<o;l++)f=t[l],v=r(v,e[f],f,e);return v};function F8(c){let e=[],a=0,i=c.length;for(;a<i;){let n=c.charCodeAt(a++);if(n>=55296&&n<=56319&&a<i){let t=c.charCodeAt(a++);(t&64512)==56320?e.push(((n&1023)<<10)+(t&1023)+65536):(e.push(n),a--)}else e.push(n)}return e}function B2(c){let e=F8(c);return e.length===1?e[0].toString(16):null}function E8(c,e){let a=c.length,i=c.charCodeAt(e),n;return i>=55296&&i<=56319&&a>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(i-55296)*1024+n-56320+65536:i}function J4(c){return Object.keys(c).reduce((e,a)=>{let i=c[a];return!!i.icon?e[i.iconName]=i.icon:e[a]=i,e},{})}function R2(c,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:i=!1}=a,n=J4(e);typeof O.hooks.addPack=="function"&&!i?O.hooks.addPack(c,J4(e)):O.styles[c]=s(s({},O.styles[c]||{}),n),c==="fas"&&R2("fa",e)}var{styles:o1,shims:T8}=O,I8={[g]:Object.values(s1[g]),[k]:Object.values(s1[k]),[w]:Object.values(s1[w])},e4=null,k3={},w3={},_3={},D3={},P3={},O8={[g]:Object.keys(r1[g]),[k]:Object.keys(r1[k]),[w]:Object.keys(r1[w])};function Z8(c){return~g8.indexOf(c)}function B8(c,e){let a=e.split("-"),i=a[0],n=a.slice(1).join("-");return i===c&&n!==""&&!Z8(n)?n:null}var F3=()=>{let c=i=>D2(o1,(n,t,o)=>(n[o]=D2(t,i,{}),n),{});k3=c((i,n,t)=>(n[3]&&(i[n[3]]=t),n[2]&&n[2].filter(r=>typeof r=="number").forEach(r=>{i[r.toString(16)]=t}),i)),w3=c((i,n,t)=>(i[t]=t,n[2]&&n[2].filter(r=>typeof r=="string").forEach(r=>{i[r]=t}),i)),P3=c((i,n,t)=>{let o=n[2];return i[t]=t,o.forEach(r=>{i[r]=t}),i});let e="far"in o1||h.autoFetchSvg,a=D2(T8,(i,n)=>{let t=n[0],o=n[1],r=n[2];return o==="far"&&!e&&(o="fas"),typeof t=="string"&&(i.names[t]={prefix:o,iconName:r}),typeof t=="number"&&(i.unicodes[t.toString(16)]={prefix:o,iconName:r}),i},{names:{},unicodes:{}});_3=a.names,D3=a.unicodes,e4=X1(h.styleDefault,{family:h.familyDefault})};b8(c=>{e4=X1(c.styleDefault,{family:h.familyDefault})});F3();function i4(c,e){return(k3[c]||{})[e]}function R8(c,e){return(w3[c]||{})[e]}function Q(c,e){return(P3[c]||{})[e]}function E3(c){return _3[c]||{prefix:null,iconName:null}}function q8(c){let e=D3[c],a=i4("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function c1(){return e4}var n4=()=>({prefix:null,iconName:null,rest:[]});function X1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:a=g}=e,i=r1[a][c],n=F1[a][c]||F1[a][i],t=c in O.styles?c:null;return n||t||null}var j8={[g]:Object.keys(s1[g]),[k]:Object.keys(s1[k]),[w]:Object.keys(s1[w])};function c2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:a=!1}=e,i={[g]:"".concat(h.cssPrefix,"-").concat(g),[k]:"".concat(h.cssPrefix,"-").concat(k),[w]:"".concat(h.cssPrefix,"-").concat(w)},n=null,t=g,o=K6.filter(l=>l!==u3);o.forEach(l=>{(c.includes(i[l])||c.some(f=>j8[l].includes(f)))&&(t=l)});let r=c.reduce((l,f)=>{let v=B8(h.cssPrefix,f);if(o1[f]?(f=I8[t].includes(f)?d8[t][f]:f,n=f,l.prefix=f):O8[t].indexOf(f)>-1?(n=f,l.prefix=X1(f,{family:t})):v?l.iconName=v:f!==h.replacementClass&&!o.some(u=>f===i[u])&&l.rest.push(f),!a&&l.prefix&&l.iconName){let u=n==="fa"?E3(l.iconName):{},d=Q(l.prefix,l.iconName);u.prefix&&(n=null),l.iconName=u.iconName||d||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!o1.far&&o1.fas&&!h.autoFetchSvg&&(l.prefix="fas")}return l},n4());return(c.includes("fa-brands")||c.includes("fab"))&&(r.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(r.prefix="fad"),!r.prefix&&t===k&&(o1.fass||h.autoFetchSvg)&&(r.prefix="fass",r.iconName=Q(r.prefix,r.iconName)||r.iconName),!r.prefix&&t===w&&(o1.fasds||h.autoFetchSvg)&&(r.prefix="fasds",r.iconName=Q(r.prefix,r.iconName)||r.iconName),(r.prefix==="fa"||n==="fa")&&(r.prefix=c1()||"fas"),r}var q2=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];let n=a.reduce(this._pullDefinitions,{});Object.keys(n).forEach(t=>{this.definitions[t]=s(s({},this.definitions[t]||{}),n[t]),R2(t,n[t]);let o=s1[g][t];o&&R2(o,n[t]),F3()})}reset(){this.definitions={}}_pullDefinitions(e,a){let i=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(i).map(n=>{let{prefix:t,iconName:o,icon:r}=i[n],l=r[2];e[t]||(e[t]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(e[t][f]=r)}),e[t][o]=r}),e}},K4=[],d1={},C1={},G8=Object.keys(C1);function U8(c,e){let{mixoutsTo:a}=e;return K4=c,d1={},Object.keys(C1).forEach(i=>{G8.indexOf(i)===-1&&delete C1[i]}),K4.forEach(i=>{let n=i.mixout?i.mixout():{};if(Object.keys(n).forEach(t=>{typeof n[t]=="function"&&(a[t]=n[t]),typeof n[t]=="object"&&Object.keys(n[t]).forEach(o=>{a[t]||(a[t]={}),a[t][o]=n[t][o]})}),i.hooks){let t=i.hooks();Object.keys(t).forEach(o=>{d1[o]||(d1[o]=[]),d1[o].push(t[o])})}i.provides&&i.provides(C1)}),a}function j2(c,e){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];return(d1[c]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function f1(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),i=1;i<e;i++)a[i-1]=arguments[i];(d1[c]||[]).forEach(t=>{t.apply(null,a)})}function a1(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return C1[c]?C1[c].apply(null,e):void 0}function G2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,a=c.prefix||c1();if(e)return e=Q(a,e)||e,Y4(T3.definitions,a,e)||Y4(O.styles,a,e)}var T3=new q2,W8=()=>{h.autoReplaceSvg=!1,h.observeMutations=!1,f1("noAuto")},$8={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(f1("beforeI2svg",c),a1("pseudoElements2svg",c),a1("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,D8(()=>{J8({autoReplaceSvgRoot:e}),f1("watch",c)})}},Y8={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:Q(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=X1(c[0]);return{prefix:a,iconName:Q(a,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(h.cssPrefix,"-"))>-1||c.match(C8))){let e=c2(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||c1(),iconName:Q(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=c1();return{prefix:e,iconName:Q(e,c)||c}}}},_={noAuto:W8,config:h,dom:$8,parse:Y8,library:T3,findIconDefinition:G2,toHtml:I1},J8=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=V}=c;(Object.keys(O.styles).length>0||h.autoFetchSvg)&&W&&h.autoReplaceSvg&&_.dom.i2svg({node:e})};function a2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(a=>I1(a))}}),Object.defineProperty(c,"node",{get:function(){if(!W)return;let a=V.createElement("div");return a.innerHTML=c.html,a.children}}),c}function K8(c){let{children:e,main:a,mask:i,attributes:n,styles:t,transform:o}=c;if(a4(o)&&a.found&&!i.found){let{width:r,height:l}=a,f={x:r/l/2,y:.5};n.style=Q1(C(s({},t),{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function Q8(c){let{prefix:e,iconName:a,children:i,attributes:n,symbol:t}=c,o=t===!0?"".concat(e,"-").concat(h.cssPrefix,"-").concat(a):t;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(s({},n),{id:o}),children:i}]}]}function t4(c){let{icons:{main:e,mask:a},prefix:i,iconName:n,transform:t,symbol:o,title:r,maskId:l,titleId:f,extra:v,watchable:u=!1}=c,{width:d,height:y}=a.found?a:e,$=i==="fak",e1=[h.replacementClass,n?"".concat(h.cssPrefix,"-").concat(n):""].filter(m1=>v.classes.indexOf(m1)===-1).filter(m1=>m1!==""||!!m1).concat(v.classes).join(" "),P={children:[],attributes:C(s({},v.attributes),{"data-prefix":i,"data-icon":n,class:e1,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(y)})},B=$&&!~v.classes.indexOf("fa-fw")?{width:"".concat(d/y*16*.0625,"em")}:{};u&&(P.attributes[l1]=""),r&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(f||E1())},children:[r]}),delete P.attributes.title);let A=C(s({},P),{prefix:i,iconName:n,main:e,mask:a,maskId:l,transform:t,symbol:o,styles:s(s({},B),v.styles)}),{children:F,attributes:h1}=a.found&&e.found?a1("generateAbstractMask",A)||{children:[],attributes:{}}:a1("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=F,A.attributes=h1,o?Q8(A):K8(A)}function Q4(c){let{content:e,width:a,height:i,transform:n,title:t,extra:o,watchable:r=!1}=c,l=C(s(s({},o.attributes),t?{title:t}:{}),{class:o.classes.join(" ")});r&&(l[l1]="");let f=s({},o.styles);a4(n)&&(f.transform=k8({transform:n,startCentered:!0,width:a,height:i}),f["-webkit-transform"]=f.transform);let v=Q1(f);v.length>0&&(l.style=v);let u=[];return u.push({tag:"span",attributes:l,children:[e]}),t&&u.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),u}function X8(c){let{content:e,title:a,extra:i}=c,n=C(s(s({},i.attributes),a?{title:a}:{}),{class:i.classes.join(" ")}),t=Q1(i.styles);t.length>0&&(n.style=t);let o=[];return o.push({tag:"span",attributes:n,children:[e]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var{styles:P2}=O;function U2(c){let e=c[0],a=c[1],[i]=c.slice(4),n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(w2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(w2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(w2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:n}}var c0={found:!1,width:512,height:512};function a0(c,e){!V3&&!h.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function W2(c,e){let a=e;return e==="fa"&&h.styleDefault!==null&&(e=c1()),new Promise((i,n)=>{if(a==="fa"){let t=E3(c)||{};c=t.iconName||c,e=t.prefix||e}if(c&&e&&P2[e]&&P2[e][c]){let t=P2[e][c];return i(U2(t))}a0(c,e),i(C(s({},c0),{icon:h.showMissingIcons&&c?a1("missingIconAbstract")||{}:{}}))})}var X4=()=>{},$2=h.measurePerformance&&W1&&W1.mark&&W1.measure?W1:{mark:X4,measure:X4},_1='FA "6.6.0"',e0=c=>($2.mark("".concat(_1," ").concat(c," begins")),()=>I3(c)),I3=c=>{$2.mark("".concat(_1," ").concat(c," ends")),$2.measure("".concat(_1," ").concat(c),"".concat(_1," ").concat(c," begins"),"".concat(_1," ").concat(c," ends"))},o4={begin:e0,end:I3},$1=()=>{};function c3(c){return typeof(c.getAttribute?c.getAttribute(l1):null)=="string"}function i0(c){let e=c.getAttribute?c.getAttribute(Q2):null,a=c.getAttribute?c.getAttribute(X2):null;return e&&a}function n0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h.replacementClass)}function t0(){return h.autoReplaceSvg===!0?Y1.replace:Y1[h.autoReplaceSvg]||Y1.replace}function o0(c){return V.createElementNS("http://www.w3.org/2000/svg",c)}function r0(c){return V.createElement(c)}function O3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:a=c.tag==="svg"?o0:r0}=e;if(typeof c=="string")return V.createTextNode(c);let i=a(c.tag);return Object.keys(c.attributes||[]).forEach(function(t){i.setAttribute(t,c.attributes[t])}),(c.children||[]).forEach(function(t){i.appendChild(O3(t,{ceFn:a}))}),i}function s0(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Y1={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(a=>{e.parentNode.insertBefore(O3(a),e)}),e.getAttribute(l1)===null&&h.keepOriginalSource){let a=V.createComment(s0(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(c){let e=c[0],a=c[1];if(~c4(e).indexOf(h.replacementClass))return Y1.replace(c);let i=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){let t=a[0].attributes.class.split(" ").reduce((o,r)=>(r===h.replacementClass||r.match(i)?o.toSvg.push(r):o.toNode.push(r),o),{toNode:[],toSvg:[]});a[0].attributes.class=t.toSvg.join(" "),t.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",t.toNode.join(" "))}let n=a.map(t=>I1(t)).join(`
`);e.setAttribute(l1,""),e.innerHTML=n}};function a3(c){c()}function Z3(c,e){let a=typeof e=="function"?e:$1;if(c.length===0)a();else{let i=a3;h.mutateApproach===p8&&(i=X.requestAnimationFrame||a3),i(()=>{let n=t0(),t=o4.begin("mutate");c.map(n),t(),a()})}}var r4=!1;function B3(){r4=!0}function Y2(){r4=!1}var K1=null;function e3(c){if(!j4||!h.observeMutations)return;let{treeCallback:e=$1,nodeCallback:a=$1,pseudoElementsCallback:i=$1,observeMutationsRoot:n=V}=c;K1=new j4(t=>{if(r4)return;let o=c1();V1(t).forEach(r=>{if(r.type==="childList"&&r.addedNodes.length>0&&!c3(r.addedNodes[0])&&(h.searchPseudoElements&&i(r.target),e(r.target)),r.type==="attributes"&&r.target.parentNode&&h.searchPseudoElements&&i(r.target.parentNode),r.type==="attributes"&&c3(r.target)&&~V8.indexOf(r.attributeName))if(r.attributeName==="class"&&i0(r.target)){let{prefix:l,iconName:f}=c2(c4(r.target));r.target.setAttribute(Q2,l||o),f&&r.target.setAttribute(X2,f)}else n0(r.target)&&a(r.target)})}),W&&K1.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function l0(){K1&&K1.disconnect()}function f0(c){let e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce((i,n)=>{let t=n.split(":"),o=t[0],r=t.slice(1);return o&&r.length>0&&(i[o]=r.join(":").trim()),i},{})),a}function h0(c){let e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),i=c.innerText!==void 0?c.innerText.trim():"",n=c2(c4(c));return n.prefix||(n.prefix=c1()),e&&a&&(n.prefix=e,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&i.length>0&&(n.iconName=R8(n.prefix,c.innerText)||i4(n.prefix,B2(c.innerText))),!n.iconName&&h.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function m0(c){let e=V1(c.attributes).reduce((n,t)=>(n.name!=="class"&&n.name!=="style"&&(n[t.name]=t.value),n),{}),a=c.getAttribute("title"),i=c.getAttribute("data-fa-title-id");return h.autoA11y&&(a?e["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(i||E1()):(e["aria-hidden"]="true",e.focusable="false")),e}function v0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function i3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:a,prefix:i,rest:n}=h0(c),t=m0(c),o=j2("parseNodeAttributes",{},c),r=e.styleParser?f0(c):[];return s({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:r,attributes:t}},o)}var{styles:z0}=O;function R3(c){let e=h.autoReplaceSvg==="nest"?i3(c,{styleParser:!1}):i3(c);return~e.extra.classes.indexOf(x3)?a1("generateLayersText",c,e):a1("generateSvgReplacementMutation",c,e)}var Z=new Set;g3.map(c=>{Z.add("fa-".concat(c))});Object.keys(r1[g]).map(Z.add.bind(Z));Object.keys(r1[k]).map(Z.add.bind(Z));Object.keys(r1[w]).map(Z.add.bind(Z));Z=[...Z];function n3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();let a=V.documentElement.classList,i=v=>a.add("".concat(W4,"-").concat(v)),n=v=>a.remove("".concat(W4,"-").concat(v)),t=h.autoFetchSvg?Z:g3.map(v=>"fa-".concat(v)).concat(Object.keys(z0));t.includes("fa")||t.push("fa");let o=[".".concat(x3,":not([").concat(l1,"])")].concat(t.map(v=>".".concat(v,":not([").concat(l1,"])"))).join(", ");if(o.length===0)return Promise.resolve();let r=[];try{r=V1(c.querySelectorAll(o))}catch{}if(r.length>0)i("pending"),n("complete");else return Promise.resolve();let l=o4.begin("onTree"),f=r.reduce((v,u)=>{try{let d=R3(u);d&&v.push(d)}catch(d){V3||d.name==="MissingIcon"&&console.error(d)}return v},[]);return new Promise((v,u)=>{Promise.all(f).then(d=>{Z3(d,()=>{i("active"),i("complete"),n("pending"),typeof e=="function"&&e(),l(),v()})}).catch(d=>{l(),u(d)})})}function p0(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;R3(c).then(a=>{a&&Z3([a],e)})}function u0(c){return function(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:G2(e||{}),{mask:n}=a;return n&&(n=(n||{}).icon?n:G2(n||{})),c(i,C(s({},a),{mask:n}))}}var d0=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=I,symbol:i=!1,mask:n=null,maskId:t=null,title:o=null,titleId:r=null,classes:l=[],attributes:f={},styles:v={}}=e;if(!c)return;let{prefix:u,iconName:d,icon:y}=c;return a2(s({type:"icon"},c),()=>(f1("beforeDOMElementCreation",{iconDefinition:c,params:e}),h.autoA11y&&(o?f["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(r||E1()):(f["aria-hidden"]="true",f.focusable="false")),t4({icons:{main:U2(y),mask:n?U2(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:s(s({},I),a),symbol:i,title:o,maskId:t,titleId:r,extra:{attributes:f,styles:v,classes:l}})))},C0={mixout(){return{icon:u0(d0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=n3,c.nodeCallback=p0,c}}},provides(c){c.i2svg=function(e){let{node:a=V,callback:i=()=>{}}=e;return n3(a,i)},c.generateSvgReplacementMutation=function(e,a){let{iconName:i,title:n,titleId:t,prefix:o,transform:r,symbol:l,mask:f,maskId:v,extra:u}=a;return new Promise((d,y)=>{Promise.all([W2(i,o),f.iconName?W2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then($=>{let[e1,P]=$;d([e,t4({icons:{main:e1,mask:P},prefix:o,iconName:i,transform:r,symbol:l,maskId:v,title:n,titleId:t,extra:u,watchable:!0})])}).catch(y)})},c.generateAbstractIcon=function(e){let{children:a,attributes:i,main:n,transform:t,styles:o}=e,r=Q1(o);r.length>0&&(i.style=r);let l;return a4(t)&&(l=a1("generateAbstractTransformGrouping",{main:n,transform:t,containerWidth:n.width,iconWidth:n.width})),a.push(l||n.icon),{children:a,attributes:i}}}},M0={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:a=[]}=e;return a2({type:"layer"},()=>{f1("beforeDOMElementCreation",{assembler:c,params:e});let i=[];return c(n=>{Array.isArray(n)?n.map(t=>{i=i.concat(t.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers"),...a].join(" ")},children:i}]})}}}},H0={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:a=null,classes:i=[],attributes:n={},styles:t={}}=e;return a2({type:"counter",content:c},()=>(f1("beforeDOMElementCreation",{content:c,params:e}),X8({content:c.toString(),title:a,extra:{attributes:n,styles:t,classes:["".concat(h.cssPrefix,"-layers-counter"),...i]}})))}}}},V0={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=I,title:i=null,classes:n=[],attributes:t={},styles:o={}}=e;return a2({type:"text",content:c},()=>(f1("beforeDOMElementCreation",{content:c,params:e}),Q4({content:c,transform:s(s({},I),a),title:i,extra:{attributes:t,styles:o,classes:["".concat(h.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(e,a){let{title:i,transform:n,extra:t}=a,o=null,r=null;if(p3){let l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/l,r=f.height/l}return h.autoA11y&&!i&&(t.attributes["aria-hidden"]="true"),Promise.resolve([e,Q4({content:e.innerHTML,width:o,height:r,transform:n,title:i,extra:t,watchable:!0})])}}},g0=new RegExp('"',"ug"),t3=[1105920,1112319],o3=s(s(s({FontAwesome:{normal:"fas",400:"fas"}},i8),e8),h8),J2=Object.keys(o3).reduce((c,e)=>(c[e.toLowerCase()]=o3[e],c),{}),L0=Object.keys(J2).reduce((c,e)=>{let a=J2[e];return c[e]=a[900]||[...Object.entries(a)][0][1],c},{});function x0(c){let e=c.replace(g0,""),a=E8(e,0),i=a>=t3[0]&&a<=t3[1],n=e.length===2?e[0]===e[1]:!1;return{value:B2(n?e[0]:e),isSecondary:i||n}}function b0(c,e){let a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),n=isNaN(i)?"normal":i;return(J2[a]||{})[n]||L0[a]}function r3(c,e){let a="".concat(z8).concat(e.replace(":","-"));return new Promise((i,n)=>{if(c.getAttribute(a)!==null)return i();let o=V1(c.children).filter(d=>d.getAttribute(T2)===e)[0],r=X.getComputedStyle(c,e),l=r.getPropertyValue("font-family"),f=l.match(M8),v=r.getPropertyValue("font-weight"),u=r.getPropertyValue("content");if(o&&!f)return c.removeChild(o),i();if(f&&u!=="none"&&u!==""){let d=r.getPropertyValue("content"),y=b0(l,v),{value:$,isSecondary:e1}=x0(d),P=f[0].startsWith("FontAwesome"),B=i4(y,$),A=B;if(P){let F=q8($);F.iconName&&F.prefix&&(B=F.iconName,y=F.prefix)}if(B&&!e1&&(!o||o.getAttribute(Q2)!==y||o.getAttribute(X2)!==A)){c.setAttribute(a,A),o&&c.removeChild(o);let F=v0(),{extra:h1}=F;h1.attributes[T2]=e,W2(B,y).then(m1=>{let Y6=t4(C(s({},F),{icons:{main:m1,mask:n4()},prefix:y,iconName:A,extra:h1,watchable:!0})),V2=V.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(V2,c.firstChild):c.appendChild(V2),V2.outerHTML=Y6.map(J6=>I1(J6)).join(`
`),c.removeAttribute(a),i()}).catch(n)}else i()}else i()})}function N0(c){return Promise.all([r3(c,"::before"),r3(c,"::after")])}function y0(c){return c.parentNode!==document.head&&!~u8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(T2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function s3(c){if(W)return new Promise((e,a)=>{let i=V1(c.querySelectorAll("*")).filter(y0).map(N0),n=o4.begin("searchPseudoElements");B3(),Promise.all(i).then(()=>{n(),Y2(),e()}).catch(()=>{n(),Y2(),a()})})}var A0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=s3,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:a=V}=e;h.searchPseudoElements&&s3(a)}}},l3=!1,S0={mixout(){return{dom:{unwatch(){B3(),l3=!0}}}},hooks(){return{bootstrap(){e3(j2("mutationObserverCallbacks",{}))},noAuto(){l0()},watch(c){let{observeMutationsRoot:e}=c;l3?Y2():e3(j2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},f3=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((a,i)=>{let n=i.toLowerCase().split("-"),t=n[0],o=n.slice(1).join("-");if(t&&o==="h")return a.flipX=!0,a;if(t&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(t){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},e)},k0={mixout(){return{parse:{transform:c=>f3(c)}}},hooks(){return{parseNodeAttributes(c,e){let a=e.getAttribute("data-fa-transform");return a&&(c.transform=f3(a)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:a,transform:i,containerWidth:n,iconWidth:t}=e,o={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(r," ").concat(l," ").concat(f)},u={transform:"translate(".concat(t/2*-1," -256)")},d={outer:o,inner:v,path:u};return{tag:"g",attributes:s({},d.outer),children:[{tag:"g",attributes:s({},d.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:s(s({},a.icon.attributes),d.path)}]}]}}}},F2={x:0,y:0,width:"100%",height:"100%"};function h3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function w0(c){return c.tag==="g"?c.children:[c]}var _0={hooks(){return{parseNodeAttributes(c,e){let a=e.getAttribute("data-fa-mask"),i=a?c2(a.split(" ").map(n=>n.trim())):n4();return i.prefix||(i.prefix=c1()),c.mask=i,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:a,attributes:i,main:n,mask:t,maskId:o,transform:r}=e,{width:l,icon:f}=n,{width:v,icon:u}=t,d=S8({transform:r,containerWidth:v,iconWidth:l}),y={tag:"rect",attributes:C(s({},F2),{fill:"white"})},$=f.children?{children:f.children.map(h3)}:{},e1={tag:"g",attributes:s({},d.inner),children:[h3(s({tag:f.tag,attributes:s(s({},f.attributes),d.path)},$))]},P={tag:"g",attributes:s({},d.outer),children:[e1]},B="mask-".concat(o||E1()),A="clip-".concat(o||E1()),F={tag:"mask",attributes:C(s({},F2),{id:B,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,P]},h1={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:w0(u)},F]};return a.push(h1,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(B,")")},F2)}),{children:a,attributes:i}}}},D0={provides(c){let e=!1;X.matchMedia&&(e=X.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let a=[],i={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:C(s({},i),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let t=C(s({},n),{attributeName:"opacity"}),o={tag:"circle",attributes:C(s({},i),{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:C(s({},n),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(s({},t),{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:C(s({},i),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:C(s({},t),{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:C(s({},i),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(s({},t),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},P0={hooks(){return{parseNodeAttributes(c,e){let a=e.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return c.symbol=i,c}}}},F0=[_8,C0,M0,H0,V0,A0,S0,k0,_0,D0,P0];U8(F0,{mixoutsTo:_});var q5=_.noAuto,q3=_.config,j5=_.library,j3=_.dom,G3=_.parse,G5=_.findIconDefinition,U5=_.toHtml,U3=_.icon,W5=_.layer,E0=_.text,T0=_.counter;var I0=["*"],O0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},Z0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},B0=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(a=>e[a]?a:null).filter(a=>a)},s4=new WeakSet,W3="fa-auto-css";function R0(c,e){if(!e.autoAddCss||s4.has(c))return;if(c.getElementById(W3)!=null){e.autoAddCss=!1,s4.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",W3),a.innerHTML=j3.css();let i=c.head.childNodes,n=null;for(let t=i.length-1;t>-1;t--){let o=i[t],r=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(n=o)}c.head.insertBefore(a,n),e.autoAddCss=!1,s4.add(c)}var q0=c=>c.prefix!==void 0&&c.iconName!==void 0,j0=(c,e)=>q0(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},G0=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(a){q3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275prov=v1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),U0=(()=>{class c{constructor(){this.definitions={}}addIcons(...a){for(let i of a){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let n of i.icon[2])typeof n=="string"&&(this.definitions[i.prefix][n]=i)}}addIconPacks(...a){for(let i of a){let n=Object.keys(i).map(t=>i[t]);this.addIcons(...n)}}getIconDefinition(a,i){return a in this.definitions&&i in this.definitions[a]?this.definitions[a][i]:null}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275prov=v1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),W0=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275dir=S({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Y]})}}return c})(),$0=(()=>{class c{constructor(a,i){this.renderer=a,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}static{this.\u0275fac=function(i){return new(i||c)(M(S1),M(y1))}}static{this.\u0275cmp=x({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Y,b],ngContentSelectors:I0,decls:1,vars:0,template:function(i,n){i&1&&(x2(),b2(0))},encapsulation:2})}}return c})(),e2=(()=>{class c{constructor(a,i,n,t,o){this.sanitizer=a,this.config=i,this.iconLibrary=n,this.stackItem=t,this.document=g2(P4),o!=null&&t==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){Z0();return}if(a){let i=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(i!=null){let n=this.buildParams();R0(this.document,this.config);let t=U3(i,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(t.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(a){let i=j0(a,this.config.defaultPrefix);if("icon"in i)return i;let n=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return n??(O0(i),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?G3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:B0(a),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(i){return new(i||c)(M(E4),M(G0),M(U0),M(W0,8),M($0,8))}}static{this.\u0275cmp=x({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,n){i&2&&(S4("innerHTML",n.renderedIconHTML,N4),G1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Y,b],decls:0,vars:0,template:function(i,n){},encapsulation:2})}}return c})();var i2=(()=>{class c{static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275mod=n1({type:c})}static{this.\u0275inj=i1({})}}return c})();var Y3={prefix:"fab",iconName:"java",icon:[384,512,[],"f4e4","M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"]};var J3={prefix:"fab",iconName:"git-alt",icon:[448,512,[],"f841","M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"]};var K3={prefix:"fab",iconName:"angular",icon:[448,512,[],"f420","M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"]};var Q3={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]};var X3={prefix:"fab",iconName:"css3",icon:[512,512,[],"f13c","M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"]};var c6={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]};var a6={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"]};function Y0(c,e){if(c&1&&(z(0,"li"),H(1,"fa-icon",3),z(2,"span",4),p(3),m()()),c&2){let a=e.$implicit;N(),j("icon",a.icon),N(2),T(a.name)}}var i6=(()=>{class c{constructor(){this.skills=[{name:"Java",icon:Y3},{name:"SQL",icon:a6},{name:"HTML",icon:Q3},{name:"CSS",icon:X3},{name:"JavaScript",icon:c6},{name:"Angular",icon:K3},{name:"Git",icon:J3}]}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-skills"]],standalone:!0,features:[b],decls:6,vars:1,consts:[[1,"skills-container"],[1,"skill"],[4,"ngFor","ngForOf"],[1,"icon",3,"icon"],[1,"skill-name"]],template:function(i,n){i&1&&(z(0,"div",0)(1,"div",1)(2,"h1"),p(3," I have experience in working with the following technologies"),m(),z(4,"ul"),p1(5,Y0,4,2,"li",2),m()()()),i&2&&(N(5),j("ngForOf",n.skills))},dependencies:[i2,e2,J,u1],styles:[".skills-container[_ngcontent-%COMP%]{display:flex;justify-content:left;align-items:start;flex-wrap:wrap;padding:20px}.skill[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:20px;transition:transform .5s ease;cursor:pointer}.skill[_ngcontent-%COMP%]:hover{transform:translate(10px)}.skill[_ngcontent-%COMP%]:hover{transform:translate(-10px)}.icon[_ngcontent-%COMP%]{font-size:2.5em;color:#0c6ae4;margin-bottom:10px}.skill-name[_ngcontent-%COMP%]{font-size:2.5em;text-align:center}"]})}}return c})();function J0(c,e){if(c&1&&(z(0,"li"),p(1),m()),c&2){let a=e.$implicit;N(),T(a)}}var n6=(()=>{class c{constructor(){this.name="Muralikrishna Jakkamsetti",this.title="Java Developer",this.description="I am a passionate developer with experience in Java, SQL, Servlets, JSP, Data Structures and Algorithms, HTML, CSS, and Angular. I love solving complex problems and building robust applications.",this.skills=["Java","SQL","Angular","HTML","CSS","JavaScript","Git"]}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-about"]],standalone:!0,features:[b],decls:14,vars:4,consts:[[1,"about-container"],[1,"skills-section"],[4,"ngFor","ngForOf"]],template:function(i,n){i&1&&(z(0,"div",0)(1,"h1"),p(2,"About Me"),m(),z(3,"h2"),p(4),m(),z(5,"h3"),p(6),m(),z(7,"p"),p(8),m(),z(9,"div",1)(10,"h4"),p(11,"Skills"),m(),z(12,"ul"),p1(13,J0,2,1,"li",2),m()()()),i&2&&(N(4),T(n.name),N(2),T(n.title),N(2),T(n.description),N(5),j("ngForOf",n.skills))},dependencies:[J,u1],styles:[".about-container[_ngcontent-%COMP%]{text-align:center;padding:50px;max-width:800px;margin:0 auto}h1[_ngcontent-%COMP%]{font-size:2.5em;margin-bottom:10px;color:#ff5722}h2[_ngcontent-%COMP%]{font-size:1.8em;margin-top:5px}h3[_ngcontent-%COMP%]{font-size:1.4em;color:#777;margin-bottom:20px}p[_ngcontent-%COMP%]{font-size:1.2em;line-height:1.6}.skills-section[_ngcontent-%COMP%]{margin-top:30px}.skills-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.5em;margin-bottom:10px}.skills-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;display:flex;flex-wrap:wrap;justify-content:center}.skills-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#ff5722;color:#fff;padding:10px 15px;margin:5px;border-radius:20px;font-size:1em}"]})}}return c})();function K0(c,e){if(c&1&&(z(0,"div",2),H(1,"img",3),z(2,"div",4)(3,"h2"),p(4),m(),z(5,"p"),p(6),m(),z(7,"a",5),p(8,"View Project"),m()()()),c&2){let a=e.$implicit;N(),k4("alt",a.title),j("src",a.image,L2),N(3),T(a.title),N(2),T(a.description),N(),j("href",a.link,L2)}}var t6=(()=>{class c{constructor(){this.projects=[{title:"Portfolio Website",description:"A personal portfolio website built with Angular and Bootstrap.",image:"../assets/images/portfolio.png",link:"https://github.com/Muralikrishna23/Portfolio"},{title:"E-Library",description:"This web app is built using Java,jsp,jdbc,oracleand UI design",image:"assets/ecommerce.jpg",link:""},{title:"Todo app",description:"This app was buit using angular",image:"",link:""}]}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-projects"]],standalone:!0,features:[b],decls:5,vars:1,consts:[[1,"projects-container"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"project-image",3,"src","alt"],[1,"card-content"],["target","_blank",1,"project-link",3,"href"]],template:function(i,n){i&1&&(z(0,"div",0)(1,"h1"),p(2,"My Projects"),m(),H(3,"br"),p1(4,K0,9,5,"div",1),m()),i&2&&(N(4),j("ngForOf",n.projects))},dependencies:[J,u1],styles:[".projects-container[_ngcontent-%COMP%]{text-align:center;padding:50px;max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:20px;justify-content:center}.card[_ngcontent-%COMP%]{width:300px;background-color:#fff;border-radius:8px;box-shadow:0 4px 8px #0003;overflow:hidden;transition:transform .3s,box-shadow .3s;display:flex;flex-direction:column;align-items:center;text-align:left}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 6px 12px #0000004d}.project-image[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.card-content[_ngcontent-%COMP%]{padding:15px}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5em;color:#333;margin:10px 0}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em;color:#666;line-height:1.6}.project-link[_ngcontent-%COMP%]{margin-top:10px;display:inline-block;color:#ff5722;text-decoration:none;font-weight:700;transition:color .3s}.project-link[_ngcontent-%COMP%]:hover{color:#e64a19}"]})}}return c})();var z6=(()=>{class c{constructor(a,i){this._renderer=a,this._elementRef=i,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(a,i){this._renderer.setProperty(this._elementRef.nativeElement,a,i)}registerOnTouched(a){this.onTouched=a}registerOnChange(a){this.onChange=a}setDisabledState(a){this.setProperty("disabled",a)}static{this.\u0275fac=function(i){return new(i||c)(M(S1),M(y1))}}static{this.\u0275dir=S({type:c})}}return c})(),Q0=(()=>{class c extends z6{static{this.\u0275fac=(()=>{let a;return function(n){return(a||(a=j1(c)))(n||c)}})()}static{this.\u0275dir=S({type:c,features:[q]})}}return c})(),p6=new z1("");var X0={provide:p6,useExisting:b1(()=>f2),multi:!0};function c5(){let c=k2()?k2().getUserAgent():"";return/android (\d+)/.test(c.toLowerCase())}var a5=new z1(""),f2=(()=>{class c extends z6{constructor(a,i,n){super(a,i),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!c5())}writeValue(a){let i=a??"";this.setProperty("value",i)}_handleInput(a){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(a)}_compositionStart(){this._composing=!0}_compositionEnd(a){this._composing=!1,this._compositionMode&&this.onChange(a)}static{this.\u0275fac=function(i){return new(i||c)(M(S1),M(y1),M(a5,8))}}static{this.\u0275dir=S({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,n){i&1&&t1("input",function(o){return n._handleInput(o.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(o){return n._compositionEnd(o.target.value)})},features:[k1([X0]),q]})}}return c})();function e5(c){return c==null||(typeof c=="string"||Array.isArray(c))&&c.length===0}var f4=new z1(""),u6=new z1("");function i5(c){return e5(c.value)?{required:!0}:null}function o6(c){return null}function d6(c){return c!=null}function C6(c){return w4(c)?V4(c):c}function M6(c){let e={};return c.forEach(a=>{e=a!=null?s(s({},e),a):e}),Object.keys(e).length===0?null:e}function H6(c,e){return e.map(a=>a(c))}function n5(c){return!c.validate}function V6(c){return c.map(e=>n5(e)?e:a=>e.validate(a))}function t5(c){if(!c)return null;let e=c.filter(d6);return e.length==0?null:function(a){return M6(H6(a,e))}}function h4(c){return c!=null?t5(V6(c)):null}function o5(c){if(!c)return null;let e=c.filter(d6);return e.length==0?null:function(a){let i=H6(a,e).map(C6);return L4(i).pipe(g4(M6))}}function m4(c){return c!=null?o5(V6(c)):null}function r6(c,e){return c===null?[e]:Array.isArray(c)?[...c,e]:[c,e]}function r5(c){return c._rawValidators}function s5(c){return c._rawAsyncValidators}function l4(c){return c?Array.isArray(c)?c:[c]:[]}function t2(c,e){return Array.isArray(c)?c.includes(e):c===e}function s6(c,e){let a=l4(e);return l4(c).forEach(n=>{t2(a,n)||a.push(n)}),a}function l6(c,e){return l4(e).filter(a=>!t2(c,a))}var o2=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=h4(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=m4(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,a){return this.control?this.control.hasError(e,a):!1}getError(e,a){return this.control?this.control.getError(e,a):null}},L1=class extends o2{get formDirective(){return null}get path(){return null}},R1=class extends o2{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},r2=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},l5={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},F7=C(s({},l5),{"[class.ng-submitted]":"isSubmitted"}),g6=(()=>{class c extends r2{constructor(a){super(a)}static{this.\u0275fac=function(i){return new(i||c)(M(R1,2))}}static{this.\u0275dir=S({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,n){i&2&&U1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[q]})}}return c})(),L6=(()=>{class c extends r2{constructor(a){super(a)}static{this.\u0275fac=function(i){return new(i||c)(M(L1,10))}}static{this.\u0275dir=S({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,n){i&2&&U1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[q]})}}return c})();var O1="VALID",n2="INVALID",g1="PENDING",Z1="DISABLED";function x6(c){return(h2(c)?c.validators:c)||null}function f5(c){return Array.isArray(c)?h4(c):c||null}function b6(c,e){return(h2(e)?e.asyncValidators:c)||null}function h5(c){return Array.isArray(c)?m4(c):c||null}function h2(c){return c!=null&&!Array.isArray(c)&&typeof c=="object"}function m5(c,e,a){let i=c.controls;if(!(e?Object.keys(i):i).length)throw new q1(1e3,"");if(!i[a])throw new q1(1001,"")}function v5(c,e,a){c._forEachChild((i,n)=>{if(a[n]===void 0)throw new q1(1002,"")})}var s2=class{constructor(e,a){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(a)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O1}get invalid(){return this.status===n2}get pending(){return this.status==g1}get disabled(){return this.status===Z1}get enabled(){return this.status!==Z1}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(s6(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(s6(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(l6(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(l6(e,this._rawAsyncValidators))}hasValidator(e){return t2(this._rawValidators,e)}hasAsyncValidator(e){return t2(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(a=>{a.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=g1,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let a=this._parentMarkedDirty(e.onlySelf);this.status=Z1,this.errors=null,this._forEachChild(i=>{i.disable(C(s({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(s({},e),{skipPristineCheck:a})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let a=this._parentMarkedDirty(e.onlySelf);this.status=O1,this._forEachChild(i=>{i.enable(C(s({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(s({},e),{skipPristineCheck:a})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O1||this.status===g1)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(a=>a._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Z1:O1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=g1,this._hasOwnPendingAsyncValidator=!0;let a=C6(this.asyncValidator(this));this._asyncValidationSubscription=a.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,a={}){this.errors=e,this._updateControlsErrors(a.emitEvent!==!1)}get(e){let a=e;return a==null||(Array.isArray(a)||(a=a.split(".")),a.length===0)?null:a.reduce((i,n)=>i&&i._find(n),this)}getError(e,a){let i=a?this.get(a):this;return i&&i.errors?i.errors[e]:null}hasError(e,a){return!!this.getError(e,a)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new A1,this.statusChanges=new A1}_calculateStatus(){return this._allControlsDisabled()?Z1:this.errors?n2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(g1)?g1:this._anyControlsHaveStatus(n2)?n2:O1}_anyControlsHaveStatus(e){return this._anyControls(a=>a.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){h2(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let a=this._parent&&this._parent.dirty;return!e&&!!a&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=f5(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=h5(this._rawAsyncValidators)}},l2=class extends s2{constructor(e,a,i){super(x6(a),b6(i,a)),this.controls=e,this._initObservables(),this._setUpdateStrategy(a),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,a){return this.controls[e]?this.controls[e]:(this.controls[e]=a,a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange),a)}addControl(e,a,i={}){this.registerControl(e,a),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,a={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:a.emitEvent}),this._onCollectionChange()}setControl(e,a,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],a&&this.registerControl(e,a),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,a={}){v5(this,!0,e),Object.keys(e).forEach(i=>{m5(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:a.emitEvent})}),this.updateValueAndValidity(a)}patchValue(e,a={}){e!=null&&(Object.keys(e).forEach(i=>{let n=this.controls[i];n&&n.patchValue(e[i],{onlySelf:!0,emitEvent:a.emitEvent})}),this.updateValueAndValidity(a))}reset(e={},a={}){this._forEachChild((i,n)=>{i.reset(e?e[n]:null,{onlySelf:!0,emitEvent:a.emitEvent})}),this._updatePristine(a),this._updateTouched(a),this.updateValueAndValidity(a)}getRawValue(){return this._reduceChildren({},(e,a,i)=>(e[i]=a.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(a,i)=>i._syncPendingControls()?!0:a);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(a=>{let i=this.controls[a];i&&e(i,a)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[a,i]of Object.entries(this.controls))if(this.contains(a)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(a,i,n)=>((i.enabled||this.disabled)&&(a[n]=i.value),a))}_reduceChildren(e,a){let i=e;return this._forEachChild((n,t)=>{i=a(i,n,t)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var v4=new z1("CallSetDisabledState",{providedIn:"root",factory:()=>z4}),z4="always";function z5(c,e){return[...e.path,c]}function N6(c,e,a=z4){y6(c,e),e.valueAccessor.writeValue(c.value),(c.disabled||a==="always")&&e.valueAccessor.setDisabledState?.(c.disabled),u5(c,e),C5(c,e),d5(c,e),p5(c,e)}function f6(c,e){c.forEach(a=>{a.registerOnValidatorChange&&a.registerOnValidatorChange(e)})}function p5(c,e){if(e.valueAccessor.setDisabledState){let a=i=>{e.valueAccessor.setDisabledState(i)};c.registerOnDisabledChange(a),e._registerOnDestroy(()=>{c._unregisterOnDisabledChange(a)})}}function y6(c,e){let a=r5(c);e.validator!==null?c.setValidators(r6(a,e.validator)):typeof a=="function"&&c.setValidators([a]);let i=s5(c);e.asyncValidator!==null?c.setAsyncValidators(r6(i,e.asyncValidator)):typeof i=="function"&&c.setAsyncValidators([i]);let n=()=>c.updateValueAndValidity();f6(e._rawValidators,n),f6(e._rawAsyncValidators,n)}function u5(c,e){e.valueAccessor.registerOnChange(a=>{c._pendingValue=a,c._pendingChange=!0,c._pendingDirty=!0,c.updateOn==="change"&&A6(c,e)})}function d5(c,e){e.valueAccessor.registerOnTouched(()=>{c._pendingTouched=!0,c.updateOn==="blur"&&c._pendingChange&&A6(c,e),c.updateOn!=="submit"&&c.markAsTouched()})}function A6(c,e){c._pendingDirty&&c.markAsDirty(),c.setValue(c._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(c._pendingValue),c._pendingChange=!1}function C5(c,e){let a=(i,n)=>{e.valueAccessor.writeValue(i),n&&e.viewToModelUpdate(i)};c.registerOnChange(a),e._registerOnDestroy(()=>{c._unregisterOnChange(a)})}function M5(c,e){c==null,y6(c,e)}function H5(c,e){if(!c.hasOwnProperty("model"))return!1;let a=c.model;return a.isFirstChange()?!0:!Object.is(e,a.currentValue)}function V5(c){return Object.getPrototypeOf(c.constructor)===Q0}function g5(c,e){c._syncPendingControls(),e.forEach(a=>{let i=a.control;i.updateOn==="submit"&&i._pendingChange&&(a.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function L5(c,e){if(!e)return null;Array.isArray(e);let a,i,n;return e.forEach(t=>{t.constructor===f2?a=t:V5(t)?i=t:n=t}),n||i||a||null}var x5={provide:L1,useExisting:b1(()=>p4)},B1=Promise.resolve(),p4=(()=>{class c extends L1{constructor(a,i,n){super(),this.callSetDisabledState=n,this.submitted=!1,this._directives=new Set,this.ngSubmit=new A1,this.form=new l2({},h4(a),m4(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(a){B1.then(()=>{let i=this._findContainer(a.path);a.control=i.registerControl(a.name,a.control),N6(a.control,a,this.callSetDisabledState),a.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(a)})}getControl(a){return this.form.get(a.path)}removeControl(a){B1.then(()=>{let i=this._findContainer(a.path);i&&i.removeControl(a.name),this._directives.delete(a)})}addFormGroup(a){B1.then(()=>{let i=this._findContainer(a.path),n=new l2({});M5(n,a),i.registerControl(a.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(a){B1.then(()=>{let i=this._findContainer(a.path);i&&i.removeControl(a.name)})}getFormGroup(a){return this.form.get(a.path)}updateModel(a,i){B1.then(()=>{this.form.get(a.path).setValue(i)})}setValue(a){this.control.setValue(a)}onSubmit(a){return this.submitted=!0,g5(this.form,this._directives),this.ngSubmit.emit(a),a?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(a=void 0){this.form.reset(a),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(a){return a.pop(),a.length?this.form.get(a):this.form}static{this.\u0275fac=function(i){return new(i||c)(M(f4,10),M(u6,10),M(v4,8))}}static{this.\u0275dir=S({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,n){i&1&&t1("submit",function(o){return n.onSubmit(o)})("reset",function(){return n.onReset()})},inputs:{options:[N1.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[k1([x5]),q]})}}return c})();function h6(c,e){let a=c.indexOf(e);a>-1&&c.splice(a,1)}function m6(c){return typeof c=="object"&&c!==null&&Object.keys(c).length===2&&"value"in c&&"disabled"in c}var b5=class extends s2{constructor(e=null,a,i){super(x6(a),b6(i,a)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(a),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),h2(a)&&(a.nonNullable||a.initialValueIsDefault)&&(m6(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,a={}){this.value=this._pendingValue=e,this._onChange.length&&a.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,a.emitViewToModelChange!==!1)),this.updateValueAndValidity(a)}patchValue(e,a={}){this.setValue(e,a)}reset(e=this.defaultValue,a={}){this._applyFormState(e),this.markAsPristine(a),this.markAsUntouched(a),this.setValue(this.value,a),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){h6(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){h6(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){m6(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var N5={provide:R1,useExisting:b1(()=>u4)},v6=Promise.resolve(),u4=(()=>{class c extends R1{constructor(a,i,n,t,o,r){super(),this._changeDetectorRef=o,this.callSetDisabledState=r,this.control=new b5,this._registered=!1,this.name="",this.update=new A1,this._parent=a,this._setValidators(i),this._setAsyncValidators(n),this.valueAccessor=L5(this,t)}ngOnChanges(a){if(this._checkForErrors(),!this._registered||"name"in a){if(this._registered&&(this._checkName(),this.formDirective)){let i=a.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in a&&this._updateDisabled(a),H5(a,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(a){this.viewModel=a,this.update.emit(a)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){N6(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(a){v6.then(()=>{this.control.setValue(a,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(a){let i=a.isDisabled.currentValue,n=i!==0&&S2(i);v6.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(a){return this._parent?z5(a,this._parent):[a]}static{this.\u0275fac=function(i){return new(i||c)(M(L1,9),M(f4,10),M(u6,10),M(p6,10),M(_4,8),M(v4,8))}}static{this.\u0275dir=S({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[N1.None,"disabled","isDisabled"],model:[N1.None,"ngModel","model"],options:[N1.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[k1([N5]),q,Y]})}}return c})(),S6=(()=>{class c{static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275dir=S({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return c})();var y5=(()=>{class c{constructor(){this._validator=o6}ngOnChanges(a){if(this.inputName in a){let i=this.normalizeInput(a[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):o6,this._onChange&&this._onChange()}}validate(a){return this._validator(a)}registerOnValidatorChange(a){this._onChange=a}enabled(a){return a!=null}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275dir=S({type:c,features:[Y]})}}return c})();var A5={provide:f4,useExisting:b1(()=>d4),multi:!0};var d4=(()=>{class c extends y5{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=S2,this.createValidator=a=>i5}enabled(a){return a}static{this.\u0275fac=(()=>{let a;return function(n){return(a||(a=j1(c)))(n||c)}})()}static{this.\u0275dir=S({type:c,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,n){i&2&&G1("required",n._enabled?"":null)},inputs:{required:"required"},features:[k1([A5]),q]})}}return c})();var S5=(()=>{class c{static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275mod=n1({type:c})}static{this.\u0275inj=i1({})}}return c})();var k6=(()=>{class c{static withConfig(a){return{ngModule:c,providers:[{provide:v4,useValue:a.callSetDisabledState??z4}]}}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275mod=n1({type:c})}static{this.\u0275inj=i1({imports:[S5]})}}return c})();var D=class{constructor(e=0,a="Network Error"){this.status=e,this.text=a}};var w6=()=>{if(!(typeof localStorage>"u"))return{get:c=>Promise.resolve(localStorage.getItem(c)),set:(c,e)=>Promise.resolve(localStorage.setItem(c,e)),remove:c=>Promise.resolve(localStorage.removeItem(c))}};var L={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:w6()};var x1=c=>c?typeof c=="string"?{publicKey:c}:c.toString()==="[object Object]"?c:{}:{};var _6=(c,e="https://api.emailjs.com")=>{if(!c)return;let a=x1(c);L.publicKey=a.publicKey,L.blockHeadless=a.blockHeadless,L.storageProvider=a.storageProvider,L.blockList=a.blockList,L.limitRate=a.limitRate,L.origin=a.origin||e};var m2=(i,n,...t)=>R(void 0,[i,n,...t],function*(c,e,a={}){let o=yield fetch(L.origin+c,{method:"POST",headers:a,body:e}),r=yield o.text(),l=new D(o.status,r);if(o.ok)return l;throw l});var v2=(c,e,a)=>{if(!c||typeof c!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"};var D6=c=>{if(c&&c.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"};var z2=c=>c.webdriver||!c.languages||c.languages.length===0;var p2=()=>new D(451,"Unavailable For Headless Browser");var P6=(c,e)=>{if(!Array.isArray(c))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"};var w5=c=>!c.list?.length||!c.watchVariable,_5=(c,e)=>c instanceof FormData?c.get(e):c[e],u2=(c,e)=>{if(w5(c))return!1;P6(c.list,c.watchVariable);let a=_5(e,c.watchVariable);return typeof a!="string"?!1:c.list.includes(a)};var d2=()=>new D(403,"Forbidden");var F6=(c,e)=>{if(typeof c!="number"||c<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"};var D5=(c,e,a)=>R(void 0,null,function*(){let i=Number((yield a.get(c))||0);return e-Date.now()+i}),C2=(c,e,a)=>R(void 0,null,function*(){if(!e.throttle||!a)return!1;F6(e.throttle,e.id);let i=e.id||c;return(yield D5(i,e.throttle,a))>0?!0:(yield a.set(i,Date.now().toString()),!1)});var M2=()=>new D(429,"Too Many Requests");var E6=(c,e,a,i)=>R(void 0,null,function*(){let n=x1(i),t=n.publicKey||L.publicKey,o=n.blockHeadless||L.blockHeadless,r=n.storageProvider||L.storageProvider,l=s(s({},L.blockList),n.blockList),f=s(s({},L.limitRate),n.limitRate);return o&&z2(navigator)?Promise.reject(p2()):(v2(t,c,e),D6(a),a&&u2(l,a)?Promise.reject(d2()):(yield C2(location.pathname,f,r))?Promise.reject(M2()):m2("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:t,service_id:c,template_id:e,template_params:a}),{"Content-type":"application/json"}))});var T6=c=>{if(!c||c.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"};var P5=c=>typeof c=="string"?document.querySelector(c):c,I6=(c,e,a,i)=>R(void 0,null,function*(){let n=x1(i),t=n.publicKey||L.publicKey,o=n.blockHeadless||L.blockHeadless,r=L.storageProvider||n.storageProvider,l=s(s({},L.blockList),n.blockList),f=s(s({},L.limitRate),n.limitRate);if(o&&z2(navigator))return Promise.reject(p2());let v=P5(a);v2(t,c,e),T6(v);let u=new FormData(v);return u2(l,u)?Promise.reject(d2()):(yield C2(location.pathname,f,r))?Promise.reject(M2()):(u.append("lib_version","4.4.1"),u.append("service_id",c),u.append("template_id",e),u.append("user_id",t),m2("/api/v1.0/email/send-form",u))});var O6={init:_6,send:E6,sendForm:I6,EmailJSResponseStatus:D};var Z6=(()=>{class c{constructor(){this.from_name="",this.from_email="",this.message="",this.form={from_name:"",from_email:"",message:""}}onSubmit(){O6.send("service_f7vi5vn","template_9y06vje",this.form,"Af2_8j24WbRM2tllX").then(t=>{alert("Message sent successfully!"),this.form={from_name:"",from_email:"",message:""}},t=>{console.error("Failed to send message:",t),alert("Failed to send the message. Please try again later.")})}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-contact"]],standalone:!0,features:[b],decls:19,vars:0,consts:[["contactForm","ngForm"],[1,"contact-card"],[3,"submit"],[1,"form-group"],["for","name"],["type","text","id","name","name","from_name","required","","ngModel","","placeholder","Your Name",1,"form-control"],["for","email"],["type","email","id","email","name","from_email","required","","ngModel","","placeholder","Your Email",1,"form-control"],["for","message"],["id","message","name","message","required","","ngModel","","placeholder","Your Message",1,"form-control"],["type","submit",1,"submit-btn"]],template:function(i,n){if(i&1){let t=A4();z(0,"div",1)(1,"h2"),p(2,"Contact Me"),m(),z(3,"form",2,0),t1("submit",function(){return x4(t),b4(n.onSubmit())}),z(5,"div",3)(6,"label",4),p(7,"Name"),m(),H(8,"input",5),m(),z(9,"div",3)(10,"label",6),p(11,"Email"),m(),H(12,"input",7),m(),z(13,"div",3)(14,"label",8),p(15,"Message"),m(),H(16,"textarea",9),m(),z(17,"button",10),p(18,"Send Message"),m()()()}},dependencies:[k6,S6,f2,g6,L6,d4,u4,p4],styles:[".contact-card[_ngcontent-%COMP%]{width:100%;max-width:500px;margin:20px auto 0;padding:20px;background-color:#fff;border-radius:8px;box-shadow:0 4px 8px #0003;text-align:center}.contact-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#13100f;font-size:2em;margin-bottom:15px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px;text-align:left}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px;color:#333}.form-control[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:1em;border:1px solid #ddd;border-radius:4px}textarea.form-control[_ngcontent-%COMP%]{resize:vertical;min-height:100px}.submit-btn[_ngcontent-%COMP%]{background-color:#157cf1;color:#fff;padding:10px 20px;font-size:1em;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s}.submit-btn[_ngcontent-%COMP%]:hover{background-color:#e64a19}"]})}}return c})();var B6=(()=>{class c{constructor(){this.darkThemeClass="dark-theme",this.lightThemeClass="light-theme"}enableDarkTheme(){document.body.classList.remove(this.lightThemeClass),document.body.classList.add(this.darkThemeClass)}enableLightTheme(){document.body.classList.remove(this.darkThemeClass),document.body.classList.add(this.lightThemeClass)}toggleTheme(a){a?this.enableDarkTheme():this.enableLightTheme()}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275prov=v1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();var R6=(()=>{class c{constructor(a){this.themeService=a,this.isDarkMode=!1}ngOnInit(){let a=localStorage.getItem("theme");this.isDarkMode=a==="dark",this.themeService.toggleTheme(this.isDarkMode)}toggleTheme(){this.isDarkMode=!this.isDarkMode,this.themeService.toggleTheme(this.isDarkMode),localStorage.setItem("theme",this.isDarkMode?"dark":"light")}static{this.\u0275fac=function(i){return new(i||c)(M(B6))}}static{this.\u0275cmp=x({type:c,selectors:[["app-navbar"]],standalone:!0,features:[b],decls:22,vars:2,consts:[[1,"navbar"],[1,"container"],["href","#",1,"navbar-brand"],[1,"navbar-links"],["routerLink","home"],["routerLink","about"],["routerLink","skills"],["routerLink","projects"],["routerLink","contact"],[1,"btn","btn-outline-light","theme-toggle",3,"click"]],template:function(i,n){i&1&&(z(0,"nav",0)(1,"div",1),H(2,"a",2),z(3,"ul",3)(4,"li")(5,"a",4),p(6,"Home"),m()(),z(7,"li")(8,"a",5),p(9,"About me"),m()(),z(10,"li")(11,"a",6),p(12,"Skills"),m()(),z(13,"li")(14,"a",7),p(15,"Projects"),m()(),z(16,"li")(17,"a",8),p(18,"Contact"),m()(),z(19,"li")(20,"button",9),t1("click",function(){return n.toggleTheme()}),H(21,"i"),m()()()()()),i&2&&(N(21),y4(n.isDarkMode?"bi bi-sun-fill":"bi bi-moon-fill"))},dependencies:[O4],styles:[".navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;padding:10px 20px;background-color:#000;color:#f0f8ff;position:sticky;top:0;width:100%;text-decoration:none}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;margin-left:50px}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:#72787e;border-radius:5px}.navbar-brand[_ngcontent-%COMP%]{font-size:24px;font-weight:700}.navbar-links[_ngcontent-%COMP%]{list-style:none;display:flex;justify-content:end;margin:0;padding:0}.navbar-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}.theme-toggle[_ngcontent-%COMP%]{color:#fff;border:none;padding:5px 10px;cursor:pointer;border-radius:90%}.theme-toggle[_ngcontent-%COMP%]:hover{background-color:#545e69;border-radius:90%}.btn[_ngcontent-%COMP%]{background-color:gray;justify-content:flex-end;size:200px}"]})}}return c})();var H2=(()=>{class c{static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-footer"]],standalone:!0,features:[b],decls:31,vars:0,consts:[[1,"footer"],["href","https://www.linkedin.com/in/muralikrishna-jakkamsetti-57bb901b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXlGPAKjWRVSCzhUZHBetpw%3D%3D","target","_blank","aria-label","LinkedIn"],["icon","faLinkedin.d"],[1,"fab","fa-linkedin"],["href","https://github.com/Muralikrishna23","target","_blank","aria-label","GitHub"],["icon","faGithubAlt"],[1,"fab","fa-github"],["href","https://twitter.com/","target","_blank","aria-label","Twitter"],["icon","faTwitter.d"],[1,"fab","fa-twitter"],["href","https://facebook.com/","target","_blank","aria-label","Facebook"],["icon","faInstagram.d"],[1,"fab","fa-facebook"],["href","https://instagram.com/","target","_blank","aria-label","Instagram"],["icon","faFacebook.d"],[1,"fab","fa-instagram"],[1,"quote"]],template:function(i,n){i&1&&(z(0,"div",0)(1,"div")(2,"a",1),H(3,"fa-icon",2)(4,"i",3),p(5," LinkedIn "),m(),z(6,"a",4),H(7,"fa-icon",5)(8,"i",6),p(9," GitHub "),m(),z(10,"a",7),H(11,"fa-icon",8)(12,"i",9),p(13," Twitter "),m(),z(14,"a",10),H(15,"fa-icon",11)(16,"i",12),p(17," Facebook "),m(),z(18,"a",13),H(19,"fa-icon",14)(20,"i",15),p(21," Instagram "),m(),H(22,"br")(23,"br")(24,"p"),m()(),z(25,"div",16)(26,"p"),p(27,"Everybody should learn to program , because it teaches you how to think. - "),z(28,"strong"),p(29,"Steve Jobs"),m()(),H(30,"br"),m())},dependencies:[i2,e2],styles:[".footer[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px;background-color:#333;color:#fff;margin-top:20px}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 10px;color:#fff;font-size:1.2em;text-decoration:none;transition:color .3s}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff5722}.footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}.quote[_ngcontent-%COMP%]{text-align:center;font-size:14px;font-style:italic;background-color:#333;color:#fff;margin-top:10px;padding:10px}"]})}}return c})();var q6=(()=>{class c{constructor(){this.title="portfolio"}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-root"]],standalone:!0,features:[b],decls:6,vars:0,template:function(i,n){i&1&&(z(0,"header")(1,"h1"),p(2,"Muralikrishna Jakkamsetti"),m()(),H(3,"app-navbar")(4,"router-outlet")(5,"app-footer"))},dependencies:[I4,R6,H2],styles:['header[_ngcontent-%COMP%]{text-align:center;padding:1em 0;color:transparent;font-size:2.5em;background-image:url("./media/background1-PRYI3P3R.jpg")}']})}}return c})();function C4(){return C4=Object.assign?Object.assign.bind():function(c){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},C4.apply(this,arguments)}var E5={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(c){},onComplete:function(c){},preStringTyped:function(c,e){},onStringTyped:function(c,e){},onLastStringBackspaced:function(c){},onTypingPaused:function(c,e){},onTypingResumed:function(c,e){},onReset:function(c){},onStop:function(c,e){},onStart:function(c,e){},onDestroy:function(c){}},T5=new(function(){function c(){}var e=c.prototype;return e.load=function(a,i,n){if(a.el=typeof n=="string"?document.querySelector(n):n,a.options=C4({},E5,i),a.isInput=a.el.tagName.toLowerCase()==="input",a.attr=a.options.attr,a.bindInputFocusEvents=a.options.bindInputFocusEvents,a.showCursor=!a.isInput&&a.options.showCursor,a.cursorChar=a.options.cursorChar,a.cursorBlinking=!0,a.elContent=a.attr?a.el.getAttribute(a.attr):a.el.textContent,a.contentType=a.options.contentType,a.typeSpeed=a.options.typeSpeed,a.startDelay=a.options.startDelay,a.backSpeed=a.options.backSpeed,a.smartBackspace=a.options.smartBackspace,a.backDelay=a.options.backDelay,a.fadeOut=a.options.fadeOut,a.fadeOutClass=a.options.fadeOutClass,a.fadeOutDelay=a.options.fadeOutDelay,a.isPaused=!1,a.strings=a.options.strings.map(function(f){return f.trim()}),a.stringsElement=typeof a.options.stringsElement=="string"?document.querySelector(a.options.stringsElement):a.options.stringsElement,a.stringsElement){a.strings=[],a.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var t=Array.prototype.slice.apply(a.stringsElement.children),o=t.length;if(o)for(var r=0;r<o;r+=1)a.strings.push(t[r].innerHTML.trim())}for(var l in a.strPos=0,a.currentElContent=this.getCurrentElContent(a),a.currentElContent&&a.currentElContent.length>0&&(a.strPos=a.currentElContent.length-1,a.strings.unshift(a.currentElContent)),a.sequence=[],a.strings)a.sequence[l]=l;a.arrayPos=0,a.stopNum=0,a.loop=a.options.loop,a.loopCount=a.options.loopCount,a.curLoop=0,a.shuffle=a.options.shuffle,a.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},a.typingComplete=!1,a.autoInsertCss=a.options.autoInsertCss,a.autoInsertCss&&(this.appendCursorAnimationCss(a),this.appendFadeOutAnimationCss(a))},e.getCurrentElContent=function(a){return a.attr?a.el.getAttribute(a.attr):a.isInput?a.el.value:a.contentType==="html"?a.el.innerHTML:a.el.textContent},e.appendCursorAnimationCss=function(a){var i="data-typed-js-cursor-css";if(a.showCursor&&!document.querySelector("["+i+"]")){var n=document.createElement("style");n.setAttribute(i,"true"),n.innerHTML=`
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
      `,document.body.appendChild(n)}},e.appendFadeOutAnimationCss=function(a){var i="data-typed-fadeout-js-css";if(a.fadeOut&&!document.querySelector("["+i+"]")){var n=document.createElement("style");n.setAttribute(i,"true"),n.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(n)}},c}()),j6=new(function(){function c(){}var e=c.prototype;return e.typeHtmlChars=function(a,i,n){if(n.contentType!=="html")return i;var t=a.substring(i).charAt(0);if(t==="<"||t==="&"){var o;for(o=t==="<"?">":";";a.substring(i+1).charAt(0)!==o&&!(1+ ++i>a.length););i++}return i},e.backSpaceHtmlChars=function(a,i,n){if(n.contentType!=="html")return i;var t=a.substring(i).charAt(0);if(t===">"||t===";"){var o;for(o=t===">"?"<":"&";a.substring(i-1).charAt(0)!==o&&!(--i<0););i--}return i},c}()),M4=function(){function c(a,i){T5.load(this,i,a),this.begin()}var e=c.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(a){a===void 0&&(a=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,a&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var a=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){a.strPos===0?a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos):a.backspace(a.strings[a.sequence[a.arrayPos]],a.strPos)},this.startDelay)},e.typewrite=function(a,i){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var t=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=j6.typeHtmlChars(a,i,n);var r=0,l=a.substring(i);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var f=1;f+=(l=/\d+/.exec(l)[0]).length,r=parseInt(l),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),a=a.substring(0,i)+a.substring(i+f),n.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;a.substring(i+o).charAt(0)!=="`"&&(o++,!(i+o>a.length)););var v=a.substring(0,i),u=a.substring(v.length+1,i+o),d=a.substring(i+o+1);a=v+u+d,o--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),i>=a.length?n.doneTyping(a,i):n.keepTyping(a,i,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},r)},t):this.setPauseStatus(a,i,!0)},e.keepTyping=function(a,i,n){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var t=a.substring(0,i+=n);this.replaceText(t),this.typewrite(a,i)},e.doneTyping=function(a,i){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(a,i)},this.backDelay))},e.backspace=function(a,i){var n=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var t=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=j6.backSpaceHtmlChars(a,i,n);var o=a.substring(0,i);if(n.replaceText(o),n.smartBackspace){var r=n.strings[n.arrayPos+1];n.stopNum=r&&o===r.substring(0,i)?i:0}i>n.stopNum?(i--,n.backspace(a,i)):i<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],i))},t)}else this.setPauseStatus(a,i,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(a,i,n){this.pause.typewrite=n,this.pause.curString=a,this.pause.curStrPos=i},e.toggleBlinking=function(a){this.cursor&&(this.pause.status||this.cursorBlinking!==a&&(this.cursorBlinking=a,a?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(a){return Math.round(Math.random()*a/2)+a},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var a=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){a.arrayPos++,a.replaceText(""),a.strings.length>a.arrayPos?a.typewrite(a.strings[a.sequence[a.arrayPos]],0):(a.typewrite(a.strings[0],0),a.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(a){this.attr?this.el.setAttribute(this.attr,a):this.isInput?this.el.value=a:this.contentType==="html"?this.el.innerHTML=a:this.el.textContent=a},e.bindFocusEvents=function(){var a=this;this.isInput&&(this.el.addEventListener("focus",function(i){a.stop()}),this.el.addEventListener("blur",function(i){a.el.value&&a.el.value.length!==0||a.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},c}();var G6=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=n1({type:c}),c.\u0275inj=i1({imports:[[]]}),c})();var I5=["typedElement"],H4=(()=>{class c{ngOnInit(){let a={strings:["Java Developer","FullStackDeveloper","Problem solver"],typeSpeed:50,backSpeed:25,loop:!0};new M4(this.typedElement.nativeElement,a)}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-home"]],viewQuery:function(i,n){if(i&1&&N2(I5,7),i&2){let t;y2(t=A2())&&(n.typedElement=t.first)}},standalone:!0,features:[b],decls:11,vars:0,consts:[["typedElement",""],[1,"home"],[1,"type"],["href","../../assets/Muralikrishna_Jakkamsetti_1.pdf","download","",1,"download-btn"]],template:function(i,n){i&1&&(z(0,"div",1)(1,"h1"),p(2,"Muralikrishna Jakkamsetti"),m(),H(3,"br"),z(4,"h2",2),p(5,"I am "),H(6,"span",null,0),m(),H(8,"br"),z(9,"a",3),p(10,"My Resume"),m()())},dependencies:[G6,J,B4],styles:[".home[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}ngx-typed-js[_ngcontent-%COMP%]{font-size:24px;margin-top:20px}.h1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:50px}.download-btn[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;margin-top:20px;background-color:#ff5722;color:#fff;text-decoration:none;border-radius:5px;transition:background-color .3s}.download-btn[_ngcontent-%COMP%]:hover{background-color:#e64a19}"]})}}return c})();var U6=[{path:"home",component:H4,pathMatch:"full"},{path:"projects",component:t6},{path:"skills",component:i6},{path:"",component:H4},{path:"about",component:n6},{path:"contact",component:Z6},{path:"footer",component:H2}];var W6={providers:[Z4(U6)]};var O5={providers:[T4()]},$6=D4(W6,O5);var Z5=()=>F4(q6,$6),jc=Z5;export{jc as a};
