import  VueRouter from 'vue-router'
import Vue from "vue"

import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'


const Order =()=>import('../pages/Order/Order')
const Search=()=>import('../pages/Search/Search')
const Profile=()=>  import('../pages/Profile/Profile')
const Msite =()=>import('../pages/Msite/Msite')
Vue.use(VueRouter)

export  default  new VueRouter({

 routes:[
   {
     path:"/",
     redirect:"/msite"
   },
   {
     path:"/msite",
     component:Msite,  //返回路由组件函数 ,只有执行此函数才会加载
     meta:{
       showFooter:true
     }
   },
   {
     path: "/order",
     component: Order,
     meta: {
       showFooter: true
     }
   },
   {
     path: "/search",
     component:Search,
     meta:{
       showFooter: true
     }
   },
   {
     path: "/profile",
     component:Profile,
     meta:{
       showFooter: true
     }
   },
   {
     path: "/login",
     component:Login
   },
   {
     path: "/shop",
     component:Shop,
     children:[
       {
         path:"/shop/goods",
         component:ShopGoods
       },
       {
         path: '/shop/info',
         component: ShopInfo
       },
       {
         path: '/shop/ratings',
         component: ShopRatings
       },
       {
         path: '',
         redirect:'/shop/goods'
       }
     ]


   }

 ]

})
