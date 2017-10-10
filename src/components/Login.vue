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
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button @click.prevent="userLogin" class="btn btn-default">登录</button>
        <!--<button @click.prevent="getMyProject" class="btn btn-default">我的项目</button>-->
      </div>
    </div>
  </form>
</template>

<script>
  import {ApiUserLogin} from 'src/service/handleData'
  import{cookie} from 'src/utils/utils'

  export default {
    name: 'login',
    data () {
      return {
        userAccount: null, //用户名
        passWord: null, //密码
      }
    },
    methods: {
      userLogin(){
//        this.$http('/login', {email: this.userAccount, pwd: this.passWord, validCode: ""}, 'post')
        ApiUserLogin(this.userAccount, this.passWord).then((data) => {
          var errorMsg = data["errorMsg"];
          if (errorMsg) {
            toastr.error(errorMsg);
          } else {
            /*$window.sessionStorage.setItem("user_email", data.attrs.email);
             $window.sessionStorage.setItem("user_name", data.attrs.userName);
             $window.sessionStorage.setItem("cn_name", data.attrs.cnName);
             $window.sessionStorage.setItem("user_willPassDays", data.attrs.willPassDays || "");
             $rootScope._infoUser = nboUtils.getUserInfo();
             $state.go("platform.project");*/
            toastr.success('loginSuccess');
            this.$router.push({path: '/platform/project'});
          }
        }).catch(function (e) {
          toastr.error('loginError')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
