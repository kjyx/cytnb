(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68af5ddc"],{8172:function(e,t,n){},b75d:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"con"},[n("div",{staticClass:"title"},[e._v(" 当前位置：首页＞科普病例 ")]),n("van-tabs",{attrs:{color:"#0080ff"},on:{click:e.newsClick}},e._l(e.newsNameList,(function(e){return n("van-tab",{key:e.id,attrs:{title:e.title,name:e.id}})})),1),n("ul",{staticClass:"news-list",staticStyle:{"margin-top":"20px"},on:{click:function(t){return e.$router.push("newsinfo?id=8")}}},e._l(e.newsList,(function(t){return n("li",{key:t.id},[n("h3",[e._v(e._s(t.newsTitle))]),n("h5",[e._v(e._s(t.createTime.slice(0,10)))]),n("p",[e._v(e._s(t.newsDescribe))])])})),0),n("van-pagination",{attrs:{mode:"simple","page-count":e.newsNum},on:{change:e.newsChange},model:{value:e.docPagenum,callback:function(t){e.docPagenum=t},expression:"docPagenum"}})],1)},s=[],a=n("1da1"),c=(n("96cf"),n("4ec3")),l={name:"kepubingli",data:function(){return{newsNameList:[{title:"典型病例",id:15},{title:"健康知识",id:16},{title:"疫情报道",id:17},{title:"防疫知识",id:18}],newsList:[],newsNum:null,type:null,docPagenum:null}},methods:{newsChange:function(e){this.loadnewsList(this.type,e)},loadnewsList:function(){var e=arguments,t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i,s,a,l,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.length>0&&void 0!==e[0]?e[0]:null,s=e.length>1&&void 0!==e[1]?e[1]:1,a=e.length>2&&void 0!==e[2]?e[2]:5,l={},0!==i&&(l.newsType=i),l.pageNum=s,l.pageSize=a,n.next=9,Object(c["e"])(l);case 9:o=n.sent,t.newsList=o.rows,t.newsNum=o.totalPage;case 12:case"end":return n.stop()}}),n)})))()},newsClick:function(e){this.type=e,this.loadnewsList(e)}},mounted:function(){this.loadnewsList(15)}},o=l,u=(n("fc88"),n("2877")),r=Object(u["a"])(o,i,s,!1,null,"8e0f14ac",null);t["default"]=r.exports},fc88:function(e,t,n){"use strict";n("8172")}}]);
//# sourceMappingURL=chunk-68af5ddc.3cceb2d2.js.map