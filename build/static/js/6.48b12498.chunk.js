(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{142:function(e,t,n){"use strict";var r=n(36),a=function(e){return e.phoneBook.filter},o=function(e){return e.phoneBook.contacts},s={getLoading:function(e){return e.phoneBook.loading},getFilter:a,getVisibleContacts:Object(r.a)([o,a],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),getAllContacts:o,getError:function(e){return e.phoneBook.error}};t.a=s},143:function(e,t,n){"use strict";var r=n(2),a=n(46),o=n(47),s=n(49),i=n(48),c=n(0),u=n(12),l=n(13),h=n(154),p=(n(144),n(142)),m=n(20),b=n(4),j=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){var e=this;this.props.errorAuth?setTimeout((function(){e.props.clearErrorAuth(e.state)}),2500):this.props.errorPb&&setTimeout((function(){e.props.clearErrorPb(e.state)}),2500)}},{key:"render",value:function(){return Object(r.jsx)(h.a,{in:this.props.message,timeout:250,classNames:"Notification-fade",unmountOnExit:!0,children:Object(r.jsx)("div",{className:"Overlay",children:Object(r.jsx)("p",{className:"Notification",children:this.props.message})})})}}]),n}(c.Component);t.a=Object(l.b)((function(e){return{errorPb:p.a.getError(e),errorAuth:m.a.getError(e)}}),(function(e){return{clearErrorPb:function(){return e(u.e())},clearErrorAuth:function(){return e(b.a.clearError())}}}))(j)},144:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(3),o=n(46),s=n(47),i=n(49),c=n(48),u=n(0),l=n(13),h=n(34),p=n(154),m=n(20),b=n(143),j=n(33),d=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"",email:"",password:""},e.handleChange=function(t){var n=t.target,r=n.name,o=n.value;e.setState(Object(a.a)({},r,o))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.password;return Object(r.jsxs)("div",{children:[Object(r.jsx)(p.a,{in:!0,appear:!0,timeout:500,classNames:"Title-SlideIn",unmountOnExit:!0,children:Object(r.jsx)("h1",{className:"Title",children:"Enter your data"})}),Object(r.jsx)(b.a,{message:this.props.error}),this.props.isLoadingAuth&&Object(r.jsx)(j.a,{}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"Form",autoComplete:"off",children:[Object(r.jsx)("label",{htmlFor:"name",className:"Label",children:"Name"}),Object(r.jsx)("input",{className:"Input",type:"text",name:"name",value:t,onChange:this.handleChange}),Object(r.jsx)("label",{htmlFor:"email",className:"Label",children:"Email"}),Object(r.jsx)("input",{className:"Input",type:"email",name:"email",value:n,onChange:this.handleChange}),Object(r.jsx)("label",{htmlFor:"password",className:"Label",children:"Password"}),Object(r.jsx)("input",{className:"Input",type:"password",name:"password",value:a,onChange:this.handleChange}),Object(r.jsx)("button",{className:"Button",type:"submit",children:"Sign up"})]})]})}}]),n}(u.Component),f={onRegister:h.a.register};t.default=Object(l.b)((function(e){return{error:m.a.getError(e),isLoadingAuth:m.a.getLoading(e)}}),f)(d)}}]);
//# sourceMappingURL=6.48b12498.chunk.js.map