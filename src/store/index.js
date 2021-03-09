import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        API: 'http://localhost:8000',
        cookie: '',
        logged: false,
        userData: null
    },
    mutations: {
        setCookie(state, response) {
            state.cookie = response;
        },
        setLoginStatus(state) {
            state.logged = true;
        },
        setLogoutStatus(state) {
            state.logged = false;
        },
        setUser(state, userData) {
            state.userData = userData;
        },
        clearUserData(state) {
            state.userData = {};
        }
    },
    actions: {
        async getCookie({commit, state}) {
            try {
                const cookie = await axios.get(`${state.API}/sanctum/csrf-cookie`)
                commit('setCookie', cookie)
            } catch (error) {
                console.log(error);
            }
        },
        async getUserData({commit, state}) {
            try {
                const user = await axios.get(`${state.API}/user`)
                commit('setUser', user)
            } catch (error) {
                console.log(error)
            }
        },
        async login({commit, state}, credentials) {
            try {
                await axios.post(`${state.API}/api/login`, credentials)
                commit('setLoginStatus');
            } catch (error) {
                console.log(error);
            }
        },
        async logout({state, commit}) {
            try {
                await axios.post(`${state.API}/api/logout`)
                commit('clearUserData');
                commit('setLogoutStatus');
            } catch (error) {
                console.log(error);
            }
        },
        async findUser({state, commit}) {
            try {
                const user = await axios.get(`${state.API}/api/user`)
                commit('setUser', user.data);
                console.log(user.data);
            } catch (error) {
                console.log(error)
            }

        }
    }
})
