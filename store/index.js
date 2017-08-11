import Vuex from 'vuex'
import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import mutations from './mutations'

Vue.use(VueCarousel)

const createStore = () => {
  return new Vuex.Store({
    state: {
      burger: false
    },
    mutations
  })
}

export default createStore
