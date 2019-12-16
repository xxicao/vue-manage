<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-size:18px">简单图表</span>
    </div>
    <div ref="box" class="echarts-box"></div>
    <div ref="box2" class="echarts-box"></div>
    <div ref="box3" class="echarts-box"></div>
  </el-card>
</template>

<script>
export default {
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(this.$refs.box)
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })

    let myChart2 = this.$echarts.init(this.$refs.box2)
    myChart2.setOption({
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }
      ]
    })

    let myChart3 = this.$echarts.init(this.$refs.box3)
    myChart3.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  }
}
</script>

<style scoped >
.echarts-box {
  display: inline-block;
  width: 500px;
  height: 500px;
}
</style>
