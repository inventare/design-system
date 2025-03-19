import{C as v}from"./ComponentManager-CW-XTlUv.js";import{I as b}from"./InitializerTriggerComponent-DjtXnMDk.js";class f{get isFocused(){return this.element===document.activeElement}get isActive(){return this.element.classList.contains("active")}get value(){return this.element.getAttribute("data-value")||""}constructor(e,t,s){this.select=e,this.element=t,this.previous=s,this.previous&&(this.previous.next=this),this.next=null}blur(){this.isFocused&&this.element.blur()}focus(){this.isFocused||(this.element.focus(),this.element.scrollIntoView({behavior:"instant"}))}focusNext(){var e;(e=this.next)==null||e.focus()}focusPrevious(){var e;(e=this.previous)==null||e.focus()}}const a="expanded";class w{constructor(e){this.activeItem=null;const{element:t,selectCombobox:s,selectDropDown:i,selectDropDownInner:n}=e;this.element=t,this.comboBoxKeyUp=this.comboBoxKeyUp.bind(this),this.comboBoxClick=this.comboBoxClick.bind(this),this.documentClick=this.documentClick.bind(this),this.dropDownKeyUp=this.dropDownKeyUp.bind(this),this.dropDownClick=this.dropDownClick.bind(this),this.selectCombobox=s,this.selectCombobox.addEventListener("keyup",this.comboBoxKeyUp),this.selectCombobox.addEventListener("click",this.comboBoxClick),this.selectDropDown=i,this.selectDropDownInner=n,this.selectDropDown.addEventListener("keyup",this.dropDownKeyUp),this.selectDropDown.addEventListener("click",this.dropDownClick),this.activeItem=this.items.find(c=>c.isActive)||null}get isExpanded(){return this.element.classList.contains(a)}get items(){const e=[...this.element.querySelectorAll("button.select-item")],t=[];for(const s of e)t.push(new f(this,s,t.length>0?t[t.length-1]:null));return t}getItemByElement(e){return this.items.find(t=>t.element===e)||null}comboBoxClick(){if(this.isExpanded)return this.hide();this.show()}comboBoxKeyUp(e){e.key==="ArrowDown"&&(this.isExpanded||this.show(),this.onArrowDown()),e.key==="ArrowUp"&&(this.isExpanded||this.show(),this.onArrowUp()),e.key==="Escape"&&this.isExpanded&&this.hide()}onArrowDown(){const e=this.items;if(!this.activeItem&&e.length)return this.activeItem=e[0],this.activeItem.focus();if(this.activeItem&&this.activeItem.next){const t=this.activeItem.next;this.activeItem.blur(),this.activeItem.focusNext(),this.activeItem=t}}onArrowUp(){var e;if(this.activeItem&&this.activeItem.previous){const t=this.activeItem.previous;this.activeItem.blur(),this.activeItem.focusPrevious(),this.activeItem=t}else this.activeItem&&(this.activeItem.blur(),this.activeItem=null,(e=this.selectDropDown.querySelector("input[type=text]"))==null||e.focus())}dropDownKeyUp(e){e.key==="ArrowDown"&&this.onArrowDown(),e.key==="ArrowUp"&&this.onArrowUp(),e.key==="Escape"&&this.hide()}dropDownClick(e){const s=e.target.closest(".select-item");if(!s)return this.hide();const i=this.getItemByElement(s);i&&this.applyValue(i),this.hide()}documentClick(e){e.target.closest(".select-container")!==this.element&&this.hide()}show(){var t;this.element.classList.add(a),document.addEventListener("click",this.documentClick),(t=this.selectDropDown.querySelector(".select-dropdown-inner"))==null||t.scrollTo({top:0}),setTimeout(()=>{var s;(s=this.selectDropDown.querySelector("input[type=text]"))==null||s.focus()},100);const e=new CustomEvent("opened",{bubbles:!0,cancelable:!0,composed:!0});this.selectDropDown.dispatchEvent(e)}hide(){this.element.classList.remove(a),document.removeEventListener("click",this.documentClick)}applyValue(e){this.activeItem=e,this.items.forEach(n=>n.element.classList.remove("active")),e.element.classList.add("active");const t=this.element.querySelector("input.default-control");if(!t)return;t.value=e.value;const s=new CustomEvent("selected",{bubbles:!0,cancelable:!0,composed:!0});this.element.dispatchEvent(s);const i=this.element.querySelector(".select-value");if(i){if(e.element.getAttribute("data-display")){i.innerHTML=e.element.getAttribute("data-display")||"";return}i.innerHTML=e.element.innerHTML}}}class p extends v{createInstance(e){return new w(e)}getElement(e){if(!e)return null;const t=e.closest(".select-container");if(!t)return null;const s=t.querySelector(".select");if(!s)return null;const i=t.querySelector(".select-dropdown");if(!i)return null;const n=i.querySelector(".select-dropdown-inner");return n?{id:t.id,element:t,selectCombobox:s,selectDropDown:i,selectDropDownInner:n}:null}initializeInstanceList(e){if(!e){this.initializeInstanceList(document.body);return}const t=[...e.querySelectorAll(".select-container")];for(const s of t)this.getInstance(s)}}b.register(new p);const y=(o,e)=>{const{items:t=10}=o,{addEvents:s,customRenderItems:i}=e,n=document.createElement("div");n.className="form-control";const c=i?i():Array.from({length:t}).map((x,u)=>`<button data-value="${u+1}" class="select-item" type="button" role="option">Item ${u+1}</button>`).join("");n.innerHTML=`
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
          <div class="select-dropdown-search">
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <button data-value="" class="select-item" type="button" role="option">No Value</button>
          ${c}
        </div>
      </div>
    </div>
  `,s&&new p().initializeInstanceList(n);const l=document.createElement("div");return l.style.height="300px",l.appendChild(n),l},D={title:"Forms/Select",render:o=>y(o,{addEvents:!0}),argTypes:{items:{type:"number",min:10,max:1e3,step:1}}},r={args:{items:42}};var d,h,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: 42
  }
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const I=["Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:I,default:D},Symbol.toStringTag,{value:"Module"}));export{r as D,C as S};
