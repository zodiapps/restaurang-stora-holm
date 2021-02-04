<template lang="pug">
footer
  h2 Kontakta oss
  address
    a(:href='"tel:" + data.phone')
      font-awesome-icon(:icon='["fas", "phone"]')
    a(:href='"mailto:" + data.email')
      font-awesome-icon(:icon='["fas", "envelope"]')
    a(:href='data.address', target='_blank')
      font-awesome-icon(:icon='["fas", "map-marker-alt"]')
    a(:href='data.facebook', target='_blank')
      font-awesome-icon(:icon='["fab", "facebook"]')
    a(:href='data.instagram', target='_blank')
      font-awesome-icon(:icon='["fab", "instagram"]')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
footer {
  address {
    font-size: 1.5rem;

    a {
      padding: 1rem;

      @screen sm {
        padding: 1rem 2rem;
      }
    }
  }
}
</style>
