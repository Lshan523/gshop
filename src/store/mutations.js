/*
*直接更新state对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS, RECEIVE_SHOP_GOODS, RECEIVE_SHOP_INFO, RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
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

  //################## order state ########################

  //################## login state ########################
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo=userInfo
  },



}
