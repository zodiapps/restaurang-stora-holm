<template lang="pug">
nav
  AppSiteNavigationLink(
    v-for='(page, index) in pages',
    :key='page.slug',
    :to='page.slug',
    :title='page.title',
    :subtitle='page.description',
    :imageUrl='page.thumbnail'
  )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    pages: {
      type: Array,
      default() {
        return []
      },
    },
  },
})
</script>

<style lang="scss" scoped>
nav {
  @apply grid gap-4 grid-cols-1;

  @screen sm {
    @apply grid-cols-2;
  }

  @screen md {
    @apply grid-cols-4;
  }
}
</style>
