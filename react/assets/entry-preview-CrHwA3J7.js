import{R as o,r as p}from"./index-BHvmkJQX.js";import{u as d,r as E}from"./react-18-f1J37oKA.js";import"./index-gN-axBwH.js";var _=Object.defineProperty,f=(r,e)=>{for(var t in e)_(r,t,{get:e[t],enumerable:!0})};const{global:v}=__STORYBOOK_MODULE_GLOBAL__;var g={};f(g,{parameters:()=>M,render:()=>w,renderToCanvas:()=>D});var w=(r,e)=>{let{id:t,component:n}=e;if(!n)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return o.createElement(n,{...r})},{FRAMEWORK_OPTIONS:s}=v,b=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:r}=this.state,{showMain:e}=this.props;r||e()}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:e}},l=s!=null&&s.strictMode?p.StrictMode:p.Fragment;async function D({storyContext:r,unboundStoryFn:e,showMain:t,showException:n,forceRemount:h},a){var m,c;let i=o.createElement(b,{showMain:t,showException:n},o.createElement(e,{...r})),u=l?o.createElement(l,null,i):i;return h&&d(a),await E(u,a,(c=(m=r==null?void 0:r.parameters)==null?void 0:m.react)==null?void 0:c.rootOptions),()=>d(a)}var M={renderer:"react"};export{M as parameters,w as render,D as renderToCanvas};
