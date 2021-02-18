<template lang="pug">
address
  a(v-if='data.phone', :href='"tel:" + data.phone')
    font-awesome-icon(:icon='["fas", "phone"]')
  a(v-if='data.email', :href='"mailto:" + data.email')
    font-awesome-icon(:icon='["fas", "envelope"]')
  a(v-if='data.address', :href='data.address', target='_blank')
    font-awesome-icon(:icon='["fas", "map-marker-alt"]')
  a(v-if='data.facebook', :href='data.facebook', target='_blank')
    font-awesome-icon(:icon='["fab", "facebook"]')
  a(v-if='data.instagram', :href='data.instagram', target='_blank')
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
address {
  @apply flex justify-between items-center text-xl w-64 h-8;
}
</style>
