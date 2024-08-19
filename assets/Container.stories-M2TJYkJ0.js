const j=({fluid:d,maxWidth:m})=>{const r=document.createElement("div");m?r.className=`container-${m}`:d?r.className="container-fluid":r.className="container",r.style.height="300px";const e=document.createElement("div");return e.style.backgroundColor="var(--color-primary-500)",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.textAlign="center",e.style.height="100%",e.innerHTML="CONTAINER CHILD",r.appendChild(e),r},D={title:"Layout/Container",render:({...d})=>j({...d}),argTypes:{fluid:{control:"boolean"}}},a={args:{fluid:!0}},s={args:{}},t={args:{maxWidth:"sm"}},n={args:{maxWidth:"md"}},o={args:{maxWidth:"lg"}},c={args:{maxWidth:"xl"}},i={args:{maxWidth:"xxl"}};var l,u,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    fluid: true
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,C,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var h,y,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    maxWidth: 'sm'
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,L,W;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    maxWidth: 'md'
  }
}`,...(W=(L=n.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,M,X;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    maxWidth: 'lg'
  }
}`,...(X=(M=o.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var b,N,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    maxWidth: 'xl'
  }
}`,...(v=(N=c.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var E,O,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    maxWidth: 'xxl'
  }
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const F=["Fluid","Container","ContainerSM","ContainerMD","ContainerLG","ContainerXL","ContainerXXL"],I=Object.freeze(Object.defineProperty({__proto__:null,Container:s,ContainerLG:o,ContainerMD:n,ContainerSM:t,ContainerXL:c,ContainerXXL:i,Fluid:a,__namedExportsOrder:F,default:D},Symbol.toStringTag,{value:"Module"}));export{I as C,a as F,s as a};
