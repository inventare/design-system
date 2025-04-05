const Ve=({id:S,disabled:Fe,label:ke,helperText:D,value:w="",type:Ie="text",placeholder:E="",variant:Y="default"})=>{const e=document.createElement("div");e.className="form-control",Y==="valid"&&e.classList.add("valid"),Y==="invalid"&&e.classList.add("invalid");const T=document.createElement("label");T.innerHTML=ke,T.htmlFor=S;const a=document.createElement("input");if(a.id=S,a.type=Ie,w&&(a.value=w),E&&(a.placeholder=E),Fe&&(a.disabled=!0),e.appendChild(T),e.appendChild(a),D){const W=document.createElement("span");W.innerHTML=D,W.className="helper-text",e.appendChild(W)}return e},_e={title:"Forms/FormControl",render:({...S})=>Ve({...S}),argTypes:{id:{control:"text"},label:{control:"text"},disabled:{control:"boolean"},helperText:{control:"text"},variant:{control:{type:"select"},options:["default","valid","invalid"]}}},l={args:{label:"What is your name?",id:"input-def",disabled:!1,value:"John doe"}},r={args:{label:"What is your value?",id:"input-valid",disabled:!1,helperText:"This is a example of valid input value.",value:"valid example",variant:"valid"}},s={args:{label:"What is your value?",id:"input-invalid",disabled:!1,value:"invalid example",helperText:"This is a example of invalid input value.",variant:"invalid"}},t={args:{label:"What is your email?",id:"input-with-helper",disabled:!1,type:"email",helperText:"E-mail for support contact.",value:"example@example.com.br"}},n={args:{label:"What is your name?",id:"input-text-name",disabled:!1,value:"John doe",type:"text"}},i={args:{label:"Enter your password?",id:"input-password",disabled:!1,value:"password",type:"password"}},o={args:{label:"What is your email?",id:"input-email-email",disabled:!1,value:"example@example.com.br",type:"email"}},d={args:{label:"Select the birth date",id:"input-date",disabled:!1,type:"date"}},c={args:{label:"Select the date and time to schedule",id:"input-datetime",disabled:!1,type:"datetime-local"}},p={args:{label:"Select the detail color",id:"input-color",disabled:!1,type:"color"}},m={args:{label:"Select the attachment",id:"input-file",disabled:!1,type:"file"}},u={args:{label:"Select the month",id:"input-month",disabled:!1,type:"month"}},h={args:{label:"Select the week",id:"input-week",disabled:!1,type:"week"}},b={args:{disabled:!0,label:"Your e-mail",id:"input-disabled-email",type:"email",value:"example@example.com",helperText:"Your can't change your e-mail."}},v={args:{variant:"valid",disabled:!0,label:"Your e-mail",id:"input-disabled-valid",type:"email",value:"example@example.com",helperText:"Your can't change your e-mail."}},g={args:{variant:"invalid",disabled:!0,label:"Your e-mail",id:"input-disabled-invalid",type:"email",value:"example@example.com",helperText:"Your can't change your e-mail."}},f={args:{disabled:!1,label:"What is your name?",id:"input-placeholder",placeholder:"e.g: John Doe"}},y={args:{disabled:!1,label:"What is your name?",id:"input-placeholder-valid",variant:"valid",placeholder:"e.g: John Doe"}},x={args:{disabled:!1,label:"What is your name?",id:"input-placeholder-invalid",variant:"invalid",placeholder:"e.g: John Doe"}};var C,J,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'What is your name?',
    id: 'input-def',
    disabled: false,
    value: 'John doe'
  }
}`,...(P=(J=l.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var F,k,I;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'What is your value?',
    id: 'input-valid',
    disabled: false,
    helperText: 'This is a example of valid input value.',
    value: 'valid example',
    variant: 'valid'
  }
}`,...(I=(k=r.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var V,_,L;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'What is your value?',
    id: 'input-invalid',
    disabled: false,
    value: 'invalid example',
    helperText: 'This is a example of invalid input value.',
    variant: 'invalid'
  }
}`,...(L=(_=s.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var M,H,j;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'What is your email?',
    id: 'input-with-helper',
    disabled: false,
    type: 'email',
    helperText: 'E-mail for support contact.',
    value: 'example@example.com.br'
  }
}`,...(j=(H=t.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var O,N,z;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'What is your name?',
    id: 'input-text-name',
    disabled: false,
    value: 'John doe',
    type: 'text'
  }
}`,...(z=(N=n.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var q,A,B;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Enter your password?',
    id: 'input-password',
    disabled: false,
    value: 'password',
    type: 'password'
  }
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var G,K,Q;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'What is your email?',
    id: 'input-email-email',
    disabled: false,
    value: 'example@example.com.br',
    type: 'email'
  }
}`,...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,U,X;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Select the birth date',
    id: 'input-date',
    disabled: false,
    type: 'date'
  }
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Select the date and time to schedule',
    id: 'input-datetime',
    disabled: false,
    type: 'datetime-local'
  }
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,le,re;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Select the detail color',
    id: 'input-color',
    disabled: false,
    type: 'color'
  }
}`,...(re=(le=p.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,te,ne;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Select the attachment',
    id: 'input-file',
    disabled: false,
    type: 'file'
  }
}`,...(ne=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,oe,de;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Select the month',
    id: 'input-month',
    disabled: false,
    type: 'month'
  }
}`,...(de=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,pe,me;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Select the week',
    id: 'input-week',
    disabled: false,
    type: 'week'
  }
}`,...(me=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,he,be;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-email',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\\'t change your e-mail.'
  }
}`,...(be=(he=b.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ve,ge,fe;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    variant: 'valid',
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-valid',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\\'t change your e-mail.'
  }
}`,...(fe=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,xe,Se;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    variant: 'invalid',
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-invalid',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\\'t change your e-mail.'
  }
}`,...(Se=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Te,We,De;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder',
    placeholder: 'e.g: John Doe'
  }
}`,...(De=(We=f.parameters)==null?void 0:We.docs)==null?void 0:De.source}}};var we,Ee,Ye;y.parameters={...y.parameters,docs:{...(we=y.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-valid',
    variant: 'valid',
    placeholder: 'e.g: John Doe'
  }
}`,...(Ye=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:Ye.source}}};var Ce,Je,Pe;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-invalid',
    variant: 'invalid',
    placeholder: 'e.g: John Doe'
  }
}`,...(Pe=(Je=x.parameters)==null?void 0:Je.docs)==null?void 0:Pe.source}}};const Le=["Default","Valid","Invalid","WithHelperText","Text","Password","Email","Date","DateTimeLocal","Color","File","Month","Week","Disabled","DisabledValid","DisabledInvalid","Placeholder","PlaceholderValid","PlaceholderInvalid"],Me=Object.freeze(Object.defineProperty({__proto__:null,Color:p,Date:d,DateTimeLocal:c,Default:l,Disabled:b,DisabledInvalid:g,DisabledValid:v,Email:o,File:m,Invalid:s,Month:u,Password:i,Placeholder:f,PlaceholderInvalid:x,PlaceholderValid:y,Text:n,Valid:r,Week:h,WithHelperText:t,__namedExportsOrder:Le,default:_e},Symbol.toStringTag,{value:"Module"}));export{p as C,d as D,o as E,Me as F,s as I,u as M,i as P,n as T,r as V,h as W,c as a,m as b,l as c,t as d,b as e,v as f,g,f as h,y as i,x as j,Ve as r};
