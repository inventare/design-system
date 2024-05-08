import{f as J}from"./index-6eef940f.js";const K=({variant:u="primary",disabled:m=!1,sizing:g="default",square:F=!1,label:G,onClick:H})=>{const a=document.createElement("button");return a.type="button",a.innerText=G||"Button",m&&(a.disabled=!0),a.addEventListener("click",H),a.className=["btn",`${u}`,`${g==="default"?"":g}`,`${F?"square":""}`].join(" "),a},Q={title:"Inventare/Button",tags:["autodocs"],render:({label:u,...m})=>K({label:u,...m}),argTypes:{label:{control:"text"},onClick:{action:"onClick"},variant:{control:{type:"select"},options:["primary","danger"]},sizing:{control:{type:"select"},options:["default","small","large"]},square:{control:"boolean"},disabled:{control:"boolean"}},args:{onClick:J()}},r={args:{variant:"primary",label:"Button"}},e={args:{variant:"primary",label:"Button",sizing:"large"}},n={args:{variant:"primary",label:"Button",sizing:"small"}},t={args:{variant:"primary",label:"Button",disabled:!0}},s={args:{variant:"danger",label:"Button"}},o={args:{variant:"danger",label:"Button",sizing:"large"}},l={args:{variant:"danger",label:"Button",sizing:"small"}},i={args:{variant:"danger",label:"Button",disabled:!0}},c={args:{variant:"danger",label:"Button",sizing:"small",square:!0}};var d,p,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Button'
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,B,v;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Button',
    sizing: 'large'
  }
}`,...(v=(B=e.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var S,D,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Button',
    sizing: 'small'
  }
}`,...(f=(D=n.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var z,P,q;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Button',
    disabled: true
  }
}`,...(q=(P=t.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var L,k,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Button'
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var C,E,_;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Button',
    sizing: 'large'
  }
}`,...(_=(E=o.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var $,T,j;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Button',
    sizing: 'small'
  }
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var I,N,O;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Button',
    disabled: true
  }
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var h,w,A;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Button',
    sizing: 'small',
    square: true
  }
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const R=["Primary","PrimaryLarge","PrimarySmall","PrimaryDisabled","Danger","DangerLarge","DangerSmall","DangerDisabled","DangerSquare"];export{s as Danger,i as DangerDisabled,o as DangerLarge,l as DangerSmall,c as DangerSquare,r as Primary,t as PrimaryDisabled,e as PrimaryLarge,n as PrimarySmall,R as __namedExportsOrder,Q as default};
