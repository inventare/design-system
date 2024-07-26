import{C as x}from"./CollapseManager-Bej1nEDY.js";const C={title:"Vanilla JavaScript/Collapse",render:({id:s,triggerContent:u,content:d,horizontal:l=!1})=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="stretch",l?e.style.height="200px":(e.style.flexDirection="column",e.style.width="300px");const t=document.createElement("div");t.innerHTML=u,t.setAttribute("data-toggle","collapse"),t.setAttribute("data-target",`#${s}`),t.setAttribute("aria-expanded","true"),t.style.background="var(--color-primary-500)",l&&(t.style.textOrientation="mixed",t.style.writingMode="vertical-rl"),e.appendChild(t);const o=document.createElement("div");if(o.className="collapse show",l){o.classList.add("horizontal");const r=document.createElement("div");r.style.width="300px",r.innerHTML=d,o.append(r)}else o.innerHTML=d;o.id=s,o.style.background="var(--color-primary-100)",e.appendChild(o);const J=new x;return e.addEventListener("click",r=>{var i;(i=J.getInstance(r.target))==null||i.executeByClick()}),e},argTypes:{id:{control:"text"},triggerContent:{control:"text"},content:{control:"text"}}},n={args:{id:"example-default-collapse",triggerContent:"Click here to toggle",content:"John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>"}},a={args:{id:"example-horizontal-collapse",triggerContent:"Click here to toggle",content:"John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>",horizontal:!0}};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'example-default-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>'
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,b,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'example-horizontal-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>',
    horizontal: true
  }
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const y=["Default","Horizontal"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Horizontal:a,__namedExportsOrder:y,default:C},Symbol.toStringTag,{value:"Module"}));export{v as C,n as D,a as H};
