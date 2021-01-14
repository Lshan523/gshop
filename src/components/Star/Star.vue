<template>

<!--  <div class="star star-24">-->
  <div class="star " :class="'star-'+size">
    <span class="star-item " :class="starName" v-for="(starName,index) in startClassArr" :key="index"></span>
   <!-- <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>-->
  </div>

</template>

<script>
  //类名常量
  const CLASS_ON='on'
  const CLASS_OFF='off'
  const CLASS_HALF='half'

  export default {
    name: 'Star',
    props:{
      score:Number,
      size:Number
    },
    computed:{
      startClassArr()
      {
          const {score}=this
          let newArray = [];
         const scoreInt = Math.floor(this.score)
         const scorePoint = this.score-scoreInt
         for (let i=0;i<scoreInt;i++){
           newArray.push(CLASS_ON)
         }
         if(scorePoint*10>=5){
           newArray.push(CLASS_HALF)
         }
        for (let i=1;i<=5-newArray.length;i++){
          newArray.push(CLASS_OFF)
        }

        return newArray;
        }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
