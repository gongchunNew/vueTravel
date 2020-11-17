const login = [{
  name: 'login',
  path: '/',
  meta: {
    isNeedLogin: false,
    title: '登录'
  },
  component: () => {
    return import(
      '@/views/login/Login.vue'
    )
  }
}]
export default login
