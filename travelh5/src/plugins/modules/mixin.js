import Vue from 'vue'

Vue.mixin({
  methods: {
    // 页面跳转
    go (router) {
      if (typeof router === 'string') {
        this.$router.push({
          name: router
        })
      } else {
        this.$router.push(router)
      }
    },
    back () {
      this.$router.go(-1)
    },
    // 页面跳转+传参
    goWithParams (name, dataObj) {
      this.$router.push({
        name: name,
        params: dataObj
      })
    }
  }
})
