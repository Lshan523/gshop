import Vue from  'vue'
import moment from 'moment'
/**
 * 自定义过滤器
 * 格式化时间  cnpm isntall --save moment
 * 在main.js 中引用，加载 import './fiters'
 */

Vue.filter('date-format',function (value,formatStr="yyyy-MM-DD HH:mm:ss") {
  return moment(value).format(formatStr)
})
