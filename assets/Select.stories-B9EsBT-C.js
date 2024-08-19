import{C as p}from"./ComponentManager-CW-XTlUv.js";import{I as v}from"./InitializerTriggerComponent-DjtXnMDk.js";class b{get isFocused(){return this.element===document.activeElement}get isActive(){return this.element.classList.contains("active")}get value(){return this.element.getAttribute("data-value")||""}constructor(e,t,s){this.select=e,this.element=t,this.previous=s,this.previous&&(this.previous.next=this),this.next=null}blur(){this.isFocused&&this.element.blur()}focus(){this.isFocused||(this.element.focus(),this.element.scrollIntoView({behavior:"instant"}))}focusNext(){var e;(e=this.next)==null||e.focus()}focusPrevious(){var e;(e=this.previous)==null||e.focus()}}const l="expanded";class f{constructor(e){this.activeItem=null;const{element:t,selectCombobox:s,selectDropDown:i,selectDropDownInner:n}=e;this.element=t,this.comboBoxKeyUp=this.comboBoxKeyUp.bind(this),this.comboBoxClick=this.comboBoxClick.bind(this),this.documentClick=this.documentClick.bind(this),this.dropDownKeyUp=this.dropDownKeyUp.bind(this),this.dropDownClick=this.dropDownClick.bind(this),this.selectCombobox=s,this.selectCombobox.addEventListener("keyup",this.comboBoxKeyUp),this.selectCombobox.addEventListener("click",this.comboBoxClick),this.selectDropDown=i,this.selectDropDownInner=n,this.selectDropDown.addEventListener("keyup",this.dropDownKeyUp),this.selectDropDown.addEventListener("click",this.dropDownClick),this.activeItem=this.items.find(c=>c.isActive)||null}get isExpanded(){return this.element.classList.contains(l)}get items(){const e=[...this.element.querySelectorAll("button.select-item")],t=[];for(const s of e)t.push(new b(this,s,t.length>0?t[t.length-1]:null));return t}getItemByElement(e){return this.items.find(t=>t.element===e)||null}comboBoxClick(){if(this.isExpanded)return this.hide();this.show()}comboBoxKeyUp(e){e.key==="ArrowDown"&&(this.isExpanded||this.show(),this.onArrowDown()),e.key==="ArrowUp"&&(this.isExpanded||this.show(),this.onArrowUp())}onArrowDown(){const e=this.items;if(!this.activeItem&&e.length)return this.activeItem=e[0],this.activeItem.focus();if(this.activeItem&&this.activeItem.next){const t=this.activeItem.next;this.activeItem.blur(),this.activeItem.focusNext(),this.activeItem=t}}onArrowUp(){var e;if(this.activeItem&&this.activeItem.previous){const t=this.activeItem.previous;this.activeItem.blur(),this.activeItem.focusPrevious(),this.activeItem=t}else this.activeItem&&(this.activeItem.blur(),this.activeItem=null,(e=this.selectDropDown.querySelector("input[type=text]"))==null||e.focus())}dropDownKeyUp(e){e.key==="ArrowDown"&&this.onArrowDown(),e.key==="ArrowUp"&&this.onArrowUp()}dropDownClick(e){const s=e.target.closest(".select-item");if(!s)return this.hide();const i=this.getItemByElement(s);i&&this.applyValue(i),this.hide()}documentClick(e){e.target.closest(".select-container")!==this.element&&this.hide()}show(){var t,s,i;this.element.classList.add(l),document.addEventListener("click",this.documentClick),(t=this.selectDropDown.querySelector("input[type=text]"))==null||t.focus(),(s=this.selectDropDown.querySelector(".select-dropdown-inner"))==null||s.scrollTo({top:0}),this.activeItem=this.items.find(n=>n.isActive)||null,(i=this.activeItem)==null||i.element.scrollIntoView({behavior:"instant"});const e=new CustomEvent("opened",{bubbles:!0,cancelable:!0,composed:!0});this.selectDropDown.dispatchEvent(e)}hide(){this.element.classList.remove(l),document.removeEventListener("click",this.documentClick)}applyValue(e){this.activeItem=e,this.items.forEach(n=>n.element.classList.remove("active")),e.element.classList.add("active");const t=this.element.querySelector("input.default-control");if(!t)return;t.value=e.value;const s=new CustomEvent("selected",{bubbles:!0,cancelable:!0,composed:!0});this.element.dispatchEvent(s);const i=this.element.querySelector(".select-value");if(i){if(e.element.getAttribute("data-display")){i.innerHTML=e.element.getAttribute("data-display")||"";return}i.innerHTML=e.element.innerHTML}}}class m extends p{createInstance(e){return new f(e)}getElement(e){if(!e)return null;const t=e.closest(".select-container");if(!t)return null;const s=t.querySelector(".select");if(!s)return null;const i=t.querySelector(".select-dropdown");if(!i)return null;const n=i.querySelector(".select-dropdown-inner");return n?{id:t.id,element:t,selectCombobox:s,selectDropDown:i,selectDropDownInner:n}:null}initializeInstanceList(e){if(!e){this.initializeInstanceList(document.body);return}const t=[...e.querySelectorAll(".select-container")];for(const s of t)this.getInstance(s)}}v.register(new m);const w=(o,e)=>{const{items:t=10}=o,{addEvents:s,customRenderItems:i}=e,n=document.createElement("div");n.className="form-control";const c=i?i():Array.from({length:t}).map((D,a)=>`<button data-value="${a+1}" class="select-item" type="button" role="option">Item ${a+1}</button>`).join("");return n.innerHTML=`
    <div class="select-container" id="my-select">
      <input class="default-control" type="hidden" value="7" />

      <div
        class="select input"
        role="combobox"
        tabindex="0"
        aria-haspopup="true"
        aria-expanded="false"
        aria-disabled="false"
        aria-controls="select-display"
      >
        <span
          class="select-value"
          role="textbox"
          aria-readonly="true"
          id="select-display"
        >
          Item 7
        </span>
        <button
          type="button"
          class="dropdown-button"
          role="presentation"
        >
          <i class="icon-caret-down arrow" role="presentation"></i>
        </button>
      </div>

      <div class="select-dropdown">
        <div class="select-dropdown-inner">
          <button data-value="" class="select-item" type="button" role="option">No Value</button>
          ${c}
        </div>
      </div>
    </div>
  `,s&&new m().initializeInstanceList(n),n},y={title:"Forms/Select",render:o=>w(o,{addEvents:!0}),argTypes:{items:{type:"number",min:10,max:1e3,step:1}}},r={args:{items:3}};var u,d,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: 3
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const I=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:I,default:y},Symbol.toStringTag,{value:"Module"}));export{r as D,E as S};
