/*
*直接更新state对象
 */
import Vue from  'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS, RECEIVE_SHOP_GOODS, RECEIVE_SHOP_INFO, RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
} from './mutation-type'
export default {
  //################## Msite state ########################
      [RECEIVE_ADDRESS](state,{address}){
        state.address=address
      },
      [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys=categorys;
      },
      [RECEIVE_SHOPS](state,{shops}){
        state.shops=shops
      },

  //################## shop page ########################

    [RECEIVE_SHOP_GOODS](state,{goods}){
        state.shopGoods=goods;
    },

  [RECEIVE_SHOP_INFO](state,{info}){
    state.shopInfo=info;
  },
  [RECEIVE_SHOP_RATINGS](state,{ratings}){
    state.shopRatings=ratings;
  },

  //################## profile state ########################

  //################## Cart Control ########################
 [INCREMENT_FOOD_COUNT](state,{food})
 {
   console.log("添加到购物车"+food.count)
    if(!food.count) //第一次添加
    {
      // food.count=1   //对于新加的属性(没有数据绑定)
      /**
       * Vue 该方法可以  ==让新增的属性也有双向绑定
       * Vue(对象,"属性名",属性值)
       */
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }else
    {
      food.count++
    }
 },

 [DECREMENT_FOOD_COUNT](state,{food})
   {
     if(food.count)//有值
     {
       food.count--
       if(food.count===0){
         const index=state.cartFoods.findIndex((f=>f.name==food.name))
         state.cartFoods.splice(index,1)
       }
     }
   },
  [CLEAR_CART](state) {
        //所以的数量值0
    state.cartFoods.forEach(f=>{f.count=0})
        //清空数组
    state.cartFoods = []
  },
  //################## login state ########################
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo=userInfo
  },



}
