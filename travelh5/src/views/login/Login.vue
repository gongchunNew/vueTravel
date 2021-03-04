!<template>
  <div class="wrapper">
      <div class="menuView">
            <p class="menuLine" v-for="(menu,index) of menuList" :key="menu.path" @click="goto(menu)">
              {{ index + 1}} {{menu.name}}
            </p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {},
  props: {},
  data () {
    return {
      menuList: [
        { name: 'store的使用', path: 'demoStore' },
        { name: 'mixin的使用', path: 'demoMixin' },
        { name: 'http请求', path: 'demoHttp' },
        { name: 'UI相关', path: 'demoUI' },
        { name: '图片懒加载', path: 'demoImg' },
        { name: '事件防抖与节流', path: 'demoFangdou' },
        { name: 'eventBus兄弟组件之间传值', path: 'demoEvent' },
        { name: 'app和微信', path: 'demoWeChat' }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    goto (obj) {
      this.go(obj.path)
    }
  },
  created () {},
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  font-size: 16px;
  .menuView{
    .menuLine {
      height: 40px;
    }
  }
}
</style>
