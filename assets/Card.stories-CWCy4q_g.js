const C=`
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,x=({title:o,text:v,footerRight:y,iconed:n})=>{const a=document.createElement("div");a.className=`card ${n?"iconed":""}`;let s=`
    <div class="card-title">
      <p>${o}</p>
    </div>
    <div class="card-body">
      ${v}
    </div>
    <div class="card-footer ${y?"right":""}">
      <button type="button" class="btn primary">See apps</button>
    </div>
  `;return n&&(s=`<div class="card-inner">${s}</div><div class="card-icon-container">${C}</div>`),a.innerHTML=s,a},S={title:"Surfaces/Card",render:({...o})=>x({...o}),argTypes:{title:{control:"title"},text:{control:"text"},footerRight:{control:"boolean"},iconed:{control:"boolean"}}},e={args:{title:"CRM",text:"Manage your customers all in one place."}},t={args:{title:"Customer Support",text:"Add people to your team and control what they can access.",footerRight:!0}},r={args:{title:"Customer Support",text:"Add people to your team and control what they can access.",iconed:!0}};var c,d,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'CRM',
    text: 'Manage your customers all in one place.'
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Customer Support',
    text: 'Add people to your team and control what they can access.',
    footerRight: true
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Customer Support',
    text: 'Add people to your team and control what they can access.',
    iconed: true
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const A=["Base","RightFooter","Iconed"],b=Object.freeze(Object.defineProperty({__proto__:null,Base:e,Iconed:r,RightFooter:t,__namedExportsOrder:A,default:S},Symbol.toStringTag,{value:"Module"}));export{e as B,b as C,r as I,t as R};
