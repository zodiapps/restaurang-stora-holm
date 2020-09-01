<template lang="pug">
  div.page
    header
      h1 Restaurang Stora Holm
      img(src="~/assets/restaurant.jpg")
    main
      article.menu
        h2 Lunchmeny (vecka {{ week }})
        table
          tbody
            tr(v-for="(day, index) in menu" v-if="day")
              td {{ index | weekday }}
              td
                ul
                  li(v-for="option in day.options") {{ option }}
        p {{ price }}
    footer
      h2 Kontakta oss
      address
        a(:href="'tel:' + contact.phone")
          font-awesome-icon(:icon="['fas', 'phone']")
        a(:href="'mailto:' + contact.email")
          font-awesome-icon(:icon="['fas', 'envelope']")
        a(:href="contact.address" target="_blank")
          font-awesome-icon(:icon="['fas', 'map-marker-alt']")
        a(:href="contact.facebook" target="_blank")
          font-awesome-icon(:icon="['fab', 'facebook']")

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    const mockContactInfo = {
      phone: '0706028569',
      email: 'adam@zodiapps.com',
      address: 'https://goo.gl/maps/gniWk2sNXwwcEnJx8',
      facebook: 'https://www.facebook.com/Restaurangstoraholm',
    }
    const mockData = {
      week: 36,
      price: 'Pris 120 kr inkl kaffe',
      menu: [
        null,
        {
          options: [
            'Pluma, chimichurri & paprikarostad potatis',
            'Betor, svartvinbärsvinägrett & chevre',
          ],
        },
        {
          options: [
            'Dagens fångst, hollandaisesås, krondill & fänkål',
            'Bakad rotselleri, mandel & hollandaisesås',
          ],
        },
        {
          options: [
            'Porchetta, konfiterade tomater & kronärtskockkräm',
            'Falafel, picklad majrova, vitlökskräm & saltgurka',
          ],
        },
        {
          options: [
            'Dagens fångst, dansk remoulad & potatis',
            'Zucchini, fetaost, linser & tomatsås',
          ],
        },
        null,
        null,
      ],
    }
    return {
      week: mockData.week,
      price: mockData.price,
      menu: mockData.menu,
      contact: mockContactInfo,
    }
  },
})
</script>

<style lang="scss" scoped>
.page {
  margin: 0 auto;
  max-width: 800px;
  padding: 4rem 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.6rem;
  margin: 2rem 0 1rem 0;
}

img {
  height: 240px;
}

table {
  border-collapse: separate;
  border-spacing: 1rem;
}

td {
  vertical-align: baseline;
}

address {
  font-size: 1.5rem;

  a {
    padding: 1rem;
  }
}
</style>
