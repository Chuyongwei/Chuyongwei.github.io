(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a2be18a"],{"22c1":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 查询门票\n                ")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"景点名称"},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}}),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"景点id"},model:{value:e.query.id,callback:function(t){e.$set(e.query,"id",t)},expression:"query.id"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("搜索")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"place.name",label:"景点名称"}}),a("el-table-column",{attrs:{prop:"type",label:"票的类型"}}),a("el-table-column",{attrs:{label:"票价"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("￥"+e._s(t.row.price))]}}])}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"id"}},[a("el-input",{attrs:{readonly:""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),a("el-form-item",{attrs:{label:"票价"}},[a("el-input",{attrs:{type:"number"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),a("el-form-item",{attrs:{label:"票的类型"}},[a("el-input",{attrs:{type:"text",readonly:""},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},n=[],i=(a("7f7f"),{name:"basetable",data:function(){return{query:{address:"",name:"",id:"",pid:"",pageIndex:1,pageSize:5},allData:[],tableData:[],multipleSelection:[],delList:[],editVisible:!1,pageTotal:0,form:{},idx:-1,id:-1}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.$axios.post("/SelectTicketPlace",this.query).then((function(t){console.log(t),e.allData=t.data,e.pageTotal=t.data.length})).then((function(){console.log("pageIndex",e.query.pageIndex),console.log("pageSize",e.query.pageSize);var t=(e.query.pageIndex-1)*e.query.pageSize,a=e.query.pageIndex*e.query.pageSize-1;console.log(t,a),e.tableData=e.allData.splice(t,e.query.pageSize),console.log("表格数据",e.tableData)}))},handleSearch:function(){var e=this;console.log(this.query),this.$axios.post("/SelectTicketPlace",this.query).then((function(t){console.log(t),e.allData=t.data,e.pageTotal=t.data.length,e.$set(e.query,"pageIndex",1);var a=(e.query.pageIndex-1)*e.query.pageSize;e.tableData=e.allData.splice(a,e.query.pageSize),e.pageTotal=t.data.length}))},handleDelete:function(e,t){var a=this,l=this.$axios;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){console.log(t),l.post("/delete",t).then((function(t){console.log(t),a.$message.error("删除成功"),a.tableData.splice(e,1)}))})).catch((function(){}))},handleSelectionChange:function(e){console.log("点击全选",e),this.multipleSelection=e},delAllSelection:function(){var e=this.multipleSelection.length,t="";this.delList=this.delList.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了".concat(t)),this.multipleSelection=[]},handleEdit:function(e,t){console.log("点击编辑"),console.log("index",e),console.log("row",t),this.idx=e,this.form=t,this.editVisible=!0},saveEdit:function(){var e=this;this.editVisible=!1,this.$axios.post("/UpdateTicket",this.form).then((function(t){console.log(t),e.$message.warning("修改第 ".concat(e.idx+1," 行成功")),e.getData()}))},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),console.log("点击页码"),console.log("val",e),console.log("query",this.query),this.getData()}}}),o=i,s=(a("59d2"),a("2877")),r=Object(s["a"])(o,l,n,!1,null,"d17f95f2",null);t["default"]=r.exports},"59d2":function(e,t,a){"use strict";a("e64d")},e64d:function(e,t,a){}}]);