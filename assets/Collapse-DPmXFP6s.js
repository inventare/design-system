import{j as o}from"./jsx-runtime-BU-bgENZ.js";import{useMDXComponents as r}from"./index-bc6GlP0j.js";import{M as s,d as a,e as l}from"./index-ByK4lEZc.js";import{C as n,D as d,H as c}from"./Collapse.stories-LbpEom-_.js";import"./index-E1T66Z7w.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-nxDDhcq_.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./CollapseManager-Bej1nEDY.js";import"./ComponentManager-CW-XTlUv.js";import"./ClickTriggerComponent-q7ps3pR8.js";import"./InitializerTriggerComponent-DjtXnMDk.js";function i(t){const e={h1:"h1",h2:"h2",p:"p",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:n}),`
`,o.jsx(e.h1,{id:"collapse",children:"Collapse"}),`
`,o.jsx(e.p,{children:"The Collapse component is a utilitary for create some collapsible components, like accordion's child menus. Totally inspired by the Bootstrap collapse component, can be used for vertical and horizontal directions."}),`
`,o.jsx(e.h2,{id:"vertical-collapse",children:"Vertical Collapse"}),`
`,o.jsx(a,{of:d}),`
`,o.jsx(l,{code:`
<div data-toggle="collapse" data-target="#default-collapse" aria-expanded="true">
  Click here to toggle
</div>
<div id="default-collapse" class="collapse show">
  Content...
</div>
`,dark:!0}),`
`,o.jsx(e.h2,{id:"horizontal-collapse",children:"Horizontal Collapse"}),`
`,o.jsx(a,{of:c}),`
`,o.jsx(l,{code:`
<div data-toggle="collapse" data-target="#default-collapse" aria-expanded="true">
  Click here to toggle
</div>
<div id="default-collapse" class="collapse horizontal show">
  <div style="width: 300px">
    Content...
  </div>
</div>
`,dark:!0})]})}function w(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{w as default};
