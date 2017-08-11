<template lang="pug">
  #grid-realisation
    .text-re
      img.face(src="~assets/img/gab-face.png")
      h2 Réalisations
      p Une centaine de réalisations en chanvre signés Gabriel Gauthier.
    .card.left-re
      .flex-content
        img(src="~assets/img/house.svg")
        h4 Résidentiel
        p Pour de l’auto construction <br />ou clé en main.
        .button
          p.center Voir mon histoire
    .card.center-re
      .flex-content
        img(src="~assets/img/hotel.svg")
        h4 Commercial
        p Pour de l’auto construction <br />ou clé en main.
        .button
          p.center Voir mon histoire
    .card.right-re
      .flex-content
        img(src="~assets/img/school.svg")
        h4 Commercial
        p Pour de l’auto construction <br />ou clé en main.
        .button
          p.center Voir mon histoire
</template>

<script>
</script>

<style lang="stylus">
#grid-realisation
  display grid
  grid-template 1fr 10% 1fr 1fr 1fr  / 10% 1fr 1fr 1fr 10%
  height 100%
.text-re
  grid-area 1/2/2/5
  margin 25px 0
  text-align center
  justify-self center
  align-self center
  .face
    border-radius 100%
  img
    height 50px
.card
  justify-self center
  background: #F9F9F9;
  box-shadow: 2px 8px 4px 0 rgba(238,238,238,0.50);
  border-radius: 5px;
  max-height 400px
.left-re
  grid-area 3/2/6/3
  width 90%
.center-re
  grid-area 3/3/6/4
  width 90%
  margin-top -10px
.right-re
  grid-area 3/4/6/5
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
  #grid-realisation
    grid-template repeat(7,1fr) / 5% 1fr 1fr 5%
    height 100%
  .left-re
    grid-area 2/2/4/4
    margin 10px 0
  .center-re
    grid-area 6/2/8/4
    margin 10px 0
  .right-re
    grid-area 4/2/6/4
    margin 10px 0
</style>
