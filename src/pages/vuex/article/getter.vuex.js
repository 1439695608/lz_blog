import { RootVuex } from '../root.vuex'
// import Vue from 'vue'

/*
  vuex页面数据定义层，与数据交互层
  vuex中的数据必须通过调用set方法修改，不可直接修改
 */
class ArticleGetterVueX extends RootVuex {
  constructor () {
    super()
    this.state = {test: 1}
  }
  set test (val) {
    this.state.test = 2
  }
}
export {
  ArticleGetterVueX
}
