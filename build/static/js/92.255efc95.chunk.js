(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[92],{2174:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),s=a(15),i=a(14),r=a(0),c=a.n(r),o=a(1355),m=a(1356),u=a(788),g=a(1357),p=a(1358),v=a(1359),f=a(796),b=a(773),d=a(774),E=a(1360),h=a(798),T=a(799),j=a(295),C=a(266),y=a(3),N=a.n(y),x=a(99),A=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteBasic extends React.Component {\n  state = {\n    suggestions: [\n      {\n        title: "React.js"\n      },\n      {\n        title: "Angular.js"\n      },\n      {\n        title: "Javascript"\n      }\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete suggestions={this.state.suggestions} \n        className="form-control" \n        filterKey="title" \n        suggestionLimit={4} \n        defaultSuggestions={true}\n      />\n    )}}\n\nexport default AutoCompleteBasic\n')),S=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteSections extends React.Component {\n  state = {\n    suggestions: [\n      {\n        groupTitle: "1970s",\n        data: [\n          {\n            title: "C",\n          }\n        ]\n      },\n      {\n        groupTitle: "1980s",\n        data: [\n          {\n            title: "C++",\n          },\n          {\n            title: "Perl",\n          }\n        ]\n      },\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete suggestions={this.state.suggestions} \n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        filterHeaderKey="groupTitle"\n        grouped={true}\n      />\n    )}}\n\nexport default AutoCompleteSections\n')),O=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteAjax extends React.Component {\n  state = {\n    suggestions: []\n  }\n\n  componentDidMount() {\n    axios\n      .get("/api/autocomplete/data")\n      .then(response =>\n        this.setState({ suggestions: response.data.autoComplete })\n      )\n  }\n\n  render() {\n    return(\n        <AutoComplete suggestions={this.state.suggestions} \n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        suggestionLimit={4}\n      />\n    )}}\n\nexport default AutoCompleteAjax\n')),k=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\nimport img1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"\nimport img2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"\nimport img3 from "../../../assets/img/portrait/small/avatar-s-3.jpg"      \nimport img4 from "../../../assets/img/portrait/small/avatar-s-4.jpg"      \nimport img5 from "../../../assets/img/portrait/small/avatar-s-5.jpg"      \nimport img6 from "../../../assets/img/portrait/small/avatar-s-6.jpg"      \n\nclass AutoCompleteRender extends React.Component {\n  state = {\n    suggestions: [\n      {\n        name: "Jake Shelton",\n        img: img1\n      },\n      {\n        name: "Edith Baldwin",\n        img: img2\n      },\n      {\n        name: "Jennifer Wolfe",\n        img: img3\n      },\n      {\n        name: "Emily Washington",\n        img: img4\n      },\n      {\n        name: "Heather Green",\n        img: img6\n      },\n      {\n        name: "Brian Moore",\n        img: img5\n      }\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete\n          suggestions={this.state.suggestions}\n          className="form-control"\n          filterKey="name"\n          customRender={(\n            suggestion,\n            i,\n            filteredData,\n            activeSuggestion,\n            onSuggestionItemClick,\n            onSuggestionItemHover\n          ) => (\n            <li\n              className={classnames("suggestion-item", {\n                active:\n                  filteredData.indexOf(suggestion) === activeSuggestion\n              })}\n              key={i}\n              onMouseEnter={() =>\n                onSuggestionItemHover(filteredData.indexOf(suggestion))\n              }\n              onClick={e => {\n                onSuggestionItemClick(null, e)\n              }}\n            >\n              <img\n                src={suggestion.img}\n                alt={suggestion.name}\n                height="32"\n                width="32"\n                className="mr-1"\n              />\n              <span>{suggestion.name}</span>\n            </li>\n          )}\n        />\n    )}}\n\nexport default AutoCompleteRender\n')),w=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteDefaultSuggestions extends React.Component {\n  state = {\n    suggestions: [\n      {\n        title: "React.js"\n      },\n      {\n        title: "Angular.js"\n      },\n      {\n        title: "Javascript"\n      }\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete\n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        suggestionLimit={4}\n        defaultSuggestions={true}\n      />\n    )}}\n\nexport default AutoCompleteDefaultSuggestions\n')),R=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteSearchLimit extends React.Component {\n  state = {\n    suggestions: [\n      {\n        title: "React.js"\n      },\n      {\n        title: "Angular.js"\n      },\n      {\n        title: "Javascript"\n      }\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete\n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        suggestionLimit={2}\n      />\n    )}}\n\nexport default AutoCompleteSearchLimit\n')),I=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(v.a,null,"Basic"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(j.a,{size:15}))),c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(C.a,{size:15})))))),c.a.createElement(E.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(T.a,{tabId:"1"},c.a.createElement(x.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'"})),c.a.createElement(T.a,{className:"component-code",tabId:"2"},A)))))}}]),a}(c.a.Component),M=a(41),B=a.n(M),P=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;B.a.get("/api/autocomplete/data").then((function(t){return e.setState({suggestions:t.data.autoComplete})}))}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(v.a,null,"Ajax"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(j.a,{size:15}))),c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(C.a,{size:15})))))),c.a.createElement(E.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(T.a,{tabId:"1"},c.a.createElement(x.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Search for any of the top 250 IMDB movies"})),c.a.createElement(T.a,{className:"component-code",tabId:"2"},O)))))}}]),a}(c.a.Component),z=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{groupTitle:"1970s",data:[{title:"C"}]},{groupTitle:"1980s",data:[{title:"C++"},{title:"Perl"}]},{groupTitle:"1990s",data:[{title:"Haskell"},{title:"Python"},{title:"Java"},{title:"Javascript"},{title:"PHP"},{title:"Ruby"}]},{groupTitle:"2000s",data:[{title:"C#"},{title:"Scala"},{title:"Clojure"},{title:"Go"}]},{groupTitle:"2010s",data:[{title:"Elm"}]}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(v.a,null,"Sections"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(j.a,{size:15}))),c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(C.a,{size:15})))))),c.a.createElement(E.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(T.a,{tabId:"1"},c.a.createElement(x.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",filterHeaderKey:"groupTitle",grouped:!0,placeholder:"Type 'c'"})),c.a.createElement(T.a,{className:"component-code",tabId:"2"},S)))))}}]),a}(c.a.Component),L=a(117),H=a.n(L),J=a(89),K=a.n(J),D=a(92),$=a.n(D),F=a(94),W=a.n(F),_=a(543),G=a.n(_),V=a(95),Z=a.n(V),q=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{name:"Jake Shelton",img:H.a},{name:"Edith Baldwin",img:K.a},{name:"Jennifer Wolfe",img:$.a},{name:"Emily Washington",img:W.a},{name:"Heather Green",img:Z.a},{name:"Brian Moore",img:G.a}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(v.a,null,"Custom Render"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(j.a,{size:15}))),c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(C.a,{size:15})))))),c.a.createElement(E.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(T.a,{tabId:"1"},c.a.createElement(x.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"name",placeholder:"Type 'a'",customRender:function(e,t,a,n,l,s){return c.a.createElement("li",{className:N()("suggestion-item",{active:a.indexOf(e)===n}),key:t,onMouseEnter:function(){return s(a.indexOf(e))},onClick:function(e){l(null,e)}},c.a.createElement("img",{src:e.img,alt:e.name,height:"32",width:"32",className:"mr-1"}),c.a.createElement("span",null,e.name))}})),c.a.createElement(T.a,{className:"component-code",tabId:"2"},k)))))}}]),a}(c.a.Component),Q=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(v.a,null,"Default Suggestions"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(j.a,{size:15}))),c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(C.a,{size:15})))))),c.a.createElement(E.a,null,c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(T.a,{tabId:"1"},c.a.createElement(x.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:4,defaultSuggestions:!0,placeholder:"Type 'a'"})),c.a.createElement(T.a,{className:"component-code",tabId:"2"},w)))))}}]),a}(c.a.Component),U=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1",suggestions:[{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{className:"mb-sm-0 mb-5"},c.a.createElement(p.a,null,c.a.createElement(v.a,null,"Search Limit"),c.a.createElement("div",{className:"views"},c.a.createElement(f.a,{tabs:!0},c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},c.a.createElement(j.a,{size:15}))),c.a.createElement(b.a,null,c.a.createElement(d.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},c.a.createElement(C.a,{size:15})))))),c.a.createElement(E.a,{className:"pb-sm-2 pb-5"},c.a.createElement(h.a,{activeTab:this.state.activeTab},c.a.createElement(T.a,{tabId:"1"},c.a.createElement(x.a,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:2,placeholder:"Type 'a'"})),c.a.createElement(T.a,{className:"component-code",tabId:"2"},R)))))}}]),a}(c.a.Component),X=a(791),Y=a.n(X),ee=(a(790),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){Y.a.highlightAll()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{breadCrumbTitle:"Auto Complete",breadCrumbParent:"Extra Components",breadCrumbActive:"Auto Complete"}),c.a.createElement(o.a,null,c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(I,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(z,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(P,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(q,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(Q,null)),c.a.createElement(m.a,{xl:"6",lg:"12"},c.a.createElement(U,null))))}}]),a}(c.a.Component));t.default=ee},787:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),l=a.n(n).a.createContext({})},790:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var a=function e(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||function t(n){for(var l=[],s=0;s<n.length;s++){var i=n[s],r=!1;if("string"!=typeof i&&("tag"===i.type&&i.content[0]&&"tag"===i.content[0].type?"</"===i.content[0].content[0].content?0<l.length&&l[l.length-1].tagName===a(i.content[0].content[1])&&l.pop():"/>"===i.content[i.content.length-1].content||l.push({tagName:a(i.content[0].content[1]),openedBraces:0}):0<l.length&&"punctuation"===i.type&&"{"===i.content?l[l.length-1].openedBraces++:0<l.length&&0<l[l.length-1].openedBraces&&"punctuation"===i.type&&"}"===i.content?l[l.length-1].openedBraces--:r=!0),(r||"string"==typeof i)&&0<l.length&&0===l[l.length-1].openedBraces){var c=a(i);s<n.length-1&&("string"==typeof n[s+1]||"plain-text"===n[s+1].type)&&(c+=a(n[s+1]),n.splice(s+1,1)),0<s&&("string"==typeof n[s-1]||"plain-text"===n[s-1].type)&&(c=a(n[s-1])+c,n.splice(s-1,1),s--),n[s]=new e.Token("plain-text",c,null,c)}i.content&&"string"!=typeof i.content&&t(i.content)}}(t.tokens)}))}(Prism)},796:function(e,t,a){"use strict";var n=a(5),l=a(6),s=a(0),i=a.n(s),r=a(1),c=a.n(r),o=a(3),m=a.n(o),u=a(4),g={tabs:c.a.bool,pills:c.a.bool,vertical:c.a.oneOfType([c.a.bool,c.a.string]),horizontal:c.a.string,justified:c.a.bool,fill:c.a.bool,navbar:c.a.bool,card:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tabs,r=e.pills,c=e.vertical,o=e.horizontal,g=e.justified,p=e.fill,v=e.navbar,f=e.card,b=e.tag,d=Object(l.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),E=Object(u.mapToCssModules)(m()(t,v?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(c),{"nav-tabs":s,"card-header-tabs":f&&s,"nav-pills":r,"card-header-pills":f&&r,"nav-justified":g,"nav-fill":p}),a);return i.a.createElement(b,Object(n.a)({},d,{className:E}))};p.propTypes=g,p.defaultProps={tag:"ul",vertical:!1},t.a=p},798:function(e,t,a){"use strict";var n=a(5),l=a(9),s=a(0),i=a.n(s),r=a(1),c=a.n(r),o=a(3),m=a.n(o),u=a(787),g=a(4),p={tag:g.tagPropType,activeTab:c.a.any,className:c.a.string,cssModule:c.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(l.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.tag,s=Object(g.omit)(this.props,Object.keys(p)),r=Object(g.mapToCssModules)(m()("tab-content",t),a);return i.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(l,Object(n.a)({},s,{className:r})))},t}(s.Component);t.a=v,v.propTypes=p,v.defaultProps={tag:"div"}},799:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(5),l=a(6),s=a(0),i=a.n(s),r=a(1),c=a.n(r),o=a(3),m=a.n(o),u=a(787),g=a(4),p={tag:g.tagPropType,className:c.a.string,cssModule:c.a.object,tabId:c.a.any};function v(e){var t=e.className,a=e.cssModule,s=e.tabId,r=e.tag,c=Object(l.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(g.mapToCssModules)(m()("tab-pane",t,{active:s===e}),a)};return i.a.createElement(u.a.Consumer,null,(function(e){var t=e.activeTabId;return i.a.createElement(r,Object(n.a)({},c,{className:o(t)}))}))}v.propTypes=p,v.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=92.255efc95.chunk.js.map