<template>
  <div class="search">
<!--    <header class="header">
      <a class="header_title">
        <span class="header_title_text">搜索</span>
      </a>
    </header>-->
    <HeaderTop title="搜索" ></HeaderTop>

    <form class="search_form" @submit.prevent="search" >
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model="keyword">
      <input type="submit" name="submit" class="search_submit" >
    </form>


    <div class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link  ref="list_container_li" v-for="item in searchShops" :key="item.id"
                     :to="{path:'/shop', query:{id:item.id}}" tag="li" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </div>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import {mapActions,mapState} from 'vuex'
  export default {
    name: 'Search',
    components:{HeaderTop},
    data(){
      return{
        imgBaseUrl:'http://cangdu.org:8001/img/',
        keyword:"",
        noSearchShops:false, //如果为true 很抱歉！无搜索结果
      }
    },
    computed:{
      ...mapState(['searchShops']),

    },
    mounted () {
      // this.searchResultScroll =new BScroll('.list',{click:true})
    }
    ,
    methods:{
      ...mapActions(['doSearchShops']),
      search()
      {
        const keyword =this.keyword.trim()
        if(keyword)
        {
            this.doSearchShops(keyword)
        }
      },
    },
    watch:{
      searchShops(newSearchShops){
        if(!newSearchShops.length){
          this.noSearchShops=true //数据发生了变化，没有值
        }else
        {//有值
          this.noSearchShops=false
        }
      }


    }
  }
</script>


<!--.search overflow: hidden-->
<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    height 100%
    overflow: hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 15px
          color #fff
          background-color #02a774
    .list
      height: 100%
      overflow scroll
      .list_container
        background-color: #fff;
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      margin-top: 0.125rem
</style>
