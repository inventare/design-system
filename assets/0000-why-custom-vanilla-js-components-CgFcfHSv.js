import{j as e,M as r}from"./index-CibAdzfF.js";import{useMDXComponents as i}from"./index-Bbp3B4St.js";import"./index-ByoXbZf2.js";import"./iframe-D7BDeBQv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./preview-CQsIuN_N.js";import"./DocsRenderer-CFRXHY34-B1EI1qMh.js";function t(n){const o={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Architecture Decision Records/ADR 0000: Why Custom Vanilla JavaScript Components?"}),`
`,e.jsx(o.h1,{id:"adr-0000-why-custom-vanilla-javascript-components",children:"ADR 0000: Why Custom Vanilla JavaScript Components?"}),`
`,e.jsxs(o.p,{children:["🗓️ 2024-08 · ✍️ ",e.jsx(o.a,{href:"https://github.com/eduardoJM/",rel:"nofollow",children:"@EduardoJM"})]}),`
`,e.jsx(o.h2,{id:"context",children:"Context"}),`
`,e.jsx(o.p,{children:"We need to choose between the use of a existing component library or create our custom."}),`
`,e.jsx(o.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"We need to build dynamic javascript components, like collapse, modal, alert's."}),`
`,e.jsxs(o.li,{children:["We need out of box support for ",e.jsx(o.a,{href:"https://htmx.org/",rel:"nofollow",children:"HTMX"}),"."]}),`
`,e.jsx(o.li,{children:"We need components to support Django-Admin template rewrite."}),`
`]}),`
`,e.jsx(o.h2,{id:"decision",children:"Decision"}),`
`,e.jsx(o.p,{children:"We opted to create our Vanilla JavaScript components, in special to made the support for HTMX out of box. Is possible to add HTMX support working with swap events or using event bubbling (this will be decided in a future architecture decision record)."}),`
`,e.jsx(o.p,{children:"To use, and customize, another web framework, like the Bootstrap, we have a lot of work too, then we decided to make our own to be it better customizable and to learn on building Vanilla JavaScript solutions."}),`
`,e.jsx(o.p,{children:"Another side of this decision is to escape from using jQuery plugins, like Select2 from original Django-Admin template."})]})}function x(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{x as default};
