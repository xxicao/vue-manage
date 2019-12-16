<template>
  <el-card class="box-card">
    <div slot="header">
      <span style="font-size:18px">常见组件</span>
    </div>
    <p class="component-title">颜色选择组件：</p>
     <el-color-picker v-model="color1" @change='colorChange'></el-color-picker>
    <p class="component-title">评分组件：</p>
    <el-rate
    v-model="value"
    disabled
    show-score
    text-color="#ff9900"
    score-template="{value}"></el-rate>
    <p class="component-title">轮播组件：</p>
    <div style="width:600px">
      <el-carousel  trigger="click" height="height:150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <p class="component-title">日历组件：</p>
    <el-calendar style='width:850px' v-model="now">
      <template #dateCell="{date, data}">
        <p :class="handleSignIn(data) ? 'is-selected' : ''">
          {{new Date(date).getDate()}} {{ handleSignIn(data) ? '已签到' : ''}}
        </p>
      </template>
    </el-calendar>
    <p class="component-title">滚动加载组件：</p>
    <ul class="infinite-list" v-infinite-scroll="load" infinite-scroll-distance='50' style="overflow:auto;height:400px;width:400px">
      <li v-for="(i, index) in count" :key='index' class="infinite-list-item">{{ i }}</li>
    </ul>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      value: 3.7,
      now: new Date(),
      isSignIn: ['2019-12-01', '2019-12-03', '2019-12-05', '2019-12-07', '2019-12-08', '2019-12-09'],
      count: 0,
      color1: '#409EFF'
    }
  },
  methods: {
    handleSignIn (data) {
      return this.isSignIn.find(item => {
        return item === data.day
      })
    },
    load () {
      this.count += 5
    },
    colorChange (val) {
      this.$message({
        showClose: true,
        message: `当前颜色${val}`,
        type: 'success'
      })
    }
  }
}
</script>

<style scoped  lang='less'>
.infinite-list li{
  padding: 15px;
  &:nth-of-type(2n){
    background-color: aqua
  }
  &:nth-of-type(2n+1){
    background-color: pink
  }
}
.is-selected {
  color: #189437;
}
.component-title {
  font-size: 20px;
  margin: 25px 0 5px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
