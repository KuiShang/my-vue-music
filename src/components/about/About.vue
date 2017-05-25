<template lang="html">
    <transition name="showAbout">
        <div class="about">
            <i class="close" @click="showAbout"></i>
            <div class="about-content">
                <h1>关于</h1>
                <p class="skill"><b>技术栈</b>：</p>
                <div>Vue2<br>Vuex<br>vue-router<br>axios<br>SASS(SCSS)<br>Express(上线版本是Koa2)<br>Webpack<br>ES6<br>localStorage(HTML5)<br>CSS3
                </div>
                <p class="url"><b>源码地址</b>：<a @touchstart="isHover=true" @touchEnd="isHover=false"
                                              :class="{hover: isHover}"
                                              href="https://github.com/microzz/vue-music-player"
                                              target="_blank">GitHub</a></p>
                <p class="url"><b>个人网站</b>：<a @touchstart="isHover=true" @touchEnd="isHover=false"
                                              :class="{hover: isHover}" href="https://microzz.com/" target="_blank">microzz</a>
                </p>
                <p><br>&nbsp;&nbsp;&nbsp;待业码农，求工作～～如果你觉得该项目不错，还可以请我吃辣条😄↓↓↓</p>
                <p class="copyright"><b>【声明】</b>：本项目仅供学习使用，请不要用作任何商业用途。有任何疑问请联系作者↓ <br>📩：<a href="mailto:zhaohui@microzz.com">zhaohui@microzz.com</a></p>

            </div>
            <div @click="showAbout" class="mask"></div>
        </div>
    </transition>

</template>
<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                isHover: false
            }
        },
        methods: {
            showAbout() {
                this.$store.commit('showAbout', false);
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .showAbout-enter-active {
        transition: all .4s ease-in-out;
    }
    .showAbout-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .showAbout-enter, .showAbout-leave-active {
        transform: rotateZ(180deg);
        opacity: 0;
    }
    a {
        color: #3F51B5;
    }
    .about {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .close {
            position: absolute;
            z-index: 3;
            display: inline-block;
            width: 30px;
            height: 30px;
            top: 11%;
            right: 12%;

            background: url("./close.svg") no-repeat;
            background-size: contain;

        }
        .about-content {
            border-radius: 10px;
            background-color: #fff;
            width: 80%;
            height: 80%;
            box-shadow: 0 0 20px gray;
            padding: 30px 10px;
            h1 {

                text-align: center;
                font-size: 1.2rem;
                color: #31c27c;
                transition: .4s ease-in-out;
            }
            h1:hover {
                transform: rotate(-15deg);
                transition: .3s ease-in-out;
            }
            .skill{
                text-indent: 1em;
                word-break: break-all;
                margin-top: 6px;
            }
            b {
                display: inline-block;
                transition: .3s ease-in-out;
            }
            b:hover {
                transform: rotate(-10deg);
                transition: .3s ease-in-out;
            }
            div {
                // letter-spacing: 1px;
                padding-left: 50px;
            }
        }
        .mask{
            position: absolute;
            z-index: 0;
            width: 100%;
            height: 100%;
            background: none;
        }
    }
</style>