import{_ as h}from"./iframe-d9dc3ea6.js";import{e as d,R as o,r as c,f as E,A as R,H as x,D as y}from"./index-e2509470.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-8c3ac41d.js";import"./index-5ecf8671.js";import"./index-356e4a49.js";var m={},u=d;m.createRoot=u.createRoot,m.hydrateRoot=u.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=c.useRef();return c.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t,r)=>{let s=await v(t,r);return new Promise(a=>{s.render(o.createElement(D,{callback:()=>a(null)},e))})},f=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async(e,t)=>{let r=n.get(e);return r||(r=m.createRoot(e,t),n.set(e,r)),r},w={code:E,a:R,...x},g=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components},a=y;return new Promise((i,p)=>{h(()=>import("./index-1532caee.js"),["./index-1532caee.js","./index-6cd396d1.js","./index-e2509470.js","./iframe-d9dc3ea6.js","./_commonjsHelpers-725317a4.js","./index-8c3ac41d.js","./index-5ecf8671.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:l})=>_(o.createElement(g,{showException:p,key:Math.random()},o.createElement(l,{components:s},o.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{f(e)}}};export{S as DocsRenderer,w as defaultComponents};
