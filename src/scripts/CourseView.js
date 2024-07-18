import MainView from "../views/MainView.vue";
import CourseList from "../components/course_list.vue";

import Module1 from "../views/Modules/Module1/Module1.vue";
import Module1_1 from "../views/Modules/Module1/Module1_1.vue";
import Module1_2 from "../views/Modules/Module1/Module1_2.vue";
import Module2 from "../views/Modules/Module2/Module2.vue";
import Module2_1 from "../views/Modules/Module2/Module2_1.vue";
import Module2_2 from "../views/Modules/Module2/Module2_2.vue";
import Module3 from "../views/Modules/Module3/Module3.vue";
import Module3_1 from "../views/Modules/Module3/Module3_1.vue";
import Module3_2 from "../views/Modules/Module3/Module3_2.vue";
import Module4 from "../views/Modules/Module4/Module4.vue";
import Module4_1 from "../views/Modules/Module4/Module4_1.vue";
import Module4_2 from "../views/Modules/Module4/Module4_2.vue";


export default {
    // data() {
    //     return {
    //         modules: [
    //             {
    //                 name: 'Module1',
    //                 component: Module1,
    //                 displayName: 'Module 1',
    //                 active: false,
    //                 submodules: [
    //                     { name: 'Submodule1', component: Module1, displayName: 'Submodule 1' },
    //                     { name: 'Submodule2', component: Module1, displayName: 'Submodule 2' }
    //                 ]
    //             },
    //             {
    //                 name: 'Module2',
    //                 component: Module2,
    //                 displayName: 'Module 2',
    //                 active: false,
    //                 submodules: [
    //                     { name: 'Submodule3', component: Module2, displayName: 'Submodule 3' },
    //                     { name: 'Submodule4', component: Module2, displayName: 'Submodule 4' }
    //                 ]
    //             },
    //             {
    //                 name: 'Module3',
    //                 component: Module3,
    //                 displayName: 'Module 3',
    //                 active: false,
    //                 submodules: [
    //                     { name: 'Submodule5', component: Module3, displayName: 'Submodule 5' },
    //                     { name: 'Submodule6', component: Module3, displayName: 'Submodule 6' }
    //                 ]
    //             },
    //             {
    //                 name: 'Module4',
    //                 component: Module4,
    //                 displayName: 'Module 4',
    //                 active: false,
    //                 submodules: [
    //                     { name: 'Submodule7', component: Module4, displayName: 'Submodule 7' },
    //                     { name: 'Submodule8', component: Module4, displayName: 'Submodule 8' }
    //                 ]
    //             },
    //         ],
    //         currentSubComponent: null
    //     };
    // },
    data() {
        return {
            modules: [
                {
                    name: 'Module1',
                    component: Module1,
                    displayName: 'Module 1',
                    active: false,
                    submodules: [
                        { name: 'Submodule1.1', component: Module1_1, displayName: 'Submodule 1.1' },
                        { name: 'Submodule1.2', component: Module1_2, displayName: 'Submodule 1.2' }
                        
                    ]
                },
                {
                    name: 'Module2',
                    component: Module2,
                    displayName: 'Module 2',
                    active: false,
                    submodules: [
                        { name: 'Submodule2.1', component: Module2_1, displayName: 'Submodule 2.1' },
                        { name: 'Submodule2.2', component: Module2_2, displayName: 'Submodule 2.2' },
                    ]
                },
                {
                    name: 'Module3',
                    component: Module3,
                    displayName: 'Module 3',
                    active: false,
                    submodules: [
                        { name: 'Submodule3.1', component: Module3_1, displayName: 'Submodule 3.1' },
                        { name: 'Submodule3.2', component: Module3_2, displayName: 'Submodule 3.2' },
                    ]
                },
                {
                    name: 'Module4',
                    component: Module4,
                    displayName: 'Module 4',
                    active: false,
                    submodules: [
                        { name: 'Submodule4.1', component: Module4_1, displayName: 'Submodule 4.1' },
                        { name: 'Submodule4.2', component: Module4_2, displayName: 'Submodule 4.2' },
                    ]
                },
                
            ],
            currentSubComponent: null
        };
    },
    
    components: {
        'main-page': MainView,
        CourseList,
        Module1,
        Module2,
        Module3,
        Module4,
    },
    methods: {
        toggleModule(index) {
            this.modules.forEach((module, idx) => {
                module.active = (idx === index) ? !module.active : false;
            });
        },
        showSubComponent(submoduleName) {
            this.currentSubComponent = this.modules.flatMap(module => module.submodules).find(submodule => submodule.name === submoduleName).component;
        }
    }
};