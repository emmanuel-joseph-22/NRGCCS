<template>
    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left">
        <h1 class="text-4xl font-bold mb-4">Scenematic Ventures</h1>
        <h2 class="text-xl font-semibold">Lesson 2</h2>
        <div class="mt-6">
            <div class="mt-6">
                <h3 class="text-2xl font-bold text-blue-600">This lesson, you will learn how to:</h3>
                <ol class="list-decimal list-inside mt-2 text-lg">
                    <li>Familiarize yourself with the words used in having physical exercise at the gym</li>
                    <li>Describe your experiences about visiting parks using complex question tags</li>
                </ol>
            </div>
        </div>
        <div class="mt-10">
            <h3 class="text-xl font-bold mt-4">Let's get started!</h3>
            <p class="mb-4">Identify the words below that relate to the cinema or one's cinematic experience, then use the words in a sentence.</p>
            <div class="mb-4">
                <span class="block text-lg font-semibold mb-2">TERMS:</span>
                <div class="flex space-x-4">
                    <div class="w-1/2">
                    <label class="flex items-center">
                        <input type="checkbox" class="mr-2">
                        Special effects
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" class="mr-2">
                        Soundtrack
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" class="mr-2">
                        Admission
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" class="mr-2">
                        VIP Section
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" class="mr-2">
                        Noticeboard
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" class="mr-2">
                        Screen
                    </label>
                    </div>
                    <div class="w-1/2 ml-12">
                        <label class="flex items-center">
                        <input type="checkbox" class="mr-2">
                            Projector
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2">
                            Props
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2">
                            Lighting design
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2">
                            Musical scoring
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2">
                            Box office
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2">
                            Costume Design
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" class="mt-4 mb-8 px-4 py-2 bg-grey text-black rounded">Submit</button>
        </div>
        <div class="mt-6">
            <h3 class="text-2xl font-bold text-blue-600">This lesson, you will learn how to:</h3>
            <ol class="list-decimal list-inside mt-2 text-lg">
            <li>1. Describe your movie experiences using vocabulary words aboutwatching films at the cinema</li>
            <li>2. Use complex question tags in checking information</li>
            </ol>
        </div>
        <div class="mt-10 mb-4">
            <h3 class="text-xl font-bold">Let's get started!</h3>
            <p class="text-lg mt-2">Identify the words below that relate to the cinema or one’s cinematic experience, then use the words in a sentence.</p>
        </div>
        <hr>
        <h3 class="text-xl font-bold mt-8">The big screen</h3>
        <p class="text-lg mt-2 mt-4 mb-4 text-justify">
            Despite the rise of online platforms, there is still something special about the cinematic experience of watching a film in a movie house. 
            The large screen and surround sound can add to the experience, you feel like you are part of the film. 
            One of the most extraordinary things about a trip to the cinema is the sense of excitement as you take your seat. 
            Whether it's in the balcony or closer to the screen, the excitement for the upcoming film is seen. 
            It's always worth taking a quick look at the noticeboard to see what other films are showing. 
            Checking for special events or promotions before watching a movie is also common. 
            Once the lights dim and the viewing begins, it's time to focus on the main attraction. 
            The cost of admission to a cinema can vary. Despite the amount spent, the cinematic experience is worth it. 
            From the moment the film starts, you are transported to another world. Thus, for the next hour or two, you will be fully involved in the story.
        </p>
        <hr>
        <h3 class="text-xl font-bold mt-8">READING</h3>
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
        <hr>
        <h3 class="text-xl font-bold mt-8">LISTENING</h3>
        <p class="text-lg mt-2">Directions: Listen to the following questions related to cinematic experience. 
            Choose the most appropriate response to each question. (In audio form)+
        </p>
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
        <h3 class="text-xl font-bold mt-8">Classroom Activity</h3>
        <p class="text-lg mt-2 mb-8">Write a short essay about your own cinematic experience. 
            Come up with your own title for work and please be guided by the scoring rubrics below:
        </p>
        <hr>
        <h3 class="text-xl font-bold mt-8 mb-8">Essay Writing Rubrics</h3>
        <hr>
        <h3 class="text-xl font-bold mt-8 mb-8">Classroom Activity</h3>
        <p class="text-lg mt-2 mb-8">Write a short essay about your own cinematic experience. 
            Come up with your own title for work and please be guided by the scoring rubrics below:
        </p>
        <hr>
        <h3 class="text-xl font-bold mt-8 mb-8">Essay Writing Rubrics</h3>
    </section>
</template>

