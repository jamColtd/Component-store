<template>
  <div v-if="item.children">
    <template v-if="item.children.length == 0">
      <el-menu-item :index="item.path">
        <i class="el-icon-menu"></i>
        {{item.navItem}}
      </el-menu-item>
    </template>

    <el-submenu v-else :index="item.path">
      <template slot="title" >
        <i class="el-icon-menu"></i>
        {{item.navItem}}
      </template>

      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.path"/>
        <el-menu-item v-else :key="child.path" :index="child.path">
<!--          <i class="el-icon-location"></i>-->
          {{child.navItem}}
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'menuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  watch:{
    item(n,o) {
      console.log(n,'itemWatch')
    }
  }
}
</script>
