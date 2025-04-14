const d=({items:r})=>{const a=document.createElement("div");return a.className="breadcrumb",a.innerHTML=r.map(({label:l,href:c,active:b})=>`<span class="breadcrumb-item${b?" active":""}"><a href="${c||"#"}">${l}</a></span>`).join(""),a},n={title:"Navigation/Breadcrumb",render:({...r})=>d({...r}),argTypes:{text:{control:"text"}}},e={args:{items:[{label:"Dashboard",href:"#dashboard"},{label:"Reports",href:"#reports"},{label:"Social",href:"#social"},{label:"Export",href:"#export",active:!0}]}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const i=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:n},Symbol.toStringTag,{value:"Module"}));export{u as B,e as D};
