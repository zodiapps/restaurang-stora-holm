<template lang="pug">
.min-h-screen.flex.flex-col
  TheHeader
  main.container.mx-auto.flex-1.px-4
    TheLunchMenu(:week='week')
  TheFooter(:data='contact')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const [week, contact] = await Promise.all([
      $content('week').fetch(),
      $content('contact').fetch(),
    ])

    return {
      week,
      contact,
    }
  },
})
</script>
