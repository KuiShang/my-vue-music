<template lang="html">
    <transition name="fade">

        <div v-show="isShowMiniMusic" :style="{backgroundColor: skinColor}" class="footer">
            <div class="mini-music">

                <div class="music-img">
                    <img @click="showPlay" ref="img"
                         :src="audio.musicImgSrc || (musicData[0]&&musicData[0].musicImgSrc) || defaultImg"
                         alt="microzz.com">
                </div>

                <div class="music-name">
                    <p @click="showPlay">{{audio.name || (musicData[0]&&musicData[0].name) }}</p>
                    <div class="progress">
                        <span class="start">{{transformTime(now)}}</span>
                        <div @click="changeTime($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)"
                             ref="progressBar" class="progress-bar">
                            <div class="now" ref="now"
                                 :style="{width: (now / nativeAudio.duration).toFixed(3)*100 + '%'}"></div>
                        </div>
                        <span class="end" v-text="totalTime"></span>
                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                defaultImg: 'https://microzz.com/img/avatar.jpg',
                now: 0,
                nativeAudio: {},
                totalTime: '0:00',
            }
        },
        computed: {

            audio() {
                return this.$store.state.audio;
            },
            isShowMiniMusic() {
                return this.$store.state.isShowMiniMusic;
            },
            musicData() {
                return this.$store.state.musicData;
            },
            skinColor() {
                return this.$store.state.skinColor;
            }
        },
        methods: {
            showPlay() {
                if (this.isShowAsideMenu) {
                    return;
                }
                this.$store.commit('showIndex', false);
                this.$store.commit('showMiniMusic', false);
            },
            transformTime(seconds) {
                let m, s;
                m = Math.floor(seconds / 60);
                m = m.toString().length == 1 ? ('0' + m) : m;
                s = Math.floor(seconds - 60 * m);
                s = s.toString().length == 1 ? ('0' + s) : s;
                return m + ':' + s;
            },
            changeTime(event) {
                let progressBar = this.$refs.progressBar;
                let coordStart = progressBar.getBoundingClientRect().left;
                let coordEnd = event.pageX;
                this.nativeAudio.currentTime = (coordEnd - coordStart) / progressBar.offsetWidth * this.nativeAudio.duration;
                this.now = this.nativeAudio.currentTime;
                this.nativeAudio.play();
                this.$store.commit('play', true);
            },
            touchMove(event) {
                let progressBar = this.$refs.progressBar;
                let coordStart = progressBar.getBoundingClientRect().left;
                let coordEnd = event.touches[0].pageX;
                this.$refs.now.style.width = ((coordEnd - coordStart) / progressBar.offsetWidth).toFixed(3) * 100 + '%';
            },
            touchEnd(event) {
                this.nativeAudio.currentTime = this.$refs.now.style.width.replace('%', '')/100 * this.nativeAudio.duration;
                this.now = this.nativeAudio.currentTime;
                this.nativeAudio.play();
                this.$store.commit('play', true);
            },
        }
    }

</script>
<style rel="stylesheet/scss" lang="scss">
    .footer {
        background: #B72712;
        text-align: center;
        .mini-music {
            display: flex;
            line-height: 70px;
            cursor: pointer;
            .music-img {
                height: 70px;
                img {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                }
            }
            .music-name {
                flex: 5;
                color: white;
                overflow: hidden;
                position: relative;
                width: 100%;

                p {
                    position: relative;
                    z-index: 1;
                    height: 40px;
                    line-height: 40px;
                    overflow: hidden;
                    white-space: nowrap;
                    // cursor: pointer;
                }
                .progress {
                    position: absolute;
                    width: 100%;
                    top: 10px;
                    left: 0;
                    span.start {
                        position: absolute;
                        left: 6px;
                        // padding-right: 5px;
                    }
                    span.end {
                        position: absolute;
                        right: 4px;
                        // padding-left: 5px;
                    }
                    @media screen and(min-width: 600px) {
                        span.start {
                            position: absolute;
                            left: 26px;
                        }
                        span.end {
                            position: absolute;
                            right: 30px;
                        }
                    }
                    .progress-bar {
                        position: relative;
                        width: 50%;
                        height: 5px;
                        display: inline-block;
                        background-color: rgba(255, 255, 255, .5);
                        vertical-align: 2px;
                        border-radius: 3px;
                        cursor: pointer;

                        .now {
                            position: absolute;
                            left: 0;
                            display: inline-block;
                            max-width: 100%;
                            // width: 70%;
                            height: 5px;
                            background-color: #31c27c;
                        }
                        .now::after {
                            content: "";
                            position: absolute;
                            left: 100%;
                            width: 2px;
                            height: 6px;
                            background-color: white;
                        }
                    }
                }
            }
        }
    }

</style>