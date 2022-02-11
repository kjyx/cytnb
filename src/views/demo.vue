<template>
  <div>
    <button @click="show = !show">{{txt}}</button>
    <transition name="fade">
      <div class="leftNav" v-show="show">左侧边栏</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
  computed: {
    txt() {
      return this.show ? '收起' : '展开'
    }
  },
}
</script>

<style>
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.leftNav {
  height: 90vh;
  width: 200px;
  background-color: #ccc;
}

/*设置动画*/
.fade-enter,
.fade-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}

.fade-enter-to {
  transform: translateX(0)
}
</style>