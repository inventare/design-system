import{a as k,j as n}from"./jsx-runtime-29545a09.js";import{c as O}from"./clsx.m-1229b3e0.js";const q=({id:i,label:j,helperText:D,validFeedback:t,invalidFeedback:o,...F})=>{const d=(()=>o||t||D)();return k("div",{className:O({"form-control":!0,invalid:!!o,valid:!o&&!!t}),children:[n("label",{htmlFor:i,children:j}),n("input",{id:i,...F}),d&&n("div",{className:"helper-text",children:d})]})},A={title:"Components/TextField",component:q,argTypes:{disabled:{control:"boolean",description:"indicate if the button is disabled"},label:{control:"text"},helperText:{control:"text"},validFeedback:{control:"text"},invalidFeedback:{control:"text"}}},e={args:{id:"name",label:"E-mail address",type:"email",placeholder:"example@example.com"}},a={args:{disabled:!0,id:"disabled-name",label:"E-mail address",type:"email",placeholder:"example@example.com"}},l={args:{id:"email-invalid",label:"E-mail address",type:"email",placeholder:"example@example.com",invalidFeedback:"The e-mail is required."}},r={args:{id:"email-valid",label:"E-mail address",type:"email",value:"example@example.com",validFeedback:"Looks good."}},s={args:{id:"username-help",label:"Username",helperText:"A username to signup.",value:"example#122"}};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: "name",
    label: "E-mail address",
    type: "email",
    placeholder: "example@example.com"
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,x,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true,
    id: "disabled-name",
    label: "E-mail address",
    type: "email",
    placeholder: "example@example.com"
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,h,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "email-invalid",
    label: "E-mail address",
    type: "email",
    placeholder: "example@example.com",
    invalidFeedback: "The e-mail is required."
  }
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var T,f,y;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: "email-valid",
    label: "E-mail address",
    type: "email",
    value: "example@example.com",
    validFeedback: "Looks good."
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var E,S,_;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: "username-help",
    label: "Username",
    helperText: "A username to signup.",
    value: "example#122"
  }
}`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const H=["Default","Disabled","Invalid","Valid","WithHelp"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:a,Invalid:l,Valid:r,WithHelp:s,__namedExportsOrder:H,default:A},Symbol.toStringTag,{value:"Module"}));export{e as D,U as T};
//# sourceMappingURL=TextField.stories-4320fc4f.js.map
