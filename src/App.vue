<template>
  <div id="app">
    <div class="header">
      <img id="logo" alt="Novax logo" src="./assets/logo.png" @click="$router.push('/')"
      />
      <!-- <div class="tollfree">
      <b-button>Toll Free</b-button>
      </div> -->
    </div>

    <div class="container">
      <router-view :key="$route.path" />

      <div class="footer">
        <p class="subtitle is-5"><small>have questions?</small>...Contact us</p>
        <p>1-866-977-4277 (toll-free)</p>
        <p>support@novax.com</p>
        <p>1-604-525-2739</p>
      </div>
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
.header {
  background-color: #00718f;
  height: 60px;
}
#logo{
  width: 140px;
}
.tollfree{
  width: 400px;
  height: 15px;
}
</style>
