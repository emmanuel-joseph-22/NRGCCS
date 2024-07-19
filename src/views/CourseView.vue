<script src="../scripts/CourseView.js"></script>
<template>
    <main-page>
        <div class="flex flex-col nav_bar">
            <div v-for="(module, index) in modules" :key="index" class="module-container">
                <div @click="toggleModule(index)" :class="{ 'isActive': module.active }" class="module-item">
                    <div class="icon-container">
                        <svg v-if="!module.active" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg v-else width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ module.displayName }}</span>
                    </div>
                </div>
                <div v-if="module.active" class="flex submodules">
                    <div v-for="(submodule, subIndex) in module.submodules" :key="subIndex" @click="showSubComponent(submodule.name)" class="sub">
                        {{ submodule.displayName }}
                    </div>
                </div>
            </div>
        </div>
        <!-- modules view -->
        <div class="main_cont flex flex-col px-3vw py-8">
            <component :is="currentSubComponent"></component>
        </div>
    </main-page>
</template>

<style scoped>
.submodules {
    display: flex;
    flex-direction: column;
}
.sub {
    background-color: #3E3D3D;
}

.isActive .submodules {
    display: flex;
    flex-direction: column;
}

.main_cont {
    margin-left: 252px;
    margin-top: 2px;
    height: auto;
    background-color: rgb(218, 216, 216);
}
.module-container {

}
.module-item {
    height: 60px;
    background-color: #A52639;
}
.nav_bar {
    position: fixed;
    top: 10px;
    left: 0;
    width: 250px;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 90px 14px;
    background-color: #FBFBF9;
    z-index: 10;
}

.nav_bar div {
    padding: 10px 15px;
    margin-bottom: 10px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.nav_bar div.isActive {
    background-color: rgba(30, 30, 30, 0.75);
    border: 2px solid white;
}

.nav_bar .icon-container {
    display: flex;
    align-items: center;
}

.nav_bar .icon-container svg {
    margin-right: 10px;
}
</style>