(window.webpackJsonpdashboard=window.webpackJsonpdashboard||[]).push([[0],{378:function(e,t,n){e.exports=n(797)},383:function(e,t,n){},384:function(e,t,n){},397:function(e,t){},419:function(e,t){},421:function(e,t){},461:function(e,t){},463:function(e,t){},494:function(e,t){},542:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=542},797:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(33),l=n.n(o),i=(n(383),n(384),n(18)),c=n(19),u=n(21),s=n(20),m=n(22),d=n(138),p=n.n(d),E=n(32),h=n.n(E),f=n(45),g=n.n(f),b=n(26),y=n.n(b),v=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.createElement("div",{onClick:this.props.onClick,style:{cursor:"pointer"}},r.createElement(g.a,{style:{borderBottom:"1px",borderBottomStyle:"solid",borderColor:"#e7eaf3",marginTop:".75rem",marginBottom:".75rem",padding:"5px"}},this.props.col.map((function(e){return r.createElement(h.a,null,e)}))))}}]),t}(r.Component),j=n(31),k=n(41),O=n(42),w=n.n(O);function C(){var e=Object(k.a)(["  \n  query{courts(where:{subcourtID_not:null, minStake_not: null})\n  {\n    id\n    subcourtID\n    policy\n    feeForJuror\n    minStake\n    jurorsForCourtJump\n    alpha\n  }\n  }"]);return C=function(){return e},e}function D(){var e=Object(k.a)(["{\n    totalJurors{\n        totalJurorCount\n    }\n}\n"]);return D=function(){return e},e}function I(){var e=Object(k.a)(["{\n        totalStakeds {\n            totalStakedAmount\n        }\n    }\n"]);return I=function(){return e},e}function T(){var e=Object(k.a)(["query ($disputeID: BigInt!) {\n    tokenAndETHShifts(where: {disputeID: $disputeID}, orderBy: timestamp, orderDirection: desc) {\n    address\n    tokenAmount\n    ETHAmount\n  }\n}"]);return T=function(){return e},e}function A(){var e=Object(k.a)(["query ($disputeID: BigInt!) {\n  newPeriods(first: 100, where: {disputeID:$disputeID}, orderBy: timestamp, orderDirection: asc) {\n    id\n    disputeID\n    period\n    timestamp\n    contractAddress\n  }\n}"]);return A=function(){return e},e}function B(){var e=Object(k.a)(["\n  {\n    rewardStatistics(first: 1){\n      id\n      totalRewardedTokenAmount\n      totalRewardedEthAmount\n      totalPunishedTokenAmount\n    }\n  }\n"]);return B=function(){return e},e}function S(){var e=Object(k.a)(["\n  {\n    disputeCreations(orderBy: blockNumber, orderDirection:desc, first:10){\n      id\n      disputeID\n      arbitrable\n      contractAddress\n      timestamp\n      blockNumber\n      subcourtID\n      numberOfChoices\n      period\n      lastPeriodChange\n      drawsInRound\n      commitsInRound\n      ruled\n    }\n  }\n"]);return S=function(){return e},e}function x(){var e=Object(k.a)(["\n  {\n    jurorStakeAmounts(first: 5, orderBy: stakeAmount, orderDirection: desc, where:{stakeAmount_gt:0}){\n      juror\n      stakeAmount\n    }\n  }"]);return x=function(){return e},e}function F(){var e=Object(k.a)(["{\n    periodDisputeStatistics{\n    period\n    totalDisputes\n  }\n}"]);return F=function(){return e},e}function L(){var e=Object(k.a)(['\n  {\n    policyUpdates(first: 1,orderBy: subcourtID, orderDirection: desc, where:{policy_not:""}){\n      subcourtID\n    }\n  }\n']);return L=function(){return e},e}function M(){var e=Object(k.a)(["\n  {\n    disputeStatistics(first: 1){\n      id\n      totalDisputes\n    }\n  }"]);return M=function(){return e},e}var P,J,q=w()(M()),H=w()(L()),N=w()(F()),K=w()(x()),R=w()(S()),W=w()(B()),_=w()(A()),U=w()(T()),$=w()(I()),z=w()(D()),V=w()(C()),G=n(37),X=n.n(G),Q=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getJurorFee",value:function(e){var t=X.a.utils.fromWei(e,"ether");return t.substring(0,t.indexOf(".")+5)}},{key:"render",value:function(){var e=this;return r.createElement(y.a,{style:{height:"400px",overflow:"scroll"}},r.createElement(y.a.Body,null,r.createElement(y.a.Title,null,"Court Details"),r.createElement(v,{col:[r.createElement("strong",null,"Court"),r.createElement("strong",null,"Juror fee"),r.createElement("strong",null,"Min stake amount")]}),r.createElement(j.a,{query:V},(function(t){var n=t.loading,a=t.error,o=t.data;return n?r.createElement("span",null,"Loading..."):a?r.createElement("span",null,"Error! ".concat(a.message)):o.courts.map((function(t){return r.createElement(v,{col:[J[t.subcourtID],null!=t.feeForJuror?e.getJurorFee(t.feeForJuror):0,null!=t.minStake?X.a.utils.fromWei(t.minStake,"ether"):0]})}))}))))}}]),t}(r.Component),Y=n(101),Z=n(342),ee=n.n(Z),te=n(192),ne=n.n(te),re=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="https://etherscan.io/address/".concat(this.props.address);return a.a.createElement(ee.a,{trigger:["hover","click"],placement:"top",overlay:a.a.createElement(ne.a,{id:this.props.address},a.a.createElement(ne.a.Content,null,a.a.createElement("strong",null,this.props.address)))},a.a.createElement("a",{href:e,target:"_blank"}," ",this.props.address.substr(0,10)+"..."))}}]),t}(r.Component),ae=n(86),oe=n.n(ae),le=n(344),ie=n.n(le),ce=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.createElement(oe.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.props.show},r.createElement(oe.a.Header,null,r.createElement(oe.a.Title,{id:"contained-modal-title-vcenter"},this.props.heading)),r.createElement(oe.a.Body,null,r.createElement("h4",null,this.props.title),this.props.content),r.createElement(oe.a.Footer,null,r.createElement(ie.a,{variant:"secondary",onClick:this.props.onHide},"Close")))}}]),t}(r.Component),ue=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"periodHistory",value:function(e){return r.createElement(j.a,{query:_,variables:{disputeID:e}},(function(e){var t=e.loading,n=e.error,a=e.data;if(t)return r.createElement("span",null,"Loading...");if(n)return r.createElement("span",null,"Error! ".concat(n.message));if(0==a.newPeriods.length)return"";var o=[r.createElement("strong",null,"Period history"),r.createElement(v,{col:[r.createElement("strong",null,"Period(Status)"),r.createElement("strong",null,"Timestamp")]})];return a.newPeriods.forEach((function(e){var t=new Date(1e3*parseInt(e.timestamp));o.push(r.createElement(v,{col:[P[parseInt(e.period)],"".concat(t.toUTCString())]}))})),o}))}},{key:"reward",value:function(e){return r.createElement(j.a,{query:U,variables:{disputeID:e}},(function(e){var t=e.loading,n=e.error,a=e.data;if(t)return r.createElement("span",null,"Loading...");if(n)return r.createElement("span",null,"Error! ".concat(n.message));if(0==a.tokenAndETHShifts.length)return"";var o=[r.createElement("strong",null,"Reward and Penalty"),r.createElement(v,{col:[r.createElement("strong",null,"Juror Address"),r.createElement("strong",null,"ETH"),r.createElement("strong",null,"PNK")]})];return a.tokenAndETHShifts.forEach((function(e){o.push(r.createElement(v,{col:[r.createElement(re,{address:e.address}),parseFloat(X.a.utils.fromWei(e.ETHAmount,"ether")).toFixed(2),parseFloat(X.a.utils.fromWei(e.tokenAmount,"ether")).toFixed(2)]}))})),o}))}},{key:"render",value:function(){var e=this.props.disputeId;return r.createElement("div",null,this.periodHistory(e),this.reward(e))}}]),t}(r.Component),se=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={showModal:!1},n.onClickDispute=n.onClickDispute.bind(Object(Y.a)(n)),n.onCloseModal=n.onCloseModal.bind(Object(Y.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onClickDispute",value:function(e){console.log("dispute clicked"),this.setState({showModal:!0,disputeId:e})}},{key:"onCloseModal",value:function(){console.log("onCloseModal"),this.setState({showModal:!1})}},{key:"render",value:function(){return r.createElement(y.a,{style:{height:"400px",overflow:"scroll"}},r.createElement(y.a.Body,null,r.createElement(y.a.Title,null,"Recent Disputes"),r.createElement(ce,{show:this.state.showModal,onHide:this.onCloseModal,content:r.createElement(ue,{disputeId:this.state.disputeId}),heading:"Dispute Details",title:"Dispute Id ".concat(this.state.disputeId)}),r.createElement(v,{col:[r.createElement("strong",null,"Id"),r.createElement("strong",null,"Arbitrable"),r.createElement("strong",null,"Court"),r.createElement("strong",null,"Choices")]}),r.createElement(j.a,{query:R},(function(e){var t=e.loading,n=e.error,a=e.data;return t?r.createElement("span",null,"Loading..."):n?r.createElement("span",null,"Error! ".concat(n.message)):a.disputeCreations.map((function(e){return r.createElement(v,{col:[e.disputeID,,r.createElement(re,{address:e.arbitrable}),J[e.subcourtID],e.numberOfChoices]})}))}))))}}]),t}(r.Component),me=n(65),de=n.n(me),pe=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.createElement(y.a,null,r.createElement(y.a.Body,null,r.createElement(g.a,{style:{borderBottom:"1px",borderBottomStyle:"solid",borderColor:"#e7eaf3",marginTop:".75rem",marginBottom:".75rem",padding:"5px"}},r.createElement(h.a,null,r.createElement("strong",null,"Total disputes:")," ",r.createElement(de.a,{variant:"secondary"},r.createElement(j.a,{query:q},(function(e){var t=e.loading,n=e.error,a=e.data;return t?r.createElement("span",null,"Loading..."):n?r.createElement("span",null,"Error! ".concat(n.message)):r.createElement("span",null,a.disputeStatistics[0].totalDisputes)})))),r.createElement(h.a,null,r.createElement("strong",null,"Total active courts:")," ",r.createElement(de.a,{variant:"secondary"},r.createElement(j.a,{query:H},(function(e){var t=e.loading,n=e.error,a=e.data;return t?r.createElement("span",null,"Loading..."):n?r.createElement("span",null,"Error! ".concat(n.message)):r.createElement("span",null,parseInt(a.policyUpdates[0].subcourtID)+1)})))),r.createElement(h.a,null,r.createElement("strong",null,"Total staked amount:")," ",r.createElement(de.a,{variant:"secondary"},r.createElement(j.a,{query:$},(function(e){var t=e.loading,n=e.error,a=e.data;return t?r.createElement("span",null,"Loading..."):n?r.createElement("span",null,"Error! ".concat(n.message)):r.createElement("span",null,parseFloat(X.a.utils.fromWei(a.totalStakeds[0].totalStakedAmount,"ether")).toFixed(3))}))))),r.createElement(j.a,{query:W},(function(e){var t=e.loading,n=e.error,a=e.data;return t?r.createElement("span",null,"Loading..."):n?r.createElement("span",null,"Error! ".concat(n.message)):r.createElement(g.a,{style:{borderBottom:"1px",borderBottomStyle:"solid",borderColor:"#e7eaf3",marginTop:".75rem",marginBottom:".75rem",padding:"5px"}},r.createElement(h.a,null,r.createElement("strong",null,"Total earnings(ETH):")," ",r.createElement(de.a,{variant:"secondary"},parseFloat(X.a.utils.fromWei(a.rewardStatistics[0].totalRewardedEthAmount,"ether")).toFixed(3))),r.createElement(h.a,null,r.createElement("strong",null,"Total earnings(PNK):")," ",r.createElement(de.a,{variant:"secondary"},parseFloat(X.a.utils.fromWei(a.rewardStatistics[0].totalRewardedTokenAmount,"ether")).toFixed(3))),r.createElement(h.a,null,r.createElement("strong",null,"Total penalty(PNK):")," ",r.createElement(de.a,{variant:"secondary"},parseFloat(X.a.utils.fromWei(a.rewardStatistics[0].totalPunishedTokenAmount.substr(1),"ether")).toFixed(3))))})),r.createElement(g.a,{style:{borderBottom:"1px",borderBottomStyle:"solid",borderColor:"#e7eaf3",marginTop:".75rem",marginBottom:".75rem",padding:"5px"}},r.createElement(h.a,null,r.createElement("strong",null,"Total jurors who staked:")," ",r.createElement(de.a,{variant:"secondary"},r.createElement(j.a,{query:z},(function(e){var t=e.loading,n=e.error,a=e.data;return t?r.createElement("span",null,"Loading..."):n?r.createElement("span",null,"Error! ".concat(n.message)):r.createElement("span",null,a.totalJurors[0].totalJurorCount)})))))))}}]),t}(r.Component),Ee=n(141),he=n.n(Ee),fe=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.createElement(p.a,null,r.createElement(he.a,{bg:"white"},r.createElement(he.a.Brand,{href:"#home"},r.createElement("img",{alt:"Metrics Dashboard | Kleros",src:"logo.png",width:"90",height:"90",className:"d-inline-block align-top"})),r.createElement(he.a.Brand,{style:{marginLeft:"20%"}},r.createElement("strong",{style:{fontSize:"24px"}},"Performance Metrics Dashboard"))))}}]),t}(r.Component),ge=n(34),be=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(0==this.props.dataKey.length)return null;var e=this.props.data[0];console.log("datapoint  ",e);var t=Object.keys(e).filter((function(e){return"name"!==e}));return console.log("keys  ",t),a.a.createElement(y.a,{style:{height:"100%"}},a.a.createElement(y.a.Body,null,a.a.createElement(y.a.Title,null,this.props.title),a.a.createElement(ge.b,{width:450,height:300,data:this.props.data,margin:{top:30,right:30,left:20,bottom:5}},a.a.createElement(ge.c,{strokeDasharray:"3 3"}),a.a.createElement(ge.j,{dataKey:"name",hide:this.props.hideXAxis},a.a.createElement(ge.e,{value:this.props.xAxis,offset:-5,position:"insideBottom"})),a.a.createElement(ge.k,{label:{value:"".concat(this.props.yAxis),offset:-2,angle:-90,position:"insideBottomLeft"}}),a.a.createElement(ge.i,null),1!=t.length?a.a.createElement(ge.f,null):null,t.map((function(e){return a.a.createElement(ge.a,{dataKey:e,fill:"#"+Math.floor(16777215*Math.random()).toString(16)})})))))}}]),t}(a.a.Component),ye=["#0088FE","#00C49F","#FFBB28","#FF8042"],ve=(Math.PI,function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(y.a,null,a.a.createElement(y.a.Body,null,a.a.createElement(y.a.Title,null,this.props.title),a.a.createElement(ge.h,{width:470,height:470},a.a.createElement(ge.g,{data:this.props.data,cx:230,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value"},this.props.data.map((function(e,t){return a.a.createElement(ge.d,{key:"cell-".concat(t),fill:ye[t%ye.length]})}))),a.a.createElement(ge.f,{iconSize:10,width:120,height:140,align:"left",layout:"horizontal",verticalAlign:"middle"}),a.a.createElement(ge.i,null))))}}]),t}(a.a.Component));!function(e){e[e["Evidence submission"]=0]="Evidence submission",e[e["Commit vote"]=1]="Commit vote",e[e["Vote casting"]=2]="Vote casting",e[e.Appeal=3]="Appeal",e[e["Ruling done"]=4]="Ruling done"}(P||(P={})),function(e){e[e.General=0]="General",e[e.Blockchain=1]="Blockchain",e[e["Non-Technical"]=2]="Non-Technical",e[e["Exchange Token Listing"]=3]="Exchange Token Listing",e[e.Technical=4]="Technical",e[e["Marketing Services"]=5]="Marketing Services",e[e["English Language"]=6]="English Language",e[e["Video Production"]=7]="Video Production"}(J||(J={}));var je=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.createElement(p.a,null,r.createElement(g.a,null,r.createElement(fe,null)),r.createElement(g.a,null,r.createElement(h.a,null,r.createElement(pe,null))),r.createElement(g.a,null,r.createElement(h.a,null,r.createElement(j.a,{query:K},(function(e){var t=e.loading,n=e.error,a=e.data;if(t)return r.createElement("span",null,"Loading...");if(n)return r.createElement("span",null,"Error! ".concat(n.message));console.log(a);var o=a.jurorStakeAmounts.map((function(e){return{tokens:parseInt(X.a.utils.fromWei(e.stakeAmount,"ether"))/1e3,name:e.juror}}));return r.createElement(be,{data:o,dataKey:"tokens",xAxis:"Juror",yAxis:"PNK Token in Kilo(1000) ether",title:"Top 5 Jurors by stake amount",hideXAxis:!0})}))),r.createElement(h.a,null,r.createElement(j.a,{query:N},(function(e){var t=e.loading,n=e.error,a=e.data;if(t)return r.createElement("span",null,"Loading...");if(n)return r.createElement("span",null,"Error! ".concat(n.message));console.log(a);var o=a.periodDisputeStatistics.map((function(e){return{value:parseInt(e.totalDisputes),name:P[parseInt(e.period+"")]}}));return console.log("pie graph data  ",o),r.createElement(ve,{title:"Disputes by period",data:o})})))),r.createElement(g.a,null,r.createElement(h.a,null,r.createElement(Q,null)),r.createElement(h.a,null,r.createElement(se,null))))}}]),t}(r.Component),ke=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(795);var Oe=n(355),we=n.n(Oe),Ce=n(83),De=n(357),Ie=n(356),Te=n(354),Ae=new Ce.c({link:new De.a({uri:"https://api.thegraph.com/subgraphs/name/quilldata/kleros",fetch:Te.a}),cache:new Ie.a});l.a.render(a.a.createElement(we.a,{client:Ae},a.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[378,1,2]]]);
//# sourceMappingURL=main.3fb36747.chunk.js.map