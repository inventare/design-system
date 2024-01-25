import{j as y,F as Br}from"./jsx-runtime-29545a09.js";import{c as fr}from"./clsx.m-1229b3e0.js";import{r as br}from"./index-76fb7be0.js";import{f as qr}from"./forwardRef-0b7427f1.js";import{S as Dr}from"./spinner-ce5459f2.js";import"./_commonjsHelpers-de833af9.js";const nr=qr((p,tr)=>{const{as:sr,children:or,className:ir,disabled:cr,variant:ur="default",size:dr="normal",square:lr=!1,outline:mr=!1,isLoading:pr=!1,loadingType:S="text",loadingText:gr="Loading...",loadingSpinnerSize:hr=24,loadingSpinnerWidth:yr=3,...Sr}=p;let g=cr,h=or;pr&&(g=!0,S==="text"&&(h=y(Br,{children:gr})),S==="spinner"&&(h=y(Dr,{size:hr,width:yr})));const vr=fr({btn:!0,[dr]:!0,[ur]:!0,square:lr,disabled:g,outline:mr,[ir||""]:!0});return br.createElement(sr||"button",{...Sr,ref:tr,disabled:g,children:h,className:vr})}),wr={title:"Components/Button",component:nr,argTypes:{as:{control:!1,description:"The `as` is used to change the HTML Element output of `<Button />` component."},disabled:{control:"boolean",description:"indicate if the button is disabled"},variant:{control:{type:"select"},options:["default","primary","danger"],description:"the button style"},size:{control:{type:"select"},options:["normal","small","large"],description:"the button size variant"},square:{control:"boolean",description:"indicate if button border round is square"}}},r={args:{children:"Button"}},e={args:{children:"Primary Button",variant:"primary"}},a={args:{children:"Large Button",variant:"primary",size:"large"}},n={args:{children:"Danger Button",variant:"danger"}},t={args:{children:"Small Button",variant:"danger",size:"small"}},s={args:{children:"Outline Button",variant:"primary",outline:!0}},o={args:{children:"Square Danger Button",variant:"danger",square:!0}},i={args:{children:"Square Danger Button",variant:"danger",square:!0,outline:!0}},c={args:{children:"Button",variant:"primary",square:!0,isLoading:!0}},u={args:{children:"Button",variant:"danger",square:!0,isLoading:!0,loadingText:"Deleting..."}},d={args:{children:"Button",variant:"primary",square:!0,isLoading:!0,loadingType:"spinner"}},l={args:{children:"Button",variant:"primary",disabled:!0}},m={args:{children:"Open GitHub Repository",variant:"primary"},render:({...p})=>y(nr,{...p,as:"a",href:"https://github.com/inventare/design-system",target:"_blank"})};var v,B,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(f=(B=r.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var b,q,D;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(D=(q=e.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var L,x,P;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large"
  }
}`,...(P=(x=a.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var z,O,T;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger"
  }
}`,...(T=(O=n.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var w,C,k;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    variant: "danger",
    size: "small"
  }
}`,...(k=(C=t.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var E,_,H;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "primary",
    outline: true
  }
}`,...(H=(_=s.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var N,R,j;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true
  }
}`,...(j=(R=o.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var F,G,M;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(ar=(er=m.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};const Cr=["Default","Primary","PrimaryLarge","Danger","DangerSmall","PrimaryOutline","SquareDanger","SquareDangerOutline","Loading","LoadingCustom","LoadingSpinner","Disabled","PrimaryLink"];export{n as Danger,t as DangerSmall,r as Default,l as Disabled,c as Loading,u as LoadingCustom,d as LoadingSpinner,e as Primary,a as PrimaryLarge,m as PrimaryLink,s as PrimaryOutline,o as SquareDanger,i as SquareDangerOutline,Cr as __namedExportsOrder,wr as default};
//# sourceMappingURL=button.stories-67327093.js.map
