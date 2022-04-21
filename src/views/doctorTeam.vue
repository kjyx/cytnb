<template>
<div>
  <subNav :info-list="infoList"></subNav>
  <div class="doctor-box">
    <div class="wp">
      <ul class="ul">
        <li v-for="item in doctorList" :key="item.id" @click="openPreview(item.id)">
          <!-- 内容 -->
          <div class="doctor-item">
            <div class="pic">
              <img :src="item.dockerFengMian" alt="">
            </div>
            <div class="text">
              <h1>{{ item.dockerTitle }}</h1>
              <h2>{{ item.positiones }}</h2>
            </div>
          </div>
        </li>
      </ul>
      <el-pagination
          align="center"
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="query.pageSize"
          :current-page="query.pageNum"
          @current-change="loadDoctorList"
      >
      </el-pagination>
    </div>
  </div>
  <el-dialog
      :visible.sync="dialogShow"
      width="0px"
      custom-class="dialog-img"
      :show-close="false"
      top="0"
  >
    <div class="doctor-info-main">
      <div class="box-top">
        <div class="user-pic">
          <div class="pic">
            <el-image
                :src="doctorInfo.dockerFengMian"
                fit="contain"
                style="height: 255px;width: 206px"
                lazy
            >
            </el-image>
          </div>
          <p>{{ doctorInfo.dockerTitle }} {{ doctorInfo.positiones }}</p>
        </div>
        <div class="right">
          <p>医师简介</p>
          <p>周口承悦糖尿病</p>
          <div></div>
        </div>
      </div>
      <article>
        <div class="title">
          <h1>Cheng Yue Diabetes Hospital</h1>
          <h3>开诊科室:{{ doctorInfo.direction  }}</h3>
<!--          <h3>专业方向:{{ doctorInfo.direction  }}</h3>-->
          <h3>职务/职称:{{ doctorInfo.positionTitle  }}</h3>
        </div>
        <p v-html="doctorInfo.dockerContext">
        </p>
      </article>
    </div>
  </el-dialog>
</div>

</template>

<script>
import subNav from '@/components/subNav'
import {getDoctorList,getDoctorInfo} from "@/api/api";
export default {
  name: "doctorTeam",
  data() {
    return {
      infoList: {
          title:'专家介绍',
          path:'/doctorteam'
      },
      dialogShow:false,
      doctorList:[],
      doctorInfo:{},
      query:{
        pageNum:1,
        pageSize:8
      },
      total:0
    }
  },
  computed: {
  },
  methods: {
    async loadDoctorInfo(id) {
      const res = await getDoctorInfo(id)
      this.doctorInfo = res.data
    },

    async loadDoctorList(pagenum = 1) {
     await this.$router.push({
        path:'/doctorteam',
        query:{
          paheNum:pagenum,pageSize:8
        }
      })
      this.query.pageNum = pagenum
      const res = await getDoctorList(this.query)
      this.doctorList = res.data.records
      this.total = res.data.total
    },

    openPreview(id) {
      this.dialogShow=true
      this.loadDoctorInfo(id)
    }
  },
  mounted() {
    this.loadDoctorList()
  },
  components:{
    subNav,
  },
}
</script>

<style scoped lang="less">
.doctor-box {
  display: flex;
  position: relative;
  margin-bottom: 115px;
  ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    li{
      margin-right: 120px;
      margin-bottom: 100px;
      &:nth-child(4n){
        margin-right: 0;
      }
    }
  }
      .doctor-item {
        width: 260px;
        height: 400px;
        background-color: white;
        border-radius: 5%;
        overflow: hidden;
        .pic {
          height: 300px;
          img {
            display: block;
            width: 100%;
            height: 300px;
          }
        }
        .text {
          display: flex;
          flex-flow: column;
          justify-content: center;
          height: 100px;
          text-align: center;
          background-color: #3C8BCB;
          color: white;
          h1 {
            font-size: 20px;
            font-weight: bold;
          }
          h2 {
            font-size: 16px;
          }
        }
      }
    }
.box {
  width: 260px;
  height: 400px;
  background-color: #45a8ff;
}
.doctor-info-main {
  color: black;
  box-shadow: 0 0 5px #ccc;
  border-radius: 15px;
  width: 1340px;
  height: 850px;
  background-color: #fff;
  transform: translate(-50%,0);
  padding: 70px 30px 0 80px;
  .box-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    .user-pic {
      width: 205px;
      height: 280px;
      p {
        font-weight: bold;
        text-align: center;
      }
    }
    .right{
        padding: 35px 65px 0 0;
      text-align: right;
      p:nth-of-type(1){
        font-weight: bold;
        margin-bottom: 20px;
      }
      p:nth-of-type(2) {
        color: #6c8088;
        font-size: 17px;
        margin-bottom: 19px;
      }
      div {
        float: right;
        width: 54px;
        height: 3px;
        background-color: #6c8088;
      }
    }
  }
  article {
    .title {

      h1 {
        font-size: 37px;
        color: #dce4e4;
        margin-bottom: 50px;
      }
      h3 {
        margin-bottom: 20px;

      }

    }

    p {
      font-size: 16px;
      display: inline-block;
      line-height: 62px;
      /*border-bottom: 1px dashed #dce4e4;*/
      text-decoration:underline;
      text-underline-offset:15px;
      text-decoration-style:dashed;
      text-decoration-color:#dce4e4;
    }
  }
}
.hover-top {
  &:hover{
    transform: translateY(-20px) scale(1.1);

  }
  transition: all 0.4s ease 0s;
}
.swiper-button-prev:after, .swiper-button-next:after {
  font-size: 18px;
  background-color: #2ab0ef;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  text-align: center;
  line-height: 30px;
  color: white;
}
</style>
