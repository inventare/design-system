const u=({variant:n="primary",label:r="Button",disabled:a=!1,dropDown:s=!1,expanded:i=!1,child:l=!1,childPosition:d="start",active:o=!1,withParent:c=!0})=>{const e=document.createElement("button");if(e.type="button",e.innerHTML=r,a&&(e.disabled=!0),e.setAttribute("aria-expanded",String(i)),e.className=["btn btn-sidebar",`${n}`,`${s?"dropdown":""}`,`${l?`child ${d}`:""}`,`${o?"active":""}`].join(" ").trim(),c){const t=document.createElement("div");return t.style.backgroundColor="#222",t.style.width="300px",t.style.padding="16px",t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="stretch",t.appendChild(e),t}return e};export{u as r};
