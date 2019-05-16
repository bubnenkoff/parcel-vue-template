<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" 
          mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
           <el-menu-item index="/">Main</el-menu-item>
           <el-menu-item index="about">About</el-menu-item>
        </el-menu>
      </el-header>
      
      <router-view></router-view>

      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
    import router from './router'
    import Vue from 'vue'
    import IndexPage from './pages/IndexPage'
    import AboutPage from './pages/AboutPage'
    import axios from 'axios'

    export default {
        name: 'app',
        router,
        components: {
            IndexPage,
            AboutPage,
        },

    data() {
      return {
        activeIndex: '',
      };
      },        

    methods:
    {
       handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
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

.el-header, .el-footer 
{
  background-color: #ced5df;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

</style>

