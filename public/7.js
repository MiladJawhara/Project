(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{12:function(t,e,i){"use strict";var a=i(2);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r={props:{items:{type:Array,require:!0},dataToList:{type:Array,require:!0},dataTitles:{type:Array},newItemBtnLable:{type:String},maxDialogsWidth:{type:String,default:"500px"},itemDeleteable:{type:Boolean},itemEditable:{type:Boolean},itemHasDetails:{type:Boolean},deleteConfirmMsg:{type:String,default:"Are you sure you want to delete?"},searchable:{type:Boolean}},created:function(){var t=this;this.dataToList&&(this.headers=this.dataToList.map((function(e,i){var a={text:t.dataTitles&&t.dataTitles[i]?t.dataTitles[i]:e,value:e};return 0==i&&(a=s({},a,{align:"start"})),a})),this.itemManagable&&this.headers.push({text:"Actions",value:"actions",align:"end",sortable:!1}))},data:function(){return{headers:[],detailsDialog:!1,editDialog:!1,newItemDialog:!1,selectedItem:null,currentDialog:"newItemDialog",search:""}},methods:{editItem:function(t){this.selectedItem=s({},t),this.editDialog=!0},deleteItem:function(t){confirm(this.deleteConfirmMsg)&&(this.selectedItem=s({},t),this.$emit("deleteItem",t))},showItem:function(t){this.selectedItem=s({},t),this.detailsDialog=!0},closeNewItemDialog:function(){this.newItemDialog=!1},closeEditDialog:function(){this.editDialog=!1},closeDetailsDialog:function(){this.detailsDialog=!1}},components:{},computed:s({},Object(a.c)("global",["isMobile"]),{itemManagable:function(){return this.itemDeleteable||this.itemEditable||this.itemHasDetails}})},o=(i(53),i(1)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:" m-0 p-0"},[i("v-row",{attrs:{justify:"center",dense:""}},[t.searchable?i("v-col",{staticClass:"m-0 p-0",attrs:{cols:"12",sm:"8",md:"6"}},[i("v-toolbar-items",[i("v-text-field",{staticClass:"m-0 p-0",attrs:{type:"text",label:"Search",dense:"","append-icon":"mdi-magnify",outlined:"",height:"20px"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1):t._e(),t._v(" "),i("v-col",{staticClass:"mt-0 p-0",attrs:{cols:"12"}},[i("v-data-table",{staticClass:"elevation-2",attrs:{search:t.search,headers:t.headers,items:t.items},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-spacer"),t._v(" "),t.itemHasDetails?i("v-dialog",{attrs:{"max-width":t.maxDialogsWidth},model:{value:t.detailsDialog,callback:function(e){t.detailsDialog=e},expression:"detailsDialog"}},[i("v-card",{staticClass:"pb-2"},[i("v-icon",{staticClass:"close-mark",on:{click:function(e){return t.closeDetailsDialog()}}},[t._v("mdi-close")]),t._v(" "),t._t("detailsDialog",null,{item:t.selectedItem,close:t.closeDetailsDialog})],2)],1):t._e(),t._v(" "),t.itemEditable?i("v-dialog",{attrs:{"max-width":t.maxDialogsWidth},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[i("v-card",{staticClass:"pb-2"},[i("v-icon",{staticClass:"close-mark",on:{click:function(e){return t.closeEditDialog()}}},[t._v("mdi-close")]),t._v(" "),t._t("editDialog",null,{item:t.selectedItem,close:t.closeEditDialog})],2)],1):t._e(),t._v(" "),t.newItemBtnLable?i("v-dialog",{attrs:{"max-width":t.maxDialogsWidth},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{color:"primary"}},a),[t.isMobile?[i("v-icon",[t._v("mdi-plus")])]:[t._v(t._s(t.newItemBtnLable)+"\n                                    ")]],2)]}}],null,!1,1350980592),model:{value:t.newItemDialog,callback:function(e){t.newItemDialog=e},expression:"newItemDialog"}},[t._v(" "),i("v-card",{staticClass:"pb-2"},[i("v-icon",{staticClass:"close-mark",on:{click:function(e){return t.closeNewItemDialog()}}},[t._v("mdi-close")]),t._v(" "),t._t("newItemDialog",null,{close:t.closeNewItemDialog})],2)],1):t._e()],1)]},proxy:!0},t.itemManagable?{key:"item.actions",fn:function(e){var a=e.item;return[t.itemHasDetails?i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.showItem(a)}}},[t._v("\n                        mdi-eye\n                    ")]):t._e(),t._v(" "),t.itemEditable?i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v("\n                        mdi-pencil\n                    ")]):t._e(),t._v(" "),t.itemDeleteable?i("v-icon",{attrs:{small:"",color:"red"},on:{click:function(e){return t.deleteItem(a)}}},[t._v("\n                        mdi-delete\n                    ")]):t._e()]}}:null,{key:"no-data",fn:function(){return[i("h3",[t._v("No Data Found!")])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,"86ab815c",null);e.a=c.exports},18:function(t,e,i){var a=i(54);"string"==typeof a&&(a=[[t.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};i(15)(a,l);a.locals&&(t.exports=a.locals)},38:function(t,e,i){"use strict";i.r(e);var a=i(2),l=i(12);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o={requiredData:["students","departments","years"],computed:n({},Object(a.c)("data",["getAll","getListOf","getBy"]),{items:function(){var t=this;return this.getAll("students").map((function(e){return n({},e,{dept:t.getBy("title","departments","id",e.department_id),year:t.getBy("title","years","id",e.year_id),emailVerified:e.email_verified_at?"Yes":"No"})}))}}),methods:{},components:{DataList:l.a}},c=i(1),m=Object(c.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",[i("data-list",{attrs:{items:t.items,dataTitles:["First Name","Last Name","Department","Verified"],dataToList:["f_name","l_name","dept","emailVerified"],itemEditable:"",itemDeleteable:"",itemHasDetails:"",searchable:"",maxDialogsWidth:"650px"},scopedSlots:t._u([{key:"detailsDialog",fn:function(e){var a=e.item;e.close;return[a?[i("v-card-title",{staticClass:"primary text-white"},[t._v("\n                            "+t._s(a.f_name)+"'s Detials\n                        ")]),t._v(" "),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",[i("v-list",[i("v-list-item",[i("v-list-item-avatar",{attrs:{width:"100px",height:"100px"}},[i("v-img",{staticClass:"border rounded-circle",attrs:{"lazy-src":a.profile_img_url?a.profile_img_url:"https://randomuser.me/api/portraits/men/81.jpg",alt:a.f_name+"img",src:a.profile_img_url?a.profile_img_url:"https://randomuser.me/api/portraits/men/81.jpg"}})],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{attrs:{title:"Go to "+a.f_name+"'s profile"}},[t._v("\n                                                        "+t._s(a.f_name+" "+a.l_name)+"\n                                                    ")]),t._v(" "),i("v-list-item-subtitle",[t._v(t._s(a.user_type))])],1)],1)],1)],1)],1),t._v(" "),i("v-row",[i("v-col",[i("v-list",[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[i("v-label",{staticClass:"text-bold"},[t._v("\n                                                            Year Of Study:\n                                                        ")]),t._v("\n                                                        "+t._s(a.year)+"\n                                                    ")],1)],1)],1),t._v(" "),i("v-list-item",[i("v-list-item-title",[i("v-label",[t._v("\n                                                        Department:\n                                                    ")]),t._v("\n                                                    "+t._s(a.dept)+"\n                                                ")],1)],1),t._v(" "),i("v-list-item",[i("v-list-item-title",[i("v-label",[t._v("\n                                                        Email:\n                                                    ")]),t._v("\n                                                    "+t._s(a.email)+"\n                                                ")],1)],1)],1)],1)],1)],1)],1)]:t._e()]}},{key:"editDialog",fn:function(e){var a=e.item;e.close;return[a?[i("v-card-title",{staticClass:"primary text-white"},[t._v("\n                            Edit Student\n                        ")])]:t._e()]}}])})],1)],1)],1)}),[],!1,null,"7d02e288",null);e.default=m.exports},53:function(t,e,i){"use strict";var a=i(18);i.n(a).a},54:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,".close-mark[data-v-86ab815c] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: wheat;\n}",""])}}]);