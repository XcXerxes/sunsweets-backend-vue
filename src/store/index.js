import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import sweet_cate from './modules/sweet_cate'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        sweet_cate
    },
    getters,
    strict: true,
    plugins: [createLogger()]
})