import Vuex from 'vuex'
import axios from 'axios'
import { ArticleActionVueX } from '../vuex/article/action.vuex'
import MOOD_DATA from '../../../static/data/mood_data'

class ArticleVuex extends ArticleActionVueX {
  constructor() {
    super()
    this.state = {
      commentText:'评论：',
      isShowCommentInput: false,
      nowPageIndex: 1,
      startComment:false,
      moduleInfo: [
        {
          detail_list: MOOD_DATA,
          name: 'mood',
          abbr: '心情'
        },
        {
          name: 'article',
          abbr: '文章',
          detail_list: []
        }
      ]
    }
  }
  set commentText (val) {
    this.state.commentText = val
  }
  set changeShowCommentInput (val) {
    this.state.isShowCommentInput = val
  }
  set changeNowPageIndex(val) {
    this.state.nowPageIndex = val
  }
  confirmCommentText () {
    console.log(this.state.commentText)
  }
  getArticleData (obj) {
    var _this = this
    try {
      return axios({
        method: 'get',
        url: '/api/getAritle',
        dataType: 'jsonp'
      }).then(function (res) {
        _this.state.moduleInfo[1].detail_list = res.data.articleData
        return res.data
      })
    } catch (err) {
      console.log(err)
    }
  }
}
const store = new Vuex.Store(new ArticleVuex())

export default store
