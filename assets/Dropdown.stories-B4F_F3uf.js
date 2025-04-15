import"./ModalManager-6x1BS2KN.js";import"./CollapseManager-nVBSW0wM.js";import"./SidebarManager-CzxXZlRJ.js";import"./SelectManager-3Sc5s_KG.js";import{C as A}from"./ComponentManager-CW-XTlUv.js";import{r as v,e as u,C as _}from"./transitions-DBBZnb0O.js";const g="show";class R{constructor(e){this.isTransitioning=!1;const t=e.querySelector(".dropdown-menu"),l=e.querySelector(".dropdown-toggle");if(!t||!l)throw new Error(".dropdown-menu and .dropdown-toggle should be encapsuled by .dropdown");this.documentClick=this.documentClick.bind(this),this.element=t,this.triggerElement=l,this.element.addEventListener("click",this.handleDropdownClick)}get isVisible(){return window.getComputedStyle(this.element).display==="block"}handleAutoFocus(){const e=this.element.querySelector("[autofocus]");e&&e.focus()}handleDropdownClick(e){this.isTransitioning}documentClick(e){e.target.closest(".dropdown-menu")||this.hide()}show(){if(this.isTransitioning)return;this.triggerElement.getBoundingClientRect(),this.element.style.display="block",this.element.removeAttribute("aria-hidden"),v(this.element),u(()=>{this.isTransitioning=!1,document.addEventListener("click",this.documentClick)},this.element),this.element.classList.add(g),this.handleAutoFocus(),this.isTransitioning=!0}hide(){if(this.isTransitioning)return;document.removeEventListener("click",this.documentClick),u(()=>{this.element.style.display="none",this.element.setAttribute("aria-hidden",String(!0)),this.isTransitioning=!1},this.element),this.isTransitioning=!0,this.element.classList.remove(g)}toggle(){return this.isVisible?this.hide():this.show()}executeByClick(e){this.toggle()}}const M='[data-dismiss="dropdown"]',I='[data-toggle="dropdown"]';class E extends A{createInstance(e){return new R(e)}getElement(e){if(!e)return null;let t=e.closest(I);return t||(t=e.closest(M)),t?t.closest(".dropdown"):null}}_.register(new E);const N=(r,e)=>{const{align:t="left",buttonText:l="Open",containerAlign:O="flex-start",hideContent:j}=r,n=document.createElement("div"),k={left:"dropdown-menu-start",center:"dropdown-menu-center",right:"dropdown-menu-end"}[t];n.innerHTML=`
    <div class="dropdown">
      <button
        class="btn primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >${l}</button>
      <ul class="dropdown-menu ${k} primary">
        <li><a class="dropdown-item">Action</a></li>
        <li><a class="dropdown-item">Another action</a></li>
        <li><a class="dropdown-item">Something else here</a></li>
      </ul>
    </div>
  `;{const L=new E;n.addEventListener("click",c=>{var d;return(d=L.getInstance(c.target))==null?void 0:d.executeByClick(c)})}return n.style.display="flex",n.style.justifyContent=O,n.style.minHeight="200px",n},P={title:"Overlays/Dropdown",render:r=>N(r),argTypes:{}},o={args:{buttonText:"Open Dropdown"}},s={args:{buttonText:"Left",align:"left",hideContent:!0}},i={args:{buttonText:"Center",align:"center",hideContent:!0,containerAlign:"center"}},a={args:{buttonText:"Right",align:"right",hideContent:!0,containerAlign:"flex-end"}};var m,p,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    buttonText: 'Open Dropdown'
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,w,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    buttonText: 'Left',
    align: 'left',
    hideContent: true
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var b,T,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    buttonText: 'Center',
    align: 'center',
    hideContent: true,
    containerAlign: 'center'
  }
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var x,S,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    buttonText: 'Right',
    align: 'right',
    hideContent: true,
    containerAlign: 'flex-end'
  }
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const W=["Default","Left","Center","Right"],$=Object.freeze(Object.defineProperty({__proto__:null,Center:i,Default:o,Left:s,Right:a,__namedExportsOrder:W,default:P},Symbol.toStringTag,{value:"Module"}));export{i as C,$ as D,s as L,a as R,o as a};
