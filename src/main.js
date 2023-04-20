import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
/* import data from './constants';
import myFunc from './utils';

myFunc(data.firstMessage);
myFunc(data.secondMessage); */
/* alert('Привет Vue'); */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
