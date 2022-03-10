<template>
  <footer>
    <!-- 专题专栏 -->
    <div class="feature">
      <div class="wp">
        <div class="feature-box">
          <div class="feature-box_title">
            <h2>专题专栏</h2>
            <span>Special column</span>
          </div>
          <div class="feature-images_box swiper-container" ref="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" @click="$router.push({path:'/newsInfo',query:{id:item.id}})" v-for="item in newsList" :key="item.id">
                <img :src="`${$store.state.baseUrl}${item.newsFengmian}`" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 友情链接 -->
    <div class="friendlink">
      <div class="wp">
        <div class="friendlink-box">
          <a href="#" @click="$router.push('/')">
            <img src="@/assets/indexPic/youqinglianjie.png" alt="">
            <span>友情链接</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="contactus">
      <div class="wp">
        <div class="contactus-box_l">
          <div class="contactus-small_box">
            <div class="qrcode-box_left">
              <img src="@/assets/indexPic/dingyuehao.jpg" alt="">
            </div>
            <div class="qrcode-box_right">
              <p>【 扫一扫关注我们订阅号】</p>
              <p>订阅号</p>
              <a href="#"><p> &nbsp; 了解更多健康资讯</p></a>
            </div>
          </div>
          <div class="contactus-small_box">
            <div class="qrcode-box_left">
              <img src="@/assets/indexPic/douyin.jpg" alt="">
            </div>
            <div class="qrcode-box_right">
              <p>【 扫一扫关注我们抖音号】</p>
              <p> 抖音号</p>
              <a href="#"><p> &nbsp; 了解更多健康资讯</p></a>
            </div>
          </div>
          <div class="contactus-small_box">
            <div class="qrcode-box_left">
              <img src="@/assets/indexPic/fuwuhao.jpg" alt="">
            </div>
            <div class="qrcode-box_right">
              <p>【 扫一扫关注我们服务号】</p>
              <p> &nbsp; 微信服务号</p>
              <a href="#"><p> &nbsp; 了解更多健康资讯</p></a>
            </div>
          </div>
          <div class="contactus-small_box">
            <div class="qrcode-box_left">
              <img src="@/assets/indexPic/kuaishou.jpg" alt="">
            </div>
            <div class="qrcode-box_right">
              <p>【 扫一扫关注我们快手号】</p>
              <p> &nbsp; 快手号</p>
              <a href="#"><p> &nbsp; 了解更多健康资讯</p></a>
            </div>
          </div>
          <div class="contactus-small_box">
            <div class="qrcode-box_left">
              <img src="@/assets/indexPic/shipinhao.jpg" alt="">
            </div>
            <div class="qrcode-box_right">
              <p>【 扫一扫关注我们视频号】</p>
              <p> &nbsp; 视频号</p>
              <a href="#"><p> &nbsp; 了解更多健康资讯</p></a>
            </div>
          </div>
          <div class="contactus-small_box">
            <div class="qrcode-box_left">
              <img src="@/assets/indexPic/erweima.png" alt="">
            </div>
            <div class="qrcode-box_right">
              <p>【 扫一扫关注我们公众号】</p>
              <p> &nbsp; 微信服务号</p>
              <a href="#"><p> &nbsp; 了解更多健康资讯</p></a>
            </div>
          </div>
        </div>
        <div class="contactus-box_r">
          <h3>联系我们</h3>
          <p>contact us</p>
          <ul>
            <li>
              <img src="@/assets/indexPic/dianhua.png" alt="">
              <span>24小时资询电话</span>
              <p>0394-8386288/8386299</p>
            </li>
            <li>
              <img src="@/assets/indexPic/dibu2.png" alt="">
              <span>门诊时间（无假日医院）</span>
              <p>8：00-17：30</p>
            </li>
            <li>
              <img src="@/assets/indexPic/dibu3.png" alt="">
              <span>乘车路线</span>
              <p>市内乘坐1、5、7、10路公交可达</p>
            </li>
            <li>
              <img src="@/assets/indexPic/dibu4.png" alt="">
              <span>医院地址</span>
              <p>河南省周口市八一路与黄河路交叉口</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 最底部版权 -->
    <div class="copyright">
      <div class="wp">
        <div class="hospital_name">
          <h1>河南科技职业大学附属第五医院</h1>
          <p>（周口承悦糖尿病医院）</p>
        </div>
        <div class="copyright-box">
          <p>版权所有周口承悦糖尿病医院@Copyright 2009-2015 Rights Reserved <a href="">豫ICP备15034049号-2</a></p>
          <p>技术支持：<a href="http://www.zqszjt.com/#/home">中启数智</a></p>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
