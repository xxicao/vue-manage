<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF"
      :default-active="defaultActive"
      :default-openeds="defaultOpen"
      :router="true"
      :unique-opened="true"
      @select = 'changeNav'
      style="border-right:none"
    >
      <el-submenu index="/form">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>表单示例</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/formGeneral">普通表单</el-menu-item>
          <el-menu-item index="/formUpload">上传表单</el-menu-item>
          <el-menu-item index="/formValidator">表单校验</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/table">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>表格示例</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/tableGeneral">普通表格</el-menu-item>
          <el-menu-item index="/tableFilter">筛选表格</el-menu-item>
          <el-menu-item index="/tableFixed">固定表格</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/echarts">
        <template slot="title">
          <i class="el-icon-data-line"></i>
          <span>数据可视化</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/echartsSingle">简单图表</el-menu-item>
          <el-menu-item index="/echartsMap">地图图表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/categoryManage">
        <i class="el-icon-document"></i>
        <span slot="title">类目管理</span>
      </el-menu-item>
      <el-menu-item index="/flowManage">
        <i class="el-icon-s-order"></i>
        <span slot="title">流程管理</span>
      </el-menu-item>
      <el-menu-item index="/detailShow">
        <i class="el-icon-document-copy"></i>
        <span slot="title">详情展示</span>
      </el-menu-item>
      <el-menu-item index="/cmsSetting">
        <i class="el-icon-setting"></i>
        <span slot="title">CMS配置</span>
      </el-menu-item>
      <el-menu-item index="/generalC">
        <i class="el-icon-takeaway-box"></i>
        <span slot="title">常用组件</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultOpen: []
    }
  },
  created () {
    this.defaultOpen = this.$route.path === '/index' ? [] : [this.$route.path]
  },
  watch: {
    $route (to, from) {
      if (to.path === '/index') {
        this.defaultOpen = []
      }
    }
  },
  computed: {
    defaultActive () {
      return this.$route.path === '/index' ? '' : this.$route.path
    }
  },
  methods: {
    changeNav (index, indexPath) {
      this.defaultOpen = [indexPath[0]]
    }
  }
}
</script>

<style scoped >
</style>
