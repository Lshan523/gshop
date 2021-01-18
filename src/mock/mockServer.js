/**
*使用mockjs 提供mock数据接口
* npm install mockjs --save
* examples:
* http://mockjs.com/examples.html
*/

import  Mock from 'mockjs'
import data from './data.json'


// Mock.mock(rurl, data)
// Mock.mock(/\.json/, {
//   'list|1-10': [{
//     'id|+1': 1,
//     'email': '@EMAIL'
//   }]
// })
// $.ajax({
//   url: 'hello.json',
//   dataType: 'json'
// }).done(function(data, status, jqXHR){
//   $('<pre>').text(JSON.stringify(data, null, 4))
//     .appendTo('body')
// })

//返回goods的接口
Mock.mock("shop_goods",{code:0,data:data.goods})
//返回info的接口
Mock.mock("shop_info",{code:0,data:data.info})
//返回ratings的接口
Mock.mock("shop_ratings",{code:0,data:data.ratings})

//export default ??? 不需要向外暴露任何东西
