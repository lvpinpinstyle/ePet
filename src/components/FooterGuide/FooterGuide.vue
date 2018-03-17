<template>
  <div class="footer_guide border-1px">
    <span class="guide_item" :class="{on : $route.path=='/homepage'}"
          @click="goto('/homepage')" >
      <span class="item_icon">
        <i class="iconfont icon-wxbmingxingdianpu"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on : ($route.path=='/classafiy/sort')||($route.path=='/classafiy/brand')}"
          @click="goto('/classafiy')" >
      <span class="item_icon">
        <i class="iconfont icon-icon04"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on : $route.path=='/shopcart'}"
          @click="goto('/shopcart')" >
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>

      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on : $route.path=='/myshop'}"
          @click="goto('/myshop')" >
      <span class="item_icon">
        <i class="iconfont icon-xiaolian"></i>
      </span>
      <span>我的e宠</span>
    </span>
  </div>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
