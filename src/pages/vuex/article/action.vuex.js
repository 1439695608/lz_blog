import { ArticleGetterVueX } from './getter.vuex.js'
// import Vue from 'vue'

/*
  action方法层，用来处理业务逻辑方法
 */
class ArticleActionVueX extends ArticleGetterVueX {
  test () {
    console.log(123)
  }
}
export {
  ArticleActionVueX
}
