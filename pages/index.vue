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
      $content('pages')
        .fetch()
        // eslint-disable-next-line no-console
        .catch(console.error),
    ])

    return {
      week,
      pages,
    }
  },
  transition(to, from) {
    console.log({ to, from })
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
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
