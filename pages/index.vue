<template lang="pug">
.min-h-screen.flex.flex-col
  TheHeader(:social='contact')
  main.container.mx-auto.flex-1.py-4.px-4
    TheSiteNavigation.mb-6(:pages='pages')
    TheLunchMenu(:week='week')
  TheFooter(:social='contact')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const [week, contact, pages] = await Promise.all([
      $content('week').fetch(),
      $content('contact').fetch(),
      $content('pages')
        .only(['title', 'description', 'slug', 'thumbnail'])
        .fetch()
        // eslint-disable-next-line no-console
        .catch(console.error),
    ])

    return {
      week,
      contact,
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
