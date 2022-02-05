<template>
  <div id="app">
    <header>
      <a href="https://novax.com"
        ><img alt="Novax logo" width="120px" src="./assets/logo.png"
      /></a>

      <div>
        <b-button icon-left="home-remove" @click="$router.push('/')"></b-button>
      </div>
    </header>

    <router-view :key="$route.path" />

    <div class="footer">
      <p class="subtitle is-5">
        <small>have questions?</small>...Contact us today
      </p>
      <p>1-866-977-4277 (toll-free)</p>
      <p>support@novax.com</p>
      <p>1-604-525-2739</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  background-color: #00718f;
  top: 0em;
  height: 50px;
}
/* footer {
  background-color: #00718f;
  color: whitesmoke;
}
footer p {
  margin: 0.3em;
} */
</style>
