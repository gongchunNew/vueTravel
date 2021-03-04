import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/utils'
import '@/plugins'

window.utils = utils// 挂载到页面上

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
