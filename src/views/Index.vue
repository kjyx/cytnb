<template>
  <div class="index">
    <div class="banneer">
      <el-carousel height="700px" trigger="click" arrow="never" :interval=2000>
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.banner" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="sub-nav">
      <div class="wp">
        <div class="nav-logo">
          <span>Q</span>
          <div class="logo-info">
            <p>UICK NAVIGATION</p>
            <h1>快捷导航</h1>
          </div>
        </div>
      </div>
      <ul class="ul-list-1 wp">
        <li class="wow bounceInLeft" data-wow-delay="0.1s" @click="$router.push('/yibaozhengce')">
          <div class="main">
            <i class="iconfont icon-yibao"></i>
            <h3>医保政策</h3>
            <p>Medical insurance policy</p>
            <p>查看更多 +</p>
          </div>
        </li>
        <li class="wow bounceInUp" data-wow-delay="0.3s" @click="$router.push('/doctorteam')">
          <div class="main">
            <i class="iconfont icon-zhuanjia"></i>
            <h3>专家门诊</h3>
            <p>Medical insurance policy</p>
            <p>查看更多 +</p>
          </div>
        </li>
        <li class="wow bounceInUp" data-wow-delay="0.5s" @click="$router.push('/jiuzhenliucheng')">
          <div class="main">
            <i class="iconfont icon-tubiaozhizuomoban"></i>
            <h3>就诊流程</h3>
            <p>Medical insurance policy</p>
            <p>查看更多 +</p>
          </div>
        </li>
        <li class="wow bounceInUp" data-wow-delay="0.7s" @click="$router.push('/zhenshifenbu')">
          <div class="main">
            <i class="iconfont icon-fenbu"></i>
            <h3>诊室分布</h3>
            <p>Medical insurance policy</p>
            <p>查看更多 +</p>
          </div>
        </li>
        <li class="wow bounceInUp" data-wow-delay="0.9s" @click="$router.push('/message')">
          <div class="main">
            <i class="iconfont icon-naozhong"></i>
            <h3>预约挂号</h3>
            <p>Medical insurance policy</p>
            <p>查看更多 +</p>
          </div>
        </li>
        <li class="wow bounceInRight" data-wow-delay="1.1s" @click="$router.push('/contactUs')">
          <div class="main">
            <i class="iconfont icon-qichedingwei"></i>
            <h3>医院地图</h3>
            <p>Medical insurance policy</p>
            <p>查看更多 +</p>
          </div>
        </li>
      </ul>
    </div>
    <section class="Hospital-information">
      <div class="wp">
        <div class="Hospital-img wow bounceInLeft">
          <img src="@/assets/indexPic/001.jpg" alt="">
        </div>
        <article class="wow bounceInUp">
          <div class="logo">
            <el-popover
                width="170"
                trigger="click">
              <div class="winxi-logo" slot="reference">
                <img src="@/assets/indexPic/02.png" alt="">
              </div>
              <img src="@/assets/indexPic/fuwuhao.jpg" alt="" style="width: 150px">
            </el-popover>
            <!--              <el-popover-->
            <!--                  width="170"-->
            <!--                  trigger="click">-->
            <!--                <div class="douyin-logo"  slot="reference">-->
            <!--                  <img src="@/assets/indexPic/01.png" alt="">-->
            <!--                </div>-->
            <!--                <img src="@/assets/indexPic/douyin.jpg" alt="" style="width: 150px;">-->
            <!--              </el-popover>-->
          </div>
          <h1>河南科技职业大学附属第五医院</h1>
          <h3 class="sub-title">( 周口承悦糖尿病医院 )</h3>
          <div class="bottom-line"></div>
          <p>
            我院是经上级主管部门批准成立的集糖尿病预防、治疗、科研、培训于一体的国家二级专科医院。周口市 城镇职工、城乡居民医保定点直补单位、省内及跨省异地就医住院费用直接结算定点医疗机构。
          </p>
          <br/>
          <br/>
          <p>
            我院聘请省、市知名专家教授，组建强大专家团队，技术力量雄厚，是以内分泌糖尿病为核心科室，开展足病科、眼科、心脑血管科、呼吸内科、甲状腺科、中医科、骨科、骨骼矫形科、疼痛康复科、儿童生长发育科、不育不孕科、营养科以及健康体检中心等特色科室的“大专科、小综合”医院。
          </p>
          <button @click="$router.push('/aboutme')">查看更多</button>
        </article>
      </div>
    </section>
    <section class="news-center-box">
      <div class="wp">
        <article class="box-top">
          <ul class="news-title-box" ref="ul">
            <li @click="changeNewsList(1)" class="onhover">
              <div class="iconfont icon-xinwen"></div>
              <h3>医院动态</h3>
              <p>Hospital dynamics</p>
              <div class="under-line" :style="{display:current === 1 ? 'block' : 'none' }"></div>
            </li>
            <li @click="changeNewsList(2)" class="onhover">
              <div class="iconfont icon-xinwen"></div>
              <h3>医疗前沿</h3>
              <p>Hospital dynamics</p>
              <div class="under-line" :style="{display:current === 2 ? 'block' : 'none' }"></div>
            </li>
            <li @click="changeNewsList(3)" class="onhover">
              <div class="iconfont icon-xinwen"></div>
              <h3>健康知识</h3>
              <p>Hospital dynamics</p>
              <div class="under-line" :style="{display:current === 3 ? 'block' : 'none' }"></div>
            </li>
          </ul>
          <div class="news-center-logo">
            <h1>N</h1>
            <div>
              <h3>新闻中心</h3>
              <p>News Center</p>
            </div>
          </div>
        </article>
        <div class="news-list-box">
          <div class="side-img wow bounceInLeft">
            <img src="@/assets/indexPic/0224.png" alt="">
            <p class="bottom">河南科技职业大学附属第五医院</p>
          </div>
          <ul class="news-list wow bounceInRight">
            <li @click="toNewsInfo(news.id)" v-for="news in newsList" :key="news.id">
              <p>{{ news.newsTitle }}</p>
              <time>{{ news.createTime.slice(0, 10) }}</time>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="page-introduce">
      <div class="wp">
        <section class="left wow bounceInLeft">
          <div class="h2-title">
            <h2>特色科室</h2>
            <span>Featured Unit</span>
          </div>
          <ul class="recommend-box">
            <li class="onhover" v-for="mainDepartTitle in mainDepartmentTitleList" :key="mainDepartTitle.id"
                @click="toDepartmentInfo(mainDepartTitle.title)">
              <h3>{{ mainDepartTitle.title }}</h3>
            </li>
          </ul>
          <div class="introduce-list">
            <ul class="list-1">
              <li @click="$router.push('ksdh')">临床科室</li>
              <li class="onhover" v-for="item in linchuangList.slice(0,3)" :key="item.id"
                  @click="toDepartmentInfo(item.title)">{{ item.title }}
              </li>
            </ul>
            <ul class="list-2">
              <li @click="$router.push('ksdh')">医技医学部</li>
              <li class="onhover" v-for="item in yijiyiyueList.slice(0,3)" :key="item.id"
                  @click="toDepartmentInfo(item.title)">{{ item.title }}
              </li>
            </ul>
            <ul class="list-3">
              <li @click="$router.push('ksdh')">辅助科室</li>
              <li class="onhover" v-for="item in fuzhukeshiList.slice(0,3)" :key="item.id"
                  @click="toDepartmentInfo(item.title)">{{ item.title }}
              </li>
            </ul>
          </div>
        </section>
        <section class="right wow bounceInRight">
          <div class="h2-title">
            <h2>康复案例</h2>
            <span>Rehabilitation case</span>
          </div>
          <div class="swiper-box swiper-container" ref="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in kangfuList" :key="item.id" @click="handeldialogShow(item)">
                <img :src="item.caseFengMian" alt="">
                <div class="bottom">{{ item.caseTitle }}</div>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </section>
      </div>
    </section>
    <section class="page-clinics wow bounceInUp">
      <div class="wp">
        <div class="h2-title ml50">
          <h2>特色诊疗</h2>
          <span>Featured clinics</span>
        </div>
        <div class="img">
        </div>
      </div>
    </section>
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
</template>
<script>
import 'animate.css'
import "swiper/css/swiper.css";
import Swiper from "swiper";
import {getDepartmentList, getNewsList, getKangFuList,reqBanner} from '@/api/api'

