(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{466:function(t,e,r){var content=r(490);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("49cc25f0",content,!0,{sourceMap:!1})},489:function(t,e,r){"use strict";var n=r(466);r.n(n).a},490:function(t,e,r){(t.exports=r(20)(!1)).push([t.i,"form[data-v-92af73b2]{width:600px}",""])},524:function(t,e,r){"use strict";r.r(e);r(22);var n=r(2),l={layout:"admin",middleware:["admin-auth"],data:function(){return{image:null,previewDialog:!1,loading:!1,form:{title:"",text:""},rules:{text:[{required:!0,message:"Текст не должен быть пустым",trigger:"blur"}],title:[{required:!0,message:"Заголовок не может быть пустым",trigger:"blur"}]}}},methods:{handleImageChange:function(t,e){this.image=t.raw},onSubmit:function(){var t=this;this.$refs.form.validate(function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||!t.image){e.next=20;break}return e.prev=1,t.loading=!0,n={title:t.form.title,text:t.form.text,image:t.image},e.next=6,t.$store.dispatch("news/create",n);case 6:t.form.title="",t.form.text="",t.image=null,t.$refs.upload.clearFiles(),t.$message.success("Новость создана"),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:return e.prev=15,t.loading=!1,e.finish(15);case 18:e.next=21;break;case 20:t.$message.warning("Форма не валидна");case 21:case"end":return e.stop()}},e,null,[[1,13,15,18]])}));return function(t){return e.apply(this,arguments)}}())}}},o=(r(489),r(7)),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules},nativeOn:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("h1",{staticClass:"mb"},[t._v("Создать новость")]),t._v(" "),r("el-form-item",{attrs:{label:"Введите заголовок новости",prop:"title"}},[r("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("el-form-item",{staticClass:"mb2",attrs:{label:"Текст в формате .md или .html",prop:"text"}},[r("el-input",{attrs:{type:"textarea",resize:"none",rows:10},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),t._v(" "),r("el-upload",{ref:"upload",staticClass:"mb",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/","on-change":t.handleImageChange,"auto-upload":!1}},[r("i",{staticClass:"el-icon-upload"}),t._v(" "),r("div",{staticClass:"el-upload__text"},[t._v("Перетащите картинку "),r("em",[t._v("или нажмите")])]),t._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("файлы с расширением jpg/png")])]),t._v(" "),r("el-button",{staticClass:"mb",attrs:{type:"success",plain:""},on:{click:function(e){t.previewDialog=!0}}},[t._v("\n    Предпросмотр\n  ")]),t._v(" "),r("el-dialog",{attrs:{title:"Предпросмотр",visible:t.previewDialog},on:{"update:visible":function(e){t.previewDialog=e}}},[r("div",{key:t.form.text},[r("vue-markdown",[t._v(t._s(t.form.text))])],1)]),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit",round:"",loading:t.loading}},[t._v("\n      Создать новость\n    ")])],1)],1)},[],!1,null,"92af73b2",null);e.default=component.exports}}]);