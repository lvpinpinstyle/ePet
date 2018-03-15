<template>
    <div class="shopcart">
      <LoginHeader>
        <span class="cartback" slot="back">
          <i class="iconfont icon-fanhui"></i>
        </span>
        <span class="cartmenu" slot="menu">
          注册
        </span>
      </LoginHeader>
    </div>
</template>

<script>
  import LoginHeader from '../../components/LoginHeader/LoginHeader.vue'

  export default {
    components:{
      LoginHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
