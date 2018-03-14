<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.ShowFooter"/>
  </div>
</template>

<script>
 import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
