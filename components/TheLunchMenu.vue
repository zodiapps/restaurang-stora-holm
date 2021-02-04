<template lang="pug">
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
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    week: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
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
</style>
