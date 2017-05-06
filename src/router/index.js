/**
 * Created by kk on 2017/5/6.
 */

import Vue from 'vue'
import Router from 'vue-router'
import MusicList from '../components/musiclist/MusicList.vue'
import Find from '../components/Find/Find.vue'
import Social from '../components/Social/Social.vue'


Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    routes:[
        {
            path: '/music-list',
            name: 'MusicList',
            component: MusicList
        },

        {
            path: '/find',
            name: 'Find',
            component: Find
        },
        {
            path: '/social',
            name: 'Social',
            component: Social
        }
    ]
})
