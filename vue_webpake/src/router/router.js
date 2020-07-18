// 路由分离

// 导入vuerouter
import VueRouter from "vue-router"

// 第一步：导入所有的页面
// 导入用户首页主键
import menu from "../components/menu.vue"
// 一个  ” . “是向上一级目录 ，两个 ' .. '是向上两级
// 导入登录和注册组件
import login from "../components/login.vue"
import regin from "../components/regin.vue"

// 第二部：设置路由规则
var router = new VueRouter({
  routes: [{
      path: "/",
      redirect: "/menu"
    }, {
      path: "/menu",
      component: menu,
      // 设置子路由嵌套
      children: [{
          path: "login",
          component: login
        },
        {
          path: "regin",
          component: regin
        }
      ]
    },
    {
      path: "/regin",
      component: regin
    }

  ]
})

//最后： 导出路由数据
export default router
