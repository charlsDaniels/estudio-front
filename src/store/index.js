import Vue from 'vue'
import Vuex from 'vuex'

import { axios } from '@/plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },

  mutations: {
    setToken (state, data) {
      state.token = data.token
      localStorage.setItem('token', data.token)
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
    },

    clearToken (state) {
      localStorage.removeItem('token')
      state.token = null
    }
  },

  actions: {
    login ({ commit }, credentials) {
      return axios
        .post('/auth/login_check', credentials)
        .then(({ data }) => {
          commit('setToken', data)
        })
    },

    logout ({ commit }) {
      // axios
      //   .post('/auth/logout')
      //   .then(() => {
          commit('clearToken')
        // })
    }
  },

  getters : {
    isLogged: state => !!state.token
  }
})
