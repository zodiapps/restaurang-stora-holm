<template lang="pug">
header
  .container
    NuxtLink(to='/')
      img(src='~/assets/logo.png', alt='Restaurang Stora Holm')
    AppSocial.social(v-if='social', :data='headerSocial')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    social: {
      type: Object,
    },
  },
  computed: {
    headerSocial() {
      if (this.social) {
        const { facebook, instagram } = this.social
        return { facebook, instagram }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  @apply mx-auto py-8 px-4 flex justify-between items-center border-b;

  img {
    @apply flex-grow w-full max-w-sm;
  }

  .social {
    @apply hidden w-16 ml-4 self-end;

    @screen md {
      @apply flex;
    }
  }
}
</style>
