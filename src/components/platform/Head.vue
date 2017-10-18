<template>
  <div>
    head:{{userInfo.userName}}
    <button @click="showLogout">登出</button>
    <VModel ref="logoutModel" :check="modalChk" message="您确定要退出当前登录吗？" />
  </div>
</template>
<script>
  import {mapActions,mapState} from 'vuex'
  import VModel from 'src/components/common/VModel.vue'
  export default {
    name: 'head',
    data () {
      return {

      }
    },
    mounted(){
      //获取用户信息
      this.getUserInfo();

    },
    props: ['signinUp', 'headTitle', 'goBack'],
    computed: {
      ...mapState([
        'userInfo'
      ]),
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ]),
      showLogout:function(){
        this.$refs['logoutModel'].showModal();
      },
      modalChk:function(){
        this.$refs['logoutModel'].closeModal();
      }
    },
    components:{VModel}
  }
</script>


<style lang="scss" scoped>

</style>
