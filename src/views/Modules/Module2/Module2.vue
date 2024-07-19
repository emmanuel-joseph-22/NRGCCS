<template>
    <module-page>
        <div class="text-center">
            <h1 class="text-6xl font-bold text-gray-700 mb-4">MODULE 2</h1>
            <hr class="thick-border w-1/3 mx-auto mb-8">
            <router-link :to="{ name: 'module2_1' }">
                <button class="module_btn">
                    START MODULE 2
                </button>
            </router-link>

        </div>
    </module-page>
</template>

<style scoped>
.thick-border {
    border-width: 2px;
    border-color: #A52639;
    border-style: solid; 
}
</style>