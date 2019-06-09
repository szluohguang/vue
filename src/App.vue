
<template>

  <div id="app" class="box">
     <layouts></layouts>
    <!-- 
      <v-header class= "header"></v-header>
      <dailyreport></dailyreport>

     <router-view/>  vue欢迎页面 
      <v-bottom class = "bottom"></v-bottom>
      -->
  </div>

</template>

<script>
import layouts from './components/layouts.vue'
import header from './components/header.vue'
import bottom from './components/bottom.vue'
import dailyreport from './components/dailyreport.vue'

export default {
  name: 'App',
  components: {
    'layouts': layouts,
    'v-header': header,
    'v-bottom': bottom,
    'dailyreport': dailyreport
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
  margin-top: 10px;
}

</style>
