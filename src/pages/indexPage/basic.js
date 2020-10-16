import Vuex from 'vuex'
import { IndexActionVueX } from '../vuex/index/action.vuex'

class IndexVuex extends IndexActionVueX {
  constructor () {
    super()
    console.log(123)
  }
}
const store = new Vuex.Store(new IndexVuex())

export default store
