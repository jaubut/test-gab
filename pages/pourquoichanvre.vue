<template lang="pug">
  #grid-cle-page
    headerPage
      div(slot="headerBlock")
        h2 Pourquoi le chanvre ?
      Carousel(slot="bottomBlock")
        Slide
          h2 Économie d’énergie
          .button(@click="a = true, b = false, c = false, d = false, e = false" )
            p Voir plus
        Slide
          h2 Confort intérieur
          .button(@click="a = false, b = true, c = false, d = false, e = false" )
            p Voir plus
        Slide
          h2 Paix d’esprit
          .button(@click="a = false, b = false, c = true, d = false, e = false" )
            p Voir plus
        Slide
          h2 Durabilité
          .button(@click="a = false, b = false, c = false, d = true, e = false" )
            p Voir plus
        Slide
          h2 Écologique
          .button(@click="a = false, b = false, c = false, d = false, e = true" )
            p Voir plus
    contentCle
      div(slot="contentPageUn", v-show="a")
        h2 Économie d’énergie
        p Déjà, le mur de chanvre de 12po surpasse les normes de Novo Climat avec un R-25.  Toutefois, le caractère vivant du chanvre constitue l’élément de différenciation principale face aux autres types d’isolants. En effet, le béton de chanvre, enduit avec un fini naturel, a l’avantage d’agir comme une masse thermique très efficace. Il s’agit donc d’un régulateur thermique plutôt qu’un simple matériau d’isolation. Par conséquent, les murs ont la capacité d’emmagasiner les surplus de chaleur et de les restituer dans l’air lorsque c’est nécessaire. Un mur ordinaire va se comporter comme une barrière, alors que le mur en chanvre va régulariser la température et gérer l’humidité. Résultat: fortes économies sur vos factures d’énergie, pouvant atteindre 50% d’économies annuellement
      div(slot="contentPageDeux", v-show="b")
        h2 Confort intérieur  (hygrothermique)
        p Pour diminuer les efforts en énergie et maximiser le confort, vous en conviendrez qu’une maison doit s’adapter à son climat et aux changements de température. Pour la construction en chanvre, on parle de confort hygrothermique. Le mur respire, ce qui lui permet de réguler intuitivement l’humidité relative dans la demeure. Les maisons en chanvre sont ainsi tempérées, on profite d’une température ambiante constante durant toute l’année sans être énergivore. Par ailleurs, l’insonorisation y est excellente. On choisit une maison en chanvre d’abord et avant tout pour le confort qu’elle procure.
      div(slot="contentPageTrois", v-show="c")
        h2 Paix d’esprit
        p L’utilisation de matériaux naturels et vivants comporte également des avantages sur la santé des occupants. L’air ambiant d’une maison est deux à trois fois plus pollué que l’air extérieur. Il y a déjà une grande quantité de composés organiques volatils (COV) dans l’air d’une construction neuve traditionnelle en raison des intrants chimiques utilisés. C’est un problème auquel s’adresse la maison en chanvre, puisque les murs récupèrent naturellement les COV dans l’air. Résultat: un environnement sain et sécuritaire pour y élever une famille.
      div(slot="contentPageQuattre", v-show="d")
        h2 Durabilité (Résistance au feu et aux insectes)
        p La durabilité du béton de chanvre n’est plus à démontrer avec de nombreuse construction centenaire à travers le monde. Avec le temps, le béton de chanvre va se pétrifier, tout comme la pierre, afin de se solidifier d’année en année. C’est un matériau ininflammable, la France nous l’a prouvé. Ensuite, puisque les murs sont pleins, les rongeurs et insectes ne s’y attaquent pas.  Les murs en chanvre aident par ailleurs à prévenir les infiltrations d’eau et intervenir plus rapidement en cas de sinistre. Avec la maison en chanvre, on réduit le temps d’entretien et on se met à l’abri des incendies et des infestations de rongeurs.
      div(slot="contentPageCinq", v-show="e")
        h2 Écologique
        p La production de maison en chanvre peut être un outil important dans la lutte au changement climatique. Tous les matériaux qui sont utilisés dans le béton de chanvre sont naturels. La paille de chanvre (ou chènevotte) est hautement renouvelable et non issue de la pétrochimie. L’empreinte écologique du béton de chanvre est carbonégative. Vous avez bien compris: carbonégative. Des études ont démontré qu’une maison en chanvre de taille moyenne est en mesure de récupérer jusqu’à 20 tonnes de CO2 à l’intérieur même de ses murs. Finalement, la culture de chanvre enrichit les sols agricoles, ne requiert aucun pesticide et que très peu d’irrigation.
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
      c: false,
      d: false,
      e: false
    }
  }
}
</script>

<style lang="stylus">
</style>
