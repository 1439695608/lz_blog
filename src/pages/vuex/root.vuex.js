
// 兼容浏览器 (babel有兼容，存在不兼容，这里使用babel-polyfill)
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import CommonPlugin from '../../common/plugins/index.js'
import VuexClass from 'vuex-class.js'
// 注册插件
Vue.use(Vuex)
Vue.use(CommonPlugin)

class RootVuex extends VuexClass {
  constructor () {
    super()
    this.state = {
      config: {}, // 配置数据
      policy: {}, // 提交数据
      runstate: {} // 运行时状态
    }
    this.plugins = [
      VuexClass.init()
    ]
  }
}
export {
  RootVuex
}
