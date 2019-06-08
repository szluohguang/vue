
/* eslint-disable */
<template>

  <div id="app" class="box">
      <v-header class= "header"></v-header>
      <div class="tab">
        I am tab! 2019/06/08
      </div>
      <div class="content">
        I am content! 这是我的测试程序
      </div>
     <!-- <router-view/>  vue欢迎页面 -->
      <v-bottom class = "bottom"></v-bottom>
  </div>

</template>

<script>
import header from './components/header.vue'
import bottom from './components/bottom.vue'

export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-bottom': bottom
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
  margin-top: 60px;
}
.box {
  display: flex;
  flex-direction: column;
}
.bottom {
  align-self: flex-end;
}
</style>
