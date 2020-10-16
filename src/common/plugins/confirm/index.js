import vue from 'vue'
import ConfirmComponent from './Confirm'

let Confirm = {}
Confirm.install = function (Vue, options) {
  // 如果页面已经存在confirm窗口则不再挂载
  if (document.getElementsByClassName('confirm').length) {
    return
  }
  const ConfirmConstructor = vue.extend(ConfirmComponent)
  let $vm = new ConfirmConstructor()

  let ConfirmEle = $vm.$mount().$el
  document.body.appendChild(ConfirmEle)
  Vue.prototype.$confirm = function (content, title, opt) {
    $vm.content = content
    $vm.title = title
    if (typeof opt == 'object') {
      if (opt.hasOwnProperty('confirmBtnText')) {
        $vm.confirmBtnText = opt.confirmBtnText
      }
      if (opt.hasOwnProperty('cancelBtnText')) {
        $vm.cancelBtnText = opt.cancelBtnText
      }
    }
    return new Promise(function (resolve, reject) {
      $vm.show = true
      $vm.callback = {
        'resolve': resolve,
        'reject': reject
      }
    })
  }
}
export default Confirm
