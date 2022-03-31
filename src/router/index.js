import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import TableNode from '@/components/tableNode'
import Collapse from '@/view/UIcomponent/collapse'
import Home from '@/view/Home/index'
import BorderStyle from '../components/BorderStyle.vue'
import TableNode2 from '../view/table2/index'
import EidtTableNode from '../view/EditTableNode/index'

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
          path:'/',
          name:'Home',
          navItem:'首页',
          component:Home,
          children:[]
        },
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
        },
        {
          path:'/borderStyle',
          name:'borderStyle',
          navItem:'边框',
          component:BorderStyle,
          children:[]
        },
        {
          path:'/TableNode2',
          name:'TableNode2',
          navItem:'表格2',
          component:TableNode2,
          children:[]
        },
        {
          path:'/EidtTableNode',
          name:'EidtTableNode',
          navItem:'编辑表格',
          component:EidtTableNode,
          children:[]
        }
      ]
    }
  ]
})
