<!--
 * @Author: min.dong
 * @Date: 2022-03-07 17:50:35
 * @LastEditTime: 2022-03-31 15:30:03
 * @FilePath: \Component-store\src\components\homePage.vue
-->
<template>
  <el-container style="height:100%">
    <el-aside width="200px" style="height: 100%">
<!--      <el-menu-->
<!--        default-active="2"-->
<!--        class="el-menu-vertical-demo"-->
<!--        @open="handleOpen"-->
<!--        @close="handleClose"-->
<!--        background-color="#545c64"-->
<!--        text-color="#fff"-->
<!--        active-text-color="#ffd04b">-->
<!--        <el-menu-item v-for="(item,i) in dataList" :key="i" :index="item.path">-->
<!--          <template slot="title">-->
<!--            <span>{{ item.navItem }}</span>-->
<!--          </template>-->
<!--        </el-menu-item>-->
<!--      </el-menu>-->
      <Menu :menuList="menuList"/>
    </el-aside>
    <el-container>
      <el-header>
        <span>组件</span>
      </el-header>
      <Breadcrumb/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import routerList from '../router/index'
import Breadcrumb from '@/view/header/index'
import HomePage from '@/components/homePage'
import TableNode from '@/components/tableNode'
import TableNode2 from '@/view/table2/index'
import Collapse from '@/view/UIcomponent/collapse'
import BorderStyle from '@/components/BorderStyle'
import Home from '@/view/Home/index'
import Menu from './menu.vue'
import EidtTableNode from '../view/EditTableNode/index'
  export default {
    components: {
      Menu,
      Breadcrumb
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        menuList:[
          {
            path: '/',
            name: 'Home',
            component: Home,
            navItem:'首页',
            children:[]
          },
          {
            path:'/collapse',
            name:'Collapse',
            navItem:'组件',
            component:Collapse,
            children:[
              {
                path:'/collapse',
                name:'Collapse',
                navItem:'手风琴',
                component:Collapse,
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
        ],
        tableData: Array(20).fill(item)
      }
    },
    mounted() {
      // this.routerListFun()
    },
    methods: {
      routerListFun(){
        console.log(routerList.options.routes)
        this.menuList = JSON.parse(JSON.stringify(routerList.options.routes));
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style>
  .el-menu-vertical-demo{
    height: 100%;
  }
  .el-header, .el-footer {
    /* background-color: #304156; */
    background-color: #2d3274;
    color: #bfcbd9;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #353d88;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

