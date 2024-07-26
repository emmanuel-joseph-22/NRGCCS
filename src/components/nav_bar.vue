<template>
    <nav class="w-full flex px-10 h-auto sticky top-0 z-40" 

    style="
    background-color: #A52639; 
    border-bottom: 3px solid #721c2f;
    filter: drop-shadow(0 5px 5px rgb(0 0 0 / 0.3));
    ">
        <ul class="flex text-white gap-2 w-full items-center text-center font-roboto-condensed">
            <li class="flex w-1/12 gap-2 items-center">
                <img style="width: 40px; height: 40px;" src="/logo/NRGCCS.png" alt="">
                <a href="https://ieducationphl.ched.gov.ph/nrgccs/" target="_blank" class="flex items-center">
                    <span class="py-2 text-2xl">NRGCCS</span>
                </a>
            </li>

            <div class="ml-auto flex w-4/12 items-center gap-2">
                <router-link :to="{ name: 'home' }" class="w-4/12 hover:bg-red-500 ease-in-out duration-100">
                    <li 
                        class="py-5 text-center text-lg" >
                        Home
                    </li>
                    
                </router-link>
    
                <li 
                    @mouseover="toggleMenu=true" @mouseleave="toggleMenu=false"
                    class="py-5 w-4/12 hover:bg-red-500 duration-100 text font-roboto-condensed text-lg cursor-pointer">
                    English Modules
                    <div class="module_menu absolute text-customRed px-3" v-if="toggleMenu">
                        <router-link :to="{ name: 'module1' }" class="w-full">
                            <li 
                                class="py-2 flex text-left font-roboto-condensed" >
                                English for Academic Purposes
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'module2' }" class="w-full">
                            <li 
                                class="py-2 flex text-left font-roboto-condensed" >
                                Everyday English
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'module3' }" class="w-full">
                            <li 
                                class="py-2 flex text-left font-roboto-condensed" >
                                English for Professional Communication
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'module4' }" class="w-full">
                            <li 
                                class="py-2 flex text-left font-roboto-condensed" >
                                English for Global and Intercultural Communication
                            </li>
                        </router-link>
                    </div>
                </li>
                <!-- <router-link :to="{ name: 'about' }" class="w-1/12 hover:bg-green-700 hover:scale-125 ease-in-out	duration-100">
                    <li 
                        class="py-5  text-center text-roboto-condensed" 
                        style="font-size: clamp(14px , 2vw , 16px);" >
                        ABOUT US
                    </li>
                </router-link> -->
                <router-link :to="{ name: 'newsletter' }" class="w-4/12 hover:bg-red-500 ease-in-out	duration-100">
                    <li 
                        class="py-5 mx-auto text-center text-lg" >
                        Newsletter
                    </li>
                </router-link>
            </div>
        </ul>
    </nav>
</template>
<script>

    export default{
        data(){
            return {
                toggleMenu: false,
            }
        },
    }
</script>
<style scoped>
    .module_menu{
        background-color: #ffe8e9;
        z-index: 41;
        width: 250px;
        margin-top: 20px;
    }
</style>