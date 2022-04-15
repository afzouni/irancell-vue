import Vue from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import VueNumberFormat from 'vue-number-format'

import './assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(SmartTable)
Vue.use(VueNumberFormat, {
  prefix: "",
  suffix: "",
  decimal: ",",
  thousand: ",",
  precision: 0,
  acceptNegative: true,
  isInteger: false,
})
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

new Vue({
  render: h => h(App),
}).$mount('#app')
