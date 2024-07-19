<script src="../scripts/HomeView.js"></script>
<template>
<main-page>
    <!-- landing section -->
    <section id="top" class="w-full bg-no-repeat bg-center h-screen flex flex-col justify-center items-center" style="background: url('/background/bg1.png')">
    <div class="text-center">
        <div class="text-8xl font-roboto-condensed text-white">
            <div>GLOBAL ENGLISH</div> 
            <div>COMPETITIVE</div> 
            <div>MODULES</div>
        </div>
        <div class="w-full h-2 " style="background-color: #A52639; filter: drop-shadow(0 5px 5px rgb(0 0 0 / 0.5));"></div> 
        <router-link :to="{ name: 'modules' }">
            <div class="btn w-3/12 mt-4" style="filter: drop-shadow(0 5px 5px rgb(0 0 0 / 0.5));"> 
                -Start Learning-
            </div>                
        </router-link>

    <div class="flex justify-center">
        <a href = "#overview">
            <svg fill="#FFF" height="50px" width="50px"  
                viewBox="0 0 330 330" xml:space="preserve">
                <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
            </svg>
        </a>
    </div>
    </div>
    
</section>

    <!-- overview -->
    <section id="overview" class="w-full bg-customRed text-white font-roboto-condensed py-16">
        <div class="mx-auto w-8/12 text-justify flex flex-col">
            <h5 class="text-bold text-lg mx-5 mt-16">Overview</h5>
            <p class="mt-6 mx-5 text-lg text-justify">The National Roadmap for Global Competitiveness in Communication Skills (NRGCCS) 
                is an initiative to ensure our Filipino students remain competitive with their ASEAN 
                and global counterparts in terms of English language communication skills.</p>
            <p class="mt-10 mx-5 text-justify">The National Roadmap for Global Competitiveness in Communication Skills (NRGCCS) 
                Project was launched by the Commission on Higher Education (CHED), alongside government, 
                academe, and industry partners in 2020.</p>
            <p class="mt-10 mx-5 text-justify">Part of the short-term targets of the NRGCCS Project is to further raise the level of 
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
        <div class="grid grid-cols-3 grid-rows-3 gap-4">
            <!-- First column with multiple rows -->
            <div class="col-span-1 row-span-1 flex items-center justify-center border border-black">1A</div>
            <div class="col-span-1 row-span-1 flex items-center justify-center border border-black">1B</div>
            <div class="col-span-1 row-span-1 flex items-center justify-center border border-black">1C</div>
        
            <!-- Second column spanning all rows -->
            <div class="col-span-2 row-span-3 border-1 flex items-center justify-center border-black">Column 2</div>
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
    <section class="bg-footerRed w-full font-roboto-condensed flex flex-row px-3 py-5 items-center justify-center">
        <div class="w-8/12 px-4 text-2xl text-white">GLOBAL ENGLISH COMPETITIVENESS</div>
        <div class="ml-auto w-4/12 flex flex-row items-center">
            <div class="w-3/12 mx-2"><img src="/logo/NRGCCS.png" /></div>
            <div class="w-3/12 mx-2"><img src="/logo/logo-dos.png" /></div>
            <div class="w-3/12 mx-2"><img src="/logo/CHED-LOGO_orig.png" /></div>
            <div class="w-3/12 mx-2"><img src="/logo/BatStateU-NEU-Logo.png" /></div>
        </div>
    </section>
</main-page>
</template>
