import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/Dashboard'
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "Dashboard" */ './views/Dashboard.vue')
    },
    {
      path: '/Map',
      name: 'Map',
      component: () => import(/* webpackChunkName: "Map" */ './views/Map.vue')
    },
    {
      path: '/SystemConfiguration',
      name: 'System Configuration',
      component: () => import(/* webpackChunkName: "SystemConfiguration" */ './views/SystemConfiguration.vue')
    },
    {
      path: '/DeviceManagement',
      name: 'Device Management',
      component: () => import(/* webpackChunkName: "DeviceManagement" */ './views/DeviceManagement.vue')
    }
  ]
})
