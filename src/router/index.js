import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CourseView from '../views/CourseView.vue';
import AboutView from '../views/AboutView.vue';
import Newsletter from '../views/Newsletter.vue';
//modules
import Module_1 from '../views/Modules/Module1/Module1.vue';
import Module_2 from '../views/Modules/Module2/Module2.vue';
import Module_3 from '../views/Modules/Module3/Module3.vue';
import Module_4 from '../views/Modules/Module4/Module4.vue';
import Module1_1 from '@/views/Modules/Module1/Module1_1.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },{
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/modules',
      name: 'modules',
      component: CourseView,
    },
    {
      path: '/newsletter',
      name: 'newsletter',
      component: Newsletter,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/module1',
      name: 'module1',
      component: Module_1,
    },
    {
      path: '/module2',
      name: 'module2',
      component: Module_2,
    },
    {
      path: '/module3',
      name: 'module3',
      component: Module_3,
    },
    {
      path: '/module4',
      name: 'module4',
      component: Module_4,
    },
    {
      path: '/module1_1',
      name: 'module1_1',
      component: Module1_1,
    }
  ]
})

export default router
