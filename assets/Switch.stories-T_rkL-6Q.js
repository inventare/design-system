const B=({id:i,label:L,checked:N,disabled:q,variant:A="primary"})=>{const l=document.createElement("div");return l.className="form-switch",l.innerHTML=`
  <input
    class="form-check-input ${A}"
    type="checkbox"
    id="${i}"
    ${N&&"checked"}
    ${q&&"disabled"}
  >
  <label class="form-check-label" for="${i}">
    ${L}
  </label>
  `,l},G={title:"Forms/Switch",render:i=>B(i),argTypes:{variant:{control:"select",options:["primary","secondary","danger","success","warning"]},checked:{control:"boolean"},disabled:{control:"boolean"}}},e={args:{id:"switch-default",label:"Default Switch"}},r={args:{id:"switch-checked",label:"Checked Switch",checked:!0}},a={args:{id:"switch-disabled",label:"Disabled Switch",disabled:!0}},s={args:{id:"switch-disabled-checked",label:"Disabled Switch",disabled:!0,checked:!0}},c={args:{id:"switch-primary",label:"Primary colors",checked:!0,variant:"primary"}},n={args:{id:"switch-secondary",label:"Secondary colors",checked:!0,variant:"secondary"}},t={args:{id:"switch-danger",label:"Danger colors",checked:!0,variant:"danger"}},o={args:{id:"switch-warning",label:"Warning colors",checked:!0,variant:"warning"}},d={args:{id:"switch-success",label:"Success colors",checked:!0,variant:"success"}};var u,h,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'switch-default',
    label: 'Default Switch'
  }
}`,...(m=(h=e.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'switch-checked',
    label: 'Checked Switch',
    checked: true
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,S,k;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'switch-disabled',
    label: 'Disabled Switch',
    disabled: true
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var y,D,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'switch-disabled-checked',
    label: 'Disabled Switch',
    disabled: true,
    checked: true
  }
}`,...(v=(D=s.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var f,C,P;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'switch-primary',
    label: 'Primary colors',
    checked: true,
    variant: 'primary'
  }
}`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var _,$,W;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'switch-secondary',
    label: 'Secondary colors',
    checked: true,
    variant: 'secondary'
  }
}`,...(W=($=n.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var x,O,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'switch-danger',
    label: 'Danger colors',
    checked: true,
    variant: 'danger'
  }
}`,...(T=(O=t.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var j,E,M;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'switch-warning',
    label: 'Warning colors',
    checked: true,
    variant: 'warning'
  }
}`,...(M=(E=o.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var z,F,H;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: 'switch-success',
    label: 'Success colors',
    checked: true,
    variant: 'success'
  }
}`,...(H=(F=d.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const I=["Default","Checked","Disabled","DisabledChecked","Primary","Secondary","Danger","Warning","Success"],J=Object.freeze(Object.defineProperty({__proto__:null,Checked:r,Danger:t,Default:e,Disabled:a,DisabledChecked:s,Primary:c,Secondary:n,Success:d,Warning:o,__namedExportsOrder:I,default:G},Symbol.toStringTag,{value:"Module"}));export{r as C,e as D,c as P,J as S,o as W,a,s as b,n as c,t as d,d as e};
