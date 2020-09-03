<template lang="pug">
  div.page
    header
      img(src="~/assets/logo.jpg" alt="Restaurang Stora Holm")
    main
      article.menu
        h2 Lunchmeny (vecka {{ week.number }})
        table
          tbody
            tr(v-for="(day) in week.menu" v-if="day")
              td {{ day.weekday | weekday }}
              td
                ul
                  li(v-for="option in day.options") {{ option }}
        p {{ week.price }}
    TheFooter(:data="contact")
</template>

<script lang="ts">
import Vue from 'vue'

export default {
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
}
</script>

<style lang="scss" scoped>
img {
  width: 320px;
  max-width: 100%;
}

table {
  border-collapse: separate;
  border-spacing: 1rem;
}

td {
  vertical-align: baseline;
}
</style>
