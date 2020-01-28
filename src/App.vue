<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" height="30">
    <h1>instagram Viewer</h1>
    <Medialist/>
  </div>
</template>

<script>
import Medialist from './components/Medialist.vue'

export default {
  name: 'app',
  components: {
    Medialist
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-ajust: 100%;
  text-align: left;
  color: #2c3e50;
  padding: 30px 30px;

  h1{
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
}
</style>
