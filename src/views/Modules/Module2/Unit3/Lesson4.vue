<template>
    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left">
        <h1 class="text-4xl font-bold mb-4">Exploring Beaches</h1>
        <h2 class="text-xl font-semibold">Lesson 4</h2>
        <div class="mt-6">
            <h3 class="text-2xl font-bold text-blue-600">This lesson, you will learn how to:</h3>
            <ol class="list-decimal list-inside mt-2 text-lg">
                <li>Describe your experience using vocabulary words for staying at the beach</li>
                <li>Differentiate the use of the modal may from might</li>
            </ol>
        </div>
        <div class="mt-10">
            <h3 class="text-xl font-bold">Let's get started!</h3>
            <p class="text-lg mt-2">Choose the word that has the given meaning.</p>
            <form @submit.prevent="submitFirstSet" class="mt-4">
                <div v-for="(question, qIndex) in firstSet" :key="qIndex" class="mb-4">
                    <p class="font-bold">{{ qIndex + 1 }}. {{ question.text }}</p>
                    <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center ml-4">
                    <input type="radio" :id="'first-q' + qIndex + '-' + oIndex" :name="'first-q' + qIndex" :value="option.value" v-model="firstAnswers['q' + (qIndex + 1)]" class="mr-2">
                    <label :for="'first-q' + qIndex + '-' + oIndex">{{ option.text }}</label>
                    </div>
                </div>
                <button type="submit" class="mt-4 mb-8 px-4 py-2 bg-grey text-black rounded">Submit</button>
            </form>
        </div>
        <hr>
        <h3 class="text-xl font-bold mt-4">Spending Some Time by the sea</h3>
            <p class="text-lg mt-2 mb-4 text-justify">
                Going out for an outing at the beach is fun and exciting. 
                After long days of much work, people usually want to visit cozy beaches. 
                This is why most of the time, beaches are crowded with paying visitors. 
                These visitors come from different places either near or far. 
                Most beaches offer activities that visitors can choose from aside from swimming. 
                Today, beach activities have become even more interesting. Eating in floating restaurants, boating, island hopping, and others are usually enjoyed by visitors. 
                They usually feel sad when they check-out and their vacation is over. Of the different beaches that they visit every now and then, they also tend to have their own favorite.
            </p>
        <h3 class="text-xl font-bold mt-8">READING</h3>
        <p class="text-lg mt-2">a.</p>
        <p class="text-lg mt-2">b. Based on Having Some Time By The Sea, choose the answers to the following:</p>
            <form @submit.prevent="submitSecondSet" class="mt-4">
                <div v-for="(question, qIndex) in secondSet" :key="qIndex" class="mb-4">
                    <p class="font-bold">{{ qIndex + 1 }}. {{ question.text }}</p>
                    <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center ml-4">
                    <input type="radio" :id="'second-q' + qIndex + '-' + oIndex" :name="'second-q' + qIndex" :value="option.value" v-model="secondAnswers['q' + (qIndex + 1)]" class="mr-2">
                    <label :for="'second-q' + qIndex + '-' + oIndex">{{ option.text }}</label>
                    </div>
                </div>
                <button type="submit" class="mt-4 mb-8 px-4 py-2 bg-grey text-black rounded">Submit</button>
            </form>
        <hr>
        <h3 class="text-xl font-bold mt-8">LISTENING</h3>
        <p class="text-lg mt-2 mb-2">Based on this video, choose the answers to the following:</p>
        <div class="video-container">
            <div class="aspect-w-16 aspect-h-9 mb-8">
            <iframe src="https://www.youtube.com/embed/0aE_yRKlzgc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <hr>
        <h3 class="text-xl font-bold mt-8">GRAMMAR POINTS</h3>
            <p class="text-lg mt-4">
                Read on the use of modals-might, may, will, from woodwardenglish.com, materialsenglish.com and mechmass.org
            <a href="https://drive.google.com/file/d/1hAXPyYDMHuXaa8mxfhLexmyCatDCE9T/view?pli=1" target="_blank" style="color: blue;" class="inline-flex items-center">
                through this link:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-left: 4px;">
                <path d="M14 3v2h3.59l-9.83 9.83 1.42 1.42L19 6.41V10h2V3z"/>
                <path d="M5 5h4V3H3v6h2z"/>
                <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
            </a>
            </p>
        <hr>
        <h3 class="text-xl font-bold mt-8">PRONUNCIATION</h3>
        <p class="text-lg mt-2 mb-4 text-justify">
            The words listed below are all related to experiences at the beach. 
            For you to be able to say the words properly, look for the correct pronunciation of the listed words and practice pronouncing them for mastery.
        </p>
        <hr>
        <h3 class="text-xl font-bold mt-8">CLASSROOM ACTIVITY</h3>
        <p class="text-lg mt-2 mb-4 text-justify">
            Write a paragraph that describes a beach that you have visited, or one that you wish to spend vacation in. 
            Come up with your own title for work and please be guided by the scoring rubrics below:
        </p>
    </section>
