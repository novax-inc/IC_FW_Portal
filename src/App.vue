<template>
  <a href="https://novax.com"><img alt="Novax logo" src="./assets/logo-150x150.png"></a>
  <hr/>
  <IntelliCross/>
</template>

<script>
import IntelliCross from './components/IntelliCross.vue'

export default {
  name: 'App',
  components: {
    IntelliCross
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
