<template>
  <div class="header">
    <div class="top-line">
      <div class="wp">
        <p>{{ nowTime }}</p>
        <p>门诊时间(无假日医院)8:00 - 17:30</p>
      </div>
    </div>
    <section>
      <div class="wp">
        <div class="left">
            <div class="logo">
                <p>河南科技职业大学附属第五医院</p>
                <p>(周口承悦糖尿病医院)</p>
            </div>
            <div class="summary">
              <p>国家二级医院</p>
              <p>周口市职工医保定点医院</p>
              <p>城乡居民医保定点医院</p>
            </div>
        </div>
        <div class="right">
            <p class="tel-title">24小时咨询电话</p>
            <p class="tel">0394-8386288/8386299</p>
            <div class="input-box">
              <input type="text" v-model="newsTitle">
              <label for="" @click="seaerchNewsInfo">站内搜索</label>
              <i class="icon-sousuo iconfont"></i>
            </div>
        </div>
      </div>
    </section>
    <nav>
      <div class="wp">
        <ul ref="ul">
          <li>
            <router-link to="/index">医院首页</router-link>
          </li>
          <li>
            <router-link to="/aboutme">医院概况</router-link>
            <ul class="sub-nav">
              <li @click="$router.push('/aboutme')">医院介绍</li>
<!--              <li @click="$router.push('/doctorteam')">院长介绍</li>-->
              <li @click="$router.push('/newscenter?id=10')">医院发展</li>
              <li @click="$router.push('/yywh')">医院文化</li>
              <li @click="$router.push('/yrym')">院容院貌</li>
              <li @click="$router.push('/ryzz')">荣誉资质</li>
            </ul>
          </li>
          <li>
            <router-link to="/ksdh">科室导航</router-link>
            <ul class="sub-nav">
              <li  @click="$router.push('/ksdh')">专科介绍</li>
              <li @click="$router.push('/newscenter?id=11')">诊疗特色</li>
            </ul>
          </li>
          <li>
            <router-link to="/doctorteam">医疗团队</router-link>
            <ul class="sub-nav">
              <li  @click="$router.push({path:'/doctorteam'})">专家介绍</li>
              <li @click="$router.push('/newscenter?id=12')">专家访谈</li>
              <li @click="$router.push('/newscenter?id=13')">家庭医生</li>
            </ul>
          </li>
          <li>
            <router-link to="/newscenter?id=14">就医指南</router-link>
            <ul class="sub-nav">
              <li @click="$router.push('/newscenter?id=14')">专家门诊</li>
              <li @click="$router.push('/zhenshifenbu')">诊室分布</li>
              <li @click="$router.push('/jiuzhenliucheng')">就诊流程</li>
              <li @click="$router.push('/yibaozhengce')">医保报销</li>
              <li @click="$router.push('/tijianxuzhi')">体检须知</li>
            </ul>
          </li>
          <li>
            <router-link to="/newscenter">新闻中心</router-link>
            <ul class="sub-nav">
              <li  @click="$router.push('/newscenter?id=1')">医院要闻</li>
              <li  @click="$router.push('/newscenter?id=3')">学术交流</li>
              <li  @click="$router.push('/newscenter?id=4')">公益活动</li>
              <li  @click="$router.push('/newscenter?id=5')">专题视频</li>
              <li  @click="$router.push('/newscenter?id=6')">最美护士</li>
              <li @click="$router.push('/newscenter?id=18')">防疫知识</li>
            </ul>
          </li>
          <li>
            <router-link to="/newscenter?id=15">科普案例</router-link>
            <ul class="sub-nav">
              <li @click="$router.push('/newscenter?id=15')">典型案例</li>
              <li @click="$router.push('/newscenter?id=16')">健康科普</li>
              <li @click="$router.push('/newscenter?id=17')">疫情报道</li>
              <li @click="$router.push('/newscenter?id=24')">健康食谱</li>
            </ul>
          </li>
          <li>
            <router-link to="/newscenter?id=20">党建活动</router-link>
            <ul class="sub-nav">
              <li @click="$router.push('/newscenter?id=20')">党建活动</li>
              <li @click="$router.push('/newscenter?id=22')">党史天天读</li>
            </ul>
          </li>
          <li>
            <router-link to="/contactUs">联系我们</router-link>
            <ul class="sub-nav">
              <li @click="$router.push('/newscenter?id=19')">人才招聘</li>
              <li @click="$router.push('/contactUs')">来院路线</li>
              <li @click="$router.push('message')">联系预约</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      nowTime:"",
      newsTitle:'',
    }
  },
  created() {
    this.$nextTick(function() {
      let ul = this.$refs.ul.childNodes
      ul.forEach((item)=>{
        item.addEventListener('click',()=>{
          ul.forEach(item=> item.style.backgroundColor='')
          item.style.backgroundColor='#45a8ff'
        })
      })
    })
    this.getTime();
    console.log(new Date())
  },
  mounted() {
    const nav = document.querySelector('nav')
    window.addEventListener('scroll',()=>{
      if (nav.offsetTop >= 170) {
        console.log(nav.offsetTop)
        nav.setAttribute('postion','fixed')
      }
    })

  },
  methods:{
    getTime(){
      setInterval(()=>{
        //new Date() new一个data对象，当前日期和时间
        //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
        this.nowTime = new Date().toLocaleString();
      },1000)
    },
    seaerchNewsInfo() {
      if (!this.newsTitle) return
      this.$router.push({path:'/newscenter',query:{newsTitle:this.newsTitle}})
    },
  }
}
</script>

