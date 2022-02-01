<template>
  <div id="app">
    <header>
      <a href="https://novax.com"
        ><img
          alt="Novax logo"
          src="./assets/logo.png"
          style="height: 4em"
      /></a>
    </header>
    <body>
      <!-- <router-link to="/">Home</router-link> |  -->
      <!-- <router-link :to="{name:'Products', params:{ id: 'intellicross'} }">intellicross</router-link> | -->
      <!-- <router-link to="/products/intellicross">intellicross</router-link> | 
      <router-link to="/products/ds100">DS100</router-link> -->
      <router-view :key="$route.path" />
    </body>
    <footer>
      <div>
        <h3><small>have questions?...</small>Contact us today</h3>
        <p>1-866-977-4277 (toll-free)</p>
        <p>support@novax.com</p>
        <p>1-604-525-2739</p>
      </div>
      <div class="line"></div>
    </footer>
  </div>
</template>

<script>
// import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    // Products,
    // Home
  },
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
body {
  margin: 0em;
  margin-top: 5em;
}
header {
  background-color: #00718f;
  position: fixed;
  top: 0em;
  width: 100%;
  height: 4em;
}
footer {
  background-color: #00718f;
  color: whitesmoke;
}
footer p {
  margin: 0.3em;
}
footer .line {
  background-color: #fcac00;
  height: 0.7em;
}
</style>
