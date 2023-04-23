import{j as l,F as j}from"./jsx-runtime-670450c2.js";import{f as C,c as E}from"./forwardRef-0e68f2f3.js";import{r as O}from"./index-f1f749bf.js";import{S as W}from"./spinner-baa3daa6.js";import"./_commonjsHelpers-042e6b4d.js";const t=C((e,v)=>{const{as:h,children:q,className:S,disabled:x,variant:B="default",size:V="normal",square:_=!1,outline:z=!1,isLoading:A=!1,loadingType:o="text",loadingText:T="Loading...",loadingSpinnerSize:L=24,loadingSpinnerWidth:P=3,...w}=e;let i=x,s=q;A&&(i=!0,o==="text"&&(s=l(j,{children:T})),o==="spinner"&&(s=l(W,{size:L,width:P})));const N=E({btn:!0,[V]:!0,[B]:!0,square:_,disabled:i,outline:z,[S||""]:!0});return O.createElement(h||"button",{...w,ref:v,disabled:i,children:s,className:N})});try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingType:{defaultValue:null,description:"",name:"loadingType",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"spinner"'}]}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},loadingSpinnerWidth:{defaultValue:null,description:"",name:"loadingSpinnerWidth",required:!1,type:{name:"number"}},loadingSpinnerSize:{defaultValue:null,description:"",name:"loadingSpinnerSize",required:!1,type:{name:"number"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | ("a" & As) | ("abbr" & As) | ("address" & As) | ("area" & As) | ("article" & As) | ("aside" & As) | ("audio" & As) | ... 169 more ...'}}}}}catch{}const G={title:"Components/Button",component:t,tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"indicate if the button is disabled"},variant:{control:{type:"select"},options:["default","primary","danger"],description:"the button style"},size:{control:{type:"select"},options:["normal","small","large"],description:"the button size variant"},square:{control:"boolean",description:"indicate if button border round is square"}}},a={args:{children:"Button",variant:"primary"}},r={args:{children:"Button",variant:"primary",outline:!0}},n={args:{children:"Button",variant:"primary"},render:({...e})=>l(t,{...e,as:"a",href:"#"})};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary"
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,c,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    outline: true
  }
}`,...(f=(c=r.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var g,y,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary"
  },
  render: ({
    ...args
  }) => <Button {...args} as="a" href="#" />
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const H=["Primary","PrimaryOutline","PrimaryLink"];export{a as Primary,n as PrimaryLink,r as PrimaryOutline,H as __namedExportsOrder,G as default};
//# sourceMappingURL=button.stories-4583f1e5.js.map
