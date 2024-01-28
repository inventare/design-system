import{j as t}from"./jsx-runtime-29545a09.js";import{f as C}from"./forwardRef-0b7427f1.js";import{S as y}from"./Skeleton-9ecb0b78.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";const d=C((r,m)=>{const{size:n,style:h,...g}=r,u=n,f=n,k={...h||{},"--inventare-skeleton-radius":"50%"};return t(y,{ref:m,width:u,height:f,style:k,...g})}),j={title:"Components/SkeletonCircle",component:d,tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"indicate if the skeleton is visible"},startColor:{control:{type:"color"},description:"the starting color of the skeleton animation"},endColor:{control:{type:"color"},description:"the end color of the skeleton animation"},size:{control:{type:"range",min:1,max:300,step:1},description:"the size of the skeleton"}}},e={args:{size:200}},o={args:{},render:({...r})=>t(d,{...r,children:t("div",{style:{width:120,height:120,backgroundColor:"red"}})})};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 200
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const D=["Default","WrappingChild"];export{e as Default,o as WrappingChild,D as __namedExportsOrder,j as default};
//# sourceMappingURL=SkeletonCircle.stories-48c50b57.js.map
