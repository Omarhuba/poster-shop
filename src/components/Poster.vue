<template>
    <div class="post">
        <router-link to="/">
            <img class="back" src="../assets/back.png" alt="" />
        </router-link>
        <div class="poster">
            <li>
                <img :src="require(`@/assets/${poster.img}.png`)" alt="img" />
                <h3>{{ poster.title }}</h3>
                <p>{{ poster.summery }}</p>
                <button>Oh,take my money!</button>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posters: [...this.$store.state.data],
        };
    },

    computed: {
        poster() {
            return this.posters.find((poster) => {
                return poster.id == this.$route.params.id;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.post {
    background-color: black;
}
.back {
    background-color: white;
    width: 50px;
    border-radius: 50%;
    margin: 1rem 0 0 10rem;
}
.poster {
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        list-style: none;
        width: 500px;
    }
    img {
        width: 500px;
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
</style>
