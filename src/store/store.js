/**
 * Created by kk on 2017/5/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import VueAxios from 'vue-axios';
// 用 axios 进行 Ajax 请求
Vue.use(VueAxios, axios);
Vue.use(Vuex);

const state = {
    isShowIndex: true,
    linkBorderIndex: '',
    musicData: [],
    isPlaying: false,
    skinColor: localStorage.skinColor || '#B72712',
    isShowIndex: true,
    isShowMiniMusic: false,
    isShowAsideMenu: false,
    DOM: {},
    audio: {
        name: '',
        src: '',
        musicImgSrc: '',
        index: 0
    }
}

const actions = {
    getData({ commit,state }){
        if (localStorage.musics !== '[]' && localStorage.musics) {
            state.musicData = JSON.parse(localStorage.musics);
            return;
        }
        axios.get('/music-data.json')
            .then(res =>{
                if (res.status === 200) {
                    state.musicData = res.data.musicData;
                    localStorage.musics = JSON.stringify(state.musicData);
                }
            })
            .then(() => {
                commit('toggleMusic',0)
            });
    }
}

const mutations = {
    changeLinkBorderIndex(state, index) {
        state.linkBorderIndex = index;
    },
    showAsideMenu(flag){

    },
    toggleMusic(state, index) {
        state.audio.name = state.musicData[index].name;
        state.audio.src = state.musicData[index].src;
        state.audio.musicImgSrc = state.musicData[index].musicImgSrc;
        state.audio.index = index;
    },
    findDOM(state, payload) {
        state.DOM[payload.name] = payload.dom;
    },
    play(state, flag) {
        state.isPlaying = flag;
    },
    del(state, index){
        if(state.musicData.length === 0){
            return
        }
        state.musicData.splice(index,1)
    },
    showMiniMusic(state, flag) {
        state.isShowMiniMusic = flag;
    },
    showIndex(state, flag) {
        state.isShowIndex = flag;
    },
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})