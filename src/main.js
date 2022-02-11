import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/main.css'
import '../public/iconfont/iconfont.css'
import  wow from 'wowjs'
import 'wowjs/css/libs/animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from "vue-awesome-swiper";
/*import 'swiper/swiper.min.css'*/
import store from './store/index.js'
import Vuex from 'vuex'
import vuemeta from "vue-meta";
Vue.use(vuemeta)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$wow = wow
Vue.use(ElementUI)
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
