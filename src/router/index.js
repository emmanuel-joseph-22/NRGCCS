import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CourseView from '../views/CourseView.vue';
import AboutView from '../views/AboutView.vue';
import Newsletter from '../views/Newsletter.vue';
// modules
import Module_1 from '../views/Modules/Module1/Module1.vue';
import Module_2 from '../views/Modules/Module2/Module2.vue';
import Module_3 from '../views/Modules/Module3/Module3.vue';
import Module_4 from '../views/Modules/Module4/Module4.vue';

// units
import Module1_1 from '../views/Modules/Module1/Unit1View.vue';
import Module1_2 from '../views/Modules/Module1/Unit2View.vue';
import Module1_3 from '../views/Modules/Module1/Unit3View.vue';

import Module2_1 from '../views/Modules/Module2/Unit1View.vue';
import Module2_2 from '../views/Modules/Module2/Unit2View.vue';
import Module2_3 from '../views/Modules/Module2/Unit3View.vue';

import Module3_1 from '../views/Modules/Module3/Unit1View.vue';
import Module3_2 from '../views/Modules/Module3/Unit2View.vue';
import Module3_3 from '../views/Modules/Module3/Unit3View.vue';

import Module4_1 from '../views/Modules/Module4/Unit1View.vue';
import Module4_2 from '../views/Modules/Module4/Unit2View.vue';
import Module4_3 from '../views/Modules/Module4/Unit3View.vue';

//lessons
import Mod1_Unit1_Lesson1 from '../views/Modules/Module1/Unit1/Lesson1.vue';
import Mod1_Unit1_Lesson2 from '../views/Modules/Module1/Unit1/Lesson2.vue';
import Mod1_Unit1_Lesson3 from '../views/Modules/Module1/Unit1/Lesson3.vue';
import Mod1_Unit1_Lesson4 from '../views/Modules/Module1/Unit1/Lesson4.vue';
import Mod1_Unit1_Lesson5 from '../views/Modules/Module1/Unit1/Lesson5.vue';

import Mod1_Unit2_Lesson1 from '../views/Modules/Module1/Unit2/Lesson1.vue';
import Mod1_Unit2_Lesson2 from '../views/Modules/Module1/Unit2/Lesson2.vue';
import Mod1_Unit2_Lesson3 from '../views/Modules/Module1/Unit2/Lesson3.vue';
import Mod1_Unit2_Lesson4 from '../views/Modules/Module1/Unit2/Lesson4.vue';
import Mod1_Unit2_Lesson5 from '../views/Modules/Module1/Unit2/Lesson5.vue';

import Mod1_Unit3_Lesson1 from '../views/Modules/Module1/Unit3/Lesson1.vue';
import Mod1_Unit3_Lesson2 from '../views/Modules/Module1/Unit3/Lesson2.vue';
import Mod1_Unit3_Lesson3 from '../views/Modules/Module1/Unit3/Lesson3.vue';
import Mod1_Unit3_Lesson4 from '../views/Modules/Module1/Unit3/Lesson4.vue';
import Mod1_Unit3_Lesson5 from '../views/Modules/Module1/Unit3/Lesson5.vue';

import Mod2_Unit1_Lesson1 from '../views/Modules/Module2/Unit1/Lesson1.vue';
import Mod2_Unit1_Lesson2 from '../views/Modules/Module2/Unit1/Lesson2.vue';
import Mod2_Unit1_Lesson3 from '../views/Modules/Module2/Unit1/Lesson3.vue';
import Mod2_Unit1_Lesson4 from '../views/Modules/Module2/Unit1/Lesson4.vue';
import Mod2_Unit1_Lesson5 from '../views/Modules/Module2/Unit1/Lesson5.vue';

import Mod2_Unit2_Lesson1 from '../views/Modules/Module2/Unit2/Lesson1.vue';
import Mod2_Unit2_Lesson2 from '../views/Modules/Module2/Unit2/Lesson2.vue';
import Mod2_Unit2_Lesson3 from '../views/Modules/Module2/Unit2/Lesson3.vue';
import Mod2_Unit2_Lesson4 from '../views/Modules/Module2/Unit2/Lesson4.vue';
import Mod2_Unit2_Lesson5 from '../views/Modules/Module2/Unit2/Lesson5.vue';

import Mod2_Unit3_Lesson1 from '../views/Modules/Module2/Unit3/Lesson1.vue';
import Mod2_Unit3_Lesson2 from '../views/Modules/Module2/Unit3/Lesson2.vue';
import Mod2_Unit3_Lesson3 from '../views/Modules/Module2/Unit3/Lesson3.vue';
import Mod2_Unit3_Lesson4 from '../views/Modules/Module2/Unit3/Lesson4.vue';
import Mod2_Unit3_Lesson5 from '../views/Modules/Module2/Unit3/Lesson5.vue';

