<template lang="pug">
  .layout
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
  background: url('~assets/background.jpg') #a19d93;
  background-size: cover;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.6rem;
  margin: 2rem 0 1.5rem 0;
}

.layout {
  margin: 0 auto;
  max-width: 920px;
  min-height: 100vh;
  background: white;
  padding: 3rem 1rem;

  @screen sm {
    padding: 4rem 4rem;
  }
}
</style>
