<template>
    <div class="main">
        <ul>

            <router-link
                :to="'/Home/poster/' + data.id"
                v-for="data in data"
                :key="data.id"
            >
                <li>
                    <img :src="require(`@/assets/${data.img}.png`)" alt="img" />
                    <h3>{{ data.title }}</h3>
                    <p>{{ data.summery }}</p>
                    <button>Oh,take my money!</button>
                </li>
            </router-link>
        </ul>
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
body {
    h3,
    p {
        text-decoration: none;
    }
}

.main {
    width: 1440px;
    height: 100%;
    background-color: black;
    color: white;
}
ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    padding: 5rem 18rem;
    width: 300px;
    margin: 0;
    li {
        list-style: none;
        color: white;
    }
    img {
        width: 250px;
    }
    button {
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

