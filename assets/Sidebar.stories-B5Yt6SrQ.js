import{C as S}from"./ComponentManager-CW-XTlUv.js";import{e as G,C as A}from"./transitions-DBBZnb0O.js";import"./InitializerTriggerComponent-DjtXnMDk.js";import{C as P,a as L}from"./CollapseManager-nVBSW0wM.js";import{r}from"./SidebarButton.renderer-DzbeV1RU.js";import{r as v}from"./SidebarLabel.renderer-11NpBqf_.js";const Z='[data-toggle="sidebar"]';class M{get isExpanded(){return!this.element.content.classList.contains("collapsed")}constructor(e){this.element=e,this.manager=new P}collapse(){[...this.element.content.querySelectorAll(L)].forEach(s=>{var a;(a=this.manager.getInstance(s))==null||a.hide()});const t=()=>{this.element.content.classList.add("collapsed-complete")};this.element.content.classList.remove("collapsed-complete"),this.element.content.classList.add("collapsed"),G(t,this.element.content)}expand(){this.element.content.classList.remove("collapsed","collapsed-complete")}toggle(){if(this.isExpanded)return this.collapse();this.expand()}executeByClick(e){console.log(e),this.toggle()}}class ${constructor(e){this.sidebar=new M({id:e.id,toggle:e,content:e})}executeByClick(e){this.sidebar.isExpanded||this.sidebar.expand()}}class I extends S{getElement(e){if(!e)return null;const t=e.closest(Z);if(!t)return null;const s=t.getAttribute("data-target");if(!s)return null;const a=document.querySelector(s);return a?{id:a.id,toggle:t,content:a}:null}createInstance(e){return new M(e)}}class T extends S{getElement(e){if(!e)return null;const t=e.closest(L);if(!t)return null;const s=t.getAttribute("data-target");if(!s)return null;const a=document.querySelector(s);return!a||!a.closest(".sidebar")?null:{id:a.id,toggle:t,content:a}}createInstance(e){const t=e.content.closest(".sidebar");return new $(t)}}A.register(new I);A.register(new T);const g=`
  <svg class="sidebar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`,q=()=>{const c=r({variant:"primary",label:`${g} <span class="hide-on-collapse">Users</span>`,withParent:!1,active:!0}),e=r({variant:"primary",label:`${g} <span class="hide-on-collapse">Products</span>`,withParent:!1}),t=r({variant:"primary",label:`${g} <span class="hide-on-collapse">Sales</span>`,dropDown:!0,expanded:!0,active:!0,withParent:!1});t.setAttribute("data-toggle","collapse"),t.setAttribute("data-target","#collapse-body");const s=r({variant:"primary",label:"Sales Summary",child:!0,active:!1,withParent:!1}),a=r({variant:"primary",label:"Sales Trends",child:!0,childPosition:"middle",active:!1,withParent:!1}),_=r({variant:"primary",label:"Item Sales",child:!0,childPosition:"middle",active:!0,withParent:!1}),k=r({variant:"primary",label:"Employee Sales",child:!0,childPosition:"end",active:!1,withParent:!1}),h=document.createElement("div");h.id="collapse-body",h.className="collapse show";const i=document.createElement("div");i.className="sidebar-childs";const B=r({variant:"primary",label:`${g} <span class="hide-on-collapse">Products</span>`,withParent:!1}),d=document.createElement("div");d.className="sidebar",d.id="sidebar-example-here";const n=document.createElement("div");n.className="sidebar-inner";const b=document.createElement("div");b.className="branding",n.appendChild(b),n.appendChild(c);const D=v({label:"E-commerce",withParent:!1});n.appendChild(D),n.appendChild(e),n.appendChild(t),i.appendChild(s),i.appendChild(a),i.appendChild(_),i.appendChild(k),h.appendChild(i),n.appendChild(h);const N=v({label:"Shops",withParent:!1});n.appendChild(N),n.appendChild(B),d.appendChild(n);const u=document.createElement("button");u.className="sidebar-toggle",u.setAttribute("data-toggle","sidebar"),u.setAttribute("data-target","#sidebar-example-here"),d.appendChild(u);const l=document.createElement("div");l.style.display="flex",l.style.flexDirection="row",l.style.alignItems="stretch",l.style.height="700px",l.appendChild(d);const p=document.createElement("div");p.style.flex="1",p.style.backgroundColor="var(--color-primary-300)",p.style.padding="var(--spacing-base)",p.innerHTML="<h1>Main Content</h1>",l.appendChild(p);const R=new P,H=new I,O=new T;return l.addEventListener("click",o=>{var C,f,y;(C=O.getInstance(o.target))==null||C.executeByClick(o),(f=R.getInstance(o.target))==null||f.executeByClick(o),(y=H.getInstance(o.target))==null||y.executeByClick(o)}),l},j={title:"Navigation/Sidebar",render:()=>q(),argTypes:{}},m={args:{}};var E,w,x;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {}
}`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const Q=["Default"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:Q,default:j},Symbol.toStringTag,{value:"Module"}));export{m as D,W as S};