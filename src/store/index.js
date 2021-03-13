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
        userData: null,
        timeline: null
    },
    mutations: {
        setCookie(state, response) {
            state.cookie = response;
        },
        popPost(state, id) {
            let post = state.timeline.findIndex( (item) => item.id === id )
            state.timeline.splice(post, 1)
        },
        appendPost(state, id) {
            let post = state.timeline.findIndex( (item) => item.id === id )
            state.timeline.splice(post, 1)
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
        },
        setTimeline(state, timeline) {
            state.timeline = timeline.data;
            console.log(state.timeline)
        }
    },
    actions: {
        async generateCookie({commit, state}) {
            try {
                const cookie = await axios.get(`${state.API}/sanctum/csrf-cookie`)
                commit('setCookie', cookie)
            } catch (error) {
                console.log(error);
            }
        },
        async register({state}, credentials) {
            try {
                await axios.post(`${state.API}/api/register`, credentials)
            } catch (error) {
                console.log(error);
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
                let user = await axios.get(`${state.API}/api/user`)
                commit('setUser', user.data);
            } catch (error) {
                console.log(error)
            }
        },
        async addPost({state}, body) {
            try {
                console.log(body)
                await axios.post(`${state.API}/api/tweets/add`, { body })
            } catch (error) {
                console.log(error)
            }
        },
        async deletePost({state, commit}, id) {
            try {
                await axios.delete(`${state.API}/api/tweets/${id}/delete`)
                commit('popPost', id)
            } catch (error) {
                console.log(error)
            }
        },
        async editPost({state}, tweet) {
            try {
                console.log(tweet)
                await axios.put(`${state.API}/api/tweets/${tweet.tweet.id}/update`, {id: tweet.tweet.id, body: tweet.body})
                // commit('editPost', )
            } catch (error) {
                console.log(error)
            }
        },
        async generateTimeline({state, commit}) {
            try {
               let timeline = await axios.get(`${state.API}/api/tweets/`)
                commit('setTimeline', timeline)
            } catch (error) {
                console.log(error)
            }
        }
    },
})
