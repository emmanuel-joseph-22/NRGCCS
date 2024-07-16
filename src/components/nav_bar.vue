<script src="../scripts/nav_bar.js"></script>
<template>
    <nav class="w-full bg-blue-900 flex items-center px-20 h-auto sticky top-0 z-40 py-2">
        <ul class="flex text-white gap-2 w-full items-center">
            <!-- <li class="py-6 ">

                <drawer/>

            </li>
             -->
            <!-- <li class="flex items-center justify-center w-1/12  md:hidden sm:hidden xm:hidden"><img src="../../assets/img/school.png" style="width: 4rem;" alt=""></li> -->

            <router-link :to="{ name: 'home' }" class="w-1/12 hover:bg-blue-800 hover:scale-125 ease-in-out	duration-100">
                <li 
                    class="py-5 text-center" 
                    style="font-size: clamp(14px , 2vw , 16px);" >
                    HOME
                </li>
            </router-link>

            <router-link :to="{ name: 'courses' }" class="w-1/12 hover:bg-blue-800 hover:scale-125 ease-in-out	duration-100">
                <li 
                    class="py-5  text-center" 
                    style="font-size: clamp(14px , 2vw , 16px);" >
                    COURSES
                </li>
            </router-link>
            
            <router-link :to="{ name: 'about' }" class="w-1/12 hover:bg-blue-800 hover:scale-125 ease-in-out	duration-100">
                <li 
                    class="py-5  text-center" 
                    style="font-size: clamp(14px , 2vw , 16px);" >
                    ABOUT US
                </li>
            </router-link>
        </ul>
    </nav>
</template>