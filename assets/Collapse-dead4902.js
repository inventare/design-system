import{j as o}from"./jsx-runtime-b3bb7e5a.js";import{u as i}from"./index-4d25ef3a.js";import{M as n,d as a,e as l}from"./index-f031ed67.js";import{C as r,D as d,H as c}from"./Collapse.stories-e6107413.js";import"./index-c87bde1c.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-135ad3a5.js";import"../sb-preview/runtime.js";import"./index-4ebcf599.js";import"./index-5ecf8671.js";import"./index-356e4a49.js";function s(t){const e={h1:"h1",h2:"h2",p:"p",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:r}),`
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
`,dark:!0})]})}function M(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{M as default};
