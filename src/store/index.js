import Vue from 'vue'
import Vuex from 'vuex'

import emprendedor from './modules/emprendedor'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { emprendedor
  }
})
