(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b37df":"82595dc7","chunk-2d0c42b6":"f1cdedc7","chunk-2d0d36c2":"2ecfd7d3","chunk-2d0efcbd":"c9c7c0ff","chunk-2d20e892":"57dae700","chunk-2d221a33":"9b13d598","chunk-2d22cab4":"00ec9443","chunk-378537b9":"7a5a3c0e","chunk-39f68200":"d89e8e5f","chunk-7805fd52":"3f5ab324","chunk-9f3b5866":"f0ade387","chunk-2d21b348":"b2ecb9a7","chunk-5a9585dc":"4035ca59","chunk-e96e7460":"ed953cb0"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-378537b9":1,"chunk-39f68200":1,"chunk-7805fd52":1,"chunk-9f3b5866":1,"chunk-5a9585dc":1,"chunk-e96e7460":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b37df":"31d6cfe0","chunk-2d0c42b6":"31d6cfe0","chunk-2d0d36c2":"31d6cfe0","chunk-2d0efcbd":"31d6cfe0","chunk-2d20e892":"31d6cfe0","chunk-2d221a33":"31d6cfe0","chunk-2d22cab4":"31d6cfe0","chunk-378537b9":"81bcde8f","chunk-39f68200":"e335afe7","chunk-7805fd52":"29dc20b5","chunk-9f3b5866":"46e37e39","chunk-2d21b348":"31d6cfe0","chunk-5a9585dc":"4bb4d22b","chunk-e96e7460":"e335afe7"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===r||d===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],l.parentNode.removeChild(l),t(a)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"012e":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return t.e("chunk-2d0d36c2").then(t.bind(null,"5d63"))};n["default"]={path:"/main/story/chat",name:"chat",component:r,children:[]}},"0613":function(e,n,t){"use strict";t.d(n,"b",(function(){return q})),t.d(n,"c",(function(){return M}));var r=t("1da1"),o=(t("96cf"),t("5502")),c=(t("d3b7"),t("159b"),t("5530")),a=t("d4ec"),u=t("bee2"),i=t("bc3a"),s=t.n(i),d=function(){function e(n){var t,r,o,c;Object(a["a"])(this,e),this.instance=s.a.create(n),this.interceptors=n.interceptors,this.instance.interceptors.request.use(null===(t=this.interceptors)||void 0===t?void 0:t.requestInterceptor,null===(r=this.interceptors)||void 0===r?void 0:r.requestInterceptorCatch),this.instance.interceptors.response.use(null===(o=this.interceptors)||void 0===o?void 0:o.responseInterceptor,null===(c=this.interceptors)||void 0===c?void 0:c.responseInterceptorCatch),this.instance.interceptors.request.use((function(e){return console.log("1"),e}),(function(e){return console.log("1"),e})),this.instance.interceptors.response.use((function(e){return console.log("1"),e}),(function(e){return console.log("1"),e}))}return Object(u["a"])(e,[{key:"request",value:function(e){var n=this;return new Promise((function(t,r){var o;null!==(o=e.interceptors)&&void 0!==o&&o.requestInterceptor&&(e=e.interceptors.requestInterceptor(e)),n.instance.request(e).then((function(n){var r,o;null!==(r=e.interceptors)&&void 0!==r&&r.responseInterceptor&&(n=null===(o=e.interceptors)||void 0===o?void 0:o.responseInterceptor(n));t(n),console.log(n)}))}))}},{key:"get",value:function(e){return this.request(Object(c["a"])(Object(c["a"])({},e),{},{method:"GET"}))}},{key:"post",value:function(e){return this.request(Object(c["a"])(Object(c["a"])({},e),{},{method:"POST"}))}},{key:"delete",value:function(e){return this.request(Object(c["a"])(Object(c["a"])({},e),{},{method:"DELETE"}))}},{key:"patch",value:function(e){return this.request(Object(c["a"])(Object(c["a"])({},e),{},{method:"PATCH"}))}}]),e}(),f=d,l="",h=1e4;l="http://coderwhy.org/prod";var p,m=t("d80c"),b=new f({baseURL:l,timeout:h,interceptors:{requestInterceptor:function(e){var n=m["a"].getCache("token");return n&&(e.headers.Authorization="Bearer ".concat(n),console.log(677,n)),e},requestInterceptorCatch:function(e){return console.log("2"),e},responseInterceptor:function(e){var n=e.data;if("-1001"!==n.returnCode)return n;console.log("failure")},responseInterceptorCatch:function(e){return 404===e.response.status&&console.log("404"),e}}}),g=b;function v(e){return g.post({url:p.AccountLogin,data:e})}function y(e){return g.get({url:p.LoginUserInfo+e})}function k(e){return g.get({url:p.UserMenus+e+"/menu"})}(function(e){e["AccountLogin"]="/login",e["LoginUserInfo"]="/users/",e["UserMenus"]="/role/"})(p||(p={}));var w=t("afbc"),O=t("09e6"),j={namespaced:!0,state:function(){return{token:"",userInfo:{},userMenus:[],permissions:[]}},getters:{},mutations:{changeToken:function(e,n){console.log(n),e.token=n},changeUserInfo:function(e,n){e.userInfo=n},changeUserMenus:function(e,n){e.userMenus=n;var t=Object(O["b"])(n);t.forEach((function(e){w["a"].addRoute("main",e)}));var r=Object(O["a"])(n);e.permissions=r}},actions:{accountLoginAction:function(e,n){return Object(r["a"])(regeneratorRuntime.mark((function t(){var r,o,c,a,u,i,s,d,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,v(n);case 3:return o=t.sent,c=o.data,a=c.id,u=c.token,r("changeToken",u),m["a"].setCache("token",u),t.next=9,y(a);case 9:return i=t.sent,s=i.data,r("changeUserInfo",s),m["a"].setCache("userInfo",s),t.next=15,k(s.role.id);case 15:d=t.sent,f=d.data,r("changeUserMenus",f),m["a"].setCache("userMenus",f),w["a"].push("/main");case 20:case"end":return t.stop()}}),t)})))()},loadLocalLogin:function(e){var n=e.commit,t=m["a"].getCache("token");t&&n("changeToken",t);var r=m["a"].getCache("userInfo");r&&n("changeUserInfo",r);var o=m["a"].getCache("userMenus");o&&n("changeUserMenus",o)}}},C=j;t("fb6a"),t("99af");function L(e,n){return g.post({url:e,data:n})}function I(e){return g.delete({url:e})}function x(e,n){return g.post({url:e,data:n})}function E(e,n){return g.patch({url:e,data:n})}var P={namespaced:!0,state:function(){return{usersList:[],usersCount:0,roleList:[],roleCount:0,goodsList:[],goodsCount:0,menuList:[],menuCount:0}},mutations:{changeUsersList:function(e,n){e.usersList=n},changeUsersCount:function(e,n){e.usersCount=n},changeRoleList:function(e,n){e.roleList=n},changeRoleCount:function(e,n){e.roleCount=n},changeGoodsList:function(e,n){e.goodsList=n},changeGoodsCount:function(e,n){e.goodsCount=n},changeMenuList:function(e,n){e.menuList=n},changeMenuCount:function(e,n){e.menuCount=n}},getters:{pageListData:function(e){return function(n){return e["".concat(n,"List")]}},pageListCount:function(e){return function(n){return e["".concat(n,"Count")]}}},actions:{getPageListAction:function(e,n){return Object(r["a"])(regeneratorRuntime.mark((function t(){var r,o,c,a,u,i,s,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,o=n.pageName,c="/".concat(o,"/list"),t.next=5,L(c,n.queryInfo);case 5:a=t.sent,u=a.data,i=u.list,s=u.totalCount,console.log(a),d=o.slice(0,1).toUpperCase()+o.slice(1),console.log(d),r("change".concat(d,"List"),i),r("change".concat(d,"Count"),s);case 12:case"end":return t.stop()}}),t)})))()},deletePageDataAction:function(e,n){return Object(r["a"])(regeneratorRuntime.mark((function t(){var r,o,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,o=n.pageName,c=n.id,console.log(n),a="/".concat(o,"/").concat(c),t.next=6,I(a);case 6:r("getPageListAction",{pageName:o,queryInfo:{offset:0,size:10}});case 7:case"end":return t.stop()}}),t)})))()},createPageDataAction:function(e,n){return Object(r["a"])(regeneratorRuntime.mark((function t(){var r,o,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,o=n.pageName,c=n.newData,a="/".concat(o),t.next=5,x(a,c);case 5:r("getPageListAction",{pageName:o,queryInfo:{offset:0,size:10}});case 6:case"end":return t.stop()}}),t)})))()},editePageDataAction:function(e,n){return Object(r["a"])(regeneratorRuntime.mark((function t(){var r,o,c,a,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,o=n.pageName,c=n.editeData,a=n.id,u="/".concat(o,"/").concat(a),t.next=5,E(u,c);case 5:r("getPageListAction",{pageName:o,queryInfo:{offset:0,size:10}});case 6:case"end":return t.stop()}}),t)})))()}}},A=P,D=Object(o["a"])({state:function(){return{name:"coder",age:18,entireDepartment:[],entireRole:[]}},mutations:{changeName:function(e){console.log(e)},changeEntireDepartment:function(e,n){e.entireDepartment=n},changeEntireRole:function(e,n){e.entireRole=n}},getters:{},actions:{getInitialDataAction:function(e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var t,r,o,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.next=3,L("/department/list",{offset:0,size:100});case 3:return r=n.sent,o=r.data.list,console.log(8,r),n.next=8,L("/role/list",{offset:0,size:100});case 8:c=n.sent,console.log(9,c),a=c.data.list,t("changeEntireDepartment",o),t("changeEntireRole",a);case 13:case"end":return n.stop()}}),n)})))()}},modules:{login:C,system:A}});function q(){D.dispatch("login/loadLocalLogin"),D.dispatch("getInitialDataAction")}function M(){return Object(o["b"])()}n["a"]=D},"09e6":function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t("b85c"),o=(t("d3b7"),t("159b"),t("ddb0"),t("ac1f"),t("1276"),t("7db0"),t("b0c0"),null);function c(e){var n=[],c=[],a=t("d1d0");a.keys().forEach((function(e){var n=t("b4c1")("./main"+e.split(".")[1]);c.push(n.default)}));var u=function e(t){var a,u=Object(r["a"])(t);try{var i=function(){var t=a.value;if(2===t.type){var r=c.find((function(e){return e.path===t.url}));r&&n.push(r),o||(o=t)}else e(t.children)};for(u.s();!(a=u.n()).done;)i()}catch(s){u.e(s)}finally{u.f()}};return u(e),n}function a(e,n){var t=[];return u(e,n,t),t}function u(e,n,t){var o,c=Object(r["a"])(e);try{for(c.s();!(o=c.n()).done;){var a=o.value;if(1===a.type){var i,s=u(null!==(i=a.children)&&void 0!==i?i:[],n);if(s)return null===t||void 0===t||t.push({name:a.name}),null===t||void 0===t||t.push({name:s.name}),s}else if(2===a.type&&a.url===n)return a}}catch(d){c.e(d)}finally{c.f()}}function i(e){var n=[],t=function e(t){var o,c=Object(r["a"])(t);try{for(c.s();!(o=c.n()).done;){var a,u=o.value;if(1===u.type||2===u.type)e(null!==(a=u.children)&&void 0!==a?a:[]);else 3===u.type&&n.push(u.permission)}}catch(i){c.e(i)}finally{c.f()}};return t(e),n}},"1d4b":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return t.e("chunk-2d20e892").then(t.bind(null,"b07e"))};n["default"]={path:"/main/analysis/overview",name:"overview",component:r,children:[]}},4590:function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return Promise.all([t.e("chunk-9f3b5866"),t.e("chunk-5a9585dc")]).then(t.bind(null,"a4c2"))};n["default"]={path:"/main/system/user",name:"user",component:r,children:[]}},"522b":function(e,n,t){},5718:function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return t.e("chunk-2d0efcbd").then(t.bind(null,"9a43"))};n["default"]={path:"/main/analysis/dashboard",name:"dashboard",component:r,children:[]}},"632e":function(e,n,t){},"74bd":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return t.e("chunk-2d0c42b6").then(t.bind(null,"3a4f"))};n["default"]={path:"/main/product/category",name:"category",component:r,children:[]}},"754c":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return t.e("chunk-2d221a33").then(t.bind(null,"cacb"))};n["default"]={path:"/main/system/department",name:"department",component:r,children:[]}},8520:function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return Promise.all([t.e("chunk-9f3b5866"),t.e("chunk-2d21b348")]).then(t.bind(null,"bf7e"))};n["default"]={path:"/main/system/role",name:"role",component:r,children:[]}},"98d0":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return t.e("chunk-e96e7460").then(t.bind(null,"404f"))};n["default"]={path:"/main/product/goods",name:"goods",component:r,children:[]}},"9c08":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return t.e("chunk-2d22cab4").then(t.bind(null,"f3e6"))};n["default"]={path:"/main/story/list",name:"list",component:r,children:[]}},afbc:function(e,n,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0");var r=t("6c02"),o=t("d80c"),c=[{path:"/",redirect:"/main"},{path:"/login",name:"login",component:function(){return t.e("chunk-378537b9").then(t.bind(null,"dc3f"))}},{path:"/main",name:"main",component:function(){return t.e("chunk-7805fd52").then(t.bind(null,"85d4"))}},{path:"/:pathMatch(.*)*",name:"not-found",component:function(){return t.e("chunk-2d0b37df").then(t.bind(null,"2935"))}}],a=Object(r["a"])({routes:c,history:Object(r["b"])()});a.beforeEach((function(e){if("/login"!==e.path){var n=o["a"].getCache("token");if(!n)return"/login"}})),n["a"]=a},b024:function(e,n,t){"use strict";t("632e")},b4c1:function(e,n,t){var r={"./main/analysis/dashboard/dashboard":"5718","./main/analysis/dashboard/dashboard.ts":"5718","./main/analysis/overview/overview":"1d4b","./main/analysis/overview/overview.ts":"1d4b","./main/product/category/category":"74bd","./main/product/category/category.ts":"74bd","./main/product/goods/goods":"98d0","./main/product/goods/goods.ts":"98d0","./main/story/chat/chat":"012e","./main/story/chat/chat.ts":"012e","./main/story/list/list":"9c08","./main/story/list/list.ts":"9c08","./main/system/department/department":"754c","./main/system/department/department.ts":"754c","./main/system/menu/menu":"e8c5","./main/system/menu/menu.ts":"e8c5","./main/system/role/role":"8520","./main/system/role/role.ts":"8520","./main/system/user/user":"4590","./main/system/user/user.ts":"4590"};function o(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id="b4c1"},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o={class:"app"};function c(e,n,t,c,a,u){var i=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createVNode"])(i)])}var a=Object(r["defineComponent"])({name:"App",components:{}}),u=(t("b024"),t("6b0d")),i=t.n(u);const s=i()(a,[["render",c]]);var d=s,f=t("afbc"),l=t("0613"),h=t("b85c"),p=(t("b0c0"),t("cf2e")),m=t("d8e8"),b=t("c349"),g=t("952e"),v=t("e0ad"),y=t("8430"),k=t("def7"),w=t("e2bc"),O=t("fc2b"),j=t("54bb"),C=t("5ffa"),L=t("bfd2"),I=t("7f58"),x=t("5fef"),E=t("c1b8"),P=t("1e49"),A=t("91c0"),D=t("0291"),q=t("7faf"),M=t("03ae"),N=t("db9d"),R=[p["a"],m["a"],m["b"],b["a"],g["a"],v["b"],v["a"],y["a"],k["a"],w["b"],w["c"],w["d"],w["a"],O["a"],O["b"],O["c"],O["d"],j["a"],C["a"],C["c"],C["b"],L["a"],I["a"],x["a"],E["a"],E["b"],P["a"],P["b"],A["b"],A["a"],D["a"],q["a"],M["a"],N["a"]],U=function(e){var n,t=Object(h["a"])(R);try{for(t.s();!(n=t.n()).done;){var r=n.value;e.component(r.name,r)}}catch(o){t.e(o)}finally{t.f()}},T=t("5a0c"),S=t.n(T),_=t("0ecf"),z=t.n(_);S.a.extend(z.a);var B="YYYY-MM-DD HH:mm:ss";function H(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B;return S.a.utc(e).format(n)}function J(e){e.config.globalProperties.$filters={foo:function(){console.log("foo")},formatTime:function(e){return H(e)}}}function Y(e){e.use(U),e.use(J)}t("f5df1"),t("d9b6"),t("522b");var F=Object(r["createApp"])(d);F.use(Y),Object(l["b"])(),F.use(l["a"]),F.use(f["a"]),F.mount("#app")},d1d0:function(e,n,t){var r={"./analysis/dashboard/dashboard.ts":"5718","./analysis/overview/overview.ts":"1d4b","./product/category/category.ts":"74bd","./product/goods/goods.ts":"98d0","./story/chat/chat.ts":"012e","./story/list/list.ts":"9c08","./system/department/department.ts":"754c","./system/menu/menu.ts":"e8c5","./system/role/role.ts":"8520","./system/user/user.ts":"4590"};function o(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id="d1d0"},d80c:function(e,n,t){"use strict";var r=t("d4ec"),o=t("bee2"),c=(t("e9c4"),function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"setCache",value:function(e,n){window.localStorage.setItem(e,JSON.stringify(n))}},{key:"getCache",value:function(e){var n=window.localStorage.getItem(e);if(n)return JSON.parse(n)}},{key:"deleteCache",value:function(e){window.localStorage.removeItem(e)}},{key:"clearCache",value:function(){window.localStorage.clear()}}]),e}());n["a"]=new c},e8c5:function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");var r=function(){return t.e("chunk-39f68200").then(t.bind(null,"ab96"))};n["default"]={path:"/main/system/menu",name:"menu",component:r,children:[]}}});
//# sourceMappingURL=app.f5120edc.js.map