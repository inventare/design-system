import{e as p,C as S,a as A}from"./ClickTriggerComponent-Cyna_26r.js";function C(r){return r[0].toUpperCase()+r.substring(1).toLowerCase()}const g="show",a="collapse",o="collapsing",L="collapsed",O="horizontal",f="VERTICAL",N="HORIZONTAL",u={VERTICAL:"height",HORIZONTAL:"width"};class E{constructor(s){this.element=s}getContentSize(s,t){const n=s.classList.contains(O)?N:f,e=`scroll${C(u[n])}`;return t?{value:`${s[e]}px`,property:u[n]}:{value:"",property:u[n]}}hide(){const{toggle:s,content:t}=this.element;if(t.classList.contains(o))return;const n=s.getAttribute("aria-expanded");let e=!0;if(n&&(e=!!JSON.parse(n)),!e)return;const{value:l,property:i}=this.getContentSize(t,e);t.style[i]=l,t.offsetHeight,t.classList.add(o),t.classList.remove(a,g),t.classList.toggle(L,e),s.setAttribute("aria-expanded",JSON.stringify(!e)),p(()=>{t.classList.remove(o),t.classList.add(a)},t);const{value:c}=this.getContentSize(t,!e);t.style[i]=c}toggle(){const{toggle:s,content:t}=this.element;if(t.classList.contains(o))return;const n=s.getAttribute("aria-expanded");let e=!0;n&&(e=!!JSON.parse(n));const{value:l,property:i}=this.getContentSize(t,e);t.style[i]=l,t.offsetHeight,t.classList.add(o),t.classList.remove(a,g),t.classList.toggle(L,e),s.setAttribute("aria-expanded",JSON.stringify(!e)),p(()=>{t.classList.remove(o),t.classList.add(a),e||t.classList.add(g)},t);const{value:c}=this.getContentSize(t,!e);t.style[i]=c}executeByClick(s){this.toggle()}}const m='[data-toggle="collapse"]';class h extends A{getElement(s){if(!s)return null;const t=s.closest(m);if(!t)return null;const n=t.getAttribute("data-target");if(!n)return null;const e=document.querySelector(n);return e?{id:e.id,toggle:t,content:e}:null}createInstance(s){return new E(s)}}S.register(new h);export{h as C,m as a};