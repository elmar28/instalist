<template>
  <div id="app">
    <img alt="instagram logo" src="./assets/logo.png" height="30">
    <h1>instagram Viewer</h1>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
body{
  background: #ddd;
}
h1{
  margin: 0;
  padding: 0;
  font-size: 16px;
}

h2{
  margin: 0;
  padding: 0;
  font-size: 15px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: block;
  margin: 0;
}
a {
  color: #42b983;
}
p{
  margin: 0;
  padding: 0;
}
img{
  vertical-align: bottom;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-ajust: 100%;
  text-align: left;
  color: #2c3e50;
  padding: 30px 30px;
}
</style>
