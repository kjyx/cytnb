<template>
  <div>
    <subNav :infoList="infoList"></subNav>
    <div class="main wp">
      <img src="http://image.zqszys.com/cyy/tijianxuzhi%281%29.jpg" alt="">
    </div>
  </div>
</template>

<script>
import subNav from "@/components/subNav";
export default {
  name: "tijianxuzhi",
  data() {
    return {
      infoList: {
        title:'体检须知',
        path:'/tijianxuzhi'
      },
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
