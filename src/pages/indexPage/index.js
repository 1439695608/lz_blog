import Vue from 'vue'
import App from '../../components/index/app.vue'

const AsyncStore = import('./basic.js')
// 异步加载 store
AsyncStore.then(data => {
  // 请求
  return data
}).then(data => {
  const store = data.default
  console.log(store)
  // 实例化
  new Vue({
    el: '#app',
    store,
    render: h => h(App)
  })
})
