<template>
  <div class="view">
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // var echarts = require('echarts');
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById("main1"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "九期作业数量",
      },
      tooltip: {},
      xAxis: {
        data: ["语文", "数学", "英语", "生物", "化学", "物理"],
      },
      yAxis: {},
      series: [
        {
          name: "数量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
          barWidth:'45px'
        },
      ],
    });
    var myChart2 = this.$echarts.init(document.getElementById("main2"));
    myChart2.setOption({
      color:["blue"],
      textStyle:{
          color:"#828282"
      },
      title: {
        text: "班级人数",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: "category",
        data: ["框架一班", "框架二班", "框架三班", "框架四班", "框架五班", "框架六班"],
      },
      series: [
        {
          name: "2012年",
          type: "bar",
          data: [19, 28, 31, 54, 84, 67],
          barWidth:'45px'
        },
      ],
    });
  },
};
</script>
<style lang="scss">
.view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  #main1,
  #main2 {
    width: 600px;
    height: 500px;
  }
}
</style>