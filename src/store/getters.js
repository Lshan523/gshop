/*
*给予state的getter 多个计算属性方法对象
 */
export default {
  //################## Msite state ########################

  //################## search state ########################

  //################## profile state ########################

  //################## shop cart  state ########################
  totalCount(state){
    return  state.cartFoods.size
  },
  totalPrice(getter,state){
     let totalPrice=0
    Array.prototype.slice.call(state.cartFoods).forEach(f=>{
      totalPrice+=f.count*(f.price)
    })


  },

}
