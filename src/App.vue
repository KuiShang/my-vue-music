<template lang="html">
    <div id="app">

        <!-- 主界面部分 -->
        <transition name="show">
            <div v-show="isShowIndex" class="index">
                <!-- 侧边栏 -->
                <AsideMenu v-show="isShowAsideMenu"></AsideMenu>
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

        <!-- 关于界面 -->
        <About v-if="isShowAbout"></About>

        <!-- 隐藏的audio标签 -->
        <audio :src="audio.src || (musicData[0]&&musicData[0].src) || defaultSrc" :autoplay="isPlaying" ref="audioDom"></audio>
    </div>
</template>

<script>

    import VHeader from './components/header/Header.vue';
    import Play from './components/play/Play.vue';
    import VFooter from './components/footer/Footer.vue';
    import AsideMenu from './components/asideMenu/AsideMenu.vue';
    import About from './components/about/About.vue';

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
                defaultSrc: 'http://m2.music.126.net/K1SFXCvWf8BO9VEpSvx2ew==/7967061257205150.mp3'
            }
        },
        components: {
            VHeader,
            Play,
            VFooter,
            AsideMenu,
            About
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
            },
            isShowAsideMenu(){
              return this.$store.state.isShowAsideMenu
            },
            isShowAbout() {
                return this.$store.state.isShowAbout;
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
@import "./common/style/base.scss";
.showIndex-enter-active {
    transition: all .4s ease-out;
}
.showIndex-leave-active {
    transition: all 0s ease-in-out;
}
.showIndex-enter, .showIndex-leave-active {
    transform: translateY(350px);
    opacity: 0;
}
.show-enter-active {
    transition: all .4s ease-in-out;
}
.show-leave-active {
    transition: all 0s ease-out;
}
.show-enter, .show-leave-active {
    transform: translateX(-350px);
    opacity: 0;
}

.down-enter-active {
    transition: all .2s ease-in-out;
}
.down-leave-active {
    transition: all .4s ease-in-out;
}
.down-enter, .down-leave-active {
    transform: translateY(-250px);
    opacity: 0;
}
#app , .index{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;

}


</style>
