let p;const S=new Uint8Array(16);function A(){if(!p&&(p=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!p))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(S)}const o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));function D(e,t=0){return o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]}const I=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),m={randomUUID:I};function f(e,t,r){if(m.randomUUID&&!e)return m.randomUUID();e=e||{};const n=e.random||(e.rng||A)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,D(n)}const{addons:v}=__STORYBOOK_MODULE_PREVIEW_API__,{global:l}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:w}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var U="storybook/actions",j=`${U}/action-event`,V={depth:10,clearOnStoryChange:!0,limit:50},E=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:E(r,t)},C=e=>!!(typeof e=="object"&&e&&E(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),K=e=>{if(C(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),n=r==null?void 0:r.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(n.constructor.prototype)}),t}return e},L=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?f():Date.now().toString(36)+Math.random().toString(36).substring(2);function _(e,t={}){let r={...V,...t},n=function(...i){var g,O;if(t.implicit){let y=(g="__STORYBOOK_PREVIEW__"in l?l.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(y){let d=!((O=window==null?void 0:window.FEATURES)!=null&&O.disallowImplicitActionsInRenderV8),R=new w({phase:y.phase,name:e,deprecated:d});if(d)console.warn(R);else throw R}}let c=v.getChannel(),s=L(),a=5,u=i.map(K),b=i.length>1?u:u[0],x={id:s,count:0,data:{name:e,args:b},options:{...r,maxDepth:a+(r.depth||3),allowFunction:r.allowFunction||!1}};c.emit(j,x)};return n.isAction=!0,n.implicit=t.implicit,n}var T=(e,t)=>typeof t[e]>"u"&&!(e in t),B=e=>{let{initialArgs:t,argTypes:r,id:n,parameters:{actions:i}}=e;if(!i||i.disable||!i.argTypesRegex||!r)return{};let c=new RegExp(i.argTypesRegex);return Object.entries(r).filter(([s])=>!!c.test(s)).reduce((s,[a,u])=>(T(a,t)&&(s[a]=_(a,{implicit:!0,id:n})),s),{})},M=e=>{let{initialArgs:t,argTypes:r,parameters:{actions:n}}=e;return n!=null&&n.disable||!r?{}:Object.entries(r).filter(([i,c])=>!!c.action).reduce((i,[c,s])=>(T(c,t)&&(i[c]=_(typeof s.action=="string"?s.action:c)),i),{})},Y=[M,B],h=!1,P=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!h&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in l&&typeof l.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=l.__STORYBOOK_TEST_ON_MOCK_CALL__;r((n,i)=>{let c=n.getMockName();(!/^next\/.*::/.test(c)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(s=>c.startsWith(s)))&&_(c)(i)}),h=!0}},N=[P];export{Y as argsEnhancers,N as loaders};
