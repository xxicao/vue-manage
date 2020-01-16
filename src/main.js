import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as Echarts from 'echarts'
import { http, singleHttp } from './api'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = Echarts
Vue.prototype.$http = http
Vue.prototype.$singleHttp = singleHttp

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
