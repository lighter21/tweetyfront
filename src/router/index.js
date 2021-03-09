import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/auth/Login";
import Index from "@/views/Index";
import Register from "@/views/auth/Register";
import Home from "@/views/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]

const router = new VueRouter({
    routes
})

export default router
