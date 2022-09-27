(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{286:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(107).default)("4ef2b328",content,!0,{sourceMap:!1})},291:function(t,e,r){"use strict";r(286)},292:function(t,e,r){var n=r(106)((function(i){return i[1]}));n.push([t.i,"[class*=-message][data-v-4dbe8b3b]{font-weight:500}.error-message[data-v-4dbe8b3b]{color:#d33c40}.success-message[data-v-4dbe8b3b]{color:#32a95d}",""]),n.locals={},t.exports=n},296:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(63),r(15),r(27),r(198),{data:function(){return{article:{headword:"",about:"",state:""},submitting:!1,error:!1,success:!1,notFound:!1,URL:"https://ja.wikipedia.org/w/api.php?format=xml&origin=*&action=query&prop=extracts&exintro&explaintext&format=json&redirects=1&titles="}},methods:{HandleSubmit:function(){if(this.submitting=!0,this.ClearStatus(),!this.validInput)return this.$refs.first.focus(),void(this.error=!0);this.article.headword=this.article.headword.toUpperCase(),this.SearchWiki()},ClearStatus:function(){console.log("Yes"),this.success=!1,this.error=!1,this.notFound=!1},SearchWiki:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.URL+t.article.headword).then((function(t){return t.json()})).then((function(data){if(data.query.pages[-1])t.article.about="",t.article.state="missing";else for(var e in data.query.pages)t.article.about=data.query.pages[e].extract,t.article.about?t.article.state="found":t.article.state="no extract"})).catch((function(t){console.log(t)}));case 2:t.$emit("add:article",t.article),t.$refs.first.focus(),"found"===t.article.state?t.success=!0:t.notFound=!0,t.submitting=!1,t.article={headword:"",about:"",state:""};case 7:case"end":return e.stop()}}),e)})))()}},computed:{validInput:function(){return!!this.article.headword.match(/^[A-Za-z]*$/)&&3===this.article.headword.length}}}),c=(r(291),r(46)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.HandleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"pt-20 form-control"},[e("div",{staticClass:"input-group justify-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.article.headword,expression:"article.headword"}],ref:"first",staticClass:"input input-bordered w-[calc(30%)]",attrs:{type:"text",placeholder:"Enter 3 letters"},domProps:{value:t.article.headword},on:{focus:t.ClearStatus,keypress:t.ClearStatus,input:function(e){e.target.composing||t.$set(t.article,"headword",e.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-square"},[e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])])]),t._v(" "),e("div",{staticClass:"flex justify-center"},[t.error&&t.submitting?e("div",{staticClass:"alert alert-error shadow-lg w-[calc(50%)] opacity-80 flex justify-center"},[e("div",[e("svg",{staticClass:"stroke-current flex-shrink-0 h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" "),e("span",[t._v("Please Enter 3 Letters")])])]):t.notFound?e("div",{staticClass:"alert alert-warning shadow-lg w-[calc(50%)] opacity-80 flex justify-center"},[e("div",[e("svg",{staticClass:"stroke-current flex-shrink-0 h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" "),e("span",[t._v("Extract is not found")])])]):t.success?e("div",{staticClass:"alert alert-success shadow-lg w-[calc(50%)] opacity-80 flex justify-center"},[e("div",[e("svg",{staticClass:"stroke-current flex-shrink-0 h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" "),e("span",[t._v("Article successfully added!")])])]):e("div",{staticClass:"alert opacity-0"},[t._m(0)])])])])])}),[function(){var t=this._self._c;return t("div",[t("span",[this._v("Empty message")])])}],!1,null,"4dbe8b3b",null);e.default=component.exports}}]);