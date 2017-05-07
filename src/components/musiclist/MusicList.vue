<template lang="html">
    <transition name="showRouter">
        <div class="music-list">
            <div v-for="(item, index) of musicData" class="music-item">
                <img :src="item.musicImgSrc || 'https://microzz.com/img/avatar.jpg'" class="music-img"></img>
                <span @click="toggleMusic(index)" class="music-name">{{ (index+1) + '.&nbsp; ' + item.name}}</span>
                <span @click="del(index)" class="del-icon"></span>
            </div>
            <div class="tips">没有更多歌曲了～</div>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    export default{
        beforeCreate() {
            this.$store.commit('showMiniMusic', true);
        },
        mounted() {
            // TODO 此处暂时写死为1，如果此处顺序经常被改变 则此处需要抽象，有机会抽象出来
            this.$store.commit('changeLinkBorderIndex', 1);
        },
        computed: {
            musicData(){
                return this.$store.state.musicData;
            },
            DOM() {
                return this.$store.state.DOM;
            },
            isPlaying() {
                return this.$store.state.isPlaying;
            }
        },
        methods: {
            toggleMusic(index){
                if (this.$store.state.audio.index === index) {
                    this.DOM.audioDom.paused ? this.DOM.audioDom.play() : this.DOM.audioDom.pause();
                    this.$store.commit('play', !this.isPlaying);
                }else{
                    this.DOM.audioDom.play();
                    this.$store.commit('play', true);
                }
                this.$store.commit('toggleMusic', index);
            },
            del(index){
                this.$store.commit('del', index);
            }
        }
    }

</script>
<style rel="stylesheet/scss" lang="scss">
    .music-list {
        flex: 8;
        padding-top: 4px;
        padding-left: 4px;
        padding-right: 4px;
        overflow: auto;
        .music-item + .music-item {
            border-top: 1px solid rgba(0, 0, 0, .1);
        }
        .music-item {
            padding: 4px 6px 4px 6px;
            position: relative;
            cursor: pointer;
            .music-img {
                width: 50px;
                height: 50px;
                border-radius: 5px;
            }
            span.music-name {
                display: inline-block;
                width: 65%;
                vertical-align: top;
                margin-top: 15px;
                margin-left: 10px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-bottom: 20px;
            }
            span.del-icon {
                display: inline-block;
                position: absolute;
                right: 10px;
                top: 20px;
                width: 20px;
                height: 20px;
                background: url('./del.svg');
                background-size: contain;
            }
        }
    }

</style>