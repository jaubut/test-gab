<template lang="pug">
  #grid-cle-page
    headerCle
      div(slot="leftClePage")
        h2 Residentiel
        .button(@click="a = true, b = false")
          p Voir plus
      div(slot="rightClePage")
        h2 Commerciale
        .button(@click="b = true, a = false")
          p Voir plus
    contentCle
      div(slot="cleResidentiel", v-show="a")
        h2 Maison clé en main :
        <br />
        p
        | Une solution simple et sans tracas pour profiter des avantages de la maison en chanvre. Gabriel Construction Chanvre simplifie la façon de bâtir en chanvre. Développés dans la mise en oeuvre de Canaliance, en collaboration avec un panel d’architectes et d’entrepreneurs, plusieurs modèles de maisons clés en main adaptés à la construction en chanvre sont disponibles. <strong>Définition:</strong> La maison clé en main est basée sur un modèle de maison et des matériaux préétablis que vous pourrez personnaliser par la suite. Cette méthode permet de réduire l’incertitude et les frustrations qui peuvent avoir lieu dans un projet de nouvelle maison. <strong>Étape de construction:</strong> Gabriel Construction Chanvre peut vous aider dès la conception. Les projets clés en main peuvent être livrés à l'intérieur de 6 mois. <strong>Prix:</strong>
      div(slot="cleCommerciale", v-show="b")
        h2 Votre bâtiment commerciale clé en main :
        <br />
        p
        | La construction ou rénovation en chanvre est particulièrement adaptée aux enjeux de profitabilité et d'écoresponsabilité des institutions modernes. Gabriel Construction Chanvre est spécialisé dans la rénovation de bâtiments ancestraux. C’est la réponse idéale afin de conserver les attraits visuels charismatiques du patrimoine. Pour les entreprises, la construction en chanvre représente une économie d’énergie substantielle pouvant atteindre 50% annuellement. C’est également un moyen concret de réduire son empreinte écologique et de projeter une image d’entreprise socialement responsable et engagée. Les murs en chanvre offrent un confort inégalé à ses occupants. Finalement, c’est un gage de durabilité qui constitue un excellent investissement à moyen ou long terme.
</template>

<script>
import headerCle from '~/components/header/header-cle.vue'
import contentCle from '~/components/clemainpage/content-cle.vue'

export default {
  components: {
    headerCle,
    contentCle
  },
  data () {
    return {
      a: true,
      b: false
    }
  }
}
</script>

<style lang="stylus">
#grid-cle-page
  display grid
  grid-template 100% / 100%
</style>
