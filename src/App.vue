<template>
  <div id="app">
    <Header v-if="$route.meta.headerShow"/>
    <transition>
      <router-view></router-view>
    </transition>
    <Footer v-show="$route.meta.footerShow"/>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components:{
    Header,Footer
  },
  mounted() {
  },
  data() {
    return {
    }
  },
  metaInfo:{
    title:"承悦糖尿病医院",
    meta:{
    }
  },
  watch: {
  },
}
</script>
<style lang="less">
</style>
