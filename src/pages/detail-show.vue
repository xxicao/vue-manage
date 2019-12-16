<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size:18px">订单信息</span>
      </div>
      <el-row :gutter="20" class="desc-list">
        <el-col :xl="6" :md="8">
          <descItem title="订单号">1255235235</descItem>
        </el-col>
        <el-col :xl="6" :md="8">
          <descItem title="地址">上海市徐汇区</descItem>
        </el-col>
        <el-col :xl="6" :md="8">
          <descItem title="地址">上海市徐汇区</descItem>
        </el-col>
        <el-col :xl="6" :md="8">
          <descItem title="地址">上海市徐汇区</descItem>
        </el-col>
        <el-col :xl="6" :md="8">
          <descItem title="姓名">张三</descItem>
        </el-col>
      </el-row>
    </el-card>
    <el-card style='margin-top:20px'>
      <div slot="header" class="clearfix">
        <span style="font-size:18px">商品信息</span>
      </div>
      <el-table :data="tableData" border style="width: 100%" size='mini'>
        <el-table-column prop="date" label="商品名称"></el-table-column>
        <el-table-column label="商品图">
          <template slot-scope="scope">
            <el-image style="width: 60px; height: 60px" :src="scope.row.name" fit="contain"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="描述"></el-table-column>
      </el-table>
    </el-card>
    <el-card style='margin-top:20px'>
      <div slot="header" class="clearfix">
        <span style="font-size:18px">操作日志</span>
      </div>
      <el-table :data="tableData2" stripe border style="width: 100%">
        <el-table-column prop="date" label="操作日期"></el-table-column>
        <el-table-column prop="name" label="操作人"></el-table-column>
        <el-table-column prop="address" label="描述"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import descItem from '../components/desc-item'
export default {
  data () {
    return {
      tableData: [
        {
          date: '商品1',
          name: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          address: '这是一个很好的商品描述 1518 弄'
        },
        {
          date: '商品2',
          name: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          address: '这是一个很好的商品描述 1517 弄'
        },
        {
          date: '商品3',
          name: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          address: '这是一个很好的商品描述 1519 弄'
        }
      ],
      tableData2: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    descItem
  }
}
</script>

<style scoped  lang='less'>
.desc-list .el-col-xl-6 {
  margin: 10px 0;
}
.desc-list .el-col-xl-8 {
  margin: 10px 0;
}
</style>
