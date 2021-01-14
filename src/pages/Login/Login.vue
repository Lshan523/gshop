<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">Sea Sea</h2>
        <div class="login_header_title">
          <a href="javascript:;"  :class="{on: loginWay}"  @click="loginWay=true">短信登录</a>
          <a href="javascript:;"  :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <!--手机登录-->
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                <button  :class="{right_phone:is_right_phone}" :disabled="!is_right_phone"
                         class="get_verification" @click.prevent="getSMSCode"> {{computeTime>0?`已发送(${computeTime}s)`:"获取验证码"}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册小芳小卖部帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!--用户名密码登录-->
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input v-show="show_pwd" type="text" maxlength="8" placeholder="密码" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" :class="show_pwd?'on':'off'"
                     @click="show_pwd=!show_pwd">
                  <div class="switch_circle" :class="{right:!show_pwd}"></div>
                  <span class="switch_text">{{show_pwd?'abc':'...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" :src="valid_pic_url" @click="valid_pic_url=valid_pic_url+'?name=new Date()'" alt="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit" @click="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>

      <a href="javascript:" class="go_back"　@click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>

    </div>

    <AlertTip :alertText="alertText"  v-show="showAlert" @closeTip="closeTip"></AlertTip>
  </div>
</template>

<script>
  import AlertTip  from '../../components/AlertTip/AlertTip'
  import {mapActions} from "vuex"
   export default {
    name: 'Login',
     components:{AlertTip},
    data(){
      return{
        valid_pic_url:"http://localhost:4000/captcha",
        computeTime:0,//倒计时时间
        show_pwd:false,
        loginWay:true,//true 短信登录  false密码登录
        phone:"", //手机号
        code:'',//短信验证码
        pwd:'',//密码
        validCodePucture:"",
        name:'',//用户名
        captcha:'',//验证吗
        showAlert:false, //是否显示提示框
        alertText:'',//提示文本
      }
    },
     mounted () {

     },
     computed:{
      is_right_phone(){ //验证手机号
         return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      ...mapActions(['getSendCode','getValidCode']),
      getSMSCode(){
        //如果当前在计时，do nothing
        if(this.computeTime>0){
          return;
        }
        //启动倒计时
        this.computeTime=60;
      const intervalId= setInterval(()=>{
          this.computeTime--;
          if(this.computeTime<=0){
            //停止计时
              clearInterval(intervalId)
          }
        },1000)
        //获取验证码
        const  result =this.getSendCode(this.phone);
        alert("1111")
      },
      showAlterTip(alertText){
          this.showAlert=true;
          this.alertText=alertText
      },
      closeTip(){
        this.showAlert=false;
        this.alertText=""
      },
      queryValidCode(){
        alert("获取验证")
       return  this.getValidCode()
      },
      login: function () {
        //前台验证表单
        if (this.loginWay)
          {//短信登录
            const {is_right_phone,phone,code}=this
              if(!is_right_phone){
                this.showAlterTip("手机号格式错误！")
              }else if(!/^\d{6}$/.test(code)) {
                this.showAlterTip("验证码不正确！")
              }
          }
        else //密码登录
          {
            const {name,pwd,captcha}=this
            if(!name){
              this.showAlterTip("name can blank！")
            }else if(!pwd) {
              this.showAlterTip("pwd can be blank！")
            }else if(!(captcha)) {
              this.showAlterTip("验证码不正确！")
            }




          }

      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">

  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                    color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                     transform translateX(26px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999

</style>
