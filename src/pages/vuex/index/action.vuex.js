import { IndexGetterVueX } from './getter.vuex.js'
// import Vue from 'vue'

/*
  action方法层，用来处理业务逻辑方法
 */
class IndexActionVueX extends IndexGetterVueX {
  test () {
    console.log(123)
  }
}
export {
  IndexActionVueX
}
