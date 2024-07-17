<script src="../scripts/HomeView.js"></script>
<template>
<main-page>
    <!-- landing section -->
    <section class="landing_section w-full">
        <div class="mx-auto w-8/12 justify-content items-center mt-13 pt-12 h-screen"> 
            <div class="text-8xl w-10/12 font-roboto-condensed flex flex-col text-white items-center mx-auto">
                <div class="mx-auto">GLOBAL ENGLISH</div> 
                <div class="mx-auto">COMPETITIVE</div> 
                <div class="mx-auto">MODULES</div>
            </div>
            <div class="w-full h-2" style="background-color: #A52639;"></div>
            <router-link :to="{ name: 'modules' }">
                <div class="btn w-2/12 flex justify-content">
                    -Start Learning-
                </div>                
            </router-link>
        </div>
    </section>
    <!-- overview -->
    <section class="w-full bg-customRed text-white font-roboto-condensed py-12">
        <div class="mx-12 flex flex-col">
            <h5 class="text-bold text-lg mx-5">Overview</h5>
            <p class="mx-5">The National Roadmap for Global Competitiveness in Communication Skills (NRGCCS) 
                is an initiative to ensure our Filipino students remain competitive with their ASEAN 
                and global counterparts in terms of English language communication skills.</p>
            <p class="mx-5">The National Roadmap for Global Competitiveness in Communication Skills (NRGCCS) 
                Project was launched by the Commission on Higher Education (CHED), alongside government, 
                academe, and industry partners in 2020.</p>
            <p class="mx-5">Part of the short-term targets of the NRGCCS Project is to further raise the level of 
                awareness and adoption of Philippine higher education institutions to international 
                standards and teaching techniques and develop our competitive advantage in this area to 
                contribute to our progress towards a globally competitive knowledge economy. Its main goal 
                is adopting the Common European Framework of Reference (CEFR) for Languages as a recognized 
                metric for communicative competitiveness.</p>
        </div>
    </section>
    <!-- resources section -->
    <section class="w-full bg-white text-customRed font-roboto-condensed py-12">
        <!-- resources info -->
        <div class="mx-12 flex flex-grid">
            <div class="flex flex-col">
                <h5 class="text-bold text-lg mx-5">Resources</h5>
                <p class="mx-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula metus ac varius consectetur. 
                    Donec eros dui, ornare vitae sem ac, pretium dapibus tortor. Morbi a ipsum lectus. Vestibulum quam odio, 
                    mollis eget commodo et, luctus et leo. Etiam neque nisi, tincidunt sed augue nec, accumsan gravida massa. 
                    Donec iaculis posuere turpis, a tempor lacus rhoncus eget.</p>    
            </div>
            <div class="flex flex-col">
                <h5 class="text-bold text-lg mx-5">Resources</h5>
                <p class="mx-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula metus ac varius consectetur. 
                Donec eros dui, ornare vitae sem ac, pretium dapibus tortor. Morbi a ipsum lectus. Vestibulum quam odio, 
                mollis eget commodo et, luctus et leo. Etiam neque nisi, tincidunt sed augue nec, accumsan gravida massa. 
                Donec iaculis posuere turpis, a tempor lacus rhoncus eget.</p>
            </div>
            <div class="flex flex-col">
                <h5 class="text-bold text-lg mx-5">Resources</h5>
                <p class="mx-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula metus ac varius consectetur. 
                Donec eros dui, ornare vitae sem ac, pretium dapibus tortor. Morbi a ipsum lectus. Vestibulum quam odio, 
                mollis eget commodo et, luctus et leo. Etiam neque nisi, tincidunt sed augue nec, accumsan gravida massa. 
                Donec iaculis posuere turpis, a tempor lacus rhoncus eget.</p>
            </div>    
        </div>
        <!-- resources videos -->
        <div class="grid">
            <div>vid 1</div>
            <div>vid 2</div>
            <div>vid 3</div>
            <div>vid 4</div>
        </div>
    </section>
    <!-- about us -->
    <section class="w-full bg-customRed text-white font-roboto-condensed py-12">
        <div class="mx-8 flex flex-col">
            <h5 class="text-bold text-lg items-center mx-auto mb-4">About Us</h5>
            <p class="mx-5 items-center">
                Quisque sit amet sem sed mi egestas volutpat. Curabitur vitae 
                commodo risus. Donec mollis eu neque id laoreet. Nunc mi ex, 
                luctus sed nisl vitae, convallis hendrerit ex. Etiam ac leo augue. 
                Etiam iaculis mi nec sem porttitor feugiat. Proin ac placerat justo, 
                sollicitudin commodo leo. Donec ut lectus ut justo rhoncus consequat.</p>
        </div>
    </section>
    <!-- footer -->
    <section class="bg-footerRed w-full font-roboto-condensed flex flex-row px-5 py-5 items-center justify-center">
        <div class="w-2/12 px-4 text-2xl text-white">GLOBAL ENGLISH COMPETITIVENESS</div>
        <div class="w-1/12 mx-2"><img src="/public/logo/NRGCCS.png" /></div>
        <div class="w-1/12 mx-2"><img src="/public/logo/logo-dos.png" /></div>
        <div class="w-1/12 mx-2"><img src="/public/logo/CHED-LOGO_orig.png" /></div>
        <div class="w-1/12 mx-2"><img src="/public/logo/University_of_the_Visayas-removebg-preview.png" /></div>
        <div class="w-1/12 mx-2"><img src="/public/logo/ces.png" /></div>
        <div class="w-1/12 mx-2"><img src="/public/logo/LPU-Logo-256x256.png" /></div>
        <div class="w-1/12 mx-2"><img src="/public/logo/BatStateU-NEU-Logo.png" /></div>
    </section>
</main-page>
</template>

<style scoped>
.landing_section{
    background: url('/background/bg1.png');
    background-size: cover;
    background-position: center;
}
</style>