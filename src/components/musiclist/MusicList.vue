<template lang="html">
    <transition name="showRouter">
        <div class="music-list">
            wode
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    export default{
        mounted() {
            // TODO 此处暂时写死为1，如果此处顺序经常被改变 则此处需要抽象，有机会抽象出来
            this.$store.commit('changeLinkBorderIndex', 1);
        },
    }

</script>
<style rel="stylesheet/scss" lang="scss">

    .music-list {
        flex: 8;
    }
</style>