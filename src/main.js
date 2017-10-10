import 'bootstrap/css/bootstrap.min.css'
import "font-awesome/css/font-awesome.css";
import "babel-polyfill";
import 'es6-promise/auto'
import 'isomorphic-fetch';
import fetch from 'src/utils/fetch'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/js/bootstrap.min.js'
import 'jquery'
import store from './store/'
import 'toastr/build/toastr.css'
import 'toastr'


// toastr弹出消息提示插件全局配置设置
toastr.options.positionClass = 'toast-top-center';
toastr.options.preventDuplicates = true;
Vue.config.productionTip = false

/* http */
Vue.prototype.$http = fetch;

window.VUE = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
