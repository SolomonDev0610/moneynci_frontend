(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[114],{1023:function(e,t,a){e.exports=a.p+"static/media/contract_logo.8446b258.jpg"},1024:function(e,t,a){},2135:function(e,t,a){"use strict";a.r(t);var n=a(42),l=a(804),i=a.n(l),s=a(2),r=a(805),c=a(12),d=a(13),o=a(15),m=a(14),p=a(0),u=a.n(p),h=(a(852),a(1355)),g=a(1356),y=a(953),b=a(793),E=a(954),f=a(171),v=a(1357),x=a(1360),C=a(1233),k=a.n(C),T=a(788),V=a(1023),N=a.n(V),w=(a(1024),a(41)),A=a.n(w),L=(a(792),a(88)),q=(a(21),{c1:!1,c2:!0,c3:!0,c4:!1,c5:!0,c6:!0,c7:!0,cnb2:!1,cnb4:!0,cnb5:!1,cc5:!1,nb1:"5",nb2:"1",nb4:"0",nb5:"10",p2:"1500",p3:"1500",p4:"1500",p5:"1500",p6:"1500",p7:"1500",TVAP:"20",fp1:"75",fp2:"25"}),F=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={rowData:[],perso:[],services:[],activeTab:"1",formValues:{c1:!1,c2:!0,c3:!0,c4:!1,c5:!0,c6:!0,c7:!0,cnb2:!1,cnb4:!0,cnb5:!1,cc5:!1}},e.handleFieldChange=function(t,a){q[t]=a,e.state.formValues[t]=a,"fp1"==t&&(e.state.formValues.fp2=100-a,q.fp2=a),"fp2"==t&&(e.state.formValues.fp1=100-a,q.fp1=a),e.setState({formValues:e.state.formValues}),e.calculate()},e.handleCheckChange=function(t,a){q[a]=t,e.state.formValues[a]=t,e.setState({formValues:e.state.formValues}),e.calculate()},e.calculate=function(){var t=1+q.TVAP/100,a=0;q.c1&&(a=Math.trunc(260/60*parseInt(e.state.formValues.nb1,10))),e.state.formValues.nbHT1=a,e.state.formValues.TTC1=a*t;var n=0;q.c2&&(n=q.p2),e.state.formValues.HT2=n;var l=0;q.c2&&q.cnb2&&(l=300*q.nb2),e.state.formValues.nbHT2=l,e.state.formValues.TTC2=(parseInt(n)+parseInt(l))*t;var i=0;q.c3&&(i=q.p3),e.state.formValues.HT3=i;var s=0;q.c4&&(s=q.p4),e.state.formValues.HT4=s,e.state.formValues.TTC4=(parseInt(i)+parseInt(s))*t;var r=0;q.cnb4&&(r=850*q.nb4),e.state.formValues.nbHT4=r,e.state.formValues.TTC34=(parseInt(i)+parseInt(s)+parseInt(r))*t;var c=0,d=0;q.c5&&!q.cc5&&(c=q.p5),q.c5&&q.cnb5&&(d=750*q.nb5),e.state.formValues.HT5=c,e.state.formValues.nbHT5=d,e.state.formValues.TTC5=Math.trunc((parseInt(c)+parseInt(d))*t);var o=0;q.c6&&(o=q.p6),e.state.formValues.HT6=o,e.state.formValues.TTC6=parseInt(o)*t;var m=0;q.c7&&(m=q.p7),e.state.formValues.HT7=m,e.state.formValues.TTC7=parseInt(m)*t;var p=parseInt(a)+parseInt(n)+parseInt(l)+parseInt(i)+parseInt(s)+parseInt(r)+parseInt(c)+parseInt(d)+parseInt(o)+parseInt(m);e.state.formValues.TOTALHT=p,e.state.formValues.TVA=Math.trunc(p*q.TVAP/100),e.state.formValues.TOTALTTC=Math.trunc(p*t);var u=q.fp1/100,h=1-q.fp1/100;e.state.formValues.FINAL75=Math.trunc(p*t*u)+".00",e.state.formValues.FINAL25=Math.trunc(p*t*h)+".00",e.setState({formValues:e.state.formValues})},e.sendForm=function(){var t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},a={};a.values=JSON.stringify(e.state.formValues),A.a.put("http://localhost:8000/api/contract_templates/1",a,t).then((function(e){L.f.success("Template Saved Successfully",{position:L.f.POSITION.TOP_CENTER,autoClose:2e3})})).catch((function(e){L.f.error("API injoignable"+e)}))},e}return Object(d.a)(a,[{key:"ifExist",value:function(e){return this.state.perso?this.state.perso[e]:"N/a"}},{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},A.a.get("http://localhost:8000/api/get_template/1",t).then((function(e){if(null!=e.data){var t=JSON.parse(e.data.values);a.setState({formValues:t}),q=Object(s.a)({},t),a.calculate()}else console.log("Values are empty!")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(T.a,{breadCrumbTitle:"Contract Template",breadCrumbParent:"Pages",breadCrumbActive:"Contract template"}),u.a.createElement(h.a,null,u.a.createElement(g.a,{className:"mb-1 contract-header",md:"5",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(b.a,{placeholder:"Email"}),u.a.createElement(E.a,{addonType:"append"},u.a.createElement(f.a.Ripple,{color:"primary",outline:!0},"Send Contract")))),u.a.createElement(g.a,{className:"d-flex flex-column flex-md-row justify-content-end contract-header mb-1",md:"7",sm:"12"},u.a.createElement(f.a,{className:"mr-1 mb-md-0 mb-1",color:"primary",onClick:function(){e.sendForm()}},"Save Contract Template")),u.a.createElement(g.a,{className:"contract-wrapper",sm:"10",style:{marginLeft:"auto",marginRight:"auto",marginTop:"30px"}},u.a.createElement(v.a,{className:"contract-page",style:{padding:"1.5rem 2.5rem 2.2rem 2.5rem"}},u.a.createElement(x.a,null,u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"12",sm:"12"},u.a.createElement("img",{src:N.a,alt:"logo",style:{height:"100px"}}))),u.a.createElement("div",{style:{display:"flex"}},u.a.createElement("table",{className:"tableCSS",style:{textAlign:"left",fontSize:"12px",marginTop:"30px"}},u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingTop:"20px"}},u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"9",sm:"12",style:{paddingRight:0}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.c1,onChange:function(t){return e.handleCheckChange(t,"c1")}})),u.a.createElement("div",{className:"bold-black width-85",style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-caption",value:this.state.formValues.title1,onChange:function(t){return e.handleFieldChange("title1",t.target.value)},required:!0}))),u.a.createElement(g.a,{md:"3",sm:"12",style:{paddingLeft:0,marginTop:"-5px"}},u.a.createElement("div",{className:"bold-black",style:{display:"inline-block"}},"Nb mm:"),u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-text",value:this.state.formValues.nb1,onChange:function(t){return e.handleFieldChange("nb1",t.target.value)},required:!0})))),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent1-1"],onChange:function(t){return e.handleFieldChange("subcontent1-1",t.target.value)},required:!0})),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent1-2"],onChange:function(t){return e.handleFieldChange("subcontent1-2",t.target.value)},required:!0}))),u.a.createElement("td",{width:"25%",style:{paddingTop:"15px"}},u.a.createElement(h.a,null,u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"45px",textAlign:"center"}}," Total"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.nbHT1," \u20ac")),u.a.createElement(h.a,{style:{marginTop:"5px"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"45px"}}),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," TTC"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TTC1," \u20ac")))),u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingBottom:0}},u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"9",sm:"12",style:{paddingRight:0}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.c2,onChange:function(t){return e.handleCheckChange(t,"c2")}})),u.a.createElement("div",{className:"bold-black width-85",style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-caption",value:this.state.formValues.title2,onChange:function(t){return e.handleFieldChange("title2",t.target.value)},required:!0}))),u.a.createElement(g.a,{md:"3",sm:"12",style:{paddingLeft:0,marginTop:"-5px"}},u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-text2",style:{fontWeight:"bold"},value:this.state.formValues.p2,onChange:function(t){return e.handleFieldChange("p2",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"5px",paddingTop:"10px"}},"\u20ac HT"))),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent2-1"],onChange:function(t){return e.handleFieldChange("subcontent2-1",t.target.value)},required:!0}))),u.a.createElement("td",{width:"25%",style:{paddingBottom:0}},u.a.createElement(h.a,{style:{verticalAlign:"top",marginTop:"15px"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"45px",textAlign:"center"}}," Total"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.HT2," \u20ac")),u.a.createElement("br",null),u.a.createElement("br",null))),u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"2",style:{paddingTop:"0"}},u.a.createElement(h.a,{style:{borderBottom:"2px dashed #827b7b",width:"90%",float:"right"}},u.a.createElement("div",{style:{display:"inline-block",width:"70%"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.cnb2,onChange:function(t){return e.handleCheckChange(t,"cnb2")}})),u.a.createElement("div",{style:{display:"inline-block",width:"65%"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent2-2"],onChange:function(t){return e.handleFieldChange("subcontent2-2",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"30px",verticalAlign:"top",marginTop:"5px"}},"Nb:"),u.a.createElement("div",{style:{display:"inline-block",paddingTop:"3px",verticalAlign:"top"}},u.a.createElement(b.a,{type:"text",className:"contract-text",style:{fontWeight:"bold",height:"20px"},value:this.state.formValues.nb2,onChange:function(t){return e.handleFieldChange("nb2",t.target.value)},required:!0}))),u.a.createElement("div",{style:{display:"inline-block",width:"30%"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"55px"}}),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.nbHT2," \u20ac"))))),u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingBottom:0,paddingTop:0}}),u.a.createElement("td",{width:"25%",style:{paddingBottom:0,paddingTop:0}},u.a.createElement(h.a,{style:{verticalAlign:"top"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"47px",textAlign:"center"}}," "),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," TTC"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TTC2," \u20ac")))),u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingBottom:0}},u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"9",sm:"12",style:{paddingRight:0}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.c3,onChange:function(t){return e.handleCheckChange(t,"c3")}})),u.a.createElement("div",{className:"bold-black width-85",style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-caption",value:this.state.formValues.title3,onChange:function(t){return e.handleFieldChange("title3",t.target.value)},required:!0}))),u.a.createElement(g.a,{md:"3",sm:"12",style:{paddingLeft:0,marginTop:"-5px"}},u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-text2",style:{fontWeight:"bold"},value:this.state.formValues.p3,onChange:function(t){return e.handleFieldChange("p3",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"5px",paddingTop:"10px"}},"\u20ac HT")))),u.a.createElement("td",{width:"25%",style:{paddingBottom:0}},u.a.createElement(h.a,{style:{verticalAlign:"top"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"47px",textAlign:"center"}}," Total"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.HT3," \u20ac")))),u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingBottom:0}},u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"9",sm:"12",style:{paddingRight:0}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.c4,onChange:function(t){return e.handleCheckChange(t,"c4")}})),u.a.createElement("div",{className:"bold-black width-85",style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-caption",value:this.state.formValues.title4,onChange:function(t){return e.handleFieldChange("title4",t.target.value)},required:!0}))),u.a.createElement(g.a,{md:"3",sm:"12",style:{paddingLeft:0,marginTop:"-5px"}},u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-text2",style:{fontWeight:"bold"},value:this.state.formValues.p4,onChange:function(t){return e.handleFieldChange("p4",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"5px",paddingTop:"10px"}},"\u20ac HT"))),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent4-1"],onChange:function(t){return e.handleFieldChange("subcontent4-1",t.target.value)},required:!0})),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent4-2"],onChange:function(t){return e.handleFieldChange("subcontent4-2",t.target.value)},required:!0})),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent4-3"],onChange:function(t){return e.handleFieldChange("subcontent4-3",t.target.value)},required:!0})),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent4-4"],onChange:function(t){return e.handleFieldChange("subcontent4-4",t.target.value)},required:!0})),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent4-5"],onChange:function(t){return e.handleFieldChange("subcontent4-5",t.target.value)},required:!0})),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent4-6"],onChange:function(t){return e.handleFieldChange("subcontent4-6",t.target.value)},required:!0}))),u.a.createElement("td",{width:"25%",style:{paddingBottom:0}},u.a.createElement(h.a,{style:{verticalAlign:"top",marginTop:"8px"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"47px",textAlign:"center"}}," Total"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.HT4," \u20ac")),u.a.createElement(h.a,{style:{verticalAlign:"top",marginTop:"3px"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"47px",textAlign:"center"}}," "),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," TTC"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TTC4," \u20ac")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null))),u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"2",style:{paddingTop:"0"}},u.a.createElement(h.a,{style:{borderBottom:"2px dashed #827b7b",width:"90%",float:"right"}},u.a.createElement("div",{style:{display:"inline-block",width:"70%"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.cnb4,onChange:function(t){return e.handleCheckChange(t,"cnb4")}})),u.a.createElement("div",{style:{display:"inline-block",width:"65%"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent4-7"],onChange:function(t){return e.handleFieldChange("subcontent4-7",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"30px",verticalAlign:"top",marginTop:"5px"}},"Nb:"),u.a.createElement("div",{style:{display:"inline-block",paddingTop:"3px",verticalAlign:"top"}},u.a.createElement(b.a,{type:"text",className:"contract-text",style:{fontWeight:"bold",height:"20px"},value:this.state.formValues.nb4,onChange:function(t){return e.handleFieldChange("nb4",t.target.value)},required:!0}))),u.a.createElement("div",{style:{display:"inline-block",width:"30%"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"55px"}}),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.nbHT4," \u20ac"))))),u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingBottom:0,paddingTop:0}}),u.a.createElement("td",{width:"25%",style:{paddingBottom:0,paddingTop:0}},u.a.createElement(h.a,{style:{verticalAlign:"top"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"50px",textAlign:"center"}}," "),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," TTC"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TTC34," \u20ac")))),u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingBottom:0}},u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"9",sm:"12",style:{paddingRight:0}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.c5,onChange:function(t){return e.handleCheckChange(t,"c5")}})),u.a.createElement("div",{className:"bold-black width-85",style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-caption",value:this.state.formValues.title5,onChange:function(t){return e.handleFieldChange("title5",t.target.value)},required:!0}))),u.a.createElement(g.a,{md:"3",sm:"12",style:{paddingLeft:0,marginTop:"-5px"}},u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-text2",style:{fontWeight:"bold"},value:this.state.formValues.p5,onChange:function(t){return e.handleFieldChange("p5",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"5px",paddingTop:"10px"}},"\u20ac HT"))),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent5-1"],onChange:function(t){return e.handleFieldChange("subcontent5-1",t.target.value)},required:!0}))),u.a.createElement("td",{width:"25%",style:{paddingBottom:0}},u.a.createElement(h.a,{style:{verticalAlign:"top"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"50px",textAlign:"center"}}," Total"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.HT5," \u20ac")),u.a.createElement("br",null))),u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"2",style:{paddingTop:"0"}},u.a.createElement(h.a,{style:{borderBottom:"2px dashed #827b7b",width:"90%",float:"right"}},u.a.createElement("div",{style:{display:"inline-block",width:"70%"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.cnb5,onChange:function(t){return e.handleCheckChange(t,"cnb5")}})),u.a.createElement("div",{style:{display:"inline-block",width:"65%"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent5-2"],onChange:function(t){return e.handleFieldChange("subcontent5-2",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"30px",verticalAlign:"top",marginTop:"5px"}},"Nb:"),u.a.createElement("div",{style:{display:"inline-block",paddingTop:"3px",verticalAlign:"top"}},u.a.createElement(b.a,{type:"text",className:"contract-text",style:{fontWeight:"bold",height:"20px"},value:this.state.formValues.nb5,onChange:function(t){return e.handleFieldChange("nb5",t.target.value)},required:!0}))),u.a.createElement("div",{style:{display:"inline-block",width:"30%"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"57px"}}),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.nbHT5," \u20ac"))))),u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingBottom:0,paddingTop:0}},u.a.createElement("div",{style:{display:"inline-block",width:"90%"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent5-3"],onChange:function(t){return e.handleFieldChange("subcontent5-3",t.target.value)},required:!0})),u.a.createElement("div",{style:{display:"inline-block",marginLeft:"10px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.cc5,onChange:function(t){return e.handleCheckChange(t,"cc5")}}))),u.a.createElement("td",{width:"25%",style:{paddingBottom:0,paddingTop:0}},u.a.createElement(h.a,{style:{verticalAlign:"top"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"50px",textAlign:"center"}}," "),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," TTC"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TTC5," \u20ac")))),u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingBottom:0}},u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"9",sm:"12",style:{paddingRight:0}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.c6,onChange:function(t){return e.handleCheckChange(t,"c6")}})),u.a.createElement("div",{className:"bold-black width-85",style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-caption",value:this.state.formValues.title6,onChange:function(t){return e.handleFieldChange("title6",t.target.value)},required:!0}))),u.a.createElement(g.a,{md:"3",sm:"12",style:{paddingLeft:0,marginTop:"-5px"}},u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-text2",style:{fontWeight:"bold"},value:this.state.formValues.p6,onChange:function(t){return e.handleFieldChange("p6",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"5px",paddingTop:"10px"}},"\u20ac HT"))),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent6-1"],onChange:function(t){return e.handleFieldChange("subcontent6-1",t.target.value)},required:!0}))),u.a.createElement("td",{width:"25%",style:{paddingBottom:0}},u.a.createElement(h.a,{style:{verticalAlign:"top"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"50px",textAlign:"center"}}," Total"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.HT6," \u20ac")),u.a.createElement(h.a,{style:{verticalAlign:"top"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"52px",textAlign:"center"}}," "),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," TTC"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TTC6," \u20ac")))),u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingBottom:"30px"}},u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"9",sm:"12",style:{paddingRight:0}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.a.createElement(k.a,{label:"",checked:this.state.formValues.c7,onChange:function(t){return e.handleCheckChange(t,"c7")}})),u.a.createElement("div",{className:"bold-black width-85",style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-caption",value:this.state.formValues.title7,onChange:function(t){return e.handleFieldChange("title7",t.target.value)},required:!0}))),u.a.createElement(g.a,{md:"3",sm:"12",style:{paddingLeft:0,marginTop:"-5px"}},u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-text2",style:{fontWeight:"bold"},value:this.state.formValues.p7,onChange:function(t){return e.handleFieldChange("p7",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"5px",paddingTop:"10px"}},"\u20ac HT"))),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["subcontent7-1"],onChange:function(t){return e.handleFieldChange("subcontent67-1",t.target.value)},required:!0}))),u.a.createElement("td",{width:"25%",style:{paddingBottom:"30px"}},u.a.createElement(h.a,{style:{verticalAlign:"top"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"52px",textAlign:"center"}}," Total"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.HT7," \u20ac")),u.a.createElement(h.a,{style:{verticalAlign:"top"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"53px",textAlign:"center"}}," "),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}}," TTC"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TTC7," \u20ac"))))),u.a.createElement("div",{class:"vertical-line"})),u.a.createElement("div",{style:{display:"flex"}},u.a.createElement("table",{className:"tableCSS",style:{textAlign:"left",fontSize:"12px",marginTop:"30px"}},u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingTop:"20px",borderRight:"2px solid #8d8d8d"}},u.a.createElement("div",{style:{marginLeft:"30px",fontStyle:"italic"},className:"bold-black"},u.a.createElement("u",null,u.a.createElement(b.a,{type:"text",className:"contract-caption",style:{fontStyle:"italic"},value:this.state.formValues["table2-title"],onChange:function(t){return e.handleFieldChange("table2-title",t.target.value)},required:!0}))),u.a.createElement("div",{style:{marginLeft:"30px"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["table2-subcontent1"],onChange:function(t){return e.handleFieldChange("table2-subcontent1",t.target.value)},required:!0}),u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["table2-subcontent2"],onChange:function(t){return e.handleFieldChange("table2-subcontent2",t.target.value)},required:!0})),u.a.createElement("br",null),u.a.createElement("br",null)),u.a.createElement("td",{width:"25%",style:{paddingTop:"15px",borderLeft:"2px solid #8d8d8d"}},u.a.createElement(h.a,null,u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"52px"}},"TOTAL"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}},"HT"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TOTALHT," \u20ac")),u.a.createElement(h.a,{style:{marginTop:"5px"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"52px"}},"TVA"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}},u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-text2",style:{width:"20px"},value:this.state.formValues.TVAP,onChange:function(t){return e.handleFieldChange("TVAP",t.target.value)},required:!0})),u.a.createElement("div",{style:{display:"inline-block"}},"%")),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TVA," \u20ac")),u.a.createElement(h.a,{style:{marginTop:"5px"}},u.a.createElement("div",{style:{display:"inline-block",marginLeft:"40px",width:"52px"}},"TOTAL"),u.a.createElement("div",{style:{display:"inline-block",width:"40px",textAlign:"center"}},"TTC"),u.a.createElement("div",{style:{display:"inline-block"},className:"contract-div"},this.state.formValues.TOTALTTC," \u20ac")))))),u.a.createElement("div",{style:{display:"flex"}},u.a.createElement("table",{className:"tableCSS",style:{textAlign:"left",fontSize:"12px",marginTop:"30px"}},u.a.createElement("tr",null,u.a.createElement("td",{width:"75%",style:{paddingTop:"20px",borderRight:"2px solid #8d8d8d"}},u.a.createElement("div",{style:{marginLeft:"30px",fontStyle:"italic"},className:"bold-black"},u.a.createElement("u",null,u.a.createElement(b.a,{type:"text",className:"contract-caption",style:{fontStyle:"italic"},value:this.state.formValues["table3-title"],onChange:function(t){return e.handleFieldChange("table3-title",t.target.value)},required:!0}))),u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"9",sm:"12",style:{paddingRight:0}},u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"30px",width:"50%"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["table3-subcontent1"],onChange:function(t){return e.handleFieldChange("table3-subcontent1",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues.fp1,onChange:function(t){return e.handleFieldChange("fp1",t.target.value)},required:!0,style:{width:"45px"}})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block"}},"%")),u.a.createElement(g.a,{md:"3",sm:"12",style:{paddingLeft:0,marginTop:"5px"}},u.a.createElement("div",Object(n.a)({style:{display:"inline-block"},className:"contract-div"},"style",{width:"80px"}),this.state.formValues.FINAL75," \u20ac"))),u.a.createElement(h.a,null,u.a.createElement(g.a,{md:"9",sm:"12",style:{paddingRight:0}},u.a.createElement("div",{className:"bold-black",style:{display:"inline-block",marginLeft:"30px",width:"50%"}},u.a.createElement(b.a,{type:"text",className:"contract-subcontent",value:this.state.formValues["table3-subcontent2"],onChange:function(t){return e.handleFieldChange("table3-subcontent2",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block"}},u.a.createElement(b.a,{type:"text",style:{width:"45px"},className:"contract-subcontent",value:this.state.formValues.fp2,onChange:function(t){return e.handleFieldChange("fp2",t.target.value)},required:!0})),u.a.createElement("div",{className:"bold-black",style:{display:"inline-block"}},"%")),u.a.createElement(g.a,{md:"3",sm:"12",style:{paddingLeft:0,marginTop:"5px"}},u.a.createElement("div",Object(n.a)({style:{display:"inline-block"},className:"contract-div"},"style",{width:"85px"}),this.state.formValues.FINAL25," \u20ac")))),u.a.createElement("td",{width:"25%",style:{paddingTop:"15px",borderLeft:"2px solid #8d8d8d"}},u.a.createElement("div",{style:{fontStyle:"italic"},className:"bold-black"},u.a.createElement("u",null,"Date & signature du client:")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null))))),u.a.createElement("div",{className:"text-left pt-3 contract-footer"},u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement("h1",null,"Conditions G\xe9n\xe9rales de ventes de ",this.ifExist("first_name")," ",this.ifExist("last_name"))),u.a.createElement("p",null,"Le Client dispose de 2 jours apr\xe8s la date figurant sur le Contrat de Prestations Retraite pour annuler sa commande aupr\xe8s d\u2019E.O.R. Pass\xe9 ce d\xe9lai, et apr\xe8s avoir re\xe7u les premi\xe8res correspondances destin\xe9es aux Caisses de Retraite, le dossier est consid\xe9r\xe9 comme engag\xe9 et le Client ne peut plus interrompre le Contrat de Prestations Retraite conclu : les premi\xe8res correspondances \xe9tant d\xe9cisives pour la pr\xe9sentation et les orientations d'un dossier."),u.a.createElement("p",null,"Chaque prestation correspond \xe0 une mission pr\xe9cise d\xe9crite sur le Contrat de Prestation Retraite. Toute intervention de conseil de la part d\u2019E.O.R qui sort du cadre d\xe9crit par le pr\xe9sent contrat fera l\u2019objet d\u2019un devis et d\u2019une facturation compl\xe9mentaire."),u.a.createElement("p",null,"E.O.R effectue pour le compte de ses Clients toutes les d\xe9marches et op\xe9rations qu'elle juge utile pour le bon d\xe9veloppement de la mission qui lui est confi\xe9e, et ce, jusqu'au terme de cette derni\xe8re. La prestation \"Montage D\xe9part en Retraite Anticip\xe9\" est ind\xe9pendante de l'Audit Retraite et ne permet donc pas au client de b\xe9n\xe9ficier d'une reconstitution de carri\xe8re compl\xe8te au sens de l'Audit Retraite, elle n'assure pas non plus le Traitement des Formalit\xe9s de D\xe9part en Retraite. La prestation \"Traitement des Formalit\xe9s de D\xe9part en Retraite\" n'inclut pas les recours \xe9ventuels et ult\xe9rieurs \xe0 effectuer envers les Caisses de Retraite en cas d'erreurs de ces derni\xe8res."),u.a.createElement("p",null,"Le Client doit imp\xe9rativement fournir les notifications de versement des pensions de la part des Caisses de Retraite d\xe8s qu'il les re\xe7oit, afin qu\u2019EOR puisse intervenir avant le d\xe9lai de recours impos\xe9 par les Caisses de Retraite qui est de 2 mois, si une anomalie est constat\xe9e. Faute de quoi la responsabilit\xe9 d\u2019EOR ne saurait \xeatre engag\xe9e"),u.a.createElement("p",null,"Les actions effectu\xe9es par EOR aupr\xe8s des Caisses de Retraite sont totalement transparentes et doivent \xeatre sign\xe9es par le Client avant d'\xeatre transmises aux Caisses de Retraite. EOR n'est pas responsable des modifications que le client pourrait effectuer sur les correspondances destin\xe9es aux Caisses de Retraite, ni des interventions t\xe9l\xe9phoniques effectu\xe9es par le client directement aupr\xe8s des Caisses de Retraite, sans en r\xe9f\xe9rer \xe0 EOR."),u.a.createElement("p",null,"Les honoraires per\xe7us par EOR concernent les actions entreprises \xe0 l'\xe9gard des caisses priv\xe9es et ne concernent pas le R\xe9gime G\xe9n\xe9ral de la S\xe9curit\xe9 Sociale (CNAV, CNAVTS, CRAM), EOR donnant ses conseils gratuitement et \xe0 titre indicatif envers cette derni\xe8re Institution. EOR agit en fonction des informations et des documents fournis par le client."),u.a.createElement("p",null,"EOR n'est pas responsable des d\xe9lais impos\xe9s par les Caisses de Retraite, et effectue ses relances, si elle le juge utile pour le dossier, selon le d\xe9lai usuel de deux mois sans r\xe9ponse de la part d'une Caisse de Retraite. Pour toutes les contestations relatives aux prestations r\xe9alis\xe9es par EOR et \xe0 l\u2019application ou \xe0 l\u2019interpr\xe9tation des pr\xe9sentes Conditions G\xe9n\xe9rale de Vente, seul sera comp\xe9tent le Tribunal de Commerce de Paris pour les personnes morales, et le Tribunal d\u2019Instance de Paris pour les personnes physiques."),u.a.createElement("p",null,"Toutes les prestations fournies par E.O.R sont soumises \xe0 la loi fran\xe7aise."),u.a.createElement("p",null,"A la fin de la prestation, le client est tenu de r\xe9cup\xe9rer tous les documents le concernant et ceux produits durant la mission faute de quoi le cabinet se r\xe9serve le droit de d\xe9truire les pi\xe8ces du dossier apr\xe8s 6 mois de conservation dans ses locaux.")),u.a.createElement("div",{className:"text-right pt-3 contract-footer"},u.a.createElement("p",null,"EOR - 36, RUE DE LABORDE 75008 PARIS  - SIRET N\xb0 48488721100023 - APE N\xb0 7022Z")))))))}}]),a}(u.a.Component);t.default=F},792:function(e,t,a){"use strict";var n=a(12),l=a(13),i=a(15),s=a(14),r=a(0),c=a.n(r),d=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),a}(c.a.Component);t.a=d}}]);
//# sourceMappingURL=114.b11944cd.chunk.js.map