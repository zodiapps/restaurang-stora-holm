<template lang="pug">
footer
  .container.mx-auto.border-t.py-8.px-4
    h2 Kontakta oss
    AppSocial(v-if='social', :data='social')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    social: {
      type: Object,
    },
  },
})
</script>
