<template lang="pug">
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
})
</script>
