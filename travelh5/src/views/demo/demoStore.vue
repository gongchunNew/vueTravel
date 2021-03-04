<template>
  <div class="wrapper">
    {{info}}{{testinfo}}
    <ul>
      <li v-for="(item, index) of demoInfo.objList" :key="index">
        {{ item.name }} {{ item.age }}
      </li>
    </ul>
    <div class="btn-wrap">
      <button @click="changeIntro" class="btn">
        修改intro
      </button>
      <button @click="push" class="btn">
        添加数据
      </button>
      <button @click="refresh" class="btn">
        刷新页面
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {
    ...mapState({
      info: state => state.demo.intro,
      demoInfo: state => state.demo.demoInfo,
      testinfo: state => state.test.intro
    })
  },
  methods: {
    changeIntro () {
      this.$store.commit('test/setState', {
        attr: 'intro',
        data: '这是修改了的intro'
      })
    },
    push () {
      this.demoInfo.objList.push({
        name: '测试',
        age: '22'
      })
      this.$store.commit('demo/setState', {
        attr: 'demoInfo',
        data: this.demoInfo
      })
    },
    refresh () {
      window.location.reload()
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.wrapper{}
</style>
