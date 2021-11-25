import Vue from 'vue'
import Vuex from 'vuex'

import emprendedor   from './modules/emprendedor'
// import plandenegocio from './modules/plandenegocio'
// import sectorciuu    from './modules/sectrociuu'
// import user          from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {  emprendedor
  }
})
