import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决点击同个路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const Home = () => import(/* webpackChunkName: "layout" */ '../pages/home.vue')
const Index = () => import(/* webpackChunkName: "layout" */ '../pages/index.vue')
const Login = () => import(/* webpackChunkName: "layout" */ '../pages/login.vue')
const FormGeneral = () => import(/* webpackChunkName: "form" */ '../pages/form-general.vue')
const FormUpload = () => import(/* webpackChunkName: "form" */ '../pages/form-upload.vue')
const FormValidator = () => import(/* webpackChunkName: "form" */ '../pages/form-validator.vue')
const TableGeneral = () => import(/* webpackChunkName: "table" */ '../pages/table-general.vue')
const TableFilter = () => import(/* webpackChunkName: "table" */ '../pages/table-filter.vue')
const TableFixed = () => import(/* webpackChunkName: "table" */ '../pages/table-fixed.vue')
const EchartsSingle = () => import(/* webpackChunkName: "echarts" */ '../pages/echarts-single.vue')
const DetailShow = () => import(/* webpackChunkName: "detail" */ '../pages/detail-show.vue')
const CmsSetting = () => import(/* webpackChunkName: "cms" */ '../pages/cms-setting.vue')
const GeneralC = () => import(/* webpackChunkName: "component" */ '../pages/general-component.vue')
const FlowManage = () => import(/* webpackChunkName: "flow" */ '../pages/flow-manage.vue')
const CategoryManage = () => import(/* webpackChunkName: "category" */ '../pages/category-manage.vue')

const routes = [{
  path: '',
  redirect: '/index'
}, {
  path: '/login',
  component: Login
},
{
  path: '/home',
  component: Home,
  meta: {
    title: '首页',
    link: '/'
  },
  children: [{
    path: '/index',
    component: Index,
    meta: {
      title: '总览',
      link: '/index'
    }
  }, {
    path: '/formGeneral',
    component: FormGeneral,
    meta: {
      title: '常见表单',
      link: '/formGeneral'
    }
  }, {
    path: '/formUpload',
    component: FormUpload,
    meta: {
      title: '表单上传',
      link: '/formUpload'
    }
  }, {
    path: '/formValidator',
    component: FormValidator,
    meta: {
      title: '表单校验',
      link: '/formValidator'
    }
  }, {
    path: '/tableGeneral',
    component: TableGeneral,
    meta: {
      title: '常见表格',
      link: '/tableGeneral'
    }
  }, {
    path: '/tableFilter',
    component: TableFilter,
    meta: {
      title: '筛选表格',
      link: '/tableFilter'
    }
  }, {
    path: '/tableFixed',
    component: TableFixed,
    meta: {
      title: '固定表格',
      link: '/tableFixed'
    }
  }, {
    path: '/echartsSingle',
    component: EchartsSingle,
    meta: {
      title: '简单图表',
      link: '/echartsSingle'
    }
  }, {
    path: '/categoryManage',
    component: CategoryManage,
    meta: {
      title: '类目管理',
      link: '/categoryManage'
    }
  }, {
    path: '/flowManage',
    component: FlowManage,
    meta: {
      title: '流程管理',
      link: '/flowManage'
    }
  }, {
    path: '/detailShow',
    component: DetailShow,
    meta: {
      title: '详情',
      link: '/detailShow'
    }
  }, {
    path: '/cmsSetting',
    component: CmsSetting,
    meta: {
      title: 'CMS设置',
      link: '/cmsSetting'
    }
  }, {
    path: '/generalC',
    component: GeneralC,
    meta: {
      title: '常见组件',
      link: '/generalC'
    }
  }]
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('userInfo')
  if (to.path !== '/login' && !isLogin) {
    next({ path: '/login' })
  } else {
    next()
  }
})
export default router
