import Vue from  'vue'
// import moment from 'moment'
import format from 'date-fns/format'
/**
 * 自定义过滤器
 * 格式化时间  cnpm isntall --save moment
 * 在main.js 中引用，加载 import './fiters'
 */

Vue.filter('date-format',function (value,formatStr) {
  //方式1 moment (依赖包比较大)
  // return moment(value).format(formatStr || "yyyy-MM-DD HH:mm:ss")
  //方式2 date-fns(依赖包相对小一些)
  return format(value, formatStr || 'YYYY-MM-DD HH:mm:ss')
})
