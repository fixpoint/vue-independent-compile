<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
});
</script>
<template>
  <h3>The count value is {{ count }}</h3>
</template>

<style>
h3 {
  text-align: center;
}
</style>
