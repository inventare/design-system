const d=({circle:s=!1})=>{const e=document.createElement("div");return e.style.width="200px",s?(e.style.height="200px",e.style.borderRadius="50%"):e.style.height="60px",e.className="skeleton",e},u={title:"Inventare/Skeleton",tags:["autodocs"],render:({...s})=>d({...s}),argTypes:{circle:{control:"boolean"}}},r={args:{}},t={args:{circle:!0}};var a,o,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {}
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    circle: true
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const p=["Default","CircleSkeleton"];export{t as CircleSkeleton,r as Default,p as __namedExportsOrder,u as default};
