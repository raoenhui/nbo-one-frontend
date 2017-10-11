<template>
  <form class="form-horizontal" role="form" style="width: 500px;margin: 100px auto;">
    <div class="form-group">
      <label class="col-sm-2 control-label">用户名</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="请输入用户名" v-model.lazy="userAccount">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">密码</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="密码" v-model="passWord">
      </div>
    </div><div class="form-group">
      <label class="col-sm-2 control-label">验证码</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="验证码" v-model="validCode">
        <img :src="verifyCodeUrl" style="width: 37%;height: 45px;" @click="resetVerifyCode"/>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button @click.prevent="userLogin" class="btn btn-default">登录</button>
      </div>
    </div>
  </form>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import {ApiUserLogin} from 'src/service/handleData'

  export default {
    name: 'login',
    data () {
      return {
        userAccount: null, //用户名
        passWord: null, //密码,
        validCode:null,//验证码
        verifyCodeUrl:''//验证码路径
      }
    },
    mounted:function(){
      this.resetVerifyCode();
    },
    methods: {
      ...mapMutations([
        'RECORD_USERINFO',
      ]),
      userLogin(){
        ApiUserLogin(this.userAccount, this.passWord,this.validCode).then((data) => {
          var errorMsg = data["errorMsg"];
          if (errorMsg) {
            toastr.error(errorMsg);
            this.resetVerifyCode();
          } else {
            toastr.success('loginSuccess');
            this.RECORD_USERINFO(data.attrs);
            this.$router.push({path: '/platform/project'});
          }
        })
      },
      resetVerifyCode() {
        this.verifyCodeUrl ="/verfyCode?d=" + new Date();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
