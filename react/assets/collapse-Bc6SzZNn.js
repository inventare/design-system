import{a as A,r as p}from"./index-BHvmkJQX.js";import{f as x}from"./forwardRef-UcDs0jHx.js";var L={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function b(){if(y)return m;y=1;var e=A(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function r(c,l,_){var u,s={},f=null,d=null;_!==void 0&&(f=""+_),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(d=l.ref);for(u in l)i.call(l,u)&&!a.hasOwnProperty(u)&&(s[u]=l[u]);if(c&&c.defaultProps)for(u in l=c.defaultProps,l)s[u]===void 0&&(s[u]=l[u]);return{$$typeof:t,type:c,key:f,ref:d,props:s,_owner:o.current}}return m.Fragment=n,m.jsx=r,m.jsxs=r,m}var S;function D(){return S||(S=1,L.exports=b()),L.exports}var w=D();function g(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function P(...e){return t=>{let n=!1;const i=e.map(o=>{const a=g(o,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let o=0;o<i.length;o++){const a=i[o];typeof a=="function"?a():g(e[o],null)}}}}function M(...e){return p.useCallback(P(...e),e)}var j=1e3,R="transitionend";function F(e){if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),o=Number.parseFloat(n);return!i&&!o?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*j)}function k(e){e.dispatchEvent(new Event(R))}function q(e,t,n=!0){if(!n){e();return}const o=F(t)+5;let a=!1;const r=({target:c})=>{c===t&&(a=!0,t.removeEventListener(R,r),e())};t.addEventListener(R,r),setTimeout(()=>{a||k(t)},o)}function $(e){e.offsetHeight}function J(e){return e[0].toUpperCase()+e.substring(1).toLowerCase()}var H="VERTICAL",v={VERTICAL:"height",HORIZONTAL:"width"},E=(e,t,n)=>{const i=H,o=`scroll${J(v[i])}`;return n?{value:`${e[o]}px`,property:v[i]}:{value:"",property:v[i]}};const I=p.createContext({}),T=()=>p.useContext(I),U=({children:e,isOpen:t,isDisabled:n})=>{const[i,o]=p.useState(t||!1),a=()=>{o(r=>!r)};return w.jsx(I.Provider,{value:{isOpen:i,onOpenToggle:a,isDisabled:n},children:e})},V=x((e,t)=>{const{as:n,...i}=e,{onOpenToggle:o,isDisabled:a,isOpen:r}=T();return p.createElement(n||"button",{...i,ref:t,disabled:a,onClick:()=>o(),"aria-expanded":r})}),C="show",N="collapse",O="collapsing",W="collapsed",z=x((e,t)=>{const{as:n,style:i,className:o,...a}=e,{isOpen:r}=T(),c=p.useRef(null),l=M(t,c);p.useEffect(()=>{const u=setTimeout(()=>{const s=c.current;if(!s||s.classList.contains(C)&&r)return;const{value:f,property:d}=E(s,!1,!r);s.style[d]=f,$(s),s.classList.add(O),s.classList.remove(N,C),s.classList.toggle(W,!r),q(()=>{s.classList.remove(O),s.classList.add(N),r&&s.classList.add(C)},s);const{value:h}=E(s,!1,r);s.style[d]=h},100);return()=>clearTimeout(u)},[r]);const[_]=p.useState(r);return p.createElement(n||"div",{...a,className:`${o||""} collapse ${_?C:""}`,ref:l})});U.__docgenInfo={description:"",methods:[],displayName:"Collapse",composes:["PropsWithChildren"]};V.__docgenInfo={description:"",methods:[],displayName:"CollapseTrigger"};z.__docgenInfo={description:"",methods:[],displayName:"CollapseContent"};export{U as C,V as a,z as b,w as j};
