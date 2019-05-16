<template>
  <el-container>
    <side-bar></side-bar>
    <el-main>{{msg}}</el-main>
  </el-container>
</template>

<script>
import SideBar from '../components/SideBar'
export default {
  name: 'app',
  data () {
    return {
      msg: 'About Page Content'
    }
  },
  components:
  {
    SideBar
  },   
  
}
</script>

<style scoped>

.el-aside
{
  background-color: #eddecb;
  color: #333;
  text-align: center;
}

</style>
