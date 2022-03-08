<script lang="ts">
import Vue from "vue";
import store from "@/store";

export default Vue.extend({
  computed: {
    count() {
      return store.state.count;
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
