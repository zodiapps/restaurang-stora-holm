<template lang="pug">
.min-h-screen.flex.flex-col
  TheHeader(:menu='menu', :social='contact', @toggleMenu='onToggleMenu()')
  TheSideNavigation(
    :show='menu',
    :navigation='navigation',
    :social='contact',
    @hide='menu = false'
  )
  main.container.mx-auto.flex-1.py-4.px-4
    .hidden.md_block
      AppSiteNavigation.mb-6(:navigation='navigation')
    Nuxt
  TheFooter(:social='contact')
</template>

<script lang="ts">
import { Result } from '@nuxt/content'
import Vue from 'vue'

export default Vue.extend({
  async fetch() {
    const [contact, navigation] = await Promise.all([
      this.$content('contact').fetch(),
      this.$content('navigation')
        .only(['title', 'description', 'link', 'slug', 'thumbnail'])
        .fetch(),
    ])
    this.contact = contact
    this.navigation = navigation as Result[]
  },
  data() {
    return {
      menu: false,
      contact: null as any,
      navigation: [] as Result[],
    }
  },
  methods: {
    onToggleMenu() {
      console.log('toggle')
      this.menu = !this.menu
    },
  },
  watch: {
    $route() {
      this.menu = false
    },
  },
})
</script>

<style lang="scss">
html {
  font-family: 'Courier New', Courier, monospace;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-size: cover;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  @apply text-3xl pt-4 pb-5;
}

h2 {
  @apply text-2xl pt-3 pb-4;
}

h3 {
  @apply text-xl pt-2 pb-3 font-bold;
}

h4 {
  @apply text-lg pt-2 pb-2 font-bold;
}

ul {
  @apply list-decimal list-inside;
}

ol {
  @apply list-disc list-inside;
}

p {
  @apply mb-4;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(2em);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translateX(-2em);
}
</style>
