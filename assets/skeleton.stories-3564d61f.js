import{j as e,a as c}from"./jsx-runtime-91a467a5.js";import{S as h}from"./skeleton-d122469d.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./forwardRef-bfd3a5b5.js";const k={title:"Components/Skeleton",component:h,tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"indicate if the skeleton is visible"},startColor:{control:{type:"color"},description:"the starting color of the skeleton animation"},endColor:{control:{type:"color"},description:"the end color of the skeleton animation"},radius:{control:{type:"range",min:1,max:50,step:1},description:"the border-radius of the skeleton"}}},t={args:{width:50,height:50}},n={args:{width:"100%"},render:({...l})=>e(h,{...l,children:c("div",{style:{padding:20},children:[e("div",{children:"This is the text."}),e("div",{children:"This is the another line."}),e("div",{children:"This is the another line."}),e("div",{style:{height:120,width:120,margin:"0 auto",backgroundColor:"red"}})]})})};var o,i,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    width: 50,
    height: 50
  }
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var s,a,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(a=n.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const f=["Default","WrappingChild"];export{t as Default,n as WrappingChild,f as __namedExportsOrder,k as default};
//# sourceMappingURL=skeleton.stories-3564d61f.js.map
