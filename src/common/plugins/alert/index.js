import vue from 'vue'
import AlertComponent from './Alert'

let Alert = {}
Alert.install = function (Vue, options) {
  if (document.getElementsByClassName('alert').length) {
    return
  }
  const ToastConstructor = vue.extend(AlertComponent)
  let $vm = new ToastConstructor()
  let toastEle = $vm.$mount().$el
  document.body.appendChild(toastEle)
  Vue.prototype.$alert = function (text) {
    $vm.text = text // 传入props
    $vm.show = true
  }
}
export default Alert
