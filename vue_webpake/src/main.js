// 导入 Vue
import Vue from 'vue'

// 导入完全mint-ui
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(Mint)

// 导入Vuex
import Vuex from "vuex"
Vue.use(Vuex)

Vue.config.productionTip = false
/* eslint-disable no-new */
var single = '子组件的使用';

/*
//导入数据
import person, {
  person2
} from "./script/test_export.js"
console.log(person.name, person.age)
console.log(person2.name, person2.age)
*/

// 导入组件
import App from "./App.vue"

// 导入路由文件
import router from "./router/router"

// 导入vuerouter  ->使用路由功能
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 使用Vuex实现数据共享  注意S要大写
var store = new Vuex.Store({
  // 数据
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    substract(state, obj) {
      state.count -= (obj.a + obj.b)
    }
  },
  // 只负责向外提供数据，不负责修改数据
  getters: {
    optCount: function (state) {
      return "当前Count的最新值为：" + state.count
    }
  }
})



new Vue({
  el: '#app',
  data: {
    msg: single
  },
  methods: {

  },
  /*
  components: {
    mycomp 
  }*/
  // 路由注册
  router,
  // 覆盖原来父组件  路由
  render: c => c(App),
  store // 挂载使用Vuex
})
