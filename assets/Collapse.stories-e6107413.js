const m=({id:a,triggerContent:u,content:d,horizontal:l=!1})=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="stretch",l?e.style.height="200px":(e.style.flexDirection="column",e.style.width="300px");const t=document.createElement("div");t.innerHTML=u,t.setAttribute("data-toggle","collapse"),t.setAttribute("data-target",`#${a}`),t.setAttribute("aria-expanded","true"),t.style.background="var(--color-primary-500)",l&&(t.style.textOrientation="mixed",t.style.writingMode="vertical-rl"),e.appendChild(t);const o=document.createElement("div");if(o.className="collapse show",l){o.classList.add("horizontal");const s=document.createElement("div");s.style.width="300px",s.innerHTML=d,o.append(s)}else o.innerHTML=d;return o.id=a,o.style.background="var(--color-primary-100)",e.appendChild(o),e},J={title:"Vanilla JavaScript/Collapse",render:({...a})=>m({...a}),argTypes:{id:{control:"text"},triggerContent:{control:"text"},content:{control:"text"}}},r={args:{id:"example-default-collapse",triggerContent:"Click here to toggle",content:"John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>"}},n={args:{id:"example-horizontal-collapse",triggerContent:"Click here to toggle",content:"John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>",horizontal:!0}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'example-default-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'example-horizontal-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>',
    horizontal: true
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const x=["Default","Horizontal"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Horizontal:n,__namedExportsOrder:x,default:J},Symbol.toStringTag,{value:"Module"}));export{y as C,r as D,n as H};