import { getNewsList } from '@/api/api'
export default {
  name: "Footer",
  data() {
    return{
      imgInfo:``,
      dialogShow:false,
      newsList:[]
    }
  },
  methods:{
    async loadNewsList() {
      const res = await getNewsList({newsType:23})
      console.log(res.rows)
      this.newsList = res.rows
    },
    init() {
      this.swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: 4,
        slidesPerGroup: 2,
        autoplay:true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loopAdditionalSlides : 0,
        grabCursor : true,
        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
    },
  },
  mounted() {
    this.loadNewsList()
    this.init()
  }
}
</script>

<style scoped lang="less">

footer{
  *{
    max-width: 1920px;
  }
  //专题专栏
  .feature{
    background: url("~@/assets/indexPic/dibu.png") no-repeat;
    background-size: 100%;
    max-width: 1920px;
    margin: 0 auto;
    .feature-box{
      width: 100%;
      height: 375px;
      // background-color: pink;
      overflow: hidden;
      .feature-box_title{
        width: 100%;
        height: 30px;
        //  background-color: green;
        padding-left: 41px;
        margin-top: 54px;
        h2{
          display: inline-block;
          color: #040000;
          font-size: 26px;
          font-weight: bold;
          padding-right: 26px;
        }
        span{
          display: inline-block;
          height: 30px;
          font-size: 16px;
          color: #AFAFAF;
          vertical-align: middle;
        }
      }
      .feature-images_box{
        width: 100%;
        height: 190px;
        // background-color: purple;
        margin-top: 42px;
        img{
          width: 314px;
          height: 100%;
          cursor: pointer;
          transition: transform 0.3s;
          &:hover {
            transform: scale(1.1);
          }
        }

      }
    }
  }
  //友情链接
  .friendlink{
    margin: 0 auto;
    width: 100%;
    height: 60px;
    background-color: #26323F;
    .friendlink-box{
      a{
        height: 60px;
        display: flex;
        align-items: center;
        img{
          width: 39px;
          height: 39px;
        }
        span{
          color: #E8EDF0;
          font-size: 17px;
          padding-left: 17px;
        }
      }
    }
  }
  //联系我们
  .contactus{
    margin: 0 auto;
    height: 387px;
    background-color: #E9F5FC;
    overflow: hidden;
    .contactus-box_l{
      float: left;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: space-between;
      width: 1013px;
      height: 295px;
      // background-color: sienna;
      margin: 61px 0 34px 0;
      border-right: 3px solid #E2E6E9 ;
      .contactus-small_box{
        display: flex;
        width: 336px;
        height: 128px;
        // background-color: slateblue;
        .qrcode-box_left{
          width: 132px;
          height: 128px;
          border: 3px solid #25A8DE;
          margin-right: 7px;
          img{
            width: 100%;
            height: 100%;
            // padding: 3px;
          }
        }
        .qrcode-box_right{
          p{
            font-size: 16px;
            padding-top: 17px;
          }
          a{
            p{
              font-size: 12px;
              color: #ABBDBF;
            }
          }
        }
      }
    }
    .contactus-box_r{
      float: left;
      width: 356px;
      height: 295px;
      margin-top: 61px;
      margin-left: 31px;
      // background-color: purple;
      h3{
        font-size: 26px;
      }
      p{
        font-size: 15px;
      }
      ul{
        margin-top: 22px;
        li{
          height: 44px;
          margin-bottom: 13px;
          // background-color: purple;
          img{
            float: left;
            width: 38px;
            height: 100%;
            margin-right: 23px;
          }
          p{
            font-size: 17px;
          }
          span{
            color: #475E66;
            font-size: 14px;
          }
        }
      }
    }
  }
  // 最底部
  .copyright{
    margin: 0 auto;
    height: 120px;
    background-color: #263340;
    overflow: hidden;
    .hospital_name{
      float: left;
      margin-top: 38px;
      margin-right: 110px;
      width: 501px;
      height: 95px;
      color: #DBF7FA;
      // background-color: red;
      h1{
        text-align: center;
        padding-bottom: 5px;
      }
      p{
        text-align: center;
      }
    }
    .copyright-box{
      float: left;
      margin-top: 38px;
      width: 693px;
      height: 95px;
      // background-color: red;
      color: #C9E4E7;
      p{
        &:nth-child(1){
          padding-bottom:24px ;
        }
        a{
          color:#C9E4E7 ;
        }
      }
    }
  }
}
</style>
