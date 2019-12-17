<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="页面编辑" name="pageEdit">
      <div class='con-box'>
        <el-card class="box-card" style="width:20%;">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">选择控件</span>
          </div>
          <div class='control-box'>
            <el-button type="primary" size='small' @click='addControl(1)'>轮播图</el-button>
            <el-button type="primary" size='small' @click='addControl(2)'>一排多张</el-button>
            <el-button type="primary" size='small' @click='addControl(3)'>N个商品</el-button>
          </div>
        </el-card>
        <el-card class="box-card" style="width:39%;margin-left:1%;">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">页面配置</span>
          </div>
          <div class='show-box'>
            <div class='control-item' v-for="(item,index) in controls" :key='index' @click="selectControl(index)">
              {{item.name}}
              <div class='item-btn-group'>
                <el-button type="primary" size='mini' icon="el-icon-arrow-up" circle @click="moveUp(index)"></el-button>
                <el-button type="primary" size='mini' icon="el-icon-arrow-down" circle @click="moveDown(index)">
                </el-button>
                <el-button type="primary" size='mini' icon="el-icon-close" circle @click="deleteItem(index)">
                </el-button>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" style="width:39%;margin-left:1%;">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">属性设置</span>
          </div>
          <div class='attr-box' v-if='controlAttr'>
            <el-form label-position="top" size='small' label-width="80px" :model="controlAttr">
              <el-form-item label="名称">
                <el-input v-model="controlAttr.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="controlAttr.region"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="属性配置" name="attrEdit">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size:18px">属性编辑</span>
      </div>
      <h1>
        属性编辑
      </h1>
    </el-card>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      controls: [],
      curControlIndex: null,
      controlAttr: null,
      activeTab: 'pageEdit'
    }
  },
  methods: {
    addControl (kind) {
      const defaultC = this.getDefaultC(kind)
      this.controls.push(defaultC)
    },
    selectControl (index) {
      this.curControlIndex = index
      this.controlAttr = this.controls[index]
    },
    deleteItem (index) {
      this.controls.splice(index, 1)
    },
    moveUp (index) {
      if (index === 0) {
        return false
      }
      const thirdObj = this.controls[index - 1]
      this.controls.splice(index - 1, 1, this.controls[index])
      this.controls.splice(index, 1, thirdObj)
    },
    moveDown (index) {
      if (index === this.controls.length - 1) {
        return false
      }
      const thirdObj = this.controls[index + 1]
      this.controls.splice(index + 1, 1, this.controls[index])
      this.controls.splice(index, 1, thirdObj)
    },
    getDefaultC (kind) {
      let control = {}
      switch (kind) {
        case 1:
          control = {
            name: '轮播',
            region: '',
            kind: kind
          }
          break
        case 2:
          control = {
            name: '一排多张',
            region: '',
            kind: kind
          }
          break
        case 3:
          control = {
            name: 'N个商品',
            region: '',
            kind: kind
          }
          break
      }
      return control
    }
  }
}

</script>

<style lang='less'>
  .con-box {
    display: flex;
  }

  .control-box {
    width: 100%;
    min-height: 500px;

    .el-button--primary {
      width: 100%;
      margin-top: 10px;
      margin-left: 0;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  .show-box {
    border: 1px solid #bbb;
    min-height: 600px;
    padding: 10px;

    .control-item {
      position: relative;
      width: 100%;
      height: 40px;
      font-size: 16px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #3a8ee6;
      border-radius: 5px;
      color: #3a8ee6;
      cursor: pointer;
      user-select: none;
      background-color: #f9f9f9;
      margin-top: 10px;

      .item-btn-group {
        position: absolute;
        right: 10px;
        top: 0;
      }

      .el-button--mini.is-circle {
        padding: 4px;
      }

      &:hover {
        box-shadow: 0 0 7px rgba(58, 142, 230, 0.5);
      }

      &:first-child {
        margin-top: 0;
      }
    }
  }

</style>
