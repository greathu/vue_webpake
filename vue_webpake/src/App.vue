<template>
  <div>
    <!--显示位置-->
    <amount></amount>
    <counter></counter>
    <br />
    <h1>{{ msg }}</h1>
    <router-link to="/menu">用户首页</router-link>
    <router-link to="/regin">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import counter from "./components/counter.vue";
import amount from "./components/amount.vue";

export default {
  data() {
    return {
      msg: "登录页面"
    };
  },
  methods: {},
  components: {
    counter,
    amount
  }
};
</script>
<style></style>
