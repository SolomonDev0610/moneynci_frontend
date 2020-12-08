(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[134],{1641:function(e,a,t){},2188:function(e,a,t){"use strict";t.r(a);var n=t(12),s=t(13),c=t(15),r=t(14),l=t(0),i=t.n(l),o=t(908),u=t(162),m=t(804),h=t.n(m),d=t(805),p=t(772),v=t(1357),f=t(795),g=t(793),E=t(185),b=t(390),N=t(46),S=t.n(N),C=t(22),y=t(41),w=t.n(y),k=function(){return function(e){w.a.get("api/app/chat/chats").then((function(a){e({type:"GET_CONTACTS",contacts:a.data.contacts,chats:a.data.chats})})).catch((function(e){return console.log(e)}))}},O=t(96),A=t.n(O),U=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={chatsContacts:[],contacts:[],messages:[],status:null,value:""},e.getChatContents=function(){e.props.getChats(),e.props.getContactChats()},e.handleOnChange=function(a){e.setState({value:a.target.value}),e.props.searchContacts(a.target.value)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getChatContents();case 2:this.setState({chatsContacts:this.props.chat.chatContacts,contacts:this.props.chat.contacts,chats:this.props.chat.chats,status:this.props.chat.status});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.contacts,n=a.chatsContacts,s=a.chats,c=a.status,r=a.value,l=r.length?this.props.chat.filteredContacts:t,o=r.length?this.props.chat.filteredChats:n,u=l.length>0?l.map((function(a){return i.a.createElement("li",{key:a.uid,onClick:function(){e.props.handleActiveChat(a.uid,a,s[a.uid]),e.props.markSeenAllMessages(a.uid),e.props.mainSidebar(!1)}},i.a.createElement("div",{className:"pr-1"},i.a.createElement("span",{className:"avatar avatar-md m-0"},i.a.createElement("img",{src:a.photoURL,alt:a.displayName,height:"38",width:"38"}))),i.a.createElement("div",{className:"user-chat-info"},i.a.createElement("div",{className:"contact-info"},i.a.createElement("h5",{className:"text-bold-600 mb-0"},a.displayName),i.a.createElement("p",{className:"truncate"},a.about))))})):null,m=o&&Array.isArray(o)?o.map((function(a){var t=s[a.uid]&&s[a.uid].msg?s[a.uid].msg.slice(-1)[0]:null,n=new Date(t&&t.time?t.time:null),c=n.toLocaleString("default",{month:"short"}),r=n.getDate(),l=s[a.uid]&&s[a.uid].msg?s[a.uid].msg.filter((function(e){return!1===e.isSeen&&!0!==e.isSent})).length:null,o=void 0!==s[a.uid]?s[a.uid]:null;return i.a.createElement("li",{key:a.uid,onClick:function(){e.props.handleActiveChat(a.uid,a,o),e.props.mainSidebar(!1),e.props.markSeenAllMessages(a.uid)},className:"".concat(e.props.activeChatID===a.uid?"active":"")},i.a.createElement("div",{className:"pr-1"},i.a.createElement("span",{className:"avatar avatar-md m-0"},i.a.createElement("img",{src:a.photoURL,alt:a.displayName,height:"38",width:"38"}))),i.a.createElement("div",{className:"user-chat-info"},i.a.createElement("div",{className:"contact-info"},i.a.createElement("h5",{className:"text-bold-600 mb-0"},a.displayName),i.a.createElement("p",{className:"truncate"},t?t.textContent:a.about)),i.a.createElement("div",{className:"contact-meta d-flex- flex-column"},i.a.createElement("span",{className:"float-right mb-25"},c+" "+r),l>0?i.a.createElement("div",{className:"unseen-msg"},i.a.createElement(p.a,{className:"badge-md float-right",color:"primary",pill:!0},l)):null)))})):null;return i.a.createElement(v.a,{className:"sidebar-content h-100"},i.a.createElement("span",{className:"sidebar-close-icon",onClick:function(){return e.props.mainSidebar(!1)}},i.a.createElement(E.a,{size:15})),i.a.createElement("div",{className:"chat-fixed-search"},i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement("div",{className:"sidebar-profile-toggle position-relative d-inline-flex"},i.a.createElement("div",{className:"avatar",onClick:function(){return e.props.handleUserSidebar("open")}},i.a.createElement("img",{src:A.a,alt:"User Profile",height:"40",width:"40"}),i.a.createElement("span",{className:"dnd"===c?"avatar-status-busy":"away"===c?"avatar-status-away":"offline"===c?"avatar-status-offline":"avatar-status-online"}))),i.a.createElement(f.a,{className:"position-relative has-icon-left mx-1 my-0 w-100"},i.a.createElement(g.a,{className:"round",type:"text",placeholder:"Search contact or start a new chat",onChange:function(a){return e.handleOnChange(a)},value:r}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(b.a,{size:15}))))),i.a.createElement(S.a,{className:"chat-user-list list-group",options:{wheelPropagation:!1}},i.a.createElement("h3",{className:"primary p-1 mb-0"},"Chats"),i.a.createElement("ul",{className:"chat-users-list-wrapper media-list"},m),i.a.createElement("h3",{className:"primary p-1 mb-0"},"Contacts"),i.a.createElement("ul",{className:"chat-users-list-wrapper media-list"},u)))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.chat.chatContacts.length!==a.chatContacts||e.chat.contacts.length!==a.contacts||e.chat.chats.length!==a.chats||e.chat.status!==a.status?{chatsContacts:e.chat.chatContacts,contacts:e.chat.contacts,chats:e.chat.chats,status:e.chat.status}:null}}]),t}(i.a.Component),D=Object(C.b)((function(e){return{chat:e.chatApp.chats}}),{getChats:k,getContactChats:function(){return function(e){w.a.get("api/app/chat/chat-contacts").then((function(a){e({type:"GET_CHAT_CONTACTS",chats:a.data})})).catch((function(e){return console.log(e)}))}},searchContacts:function(e){return function(a){a({type:"SEARCH_CONTACTS",query:e})}},markSeenAllMessages:function(e){return function(a){w.a.post("/api/apps/chat/mark-all-seen/",{contactId:e}).then((function(t){a({type:"MARK_AS_SEEN",id:e})})).catch((function(e){return console.log(e)}))}}})(U),x=t(25),P=t.n(x),j=t(171),T=t(344),R=t(342),M=t(410),_=t(391),F=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={msg:"",activeUser:null,activeChat:null},e.handleSendMessage=function(a,t,n){n.length>0&&(e.props.sendMessage(a,t,n),e.setState({msg:""}))},e.handleTime=function(e,a){var t=new Date(Date.parse(e)),n=new Date(Date.parse(a));return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()},e.scrollToBottom=function(){var a=P.a.findDOMNode(e.chatArea);a.scrollTop=a.scrollHeight},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,a=this.state.activeUser,t=a&&a.uid?a.uid:null,n=a&&a.uid?this.props.chat.chats[t]:null,s=n&&void 0!==n&&n.msg?n.msg.map((function(t,s){return i.a.createElement(i.a.Fragment,{key:s},function(){if(s>0&&!e.handleTime(t.time,n.msg[s-1].time))return i.a.createElement("div",{className:"divider"},i.a.createElement("div",{className:"divider-text"},(new Date).getDate()+" "+(new Date).toLocaleString("default",{month:"short"})))}(),i.a.createElement("div",{className:"chat ".concat(!0!==t.isSent?"chat-left":"chat-right")},s>0?!0===t.isSent&&!0!==n.msg[s-1].isSent?i.a.createElement("div",{className:"chat-avatar"},i.a.createElement("div",{className:"avatar m-0"},i.a.createElement("img",{src:A.a,alt:"chat avatar",height:"40",width:"40"}))):!0!==t.isSent?i.a.createElement("div",{className:"chat-avatar"},i.a.createElement("div",{className:"avatar m-0"},i.a.createElement("img",{src:a.photoURL,alt:"chat avatar",height:"40",width:"40"}))):"":i.a.createElement("div",{className:"chat-avatar"},i.a.createElement("div",{className:"avatar m-0"},i.a.createElement("img",{src:t.isSent?A.a:a.photoURL,alt:"chat avatar",height:"40",width:"40"}))),i.a.createElement("div",{className:"chat-body"},i.a.createElement("div",{className:"chat-content"},t.textContent))))})):null;return i.a.createElement("div",{className:"content-right"},i.a.createElement("div",{className:"chat-app-window"},i.a.createElement("div",{className:"start-chat-area ".concat(null!==a?"d-none":"d-flex")},i.a.createElement("span",{className:"mb-1 start-chat-icon"},i.a.createElement(T.a,{size:50})),i.a.createElement("h4",{className:"py-50 px-1 sidebar-toggle start-chat-text",onClick:function(){if(!1!==e.props.mql.matches)return null;e.props.mainSidebar(!0)}},"Start Conversation")),i.a.createElement("div",{className:"active-chat ".concat(null===a?"d-none":"d-block")},i.a.createElement("div",{className:"chat_navbar"},i.a.createElement("header",{className:"chat_header d-flex justify-content-between align-items-center p-1"},i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement("div",{className:"sidebar-toggle d-block d-lg-none mr-1",onClick:function(){return e.props.mainSidebar(!0)}},i.a.createElement(R.a,{size:24})),i.a.createElement("div",{className:"avatar user-profile-toggle m-0 m-0 mr-1",onClick:function(){return e.props.handleReceiverSidebar("open")}},i.a.createElement("img",{src:null!==a?a.photoURL:"",alt:null!==a?a.displayName:"",height:"40",width:"40"}),i.a.createElement("span",{className:"\n                    ".concat(null!==a&&"do not disturb"===a.status?"avatar-status-busy":null!==a&&"away"===a.status?"avatar-status-away":null!==a&&"offline"===a.status?"avatar-status-offline":"avatar-status-online","\n                    ")})),i.a.createElement("h6",{className:"mb-0"},null!==a?a.displayName:"")),i.a.createElement("span",{className:"favorite",onClick:function(){n&&e.props.togglePinned(a.uid,!n.isPinned)}},i.a.createElement(M.a,{size:22,stroke:n&&!0===n.isPinned?"#FF9F43":"#626262"})))),i.a.createElement(S.a,{className:"user-chats",options:{wheelPropagation:!1},ref:function(a){e.chatArea=a}},i.a.createElement("div",{className:"chats"},s)),i.a.createElement("div",{className:"chat-app-form"},i.a.createElement("form",{className:"chat-app-input d-flex align-items-center",onSubmit:function(t){t.preventDefault(),e.handleSendMessage(a.uid,!1,e.state.msg,a)}},i.a.createElement(g.a,{type:"text",className:"message mr-1 ml-50",placeholder:"Type your message",value:this.state.msg,onChange:function(a){a.preventDefault(),e.setState({msg:a.target.value})}}),i.a.createElement(j.a,{color:"primary"},i.a.createElement(_.a,{className:"d-lg-none",size:15}),i.a.createElement("span",{className:"d-lg-block d-none"},"Send")))))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.activeUser!==a.activeChat||e.activeChat!==a.activeChat?{activeUser:e.activeUser,activeChat:e.activeChat}:null}}]),t}(i.a.Component),L=Object(C.b)((function(e){return{chat:e.chatApp.chats}}),{togglePinned:function(e,a){return function(t){w.a.post("/api/apps/chat/set-pinned/",{contactId:e,value:a}).then((function(n){t({type:"SET_PINNED",id:e,value:a})})).catch((function(e){return console.log(e)}))}},sendMessage:function(e,a,t){return t.length>0?function(n){var s={textContent:t,isSent:!0,isSeen:!1,time:(new Date).toString()};w.a.post("/api/app/chat/send-message",{contactId:e,message:s,isPinned:a}).then((function(c){n({type:"SEND_MESSAGE",msg:s,id:e,isPinned:a,text:t}),n(k())})).catch((function(e){return console.log(e)}))}:void 0}})(F),I=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeUser:null},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state.activeUser;return i.a.createElement("div",{className:"user-profile-sidebar ".concat(this.props.receiverProfile?"show":null)},i.a.createElement("header",{className:"user-profile-header"},i.a.createElement("span",{className:"close-icon",onClick:function(){return e.props.handleReceiverSidebar("close")}},i.a.createElement(E.a,{size:24})),i.a.createElement("div",{className:"header-profile-sidebar"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:null!==a?a.photoURL:null,alt:null!==a?a.displayName:null,height:"66",width:"66"}),i.a.createElement("span",{className:"".concat(null!==a&&"do not disturb"===a.status?"avatar-status-busy":null!==a&&"away"===a.status?"avatar-status-away":null!==a&&"offline"===a.status?"avatar-status-offline":"avatar-status-online"," avatar-status-lg")})),i.a.createElement("h4",{className:"chat-user-name"},null!==a?a.displayName:null))),i.a.createElement(S.a,{className:"user-profile-sidebar-area p-2",options:{wheelPropagation:!1}},i.a.createElement("h6",null,"About"),i.a.createElement("p",null,null!==a?a.about:null)))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.activeUser!==a.activeUser?{activeUser:e.activeUser}:null}}]),t}(i.a.Component),z=t(34),B=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={value:"Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",status:null},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state.status;return i.a.createElement("div",{className:"chat-profile-sidebar ".concat(this.props.userProfile?"show":null)},i.a.createElement("header",{className:"chat-profile-header"},i.a.createElement("div",{className:"close-icon",onClick:function(){return e.props.handleUserSidebar("close")}},i.a.createElement(E.a,{size:24})),i.a.createElement("div",{className:"header-profile-sidebar"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:A.a,alt:"User Profile",height:"66",width:"66"}),i.a.createElement("span",{className:"".concat("offline"===a?"avatar-status-offline":"dnd"===a?"avatar-status-busy":"away"===a?"avatar-status-away":"avatar-status-online"," avatar-status-lg")})),i.a.createElement("h4",{className:"chat-user-name"},"John Doe"))),i.a.createElement("div",{className:"profile-sidebar-area"},i.a.createElement(S.a,{className:"scroll-area",options:{wheelPropagation:!1}},i.a.createElement("h6",null,"About"),i.a.createElement("div",{className:"about-user"},i.a.createElement(g.a,{type:"textarea",name:"text",id:"userAbout",rows:"5",value:this.state.value,maxLength:"120",onChange:function(a){return e.setState({value:a.target.value})}}),i.a.createElement("small",{className:"counter-value float-right"},"".concat(this.state.value.length," / 120"))),i.a.createElement("h3",{className:"mt-3"},"Status"),i.a.createElement("ul",{className:"list-unstyled user-status mb-0"},i.a.createElement("li",{className:"pb-50"},i.a.createElement(z.a,{label:"Active",color:"success",defaultChecked:!0,name:"userStatus",onClick:function(){return e.props.changeStatus("active")}})),i.a.createElement("li",{className:"pb-50"},i.a.createElement(z.a,{label:"Do Not Disturb",color:"danger",defaultChecked:!1,name:"userStatus",onClick:function(){return e.props.changeStatus("dnd")}})),i.a.createElement("li",{className:"pb-50"},i.a.createElement(z.a,{label:"Away",color:"warning",defaultChecked:!1,name:"userStatus",onClick:function(){return e.props.changeStatus("away")}})),i.a.createElement("li",{className:"pb-50"},i.a.createElement(z.a,{label:"Offline",color:"secondary",defaultChecked:!1,name:"userStatus",onClick:function(){return e.props.changeStatus("offline")}}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.chat.status!==a.status?{status:e.chat.status}:null}}]),t}(i.a.Component),G=Object(C.b)((function(e){return{chat:e.chatApp.chats}}),{changeStatus:function(e){return function(a){a({type:"CHANGE_STATUS",status:e})}}})(B),H=(t(1641),window.matchMedia("(min-width: 992px)")),q=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={userProfile:!1,sidebarDocked:H.matches,sidebarOpen:!1,activeChatID:null,activeChat:null,activeUser:null,receiverProfile:!1,userSidebar:!1},e.handleUserSidebar=function(a){"open"===a?e.setState({userProfile:!0}):e.setState({userProfile:!1})},e.handleActiveChat=function(a,t,n){e.setState({activeChatID:a,activeUser:t,activeChat:n})},e.onSetSidebarOpen=function(a){e.setState({sidebarOpen:a})},e.mediaQueryChanged=function(){e.setState({sidebarDocked:H.matches,sidebarOpen:!1})},e.handleReceiverSidebar=function(a){"open"===a?e.setState({receiverProfile:!0}):e.setState({receiverProfile:!1})},e.handleUserSidebar=function(a){"open"===a?e.setState({userSidebar:!0}):e.setState({userSidebar:!1})},e}return Object(s.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){H.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){H.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"chat-application position-relative"},i.a.createElement("div",{className:"chat-overlay ".concat(this.state.receiverProfile||this.state.userSidebar||this.state.sidebarOpen?"show":"d-none"),onClick:function(){e.handleReceiverSidebar("close"),e.handleUserSidebar("close"),e.onSetSidebarOpen(!1)}}),i.a.createElement(u.a.Consumer,null,(function(a){return i.a.createElement(o.a,{sidebar:i.a.createElement(D,{activeChatID:e.state.activeChatID,handleActiveChat:e.handleActiveChat,handleUserSidebar:e.handleUserSidebar,mainSidebar:e.onSetSidebarOpen}),docked:e.state.sidebarDocked,open:e.state.sidebarOpen,touch:!1,sidebarClassName:"chat-sidebar",contentClassName:"sidebar-children d-none",pullRight:"rtl"===a.state.direction},'""')})),i.a.createElement(G,{userProfile:this.state.userSidebar,handleUserSidebar:this.handleUserSidebar}),i.a.createElement(L,{activeChat:this.state.activeChat,activeUser:this.state.activeUser,handleReceiverSidebar:this.handleReceiverSidebar,mainSidebar:this.onSetSidebarOpen,mql:H,handleActiveChat:this.handleActiveChat}),i.a.createElement(I,{activeUser:this.state.activeUser,receiverProfile:this.state.receiverProfile,handleReceiverSidebar:this.handleReceiverSidebar}))}}]),t}(i.a.Component);a.default=q}}]);
//# sourceMappingURL=134.e56649b2.chunk.js.map