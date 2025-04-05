import{M as P}from"./ModalManager-6x1BS2KN.js";const w=(o,q)=>{const{id:l,title:_,subtitle:R,position:k="right",size:C="sm",buttonText:j="Open"}=o,r=document.createElement("div");r.innerHTML=`
    <div class="sheet-${k} modal modal-${C} fade" id="${l}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog sheet-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title h5" id="exampleModalLabel">${_}</h1>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="icon-ui-close"></i>
            </button>
            <p class="modal-subtitle">${R}</p>
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

    <button class="btn primary" data-toggle="modal" data-target="#${l}">${j}</button>
  `;{const B=new P;r.addEventListener("click",d=>{var c;return(c=B.getInstance(d.target))==null?void 0:c.executeByClick(d)})}return r},H={title:"Overlays/Sheet",render:o=>w(o),argTypes:{}},e={args:{id:"sheet-sm",title:"Sheet",subtitle:"This is a sheet",position:"left",size:"sm",buttonText:"Open Small"}},t={args:{id:"sheet-md",title:"Sheet",subtitle:"This is a sheet",position:"left",size:"md",buttonText:"Open Medium"}},s={args:{id:"sheet-lg",title:"Sheet",subtitle:"This is a sheet",position:"left",size:"lg",buttonText:"Open Large"}},a={args:{id:"sheet-xl",title:"Sheet",subtitle:"This is a sheet",position:"left",size:"xl",buttonText:"Open Extra Large"}},i={args:{id:"sheet-left",title:"Sheet",subtitle:"This is a sheet",position:"left",buttonText:"Open Left"}},n={args:{id:"sheet-right",title:"Sheet",subtitle:"This is a sheet",position:"right",buttonText:"Open Right"}};var m,u,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'sheet-sm',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    size: 'sm',
    buttonText: 'Open Small'
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,b,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'sheet-md',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    size: 'md',
    buttonText: 'Open Medium'
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,S,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'sheet-lg',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    size: 'lg',
    buttonText: 'Open Large'
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var f,v,L;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'sheet-xl',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    size: 'xl',
    buttonText: 'Open Extra Large'
  }
}`,...(L=(v=a.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var O,y,M;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'sheet-left',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    buttonText: 'Open Left'
  }
}`,...(M=(y=i.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var z,E,$;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: 'sheet-right',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'right',
    buttonText: 'Open Right'
  }
}`,...($=(E=n.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const I=["Small","Medium","Large","ExtraLarge","Left","Right"],D=Object.freeze(Object.defineProperty({__proto__:null,ExtraLarge:a,Large:s,Left:i,Medium:t,Right:n,Small:e,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{a as E,s as L,t as M,n as R,D as S,e as a,i as b};
