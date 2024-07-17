<script src="../scripts/CourseView.js"></script>
<template>
    <main-page>
        <!-- <CourseList /> -->
        <div class="flex flex-col nav_bar">
            <div 
                class="collapse-title font-roboto-condensed bg-Red-Darken text-primary-content cursor-pointer hover:bg-grey-2 flex items-center justify-between p-2" 
                @click="showComponent('Module1', 1)" :class="{ 'isActive': currentBtn === 1 }">
                Module 1
            </div>
    
            <div 
                class="collapse-title font-roboto-condensed bg-Red-Darken text-primary-content cursor-pointer hover:bg-grey-2 flex items-center justify-between p-2" 
                @click="showComponent('Module2', 2)" :class="{ 'isActive': currentBtn === 2 }">
                Module 2
            </div>
    
            <div 
                class="collapse-title font-roboto-condensed bg-Red-Darken text-primary-content cursor-pointer hover:bg-grey-2 flex items-center justify-between p-2" 
                @click="showComponent('Module3', 3)" :class="{ 'isActive': currentBtn === 3 }">
                Module 3
            </div>
        
            <div 
                class="collapse-title font-roboto-condensed bg-Red-Darken text-primary-content cursor-pointer hover:bg-grey-2 flex items-center justify-between p-2" 
                @click="showComponent('Module4', 4)" :class="{ 'isActive': currentBtn === 4 }">
                Module 4
            </div>
        </div>
        <div class="main_cont flex flex-col px-3vw py-8 rounded-lg">
            <component :is="currentComponent"></component>
        </div>

    </main-page>
</template>

<style scoped>
.main_cont{
    margin-left: 252px;
    margin-top: 2px;
    background-color: rgb(244, 214, 214);
    height: auto;
}
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
