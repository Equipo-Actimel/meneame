<template>
  <div id="app">
    <Nav />
    <Login></Login>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Login from './components/Login'
export default {
  components: {
    Nav,
    Login
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
}
</style>
