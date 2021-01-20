/*
*给予state的getter 多个计算属性方法对象
 */
export default {
  //################## Msite state ########################

  //################## search state ########################

  //################## profile state ########################

  //################## shop cart  state ########################
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count , 0)
  },

  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count*food.price , 0)
  },

  positiveSize(state){
    return state.shopRatings.filter(rt=>rt.rateType==0).length
  }
}
