import{M as f}from"./ModalManager-6x1BS2KN.js";const v=(a,h)=>{const{id:n,title:p,subtitle:b,center:y}=a,o=document.createElement("div");o.innerHTML=`
    <div class="modal modal-sm fade" id="${n}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog ${y&&"modal-dialog-centered"} ">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title h5" id="exampleModalLabel">${p}</h1>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="icon-ui-close"></i>
            </button>
            <p class="modal-subtitle">${b}</p>
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

    <button class="btn primary" data-toggle="modal" data-target="#${n}">Open</button>
  `;{const g=new f;o.addEventListener("click",l=>{var s;return(s=g.getInstance(l.target))==null?void 0:s.executeByClick(l)})}return o},x={title:"Feedback/Modal",render:a=>v(a),argTypes:{id:{control:"text"},center:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"}}},e={args:{id:"example-modal",center:!1,title:"Add your company",subtitle:"Create your company profile in less than 5 minutes."}},t={args:{id:"centered-modal",center:!0,title:"Add your company",subtitle:"Create your company profile in less than 5 minutes."}};var r,d,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: 'example-modal',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.'
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'centered-modal',
    center: true,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const M=["Default","CenteredModal"],_=Object.freeze(Object.defineProperty({__proto__:null,CenteredModal:t,Default:e,__namedExportsOrder:M,default:x},Symbol.toStringTag,{value:"Module"}));export{e as D,_ as M};
