import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 自动引入所有的模块
const modules = require.context('./modules', false, /.js$/)
const routes = modules.keys().reduce((result, fileName) => {
  result = [...result, ...modules(fileName).default]
  return result
}, [])

const router = new VueRouter({
  routes
})

export default router
