import{C as k}from"./ComponentManager-CW-XTlUv.js";import{r as y,e as o,C as A}from"./transitions-DBBZnb0O.js";class E{constructor(){this.isTransitioning=!1,this.CLASS_NAME_SHOW="show",this.element=this.createElement()}createElement(){const e=document.createElement("div");return e.className="modal-backdrop fade",e.style.display="none",e}show(){this.isTransitioning||(this.element.parentElement||document.body.appendChild(this.element),this.element.style.display="block",y(this.element),o(()=>{this.isTransitioning=!1},this.element),this.element.classList.add(this.CLASS_NAME_SHOW),this.isTransitioning=!0)}hide(){this.isTransitioning||(o(()=>{var e;this.isTransitioning=!1,this.element.style.display="none",(e=this.element.parentElement)==null||e.removeChild(this.element)},this.element),this.element.classList.remove(this.CLASS_NAME_SHOW),this.isTransitioning=!0)}}const m="show";class M{constructor(e){if(this.isTransitioning=!1,!e.id)throw new Error("modal element has not id.");this.handleBackdropClick=this.handleBackdropClick.bind(this),this.element=e,this.element.addEventListener("click",this.handleBackdropClick),this.backdrop=new E}handleBackdropClick(e){if(this.isTransitioning||!!e.target.closest(".modal-content"))return;const i=()=>{this.isTransitioning=!1,setTimeout(()=>this.element.classList.remove("modal-static"),400)};this.isTransitioning=!0,o(i,this.element),this.element.classList.add("modal-static")}handleAutoFocus(){const e=this.element.querySelector("[autofocus]");e&&e.focus()}show(){if(this.isTransitioning)return;this.element.style.display="block",this.element.removeAttribute("aria-hidden"),this.element.setAttribute("aria-modal",String(!0)),this.element.setAttribute("role","dialog"),this.element.scrollTop=0,y(this.element),o(()=>{this.isTransitioning=!1},this.element),this.element.classList.add(m),this.backdrop.show(),this.handleAutoFocus(),this.isTransitioning=!0}hide(){if(this.isTransitioning)return;o(()=>{this.element.style.display="none",this.element.setAttribute("aria-hidden",String(!0)),this.element.removeAttribute("aria-modal"),this.element.removeAttribute("role"),this.isTransitioning=!1},this.element),this.backdrop.hide(),this.isTransitioning=!0,this.element.classList.remove(m)}get isVisible(){return window.getComputedStyle(this.element).display==="block"}toggle(){return this.isVisible?this.hide():this.show()}executeByClick(e){this.toggle()}}const L='[data-dismiss="modal"]',x='[data-toggle="modal"]';class C extends k{createInstance(e){return new M(e)}getElement(e){if(!e)return null;let t=e.closest(x),i=!1;if(t||(t=e.closest(L),i=!0),!t)return null;if(i)return t.closest(".modal");const l=t.getAttribute("data-target");return l?document.querySelector(l):null}}A.register(new C);const _=(s,e)=>{const{id:t,title:i,subtitle:l,center:v}=s,{addEvents:S}=e,r=document.createElement("div");if(r.innerHTML=`
    <div class="modal modal-sm fade" id="${t}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog ${v&&"modal-dialog-centered"} ">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title h5" id="exampleModalLabel">${i}</h1>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="icon-ui-close"></i>
            </button>
            <p class="modal-subtitle">${l}</p>
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

    <button class="btn primary" data-toggle="modal" data-target="#${t}">Open</button>
  `,S){const T=new C;r.addEventListener("click",d=>{var c;return(c=T.getInstance(d.target))==null?void 0:c.executeByClick(d)})}return r},w={title:"Feedback/Modal",render:s=>_(s,{addEvents:!0}),argTypes:{id:{control:"text"},center:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"}}},n={args:{id:"example-modal",center:!1,title:"Add your company",subtitle:"Create your company profile in less than 5 minutes."}},a={args:{id:"centered-modal",center:!0,title:"Add your company",subtitle:"Create your company profile in less than 5 minutes."}};var u,h,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'example-modal',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.'
  }
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'centered-modal',
    center: true,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.'
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const O=["Default","CenteredModal"],H=Object.freeze(Object.defineProperty({__proto__:null,CenteredModal:a,Default:n,__namedExportsOrder:O,default:w},Symbol.toStringTag,{value:"Module"}));export{n as D,H as M};
