import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/auth/Login";
import Index from "@/views/Index";
import Register from "@/views/auth/Register";
import Dashboard from "@/views/Dashboard";
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {authOnly: true}
    },
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {guestOnly: true}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {guestOnly: true}
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {guestOnly: true}
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.state.logged) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.state.logged) {
            next({
                path: '/dashboard',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

export default router
