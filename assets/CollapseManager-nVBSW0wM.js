import{C}from"./ComponentManager-CW-XTlUv.js";import{e as u,C as S}from"./transitions-DBBZnb0O.js";import"./InitializerTriggerComponent-DjtXnMDk.js";function A(i){return i[0].toUpperCase()+i.substring(1).toLowerCase()}const g="show",l="collapse",o="collapsing",L="collapsed",O="horizontal",f="VERTICAL",m="HORIZONTAL",p={VERTICAL:"height",HORIZONTAL:"width"};class N{constructor(s){this.element=s}getContentSize(s,t){const n=s.classList.contains(O)?m:f,e=`scroll${A(p[n])}`;return t?{value:`${s[e]}px`,property:p[n]}:{value:"",property:p[n]}}hide(){const{toggle:s,content:t}=this.element;if(t.classList.contains(o))return;const n=s.getAttribute("aria-expanded");let e=!0;if(n&&(e=!!JSON.parse(n)),!e)return;const{value:a,property:r}=this.getContentSize(t,e);t.style[r]=a,t.offsetHeight,t.classList.add(o),t.classList.remove(l,g),t.classList.toggle(L,e),s.setAttribute("aria-expanded",JSON.stringify(!e)),u(()=>{t.classList.remove(o),t.classList.add(l)},t);const{value:c}=this.getContentSize(t,!e);t.style[r]=c}toggle(){const{toggle:s,content:t}=this.element;if(t.classList.contains(o))return;const n=s.getAttribute("aria-expanded");let e=!0;n&&(e=!!JSON.parse(n));const{value:a,property:r}=this.getContentSize(t,e);t.style[r]=a,t.offsetHeight,t.classList.add(o),t.classList.remove(l,g),t.classList.toggle(L,e),s.setAttribute("aria-expanded",JSON.stringify(!e)),u(()=>{t.classList.remove(o),t.classList.add(l),e||t.classList.add(g)},t);const{value:c}=this.getContentSize(t,!e);t.style[r]=c}executeByClick(s){this.toggle()}}const E='[data-toggle="collapse"]';class h extends C{getElement(s){if(!s)return null;const t=s.closest(E);if(!t)return null;const n=t.getAttribute("data-target");if(!n)return null;const e=document.querySelector(n);return e?{id:e.id,toggle:t,content:e}:null}createInstance(s){return new N(s)}}S.register(new h);export{h as C,E as a};