export default {
  data() {
    return {
      dialogShow: false,
      imgUrl: '',
      current: 1,
      departmentTitleList: [],
      mainDepartmentTitleList: [],
      newsList: [],
      kangfuList: [],
      linchuangList: [],
      yijiyiyueList: [],
      fuzhukeshiList: [],
      bannerList: []
    }
  },
  mounted() {
    new this.$wow.WOW({
      live: true
    }).init()
    this.init()
    this.loadDepartmentList()
    this.loadNewsList(7)
    this.loadKangFuList()
    this.loadLingchuang()
    this.loadYijiyiyue()
    this.loadFuzhu()
    console.log(this.linchuangList, this.yijiyiyueList, this.kangfuList)
    this.getBannerList()
  },
  methods: {
    handeldialogShow(item) {
      this.$router.push({path:'/newscenter?id=15'})
    },
    async loadKangFuList() {
      let query = {
        pageNum: 1,
        pageSize: 10
      }
      const res = await getKangFuList(query)
      this.kangfuList = res.data.records
    },
    async loadNewsList(type) {
      let query = {
        pageNum: 1,
        pageSize: 10
      }
      query.newsType = type
      const res = await getNewsList(query)
      this.newsList = res.data.records
    },
    toDepartmentInfo(name) {
      this.$router.push({
        path: '/departmentinfo',
        query: {name}
      })
    },
    async loadDepartmentList() {
      let query = {
        pageSize: 20,
        pageNum: 1
      }
      const res = await getDepartmentList(query)
      res.data.records.forEach((item) => {
        this.departmentTitleList.push({
          title: item.departmentName,
          id: item.id
        })
      })
      this.mainDepartmentTitleList = this.departmentTitleList.splice(0, 3)
    },
    changeNewsList(index) {
      this.current = index
      let type = null
      index === 1 ? type = 7 : index === 2 ? type = 8 : type = 9
      this.loadNewsList(type)
    },
    toNewsInfo(id) {
      this.$router.push({path: '/newsInfo', query: {id}})
    },
    init() {
      this.swiper = new Swiper(this.$refs.swiper, {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        loopAdditionalSlides: 0,
        grabCursor: true,
        observer: true,
        observeParents: true
      });
    },
    async loadLingchuang() {
      let query = {
        pageSize: 20,
        pageNum: 1,
        departmentType: 1
      }
      const res = await getDepartmentList(query)
      res.data.records.forEach((item) => {
        this.linchuangList.push({
          title: item.departmentName,
          id: item.id
        })
      })
    },
    async loadYijiyiyue() {
      let query = {
        pageSize: 20,
        pageNum: 1,
        departmentType: 2
      }
      const res = await getDepartmentList(query)
      res.data.records.forEach((item) => {
        this.yijiyiyueList.push({
          title: item.departmentName,
          id: item.id
        })
      })
    },
    async loadFuzhu() {
      let query = {
        pageSize: 20,
        pageNum: 1,
        departmentType: 3
      }
      const res = await getDepartmentList(query)
      res.data.records.forEach((item) => {
        this.fuzhukeshiList.push({
          title: item.departmentName,
          id: item.id
        })
      })
    },
    // 获取banner数据
    async getBannerList() {
      let banner = sessionStorage.getItem('swiperList')
      if (banner !== null) {
        this.bannerList = JSON.parse(banner)
      } else {
        let query = {
          pageNum: 1,
          pageSize: 10,
          bannerType:1
        }
        let result = await reqBanner(query)
        if (result.code === 200) {
          this.bannerList = result.data.records
          sessionStorage.setItem('swiperList', JSON.stringify(result.data.records))
        }
      }
    },

  },
  computed: {},
  metaInfo: {
    title: '承悦糖尿病'
  }
}
</script>
<style lang="less" scoped>
.index-1 {
  transform: translateY(-900px);
}

