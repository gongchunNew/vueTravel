!<template>
  <div class="wrapper">
    login 页面
    <div class="loginBtn" @click="login">登录按钮</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    login () {
      this.$router.push({ path: '/home' })
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.wrapper{
  font-size: 16px;
  .loginBtn{
    height: 100px;
    width: 200px;
  }
}
</style>
