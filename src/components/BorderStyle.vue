<!--
 * @Author: min.dong
 * @Date: 2022-03-09 08:15:00
 * @LastEditTime: 2022-03-10 09:42:04
 * @FilePath: \Component-store\src\components\BorderStyle.vue
-->
<template>
  <div class="border1">
    <div class="border1-title">
      <span class="border1-title-span">只留边角</span>
    </div>
    <span class="row row1 border1-span"></span>
    <span class="row row2 border1-span"></span>
    <span class="col col2 border1-span"></span>
    <span class="col col1 border1-span"></span>
  </div>
</template>

<script>
export default {
  name:'borderStyle',
  data() {
    return {

    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      let arr =[
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/z6a.jpg",
          "goods_id": "543",
          "goods_price": "1098",
          "goods_name": "Z6A",
          "goods_desc": "翻转双摄 | 旗舰新品",
          "show": true
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-pods/x01.jpg",
          "goods_id": "517",
          "goods_price": "498",
          "goods_name": "护耳耳机",
          "goods_desc": "星梦粉 | 新色上市",
          "show": true
        },
        {
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/bbk-pens/x3.jpg",
          "goods_id": "525",
          "goods_price": "998",
          "goods_name": "扫描笔",
          "goods_desc": "哪里不会扫哪里",
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
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/z5a.png",
          "goods_id": "507",
          "goods_price": "998",
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
          "img": "https://bbkofficial.oss-cn-beijing.aliyuncs.com/MALL/classify-products/xtc-watch/q1c.png",
          "goods_id": "513",
          "goods_price": "398",
          "goods_name": "Q1C",
          "goods_desc": "",
          "show": true
        }
      ];
      let arr1 = [1,2,3,4,5,6]
      console.log(JSON.parse(JSON.stringify(arr)),'开始')
      // arr.splice(e.newIndex, 0, arr.splice(e.oldIndex, 1)[0]);
      // arr.splice(6, 0, arr.splice(0,1)[0]) 第一位移到最后一位
      arr.splice(5, 0, arr.splice(0,1)[0])
      // arr.splice(0,1)
      console.log(arr)
    }
  }
}
</script>

<style scoped>
/* .border1{
  width: 300px;
  border-left: 1px solid #1052b0;
  border-right: 1px solid #1052b0;
  border-bottom: 1px solid #1052b0;
} */
  /* background-color: #0c133e; */
  /* height: 20px; */

.border1 {
 position:relative;
 left:50px;
 top:50px;
 margin:10px;
 width:300px;
 height:269px;
 border:2px solid #457AB1;
 background-color: #0C1D55;
}

.border1-title{
  position: absolute;
  border:2px solid #457AB1;
  height: 29px;
  width: 100px;
  top: -16px;
  left: 36%;
  background-color: #0C1D55;
}

.border1-title-span{
  position: absolute;
  top: -65px;
  left: 14px;
  color: #699CC1;
}

.border1-span {
  position:absolute;
  padding:5px;
  border-style: solid;
  border-color: #F6FFFF;
}

.row1 {
  border-width: 2px 0 0 2px;
  top: -2px;
  left: -2px;
}

.row2 {
  border-width: 2px 2px 0 0;
  top: -2px;
  right: -2px;
}

.col1 {
  border-width: 0 0 2px 2px;
  bottom:-2px;
  left:-2px;
}

.col2 {
  border-width: 0 2px 2px 0;
  bottom:-2px;
  right:-2px;
}

</style>
