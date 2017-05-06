<template lang="html">
    <div id="app">

        <!-- 主界面部分 -->
        <transition name="show">
            <div v-show="isShowIndex" class="index">
                <!-- 头部 -->
                <VHeader></VHeader>

                <!-- router控制的Tab页内容 -->
                <router-view></router-view>

            </div>

        </transition>
    </div>
</template>

<script>

    import VHeader from './components/header/Header.vue';

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            VHeader,
        },
        computed:{
            isShowIndex() {
                //return this.$store.state.isShowIndex;
                return true;
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
@import "./common/style/base.scss";

#app {

    display: flex;
    flex-direction: column;
   /* position: relative;
    width: 100%;
    height: 100%;*/

}


</style>
