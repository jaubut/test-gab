<template lang="pug">
  #header-grid
    NavHeader
    MobileNavBurger
    MobileNavFa
    nuxt-link(to="/")
      img.img(src="~assets/img/logo-gab.svg")
    .text
      h1 Gabriel Construction Chanvre
      h3 450-830-2233
      h5 Québec-Ontario
    HeaderBanner
</template>

<script>
import NavHeader from '~/components/header/nav.vue'
import HeaderBanner from '~/components/header/header-banner.vue'
import MobileNavBurger from '~/components/header/mobile-nav-burger.vue'
import MobileNavFa from '~/components/header/mobile-nav-fa.vue'

export default {
  components: {
    NavHeader,
    HeaderBanner,
    MobileNavBurger,
    MobileNavFa
  }
}
</script>

<style lang="stylus">
#header-grid
  display grid
  grid-template repeat(5,1fr) / 10% 1fr 10%
  height 100vh
  background-image url('~assets/img/header-bg.jpg')
  background-position center center
  background-size cover
.text
  grid-area 3/2/4/3
  justify-self center
  align-self center
.nuxt-link-active
  grid-area 1/2/2/3
  width 35px
  height 35px
img
  height 35px
  justify-self right
  &:hover
    cursor pointer
h1,h3,h5
  display flex
  justify-content center
  font-family 'Roboto Condensed', sans-serif
  margin 0
  padding 0
  color white
  text-align center
h1
  font-size 2.5rem
h3
  font-size 1.5rem
h5
  font-size 1rem
</style>
