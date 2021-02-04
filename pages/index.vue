<template lang="pug">
.page
  header
    img(src='~/assets/logo.jpg', alt='Restaurang Stora Holm')
  main
    article.menu
      h2 Lunchmeny (vecka {{ week.number }})
      table
        tbody
          tr(v-for='day in week.menu', v-if='day')
            td {{ day.weekday | weekday }}
            td
              ul
                li(v-for='option in day.options') {{ option }}
      p {{ week.price }}
  TheFooter.footer(:data='contact')
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

<style lang="scss" scoped>
.page {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

header {
  align-self: center;
  margin-bottom: 2rem;
  img {
    width: 400px;
    max-width: 100%;
  }
}

main {
  margin-bottom: 2rem;

  table {
    $border-spacing: 1rem;

    width: 100%;
    border-collapse: separate;
    margin-left: -$border-spacing;
    margin-right: -$border-spacing;
    margin-bottom: 2rem;
    border-spacing: $border-spacing;
  }

  td {
    vertical-align: baseline;
    ul {
      li {
        margin-bottom: 0.7em;
      }
    }
  }
}
</style>
