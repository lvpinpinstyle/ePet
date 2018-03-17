<template>
    <div class="shopcart">
      <header class="loginhead">
        <LoginHeader>
        <span class="cartback backcolor" slot="back" @click="$router.back()">
          <i class="iconfont icon-fanhui"></i>
        </span>
        <span class="cartmenu menecolor" slot="menu" @click="$router.push('/register')">
          注册
        </span>
        </LoginHeader>
        <div class="login">
          <ul class="logininfo">
            <li class="userlogin" :class="{on:loginWay}" @click="switchLoginWay(true)">
              普通登录
              <i></i>
            </li>
            <li class="phonelogin" :class="{on:!loginWay}" @click="switchLoginWay(false)">
              手机动态密码登录
              <i></i>
            </li>
          </ul>
        </div>
      </header>
      <div class="content">
        <div class="loginform" v-if="loginWay">
          <div class="username">
            <span class="icon">
              <i class="iconfont icon-ren"></i>
            </span>
            <input type="text" class="write" placeholder="手机号/邮箱/用户名" v-model="name">
          </div>
          <div class="pwd">
            <span class="icon">
              <i class="iconfont icon-icon-"></i>
            </span>
            <input type="text" class="write" placeholder="密码" v-model="pwd">
          </div>
        </div>
        <div class="loginform" v-if="!loginWay">
          <div class="username">
            <span class="icon">
              <i class="iconfont icon-ren"></i>
            </span>
            <input type="text" class="write" placeholder="已注册的手机号" v-model="phone">
          </div>
          <div class="pwd">
            <span class="icon">
              <i class="iconfont icon-icon-"></i>
            </span>
            <input type="text" class="write" placeholder="请输入图片内容" v-model="imageContent">
            <div class="captcha">
              <img class="captchaimg" src="http://localhost:3000/captcha" alt="captcha" @click="changeCaptcha">
            </div>
          </div>
          <div class="rpwd">
            <span class="icon">
              <i class="iconfont icon-icon-"></i>
            </span>
            <input type="password" class="write" placeholder="动态密码"  v-model="captcha">
            <div class="rcaptcha">获取动态密码</div>
          </div>
        </div>
      </div>
      <div class="losepwd">忘记密码?</div>
      <div class="loginme" @click="login">登录</div>
      <div class="cooperation">合作网站登录</div>
      <div class="web">
        <div class="pay">
          <img src="//static.epetbar.com/mpet/images/login/login_ico4.png" alt="">
        </div>
        <div class="weixin">
          <img src="//static.epetbar.com/mpet/images/login/login_ico2.png" alt="">
        </div>
      </div>
      <alert-tip v-if="alertShow" :alertText="alertText" @closeTip="closeTip"/>
    </div>
</template>

<script>
  import LoginHeader from '../../components/LoginHeader/LoginHeader.vue'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'

  export default {
    data(){
      return{
        loginWay:true,
        name:'',
        pwd:'',
        imageContent:'',
        phone:'',
        captcha:'',
        alertText: '',
        alertShow:false
      }
    },
    computed:{
      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      switchLoginWay(isShow){
        this.loginWay=isShow
      },
      closeTip () {
        this.alertShow = false
      },
      changeCaptcha (event) {
        event.target.src = 'http://localhost:3000/captcha?time=' + new Date()
      },
      async login () {
        let result
        if(this.loginWay) { // 短信登陆
          const {name, pwd} = this
          if(!name) { // 用户名
            this.alertShow = true
            this.alertText = '请输入用户名'
            return
          } else if(!pwd) { // 密码
            this.alertShow = true
            this.alertText = '请输入密码'
            return
          }
          result = await nameLogin({name, pwd})
        }else{
          const {rightPhone, phone, imageContent,captcha} = this
          if(!rightPhone) { // 手机号
            this.alertShow = true
            this.alertText = '请输入正确的手机号'
            return
          } else if(!captcha) { // 验证码
            this.alertShow = true
            this.alertText = '请输入正确的验证码'
            return
          }
         result = await phoneLogin({phone, captcha})
        }
        if(result.code===0) {
          // 得到用户信息
          const userInfo = result.data
          // 保存到state中去
          this.$store.dispatch('recordUserInfo', userInfo)
          // 回退
          this.$router.back()
        } else {
          this.alertShow = true
          this.alertText = result.msg
        }
      },
    },
    components:{
      LoginHeader,
      AlertTip
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

  .shopcart
    width 100%
    background #fff
    .loginhead
      width 100%
      background url("./images/login-bg.png")
      background-size 100% 100%
      .login
        margin-top 90px
        width 100%
        .logininfo
          width 100%
          overflow hidden
          background-color rgba(255,255,255,0.3)
          >li
            width 50%
            float left
            text-align center
            height 44px
            line-height 44px
            font-size: 15px;
            color #fff
            display block
            position relative
          .on
            i
              width 0
              height 0
              border-left 10px solid transparent
              border-right 10px solid transparent
              border-bottom 10px solid #fff
              position absolute
              bottom 0
              left 0
              right 0
              margin auto

    .content
      background #fff
      width 100%
      .loginform
        width 100%
        padding 0 30px
        box-sizing border-box
        >div
          width 100%
          border-bottom: #e2e2e2 solid 1px;
          padding: 12px 0
          box-sizing border-box
          text-align left
          overflow hidden
          .icon
            .iconfont
              font-size 20px
          .write
            font-size 15px
            border none
            color #666
            outline none
            font-family "Microsoft Yahei",tahoma,arial
          /*.write::-moz-placeholder
            color #dbdbdb浏览器兼容问题
          .write:-ms-input-placeholder
            color #dbdbdb*/
          .write::-webkit-input-placeholder
            color #dbdbdb
          .captcha
            float right
            width 85px
            height 30px
            img
              width 100%
              height 100%
          .rcaptcha
            float right
            color: #ff4259;
            border: 1px solid #eb4c33;
            border-radius: 3px;
            width 100px
            height:29px;
            text-align: center;
            font-size 12px
            line-height 29px




    .losepwd
      width 100%
      padding 0 30px
      box-sizing border-box
      text-align right
      line-height 40px
      font-size 14px
      color #898989
    .loginme
      margin 0 30px
      border-radius 5px
      background #2ec975
      font-size 15px
      text-align center
      color #fff
      line-height 40px
    .cooperation
      margin-top 120px
      color #d7d7d7
      text-align center
      font-size 16px

    .web
      overflow hidden
      margin-top 20px
      >div
        float left
        width 33.3%
        padding 0 13px
        box-sizing border-box
        img
          width 60%

</style>
