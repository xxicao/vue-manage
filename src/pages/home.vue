<template>
  <div class="home">
    <div class="layout-header">
      <div class="header-logo" @click="goHome">
        管理后台
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          用户名
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus"><span @click="reLogin">重新登录</span></el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"><span @click="resetPass">重置密码</span></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="layout-slide-nav">
      <SlideNav></SlideNav>
    </div>
    <div class="layout-con-box">
      <div class="nav-link">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item, index) in pageData"
            :key="index"
            :to="{ path: item.link }"
            >{{ item.title }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import SlideNav from '../components/slide-nav'
export default {
  components: {
    SlideNav
  },
  computed: {
    pageData () {
      const data = this.$route.matched.map(item => {
        return {
          title: item.meta.title,
          link: item.meta.link
        }
      })
      return data
    }
  },
  methods: {
    reLogin () {
      this.$router.push({ path: '/login' })
    },
    resetPass () {
      console.log(1)
    },
    goHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style scoped  lang="less">
.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  line-height: 64px;
  background-color: rgb(84, 92, 100);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  color: #fff;
  .header-logo {
    font-size: 22px;
    letter-spacing: 3px;
    cursor: pointer;
    user-select: none;
    img {
      width: 24px;
      height: 24px;
      display: inline-block;
      vertical-align: sub;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
}
.layout-slide-nav {
  position: fixed;
  left: 0;
  top: 64px;
  width: 220px;
  height: 100%;
  background-color: rgb(84, 92, 100);
  z-index: 10;
}
.layout-con-box {
  width: calc(100vw - 275px);
  padding-top: 64px;
  margin-left: 245px;
  margin-bottom: 25px;
  .nav-link {
    height: 50px;
    display: flex;
    align-items: center;
  }
}
</style>
