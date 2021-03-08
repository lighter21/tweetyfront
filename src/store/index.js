import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        API: 'http://localhost:8001',
        cookie: ''
    },
    mutations: {
        setCookie(state, response) {
            state.cookie = response;
        }
    },
    actions: {
        getCookie({commit, state}) {
            axios.get(`${state.API}/sanctum/csrf-cookie`)
                .then(response => { commit('setCookie', response)})
        }
    }
})
