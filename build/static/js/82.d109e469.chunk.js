(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[82],{2175:function(e,a,t){"use strict";t.r(a);var n=t(12),l=t(13),r=t(15),c=t(14),s=t(0),o=t.n(s),i=t(1355),m=t(1356),u=t(788),p=t(1357),v=t(1358),b=t(1359),h=t(796),E=t(773),g=t(774),d=t(1360),f=t(798),C=t(799),x=t(3),T=t.n(x),N=t(902),I=t(295),j=t(266),y=t(442),O=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User } from "react-feather"\nclass chipDefault extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" text="Base Chip" />\n      <Chip className="mr-1" avatarText="RX" text="Avatar Text" />\n      <Chip className="mr-1" avatarIcon={<User />} text="Avatar Icon" />\n      <Chip className="mr-1" avatarImg={chipImg} text="Avatar Image" />\n      <Chip text="Chip Closable" closable />\n    )}\n}\nexport default chipDefault\n')),w=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User } from "react-feather"\nclass chipColors extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" color="success" avatarText="RX" text="Avatar Text" />\n      <Chip className="mr-1" color="info" avatarIcon={<User />} text="Avatar Icon" />\n      <Chip className="mr-1" color="warning" avatarImg={chipImg} text="Avatar Image" />\n      <Chip color="danger" text="Chip Closable" closable />\n    )}\n}\nexport default chipColors\n')),A=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User } from "react-feather"\n\nclass chipAvatarColors extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" avatarColor="primary" avatarText="RX" text="Avatar Text" />\n      <Chip className="mr-1" avatarColor="success" avatarText="VS" text="Avatar Text" />\n      <Chip className="mr-1" avatarColor="info" avatarIcon={<User />} text="Avatar Text" />\n      <Chip className="mr-1" avatarColor="danger" avatarIcon={<User />} text="Avatar Text" />\n      <Chip avatarColor="warning" avatarIcon={<User />} text="Avatar Text" />\n    )}\n}\nexport default chipAvatarColors\n')),k=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User, Mail, Share, Slash, Battery, Edit } from "react-feather"\n\nclass chipIcons extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" avatarIcon={<User />} text="User Icon" />\n      <Chip className="mr-1" avatarColor="primary" avatarIcon={<Share />} text="Share Icon" />\n      <Chip className="mr-1" avatarColor="success" avatarIcon={<Mail />} text="Mail Icon" />\n      <Chip className="mr-1" avatarColor="danger" avatarIcon={<Slash />} text="Block Icon" />\n      <Chip className="mr-1" avatarColor="warning" avatarIcon={<Battery />} text="Battery Icon" />\n      <Chip className="mr-1" avatarColor="info" avatarIcon={<Edit />} text="Edit Icon" />\n    )}\n}\nexport default chipIcons\n')),z=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\n\nclass chipClosable extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" text="Dribble" closable />\n      <Chip className="mr-1" text="Github" closable />\n      <Chip className="mr-1" text="Behance" closable />\n      <Chip className="mr-1" text="ReactJS" closable />\n      <Chip text="Vuexy" closable />\n    )}\n}\nexport default chipClosable\n')),R=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { Trash, Trash2, MinusCircle, Delete } from "react-feather"\n\nclass ChipClosableIcons extends React.Component {\n  render() {\n    return(\n      <Chip className="mr-1" text="Dribble" closableIcon={<Trash />} closable />\n      <Chip className="mr-1" text="Github" closableIcon={<Trash2 />} closable />\n      <Chip className="mr-1" text="Behance" closableIcon={<Delete />} closable />\n      <Chip className="mr-1" text="ReactJS" closableIcon={<MinusCircle />} closable />\n    )}\n}\nexport default ChipClosableIcons\n')),S=t(89),B=t.n(S),M=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Default"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Chips helps you represent simple data with Various options."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",text:"Basic Chip"}),o.a.createElement(N.a,{className:"mr-1",avatarText:"RX",text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarImg:B.a,text:"Avatar Image"}),o.a.createElement(N.a,{text:"Chip Closable",closable:!0})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(o.a.Component),U=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"color=[primary | success | danger | info | warning ]")," ","to create a colored chip."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",color:"primary",text:"Primary Chip"}),o.a.createElement(N.a,{className:"mr-1",color:"success",avatarText:"RX",text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",color:"info",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Icon"}),o.a.createElement(N.a,{className:"mr-1",color:"warning",avatarImg:B.a,text:"Avatar Image"}),o.a.createElement(N.a,{color:"danger",text:"Chip Closable",closable:!0})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(o.a.Component),D=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Avatar Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"avatarColor=[primary | success | danger | info | warning | dark]")," ","to create a colored avatar chip."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",avatarColor:"primary",avatarText:"RX",text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"success",avatarText:"VS",text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"info",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"danger",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Text"}),o.a.createElement(N.a,{avatarColor:"warning",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Text"})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},A)))))}}]),t}(o.a.Component),P=t(394),$=t(337),F=t(404),J=t(233),V=t(292),X=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Icons"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"avatarIcon")," add icon to avatar."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",avatarIcon:o.a.createElement(y.a,null),text:"User Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"primary",avatarIcon:o.a.createElement(P.a,null),text:"Share Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"success",avatarIcon:o.a.createElement($.a,null),text:"Mail Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"danger",avatarIcon:o.a.createElement(F.a,null),text:"Block Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"warning",avatarIcon:o.a.createElement(J.a,null),text:"Battery Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"info",avatarIcon:o.a.createElement(V.a,null),text:"Edit Icon"})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(o.a.Component),G=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Chips Closable"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"closable")," to make your chips closable."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",text:"Dribble",closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"Github",closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"Behance",closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"ReactJS",closable:!0}),o.a.createElement(N.a,{text:"Vuexy",closable:!0})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(o.a.Component),_=t(425),Z=t(424),Y=t(285),q=t(349),H=t(455),K=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Customized Closeable Icon"),o.a.createElement("div",{className:"views"},o.a.createElement(h.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(E.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"You can use prop ",o.a.createElement("code",null,"closableIcon")," with prop"," ",o.a.createElement("code",null,"closable")," to create a chip with customized close icon."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",text:"Dribble",closableIcon:o.a.createElement(_.a,null),closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"Github",closableIcon:o.a.createElement(Z.a,null),closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"Behance",closableIcon:o.a.createElement(Y.a,null),closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"ReactJS",closableIcon:o.a.createElement(q.a,null),closable:!0}),o.a.createElement(N.a,{text:"Vuexy",closableIcon:o.a.createElement(H.a,null),closable:!0})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},R," ")))))}}]),t}(o.a.Component),L=t(791),Q=t.n(L),W=(t(790),function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){Q.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Chips",breadCrumbParent:"Extra Components",breadCrumbActive:"Chips"}),o.a.createElement(i.a,null,o.a.createElement(m.a,{sm:"12"},o.a.createElement(M,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(U,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(D,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(X,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(G,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(K,null))))}}]),t}(o.a.Component));a.default=W},787:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),l=t.n(n).a.createContext({})},790:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var t=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(a){"jsx"!==a.language&&"tsx"!==a.language||function a(n){for(var l=[],r=0;r<n.length;r++){var c=n[r],s=!1;if("string"!=typeof c&&("tag"===c.type&&c.content[0]&&"tag"===c.content[0].type?"</"===c.content[0].content[0].content?0<l.length&&l[l.length-1].tagName===t(c.content[0].content[1])&&l.pop():"/>"===c.content[c.content.length-1].content||l.push({tagName:t(c.content[0].content[1]),openedBraces:0}):0<l.length&&"punctuation"===c.type&&"{"===c.content?l[l.length-1].openedBraces++:0<l.length&&0<l[l.length-1].openedBraces&&"punctuation"===c.type&&"}"===c.content?l[l.length-1].openedBraces--:s=!0),(s||"string"==typeof c)&&0<l.length&&0===l[l.length-1].openedBraces){var o=t(c);r<n.length-1&&("string"==typeof n[r+1]||"plain-text"===n[r+1].type)&&(o+=t(n[r+1]),n.splice(r+1,1)),0<r&&("string"==typeof n[r-1]||"plain-text"===n[r-1].type)&&(o=t(n[r-1])+o,n.splice(r-1,1),r--),n[r]=new e.Token("plain-text",o,null,o)}c.content&&"string"!=typeof c.content&&a(c.content)}}(a.tokens)}))}(Prism)},796:function(e,a,t){"use strict";var n=t(5),l=t(6),r=t(0),c=t.n(r),s=t(1),o=t.n(s),i=t(3),m=t.n(i),u=t(4),p={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},v=function(e){var a=e.className,t=e.cssModule,r=e.tabs,s=e.pills,o=e.vertical,i=e.horizontal,p=e.justified,v=e.fill,b=e.navbar,h=e.card,E=e.tag,g=Object(l.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),d=Object(u.mapToCssModules)(m()(a,b?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":r,"card-header-tabs":h&&r,"nav-pills":s,"card-header-pills":h&&s,"nav-justified":p,"nav-fill":v}),t);return c.a.createElement(E,Object(n.a)({},g,{className:d}))};v.propTypes=p,v.defaultProps={tag:"ul",vertical:!1},a.a=v},798:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(0),c=t.n(r),s=t(1),o=t.n(s),i=t(3),m=t.n(i),u=t(787),p=t(4),v={tag:p.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,r=Object(p.omit)(this.props,Object.keys(v)),s=Object(p.mapToCssModules)(m()("tab-content",a),t);return c.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(l,Object(n.a)({},r,{className:s})))},a}(r.Component);a.a=b,b.propTypes=v,b.defaultProps={tag:"div"}},799:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(5),l=t(6),r=t(0),c=t.n(r),s=t(1),o=t.n(s),i=t(3),m=t.n(i),u=t(787),p=t(4),v={tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function b(e){var a=e.className,t=e.cssModule,r=e.tabId,s=e.tag,o=Object(l.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(p.mapToCssModules)(m()("tab-pane",a,{active:r===e}),t)};return c.a.createElement(u.a.Consumer,null,(function(e){var a=e.activeTabId;return c.a.createElement(s,Object(n.a)({},o,{className:i(a)}))}))}b.propTypes=v,b.defaultProps={tag:"div"}},902:function(e,a,t){"use strict";var n=t(12),l=t(13),r=t(15),c=t(14),s=t(0),o=t.n(s),i=t(185),m=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},o.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?o.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},o.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,o.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?o.a.createElement("div",{className:"chip-closable",onClick:function(a){return e.closeChip(a)}},this.props.closableIcon?this.props.closableIcon:o.a.createElement(i.a,null)):null))}}]),t}(o.a.Component);a.a=m}}]);
//# sourceMappingURL=82.d109e469.chunk.js.map