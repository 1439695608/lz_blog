import Viewer from '../js/viewer/viewer.esm'
import '../js/viewer/viewer.min.css'
let CustomerDirective = {}
CustomerDirective.install = function (Vue, options) {
  Vue.directive('ellipsis', {
    inserted: function (el) {
      let containerHeight = el.clientHeight
      let contentEle = el.firstChild
      let contentHeight = el.firstChild.clientHeight
      let text = el.firstChild.innerText
      while (contentHeight > containerHeight + 10) {
        text = text.replace(/(\s)*([a-zA-Z0-9]{1,5}|\W)(\.\.\.)?$/, '...')
        contentEle.innerText = text
        contentHeight = contentEle.clientHeight
      }
    }
  })
  Vue.directive('viewer', {
    inserted: function (el, binding) {
      console.log(binding)
      let viewOptions = {
        inline: false,
        title: false,
        toolbar: false,
        navbar: false
      }
      // 可下载保存的图片
      if (Object.keys(binding.modifiers).length > 0 && binding.modifiers.hasOwnProperty('downloadable') && binding.modifiers.downloadable) {
        viewOptions.attrSet = [{'key': 'downloadable', 'value': true}]
      }
      let view = new Viewer(el, viewOptions)
      console.log(view)
    }
  })
}
export default CustomerDirective
