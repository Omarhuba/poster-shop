<template>
  <div id="login">
      <div class="back">
        <router-link to="/">
         <img class="back" src="../assets/back.png" alt="" />
        </router-link>
      </div>
    <div class="wrapper">
      <div class="login">
        <form action="" class="loginForm">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="submit" />
        </form>
        <span>
          <a href="#">Create a new account</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#login {
    background-color: rgba(61, 224, 126, 1);
}
.wrapper {
  width: 1440px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
    background-color: white;
    width: 50px;
    border-radius: 50%;
    margin: 2rem 0 0 5rem;
}
.login {
  background-color: #0b132b;
  color: aliceblue;
  width: 400px;
  padding: 40px;
  box-shadow: 10px 10px 25px #00000080;
  text-align: center;
  border-radius: 10px;
  a {
    color: white;
  }
}

.login input {
  display: block;
  margin: 20px auto;
  justify-content: center;
  text-align: center;
  background: none;
  padding: 12px;
  border-radius: 20px;
  border: 1px rgb(28, 133, 133) solid;
  outline: none;
  color: white;
}

.login [type="text"],
.login [type="password"] {
  width: 200px;
  border-color: rgb(20, 196, 250);
}
.login [type="submit"] {
  width: 120px;
  cursor: pointer;
}

.login [type="text"]:focus,
.login [type="password"]:focus {
  width: 250px;
  border-color: rgb(20, 168, 87);
  transition: 0.5s;
}
.login [type="submit"]:hover {
  background-color: rgb(83, 158, 151);
  transition: 0.5s;
}
</style>