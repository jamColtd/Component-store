<template>
  <div>
    <el-card>
      <draggable
        tag="el-collapse"
        :list="dataList"
        :component-data="collapseComponentData"
        v-model="activeNames"
      >
        <el-collapse-item
          v-for="(item,index) in dataList"
          :key="index"
          :name="index"
        >
          <template slot="title">
            <span>{{item.Name+'('+item.list.length+')'}}</span>
            <span
              style="float:right"
            >
              <el-button
                type="text"
                icon="el-icon-edit"
                @click.native.stop="categoryEdit(index, '', '', '1')"
                round>编辑</el-button>
              <el-button
                type="text"
                style="color:red"
                icon="el-icon-delete"
                @click.native.stop="categoryDel(index)"
                round>删除</el-button>
            </span>
          </template>
          <span>{{item.tips}}</span>
          <!-- <el-button
          type="primary"
          size="mini"
          @click="(target,
              targetIndex) => batchAddFun('addProduct',index)"
          icon="el-icon-edit">新增产品</el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="(target,
              targetIndex) => batchDelFun(index)"
            size="mini">批量删除</el-button>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="(target,
              targetIndex) => batchEditFun('batchEdit', index)"
            >
            批量编辑</el-button>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th class="table-th" scope="col">
                  <input type="checkbox"
                    v-model="item.checked"
                    @click="e => handleCheckAllChange(e, item.list,index)"
                    />
                </th>
                <th class="table-th" scope="col">商品图片</th>
                <th class="table-th" scope="col">商品名称</th>
                <th class="table-th" scope="col">商品描述</th>
                <th class="table-th" scope="col">是否展示</th>
                <th class="table-th" scope="col">销量程度</th>
                <th class="table-th" scope="col">操作</th>
              </tr>
            </thead>
            <draggable ref='dataListRef' v-model="item.list" tag="tbody" v-if="item.list.length>0">
              <tr v-for="(element,idx) in item.list" :key="idx" class="table-tr">
                <td class="table-td">
                  <input
                    type="checkbox"
                    v-model="element.checked"
                    @click="e => handleCheckedCitiesChange(e, element,idx,item.list,index)"
                  />
                </td>
                <td class="table-td">
                  <img :src="element.img" class="goods-image"/>
                </td>
                <td class="table-td">{{ element.goods_name }}</td>
                <td class="table-td">
                  <span>{{ element.goods_desc }}</span>
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="categoryEdit(idx, element, index, '4')"
                  ></el-button>
                </td>
                <td class="table-td">
                  <el-switch
                    v-model="element.show"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    @change="e => switchChange(e, idx, index)"
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
                    @click="editFun(element, idx, index)"
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
          </table> -->
        </el-collapse-item>
      </draggable>
    </el-card>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    name:'collapse',
    components:{
      draggable
    },
    data() {
      return {
        dataList:[
          {
            "Name": "打野",
            "tips": "全图送",
            "list": [
              {
                "goods_id": "543",
                "goods_price": "4800",
                "goods_name": "剑圣",
              },
              {
                "goods_id": "517",
                "goods_price": "498",
                "goods_name": "赵信",
              }
            ]
          },
          {
            "Name": "ADC",
            "tips": "闷头步兵",
            "list": [
              {
                "goods_id": "543",
                "goods_price": "4800",
                "goods_name": "德莱文",
              },
              {
                "goods_id": "517",
                "goods_price": "498",
                "goods_name": "滑板鞋",
              }
            ]
          },
          {
            "Name": "辅助",
            "tips": "心系天下",
            "list": [
              {
                "goods_id": "543",
                "goods_price": "4800",
                "goods_name": "锤石",
              },
              {
                "goods_id": "517",
                "goods_price": "498",
                "goods_name": "机器人",
              }
            ]
          },
        ]
      }
    }
  }
</script>

<style>

</style>
