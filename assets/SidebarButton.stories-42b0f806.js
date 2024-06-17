const n=({variant:r="primary",label:m="Button",disabled:u=!1,dropDown:h=!1,expanded:g=!1,child:a=!1,childPosition:e="start",active:T=!1,withParent:W=!0})=>{const t=document.createElement("button");if(t.type="button",t.innerHTML=m,t.style.minWidth="250px",u&&(t.disabled=!0),t.setAttribute("aria-expanded",String(g)),t.className=["btn btn-sidebar",`${r}`,`${h?"dropdown":""}`,`${a?`child ${e}`:""}`,`${T?"active":""}`].join(" ").trim(),W){const o=document.createElement("div");return o.style.backgroundColor="#222",o.style.width="300px",o.style.padding="16px",o.appendChild(t),o}return t},_=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,k=()=>{const r=n({variant:"primary",label:`${_} Sales`,dropDown:!0,expanded:!0,active:!0,withParent:!1});r.setAttribute("data-toggle","collapse"),r.setAttribute("data-target","#collapse-body");const m=n({variant:"primary",label:"Sales Summary",child:!0,active:!1,withParent:!1}),u=n({variant:"primary",label:"Sales Trends",child:!0,childPosition:"middle",active:!1,withParent:!1}),h=n({variant:"primary",label:"Item Sales",child:!0,childPosition:"middle",active:!0,withParent:!1}),g=n({variant:"primary",label:"Employee Sales",child:!0,childPosition:"end",active:!1,withParent:!1}),a=document.createElement("div");a.id="collapse-body",a.className="collapse show";const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="stretch",e.style.width="350px",e.style.backgroundColor="#222",e.style.padding="16px",e.appendChild(r),a.appendChild(m),a.appendChild(u),a.appendChild(h),a.appendChild(g),e.appendChild(a),e},N={title:"Components/SidebarButton",render:({...r})=>r.complete?k():n({...r}),argTypes:{label:{control:"text"},variant:{control:{type:"select"},options:["primary","danger"]},disabled:{control:"boolean"},dropDown:{control:"boolean"},expanded:{control:"boolean"},childPosition:{control:{type:"select"},options:["start","middle","end"]}}},y=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,s={args:{variant:"primary",label:"Primary"}},l={args:{variant:"primary",label:`${y} Sales`}},i={args:{variant:"primary",label:`${y} Sales`,dropDown:!0}},d={args:{variant:"primary",label:`${y} Sales`,dropDown:!0,expanded:!0}},c={args:{variant:"primary",label:"Sales Summary",child:!0}},p={args:{complete:!0}};var b,v,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Primary\`
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,x,f;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,A,P;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true
  }
}`,...(P=(A=i.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var $,D,H;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    expanded: true
  }
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var E,I,L;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true
  }
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var Z,B,M;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    complete: true
  }
}`,...(M=(B=p.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const j=["Primary","PrimaryWithIcon","Dropdown","DropdownExpanded","Child","CompleteExample"];export{c as Child,p as CompleteExample,i as Dropdown,d as DropdownExpanded,s as Primary,l as PrimaryWithIcon,j as __namedExportsOrder,N as default};
