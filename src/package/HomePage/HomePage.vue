<template>
  <div class="homepage">
    <div class="head">
      <div class="loadapp" v-if="hideAdc">
        <span class="closebtn" @click="closeAdc">
          <img src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
        </span>
        <div class="loadimg">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water">
        </div>
      </div>
      <div class="epetsearch">
        <div class="buyinfo">
          <span class="dog">狗狗</span>
          <span class="middle">|</span>
          <span class="addr">重庆</span>
        </div>
        <p class="searchtext">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <span class="icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
        </p>
        <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
      </div>
      <div class="swiper-container slidex" >
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in homepage.menus" :class="{on:isCurrent===index}" @click="switchCurrent(index)">
           <span class="rela">
             <span>{{item.menu_name}}</span>
             <i></i>
           </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="homecontent" ref="homecontent">
      <div class="wrapper" ref="bigbox">
        <nav class="banner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <!-- 第一页 -->
              <div class="swiper-slide" v-for="(banner,index) in homepage.dog_banner">
                <a href="#">
                  <img :src="banner">
                </a>
              </div>
              <!-- 第二页 -->
             <!-- <div class="swiper-slide">
                <a href="###">
                  <img src="./images/fumo.jpg">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="###">
                  <img src="./images/haiwai.jpg">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="###">
                  <img src="./images/ouguan.jpg">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="###">
                  <img src="./images/tongzhi.jpg">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="###">
                  <img src="./images/zhuliang.jpg">
                </a>
              </div>-->
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <div class="banner_combine">
          <img class="dog" v-lazy="homepage.dog_img">
        </div>
        <div class="columnnavdiv">
          <ul class="columnnavul">
            <li class="columnnavli" v-for="(menu,index) in homepage.menu_list">
              <img v-lazy="menu">
            </li>
          </ul>
        </div>
        <div class="adv">
          <img class="advimg" v-lazy="homepage.miaosha">
        </div>
        <div class="suprise">
          <div class="support">
            <div class="supportimage">
              <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03">
            </div>
            <div class="more">
              <img src="https://img2.epetbar.com/nowater/2018-03/13/00/3e7c62238a46eb5da0317422f531a7c6.png">
            </div>
            <div class="time">
              <span class="hour">12</span>
              <span class="middle">:</span>
              <span class="minutes">00</span>
            </div>
            <div class="currentend">下一场开始</div>
          </div>
          <div class="swiper-container" id="swiper-container">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <div class="itemimage">
                  <img src="https://img1.epetbar.com/2018-01/12/18/6d615faef8b6a01e891d8a3012fbb3e6.jpg?x-oss-process=style/fill&$1=300&$2=300">
                </div>
                <div class="newprice">
                  <span>￥<span>7.6</span></span>
                </div>
                <div class="oldprice">
                  省68.40
                </div>
              </li>
              <li class="swiper-slide">
                <div class="itemimage">
                  <img src="https://img1.epetbar.com/2017-10/31/17/68d45608ddbec32608cddec587c342e1.jpg?x-oss-process=style/fill&$1=300&$2=300">
                </div>
                <div class="newprice">
                  <span>￥<span>1.75</span></span>
                </div>
                <div class="oldprice">
                  省15.75
                </div>
              </li>
              <li class="swiper-slide">
                <div class="itemimage">
                  <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
                </div>
                <div class="newprice">
                  <span>￥<span>4.80</span></span>
                </div>
                <div class="oldprice">
                  省43.20
                </div>
              </li>
              <li class="swiper-slide">
                <div class="itemimage">
                  <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
                </div>
                <div class="newprice">
                  <span>￥<span>4.80</span></span>
                </div>
                <div class="oldprice">
                  省43.20
                </div>
              </li>
              <li class="swiper-slide">
                <div class="itemimage">
                  <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
                </div>
                <div class="newprice">
                  <span>￥<span>4.80</span></span>
                </div>
                <div class="oldprice">
                  省43.20
                </div>
              </li>
              <li class="swiper-slide">
                <div class="itemimage">
                  <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
                </div>
                <div class="newprice">
                  <span>￥<span>4.80</span></span>
                </div>
                <div class="oldprice">
                  省43.20
                </div>
              </li>
              <li class="swiper-slide">
                <div class="itemimage">
                  <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
                </div>
                <div class="newprice">
                  <span>￥<span>4.80</span></span>
                </div>
                <div class="oldprice">
                  省43.20
                </div>
              </li>
              <li class="swiper-slide">
                <div class="itemimage">
                  <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
                </div>
                <div class="newprice">
                  <span>￥<span>4.80</span></span>
                </div>
                <div class="oldprice">
                  省43.20
                </div>
              </li>
              <li class="swiper-slide">
                <div class="itemimage">
                  <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
                </div>
                <div class="newprice">
                  <span>￥<span>4.80</span></span>
                </div>
                <div class="oldprice">
                  省43.20
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="power">
          <img v-lazy="homepage.brand_power">
        </div>
        <div class="animation">
          <img v-lazy="homepage.gif">
        </div>
        <div class="vip">
          <img v-lazy="homepage.vip">
        </div>
        <div class="server">
          <div class="serverleft">
            <div class="top" v-if="homepage.vip_services">
              <img v-lazy="homepage.vip_services[0]">
            </div>
            <div class="bottom"  v-if="homepage.vip_services">
              <img v-lazy="homepage.vip_services[1]">
            </div>
          </div>
          <div class="serverright">
            <div class="top"  v-if="homepage.vip_services">
              <img v-lazy="homepage.vip_services[2]">
            </div>
            <div class="bottom" v-if="homepage.vip_services">
              <img v-lazy="homepage.vip_services[3]">
            </div>
          </div>
        </div>
        <div class="zhekou">
          <img v-lazy="homepage.dapaituan" alt="">
        </div>
        <div class="bottombanner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <!-- 第一页 -->
              <div class="swiper-slide" v-for="(item,index) in homepage.dapaituan_list" :key="index">
                <a href="#">
                  <img :src="item">
                </a>
              </div>
              <!-- 第二页 -->
             <!-- <div class="swiper-slide">
                <a href="###">
                  <img src="https://img2.epetbar.com/nowater/2018-03/12/19/3c54559f077235436b408a6839138b4f.jpg@!water">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="###">
                  <img src="https://img2.epetbar.com/nowater/2018-03/12/19/9ab35e8f6f88e2adac715cd83ac5c69c.jpg@!water">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="###">
                  <img src="https://img2.epetbar.com/nowater/2018-03/12/19/9e4502cf22ecb6f8b97715c7fc73ed50.jpg@!water">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="###">
                  <img src="https://img2.epetbar.com/nowater/2018-03/12/19/3ea8f16882581307427bd3d962fc6dd0.jpg@!water">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="###">
                  <img src="https://img2.epetbar.com/nowater/2018-03/12/19/d3d4c3ee17f2a047f3eee2ec30591aac.jpg@!water">
                </a>
              </div>-->
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>

        </div>
        <div class="dapai">
          <img v-lazy="homepage.haohuo">
        </div>
        <div class="goods">
          <div class="goodsadv" v-for="(list,index) in homepage.haohuo_list" :key="index">
            <div class="left">
              <img v-lazy="left" v-for="(left,index) in list.left" :key="index">
            </div>
            <div class="right">
              <img v-lazy="right" v-for="(right,index) in list.right" :key="index">
            </div>
          </div>
        </div>
        <div class="zuican">
          <img v-lazy="homepage.zuican">
        </div>
        <div class="godog">
          <img v-lazy="homepage.zuican_content">
        </div>
        <div class="specialstar">
          <img v-lazy="homepage.special" alt="">
        </div>
        <div class="presale" v-if="homepage.special_list">
          <div class="left">
            <img v-lazy="homepage.special_list[0]" alt="">
          </div>
          <div class="right">
            <img v-lazy="homepage.special_list[1]" alt="">
            <img v-lazy="homepage.special_list[2]" alt="">
          </div>
        </div>
        <div class="specialitem">
          <img v-lazy="homepage.lanmu" alt="">
        </div>
        <div class="presale">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/c0cbc5428d12daf97c03ce5cb4b2eb41.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/972f41b92482a495640ad9be2793e8bf.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/18442aea515fdb23ec49d837bbe3dac1.jpg@!water" alt="">
          </div>
          <div class="right">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/fd2e96a45cc0e35e8ae09fad888707e4.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/819706ef8fb7e34de1c4ae76729db425.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/b621c0313bc872ad97fa63e2e431750b.jpg@!water" alt="">
          </div>
        </div>
        <div class="footer">
          <div class="footernavs">
            <ul class="footernav">
              <li class="navitem on">触屏版</li>
              <li class="navitem">手机客户端</li>
              <li class="navitem">关于我们</li>
              <li class="navitem">联系我们</li>
            </ul>
          </div>
          <div class="biaoshi">
            © wap.epet.com 版权：重庆易宠科技有限公司
          </div>
        </div>
      </div>
      <div class="dognav"></div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        hideAdc:true,
        isCurrent:0
      }
    },
    methods:{
      closeAdc(){
        this.$refs.homecontent.style.paddingTop=80+'px'
        this.$refs.bigbox.style.paddingBottom=140+'px'
        this.$nextTick(()=>{
          this.homeScroll.refresh()
        })
        this.hideAdc=false
      },
      switchCurrent(index){
        this.isCurrent=index
      }
    },
    mounted(){
      this.$store.dispatch('getHomepage',()=>{
        this.$nextTick(()=>{
          var bottombanner = new Swiper('.bottombanner>.swiper-container', {
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },

            delay:3000,
            pagination: {
              el: '.swiper-pagination'
            }
          })
          var swiper = new Swiper('#swiper-container', {
            slidesPerView:3.5,
            spaceBetween: 10,
          })
          var slidex = new Swiper('.head>.swiper-container ', {
            slidesPerView:5,
            spaceBetween: 10,
          });

          var banner = new Swiper('.banner>.swiper-container', {
            loop: true,
            autoplay:true,
            delay:3000,
            pagination: {
              el: '.swiper-pagination'
            }
          })
          if(!this.homeScroll){
            this.homeScroll=new BScroll(this.$refs.homecontent,{
              click: true
            })
          }else {
            this.homeScroll.refresh()
          }
        })
      })

    },
    computed:{
      ...mapState(['homepage'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .homepage
    width 100%
    .head
      background: #fff;
      width 100%
      position fixed
      z-index 2000
      top 0
      left 0
      .loadapp
        width 100%
        .closebtn
          position absolute
          left 8px
          top 14px
          img
            width 18px
        .loadimg
          width 100%
          img
            width 100%
            height 55px
      .epetsearch
        padding-top 10px
        display flex
        justify-content space-around
        .buyinfo
          position relative
          span
            font-size 14px
            line-height 25px
            color: #898989;
        .buyinfo::before
          content: '';
          position: absolute;
          border: 5px solid;
          border-color: #898989 transparent transparent;
          top: 10px;
          right: -13px;
        .searchtext
          background #e9e9e9
          height 25px
          border-radius 4px
          input
            background #e9e9e9
            color #bcbcbc
            text-indent 10px
            font-size 13px
            line-height 25px
            border-radius 4px
            outline 0
            width 200px
          .icon
            .iconfont
              font-size 11px
        img
          width: 25px;
          height 25px
      .slidex
        margin-top 10px
        line-height 40px
        .swiper-wrapper
          .swiper-slide
            color: #666;
            .rela
              position relative
              display inline-block
              i
                position: absolute;
                bottom: 1px;
                left: -10%;
                width: 120%;
                height: 2px;
            &.on
              .rela
                span
                  color #459d36
                i
                  background #459d36
    .homecontent
      height 630px
      padding-top 140px
      width 100%
      .wrapper
        padding-bottom 250px
        width 100%
        .banner  /*轮播*/
          width 100%
          height 100%
          .swiper-container
            width 100%
            height 100%
            .swiper-wrapper
              width 100%
              height 100%
              .swiper-slide
                width 100%
                height 100%
                >a
                  display block
                  width 100%
                  height 100%
                  >img
                    width 100%
                    height 100%
          .swiper-pagination
            .swiper-pagination-bullet-active
              display inline-block
              width 15px
              height 6px
              background #fff
              border-radius 3px
        .banner_combine
          width 100%
          .dog
            width 100%
            display block
        .columnnavdiv
          .columnnavul
            overflow hidden
            .columnnavli
              float left
              width 20%
              img
                width 100%
                display block
        .adv
          width 100%
          .advimg
            width 100%
            display block
        .suprise
          width 100%
          .support
            width 100%
            overflow hidden
            height 39px
            font-size 13px
            .supportimage
              float left
              margin-top 10px
              img
                width 85px
            .more
              float right
              height 34px
              img
                width 67.5px
                height 34px
            .time
              float right
              margin-top 8px
              .hour,.minutes
                width 23px
                height 23px
                text-align center
                line-height 23px
                border 1px solid gainsboro
            .currentend
              float right
              margin-right 8px
              margin-top 13px


          #swiper-container
            .swiper-wrapper
              .swiper-slide
                .itemimage
                  width 100%
                  img
                    width 80%
                    padding 10px
              .newprice
                text-align center
                vertical-align middle
                margin-bottom 5px
                span
                  color red
                  font-size 14px
              .oldprice
                color #999
                font-size 12px
                text-align center
                margin-bottom 10px
        .power
          width 100%
          img
            width 100%
            display block
        .animation
          width 100%
          img
            width 100%
            display block
        .vip
          width 100%
          img
            width 100%
            display block
        .server
          width 100%
          .serverleft
            float left
            width 50%
            >div
              width 100%
              img
                width 100%
          .serverright
            float right
            width 50%
            >div
              width 100%
              img
                width 100%
        .zhekou
          width 100%
          img
            width 100%
        .bottombanner  /*轮播*/
          width 100%
          height 100%
          .swiper-container
            width 100%
            height 100%
            .swiper-wrapper
              width 100%
              height 100%
              .swiper-slide
                width 100%
                height 100%
                >a
                  display block
                  width 100%
                  height 100%
                  >img
                    width 100%
                    height 100%
            .swiper-pagination
              .swiper-pagination-bullet-active
                display inline-block
                width 15px
                height 6px
                background #fff
                border-radius 3px
              .swiper-pagination-bullet
                background #fff
        .dapai
          width 100%
          img
            width 100%
        .goods
          .goodsadv
            overflow hidden
            width 100%
            .left
              float left
              width 50%
              img
                width 100%
                display block
            .right
              float right
              width 50%
              img
                width 100%
                display block
        .zuican
          width 100%
          img
            width 100%
            display block
        .godog
          width 100%
          img
            width 100%
            display block
        .specialstar
          width 100%
          img
            width 100%
            display block
        .presale
          background black
          width 100%
          overflow hidden
          .left
            float left
            width 50%
            img
              display block
              width 100%
          .right
            float right
            width 50%
            img
              display block
              width 100%
        .specialitem
          width 100%
          img
            width 100%
            display block
        .footer
          width 100%
          margin-top 30px
          .footernavs
            width 80%
            margin 0 auto
            .footernav
              width 100%
              display flex
              justify-content space-around
              .navitem
                color #333
                font-size 14px
              .on
                color red
          .biaoshi
            width 100%
            font-size 12px
            text-align center
            margin-top 15px
            margin-bottom 55px
    .dognav
      position fixed
      right -1px
      bottom 15%
      z-index 20
      width 41px
      height 46px
      background url('./images/godog.png') 0 0/85px 46px
      background-size 80px auto
      animation skipdog steps(1,end) 2s infinite
      @keyframes skipdog
        50%{
          background-position -41px 0
        }
  /*https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water*/
  /*static.epetbar.com/static_wap/lib/common_images/closebtn_03.png*/
</style>
