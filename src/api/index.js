/*
与后台交互模块
*/
import ajax from './ajax'
/**
 * 获取地址信息 ( 根据经纬度串 )
 */
const Base_URL="api"

export const reqAddress = geohash => ajax(`${Base_URL}/position/${geohash}`)
/**
 * 获取 msite 页面食品分类列表
 */
export const reqCategorys = () => ajax(`${Base_URL}/index_category`)
/**
 * 获取 msite 商铺列表 ( 根据经纬度 )
 */
export const reqShops = ({longitude,latitude}) => ajax(`${Base_URL}/shops`, {latitude,
  longitude})

/**
 * 例子: http://localhost:3000/search_shops?keyword=test&geohash=40.10038,116.36867
 * 搜索商铺
 */
export const reqSearchShop = (geohash,keyword) => ajax(`${Base_URL}/search_shops`, {geohash,keyword})



/**
 * 账号密码登录
 */
export const reqPwdLogin = (name, pwd, captcha) => ajax(`${Base_URL}/login_pwd`, {
  name,
  pwd,
  captcha
}, 'POST')
/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax(`${Base_URL}/sendcode`, {phone})
/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax(`${Base_URL}/login_sms`, {phone, code}, 'POST')
/**
 * 获取用户信息 ( 根据会话 )
 */
export const reqUserInfo = () => ajax(`${Base_URL}/userinfo`)
/**
 * * 请求登出
 */
export const reqLogout = () => ajax(`${Base_URL}/logout`)
/**
 * 获取一次性验证码
 */
//http://localhost:4000/captcha
export const reqValidCode=()=>ajax(`${Base_URL}/captcha`)

//返回goods的接口
// Mock.mock("goods",{code:0,data:data.goods})
export  const  reqShopGoods=()=>ajax("shop_goods")
//返回info的接口
// Mock.mock("info",{code:0,data:data.info})
export  const  reqShopInfos=()=>ajax("shop_info")
//返回ratings的接口
// Mock.mock("ratings",{code:0,data:data.ratings})
export  const  reqShopRatings=()=>ajax("shop_ratings")
