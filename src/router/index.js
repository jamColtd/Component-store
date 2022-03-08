import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import TableNode from '@/components/tableNode'
import Collapse from '@/view/UIcomponent/collapse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      navItem:'首页',
      children:[
        {
          path:'/table',
          name:'table',
          navItem:'表格',
          component:TableNode,
          children:[]
        },
        {
          path:'/collapse',
          name:'Collapse',
          navItem:'手风琴',
          component:Collapse,
          children:[]
        }
      ]
    }
  ]
})
