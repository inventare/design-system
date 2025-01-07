import{a as v,r as y}from"./index-BHvmkJQX.js";var s={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function E(){if(_)return t;_=1;var i=v(),m=Symbol.for("react.element"),c=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(n,r,a){var e,o={},u=null,p=null;a!==void 0&&(u=""+a),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)x.call(r,e)&&!l.hasOwnProperty(e)&&(o[e]=r[e]);if(n&&n.defaultProps)for(e in r=n.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:m,type:n,key:u,ref:p,props:o,_owner:d.current}}return t.Fragment=c,t.jsx=f,t.jsxs=f,t}var R;function O(){return R||(R=1,s.exports=E()),s.exports}var q=O();function w(i){return y.forwardRef(i)}export{w as f,q as j};
