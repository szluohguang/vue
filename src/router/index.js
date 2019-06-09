import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/components/layouts'  // 引入布局layouts 组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layouts',
      component: layouts
    }
  ]
})
