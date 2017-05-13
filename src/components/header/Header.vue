<template lang="html">

    <div class="header">
        <div class="name">
            <span @click="showAsideMenu(true)" class="func"><i class="func-icon"></i></span>
            <p>云音乐</p>
            <span @click="toSearch()" class="search"><i class="search-icon"></i></span>
        </div>
        <div class="tab">
            <div class="item" :class="{link: linkBorderIndex === 1}">
                <router-link to="/music-list">我的</router-link>
            </div>
            <div class="item" :class="{link: linkBorderIndex === 2}">
                <router-link to="/find">发现</router-link>
            </div>
            <div class="item" :class="{link: linkBorderIndex === 3}">
                <router-link to="/social">一个</router-link>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'header',
        computed: {
            linkBorderIndex() {
                return this.$store.state.linkBorderIndex;
            }
        },
        methods:{
            toSearch() {
                this.$router.push('/find');
            },
            showAsideMenu(flag) {
                this.$store.commit('showAsideMenu', flag);
            }
        }

    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .header {
        background-color: #B72712;
        color: white;
        flex: 1;
        width: 100%;
        .name {
            display: flex;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, .2);
            span.func {
                flex: 1;
                position: relative;
                i {
                    display: inline-block;
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    left: 15px;
                    bottom: 0;
                    background: url(./func.svg) no-repeat;
                    background-size: contain;
                    cursor: pointer;
                }
            }
            p {
                flex: 1;
            }
            span.search {
                position: relative;
                flex: 1;
                i {
                    display: inline-block;
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    right: 15px;
                    bottom: 0;
                    background: url(./search.svg) no-repeat;
                    background-size: contain;
                    cursor: pointer;
                }
            }

        }
        .tab{
            display: flex;
            border-bottom: 1px solid #9E9E9E;
            a {
                display: inline-block;
                width: 50%;
            }

            a::after {
                background-color: rgba(255, 255, 255, .2);
                height: 3px;
                bottom: -2px;
            }
            .item {
                display: inline-block;
                flex: 1;
                text-align: center;
                padding-top: 10px;
                padding-bottom: 10px;
            }
        }
        .link {
            font-weight: bold;
            color: #BDBDBD;
            border-bottom: 1px solid #E0F2F1;
        }
    }
</style>