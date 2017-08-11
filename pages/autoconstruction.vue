<template lang="pug">
  #grid-cle-page
    headerPage
      div(slot="headerBlock")
        h2 Auto Construction
      Carousel(slot="bottomBlock")
        Slide
          h2 Service
          .button(@click="a = true, b = false, c = false")
            p Voir plus
        Slide
          h2 Assistance
          .button(@click="a = false, b = true, c = false")
            p Voir plus
        Slide
          h2 Démarrage
          .button(@click="a = false, b = false, c = true")
            p Voir plus
    contentCle
      div(slot="contentPageUn", v-show="a")
        h2 Service d’assistance à l’auto-construction
        p Ce service correspond à tous ceux qui veulent prendre en charge leur projet de maison. C’est la meilleure solution pour réduire les coûts reliés à la main-d’oeuvre. De nombreux clients par le passé ont décidé d’en faire un projet de famille ou entre amis! C’est possible grâce à l’assistance d’artisans qualifiés qui vous guideront tout au long de la construction jusqu'à la finition!
        h3 Pourquoi adhérez à l’autoconstruction?
        ul
          li L’auto-construction est accessible à tous grâce au support des artisans experimentés.
          li Assistance technique adaptée aux besoins de chacun.
          li Opportunité de faire un projet collectif enrichissant en terme d’expérience. Bâtir l’avenir en famille.
          li Réduction importante des coûts de construction  (main-d’oeuvre) COMBIEN???
          li Acquérir des connaissances et un savoir-faire pratique.
          li Plus grande autonomie de réalisation
        p En fonctions de vos besoins, plusieurs options d’assistance sont possibles, en débutant par la consultation, le service de conception et l’étude de projet dans le but d’obtenir des designs facilitant la mise en oeuvre. Par la suite, profitez d’une assistance continue ou d’un démarrage de chantier.
      div(slot="contentPageDeux", v-show="b")
        h2 Assistance technique continue
        p Un accompagnement avec tout l’équipement et l’expertise dans la mise en oeuvre de votre maison. En ayant la majeure partie des membres de l’équipe à votre charge (amis et famille), vous réduisez considérablement vos coûts de main-d’oeuvre. Donnez-vous la tranquillité d’esprit et l’assurance d’un bon rythme d’avancement des travaux en étant accompagné d’une ou plusieurs personnes expérimentées du début à la fin des travaux.
      div(slot="contentPageTrois", v-show="c")
        h2 Démarrage de chantier
        p Si vous souhaitez gérer de façon autonome vos travaux, offrez-vous démarrage de chantier pour assurer un bon départ et prendre le rythme. Nous venons quelques jours pour démarrer votre chantier puis vous louez l’équipement pour terminer les travaux avec votre équipe. Vous pouvez par la suite profiter d’assistance technique (main d’oeuvre, expertise et équipement) tout au long du processus ou encore d’un démarrage de chantier, qui consiste à vous assurer un bon départ.
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import headerPage from '~/components/header/header-page.vue'
import contentCle from '~/components/clemainpage/content-cle.vue'

export default {
  components: {
    headerPage,
    contentCle,
    Carousel,
    Slide
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
</style>
