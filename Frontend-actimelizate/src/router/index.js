import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/News'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/news',
        name: 'News',
        component: News
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router