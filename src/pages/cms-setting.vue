<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-size:18px">CMS配置</span>
    </div>
    <el-row :gutter="20"  type="flex">
      <el-col :xl="6" :md="6">
        <div class='control-box'>
          控件库
        </div>
      </el-col>
      <el-col :xl="10" :md="10">
        <div class='show-box'>
          页面编辑
        </div>
      </el-col>
      <el-col :xl="8" :md="8">
        <div class='attr-box'>
          控件属性编辑
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {}
</script>

<style>
.control-box{
  width: 100%;
  min-height: 500px;
  border:1px solid #ddd;
}
.show-box{
  width: 100%;
  min-height: 500px;
  border:1px solid #ddd;
}
.attr-box{
  width: 100%;
  min-height: 500px;
  border:1px solid #ddd;
}
</style>
