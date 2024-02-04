import{j as t}from"./jsx-runtime-29545a09.js";import{f as C}from"./forwardRef-0b7427f1.js";import{S as y}from"./Skeleton-9ecb0b78.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";const n=C((r,m)=>{const{size:s,style:h,...g}=r,u=s,f=s,k={...h||{},"--inventare-skeleton-radius":"50%"};return t(y,{ref:m,width:u,height:f,style:k,...g})});n.displayName="SkeletonCircle";const j={title:"Components/SkeletonCircle",component:n,tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"indicate if the skeleton is visible"},startColor:{control:{type:"color"},description:"the starting color of the skeleton animation"},endColor:{control:{type:"color"},description:"the end color of the skeleton animation"},size:{control:{type:"range",min:1,max:300,step:1},description:"the size of the skeleton"}}},e={args:{size:200}},o={args:{},render:({...r})=>t(n,{...r,children:t("div",{style:{width:120,height:120,backgroundColor:"red"}})})};var i,a,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 200
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const D=["Default","WrappingChild"];export{e as Default,o as WrappingChild,D as __namedExportsOrder,j as default};
//# sourceMappingURL=SkeletonCircle.stories-b2d9619a.js.map
