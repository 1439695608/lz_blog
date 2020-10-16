import vue from 'vue'
import ToastComponent from './Toast'

let Toast = {}
Toast.install = function (Vue, options) {
  if (document.getElementsByClassName('toast-box').length) {
    return
  }
  const ToastConstructor = vue.extend(ToastComponent)
  let $vm = new ToastConstructor()
  let toastEle = $vm.$mount().$el
  document.body.appendChild(toastEle)
  Vue.prototype.$toast = function (text) {
    $vm.text = text // 传入props
    $vm.show = true // 显示toast
    let mResolve
    setTimeout(() => {
      $vm.show = false
      mResolve()
    }, $vm.time)
    return new Promise(function (resolve, reject) {
      mResolve = resolve
    })
  }
}
export default Toast
