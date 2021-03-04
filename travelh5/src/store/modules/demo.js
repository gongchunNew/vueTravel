const state = {
  intro: "it's my intro",
  demoInfo: {
    desc: 'i am demo',
    objList: [
      {
        name: 'xiaochuan',
        age: 22
      },
      {
        name: 'xiaoming',
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

const demo = {
  namespaced: true,
  state,
  getter,
  mutations,
  actions
}

export default demo
