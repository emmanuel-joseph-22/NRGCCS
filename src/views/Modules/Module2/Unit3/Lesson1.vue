<template>
    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left">
    <h1 class="text-4xl font-bold mb-4">A Walk That's Always Worthwhile</h1>
    <h2 class="text-xl font-semibold">Lesson 1</h2>
    <div class="mt-6">
        <h3 class="text-2xl font-bold text-blue-600">This lesson, you will learn how to:</h3>
        <ol class="list-decimal list-inside mt-2 text-lg">
        <li>Express your ideas about walking in the park</li>
        <li>Describe your experiences about visiting parks using complex question tags</li>
        </ol>
    </div>
    <!--FIRST SET-->
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
    <!--SECOND SET-->
    <div class="mt-10">
        <h3 class="text-xl font-bold">Let’s take a walk</h3>
        <p class="text-lg mt-2 mb-4 text-justify">
        Rizal Park, more commonly known as Luneta, is the Philippines’ national park found at the heart of Manila.
        It has many appealing areas. Aside from the statue of our national hero, Dr. Jose Rizal, it also has buildings for exhibit.
        Artworks of Filipinos are featured here. In addition, there is also a garden with statues showing how our national hero was shot to death.
        This garden is the exact spot where Dr. Rizal was executed. Also, several other garden areas with ponds and fountains can be seen in this park.
        It can be said that this park is not only for leisure. More than being a place to walk, this park is truly an icon of the Philippine history itself.
        </p>
        <h3 class="text-xl font-bold">READING</h3>
        <p class="text-lg mt-2">Read A Walk That’s Always Worthwhile and answer the following:</p>
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
    </div>
    <hr>
    <h3 class="text-xl font-bold mt-10 mb-8">Let’s take a walk</h3>
    <p class="text-lg mt-2 mb-2">Based on this video, choose the correct answer.</p>
    <div class="video-container">
        <div class="aspect-w-16 aspect-h-9 mb-8">
        <iframe src="https://www.youtube.com/embed/3mFcFNXaExA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <div class="flex space-x-4">
        <!--THIRD SET-->
        <!--LEFT-->
        <div class="w-1/2">
        <p class="text-lg mt-4">a. Complete the following based on the vlogger’s statements.</p>
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
        </div>
        <!--FOURTH SET-->
        <!--RIGHT-->
        <div class="w-1/2 ml-12">
        <p class="text-lg mt-4">b. Listen again, are the following sentences true or false?</p>
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
        </div>
    </div>
    <hr>
    <div class="mt-10">
        <h3 class="text-xl font-bold">GRAMMAR POINTS</h3>
        <p class="text-lg mt-4">
        Read on how question tags are formed through this 
        <a href="https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/question-tags" target="_blank" style="color: blue;" class="inline-flex items-center">
            British Council link
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-left: 4px;">
            <path d="M14 3v2h3.59l-9.83 9.83 1.42 1.42L19 6.41V10h2V3z"/>
            <path d="M5 5h4V3H3v6h2z"/>
            <path fill="none" d="M0 0h24v24H0z"/>
            </svg>
        </a>
        </p>
        <h3 class="text-xl font-bold mt-8">GRAMMAR POINTS</h3>
        <p class="text-lg mt-4">Choose the appropriate tag question for the each of the following statements.</p>
        <form @submit.prevent="submitFifthSet" class="mt-4">
        <div v-for="(question, qIndex) in fifthSet" :key="qIndex" class="mb-4">
            <p class="font-bold">{{ qIndex + 1 }}. {{ question.text }}</p>
            <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center ml-4">
                <input type="radio" :id="'fifth-q' + qIndex + '-' + oIndex" :name="'fifth-q' + qIndex" :value="option.value" v-model="fifthAnswers['q' + (qIndex + 1)]" class="mr-2">
                <label :for="'fifth-q' + qIndex + '-' + oIndex">{{ option.text }}</label>
            </div>
        </div>
        <button type="submit" class="mt-4 mb-8 px-4 py-2 bg-grey text-black rounded">Submit</button>
        </form>
    </div>
    <hr>
        <h3 class="text-xl font-bold mt-8">PRONUNCIATION</h3>
        <p class="text-lg mt-2 mb-4 text-justify">
            The words listed below are all related to walking at the park. 
            For you to be able to say the words properly, look for the correct pronunciation of the listed words and practice pronouncing them for mastery.
        </p>
    <hr>
        <h3 class="text-xl font-bold mt-8">CLASSROOM ACTIVITY</h3>
        <p class="text-lg mt-2 mb-4 text-justify">
            Write a paragraph that describes the Rizal Park, or any park that you like to visit. 
            Come up with your own title for work and please be guided by the scoring rubrics below:
            Paragraph Writing Rubrics
        </p>
    </section>
</template>

