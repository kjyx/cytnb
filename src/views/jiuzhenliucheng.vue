<template>
  <div>
    <sub-nav :infoList="infoList" :userNavList="userNavList"></sub-nav>
    <div class="wp">
      <img src="@/assets/indexPic/jiuzhenliucheng.jpg" alt="">
    </div>
  </div>
</template>

<script>
import SubNav from "@/components/subNav";
export default {
  name: "jiuzhenliucheng",
  data() {
    return {
      infoList: {
        title:'就诊流程',
        path:'/jiuzhenliucheng'
      },
      userNavList:[
        {
          title:'专家门诊',
          path:'/doctorteam'
        },
        {
          title:'诊室分布',
          path:'/zhenshifenbu'
        },
        {
          title:'就诊流程',
          path:'/jiuzhenliucheng'
        },
        {
          title:'医保报销',
          path:'/yibaozhengce'
        },
        {
          title:'体检须知',
          path:'/tijianxuzhi'
        },
      ]
    }
  },
  components: {SubNav},
}
</script>

<style scoped lang="less">
.wp {
  img {
    margin: 0 auto 115px;
    display: block;
    width: 800px;
    height: 100%;
  }
}
</style>