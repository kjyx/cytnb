<template>
<div>
  <sub-nav :info-list="infoList" />
  <div class="box">
    <div class="wp">
      <div class="nav">
        <div class="nav-box">
          <div class="nav-box_left  centent">
            <div class="website">
              <p>医院网址</p>
              <span class="iconfont icon-wangzhi"></span>
              <p>www.zkcytnb.com</p>
            </div>
          </div>
          <div class="nav-box_center centent">
            <div class="telephone">
              <p>咨询电话</p>
              <span class="iconfont icon-dianhua"></span>
              <p>0394-8386288 &nbsp; 0394-8386299</p>
            </div>
          </div>
          <div class="nav-box_right centent">
            <div class="region">
              <p>所在地区</p>
              <span class="iconfont icon-shouye"></span>
              <p>河南省周口市八一路与黄河路交汇处</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="container"></div>
  </div>

</div>
</template>


<script>
import subNav from "@/components/subNav";
export default {
  name: "contactUs",
  data() {
    return {
      infoList: {
        title:'联系我们',
        path:'/contactUs'
      }
    }
  },
  methods:{
    init(){
      var map = new BMapGL.Map('container');
      var point = new BMapGL.Point(114.662337,33.61048);
      map.centerAndZoom(point, 17);

      var marker = new BMapGL.Marker(point);
      var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
      map.addControl(zoomCtrl);
      map.addOverlay(marker);
      var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
      map.addControl(scaleCtrl);
// 创建信息窗口
      var opts = {
        width: 200,
        height: 100,
        title: '周口承悦糖尿病医院'
      };
      var infoWindow = new BMapGL.InfoWindow('地址：八一路与黄河路交汇处', opts);
// 点标记添加点击事件
      marker.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point); // 开启信息窗口
      });
    }
  },
  mounted() {
    this.init()
  },
  components:{
    subNav
  }
}
</script>

<style scoped lang="less">

* {
  margin: 0;
  padding: 0;
}
body,
html,
#container {
  //   overflow: hidden;
  width: 100%;
  height: 610px;
  margin: 0;
  font-family: "微软雅黑";
}
.wp {
  width: 1400px;
  margin: 0 auto;
}
.box{
  width: 100%;
  max-width: 1920px;
  height: 1100px;
  margin:  100px auto 0;
  //   background-color: red;
}
.nav{
  width: 100%;
  height: 310px;
  margin-bottom: 180px;
  padding-top: 80px;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 5px #eee;
  background-color: #f5f9fd;
  .nav-box{
    display: flex;
    width: 100%;
    height: 145px;
    .centent{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      .website{
        width: 160px;
        height: 90px;
      }
      .telephone{
        width: 280px;
        height: 90px;
      }
      .region{
        width: 290px;
        height: 90px;
      }
      span {
        font-size: 16px;
      }
    }
    p{
      display: inline-block;
      line-height: 35px;
      padding-top: 5px;
      font-size: 18px;
    }
    .nav-box_center{
      border-left: 2px solid #d1d1d1;
      border-right: 2px solid #d1d1d1;
    }
  }
}



</style>