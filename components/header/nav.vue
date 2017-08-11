<template lang="pug">
  #nav-grid
    .nav
      nuxt-link(to="/clemain") Services
      nuxt-link(to="/autoconstruction") Techniques
      nuxt-link(to="/pourquoichanvre") Chanvre ?
      nuxt-link(to="/clemain") Emails
</template>

<script>
</script>

<style lang="stylus">
#nav-grid
  grid-area 1/1/2/4
.nav
  display flex
  flex-flow row wrap
  justify-content center
  .nuxt-link-active
    width auto
.fa
  grid-area 1/2/2/3
  display flex
  justify-content flex-end
  padding 25px 0 0 0
  width 25px
  cursor pointer
  justify-self right
  align-self right
  &:hover
    color black
    opacity 0.6
.burger
  grid-area 2/2/4/3
  display flex
  flex-flow column wrap
  justify-content center
  z-index 2000
  min-height 250px
  height 100%
  width 90%
  background: #F9F9F9;
  box-shadow: 2px 8px 4px 0 rgba(238,238,238,0.50);
  border-radius: 6px;
  justify-self center
  align-self center
a
  display inline
  font-family 'Roboto Condensed', Sans-serif
  color black
  text-decoration none
  padding 20px 20px 0 20px
  &:hover
    color rgba(0, 0, 0, 0.5)
    cursor pointer
@media only screen and (max-width: 568px)
  .nav
    display none
  nav
    justify-content flex-end
  .burger
    .button
      max-width 50px
@media only screen and (min-width: 800px)
  .fa
    display none
  .burger
    display none
</style>
