<template>

  <form class="form-horizontal" role="form" style="width: 500px;margin: 0 auto;">
    <counter></counter>
    <div class="form-group">
      <label class="col-sm-2 control-label" @click="increment(2)">用户名</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="请输入用户名" v-model.lazy="userAccount">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label" @click="decrement">密码</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="密码" v-model="passWord">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input type="checkbox">请记住我
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button @click.prevent="mobileLogin" class="btn btn-default">登录</button>
      </div>
    </div>
    <input type="file" class="profileinfopanel-upload" @change="uploadAvatar">
  </form>
</template>

<script>
  import { mapMutations } from 'vuex'
  import {accountLogin, getUserInfo} from 'src/service/handleData'
  import Counter from 'src/components/Common/Login/Counter'
  import{cookie} from 'src/utils/utils'

  export default {
    name: 'login',
    data () {
      return {
        tokenInfo: null, //获取到的用户token
        userInfo: null, //获取到的用户信息
        userAccount: null, //用户名
        passWord: null, //密码
      }
    },
    methods: {
      async uploadAvatar(){
        //upload file
//        if (this.userInfo) {
        let input = document.querySelector('.profileinfopanel-upload')
        let data = new FormData();
        data.append('file', input.files[0]);
          /*let response = await fetch('/stepapi/v3/project/d2f41314a95141fa891f463ec16c708c/file/upload', {
           method: 'POST',
           credentials: 'include',
           body: data
           })
           let res = await response.json();*/
        this.$http('/stepapi/v3/project/d2f41314a95141fa891f463ec16c708c/file/upload', data, 'upload').then((tokenInfo) => {
          alert('上传成功')
        }).catch(function (e) {
          alert('上传error')
        })

      },
      mobileLogin(){
        this.$http('/stepapi/v3/d2f41314a95141fa891f463ec16c708c/task/df01224b4b2d408b9cfc19877251bcce', {}, 'delete').then((tokenInfo) => {
          alert('删除成功')
        }).catch(function (e) {
          alert('删除error')
        })
        /* if (!this.userAccount) {
          alert('请输入手机号/邮箱/用户名');
          return
        } else if (!this.passWord) {
          alert('请输入密码');
          return
        }

        //用户名登录
         this.$http('/api/oauth/token', {
         grant_type: 'password',
         client_id: '481c89100ea34c22ba1701fed70dd204',
         client_secret: 'step.newtouch.com',
         username: this.userAccount,
         password: this.passWord
         }, 'POST').then((tokenInfo)=>{
         debugger
         cookie.set('ACCESSTOKEN', tokenInfo.access_token);
         //          this.userInfo =  getUserInfo();
         alert('登入成功')
         }).catch(function(e) {
         debugger
         alert('登入error')
         });*/

      },

//      increment(){
//        this.$store.commit('increment',2)
//      },
      ...mapMutations([
        'increment'
      ]),
      decrement(){
        toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')
//        this.$store.commit({type:'decrement',count:1})
        this.$store.dispatch({type:'decrement',count:1})
      }
    },
    components: { Counter }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
