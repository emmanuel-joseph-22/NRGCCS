import MainView from "../views/MainView.vue";

import Module1 from "../views/Modules/Module1/Module1.vue";
import Module1_1 from "../views/Modules/Module1/Module1_1.vue";
import Module1_2 from "../views/Modules/Module1/Module1_2.vue";
import Module1_3 from "../views/Modules/Module1/Module1_3.vue";
import Module1_4 from "../views/Modules/Module1/Module1_4.vue";
import Module2 from "../views/Modules/Module2/Module2.vue";
import Module2_1 from "../views/Modules/Module2/Module2_1.vue";
import Module2_2 from "../views/Modules/Module2/Module2_2.vue";
import Module2_3 from "../views/Modules/Module2/Module2_3.vue";
import Module2_4 from "../views/Modules/Module2/Module2_4.vue";
import Module3 from "../views/Modules/Module3/Module3.vue";
import Module3_1 from "../views/Modules/Module3/Module3_1.vue";
import Module3_2 from "../views/Modules/Module3/Module3_2.vue";
import Module3_3 from "../views/Modules/Module3/Module3_3.vue";
import Module3_4 from "../views/Modules/Module3/Module3_4.vue";
import Module4 from "../views/Modules/Module4/Module4.vue";
import Module4_1 from "../views/Modules/Module4/Module4_1.vue";
import Module4_2 from "../views/Modules/Module4/Module4_2.vue";
import Module4_3 from "../views/Modules/Module4/Module4_3.vue";
import Module4_4 from "../views/Modules/Module4/Module4_4.vue";

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
                    displayName: 'MODULE 1',
                    active: false,
                    submodules: [
                        { name: 'Submodule1.1', component: Module1_1, displayName: 'UNIT 1', route: 'module1_1' },
                        { name: 'Submodule1.2', component: Module1_2, displayName: 'UNIT 2', route: 'module1_2' },
                        { name: 'Submodule1.3', component: Module1_3, displayName: 'UNIT 3', route: 'module1_3' },
                        { name: 'Submodule1.4', component: Module1_4, displayName: 'UNIT 4', route: 'module1_4' }
                    ]
                },
                {
                    name: 'Module2',
                    component: Module2,
                    displayName: 'MODULE 2',
                    active: false,
                    submodules: [
                        { name: 'Submodule2.1', component: Module2_1, displayName: 'UNIT 1', route: 'module2_1' },
                        { name: 'Submodule2.2', component: Module2_2, displayName: 'UNIT 2', route: 'module2_2' },
                        { name: 'Submodule2.3', component: Module2_3, displayName: 'UNIT 3', route: 'module2_3' },
                        { name: 'Submodule2.4', component: Module2_4, displayName: 'UNIT 4', route: 'module2_4' }
                    ]
                },
                {
                    name: 'Module3',
                    component: Module3,
                    displayName: 'MODULE 3',
                    active: false,
                    submodules: [
                        { name: 'Submodule3.1', component: Module3_1, displayName: 'UNIT 1', route: 'module3_1'  },
                        { name: 'Submodule3.2', component: Module3_2, displayName: 'UNIT 2', route: 'module3_2'  },
                        { name: 'Submodule3.3', component: Module3_3, displayName: 'UNIT 3', route: 'module3_3' },
                        { name: 'Submodule3.4', component: Module3_4, displayName: 'UNIT 4', route: 'module3_4' }
                    ]
                },
                {
                    name: 'Module4',
                    component: Module4,
                    displayName: 'MODULE 4',
                    active: false,
                    submodules: [
                        { name: 'Submodule4.1', component: Module4_1, displayName: 'UNIT 1', route: 'module4_1'  },
                        { name: 'Submodule4.2', component: Module4_2, displayName: 'UNIT 2', route: 'module4_2'  },
                        { name: 'Submodule4.3', component: Module4_3, displayName: 'UNIT 3', route: 'module4_3' },
                        { name: 'Submodule4.4', component: Module4_4, displayName: 'UNIT 4', route: 'module4_4' }
                    ]
                },
                
            ],
            currentSubComponent: null
        };
    },
    
    components: {
        'main-page': MainView,
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
            if(index == 0){
                this.$router.push('/module1');
            }
            if(index == 1){
                this.$router.push('/module2');
            }
            if(index == 2){
                this.$router.push('/module3');
            }
            if(index == 3){
                this.$router.push('/module4');
            }
        },
        // showSubComponent(submoduleName) {
        //     this.currentSubComponent = this.modules.flatMap(module => module.submodules).find(submodule => submodule.name === submoduleName).component;
        // }
    }
};