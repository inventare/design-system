import{c as h}from"./index-c87bde1c.js";import"./_commonjsHelpers-725317a4.js";const A="#228fff",L="rgb(33 33 33)",D="transparent",c="rgb(255 255 255 / 0.9)",m="rgb(255 255 255 / 0.8)",R="rgb(240 240 240 / 0.9)",S=A,_=A,b=2,$=h({base:"light",colorPrimary:S,colorSecondary:_,appBg:c,appContentBg:m,appBorderColor:D,appBorderRadius:b,fontBase:'"Open Sans", sans-serif',fontCode:"monospace",textColor:L,textInverseColor:c,barTextColor:R,barSelectedColor:c,barBg:S,inputBg:c,inputBorder:m,inputTextColor:L,inputBorderRadius:b,brandTitle:"Instituto Inventare - Design System",brandUrl:"#",brandImage:"https://raw.githubusercontent.com/inventare/design-system/main/utils/assets/logo_500x125_blue.png"});const x=1e3,u="transitionend";function B(t){if(!t)return 0;let{transitionDuration:o,transitionDelay:e}=window.getComputedStyle(t);const n=Number.parseFloat(o),r=Number.parseFloat(e);return!n&&!r?0:(o=o.split(",")[0],e=e.split(",")[0],(Number.parseFloat(o)+Number.parseFloat(e))*x)}function M(t){t.dispatchEvent(new Event(u))}function v(t,o,e=!0){if(!e){t();return}const n=5,r=B(o)+n;let s=!1;const a=({target:f})=>{f===o&&(s=!0,o.removeEventListener(u,a),t())};o.addEventListener(u,a),setTimeout(()=>{s||M(o)},r)}const y='[data-toggle="collapse"]',d="show",p="collapse",i="collapsing",k="collapsed",w="horizontal";function g(t){if(!t)return{toggle:null,content:null};const o=t.closest(y);if(!o)return{toggle:null,content:null};const e=o.getAttribute("data-target");if(!e)return{toggle:o,content:null};const n=document.querySelector(e);return n?{toggle:o,content:n}:{toggle:o,content:null}}const P='[data-toggle="sidebar"]';function I(t){return!t.classList.contains("collapsed")}function N(t){t.classList.remove("collapsed","collapsed-complete")}function H(t){[...t.querySelectorAll(y)].forEach(n=>{const{toggle:r,content:s}=g(n);r==null||r.setAttribute("aria-expanded","false"),s==null||s.classList.remove(i),s==null||s.classList.add(p),s==null||s.classList.remove(d)});const e=()=>{t.classList.add("collapsed-complete")};t.classList.remove("collapsed-complete"),t.classList.add("collapsed"),v(e,t)}function F(t){if(I(t))return H(t);N(t)}function G(t){const o=t.closest(".sidebar");if(!o)return;const{toggle:e,content:n}=g(t);!e||!n||I(o)||N(o)}function V(t){const o=t.closest(P);if(!o)return;const e=o.getAttribute("data-target");if(!e)return;const n=document.querySelector(e);n&&F(n)}function C(t){const o=t.target;G(o),V(o)}document.addEventListener("DOMContentLoaded",()=>{document.body.removeEventListener("click",C),document.body.addEventListener("click",C)});const Z="VERTICAL",q="HORIZONTAL",l={VERTICAL:"height",HORIZONTAL:"width"};function U(t){return t[0].toUpperCase()+t.substring(1).toLowerCase()}function E(t,o){const e=t.classList.contains(w)?q:Z,n=`scroll${U(l[e])}`;return o?{value:`${t[n]}px`,property:l[e]}:{value:"",property:l[e]}}function z(t){const{toggle:o,content:e}=g(t);if(!o||!e||e.classList.contains(i))return;const n=o.getAttribute("aria-expanded");let r=!0;n&&(r=!!JSON.parse(n));const{value:s,property:a}=E(e,r);e.style[a]=s,e.offsetHeight,e.classList.add(i),e.classList.remove(p,d),e.classList.toggle(k,r),o.setAttribute("aria-expanded",JSON.stringify(!r)),v(()=>{e.classList.remove(i),e.classList.add(p),r||e.classList.add(d)},e);const{value:T}=E(e,!r);e.style[a]=T}function O(t){z(t.target)}document.addEventListener("DOMContentLoaded",()=>{document.body.removeEventListener("click",O),document.body.addEventListener("click",O)});const j={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},docs:{theme:$}}};export{j as default};