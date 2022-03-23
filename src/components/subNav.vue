<template>
  <nav class="sub-nav">
<!--    <div class="banner">-->
<!--      <img src="@/assets/aboutme/BANNER.jpg" alt="">-->
<!--    </div>-->
    <div class="wp">
      <div class="back-index">
        <div class="left">
          <p class="iconfont icon-home"></p>
          <p @click="routerPush('/')">返回首页</p>
        </div>
        <div class="right">
          <p>{{ infoList.title }}</p>
        </div>
      </div>
<!--      <ul>
        <li v-for="(item,index) in navList" :key="index" @click="routerPush(item.path)">
            <p>{{ item.title }}</p>
        </li>
      </ul>-->
    </div>
  </nav>
</template>

<script>
export default {
  name: "subNav",
  data() {
    return {
      navList:[
        {
          title:'医院简介',
          path:'/aboutme'
        },
        {
          title:'医院文化',
          path:'/yywh'
        },
        {
          title:'医院发展',
          path:'/newscenter?id=10'
        },
        {
          title:'院容院貌',
          path:'/yrym'
        },
        {
          title:'荣誉资质',
          path:'/ryzz'
        },

      ]
    }
  },
  props:{
    infoList:{
      require:true,
      type:Object,
      default() {
        return {
          title:'返回首页',
          path:'/'
        }
      }
    },
    userNavList:{
      default() {
        return null;
      }
    }
  },
  methods:{
    routerPush(path) {
      this.$router.push(`${path}`)
    }
  },
  mounted() {
    if (this.userNavList!==null) {
      this.navList = this.userNavList
    }else {
    }
  }
}
</script>

<style scoped lang="less">
.sub-nav {
  width: 1920px;
  height: 125px;
  margin: 0 auto 90px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  .banner {
    height: 375px;
    img {
      width: 1920px;
      height: 365px;
    }
  }
.wp {
  display: flex;
  justify-content: space-between;
.back-index {
  display: flex;
div {
  width: 165px;
  height: 125px;
  display: flex;
  align-items: center;
}
p {
  cursor: pointer;
}
.left {
  border-right: 1px solid #ccc;
  color: #3490ff;
p {
  margin-right: 20px;
}
p:nth-of-type(1) {
  font-size: 30px;
}
}
.right {
  justify-content: center;
  color: #ffa91a;
}
}
ul {
  display: flex;
  height: 125px;
li {
  padding: 0 35px;
  line-height: 125px;
  text-align: center;
  cursor: pointer;
&:hover {
   color: #45a8ff;
 }
}
}
}
}
</style>
