<template>
  <div>
    <h1>这是menu的子组件</h1>
    <h1>{{msg}}</h1>

    <input type="button" value="click me" @click="show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "登录页面"
    };
  },
  methods: {
    show() {
      console.log("show is called");
    }
  }
};
</script>
<style>
</style>