import{j as y,F as vr}from"./jsx-runtime-29545a09.js";import{c as br}from"./clsx.m-1229b3e0.js";import{r as fr}from"./index-76fb7be0.js";import{f as Dr}from"./forwardRef-0b7427f1.js";import{S as Lr}from"./Spinner-ce5459f2.js";const S=Dr((g,tr)=>{const{as:sr,children:or,className:ir,disabled:cr,variant:ur="default",size:dr="normal",square:lr=!1,outline:mr=!1,isLoading:gr=!1,loadingType:B="text",loadingText:pr="Loading...",loadingSpinnerSize:hr=24,loadingSpinnerWidth:yr=3,...Sr}=g;let p=cr,h=or;gr&&(p=!0,B==="text"&&(h=y(vr,{children:pr})),B==="spinner"&&(h=y(Lr,{size:hr,width:yr})));const Br=br({btn:!0,[dr]:!0,[ur]:!0,square:lr,disabled:p,outline:mr,[ir||""]:!0});return fr.createElement(sr||"button",{...Sr,ref:tr,disabled:p,children:h,className:Br})});S.displayName="Button";const qr={title:"Components/Button",component:S,argTypes:{as:{control:!1,description:"The `as` is used to change the HTML Element output of `<Button />` component."},disabled:{control:"boolean",description:"indicate if the button is disabled"},variant:{control:{type:"select"},options:["default","primary","danger"],description:"the button style"},size:{control:{type:"select"},options:["normal","small","large"],description:"the button size variant"},square:{control:"boolean",description:"indicate if button border round is square"}}},r={args:{children:"Button"}},e={args:{children:"Primary Button",variant:"primary"}},a={args:{children:"Large Button",variant:"primary",size:"large"}},n={args:{children:"Danger Button",variant:"danger"}},t={args:{children:"Small Button",variant:"danger",size:"small"}},s={args:{children:"Outline Button",variant:"primary",outline:!0}},o={args:{children:"Square Danger Button",variant:"danger",square:!0}},i={args:{children:"Square Danger Button",variant:"danger",square:!0,outline:!0}},c={args:{children:"Button",variant:"primary",square:!0,isLoading:!0}},u={args:{children:"Button",variant:"danger",square:!0,isLoading:!0,loadingText:"Deleting..."}},d={args:{children:"Button",variant:"primary",square:!0,isLoading:!0,loadingType:"spinner"}},l={args:{children:"Button",variant:"primary",disabled:!0}},m={args:{children:"Open GitHub Repository",variant:"primary"},render:({...g})=>y(S,{...g,as:"a",href:"https://github.com/inventare/design-system",target:"_blank"})};var v,b,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var D,L,q;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(q=(L=e.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var P,O,x;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large"
  }
}`,...(x=(O=a.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var z,T,_;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger"
  }
}`,...(_=(T=n.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,C,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    variant: "danger",
    size: "small"
  }
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var k,E,N;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "primary",
    outline: true
  }
}`,...(N=(E=s.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var H,R,F;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true
  }
}`,...(F=(R=o.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var G,M,W;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true,
    outline: true
  }
}`,...(W=(M=i.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var A,I,J;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true
  }
}`,...(J=(I=c.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "danger",
    square: true,
    isLoading: true,
    loadingText: "Deleting..."
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true,
    loadingType: "spinner"
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    disabled: true
  }
}`,...(rr=($=l.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,ar,nr;m.parameters={...m.parameters,docs:{...(er=m.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    children: "Open GitHub Repository",
    variant: "primary"
  },
  render: ({
    ...args
  }) => <Button {...args} as="a" href="https://github.com/inventare/design-system" target="_blank" />
}`,...(nr=(ar=m.parameters)==null?void 0:ar.docs)==null?void 0:nr.source}}};const Pr=["Default","Primary","PrimaryLarge","Danger","DangerSmall","PrimaryOutline","SquareDanger","SquareDangerOutline","Loading","LoadingCustom","LoadingSpinner","Disabled","PrimaryLink"],wr=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,DangerSmall:t,Default:r,Disabled:l,Loading:c,LoadingCustom:u,LoadingSpinner:d,Primary:e,PrimaryLarge:a,PrimaryLink:m,PrimaryOutline:s,SquareDanger:o,SquareDangerOutline:i,__namedExportsOrder:Pr,default:qr},Symbol.toStringTag,{value:"Module"}));export{wr as B,r as D,c as L,e as P,o as S,n as a,t as b,a as c,s as d,i as e,l as f,u as g,d as h,m as i};
//# sourceMappingURL=Button.stories-7d13b8f2.js.map
