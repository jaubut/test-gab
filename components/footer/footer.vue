<template lang="pug">
  #grid-footer
    .footer-number
      p RBQ 345 345 345
      p TEL: 450 830 2323
    .footer-email
      input.footer-input(placeholder="Email : Liste de courriel")
      button.footer-button Envoyé
    img.img-footer(src="~assets/img/logo-footer.svg")
</template>

<style lang="stylus">
#grid-footer
  display grid
  grid-template 100% / 10% 15% 1fr 15% 10%
  background #19455D
  height 100%
  min-height 50px
  padding 5px
.footer-number
  grid-area 1/2/2/3
  justify-self center
  align-self center
  color white
input, placeholder
  color white
  font-size 0.9rem
.img-footer
  grid-area 1/4/2/5
  padding-bottom 15px
.footer-email
  grid-area 1/3/2/4
  display grid
  grid-template-columns repeat(5,1fr)
  justify-self center
  align-self center
.footer-input
  grid-area 1/2/2/4
  min-height 25px
  max-height 33px
  max-width 300px
  background rgba(249, 249, 255, 0.50)
  border-radius 25px 0 0 25px
  text-decoration none
  border none
.footer-button
  grid-area 1/4/1/5
  min-height 25px
  max-height 33px
  background rgba(70, 141, 180, 0.85)
  border-radius 0 25px 25px 0
  border none
  text-decoration none
  color white
  &:hover
    background #468DB4
    cursor pointer
@media only screen and (max-width: 568px)
  #grid-footer
    grid-template repeat(2,1fr) / 2% 1fr 1fr 2%
  .footer-number
    grid-area 1/2/2/3
  .footer-email
    grid-template 100% / 1% 1fr 1fr 1fr 1%
    grid-area 2/2/3/4
  .img-footer
    grid-area 1/3/2/4
</style>
