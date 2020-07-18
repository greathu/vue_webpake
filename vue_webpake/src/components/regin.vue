<template>
  <div>
    <h1>注册页面---这是menu的子组件</h1>
    <h1>{{msg}}</h1>
    <input type="button" value="click me" @click="show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello word 注册用户"
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