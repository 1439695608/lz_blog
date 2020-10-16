import Alert from './alert'
import Confirm from './confirm'
import Toast from './toast'
import VueClipboard from 'vue-clipboard2'
const plugins = {
  'Alert': { // 警告框
    'plugin': Alert
  },
  'Confirm': { // 确认框
    'plugin': Confirm
  },
  'Toast': { // 提示框
    'plugin': Toast
  },
  'VueClipboard': { // 文本复制
    'plugin': VueClipboard,
    'initBefore': function () { // 在 Vue.use() 之前执行
      VueClipboard.config.autoSetContainer = true // add this line
    },
    'initAfter': function () { // 在 Vue.use() 之后执行
      console.log('init after')
    }
  }
}
function initPlugin (Vue, pluginKey) {
  if (plugins.hasOwnProperty(pluginKey)) {
    if (plugins[pluginKey].hasOwnProperty('initBefore')) {
      plugins[pluginKey].initBefore()
    }
    Vue.use(plugins[pluginKey].plugin)
    if (plugins[pluginKey].hasOwnProperty('initAfter')) {
      plugins[pluginKey].initAfter()
    }
  } else {
    console.log('plugin ' + pluginKey + ' not found')
  }
}
let CustomerPlugin = {}
CustomerPlugin.install = function (Vue, pluginArray) {
  if (typeof pluginArray != 'undefined') {
    for (let i = 0; i < pluginArray.length; i++) {
      initPlugin(Vue, pluginArray[i])
    }
  } else {
    for (let pluginKey of Object.keys(plugins)) {
      initPlugin(Vue, pluginKey)
    }
  }
}
export default CustomerPlugin
