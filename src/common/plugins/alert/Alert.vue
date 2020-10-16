<template>
  <div v-show="show">
    <div class="mod-dialog-bg alert">
      <div class="mod-dialog">
        <div class="dialog-main">
          <div class="dialog-content">
            <img :src="imageTishi">
            <p>{{ text }}</p>
          </div>
          <div class="dialog-console clearfix_new">
            <a
              class="console-btn-confirm"
              @click="clickConfirm">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    text: {
      default: '警告!'
    },
    show: {
      default: false
    }
  },
  data: function () {
    return {
      imageTishi: require('../../../../static_assets/common/image/tishi.png')
    }
  },
  methods: {
    clickConfirm: function () {
      this.show = false
    }
  }
}
</script>

<style scoped>
  .clearfix_new:after {
    clear: both;
    content: '\20';
    display: block;
    height: 0;
  }
  .mod-dialog-bg {
    background-color: #0000005c;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    width: 100%;
    overflow: hidden;
    z-index: 1000;
  }
  .mod-dialog {
    background-color: #fff;
    border-top: none;
    position: absolute;
    z-index: 1001;
    border-radius: 5px;
  }

  .mod-dialog{
    /* width: 300px; */
    width:78%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -60%);
    -moz-transform: translate(-50%, -60%);
    -ms-transform: translate(-50%, -60%);
    -o-transform: translate(-50%, -60%);
    transform: translate(-50%, -60%);
  }

  .clearfix_new:after {
    clear: both;
    content: '\20';
    display: block;
    height: 0;
  }
  .mod-dialog .dialog-nav {
    background: #F9F9F9;
    color: #333;
    font-size: 14px;
    height: 27px;
    line-height: 27px;
    border-radius: 5px 5px 0 0;
  }
  .mod-dialog .dialog-title {
    padding-left: 10px;
  }
  .mod-dialog .dialog-close {
    height: 15px;
    position: absolute;
    right: 10px;
    top: 6px;
    width: 15px;
  }
  .mod-dialog .dialog-main {
    font-size: 14px;
    text-align: center;
    padding: 0;
  }
  .mod-dialog .dialog-content {
    line-height: 24px;
    /* margin-top: 20px;
    margin-bottom: 30px; */
    margin: 30px 0 29px 0;
  }

  .mod-dialog .dialog-content img{
    width: 30px;
    height: 30px;
  }
  .mod-dialog .dialog-content p{
    font-family:"微软雅黑","PingFangSC-Regular"!important;
    font-weight: bold;
    margin-top: 5px;
    font-size: 15px;
  }
  .mod-dialog .dialog-console {
    border-top: 1px solid #dcdcdc;
  }
  .mod-dialog .dialog-console a.console-btn-confirm {
    padding-top: 10px;
    padding-bottom: 15px;
    color:#0099ff;
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    height: 100%;
    line-height: 25px;
    text-align: center;
    width: 100%;
    border-radius: 15px;
  }
  @media only screen and (min-width:320px) and (max-width:359px){
    .mod-dialog{width: 240px}
    .mod-dialog .dialog-content img{
      width: 25px;
      height: 25px;
    }
    .mod-dialog .dialog-content{
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .mod-dialog .dialog-content p{
      font-size: 14px;
    }
    .mod-dialog .dialog-console a.console-btn-confirm {
      font-size: 14px;
    }
  }
  @media only screen and (min-width:360px) and (max-width:374px){
    .mod-dialog{width: 250px}
    .mod-dialog .dialog-content img{
      width: 25px;
      height: 25px;
    }
    .mod-dialog .dialog-content{
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .mod-dialog .dialog-content p{
      font-size: 14px;
    }
    .mod-dialog .dialog-console a.console-btn-confirm {
      font-size: 14px;
    }
  }
  @media only screen and (min-width:375px) and (max-width:411px){
    .mod-dialog{width: 270px}
    .mod-dialog .dialog-content{
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
</style>
