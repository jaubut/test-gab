<template lang="pug">
  #grid-chanvre
    .text-chanvre
      h3 Pourquoi vivre dans une maison en chanvre?
      p “Une maison en chanvre, c’est d’abord et avant tout le confort et la paix d’esprit. Un climat qui respire, qui s’autorégule et qui purifie l’air intérieur(composés organiques volatils).<br />On s’y sent tout simplement bien. “
</template>

<style lang="stylus">
#grid-chanvre
  display grid
  grid-template 100% / 10% 1fr 10%
  background rgb(238,238,238)
  margin-top 25px
  padding 50px
.text-chanvre
  grid-area 1/2/2/3
  justify-self center
  align-self center
  h3
    color #19455d
  p
    color #4d4d4d
    padding-top 25px
@media only screen and (max-width: 568px)
  #grid-chanvre
    grid-template 100% / 5% 1fr 5%
</style>
