(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),i=a(15),o=a(13),u=a(22),l=a(10),d=a(23);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f={START_LOADING:"START_LOADING",HANDLE_SUCCESS:"HANDLE_SUCCESS"},E=function(){return function(e){return e({type:f.START_LOADING}),fetch("https://reqres.in/api/users?delay=2").then(function(e){return e.json()}).then(function(t){var a;e((a=t.data,{type:f.HANDLE_SUCCESS,payload:a}))})}},b={users:[],isLoading:!1,isLoaded:!1};var O=Object(l.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f.START_LOADING:return p({},e,{isLoading:!0,isLoaded:!1});case f.HANDLE_SUCCESS:return p({},e,{users:t.payload,isLoading:!1,isLoaded:!0});default:return e}},b,Object(l.a)(d.a)),v=a(8),y=a(24),g=a(25),h=a(28),L=a(26),j=a(29),S=function(e){var t=e.user,a=t.avatar,n=t.first_name;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-96x96"},r.a.createElement("img",{src:a,alt:""}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},n),r.a.createElement("a",{href:"/#"},"more info")))))},N=(a(39),function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).loadData=function(){a.props.loadData()},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.loadData,a=e.users,n=e.isLoading,c=e.isLoaded;return r.a.createElement("div",{className:"container has-text-centered users-list"},!c&&r.a.createElement("button",{className:"button is-dark is-large",onClick:t,disabled:n},"Get users"),c&&r.a.createElement("section",null,a.map(function(e){return r.a.createElement(S,{user:e,key:e.id})})))}}]),t}(r.a.Component)),D=Object(o.b)(function(e){return{users:e.users,isLoading:e.isLoading,isLoaded:e.isLoaded}},function(e){return{loadData:function(){return e(E())}}})(N),w=function(){return r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:D}))};a(41);s.a.render(r.a.createElement(o.a,{store:O},r.a.createElement(i.a,{basename:"/users-list-app"},r.a.createElement(w,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d48f1e8b.chunk.js.map