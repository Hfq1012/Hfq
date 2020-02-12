import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Cart from '@/components/Cart'
import Product from '@/components/Product'
import GoodsMsg from '@/components/GoodsMsg'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      meta: {
        title: '商品列表'
      },
      component: List
    },
    {
      path: '/product/:id',
      meta: {
        title: '商品详情'
      },
      component: Product
    },
    {
      path: '/list',
      name: 'List',
      meta: {
        title: '商品列表',
      },
      component: List
    },
    {
      path: '/goodsMsg',
      name: 'GoodsMsg',
      meta: {
        title: '商品展示',
      },
      component: GoodsMsg
    },
    {
      path: '/cart',
      name: 'Cart',
      meta: {
        title: '购物车'
      },
      component: Cart
    },
    {
      path: '*',
      redirect: '/list',
      meta: {
        title: '商品列表'
      },
      component: List
    }
  ]
})
