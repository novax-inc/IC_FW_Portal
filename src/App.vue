<template>
  <div id="app">
    <header>
      <a href="https://novax.com"
        ><img alt="Novax logo" src="./assets/logo.png"
      /></a>
    </header>

    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'Products', params: { id: 'intellicross' } }"
      >intellicross</router-link
    >
    | <router-link to="/products/332">332</router-link> |
    <router-link to="/products/ds100">DS100</router-link>
    <router-view :key="$route.path" />

    <div class="footer">
      <!-- <footer> -->
      <p class="subtitle is-5"><small>have questions?</small>...Contact us today</p>
      <p>1-866-977-4277 (toll-free)</p>
      <p>support@novax.com</p>
      <p>1-604-525-2739</p>
      <!-- </footer> -->
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
}
footer {
  background-color: #00718f;
  color: whitesmoke;
}
footer p {
  margin: 0.3em;
}
</style>
