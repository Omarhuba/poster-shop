<template>
  <div class="header">
      <article class="article">
          <img src="@/assets/menu.png"  alt="">
          <h1 class="heading">Poster Shop</h1>
          <input type="text" name="" class="input" placeholder="  sök post med title"
          v-model="search" @input="updateSearchReasult(search)"/>
          <span  class="input" v-if="searchResults">
          <router-link :to="'/' " class="search-result" v-for="post of searchResults" :key="post.id">{{post.title}}</router-link> 
          </span>
          <img src="@/assets/ninjahead.svg" class="image" alt="">
      </article>    
  </div>
</template>
<script>
export default {
    data(){
        return{
            search: ''
        }
    },
    mounted(){
    // this.$store.dispatch('readArrayLength')
    this.$store.dispatch('clearSearchField')
    },
    methods:{
        updateSearchReasult(payload){
          this.$store.dispatch('updateSearchResult', payload.toLowerCase())
        }
    },
    computed: {
    //hämntar från store och sparar i post()
    searchResults(){
      return this.$store.state.searchResults
    },
    }
}
</script>

<style scoped>
.header
{
    width: 1440px;
    height: 608px;
    background-color: rgba(61, 224, 126, 1);
}
.article{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
 .article .heading{
    align-self: center;
    font-size: 67px;
}
.article .input{
    align-self: center;
    font-size: 18px;
}
.article .image{
    align-self: center;
    margin-top: 10.833rem;

}
input{
    display: block;
    width: 300px;
    height: 40px;
    border-radius: 20px;
}
</style>