<template lang="pug">
  #grid-cle-content
    .cle-content
      slot(name="cleResidentiel")
    .cle-content
      slot(name="cleCommerciale")
    .cle-content
      slot(name="contentPageUn")
    .cle-content
      slot(name="contentPageDeux")
    .cle-content
      slot(name="contentPageTrois")
    .cle-content
      slot(name="contentPageQuattre")
    .cle-content
      slot(name="contentPageCinq")
</template>

<style lang="stylus">
#grid-cle-content
  display grid
  grid-template 15% 100% / 10% 1fr 10%
  height 100vh
.cle-content
  grid-area 2/2/3/3
</style>
