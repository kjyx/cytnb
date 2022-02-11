<template>
<div>
  <subNav :infoList="infoList" :userNavList="userNavList"></subNav>
  <div class="main wp">
    <img src="@/assets/indexPic/yibaozhengce.jpg" alt="">
  </div>
</div>
</template>

<script>
import subNav from "@/components/subNav";
export default {
  name: "yibaozhengce",
  data() {
    return {
      infoList: {
        title:'医保政策',
        path:'/yibaozhengce'
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
  components:{
    subNav
  }
}
</script>

<style scoped lang="less">
.main {
  img {
    width: 1400px;
    height: 100%;
    display: block;
  }
}
</style>