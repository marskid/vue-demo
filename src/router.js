import Vue from 'vue'
import Router from 'vue-router'
import Loading from './components/Loading.vue'

Vue.use(Router)

const AsyncLoad = component => new Promise((resolve) => {
  const load = () => ({ component, loading: Loading })
  resolve({
    functional: true,
    name: 'AsyncLoad',
    render: h => h(load)
  })
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/Dashboard'
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => AsyncLoad(import(/* webpackChunkName: "Dashboard" */ './views/Dashboard.vue'))
    },
    {
      path: '/Map',
      name: 'Map',
      component: () => AsyncLoad(import(/* webpackChunkName: "Map" */ './views/Map.vue'))
    },
    {
      path: '/SystemConfiguration',
      name: 'System Configuration',
      component: () => AsyncLoad(import(/* webpackChunkName: "SystemConfiguration" */ './views/SystemConfiguration.vue'))
    },
    {
      path: '/DeviceManagement',
      name: 'Device Management',
      component: () => AsyncLoad(import(/* webpackChunkName: "DeviceManagement" */ './views/DeviceManagement.vue'))
    }
  ]
})