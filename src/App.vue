<template>
  <div id="app">
   <!-- <header class="header">
      <div class="header-con">
        <div class="header-nav clearfix">
          <router-link to="/"><img src="./assets/logo.png"></router-link>
          <router-link to="/program"><div class="header-nav-line">行业解决方案</div></router-link>
          <div class="header-nav-line"><a target="_blank" href="http://fic.newtouch.com">金融云</a></div>
          <div class="header-nav-line"><a target="_blank" href="http://mc.newtouch.com/#/-1">医疗云</a></div>
          <div class="header-nav-line"><a target="_blank" href="http://ecc.newtouch.com/index">企业云</a></div>
          <router-link to="/cart"><div class="header-nav-line">
            新致商城
          </div></router-link>
          <router-link to="/about"><div class="header-nav-line">
            关于我们
          </div></router-link>
          <div class="header-nav-action">
            <label>选择区域/语言&nbsp;&nbsp;&nbsp;登录 &nbsp;&nbsp;&nbsp;注册</label>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon2" id="test">
              <span class="input-group-addon"><span class="glyphicon glyphicon-search"></span></span>
            </div>
          </div>
        </div>
      </div>
    </header>-->
    <router-view></router-view>
  <!--  <footer class="footer">
      <div class="content clearfix">
        <dl>
          <dt>联系方式</dt>
          <dd>地址：上海市浦东新区峨山路91弄98号陆家嘴软件园 1号楼4F-6F</dd>
          <dd>电话：021-51105660</dd>
          <dd>传真：021-51105667</dd>
          <dd>邮编：200127</dd>
          <dd>邮箱：newtouch@newtouch.cn</dd>
        </dl>
        <div class="footer-i">
            <div class="pull-left weichat">
              <i class="fa fa-weixin" aria-hidden="true"></i>
              <span class="arrow-left"></span>&lt;!&ndash;向左的三角&ndash;&gt;
              <img src="./assets/wechat2.png" width="100" height="100"/>
            </div>
            <div class="pull-left">
              <i class="fa fa-weibo" aria-hidden="true"></i>
              <span class="arrow-left"></span>
              <img src="./assets/weibo2.png" width="100" height="100"/>
            </div>
        </div>
      </div>
      <div class="footer-bottom">
        Copyright © 2014-2017&nbsp;&nbsp;&nbsp;上海新致软件股份有限公司&nbsp;&nbsp;&nbsp;ICP证：沪ICP备10012409号-1
      </div>
    </footer>-->
  </div>
</template>


<script>

  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  /*公共css*/
  @import './scss/Icomoon.css';
  @import './scss/Main.scss';
  @import './App.scss';
</style>
