// store
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from './dev-tool/middlewares/logger'

Vue.use(Vuex)
Vue.config.debug = true
const debug = process.env.NODE_ENV !== 'production'

// 应用初始状态
const state = {
  count: 0
}

// 定义所需的 mutations
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations,
  middlewares: debug ? [createLogger()] : []
})
