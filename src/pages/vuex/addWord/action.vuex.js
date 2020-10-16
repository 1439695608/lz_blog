import { AddwordGetterVueX } from './getter.vuex.js'
// import Vue from 'vue'

/*
  action方法层，用来处理业务逻辑方法
 */
class AddwordActionVueX extends AddwordGetterVueX {
  test () {
    console.log(123)
  }
}
export {
  AddwordActionVueX
}
