<template>    <section class="flex flex-col w-full gap-2 my-8">
        <!-- title -->
        <div class="mb-4">
            <h1 class="text text-gray-400">LESSON 4</h1>
            <h1 class="text-xl text-gray-700">Consulting Class Facilitators & Advisers</h1>
        </div>
        <p><span class="font-bold">Time Allotment</span> - 3 hours</p>
        <p>This lesson deals with describing students’ experiences in consulting with their teachers on school matters using past simple tense.
        </p>
        <p><span class="font-bold">Language Functions: </span>This lesson deals with describing students’ experiences in consulting with their teachers on school matters using past simple tense.</p>
        <p><span class="font-bold">Grammar Points: </span>Past Simple</p>
    </section>
    <hr class="my-2" />
    <!-- objectives -->
    <section class="w-full my-8">
        <h1 class="text-lg">In this lesson, you will learn how to:</h1>
        <ul class="list-disc my-2 ml-4">
            <li>determine meanings of commonly used words on school matters;</li>
            <li>read conversations between a student and a teacher on school matters; and</li>
            <li>describe experiences in consulting with teachers on school matters using past simple tense.</li>
        </ul>
    </section>
    <hr class="my-2" />
    <!-- part 1 -->
    <section class="w-full my-8 flex">
        <div class="w-1/2 flex flex-col gap-2">
            <h1 class="text-lg">Pre-Task: Picture analysis</h1>
            <p>Look at the photo and answer the given question.</p>
            <p>What do you think the girl is doing with her teacher?</p>
            <b>Discuss the questions</b>
            <p>1. Have you ever talked to your teacher about school matters?</p>
            <p>2. When was the last time you were in a similar situation?</p>
            <p>3. What school matter did you consult with your teacher about? Why?</p>
            <p>4. Why do you think consulting a teacher on a school matter is important in getting good grades?</p>
        </div> 
        <div class="w-1/2">
            <img src="" alt="picture analysis" />
        </div> 
    </section>
    <section class="w-full my-8">
        <h1 class="text-lg">Vocabulary Builder</h1>
        <h6 class="my-2">Inside the box are the common words used to describe school matters. Match them with the pictures provided below.</h6>

    </section>
    <!-- part 2 -->
    <!-- part 2 -->
    <section class="w-full my-8">
        <h1 class="text-lg">Reading Comprehension.</h1>
        <h6 class="my-2">Read the conversation between a student and a teacher. Answer the questions.</h6>
        <p><b>Teacher: </b>(With anger) Why you have not completed your homework? </p>
        <p><b>Student: </b>Sir, I had a critical headache yesterday after I left home from school.</p>
        <p><b>Teacher: </b>Do not lie to me.</p>
        <p><b>Student: </b>No, Sir, I am not lying.</p>
        <p><b>Teacher: </b>May I contact your parents and tell them about this? </p>
        <p><b>Student: </b>No, Sir. (students speak with low sound). Please don’t say to my parents.</p>
        <p><b>Teacher: </b>Then, when will you do the homework properly?</p>
        <p><b>Student: </b>Sir, from now onwards I will finish it without any obstruct. </p>
        <p><b>Teacher: </b>if you have any difficulties regarding homework, ask me, and I will clarify your doubts.</p>
        <p><b>Student: </b>Ok sir, I will ask my doubts from now.</p>
        <p><b>Teacher: </b>And do not repeat this. Is it clear?</p>
        <p><b>Student: </b>Yes, Sir, I will not repeat this.</p>
        
        <div class="mt-4">Questions</div>
        <p>1. (To include questions dealing with the main points of the
            conversation read. Multiple Choice.)</p>
    </section>
    <hr class="my-2" />
    <section class="w-full my-8">
        <h1 class="text-lg">Viewing.</h1>
        <h6 class="my-2">Watch the video on Talking to a teacher and answer the questions.</h6>

        <!-- video -->
         vid res here
    </section>
    <hr class="my-2" />
    <!-- last one -->
    <section class="w-full my-8">
        <h1 class="text-xl">Questions</h1>

        <form class="my-4">
            <div v-for="(question, qIndex) in firstSet" :key="qIndex" class="mb-4">
                <p class="my-2">{{ qIndex + 1 }}. {{ question.text }}</p>
                <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center ml-4">
                <input type="radio" :id="'first-q' + qIndex + '-' + oIndex" :name="'first-q' + qIndex" :value="option.value" v-model="firstAnswers['q' + (qIndex + 1)]" class="mr-2">
                <label :for="'first-q' + qIndex + '-' + oIndex">{{ option.text }}</label>
                </div>
            </div>
            <div class="score-card w-full flex items-center my-4">
              <h2 v-if="showScore" class="mx-2 text-xl">Score: {{ score }}</h2>
              <div class="ml-auto">
                  <button @click="retryFirstSet" v-if="showRetry" class="module_btn mx-2">RETRY</button>
                  <button @click="submitFirstSet" class="btn_submit mx-2">SUBMIT</button>
              </div>
            </div>
        </form>
    </section>
    <hr class="my-2" />
    <!--footer-->
    <section class="w-full flex flex-col px-4">
        <div class="ml-auto">Move to next lesson</div>
        <router-link 
            to="/module1/unit1/lesson5"
            class="ml-auto text-blue">Lesson 5</router-link>
    </section>
</template>


<script>
export default{
    data(){
        return{
            showFirstSetScore: false,
            score: 0,
            firstSet: [
                { 
                    text: 'Which of the following is a common reason for a student to consult a subject teacher?', 
                    options: [
                        { text: 'A. Submitting assignment', value: 'A' }, 
                        { text: 'B. Asking for special classes', value: 'B' }, 
                        { text: 'C. Both A and B ', value: 'C' }, 
                        { text: 'D. None of the above', value: 'D' }
                    ] },
                { 
                    text: 'What should be clarified to the teacher whenever a student fails to submit an assignment?', 
                    options: [
                        { text: 'A. Reason for not submitting', value: 'A' }, 
                        { text: 'B. Health condition', value: 'B' }, 
                        { text: 'C. Date to submit the assignment', value: 'C' }, 
                        { text: 'D. Teachers available time', value: 'D' }
                    ] },
                { 
                    text: 'What was the teachers advice before submitting the assignment?', 
                    options: [
                        { text: 'A. Cover properly', value: 'A' }, 
                        { text: 'B. Ask a classmate to read', value: 'B' }, 
                        { text: 'C. Check for errors', value: 'C' }, 
                        { text: 'D. Place in a neat folder', value: 'D' }
                    ] },
                { 
                    text: 'In getting an essay assignment correctly, what should be considered?', 
                    options: [
                        { text: 'A. Number of words', value: 'A' }, 
                        { text: 'B. Topics ', value: 'B' }, 
                        { text: 'C. Use of illustrations', value: 'C' }, 
                        { text: 'D. All except C ', value: 'D' }] },
                { 
                    text: 'What is the importance of consulting the teacher on school matters?', 
                    options: [
                        { text: 'A. To get the assignment done correctly', value: 'A' }, 
                        { text: 'B. To know the teacher well', value: 'B' }, 
                        { text: 'C. To ask for a special request from the teacher', value: 'C' }, 
                        { text: 'D. To get additional grades', value: 'D' }] 
                }
            ],
            firstAnswers: {
                q1: '',
                q2: '',
                q3: '',
                q4: '',
                q5: '',
            },
        }
    },
    methods: {
        submitFirstSet() {
            this.showFirstSetScore = true;
            this.score[0] = 1;
        },
    }
}
</script>