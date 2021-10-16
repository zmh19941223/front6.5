<template>
  <div id="app">
     <!-- 原始形式 使用 state -->
     <div>插值表达式：{{ $store.state.count }}</div>
     <div>计算属性：{{ count }}</div>
     <child-a></child-a>
     <child-b></child-b>
  </div>
</template>

<script>
import { mapState }  from 'vuex'
import ChildA  from './components/child-a'
import ChildB  from './components/child-b'

export default {
  name: 'App',
  components: {
    ChildA, ChildB
  },
  computed: {
    // count () {
    //   return this.$store.state.count
    // },
    ...mapState(['count'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
