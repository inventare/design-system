import{j as h,F as Se}from"./jsx-runtime-29545a09.js";import{f as be,c as qe}from"./forwardRef-2a3927c5.js";import{r as Be}from"./index-76fb7be0.js";import{S as Le}from"./spinner-6d18fbfe.js";const g=be((p,te)=>{const{as:se,children:ie,className:oe,disabled:ue,variant:le="default",size:de="normal",square:ce=!1,outline:me=!1,isLoading:pe=!1,loadingType:v="text",loadingText:ge="Loading...",loadingSpinnerSize:ye=24,loadingSpinnerWidth:fe=3,...he}=p;let y=ue,f=ie;pe&&(y=!0,v==="text"&&(f=h(Se,{children:ge})),v==="spinner"&&(f=h(Le,{size:ye,width:fe})));const ve=qe({btn:!0,[de]:!0,[le]:!0,square:ce,disabled:y,outline:me,[oe||""]:!0});return Be.createElement(se||"button",{...he,ref:te,disabled:y,children:f,className:ve})});try{g.displayName="Button",g.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingType:{defaultValue:null,description:"",name:"loadingType",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"spinner"'}]}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},loadingSpinnerWidth:{defaultValue:null,description:"",name:"loadingSpinnerWidth",required:!1,type:{name:"number"}},loadingSpinnerSize:{defaultValue:null,description:"",name:"loadingSpinnerSize",required:!1,type:{name:"number"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | ("a" & As) | ("abbr" & As) | ("address" & As) | ("area" & As) | ("article" & As) | ("aside" & As) | ("audio" & As) | ... 169 more ...'}}}}}catch{}const De={title:"Components/Button",component:g,argTypes:{as:{control:!1,description:"The `as` is used to change the HTML Element output of `<Button />` component."},disabled:{control:"boolean",description:"indicate if the button is disabled"},variant:{control:{type:"select"},options:["default","primary","danger"],description:"the button style"},size:{control:{type:"select"},options:["normal","small","large"],description:"the button size variant"},square:{control:"boolean",description:"indicate if button border round is square"}}},e={args:{children:"Button"}},r={args:{children:"Primary Button",variant:"primary"}},a={args:{children:"Large Button",variant:"primary",size:"large"}},n={args:{children:"Danger Button",variant:"danger"}},t={args:{children:"Small Button",variant:"danger",size:"small"}},s={args:{children:"Outline Button",variant:"primary",outline:!0}},i={args:{children:"Square Danger Button",variant:"danger",square:!0}},o={args:{children:"Square Danger Button",variant:"danger",square:!0,outline:!0}},u={args:{children:"Button",variant:"primary",square:!0,isLoading:!0}},l={args:{children:"Button",variant:"danger",square:!0,isLoading:!0,loadingText:"Deleting..."}},d={args:{children:"Button",variant:"primary",square:!0,isLoading:!0,loadingType:"spinner"}},c={args:{children:"Button",variant:"primary",disabled:!0}},m={args:{children:"Open GitHub Repository",variant:"primary"},render:({...p})=>h(g,{...p,as:"a",href:"https://github.com/inventare/design-system",target:"_blank"})};var S,b,q;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(q=(b=e.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var B,L,D;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(D=(L=r.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var _,z,T;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large"
  }
}`,...(T=(z=a.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var x,P,O;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger"
  }
}`,...(O=(P=n.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var V,A,j;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    variant: "danger",
    size: "small"
  }
}`,...(j=(A=t.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var w,C,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "primary",
    outline: true
  }
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var k,E,H;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true
  }
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,W,F;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true,
    outline: true
  }
}`,...(F=(W=o.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var G,M,I;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true
  }
}`,...(I=(M=u.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var J,K,Q;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "danger",
    square: true,
    isLoading: true,
    loadingText: "Deleting..."
  }
}`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true,
    loadingType: "spinner"
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    disabled: true
  }
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    children: "Open GitHub Repository",
    variant: "primary"
  },
  render: ({
    ...args
  }) => <Button {...args} as="a" href="https://github.com/inventare/design-system" target="_blank" />
}`,...(ne=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const _e=["Default","Primary","PrimaryLarge","Danger","DangerSmall","PrimaryOutline","SquareDanger","SquareDangerOutline","Loading","LoadingCustom","LoadingSpinner","Disabled","PrimaryLink"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,DangerSmall:t,Default:e,Disabled:c,Loading:u,LoadingCustom:l,LoadingSpinner:d,Primary:r,PrimaryLarge:a,PrimaryLink:m,PrimaryOutline:s,SquareDanger:i,SquareDangerOutline:o,__namedExportsOrder:_e,default:De},Symbol.toStringTag,{value:"Module"}));export{Oe as B,e as D,u as L,r as P,i as S,n as a,t as b,a as c,s as d,o as e,c as f,l as g,d as h,m as i};
//# sourceMappingURL=button.stories-7ce27f9c.js.map
