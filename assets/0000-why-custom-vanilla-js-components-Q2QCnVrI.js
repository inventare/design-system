import{j as e}from"./jsx-runtime-BU-bgENZ.js";import{useMDXComponents as i}from"./index-bc6GlP0j.js";import"./chunk-HLWAVYOI-DgV9KKN3.js";import{M as r}from"./index-I4Xhiywr.js";import"./index-E1T66Z7w.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DkGb1UXU.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";function n(t){const o={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Architecture Decision Records/ADR 0000: Why Custom Vanilla JavaScript Components?"}),`
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
`,e.jsx(o.p,{children:"Another side of this decision is to escape from using jQuery plugins, like Select2 from original Django-Admin template."})]})}function f(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{f as default};
