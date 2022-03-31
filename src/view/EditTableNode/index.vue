<!--
 * @Author: min.dong
 * @Date: 2022-03-31 15:27:27
 * @LastEditTime: 2022-03-31 15:43:08
 * @FilePath: \Component-store\src\view\EditTableNode\index.vue
-->
<template>
  <div>
    <el-edit-table name="users" url="/api/users" :data="data" />
  </div>
</template>

<script>
import ElEditTable from 'ElEditTable';
export default {
  components:{EditTable},
  data() {
    return {
      data : [
        { id: '1', name: 'Test1', email: 'test1@test.com', description: 'Bla 1' },
        { id: '2', name: 'Test2', email: 'test2@test.com', description: 'Bla 2' },
        { id: '3', name: 'Test3', email: 'test3@test.com', description: 'Bla 3' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
