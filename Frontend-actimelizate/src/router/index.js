import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/News'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router