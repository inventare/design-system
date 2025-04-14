const A=({id:t,label:H,checked:L,disabled:N,variant:q="primary"})=>{const l=document.createElement("div");return l.className="form-radio",l.innerHTML=`
  <input
    class="form-radio-input ${q}"
    type="checkbox"
    id="${t}"
    ${L&&"checked"}
    ${N&&"disabled"}
  >
  <label class="form-radio-label" for="${t}">
    ${H}
  </label>
  `,l},B={title:"Forms/Radio",render:t=>A(t),argTypes:{variant:{control:"select",options:["primary","secondary","danger","success","warning"]},checked:{control:"boolean"}}},e={args:{id:"radio-default",label:"Default Radio"}},r={args:{id:"radio-checked",label:"Checked Radio",checked:!0}},a={args:{id:"radio-disabled",label:"Disabled Radio",disabled:!0}},s={args:{id:"radio-disabled-checked",label:"Disabled Radio",disabled:!0,checked:!0}},c={args:{id:"radio-primary",label:"Primary colors",checked:!0,variant:"primary"}},o={args:{id:"radio-secondary",label:"Secondary colors",checked:!0,variant:"secondary"}},d={args:{id:"radio-danger",label:"Danger colors",checked:!0,variant:"danger"}},n={args:{id:"radio-warning",label:"Warning colors",checked:!0,variant:"warning"}},i={args:{id:"radio-success",label:"Success colors",checked:!0,variant:"success"}};var u,m,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'radio-default',
    label: 'Default Radio'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'radio-checked',
    label: 'Checked Radio',
    checked: true
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,y,S;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'radio-disabled',
    label: 'Disabled Radio',
    disabled: true
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var D,v,f;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'radio-disabled-checked',
    label: 'Disabled Radio',
    disabled: true,
    checked: true
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var R,C,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'radio-primary',
    label: 'Primary colors',
    checked: true,
    variant: 'primary'
  }
}`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var _,$,w;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'radio-secondary',
    label: 'Secondary colors',
    checked: true,
    variant: 'secondary'
  }
}`,...(w=($=o.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var W,x,O;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'radio-danger',
    label: 'Danger colors',
    checked: true,
    variant: 'danger'
  }
}`,...(O=(x=d.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var T,j,E;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'radio-warning',
    label: 'Warning colors',
    checked: true,
    variant: 'warning'
  }
}`,...(E=(j=n.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var M,z,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'radio-success',
    label: 'Success colors',
    checked: true,
    variant: 'success'
  }
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const G=["Default","Checked","Disabled","DisabledChecked","Primary","Secondary","Danger","Warning","Success"],I=Object.freeze(Object.defineProperty({__proto__:null,Checked:r,Danger:d,Default:e,Disabled:a,DisabledChecked:s,Primary:c,Secondary:o,Success:i,Warning:n,__namedExportsOrder:G,default:B},Symbol.toStringTag,{value:"Module"}));export{r as C,e as D,c as P,I as R,o as S,n as W,a,s as b,d as c,i as d};
