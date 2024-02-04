import{j as p,F as vr}from"./jsx-runtime-29545a09.js";import{c as br}from"./clsx.m-1229b3e0.js";import{r as fr}from"./index-76fb7be0.js";import{f as Dr}from"./forwardRef-0b7427f1.js";import{S as Lr}from"./Spinner-ce5459f2.js";const qr=Dr((r,tr)=>{const{as:sr,children:or,className:ir,disabled:cr,variant:ur="default",size:dr="normal",square:lr=!1,outline:mr=!1,isLoading:gr=!1,loadingType:S="text",loadingText:pr="Loading...",loadingSpinnerSize:hr=24,loadingSpinnerWidth:yr=3,...Sr}=r;let h=cr,y=or;gr&&(h=!0,S==="text"&&(y=p(vr,{children:pr})),S==="spinner"&&(y=p(Lr,{size:hr,width:yr})));const Br=br({btn:!0,[dr]:!0,[ur]:!0,square:lr,disabled:h,outline:mr,[ir||""]:!0});return fr.createElement(sr||"button",{...Sr,ref:tr,disabled:h,children:y,className:Br})}),nr=r=>p(qr,{...r}),Pr={title:"Components/Button",component:nr,argTypes:{as:{control:!1,description:"The `as` is used to change the HTML Element output of `<Button />` component."},disabled:{control:"boolean",description:"indicate if the button is disabled"},variant:{control:{type:"select"},options:["default","primary","danger"],description:"the button style"},size:{control:{type:"select"},options:["normal","small","large"],description:"the button size variant"},square:{control:"boolean",description:"indicate if button border round is square"}}},e={args:{children:"Button"}},a={args:{children:"Primary Button",variant:"primary"}},n={args:{children:"Large Button",variant:"primary",size:"large"}},t={args:{children:"Danger Button",variant:"danger"}},s={args:{children:"Small Button",variant:"danger",size:"small"}},o={args:{children:"Outline Button",variant:"primary",outline:!0}},i={args:{children:"Square Danger Button",variant:"danger",square:!0}},c={args:{children:"Square Danger Button",variant:"danger",square:!0,outline:!0}},u={args:{children:"Button",variant:"primary",square:!0,isLoading:!0}},d={args:{children:"Button",variant:"danger",square:!0,isLoading:!0,loadingText:"Deleting..."}},l={args:{children:"Button",variant:"primary",square:!0,isLoading:!0,loadingType:"spinner"}},m={args:{children:"Button",variant:"primary",disabled:!0}},g={args:{children:"Open GitHub Repository",variant:"primary"},render:({...r})=>p(nr,{...r,as:"a",href:"https://github.com/inventare/design-system",target:"_blank"})};var B,v,b;e.parameters={...e.parameters,docs:{...(B=e.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(b=(v=e.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,D,L;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(L=(D=a.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var q,P,O;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large"
  }
}`,...(O=(P=n.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var x,z,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger"
  }
}`,...(T=(z=t.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var _,w,C;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    variant: "danger",
    size: "small"
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var j,k,E;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "primary",
    outline: true
  }
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var H,N,R;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true
  }
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var F,G,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true,
    outline: true
  }
}`,...(M=(G=c.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var W,$,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true
  }
}`,...(A=($=u.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var I,J,K;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "danger",
    square: true,
    isLoading: true,
    loadingText: "Deleting..."
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,V;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true,
    loadingType: "spinner"
  }
}`,...(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    disabled: true
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var rr,er,ar;g.parameters={...g.parameters,docs:{...(rr=g.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    children: "Open GitHub Repository",
    variant: "primary"
  },
  render: ({
    ...args
  }) => <Button {...args} as="a" href="https://github.com/inventare/design-system" target="_blank" />
}`,...(ar=(er=g.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};const Or=["Default","Primary","PrimaryLarge","Danger","DangerSmall","PrimaryOutline","SquareDanger","SquareDangerOutline","Loading","LoadingCustom","LoadingSpinner","Disabled","PrimaryLink"],Cr=Object.freeze(Object.defineProperty({__proto__:null,Danger:t,DangerSmall:s,Default:e,Disabled:m,Loading:u,LoadingCustom:d,LoadingSpinner:l,Primary:a,PrimaryLarge:n,PrimaryLink:g,PrimaryOutline:o,SquareDanger:i,SquareDangerOutline:c,__namedExportsOrder:Or,default:Pr},Symbol.toStringTag,{value:"Module"}));export{Cr as B,e as D,u as L,a as P,i as S,t as a,s as b,n as c,o as d,c as e,m as f,d as g,l as h,g as i};
//# sourceMappingURL=Button.stories-1009777b.js.map
