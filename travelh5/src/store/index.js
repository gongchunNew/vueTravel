import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { copy } from '@/utils/modules/creater'

Vue.use(Vuex)

const modules = require.context('./modules', false, /.js$/)
const storeModules = modules.keys().reduce((result, fileName) => {
  const moduleName = fileName.replace(/\.\/(.*)\.js$/g, '$1')
  result[moduleName] = modules(fileName).default
  return result
}, {})

export default new Vuex.Store({
  modules: storeModules,
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer (val) {
      // 不需要持久化的state列表
      const stateBlackList = ['ui']
      const returnVal = copy(val)
      // 删除不需要持久化的模块
      stateBlackList.forEach(state => {
        Reflect.deleteProperty(returnVal, state)
      })
      return returnVal
    }
  })]
})
