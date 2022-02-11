<template>
  <div class="header">
      <article class="article">
        <div class="dropdown">
        <button class="dropbtn"><img src="@/assets/menu.png"  alt=""></button>
        <div class="dropdown-content">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        </div>
        </div>
          <h1 class="heading">Poster Shop</h1>
          <input type="text" name="" class="input" placeholder="  sök post med title"
          v-model="search" @input="updateSearchReasult(search)"/>
          <span  class="input" v-if="searchResults">
          <router-link :to="'/Home/poster/'+ post.id" class="search-result" v-for="post of searchResults" :key="post.id">{{post.title}}</router-link> 
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
    margin-top: 8.66rem;

}
input{
    display: block;
    width: 300px;
    height: 40px;
    border-radius: 20px;
}
.dropbtn {
  background-color: transparent;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 80px;
  z-index: 1;
  cursor: pointer;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
    background-color: black;
     color: white;
     cursor: pointer;
     }

.dropdown:hover .dropdown-content {
    display: block;
    }
</style>