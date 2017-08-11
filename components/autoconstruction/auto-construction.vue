<template lang="pug">
  #grid-auto
    .text-cle
      img(src="~assets/img/crosswalk.svg")
      h2 Auto Construction
      p Que ce soit pour vous aidez à bien débuter votre chantier, vous conseiller pour <br />vos plans ou même vous assistez tout au long du chantier.
    .auto-grid
      .menu-auto
        .round-auto(@click="a = true, b = false, c = false")
          p Évaluation et<br />préparation du projet
        .round-auto(@click="b = true, a = false, c = false")
          p Rassemblez vos proches!
        .round-auto(@click="c = true, b = false, a = false")
          p Location d’équipement
      .auto-view(v-show="a")
        Evaluation
      .auto-view(v-show="b")
        Rassemblez
      .auto-view(v-show="c")
        LocationEqui
</template>

<script>
import Evaluation from '~/components/autoconstruction/evaluation.vue'
import Rassemblez from '~/components/autoconstruction/rassemblez-proche.vue'
import LocationEqui from '~/components/autoconstruction/location-equipement.vue'

export default {
  components: {
    Evaluation,
    Rassemblez,
    LocationEqui
  },
  data () {
    return {
      a: true,
      b: false,
      c: false
    }
  }
}
</script>

<style lang="stylus">
#grid-auto
  display grid
  grid-template 1fr 10% 1fr 1fr 1fr  / 10% 1fr 1fr 10%
  height 100vh
.text-cle
  grid-area 1/2/2/4
  margin-top 25px
  text-align center
  justify-self center
  align-self center
  img
    height 50px
.auto-grid
  grid-area 3/1/6/6
  display grid
  grid-template 1fr / 10% 70% 10% 10%
.menu-auto
  grid-area 1/3/2/4
  display flex
  flex-flow column wrap
  justify-content flex-start
  align-content flex-end
  .round-auto
    display grid
    height auto
    padding 5px
    width 100%
    margin 15px 5px
    background: rgba(70, 141, 180, 0.85)
    box-shadow: 1px 2px 4px 0 #CACACA;
    border-radius: 5px;
    &:hover
      background: #468DB4;
      box-shadow: 1px 2px 4px 0 rgba(70, 141, 180, 0.85);
      cursor pointer
    p
      justify-self center
      align-self center
      color white
.auto-view
  grid-area 1/2/2/3
  height 100%
  width 90%
  background: #F9F9F9;
  box-shadow: 2px 8px 4px 0 rgba(238,238,238,0.50);
  border-radius: 6px;
.auto-full
  grid-area 1/1/4/4
  display grid
  grid-template 50% 50% / 50% 50%
  height 100%
  justify-self center
  align-self center
.auto-content-header
  grid-area 1/1/2/3
  display flex
  flex-flow column wrap
  justify-content center
  align-content center
  background rgba(238,238,238,0.50)
.auto-content-body
  grid-area 2/1/3/3
  display flex
  flex-flow column wrap
  justify-content space-around
  align-content center
  border-top solid 1px rgba(238,238,238,0.80)
  padding 0 5%
  p
    color #4d4d4d
.auto-content-photo
  grid-area 1/1/2/3
  border-radius 5px 5px 0 0
  background-size 100% auto
  background-repeat no-repeat
  background-position center center
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
@media only screen and (max-width: 568px)
  #grid-auto
    grid-template repeat(4,1fr) / 5% 1fr 1fr 5%
    height 100%
  .auto-grid
    grid-area 2/2/5/4
    grid-template 20% 80% / 5% 1fr 1fr 5%
  .auto-view
    grid-area 2/2/3/4
    width 100%
    margin-top -75px 0 0 0
  .menu-auto
    grid-area 1/2/2/4
    display flex
    flex-flow row wrap
    justify-content space-around
    align-content center
    .round-auto
      height auto
      margin 2px 5px
      background #19455D
      border-radius 5px
      p
        text-align center
        color white
  .auto-content-photo
    background-size cover
</style>
