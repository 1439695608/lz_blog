<template>
  <transition name="fadeIn">
    <div
      v-if="show"
      class="toast-box">
      <div class="toast-content">
        <p>{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      default: false
    },
    text: {
      default: 'tips'
    },
    time: {
      default: 1000
    }
  }
}
</script>

<style scoped>
.toast-box{
  position: fixed;
  bottom: 10%;
  width: 100%;
  text-align: center;
}
.toast-content{
  display: inline-block;
  height: 25px;
  max-width: 80%;
  line-height: 25px;
  border-radius: 5px;
  background: rgba(0,0,0,.6);
  color: #fff;
  font-size: 14px;
  z-index: 9999;
  /*updateTime20200519 updateBy zouzhikuo description 黑色背景框加大 padding: 5px 10px; 改为：padding: 5px 30px; ;*/
  padding: 5px 30px;
}
.toast-content > p{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /*第二行显示 ...*/
  -webkit-box-orient: vertical;
}
.fadeIn-enter-active, .fadeIn-leave-active{
  transition: opacity .3s;
}
.fadeIn-enter, .fadeIn-leave-active{
  opacity: 0;
}
</style>
