(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{457:function(t,e,r){var content=r(465);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("4bf98f52",content,!0,{sourceMap:!1})},464:function(t,e,r){"use strict";var n=r(457);r.n(n).a},465:function(t,e,r){(t.exports=r(20)(!1)).push([t.i,".service[data-v-db11482c]{padding-top:4rem}.wrap[data-v-db11482c]{width:50%;margin:2rem auto -2rem}.wrap ol[data-v-db11482c]{-moz-column-count:2;-webkit-column-count:2;column-count:2;list-style-type:none;height:auto}li[data-v-db11482c]{margin:8px 15%}.link[data-v-db11482c]{color:#000}.link[data-v-db11482c]:hover{color:#ccc}@media only screen and (max-width:942px){.wrap[data-v-db11482c]{width:500px}}@media only screen and (max-width:550px){.wrap[data-v-db11482c]{width:100%}}",""])},479:function(t,e,r){"use strict";var n={props:{services:Array}},c=(r(464),r(7)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service"},[r("h1",{staticStyle:{"text-align":"center",color:"#2a7db0"}},[t._v("Услуги")]),t._v(" "),r("el-card",{staticClass:"wrap"},[r("ol",t._l(t.services,function(e){return r("li",{key:e._id},[r("nuxt-link",{staticClass:"link",attrs:{to:"/service/"+e._id}},[t._v(t._s(e.title))])],1)}),0)])],1)},[],!1,null,"db11482c",null);e.a=component.exports},526:function(t,e,r){"use strict";r.r(e);r(22);var n=r(2),c={components:{AppServices:r(479).a},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("service/fetchService");case 3:return n=t.sent,t.abrupt("return",{services:n});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},o=r(7),component=Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-services",{attrs:{services:this.services}})],1)},[],!1,null,null,null);e.default=component.exports}}]);