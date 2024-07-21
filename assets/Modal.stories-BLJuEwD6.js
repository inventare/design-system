const u="transitionend";function y(s){if(!s)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(s);const i=Number.parseFloat(t),n=Number.parseFloat(e);return!i&&!n?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*1e3)}function T(s){s.dispatchEvent(new Event(u))}function l(s,t,e=!0){if(!e){s();return}const n=y(t)+5;let r=!1;const d=({target:c})=>{c===t&&(r=!0,t.removeEventListener(u,d),s())};t.addEventListener(u,d),setTimeout(()=>{r||T(t)},n)}function g(s){s.offsetHeight}class v{constructor(){this.isTransitioning=!1,this.CLASS_NAME_SHOW="show",this.element=this.createElement()}createElement(){const t=document.createElement("div");return t.className="modal-backdrop fade",t.style.display="none",t}show(){this.isTransitioning||(this.element.parentElement||document.body.appendChild(this.element),this.element.style.display="block",g(this.element),l(()=>{this.isTransitioning=!1},this.element),this.element.classList.add(this.CLASS_NAME_SHOW),this.isTransitioning=!0)}hide(){this.isTransitioning||(l(()=>{var t;this.isTransitioning=!1,this.element.style.display="none",(t=this.element.parentElement)==null||t.removeChild(this.element)},this.element),this.element.classList.remove(this.CLASS_NAME_SHOW),this.isTransitioning=!0)}}class S{constructor(){this.instances={}}isInitialized(t){return!!this.instances[t.id]}getInstance(t){const e=this.getElement(t);if(!e)return null;if(this.instances[e.id])return this.instances[e.id];const i=this.createInstance(e);return this.instances[e.id]=i,i}}const a=class a{static register(t){const e=a.registered,i=Array.from(new Set([...e,t]));a.registered=i}static onClick(t){for(const e of a.registered){const i=e.getInstance(t.target);i&&i.executeByClick()}}};a.registered=[];let m=a;const L='[data-toggle="modal"]',E='[data-dismiss="modal"]';class b extends S{createInstance(t){return new C(t)}getElement(t){if(!t)return null;let e=t.closest(L),i=!1;if(e||(e=t.closest(E),i=!0),!e)return null;if(i)return e.closest(".modal");const n=e.getAttribute("data-target");return n?document.querySelector(n):null}}class C{constructor(t){this.isTransitioning=!1,t.id&&(this.handleBackdropClick=this.handleBackdropClick.bind(this),this.element=t,this.element.addEventListener("click",this.handleBackdropClick),this.backdrop=new v)}handleBackdropClick(t){if(this.isTransitioning||!!t.target.closest(".modal-content"))return;const i=()=>{this.isTransitioning=!1,setTimeout(()=>this.element.classList.remove("modal-static"),400)};this.isTransitioning=!0,l(i,this.element),this.element.classList.add("modal-static")}handleAutoFocus(){const t=this.element.querySelector("[autofocus]");t&&t.focus()}show(){if(this.isTransitioning)return;this.element.style.display="block",this.element.removeAttribute("aria-hidden"),this.element.setAttribute("aria-modal",String(!0)),this.element.setAttribute("role","dialog"),this.element.scrollTop=0,g(this.element),l(()=>{this.isTransitioning=!1},this.element),this.element.classList.add("show"),this.backdrop.show(),this.handleAutoFocus(),this.isTransitioning=!0}hide(){if(this.isTransitioning)return;l(()=>{this.element.style.display="none",this.element.setAttribute("aria-hidden",String(!0)),this.element.removeAttribute("aria-modal"),this.element.removeAttribute("role"),this.isTransitioning=!1},this.element),this.backdrop.hide(),this.isTransitioning=!0,this.element.classList.remove("show")}toggle(){return window.getComputedStyle(this.element).display==="block"?this.hide():this.show()}executeByClick(){this.toggle()}}m.register(new b);const M={title:"Vanilla JavaScript/Modal",render:({id:s="my-admin",center:t=!1,title:e="My modal title",subtitle:i="My modal subtitle"})=>{const n=document.createElement("div");n.innerHTML=`
      <div class="modal modal-sm fade" id="${s}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ${t&&"modal-dialog-centered"} ">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title h5" id="exampleModalLabel">${e}</h1>
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

      <button class="btn primary" data-toggle="modal" data-target="#${s}">Open</button>
    `;const r=new b;return n.addEventListener("click",d=>{var c;(c=r.getInstance(d.target))==null||c.executeByClick()}),n},argTypes:{id:{control:"text"},center:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"}}},o={args:{id:"example-modal",center:!0,title:"Add your company",subttitle:"Create your company profile in less than 5 minutes."}};var h,p,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'example-modal',
    center: true,
    title: 'Add your company',
    subttitle: 'Create your company profile in less than 5 minutes.'
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const k=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:k,default:M},Symbol.toStringTag,{value:"Module"}));export{o as D,A as M};
