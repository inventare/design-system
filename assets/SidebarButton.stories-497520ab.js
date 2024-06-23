const t=({variant:n="primary",label:C="Button",disabled:o=!1,dropDown:P=!1,expanded:x=!1,child:A=!1,childPosition:f="start",active:e=!1,withParent:a=!0})=>{const r=document.createElement("button");if(r.type="button",r.innerHTML=C,r.style.minWidth="250px",o&&(r.disabled=!0),r.setAttribute("aria-expanded",String(x)),r.className=["btn btn-sidebar",`${n}`,`${P?"dropdown":""}`,`${A?`child ${f}`:""}`,`${e?"active":""}`].join(" ").trim(),a){const i=document.createElement("div");return i.style.backgroundColor="#222",i.style.width="300px",i.style.padding="16px",i.appendChild(r),i}return r},$=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,ma=()=>{const n=t({variant:"primary",label:`${$} Users`,withParent:!1,active:!0}),C=t({variant:"primary",label:`${$} Products`,withParent:!1}),o=t({variant:"primary",label:`${$} Sales`,dropDown:!0,expanded:!0,active:!0,withParent:!1});o.setAttribute("data-toggle","collapse"),o.setAttribute("data-target","#collapse-body");const P=t({variant:"primary",label:"Sales Summary",child:!0,active:!1,withParent:!1}),x=t({variant:"primary",label:"Sales Trends",child:!0,childPosition:"middle",active:!1,withParent:!1}),A=t({variant:"primary",label:"Item Sales",child:!0,childPosition:"middle",active:!0,withParent:!1}),f=t({variant:"primary",label:"Employee Sales",child:!0,childPosition:"end",active:!1,withParent:!1}),e=document.createElement("div");e.id="collapse-body",e.className="collapse show";const a=document.createElement("div");return a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="stretch",a.style.width="350px",a.style.backgroundColor="#222",a.style.padding="16px",a.appendChild(n),a.appendChild(C),a.appendChild(o),e.appendChild(P),e.appendChild(x),e.appendChild(A),e.appendChild(f),a.appendChild(e),a},ua={title:"Components/SidebarButton",render:({...n})=>n.complete?ma():t({...n}),argTypes:{label:{control:"text"},variant:{control:{type:"select"},options:["primary","danger"]},disabled:{control:"boolean"},dropDown:{control:"boolean"},expanded:{control:"boolean"},childPosition:{control:{type:"select"},options:["start","middle","end"]}}},s=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,l={args:{variant:"primary",label:"Primary"}},c={args:{variant:"primary",label:"Primary",active:!0}},d={args:{variant:"primary",label:`${s} Sales`}},p={args:{variant:"primary",label:`${s} Sales`,active:!0}},m={args:{variant:"primary",label:`${s} Sales`,dropDown:!0}},u={args:{variant:"primary",label:`${s} Sales`,dropDown:!0,active:!0}},h={args:{variant:"primary",label:`${s} Sales`,dropDown:!0,expanded:!0}},y={args:{variant:"primary",label:`${s} Sales`,dropDown:!0,active:!0,expanded:!0}},v={args:{variant:"primary",label:"Sales Summary",child:!0}},g={args:{variant:"primary",label:"Sales Summary",child:!0,childPosition:"middle"}},b={args:{variant:"primary",label:"Sales Summary",child:!0,childPosition:"end"}},S={args:{variant:"primary",label:"Sales Summary",child:!0,childPosition:"middle",active:!0}},w={args:{complete:!0}};var D,E,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Primary\`
  }
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var H,L,M;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Primary\`,
    active: true
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var B,Z,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`
  }
}`,...(_=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var W,j,T;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    active: true
  }
}`,...(T=(j=p.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var O,k,N;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true
  }
}`,...(N=(k=m.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var z,U,q;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    active: true
  }
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var F,G,J;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    expanded: true
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,R;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    active: true,
    expanded: true
  }
}`,...(R=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var V,X,Y;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var aa,ea,ra;g.parameters={...g.parameters,docs:{...(aa=g.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true,
    childPosition: 'middle'
  }
}`,...(ra=(ea=g.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};var ta,na,sa;b.parameters={...b.parameters,docs:{...(ta=b.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true,
    childPosition: 'end'
  }
}`,...(sa=(na=b.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var oa,ia,la;S.parameters={...S.parameters,docs:{...(oa=S.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true,
    childPosition: 'middle',
    active: true
  }
}`,...(la=(ia=S.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ca,da,pa;w.parameters={...w.parameters,docs:{...(ca=w.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    complete: true
  }
}`,...(pa=(da=w.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};const ha=["Primary","PrimaryActive","PrimaryWithIcon","PrimaryActiveWithIcon","Dropdown","DropdownActive","DropdownExpanded","DropdownExpandedActive","Child","ChildMiddle","ChildEnd","ChildActive","CompleteExample"],ya=Object.freeze(Object.defineProperty({__proto__:null,Child:v,ChildActive:S,ChildEnd:b,ChildMiddle:g,CompleteExample:w,Dropdown:m,DropdownActive:u,DropdownExpanded:h,DropdownExpandedActive:y,Primary:l,PrimaryActive:c,PrimaryActiveWithIcon:p,PrimaryWithIcon:d,__namedExportsOrder:ha,default:ua},Symbol.toStringTag,{value:"Module"}));export{w as C,m as D,l as P,ya as S,d as a,c as b,p as c,h as d,u as e,y as f,v as g,g as h,b as i,S as j};
