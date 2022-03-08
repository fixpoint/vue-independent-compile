<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { Vue2SfcLibSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  Vue2SfcLibSample,
  // }
});
</script>

<template>
  <div id="app">
    <vue2-sfc-lib-sample />
  </div>
</template>
