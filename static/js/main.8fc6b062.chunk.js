(this.webpackJsonpfunbox=this.webpackJsonpfunbox||[]).push([[0],{172:function(e,t,n){e.exports=n(374)},30:function(e){e.exports=JSON.parse('{"common":{"name":"\u041d\u044f\u043c\u0443\u0448\u043a\u0430","desc":"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e","descSelectedHover":"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?","temptation":"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d,","temptationActionText":"\u043a\u0443\u043f\u0438.","clientHappy":"\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d"},"units":{"kg":"\u043a\u0433","portion":["\u043f\u043e\u0440\u0446\u0438\u044f","\u043f\u043e\u0440\u0446\u0438\u0438","\u043f\u043e\u0440\u0446\u0438\u0439"],"mouse":["\u043c\u044b\u0448\u044c","\u043c\u044b\u0448\u0438","\u043c\u044b\u0448\u0435\u0439"]},"items":[{"id":"fua","taste":"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430","weight":{"value":0.5,"units":"kg"},"quantity":{"value":10,"units":"portion"},"gift":{"value":1,"units":"mouse"},"temptation":{"selected":"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.","finished":"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0444\u0443\u0430-\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."}},{"id":"fish","taste":"\u0441 \u0440\u044b\u0431\u043e\u0439","weight":{"value":2,"units":"kg"},"quantity":{"value":40,"units":"portion"},"gift":{"value":2,"units":"mouse"},"temptation":{"selected":"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.","finished":"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0440\u044b\u0431\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."}},{"id":"chicken","taste":"\u0441 \u043a\u0443\u0440\u043e\u0439","weight":{"value":5,"units":"kg"},"quantity":{"value":100,"units":"portion"},"gift":{"value":5,"units":"mouse"},"isClientHappy":true,"temptation":{"selected":"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.","finished":"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u043a\u0443\u0440\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."}}]}')},371:function(e,t,n){},372:function(e,t,n){},373:function(e,t,n){},374:function(e,t,n){"use strict";n.r(t);n(173),n(182);var a=n(3),c=n.n(a),i=n(171),u=n.n(i),s=(n(371),n(42)),o=n(64),r=n(30),l=r.units,m=function(e,t){return t&&(t=t.filter((function(e){return e}))),t&&0!==t.length?t.reduce((function(t,n){return t.push("".concat(e,"--").concat(n)),t}),[e]).join(" "):e},p=function(e){var t=e.unitsDictionary,n=e.value;return t.length<3?"":(n>100&&(n=+n.toString().slice(-2)),n>20&&(n%=10),1===n?t[0]:n>1&&n<5?t[1]:t[2])},d=function(e){var t=e.value,n=e.units,a=l[n];return"string"===typeof a?Object(s.a)(Object(s.a)({},e),{},{unitsText:a}):Object(s.a)(Object(s.a)({},e),{},{unitsText:p({unitsDictionary:a,value:t})})};n(372);var v=function(e){var t,n=e.id,i=e.title,u=e.taste,l=e.gift,p=e.quantity,d=e.weight,v=e.temptation,f=e.isClientHappy,h="product-".concat(n),_=Object(a.useState)(!1),g=Object(o.a)(_,2),b=g[0],E=g[1],y=Object(a.useState)(!1),N=Object(o.a)(y,2),x=N[0],k=N[1],O=Object(a.useState)(!1),j=Object(o.a)(O,2),w=j[0],S=j[1],T=Object(a.useState)(!1),C=Object(o.a)(T,2),H=C[0],q=C[1],F=function(){var e=[];b&&e.push("checked");x&&e.push("disabled");return e}(),J=m("product",F),M=m("product__card",F),A=function(){var e=r.common.temptation,t=null;x&&(e=v.finished);b&&(e=v.selected);x||b||(t=c.a.createElement(a.Fragment,null,"\xa0",c.a.createElement("button",{className:"product__temptation-button",onClick:I,type:"button"},r.common.temptationActionText)));return c.a.createElement("div",{className:"product__temptation"},e,t)}(),D=B();function B(){return b&&w&&H?r.common.descSelectedHover:r.common.desc}function I(){x||(b||S(!1),E(!b))}return c.a.createElement("div",{className:J},c.a.createElement("button",{className:"product__disable-btn",type:"button",onClick:function(){k(!x)},title:"\u0417\u0430\u0434\u0438\u0437\u0435\u0439\u0431\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"},c.a.createElement("span",{className:"visually-hidden"},"\u0417\u0430\u0434\u0438\u0437\u0435\u0439\u0431\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442")),c.a.createElement("input",{className:"product__input visually-hidden",type:"checkbox",name:"product",id:h,checked:b,disabled:x,onChange:function(e){var t=e.currentTarget.checked;E(t),t||S(!1)}}),c.a.createElement("label",{htmlFor:h,className:"visually-hidden"},"\n      ".concat(B(),".\n\n      ").concat(i," ").concat(u,",\n      ").concat(d.value,"\n      ").concat(d.unitsText,".\n\n      ").concat(p.value,"\n      ").concat(p.unitsText,",\n\n      ").concat(l.value,"\n      ").concat(l.unitsText,"\n      \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a.\n    ")),c.a.createElement("div",{className:M,"aria-hidden":"true",onClick:I,onMouseLeave:function(){q(!1),S(!!b)},onMouseOver:function(){x||q(!0)}},c.a.createElement("div",{className:"product__card-inner"},c.a.createElement("div",{className:"product__desc"},D),c.a.createElement("h2",{className:"product__title"},i,c.a.createElement("span",{className:"product__taste"},u)),c.a.createElement("ul",{className:"product__features"},function(){var e=[p,Object(s.a)(Object(s.a)({},l),{},{text:"\u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"})];return f&&e.push({text:r.common.clientHappy}),e.map((function(e,t){var n,i=e.value,u=e.unitsText,s=e.text,o="feature-".concat(t);return i&&i>1&&(n=c.a.createElement(a.Fragment,null,c.a.createElement("span",{className:"product__value"},i),"\xa0")),u&&s&&(u+=" "),c.a.createElement("li",{key:o,className:"product__feature"},n,u,s)}))}()),c.a.createElement("div",{className:"product__weight"},(t=d.value)?t.toString().replace(".",","):"",c.a.createElement("div",{className:"product__weight-units"},d.unitsText)))),A)};n(373);var f=function(){var e=r.items.map((function(e){var t=e.id,n=e.taste,a=e.gift,i=e.weight,u=e.quantity,s=e.temptation,o=e.isClientHappy;return c.a.createElement(v,{id:t,key:t,title:r.common.name,taste:n,gift:d(a),weight:d(i),quantity:d(u),temptation:s,isClientHappy:o})}));return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"app__title"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),c.a.createElement("fieldset",{className:"app__group"},c.a.createElement("legend",{className:"visually-hidden"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u0440\u043c"),c.a.createElement("div",{className:"app__cards"},e)))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.8fc6b062.chunk.js.map