import Vue from 'vue'
import App from './App.vue'
import router from './controller/router.js'

import './assets/styles/main.scss'
import './controller/vue-mq.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
