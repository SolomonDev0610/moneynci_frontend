(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[48],{2088:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"},2217:function(e,a,t){"use strict";t.r(a);var n=t(12),s=t(13),r=t(15),l=t(14),c=t(0),o=t.n(c),i=t(1355),u=t(1356),p=t(1357),m=t(1358),d=t(1359),f=t(796),b=t(773),h=t(774),g=t(1360),v=t(798),E=t(799),y=t(3),j=t.n(y),N=t(815),O=t(795),T=t(793),C=t(807),w=t(171),x=t(792),k=t(249),P=t(22),M=t(45),R=t(21),z=(t(566),t(567),t(41)),I=t.n(z),S=t(203),_=t(88);M.apps.length||M.initializeApp(S.a);var W=M.auth(),A=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(N.a,{onSubmit:this.handleRegister},o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(C.a,null,"Name")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(C.a,null,"Email")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(C.a,null,"Password")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(C.a,null,"Confirm Password")),o.a.createElement(O.a,null,o.a.createElement(x.a,{color:"primary",icon:o.a.createElement(k.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(w.a.Ripple,{onClick:function(){return R.a.push("/pages/login")},color:"primary",outline:!0},"Login"),o.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),q=Object(P.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:function(e,a,t){return function(n){var s=null;W.createUserWithEmailAndPassword(e,a).then((function(e){W.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(s=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:s,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:s,name:t}}))})),R.a.push("/")})).catch((function(e){console.log(e.message)}))}}})(A),F=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",first_name:"",last_name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithJWT(e.state.email,e.state.password,e.state.first_name,e.state.last_name)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(N.a,{action:"/",onSubmit:this.handleRegister},o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Nom",required:!0,value:this.state.last_name,onChange:function(a){return e.setState({last_name:a.target.value})}}),o.a.createElement(C.a,null,"Name")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Pr\xe9nom",required:!0,value:this.state.first_name,onChange:function(a){return e.setState({first_name:a.target.value})}}),o.a.createElement(C.a,null,"Name")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(C.a,null,"Email")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(C.a,null,"Password")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(C.a,null,"Confirm Password")),o.a.createElement(O.a,null,o.a.createElement(x.a,{color:"primary",icon:o.a.createElement(k.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(w.a.Ripple,{color:"primary",outline:!0,onClick:function(){R.a.push("/pages/login")}},"Login"),o.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),J=Object(P.b)((function(e){return{values:e.auth.register}}),{signupWithJWT:function(e,a,t,n){return function(s){I.a.post(global.config.server_url + "/register",{email:e,password:a,name:t+" "+n}).then((function(e){var a;I.a.post(global.config.server_url + "/personal_information",{user_id:10,first_name:t,last_name:n}).then((function(e){_.f.info("Utilisateur enregistr\xe9")})).catch((function(e){console.log(e),_.f.error("API injoignable.")})),e.data&&(a=e.data.user,localStorage.setItem("token",e.data.accessToken),s({type:"LOGIN_WITH_JWT",payload:{loggedInUser:a,loggedInWith:"jwt"}}),R.a.push("/"))})).catch((function(e){return console.log(e)}))}}})(F),L=t(2088),D=t.n(L),U=(t(888),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(i.a,{className:"m-0 justify-content-center"},o.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},o.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},o.a.createElement(i.a,{className:"m-0"},o.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},o.a.createElement("img",{className:"mr-1",src:D.a,alt:"registerImg"})),o.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},o.a.createElement(p.a,{className:"rounded-0 mb-0 p-2"},o.a.createElement(m.a,{className:"pb-1 pt-50"},o.a.createElement(d.a,null,o.a.createElement("h4",{className:"mb-0"},"Create Account"))),o.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new account."),o.a.createElement(f.a,{tabs:!0,className:"px-2"},o.a.createElement(b.a,null,o.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"JWT")),o.a.createElement(b.a,null,o.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Firebase")),o.a.createElement(b.a,null,o.a.createElement(h.a,{className:j()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"Auth0"))),o.a.createElement(g.a,{className:"pt-1 pb-50"},o.a.createElement(v.a,{activeTab:this.state.activeTab},o.a.createElement(E.a,{tabId:"1"},o.a.createElement(J,null)),o.a.createElement(E.a,{tabId:"2"},o.a.createElement(q,null)),o.a.createElement(E.a,{tabId:"3"})))))))))}}]),t}(o.a.Component));a.default=U},787:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),s=t.n(n).a.createContext({})},792:function(e,a,t){"use strict";var n=t(12),s=t(13),r=t(15),l=t(14),c=t(0),o=t.n(c),i=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=i},793:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(11),l=t(9),c=t(0),o=t.n(c),i=t(1),u=t.n(i),p=t(3),m=t.n(p),d=t(4),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,p=e.addon,f=e.plaintext,b=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),y="form-control";f?(y+="-plaintext",E=u||"input"):"file"===r?y+="-file":"range"===r?y+="-range":g&&(y=p?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(d.mapToCssModules)(m()(a,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===E||u&&"function"===typeof u)&&(h.type=r),h.children&&!f&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(E,Object(n.a)({},h,{ref:b,className:j,"aria-invalid":i}))},a}(o.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},795:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(0),l=t.n(r),c=t(1),o=t.n(c),i=t(3),u=t.n(i),p=t(4),m={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:p.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,o=e.check,i=e.inline,m=e.tag,d=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(p.mapToCssModules)(u()(a,!!r&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===m&&(d.disabled=c),l.a.createElement(m,Object(n.a)({},d,{className:f}))};d.propTypes=m,d.defaultProps={tag:"div"},a.a=d},796:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(0),l=t.n(r),c=t(1),o=t.n(c),i=t(3),u=t.n(i),p=t(4),m={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:p.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.tabs,c=e.pills,o=e.vertical,i=e.horizontal,m=e.justified,d=e.fill,f=e.navbar,b=e.card,h=e.tag,g=Object(s.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(p.mapToCssModules)(u()(a,f?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":r,"card-header-tabs":b&&r,"nav-pills":c,"card-header-pills":b&&c,"nav-justified":m,"nav-fill":d}),t);return l.a.createElement(h,Object(n.a)({},g,{className:v}))};d.propTypes=m,d.defaultProps={tag:"ul",vertical:!1},a.a=d},798:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(0),l=t.n(r),c=t(1),o=t.n(c),i=t(3),u=t.n(i),p=t(787),m=t(4),d={tag:m.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(s.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.tag,r=Object(m.omit)(this.props,Object.keys(d)),c=Object(m.mapToCssModules)(u()("tab-content",a),t);return l.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(s,Object(n.a)({},r,{className:c})))},a}(r.Component);a.a=f,f.propTypes=d,f.defaultProps={tag:"div"}},799:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(5),s=t(6),r=t(0),l=t.n(r),c=t(1),o=t.n(c),i=t(3),u=t.n(i),p=t(787),m=t(4),d={tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function f(e){var a=e.className,t=e.cssModule,r=e.tabId,c=e.tag,o=Object(s.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(m.mapToCssModules)(u()("tab-pane",a,{active:r===e}),t)};return l.a.createElement(p.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(c,Object(n.a)({},o,{className:i(a)}))}))}f.propTypes=d,f.defaultProps={tag:"div"}},807:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(0),l=t.n(r),c=t(1),o=t.n(c),i=t(3),u=t.n(i),p=t(4),m=o.a.oneOfType([o.a.number,o.a.string]),d=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),f={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,o=e.tag,i=e.check,m=e.size,d=e.for,f=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];c.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var r,l=!n;if(Object(p.isObject)(s)){var c,o=l?"-":"-"+a+"-";r=h(l,a,s.size),b.push(Object(p.mapToCssModules)(u()(((c={})[r]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),t)}else r=h(l,a,s),b.push(r)}}));var g=Object(p.mapToCssModules)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,b,!!b.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:d},f,{className:g}))};g.propTypes=f,g.defaultProps=b,a.a=g},815:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(11),l=t(9),c=t(0),o=t.n(c),i=t(1),u=t.n(i),p=t(3),m=t.n(p),d=t(4),f={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(d.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},888:function(e,a,t){}}]);
//# sourceMappingURL=48.5a77a6ae.chunk.js.map