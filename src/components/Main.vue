<template>
  <div class="main">
        <ul>
            <li v-for="data in poster" :key="data.id">
                <img :src="require(`@/assets/${data.img}.png`)" alt="img">
                <h3> {{data.title}} </h3>
                <p> {{data.summery}} </p>
                <button>Oh,take my money!</button>
            </li>
        </ul>
        <article class="pagination">
            <span>
                <button @click="prev">Previuos Page</button>
                <button @click="next">Next Page</button>
            </span>
        </article>
  </div>
</template>

<script>
export default {
    // data(){return{
    //     Data: [...this.$store.state.data],
    // }},
    computed:{
        data(){
           return this.$store.state.data
        },
        poster(){
            return this.$store.getters.currentPage
        }
    },
    methods:{
        prev(){
            this.$store.commit('previousPage')
        },
        next(){
            this.$store.commit('nextPage')
        }
    }
}
</script>

<style scoped lang="scss">
.main{
    width: 1440px;
    height: 100%;
    background-color: black;
    color: white;
}
ul{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 4rem;
    padding: 2rem 18rem;
    width: 300px;
    li{
        list-style: none;
    }
    img{
    width: 250px;
    }
    button{
        width: 150px;
        height: 30px;
        border-radius: 5px;
        border: none;
        background-color: red;
        color: white;
        font-weight: 800;
        cursor: pointer;
    }

}
.pagination{
    display: flex;
    justify-content: center;
    button{
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 5px;
        margin: 1rem;
    }
}
</style>