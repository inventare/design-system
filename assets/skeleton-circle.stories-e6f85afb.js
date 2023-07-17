import{j as s}from"./jsx-runtime-91a467a5.js";import{f as C}from"./forwardRef-bfd3a5b5.js";import{S as k}from"./skeleton-d122469d.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const t=C((e,m)=>{const{size:n,style:u,...f}=e,g=n,h=n,y={...u||{},"--inventare-skeleton-radius":"50%"};return s(k,{ref:m,width:g,height:h,style:y,...f})});try{t.displayName="SkeletonCircle",t.__docgenInfo={description:"",displayName:"SkeletonCircle",props:{startColor:{defaultValue:null,description:"",name:"startColor",required:!1,type:{name:"string"}},endColor:{defaultValue:null,description:"",name:"endColor",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | ("a" & As) | ("abbr" & As) | ("address" & As) | ("area" & As) | ("article" & As) | ("aside" & As) | ("audio" & As) | ... 169 more ...'}}}}}catch{}const q={title:"Components/SkeletonCircle",component:t,tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"indicate if the skeleton is visible"},startColor:{control:{type:"color"},description:"the starting color of the skeleton animation"},endColor:{control:{type:"color"},description:"the end color of the skeleton animation"},size:{control:{type:"range",min:1,max:300,step:1},description:"the size of the skeleton"}}},r={args:{size:200}},o={args:{},render:({...e})=>s(t,{...e,children:s("div",{style:{width:120,height:120,backgroundColor:"red"}})})};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    size: 200
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...props
  }) => <SkeletonCircle {...props}>
      <div style={{
      width: 120,
      height: 120,
      backgroundColor: "red"
    }} />
    </SkeletonCircle>
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const w=["Default","WrappingChild"];export{r as Default,o as WrappingChild,w as __namedExportsOrder,q as default};
//# sourceMappingURL=skeleton-circle.stories-e6f85afb.js.map
