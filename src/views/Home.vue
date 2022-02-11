<template>

    <div class="home">
      <Header/>
      <Main/>
      <Footer />
    </div>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Main from "@/components//Main.vue";
export default {
    components: {
        Footer,
        Main,
        Header
    },
};
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
.home {
    height: 100%;
}
</style>


