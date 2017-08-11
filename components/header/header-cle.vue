<template lang="pug">
  #grid-cle-header
    NavHeader
    MobileNavBurger
    MobileNavFa
    nuxt-link(to="/")
      img.img(src="~assets/img/logo-gab.svg")
    .block-cle
      .cle-left
        slot(name="leftClePage")
      .cle-right
        slot(name="rightClePage")
</template>

<script>
import NavHeader from '~/components/header/nav.vue'
import MobileNavBurger from '~/components/header/mobile-nav-burger.vue'
import MobileNavFa from '~/components/header/mobile-nav-fa.vue'

export default {
  components: {
    NavHeader,
    MobileNavBurger,
    MobileNavFa
  }
}
</script>

<style lang="stylus">
#grid-cle-header
  display grid
  grid-template 10% 1fr 20% / 10% 1fr 10%
  background #F9F9F9
  height 40vh
.block-cle
  grid-area 2/2/4/3
  display grid
  grid-template 1fr 1fr / 1fr 1fr
  .button
    margin-top 25px
.cle-left
  grid-area 1/1/3/2
  display flex
  flex-flow column wrap
  justify-content center
  align-content center
.cle-right
  grid-area 1/2/3/3
  display flex
  flex-flow column wrap
  justify-content center
  align-content center
@media only screen and (max-width: 568px)
  #grid-cle-header
    grid-template 20% 1fr 20% / 10% 1fr 10%
  .block-cle
    h2
      font-size 1rem
  .block-cle, .burger
    .button
      min-width 50px
      width auto
      height 25px
</style>
