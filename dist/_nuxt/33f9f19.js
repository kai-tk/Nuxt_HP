(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{285:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("2656c8c9",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n(285)},288:function(t,e,n){var o=n(106)((function(i){return i[1]}));o.push([t.i,".menu-drawer{transition:transform .6s ease}",""]),o.locals={},t.exports=o},295:function(t,e,n){"use strict";n.r(e);var o={methods:{CloseDrawer:function(component){this.$emit("changeComponent",component),document.getElementById("menu-drawer").click()}}},r=o,l=(n(287),n(46)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"drawer"},[e("input",{staticClass:"drawer-toggle",attrs:{id:"menu-drawer",type:"checkbox"}}),t._v(" "),e("div",{staticClass:"drawer-content"},[e("label",{staticClass:"fixed m-12 btn btn-circle swap swap-rotate",attrs:{for:"menu-drawer"}},[e("svg",{staticClass:"swap-off fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"}})]),t._v(" "),e("svg",{staticClass:"swap-on fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 512 512"}},[e("polygon",{attrs:{points:"400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"}})])]),t._v(" "),t._t("default")],2),t._v(" "),e("div",{staticClass:"drawer-side"},[e("label",{staticClass:"drawer-overlay",attrs:{for:"menu-drawer"}}),t._v(" "),e("ul",{staticClass:"fixed pt-10 h-screen menu overflow-y-auto w-80 bg-base-100 text-base-content"},[e("li",{on:{click:function(e){return t.CloseDrawer("Home")}}},[e("NuxtLink",{attrs:{to:"/",tag:"div"}},[t._v("Top")])],1),t._v(" "),e("li",{staticClass:"pt-5",on:{click:function(e){return t.CloseDrawer("W3L")}}},[e("NuxtLink",{attrs:{to:"/",tag:"div"}},[t._v("What 3 Letters")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},305:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{currentComponent:"Home"}},methods:{changeComponent:function(component){this.currentComponent=component}}},r=n(46),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200"},[e("Menu",{on:{changeComponent:t.changeComponent}},[e("keep-alive",[e(t.currentComponent,{tag:"component",on:{changeComponent:t.changeComponent}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Menu:n(295).default})}}]);