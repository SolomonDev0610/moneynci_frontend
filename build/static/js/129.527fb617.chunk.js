(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[129],{1232:function(e,t,a){},1878:function(e,t,a){e.exports=a.p+"static/media/eor.360bdee9.png"},2108:function(e,t,a){"use strict";a.r(t);var n=a(804),s=a.n(n),r=a(805),l=a(12),i=a(13),c=a(15),o=a(14),m=a(0),u=a.n(m),d=a(852),p=a.n(d),E=a(1355),h=a(1356),f=a(953),v=a(793),b=a(954),R=a(171),x=a(1357),N=a(1360),C=a(779),g=a(840),y=a(788),O=a(1878),_=a.n(O),T=a(301),A=a(288),S=a(371),D=a(337),P=(a(1232),a(41)),q=a.n(P),w=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={rowData:[],perso:[],services:[],activeTab:"1"},e}return Object(i.a)(a,[{key:"ifExist",value:function(e){return this.state.perso?this.state.perso[e]:"N/a"}},{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},q.a.get("http://vps-a1b847f6.vps.ovh.net:8080/api/documents/"+this.props.match.params.id,t).then((function(e){var n=e.data.services;q.a.get("http://vps-a1b847f6.vps.ovh.net:8080/api/users/"+e.data.user_id,t).then((function(e){var t=e.data,n=e.data.personal_informations;a.setState({rowData:t,perso:n})})),JSON.stringify(n),a.setState({services:n})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disp_services",value:function(){return this.state.services.name.map((function(e){return u.a.createElement("li",null,e)}))}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{breadCrumbTitle:"Invoice",breadCrumbParent:"Pages",breadCrumbActive:"Invoice"}),u.a.createElement(E.a,null,u.a.createElement(h.a,{className:"mb-1 invoice-header",md:"5",sm:"12"},u.a.createElement(f.a,null,u.a.createElement(v.a,{placeholder:"Email"}),u.a.createElement(b.a,{addonType:"append"},u.a.createElement(R.a.Ripple,{color:"primary",outline:!0},"Send Invoice")))),u.a.createElement(h.a,{className:"d-flex flex-column flex-md-row justify-content-end invoice-header mb-1",md:"7",sm:"12"},u.a.createElement(R.a,{className:"mr-1 mb-md-0 mb-1",color:"primary",onClick:function(){return window.print()}},u.a.createElement(T.a,{size:"15"}),u.a.createElement("span",{className:"align-middle ml-50"},"Print")),u.a.createElement(R.a.Ripple,{color:"primary",outline:!0},u.a.createElement(A.a,{size:"15"}),u.a.createElement("span",{className:"align-middle ml-50"},"Download"))),u.a.createElement(h.a,{className:"invoice-wrapper",sm:"12"},u.a.createElement(x.a,{className:"invoice-page"},u.a.createElement(N.a,null,u.a.createElement(E.a,null,u.a.createElement(h.a,{md:"12",sm:"12",className:"pt-1"},u.a.createElement(C.a,{className:"pt-1"},u.a.createElement("img",{src:_.a,alt:"logo"})))),u.a.createElement(E.a,{className:"pt-2"},u.a.createElement(h.a,{md:"6",sm:"12"},u.a.createElement("h1",null,"Informations"),u.a.createElement("div",{className:"recipient-info my-2"},u.a.createElement("h4",null,this.ifExist("civility")),u.a.createElement("h4",null,this.ifExist("first_name")," ",this.ifExist("last_name")),u.a.createElement("h4",null,"Date de naissance: ",this.ifExist("birth_date")))),u.a.createElement(h.a,{md:"6",sm:"12",className:"text-right"},u.a.createElement("div",{className:"invoice-details mt-2"},u.a.createElement("h3",null,"Date du contrat"),u.a.createElement("h4",null,p()().format("DD/MM/YYYY")))),u.a.createElement(h.a,{md:"3",sm:"12"},u.a.createElement("div",{className:"recipient-contact pb-2"},u.a.createElement("h4",null,"Status Marital: ",this.ifExist("martial_status")),u.a.createElement("h4",null,"Service national: ",this.ifExist("civility")),u.a.createElement("h4",null,"Nombre d'enfants: ",this.ifExist("children_number")))),u.a.createElement(h.a,{md:"9",sm:"12"},u.a.createElement("div",{className:"recipient-contact pb-2"},u.a.createElement("h4",null,u.a.createElement(S.a,{size:15,className:"mr-50"}),"Mobile: ",this.ifExist("mobile_number")),u.a.createElement("h4",null,u.a.createElement(S.a,{size:15,className:"mr-50"}),"Bureau: ",this.ifExist("office_number")),u.a.createElement("h4",null,u.a.createElement(D.a,{size:15,className:"mr-50"}),this.state.rowData.email))),u.a.createElement(h.a,{md:"3",sm:"12"},u.a.createElement("div",{className:"recipient-contact pb-2"},u.a.createElement("h2",null,"Adresse Personnelle"),u.a.createElement("h4",null,this.ifExist("personal_address")),u.a.createElement("h4",null,this.ifExist("personal_zip_code")),u.a.createElement("h4",null,this.ifExist("personal_city")),u.a.createElement("h4",null,this.ifExist("personal_country")))),u.a.createElement(h.a,{md:"3",sm:"12"},u.a.createElement("div",{className:"recipient-contact pb-2"},u.a.createElement("h2",null,"Adresse Entreprise"),u.a.createElement("h4",null,this.ifExist("society_address")),u.a.createElement("h4",null,this.ifExist("society_zip_code")),u.a.createElement("h4",null,this.ifExist("society_city")),u.a.createElement("h4",null,this.ifExist("society_country"))))),u.a.createElement("div",{className:"invoice-items-table pt-1"},u.a.createElement(E.a,null,u.a.createElement(h.a,{sm:"12"},u.a.createElement(g.a,{responsive:!0,borderless:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,u.a.createElement("h3",null,"TASK DESCRIPTION")),u.a.createElement("th",null,u.a.createElement("h3",null,"HOURS")),u.a.createElement("th",null,u.a.createElement("h3",null,"RATE")),u.a.createElement("th",null,u.a.createElement("h3",null,"AMOUNT")))),u.a.createElement("tbody",null,this.state.services.map((function(e,t){return u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("h4",null,e.name),u.a.createElement("p",null,"This is a default service description")),u.a.createElement("td",null,u.a.createElement("h4",null,e.value1)),u.a.createElement("td",null,u.a.createElement("h4",null,e.value)),u.a.createElement("td",null,u.a.createElement("h4",null,e.total_ttc)))}))))))),u.a.createElement("div",{className:"invoice-total-table"},u.a.createElement(E.a,null,u.a.createElement(h.a,{sm:{size:7,offset:5},xs:{size:7,offset:5}},u.a.createElement(g.a,{responsive:!0,borderless:!0},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"SUBTOTAL"),u.a.createElement("td",null,"114000 USD")),u.a.createElement("tr",null,u.a.createElement("th",null,"DISCOUNT (5%)"),u.a.createElement("td",null,"5700 USD")),u.a.createElement("tr",null,u.a.createElement("th",null,"TOTAL"),u.a.createElement("td",null,"108300 USD"))))))),u.a.createElement("div",{className:"text-right pt-3 invoice-footer"},u.a.createElement("p",null,"EOR - 36, RUE DE LABORDE 75008 PARIS  - SIRET N\xb0 48488721100023 - APE N\xb0 7022Z")),u.a.createElement("div",{className:"text-left pt-3 invoice-footer"},u.a.createElement("h1",null,"Conditions G\xe9n\xe9rales de ventes de ",this.ifExist("first_name")," ",this.ifExist("last_name")),u.a.createElement("p",null,"Le Client dispose de 2 jours apr\xe8s la date figurant sur le Contrat de Prestations Retraite pour annuler sa commande aupr\xe8s d\u2019E.O.R. Pass\xe9 ce d\xe9lai, et apr\xe8s avoir re\xe7u les premi\xe8res correspondances destin\xe9es aux Caisses de Retraite, le dossier est consid\xe9r\xe9 comme engag\xe9 et le Client ne peut plus interrompre le Contrat de Prestations Retraite conclu : les premi\xe8res correspondances \xe9tant d\xe9cisives pour la pr\xe9sentation et les orientations d'un dossier."),u.a.createElement("p",null,"Chaque prestation correspond \xe0 une mission pr\xe9cise d\xe9crite sur le Contrat de Prestation Retraite. Toute intervention de conseil de la part d\u2019E.O.R qui sort du cadre d\xe9crit par le pr\xe9sent contrat fera l\u2019objet d\u2019un devis et d\u2019une facturation compl\xe9mentaire."),u.a.createElement("p",null,"E.O.R effectue pour le compte de ses Clients toutes les d\xe9marches et op\xe9rations qu'elle juge utile pour le bon d\xe9veloppement de la mission qui lui est confi\xe9e, et ce, jusqu'au terme de cette derni\xe8re. La prestation \"Montage D\xe9part en Retraite Anticip\xe9\" est ind\xe9pendante de l'Audit Retraite et ne permet donc pas au client de b\xe9n\xe9ficier d'une reconstitution de carri\xe8re compl\xe8te au sens de l'Audit Retraite, elle n'assure pas non plus le Traitement des Formalit\xe9s de D\xe9part en Retraite. La prestation \"Traitement des Formalit\xe9s de D\xe9part en Retraite\" n'inclut pas les recours \xe9ventuels et ult\xe9rieurs \xe0 effectuer envers les Caisses de Retraite en cas d'erreurs de ces derni\xe8res."),u.a.createElement("p",null,"Le Client doit imp\xe9rativement fournir les notifications de versement des pensions de la part des Caisses de Retraite d\xe8s qu'il les re\xe7oit, afin qu\u2019EOR puisse intervenir avant le d\xe9lai de recours impos\xe9 par les Caisses de Retraite qui est de 2 mois, si une anomalie est constat\xe9e. Faute de quoi la responsabilit\xe9 d\u2019EOR ne saurait \xeatre engag\xe9e"),u.a.createElement("p",null,"Les actions effectu\xe9es par EOR aupr\xe8s des Caisses de Retraite sont totalement transparentes et doivent \xeatre sign\xe9es par le Client avant d'\xeatre transmises aux Caisses de Retraite. EOR n'est pas responsable des modifications que le client pourrait effectuer sur les correspondances destin\xe9es aux Caisses de Retraite, ni des interventions t\xe9l\xe9phoniques effectu\xe9es par le client directement aupr\xe8s des Caisses de Retraite, sans en r\xe9f\xe9rer \xe0 EOR."),u.a.createElement("p",null,"Les honoraires per\xe7us par EOR concernent les actions entreprises \xe0 l'\xe9gard des caisses priv\xe9es et ne concernent pas le R\xe9gime G\xe9n\xe9ral de la S\xe9curit\xe9 Sociale (CNAV, CNAVTS, CRAM), EOR donnant ses conseils gratuitement et \xe0 titre indicatif envers cette derni\xe8re Institution. EOR agit en fonction des informations et des documents fournis par le client."),u.a.createElement("p",null,"EOR n'est pas responsable des d\xe9lais impos\xe9s par les Caisses de Retraite, et effectue ses relances, si elle le juge utile pour le dossier, selon le d\xe9lai usuel de deux mois sans r\xe9ponse de la part d'une Caisse de Retraite. Pour toutes les contestations relatives aux prestations r\xe9alis\xe9es par EOR et \xe0 l\u2019application ou \xe0 l\u2019interpr\xe9tation des pr\xe9sentes Conditions G\xe9n\xe9rale de Vente, seul sera comp\xe9tent le Tribunal de Commerce de Paris pour les personnes morales, et le Tribunal d\u2019Instance de Paris pour les personnes physiques."),u.a.createElement("p",null,"Toutes les prestations fournies par E.O.R sont soumises \xe0 la loi fran\xe7aise."),u.a.createElement("p",null,"A la fin de la prestation, le client est tenu de r\xe9cup\xe9rer tous les documents le concernant et ceux produits durant la mission faute de quoi le cabinet se r\xe9serve le droit de d\xe9truire les pi\xe8ces du dossier apr\xe8s 6 mois de conservation dans ses locaux.")))))))}}]),a}(u.a.Component);t.default=w}}]);
//# sourceMappingURL=129.527fb617.chunk.js.map