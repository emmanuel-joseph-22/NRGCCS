<template>
    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left">
        <h1 class="text-4xl font-bold mb-4">More Than Just Staying Fit</h1>
        <h2 class="text-xl font-semibold">Lesson 3</h2>
        <div class="mt-6">
            <div class="mt-6">
                <h3 class="text-2xl font-bold text-blue-600">This lesson, you will learn how to:</h3>
                <ol class="list-decimal list-inside mt-2 text-lg">
                    <li>Describe your movie experiences using vocabulary words aboutwatching films at the cinema</li>
                    <li>Use complex question tags in checking information</li>
                </ol>
            </div>
            <div class="mt-10">
                <h3 class="text-xl font-bold">Let's get started!</h3>
                <p class="text-lg mt-2">a. Choose the word that has the given meaning.</p>
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
            <h3 class="text-xl font-bold mt-8">Which exercise is for me?</h3>
            <p class="text-lg mt-2 mb-4 text-justify">The benefit of regular exercise cannot be denied. 
                Knowing the suitable exercise for your body is also a major concern. 
                Several gym equipment for example may not be always right for everyone. 
                This is why there must be proper guidance about the program and equipment that are for you. 
                You must not just pick any gym equipment that you may find. If you do this, trouble may arise. 
                Not only will you get exhausted. You might also have injury if you do not take extra care. 
                So, if you want to keep your body in perfect shape, make sure that the facilities will really suit you. 
                You must therefore bear in mind that staying fit does not only mean being appealing.
            </p>
            <h3 class="text-xl font-bold mt-8">READING</h3>
            <p class="text-lg mt-2 mb-4">Read More Than Just Staying Fit and determine if each of the statements below is true or false:</p>
            <form @submit.prevent="submitSecondSet" class="mt-4">
                <div v-for="(question, qIndex) in secondSet" :key="qIndex" class="mb-4">
                    <p class="font-bold">{{ qIndex + 1 }}. {{ question.text }}</p>
                    <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center ml-4">
                    <input type="radio" :id="'second-q' + qIndex + '-' + oIndex" :name="'second-q' + qIndex" :value="option.value" v-model="firstAnswers['q' + (qIndex + 1)]" class="mr-2">
                    <label :for="'second-q' + qIndex + '-' + oIndex">{{ option.text }}</label>
                    </div>
                </div>
                <button type="submit" class="mt-4 mb-8 px-4 py-2 bg-grey text-black rounded">Submit</button>
            </form>
        </div>
        <hr>
        <h3 class="text-xl font-bold mt-8">LISTENING</h3>
        <p class="text-lg mt-2 mb-2">Based on this video, choose the answers to the following:</p>
        <div class="video-container">
            <div class="aspect-w-16 aspect-h-9 mb-8">
            <iframe src="https://www.youtube.com/embed/5WY4-CLkJew" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <form @submit.prevent="submitThirdSet" class="mt-4">
                <div v-for="(question, qIndex) in thirdSet" :key="qIndex" class="mb-4">
                    <p class="font-bold">{{ qIndex + 1 }}. {{ question.text }}</p>
                    <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center ml-4">
                    <input type="radio" :id="'third-q' + qIndex + '-' + oIndex" :name="'third-q' + qIndex" :value="option.value" v-model="thirdAnswers['q' + (qIndex + 1)]" class="mr-2">
                    <label :for="'third-q' + qIndex + '-' + oIndex">{{ option.text }}</label>
                    </div>
                </div>
                <button type="submit" class="mt-4 mb-8 px-4 py-2 bg-grey text-black rounded">Submit</button>
            </form>
            <hr>
            <h3 class="text-xl font-bold mt-8">GRAMMAR POINTS</h3>
            <p class="text-lg mt-4">
                Read this handout on Connecting Words Expressing Cause and Effect, Contrast, etc., 
                from courses.dcs.wisc.edu/wp/grammar/active-and-passive-voice/
            <a href="https://drive.google.com/file/d/1l5ncOT1iKHWp6e3rjkUys0QGg56YF8AF/view" target="_blank" style="color: blue;" class="inline-flex items-center">
                through this link:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-left: 4px;">
                <path d="M14 3v2h3.59l-9.83 9.83 1.42 1.42L19 6.41V10h2V3z"/>
                <path d="M5 5h4V3H3v6h2z"/>
                <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
            </a>
            </p>
            <form @submit.prevent="submitFourthSet" class="mt-4">
                <div v-for="(question, qIndex) in fourthSet" :key="qIndex" class="mb-4">
                    <p class="font-bold">{{ qIndex + 1 }}. {{ question.text }}</p>
                    <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center ml-4">
                    <input type="radio" :id="'fourth-q' + qIndex + '-' + oIndex" :name="'fourth-q' + qIndex" :value="option.value" v-model="fourthAnswers['q' + (qIndex + 1)]" class="mr-2">
                    <label :for="'fourth-q' + qIndex + '-' + oIndex">{{ option.text }}</label>
                    </div>
                </div>
                <button type="submit" class="mt-4 mb-8 px-4 py-2 bg-grey text-black rounded">Submit</button>
            </form>
            <hr>
            <h3 class="text-xl font-bold mt-8">PRONUNCIATION</h3>
            <p class="text-lg mt-2 mb-4 text-justify">
                The words listed below are all related to exercise experiences. 
                For you to be able to say the words properly, look for the correct pronunciation of the listed words and practice pronouncing them for mastery.
            </p>
            <hr>
            <h3 class="text-xl font-bold mt-8">Classroom Activity</h3>
            <p class="text-lg mt-2 mb-4 text-justify">
                Write a short essay about the benefits of regular exercise. 
                Come up with your own title for work and please be guided by the scoring rubrics below:
            </p>
            <h3 class="text-xl font-bold mt-8">Essay Writing Rubrics</h3>
    </section>
