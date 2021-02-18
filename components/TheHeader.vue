<template lang="pug">
header
  .container
    NuxtLink(to='/')
      img(src='~/assets/logo.png', alt='Restaurang Stora Holm')
    AppSocial.social(v-if='social', :data='social')
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
.container {
  @apply mx-auto py-8 px-4 flex justify-between items-end border-b;

  img {
    @apply flex-grow max-w-sm;
  }

  .social {
    @apply hidden;

    @screen md {
      @apply flex;
    }
  }
}
</style>
