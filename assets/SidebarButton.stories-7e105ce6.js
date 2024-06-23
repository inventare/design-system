import{c as rr,a as ar}from"./SidebarButton-cf46dea7.js";const er={title:"Components/SidebarButton",render:({...g})=>g.complete?rr():ar({...g}),argTypes:{label:{control:"text"},variant:{control:{type:"select"},options:["primary","danger"]},disabled:{control:"boolean"},dropDown:{control:"boolean"},expanded:{control:"boolean"},childPosition:{control:{type:"select"},options:["start","middle","end"]}}},r=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,a={args:{variant:"primary",label:"Primary"}},e={args:{variant:"primary",label:"Primary",active:!0}},s={args:{variant:"primary",label:`${r} Sales`}},o={args:{variant:"primary",label:`${r} Sales`,active:!0}},t={args:{variant:"primary",label:`${r} Sales`,dropDown:!0}},n={args:{variant:"primary",label:`${r} Sales`,dropDown:!0,active:!0}},i={args:{variant:"primary",label:`${r} Sales`,dropDown:!0,expanded:!0}},c={args:{variant:"primary",label:`${r} Sales`,dropDown:!0,active:!0,expanded:!0}},l={args:{variant:"primary",label:"Sales Summary",child:!0}},p={args:{variant:"primary",label:"Sales Summary",child:!0,childPosition:"middle"}},d={args:{variant:"primary",label:"Sales Summary",child:!0,childPosition:"end"}},m={args:{variant:"primary",label:"Sales Summary",child:!0,childPosition:"middle",active:!0}},u={args:{complete:!0}};var v,y,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Primary\`
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var h,b,w;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Primary\`,
    active: true
  }
}`,...(w=(b=e.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var P,C,D;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var A,x,$;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    active: true
  }
}`,...($=(x=o.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var I,E,f;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true
  }
}`,...(f=(E=t.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var _,B,M;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    active: true
  }
}`,...(M=(B=n.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var H,L,W;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    expanded: true
  }
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var Z,j,O;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`\${shoppingCartIcon} Sales\`,
    dropDown: true,
    active: true,
    expanded: true
  }
}`,...(O=(j=c.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var T,z,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true
  }
}`,...(k=(z=l.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var q,F,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true,
    childPosition: 'middle'
  }
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,N;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true,
    childPosition: 'end'
  }
}`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,R,U;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: \`Sales Summary\`,
    child: true,
    childPosition: 'middle',
    active: true
  }
}`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,X,Y;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    complete: true
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const sr=["Primary","PrimaryActive","PrimaryWithIcon","PrimaryActiveWithIcon","Dropdown","DropdownActive","DropdownExpanded","DropdownExpandedActive","Child","ChildMiddle","ChildEnd","ChildActive","CompleteExample"],tr=Object.freeze(Object.defineProperty({__proto__:null,Child:l,ChildActive:m,ChildEnd:d,ChildMiddle:p,CompleteExample:u,Dropdown:t,DropdownActive:n,DropdownExpanded:i,DropdownExpandedActive:c,Primary:a,PrimaryActive:e,PrimaryActiveWithIcon:o,PrimaryWithIcon:s,__namedExportsOrder:sr,default:er},Symbol.toStringTag,{value:"Module"}));export{u as C,t as D,a as P,tr as S,s as a,e as b,o as c,i as d,n as e,c as f,l as g,p as h,d as i,m as j};
