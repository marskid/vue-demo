import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    devices: [
        {index: 1, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 2, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 0},
        {index: 3, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 4, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 0},
        {index: 5, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 6, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 0},
        {index: 7, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 8, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 0},
        {index: 9, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 11, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 0},
        {index: 12, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 13, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 0},
        {index: 14, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 15, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 0},
        {index: 16, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 17, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 0},
        {index: 18, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 19, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 0},
        {index: 20, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 21, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 22, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 23, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 24, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 25, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 26, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 27, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 28, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 29, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 30, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1},
        {index: 31, name: 'GPS-001', gateway: 'Gateway', adapter: 'AD-007', state: 'connected', addr: '127.0.0.1', memory: '23', download: 'manual', lastcrontime: '2018-10-26', enable: 1}
    ]
  },
  mutations: {

  },
  actions: {

  }
})
