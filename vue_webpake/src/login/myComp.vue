<template>
  <div>
    <h1>我在这里</h1>
    <h1>{{msg}}</h1>
    <input type="button" value="click me" @click="show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello word"
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