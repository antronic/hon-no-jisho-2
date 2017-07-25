import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/Main';
import Home from '@/pages/Main/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          component: Home,
        },
        {
          path: 'entries',
          component: Home,
        },
        {
          path: 'collections',
          component: Home,
        },
      ],
    },
  ],
});
