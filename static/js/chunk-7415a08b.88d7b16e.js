(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7415a08b"],{"50fc":function(e,t,o){"use strict";var r=o("bc3a"),a=o.n(r);a.a.defaults.baseURL="http://localhost:8085/admin";var s=a.a.create({timeout:5e3});s.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject()})),s.interceptors.response.use((function(e){if(200===e.status)return e.data;Promise.reject()}),(function(e){return console.log(e),Promise.reject()}));a.a.defaults.baseURL="http://127.0.0.1:8888/admin"},8163:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"crumbs"},[o("el-breadcrumb",{attrs:{separator:"/"}},[o("el-breadcrumb-item",[o("i",{staticClass:"el-icon-lx-calendar"}),e._v(" 表单 ")]),o("el-breadcrumb-item",[e._v("买票")])],1)],1),o("div",{staticClass:"container"},[o("div",{staticClass:"form-box"},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"购票人或id"}},[o("el-input",{attrs:{placeholder:"输入售票人姓名或id"},model:{value:e.form.touristName,callback:function(t){e.$set(e.form,"touristName",t)},expression:"form.touristName"}})],1),o("el-form-item",{attrs:{label:"景点名称"}},[o("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"数量"}},[o("el-input",{attrs:{type:"number"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),o("el-form-item",{attrs:{label:"购买时间"}},[o("el-col",{attrs:{span:11}},[o("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1)],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("表单提交")]),o("el-button",[e._v("取消")])],1)],1)],1)])])},a=[],s=(o("50fc"),o("bc3a"),{name:"baseform",data:function(){return{form:{place:{}}}},methods:{onSubmit:function(){console.log(this.form),console.log(JSON.stringify(this.form)),this.$axios.post("/addScore",this.form).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),this.$message.success("提交成功！")}}}),l=s,n=o("2877"),i=Object(n["a"])(l,r,a,!1,null,null,null);t["default"]=i.exports}}]);