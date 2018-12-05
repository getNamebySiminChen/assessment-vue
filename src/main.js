// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入入口组件
import App from './App'
//倒入font-awesome
import 'font-awesome/css/font-awesome.min.css'
//导入样式
import './css/app.scss'
//导入vuex
import store from './store'
//导入axios
import axios from 'axios'
//设置全局axios
axios.defaults.headers.post['Content-Type'] = "application/json; charset=utf-8";
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  store,
  template: '<App/>',
  beforeCreate () {
    Vue.prototype.bus = this
  }
})
