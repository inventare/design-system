const B=({id:l,label:L,checked:N,disabled:q,variant:A="primary"})=>{const i=document.createElement("div");return i.className="form-check",i.innerHTML=`
  <input
    class="form-check-input ${A}"
    type="checkbox"
    id="${l}"
    ${N&&"checked"}
    ${q&&"disabled"}
  >
  <label class="form-check-label" for="${l}">
    ${L}
  </label>
  `,i},G={title:"Forms/Checkbox",render:l=>B(l),argTypes:{variant:{control:"select",options:["primary","secondary","danger","success","warning"]},checked:{control:"boolean"}}},e={args:{id:"checkbox-default",label:"Default checkbox"}},r={args:{id:"checkbox-checked",label:"Checked Checkbox",checked:!0}},a={args:{id:"checkbox-disabled",label:"Disabled Checkbox",disabled:!0}},c={args:{id:"checkbox-disabled-checked",label:"Disabled Checkbox",disabled:!0,checked:!0}},s={args:{id:"checkbox-primary",label:"Primary colors",checked:!0,variant:"primary"}},o={args:{id:"checkbox-secondary",label:"Secondary colors",checked:!0,variant:"secondary"}},n={args:{id:"checkbox-danger",label:"Danger colors",checked:!0,variant:"danger"}},d={args:{id:"checkbox-warning",label:"Warning colors",checked:!0,variant:"warning"}},t={args:{id:"checkbox-success",label:"Success colors",checked:!0,variant:"success"}};var b,u,h;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-default',
    label: 'Default checkbox'
  }
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var k,m,p;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-checked',
    label: 'Checked Checkbox',
    checked: true
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,x,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-disabled',
    label: 'Disabled Checkbox',
    disabled: true
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,D,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-disabled-checked',
    label: 'Disabled Checkbox',
    disabled: true,
    checked: true
  }
}`,...(C=(D=c.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var v,f,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-primary',
    label: 'Primary colors',
    checked: true,
    variant: 'primary'
  }
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var _,$,w;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-secondary',
    label: 'Secondary colors',
    checked: true,
    variant: 'secondary'
  }
}`,...(w=($=o.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var W,O,T;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-danger',
    label: 'Danger colors',
    checked: true,
    variant: 'danger'
  }
}`,...(T=(O=n.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var j,E,M;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-warning',
    label: 'Warning colors',
    checked: true,
    variant: 'warning'
  }
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var z,F,H;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: 'checkbox-success',
    label: 'Success colors',
    checked: true,
    variant: 'success'
  }
}`,...(H=(F=t.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const I=["Default","Checked","Disabled","DisabledChecked","Primary","Secondary","Danger","Warning","Success"],J=Object.freeze(Object.defineProperty({__proto__:null,Checked:r,Danger:n,Default:e,Disabled:a,DisabledChecked:c,Primary:s,Secondary:o,Success:t,Warning:d,__namedExportsOrder:I,default:G},Symbol.toStringTag,{value:"Module"}));export{J as C,e as D,s as P,o as S,d as W,r as a,a as b,c,n as d,t as e};
