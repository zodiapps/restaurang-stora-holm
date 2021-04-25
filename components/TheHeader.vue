<template lang="pug">
header
  .container
    NuxtLink(to='/')
      img(src='~/assets/logo.png', alt='Restaurang Stora Holm')
    AppSocial.social(v-if='social', :data='social')
    AppHamburgerMenu.menu(:value='menu', @update='onMenuClick()')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    social: {
      type: Object,
    },
    menu: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onMenuClick() {
      this.$emit('toggleMenu')
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
    @apply hidden w-48 ml-4 self-end;

    @screen md {
      @apply flex;
    }
  }

  button {
    @apply ml-4 w-6 h-6;

    @screen md {
      @apply hidden;
    }
  }
}
</style>
