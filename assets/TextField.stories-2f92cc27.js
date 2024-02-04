import{a as I,j as i}from"./jsx-runtime-29545a09.js";import{c as N}from"./clsx.m-1229b3e0.js";const _=({id:d,label:j,helperText:k,validFeedback:o,invalidFeedback:t,...D})=>{const n=(()=>t||o||k)();return I("div",{className:N({"form-control":!0,invalid:!!t,valid:!t&&!!o}),children:[i("label",{htmlFor:d,children:j}),i("input",{id:d,...D}),n&&i("div",{className:"helper-text",children:n})]})};_.displayName="TextField";const O={title:"Components/TextField",component:_,argTypes:{disabled:{control:"boolean",description:"indicate if the TextField is disabled"},label:{control:"text",description:"determines the label of the TextField"},helperText:{control:"text",description:"determines the helper text of the TextField"},validFeedback:{control:"text",description:"determines the valid feedback text of the TextField. If this is set, the state colors of the TextField goes to success."},invalidFeedback:{control:"text",description:"determines the invalid feedback text of the TextField. If this is set, the state colors of the TextField goes to error."}}},e={args:{id:"name",label:"E-mail address",type:"email",placeholder:"example@example.com"}},a={args:{disabled:!0,id:"disabled-name",label:"E-mail address",type:"email",placeholder:"example@example.com"}},l={args:{id:"email-invalid",label:"E-mail address",type:"email",placeholder:"example@example.com",invalidFeedback:"The e-mail is required."}},r={args:{id:"email-valid",label:"E-mail address",type:"email",value:"example@example.com",validFeedback:"Looks good."}},s={args:{id:"username-help",label:"Username",helperText:"A username to signup.",value:"example#122"}};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: "name",
    label: "E-mail address",
    type: "email",
    placeholder: "example@example.com"
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var x,u,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    id: "disabled-name",
    label: "E-mail address",
    type: "email",
    placeholder: "example@example.com"
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: "email-invalid",
    label: "E-mail address",
    type: "email",
    placeholder: "example@example.com",
    invalidFeedback: "The e-mail is required."
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var T,v,F;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: "email-valid",
    label: "E-mail address",
    type: "email",
    value: "example@example.com",
    validFeedback: "Looks good."
  }
}`,...(F=(v=r.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var y,E,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "username-help",
    label: "Username",
    helperText: "A username to signup.",
    value: "example#122"
  }
}`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const V=["Default","Disabled","Invalid","Valid","WithHelp"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:a,Invalid:l,Valid:r,WithHelp:s,__namedExportsOrder:V,default:O},Symbol.toStringTag,{value:"Module"}));export{e as D,l as I,H as T,r as V,s as W,a};
//# sourceMappingURL=TextField.stories-2f92cc27.js.map
