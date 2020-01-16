<template>
  <div class="login-wrap">
    <div class="login-box">
      <el-card class="box-card">
        <div class="login-title">登录</div>
        <el-form
          ref="ruleform"
          :rules="rules"
          :model="form"
          label-width="80px"
          style="margin-top:20px;width:90%"
        >
          <el-form-item label="登录名" prop="userName">
            <el-input v-model="form.userName" placeholder="yic"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input show-password v-model="form.pass" placeholder="12345"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align:center;">
          <el-button type="primary" @click="onSubmit('ruleform')">登录</el-button>
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
        userName: '',
        pass: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入登录名', trigger: 'change' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        pass: [{ required: true, message: '请输入密码', trigger: 'change' }]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$http.post('/user/doLogin', {
        user_name: this.form.userName,
        user_password: this.form.pass
      }).then(res => {
        if (res && res.Result === 'OK') {
          this.$message.success('登录成功');
          this.$refs[formName].validate(valid => {
            if (valid) {
              localStorage.setItem('userInfo', JSON.stringify(this.form))
              this.$store.commit('setUserInfo', this.form)
              this.$router.push('/index')
            } else {
              return false
            }
          })
        } else {
          this.$message.error(res.err_msg);
        }
      })
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
    .login-title {
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      padding: 15px 0;
    }
  }
}
</style>
