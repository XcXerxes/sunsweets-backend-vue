import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component(resolve){
        require(['@/pages/Login/bankend-login'], resolve)
      }
    },
    {
      path:'/home',
      component(resolve){
        require(['@/pages/Home'], resolve)
      },
      children: [
        {
          path:'/',
          name:'dataStats',
          component(resolve){
            require(['@/pages/dataStats/bankend-dataStats'],resolve)
          }
        },
        {
          path:'/carousel',
          name:'carousel',
          component(resolve){
            require(['@/pages/carousel/bankend-carouselList'],resolve)
          }
        }
      ]
    }
  ]
})
