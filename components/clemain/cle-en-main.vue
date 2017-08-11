<template lang="pug">
  #grid-clemain
    .text-cle
      img(src="~assets/img/announcer.svg")
      slot(name="titleCle")
      p Nous assumons la réalisation de votre projet en chanvre!
    .card.left
      .flex-content
        img(src="~assets/img/house.svg")
        h4 Résidentiel
        p La tranquillité d’esprit
        nuxt-link(to="/clemain")
          .button
            p.center En savoir plus
    .card.right
      .flex-content
        img(src="~assets/img/school.svg")
        h4 Commerciale
        p Un avantage concurrentiel
        nuxt-link(to="/clemain")
          .button
            p.center En savoir plus
</template>

<script>
</script>

<style lang="stylus">
#grid-clemain
  display grid
  grid-template 1fr 10% 1fr 1fr 1fr / 10% 1fr 1fr 10%
  height 100vh
.text-cle
  grid-area 1/2/2/4
  margin-top 25px
  text-align center
  justify-self center
  align-self center
  img
    height 50px
.card
  justify-self center
  background: #F9F9F9;
  box-shadow: 2px 8px 4px 0 rgba(238,238,238,0.50);
  border-radius: 5px;
  padding-top 0
  max-height 400px
.left
  grid-area 3/2/6/3
  width 90%
.right
  grid-area 3/3/6/4
  width 90%
h2,p,h4
  padding 0
  margin 0
  text-align center
h2
  font-size 2rem
  font-family 'Roboto Condensed', Sans-serif
  color #19455D
h4
  font-family 'Roboto Condensed', Sans-serif
p
  font-family 'Roboto Condensed', Sans-serif
  font-size: 0.9rem
  color: #A0A0A0;
  letter-spacing: 0;
.flex-content
  display flex
  height 300px
  flex-flow column wrap
  margin 25px 0 0 0
  align-content space-around
  justify-content space-around
  p
    font-size 1rem
  img
    height 50px
.button
  display grid
  grid-template 1fr / 1fr
  width 183px
  height 45px
  background: rgba(70, 141, 180, 0.70)
  border-radius: 5px;
  align-self center
  &:hover
    background #468DB4
    box-shadow: 2px 4px 4px 0 rgba(70, 141, 180, 0.40);
    cursor pointer
  p
    color white
.center
  justify-self center
  align-self center
@media only screen and (max-width: 568px)
  #grid-clemain
    grid-template 1fr 1fr 1fr 1fr 1fr / 5% 1fr 1fr 5%
    height 100%
  .left
    grid-area 2/2/4/4
    margin auto
  .right
    grid-area 4/2/6/4
    margin-top 25px
</style>
