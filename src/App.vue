<template lang="html">
    <div id="app">

        <!-- 主界面部分 -->
        <transition name="show">
            <div v-show="isShowIndex" class="index">
                <!-- 头部 -->
                <VHeader></VHeader>

                <!-- router控制的Tab页内容 -->
                <router-view></router-view>

                <!-- 尾部mini播放器 -->
                <VFooter></VFooter>
            </div>
        </transition>

        <!-- 播放界面 -->
        <transition name="showIndex">
            <Play v-show="!isShowIndex"></Play>
        </transition>

        <!-- 隐藏的audio标签 -->
        <audio :src="audio.src || (musicData[0]&&musicData[0].src) || defaultSrc" :autoplay="isPlaying" ref="audioDom"></audio>
    </div>
</template>

<script>

    import VHeader from './components/header/Header.vue';
    import Play from './components/play/Play.vue';
    import VFooter from './components/footer/Footer.vue';

    export default {
        name: 'app',
        beforeCreate() {
            this.$store.dispatch('getData');
        },
        mounted() {
            this.$store.commit('findDOM', {name: 'audioDom', dom: this.$refs.audioDom});
            console.log("%c Powered by shangkui - github.com/kuishang","background-image:-webkit-gradient( linear, left top,right top, color-stop(0, #00a419),color-stop(0.15, #f44336), color-stop(0.29, #ff4300),color-stop(0.3, #AA00FF),color-stop(0.4, #8BC34A), color-stop(0.45, #607D8B),color-stop(0.6, #4096EE), color-stop(0.75, #D50000),color-stop(0.9, #4096EE), color-stop(1, #FF1A00));color:transparent;-webkit-background-clip:text;font-size:13px;");
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            VHeader,
            Play,
            VFooter
        },
        computed:{
            isShowIndex() {
                return this.$store.state.isShowIndex;
            },
            isPlaying() {
                return this.$store.state.isPlaying;
            },
            audio() {
                return this.$store.state.audio;
            },
            musicData() {
                return this.$store.state.musicData;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
@import "./common/style/base.scss";

#app , .index{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;

}


</style>
