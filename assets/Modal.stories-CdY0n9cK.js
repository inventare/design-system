import{M as u}from"./ModalManager-EgC-iV4F.js";const p={title:"Components/Overlay/Modal",render:({id:a="my-admin",center:i=!1,title:r="My modal title",subtitle:c="My modal subtitle"})=>{const e=document.createElement("div");e.innerHTML=`
      <div class="modal modal-sm fade" id="${a}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ${i&&"modal-dialog-centered"} ">
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

      <button class="btn primary" data-toggle="modal" data-target="#${a}">Open</button>
    `;const m=new u;return e.addEventListener("click",o=>{var l;return(l=m.getInstance(o.target))==null?void 0:l.executeByClick(o)}),e},argTypes:{id:{control:"text"},center:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"}}},t={args:{id:"example-modal",center:!0,title:"Add your company",subttitle:"Create your company profile in less than 5 minutes."}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'example-modal',
    center: true,
    title: 'Add your company',
    subttitle: 'Create your company profile in less than 5 minutes.'
  }
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const b=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{t as D,v as M};
