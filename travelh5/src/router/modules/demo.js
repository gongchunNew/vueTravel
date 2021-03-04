const demo = [{
  name: 'demoStore',
  path: '/demoStore',
  meta: {
    isNeedLogin: true,
    title: 'store'
  },
  component: () => {
    return import(
      '@/views/demo/demoStore.vue'
    )
  }
}]
export default demo
