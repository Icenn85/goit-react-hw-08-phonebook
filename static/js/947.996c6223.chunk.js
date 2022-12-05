"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{1947:function(e,t,n){n.d(t,{Z:function(){return ee}});var o=n(4942),r=n(2982),i=n(3366),a=n(7462),l=n(2791),u=n(4419),s=n(2466),d=n(885),c=n(6189),p=n(8182),f=n(4164),m=n(6457);function v(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t.defaultView||window}var h=n(5721),b=n(184),y=["onChange","maxRows","minRows","style","value"];function g(e,t){return parseInt(e[t],10)||0}var w={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function Z(e){return void 0===e||null===e||0===Object.keys(e).length}var x=l.forwardRef((function(e,t){var n=e.onChange,o=e.maxRows,r=e.minRows,u=void 0===r?1:r,s=e.style,c=e.value,p=(0,i.Z)(e,y),x=l.useRef(null!=c).current,S=l.useRef(null),C=(0,m.Z)(t,S),R=l.useRef(null),k=l.useRef(0),z=l.useState({}),A=(0,d.Z)(z,2),B=A[0],I=A[1],P=l.useCallback((function(){var t=S.current,n=v(t).getComputedStyle(t);if("0px"===n.width)return{};var r=R.current;r.style.width=n.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");var i=n["box-sizing"],a=g(n,"padding-bottom")+g(n,"padding-top"),l=g(n,"border-bottom-width")+g(n,"border-top-width"),s=r.scrollHeight;r.value="x";var d=r.scrollHeight,c=s;return u&&(c=Math.max(Number(u)*d,c)),o&&(c=Math.min(Number(o)*d,c)),{outerHeightStyle:(c=Math.max(c,d))+("border-box"===i?a+l:0),overflow:Math.abs(c-s)<=1}}),[o,u,e.placeholder]),M=function(e,t){var n=t.outerHeightStyle,o=t.overflow;return k.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==o)?(k.current+=1,{overflow:o,outerHeightStyle:n}):e},F=l.useCallback((function(){var e=P();Z(e)||I((function(t){return M(t,e)}))}),[P]);l.useEffect((function(){var e,t=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var l=function(){e.apply(o,i)};clearTimeout(t),t=setTimeout(l,n)}return o.clear=function(){clearTimeout(t)},o}((function(){k.current=0,S.current&&function(){var e=P();Z(e)||(0,f.flushSync)((function(){I((function(t){return M(t,e)}))}))}()})),n=v(S.current);return n.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(S.current),function(){t.clear(),n.removeEventListener("resize",t),e&&e.disconnect()}})),(0,h.Z)((function(){F()})),l.useEffect((function(){k.current=0}),[c]);return(0,b.jsxs)(l.Fragment,{children:[(0,b.jsx)("textarea",(0,a.Z)({value:c,onChange:function(e){k.current=0,x||F(),n&&n(e)},ref:C,rows:u,style:(0,a.Z)({height:B.outerHeightStyle,overflow:B.overflow?"hidden":null},s)},p)),(0,b.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:R,tabIndex:-1,style:(0,a.Z)({},w,s,{padding:0})})]})})),S=x;var C=function(e){return"string"===typeof e};var R=l.createContext(void 0);var k=n(6863),z=n(5873),A=n(9853),B=n(7933),I=h.Z,P=n(2554);function M(e){var t=e.styles,n=e.defaultTheme,o=void 0===n?{}:n,r="function"===typeof t?function(e){return t(void 0===(n=e)||null===n||0===Object.keys(n).length?o:e);var n}:t;return(0,b.jsx)(P.xB,{styles:r})}var F=n(4205);var E=function(e){return(0,b.jsx)(M,(0,a.Z)({},e,{defaultTheme:F.Z}))};function W(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}var j=n(5878),T=n(1217);function L(e){return(0,T.Z)("MuiInputBase",e)}var N=(0,j.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),O=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],H=function(e,t){var n=e.ownerState;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t["color".concat((0,A.Z)(n.color))],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},U=function(e,t){var n=e.ownerState;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},D=(0,k.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:H})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},t.typography.body1,(0,o.Z)({color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(N.disabled),{color:(t.vars||t).palette.text.disabled,cursor:"default"}),n.multiline&&(0,a.Z)({padding:"4px 0 5px"},"small"===n.size&&{paddingTop:1}),n.fullWidth&&{width:"100%"})})),K=(0,k.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:U})((function(e){var t,n=e.theme,r=e.ownerState,i="light"===n.palette.mode,l=(0,a.Z)({color:"currentColor"},n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5},{transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})}),u={opacity:"0 !important"},s=n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5};return(0,a.Z)((t={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},(0,o.Z)(t,"label[data-shrink=false] + .".concat(N.formControl," &"),{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":s,"&:focus::-moz-placeholder":s,"&:focus:-ms-input-placeholder":s,"&:focus::-ms-input-placeholder":s}),(0,o.Z)(t,"&.".concat(N.disabled),{opacity:1,WebkitTextFillColor:(n.vars||n).palette.text.disabled}),(0,o.Z)(t,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),t),"small"===r.size&&{paddingTop:1},r.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===r.type&&{MozAppearance:"textfield"})})),V=(0,b.jsx)(E,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),X=l.forwardRef((function(e,t){var n,o=(0,z.Z)({props:e,name:"MuiInputBase"}),r=o["aria-describedby"],s=o.autoComplete,f=o.autoFocus,m=o.className,v=o.components,h=void 0===v?{}:v,y=o.componentsProps,g=void 0===y?{}:y,w=o.defaultValue,Z=o.disabled,x=o.disableInjectingGlobalStyles,k=o.endAdornment,P=o.fullWidth,M=void 0!==P&&P,F=o.id,E=o.inputComponent,j=void 0===E?"input":E,T=o.inputProps,N=void 0===T?{}:T,H=o.inputRef,U=o.maxRows,X=o.minRows,_=o.multiline,q=void 0!==_&&_,G=o.name,J=o.onBlur,Q=o.onChange,Y=o.onClick,$=o.onFocus,ee=o.onKeyDown,te=o.onKeyUp,ne=o.placeholder,oe=o.readOnly,re=o.renderSuffix,ie=o.rows,ae=o.slotProps,le=void 0===ae?{}:ae,ue=o.slots,se=void 0===ue?{}:ue,de=o.startAdornment,ce=o.type,pe=void 0===ce?"text":ce,fe=o.value,me=(0,i.Z)(o,O),ve=null!=N.value?N.value:fe,he=l.useRef(null!=ve).current,be=l.useRef(),ye=l.useCallback((function(e){0}),[]),ge=(0,B.Z)(be,H,N.ref,ye),we=l.useState(!1),Ze=(0,d.Z)(we,2),xe=Ze[0],Se=Ze[1],Ce=l.useContext(R);var Re=function(e){var t=e.props,n=e.states,o=e.muiFormControl;return n.reduce((function(e,n){return e[n]=t[n],o&&"undefined"===typeof t[n]&&(e[n]=o[n]),e}),{})}({props:o,muiFormControl:Ce,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Re.focused=Ce?Ce.focused:xe,l.useEffect((function(){!Ce&&Z&&xe&&(Se(!1),J&&J())}),[Ce,Z,xe,J]);var ke=Ce&&Ce.onFilled,ze=Ce&&Ce.onEmpty,Ae=l.useCallback((function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(W(e.value)&&""!==e.value||t&&W(e.defaultValue)&&""!==e.defaultValue)}(e)?ze&&ze():ke&&ke()}),[ke,ze]);I((function(){he&&Ae({value:ve})}),[ve,Ae,he]);l.useEffect((function(){Ae(be.current)}),[]);var Be=j,Ie=N;q&&"input"===Be&&(Ie=ie?(0,a.Z)({type:void 0,minRows:ie,maxRows:ie},Ie):(0,a.Z)({type:void 0,maxRows:U,minRows:X},Ie),Be=S);l.useEffect((function(){Ce&&Ce.setAdornedStart(Boolean(de))}),[Ce,de]);var Pe=(0,a.Z)({},o,{color:Re.color||"primary",disabled:Re.disabled,endAdornment:k,error:Re.error,focused:Re.focused,formControl:Ce,fullWidth:M,hiddenLabel:Re.hiddenLabel,multiline:q,size:Re.size,startAdornment:de,type:pe}),Me=function(e){var t=e.classes,n=e.color,o=e.disabled,r=e.error,i=e.endAdornment,a=e.focused,l=e.formControl,s=e.fullWidth,d=e.hiddenLabel,c=e.multiline,p=e.readOnly,f=e.size,m=e.startAdornment,v=e.type,h={root:["root","color".concat((0,A.Z)(n)),o&&"disabled",r&&"error",s&&"fullWidth",a&&"focused",l&&"formControl","small"===f&&"sizeSmall",c&&"multiline",m&&"adornedStart",i&&"adornedEnd",d&&"hiddenLabel",p&&"readOnly"],input:["input",o&&"disabled","search"===v&&"inputTypeSearch",c&&"inputMultiline","small"===f&&"inputSizeSmall",d&&"inputHiddenLabel",m&&"inputAdornedStart",i&&"inputAdornedEnd",p&&"readOnly"]};return(0,u.Z)(h,L,t)}(Pe),Fe=se.root||h.Root||D,Ee=le.root||g.root||{},We=se.input||h.Input||K;return Ie=(0,a.Z)({},Ie,null!=(n=le.input)?n:g.input),(0,b.jsxs)(l.Fragment,{children:[!x&&V,(0,b.jsxs)(Fe,(0,a.Z)({},Ee,!C(Fe)&&{ownerState:(0,a.Z)({},Pe,Ee.ownerState)},{ref:t,onClick:function(e){be.current&&e.currentTarget===e.target&&be.current.focus(),Y&&Y(e)}},me,{className:(0,p.Z)(Me.root,Ee.className,m),children:[de,(0,b.jsx)(R.Provider,{value:null,children:(0,b.jsx)(We,(0,a.Z)({ownerState:Pe,"aria-invalid":Re.error,"aria-describedby":r,autoComplete:s,autoFocus:f,defaultValue:w,disabled:Re.disabled,id:F,onAnimationStart:function(e){Ae("mui-auto-fill-cancel"===e.animationName?be.current:{value:"x"})},name:G,placeholder:ne,readOnly:oe,required:Re.required,rows:ie,value:ve,onKeyDown:ee,onKeyUp:te,type:pe},Ie,!C(We)&&{as:Be,ownerState:(0,a.Z)({},Pe,Ie.ownerState)},{ref:ge,className:(0,p.Z)(Me.input,Ie.className),onBlur:function(e){J&&J(e),N.onBlur&&N.onBlur(e),Ce&&Ce.onBlur?Ce.onBlur(e):Se(!1)},onChange:function(e){if(!he){var t=e.target||be.current;if(null==t)throw new Error((0,c.Z)(1));Ae({value:t.value})}for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];N.onChange&&N.onChange.apply(N,[e].concat(o)),Q&&Q.apply(void 0,[e].concat(o))},onFocus:function(e){Re.disabled?e.stopPropagation():($&&$(e),N.onFocus&&N.onFocus(e),Ce&&Ce.onFocus?Ce.onFocus(e):Se(!0))}}))}),k,re?re((0,a.Z)({},Re,{startAdornment:de})):null]}))]})})),_=X;function q(e){return(0,T.Z)("MuiInput",e)}var G=(0,a.Z)({},N,(0,j.Z)("MuiInput",["root","underline","input"])),J=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],Q=(0,k.ZP)(D,{shouldForwardProp:function(e){return(0,k.FO)(e)||"classes"===e},name:"MuiInput",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[].concat((0,r.Z)(H(e,t)),[!n.disableUnderline&&t.underline])}})((function(e){var t,n=e.theme,r=e.ownerState,i="light"===n.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return n.vars&&(i="rgba(".concat(n.vars.palette.common.onBackgroundChannel," / ").concat(n.vars.opacity.inputUnderline,")")),(0,a.Z)({position:"relative"},r.formControl&&{"label + &":{marginTop:16}},!r.disableUnderline&&(t={"&:after":{borderBottom:"2px solid ".concat((n.vars||n).palette[r.color].main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"}},(0,o.Z)(t,"&.".concat(G.focused,":after"),{transform:"scaleX(1) translateX(0)"}),(0,o.Z)(t,"&.".concat(G.error,":after"),{borderBottomColor:(n.vars||n).palette.error.main,transform:"scaleX(1)"}),(0,o.Z)(t,"&:before",{borderBottom:"1px solid ".concat(i),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"}),(0,o.Z)(t,"&:hover:not(.".concat(G.disabled,"):before"),{borderBottom:"2px solid ".concat((n.vars||n).palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(i)}}),(0,o.Z)(t,"&.".concat(G.disabled,":before"),{borderBottomStyle:"dotted"}),t))})),Y=(0,k.ZP)(K,{name:"MuiInput",slot:"Input",overridesResolver:U})({}),$=l.forwardRef((function(e,t){var n,o,r,l,d=(0,z.Z)({props:e,name:"MuiInput"}),c=d.disableUnderline,p=d.components,f=void 0===p?{}:p,m=d.componentsProps,v=d.fullWidth,h=void 0!==v&&v,y=d.inputComponent,g=void 0===y?"input":y,w=d.multiline,Z=void 0!==w&&w,x=d.slotProps,S=d.slots,C=void 0===S?{}:S,R=d.type,k=void 0===R?"text":R,A=(0,i.Z)(d,J),B=function(e){var t=e.classes,n={root:["root",!e.disableUnderline&&"underline"],input:["input"]},o=(0,u.Z)(n,q,t);return(0,a.Z)({},t,o)}(d),I={root:{ownerState:{disableUnderline:c}}},P=(null!=x?x:m)?(0,s.Z)(null!=x?x:m,I):I,M=null!=(n=null!=(o=C.root)?o:f.Root)?n:Q,F=null!=(r=null!=(l=C.input)?l:f.Input)?r:Y;return(0,b.jsx)(_,(0,a.Z)({slots:{root:M,input:F},slotProps:P,fullWidth:h,inputComponent:g,multiline:Z,ref:t,type:k},A,{classes:B}))}));$.muiName="Input";var ee=$}}]);
//# sourceMappingURL=947.996c6223.chunk.js.map