import Mod3_Unit1_Lesson1 from '../views/Modules/Module3/Unit1/Lesson1.vue';
import Mod3_Unit1_Lesson2 from '../views/Modules/Module3/Unit1/Lesson2.vue';
import Mod3_Unit1_Lesson3 from '../views/Modules/Module3/Unit1/Lesson3.vue';
import Mod3_Unit1_Lesson4 from '../views/Modules/Module3/Unit1/Lesson4.vue';
import Mod3_Unit1_Lesson5 from '../views/Modules/Module3/Unit1/Lesson5.vue';

import Mod3_Unit2_Lesson1 from '../views/Modules/Module3/Unit2/Lesson1.vue';
import Mod3_Unit2_Lesson2 from '../views/Modules/Module3/Unit2/Lesson2.vue';
import Mod3_Unit2_Lesson3 from '../views/Modules/Module3/Unit2/Lesson3.vue';
import Mod3_Unit2_Lesson4 from '../views/Modules/Module3/Unit2/Lesson4.vue';
import Mod3_Unit2_Lesson5 from '../views/Modules/Module3/Unit2/Lesson5.vue';

import Mod3_Unit3_Lesson1 from '../views/Modules/Module3/Unit3/Lesson1.vue';
import Mod3_Unit3_Lesson2 from '../views/Modules/Module3/Unit3/Lesson2.vue';
import Mod3_Unit3_Lesson3 from '../views/Modules/Module3/Unit3/Lesson3.vue';
import Mod3_Unit3_Lesson4 from '../views/Modules/Module3/Unit3/Lesson4.vue';
import Mod3_Unit3_Lesson5 from '../views/Modules/Module3/Unit3/Lesson5.vue';

import Mod4_Unit1_Lesson1 from '../views/Modules/Module4/Unit1/Lesson1.vue';
import Mod4_Unit1_Lesson2 from '../views/Modules/Module4/Unit1/Lesson2.vue';
import Mod4_Unit1_Lesson3 from '../views/Modules/Module4/Unit1/Lesson3.vue';
import Mod4_Unit1_Lesson4 from '../views/Modules/Module4/Unit1/Lesson4.vue';
import Mod4_Unit1_Lesson5 from '../views/Modules/Module4/Unit1/Lesson5.vue';

import Mod4_Unit2_Lesson1 from '../views/Modules/Module4/Unit2/Lesson1.vue';
import Mod4_Unit2_Lesson2 from '../views/Modules/Module4/Unit2/Lesson2.vue';
import Mod4_Unit2_Lesson3 from '../views/Modules/Module4/Unit2/Lesson3.vue';
import Mod4_Unit2_Lesson4 from '../views/Modules/Module4/Unit2/Lesson4.vue';
import Mod4_Unit2_Lesson5 from '../views/Modules/Module4/Unit2/Lesson5.vue';

