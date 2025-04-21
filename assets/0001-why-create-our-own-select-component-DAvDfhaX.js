import{j as e,M as r}from"./index-C4Rjq4qH.js";import{useMDXComponents as i}from"./index-DnQc9R8K.js";import"./index-C9qLi84P.js";import"./iframe-C5HoHc_e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./preview-iMux_dII.js";import"./DocsRenderer-CFRXHY34-Dj_d7fci.js";function t(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Architecture Decision Records/ADR 0001: Why Create Our Own Select Component?"}),`
`,e.jsx(n.h1,{id:"adr-0001-why-create-our-own-select-component",children:"ADR 0001: Why Create Our Own Select Component?"}),`
`,e.jsxs(n.p,{children:["🗓️ 2025-03 · ✍️ ",e.jsx(n.a,{href:"https://github.com/eduardoJM/",rel:"nofollow",children:"@EduardoJM"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"We need to use custom select components to populate with paginated data fetching and, to solve this problem, we need to choose a select component or create our own."}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We need out of box support for ",e.jsx(n.a,{href:"https://htmx.org/",rel:"nofollow",children:"HTMX"}),"."]}),`
`,e.jsxs(n.li,{children:["We need to support vanilla with easy component initialization for ",e.jsx(n.code,{children:"Django"})," and ",e.jsx(n.code,{children:"Django-Admin"})," usage."]}),`
`,e.jsx(n.li,{children:"We need to create the base to support react component."}),`
`,e.jsx(n.li,{children:"The vanilla and the react version should have the same design and UX."}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsxs(n.p,{children:["We opted to create our custom component. The first created version of the component is using vanilla javascript. To out of box support for HTMX we opted to use event bubbling, like described in ",e.jsx(n.strong,{children:"ADR 0000: Why Custom Vanilla JavaScript Components?"}),"."]}),`
`,e.jsx(n.p,{children:"The reason for opted this is:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Customize the most of custom react component is hard to maintain the consistency with other library for vanilla."}),`
`,e.jsxs(n.li,{children:["For vanilla, we have a limited range of components and the most used is ",e.jsx(n.em,{children:"Select2"}),", with ",e.jsx(n.em,{children:"jQuery"}),". The usage of ",e.jsx(n.em,{children:"jQuery"})," is not intented in this library."]}),`
`,e.jsx(n.li,{children:"Creating our own, is possible to maintain it very simple until we need more complex features."}),`
`]})]})}function x(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{x as default};