.banneer {
  max-width: 1920px;
  max-height: 705px;
  margin: 0 auto;
  background-color: #45a8ff;
}

.sub-nav {
  min-height: 530px;
  padding-top: 75px;

  .nav-logo {
    display: flex;
    margin-bottom: 30px;

    span {
      display: inline-block;
      width: 70px;
      height: 80px;
      font-size: 90px;
      line-height: 80px;
      color: #8EC0E8;
    }

    .logo-info {
      margin-left: 5px;
      padding-top: 25px;

      p {
        color: #302D2D;
        line-height: 25px;
        letter-spacing: 0.5px;
      }

      h1 {
        line-height: 30px;
        font-weight: bold;
      }
    }
  }

  .ul-list-1 {
    display: flex;
    height: 260px;

    i {
      font-size: 50px;
      color: #4591CF;
    }

    li {
      width: 235px;
      height: 260px;

      .main {
        margin: 12px auto;
        padding-top: 30px;
        width: 210px;
        height: 230px;
        box-shadow: 0 0 18px -8.5px #b7bcc0;;
        border-radius: 10px;
        text-align: center;

        cursor: pointer;

        &:hover {
          background-color: rgba(#45a8ff, 1);
          transform: scale(1.1);
          transition: transform 0.5s;
          color: white;

          i {
            color: white;
          }
        }

        h3 {
          font-weight: bold;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 10px;
        }

        p:nth-of-type(1) {
          color: #727273;
        }

        p:nth-of-type(2) {
          color: #BFBFBF;
        }

        &:hover p {
          color: white;
        }

      }
    }
  }
}

.Hospital-information {
  height: 670px;
  max-width: 1920px;
  background: url("~@/assets/indexPic/0014.png") no-repeat;
  margin: 0 auto 100px;

  .wp {
    display: flex;
    justify-content: space-between;
    padding: 60px 0 0 0;
  }

  .Hospital-img {
    width: 800px;
    height: 560px;
    background-color: #45a8ff;
  }

  article {
    width: 505px;
    height: 610px;
    background-color: white;
    margin-bottom: 40px;

    .logo {
      height: 50px;
      display: flex;
      justify-content: flex-end;

      img {
        width: 50px;
        height: 50px;
      }

      div {
        width: 50px;
        height: 50px;
      }
    }

    h1 {
      margin-bottom: 20px;
      font-size: 32px;
      font-weight: bold;
      text-align-last: justify;
      text-justify: inter-character;
    }

    .sub-title {
      font-size: 20px;
      color: #2A6AB4;
      margin-bottom: 40px;
    }

    .bottom-line {
      width: 55px;
      height: 3px;
      background-color: #261B18;
      margin-bottom: 20px;
    }

    p {
      letter-spacing: 1px;
    }

    button {
      margin-top: 110px;
      float: right;
      width: 193px;
      height: 40px;
      background-color: #0098D6;
      color: white;
      border-radius: 10px;
    }
  }
}

.page-introduce {
  .wp {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px 0 50px;
    height: 600px;
  }

  .left {
    width: 670px;

    .recommend-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;

      li {
        width: 202px;
        height: 100px;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;

        h3 {
          font-weight: bold;
          font-size: 19px;
        }

        p {
          font-size: 11px;
        }

        &:nth-of-type(1) {
          background-image: url("~@/assets/indexPic/01.jpg");
        }

        &:nth-of-type(2) {
          background-image: url("~@/assets/indexPic/02.jpg");
        }

        &:nth-of-type(3) {
          background-image: url("~@/assets/indexPic/03.jpg");
        }
      }
    }

    .introduce-list {
      display: flex;
      justify-content: space-between;

      ul {
        li {
          width: 202px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          margin-bottom: 10px;
          border-radius: 10px;
          color: #6B6A68;
          background-color: fade(#F5F5F5, 80%);
          cursor: pointer;
        }

        li:nth-of-type(1) {
          color: #000000;
          background-color: #ACD3F0;
          font-weight: bold;

          &:hover {
            background-color: #4591CF;
            color: white;
          }
        }
      }
    }
  }

  .right {
    width: 560px;

    .swiper-box {
      height: 405px;
      //background-color: #45a8ff;

      .swiper-slide {
        width: 560px;
        height: 405px;
        display: flex;
        flex-direction: column;
        position: relative;

        img {
          display: block;
          width: 560px;
          height: 100%;
          max-width: 560px;
          max-height: 405px;
        }

        .bottom {
          color: white;
          font-size: 20px;
          padding-left: 30px;
          line-height: 60px;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60px;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}

.page-clinics {
  margin-bottom: 110px;

  .img {
    height: 260px;
    background: url("~@/assets/indexPic/022.png") no-repeat bottom;
  }
}

.news-center-box {
  height: 510px;
  margin-bottom: 70px;

  .box-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    .news-title-box {
      cursor: pointer;

      li {
        float: left;
        margin-right: 40px;
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 150px;

        div {
          font-size: 40px;
          line-height: 40px;
          margin-bottom: 10px;
          color: #2279BF;
        }

        h3 {
          font-weight: bold;
          font-size: 21px;
          margin-bottom: 10px;
        }

        p {
          color: #ADADAD;
          margin-bottom: 20px;
        }

        .under-line {
          display: none;
          width: 30px;
          height: 3px;
          background-color: #EFC375
        }

        &:hover {
          .under-line {
            display: block;
          }
        }
      }
    }

    .news-center-logo {
      display: flex;
      height: 80px;
      align-items: flex-end;

      h1 {
        font-size: 80px;
        line-height: 80px;
        color: #8DC0E8;
      }

      h3 {
        font-weight: bold;
        font-size: 20px;
      }

      p {
        margin-bottom: 8px;
      }
    }
  }

  .news-list-box {
    height: 200px;
    display: flex;
    justify-content: space-between;

    .side-img {
      width: 403px;
      height: 300px;

      .bottom {
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: white;
        background-color: #3C8BCB;
        transform: translateY(-30px);
        border-radius: 0 0 10px 10px;
      }
    }

    .news-list {
      width: 850px;
      height: 350px;
      display: flex;
      align-content: flex-start;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        color: #555656;
        height: 30px;
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        cursor: pointer;

        time {
          width: 75px;
        }

        p {
          width: 300px;
          display: flex;
          align-items: center;
          line-height: 30px;
        }

        & p::before {
          content: '';
          display: inline-block;
          width: 10px;
          background-color: black;
          height: 3px;
          margin-right: 5px;
          transform: translateY(-50%);
        }

        &:hover {
          color: #45a8ff;

          p::before {
            background-color: #45a8ff;
          }
        }
      }
    }
  }
}

// 公共样式
.h2-title {
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  h2 {
    font-size: 26px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-right: 15px;
  }

  span {
    font-size: 16px;
    color: #AFAFAF;
  }
}

.ml50 {
  margin-left: 50px;
}

.dialogDiv {
  width: 600px;
  height: 800px;
  transform: translate(-50%, 0);
  overflow: hidden;

  img {
    display: block;
    width: 600px;
  }
}
</style>
