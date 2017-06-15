import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 验证进入路由之前
const urlBeforeEnter = (to, from, next, url) => {
  if (from.path !== url) {
    next({ path: url })
  }
  next()
}

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
        },
        {
          path:'/carousel/add',
          name:'addCarousel',
          component(resolve){
            require(['@/pages/carousel/bankend-addCarousel'],resolve)
          }
        },
        {
          path:'/carousel/view',
          name:'viewCarousel',
          component(resolve){
            require(['@/pages/carousel/bankend-viewCarousel'],resolve)
          },
          beforeEnter(to, from, next){
            urlBeforeEnter(to, from, next, '/carousel')
          }
        },
        {
          path:'/carousel/edit',
          name:'editCarousel',
          component(resolve){
            require(['@/pages/carousel/bankend-editCarousel'],resolve)
          },
           beforeEnter(to, from, next){
            urlBeforeEnter(to, from, next, '/carousel')
          }
        },
        {
          path:'/cate',
          name:'cate',
          component(resolve){
            require(['@/pages/cateSweet/bankend-cateList'],resolve)
          }
        },
        {
          path: '/cate/add',
          name: 'addCate',
          component(resolve){
            require(['@/pages/cateSweet/bankend-addCate'],resolve)
          }
        },
        {
          path: '/cate/view/:id',
          name: 'viewCate',
          component(resolve){
            require(['@/pages/cateSweet/bankend-viewCate'],resolve)
          },
           beforeEnter(to, from, next){
            urlBeforeEnter(to, from, next, '/cate')
          }
        },
        {
          path: '/cate/edit/:id',
          name: 'editCate',
          component(resolve){
            require(['@/pages/cateSweet/bankend-editCate'],resolve)
          },
           beforeEnter(to, from, next){
            urlBeforeEnter(to, from, next, '/cate')
          }
        },
         {
          path:'/sweet',
          name:'sweetInfo',
          component(resolve){
            require(['@/pages/infoSweet/bankend-infoList'],resolve)
          }
        },
        {
          path: '/sweet/add',
          name: 'addSweet',
          component(resolve){
            require(['@/pages/infoSweet/bankend-addInfo'],resolve)
          }
        },
        {
          path: '/sweet/view/:id',
          name: 'viewSweet',
          component(resolve){
            require(['@/pages/infoSweet/bankend-viewInfo'],resolve)
          },
           beforeEnter(to, from, next){
            urlBeforeEnter(to, from, next, '/sweet')
          }
        },
        {
          path: '/sweet/edit/:id',
          name: 'editSweet',
          component(resolve){
            require(['@/pages/infoSweet/bankend-editInfo'],resolve)
          },
           beforeEnter(to, from, next){
            urlBeforeEnter(to, from, next, '/sweet')
          }
        },
      ]
    }
  ]
})
