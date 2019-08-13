import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Sets from './views/Sets.vue';
import store from './store.js';

Vue.use(Router);

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/sets',
      name: 'sets',
      component: Sets
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
});
router.beforeEach((to, from, next) => {
  var currentPathName = to.matched[0].components.default.name;
  store.dispatch('SetCurrentViewName', currentPathName );

  next();
});
export default router;