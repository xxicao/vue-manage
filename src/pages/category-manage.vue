<template>
  <el-card class="box-card">
    <div slot="header">
      <span style="font-size:18px">类目管理</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-tree
          :data="data"
          :highlight-current="true"
          :current-node-key="currentNode"
          node-key="id"
          default-expand-all
          draggable
          :expand-on-click-node="false"
          @current-change="getSelectNode"
        >
        </el-tree>
      </el-col>
      <el-col :span="12" :offset="2" class="node-attr-box">
        <div class="attr-title">节点编辑</div>
        <el-form
          ref="form"
          size='small'
          :model="form"
          label-width="80px"
          style="width:60%;float:left">
          <el-form-item label="节点名称">
            <el-input v-model="form.label"></el-input>
          </el-form-item>
          <el-form-item label="ID">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveNode">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
        <div class='node-btn-group'>
          <el-button
            type="primary"
            size="small"
            @click="addNode"
            >添加同级节点</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="addChildNode"
            >添加子节点</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="deleteNode"
            >删除当前节点</el-button
          >
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          id: 1,
          label: '表单示例',
          children: [
            {
              id: 4,
              label: '校验表单',
              children: [
                {
                  id: 9,
                  label: '校验表单1'
                },
                {
                  id: 10,
                  label: '校验表单2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '表格示例',
          children: [
            {
              id: 5,
              label: '普通表格',
              attr: { isRequired: true }
            },
            {
              id: 6,
              label: '筛选表格'
            }
          ]
        },
        {
          id: 3,
          label: '数据可视化',
          children: [
            {
              id: 7,
              label: '图表示例'
            },
            {
              id: 8,
              label: '地图示例',
              children: [
                {
                  id: 11,
                  label: '地图示例1'
                },
                {
                  id: 12,
                  label: '地图示例2'
                },
                {
                  id: 13,
                  label: '地图示例3'
                }
              ]
            }
          ]
        }
      ],
      form: {
        label: '',
        id: ''
      },
      currentNode: '',
      currentLevel: 0
    }
  },
  created () {
    this.currentNode = this.data[0].id
    this.form = this.data[0]
  },
  methods: {
    getSelectNode (node, nodeObj) {
      this.form = node
      this.currentLevel = nodeObj.level
    },
    saveNode () {
      console.log(this.form)
      console.log(this.currentNode)
    },
    addNode () {},
    addChildNode () {},
    deleteNode () {}
  }
}
</script>
<style scoped  lang='less'>
.node-attr-box {
  background-color: #f5f5f5;
  min-height: 300px;
}
.attr-title {
  height: 60px;
  line-height: 60px;
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold;
}
.node-btn-group{
  float: left;
  width: 120px;
  margin-left:50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .el-button+.el-button{
    margin-left:0;
    margin-top: 10px
  }
}
</style>
