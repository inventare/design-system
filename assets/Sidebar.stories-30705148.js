import{a}from"./SidebarButton-cf46dea7.js";const o=`
  <svg class="sidebar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,S=()=>{const b=a({variant:"primary",label:`${o} <span class="hide-on-collapse">Users</span>`,withParent:!1,active:!0}),g=a({variant:"primary",label:`${o} <span class="hide-on-collapse">Products</span>`,withParent:!1}),c=a({variant:"primary",label:`${o} <span class="hide-on-collapse">Sales</span>`,dropDown:!0,expanded:!0,active:!0,withParent:!1});c.setAttribute("data-toggle","collapse"),c.setAttribute("data-target","#collapse-body");const v=a({variant:"primary",label:"Sales Summary",child:!0,active:!1,withParent:!1}),y=a({variant:"primary",label:"Sales Trends",child:!0,childPosition:"middle",active:!1,withParent:!1}),C=a({variant:"primary",label:"Item Sales",child:!0,childPosition:"middle",active:!0,withParent:!1}),f=a({variant:"primary",label:"Employee Sales",child:!0,childPosition:"end",active:!1,withParent:!1}),i=document.createElement("div");i.id="collapse-body",i.className="collapse show";const l=document.createElement("div");l.className="sidebar-childs";const w=a({variant:"primary",label:`${o} <span class="hide-on-collapse">Products</span>`,withParent:!1}),s=document.createElement("div");s.className="sidebar",s.id="sidebar-example-here";const e=document.createElement("div");e.className="sidebar-inner";const p=document.createElement("div");p.className="branding",e.appendChild(p),e.appendChild(b),e.appendChild(g),e.appendChild(c),l.appendChild(v),l.appendChild(y),l.appendChild(C),l.appendChild(f),i.appendChild(l),e.appendChild(i),e.appendChild(w),s.appendChild(e);const d=document.createElement("button");d.className="sidebar-toggle",d.setAttribute("data-toggle","sidebar"),d.setAttribute("data-target","#sidebar-example-here"),s.appendChild(d);const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="row",t.style.alignItems="stretch",t.style.height="700px",t.appendChild(s);const r=document.createElement("div");return r.style.flex="1",r.style.backgroundColor="var(--color-primary-300)",r.style.padding="var(--spacing-base)",r.innerHTML="<h1>Main Content</h1>",t.appendChild(r),t},x={title:"Components/Sidebar",render:()=>S(),argTypes:{}},n={args:{}};var h,m,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const P=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{n as D,A as S};