(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"},60:function(e,t,n){e.exports=n(98)},96:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);n(61),n(85);var a=n(0),o=n.n(a),r=n(27),i=n.n(r),c=n(13),s=n.n(c),l=n(52),d=n(53),u=n(58),f=n(54),h=n(59),m=n(1),p=(n(94),function(e){return o.a.createElement(m.Panel,{id:e.id},o.a.createElement(m.PanelHeader,null,"Example"),e.fetchedUser&&o.a.createElement(m.Group,{title:"User Data Fetched with VK Connect"},o.a.createElement(m.ListItem,{before:o.a.createElement(m.Avatar,{src:e.fetchedUser.photo_200}),description:e.fetchedUser.city.title},"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name))),o.a.createElement(m.Group,{title:"Navigation Example"},o.a.createElement(m.Div,null,o.a.createElement(m.Button,{size:"xl",level:"2",onClick:e.go,"data-to":"persik"},"Show me the Persik, please"))))}),g=n(55),v=n.n(g),w=(n(96),n(56)),E=n.n(w),k=n(57),b=n.n(k),U=Object(m.platform)(),P=function(e){return o.a.createElement(m.Panel,{id:e.id},o.a.createElement(m.PanelHeader,{left:o.a.createElement(m.HeaderButton,{onClick:e.go,"data-to":"home"},U===m.IOS?o.a.createElement(E.a,null):o.a.createElement(b.a,null))},"Persik"),o.a.createElement("img",{className:"Persik",src:v.a,alt:"Persik The Cat"}))},y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),s.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return o.a.createElement(m.View,{activePanel:this.state.activePanel},o.a.createElement(p,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),o.a.createElement(P,{id:"persik",go:this.go}))}}]),t}(o.a.Component);function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.send("VKWebAppInit",{}),function(){if("serviceWorker"in navigator){if(new URL("/VMuzee",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/VMuzee","/service-worker.js");O?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):j(e)})}}(),i.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[60,2,1]]]);
//# sourceMappingURL=main.c8842954.chunk.js.map