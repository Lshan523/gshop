/*
*间接更新state多个方法对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-type'
import  {
  reqCategorys,
  reqAddress,
  reqShops} from  '../api'
export default {

//异步获取地址
   async getCategorys({commit}){
       //发送异步ajax请求
       const result =await reqCategorys()
        //提交mutation
       if(result.code===0){
         const categorys=result.data
         commit(RECEIVE_CATEGORYS,{categorys})
       }
    },

    async getAddress({commit,state}){
      //发送异步ajax请求
      const  geohash=state.latitude+','+state.longitude
      const result =await reqAddress(geohash)
      //提交mutation
      if(result.code===0){
        const address=result.data
        commit(RECEIVE_ADDRESS,{address})
      }
   },

  //根据经纬度获取商家信息
  async getshops({commit,state})
  {
     const {longitude,latitude}=state
     const  result=await  reqShops(longitude,latitude)
     if(result.code==0){
       const  shops= result.data
       commit(RECEIVE_SHOPS,{shops})
     }
  }
}
