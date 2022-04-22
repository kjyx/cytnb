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
              <div class="entry-left" v-for="item in aboutMe" :key="item.id">
                <!-- 内容区 -->
                <div class="entry_artlcl">
                  <!-- 内容区头部 -->
                  <div class="artlcl_caption">
                    <h2>{{ item.manageTitle }}</h2>
                    <span>（周口承悦糖尿病医院）</span>
                  </div>
                  <!-- 内容区文章 -->
                  <div class="artlcl_descaption" v-html="item.msInfo">
                  </div>
                </div>
              </div>
              <!-- 上面图片 -->
              <div class="entry_img1">
                <div class="swiper mySwiper" ref="swiper" style="width: 520px; overflow: hidden">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in bannerObj.ms3" :key="item.id">
                      <img :src="item.banner" alt="">
                    </div>
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
                    <div class="swiper-slide" v-for="item in bannerObj.ms4" :key="item.id">
                      <img :src="item.banner" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <!-- 下边内容区 -->
              <div class="entry-artlcl_right">
                <div class="artlcl_unit">
                  <p>河南省健康促进医院</p>
                  <p>国家区域（华中）糖尿病诊疗中心专科联盟单位</p>
                  <p>郑州市眼科医院技术协作医院</p>
                  <p>开封市中医院医联体合作单位</p>
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
import subBanner from '@/components/subBanner'
import subNav from "@/components/subNav";
import "swiper/css/swiper.css";
import Swiper from "swiper";
import {reqAboutMe, reqSystemBanner} from "@/api/api";

export default {
  name: "aboutMe",
  data() {
    return {
      infoList: {
        title: '医院简介',
        path: ''
      },
      userNavList: [
        {
          title: '医院介绍',
          path: '/aboutme'
        },
        {
          title: '医院发展',
          path: '/newscenter?id=10'
        },
        {
          title: '医院文化',
          path: '/yywh'
        },
        {
          title: '院容院貌',
          path: '/yrym'
        },
        {
          title: '荣誉资质',
          path: '/ryzz'
        }
      ],
      aboutMe: [],
      bannerObj: {},
    }
  },
  methods: {
    async getAboutMe() {
      let query = {
        pageNum: 1,
        pageSize: 10
      }
      let result = await reqAboutMe(query)
      this.aboutMe = result.data.records
    },
    async getBanndrList() {
      const result = await reqSystemBanner()
      if (result.code === 200) {
        this.bannerObj = result
      }
    },
  },
  mounted() {
    this.getAboutMe()
    this.getBanndrList()
  },
  components: {
    subBanner,
    subNav
  },
  watch: {
    bannerObj: {
      handler() {
        this.$nextTick(() => {
          this.swiper = new Swiper(this.$refs.swiper, {
            autoplay: true,
            pagination: {
              el: ".swiper-pagination"
            },
            loop: true,
            grabCursor: true,
          });
          this.swiper = new Swiper(this.$refs.swiperTwo, {
            autoplay: true,
            pagination: {
              el: ".swiper-pagination"
            },
            loop: true,
            grabCursor: true,
          });
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.box {
  padding-top: 200px;
  margin: 0 auto;
  width: 1920px;
  height: 1740px;
  background: url(~@/assets/aboutme/beijing.png) no-repeat;

}

// 医院文章
.entry-box {
  width: 100%;
  height: 940px;
  // background-color: pink;
  .entry-box_top {
    display: flex;
    width: 100%;
    height: 596px;
    // background-color: green;
    .entry-left {
      width: 880px;
      background-color: #247AC0;

      .entry_artlcl {
        width: 100%;
        height: 100%;
        color: #EBF0F2;
        padding: 62px 45px 0 33px;

        .artlcl_caption {
          h2 {
            font-size: 33px;
            font-weight: 800;
          }

          span {
            display: inline-block;
            padding-top: 33px;
            font-size: 17px;
          }
        }

        .artlcl_descaption {
          margin-top: 36px;
          font-size: 17px;

          /deep/ p {
            text-indent: 2em;
            margin-bottom: 30px;
          }
        }
      }
    }

    .entry_img1 {
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

  .entry-box_button {
    display: flex;
    height: 343px;

    .entry_img2 {
      width: 880px;
      // background-color: purple;
    }

    .entry-artlcl_right {
      width: 520px;
      background-color: #247AC0;
      color: #EBF0F2;

      .artlcl_unit {
        padding: 50px 0 0 49px;
        font-size: 17px;
        line-height: 2.5em;
        letter-spacing: 2px;
      }
    }
  }
}


// 摘要
.summary {
  height: 313px;
  margin-top: 97px;

  .summary-a {
    height: 313px;
    // background-color: pink;
    margin: 0 50px;
    border: 6px solid #E9B750;
    background-color: #fff;
  }

  .summary_center {
    margin: 80px 0 110px 0;
    width: 100%;
    // background-color: green;
    color: #7A9199;

    p {
      text-align: center;
      line-height: 2em;

      &:nth-child(2) {
        padding-top: 10px;
        font-size: 17px;
        line-height: 1.2em;
      }
    }
  }
}
</style>
