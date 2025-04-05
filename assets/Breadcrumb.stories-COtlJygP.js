const b=({items:r})=>{const a=document.createElement("div");return a.className="breadcrumb",a.innerHTML=r.map(({label:s,href:l,active:c})=>`<span class="breadcrumb-item${c?" active":""}"><a href="${l||"#"}">${s}</a></span>`).join(""),a},d={title:"Navigation/Breadcrumb",render:({...r})=>b({...r}),argTypes:{text:{control:"text"}}},e={args:{items:[{label:"Dashboard",href:"#dashboard"},{label:"Reports",href:"#reports"},{label:"Social",href:"#social"},{label:"Export",href:"#export",active:!0}]}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: "#dashboard"
    }, {
      label: 'Reports',
      href: "#reports"
    }, {
      label: 'Social',
      href: "#social"
    }, {
      label: 'Export',
      href: "#export",
      active: true
    }]
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const i=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:d},Symbol.toStringTag,{value:"Module"}));export{u as B,e as D};
