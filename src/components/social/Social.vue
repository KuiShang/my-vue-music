<template lang="html">
    <transition name="showRouter">
        <div class="social">
            social
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    export default{
        mounted() {
            this.$store.commit('changeLinkBorderIndex', 3);
        },
    }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>