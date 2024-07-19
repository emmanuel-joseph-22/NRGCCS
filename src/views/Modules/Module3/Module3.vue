<template>
    <module-page>
        <div class="text-center">
            <h1 class="text-6xl font-bold text-gray-700 mb-4">MODULE 3</h1>
            <hr class="thick-border w-1/3 mx-auto mb-8">
            <router-link :to="{ name: 'module3_1' }">
                <button class="module_btn">
                    START MODULE 3
                </button>                
            </router-link>

        </div>
    </module-page>
</template>

<style scoped>
.btn1 {
    background: #DD3745;
    /*border: 2px solid black;*/
    box-shadow: 2px 2px 2px  rgba(0, 0, 0, 0.4);
}
.thick-border {
    border-width: 2px;
    border-color: #A52639;
    border-style: solid; 
}
</style>