import{M as u}from"./Modal-Benqyofw.js";const p={title:"Vanilla JavaScript/Modal",render:({id:a="my-admin",center:s=!1,title:i="My modal title",subtitle:r="My modal subtitle"})=>{const e=document.createElement("div");e.innerHTML=`
      <div class="modal modal-sm fade" id="${a}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ${s&&"modal-dialog-centered"} ">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title h5" id="exampleModalLabel">${i}</h1>
              <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
                <i class="icon-ui-close"></i>
              </button>
              <p class="modal-subtitle">${r}</p>
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
    `;const c=new u;return e.addEventListener("click",m=>{var o;(o=c.getInstance(m.target))==null||o.executeByClick()}),e},argTypes:{id:{control:"text"},center:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"}}},t={args:{id:"example-modal",center:!0,title:"Add your company",subttitle:"Create your company profile in less than 5 minutes."}};var l,n,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'example-modal',
    center: true,
    title: 'Add your company',
    subttitle: 'Create your company profile in less than 5 minutes.'
  }
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const b=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{t as D,v as M};
