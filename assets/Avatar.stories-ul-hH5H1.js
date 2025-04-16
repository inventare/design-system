const fe=({text:T,useImageTag:S,imageUrl:f,size:xe="small",color:he="default"})=>{const y=document.createElement("div"),e=document.createElement(S&&f?"img":"div");return e.className=`avatar ${xe} ${he}`,f?S?e.src=f:e.style.backgroundImage=`url(${f})`:e.innerHTML=T,y.appendChild(e),y},Te={title:"Media/Avatar",render:T=>fe(T),argTypes:{size:{control:"select",options:["small","medium","large","xlarge"]},color:{control:"select",options:["primary","secondary","danger","warning","success","default"]}}},r={args:{text:"EO",color:"default"}},a={args:{text:"EO",color:"primary"}},s={args:{text:"EO",color:"secondary"}},o={args:{text:"EO",color:"success"}},t={args:{text:"EO",color:"warning"}},m={args:{text:"EO",color:"danger"}},c={args:{text:"",useImageTag:!0,size:"xlarge",imageUrl:"https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}},n={args:{text:"",useImageTag:!1,size:"xlarge",imageUrl:"https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}},p={args:{text:"",useImageTag:!0,size:"small",imageUrl:"https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}},g={args:{text:"",useImageTag:!0,size:"medium",imageUrl:"https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}},l={args:{text:"",useImageTag:!0,size:"large",imageUrl:"https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}},i={args:{text:"",useImageTag:!0,size:"xlarge",imageUrl:"https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}},u={args:{text:"LS",color:"primary",size:"small"}},d={args:{text:"LS",color:"primary",size:"medium"}},x={args:{text:"LS",color:"primary",size:"large"}},h={args:{text:"LS",color:"primary",size:"xlarge"}};var I,z,E;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: 'EO',
    color: 'default'
  }
}`,...(E=(z=r.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var b,L,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'EO',
    color: 'primary'
  }
}`,...(w=(L=a.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var j,O,q;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: 'EO',
    color: 'secondary'
  }
}`,...(q=(O=s.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var U,v,M;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    text: 'EO',
    color: 'success'
  }
}`,...(M=(v=o.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var _,k,A;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'EO',
    color: 'warning'
  }
}`,...(A=(k=t.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var D,P,$;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'EO',
    color: 'danger'
  }
}`,...($=(P=m.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var B,W,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: '',
    useImageTag: true,
    size: 'xlarge',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
}`,...(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var H,N,F;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    text: '',
    useImageTag: false,
    size: 'xlarge',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
}`,...(F=(N=n.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: '',
    useImageTag: true,
    size: 'small',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,V;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    text: '',
    useImageTag: true,
    size: 'medium',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
}`,...(V=(R=g.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    text: '',
    useImageTag: true,
    size: 'large',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    text: '',
    useImageTag: true,
    size: 'xlarge',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
}`,...(ae=(re=i.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,te;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    text: 'LS',
    color: 'primary',
    size: 'small'
  }
}`,...(te=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var me,ce,ne;d.parameters={...d.parameters,docs:{...(me=d.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    text: 'LS',
    color: 'primary',
    size: 'medium'
  }
}`,...(ne=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:ne.source}}};var pe,ge,le;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    text: 'LS',
    color: 'primary',
    size: 'large'
  }
}`,...(le=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:le.source}}};var ie,ue,de;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    text: 'LS',
    color: 'primary',
    size: 'xlarge'
  }
}`,...(de=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const Se=["TextDefault","TextPrimary","TextSecondary","TextSuccess","TextWarning","TextDanger","ImageTag","ImageBackground","ImageSmall","ImageMedium","ImageLarge","ImageExtraLarge","TextSmall","TextMedium","TextLarge","TextExtraLarge"],ye=Object.freeze(Object.defineProperty({__proto__:null,ImageBackground:n,ImageExtraLarge:i,ImageLarge:l,ImageMedium:g,ImageSmall:p,ImageTag:c,TextDanger:m,TextDefault:r,TextExtraLarge:h,TextLarge:x,TextMedium:d,TextPrimary:a,TextSecondary:s,TextSmall:u,TextSuccess:o,TextWarning:t,__namedExportsOrder:Se,default:Te},Symbol.toStringTag,{value:"Module"}));export{ye as A,c as I,r as T,n as a,u as b,d as c,x as d,h as e,p as f,g,l as h,i,a as j,s as k,m as l,t as m,o as n};
