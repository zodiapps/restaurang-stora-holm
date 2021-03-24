<template lang="pug">
footer
  .container
    h2 Kontakta oss
    AppSocial(v-if='social', :data='social')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    social: {
      type: Object,
    },
  },
})
</script>

<style lang="scss" scoped>
footer {
  @apply bg-white;

  .container {
    @apply mx-auto border-t py-4 px-4 relative;

    &::before {
      @apply absolute left-0 right-0;

      top: -6px;
      height: 6px;
      content: '';
      background: linear-gradient(to bottom, rgba(#333, 0), rgba(#333, 0.1));
    }
  }
}
</style>
