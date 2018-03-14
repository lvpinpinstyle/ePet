import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../package/HomePage/HomePage.vue'
import Classafiy from '../package/Classafiy/Classafiy.vue'
import ShopCart from '../package/ShopCart/ShopCart.vue'
import MyShop from '../package/MyShop/MyShop.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/homepage',
      component:HomePage,
      meta:{
        ShowFooter:true
      }
    },
    {
      path: '/classafiy',
      component:Classafiy,
      meta:{
        ShowFooter:true
      }
    },
    {
      path: '/shopcart',
      component:ShopCart
    },
    {
      path: '/myshop',
      component:MyShop
    },
    {
      path: '',
      redirect: '/homepage'
    },
      ]
})
