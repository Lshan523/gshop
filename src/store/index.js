/**
 * vuex 管理对象
 */
import Vuex from  'vuex'
import Vue from  'vue'
Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
