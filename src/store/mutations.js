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
 [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count) //第一次添加
    {
      // food.count=1   //对于新加的属性(没有数据绑定)
      /**
       * Vue 该方法可以  ==让新增的属性也有双向绑定
       * Vue(对象,"属性名",属性值)
       */
      Vue.set(food,'count',1)
    }else {
      food.count++
    }
    state.cartFoods.push(food)
 },

 [DECREMENT_FOOD_COUNT](state,{food}){
   if(food.count)
   {
     food.count--
     // state.cartFoods.push(food)
   }else {
     // state.cartFoods=state.cartFoods.filter(f=>f.count>0)
   }
 },

  //################## login state ########################
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo=userInfo
  },



}
