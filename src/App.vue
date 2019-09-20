<template>
  <body id="app">
    <Header />
    <router-view></router-view>
  </body>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Phenomena', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #39071F;
}
</style>
