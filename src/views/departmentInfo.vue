<template>
<div class="con">
  <sub-nav :info-list="infoList"></sub-nav>
  <div class="main wp">
      <div class="top">
        <el-image :src="`${$store.state.baseUrl}${departmentInfo.departmentFengmian}`"></el-image>
          <article>
              <h3>{{ departmentInfo.departmentName }}</h3>
              <div class="text-con">
                  <div v-html="departmentInfo.departmentContext"></div>
              </div>
          </article>
      </div>
      <div class="about-box">
        <h3 class="title">相关专家</h3>
        <div class="swiper-container swiper" ref="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in doctorList" :key="item.id">
              <!-- 内容 -->
              <div class="doctor-item">
                <div class="pic">
                  <img :src="`${$store.state.baseUrl}${item.dockerFengmian}`" alt="">
                </div>
                <div class="text">
                  <h1>{{ item.dockerTitle }}</h1>
                  <h2>{{ item.positiones }}</h2>
                </div>
              </div>
              <div class="doctor-right-main">
                <h3>开诊科室:{{ $route.query.name }}</h3>
                <h3>专业方向:{{ item.direction }}</h3>
                <h3>职务/职称:{{ item.positionTitle }}</h3>
                <h1>Cheng Yue Diabetes Hospital</h1>
                <div class="text">
                  <p v-html="item.dockerContext"></p>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <!-- 左箭头 -->
          <!-- 右箭头 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div class="kangfu-box">
          <h3 class="title">康复案例</h3>
        <div class="swiper-container swiper" ref="swiperTwo">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in caseInfoList" :key="item.id" @click="openPreview(item.caseFengmian)">
              <div class="layout">
                <div class="img">
                  <img :src="`${$store.state.baseUrl}${item.caseFengmian}`" alt="">
                </div>
                <div class="item">
                  <div class="title1">{{ item.caseTitle }}</div>
                  <div class="more">+</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <!-- 左箭头 -->
          <!-- 右箭头 -->

        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    <el-dialog
        :visible.sync="dialogShow"
        width="0px"
        top="0vh"
        custom-class="dialog-img"
        :show-close="false"
    >
      <div class="dialogDiv">
        <div style="color: white">点击任意地方即可关闭</div>
        <img :src="imgUrl" alt="">
      </div>
    </el-dialog>
  </div>
</div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
import subNav from "@/components/subNav";
import {getDepartmentInfo} from "@/api/api";
export default {
  name: "departmentInfo",
  data() {
    return {
      dialogShow:false,
      infoList: {
        title:'科室详情',
        path:'/ryzz'
      },
      imgUrl:'',
      departmentInfo:{},
      doctorList:[],
      caseInfoList:[]
    }
  },
  methods:{
    init() {
      this.swiper = new Swiper(this.$refs.swiper, {
        autoplay:true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        loopAdditionalSlides : 0,
        grabCursor : true,
        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
      this.swiper = new Swiper(this.$refs.swiperTwo, {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        autoplay:true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        grabCursor : true,
        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
    },
    async loadDepartmentInfo(name){
      const res =  await getDepartmentInfo(name)
      this.departmentInfo = res.data
      this.doctorList = res.dockerInfos
      this.caseInfoList = res.caseInfos
      console.log(this.caseInfoList)
    },
    openPreview(url) {
      this.dialogShow=true
      this.imgUrl = this.$store.state.baseUrl + url
      console.log(this.imgUrl)
    }
  },
  mounted() {
    this.init()
    this.loadDepartmentInfo(this.$route.query.name)

  },
  components:{
    subNav
  }
}
</script>

<style scoped lang="less">
.con {
  max-width: 1920px;
  margin: 0 auto;
  .dialogDiv {
    width: 600px;
    height: 800px;
    transform: translate(-50%,0);
    overflow: hidden;
    img {
      display: block;
      width: 600px;
    }
  }
  .top {
    height: 430px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    .el-image{
      width: 650px;
      height: 430px;
    }
    article {
      padding-top: 25px;
      width: 680px;
      overflow: auto;
      h3 {
          font-size: 28px;
          font-weight: bold;
      }
      .text-con {
        margin-top: 20px;
        line-height: 35px;
        font-size: 16px;
        color: #737373;
        height: 330px;
      }
    }
  }
  .main {
    .title {
      height: 65px;
      line-height: 50px;
      font-size: 30px;
      font-weight: bold;
      border-bottom: 1px solid #cccccc;
    }
  }
  .about-box{
    .swiper-slide {
      display: flex;
      justify-content: space-between;

      .doctor-item {
        width: 280px;
        height: 420px;
        background-color: white;
        border-radius: 5%;
        overflow: hidden;
        .pic {

          height: 300px;
          img {
            display: block;
            width: 100%;
            height: 300px;
          }
        }
        .text {
          display: flex;
          flex-flow: column;
          justify-content: center;
          height: 100px;
          text-align: center;
          background-color: #3C8BCB;
          color: white;
          h1 {
            font-size: 20px;
            font-weight: bold;
          }
          h2 {
            font-size: 16px;
          }
        }
      }
      padding: 50px 50px;
      .doctor-right-main {
        padding-top: 20px;
        width: 900px;
        height: 200px;
        h3 {
          line-height: 35px;
        }
        h1 {
          font-size: 40px;
          margin-top: 25px;
          margin-bottom: 20px;
          color: #dce4e4;
        }
        .text {
          text-decoration: underline;
          text-underline-offset: 15px;
          -webkit-text-decoration-style: dashed;
          text-decoration-style: dashed;
          text-decoration-color: #dce4e4;
        }
      }
    }
  }
  .kangfu-box{
    height: 550px;
    position: relative;

    .swiper-slide {
      width: 33%;
      .layout{
        margin: 0 auto;
        height: 375px;
        width: 380px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        justify-content: space-between;
        img {
          margin: 0 auto;
          display: block;
          max-width: 100%;
          height: 310px;
        }
        .item {
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .more {
            width: 50px;
            height: 50px;
            background-color: black;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
          }
        }
        &:hover {
          transform: scale(1.05);
          box-shadow: 0 0 3px #cccccc;
          .more {
            background-color: #3C8BCB;
          }
        }
        transition: all 0.3s;
      }
    }
    .swiper {
      height: 550px;
      overflow: hidden;
      padding-top: 40px;
    }
  }
}

</style>