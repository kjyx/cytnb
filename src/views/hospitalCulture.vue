<template>
  <div>
  <sub-nav :info-list="infoList" style="margin: 0 auto"></sub-nav>
  <div class="box">

    <div class="wp">
      <div class="box_purpose">
        <div class="box-purpose_left1">
          <div class="purpose_entry">
            <h3>医院院训</h3>
            <p>HOSPITAL TRAINING</p>
            <p>静和 慎独 明德 卓越</p>
          </div>
        </div>
        <div class="box-purpose_right1">
          <img src="@/assets/indexPic/01(4).jpg" alt="">
        </div>
        <div class="box-purpose_left1 left2">
          <div class="purpose_entry">
            <h3>医院院景</h3>
            <p>HOSPITAL VISION</p>
            <p>打造国内优秀品牌专科医院</p>
          </div>
        </div>
        <div class="box-purpose_left1 right2">
          <div class="purpose_entry">
            <h3>医院宗旨</h3>
            <p>HOSPITAL  PURPOSE</p>
            <p>凝智 精术 诚信 为民</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import subNav from "@/components/subNav";
export default {
  name: "hospitalCulture",
  data() {
    return {
      infoList: {
        title:'医院文化',
        path:'/yywh'
      },
    }
  },
  components:{
    subNav
  }
}
</script>

<style scoped lang="less">
.box{
  width: 1920px;
  height: 1180px;
  margin: 0 auto;
  background:url("../assets/indexPic/chengpintangniaobing.jpg") no-repeat;
  background-size: 100%;
  padding-top: 120px;
  .box_purpose{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 810px;
    // background-color: green;
    .box-purpose_left1{
      width: 700px;
      height: 405px;
      background-color: #f2faff;
      padding-top: 105px;
      padding-left: 70px;
      .purpose_entry{
        width: 300px;
        height: 155px;
        h3{
          font-size: 24px;
        }
        p{
          &:nth-last-child(2){
            font-size: 19px;
            padding-top: 30px;
            color: #a9aeaf;
          }
          &:nth-last-child(1){
            padding-top: 50px;
            color: #1c1c1c;
            font-weight: bold;
            font-size: 24px;
          }
        }
      }
    }
    .box-purpose_right1{
      width: 700px;
      height: 405px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .left2{
      background-color: #2396fe;
      .purpose_entry{
        h3{
          color: #fff;
        }
        p{
          &:nth-last-child(2){
            color: #fff;
          }
          &:nth-last-child(1){
            color: #fff;
          }
        }
      }
    }
  }
}

</style>