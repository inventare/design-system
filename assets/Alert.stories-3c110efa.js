const u=({text:a,variant:s="default"})=>{const e=document.createElement("div");return e.className="alert",e.role="alert",e.innerHTML=a,s!=="default"&&e.classList.add(s),e},m={title:"Components/Alert",render:({...a})=>u({...a}),argTypes:{text:{control:"text"}}},t={args:{text:"this is a base alert text"}},r={args:{text:"this is a base alert text",variant:"danger"}};var n,o,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'this is a base alert text'
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'this is a base alert text',
    variant: 'danger'
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const p=["Base","Danger"],g=Object.freeze(Object.defineProperty({__proto__:null,Base:t,Danger:r,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{g as A,t as B,r as D};
