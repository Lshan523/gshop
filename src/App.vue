<template>
  <div id="app">
    <router-view></router-view>
    <!--部分组件不需要显示-->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'App',
    components:{FooterGuide},
    mounted () {
      // this.$store.dispatch('getCategorys')
            this.getAddress();
            this.getUserInfo();
    },
    methods:{
      ...mapActions(['getAddress','getUserInfo',])
    }
  }
</script>

<style  lang="stylus"　rel="stylesheet/stylus">

  #app
    width 100%
    height 100%
    background #f5f5f5

</style>
