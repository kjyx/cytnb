<template>
<div class="main">
  <subNav :infoList="infoList"/>
  <div class="box wp">
    <div class="list_1">
      <div class="nav_line" style="margin-bottom: 50px;">
        <p>临床科室</p>
      </div>
        <ul class="img-list">
          <li class="onhover" v-for="item in linchuangList.slice(0,3)" :key="item.id" @click="toDepartmentInfo(item.title)">
            <h3>{{ item.title }}</h3>
          </li>
        </ul>
      <ul class="list-department">
        <li class="onhover" v-for="item in linchuangList.slice(3)" :key="item.id" @click="toDepartmentInfo(item.title)">{{ item.title }}</li>
      </ul>
    </div>
    <div class="list_1">
      <div class="nav_line">
        <p>医技医学部</p>
      </div>
      <ul class="list-department">
        <li class="onhover" v-for="item in yijiyiyueList" :key="item.id" @click="toDepartmentInfo(item.title)">{{ item.title }}</li>
      </ul>
    </div>
    <div class="list_1">
      <div class="nav_line">
        <p>辅助科室</p>
      </div>
      <ul class="list-department">
        <li class="onhover" v-for="item in fuzhukeshiList" :key="item.id" @click="toDepartmentInfo(item.title)">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import  { getDepartmentList } from '@/api/api'
import subNav from '@/components/subNav'
export default {
  name: "DepartmentNav",
  data() {
    return {
      infoList: {
        title:'科室导航',
        path:'/ksdh'
      },
      linchuangList:[],
      yijiyiyueList:[],
      fuzhukeshiList:[]
    }
  },
  methods:{
    toDepartmentInfo(name) {
      this.$router.push({
        path:'/departmentinfo',
        query:{name}
      })
    },
    async loadLingchuang() {
      let query = {
        pageSize:20,
        pageNum:1,
        departmentType:1
      }
      const res = await getDepartmentList(query)
      res.data.records.forEach((item) => {
        this.linchuangList.push({
          title:item.departmentName,
          id:item.id
        })
      })
    },
    async loadYijiyiyue() {
      let query = {
        pageSize:20,
        pageNum:1,
        departmentType:2
      }
      const res = await getDepartmentList(query)
      res.data.records.forEach((item) => {
        this.yijiyiyueList.push({
          title:item.departmentName,
          id:item.id
        })
      })
    },
    async loadFuzhu() {
      let query = {
        pageSize:20,
        pageNum:1,
        departmentType:3
      }
      const res = await getDepartmentList(query)
      res.data.records.forEach((item) => {
        this.fuzhukeshiList.push({
          title:item.departmentName,
          id:item.id
        })
      })
    }
  },
  mounted() {
    this.loadLingchuang()
    this.loadYijiyiyue()
    this.loadFuzhu()
  },
  components:{
    subNav
  }
}
</script>

<style scoped lang="less">
.main {
  .nav_line {
    height: 60px;
    background:linear-gradient(to right,#3b70c7,#a1d0f7);
    padding-left: 30px;
    p {
      line-height: 60px;
      font-size: 16px;
      color: white;
      letter-spacing: 1px;
    }
  }
  .img-list {
    display: flex;
    justify-content: space-between;
    li {
      width: 410px;
      height: 200px;
      background-color: #cccccc;
      background-size: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 30px;
        font-weight: bold;
      }
      p {
        font-size: 20px;
      }
    }
    li:nth-of-type(1) {
      background-image: url("~@/assets/indexPic/01.jpg");
    }
    li:nth-of-type(2) {
      background-image: url("~@/assets/indexPic/02.jpg");
    }
    li:nth-of-type(3) {
      background-image: url("~@/assets/indexPic/03.jpg");
    }
  }
  .list-department {
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    padding: 50px 0;
    li{
      width: 300px;
      height: 75px;
      border: 1px solid #cccccc;
      font-size: 25px;
      text-align: center;
      line-height: 75px;
      cursor: pointer;
      margin-bottom: 30px;
      color: #7c9399;
      &:not(:nth-child(4n)) {
        margin-right: 66px;
      }
      &:hover {
        background-color: #3c8bcb;
        color: white;
      }
    }
  }
}
</style>
