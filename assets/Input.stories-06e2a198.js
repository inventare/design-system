const Ce=({id:S,disabled:ke,label:Ve,helperText:D,value:w="",type:_e="text",placeholder:E="",variant:I="default"})=>{const e=document.createElement("div");e.className="form-control",I==="valid"&&e.classList.add("valid"),I==="invalid"&&e.classList.add("invalid");const T=document.createElement("label");T.innerHTML=Ve,T.htmlFor=S;const a=document.createElement("input");if(a.id=S,a.type=_e,w&&(a.value=w),E&&(a.placeholder=E),ke&&(a.disabled=!0),e.appendChild(T),e.appendChild(a),D){const W=document.createElement("span");W.innerHTML=D,W.className="helper-text",e.appendChild(W)}return e},Le={title:"Inventare/Input",render:({...S})=>Ce({...S}),argTypes:{id:{control:"text"},label:{control:"text"},disabled:{control:"boolean"},helperText:{control:"text"},variant:{control:{type:"select"},options:["default","valid","invalid"]}}},l={args:{label:"What is your name?",id:"input-def",disabled:!1,value:"John doe"}},r={args:{label:"What is your value?",id:"input-valid",disabled:!1,helperText:"This is a example of valid input value.",value:"valid example",variant:"valid"}},s={args:{label:"What is your value?",id:"input-invalid",disabled:!1,value:"invalid example",helperText:"This is a example of invalid input value.",variant:"invalid"}},t={args:{label:"What is your email?",id:"input-with-helper",disabled:!1,type:"email",helperText:"E-mail for support contact.",value:"example@example.com.br"}},n={args:{label:"What is your name?",id:"input-text-name",disabled:!1,value:"John doe",type:"text"}},i={args:{label:"Enter your password?",id:"input-password",disabled:!1,value:"password",type:"password"}},o={args:{label:"What is your email?",id:"input-email-email",disabled:!1,value:"example@example.com.br",type:"email"}},d={args:{label:"Select the birth date",id:"input-date",disabled:!1,type:"date"}},c={args:{label:"Select the date and time to schedule",id:"input-datetime",disabled:!1,type:"datetime-local"}},p={args:{label:"Select the detail color",id:"input-color",disabled:!1,type:"color"}},u={args:{label:"Select the attachment",id:"input-file",disabled:!1,type:"file"}},m={args:{label:"Select the month",id:"input-month",disabled:!1,type:"month"}},h={args:{label:"Select the week",id:"input-week",disabled:!1,type:"week"}},b={args:{disabled:!0,label:"Your e-mail",id:"input-disabled-email",type:"email",value:"example@example.com",helperText:"Your can't change your e-mail."}},v={args:{variant:"valid",disabled:!0,label:"Your e-mail",id:"input-disabled-valid",type:"email",value:"example@example.com",helperText:"Your can't change your e-mail."}},g={args:{variant:"invalid",disabled:!0,label:"Your e-mail",id:"input-disabled-invalid",type:"email",value:"example@example.com",helperText:"Your can't change your e-mail."}},f={args:{disabled:!1,label:"What is your name?",id:"input-placeholder",placeholder:"e.g: John Doe"}},y={args:{disabled:!1,label:"What is your name?",id:"input-placeholder-valid",variant:"valid",placeholder:"e.g: John Doe"}},x={args:{disabled:!1,label:"What is your name?",id:"input-placeholder-invalid",variant:"invalid",placeholder:"e.g: John Doe"}};var Y,J,P;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'What is your name?',
    id: 'input-def',
    disabled: false,
    value: 'John doe'
  }
}`,...(P=(J=l.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var k,V,_;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'What is your value?',
    id: 'input-valid',
    disabled: false,
    helperText: 'This is a example of valid input value.',
    value: 'valid example',
    variant: 'valid'
  }
}`,...(_=(V=r.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var C,L,M;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'What is your value?',
    id: 'input-invalid',
    disabled: false,
    value: 'invalid example',
    helperText: 'This is a example of invalid input value.',
    variant: 'invalid'
  }
}`,...(M=(L=s.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var F,H,j;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(re=(le=p.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,te,ne;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Select the attachment',
    id: 'input-file',
    disabled: false,
    type: 'file'
  }
}`,...(ne=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,oe,de;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Select the month',
    id: 'input-month',
    disabled: false,
    type: 'month'
  }
}`,...(de=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,pe,ue;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Select the week',
    id: 'input-week',
    disabled: false,
    type: 'week'
  }
}`,...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,be;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(De=(We=f.parameters)==null?void 0:We.docs)==null?void 0:De.source}}};var we,Ee,Ie;y.parameters={...y.parameters,docs:{...(we=y.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-valid',
    variant: 'valid',
    placeholder: 'e.g: John Doe'
  }
}`,...(Ie=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Ye,Je,Pe;x.parameters={...x.parameters,docs:{...(Ye=x.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-invalid',
    variant: 'invalid',
    placeholder: 'e.g: John Doe'
  }
}`,...(Pe=(Je=x.parameters)==null?void 0:Je.docs)==null?void 0:Pe.source}}};const Me=["Default","Valid","Invalid","WithHelperText","Text","Password","Email","Date","DateTimeLocal","Color","File","Month","Week","Disabled","DisabledValid","DisabledInvalid","Placeholder","PlaceholderValid","PlaceholderInvalid"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Color:p,Date:d,DateTimeLocal:c,Default:l,Disabled:b,DisabledInvalid:g,DisabledValid:v,Email:o,File:u,Invalid:s,Month:m,Password:i,Placeholder:f,PlaceholderInvalid:x,PlaceholderValid:y,Text:n,Valid:r,Week:h,WithHelperText:t,__namedExportsOrder:Me,default:Le},Symbol.toStringTag,{value:"Module"}));export{p as C,d as D,o as E,u as F,Fe as I,m as M,i as P,n as T,r as V,h as W,c as a,l as b,s as c,t as d,b as e,v as f,g,f as h,y as i,x as j};
