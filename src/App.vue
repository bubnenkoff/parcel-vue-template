<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
          <router-view></router-view>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
    import router from './router'
    import Vue from 'vue'
    import IndexPage from './components/IndexPage'
    import AboutPage from './components/AboutPage'
    import axios from 'axios'

    export default {
        name: 'app',
        router,
        components: {
            IndexPage,
            AboutPage,
        }
    }
</script>

<style>

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;  
}

.el-container {
    height: 100vh;
}

.el-header, .el-footer {
background-color: #ced5df;
color: #333;
text-align: center;
line-height: 60px;
  }
</style>

