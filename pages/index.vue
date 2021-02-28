<template lang="pug">
div
  TheLunchMenu(:week='week')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const [week, pages] = await Promise.all([
      $content('week').fetch(),
      $content('pages').fetch(),
    ])

    return {
      week,
      pages,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
})
</script>
