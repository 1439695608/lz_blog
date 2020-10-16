import Vue from 'vue'
import MoodList from '../../components/article/moodList'
import AddBtn from '../../components/article/addBtn'

const AsyncStore = import('./basic.js')
// 异步加载 store
AsyncStore.then(data => {
  // 请求
  data.default.dispatch("getArticleData").then(function (res) {
    console.log(res)
  })
  return data
}).then(data => {
  const store = data.default
  console.log(store)
  // 实例化
  new Vue({
    el: '#app',
    store: store,
    render() {
      return <div>
        <MoodList/>
        <AddBtn/>
      </div>
    }
  })
})
