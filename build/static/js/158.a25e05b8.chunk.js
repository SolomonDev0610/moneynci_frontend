(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[158],{2100:function(e,t,a){"use strict";a.r(t);var i=a(12),n=a(13),r=a(15),l=a(14),o=a(0),c=a.n(o),d=a(1357),s=a(1360),u=a(777),p=a(781),m=a(778),g=a(776),h=a(171),f=a(878),v=a(162),b=a(250),S=a(41),w=a.n(S),z=(a(835),a(788)),E=a(21),P=a(88),C=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:null,paginationPageSize:20,currentPageSize:50,getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"\u20ac HT",field:"value",width:150,filter:!0,headerCheckboxSelectionFilteredOnly:!0},{headerName:"Nombre",field:"value1",width:150,filter:!0,headerCheckboxSelectionFilteredOnly:!0},{headerName:"Total HT",field:"total_ht",filter:!0,width:150},{headerName:"Nom de la prestation",field:"name",filter:!0,checkboxSelection:!0,headerCheckboxSelection:!0,width:400,pinned:window.innerWidth>992&&"left"},{headerName:"Total TTC",field:"total_ttc",filter:!0,width:150}]},e.onCellEditingStopped=function(e){var t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};w.a.put("http://vps-a1b847f6.vps.ovh.net:8080/api/services/"+e.data.id,{name:e.data.name,description:e.data.description,variable:e.data.variable,value:e.data.value,variable1:e.data.variable1,value1:e.data.value1,total_ht:e.data.total_ht,total_ttc:e.data.total_ttc,tva:e.data.tva,document_id:e.data.document_id,status:"unselected"},t).then((function(e){console.log(e)})).catch((function(e){P.f.error("API injoignable")}))},e.onRowSelected=function(e){var t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};w.a.put("http://vps-a1b847f6.vps.ovh.net:8080/api/services/"+e.data.id,{name:e.data.name,description:e.data.description,variable:e.data.variable,value:e.data.value,variable1:e.data.variable1,value1:e.data.value1,total_ht:e.data.total_ht,total_ttc:e.data.total_ttc,tva:e.data.tva,parent_id:0,document_id:e.data.document_id,status:"selected"},t).then((function(e){console.log(e)})).catch((function(e){P.f.error("API injoignable")}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};w.a.get("http://vps-a1b847f6.vps.ovh.net:8080/api/documents/"+this.props.match.params.id,t).then((function(t){var a=t.data.services;JSON.stringify(a),e.setState({rowData:a})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,i=t.columnDefs,n=t.defaultColDef;return c.a.createElement(c.a.Fragment,null,c.a.createElement(z.a,{breadCrumbTitle:"Prestations",breadCrumbParent:"Prestations",breadCrumbActive:"Prestations"}),c.a.createElement(d.a,{className:"overflow-hidden agGrid-card"},c.a.createElement(s.a,{className:"py-0"},null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-200 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(u.a,{className:"p-1 ag-dropdown"},c.a.createElement(p.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(b.a,{className:"ml-50",size:15})),c.a.createElement(m.a,{right:!0},c.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"export-btn"},c.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(v.a.Consumer,null,(function(t){return c.a.createElement(f.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:i,rowData:a,onCellEditingStopped:e.onCellEditingStopped,onGridReady:e.onGridReady,onRowSelected:e.onRowSelected,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))),c.a.createElement("div",{align:"center"},c.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return E.a.push("/pages/contract/"+e.props.match.params.id)}},"G\xe9n\xe9rer le contrat")))))}}]),a}(c.a.Component);t.default=C}}]);
//# sourceMappingURL=158.a25e05b8.chunk.js.map