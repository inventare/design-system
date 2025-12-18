import{j as o,M as n,S as a,a as l}from"./index-CNf0_4o_.js";import{useMDXComponents as i}from"./index-Dor1_1mu.js";import{C as r,D as c,H as d}from"./Collapse.stories-D69QcaUu.js";import"./iframe-2c7k-oFT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./CollapseManager-nVBSW0wM.js";import"./ComponentManager-CW-XTlUv.js";import"./transitions-DBBZnb0O.js";import"./InitializerTriggerComponent-DjtXnMDk.js";function s(t){const e={h1:"h1",h2:"h2",p:"p",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:r}),`
`,o.jsx(e.h1,{id:"collapse",children:"Collapse"}),`
`,o.jsx(e.p,{children:"The Collapse component is a utilitary for create some collapsible components, like accordion's child menus. Totally inspired by the Bootstrap collapse component, can be used for vertical and horizontal directions."}),`
`,o.jsx(e.h2,{id:"vertical-collapse",children:"Vertical Collapse"}),`
`,o.jsx(a,{of:c}),`
`,o.jsx(l,{code:`
<div data-toggle="collapse" data-target="#default-collapse" aria-expanded="true">
  Click here to toggle
</div>
<div id="default-collapse" class="collapse show">
  Content...
</div>
`,dark:!0}),`
`,o.jsx(e.h2,{id:"horizontal-collapse",children:"Horizontal Collapse"}),`
`,o.jsx(a,{of:d}),`
`,o.jsx(l,{code:`
<div data-toggle="collapse" data-target="#default-collapse" aria-expanded="true">
  Click here to toggle
</div>
<div id="default-collapse" class="collapse horizontal show">
  <div style="width: 300px">
    Content...
  </div>
</div>
`,dark:!0})]})}function M(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{M as default};
