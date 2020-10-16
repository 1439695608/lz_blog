import Vuex from 'vuex'
import axios from 'axios'
import { AddwordActionVueX } from '../vuex/addWord/action.vuex'
import MOOD_DATA from '../../../static/data/mood_data'

class AddWordVuex extends AddwordActionVueX {
  constructor(){
    super()
    this.state={
      preHtml:'',
      mood_list:MOOD_DATA,
      title:'',
      desc:''
    }
  }
  set articleTitle (val) {
    this.state.title = val
  }

  set articleDesc (val) {
    this.state.desc = val
  }
  set changePreHtml(val){
    this.state.preHtml = val
  }
  addFile (obj) {
    try {
      return axios({
        method: 'post',
        url: '/api/addfile',
        dataType: 'jsonp',
        data: JSON.stringify(obj.article)
      }).then(function (res) {
        return res.data
      })
    } catch (err) {
      console.log(err)
    }
  }
}
const store = new Vuex.Store(new AddWordVuex())

export default store
