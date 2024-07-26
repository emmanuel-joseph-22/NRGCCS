<script src="../scripts/Newsletter.js"></script>
<template>

    <main-page>
        <!-- landing section -->
        <section id="top" class="w-full bg-no-repeat bg-center h-screen flex flex-col justify-center items-center" style="">
            <div class="text-center">
                <div class="text-6xl font-roboto-condensed text-black">
                    <div>NEWSLETTER</div> 
                </div>
                
            </div>
        </section>
    
        <!-- overview -->
        <section id="overview" class="w-full bg-customRed text-white font-roboto-condensed py-16">
            <div class="mx-auto w-8/12 text-justify flex flex-col">
                <h5 class="text-bold text-lg mx-auto mt-16">Subscribe to our newsletter to receive latest updates from us</h5>
                <span class="mt-6 mx-auto text-lg text-justify"> 
                    <input 
                        type="email" 
                        v-model="guest_email" 
                        placeholder="myemail@email.com" 
                        class="bg-white rounded-l-lg px-4 py-2"
                        />
                    <button class="bg-green-500 hover:bg-green-400 rounded-r-lg py-2 px-4">Subscribe</button>
                </span>
            </div>
        </section>
    </main-page>
</template>
