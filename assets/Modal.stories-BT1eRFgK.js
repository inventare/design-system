import{M as _}from"./ModalManager-6x1BS2KN.js";const k=(o,P)=>{const{id:l,title:L,subtitle:S,center:z,size:A="md",buttonText:E="Open"}=o,s=document.createElement("div");s.innerHTML=`
    <div class="modal modal-${A} fade" id="${l}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog ${z&&"modal-dialog-centered"} ">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title h5" id="exampleModalLabel">${L}</h1>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="icon-ui-close"></i>
            </button>
            <p class="modal-subtitle">${S}</p>
          </div>
          <div class="modal-body">
            <div class="form-control">
              <label for="input-text-name" autofocus>Company name</label>
              <input id="input-text-name" type="text" />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn danger outline" data-dismiss="modal">Back</button>
            <button class="btn primary" data-dismiss="modal">Payment detail</button>
          </div>
        </div>
      </div>
    </div>

    <button class="btn primary" data-toggle="modal" data-target="#${l}">${E}</button>
  `;{const $=new _;s.addEventListener("click",i=>{var d;return(d=$.getInstance(i.target))==null?void 0:d.executeByClick(i)})}return s},j={title:"Overlays/Modal",render:o=>k(o),argTypes:{id:{control:"text"},center:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"}}},e={args:{id:"modal-small",center:!1,title:"Add your company",subtitle:"Create your company profile in less than 5 minutes.",size:"sm",buttonText:"Open Small"}},t={args:{id:"modal-medium",center:!1,title:"Add your company",subtitle:"Create your company profile in less than 5 minutes.",size:"md",buttonText:"Open Medium"}},a={args:{id:"modal-large",center:!1,title:"Add your company",subtitle:"Create your company profile in less than 5 minutes.",size:"lg",buttonText:"Open Large"}},n={args:{id:"modal-extra-large",center:!1,title:"Add your company",subtitle:"Create your company profile in less than 5 minutes.",size:"xl",buttonText:"Open Extra Large"}},r={args:{id:"modal-centered",center:!0,title:"Add your company",subtitle:"Create your company profile in less than 5 minutes.",buttonText:"Open Centered Modal"}};var m,c,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'modal-small',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    size: 'sm',
    buttonText: 'Open Small'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,y,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'modal-medium',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    size: 'md',
    buttonText: 'Open Medium'
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'modal-large',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    size: 'lg',
    buttonText: 'Open Large'
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,v,M;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'modal-extra-large',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    size: 'xl',
    buttonText: 'Open Extra Large'
  }
}`,...(M=(v=n.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var h,O,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'modal-centered',
    center: true,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    buttonText: 'Open Centered Modal'
  }
}`,...(T=(O=r.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const B=["Small","Medium","Large","ExtraLarge","Centered"],H=Object.freeze(Object.defineProperty({__proto__:null,Centered:r,ExtraLarge:n,Large:a,Medium:t,Small:e,__namedExportsOrder:B,default:j},Symbol.toStringTag,{value:"Module"}));export{r as C,n as E,a as L,H as M,e as S,t as a};