<script>
export default {
    name: 'Lesson2',
    data() {
    return {
        firstSet: [
        { 
            text: 'What does the text say about cinematic experience?', 
            options: [
                { text: 'A. There is still something special about it despite the rise of streaming platforms', value: 'A' }, 
                { text: 'B. Watching a film in a theater is a worthwhile venture.', value: 'B' }, 
                { text: 'C. The cost of admission to a cinema can vary.', value: 'C' }, 
                { text: 'D. It always feels like you are in the middle of the action in a movie.', value: 'D' }
            ] },
        { 
            text: 'Why is the sense of anticipation mentioned in the text?', 
            options: [
                { text: 'A. Because the experience in a cinema is a worthwhile venture.', value: 'A' }, 
                { text: 'B. Because watching a movie is an extraordinary experience.', value: 'B' }, 
                { text: 'C. Because the large screen and surround sound add to the overall experience in a cinema.', value: 'C' }, 
                { text: 'D. Because streaming platforms cannot replace a movie experience.', value: 'D' }
            ] },
        { 
            text: 'What is suggested to be done before a movie starts?', 
            options: [
                { text: 'A. Focus on the main attraction.', value: 'A' }, 
                { text: 'B. Take a look at the cinema noticeboard.', value: 'B' }, 
                { text: 'C. Pay for the entrance fees.', value: 'C' }, 
                { text: 'D. Reserve seats before watching a film.', value: 'D' }
            ] },
        { 
            text: 'How much does the text mention of the cost of admission in a cinema?', 
            options: [
                { text: 'A. The amount ranges from 250 - 300 pesos.', value: 'A' }, 
                { text: 'B. The amount of admission varies.', value: 'B' }, 
                { text: 'C. The text does not mention anything about the amount of admission.', value: 'C' }, 
                { text: 'D. The amount of admission is shown in the noticeboard.', value: 'D' }
            ] },
        { 
            text: 'What is the conclusion of the text regarding cinematic experience?', 
            options: [
                { text: 'A. There is still something special about it despite the rise of streaming platforms.', value: 'A' }, 
                { text: 'B. Watching a film in a theater is a good personal venture.', value: 'B' }, 
                { text: 'C. The cost of admission to a cinema can vary.', value: 'C' }, 
                { text: 'D. It always feels like you are in the middle of the action in a movie.', value: 'D' }
            ] }
        ],
        secondSet: [
        { 
            text: 'Which do you prefer, watching movies online or in the cinema?', 
            options: [
                { text: 'A. It was a great experience.', value: 'A' }, 
                { text: 'B. I prefer watching movies in the cinema rather than watching online.', value: 'B' }, 
                { text: 'C. I like watching Netflix. Most of the series there are so unpredictable.', value: 'C' }, 
                { text: 'D. I am excited to watch the movie.', value: 'D' }
            ] },
        { 
            text: 'Where do you usually like to sit when watching movies in the cinema?', 
            options: [
                { text: 'A. I usually like to sit on the balcony rather than in the orchestra.', value: 'A' }, 
                { text: 'B. I find seats in the balcony more expensive than the seats in the orchestra.', value: 'B' }, 
                { text: 'C. Foreign movies with subtitles are easier to understand than without subtitles.', value: 'C' }, 
                { text: 'That movie is not for kids.', value: 'D' }
            ] },
        { 
            text: 'I find that scene very interesting and extraordinary. I hope to see more.', 
            options: [
                { text: 'A. I think you\'re right. The plot was so predictable.', value: 'A' }, 
                { text: 'B. I agree with you. I have seen that also.', value: 'B' }, 
                { text: 'C. Fight scenes scare me.', value: 'C' }, 
                { text: 'D. Despite the poor narrative, there are still scenes worth watching.', value: 'D' }
            ] },
        { 
            text: 'That movie is for general admission.Would you like to see it?', 
            options: [
                { text: 'A. General admission movies are boring.', value: 'A' }, 
                { text: 'B. I like suspense thriller movies. It\'s exciting and can lead to so much anticipation and anxiety.', value: 'B' }, 
                { text: 'C. It\'s written on the noticeboard. Haven\'t you seen it?', value: 'C' }, 
                { text: 'D. I thought it was Rated R which means that it is limited to some groups of audience. Then, it\'s good news, I can watch it also.I would love to.', value: 'D' }
            ] },
        { 
            text: 'I\'m very disappointed with how the movie ended. That is not what I was expecting.', 
            options: [
                { text: 'A. Did you eat popcorn during the movie?', value: 'A' }, 
                { text: 'B. I opt not to watch it anymore. The movie ticket is unreasonably priced.', value: 'B' }, 
                { text: 'C. I feel like a VIP everytime I watch a movie in balcony seats.', value: 'C' }, 
                { text: 'D. Don\'t be a spoiler ! I would still watch the movie in the cinema.', value: 'D' }
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