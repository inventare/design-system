import{f as w}from"./index-BNzM6CSE.js";import{v as A}from"./v4-CQkTLCs1.js";import{S as D}from"./SelectManager-CUqYi_Nw.js";const{addons:j}=__STORYBOOK_MODULE_PREVIEW_API__,{global:_}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:P}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var T="actions",L="storybook/actions",M=`${L}/action-event`,d={depth:10,clearOnStoryChange:!0,limit:50},g=(e,o)=>{let t=Object.getPrototypeOf(e);return!t||o(t)?t:g(t,o)},B=e=>!!(typeof e=="object"&&e&&g(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),V=e=>{if(B(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),n=t==null?void 0:t.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(n.constructor.prototype)}),o}return e},x=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?A():Date.now().toString(36)+Math.random().toString(36).substring(2);function K(e,o={}){let t={...d,...o},n=function(...s){var p,m;if(o.implicit){let b=(p="__STORYBOOK_PREVIEW__"in _?_.__STORYBOOK_PREVIEW__:void 0)==null?void 0:p.storyRenders.find(l=>l.phase==="playing"||l.phase==="rendering");if(b){let l=!((m=window==null?void 0:window.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),y=new P({phase:b.phase,name:e,deprecated:l});if(l)console.warn(y);else throw y}}let a=j.getChannel(),u=x(),i=5,r=s.map(V),S=s.length>1?r:r[0],R={id:u,count:0,data:{name:e,args:S},options:{...t,maxDepth:i+(t.depth||3),allowFunction:t.allowFunction||!1}};a.emit(M,R)};return n.isAction=!0,n.implicit=o.implicit,n}var N=(...e)=>{let o=d,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(o={...d,...t.pop()});let n=t[0];(t.length!==1||typeof n=="string")&&(n={},t.forEach(a=>{n[a]=a}));let s={};return Object.keys(n).forEach(a=>{s[a]=K(n[a],o)}),s};const{global:Y}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:U,useEffect:W}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:O,Element:v}=Y,z=/^(\S+)\s*(.*)$/,$=v!=null&&!v.prototype.matches,k=$?"msMatchesSelector":"matches",I=(e,o)=>{if(e[k](o))return!0;let t=e.parentElement;return t?I(t,o):!1},C=(e,...o)=>{let t=e(...o);return Object.entries(t).map(([n,s])=>{let[a,u,i]=n.match(z)||[];return{eventName:u,handler:r=>{(!i||I(r.target,i))&&s(r)}}})},H=(e,...o)=>{let t=O&&O.getElementById("storybook-root");W(()=>{if(t!=null){let n=C(e,...o);return n.forEach(({eventName:s,handler:a})=>t.addEventListener(s,a)),()=>n.forEach(({eventName:s,handler:a})=>t.removeEventListener(s,a))}},[t,e,o])},F=U({name:"withActions",parameterName:T,skipIfNoParametersOrOptions:!0,wrapper:(e,o,{parameters:t})=>(t!=null&&t.handles&&H(N,...t.handles),e(o))});const G={title:"Vanilla JavaScript/Select",render:({})=>{const e=document.createElement("div");return e.className="form-control",e.innerHTML=`
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
            <button data-value="" class="select-item" type="button">No Value</button>
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
    `,new D().initializeInstanceList(e),e},args:{"load-more":w()},parameters:{actions:{handles:["load-more"]}},argTypes:{},decorators:[F]},c={args:{}};var f,E,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {}
}`,...(h=(E=c.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};const J=["Default"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:c,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{c as D,Z as S};