<style scoped lang="less">
.header {
  max-width: 1920px;
  margin: 0 auto;
  .navscroll{
    position: fixed;
    top: 0;
    width: 100%;
  }
  .top-line {
    color: #7c9399;
    width: 100%;
    justify-content: space-between;
    height: 30px;
    background-color: #e5fdff;
    padding-bottom: 3px;

    .wp {
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
  }
  section {
    .wp {
      display: flex;
      justify-content: space-between;
    }
    .left {
      margin-top: 35px;
      display: flex;
      height: 75px;
      .logo{
        margin-right: 15px;
        color: #3388ff;
        p:nth-of-type(1) {
          letter-spacing: 2px;
          font-size: 38px;
          line-height: 38px;
          margin-bottom: 13px;
          font-weight: bold;
        }
        p:nth-of-type(2) {
          text-align: center;
          font-size: 25px;
          line-height: 14px;
          letter-spacing: 5px;
        }
      }
      .summary {
        width: 205px;
        display: flex;
        flex-flow: wrap column;
        justify-content: space-between;
        text-align: justify;
        text-align-last: justify;
        text-justify: inter-ideograph;
        color: #7e959b;
        p {
          line-height: 16px;
          text-align: justify;
        }
        border-left:1.5px solid #7c9399;
        padding-left: 5px;
      }
    }
    .right {
      margin-top:20px ;
      width: 275px;
      height: 120px;
      display: flex;
      flex-flow: column;
      align-content: space-between;
      p {
        text-align: right;
      }
      .title{
        font-size: 21px;
        color: #3388ff;
      }
      .tel-title {
        font-size: 20px;
        color: #7c9399;
      }
      .tel {
        font-size: 24px;
        color:#3388ff;
        letter-spacing: 0.5px;
        text-align: right;
        font-weight: bold;
        margin-bottom: 2px;
      }
      .input-box {
        border: 2px solid #7c9399;
        display: flex;
        justify-content: flex-end;
        padding-right: 2px;
        padding-left: 10px;
        align-items: center;
        input{
          flex: 1;
        }
        border-radius: 20px;
        i {
          margin-left: 2px;
          color: black;
        }
      }
    }
  }
  nav {
    background-color:fade(#003E78,98%);
    height: 65px;
    max-width: 1920px;
    margin: 0 auto;
    ul:first-child {
      display: flex;
      height: 65px;
      li{
        flex: 1;
        height: 65px;
        line-height: 65px;
        text-align: center;
        position: relative;
      }
      li:hover {
        background-color: #45a8ff;
        .sub-nav {
          display: block;
          background-color: white;
          position: absolute;
          top: 65px;
        }
      }
      a{
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
      }
    }
  }
}
.sub-nav {
  z-index: 999999;
  width: 155px;
  display: flex;
  flex-direction: column;
  background-color: rgb(69, 168, 255);
  cursor: pointer;
  display: none;
  li {
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #cccccc;
    &:hover {
      color: white;
    }
  }
}
</style>
