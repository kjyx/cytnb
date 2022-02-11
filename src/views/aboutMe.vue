<template>
  <div>
  <subNav :info-list="infoList" :userNavList="userNavList" style="margin-bottom: 0"></subNav>
  <div class="box">
    <div class="entry">
      <div class="wp">
        <div class="entry-box">
          <!-- 大盒子上半部分 -->
          <div class="entry-box_top">
            <!-- 上边盒子左半部分 -->
            <div class="entry-left">
              <!-- 内容区 -->
              <div class="entry_artlcl">
                <!-- 内容区头部 -->
                <div class="artlcl_caption">
                  <h2>河南科技职业大学附属第五医院</h2>
                  <span>（周口承悦糖尿病医院）</span>
                </div>
                <!-- 内容区文章 -->
                <div class="artlcl_descaption">
                  <p>我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市
                    城镇职工、城乡居民医保定点直补单位、省内及跨省异地就医住院费用直接结算定点医疗机构。</p>
                  <p>我院聘请省、市知名专家教授，组建强大专家团队，技术力量雄厚，是以内分泌糖尿病为核心科室，开展足病科、眼科、心脑血管科、呼吸内科、甲状腺科、中医科、骨科、骨骼矫形科、疼痛康复科、儿童生长发育科、不育不孕科、营养科以及健康体检中心等特色科室的“大专科、小综合”医院。
                  </p>
                  <p>我院规模宏大，环境优美，设施设备先进齐全，拥有美国GE CT、核磁共振、数字化DR、德国罗氏电化
                    学发光仪、日本希森美康血液分析仪、美国感觉神经定量测量仪、美国VISTA周围血管诊断系统、美力敦胰岛素泵、韩国双能X线骨密度测定仪、挪威奥菲全自动特种蛋白分析系统、无散瞳眼底照相仪、眼底激光治疗仪等高端诊疗设备和专业体检设备。
                  </p>
                </div>
              </div>
            </div>
            <!-- 上面图片 -->
            <div class="entry_img1">
              <div class="swiper mySwiper" ref="swiper" style="width: 520px; overflow: hidden">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="@/assets/aboutme/01.png" alt=""></div>
                  <div class="swiper-slide"><img src="@/assets/aboutme/02.png" alt=""></div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- 大盒子下半部分 -->
          <div class="entry-box_button">
            <!-- 下边图片 -->
            <div class="entry_img2">
              <div class="swiper mySwiper" ref="swiperTwo" style="overflow: hidden">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="@/assets/aboutme/03.png" alt=""></div>
                  <div class="swiper-slide"><img src="@/assets/aboutme/04.png" alt=""></div>
                </div>
              </div>
            </div>
            <!-- 下边内容区 -->
            <div class="entry-artlcl_right">
              <div class="artlcl_unit">
                <p>河南省健康促进医院</p>
                <p>国家区域（华中）糖尿病诊疗中心专科联盟单位</p>
                <p>郑州市眼科医院技术协作医院</p>
                <p>开封市中医院技术协作医院</p>
                <p>周口市内分泌糖尿病专科联盟牵头单位</p>
                <p>周口市川汇区肢体矫治手术定点康复机构</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 摘要 -->
      <div class="summary">
        <div class="wp">
          <div class="summary-a">
            <div class="summary_center">
              <p>健康所系，生命相托，我院全体医护人员以先进的医疗理念，<br> 精湛的医术、“一站式服务，全病程管理”的贴心服务，竭诚为患者的健康安全保驾护航！</p>
              <p>All the medical staff of our hospital have advanced medical concepts,Exquisite medical
                skills,
                "one-stop service, <br> whole course management" intimate service, wholeheartedly escort
                the
                health and safety of patients!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import  subBanner from '@/components/subBanner'
import subNav from "@/components/subNav";
import "swiper/css/swiper.css";
import Swiper from "swiper";
export default {
  name: "aboutMe",
  data() {
    return {
      infoList: {
          title:'医院简介',
          path:''
      },
      userNavList:[
        {
          title:'医院介绍',
          path:'/aboutme'
        },
        {
          title:'医院发展',
          path:'/newscenter?id=10'
        },
        {
          title:'医院文化',
          path:'/yywh'
        },
        {
          title:'院容院貌',
          path:'/yrym'
        },
        {
          title:'荣誉资质',
          path:'/ryzz'
        }
      ]
     }
     },
  methods: {
    init() {
      this.swiper = new Swiper(this.$refs.swiper, {
        autoplay:true,
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        grabCursor : true,
      });
      this.swiper = new Swiper(this.$refs.swiperTwo, {
        autoplay:true,
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        grabCursor : true,
      });
    },
  },
  mounted() {
    this.init()
  },
  components:{
    subBanner,
    subNav
  }
}
</script>

<style scoped lang="less">
.box{
  padding-top:200px ;
  margin: 0 auto;
  width: 1920px;
  height: 1740px;
  background: url(~@/assets/aboutme/beijing.png) no-repeat;

}
// 医院文章
   .entry-box{
     width: 100%;
     height: 940px;
   // background-color: pink;
.entry-box_top{
  display: flex;
  width: 100%;
  height: 596px;
// background-color: green;
.entry-left{
  width: 880px;
  background-color: #247AC0;
.entry_artlcl{
  width: 100%;
  height: 100%;
  color: #EBF0F2;
  padding: 62px 45px 0 33px;
.artlcl_caption{
h2{
  font-size: 33px;
  font-weight: 800;
}
span{
  display: inline-block;
  padding-top: 33px;
  font-size: 17px;
}
}
.artlcl_descaption{
  margin-top: 36px;
p{
  font-size: 17px;
  font-weight: 400;
&:nth-child(2){
   padding-top: 67px;
 }
&:nth-child(3){
   padding-top: 58px;
   line-height: 1.5em;
 }
}
}
}
}
.entry_img1{
  width: 520px;
  .swiper {
    width: 520px;
    img {
      display: block;
      width: 520px;
      height: 600px;
    }
  }
}
}
.entry-box_button{
  display: flex;
  height: 343px;
.entry_img2{
  width: 880px;
// background-color: purple;
}
.entry-artlcl_right{
  width: 520px;
  background-color: #247AC0;
  color: #EBF0F2;
.artlcl_unit{
  padding: 50px 0 0 49px;
  font-size: 17px;
  line-height: 2.5em;
  letter-spacing: 2px;
}
}
}
}



// 摘要
   .summary{
     height: 313px;
     margin-top: 97px;
.summary-a{
  height: 313px;
// background-color: pink;
  margin: 0 50px;
  border: 6px solid #E9B750;
  background-color: #fff;
}
.summary_center{
  margin: 80px 0 110px 0;
  width: 100%;
// background-color: green;
  color: #7A9199;
p{
  text-align: center;
  line-height: 2em;
&:nth-child(2){
   padding-top: 10px;
   font-size: 17px;
   line-height: 1.2em;
 }
}
}
}
</style>