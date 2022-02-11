<template>
<div>
  <sub-nav :info-list="infoList"/>
  <div class="main wp">
    <h1 style="text-align: center;margin-bottom: 20px">{{ newInfo.newsTitle }}</h1>
    <h3 style="text-align: center;margin-bottom: 50px">日期: {{ newInfo.createTime.slice(0,10) }} &nbsp; <router-link to="/newscenter" style="color: red">返回列表</router-link></h3>
    <div v-html="newInfo.newsContext" style="margin-bottom: 115px">
    </div>
  </div>
</div>
</template>

<script>
import subNav from "@/components/subNav";
import { getNewsInfo } from '@/api/api'
export default {
  name: "newsInfo",
  data() {
    return {
      infoList: {
        title:'全部新闻',
        path:'/newscenter'
      },
      newInfo:{}
    }
  },
  mounted() {
    this.loadNewsInfo()
  },
  methods:{
    async loadNewsInfo() {
      const res = await  getNewsInfo(this.$route.query.id)
      this.newInfo = res.data
      console.log( this.newInfo)
    }
  },
  components:{
    subNav
  }
}
</script>

<style scoped lang="less">
.main {
  overflow: hidden;
  /deep/ img{
    object-fit: cover;
    display: block;
    max-width: 900px;
    max-height: 600px;
    margin: 0 auto;
  }
  /deep/.ql-align-justify{
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>