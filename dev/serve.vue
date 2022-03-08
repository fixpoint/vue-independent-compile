<script lang="ts">
import testComponent from "@/lib-components/test-component.vue";
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { Vue2SfcLibSample } from '@/entry.esm';

export default Vue.extend({
  components: { testComponent },
  name: "ServeDev",
  // components: {
  //  Vue2SfcLibSample,
  // }
});
</script>

<template>
  <div id="app">
    <vue2-sfc-lib-sample />
    <test-component />
  </div>
</template>
