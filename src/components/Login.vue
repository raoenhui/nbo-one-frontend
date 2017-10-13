<template>
  <div class="login-back">
    <div class="form-back">
      <h4 class="login-title">
        用户登录(操作视图)
      </h4>
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control login-form" placeholder="请输入用户名" v-model.lazy="userAccount" v-on:input = "changeState" @blur ="access()">
          </div>
          <div class="col-sm-12 errorMessge" v-bind:class="{'messge':accessErrorMessge}">用户名不能为空</div>
        </div>
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control login-form" placeholder="密码" v-model="passWord" v-on:input = "changeState" @blur ="passw()">
          </div>
          <div class="col-sm-12 errorMessge" v-bind:class="{'messge':passwErrorMessge}">密码不能为空</div>
        </div>
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control login-form pull-left" placeholder="验证码" v-model="validCode" style="width:70%;" v-on:input = "changeState" @blur ="code()">
            <img :src="verifyCodeUrl" style="width: 30%;height: 45px;" @click="resetVerifyCode"/>
          </div>
          <div class="col-sm-12 errorMessge " v-bind:class="{'messge':codeErrorMessge}">验证码不能为空</div>
        </div>

        <div class="row margin-auto">
          <div class="col-sm-5 bk-items-list fl" style="width: 49%;">
            <button @click.prevent="userLogin" class="btn btn-lg btn-dark btn-block loginBtn" v-bind:disabled="disabledBtn" >登录</button>
          </div>
          <div class="col-sm-5 bk-items-list fr" style="width: 49%;">
            <button type="button" class="btn btn-lg btn-default btn-block loginBtn" disabled="disabled">马上注册</button>
          </div>
        </div>
      </form>
      <ul class="list-container">
        <li class="spinner-list" title="paceman loader">
          <div class="v-spinner">
            <div class="v-pacman v-pacman1">
            </div>
            <div class="v-pacman v-pacman2">
            </div>
            <div class="v-pacman v-pacman3">
            </div>
            <div class="v-pacman v-pacman4">
            </div>
            <div class="v-pacman v-pacman5">
            </div>
          </div><!--v-component-->
        </li>
      </ul>
    </div>

  </div>
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
        verifyCodeUrl:'',//验证码路径
        disabledBtn:true, //禁用提交按钮标识
        accessErrorMessge:false,
        passwErrorMessge:false,
        codeErrorMessge:false
      }
    },
    mounted:function(){
      this.resetVerifyCode();
    },
    methods: {
      ...mapMutations([
        'RECORD_USERINFO',
      ]),
      changeState: function (){
        if(this.userAccount && this.passWord && this.validCode){
          this.disabledBtn = false
        }else {
          this.disabledBtn = true
        }
      },
      access(){
        if(!this.userAccount){
          this.accessErrorMessge = true;
        }else{
          this.accessErrorMessge = false;
        }
      },
      passw(){
        if(!this.passWord){
          this.passwErrorMessge = true
        }else{
          this.passwErrorMessge = false
        }
      },
      code(){
        if(!this.validCode){
          this.codeErrorMessge = true
        }else{
          this.codeErrorMessge = false
        }
      },
      userLogin(){
        this.changeState();
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
  li{
    list-style:none;
  }

  .list-container{
    border-radius: 2px;
    background: #fff;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }

  .spinner-list{
    display: -webkit-flex;
    display: flex;
    webkit-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    width: 200px;
    height: 200px;
    webkit-align-items: center;
    align-items: center;
    webkit-justify-content: center;
    justify-content: center;
  }

  .v-spinner{
    position: relative;
    font-size: 0px;
  }

  .v-pacman1{
    width: 0px; height: 0px; border-width: 25px; border-style: solid; border-color: rgb(93, 197, 150) transparent rgb(93, 197, 150) rgb(93, 197, 150); border-radius: 25px;
  }

  .v-pacman2{
    border-radius: 100%; margin: 2px; height: 10px; width: 10px; background-color: rgb(93, 197, 150); animation-fill-mode: both; animation:mymove 1s infinite;  animation-timing-function:linear; left: 150px; top: 25px; position: absolute; transform: translate(0px, -5px); animation-delay: 0.25s;
  }

  .v-pacman3{
    border-radius: 100%; margin: 2px; height: 10px; width: 10px; background-color: rgb(93, 197, 150); animation-fill-mode: both; animation:mymove 1s infinite;  animation-timing-function:linear ;left: 150px; top: 25px; position: absolute; transform: translate(0px, -5px); animation-delay: 0.5s;
  }

  .v-pacman4{
    border-radius: 100%; margin: 2px; height: 10px; width: 10px; background-color: rgb(93, 197, 150); animation-fill-mode: both; animation:mymove 1s infinite;  animation-timing-function:linear ;left: 150px; top: 25px; position: absolute; transform: translate(0px, -5px); animation-delay: 0.75s;
  }

  .v-pacman5{
    border-radius: 100%; margin: 2px; height: 10px; width: 10px; background-color: rgb(93, 197, 150); animation-fill-mode: both; animation:mymove 1s infinite;  animation-timing-function:linear ;left: 150px; top: 25px; position: absolute; transform: translate(0px, -5px); animation-delay: 1s;
  }

  @keyframes mymove
  {
    from {left:150px;}
    to {left:0px;}
  }

  @-webkit-keyframes mymove /* Safari and Chrome */
  {
    from {left:150px;}
    to {left:0px;}
  }

  .login-back{
    background: #1c2b36;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .form-back{
    width: 390px;
    margin: auto;
    margin-top: 10%;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
  }

  .login-title{
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    margin-top: -15px;
    margin-bottom: 15px;
  }

  .login-form{
    height: 46px;
  }

  .loginBtn{
    background-color: #3a3f51;
    color: #fff;
  }

  .btn-default[disabled], fieldset[disabled] .btn-default,.btn-default[disabled]:hover, fieldset[disabled] .btn-default:hover, .btn-default.disabled:focus, .btn-default[disabled]:focus, fieldset[disabled] .btn-default:focus, .btn-default[disabled]:active, fieldset[disabled] .btn-default:active{
    background-color: #fcfdfd;
    border-color: #dee5e7;
    color: #333;
  }
  .btn-dark.disabled, .btn-dark[disabled], fieldset[disabled] .btn-dark, .btn-dark.disabled:hover, .btn-dark[disabled]:hover, fieldset[disabled] .btn-dark:hover, .btn-dark.disabled:focus, .btn-dark[disabled]:focus, fieldset[disabled] .btn-dark:focus, .btn-dark.disabled:active, .btn-dark[disabled]:active, fieldset[disabled] .btn-dark:active, .btn-dark.disabled.active, .btn-dark[disabled].active, fieldset[disabled] .btn-dark.active
  {
    background-color: #3a3f51;
    border-color: #3a3f51;
  }

  .errorMessge{
    display: none;
  }

  .messge{
    color:red;
    display: block;
  }

</style>
