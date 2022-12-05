"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[810],{8810:function(t,n,e){e.r(n),e.d(n,{default:function(){return ct}});var r=e(2791),a=e(9434),o=e(885),i="NOT_FOUND";var c=function(t,n){return t===n};function u(t,n){var e="object"===typeof n?n:{equalityCheck:n},r=e.equalityCheck,a=void 0===r?c:r,o=e.maxSize,u=void 0===o?1:o,s=e.resultEqualityCheck,l=function(t){return function(n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!t(n[a],e[a]))return!1;return!0}}(a),p=1===u?function(t){var n;return{get:function(e){return n&&t(n.key,e)?n.value:i},put:function(t,e){n={key:t,value:e}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(t,n){var e=[];function r(t){var r=e.findIndex((function(e){return n(t,e.key)}));if(r>-1){var a=e[r];return r>0&&(e.splice(r,1),e.unshift(a)),a.value}return i}return{get:r,put:function(n,a){r(n)===i&&(e.unshift({key:n,value:a}),e.length>t&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(u,l);function f(){var n=p.get(arguments);if(n===i){if(n=t.apply(null,arguments),s){var e=p.getEntries(),r=e.find((function(t){return s(t.value,n)}));r&&(n=r.value)}p.put(arguments,n)}return n}return f.clearCache=function(){return p.clear()},f}function s(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function l(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o,i=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,p=l.memoizeOptions,f=void 0===p?e:p,m=Array.isArray(f)?f:[f],d=s(r),h=t.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(m)),v=t((function(){for(var t=[],n=d.length,e=0;e<n;e++)t.push(d[e].apply(null,arguments));return o=h.apply(null,t)}));return Object.assign(v,{resultFunc:u,memoizedResultFunc:h,dependencies:d,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return a}var p=l(u),f=function(t){return t.contacts.items},m=function(t){return t.contacts.isLoading},d=function(t){return t.contacts.error},h=function(t){return t.filter},v=p([f,h],(function(t,n){return t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))})),g=e(208),y="AddContactForm_form__JaAdA",_="AddContactForm_label__XseY1",x="AddContactForm_input__wYAJT",b="AddContactForm_btn__I4Dox",Z=e(1947),j=e(1528),C=e(184),N=function(){var t=(0,r.useState)(""),n=(0,o.Z)(t,2),e=n[0],i=n[1],c=(0,r.useState)(""),u=(0,o.Z)(c,2),s=u[0],l=u[1],p=(0,a.v9)(f),m=(0,a.I0)(),d=function(t){var n=t.target,e=n.name,r=n.value;switch(e){case"name":i(r);break;case"number":l(r);break;default:return}},h=function(){i(""),l("")};return(0,C.jsxs)("form",{className:y,onSubmit:function(t){t.preventDefault(),p.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contact")):(m((0,g.uK)({name:e,number:s})),h())},children:[(0,C.jsx)("label",{className:_,children:"Name"}),(0,C.jsx)(Z.Z,{variant:"contained",className:x,value:e,onChange:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,C.jsx)("label",{className:_,children:"Number"}),(0,C.jsx)(Z.Z,{variant:"contained",className:x,value:s,onChange:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,C.jsx)(j.Z,{variant:"contained",type:"submit",className:b,children:"Add contact"})]})},w="SearchFilter_filter__title__ulfw8",A="SearchFilter_filter__input__wq1VC",k=e(6895),F=function(){var t=(0,a.v9)(h),n=(0,a.I0)();return(0,C.jsxs)("div",{children:[(0,C.jsx)("h3",{className:w,children:"Find contacts by name"}),(0,C.jsx)(Z.Z,{variant:"contained",placeholder:"Search",type:"text",name:"filter",value:t,onChange:function(t){n((0,k.k)(t.currentTarget.value))},className:A})]})},S="ContactList_contacts__list__hSN0M",B={contacts__item:"ContactItem_contacts__item__0p8Ju",contacts__text:"ContactItem_contacts__text__jN4rs",btn:"ContactItem_btn__1h5dG"};function P(t){var n=t.id,e=t.name,r=t.number,o=(0,a.I0)();return(0,C.jsxs)("li",{className:B.contacts__item,children:[(0,C.jsxs)("p",{className:B.contacts__text,children:[e,":"]}),(0,C.jsx)("p",{className:B.contact__text,children:r}),(0,C.jsx)(j.Z,{variant:"contained",type:"button",className:B.btn,onClick:function(){return o((0,g.GK)(n))},children:"Delete"})]},n)}var M=function(){var t=(0,a.v9)(m),n=(0,a.v9)(d),e=(0,a.v9)(v);return(0,C.jsxs)(C.Fragment,{children:[t&&!n&&(0,C.jsx)("p",{children:"Loading contacts..."}),n&&(0,C.jsx)("p",{children:n}),(0,C.jsx)("ul",{className:S,children:e.map((function(t){var n=t.id,e=t.name,r=t.number;return(0,C.jsx)(P,{id:n,name:e,number:r})}))})]})},I=e(7462),T=e(3366),W=e(8182),z=e(3842),E=e(104),L=e(2982),R=e(2466),O=e(114),q=["sx"];function D(t){var n,e=t.sx,r=function(t){var n={systemProps:{},otherProps:{}};return Object.keys(t).forEach((function(e){O.Gc[e]?n.systemProps[e]=t[e]:n.otherProps[e]=t[e]})),n}((0,T.Z)(t,q)),a=r.systemProps,o=r.otherProps;return n=Array.isArray(e)?[a].concat((0,L.Z)(e)):"function"===typeof e?function(){var t=e.apply(void 0,arguments);return(0,R.P)(t)?(0,I.Z)({},a,t):a}:(0,I.Z)({},a,e),(0,I.Z)({},o,{sx:n})}var J=e(886),G=["className","component"];var K=e(5902),Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.defaultTheme,e=t.defaultClassName,a=void 0===e?"MuiBox-root":e,o=t.generateClassName,i=t.styleFunctionSx,c=void 0===i?E.Z:i,u=(0,z.ZP)("div",{shouldForwardProp:function(t){return"theme"!==t&&"sx"!==t&&"as"!==t}})(c),s=r.forwardRef((function(t,e){var r=(0,J.Z)(n),i=D(t),c=i.className,s=i.component,l=void 0===s?"div":s,p=(0,T.Z)(i,G);return(0,C.jsx)(u,(0,I.Z)({as:l,ref:e,className:(0,W.Z)(c,o?o(a):a),theme:r},p))}));return s}({defaultTheme:(0,e(4360).Z)(),defaultClassName:"MuiBox-root",generateClassName:K.Z.generate}),U=Y,V=e(4419),X=e(6863),$=e(5873),H=e(9853),Q=e(5878),tt=e(1217);function nt(t){return(0,tt.Z)("MuiTypography",t)}(0,Q.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var et=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],rt=(0,X.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,e.variant&&n[e.variant],"inherit"!==e.align&&n["align".concat((0,H.Z)(e.align))],e.noWrap&&n.noWrap,e.gutterBottom&&n.gutterBottom,e.paragraph&&n.paragraph]}})((function(t){var n=t.theme,e=t.ownerState;return(0,I.Z)({margin:0},e.variant&&n.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})})),at={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ot={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},it=r.forwardRef((function(t,n){var e=(0,$.Z)({props:t,name:"MuiTypography"}),r=function(t){return ot[t]||t}(e.color),a=D((0,I.Z)({},e,{color:r})),o=a.align,i=void 0===o?"inherit":o,c=a.className,u=a.component,s=a.gutterBottom,l=void 0!==s&&s,p=a.noWrap,f=void 0!==p&&p,m=a.paragraph,d=void 0!==m&&m,h=a.variant,v=void 0===h?"body1":h,g=a.variantMapping,y=void 0===g?at:g,_=(0,T.Z)(a,et),x=(0,I.Z)({},a,{align:i,color:r,className:c,component:u,gutterBottom:l,noWrap:f,paragraph:d,variant:v,variantMapping:y}),b=u||(d?"p":y[v]||at[v])||"span",Z=function(t){var n=t.align,e=t.gutterBottom,r=t.noWrap,a=t.paragraph,o=t.variant,i=t.classes,c={root:["root",o,"inherit"!==t.align&&"align".concat((0,H.Z)(n)),e&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,V.Z)(c,nt,i)}(x);return(0,C.jsx)(rt,(0,I.Z)({as:b,ref:n,ownerState:x,className:(0,W.Z)(Z.root,c)},_))})),ct=function(){var t=(0,a.I0)();return(0,r.useEffect)((function(){t((0,g.yF)())}),[t]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(N,{}),(0,C.jsxs)(U,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ccf4ff",paddingBottom:"250px",children:[(0,C.jsx)(it,{component:"h2",variant:"h4",children:"Contacts"}),(0,C.jsx)(F,{}),(0,C.jsx)(M,{})]})]})}}}]);
//# sourceMappingURL=810.e58b7391.chunk.js.map