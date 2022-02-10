<template>
  <div class="header">
      <article class="article">
          <img src="@/assets/menu.png"  class="manue" alt="">
          <h1>Poster Shop</h1>
          <img src="@/assets/ninjahead.svg" class="ninja" alt="">
      </article>    
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.header
{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
    width: 1440px;
    height: 608px;
    background-color: rgba(61, 224, 126, 1);
}
.manue{
    position: absolute;
    left: 16px;
    top: 19px;
}
.ninja{
    position: absolute;
    bottom: 0px;
}
h1{
    font-size: 67px;
}
</style>