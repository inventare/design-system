const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-Cudx0P_W.js","./index-Ipq7WW0y.js","./index-B9tbb9Qs.js","./iframe-Bu9CIkDM.js","./_commonjsHelpers-Cpj98o6Y.js","./index-DY3dAHcx.js","./index-DQqPIFLp.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./iframe-Bu9CIkDM.js";import{i as h,R as o,r as i,H as E,A as R,j as D,D as f}from"./index-B9tbb9Qs.js";import{g as v}from"./_commonjsHelpers-Cpj98o6Y.js";var n={},l;function x(){if(l)return n;l=1;var e=h();return n.createRoot=e.createRoot,n.hydrateRoot=e.hydrateRoot,n}var y=x();const g=v(y);var s=new Map,w=({callback:e,children:t})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},C=async(e,t,r)=>{let a=await M(t,r);return new Promise(u=>{a.render(o.createElement(w,{callback:()=>u(null)},e))})},_=(e,t)=>{let r=s.get(e);r&&(r.unmount(),s.delete(e))},M=async(e,t)=>{let r=s.get(e);return r||(r=g.createRoot(e,t),s.set(e,r)),r},A={code:D,a:R,...E},q=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},H=class{constructor(){this.render=async(e,t,r)=>{let a={...A,...t==null?void 0:t.components},u=f;return new Promise((m,d)=>{p(async()=>{const{MDXProvider:c}=await import("./index-Cudx0P_W.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(({MDXProvider:c})=>C(o.createElement(q,{showException:d,key:Math.random()},o.createElement(c,{components:a},o.createElement(u,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{_(e)}}};export{H as D,A as d};
