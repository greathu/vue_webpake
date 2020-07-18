<template>
  <div>
    <h1>个人主页--这app的子组件</h1>
    <h1>{{ msg }}</h1>
    <router-link to="/menu/login">登录</router-link>
    <router-link to="/menu/regin">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "当前登录用户："
    };
  }
};
</script>

<style lang="scss" scoped>
/*
   lang="scss" 是可以作用在所有父子里面的效果
   scoped  限制使用让它只能作用与自己和孩子里面的效果  本组键里面作用
*/
body {
  div {
    font-style: italic;
  }
}
</style>
