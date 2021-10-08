import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session';
import Home from '../views/Home.vue';
import Feed from '../views/Feed.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed, //this requires the import at the top of the index.js
    //meta: {requiresLogin: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue') //this imports but doesnt require the import at the top of this .js
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to,from,next) => {
  if(to.meta.requiresLogin && !Session.user){
    next('/login');

  }else{
    next();
  }
  
})

export default router
