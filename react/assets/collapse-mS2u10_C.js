import{j as _}from"./jsx-runtime-C5j-iPPB.js";import{r as l}from"./index-BHvmkJQX.js";import{f as N}from"./forwardRef-UcDs0jHx.js";function C(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function y(...e){return t=>{let s=!1;const o=e.map(n=>{const r=C(n,t);return!s&&typeof r=="function"&&(s=!0),r});if(s)return()=>{for(let n=0;n<o.length;n++){const r=o[n];typeof r=="function"?r():C(e[n],null)}}}}function h(...e){return l.useCallback(y(...e),e)}var R=1e3,f="transitionend";function D(e){if(!e)return 0;let{transitionDuration:t,transitionDelay:s}=window.getComputedStyle(e);const o=Number.parseFloat(t),n=Number.parseFloat(s);return!o&&!n?0:(t=t.split(",")[0],s=s.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(s))*R)}function x(e){e.dispatchEvent(new Event(f))}function b(e,t,s=!0){if(!s){e();return}const n=D(t)+5;let r=!1;const a=({target:c})=>{c===t&&(r=!0,t.removeEventListener(f,a),e())};t.addEventListener(f,a),setTimeout(()=>{r||x(t)},n)}function w(e){e.offsetHeight}function M(e){return e[0].toUpperCase()+e.substring(1).toLowerCase()}var P="VERTICAL",p={VERTICAL:"height",HORIZONTAL:"width"},m=(e,t,s)=>{const o=P,n=`scroll${M(p[o])}`;return s?{value:`${e[n]}px`,property:p[o]}:{value:"",property:p[o]}};const S=l.createContext({}),E=()=>l.useContext(S),F=({children:e,isOpen:t,isDisabled:s})=>{const[o,n]=l.useState(t||!1),r=()=>{n(a=>!a)};return _.jsx(S.Provider,{value:{isOpen:o,onOpenToggle:r,isDisabled:s},children:e})},H=N((e,t)=>{const{as:s,...o}=e,{onOpenToggle:n,isDisabled:r,isOpen:a}=E();return l.createElement(s||"button",{...o,ref:t,disabled:r,onClick:()=>n(),"aria-expanded":a})}),u="show",L="collapse",g="collapsing",V="collapsed",$=N((e,t)=>{const{as:s,style:o,className:n,...r}=e,{isOpen:a}=E(),c=l.useRef(null),v=h(t,c);l.useEffect(()=>{const T=setTimeout(()=>{const i=c.current;if(!i||i.classList.contains(u)&&a)return;const{value:O,property:d}=m(i,!1,!a);i.style[d]=O,w(i),i.classList.add(g),i.classList.remove(L,u),i.classList.toggle(V,!a),b(()=>{i.classList.remove(g),i.classList.add(L),a&&i.classList.add(u)},i);const{value:A}=m(i,!1,a);i.style[d]=A},100);return()=>clearTimeout(T)},[a]);const[I]=l.useState(a);return l.createElement(s||"div",{...r,className:`${n||""} collapse ${I?u:""}`,ref:v})});F.__docgenInfo={description:"",methods:[],displayName:"Collapse",composes:["PropsWithChildren"]};H.__docgenInfo={description:"",methods:[],displayName:"CollapseTrigger"};$.__docgenInfo={description:"",methods:[],displayName:"CollapseContent"};export{F as C,H as a,$ as b};