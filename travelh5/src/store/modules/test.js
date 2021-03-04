const state = {
  intro: '11111',
  demoInfo: {
    desc: '111111',
    objList: [
      {
        name: '1111111',
        age: 22
      },
      {
        name: '111111',
        age: 22
      }
    ]
  }
}

// 接收参数state
const getter = {}

// 同步提交
const mutations = {
  setState (state, changeObj) {
    state[changeObj.attr] = changeObj.data
  }
}
// 异步提交
const actions = {}

const test = {
  namespaced: true,
  state,
  getter,
  mutations,
  actions
}

export default test
