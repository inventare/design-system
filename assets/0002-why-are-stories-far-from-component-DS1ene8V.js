import{j as e}from"./jsx-runtime-DV1GPvWo.js";import{u as i}from"./index-Ipq7WW0y.js";import"./chunk-HLWAVYOI-BHLXg3Af.js";import{M as c}from"./index-B9tbb9Qs.js";import"./iframe-Bu9CIkDM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DY3dAHcx.js";import"./index-DQqPIFLp.js";import"./index-DrFu-skq.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Docs/Architecture Decision Records/ADR 0002: Why Are Stories Far From Component?"}),`
`,e.jsx(n.h1,{id:"adr-0002-why-are-stories-far-from-component",children:"ADR 0002: Why Are Stories Far From Component?"}),`
`,e.jsxs(n.p,{children:["🗓️ 2025-04 · ✍️ ",e.jsx(n.a,{href:"https://github.com/eduardoJM/",rel:"nofollow",children:"@EduardoJM"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"We need to think about a place to store the storybook stories."}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We have a lot of components that are only ",e.jsx(n.code,{children:"scss"})," files."]}),`
`,e.jsxs(n.li,{children:["We have a lot of components that are ",e.jsx(n.code,{children:"scss"})," and ",e.jsx(n.code,{children:"javascript"})," from ",e.jsx(n.code,{children:"vanilla"})," package."]}),`
`,e.jsxs(n.li,{children:["We have a lot of components that are ",e.jsx(n.code,{children:"tsx"})," in ",e.jsx(n.code,{children:"react"})," package."]}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsxs(n.p,{children:["We opted to create a ",e.jsx(n.code,{children:"stories"})," folder inside the ",e.jsx(n.code,{children:"apps/docs"})," to store ",e.jsx(n.code,{children:"scss"})," and ",e.jsx(n.code,{children:"vanilla"})," components and create a ",e.jsx(n.code,{children:"stories"})," folder inside the ",e.jsx(n.code,{children:"apps/docs-react"})," to store the ",e.jsx(n.code,{children:"react"})," components."]}),`
`,e.jsx(n.p,{children:"The reason for opted this is:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Maintain all ",e.jsx(n.code,{children:"vanilla"})," and ",e.jsx(n.code,{children:"scss"})," components in the same place."]}),`
`,e.jsxs(n.li,{children:["Maintain all ",e.jsx(n.code,{children:"react"})," components in the same place."]}),`
`,e.jsxs(n.li,{children:["Maintain consistency along all the ",e.jsx(n.code,{children:"scss"})," and ",e.jsx(n.code,{children:"vanilla"})," stories and documentations."]}),`
`]})]})}function f(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{f as default};
