import"./ModalManager-6x1BS2KN.js";import"./CollapseManager-nVBSW0wM.js";import"./SidebarManager-CzxXZlRJ.js";import"./SelectManager-3Sc5s_KG.js";import{C as g}from"./ComponentManager-CW-XTlUv.js";import{r as h,e as l,C as w}from"./transitions-DBBZnb0O.js";const a="show";class f{constructor(e){this.isTransitioning=!1;const t=e.querySelector(".dropdown-menu"),n=e.querySelector(".dropdown-toggle");if(!t||!n)throw new Error(".dropdown-menu and .dropdown-toggle should be encapsuled by .dropdown");this.element=t,this.triggerElement=n,this.element.addEventListener("click",this.handleDropdownClick)}get isVisible(){return window.getComputedStyle(this.element).display==="block"}handleAutoFocus(){const e=this.element.querySelector("[autofocus]");e&&e.focus()}handleDropdownClick(e){this.isTransitioning}show(){if(this.isTransitioning)return;this.triggerElement.getBoundingClientRect(),this.element.style.display="block",this.element.removeAttribute("aria-hidden"),h(this.element),l(()=>{this.isTransitioning=!1},this.element),this.element.classList.add(a),this.handleAutoFocus(),this.isTransitioning=!0}hide(){if(this.isTransitioning)return;l(()=>{this.element.style.display="none",this.element.setAttribute("aria-hidden",String(!0)),this.isTransitioning=!1},this.element),this.isTransitioning=!0,this.element.classList.remove(a)}toggle(){return this.isVisible?this.hide():this.show()}executeByClick(e){this.toggle()}}const y='[data-dismiss="dropdown"]',T='[data-toggle="dropdown"]';class p extends g{createInstance(e){return new f(e)}getElement(e){if(!e)return null;let t=e.closest(T);return t||(t=e.closest(y)),t?t.closest(".dropdown"):null}}w.register(new p);const b=(o,e)=>{const{buttonText:t="Open"}=o,n=document.createElement("div");n.innerHTML=`
    <div class="dropdown">
      <button
        class="btn primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        ${t}
      </button>
      <ul class="dropdown-menu primary">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

    <div>
    <p>Hi this is a paragraph</p>
    </div>
  `;{const m=new p;n.addEventListener("click",i=>{var r;return(r=m.getInstance(i.target))==null?void 0:r.executeByClick(i)})}return n},S={title:"Overlays/Dropdown",render:o=>b(o),argTypes:{}},s={args:{buttonText:"Open Menu"}};var d,c,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    buttonText: 'Open Menu'
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const D=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:D,default:S},Symbol.toStringTag,{value:"Module"}));export{k as D};
