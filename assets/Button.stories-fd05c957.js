import{j as h,F as pr}from"./jsx-runtime-29545a09.js";import{c as hr}from"./clsx.m-1229b3e0.js";import{r as Sr}from"./index-76fb7be0.js";import{f as yr}from"./forwardRef-0b7427f1.js";import{S as Br}from"./Spinner-ce5459f2.js";const fr=yr((m,Z)=>{const{as:rr,children:er,className:ar,disabled:nr,variant:tr="default",size:sr="normal",square:or=!1,outline:ir=!1,isLoading:cr=!1,loadingType:S="text",loadingText:ur="Loading...",loadingSpinnerSize:dr=24,loadingSpinnerWidth:lr=3,...mr}=m;let g=nr,p=er;cr&&(g=!0,S==="text"&&(p=h(pr,{children:ur})),S==="spinner"&&(p=h(Br,{size:dr,width:lr})));const gr=hr({btn:!0,[sr]:!0,[tr]:!0,square:or,disabled:g,outline:ir,[ar||""]:!0});return Sr.createElement(rr||"button",{...mr,ref:Z,disabled:g,children:p,className:gr})}),vr=m=>h(fr,{...m}),br={title:"Components/Button",component:vr,argTypes:{as:{control:!1,description:"The `as` is used to change the HTML Element output of `<Button />` component."},disabled:{control:"boolean",description:"indicate if the button is disabled"},variant:{control:{type:"select"},options:["default","primary","danger"],description:"the button style"},size:{control:{type:"select"},options:["normal","small","large"],description:"the button size variant"},square:{control:"boolean",description:"indicate if button border round is square"}}},r={args:{children:"Button"}},e={args:{children:"Primary Button",variant:"primary"}},a={args:{children:"Large Button",variant:"primary",size:"large"}},n={args:{children:"Danger Button",variant:"danger"}},t={args:{children:"Small Button",variant:"danger",size:"small"}},s={args:{children:"Outline Button",variant:"primary",outline:!0}},o={args:{children:"Square Danger Button",variant:"danger",square:!0}},i={args:{children:"Square Danger Button",variant:"danger",square:!0,outline:!0}},c={args:{children:"Button",variant:"primary",square:!0,isLoading:!0}},u={args:{children:"Button",variant:"danger",square:!0,isLoading:!0,loadingText:"Deleting..."}},d={args:{children:"Button",variant:"primary",square:!0,isLoading:!0,loadingType:"spinner"}},l={args:{children:"Button",variant:"primary",disabled:!0}};var y,B,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(f=(B=r.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var v,b,D;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(D=(b=e.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var q,L,x;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large"
  }
}`,...(x=(L=a.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var z,P,T;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger"
  }
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var O,_,w;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    variant: "danger",
    size: "small"
  }
}`,...(w=(_=t.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var C,j,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "primary",
    outline: true
  }
}`,...(E=(j=s.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var N,F,M;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true
  }
}`,...(M=(F=o.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var H,R,W;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true,
    outline: true
  }
}`,...(W=(R=i.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var $,k,A;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true
  }
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var G,I,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "danger",
    square: true,
    isLoading: true,
    loadingText: "Deleting..."
  }
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true,
    loadingType: "spinner"
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    disabled: true
  }
}`,...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Dr=["Default","Primary","PrimaryLarge","Danger","DangerSmall","PrimaryOutline","SquareDanger","SquareDangerOutline","Loading","LoadingCustom","LoadingSpinner","Disabled"],Tr=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,DangerSmall:t,Default:r,Disabled:l,Loading:c,LoadingCustom:u,LoadingSpinner:d,Primary:e,PrimaryLarge:a,PrimaryOutline:s,SquareDanger:o,SquareDangerOutline:i,__namedExportsOrder:Dr,default:br},Symbol.toStringTag,{value:"Module"}));export{Tr as B,r as D,c as L,e as P,o as S,n as a,t as b,a as c,s as d,i as e,l as f,u as g,d as h};
//# sourceMappingURL=Button.stories-fd05c957.js.map
