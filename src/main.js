import Vue from 'vue'
import App from './App.vue'
import router from  "./router"
import store from './store'
import  './mock/mockServer.js'  //加载mockServer 即可
/**
 * 注册mint-ui,
 */
import {Button} from 'mint-ui'
// // 注册全局组件
Vue.component(Button.name, Button)
new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store
})



