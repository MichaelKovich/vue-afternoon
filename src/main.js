import Vue from 'vue';
import router from './routes';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data() {
    return {
      items: []
    };
  },
  router,
  render: h => h(App)
});
