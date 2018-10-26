import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'purecss'
import 'purecss/build/grids-responsive.css'
import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
