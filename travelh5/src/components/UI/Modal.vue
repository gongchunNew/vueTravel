<template>
  <transition name="bounce">
    <div class="modal" v-show="isShow" @click="closeModelHandle">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  components: {},
  props: {
    // 是否显示模态框
    isShow: {
      type: Boolean,
      default: false
    },
    // 是否点击阴影退出
    isCloseOnBackground: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    closeModelHandle () {
      if (this.isCloseOnBackground) {
        this.$emit('closeModal')
      }
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate3d(0, 100%, 0);
    opacity: 0
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
