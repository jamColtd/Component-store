<!--
 * @Author: min.dong
 * @Date: 2022-03-09 08:15:00
 * @LastEditTime: 2022-03-09 16:06:56
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
      let data = new Set()
      data.add({name:1})
      data.add({name:1})
      data.add({name:2})
      console.log(data)
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
