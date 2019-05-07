<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>{{msg}}</el-main>
  </el-container>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'About Page Content'
    }
  }
  
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
