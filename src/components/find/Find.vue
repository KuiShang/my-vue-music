<template lang="html">
    <transition name="showRouter">
        <div class="find">
            find
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    export default{
        mounted() {
            this.$store.commit('changeLinkBorderIndex', 2);
        },
    }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>