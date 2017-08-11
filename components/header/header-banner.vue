<template lang="pug">
  .header-banner
    p Faite une demande d’estimation dès maintenant !
    button
      a.button-p(href="mailto:allo@chanvrequebec.com") Demandez
</template>

<style lang="stylus">
  .header-banner
    display grid
    grid-template-columns repeat(5,1fr)
    grid-area 5/2/6/3
    min-height 25px
    max-height auto
    max-width 580px
    background rgba(249, 249, 255, 0.50)
    justify-self center
    align-self center
    border-radius 25px
    p
      color #4d4d4d
  button
    min-height 25px
    max-height 33px
    background rgba(70, 141, 180, 0.85)
    border-radius 25px
    border none
    text-decoration none
    &:hover
      background #468DB4
      cursor pointer
  p
    grid-area 1/1/1/5
    justify-self center
    align-self center
    color #468DB4
    font-size 0.7rem
    font-family 'Roboto Condensed', sans-serif
    padding 0
    margin 0
  .button-p
    grid-area 1/5/1/6
    color white
  @media only screen and (max-width: 568px)
    .header-banner
      grid-template 70% 10% 20% / 1fr
    .button-p
      grid-area 3/1/4/2
    p
      grid-area 1/1/2/2
      font-size 0.6rem
</style>
