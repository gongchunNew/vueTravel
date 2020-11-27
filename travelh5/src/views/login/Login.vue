!<template>
  <div class="wrapper">
    login 页面
    <!-- <div class="loginBtn" @click="login">登录按钮</div> -->
    <div class="loginBtn" @click="login">弹出按钮</div>
    <!-- <Modal :isShow='showSlideToCloseModal' @closeModal="closeModal"></Modal> -->
    <!-- <Datepicker></Datepicker> -->
    <!-- <selectcolumn @select="getSelectValue"></selectcolumn>
    {{selected}} -->
    <!-- <selectPicker></selectPicker> -->
  </div>
</template>

<script>
// import Modal from '../../components/UI/Modal'
// import Datepicker from '../../components/UI/Datepicker'
// import selectcolumn from '../../components/UI/SelectOption/SelectColumn'
// import selectPicker from '../../components/UI/SelectOption/selectPicker'

export default {
  name: 'Login',
  components: {
    // Modal,
    // Datepicker
    // selectcolumn
    // selectPicker
  },
  props: {},
  data () {
    return {
      showSlideToCloseModal: false,
      selected: 0,
      address: {
        province: '',
        city: ''
      },
      provinceList: [{ id: '1', name: '南京' }, { id: '2', name: '江苏' }, { id: '3', name: '湖南' }, { id: '4', name: '新建' }]
    }
  },
  watch: {},
  computed: {},
  methods: {
    login () {
      this.$router.push({ path: '/home' })
      // this.showSlideToCloseModal = true
    },
    closeModal () {
      this.showSlideToCloseModal = false
    },
    getSelectValue (value) {
      this.selected = value
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
  .loginBtn{
    height: 100px;
    width: 200px;
  }
}
</style>
