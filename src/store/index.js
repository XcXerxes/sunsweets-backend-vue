import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import state from './state'
import mutations from './mutations'
import sweet_cate from './modules/sweet_cate'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        sweet_cate
    },
    state,
    getters,
    mutations,
    strict: true,
    plugins: [createLogger()]
})