<template lang="pug">
footer.bg-yellow-400
  .container.mx-auto.px-4
    h2 Kontakta oss
    address.flex.sm_-mx-6.text-xl
      a.p-3.sm_px-6(:href='"tel:" + data.phone')
        font-awesome-icon(:icon='["fas", "phone"]')
      a.p-3.sm_px-6(:href='"mailto:" + data.email')
        font-awesome-icon(:icon='["fas", "envelope"]')
      a.p-3.sm_px-6(:href='data.address', target='_blank')
        font-awesome-icon(:icon='["fas", "map-marker-alt"]')
      a.p-3.sm_px-6(:href='data.facebook', target='_blank')
        font-awesome-icon(:icon='["fab", "facebook"]')
      a.p-3.sm_px-6(:href='data.instagram', target='_blank')
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
