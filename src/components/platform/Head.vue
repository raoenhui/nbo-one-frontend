<template>
  <div>
    head:{{userInfo.userName}}

  </div>
</template>
<script>
  import {mapActions,mapState} from 'vuex'
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
      ])
    }
  }
</script>


<style lang="scss" scoped>

</style>
