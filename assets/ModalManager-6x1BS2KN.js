import{C as a}from"./ComponentManager-CW-XTlUv.js";import{r as o,e as i,C as h}from"./transitions-DBBZnb0O.js";class m{constructor(){this.isTransitioning=!1,this.CLASS_NAME_SHOW="show",this.element=this.createElement()}createElement(){const e=document.createElement("div");return e.className="modal-backdrop fade",e.style.display="none",e}show(){this.isTransitioning||(this.element.parentElement||document.body.appendChild(this.element),this.element.style.display="block",o(this.element),i(()=>{this.isTransitioning=!1},this.element),this.element.classList.add(this.CLASS_NAME_SHOW),this.isTransitioning=!0)}hide(){this.isTransitioning||(i(()=>{var e;this.isTransitioning=!1,this.element.style.display="none",(e=this.element.parentElement)==null||e.removeChild(this.element)},this.element),this.element.classList.remove(this.CLASS_NAME_SHOW),this.isTransitioning=!0)}}const r="show";class c{constructor(e){if(this.isTransitioning=!1,!e.id)throw new Error("modal element has not id.");this.handleBackdropClick=this.handleBackdropClick.bind(this),this.element=e,this.element.addEventListener("click",this.handleBackdropClick),this.backdrop=new m}handleBackdropClick(e){if(this.isTransitioning||!!e.target.closest(".modal-content"))return;const s=()=>{this.isTransitioning=!1,setTimeout(()=>this.element.classList.remove("modal-static"),400)};this.isTransitioning=!0,i(s,this.element),this.element.classList.add("modal-static")}handleAutoFocus(){const e=this.element.querySelector("[autofocus]");e&&e.focus()}show(){if(this.isTransitioning)return;this.element.style.display="block",this.element.removeAttribute("aria-hidden"),this.element.setAttribute("aria-modal",String(!0)),this.element.setAttribute("role","dialog"),this.element.scrollTop=0,o(this.element),i(()=>{this.isTransitioning=!1},this.element),this.element.classList.add(r),this.backdrop.show(),this.handleAutoFocus(),this.isTransitioning=!0}hide(){if(this.isTransitioning)return;i(()=>{this.element.style.display="none",this.element.setAttribute("aria-hidden",String(!0)),this.element.removeAttribute("aria-modal"),this.element.removeAttribute("role"),this.isTransitioning=!1},this.element),this.backdrop.hide(),this.isTransitioning=!0,this.element.classList.remove(r)}get isVisible(){return window.getComputedStyle(this.element).display==="block"}toggle(){return this.isVisible?this.hide():this.show()}executeByClick(e){this.toggle()}}const d='[data-dismiss="modal"]',u='[data-toggle="modal"]';class g extends a{createInstance(e){return new c(e)}getElement(e){if(!e)return null;let t=e.closest(u),s=!1;if(t||(t=e.closest(d),s=!0),!t)return null;if(s)return t.closest(".modal");const l=t.getAttribute("data-target");return l?document.querySelector(l):null}}h.register(new g);export{g as M};
