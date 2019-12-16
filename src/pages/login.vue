<template>
  <div class="login-wrap">
    <div class="login-box">
      <el-card class="box-card">
        <div class='login-title'>
            登录
        </div>
        <el-form ref="form" :model="form" label-width="80px" style='margin-top:20px;width:90%'>
          <el-form-item label="登录名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pass"></el-input>
          </el-form-item>
        </el-form>
        <div style='text-align:center;'>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>注册</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped  lang='less'>
.login-wrap {
  width: 100%;
  height: 100%;
  background-color: #3c8dbc;
}
.login-box {
  position: fixed;
  width: 460px;
  height: 320px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  .box-card {
    width: 100%;
    height: 100%;
    .login-title{
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      padding: 15px 0;
    }
  }
}
</style>
