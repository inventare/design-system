import{S as P}from"./SelectManager-3Sc5s_KG.js";const $=(a,g)=>{const{fitParent:n,preventCloseOnSelect:h,filterStyle:o,items:w=10}=a,{customRenderItems:i}=g,s=document.createElement("div");s.className="form-control";const x=i?i():Array.from({length:w}).map((_,c)=>`<button data-value="${c+1}" class="select-item" type="button" role="option">Item ${c+1}</button>`).join("");s.innerHTML=`
    <div class="select-container${n?" select-fixed-fit":" "}" id="my-select">
      <input class="default-control" type="hidden" value="7" />

      <div
        class="select input ${o?" select-filter-style":" "}"
        role="combobox"
        tabindex="0"
        aria-haspopup="true"
        aria-expanded="false"
        aria-disabled="false"
        aria-controls="select-display"
        ${h?'data-prevent="1"':""}
      >
        ${o?'<span class="select-label">Filter Label</span>':""}
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
          ${o?'<i class="icon-caret-right arrow" role="presentation"></i>':'<i class="icon-caret-down arrow" role="presentation"></i>'}
        </button>
      </div>

      <div class="select-dropdown${n?" select-dropdown-fixed-fit":" "}">
        <div class="select-dropdown-inner">
          ${n?`
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
            ${x}
          </div>
        </div>
      </div>
    </div>
  `,new P().initializeInstanceList(s);const l=document.createElement("div");return l.style.height="300px",l.appendChild(s),l},F={title:"Forms/Select",render:a=>$(a,{}),argTypes:{items:{type:"number",min:10,max:1e3,step:1}}},e={args:{items:42}},t={args:{items:42,fitParent:!0,preventCloseOnSelect:!0}},r={args:{items:42,fitParent:!0,preventCloseOnSelect:!0,filterStyle:!0}};var d,p,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: 42
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: 42,
    fitParent: true,
    preventCloseOnSelect: true
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,y,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: 42,
    fitParent: true,
    preventCloseOnSelect: true,
    filterStyle: true
  }
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const O=["Default","FitParent","FitParentWithFilterStyle"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:e,FitParent:t,FitParentWithFilterStyle:r,__namedExportsOrder:O,default:F},Symbol.toStringTag,{value:"Module"}));export{e as D,I as S};
