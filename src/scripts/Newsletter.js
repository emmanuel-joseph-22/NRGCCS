import MainView from "../views/MainView.vue"

// import VueJwtDecode from 'vue-jwt-decode'


export default{

    setup(){
        // const {cookies} =useCookies();
        // return {cookies}
    },
    data(){
        return{
            guest_email: ''
        }
    },  
    components:{
        'main-page': MainView
    },  
    methods:{
      
    },
    watch() {
    },
    mounted(){
       
    },

}