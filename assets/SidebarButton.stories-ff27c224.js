const n=({variant:e="primary",label:w="Button",disabled:C=!1,dropDown:P=!1,expanded:x=!1,child:r=!1,childPosition:a="start",active:ca=!1,withParent:da=!0})=>{const t=document.createElement("button");if(t.type="button",t.innerHTML=w,t.style.minWidth="250px",C&&(t.disabled=!0),t.setAttribute("aria-expanded",String(x)),t.className=["btn btn-sidebar",`${e}`,`${P?"dropdown":""}`,`${r?`child ${a}`:""}`,`${ca?"active":""}`].join(" ").trim(),da){const o=document.createElement("div");return o.style.backgroundColor="#222",o.style.width="300px",o.style.padding="16px",o.appendChild(t),o}return t},pa=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,ma=()=>{const e=n({variant:"primary",label:`${pa} Sales`,dropDown:!0,expanded:!0,active:!0,withParent:!1});e.setAttribute("data-toggle","collapse"),e.setAttribute("data-target","#collapse-body");const w=n({variant:"primary",label:"Sales Summary",child:!0,active:!1,withParent:!1}),C=n({variant:"primary",label:"Sales Trends",child:!0,childPosition:"middle",active:!1,withParent:!1}),P=n({variant:"primary",label:"Item Sales",child:!0,childPosition:"middle",active:!0,withParent:!1}),x=n({variant:"primary",label:"Employee Sales",child:!0,childPosition:"end",active:!1,withParent:!1}),r=document.createElement("div");r.id="collapse-body",r.className="collapse show";const a=document.createElement("div");return a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="stretch",a.style.width="350px",a.style.backgroundColor="#222",a.style.padding="16px",a.appendChild(e),r.appendChild(w),r.appendChild(C),r.appendChild(P),r.appendChild(x),a.appendChild(r),a},ua={title:"Components/SidebarButton",render:({...e})=>e.complete?ma():n({...e}),argTypes:{label:{control:"text"},variant:{control:{type:"select"},options:["primary","danger"]},disabled:{control:"boolean"},dropDown:{control:"boolean"},expanded:{control:"boolean"},childPosition:{control:{type:"select"},options:["start","middle","end"]}}},s=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,i={args:{variant:"primary",label:"Primary"}},l={args:{variant:"primary",label:"Primary",active:!0}},c={args:{variant:"primary",label:`${s} Sales`}},d={args:{variant:"primary",label:`${s} Sales`,active:!0}},p={args:{variant:"primary",label:`${s} Sales`,dropDown:!0}},m={args:{variant:"primary",label:`${s} Sales`,dropDown:!0,active:!0}},u={args:{variant:"primary",label:`${s} Sales`,dropDown:!0,expanded:!0}},h={args:{variant:"primary",label:`${s} Sales`,dropDown:!0,active:!0,expanded:!0}},g={args:{variant:"primary",label:"Sales Summary",child:!0}},y={args:{variant:"primary",label:"Sales Summary",child:!0,childPosition:"middle"}},v={args:{variant:"primary",label:"Sales Summary",child:!0,childPosition:"end"}},b={args:{variant:"primary",label:"Sales Summary",child:!0,childPosition:"middle",active:!0}},S={args:{complete:!0}};var A,f,D;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Primary\`
  }
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var $,E,I;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Primary\`,
    active: true
  }
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var H,L,M;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var B,Z,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    active: true
  }
}`,...(_=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var W,j,T;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true
  }
}`,...(T=(j=p.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var O,k,N;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    active: true
  }
}`,...(N=(k=m.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var z,q,F;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    expanded: true
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    active: true,
    expanded: true
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,U;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true
  }
}`,...(U=(R=g.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,X,Y;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true,
    childPosition: 'middle'
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var aa,ra,ea;v.parameters={...v.parameters,docs:{...(aa=v.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true,
    childPosition: 'end'
  }
}`,...(ea=(ra=v.parameters)==null?void 0:ra.docs)==null?void 0:ea.source}}};var ta,na,sa;b.parameters={...b.parameters,docs:{...(ta=b.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true,
    childPosition: 'middle',
    active: true
  }
}`,...(sa=(na=b.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var oa,ia,la;S.parameters={...S.parameters,docs:{...(oa=S.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    complete: true
  }
}`,...(la=(ia=S.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};const ha=["Primary","PrimaryActive","PrimaryWithIcon","PrimaryActiveWithIcon","Dropdown","DropdownActive","DropdownExpanded","DropdownExpandedActive","Child","ChildMiddle","ChildEnd","ChildActive","CompleteExample"],ga=Object.freeze(Object.defineProperty({__proto__:null,Child:g,ChildActive:b,ChildEnd:v,ChildMiddle:y,CompleteExample:S,Dropdown:p,DropdownActive:m,DropdownExpanded:u,DropdownExpandedActive:h,Primary:i,PrimaryActive:l,PrimaryActiveWithIcon:d,PrimaryWithIcon:c,__namedExportsOrder:ha,default:ua},Symbol.toStringTag,{value:"Module"}));export{S as C,p as D,i as P,ga as S,c as a,l as b,d as c,u as d,m as e,h as f,g,y as h,v as i,b as j};
