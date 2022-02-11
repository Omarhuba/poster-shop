import Vue from 'vue'
import Vuex from 'vuex'
import Data from '@/assets/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[...Data],
    searchResults: [],
  },
  mutations: {
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
  }
})
