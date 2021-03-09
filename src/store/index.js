import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        API: 'http://localhost:8000',
        cookie: '',
        Logged: false,
        User: {
            type: Object
        }
    },
    mutations: {
        setCookie(state, response) {
            state.cookie = response;
        },
        setLoginStatus(state) {
          state.Logged = true;
        },
        setLogoutStatus(state) {
            state.Logged = false;
        },
        setUser(state, userData) {
            state.User = userData;
        },
        clearUserData(state) {
            state.User = {};
        }
    },
    actions: {
        getCookie({commit, state}) {
            axios.get(`${state.API}/sanctum/csrf-cookie`)
                .then(response => { commit('setCookie', response)})
        },
        getUserData({commit, state}) {
            axios.get(`${state.API}/user`)
                .then(response => { commit('setUser', response)})
        }
    }
})
