<template>
  <div
    v-if="show"
    class="mod-dialog-bg confirm">
    <div class="mod-dialog">
      <!-- 20200519 二季度优化不需要显示“提示”二字 updateTime 20200428 updateBy:zouzhikuo -->
      <!--<div class="dialog-header">
        <span class="dialog-title">{{ title }}</span>
      </div> -->
      <div class="dialog-main">
        <div class="dialog-content">
          <img
            :src="imageTishi"
            class="imgClass" >
          <p>{{ content }}</p>
        </div>
      </div>
      <div class="dialog-footer">
        <div class="dialog-console">
          <span
            class="cancel-btn"
            @click="cancel">{{ cancelBtnText }}</span>
          <span
            class="confirm-btn"
            @click="confirm">{{ confirmBtnText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    show: {
      default: false
    },
    title: {
      default: '提示'
    },
    content: {
      default: '是否需要执行此操作？'
    },
    confirmBtnText: {
      default: '确定'
    },
    cancelBtnText: {
      default: '取消'
    },
    callback: Object
  },
  // updateTime 20200428 updateBy zouzhikuo description: 2季度优化需求
  data: function () {
    return {
      imageTishi: require('../../../../static_assets/common/image/tishi.png')
    }
  },
  methods: {
    confirm: function () {
      this.show = false
      this.callback.resolve()
    },
    cancel: function () {
      this.show = false
      this.callback.reject()
    }
  }
}
</script>

<style scoped>
  /*背景遮罩层*/
  .mod-dialog-bg{
    display: inline-block;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  /*弹窗主体*/
  .mod-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -60%);
    -moz-transform: translate(-50%, -60%);
    -ms-transform: translate(-50%, -60%);
    -o-transform: translate(-50%, -60%);
    transform: translate(-50%, -60%);
    /* width: 300px; */
    width:78%;
    z-index: 1001;
    border-top: none;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
  }
  /*弹窗头部*/
  .mod-dialog .dialog-header {
    height: 27px;
    font-size: 14px;
    line-height: 27px;
    background: #F9F9F9;
    color: #333;
    border-radius: 5px 5px 0 0;
  }
  /*头部标题*/
  .mod-dialog .dialog-header .dialog-title {
    padding-left: 10px;
  }
  /*主内容区域*/
  .mod-dialog .dialog-main {
    overflow: hidden;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
  }
  /*主内容*/
  .mod-dialog .dialog-main .dialog-content {
    /* margin-top: 40px;
    margin-bottom: 31px; */
        margin: 30px 0 30px 0;
  }
  /*updateTime 20200428 updateBy zouzhikuo description: 2季度优化需求 添加提示图标*/
  .mod-dialog .dialog-content img{
    width: 30px;
    height: 30px;
    border: 0px;
    vertical-align: middle;
  }
  /*底部区域*/
  .mod-dialog .dialog-footer {
    overflow: hidden;
  }
  .mod-dialog .dialog-footer .dialog-console{
    font-size: 0;
  }
      .mod-dialog .dialog-main .dialog-content p{
      display: block;
      font-size: 14px;
      line-height: 28px;
      margin: 5px 5px 5px 5px;
      padding: 1px;
    }
  @media only screen and (min-width:320px) and (max-width:359px){
    /* .mod-dialog{width: 240px} */
    /*updateTime 20200428 updateBy zouzhikuo description: 2季度优化需求 添加提示图标*/
    /* .mod-dialog .dialog-content img{
      width: 30px;
      height: 30px;
    } */
    /* .mod-dialog .dialog-main .dialog-content{
      margin-top: 20px;
      margin-bottom: 20px;
    } */

    /* .mod-dialog .dialog-main .dialog-content p{
      font-size: 14px;
      line-height: 28px;
      margin: 5px 5px 5px 5px;
    } */
  }
  @media only screen and (min-width:360px) and (max-width:374px){
    /* .mod-dialog{width: 250px} */
        /*updateTime 20200428 updateBy zouzhikuo description: 2季度优化需求 添加提示图标*/
    /* .mod-dialog .dialog-content img{
      width: 35px;
      height: 35px;
    }
    .mod-dialog .dialog-main .dialog-content{
      margin-top: 25px;
      margin-bottom: 25px;
    } */
    /* .mod-dialog .dialog-main .dialog-content p{
      font-size: 14px;
      line-height: 28px;
    } */
  }
  @media only screen and (min-width:375px) and (max-width:411px){
    /* .mod-dialog{width: 270px} */
    /* .mod-dialog .dialog-main .dialog-content{
      margin-top: 30px;
      margin-bottom: 30px;
    } */
  }
  .mod-dialog .dialog-main {
    border-bottom: 1px solid #f5f5f5;
  }
  .mod-dialog .dialog-main .dialog-content {
    font-size: 16px;
    line-height: 32px;
  }
  .dialog-console span{
    display: inline-block;
    width: 50%;
    height: 50px;
    font-size: 16px;
    margin: 0!important;
    line-height: 50px;
    text-align: center;
  }

  .dialog-console .cancel-btn{
    color: #9d9d9d;
    width: 49%;
    border-right: 1px solid ;
    border-color:#F5F5F5;

  }
  .dialog-console .confirm-btn {
    color: white;
    color: #2599FF;
  }
  /*updateTime 20200428 updateBy zouzhikuo description: 2季度优化需求 添加提示图标*/
  /* .imgClass{transform: translateY(-16%);} */
    .imgClass{transform: translateY(13%);}
</style>
