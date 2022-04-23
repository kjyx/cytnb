<template>
  <div style="width: 1920px;margin: 0 auto">
    <subNav :infoList="infoList"></subNav>
    <section class="main-box">
      <div class="wp">
        <ul>
          <li  v-for="item in rongyuzizhiList" :key="item.id" @click="openPreview(item.honorFengMian)">
            <div class="img">
              <el-image
                  :src="item.honorFengMian"
                  fit="cover"
                  style="width:300px;height: 275px;margin: 0 auto"
                  lazy
              >
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </div>
            <div class="item">
              <div class="title">{{ item.honorTitle }}</div>
              <div class="more">+</div>
            </div>
          </li>
        </ul>
        <!--  分页    -->
        <el-pagination
            style="text-align: center"
            background
            :page-size=9
            layout="prev, pager, next"
            current-change="currentChange"
            :total="total">
        </el-pagination>
        <el-dialog
            :visible.sync="dialogShow"
            width="0px"
            top="30vh"
            custom-class="dialog-img"
            :show-close="false"
        >
          <div style="color: white">点击任意地方即可关闭</div>
          <div class="imgInfo">
            <img :src="imgInfo" alt="">
          </div>
        </el-dialog>
      </div>
    </section>
  </div>
</template>

<script>
import subNav from '@/components/subNav'
import {getRyzzList} from "@/api/api";

export default {
  name: "rongyuzizhi",
  data() {
    return {
      total:null,
      imgInfo:``,
      dialogShow:false,
      infoList: {
        title:'院容院貌',
        path:'/yrym'
      },
      rongyuzizhiList:[]
    }
  },
  methods:{
    openPreview(img) {
      this.dialogShow=true
      this.imgInfo = img
    },
    async loadRyzzList(pagenum = 1) {
      let query = {
        pageNum:pagenum,
        pageSize:9,
        honorType:1
      }
      const res = await getRyzzList(query)
      this.rongyuzizhiList = res.data.records
      this.total = res.data.total
    },
    currentChange(num){
      this.loadRyzzList(num)
    }
  },
  mounted() {
    this.loadRyzzList()
  },
  components:{
    subNav
  }
}
</script>

<style scoped lang="less">
*{
  max-width: 1920px;
}
.top {
  height: 370px;
  margin: 0 auto;
  background-color: #2798d7;
}
.main-box {
  max-height: 1400px;
  ul{
    display: flex;
    flex-wrap: wrap;
  }
  li {
    width: 30%;
    height: 380px;
    box-shadow: 0 0 20px #ccdada ;
    margin-bottom: 90px;
    padding:30px 12px;
    display: flex;
    flex-flow: column;
    cursor: pointer;
    .img {
      width: 400px;
      height: 275px;
      display: flex;
      justify-content: center;
    }
    .item {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        display: flex;
        align-items: center;
        &:before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: black;
          margin-right: 5px;
        }
      }
      .more {
        width: 50px;
        height: 50px;
        color: white;
        background-color: black;
        line-height: 50px;
        text-align: center;
        font-size: 36px;
      }
    }
    transition: transform 0.1s;
    &:hover {
      .more {
        background-color: #45a8ff;
        color: white;
      }
      box-shadow: 0 0 10px #ccdada;
      transform:scale(1.1);

    }
  }
  li:not(:nth-child(3n)) {
    margin-right: calc(10% / 2);
  }
}
/deep/ .dialog-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  padding: 0;
  img {
    max-width: 600px;
    max-height: 600px;
  }
}
</style>
