const d=({borderRadius:t,width:r,height:o})=>{const e=document.createElement("div");return e.style.width=r?`${r}px`:"200px",e.style.height=o?`${o}px`:"200px",e.className="skeleton",t!=="none"&&(t==="rounded"?e.classList.add("rounded"):e.classList.add(`rounded-${t}`)),e},c={title:"Components/Skeleton",render:({...t})=>d({...t}),argTypes:{borderRadius:{control:{type:"select"},options:["none","rounded","medium","large","xlarge","pill","circle"]},width:{type:"range",min:10,max:1e3,step:1},height:{type:"range",min:10,max:1e3,step:1}}},n={args:{width:200,height:200}};var s,a,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 200
  }
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const i=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{n as D,p as S};
