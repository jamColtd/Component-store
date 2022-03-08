<template>
  <div class="sidebar-container" style="height: 100%">
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
        default-active="$route.path"
        router
        mode="vertical"
        background-color="#2d3274"
        text-color="#bfcbd9"
        active-text-color="#409EFF">
        <SidebarItem v-for="menu in menuList" :key="menu.path" :item="menu" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from './menuItem'
export default {
  name:'menu',
  components: { SidebarItem },
  props:{
    menuList: {
      type: Array,
      required: true
    }
  },
  data(){
    return {

    }
  },
  // watch: {
  //   menuList(n,o) {
  //     console.log(n,o,'穿的参数')
  //     this.menuList1 = n;
  //   }
  // }
}
</script>
<style>
.sidebar-container {
  transition: width 0.28s;
  width: 200px !important;
  height: 100% !important;
  position: fixed;
  font-size: 0px;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }
  .el-scrollbar {
    height: 100%;
  }
  .scrollbar-wrapper {
    overflow-x: hidden!important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  .el-scrollbar__bar.is-vertical{
    right: 0px;
  }
  .is-horizontal {
    display: none;
  }
  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }
  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }
  .is-active > .el-submenu__title{
    color: #f4f4f5!important;
  }
  .el-scrollbar__view{
    height: 100%;
  }
</style>
