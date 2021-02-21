<template lang="pug">
div
  transition(name='fade')
    .backdrop(v-if='show', @click='$emit("hide")')
  transition(name='slide-side')
    aside.sidenav(v-if='show')
      .header
        button(@click='$emit("hide")')
          img(:src='"~assets/cross.svg"')
        h3 {{ navigation.title }}
      AppSiteNavigation(:items='navigation.items')
      AppSocial.social(:data='social')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    navigation: {
      type: Object,
    },
    social: {
      type: Object,
    },
  },
})
</script>

<style lang="scss" scoped>
.backdrop {
  @apply w-full h-full fixed top-0 bottom-0 left-0 right-0 z-10;

  background-color: rgba(0, 0, 0, 0.7);
}

aside.sidenav {
  @apply h-full w-full max-w-sm fixed top-0 left-0 z-20 py-8 px-4 flex flex-col bg-white overflow-auto overscroll-none;

  .header {
    @apply mb-6 flex items-center;

    button {
      @apply w-4 h-4;
    }

    h3 {
      @apply ml-6 p-0;
    }
  }

  .social {
    @apply mt-8 w-full px-4;
  }
}

.slide-side-enter-active,
.slide-side-leave-active {
  @apply transition-transform duration-300 delay-75 ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300 ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
