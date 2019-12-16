<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-size:18px">新增编辑</span>
    </div>
    <el-steps :active="active" finish-status="success" style="width:80%;margin: 10px auto">
      <el-step title="基本信息"></el-step>
      <el-step title="商品配置"></el-step>
      <el-step title="广告配置"></el-step>
    </el-steps>
    <el-form
      :model="ruleForm"
      :rules="rules"
      size="small"
      ref="ruleForm"
      label-width="100px"
      style="width:40%;margin: 40px auto"
      v-if="active == 0"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
        <el-button>返回</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      border
      style="width: 70%;margin:40px auto;"
      size="mini"
      v-if="active == 1"
    >
      <el-table-column label="商品名称">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="商品价格">
        <template slot-scope="scope">
          <el-input v-model="scope.row.price"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="商品图">
        <template slot-scope="scope">
          <el-image style="width: 60px; height: 60px" :src="scope.row.url" fit="contain"></el-image>
        </template>
      </el-table-column>
    </el-table>
    <div class="next-btn-group" v-if="active == 1">
      <el-button type="primary" @click="goTo(2)" size="small">下一步</el-button>
      <el-button type="primary" @click="goTo(0)" size="small">上一步</el-button>
    </div>
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      size="small"
      ref="ruleForm2"
      label-width="100px"
      style="width:40%;margin: 40px auto"
      v-if="active == 2"
    >
      <el-form-item label="名称" prop="adName">
        <el-input v-model="ruleForm2.adName"></el-input>
      </el-form-item>
      <el-form-item label="位置" prop="adPosition">
        <el-select v-model="ruleForm2.adPosition" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图片" prop="adUrl">
        <el-upload
          class="avatar-uploader"
          action="http://t-api-manager-v2.goshare2.com/notice/uploadRejectImg?not_item_id=4882&new_admin=1&token=cfe9379cc12c102cfcc9e351e1cb1416&loginId=445"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-change="stutusChange"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="goTo(2)">保存</el-button>
        <el-button type="primary" @click="goTo(1)">上一步</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      ruleForm: {
        name: '',
        region: '',
        resource: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'change' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ]
      },
      imageUrl: '',
      ruleForm2: {
        adName: '',
        adPosition: '',
        adUrl: ''
      },
      rules2: {
        adName: [
          { required: true, message: '请输入广告名称', trigger: 'change' }
        ],
        adPosition: [
          { required: true, message: '请选择广告位置', trigger: 'change' }
        ],
        adUrl: [{ required: true, message: '请设置广告图', trigger: 'change' }]
      },
      tableData: [
        {
          name: '商品1',
          url:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          price: '123'
        },
        {
          name: '商品2',
          url:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          price: '21'
        },
        {
          name: '商品3',
          url:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          price: '34'
        }
      ]
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    stutusChange (file, fileList) {
      console.log(file)
      console.log(fileList)
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.active++
        } else {
          console.log(valid)
          return false
        }
      })
    },
    goTo (n) {
      this.active = n
    }
  }
}
</script>
<style lang='less'>
.next-btn-group {
  width: 200px;
  text-align: center;
  margin: 20px auto;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
