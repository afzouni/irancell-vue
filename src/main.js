import Vue from 'vue'
import App from './App.vue'
import './plugins'

import './assets/fonts.css'
import './assets/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
