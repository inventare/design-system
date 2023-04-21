import{j as d,F as E,S as O}from"./spinner-c27fb570.js";import{r as S}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function x(e){var r,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=x(e[r]))&&(a&&(a+=" "),a+=n);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function W(){for(var e,r,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(r=x(e))&&(a&&(a+=" "),a+=r);return a}function k(e){return S.forwardRef(e)}const o=k((e,r)=>{const{as:n,children:a,className:A,disabled:B,variant:V="default",size:_="normal",square:z=!1,outline:T=!1,isLoading:w=!1,loadingType:p="text",loadingText:L="Loading...",loadingSpinnerSize:P=24,loadingSpinnerWidth:N=3,...j}=e;let l=B,u=a;w&&(l=!0,p==="text"&&(u=d(E,{children:L})),p==="spinner"&&(u=d(O,{size:P,width:N})));const C=W({btn:!0,[_]:!0,[V]:!0,square:z,disabled:l,outline:T,[A||""]:!0});return S.createElement(n||"button",{...j,ref:r,disabled:l,children:u,className:C})});try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingType:{defaultValue:null,description:"",name:"loadingType",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"spinner"'}]}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},loadingSpinnerWidth:{defaultValue:null,description:"",name:"loadingSpinnerWidth",required:!1,type:{name:"number"}},loadingSpinnerSize:{defaultValue:null,description:"",name:"loadingSpinnerSize",required:!1,type:{name:"number"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | ("a" & As) | ("abbr" & As) | ("address" & As) | ("area" & As) | ("article" & As) | ("aside" & As) | ("audio" & As) | ... 169 more ...'}}}}}catch{}const I={title:"Components/Button",component:o,tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"indicate if the button is disabled"},variant:{control:{type:"select"},options:["default","primary","danger"],description:"the button style"},size:{control:{type:"select"},options:["normal","small","large"],description:"the button size variant"},square:{control:"boolean",description:"indicate if button border round is square"}}},t={args:{children:"Button",variant:"primary"}},i={args:{children:"Button",variant:"primary",outline:!0}},s={args:{children:"Button",variant:"primary"},render:({...e})=>d(o,{...e,as:"a",href:"#"})};var c,m,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary"
  }
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,y,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    outline: true
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,h,q;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary"
  },
  render: ({
    ...args
  }) => <Button {...args} as="a" href="#" />
}`,...(q=(h=s.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};const G=["Primary","PrimaryOutline","PrimaryLink"];export{t as Primary,s as PrimaryLink,i as PrimaryOutline,G as __namedExportsOrder,I as default};
//# sourceMappingURL=button.stories-0d55eed2.js.map
