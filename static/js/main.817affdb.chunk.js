(this.webpackJsonpwebsyahril=this.webpackJsonpwebsyahril||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(13),c=a.n(o),l=(a(60),a(19)),i=a(20),s=a(22),u=a(21),m=a(14),d=a(5),h=(a(61),a(62),a(63),a(6)),p=a(54),f=a.n(p),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).toggleCollapse=function(){n.setState({isOpen:!n.state.isOpen})},n.time=function(){var e=new Date,t=e.getHours(),a=e.getMinutes();a<10&&(a="0"+a);var r=t+":"+a+":"+e.getSeconds()+" ";r+=t>11?"PM":"AM",n.setState({time:r})},n.countdown=function(){var e=new Date("Jul 24, 2020 00:00:00").getTime()-(new Date).getTime(),t=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),r=Math.floor(e%36e5/6e4),o=Math.floor(e%6e4/1e3);n.setState({count:t+"d "+a+"h "+r+"m "+o+"s "})},n.curHr=function(){var e=(new Date).getHours();e<12?n.setState({curHr:"Good Morning"}):e<18?n.setState({curHr:"Good Afternoon"}):n.setState({curHr:"Good Evening"})},n.tgl=function(){var e=new Date,t=new Array(7);t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday";var a=t[e.getDay()]+", "+e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear();n.setState({tgl:a})},n.state={data:{author:"",text:""},time:"",tgl:"",curHr:"",count:"",isOpen:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getData(),this.count=setInterval((function(){return e.countdown()}),1e3),this.timerID=setInterval((function(){return e.time()}),1e3),this.tglID=setInterval((function(){return e.tgl()}),1e3),this.tglID=setInterval((function(){return e.curHr()}),1e3)}},{key:"getData",value:function(){var e=this;f.a.get("https://type.fit/api/quotes").then((function(t){var a=t.data[Math.floor(Math.random()*t.data.length)];e.setState({data:{author:a.author,text:a.text}})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(h.j,{color:"elegant-color-dark",fixed:"top",dark:!0,expand:"md",scrolling:!0,transparent:!0},r.a.createElement(h.k,null,r.a.createElement("strong",{className:"white-text text-center"},"Muhammad Syahril")),r.a.createElement(h.m,{onClick:this.toggleCollapse}),r.a.createElement(h.c,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(h.l,{right:!0},r.a.createElement(h.i,null,r.a.createElement(h.k,null,r.a.createElement("a",{id:"socmed",href:"https://instagram.com/mhmd_syhrl_"},r.a.createElement(h.f,{size:"2x",icon:"instagram"})))),r.a.createElement(h.i,null,r.a.createElement(h.k,null,r.a.createElement("a",{id:"socmed",href:"https://api.whatsapp.com/send?phone=6281251416220"},r.a.createElement(h.f,{size:"2x",icon:"whatsapp"})))),r.a.createElement(h.i,null,r.a.createElement(h.k,{id:"socmed"},r.a.createElement("a",{id:"socmed",href:"https://www.facebook.com/aril.vandisorder"},r.a.createElement(h.f,{size:"2x",icon:"facebook"})))))))),r.a.createElement("div",{className:"content"},r.a.createElement(h.d,{fluid:!0},r.a.createElement(h.q,{className:"text-center",id:"typography"},this.state.time),r.a.createElement(h.q,{className:"text-center",id:"typography1"},"Happy Birthday, Aviva Putri Humaira"),r.a.createElement(h.q,{className:"text-center",id:"typography2"},this.state.tgl))),r.a.createElement("div",null,r.a.createElement(h.e,{id:"footer"},r.a.createElement("p",{id:"footer-text",className:"text-center"},' " ',this.state.data.text,' " - ',this.state.data.author," "))))}}]),a}(r.a.Component),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/"},r.a.createElement(g,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(103),a(104),a(105);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports=a(106)},60:function(e,t,a){},61:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},62:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/bg.53cefd5f.jpg"}},[[55,1,2]]]);
//# sourceMappingURL=main.817affdb.chunk.js.map