<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-main>
              {{msg}}
			  <foo></foo>
            </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import foo from './components/foo.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'I am a root App.vue Component Message'
    }
  },
  components: {
      foo
  }  
}
</script>

<style lang="css">

  body
  {
    background-color: #fbfbf8;
	font-size: 1.1em;
  }
</style>