</template>

<script>
export default {
    name: 'Lesson4',
    data() {
    return {
        firstSet: [
        { 
            text: 'under normal conditions; generally', 
            options: [
                { text: 'A. usually', value: 'A' }, 
                { text: 'B. sometimes', value: 'B' }, 
                { text: 'C. barely', value: 'C' }, 
                { text: 'D. seldom', value: 'D' }
            ] },
        { 
            text: 'giving a feeling of comfort, warmth, and relaxation', 
            options: [
                { text: 'A. hot', value: 'A' }, 
                { text: 'B. cozy', value: 'B' }, 
                { text: 'C. humid', value: 'C' }, 
                { text: 'D. cold', value: 'D' }
            ] },
        { 
            text: 'a gentle wind', 
            options: [
                { text: 'A. blow', value: 'A' }, 
                { text: 'B. glare', value: 'B' }, 
                { text: 'C. spark', value: 'C' }, 
                { text: ' D. breeze', value: 'D' }
            ] },
        { 
            text: 'settle one\'s hotel bill before leaving', 
            options: [
                { text: 'A. check-in', value: 'A' }, 
                { text: 'B. check-out', value: 'B' }, 
                { text: 'C. check into', value: 'C' }, 
                { text: 'D. check over', value: 'D' }] },
        { 
            text: '(of a space) full of people, leaving little or no room for movement; packed', 
            options: [
                { text: 'A. crowded', value: 'A' }, 
                { text: 'B. occupied', value: 'B' }, 
                { text: 'C. stable', value: 'C' }, 
                { text: 'D. calm', value: 'D' }] }
        ],
        secondSet: [
        { 
            text: 'Which of the following beach activities is mentioned in the text?', 
            options: [
                { text: 'A. eating in floating restaurants', value: 'A' }, 
                { text: 'B. diving', value: 'B' }, 
                { text: 'C. snorkeling', value: 'C' }, 
            ] },
        { 
            text: 'These are beach activities except:', 
            options: [
                { text: 'A. boating', value: 'A' }, 
                { text: 'B. island hopping', value: 'B' }, 
                { text: 'C. ice skating', value: 'C' }, 
            ] },
        { 
            text: 'Which of the following statements is true based on the text:', 
            options: [
                { text: 'A. Going to the beach makes you tired.', value: 'A' }, 
                { text: 'B. Going to the beach is a waste of time.', value: 'B' }, 
                { text: 'C. Activities in the beach do not only involve swimming.', value: 'C' }, 
            ] },
        { 
            text: 'Which of the following statements is false based on the text:', 
            options: [
                { text: 'A. Banana boating can be done at the beach.', value: 'A' }, 
                { text: 'B. Checking-out is done before you start your stay at the resort.', value: 'B' }, 
                { text: 'C. It is fun and exciting at the beach.', value: 'C' }, 
            ] },
        { 
            text: 'They are people who pay to visit or stay at the beach.', 
            options: [
                { text: 'A. visitors', value: 'A' }, 
                { text: 'B. owners of the resort', value: 'B' }, 
                { text: 'C. resort staff', value: 'C' }, 
            ] }
        ],
        firstAnswers: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
        },
        secondAnswers: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
        }
    };
    },
    methods: {
        submitFirstSet() {
            console.log(this.firstAnswers);
    },
        submitSecondSet() {
            console.log(this.secondAnswers);
    }
    }
};
</script>

<style>
    .video-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>