import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import AbandonedList from '@/components/AbandonedList';
import Home from '@/components/Home';
import MyPets from '@/components/MyPets';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requerAutenticacao: true },
      children: [
        {
          path: '/abandoned',
          name: 'abandonedlist',
          component: AbandonedList,
          meta: { requerAutenticacao: true },
        },
        {
          path: '/mypets',
          name: 'mypetslist',
          component: MyPets,
          meta: { requerAutenticacao: true },
        },
      ],
    },
  ],
});

const autenticateGuard = (to, from, next) => {
  if (to.name === 'Login' && localStorage.getItem('token') !== '') {
    next({ name: 'home' });
  } else {
    next();
  }
};

router.beforeEach((to, from, next) => {
  autenticateGuard(to, from, next);
});

export default router;
