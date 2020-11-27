!<template>
  <div
    class="picker"
    @touchstart.prevent="handleTouchstart"
    @touchend.prevent="handleTouchend"
    @touchmove.prevent="handleTouchmove"
  >
    <ul class="pickerList" :style="getListTop" ref="wheel">
      <li
        class="pickerList-item"
        v-for="item in scrollValues"
        :key="item.index"
        :style="initWheelItemDeg(item.index)"
      >{{item.value}}</li>
    </ul>
  </div>
</template>

<script>

import Animate from './animate'

const space = 4 // 展示的半圆展示几个

export default {
  name: 'selectPicker',
  components: {},
  props: {},
  data () {
    return {
      radius: 100, // 半径
      lineHeight: 36, // 每行高度
      isInertial: false, // 是否正在惯性滑动
      singleDeg: 20, // 每个偏移的度数
      a: -0.003, // 加速度
      range: {
        start: 0,
        end: space,
        space
      },
      finger: {
        startY: 0,
        endY: 0,
        startTime: 0, // 开始滑动时间（单位：毫秒）
        entTime: 0, // 结束滑动时间（单位：毫秒）
        currentMove: 0,
        prevMove: 0
      },
      values: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  watch: {},
  computed: {
    scrollValues () {
      const result = []
      for (let i = 0; i < 8; i += 1) {
        result.push({
          value: i + 1,
          index: i
        })
      }
      debugger
      return result
    },
    getListTop () {
      return {
        top: `${this.radius - Math.round(this.lineHeight / 2)}px`,
        height: `${this.lineHeight}px`
      }
    },
    animate () {
      return new Animate()
    }
  },
  methods: {
    initWheelItemDeg (index) {
      return {
        transform: `rotate3d(1, 0, 0, ${-1 *
          index *
          this.singleDeg}deg) translate3d(0, 0, ${this.radius}px)`,
        height: `${this.lineHeight}px`,
        lineHeight: `${this.lineHeight}px`
      }
    },
    getRangeData (index) {
      index %= this.values.length
      return this.values[index >= 0 ? index : index + this.values.length]
    },
    handleTouchstart (e) {
      e.stopPropagation()
      e.preventDefault()
      this.isInertial = false
      this.finger.startY = e.targetTouches[0].pageY
      this.finger.prevMove = this.finger.currentMove
      this.finger.startTime = Date.now()
    },
    handleTouchmove (e) {
      e.stopPropagation()
      e.preventDefault()
      const move = (this.finger.startY - e.targetTouches[0].pageY) + this.finger.prevMove
      this.finger.currentMove = move
      this.$refs.wheel.style.transform = `rotate3d(1, 0, 0, ${(move / this.lineHeight) * this.singleDeg}deg)`
    },
    handleTouchend (e) {
      e.stopPropagation()
      e.preventDefault()
      this.finger.endY = e.changedTouches[0].pageY
      this.finger.endTime = Date.now()
      this.getInertiaDistance()
    },
    /**
       * 求移动速度（v = s / t），判断用户操作快慢，从而得到惯性的滑动距离
       */
    getInertiaDistance () {
      // 移动距离
      const s = this.finger.startY - this.finger.endY
      // 移动时间
      const t = this.finger.endTime - this.finger.startTime
      // 移动速度
      const v = s / t
      const absV = Math.abs(v)
      this.isInertial = true
      this.inertia(absV, Math.floor(absV / v), 0)
    }, /**
       * 用户结束滑动，应该慢慢放慢，最终停止。从而需要 a(加速度)
       * @param start 开始速度
       * @param position 速度方向，值: 正负1
       * @param target 结束速度
       */
    inertia (start, position, target) {
      if (start <= target || !this.isInertial) {
        this.animate.stop()
        this.finger.prevMove = this.finger.currentMove
        // this.updateRange(Math.round(this.finger.currentMove / lineHeight))
        // this.getSelectValue(this.finger.currentMove)
        return
      }
      // 这段时间走的位移 S = vt + 1/2at^2;
      const move = (position * start * (1000 / 60)) + (0.5 * this.a * (1000 / 60) * (1000 / 60)) + this.finger.currentMove
      // 根据求末速度公式： v末 = v初 + at
      const newStart = (position * start) + (this.a * (1000 / 60))
      let moveDeg = (move / this.lineHeight) * this.singleDeg
      let actualMove = move
      // 已经到达目标
      if (newStart <= target) {
        moveDeg = Math.round(move / this.lineHeight) * this.singleDeg
        actualMove = Math.round(move / this.lineHeight) * this.lineHeight
        this.$refs.wheel.style.transition = 'transform 700ms cubic-bezier(0.19, 1, 0.22, 1)'
      } else {
        this.$refs.wheel.style.transition = ''
      }
      this.finger.currentMove = actualMove
      this.$refs.wheel.style.transform = `rotate3d(1, 0, 0, ${moveDeg}deg)`
      // this.updateRange(Math.round(this.finger.currentMove / lineHeight))
      debugger
      this.animate.start(this.inertia.bind(this, newStart, position, target))
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.picker {
  position: relative;
  height: 300px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: gold;
  .pickerList {
    position: absolute;
    width: 100%;
    transform-style: preserve-3d;
ß    .pickerList-item {
      backface-visibility: hidden;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
}
</style>
