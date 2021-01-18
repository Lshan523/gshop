<template>

  <div class="msite">
    <!--首页头部-->
    <!--    <header class="header">-->
    <!--          <span class="header_search">-->
    <!--            <i class="iconfont icon-sousuo"></i>-->
    <!--          </span>-->
    <!--      <span class="header_title">-->
    <!--            <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>-->
    <!--          </span>-->
    <!--      <span class="header_login">-->
    <!--            <span class="header_login_text">登录|注册</span>-->
    <!--      </span>-->
    <!--    </header>-->

    <HeaderTop :title="address.name">

            <router-link to="/search" slot="left" class="header_search">
              <i class="iconfont icon-sousuo"></i>
            </router-link>
             <router-link :to="userInfo._id ?'/userinfo':'/login'"  slot="right" class="header_login">
                    <span v-if="!userInfo._id" class="header_login_text">{{userInfo._id || "登录/注册"}}</span>
                    <span v-else class="header_login_text"><i class="iconfont icon-person"></i></span>
            </router-link>
    </HeaderTop>




    <!--首页导航-->
    <nav class="msite_nav">
      <div v-if="categorys.length" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorylist,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorylist" :key="index">
              <div class="food_container">
                <img :src="`https://fuss10.elemecdn.com/${category.image_url}`">
              </div>
              <span>{{category.title}}</span>
            </a>

          </div>
         <!-- <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>-->

        </div>
               <!-- Add Pagination -->
               <div class="swiper-pagination"></div>
             <!--  &lt;!&ndash; If we need navigation buttons &ndash;&gt;
               <div class="swiper-button-prev"></div>
               <div class="swiper-button-next"></div>-->
               <!-- If we need scrollbar -->
               <!--<div class="swiper-scrollbar"></div>-->
      </div>
      <!--数据加载前效果-->
      <img v-else src="./images/msite_back.svg" alt="back">
    </nav>


    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </div>

</template>

<script>
  import ShopList from  "../../components/ShopList/ShopList"
  import Swiper from  "swiper";
  import 'swiper/dist/css/swiper.min.css';
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'Msite',
    components:{HeaderTop,ShopList},
      data(){
      return{

      }
      },
      mounted(){
        // this.$store.dispatch('getCategorys')
        this.getCategorys();
        this.getShops();
        },
       computed:{
       //获取state数据
         ...mapState(['address','categorys','shops','userInfo']),
         categorysArr(){
           return this.group(this.categorys,8)
         }
       },
    methods:{
      ...mapActions(['getCategorys','getShops']),
          group(array, subGroupLength) {
            let index = 0;
            let newArray = [];
            while(index < array.length) {
              newArray.push(array.slice(index, index += subGroupLength));
            }
            return newArray;
          }
    },
    watch:{

      categorysArr(value)
      { //categorys数组有数据了,在异步执行更新接界面之后　//setTimeOut可以实现(不灵活)
        //界面更新，立即创建swiper对象
        this.$nextTick(()=>{
            new Swiper('.swiper-container',{
              // direction: 'vertical', // 垂直切换选项
              loop:true, //可以循环的播
              // mousewheel: true,
              //如果需要分页器
              pagination:{
                el:'.swiper-pagination'
              },
            })
          })
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