import Mod4_Unit3_Lesson1 from '../views/Modules/Module4/Unit3/Lesson1.vue';
import Mod4_Unit3_Lesson2 from '../views/Modules/Module4/Unit3/Lesson2.vue';
import Mod4_Unit3_Lesson3 from '../views/Modules/Module4/Unit3/Lesson3.vue';
import Mod4_Unit3_Lesson4 from '../views/Modules/Module4/Unit3/Lesson4.vue';
import Mod4_Unit3_Lesson5 from '../views/Modules/Module4/Unit3/Lesson5.vue';

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
        // m1
        // m1 u1 lessons
        {
          path: '/module1/unit1/lesson1',
          name: 'Module1_Unit1_Lesson1',
          component: Mod1_Unit1_Lesson1
        },
        {
          path: '/module1/unit1/lesson2',
          name: 'Module1_Unit1_Lesson2',
          component: Mod1_Unit1_Lesson2
        },
        {
          path: '/module1/unit1/lesson3',
          name: 'Module1_Unit1_Lesson3',
          component: Mod1_Unit1_Lesson3
        },
        {
          path: '/module1/unit1/lesson4',
          name: 'Module1_Unit1_Lesson4',
          component: Mod1_Unit1_Lesson4
        },
        {
          path: '/module1/unit1/lesson5',
          name: 'Module1_Unit1_Lesson5',
          component: Mod1_Unit1_Lesson5
        },
        // m1 u2 lessons
        {
          path: '/module1/unit2/lesson1',
          name: 'Module1_Unit2_Lesson1',
          component: Mod1_Unit2_Lesson1
        },
        {
          path: '/module1/unit2/lesson2',
          name: 'Module1_Unit2_Lesson2',
          component: Mod1_Unit2_Lesson2
        },
        {
          path: '/module1/unit2/lesson3',
          name: 'Module1_Unit2_Lesson3',
          component: Mod1_Unit2_Lesson3
        },
        {
          path: '/module1/unit2/lesson4',
          name: 'Module1_Unit2_Lesson4',
          component: Mod1_Unit2_Lesson4
        },
        {
          path: '/module1/unit2/lesson5',
          name: 'Module1_Unit2_Lesson5',
          component: Mod1_Unit2_Lesson5
        },
        // m1 u3 lessons
        {
          path: '/module1/unit3/lesson1',
          name: 'Module1_Unit3_Lesson1',
          component: Mod1_Unit3_Lesson1
        },
        {
          path: '/module1/unit3/lesson2',
          name: 'Module1_Unit3_Lesson2',
          component: Mod1_Unit3_Lesson2
        },
        {
          path: '/module1/unit3/lesson3',
          name: 'Module1_Unit3_Lesson3',
          component: Mod1_Unit3_Lesson3
        },
        {
          path: '/module1/unit3/lesson4',
          name: 'Module1_Unit3_Lesson4',
          component: Mod1_Unit3_Lesson4
        },
        {
          path: '/module1/unit3/lesson5',
          name: 'Module1_Unit3_Lesson5',
          component: Mod1_Unit3_Lesson5
        },

        // m2
        // m2 u1 lessons 
        {
          path: '/module2/unit1/lesson1',
          name: 'Module2_Unit1_Lesson1',
          component: Mod2_Unit1_Lesson1
        },
        {
          path: '/module2/unit1/lesson2',
          name: 'Module2_Unit1_Lesson2',
          component: Mod2_Unit1_Lesson2
        },
        {
          path: '/module2/unit1/lesson3',
          name: 'Module2_Unit1_Lesson3',
          component: Mod2_Unit1_Lesson3
        },
        {
          path: '/module2/unit1/lesson4',
          name: 'Module2_Unit1_Lesson4',
          component: Mod2_Unit1_Lesson4
        },
        {
          path: '/module2/unit1/lesson5',
          name: 'Module2_Unit1_Lesson5',
          component: Mod2_Unit1_Lesson5
        },
        // m2 u2 lessons
        {
          path: '/module2/unit2/lesson1',
          name: 'Module2_Unit2_Lesson1',
          component: Mod2_Unit2_Lesson1
        },
        {
          path: '/module2/unit2/lesson2',
          name: 'Module2_Unit2_Lesson2',
          component: Mod2_Unit2_Lesson2
        },
        {
          path: '/module2/unit2/lesson3',
          name: 'Module2_Unit2_Lesson3',
          component: Mod2_Unit2_Lesson3
        },
        {
          path: '/module2/unit2/lesson4',
          name: 'Module2_Unit2_Lesson4',
          component: Mod2_Unit2_Lesson4
        },
        {
          path: '/module2/unit2/lesson5',
          name: 'Module2_Unit2_Lesson5',
          component: Mod2_Unit2_Lesson5
        },
        // m2 u3 lessons
        {
          path: '/module2/unit3/lesson1',
          name: 'Module2_Unit3_Lesson1',
          component: Mod2_Unit3_Lesson1
        },
        {
          path: '/module2/unit3/lesson2',
          name: 'Module2_Unit3_Lesson2',
          component: Mod2_Unit3_Lesson2
        },
        {
          path: '/module2/unit3/lesson3',
          name: 'Module2_Unit3_Lesson3',
          component: Mod2_Unit3_Lesson3
        },
        {
          path: '/module2/unit3/lesson4',
          name: 'Module2_Unit3_Lesson4',
          component: Mod2_Unit3_Lesson4
        },
        {
          path: '/module2/unit3/lesson5',
          name: 'Module2_Unit3_Lesson5',
          component: Mod2_Unit3_Lesson5
        },
        // m3 
        // m3 u1 lessons
        {
          path: '/module3/unit1/lesson1',
          name: 'Module3_Unit1_Lesson1',
          component: Mod3_Unit1_Lesson1
        },
        {
          path: '/module3/unit1/lesson2',
          name: 'Module3_Unit1_Lesson2',
          component: Mod3_Unit1_Lesson2
        },
        {
          path: '/module3/unit1/lesson3',
          name: 'Module3_Unit1_Lesson3',
          component: Mod3_Unit1_Lesson3
        },
        {
          path: '/module3/unit1/lesson4',
          name: 'Module3_Unit1_Lesson4',
          component: Mod3_Unit1_Lesson4
        },
        {
          path: '/module3/unit1/lesson5',
          name: 'Module3_Unit1_Lesson5',
          component: Mod3_Unit1_Lesson5
        },
        // m3 u2 lessons
        {
          path: '/module3/unit2/lesson1',
          name: 'Module3_Unit2_Lesson1',
          component: Mod3_Unit2_Lesson1
        },
        {
          path: '/module3/unit2/lesson2',
          name: 'Module3_Unit2_Lesson2',
          component: Mod3_Unit2_Lesson2
        },
        {
          path: '/module3/unit2/lesson3',
          name: 'Module3_Unit2_Lesson3',
          component: Mod3_Unit2_Lesson3
        },
        {
          path: '/module3/unit2/lesson4',
          name: 'Module3_Unit2_Lesson4',
          component: Mod3_Unit2_Lesson4
        },
        {
          path: '/module3/unit2/lesson5',
          name: 'Module3_Unit2_Lesson5',
          component: Mod3_Unit2_Lesson5
        },
        // m3 u3 lessons
        {
          path: '/module3/unit3/lesson1',
          name: 'Module3_Unit3_Lesson1',
          component: Mod3_Unit3_Lesson1
        },
        {
          path: '/module3/unit3/lesson2',
          name: 'Module3_Unit3_Lesson2',
          component: Mod3_Unit3_Lesson2
        },
        {
          path: '/module3/unit3/lesson3',
          name: 'Module3_Unit3_Lesson3',
          component: Mod3_Unit3_Lesson3
        },
        {
          path: '/module3/unit3/lesson4',
          name: 'Module3_Unit3_Lesson4',
          component: Mod3_Unit3_Lesson4
        },
        {
          path: '/module3/unit3/lesson5',
          name: 'Module3_Unit3_Lesson5',
          component: Mod3_Unit3_Lesson5
        },
        // m4
        // m4 u1 lessons
        {
          path: '/module4/unit1/lesson1',
          name: 'Module4_Unit1_Lesson1',
          component: Mod4_Unit1_Lesson1
        },
        {
          path: '/module4/unit1/lesson2',
          name: 'Module4_Unit1_Lesson2',
          component: Mod4_Unit1_Lesson2
        },
        {
          path: '/module4/unit1/lesson3',
          name: 'Module4_Unit1_Lesson3',
          component: Mod4_Unit1_Lesson3
        },
        {
          path: '/module4/unit1/lesson4',
          name: 'Module4_Unit1_Lesson4',
          component: Mod4_Unit1_Lesson4
        },
        {
          path: '/module4/unit1/lesson5',
          name: 'Module4_Unit1_Lesson5',
          component: Mod4_Unit1_Lesson5
        },
        // m1 u2 lessons
        {
          path: '/module4/unit2/lesson1',
          name: 'Module4_Unit2_Lesson1',
          component: Mod4_Unit2_Lesson1
        },
        {
          path: '/module4/unit2/lesson2',
          name: 'Module4_Unit2_Lesson2',
          component: Mod4_Unit2_Lesson2
        },
        {
          path: '/module4/unit2/lesson3',
          name: 'Module4_Unit2_Lesson3',
          component: Mod4_Unit2_Lesson3
        },
        {
          path: '/module4/unit2/lesson4',
          name: 'Module4_Unit2_Lesson4',
          component: Mod4_Unit2_Lesson4
        },
        {
          path: '/module4/unit2/lesson5',
          name: 'Module4_Unit2_Lesson5',
          component: Mod4_Unit2_Lesson5
        },
        // m1 u3 lessons
        {
          path: '/module4/unit3/lesson1',
          name: 'Module4_Unit3_Lesson1',
          component: Mod4_Unit3_Lesson1
        },
        {
          path: '/module4/unit3/lesson2',
          name: 'Module4_Unit3_Lesson2',
          component: Mod4_Unit3_Lesson2
        },
        {
          path: '/module4/unit3/lesson3',
          name: 'Module4_Unit3_Lesson3',
          component: Mod4_Unit3_Lesson3
        },
        {
          path: '/module4/unit3/lesson4',
          name: 'Module4_Unit3_Lesson4',
          component: Mod4_Unit3_Lesson4
        },
        {
          path: '/module4/unit3/lesson5',
          name: 'Module4_Unit3_Lesson5',
          component: Mod4_Unit3_Lesson5
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
