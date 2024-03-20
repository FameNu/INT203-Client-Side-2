import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import TodoManager from '../components/wk8/TodoManager.vue';
const history = createWebHistory();
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    redirect: '/about',
  },
  {
    path: '/:notfound(.*)',
    component: NotFound,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoManager,
  },
];
const router = createRouter({
  history,
  routes,
  linkActiveClass: 'text-purple-800',
});
export default router;
