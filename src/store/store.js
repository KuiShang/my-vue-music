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
    isShowMiniMusic: false,
    isShowAsideMenu: false,
    isShowAbout: false,
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
        return new Promise((resolve, reject) => {
            Vue.axios.get('/api/music-data')
                .then (res => {
                    if (res.data.errno === 0) {
                        state.musicData = res.data.musicData;
                        localStorage.musics = JSON.stringify(state.musicData);
                    }
                })
                .then(() => {
                    commit('toggleMusic',0)
                });
            resolve();
        });
    }
}

const mutations = {
    changeLinkBorderIndex(state, index) {
        state.linkBorderIndex = index;
    },
    showAsideMenu(state,flag){
        state.isShowAsideMenu = flag
    },
    toggleMusic(state, index) {
        state.audio.name = state.musicData[index].name;
        state.audio.src = state.musicData[index].src;
        state.audio.musicImgSrc = state.musicData[index].musicImgSrc;
        state.audio.index = index;
    },
    addMusic(state, payload) {
        for (let music of state.musicData) {
            if (JSON.stringify(music) === JSON.stringify(payload)) {
                return;
            }
        }
        state.musicData.unshift(payload);
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
    changeSkinColor(state, color) {
        state.skinColor = color;
    },
    showAbout(state, flag) {
        state.isShowAbout = flag;
    },
    playMusic(state, payload) {
        state.audio.name = payload.name;
        state.audio.src = payload.src;
        state.audio.musicImgSrc = payload.imgSrc;
        state.isPlaying = true;
    },
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})