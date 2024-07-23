<script src="../../../scripts/modules/Module1.js"></script>
<template>
        <section class="flex flex-col text-left mx-5">
            <h1 class="text-lg text-gray-700">MODULE 1</h1>
            <h1 class="text-2xl font-bold text-gray-700">English for Academic Purposes</h1>
            <h2 class="text-xl text-gray-400 mt-12">Overview</h2>
            <p class="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula metus ac varius consectetur. 
                Donec eros dui, ornare vitae sem ac, pretium dapibus tortor. Morbi a ipsum lectus. Vestibulum quam odio, 
                mollis eget commodo et, luctus et leo. Etiam neque nisi, tincidunt sed augue nec, accumsan gravida massa.</p>    
        
            <div class="w-1/2 my-6">
                <h1 class="text-xl">Course Content</h1>
                <ol class="text-left ml-6 my-2" style="list-style-type: upper-roman;">
                    <li>Daily Life in School</li>
                    <li>Academic Presentation</li>
                    <li>Research Writing</li>
                </ol>
            </div>
            <!-- <hr class="thick-border w-1/3 mx-auto mb-8"> -->
            <router-link :to="{ name: 'module1_1' }" class="absolute bottom-0 my-12">
                <button class="module_btn">
                    START MODULE 1
                </button>
            </router-link>

        </section>
</template>

<style scoped>

.thick-border {
    border-width: 2px;
    border-color: #A52639;
    border-style: solid; 
}
</style>