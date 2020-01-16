<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  created () {
    const userInfo = localStorage.getItem('userInfo')
    this.setUserInfo(JSON.parse(userInfo))
  },
  methods: {
    ...mapMutations(['setUserInfo'])
  }
}
</script>
<style lang="less">
@import "./style/common.less";
</style>
