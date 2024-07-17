<script src="../scripts/course_list.js"></script>
<template>
    <div class="w-3/12  flex flex-col">

            <div class="collapse collapse-arrow rounded-none">
                <input type="radio" name="accordion" checked="checked" />
                <div class="collapse-title text-white bg-Red-Darken text-primary-content flex items-center justify-between p-2">
                    Module 1
                </div>
                <div class="collapse-content">
                    <h5 class=" ml-2 px-2 py-1 mt-2 cursor-pointer hover:bg-grey-2" @click="showComponent('v_OCI_1', 1)"
                    :class="{ 'isActive': currentBtn === 1 }">1.1
                    </h5>
                    <h5 class=" ml-2 px-2 py-1 cursor-pointer hover:bg-grey-2" @click="showComponent('v_OCI_2', 2)" :class="{ 'isActive': currentBtn === 2 }">
                        1.2
                    </h5>
                </div>
            </div>
            <div class="collapse collapse-arrow rounded-none">
                <input type="radio" name="accordion" />
                <div class="collapse-title text-white bg-Red-Darken text-primary-content flex items-center justify-between p-2">
                    Module 2
                </div>
                <div class="collapse-content">
                    <h5 class=" ml-2 px-2 py-1 mt-2 cursor-pointer hover:bg-grey-2" @click="showComponent('ad_OCI_1', 5)"
                        :class="{ 'isActive': currentBtn === 5 }">
                        2.1
                    </h5>
                </div>
            </div>
            <div class="collapse collapse-arrow rounded-none">
                <input type="radio" name="accordion" />
                <div class="collapse-title text-white bg-Red-Darken text-primary-content flex items-center justify-between p-2">
                    Module 3
                </div>
                <div class="collapse-content">
                    <h5 class="ml-2 px-2 py-1 mt-2 cursor-pointer hover:bg-grey-2" @click="showComponent('Research', 8)"
                    :class="{ 'isActive': currentBtn === 8 }">
                        3.1
                    </h5>
                </div>
            </div>
            <div class="collapse collapse-arrow rounded-none">
                <input type="radio" name="accordion" />
                <div class="collapse-title text-white bg-Red-Darken text-primary-content flex items-center justify-between p-2">
                    Module 4
                </div>
                <div class="collapse-content">
                    <h5 class=" ml-2 px-2 py-1 mt-2 cursor-pointer hover:bg-grey-2" @click="showComponent('OC', 9)" :class="{ 'isActive': currentBtn === 9 }">
                        4.1
                    </h5>
                </div>
            </div>
    </div>
    <!-- <nav class="nav_bar gap-2">
        <router-link :to="{ name: 'module1' }" class="w-full bg-white">
            <div class="py-3 px-5">
                Module 1
            </div>  
        </router-link>

        <router-link :to="{ name: 'module2' }" class="w-full bg-white">
            <div class="py-3 px-5">
                Module 2
            </div>
        </router-link>
        
        <router-link :to="{ name: 'module3' }" class="w-full bg-white">
            <div class="py-3 px-5" >
                Module 3
            </div>
        </router-link>

        <router-link :to="{ name: 'module4' }" class="w-full bg-white">
            <div class="py-3 px-5">
                Module 4
            </div>
        </router-link>
    </nav>   -->
</template>

<style scoped>
.nav_bar{
    position: fixed;
    left: 0;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: 90px 14px;
    background-color: rgb(209, 209, 235);
    z-index: 10;
}
</style>