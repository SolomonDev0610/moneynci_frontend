(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[117,10],{2099:function(e,t,a){"use strict";a.r(t);var n=a(804),l=a.n(n),r=a(805),i=a(42),o=a(12),s=a(13),c=a(15),d=a(14),m=a(0),u=a.n(m),p=a(171),f=a(1355),h=a(1356),v=a(1357),E=a(1358),g=a(1359),A=a(836),S=a(1360),b=a(868),C=a(795),w=a(807),N=a(793),y=a(777),D=a(781),k=a(778),z=a(776),x=a(1354),O=a(41),B=a.n(O),T=a(162),R=a(878),F=a(424),_=a(250),j=a(386),I=a(185),V=a(376),L=a(188),M=a(3),G=a.n(M),P=a(21),U=(a(835),a(824),a(860)),Q=a.n(U),H=(a(983),a(88)),J=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={defaultAlert:!1,confirmAlert:!1,cancelAlert:!1,IdToDelete:0,rowData:null,pageSize:20,isVisible:!0,reload:!1,collapse:!1,status:"Opened",role:"All",selectStatus:"All",verified:"All",department:"All",defaultColDef:{sortable:!0},searchVal:"",columnDefs:[{headerName:"Nom de la sous-prestation",field:"name",filter:!0,editable:!0,checkboxSelection:!0,headerCheckboxSelection:!0,width:400,pinned:window.innerWidth>992&&"left"},{headerName:"\u20ac HT",field:"value",width:150,filter:!0,editable:!0,headerCheckboxSelectionFilteredOnly:!0},{headerName:"Nombre",field:"value1",width:150,filter:!0,editable:!0,headerCheckboxSelectionFilteredOnly:!0},{headerName:"Total HT",field:"total_ht",editable:!0,filter:!0,width:150},{headerName:"Description",field:"description",filter:!0,editable:!0,width:400},{headerName:"Total TTC",field:"total_ttc",editable:!0,filter:!0,width:150},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(F.a,{size:15,onClick:function(){e.handleAlert("defaultAlert",!0,t.data.id)}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi},e.onCellEditingStopped=function(e){var t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};console.log(e),B.a.put(global.config.server_url + "/services/"+e.data.id,{name:e.data.name,description:e.data.description,variable:e.data.variable,value:e.data.value,variable1:e.data.variable1,value1:e.data.value1,total_ht:e.data.total_ht,total_ttc:e.data.total_ttc,parent_id:e.data.parent_id,tva:e.data.tva,document_id:0,status:"template"},t).then((function(e){console.log(e)})).catch((function(e){H.f.error("API injoignable")}))},e.filterData=function(t,a){var n=null;"all"!==a&&(n={type:"equals",filter:a}),e.gridApi.getFilterInstance(t).setModel(n),e.gridApi.onFilterChanged()},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({pageSize:t}))},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t),e.setState({searchVal:t})},e.refreshCard=function(){e.setState({reload:!0}),setTimeout((function(){e.setState({reload:!1,role:"All",selectStatus:"All",verified:"All",department:"All"})}),500)},e.toggleCollapse=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.onEntered=function(){e.setState({status:"Opened"})},e.onEntering=function(){e.setState({status:"Opening..."})},e.onEntered=function(){e.setState({status:"Opened"})},e.onExiting=function(){e.setState({status:"Closing..."})},e.onExited=function(){e.setState({status:"Closed"})},e.removeCard=function(){e.setState({isVisible:!1})},e.handleAlert=function(t,a,n){if(e.setState(Object(i.a)({},t,a)),0!=n&&e.setState({IdToDelete:n}),"confirmAlert"===t&&!0===a){e.deleteUser(e.state.IdToDelete);var l=e.gridApi.getSelectedRows();e.gridApi.updateRowData({remove:l})}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(l.a.mark((function e(){var t,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,B.a.get(global.config.server_url + "/services/template",t).then((function(e){var t=e.data,n=[],l=a.props.match.params.id;t.forEach((function(e){e.parent_id==l&&n.push(e)})),a.setState({rowData:n})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteUser",value:function(e){var t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};B.a.delete(global.config.server_url + "/services/"+e,t).then((function(e){}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,l=t.defaultColDef,r=t.pageSize;return u.a.createElement("div",null,u.a.createElement(Q.a,{title:"\xcates vous s\xfbrs?",warning:!0,show:this.state.defaultAlert,showCancel:!0,reverseButtons:!0,cancelBtnBsStyle:"danger",confirmBtnText:"Oui, supprimer",cancelBtnText:"Annuler",onConfirm:function(){e.handleAlert("basicAlert",!1,0),e.handleAlert("confirmAlert",!0,0)},onCancel:function(){e.handleAlert("basicAlert",!1,0),e.handleAlert("cancelAlert",!0,0)}},"Vous ne pourrez pas revenir en arri\xe8re"),u.a.createElement(Q.a,{success:!0,title:"Supprim\xe9!",confirmBtnBsStyle:"success",show:this.state.confirmAlert,onConfirm:function(){e.handleAlert("defaultAlert",!1,0),e.handleAlert("confirmAlert",!1,0)}},u.a.createElement("p",{className:"sweet-alert-text"},"Your file has been deleted.")),u.a.createElement(Q.a,{error:!0,title:"Annul\xe9!",confirmBtnBsStyle:"success",show:this.state.cancelAlert,onConfirm:function(){e.handleAlert("defaultAlert",!1,0),e.handleAlert("cancelAlert",!1,0)}},u.a.createElement("p",{className:"sweet-alert-text"},"L'action est annul\xe9")),u.a.createElement(f.a,{className:"app-user-list"},u.a.createElement(h.a,{sm:"12"},u.a.createElement(v.a,{className:G()("card-action card-reload",{"d-none":!1===this.state.isVisible,"card-collapsed":"Closed"===this.state.status,closing:"Closing..."===this.state.status,opening:"Opening..."===this.state.status,refreshing:this.state.reload})},u.a.createElement(E.a,null,u.a.createElement(g.a,null,"Filters"),u.a.createElement("div",{className:"actions"},u.a.createElement(_.a,{className:"collapse-icon mr-50",size:15,onClick:this.toggleCollapse}),u.a.createElement(j.a,{className:"mr-50",size:15,onClick:function(){e.refreshCard(),e.gridApi.setFilterModel(null)}}),u.a.createElement(I.a,{size:15,onClick:this.removeCard}))),u.a.createElement(A.a,{isOpen:this.state.collapse,onExited:this.onExited,onEntered:this.onEntered,onExiting:this.onExiting,onEntering:this.onEntering},u.a.createElement(S.a,null,this.state.reload?u.a.createElement(b.a,{color:"primary",className:"reload-spinner"}):"",u.a.createElement(f.a,null,u.a.createElement(h.a,{lg:"3",md:"6",sm:"12"},u.a.createElement(C.a,{className:"mb-0"},u.a.createElement(w.a,{for:"role"},"Role"),u.a.createElement(N.a,{type:"select",name:"role",id:"role",value:this.state.role,onChange:function(t){e.setState({role:t.target.value},(function(){return e.filterData("role",e.state.role.toLowerCase())}))}},u.a.createElement("option",{value:"All"},"All"),u.a.createElement("option",{value:"User"},"User"),u.a.createElement("option",{value:"Staff"},"Staff"),u.a.createElement("option",{value:"Admin"},"Admin")))),u.a.createElement(h.a,{lg:"3",md:"6",sm:"12"},u.a.createElement(C.a,{className:"mb-0"},u.a.createElement(w.a,{for:"status"},"Status"),u.a.createElement(N.a,{type:"select",name:"status",id:"status",value:this.state.selectStatus,onChange:function(t){e.setState({selectStatus:t.target.value},(function(){return e.filterData("status",e.state.selectStatus.toLowerCase())}))}},u.a.createElement("option",{value:"All"},"All"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Blocked"},"Blocked"),u.a.createElement("option",{value:"Deactivated"},"Deactivated")))),u.a.createElement(h.a,{lg:"3",md:"6",sm:"12"},u.a.createElement(C.a,{className:"mb-0"},u.a.createElement(w.a,{for:"verified"},"Verified"),u.a.createElement(N.a,{type:"select",name:"verified",id:"verified",value:this.state.verified,onChange:function(t){e.setState({verified:t.target.value},(function(){return e.filterData("is_verified",e.state.verified.toLowerCase())}))}},u.a.createElement("option",{value:"All"},"All"),u.a.createElement("option",{value:"True"},"True"),u.a.createElement("option",{value:"False"},"False")))),u.a.createElement(h.a,{lg:"3",md:"6",sm:"12"},u.a.createElement(C.a,{className:"mb-0"},u.a.createElement(w.a,{for:"department"},"Department"),u.a.createElement(N.a,{type:"select",name:"department",id:"department",value:this.state.department,onChange:function(t){e.setState({department:t.target.value},(function(){return e.filterData("department",e.state.department.toLowerCase())}))}},u.a.createElement("option",{value:"All"},"All"),u.a.createElement("option",{value:"Sales"},"Sales"),u.a.createElement("option",{value:"Development"},"Development"),u.a.createElement("option",{value:"Management"},"Management"))))))))),u.a.createElement(h.a,{sm:"12"},u.a.createElement(v.a,null,u.a.createElement(S.a,null,u.a.createElement("div",{className:"ag-theme-material ag-grid-table"},u.a.createElement("div",{className:"ag-grid-actions d-flex justify-content-between flex-wrap mb-1"},u.a.createElement("div",{className:"sort-dropdown"},u.a.createElement(y.a,{className:"ag-dropdown p-1"},u.a.createElement(D.a,{tag:"div"},"1 - ",r," of 150",u.a.createElement(_.a,{className:"ml-50",size:15})),u.a.createElement(k.a,{right:!0},u.a.createElement(z.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(z.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(z.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(z.a,{tag:"div",onClick:function(){return e.filterSize(150)}},"150")))),u.a.createElement("div",{className:"filter-actions d-flex"},u.a.createElement(N.a,{className:"w-50 mr-1 mb-1 mb-sm-0",type:"text",placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.searchVal}),u.a.createElement("div",null,u.a.createElement(p.a.Ripple,{className:"mr-1 mb-1",outline:!0,color:"primary",onClick:function(){return P.a.push("/app/user/createSubService/"+e.props.match.params.id)}},u.a.createElement(V.a,{size:15}))),u.a.createElement("div",{className:"dropdown mr-1 mb-1 d-inline-block"},u.a.createElement(x.a,null,u.a.createElement(D.a,{color:"primary",caret:!0},"Actions",u.a.createElement(_.a,{size:15})),u.a.createElement(k.a,null,u.a.createElement(z.a,{tag:"a"},u.a.createElement(L.a,{size:15}),u.a.createElement("span",{className:"align-middle ml-50"},"Exemple d'action"))))))),null!==this.state.rowData?u.a.createElement(T.a.Consumer,null,(function(t){return u.a.createElement(R.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:l,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,pivotPanelShow:"always",paginationPageSize:r,resizable:!0,onCellEditingStopped:e.onCellEditingStopped,enableRtl:"rtl"===t.state.direction})})):null))))))}}]),a}(u.a.Component);t.default=J},824:function(e,t,a){},835:function(e,t,a){}}]);
//# sourceMappingURL=117.b1c61b1e.chunk.js.map