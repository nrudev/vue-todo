<template>
  <header>
    <h1>{{ this.headerText }}</h1>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      headerText: 'getHeaderText',
    }),
  },
};
</script>

<style scoped>
h1 {
  margin-top: 70px;
  font-size: 3rem;
  user-select: none;
}
</style>
