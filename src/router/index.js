import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)
// 备份vuerouter的push方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {
    }, () => {
    })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => {
    }, () => {
    })
  }
}
const routes = [
  {
    path: '/',
    redirect:'/index',
    // component: () => import('../views/demo.vue'),
    meta:{
      headerShow:true,
      footerShow:true
    },
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta:{
      headerShow:true,
      footerShow:true
    }
  },
  {
    path: '/ryzz',
    name: 'ryzz',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/rongyuzizhi.vue')
  },
  {
    path: '/doctorTeam',
    name: 'doctorTeam',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/doctorTeam.vue'),
    children:[
    ]
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/aboutMe.vue'),
  },
  {
    path: '/yywh',
    name: '医院文化',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/hospitalCulture.vue'),
  },
  {
    path: '/ksdh',
    name: '科室导航',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/DepartmentNav.vue'),
  },
  {
    path: '/newscenter',
    name: '新闻中心',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/news.vue'),
  },
  {
    path: '/departmentInfo',
    name: '科室详情',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/departmentInfo.vue'),
  },
  {
    path: '/contactUs',
    name: '联系我们',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/contactUs.vue'),
  },
  {
    path: '/yibaozhengce',
    name: '医保政策',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/yibaozhengce.vue'),
  },
  {
    path: '/tijianxuzhi',
    name: '体检须知',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/tijianxuzhi.vue'),
  },
  {
    path: '/message',
    name: '联系我们',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/message.vue'),
  },
  {
    path: '/yrym',
    name: '院容院貌',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/yuanrongyuanmao.vue'),
  },
  {
    path: '/newsInfo',
    name: '新闻详情内页',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/newsInfo.vue'),
  },
  {
    path: '/demo',
    name: '新闻详情内页',
    component: () => import('../views/demo.vue'),
  },
  {
    path: '/jiuzhenliucheng',
    name: '就诊流程',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/jiuzhenliucheng.vue'),
  },
  {
    path: '/zhenshifenbu',
    name: '诊室分布',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/zhenshifenbu.vue'),
  },
  {
    path: '/zqsz',
    name: '后台',
    meta:{
      headerShow:true,
      footerShow:true
    },
    component: () => import('../views/zhenshifenbu.vue'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next)=>{
  if(typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      window.location.href = './mobile/dist/index.html'
    }else {
      next()
    }
  }
  if (to.name === '后台') {
    window.location.href = 'http://139.224.68.167:9088'
  }
})
router.afterEach((to, from,next)=>{
  window.scrollTo(0,0)
})
export default router
