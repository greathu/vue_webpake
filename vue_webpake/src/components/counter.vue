<template>
  <div>
    <input type="button" value="减少" @click="minus()" />
    <input type="button" value="增加" @click="add()" />
    <br />
    <input type="text" v-model="$store.state.count" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    minus() {
      this.$store.commit("substract", { a: 1, b: 2 });
    }
  }
};
</script>

<style lang="scss" scoped></style>
