import{r as m,e as l,C as g,a as b}from"./transitions-DXIdfuWm.js";class f{constructor(){this.isTransitioning=!1,this.CLASS_NAME_SHOW="show",this.element=this.createElement()}createElement(){const e=document.createElement("div");return e.className="modal-backdrop fade",e.style.display="none",e}show(){this.isTransitioning||(this.element.parentElement||document.body.appendChild(this.element),this.element.style.display="block",m(this.element),l(()=>{this.isTransitioning=!1},this.element),this.element.classList.add(this.CLASS_NAME_SHOW),this.isTransitioning=!0)}hide(){this.isTransitioning||(l(()=>{var e;this.isTransitioning=!1,this.element.style.display="none",(e=this.element.parentElement)==null||e.removeChild(this.element)},this.element),this.element.classList.remove(this.CLASS_NAME_SHOW),this.isTransitioning=!0)}}const y='[data-toggle="modal"]',v='[data-dismiss="modal"]';class u extends b{createInstance(e){return new T(e)}getElement(e){if(!e)return null;let t=e.closest(y),i=!1;if(t||(t=e.closest(v),i=!0),!t)return null;if(i)return t.closest(".modal");const s=t.getAttribute("data-target");return s?document.querySelector(s):null}}class T{constructor(e){this.isTransitioning=!1,e.id&&(this.handleBackdropClick=this.handleBackdropClick.bind(this),this.element=e,this.element.addEventListener("click",this.handleBackdropClick),this.backdrop=new f)}handleBackdropClick(e){if(this.isTransitioning||!!e.target.closest(".modal-content"))return;const i=()=>{this.isTransitioning=!1,setTimeout(()=>this.element.classList.remove("modal-static"),400)};this.isTransitioning=!0,l(i,this.element),this.element.classList.add("modal-static")}handleAutoFocus(){const e=this.element.querySelector("[autofocus]");e&&e.focus()}show(){if(this.isTransitioning)return;this.element.style.display="block",this.element.removeAttribute("aria-hidden"),this.element.setAttribute("aria-modal",String(!0)),this.element.setAttribute("role","dialog"),this.element.scrollTop=0,m(this.element),l(()=>{this.isTransitioning=!1},this.element),this.element.classList.add("show"),this.backdrop.show(),this.handleAutoFocus(),this.isTransitioning=!0}hide(){if(this.isTransitioning)return;l(()=>{this.element.style.display="none",this.element.setAttribute("aria-hidden",String(!0)),this.element.removeAttribute("aria-modal"),this.element.removeAttribute("role"),this.isTransitioning=!1},this.element),this.backdrop.hide(),this.isTransitioning=!0,this.element.classList.remove("show")}toggle(){return window.getComputedStyle(this.element).display==="block"?this.hide():this.show()}executeByClick(){this.toggle()}}g.register(new u);const C={title:"Vanilla JavaScript/Modal",render:({id:n="my-admin",center:e=!1,title:t="My modal title",subtitle:i="My modal subtitle"})=>{const s=document.createElement("div");s.innerHTML=`
      <div class="modal modal-sm fade" id="${n}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ${e&&"modal-dialog-centered"} ">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title h5" id="exampleModalLabel">${t}</h1>
              <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
                <i class="icon-ui-close"></i>
              </button>
              <p class="modal-subtitle">${i}</p>
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
    `;const h=new u;return s.addEventListener("click",p=>{var o;(o=h.getInstance(p.target))==null||o.executeByClick()}),s},argTypes:{id:{control:"text"},center:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"}}},a={args:{id:"example-modal",center:!0,title:"Add your company",subttitle:"Create your company profile in less than 5 minutes."}};var r,d,c;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: 'example-modal',
    center: true,
    title: 'Add your company',
    subttitle: 'Create your company profile in less than 5 minutes.'
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const S=["Default"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:S,default:C},Symbol.toStringTag,{value:"Module"}));export{a as D,M};
