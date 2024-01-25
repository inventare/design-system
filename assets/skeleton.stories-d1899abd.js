import{j as e,a as c}from"./jsx-runtime-29545a09.js";import{S as h}from"./skeleton-9ecb0b78.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";import"./forwardRef-0b7427f1.js";const f={title:"Components/Skeleton",component:h,tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"indicate if the skeleton is visible"},startColor:{control:{type:"color"},description:"the starting color of the skeleton animation"},endColor:{control:{type:"color"},description:"the end color of the skeleton animation"},radius:{control:{type:"range",min:1,max:50,step:1},description:"the border-radius of the skeleton"}}},t={args:{width:50,height:50}},o={args:{width:"100%"},render:({...l})=>e(h,{...l,children:c("div",{style:{padding:20},children:[e("div",{children:"This is the text."}),e("div",{children:"This is the another line."}),e("div",{children:"This is the another line."}),e("div",{style:{height:120,width:120,margin:"0 auto",backgroundColor:"red"}})]})})};var i,n,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    width: 50,
    height: 50
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var s,a,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: "100%"
  },
  render: ({
    ...props
  }) => <Skeleton {...props}>
      <div style={{
      padding: 20
    }}>
        <div>This is the text.</div>
        <div>This is the another line.</div>
        <div>This is the another line.</div>
        <div style={{
        height: 120,
        width: 120,
        margin: "0 auto",
        backgroundColor: "red"
      }} />
      </div>
    </Skeleton>
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const y=["Default","WrappingChild"];export{t as Default,o as WrappingChild,y as __namedExportsOrder,f as default};
//# sourceMappingURL=skeleton.stories-d1899abd.js.map
