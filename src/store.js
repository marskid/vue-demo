import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API = axios.create({
  baseURL: 'https://json-api-marskid.now.sh'
})

const VuexPlugin = (store) => {
  store.dispatch('fetchDevice')
}

export default new Vuex.Store({
  plugins: [ VuexPlugin ],
  state: {
    isLoading: true,
    devices: []
  },
  mutations: {
    loading(state, loading = false) {
      state.isLoading = loading
    },
    devices(state, devices) {
      state.devices = devices
    }
  },
  actions: {
    fetchDevice(context) {
      context.commit('loading', true)
      return API.get('/api/v1/devices').then((res) => {
        context.commit('loading', false)
        context.commit('devices', res.data.devices)
      }).catch((error) => {
        context.commit('loading', 'Netwrok Error: ' + error)
      })
    }
  }
})
