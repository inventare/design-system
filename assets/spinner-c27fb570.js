import{r as u}from"./index-f1f749bf.js";var s={},_={get exports(){return s},set exports(r){s=r}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=u,m=Symbol.for("react.element"),y=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,x=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function c(r,e,i){var n,t={},p=null,l=null;i!==void 0&&(p=""+i),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)v.call(e,n)&&!j.hasOwnProperty(n)&&(t[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return{$$typeof:m,type:r,key:p,ref:l,props:t,_owner:x.current}}a.Fragment=y;a.jsx=c;a.jsxs=c;(function(r){r.exports=a})(_);const w=s.Fragment,o=s.jsx,h=s.jsxs,d=r=>{const{color:e,size:i,width:n}=r,t={"--inventare-spinner-color":e,"--inventare-spinner-size":`${i}px`,"--inventare-spinner-width":`${n}px`};return h("div",{className:"spinner","data-testid":"spinner",style:t,children:[o("div",{}),o("div",{}),o("div",{}),o("div",{})]})};try{d.displayName="Spinner",d.__docgenInfo={description:"",displayName:"Spinner",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}}}catch{}export{w as F,d as S,o as j};
//# sourceMappingURL=spinner-c27fb570.js.map
