import{r as p}from"./Dropdown.renderer-B4vO4hh9.js";import"./ModalManager-6x1BS2KN.js";import"./ComponentManager-CW-XTlUv.js";import"./transitions-DBBZnb0O.js";import"./CollapseManager-nVBSW0wM.js";import"./InitializerTriggerComponent-DjtXnMDk.js";import"./SidebarManager-CzxXZlRJ.js";import"./SelectManager-3Sc5s_KG.js";const u=({items:n})=>{const r=document.createElement("nav");r.className="menu primary";const e=document.createElement("ul");e.className="container";for(const d of n){const l=document.createElement("li");l.innerHTML=`<a>${d.label}</a>`,e.appendChild(l)}const a=document.createElement("li");a.style.flex="1",e.appendChild(a);const c=p({buttonText:"Menu",align:"right"},{addEvents:!0,noContainer:!0}),o=document.createElement("li");return o.appendChild(c),e.appendChild(o),r.appendChild(e),r},x={title:"Navigation/Menu",render:n=>u(n),argTypes:{}},t={args:{items:[{label:"Home"},{label:"Contacts"}]}};var s,m,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home'
    }, {
      label: 'Contacts'
    }]
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,x as default};
