<template>
  <footer class="clearAllContainer">
    <span class="clearAllBtn" @click="clearAll">Clear All</span>
  </footer>
</template>

<script>
export default {
  methods: {
    clearAll() {
      this.$store.commit('clearAllItems');
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
  cursor: pointer;
}
</style>
