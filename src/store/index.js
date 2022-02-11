import Vue from 'vue'
import Vuex from 'vuex'
import Data from '@/assets/data.json'
Vue.use(Vuex)

const PAGE_SIZE = 6

export default new Vuex.Store({
  state: {
    data:[...Data],
    searchResults: [],
    page : 1,
  },
  mutations: {
    previousPage(state){
      state.page --
    },
    nextPage(state){
      state.page ++
    },
      updateSearchResult(state, payload){
      
      if(payload.length > 1){
        state.searchResults = state.data.filter(title => {
          return title.title.toLowerCase().includes(payload)  
      })
     }
      else{
        state.searchResults = []
      }
      
    },
    clearSearchField(state){
      state.searchResults = []
    },
  },
  actions: {
    updateSearchResult(context, payload){
      context.commit('updateSearchResult', payload)
    },
    clearSearchField(context){
      context.commit('clearSearchField')
    },
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
