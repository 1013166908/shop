import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import classify from '@/components/classify/classify'
import classGoods from '@/components/classify/classGoods'
import login from '@/components/login-register/login'
import register from '@/components/login-register/register'
import mainContent from '@/components/mainContent'
import detail from '@/components/detail/detail'
import shopCar from '@/components/shopping-cart/shopCar'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path:'/detail/*',
      component:detail,
    },
    {
      path:'/shopping-cart',
      component:shopCar,
    },
    {
      path:"/main-content",
      component:mainContent,
      children:[
        {
          path: 'index',
          component: index
        },
        {
          path: 'classify',
          component: classify,
          children:[
            {
              path:"*",
              component:classGoods
            },
            {
              path:"/main-content/classify",
              redirect:"/main-content/classify/0"
            },
          ]
        },
        {
          path: 'car',
          component: index
        },
        {
          path: 'me',
          component: index
        },
        {
          path: '/main-content',
          redirect:"/main-content/index"
        },
        {
          path:"*",
          redirect:"/main-content/index"
        }
      ]
    },
    {
      path:'*',
      redirect:"/login"
    }
  ]
})
