<template>

    <div class="home">
       <Header />
        <Main />
        <Footer />
    </div>
</template>
<script>
import Main from '../components/Main.vue';
import Footer from "./Footer.vue";
import Header from './Header.vue';
export default {
    components: {
        Footer,
        Header,
        Main,
    },
};
</script>
<style>
.home {
    height: 100vh;
}
</style>


