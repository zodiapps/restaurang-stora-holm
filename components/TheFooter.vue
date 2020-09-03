<template lang="pug">
  footer
    h2 Kontakta oss
    address
      a(:href="'tel:' + data.phone")
        font-awesome-icon(:icon="['fas', 'phone']")
      a(:href="'mailto:' + data.email")
        font-awesome-icon(:icon="['fas', 'envelope']")
      a(:href="data.address" target="_blank")
        font-awesome-icon(:icon="['fas', 'map-marker-alt']")
      a(:href="data.facebook" target="_blank")
        font-awesome-icon(:icon="['fab', 'facebook']")
</template>

<script lang="ts">
import Vue from 'vue'

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
address {
  font-size: 1.5rem;

  a {
    padding: 1rem;
  }
}
</style>
