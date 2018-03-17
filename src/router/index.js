import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../package/HomePage/HomePage.vue'
import Classafiy from '../package/Classafiy/Classafiy.vue'
import ShopCart from '../package/ShopCart/ShopCart.vue'
import MyShop from '../package/MyShop/MyShop.vue'
import Sort from '../package/Classafiy/Sort/Sort.vue'
import Brand from '../package/Classafiy/Brand/Brand.vue'
import AllMenu from '../package/AllMenu/AllMenu.vue'

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
      },
      children:[
        {
          path: '/classafiy/sort',
          component: Sort,
          meta:{
            ShowFooter:true
          }
        },
        {
          path: '/classafiy/brand',
          component: Brand,
          meta:{
            ShowFooter:true
          }
        },
        {
          path: '',
          redirect: '/classafiy/sort'
        },
      ]
    },
    {
      path: '/shopcart',
      component:ShopCart
    },
    {
      path: '/allmenu',
      component:AllMenu
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
