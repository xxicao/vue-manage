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
    this.$http.post('/user/doLogin', {
      user_name: 'yic',
      user_password: '12345'
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    ...mapMutations(['setUserInfo'])
  }
}
</script>
<style lang="less">
@import "./style/common.less";
</style>
