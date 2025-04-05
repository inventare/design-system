const Ke=({id:E,disabled:qe,label:Be,helperText:A,leftAdornment:C,rightAdornment:L,value:J="",type:Ge="text",placeholder:M="",variant:P="default"})=>{const a=document.createElement("div");a.className="form-control",P==="valid"&&a.classList.add("valid"),P==="invalid"&&a.classList.add("invalid");const Y=document.createElement("label");Y.innerHTML=Be,Y.htmlFor=E;const l=document.createElement("input");if(l.id=E,l.type=Ge,J&&(l.value=J),M&&(l.placeholder=M),qe&&(l.disabled=!0),a.appendChild(Y),C||L){l.classList.add("default");const e=document.createElement("label");if(e.className="input",C){const r=document.createElement("div");r.className="adornment",r.innerHTML=C,e.appendChild(r)}if(e.appendChild(l),L){const r=document.createElement("div");r.className="adornment",r.innerHTML=L,e.appendChild(r)}a.appendChild(e)}else a.appendChild(l);if(A){const e=document.createElement("span");e.innerHTML=A,e.className="helper-text",a.appendChild(e)}return a},Qe={title:"Forms/FormControl",render:({...E})=>Ke({...E}),argTypes:{id:{control:"text"},label:{control:"text"},disabled:{control:"boolean"},helperText:{control:"text"},variant:{control:{type:"select"},options:["default","valid","invalid"]}}},s={args:{label:"What is your name?",id:"input-def",disabled:!1,value:"John doe"}},t={args:{label:"What is your value?",id:"input-valid",disabled:!1,helperText:"This is a example of valid input value.",value:"valid example",variant:"valid"}},n={args:{label:"What is your value?",id:"input-invalid",disabled:!1,value:"invalid example",helperText:"This is a example of invalid input value.",variant:"invalid"}},i={args:{label:"What is your email?",id:"input-with-helper",disabled:!1,type:"email",helperText:"E-mail for support contact.",value:"example@example.com.br"}},o={args:{label:"With is the price?",id:"input-with-helper",disabled:!1,type:"number",helperText:"Monthly price.",placeholder:"290",value:"500",leftAdornment:"R$",rightAdornment:"/month"}},d={args:{label:"What is the price?",id:"input-with-helper",disabled:!1,type:"number",placeholder:"290",value:"500",leftAdornment:"R$"}},p={args:{label:"What is the price?",id:"input-with-helper",disabled:!1,type:"number",placeholder:"290",value:"500",rightAdornment:"/year"}},c={args:{label:"What is your name?",id:"input-text-name",disabled:!1,value:"John doe",type:"text"}},m={args:{label:"Enter your password?",id:"input-password",disabled:!1,value:"password",type:"password"}},u={args:{label:"What is your email?",id:"input-email-email",disabled:!1,value:"example@example.com.br",type:"email"}},h={args:{label:"Select the birth date",id:"input-date",disabled:!1,type:"date"}},b={args:{label:"Select the date and time to schedule",id:"input-datetime",disabled:!1,type:"datetime-local"}},v={args:{label:"Select the detail color",id:"input-color",disabled:!1,type:"color"}},g={args:{label:"Select the attachment",id:"input-file",disabled:!1,type:"file"}},f={args:{label:"Select the month",id:"input-month",disabled:!1,type:"month"}},y={args:{label:"Select the week",id:"input-week",disabled:!1,type:"week"}},x={args:{disabled:!0,label:"Your e-mail",id:"input-disabled-email",type:"email",value:"example@example.com",helperText:"Your can't change your e-mail."}},S={args:{variant:"valid",disabled:!0,label:"Your e-mail",id:"input-disabled-valid",type:"email",value:"example@example.com",helperText:"Your can't change your e-mail."}},T={args:{variant:"invalid",disabled:!0,label:"Your e-mail",id:"input-disabled-invalid",type:"email",value:"example@example.com",helperText:"Your can't change your e-mail."}},W={args:{disabled:!1,label:"What is your name?",id:"input-placeholder",placeholder:"e.g: John Doe"}},w={args:{disabled:!1,label:"What is your name?",id:"input-placeholder-valid",variant:"valid",placeholder:"e.g: John Doe"}},D={args:{disabled:!1,label:"What is your name?",id:"input-placeholder-invalid",variant:"invalid",placeholder:"e.g: John Doe"}};var k,F,H;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'What is your name?',
    id: 'input-def',
    disabled: false,
    value: 'John doe'
  }
}`,...(H=(F=s.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var I,R,V;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'What is your value?',
    id: 'input-valid',
    disabled: false,
    helperText: 'This is a example of valid input value.',
    value: 'valid example',
    variant: 'valid'
  }
}`,...(V=(R=t.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,N,$;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'What is your value?',
    id: 'input-invalid',
    disabled: false,
    value: 'invalid example',
    helperText: 'This is a example of invalid input value.',
    variant: 'invalid'
  }
}`,...($=(N=n.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var j,O,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'What is your email?',
    id: 'input-with-helper',
    disabled: false,
    type: 'email',
    helperText: 'E-mail for support contact.',
    value: 'example@example.com.br'
  }
}`,...(z=(O=i.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var q,B,G;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'With is the price?',
    id: 'input-with-helper',
    disabled: false,
    type: "number",
    helperText: 'Monthly price.',
    placeholder: '290',
    value: '500',
    leftAdornment: 'R$',
    rightAdornment: '/month'
  }
}`,...(G=(B=o.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var K,Q,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'What is the price?',
    id: 'input-with-helper',
    disabled: false,
    type: 'number',
    placeholder: '290',
    value: '500',
    leftAdornment: 'R$'
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'What is the price?',
    id: 'input-with-helper',
    disabled: false,
    type: 'number',
    placeholder: '290',
    value: '500',
    rightAdornment: '/year'
  }
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,re;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'What is your name?',
    id: 'input-text-name',
    disabled: false,
    value: 'John doe',
    type: 'text'
  }
}`,...(re=(le=c.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,te,ne;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Enter your password?',
    id: 'input-password',
    disabled: false,
    value: 'password',
    type: 'password'
  }
}`,...(ne=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,oe,de;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'What is your email?',
    id: 'input-email-email',
    disabled: false,
    value: 'example@example.com.br',
    type: 'email'
  }
}`,...(de=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var pe,ce,me;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: 'Select the birth date',
    id: 'input-date',
    disabled: false,
    type: 'date'
  }
}`,...(me=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,he,be;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Select the date and time to schedule',
    id: 'input-datetime',
    disabled: false,
    type: 'datetime-local'
  }
}`,...(be=(he=b.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ve,ge,fe;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'Select the detail color',
    id: 'input-color',
    disabled: false,
    type: 'color'
  }
}`,...(fe=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,xe,Se;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'Select the attachment',
    id: 'input-file',
    disabled: false,
    type: 'file'
  }
}`,...(Se=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Te,We,we;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: 'Select the month',
    id: 'input-month',
    disabled: false,
    type: 'month'
  }
}`,...(we=(We=f.parameters)==null?void 0:We.docs)==null?void 0:we.source}}};var De,Ee,Ce;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    label: 'Select the week',
    id: 'input-week',
    disabled: false,
    type: 'week'
  }
}`,...(Ce=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Le,Ye,Ae;x.parameters={...x.parameters,docs:{...(Le=x.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-email',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\\'t change your e-mail.'
  }
}`,...(Ae=(Ye=x.parameters)==null?void 0:Ye.docs)==null?void 0:Ae.source}}};var Je,Me,Pe;S.parameters={...S.parameters,docs:{...(Je=S.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    variant: 'valid',
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-valid',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\\'t change your e-mail.'
  }
}`,...(Pe=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var ke,Fe,He;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    variant: 'invalid',
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-invalid',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\\'t change your e-mail.'
  }
}`,...(He=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Ie,Re,Ve;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder',
    placeholder: 'e.g: John Doe'
  }
}`,...(Ve=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};var _e,Ne,$e;w.parameters={...w.parameters,docs:{...(_e=w.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-valid',
    variant: 'valid',
    placeholder: 'e.g: John Doe'
  }
}`,...($e=(Ne=w.parameters)==null?void 0:Ne.docs)==null?void 0:$e.source}}};var je,Oe,ze;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-invalid',
    variant: 'invalid',
    placeholder: 'e.g: John Doe'
  }
}`,...(ze=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};const Ue=["Default","Valid","Invalid","WithHelperText","WithHelperTextAdornments","LeftAdornments","RightAdornments","Text","Password","Email","Date","DateTimeLocal","Color","File","Month","Week","Disabled","DisabledValid","DisabledInvalid","Placeholder","PlaceholderValid","PlaceholderInvalid"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Color:v,Date:h,DateTimeLocal:b,Default:s,Disabled:x,DisabledInvalid:T,DisabledValid:S,Email:u,File:g,Invalid:n,LeftAdornments:d,Month:f,Password:m,Placeholder:W,PlaceholderInvalid:D,PlaceholderValid:w,RightAdornments:p,Text:c,Valid:t,Week:y,WithHelperText:i,WithHelperTextAdornments:o,__namedExportsOrder:Ue,default:Qe},Symbol.toStringTag,{value:"Module"}));export{v as C,h as D,u as E,Xe as F,n as I,d as L,f as M,m as P,p as R,c as T,t as V,y as W,b as a,g as b,s as c,i as d,x as e,S as f,T as g,W as h,w as i,D as j,o as k,Ke as r};
