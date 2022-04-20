<template>
<div>
  <sub-nav :info-list="infoList" :user-nav-list="userNavList" style="margin-bottom: 0"/>
  <ul class="news-box wp">
    <li class="news-row" v-for="item in newsList" :key="item.id" @click="toNewsInfo(item.id)">
      <div class="news-row_box">
        <div class="time_box">
          <img v-if="item.newsFengMian" :src="item.newsFengMian" alt="">
          <img v-else src="../assets/indexPic/newspic.jpg" alt="">
        </div>
        <div class="news_centent">
          <h4>{{ item.newsTitle }}</h4>
          <p v-html="item.newsDescribe"></p>
        </div>
        <div class="news_arrow">
          <span class="icon-youjian iconfont"></span>
        </div>
      </div>
    </li>
    <el-pagination
        background
        layout="prev, pager, next"
        @current-change="currentChange"
        :total="total"
        style="text-align: center;margin-top: 20px"
    >
    </el-pagination>
  </ul>
</div>
</template>

<script>
import subNav from "@/components/subNav";
import {getNewsList} from "@/api/api";
export default {
  name: "news",
  data() {
    return {
      total:null,
      newsList:[],
      infoList: {
        title:'全部新闻',
        path:'/newscenter'
      },
      userNavList:[
        {
          title:'医院要闻',
          path:'/newscenter?id=1'
        },
        {
          title:'媒体报道',
          path:'/newscenter?id=2'
        },
        {
          title:'学术交流',
          path:'/newscenter?id=3'
        },
        {
          title:'公益活动',
          path:'/newscenter?id=4'
        },
        {
          title:'专题视频',
          path:'/newscenter?id=5'
        },
        {
          title:'最美护士',
          path:'/newscenter?id=6'
        },
      ]
    }
  },
  computed:{
  },
  methods:{
    currentChange(e) {
      console.log(e)
      this.loadNewsList(null,e)
    },

    async loadNewsList(type=null,pageNum=1,pageSize=10) {
      let query = {
      }
      query.newsType = type
      query.pageNum = pageNum
      query.pageSize = pageSize
      const res = await getNewsList(query)
      this.newsList = res.rows
      console.log(res)
      this.total = res.total
    },
    toNewsInfo(id) {
      this.$router.push({path:'/newsInfo',query:{id}})
    },

    async searchRes() {
      let query={
        newsTitle:this.$route.query.newsTitle
      }
      console.log(query)
      const res = await  getNewsList(query)
      this.newsList = res.rows
      this.total = res.total
    },
    subNavTitle(id) {
      switch (id) {
          case '1':{
            this.infoList.title = '医院要闻'
            break;
          }
          case '2':{
            this.infoList.title = '媒体报道'
            break;
          }
          case '3':{
            this.infoList.title = '学术交流'
            break;
          }
          case '4':{
            this.infoList.title = '公益活动'
            break;
          }
          case '5':{
            this.infoList.title = '专题视频'
            break;
          }
          case '6':{
            this.infoList.title = '最美护士'
            break;
          }
          case '7':{
            this.infoList.title = '医院动态'
            break;
          }
          case '8':{
            this.infoList.title = '医疗前沿'
            break;
          }
          case '9':{
            this.infoList.title = '健康知识'
            break;
          }
          case '10':{
            this.infoList.title = '医院发展'
            break;
          }
          case '11' :{
            this.infoList.title = '诊疗特色'
            break;
          }
          case '12' :{
            this.infoList.title = '专家访谈'
            break;
          }
          case '13' :{
            this.infoList.title = '家庭医生'
            break;
          }
          case '14' :{
            this.infoList.title = '专家门诊'
            break;
          }
          case '15' :{
            this.infoList.title = '典型案例'
            break;
          }
          case '16' :{
            this.infoList.title = '健康科普'
            break;
          }
          case '17' :{
            this.infoList.title = '疫情报道'
            break;
          }
          case '18' :{
            this.infoList.title = '防疫知识'
            break;
          }
          case '19' :{
            this.infoList.title = '人才招聘'
            break;
          }
          case '20' :{
            this.infoList.title = '党建活动'
            break;
          }
          case '21' :{
            this.infoList.title = '工会活动'
            break;
          }
          case '22' :{
            this.infoList.title = '党史天天读'
            break;
          }
          default:
            this.infoList.title = '全部新闻'
      }
    }
  },
  mounted() {
    this.loadNewsList(this.$route.query.id)
    if (this.$route.query.newsTitle) {
        this.searchRes()
    }
    this.subNavTitle(this.$route.query.id)
  },
  watch:{
    '$route.query.id'(){
      this.subNavTitle(this.$route.query.id)
      this.loadNewsList(this.$route.query.id)
    },
    '$route.query.newsTitle'() {
      this.searchRes()
    }
  },
  components:{
    subNav
  }
}
</script>

<style scoped lang="less">
.news-box{
  margin-bottom: 15px;
  .news-row{
    width: 100%;
    height: 250px;
    // background-color: red;
    border-bottom: 1px dashed #6e6e6e;
    padding-top: 65px;
    cursor: pointer;
    .news-row_box{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 150px;
      // background-color: green;
      .time_box{
        img{
          display: block;
          width: 150px;
          height: 150px;
        }
        width: 150px;
        height: 150px;
        background-color: #d1d1d1;
        border-radius: 7%;
      }
      .news_centent{
        margin-left: 45px;
        width: 1090px;
        height: 100%;
        // background-color: hotpink;
        h4{
          line-height: 70px;
          font-weight: 600;
          letter-spacing: 1px;
        }
        p{
          // display: inline-block;
          font-size: 14px;
          width: 100%;
          height: 50px;
          line-height: 25px;
          font-weight: 100;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .news_arrow{
        display: flex;
        justify-content: center;
        align-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #d1d1d1;
        margin: auto;
        span{
          line-height: 40px;
        }
      }
    }
    &:hover .time_box{
      background-color: #2396fe;
    }
    &:hover .news_arrow{
      background-color: #2396fe;
    }
  }
}
</style>
