(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02d8ef2c"],{"46fe":function(t,e,n){},"529b":function(t,e,n){t.exports=n.p+"static/img/yiyuanwenhua.3dcd0f24.png"},"64d9":function(t,e,n){"use strict";n("46fe")},"9c93":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"con"},[a("div",{staticClass:"title"},[t._v(" 当前位置：首页＞关于我们 ")]),a("van-tabs",{attrs:{color:"#0080ff",active:t.active}},[a("van-tab",{attrs:{title:"医院介绍"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("河南科技职业大学附属第五医院")]),a("div",[t._v(" （周口承悦糖尿病医院） 我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市 城镇职工、城乡居民医保定点直补单位、省内及跨省异地就医住院费用直接结算定点医疗机构。 我院聘请省、市知名专家教授，组建强大专家团队，技术力量雄厚，是以内分泌糖尿病为核心科室，开展足病科、眼科、心脑血管科、呼吸内科、甲状腺科、中医科、骨科、骨骼矫形科、疼痛康复科、儿童生长发育科、不育不孕科、营养科以及健康体检中心等特色科室的“大专科、小综合”医院。 我院规模宏大，环境优美，设施设备先进齐全，拥有美国GE CT、核磁共振、数字化DR、德国罗氏电化 学发光仪、日本希森美康血液分析仪、美国感觉神经定量测量仪、美国VISTA周围血管诊断系统、美力敦胰岛素泵、韩国双能X线骨密度测定仪、挪威奥菲全自动特种蛋白分析系统、无散瞳眼底照相仪、眼底激光治疗仪等高端诊疗设备和专业体检设备。 ")])]),a("van-tab",{attrs:{title:"医院发展"}},[a("ul",{staticClass:"news-list",staticStyle:{"margin-top":"20px"}},t._l(t.fazhanList,(function(e){return a("li",{key:e.id},[a("h3",[t._v(t._s(e.newsTitle))]),a("h5",[t._v(t._s(e.createTime.slice(0,10)))]),a("p",[t._v(t._s(e.newsDescribe))])])})),0)]),a("van-tab",{attrs:{title:"医院文化"}},[a("img",{staticStyle:{display:"block",width:"100%",height:"auto"},attrs:{src:n("529b"),alt:""}})]),a("van-tab",{attrs:{title:"院容院貌"}},[a("ul",{staticClass:"yuanrongList"},t._l(t.yuanrongyuanmaoList,(function(e){return a("li",{key:e.id},[a("img",{attrs:{src:""+t.$store.state.baseUrl+e.honorFengmian,alt:""}}),a("p",[t._v(t._s(e.honorTitle))])])})),0)]),a("van-tab",{attrs:{title:"荣誉资质"}},[a("ul",{staticClass:"yuanrongList"},t._l(t.rongyuzizhiList,(function(e){return a("li",{key:e.id},[a("img",{attrs:{src:""+t.$store.state.baseUrl+e.honorFengmian,alt:""}}),a("p",[t._v(t._s(e.honorTitle))])])})),0)])],1)],1)},i=[],s=n("1da1"),r=(n("96cf"),n("4ec3")),o={name:"aboutme",data:function(){return{active:0,navList:[{title:"医院介绍",id:null},{title:"院长介绍",id:1},{title:"医院发展",id:2},{title:"医院文化",id:3},{title:"院容院貌",id:4}],fazhanList:[],rongyuzizhiList:[],yuanrongyuanmaoList:[]}},methods:{loadNewsList:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,i,s,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:null,i=t.length>1&&void 0!==t[1]?t[1]:1,s=t.length>2&&void 0!==t[2]?t[2]:5,o={},o.newsType=a,o.pageNum=i,o.pageSize=s,n.next=9,Object(r["f"])(o);case 9:c=n.sent,e.fazhanList=c.rows,e.total=c.total;case 12:case"end":return n.stop()}}),n)})))()},loadRyzzList:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:1,i={pageNum:a,pageSize:10,honorType:1},n.next=4,Object(r["g"])(i);case 4:s=n.sent,console.log(s),e.rongyuzizhiList=s.rows,e.total=s.total;case 8:case"end":return n.stop()}}),n)})))()},loadrongyuList:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:1,i={pageNum:a,pageSize:10,honorType:2},n.next=4,Object(r["g"])(i);case 4:s=n.sent,console.log(s),e.yuanrongyuanmaoList=s.rows,e.total=s.total;case 8:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.loadNewsList(10),this.loadRyzzList(),this.loadrongyuList(),console.log(this.rongyuzizhiList,this.yuanrongyuanmaoList)}},c=o,l=(n("64d9"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,"8c97265e",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-02d8ef2c.85a5a5a1.js.map