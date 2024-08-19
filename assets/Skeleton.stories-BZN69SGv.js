const j=({borderRadius:r="none",width:c,height:u})=>{const e=document.createElement("div");return e.style.width=c?`${c}px`:"200px",e.style.height=u?`${u}px`:"200px",e.className="skeleton",r!=="none"&&(r==="rounded"?e.classList.add("rounded"):e.classList.add(`rounded-${r}`)),e},C={title:"Feedback/Skeleton",render:({...r})=>j({...r}),argTypes:{borderRadius:{control:{type:"select"},options:["none","rounded","medium","large","xlarge","pill","circle"]},width:{type:"range",min:10,max:1e3,step:1},height:{type:"range",min:10,max:1e3,step:1}}},s={args:{width:200,height:200}},a={args:{width:200,height:200,borderRadius:"rounded"}},d={args:{width:200,height:200,borderRadius:"medium"}},o={args:{width:200,height:200,borderRadius:"large"}},n={args:{width:200,height:200,borderRadius:"xlarge"}},t={args:{width:300,height:100,borderRadius:"pill"}},i={args:{width:200,height:200,borderRadius:"circle"}};var g,l,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 200
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,m,R;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 200,
    borderRadius: 'rounded'
  }
}`,...(R=(m=a.parameters)==null?void 0:m.docs)==null?void 0:R.source}}};var b,w,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 200,
    borderRadius: 'medium'
  }
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var x,y,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 200,
    borderRadius: 'large'
  }
}`,...(_=(y=o.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var k,L,f;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 200,
    borderRadius: 'xlarge'
  }
}`,...(f=(L=n.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var N,v,M;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    width: 300,
    height: 100,
    borderRadius: 'pill'
  }
}`,...(M=(v=t.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var O,P,$;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 200,
    borderRadius: 'circle'
  }
}`,...($=(P=i.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const E=["NoRounded","Rounded","RoundedMedium","RoundedLarge","RoundedXLarge","RoundedPill","RoundedCircle"],T=Object.freeze(Object.defineProperty({__proto__:null,NoRounded:s,Rounded:a,RoundedCircle:i,RoundedLarge:o,RoundedMedium:d,RoundedPill:t,RoundedXLarge:n,__namedExportsOrder:E,default:C},Symbol.toStringTag,{value:"Module"}));export{s as N,a as R,T as S,d as a,o as b,n as c,t as d,i as e};
