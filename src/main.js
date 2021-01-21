import Vue from 'vue'
import App from './App.vue'
import router from  "./router"
import store from './store'
import VueLazyload from 'vue-lazyload'
import  './mock/mockServer.js'  //加载mockServer 即可
import './filters'
/**
 * 注册mint-ui,
 */
import {Button} from 'mint-ui'
// // 注册全局组件
Vue.component(Button.name, Button)

import loading from './common/imgs/loading.gif'
//https://github.com/hilongjw/vue-lazyload
Vue.use(VueLazyload,{
  // loading: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4105776946,2723577313&fm=26&gp=0.jpg'
  loading
})
new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store
})