<script>
export default {
    name: 'Lesson1',
    data() {
    return {
        firstSet: [
        { 
            text: 'on every side of', 
            options: [
                { text: 'A. around', value: 'A' }, 
                { text: 'B. over', value: 'B' }, 
                { text: 'C. behind', value: 'C' }, 
                { text: 'D. above', value: 'D' }
            ] },
        { 
            text: 'very large in size, quantity, or extent', 
            options: [
                { text: 'A. size', value: 'A' }, 
                { text: 'B. enormous', value: 'B' }, 
                { text: 'C. wide', value: 'C' }, 
                { text: 'D. narrow', value: 'D' }
            ] },
        { 
            text: 'a sidewalk', 
            options: [
                { text: 'A. step', value: 'A' }, 
                { text: 'B. chair', value: 'B' }, 
                { text: 'C. road', value: 'C' }, 
                { text: 'D. pavement', value: 'D' }
            ] },
        { 
            text: 'go somewhere with (someone) as a companion or escort', 
            options: [
                { text: 'A. include', value: 'A' }, 
                { text: 'B. accompany', value: 'B' }, 
                { text: 'C. guide', value: 'C' }, 
                { text: 'D. watch', value: 'D' }] },
        { 
            text: 'done, situated, or used out of doors', 
            options: [
                { text: 'A. outdoor', value: 'A' }, 
                { text: 'B. inside', value: 'B' }, 
                { text: 'C. indoor', value: 'C' }, 
                { text: 'D. beside', value: 'D' }] }
        ],
        secondSet: [
        { 
            text: 'What is the Rizal Park known as?', 
            options: [
                { text: 'A. national park', value: 'A' }, 
                { text: 'B. pet park', value: 'B' }, 
                { text: 'C. national zoo', value: 'C' }
            ] },
        { 
            text: 'The statue of this Philippine national hero can be found at the Rizal Park.', 
            options: [
                { text: 'A. Antonio Luna', value: 'A' }, 
                { text: 'B. Dr Jose Rizal', value: 'B' }, 
                { text: 'C. Emilio Jacinto', value: 'C' }
            ] },
        { 
            text: 'All of the following can be found at the Rizal Park except:', 
            options: [
                { text: 'A. ponds', value: 'A' }, 
                { text: 'B. gardens', value: 'B' }, 
                { text: 'C. forests', value: 'C' }
            ] },
        { 
            text: 'Which of the following statements is true?',
            options: [
                { text: 'A. Rizal Park is an amusement park', value: 'A' }, 
                { text: 'B. Rizal Park is a museum', value: 'B' }, 
                { text: 'C. Rizal Park has statues that show the execution of Dr. Jose Rizal', value: 'C' }
            ] },
        { 
            text: 'Which of the following statements is false?', 
            options: [
                { text: 'A. Dr. Jose Rizal is our national hero in the Philippines', value: 'A' }, 
                { text: 'B. Rizla Park is in Batangas', value: 'B' }, 
                { text: 'C. Dr. Jose Rizal was shot in Luneta', value: 'C' }
            ] }
        ],
        thirdSet: [
        { 
            text: 'There are paintings on the wall which show Philippines __________.', 
            options: [
                { text: 'A. fountain', value: 'A' }, 
                { text: 'B. culture', value: 'B' }, 
                { text: 'C. garden', value: 'C' }
            ] },
        { 
            text: 'Looking __________ is interesting.', 
            options: [
                { text: 'A. around', value: 'A' }, 
                { text: 'B. behind', value: 'B' }, 
                { text: 'C. above', value: 'C' }
            ] },
        { 
            text: 'But there is a big __________.', 
            options: [
                { text: 'A. garden', value: 'A' }, 
                { text: 'B. fountain', value: 'B' }, 
                { text: 'C. statue', value: 'C' }
            ] },
        { 
            text: 'It is really __________ to witness this execution site here.', 
            options: [
                { text: 'A. interesting', value: 'A' }, 
                { text: 'B. exciting', value: 'B' }, 
                { text: 'C. fun', value: 'C' }
            ] },
        { 
            text: 'The day at the Rizal Park ends with a beautiful dancing __________ show.',
            options: [
                { text: 'A. peacock', value: 'A' }, 
                { text: 'B. bamboo', value: 'B' }, 
                { text: 'C. fountain', value: 'C' }
            ] }
        ],
        fourthSet: [
        { 
            text: 'There is a statue of Lapu-lapu at Rizal Park.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] },
        { 
            text: 'According to the vlogger Erol Avanoglu, he visited Rizal Park five years ago.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] },
        { 
            text: 'The first thing that can be seen at the Chinese garden is the orchidarium.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] },
        { 
            text: 'The entrance fee for adults to the execution site of Dr. Jose Rizal is twenty pesos.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] },
        { 
            text: 'There is a dancing fountain show at the park in the evening.', 
            options: [
                { text: 'TRUE', value: 'TRUE' }, 
                { text: 'FALSE', value: 'FALSE' }
            ] }
        ],
        fifthSet: [
        {
            text: "He went to the park with his friend, __________?",
            options: [
                { text: "A. he did?", value: "A" },
                { text: "B. did he?", value: "B" },
                { text: "C. didn\'t he?", value: "C" }
            ]
            },
        { 
            text: 'I brought my entrance ticket, __________?', 
            options: [
                { text: "A. didn\'t I?", value: "A" },
                { text: "B. wasn\'t I", value: "B" },
                { text: "C. did I?", value: "C" }
            ] },
        { 
            text: 'He was at the park gate two hours ago, __________?',
            options: [
                { text: "A. didn\'t he?", value: "A" },
                { text: "B. wasn\'t he", value: "B" },
                { text: "C. did he?", value: "C" }
            ] },
        { text: 'He did not see the main fountain of the park, __________?', 
            options: [
                { text: "A. don\'t they?", value: "A" },
                { text: "B. did he", value: "B" },
                { text: "C. didn\'t' he?", value: "C" }
            ] },
        { 
            text: 'His bike was just bought yesterday, __________?', 
            options: [
                { text: "A. didn\'t he?", value: "A" },
                { text: "B. isn\'tite", value: "B" },
                { text: "C. wasn\'t' it?", value: "C" }
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
        q5: ''
        },
        fifthAnswers: {
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
    },
        submitThirdSet(){
        console.log(this.thirdAnswers);
    },
    submitFourthSet(){
        console.log(this.fourthAnswers);
    },
    submitFifthSet(){
        console.log(this.fifthAnswers);
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