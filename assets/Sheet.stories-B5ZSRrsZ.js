import{M as b}from"./ModalManager-6x1BS2KN.js";const p=(e,v)=>{const{id:s,title:r,subtitle:c,position:m="right"}=e,a=document.createElement("div");a.innerHTML=`
    <div class="sheet-${m} modal modal-sm fade" id="${s}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog sheet-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title h5" id="exampleModalLabel">${r}</h1>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="icon-ui-close"></i>
            </button>
            <p class="modal-subtitle">${c}</p>
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

    <button class="btn primary" data-toggle="modal" data-target="#${s}">Open</button>
  `;{const u=new b;a.addEventListener("click",o=>{var i;return(i=u.getInstance(o.target))==null?void 0:i.executeByClick(o)})}return a},g={title:"Feedback/Sheet",render:e=>p(e),argTypes:{}},t={args:{title:"Sheet",subtitle:"This is a sheet",position:"right"}};var l,n,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'right'
  }
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const h=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{f as S};
