(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[6],{140:function(e,t,n){"use strict";var a=n(37),r=function(e){return e.phoneBook.filter},c=function(e){return e.phoneBook.contacts},o={getLoading:function(e){return e.phoneBook.loading},getFilter:r,getVisibleContacts:Object(a.a)([c,r],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),getAllContacts:c,getError:function(e){return e.phoneBook.error}};t.a=o},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(2),r=n(0),c=n(12),o=n(13),i=n(153),s=(n(142),n(140)),u=n(20),l=n(4);function b(e){var t=e.message,n=Object(o.b)(),b=Object(o.c)(s.a.getError),m=Object(o.c)(u.a.getError),j=Object(r.useCallback)((function(){return n(c.e())}),[n]),f=Object(r.useCallback)((function(){return n(l.a.clearError())}),[n]);return Object(r.useEffect)((function(){setTimeout((function(){f()}),2500)}),[m,f]),Object(r.useEffect)((function(){setTimeout((function(){j()}),2500)}),[b,j]),Object(a.jsx)(i.a,{in:t,timeout:250,classNames:"Notification-fade",unmountOnExit:!0,children:Object(a.jsx)("div",{className:"Overlay",children:Object(a.jsx)("p",{className:"Notification",children:t})})})}},142:function(e,t,n){},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(47);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,c=s}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},150:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(2),r=n(143),c=n(0),o=n(13),i=n(35),s=n(153),u=n(20),l=n(141),b=n(34);function m(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(r.a)(t,2),m=n[0],j=n[1],f=Object(c.useState)(""),d=Object(r.a)(f,2),O=d[0],h=d[1],p=Object(c.useState)(""),g=Object(r.a)(p,2),v=g[0],x=g[1],y=Object(o.c)(u.a.getError),w=Object(o.c)(u.a.getLoading),N=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return j(a);case"email":return h(a);case"password":return x(a);default:return void console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f name - ".concat(n," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f!"))}};return Object(a.jsxs)("div",{children:[Object(a.jsx)(s.a,{in:!0,appear:!0,timeout:500,classNames:"Title-SlideIn",unmountOnExit:!0,children:Object(a.jsx)("h1",{className:"Title",children:"Enter your data"})}),Object(a.jsx)(l.a,{message:y}),w&&Object(a.jsx)(b.a,{}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i.a.register({name:m,email:O,password:v})),j(""),h(""),x("")},className:"Form",autoComplete:"off",children:[Object(a.jsx)("label",{htmlFor:"name",className:"Label",children:"Name"}),Object(a.jsx)("input",{className:"Input",type:"text",name:"name",value:m,onChange:N}),Object(a.jsx)("label",{htmlFor:"email",className:"Label",children:"Email"}),Object(a.jsx)("input",{className:"Input",type:"email",name:"email",value:O,onChange:N}),Object(a.jsx)("label",{htmlFor:"password",className:"Label",children:"Password"}),Object(a.jsx)("input",{className:"Input",type:"password",name:"password",value:v,onChange:N}),Object(a.jsx)("button",{className:"Button",type:"submit",children:"Sign up"})]})]})}}}]);
//# sourceMappingURL=6.18888fa9.chunk.js.map