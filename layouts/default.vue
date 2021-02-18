<template lang="pug">
Nuxt
</template>

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
</style>
