<template lang="pug">
article
  h1 {{ page.title }}
  nuxt-content(:document='page')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const page = await $content(`pages/${params.slug}`).fetch()

    return {
      page,
    }
  },
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    const fromIndex = from.query.i
    const toIndex = to.query.i
    return toIndex < fromIndex ? 'slide-right' : 'slide-left'
  },
})
</script>
