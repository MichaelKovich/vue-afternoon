import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from './components/HelloWorld';
import About from './components/About';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/about',
      component: About
    }
  ]
});

export default router;
