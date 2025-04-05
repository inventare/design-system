import{C as x}from"./ComponentManager-CW-XTlUv.js";import{I as D}from"./InitializerTriggerComponent-DjtXnMDk.js";class I{get isFocused(){return this.element===document.activeElement}get isActive(){return this.element.classList.contains("active")}get value(){return this.element.getAttribute("data-value")||""}constructor(e,t,s){this.select=e,this.element=t,this.previous=s,this.previous&&(this.previous.next=this),this.next=null}blur(){this.isFocused&&this.element.blur()}focus(){this.isFocused||(this.element.focus(),this.element.scrollIntoView({behavior:"instant"}))}focusNext(){var e;(e=this.next)==null||e.focus()}focusPrevious(){var e;(e=this.previous)==null||e.focus()}}const u="expanded";class g{constructor(e){this.activeItem=null;const{element:t,selectCombobox:s,selectDropDown:i,selectDropDownInner:n}=e;this.element=t,this.comboBoxKeyUp=this.comboBoxKeyUp.bind(this),this.comboBoxClick=this.comboBoxClick.bind(this),this.documentClick=this.documentClick.bind(this),this.dropDownKeyUp=this.dropDownKeyUp.bind(this),this.dropDownClick=this.dropDownClick.bind(this),this.selectCombobox=s,this.selectCombobox.addEventListener("keyup",this.comboBoxKeyUp),this.selectCombobox.addEventListener("click",this.comboBoxClick),this.selectDropDown=i,this.selectDropDownInner=n,this.selectDropDown.addEventListener("keyup",this.dropDownKeyUp),this.selectDropDown.addEventListener("click",this.dropDownClick),this.activeItem=this.items.find(o=>o.isActive)||null}get isExpanded(){return this.element.classList.contains(u)}get items(){const e=[...this.element.querySelectorAll("button.select-item")],t=[];for(const s of e)t.push(new I(this,s,t.length>0?t[t.length-1]:null));return t}getItemByElement(e){return this.items.find(t=>t.element===e)||null}comboBoxClick(){if(this.isExpanded)return this.hide();this.show()}comboBoxKeyUp(e){e.key==="ArrowDown"&&(this.isExpanded||this.show(),this.onArrowDown()),e.key==="ArrowUp"&&(this.isExpanded||this.show(),this.onArrowUp()),e.key==="Escape"&&this.isExpanded&&this.hide()}onArrowDown(){const e=this.items;if(!this.activeItem&&e.length)return this.activeItem=e[0],this.activeItem.focus();if(this.activeItem&&this.activeItem.next){const t=this.activeItem.next;this.activeItem.blur(),this.activeItem.focusNext(),this.activeItem=t}}onArrowUp(){var e;if(this.activeItem&&this.activeItem.previous){const t=this.activeItem.previous;this.activeItem.blur(),this.activeItem.focusPrevious(),this.activeItem=t}else this.activeItem&&(this.activeItem.blur(),this.activeItem=null,(e=this.selectDropDown.querySelector("input[type=text]"))==null||e.focus())}dropDownKeyUp(e){e.key==="ArrowDown"&&this.onArrowDown(),e.key==="ArrowUp"&&this.onArrowUp(),e.key==="Escape"&&this.hide()}dropDownClick(e){const t=e.target,s=!!t.closest("input"),i=!!t.closest(".close-button");if(s)return;const n=t.closest(".select-item");if(!n)return this.selectCombobox.dataset.prevent==="1"&&!i?void 0:this.hide();const o=this.getItemByElement(n);o&&this.applyValue(o),this.selectCombobox.dataset.prevent!=="1"&&this.hide()}documentClick(e){e.target.closest(".select-container")!==this.element&&this.hide()}show(){var t;this.element.classList.add(u),document.addEventListener("click",this.documentClick),(t=this.selectDropDown.querySelector(".select-dropdown-inner"))==null||t.scrollTo({top:0}),setTimeout(()=>{var s;(s=this.selectDropDown.querySelector("input[type=text]"))==null||s.focus()},100);const e=new CustomEvent("opened",{bubbles:!0,cancelable:!0,composed:!0});this.selectDropDown.dispatchEvent(e)}hide(){this.element.classList.remove(u),document.removeEventListener("click",this.documentClick)}applyValue(e){this.activeItem=e,this.items.forEach(n=>n.element.classList.remove("active")),e.element.classList.add("active");const t=this.element.querySelector("input.default-control");if(!t)return;t.value=e.value;const s=new CustomEvent("selected",{bubbles:!0,cancelable:!0,composed:!0});this.element.dispatchEvent(s);const i=this.element.querySelector(".select-value");if(i){if(e.element.getAttribute("data-display")){i.innerHTML=e.element.getAttribute("data-display")||"";return}i.innerHTML=e.element.innerHTML}}}class w extends x{createInstance(e){return new g(e)}getElement(e){if(!e)return null;const t=e.closest(".select-container");if(!t)return null;const s=t.querySelector(".select");if(!s)return null;const i=t.querySelector(".select-dropdown");if(!i)return null;const n=i.querySelector(".select-dropdown-inner");return n?{id:t.id,element:t,selectCombobox:s,selectDropDown:i,selectDropDownInner:n}:null}initializeInstanceList(e){if(!e){this.initializeInstanceList(document.body);return}const t=[...e.querySelectorAll(".select-container")];for(const s of t)this.getInstance(s)}}D.register(new w);const C=(r,e)=>{const{fitParent:t,preventCloseOnSelect:s,items:i=10}=r,{customRenderItems:n}=e,o=document.createElement("div");o.className="form-control";const y=n?n():Array.from({length:i}).map((k,d)=>`<button data-value="${d+1}" class="select-item" type="button" role="option">Item ${d+1}</button>`).join("");o.innerHTML=`
    <div class="select-container${t?" select-fixed-fit":" "}" id="my-select">
      <input class="default-control" type="hidden" value="7" />

      <div
        class="select input"
        role="combobox"
        tabindex="0"
        aria-haspopup="true"
        aria-expanded="false"
        aria-disabled="false"
        aria-controls="select-display"
        ${s?'data-prevent="1"':""}
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

      <div class="select-dropdown${t?" select-dropdown-fixed-fit":" "}">
        <div class="select-dropdown-inner">
          ${t?`
            <header>
              <button type="button" class="close-button">
                <i class="icon-caret-left"></i>
                Back
              </button>
            </header>
          `:""}
          <div class="select-dropdown-search">
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div class="select-dropdown-items">
            <button data-value="" class="select-item" type="button" role="option">No Value</button>
            ${y}
          </div>
        </div>
      </div>
    </div>
  `,new w().initializeInstanceList(o);const a=document.createElement("div");return a.style.height="300px",a.appendChild(o),a},E={title:"Forms/Select",render:r=>C(r,{}),argTypes:{items:{type:"number",min:10,max:1e3,step:1}}},c={args:{items:42}},l={args:{items:42,fitParent:!0,preventCloseOnSelect:!0}};var h,p,m;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: 42
  }
}`,...(m=(p=c.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,b,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: 42,
    fitParent: true,
    preventCloseOnSelect: true
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const S=["Default","FitParent"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:c,FitParent:l,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{c as D,B as S};
