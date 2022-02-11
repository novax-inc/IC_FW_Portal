<template>
  <div id="app">
    <div class="header">
      <img id="logo" alt="Novax logo" src="./assets/logo.png" />
      <img
        class="is-button"
        id="homeicon"
        src="./assets/home.svg"
        alt="Home icon"
        @click="$router.push('/')"
      />
      <h1>{{message}}</h1>
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
import masterjson from "../master_new.json";

export default {
  name: "App",
  data() {
    return {
      message:''
    };
  },
  provide: function () {
    return {
      baseURL:'/product/',
      masterjson,
    };
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
.header {
  background-color: #00718f;
}
.is-button {
  cursor: pointer;
}
#logo {
  width: 140px;
}
#homeicon {
  width: 30px;
  position: absolute;
  right: 10%;
  top: 0.7rem;
  filter: invert(100%);
}
</style>
