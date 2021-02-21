<template lang="pug">
button(@click='onMenuClick()')
  img(:src='"~assets/menu.svg"')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onMenuClick() {
      this.$emit('update', !this.value)
    },
  },
})
</script>

<style lang="scss" scoped>
button {
  @apply outline-none w-6 h-6;
}
</style>
