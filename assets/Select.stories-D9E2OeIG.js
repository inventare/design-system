import{f as S}from"./index-BNzM6CSE.js";import{v as x}from"./v4-CQkTLCs1.js";const{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,{global:v}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:k}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var L="actions",R="storybook/actions",B=`${R}/action-event`,h={depth:10,clearOnStoryChange:!0,limit:50},E=(s,e)=>{let t=Object.getPrototypeOf(s);return!t||e(t)?t:E(t,e)},C=s=>!!(typeof s=="object"&&s&&E(s,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof s.persist=="function"),T=s=>{if(C(s)){let e=Object.create(s.constructor.prototype,Object.getOwnPropertyDescriptors(s));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(o.constructor.prototype)}),e}return s},U=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?x():Date.now().toString(36)+Math.random().toString(36).substring(2);function M(s,e={}){let t={...h,...e},o=function(...n){var d,p;if(e.implicit){let m=(d="__STORYBOOK_PREVIEW__"in v?v.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(m){let c=!((p=window==null?void 0:window.FEATURES)!=null&&p.disallowImplicitActionsInRenderV8),b=new k({phase:m.phase,name:s,deprecated:c});if(c)console.warn(b);else throw b}}let i=A.getChannel(),u=U(),a=5,r=n.map(T),_=n.length>1?r:r[0],O={id:u,count:0,data:{name:s,args:_},options:{...t,maxDepth:a+(t.depth||3),allowFunction:t.allowFunction||!1}};i.emit(B,O)};return o.isAction=!0,o.implicit=e.implicit,o}var P=(...s)=>{let e=h,t=s;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(e={...h,...t.pop()});let o=t[0];(t.length!==1||typeof o=="string")&&(o={},t.forEach(i=>{o[i]=i}));let n={};return Object.keys(o).forEach(i=>{n[i]=M(o[i],e)}),n};const{global:j}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:K,useEffect:V}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:f,Element:y}=j,q=/^(\S+)\s*(.*)$/,N=y!=null&&!y.prototype.matches,H=N?"msMatchesSelector":"matches",g=(s,e)=>{if(s[H](e))return!0;let t=s.parentElement;return t?g(t,e):!1},Y=(s,...e)=>{let t=s(...e);return Object.entries(t).map(([o,n])=>{let[i,u,a]=o.match(q)||[];return{eventName:u,handler:r=>{(!a||g(r.target,a))&&n(r)}}})},W=(s,...e)=>{let t=f&&f.getElementById("storybook-root");V(()=>{if(t!=null){let o=Y(s,...e);return o.forEach(({eventName:n,handler:i})=>t.addEventListener(n,i)),()=>o.forEach(({eventName:n,handler:i})=>t.removeEventListener(n,i))}},[t,s,e])},F=K({name:"withActions",parameterName:L,skipIfNoParametersOrOptions:!0,wrapper:(s,e,{parameters:t})=>(t!=null&&t.handles&&W(P,...t.handles),s(e))});class ${get isFocused(){return this.element===document.activeElement}get isActive(){return this.element.classList.contains("active")}get value(){return this.element.getAttribute("data-value")}constructor(e,t,o){this.select=e,this.element=t,this.previous=o,this.previous&&(this.previous.next=this),this.next=null}blur(){this.isFocused&&this.element.blur()}focus(){this.isFocused||(this.element.focus(),this.element.scrollIntoView({behavior:"instant"}))}focusNext(){var e;(e=this.next)==null||e.focus()}focusPrevious(){var e;(e=this.previous)==null||e.focus()}}class z{constructor(e){this.activeItem=null,this.loadMoreDebounce=null,this.element=e,this.comboBoxKeyUp=this.comboBoxKeyUp.bind(this),this.comboBoxClick=this.comboBoxClick.bind(this),this.documentClick=this.documentClick.bind(this),this.dropDownKeyUp=this.dropDownKeyUp.bind(this),this.dropDownClick=this.dropDownClick.bind(this),this.dropDownScroll=this.dropDownScroll.bind(this);const t=this.element.querySelector(".select");if(!t)throw new Error("invalid");this.selectCombobox=t,this.selectCombobox.addEventListener("keyup",this.comboBoxKeyUp),this.selectCombobox.addEventListener("click",this.comboBoxClick);const o=this.element.querySelector(".select-dropdown");if(!o)throw new Error("invalid");this.selectDropDown=o;const n=this.selectDropDown.querySelector(".select-dropdown-inner");if(!n)throw new Error("invalid");this.selectDropDownInner=n,this.selectDropDown.addEventListener("keyup",this.dropDownKeyUp),this.selectDropDown.addEventListener("click",this.dropDownClick),this.selectDropDownInner.addEventListener("scroll",this.dropDownScroll),this.activeItem=this.items.find(i=>i.isActive)||null}get isExpanded(){return this.element.classList.contains("expanded")}get items(){const e=[...this.element.querySelectorAll("button.select-item")],t=[];for(const o of e)t.push(new $(this,o,t.length>0?t[t.length-1]:null));return t}getItemByElement(e){return this.items.find(t=>t.element===e)||null}comboBoxClick(){if(this.isExpanded)return this.hide();this.show()}comboBoxKeyUp(e){e.key==="ArrowDown"&&(this.isExpanded||this.show(),this.onArrowDown()),e.key==="ArrowUp"&&(this.isExpanded||this.show(),this.onArrowUp())}onArrowDown(){const e=this.items;if(!this.activeItem&&e.length)return this.activeItem=e[0],this.activeItem.focus();if(this.activeItem&&this.activeItem.next){const t=this.activeItem.next;this.activeItem.blur(),this.activeItem.focusNext(),this.activeItem=t}}onArrowUp(){var e;if(this.activeItem&&this.activeItem.previous){const t=this.activeItem.previous;this.activeItem.blur(),this.activeItem.focusPrevious(),this.activeItem=t}else this.activeItem&&(this.activeItem.blur(),this.activeItem=null,(e=this.selectDropDown.querySelector("input[type=text]"))==null||e.focus())}dropDownScroll(e){const t=this.selectDropDownInner.scrollHeight,o=this.selectDropDownInner.clientHeight,n=this.selectDropDownInner.scrollTop;this.loadMoreDebounce&&clearTimeout(this.loadMoreDebounce),o+n+10>=t&&(this.loadMoreDebounce=setTimeout(()=>{const i=new CustomEvent("load-more",{bubbles:!0,cancelable:!0,composed:!0});this.element.dispatchEvent(i)},300))}dropDownKeyUp(e){e.key==="ArrowDown"&&this.onArrowDown(),e.key==="ArrowUp"&&this.onArrowUp()}dropDownClick(e){const o=e.target.closest(".select-item");if(!o)return this.hide();const n=this.getItemByElement(o);n&&this.applyValue(n),this.hide()}documentClick(e){e.target.closest(".select-container")!==this.element&&this.hide()}show(){var e,t,o;this.element.classList.add("expanded"),document.addEventListener("click",this.documentClick),(e=this.selectDropDown.querySelector("input[type=text]"))==null||e.focus(),(t=this.selectDropDown.querySelector(".select-dropdown-inner"))==null||t.scrollTo({top:0}),this.activeItem=this.items.find(n=>n.isActive)||null,(o=this.activeItem)==null||o.element.scrollIntoView({behavior:"instant"})}hide(){this.element.classList.remove("expanded"),document.removeEventListener("click",this.documentClick)}applyValue(e){if(!e.value)return;this.activeItem=e,this.items.forEach(n=>n.element.classList.remove("active")),e.element.classList.add("active");const t=this.element.querySelector("input.default-control");if(!t)return;t.value=e.value;const o=this.element.querySelector(".select-value");o&&(o.innerHTML=e.element.innerHTML)}}const G={title:"Vanilla JavaScript/Select",render:({})=>{const s=document.createElement("div");return s.className="form-control",s.innerHTML=`
      <div class="select-container">
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
            <button data-value="1" class="select-item" type="button">Item 1</button>
            <button data-value="2" class="select-item" type="button">Item 2</button>
            <button data-value="3" class="select-item" type="button">Item 3</button>
            <button data-value="4" class="select-item" type="button">Item 4</button>
            <button data-value="5" class="select-item" type="button">Item 5</button>
            <button data-value="6" class="select-item" type="button">Item 6</button>
            <button data-value="7" class="select-item active" type="button">Item 7</button>
            <button data-value="8" class="select-item" type="button">Item 8</button>
            <button data-value="9" class="select-item" type="button">Item 9</button>
            <button data-value="10" class="select-item" type="button">Item 10</button>
            <button data-value="11" class="select-item" type="button">Item 11</button>
            <button data-value="12" class="select-item" type="button">Item 12</button>
            <button data-value="13" class="select-item" type="button">Item 13</button>
            <button data-value="14" class="select-item" type="button">Item 14</button>
            <button data-value="15" class="select-item" type="button">Item 15</button>
          </div>
        </div>
      </div>
    `,new z(s.querySelector(".select-container")),s},args:{"load-more":S()},parameters:{actions:{handles:["load-more"]}},argTypes:{},decorators:[F]},l={args:{}};var w,I,D;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const J=["Default"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{l as D,Z as S};
