import Vue from 'vue';
import VueNumberFormat from 'vue-number-format';

Vue.use(VueNumberFormat, {
  prefix: "",
  suffix: "",
  decimal: ",",
  thousand: ",",
  precision: 0,
  acceptNegative: true,
  isInteger: false,
})
