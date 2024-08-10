const A=({text:i,variant:o="default"})=>{const e=document.createElement("div");return e.className="alert",e.role="alert",e.innerHTML=i,o!=="default"&&e.classList.add(o),e},D={title:"Components/Data Display/Alert",render:({...i})=>A({...i}),argTypes:{text:{control:"text"}}},r={args:{text:"this is a base alert text"}},a={args:{text:"this is a base alert text",variant:"danger"}},t={args:{text:"This is a text indicating success!",variant:"success"}},s={args:{text:"This is a text indicating error!",variant:"error"}},n={args:{text:"This is a text indicating warning!",variant:"warning"}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'this is a base alert text'
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,u,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'this is a base alert text',
    variant: 'danger'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,x,S;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'This is a text indicating success!',
    variant: 'success'
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var h,v,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 'This is a text indicating error!',
    variant: 'error'
  }
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var b,_,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'This is a text indicating warning!',
    variant: 'warning'
  }
}`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const E=["Base","Danger","Success","Error","Warning"],w=Object.freeze(Object.defineProperty({__proto__:null,Base:r,Danger:a,Error:s,Success:t,Warning:n,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{w as A,r as B,a as D,s as E,t as S,n as W};
