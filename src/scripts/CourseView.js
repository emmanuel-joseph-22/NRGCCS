
import MainView from "../views/MainView.vue";
import CourseList from "../components/course_list.vue";

import Module1 from "../views/Modules/Module1/Module1.vue";
import Module2 from "../views/Modules/Module2/Module2.vue";
import Module3 from "../views/Modules/Module3/Module3.vue";
import Module4 from "../views/Modules/Module4/Module4.vue";

export default{
    setup(){

    },
    data(){
        return{
            currentComponent: Module1,
            currentBtn: 1,       
        }
    },  
    components:{
        'main-page': MainView,
        CourseList,

        //modules
        Module1,
        Module2,
        Module3,
        Module4,
    },  
    methods:{
        showComponent(myComponent, myBtn1){
            this.currentComponent = myComponent
            this.currentBtn = myBtn1
        }
    },
    watch() {
        
    },
    mounted(){
       
    },

}