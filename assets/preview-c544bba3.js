import{_ as N}from"./iframe-4eb43fc4.js";import{s as p}from"./index-d475d2ea.js";import"../sb-preview/runtime.mjs";const{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__;var o="storybook/a11y",y=`${o}/result`,T=`${o}/request`,w=`${o}/running`,U=`${o}/error`,d=`${o}/manual`,a={RESULT:y,REQUEST:T,RUNNING:w,ERROR:U,MANUAL:d},{document:g,window:v}=p,r=f.getChannel(),n=!1,l,A=async t=>{let{manual:e}=await u(t);e||await _(t)},_=async t=>{l=t;try{let e=await u(t);if(!n){n=!0,r.emit(a.RUNNING);let i=(await N(()=>import("./axe-c259e37e.js").then(S=>S.a),["./axe-c259e37e.js","./_commonjsHelpers-de833af9.js"],import.meta.url)).default,{element:R="#storybook-root",config:s,options:E={}}=e,m=g.querySelector(R);if(!m)return;i.reset(),s&&i.configure(s);let c=await i.run(m,E),O=JSON.parse(JSON.stringify(c));l===t?r.emit(a.RESULT,O):(n=!1,_(l))}}catch(e){r.emit(a.ERROR,e)}finally{n=!1}},u=async t=>{let{parameters:e}=await v.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};r.on(a.REQUEST,A);r.on(a.MANUAL,_);
//# sourceMappingURL=preview-c544bba3.js.map
