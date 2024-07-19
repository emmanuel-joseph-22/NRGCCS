<script src="../scripts/nav_bar.js"></script>
<template>
    <nav class="w-full flex px-10 h-auto sticky top-0 z-40 py-2" style="background-color: #A52639;">
        <ul class="flex text-white gap-2 w-full items-center">
            <li class="flex flex-row w-1/12 py-3 font-roboto-condensed text-2xl gap-2">
                <img class="w-1/3" src="/public/logo/NRGCCS.png" alt="">
                <a href="https://ieducationphl.ched.gov.ph/nrgccs/" target="_blank">
                    <span class="py-2">NRGCCS</span>
                </a>
            </li>

            <div class="ml-auto flex w-4/12">
                <router-link :to="{ name: 'home' }" class="w-4/12 hover:bg-red-500 hover:scale-125 ease-in-out duration-100">
                    <li 
                        class="py-5 text-center font-roboto-condensed text-lg" >
                        Home
                    </li>
                </router-link>
    
                <li 
                    @mouseover="toggleMenu=true" @mouseleave="toggleMenu=false"
                    class="py-5 w-4/12 hover:bg-red-500 hover:scale-125 duration-100 text-center font-roboto-condensed text-lg">
                    English Modules
                    <div class="module_menu text-customRed" v-if="toggleMenu">
                        <router-link :to="{ name: 'modules' }" class="w-full">
                            <li 
                                class="py-4 text-center font-roboto-condensed text-lg" >
                                Module 1
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'modules' }" class="w-full">
                            <li 
                                class="py-4 text-center font-roboto-condensed text-lg" >
                                Module 2
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'modules' }" class="w-full">
                            <li 
                                class="py-4 text-center font-roboto-condensed text-lg" >
                                Module 3
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'modules' }" class="w-full">
                            <li 
                                class="py-4 text-center font-roboto-condensed text-lg" >
                                Module 4
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
                <router-link :to="{ name: 'newsletter' }" class="w-4/12 hover:bg-red-500 hover:scale-125 ease-in-out	duration-100">
                    <li 
                        class="py-5  text-center font-roboto-condensed text-lg" >
                        Newsletter
                    </li>
                </router-link>
            </div>
        </ul>
    </nav>
</template>
<style scoped>
    .module_menu{
        background-color: #ffe8e9;
        width: 170px;
        height: auto;
        position: absolute;
        z-index: 41;
        margin-top: 20px;
    }
</style>