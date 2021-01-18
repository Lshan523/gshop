/*
*间接更新state多个方法对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO
} from './mutation-type'
import  {
  reqCategorys,
  reqAddress,
  reqShops,
  reqPwdLogin,
  reqSendCode,
  reqValidCode,
  reqSmsLogin,
  reqUserInfo,
  reqLogout
} from  '../api'
export default {
  //################## Msite state ########################
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
  async getShops({commit,state})
  {
     const {longitude,latitude}=state
     const  result=await  reqShops(longitude,latitude)
     if(result.code==0){
       const  shops= result.data
       commit(RECEIVE_SHOPS,{shops})
     }
  },

  //################## search state ########################
  //################## profile state ########################
  //################## order state ########################

  //################## login ##############################
  // reqPwdLogin,
  // reqSendCode,
  // reqSmsLogin
 async getSendCode({commit},phone) {
   const result = await reqSendCode(phone)
   if (result.code == 0) {
     console.log("send sms code success!!!!")
   }
 },
  async getValidCode(){
     return  await reqValidCode()
  },

  async postPwdLogin(data){
     return  await reqPwdLogin(data.name, data.pwd, data.captcha)
  },
  async postSMSLogin(data){
    return  await reqSmsLogin(data.phone, data.code)
  },
  recordUserInfo({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  async getUserInfo({commit}){
       const  result= await  reqUserInfo()
       if(result.code==0){
         const userInfo=result.data
         commit(RECEIVE_USER_INFO,{userInfo})
       }
  },
  async doLoginOut({commit}){
    const  result= await reqLogout()
    if(result.code==0){
     const userInfo={}
      commit(RECEIVE_USER_INFO,{userInfo})
    }
    }
}
