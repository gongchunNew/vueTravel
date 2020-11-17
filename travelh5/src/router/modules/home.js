const home = [{
  name: 'home',
  path: '/home',
  meta: {
    isNeedLogin: true,
    title: '首页'
  },
  component: () => {
    return import(
      '@/views/home/Home.vue'
    )
  }
}]
export default home
