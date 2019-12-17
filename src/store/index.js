import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userName: ''
  },
  mutations: {
    setUserInfo (state, { userName }) {
      state.userName = userName
      state.isLogin = true
    }
  },
  actions: {
  },
  modules: {
  }
})
