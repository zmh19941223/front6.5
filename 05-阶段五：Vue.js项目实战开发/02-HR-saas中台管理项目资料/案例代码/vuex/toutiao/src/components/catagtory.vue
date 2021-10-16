<template>
   <ul class="catagtory">
        <li @click="$store.commit('catagtory/updateCurrentCatagtory', item.id)" :class="{ select: item.id === currentCatagtory }" v-for="item in catagtory" :key="item.id">{{ item.name }}</li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['catagtory', 'currentCatagtory'])
  },
  created () {
    // 调用子模块的actions
    this.$store.dispatch('catagtory/getCatagtory')
  }
}
</script>

<style>

</style>
