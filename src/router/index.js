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

import Module1_1 from '../views/Modules/Module1/Module1_1.vue';
import Module1_2 from '../views/Modules/Module1/Module1_2.vue';
import Module1_3 from '../views/Modules/Module1/Module1_3.vue';
import Module1_4 from '../views/Modules/Module1/Module1_4.vue';

import Module2_1 from '../views/Modules/Module2/Module2_1.vue';
import Module2_2 from '../views/Modules/Module2/Module2_2.vue';
import Module2_3 from '../views/Modules/Module2/Module2_3.vue';
import Module2_4 from '../views/Modules/Module2/Module2_4.vue';

import Module3_1 from '../views/Modules/Module3/Module3_1.vue';
import Module3_2 from '../views/Modules/Module3/Module3_2.vue';
import Module3_3 from '../views/Modules/Module3/Module3_3.vue';
import Module3_4 from '../views/Modules/Module3/Module3_4.vue';

import Module4_1 from '../views/Modules/Module4/Module4_1.vue';
import Module4_2 from '../views/Modules/Module4/Module4_2.vue';
import Module4_3 from '../views/Modules/Module4/Module4_3.vue';
import Module4_4 from '../views/Modules/Module4/Module4_4.vue';

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
      children: [
        {
          path: '/module1',
          name: 'module1',
          component: Module_1,
        },
        {
          path: '/module1/unit1',
          name: 'module1_1',
          component: Module1_1,
        },
        {
          path: '/module1/unit2',
          name: 'module1_2',
          component: Module1_2,
        },
        {
          path: '/module1/unit3',
          name: 'module1_3',
          component: Module1_3,
        },
        {
          path: '/module1/unit4',
          name: 'module1_4',
          component: Module1_4,
        },
        {
          path: '/module2',
          name: 'module2',
          component: Module_2,
        },
        {
          path: '/module2/unit1',
          name: 'module2_1',
          component: Module2_1,
        },
        {
          path: '/module2/unit2',
          name: 'module2_2',
          component: Module2_2,
        },
        {
          path: '/module2/unit3',
          name: 'module2_3',
          component: Module2_3,
        },
        {
          path: '/module2/unit4',
          name: 'module2_4',
          component: Module2_4,
        },
        {
          path: '/module3',
          name: 'module3',
          component: Module_3,
        },
        {
          path: '/module3/unit1',
          name: 'module3_1',
          component: Module3_1,
        },
        {
          path: '/module3/unit2',
          name: 'module3_2',
          component: Module3_2,
        },
        {
          path: '/module3/unit3',
          name: 'module3_3',
          component: Module3_3,
        },
        {
          path: '/module3/unit4',
          name: 'module3_4',
          component: Module3_4,
        },
        {
          path: '/module4',
          name: 'module4',
          component: Module_4,
        },
        {
          path: '/module4/unit1',
          name: 'module4_1',
          component: Module4_1,
        },
        {
          path: '/module4/unit2',
          name: 'module4_2',
          component: Module4_2,
        },
        {
          path: '/module4/unit3',
          name: 'module4_3',
          component: Module4_3,
        },
        {
          path: '/module4/unit4',
          name: 'module4_4',
          component: Module4_4,
        },
      ]
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


  ]
})

export default router
