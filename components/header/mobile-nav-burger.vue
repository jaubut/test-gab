<template lang="pug">
  .burger(v-if="$store.state.burger")
    .button(@click="$store.commit('toggle')")
       p close
    nuxt-link(to="/clemain") Services
    nuxt-link(to="/autoconstruction") Techniques
    nuxt-link(to="/pourquoichanvre") Chanvre ?
    nuxt-link(to="/clemain") Emails
</template>

<script>
import { mapState } from 'vuex'

export default {
  fetch ({ store }) {
    store.commit('toggle')
  },
  computed: mapState([
    'burger'
  ]),
  methods: {
    toggle () { this.$store.commit('toggle') }
  }
}
</script>