</template>

<script>
export default {
    name: 'Lesson3',
    data() {
    return {
        firstSet: [
        { 
            text: 'a place, amenity, or piece of equipment provided for a particular purpose', 
            options: [
                { text: 'A. facility', value: 'A' }, 
                { text: 'B. ingredient', value: 'B' }, 
                { text: 'C. part', value: 'C' }, 
                { text: 'D. mode', value: 'D' }
            ] },
        { 
            text: 'right or appropriate for a particular person, purpose, or situation', 
            options: [
                { text: 'A. division', value: 'A' }, 
                { text: 'B. concern', value: 'B' }, 
                { text: 'C. suitable', value: 'C' }, 
                { text: 'D. allowed', value: 'D' }
            ] },
        { 
            text: 'the strength and vitality required for sustained physical or mental activity', 
            options: [
                { text: 'A. energy', value: 'A' }, 
                { text: 'B. breath', value: 'B' }, 
                { text: 'C. stand', value: 'C' }, 
                { text: 'D. position', value: 'D' }
            ] },
        { 
            text: 'an advantage or profit gained from something', 
            options: [
                { text: 'A. part', value: 'A' }, 
                { text: 'B. idea', value: 'B' }, 
                { text: 'C. measure', value: 'C' }, 
                { text: 'D. benefit', value: 'D' }
            ] },
        { 
            text: 'drained of one\'s physical or mental resources; very tired', 
            options: [
                { text: 'A. pressured', value: 'A' }, 
                { text: 'B. exhausted', value: 'B' }, 
                { text: 'C. relieved', value: 'C' }, 
                { text: 'D. sleepy', value: 'D' }
            ] }
        ],
        secondSet: [
        { 
            text: 'Regular exercise has benefits.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] },
        { 
            text: 'Proper guidance must be assured before using any gym equipment.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] },
        { 
            text: 'Exercise only makes you lose your energy.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] },
        { 
            text: 'You may have injury if you do not take extra care about the exercise or equipment that you will use.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] },
        { 
            text: 'You must pick any gym equipment that you may find.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] }
        ],
        thirdSet: [
        { 
            text: 'This is where the produced energy is transported and distributed in order to help power the lights and other electrical systems.', 
            options: [
                { text: 'A. inverter', value: 'A' }, 
                { text: 'B. charger', value: 'B' }, 
            ] },
        { 
            text: 'It is the green machine that does not have to be powered on.', 
            options: [
                { text: 'A. energy generating elliptical', value: 'A' }, 
                { text: 'B. self-powered treadmill', value: 'B' }, 
            ] },
        { 
            text: 'This green equipment does not take energy out when plugged in.', 
            options: [
                { text: 'A. energy generating elliptical', value: 'A' }, 
                { text: 'B. self-powered treadmill', value: 'B' }, 
            ] },
        { 
            text: 'This bike also pumps power back into the green.', 
            options: [
                { text: 'A. green stationary bike', value: 'A' }, 
                { text: 'B. green mountain bike', value: 'B' }, 
            ] },
        { 
            text: 'It is the name of the gym in the video.', 
            options: [
                { text: 'A. On the Grid', value: 'A' }, 
                { text: 'B. Off the Grid', value: 'B' },
            ] }
        ],
        fourthSet: [
        { 
            text: 'You need to exercise your arms __________ prevent them from sagging.', 
            options: [
                { text: 'A. in order to', value: 'A' }, 
                { text: 'B. therefore', value: 'B' }, 
                { text: 'C. but', value: 'C' }, 
            ] },
        { 
            text: 'Power-operated gym equipment are harmful to the environment __________ gym owners must consider using eco-friendly ones.', 
            options: [
                { text: 'A. however', value: 'A' }, 
                { text: 'B. so', value: 'B' }, 
                { text: 'C. then', value: 'C' }, 
            ] },
        { 
            text: 'Too much energy for exercise may sometimes be a disadvantage, __________ we must give more importance to the possible benefits.', 
            options: [
                { text: 'A. hence', value: 'A' }, 
                { text: 'B. and', value: 'B' }, 
                { text: 'C. but', value: 'C' }, 
            ] },
        { 
            text: 'I prefer using manual __________ power-operated gym equipment.', 
            options: [
                { text: 'A. also', value: 'A' }, 
                { text: 'B. despite', value: 'B' }, 
                { text: 'C. rather than', value: 'C' }, 
            ] },
        { 
            text: '__________ my gym instructor was absent, I decided to do my fitness routine at home.', 
            options: [
                { text: 'A. On the contrary', value: 'A' }, 
                { text: 'B. Since', value: 'B' }, 
                { text: 'C. But', value: 'C' }, 
            ] },
        { 
            text: 'I requested for a five-minute break __________ I felt exhausted after the two- minute cardio routine.', 
            options: [
                { text: 'A. and', value: 'A' }, 
                { text: 'B. but', value: 'B' }, 
                { text: 'C. because', value: 'C' }, 
            ] },
        { 
            text: 'The facilities and services at Go Green Gym are all eco-friendly, __________, enrolling in any of their fitness programs will make you a contributor to environmental protection.', 
            options: [
                { text: 'A. so', value: 'A' }, 
                { text: 'B. but', value: 'B' }, 
                { text: 'C. and', value: 'C' }, 
            ] },
        { 
            text: 'You have to consult a fitness coach for a suitable plan first __________ enrolling in a gym program.', 
            options: [
                { text: 'A. before', value: 'A' }, 
                { text: 'B. after', value: 'B' }, 
                { text: 'C. next', value: 'C' }, 
            ] },
        { 
            text: 'I still preferred to use my old membership card __________ the free fitness sessions was waived.', 
            options: [
                { text: 'A. although', value: 'A' }, 
                { text: 'B. but', value: 'B' }, 
                { text: '. and', value: 'C' }, 
            ] },
        { 
            text: 'Aside from gym fitness programs, my friends __________ want to try yoga.', 
            options: [
                { text: 'A. and', value: 'A' }, 
                { text: 'B. so', value: 'B' }, 
                { text: 'C. also', value: 'C' }, 
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
        },
        thirdAnswers: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
        },
        fourthAnswers: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: ''
        },
    };
    },
    methods: {
        submitFirstSet() {
            console.log(this.firstAnswers);
    },  submitSecondSet() {
            console.log(this.secondAnswers);
    },  submitThirdSet() {
            console.log(this.thirdAnswers);
    },  submitFourthSet() {
            console.log(this.fourthAnswers);
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