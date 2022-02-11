import Vue from 'vue'
import Vuex from 'vuex'
import Data from '@/assets/data.json'
Vue.use(Vuex)

const PAGE_SIZE = 6

export default new Vuex.Store({
  state: {
    data:[...Data],
    page : 1,
  },
  mutations: {
    previousPage(state){
      state.page --
    },
    nextPage(state){
      state.page ++
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    currentPage(state){
      return state.data.filter((_,index) =>
      index >= (state.page-1) * PAGE_SIZE &&
      index < (state.page) * PAGE_SIZE)
    }
  }
})
