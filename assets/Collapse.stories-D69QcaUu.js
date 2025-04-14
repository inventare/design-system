import{C as x}from"./CollapseManager-nVBSW0wM.js";const y=(l,k)=>{const{id:i,triggerContent:J,content:d,horizontal:s}=l,e=document.createElement("div");e.style.display="flex",e.style.alignItems="stretch",s?e.style.height="200px":(e.style.flexDirection="column",e.style.width="300px");const t=document.createElement("div");t.innerHTML=J,t.setAttribute("data-toggle","collapse"),t.setAttribute("data-target",`#${i}`),t.setAttribute("aria-expanded","true"),t.style.background="var(--color-primary-500)",s&&(t.style.textOrientation="mixed",t.style.writingMode="vertical-rl"),e.appendChild(t);const o=document.createElement("div");if(o.className="collapse show",s){o.classList.add("horizontal");const r=document.createElement("div");r.style.width="300px",r.innerHTML=d,o.append(r)}else o.innerHTML=d;o.id=i,o.style.background="var(--color-primary-100)",e.appendChild(o);{const r=new x;e.addEventListener("click",C=>{var c;(c=r.getInstance(C.target))==null||c.executeByClick(new Event("click"))})}return e},f={title:"Layout/Collapse",render:l=>y(l),argTypes:{id:{control:"text"},triggerContent:{control:"text"},content:{control:"text"}}},n={args:{id:"example-default-collapse",triggerContent:"Click here to toggle",content:"John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>"}},a={args:{id:"example-horizontal-collapse",triggerContent:"Click here to toggle",content:"John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>",horizontal:!0}};var g,h,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'example-default-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>'
  }
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,m,u;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'example-horizontal-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>',
    horizontal: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const v=["Default","Horizontal"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Horizontal:a,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{D as C,n as D,a as H};
