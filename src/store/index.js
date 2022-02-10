import Vue from 'vue'
import Vuex from 'vuex'
import Data from '@/assets/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[...Data]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
