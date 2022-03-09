<!--
 * @Author: min.dong
 * @Date: 2022-03-09 11:13:20
 * @LastEditTime: 2022-03-09 11:18:26
 * @FilePath: \Component-store\src\view\table2\index.vue
-->
<template>
  <el-table :data="tableData" row-key="id">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    </el-table>
</template>

<script>
import Sortable from "sortablejs";
export default {
  components:{
    Sortable
  },
  data() {
    return {
      tableData:[
        {
          name:'nihao',
          id:0
        },
        {
          name:'asdf',
          id:1
        }
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      this.drag();
    });
  },
  methods:{
    drag() {
      const el = document.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];
      Sortable.create(el, {
        disabled: false, // 拖拽不可用? false 启用
        ghostClass: 'sortable-ghost', //拖拽样式
        animation: 150, // 拖拽延时，效果更好看
        onEnd: (e) => { // 拖拽结束时的触发
            let arr = this.tableData; // 获取表数据
            arr.splice(e.newIndex, 0, arr.splice(e.oldIndex, 1)[0]); // 数据处理，获取最新的表格数据
            this.$nextTick(function () {
              this.tableData= arr;
              console.log(this.tableData)
            })
        },
      });
    }
  }
}
</script>
