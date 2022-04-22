<template>
  <div>
    <sub-nav :info-list="infoList"/>
    <div class="container">
      <div class="dy-d-content clearfix">
        <div class="left_box">
          <div class="left wow fadeInLeft">
            <div class="top">
              <p class="text">
                <span class="span1">最新新闻</span> <span>Latest news</span>
              </p>
            </div>
            <div class="left-content">
              <ul class="r-list active">
                <li class="item" v-for="item in allNewsList" :key="item.id"
                    @click="$router.push({path:'/newsInfo',query:{id:item.id}})">
                  <a target="_blank" class="block">
                    <p class="text1">
                      {{ item.newsTitle }} </p>
                    <p class="text2">{{ filterss.formatTimer(item.createTime) }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right wow fadeInRight">
          <div class="top">
            <p class="text-title">
              {{ newInfo.newsTitle }} </p>
            <p class="text-2">发表时间:{{ filterss.formatTimer(newInfo.createTime) }}</p>
          </div>
          <div class="r-content" v-html="newInfo.newsContext">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import subNav from "@/components/subNav";
import {getNewsInfo, getNewsList} from '@/api/api'

export default {
  name: "newsInfo",
  data() {
    return {
      infoList: {
        title: '全部新闻',
        path: '/newscenter'
      },
      newInfo: {},
      allNewsList: [],
      filterss: {
        formatTimer: (value) => {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          return y + "-" + MM + '-' + d;
        }
      },
    }
  },
  mounted() {
    this.loadNewsInfo()
    this.getAllNewsList()
  },
  methods: {
    async loadNewsInfo() {
      const res = await getNewsInfo(this.$route.query.id)
      this.newInfo = res.data
      document.title = this.newInfo.newsTitle + "-周口承悦糖尿病医院"
      console.log(this.newInfo)
    },
    async getAllNewsList() {
      let query = {
        newsType: null,
        pageNum: 1,
        pageSize: 5
      }
      const result = await getNewsList(query)
      if (result.code) {
        this.allNewsList = result.data.records
      }
    }
  },
  watch: {
    '$route.query.id'() {
      this.loadNewsInfo(this.$route.query.id)
    }
  },
  components: {
    subNav
  }
}
</script>

<style scoped lang="less">
.main {
  overflow: hidden;

  /deep/ img {
    object-fit: cover;
    display: block;
    max-width: 900px;
    max-height: 600px;
    margin: 0 auto;
  }

  /deep/ .ql-align-justify {
    max-width: 1000px;
    margin: 0 auto;
  }
}

.box {
  /deep/ p {
    margin: 0 200px;
  }

  /deep/ .ql-align-justify {
    text-indent: 2em;
  }
}

.container {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  .left_box {
    float: left;
    width: 340px;
    height: 600px;
  }
  .left {
    width: 340px;
    border: 1px solid #e6e6e6;
    background-color: #fff;

    .top {
      padding: 19px;
      border-bottom: 1px solid #e6e6e6;

      .text {
        span {
          display: inline-block;
          vertical-align: bottom;
          font-size: 14px;
          color: #999;
          line-height: 1;
          text-transform: uppercase;
        }

        .span1 {
          font-size: 18px;
          color: #666;
          line-height: 1;
          margin-right: 6px;
        }
      }
    }

    .left-content {
      padding: 0 20px;

      .active {
        display: block;

        .item {
          padding: 18px 0;
          border-bottom: 1px dashed #d5d5d5;
          padding-left: 15px;
          background: url(~@/assets/indexPic/jiantou.png) no-repeat left 28px;
          &:nth-child(5){
            border: none;
          }
        }
      }
    }
  }

  .right {
    float: right;
    width: 830px;

    .top {
      padding-bottom: 25px;
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 19px;

      .text-title {
        font-size: 24px;
        font-weight: 400;
        color: #333;
        line-height: 32px;
        margin-bottom: 10px;
      }

      .text-2 {
        font-size: 14px;
        font-weight: 400;
        color: #999;
        line-height: 24px;
        padding-left: 19px;
        background: url(~@/assets/indexPic/shijian.png) no-repeat 0;
      }
    }
    .r-content{
      margin-bottom: 26px;
     /deep/ p{
        text-indent: 2em;
       margin-bottom: 10px !important;
      }
    }
  }
}
</style>
