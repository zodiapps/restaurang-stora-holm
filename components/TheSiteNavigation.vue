<template lang="pug">
nav
  AppSiteNavigationLink(
    v-for='(item, index) in navigation',
    :key='item.slug',
    :to='item.link',
    :title='item.title',
    :subtitle='item.description',
    :imageUrl='item.thumbnail'
  )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    navigation: {
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
