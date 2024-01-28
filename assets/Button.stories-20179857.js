import{j as y,F as Br}from"./jsx-runtime-29545a09.js";import{c as br}from"./clsx.m-1229b3e0.js";import{r as fr}from"./index-76fb7be0.js";import{f as Dr}from"./forwardRef-0b7427f1.js";import{S as Lr}from"./Spinner-ce5459f2.js";const nr=Dr((g,tr)=>{const{as:sr,children:or,className:ir,disabled:cr,variant:ur="default",size:dr="normal",square:lr=!1,outline:mr=!1,isLoading:gr=!1,loadingType:S="text",loadingText:pr="Loading...",loadingSpinnerSize:hr=24,loadingSpinnerWidth:yr=3,...Sr}=g;let p=cr,h=or;gr&&(p=!0,S==="text"&&(h=y(Br,{children:pr})),S==="spinner"&&(h=y(Lr,{size:hr,width:yr})));const vr=br({btn:!0,[dr]:!0,[ur]:!0,square:lr,disabled:p,outline:mr,[ir||""]:!0});return fr.createElement(sr||"button",{...Sr,ref:tr,disabled:p,children:h,className:vr})}),qr={title:"Components/Button",component:nr,argTypes:{as:{control:!1,description:"The `as` is used to change the HTML Element output of `<Button />` component."},disabled:{control:"boolean",description:"indicate if the button is disabled"},variant:{control:{type:"select"},options:["default","primary","danger"],description:"the button style"},size:{control:{type:"select"},options:["normal","small","large"],description:"the button size variant"},square:{control:"boolean",description:"indicate if button border round is square"}}},r={args:{children:"Button"}},e={args:{children:"Primary Button",variant:"primary"}},a={args:{children:"Large Button",variant:"primary",size:"large"}},n={args:{children:"Danger Button",variant:"danger"}},t={args:{children:"Small Button",variant:"danger",size:"small"}},s={args:{children:"Outline Button",variant:"primary",outline:!0}},o={args:{children:"Square Danger Button",variant:"danger",square:!0}},i={args:{children:"Square Danger Button",variant:"danger",square:!0,outline:!0}},c={args:{children:"Button",variant:"primary",square:!0,isLoading:!0}},u={args:{children:"Button",variant:"danger",square:!0,isLoading:!0,loadingText:"Deleting..."}},d={args:{children:"Button",variant:"primary",square:!0,isLoading:!0,loadingType:"spinner"}},l={args:{children:"Button",variant:"primary",disabled:!0}},m={args:{children:"Open GitHub Repository",variant:"primary"},render:({...g})=>y(nr,{...g,as:"a",href:"https://github.com/inventare/design-system",target:"_blank"})};var v,B,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(b=(B=r.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var f,D,L;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(L=(D=e.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var q,P,O;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large"
  }
}`,...(O=(P=a.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var x,z,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger"
  }
}`,...(T=(z=n.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var _,w,C;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    variant: "danger",
    size: "small"
  }
}`,...(C=(w=t.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var j,k,E;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "primary",
    outline: true
  }
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var H,N,R;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true
  }
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var F,G,M;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true,
    outline: true
  }
}`,...(M=(G=i.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var W,A,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true
  }
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "danger",
    square: true,
    isLoading: true,
    loadingText: "Deleting..."
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,X;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true,
    loadingType: "spinner"
  }
}`,...(X=(V=d.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    disabled: true
  }
}`,...($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,ar;m.parameters={...m.parameters,docs:{...(rr=m.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    children: "Open GitHub Repository",
    variant: "primary"
  },
  render: ({
    ...args
  }) => <Button {...args} as="a" href="https://github.com/inventare/design-system" target="_blank" />
}`,...(ar=(er=m.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};const Pr=["Default","Primary","PrimaryLarge","Danger","DangerSmall","PrimaryOutline","SquareDanger","SquareDangerOutline","Loading","LoadingCustom","LoadingSpinner","Disabled","PrimaryLink"],wr=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,DangerSmall:t,Default:r,Disabled:l,Loading:c,LoadingCustom:u,LoadingSpinner:d,Primary:e,PrimaryLarge:a,PrimaryLink:m,PrimaryOutline:s,SquareDanger:o,SquareDangerOutline:i,__namedExportsOrder:Pr,default:qr},Symbol.toStringTag,{value:"Module"}));export{wr as B,r as D,c as L,e as P,o as S,n as a,t as b,a as c,s as d,i as e,l as f,u as g,d as h,m as i};
//# sourceMappingURL=Button.stories-20179857.js.map
