/**
 * Created by kk on 2017/5/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isShowIndex: true,
    linkBorderIndex: '',
}

const actions = {

}

const mutations = {
    changeLinkBorderIndex(state, index) {
        state.linkBorderIndex = index;
    },
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})