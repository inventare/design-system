const L=({id:a,disabled:j,label:H,helperText:o,variant:p="default"})=>{const e=document.createElement("div");e.className="form-control",p==="valid"&&e.classList.add("valid"),p==="invalid"&&e.classList.add("invalid");const r=document.createElement("label");r.innerHTML=H,r.htmlFor=a;const i=document.createElement("input");if(i.id=a,j&&(i.disabled=!0),e.appendChild(r),e.appendChild(i),o){const d=document.createElement("span");d.innerHTML=o,d.className="helper-text",e.appendChild(d)}return e},S={title:"Inventare/Input",tags:["autodocs"],render:({...a})=>L({...a}),argTypes:{id:{control:"text"},label:{control:"text"},disabled:{control:"boolean"},helperText:{control:"text"},variant:{control:{type:"select"},options:["default","valid","invalid"]}}},t={args:{label:"Input",id:"input-def",disabled:!1}},n={args:{label:"Input",id:"input-with-helper",disabled:!1,helperText:"This is a example of object."}},l={args:{label:"Input",id:"input-invalid",disabled:!1,helperText:"This is a example of object.",variant:"invalid"}},s={args:{label:"Input",id:"input-valid",disabled:!1,helperText:"This is a example of object.",variant:"valid"}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Input',
    id: 'input-def',
    disabled: false
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,f,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Input',
    id: 'input-with-helper',
    disabled: false,
    helperText: 'This is a example of object.'
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,x,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Input',
    id: 'input-invalid',
    disabled: false,
    helperText: 'This is a example of object.',
    variant: 'invalid'
  }
}`,...(T=(x=l.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var g,I,E;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Input',
    id: 'input-valid',
    disabled: false,
    helperText: 'This is a example of object.',
    variant: 'valid'
  }
}`,...(E=(I=s.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const C=["Default","WithHelperText","Invalid","Valid"];export{t as Default,l as Invalid,s as Valid,n as WithHelperText,C as __namedExportsOrder,S as default};
