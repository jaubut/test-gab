<template lang="pug">
  div
    Headergab
    CleMain
      div(slot="titleCle")
        h2 Clé en main
    AutoConstruction
    Chanvre
    Realisation
    FooterGab
</template>

<script>
  import Headergab from '~/components/header/header.vue'
  import CleMain from '~/components/clemain/cle-en-main.vue'
  import AutoConstruction from '~/components/autoconstruction/auto-construction.vue'
  import Realisation from '~/components/realisation/realisation.vue'
  import FooterGab from '~/components/footer/footer.vue'
  import Chanvre from '~/components/chanvre.vue'

  export default {
    components: {
      Headergab,
      CleMain,
      AutoConstruction,
      Chanvre,
      Realisation,
      FooterGab
    }
  }
</script>

<style lang="stylus">
</style>
