import Vue from 'vue'

Vue.filter('weekday', (value: any): string => {
  switch (value) {
    case 0:
      return 'Måndag'
    case 1:
      return 'Tisdag'
    case 2:
      return 'Onsdag'
    case 3:
      return 'Torsdag'
    case 4:
      return 'Fredag'
    case 5:
      return 'Lördag'
    case 6:
      return 'Söndag'
    default:
      return '?'
  }
})
