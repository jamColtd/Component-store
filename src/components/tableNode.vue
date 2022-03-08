<template>
  <div class="hello">
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th class="table-th" scope="col">
            <el-checkbox
              v-model="checkAll"
              @change="e => handleCheckAllChange(e, dataList)"
              :indeterminate="isIndeterminate"
              ></el-checkbox>
          </th>
          <th class="table-th" scope="col">商品图片</th>
          <th class="table-th" scope="col">商品名称</th>
          <th class="table-th" scope="col">商品描述</th>
          <th class="table-th" scope="col">是否展示</th>
          <th class="table-th" scope="col">销量程度</th>
          <th class="table-th" scope="col">操作</th>
        </tr>
      </thead>
      <draggable v-model="dataList" tag="tbody" v-if="dataList.length>0">
        <tr v-for="(element,idx) in dataList" :key="idx" class="table-tr">
          <td class="table-td">
            <el-checkbox
              v-model="element.checked"
              @change="e => handleCheckedCitiesChange(e, element,idx)"
            ></el-checkbox>
          </td>
          <td class="table-td">
            <img :src="element.img" class="goods-image"/>
          </td>
          <td class="table-td">{{ element.goods_name }}</td>
          <td class="table-td">{{ element.goods_desc }}</td>
          <td class="table-td">
            <el-switch
              v-model="element.show"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </td>
          <td class="table-td">
            <span>{{element.hotWord}}</span>
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="categoryEdit(idx, element, index, '2')"
            ></el-button>
          </td>
          <td class="table-td">
            <el-button
              type="text"
              @click="(target,
              targetIndex) => editFun(element, target, targetIndex)"
            >编辑</el-button>
            <el-button type="text" style="color:red" @click="delFun(element,idx,index)">删除</el-button>
          </td>
        </tr>
      </draggable>
      <draggable v-else-if='item.list.length==0' tag='tbody'>
        <tr>
          <td
            colspan="7"
            style="text-align: center;font-size:16px;border-bottom:1px solid #ebeef5"
          >
            暂无数据！
          </td>
        </tr>
      </draggable>
    </table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'HelloWorld',
  components: { draggable },
  data () {
    return {
      checkAll:false,
      isIndeterminate: false,
      checkedList:[],
      dataList: [
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/z7.jpg",
          "goods_id": "521",
          "goods_price": "1998",
          "goods_name": "Z7",
          "goods_desc": "翻转双摄 | 运动健康",
          "hotWord": "新品",
          "show": true
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/z6a.jpg",
          "goods_id": "543",
          "goods_price": "1098",
          "goods_name": "Z6A",
          "goods_desc": "翻转双摄 | 旗舰新品",
          "hotWord": "新品",
          "show": true
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/z6pro.png",
          "goods_id": "503",
          "goods_price": "1998",
          "goods_name": "Z6巅峰版",
          "goods_desc": "",
          "show": false
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/z5a.png",
          "goods_id": "507",
          "goods_price": "898",
          "goods_name": "Z5A",
          "goods_desc": "",
          "show": true
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/z6.png",
          "goods_id": "505",
          "goods_price": "1598",
          "goods_name": "Z6",
          "goods_desc": "",
          "show": true
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/q1a.jpg",
          "goods_id": "515",
          "goods_price": "598",
          "goods_name": "Q1A",
          "goods_desc": "",
          "show": true
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/q1r.jpg",
          "goods_id": "546",
          "goods_price": "398",
          "goods_name": "Q1R",
          "goods_desc": "",
          "show": true
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/q1c.png",
          "goods_id": "513",
          "goods_price": "398",
          "goods_name": "Q1C",
          "goods_desc": "",
          "show": true
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/d3.jpg",
          "goods_id": "519",
          "goods_price": "798",
          "goods_name": "D3",
          "goods_desc": "",
          "show": false
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/q2.jpg",
          "goods_id": "511",
          "goods_price": "798",
          "goods_name": "Q2",
          "goods_desc": "",
          "show": false
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/y06.png",
          "goods_id": "509",
          "goods_price": "298",
          "goods_name": "Y06",
          "goods_desc": "",
          "show": false
        }
      ]
    }
  },
  mounted(){
    // this.dataU()
  },
  methods: {
    handleCheckAllChange (e, dataList) {
      console.log(e, dataList)
      if(this.checkAll) {
        this.dataList.forEach(element => {
          if(!element.checked){
            element.checked = true
          }
        });
      }else {
        this.dataList.forEach(element => {
          console.log(element)
          if(element.checked){
            element.checked = false
            // delete element.checked
          }
        });
      }
    },

    handleCheckedCitiesChange (e, element,idx) {
      console.log(e, element,idx)
      // this.dataList[idx].checked != e;
      this.$set(this.dataList[idx], this.dataList[idx].checked, e)
      console.log(this.dataList)
      // this.dataList[idx].checked = e;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 400px;
  }
  .goods-image {
    width: 50px;
    height: 50px;
  }
  .table {
    width:100%;
  }
  .table-td{
    text-align: center;
    border-bottom: 1px solid #ebeef5;
    width: 17%;
  }
  .table-tr{
    border-bottom: 1px solid #caced3;
  }
  .table-th{
    border-bottom: 1px solid #ebeef5;
    font-size: 16px;
  }
  .collapse-style{
    color: red;
  }
  .table-td:first-child{
    width: 10px;
  }
</style>
