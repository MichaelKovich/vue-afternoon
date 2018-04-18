import Vue from 'vue';
import Router from 'vue-router';

// import HelloWorld from './components/HelloWorld';
// import About from './components/About';
import ToDo from './components/ToDo';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: ToDo
    }
  ]
});

export default router;
