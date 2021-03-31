import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import globalFilters from './filters/globalFilters';

Vue.config.productionTip = false;

Vue.filter('toUpperCase', globalFilters.toUpperCase);
Vue.filter('date', globalFilters.date);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
