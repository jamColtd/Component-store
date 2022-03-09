<template>
  <div>
    <el-row style="margin:0 0 10px 0">
      <el-col :span="16">
        <el-card class="cardStyle" style="margin:0 10px 0 0;background-color:#2d3274;border:1px solid #2d3274;color:#fff">
          <div slot="header" class="clearfix">
            <span>待办任务</span>
          </div>
          <!--图形卡片-->
          <div class="graphics-card" v-for="(item,index) in 6" :key="index"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="cardStyle" style="height:428px;background-color:#2d3274;border:1px solid #2d3274;color:#fff">
          <div slot="header" class="clearfix">
            <span>区域占比</span>
          </div>
          <div id="myChart" :style="{width:'100%',height:'300px'}"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <el-card class="cardStyle" style="margin:0 10px 0 0;background-color:#2d3274;border:1px solid #2d3274;color:#fff">
          <div slot="header" class="clearfix">
            <span>数据展示</span>
          </div>
          <div id="DynamicDataGraph" :style="{width:'100%',height:'300px'}"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="cardStyle">
          <div slot="header" class="clearfix">
            <span>常用联系人</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'home',
  data() {
    return {

    }
  },
  mounted () {
    /*初始化ECharts图表，绑定到id=myChart的div上面*/
    var myChart = this.$echarts.init(document.getElementById('myChart'));
    myChart.setOption({
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: '上单'
            },
            {
              value: 234,
              name: '打野'
            },
            {
              value: 1548,
              name: 'ADC'
            },
            {
              value: 50,
              name: '辅助'
            },
            {
              value: 200,
              name: '中单'
            }
          ]
        }
      ]
    })

    /** 动态树状图 */
    var data = [];
    for (let i = 0; i < 5; ++i) {
      data.push(Math.round(Math.random() * 200));
    }
    let DynamicDataGraph = this.$echarts.init(document.getElementById('DynamicDataGraph'));
    let option = {
      xAxis: {
        max: 'dataMax'
      },
      yAxis: {
        type: 'category',
        data: ['打野', '上单', 'ADC', '辅助', '中单'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 4 // only the largest 3 bars will be displayed
      },
      series: [
        {
          realtimeSort: true,
          name: 'LOL区域',
          type: 'bar',
          data: data,
          itemStyle:{
            normal:{
              color: function(params) {
                //通过数组下标选择颜色
                var colorList = [
                  '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                  ];
                return colorList[params.dataIndex]
              },
            }
          },
          label: {
            show: true,
            position: 'right',
            valueAnimation: true
          }
        }
      ],
      legend: {
        show: true
      },
      animationDuration: 3000,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };

    /**动态数据图数据更新 */
    function update() {
      var data = option.series[0].data;
      for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 500);
        } else {
          data[i] += Math.round(Math.random() * 200);
        }
      }
      DynamicDataGraph.setOption(option);
    }

    setInterval(function() {
      update();
    }, 1000);
  },
  methods:{

  }
}
</script>

<style scope>
.graphics-card{
  height: 165px;
  width: 330px;
  background-color: rgb(0, 0, 255,0.2);
  border-radius: 18px;
  margin: 5px;
  float: left;
}
.cardStyle{
  padding:0 15px
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
.el-card__header{
  height: 60px;
  line-height: 30px;
  text-align: left;
}
</style>
