<template>
    <!-- lesson 1 -->
    <section class="flex flex-col w-full px-2 gap-4">
        <!-- title -->
        <div class="">
            <h1 class="text text-gray-400">LESSON 1</h1>
            <h1 class="text-xl text-gray-700">Familiarizing with Learning Tasks</h1>
        </div>
        <section id="" class="my-7">
            <h6>In this lesson, you will learn how to:</h6>
            <ul class="list-disc my-2 ml-4">
                <li>Recognize significant points in a straightforward article on familiar subject.</li>
                <li>Understand relevant information in everyday material.</li>
                <li>Write personal email to a friend about attaining high grades by familiarizing with the learning tasks.</li>
            </ul>
        </section>
        <!-- part 1 -->
        <section class="w-full">
            <h1 class="text-xl">Vocabulary Builder</h1>
            <h6 class="my-2">Relate three words for each of the given terms using the words from the box.</h6>

            <div class="w-10/12 mx-auto">
                <!-- Activity Choices -->
                <div class="grid-container">
                    <div
                      v-for="(choice, index) in choices"
                      :key="index"
                      class="grid-item choices cursor-pointer p-2 rounded-lg shadow-lg text-center"
                      :draggable="true"
                      @dragstart="dragStart($event, choice)"
                      @dragend="dragEnd"
                    >
                      {{ choice }}
                    </div>
                </div>
            
                <!-- Answer Section -->
                <table class="answer-table mx-auto border-0 mt-4 ">
                  <tr v-for="(answer, index) in answers" :key="index">
                    <td width="140px" class="text-left">{{ answer.label }}</td>
                    <td v-for="(slot, slotIndex) in answer.slots" :key="slotIndex" class="">
                      <div
                        class="answer-slot p-2 border border-gray-400 rounded h-12 flex items-center justify-center cursor-pointer mx-2 my-2"
                        @dragover.prevent
                        @drop="drop($event, index, slotIndex)"
                        @click="retractAnswer(index, slotIndex)"
                      >
                        {{ slot }}
                      </div>
                    </td>
                  </tr>
                </table>
            
                <div class="score-card w-full flex items-center my-4">
                    <h2 v-if="showScore" class="mx-2 text-xl">Score: {{ score }}</h2>
                    <div class="ml-auto">
                        <button @click="retry()" v-if="showRetry" class="module_btn mx-2">RETRY</button>
                        <button @click="check()" class="btn_submit mx-2">SUBMIT</button>
                    </div>
                    
                </div>
                
              </div>
              <hr class="my-2"/>
        </section>
        <!-- part 2 -->
        <section class="w-full">
            <h1 class="text-xl">Reading Authentic Text</h1>
            <h6 class="my-2">Read the given passage about familiarizing yourself with learning tasks.</h6>
            <img src="../../../../../public/resources/ReadingAuthenticText.jpg" 
                class="mx-auto my-3"/>
            <p class="my-4">
                "To achieve good grades in different courses, you need to familiarize yourself with the different 
                learning tasks provided by your teachers. These tasks can take various forms that would require 
                you to work individually or in groups with other students. In most social science courses, your 
                teacher may give you homework such as explaining or arguing an idea relevant to the class discussion. 
                This can be in the form of an essay with an expected word count that you may accomplish alone. Other 
                teachers may challenge you with a school project that you can work on with your classmates. This 
                learning task involves making infographics, brochures, and other portfolios that you may enjoy doing 
                with software such as word processing, desktop publishing, and the like. Moreover, you will enjoy 
                working with your classmates on an exciting laboratory experiment that will provide you with actual 
                experience in using laboratory tools while developing your scientific thinking."
            </p>
            <hr class="my-2"/>
        </section>
        <!-- part 3 -->
        <section class="w-full">
            <h1 class="text-xl">Reading Comprehensions Questions</h1>
            <h6 class="my-2">Answer the following questions based on the passage that you have read.</h6>
         
            <form class="my-4">
              <div v-for="(question, qIndex) in secondSet" :key="qIndex" class="mb-4">
                  <p class="my-2">{{ qIndex + 1 }}. {{ question.text }}</p>
                  <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center ml-4">
                  <input type="radio" :id="'first-q' + qIndex + '-' + oIndex" :name="'first-q' + qIndex" :value="option.value" v-model="secondAnswers['q' + (qIndex + 1)]" class="mr-2">
                  <label :for="'first-q' + qIndex + '-' + oIndex">{{ option.text }}</label>
                  </div>
              </div>
              <div class="score-card w-full flex items-center my-4">
                <h2 v-if="showScore" class="mx-2 text-xl">Score: {{ score }}</h2>
                <div class="ml-auto">
                    <button @click="retrySecondSet" v-if="showRetry" class="module_btn mx-2">RETRY</button>
                    <button @click="submitSecondSet" class="btn_submit mx-2">SUBMIT</button>
                </div>
              </div>
            </form>
            <hr class="my-2"/>
        </section>
        <!-- part 4 -->
        <section class="w-full">
            <h1 class="text-xl">Viewing Authentic Text</h1>
            <h6 class="my-2">Examine the given entry for the class standing of a student in a teacher’s class record.</h6>
            
            <!-- table -->
            <div class="p-2">
              <h2 class="text-lg font-bold text-center my-4">Class Standing</h2>
              <div class="flex gap-4 justify-center">
                <div class="p-4">
                  <h3 class="text-lg font-bold">Drill</h3>
                  <p class="text-gray-600">(15%)</p>
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-bold">Homework</h3>
                  <p class="text-gray-600">(15%)</p>
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-bold">Experiment</h3>
                  <p class="text-gray-600">(30%)</p>
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-bold">Subject</h3>
                  <p class="text-gray-600">(40%)</p>
                </div>
              </div>
            </div>
            <hr class="my-4"/>
        </section>
        <!-- part 5 -->
        <section class="w-full">
            <h1 class="text-xl">Reading Comprehensions Questions</h1>
            <h6 class="my-2">Refer to the given entry for the class standing and answer each of the following questions.</h6>
        
            <form class="my-4 w-full">
              <div v-for="(question, index) in thirdSet" :key="index" class="mb-4 flex w-full gap-2 items-center">
                <input 
                      type="text" 
                      v-model="thirdAnswers[index]"
                      class="border-b border-1 border-black-500 w-5/12 flex-grow p-2 mb-auto" />  
                <p class="my-2">{{ index + 1 }}. {{ question }}</p>
              </div>
              <div class="score-card w-full flex items-center my-4">
                <h2 v-if="showScore" class="mx-2 text-xl">Score: {{ score }}</h2>
                <div class="ml-auto">
                    <button @click="retryThirdSet" v-if="showRetry" class="module_btn mx-2">RETRY</button>
                    <button @click="submitThirdSet" class="btn_submit mx-2">SUBMIT</button>
                </div>
              </div>
            </form>

            <hr class="my-2"/>
        </section>
        <!-- part 6 -->
        <section class="w-full">
            <h1 class="text-xl">Grammar Points</h1>
            <div class="flex w-10/12 mx-auto gap-4 my-8">
              <div class="w-5/12">
                <h6 class="my-2">Access the provided link and study the charts on zero and first conditional and future time clauses.</h6>
                <a 
                  href="https://test-english.com/explanation/b1-2/zero-first-conditional-future-time-clauses/"
                  target="_blank"
                  class="font-italic text-blue">
                  Click here
                </a>
              </div>
              <div class="w-7/12">
                <img src="/resources/test-english.jpg" />
              </div>
              
            </div>
            
            <hr class="my-2"/>
        </section>
        <!-- part 7 -->
        <section class="w-full">
            <h1 class="text-xl">Grammar Skills Activity</h1>
            <h6 class="my-2">Examine the conversation between Student A and Student B. Fill in the blanks with the appropriate words inside the parentheses.</h6>

            <table border="1" cellpadding="15px" style="border-collapse: collapse; witdh: 100%">
              <tr v-for="(row, index) in fourthSet" :key="index">
                <td 
                    width="120px" 
                    align="left"
                    style="padding: 15px;">
                  {{ row.student }}
                </td>
                <td style="padding: 15px;">
                  <template v-for="(segment, i) in row.segments" :key="i">
                    <span v-if="segment.type === 'text'">
                      {{ segment.content }}
                    </span>
                    <input 
                          v-if="segment.type === 'input'" 
                          type="text" :id="segment.id" 
                          readonly 
                          class="text-center text-blue border-b" 
                          style="width: 80px;" />
                    <span v-if="segment.type === 'buttons'">
                      ( 
                      <button 
                          v-for="button in segment.buttons" 
                          :key="button.id" 
                          :id="button.id" 
                          @click="button.method" 
                          class="mx-1 px-2 bg-red rounded">
                          {{ button.label }}
                        </button>
                      )
                    </span>
                  </template>
                </td>
              </tr>
            </table>

            <hr class="my-2"/>
        </section>
    </section>
    <!--footer-->
    <section class="w-full flex flex-col px-4">
      <div class="ml-auto">Move to next lesson</div>
      <router-link 
          to="/module1/unit1/lesson2"
          class="ml-auto text-blue">Lesson 2</router-link>
    </section>
</template>
        
<script>
import { ref } from 'vue';

export default {
  data(){
    return{
      secondSet: [
        { 
            text: 'Which learning task is commonly done independently?', 
            options: [
                { text: 'A. homework', value: 'A' }, 
                { text: 'B. school project', value: 'B' }, 
                { text: 'C. essay', value: 'C' }, 
                { text: 'D. experiment', value: 'D' }
            ] },
        { 
            text: 'Which is likely to be the reason for an independent learning task?', 
            options: [
                { text: 'A. It is easy to accomplish alone', value: 'A' }, 
                { text: 'B. It is designed for introverts', value: 'B' }, 
                { text: 'C. It requires focus and concentration', value: 'C' }, 
                { text: 'D. It develops one to be an independent learner', value: 'D' }
            ] },
        { 
            text: 'Which of the following learning tasks is least associated with collaboration?', 
            options: [
                { text: 'A. homework', value: 'A' }, 
                { text: 'B. school projet', value: 'B' }, 
                { text: 'C. essay', value: 'C' }, 
                { text: 'D. experiment', value: 'D' }
            ] },
        { 
            text: 'Why it is important to be familiarized with the different learning tasks?', 
            options: [
                { text: 'A. To spend quality time with classmates', value: 'A' }, 
                { text: 'B. To enjoy doing the assigned learning tasks', value: 'B' }, 
                { text: 'C. To comply with the course requirements', value: 'C' }, 
                { text: 'D. To achieve good grades.', value: 'D' }] },
        { 
            text: 'Which of the following can be an alternative title for this passage?', 
            options: [
                { text: 'A. Course Collaboration', value: 'A' }, 
                { text: 'B. Types of Learning Tasks', value: 'B' }, 
                { text: 'C. Enjoyment of Doing Learning Tasks', value: 'C' }, 
                { text: 'D. School is Cool', value: 'D' }] }
        ],
      secondAnswers: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
      },
      thirdSet: [
          'Which among the components is given the most weight for class standing?', 
          'Which component provides the least contribution to the weighted grade of the class standing?', 
          'In attaining a high grade, which component should be given priority by a student?',
          'Which components are given equal weights for the class standing?',
          'Considering that the average performance for class standing is 83, which of the following can best describe the performance of the student indicated in the given class record: below average, average, or above average?',
      ],
      thirdAnswers: [],
      fourthSet: [
        {
          student: "Student A:",
          segments: [
            { type: "text", content: "I think if we submit the project on time, we " },
            { type: "input", id: "Ans1" },
            {
              type: "buttons",
              buttons: [
                { id: "btn1", label: "will", method: () => this.C1_1() },
                { id: "btn2", label: "will be", method: () => this.C1_2() }
              ]
            },
            { type: "text", content: " pass the course and obtain good grades." }
          ]
        },
        {
          student: "Student B:",
          segments: [
            { type: "input", id: "Ans2" },
            {
              type: "buttons",
              buttons: [
                { id: "btn3", label: "I think so too", method: () => this.C2_1() },
                { id: "btn4", label: "Neither do I", method: () => this.C2_2() }
              ]
            },
            { type: "text", content: " We need to work hard in accomplishing those infographic materials on time as part of our school project." }
          ]
        },
        {
          student: "Student A:",
          segments: [
            { type: "input", id: "Ans3" },
            {
              type: "buttons",
              buttons: [
                { id: "btn5", label: "Well not really", method: () => this.C3_1() },
                { id: "btn6", label: "Exactly!", method: () => this.C3_2() }
              ]
            },
            { type: "text", content: " If we don't prioritize this, we " },
            { type: "input", id: "Ans4" },
            {
              type: "buttons",
              buttons: [
                { id: "btn7", label: "will not", method: () => this.C4_1() },
                { id: "btn8", label: "could not", method: () => this.C4_2() }
              ]
            },
            { type: "text", content: " make it on time." }
          ]
        },
        {
          student: "Student B:",
          segments: [
            { type: "input", id: "Ans5" },
            {
              type: "buttons",
              buttons: [
                { id: "btn9", label: "You're right", method: () => this.C5_1() },
                { id: "btn10", label: "So do I", method: () => this.C5_2() }
              ]
            },
            { type: "text", content: " We will be celebrating soon if we " },
            { type: "input", id: "Ans6" },
            {
              type: "buttons",
              buttons: [
                { id: "btn11", label: "submit", method: () => this.C6_1() },
                { id: "btn12", label: "will submit", method: () => this.C6_2() }
              ]
            },
            { type: "text", content: " it with quality and ahead of time." }
          ]
        }
      ],
    }
  },
  methods:{
    submitSecondSet() {
        console.log(this.secondAnswers);
    },
    C1_1() {
      document.getElementById('Ans1').value = 'will';
    },
    C1_2() {
      document.getElementById('Ans1').value = 'will be';
    },
    C2_1() {
      document.getElementById('Ans2').value = 'I think so too';
    },
    C2_2() {
      document.getElementById('Ans2').value = 'Neither do I';
    },
    C3_1() {
      document.getElementById('Ans3').value = 'Well not really';
    },
    C3_2() {
      document.getElementById('Ans3').value = 'Exactly!';
    },
    C4_1() {
      document.getElementById('Ans4').value = 'will not';
    },
    C4_2() {
      document.getElementById('Ans4').value = 'could not';
    },
    C5_1() {
      document.getElementById('Ans5').value = "You're right";
    },
    C5_2() {
      document.getElementById('Ans5').value = 'So do I';
    },
    C6_1() {
      document.getElementById('Ans6').value = 'submit';
    },
    C6_2() {
      document.getElementById('Ans6').value = 'will submit';
    }
  },  
  // pang matchy matchy boxes assessment
  setup() {
    const choices = ref([
      'Article', 'Assignment', 'Classwork', 'Composition', 'Desktop Publisher',
      'Educational Activity', 'Exercise', 'Inquiry', 'Investigation', 'Observation',
      'Piece of Writing', 'Schoolwork', 'Spreadsheet', 'Study', 'Word Processing'
    ]);

    const answers = ref([
      { label: '1. Homework', slots: ['', '', ''] },
      { label: '2. School Projects', slots: ['', '', ''] },
      { label: '3. Essay', slots: ['', '', ''] },
      { label: '4. Experiment', slots: ['', '', ''] },
      { label: '5. Software', slots: ['', '', ''] }
    ]);

    const draggedItem = ref(null);
    const score = ref(0);
    const showScore = ref(false);
    const showRetry = ref(false);

    const dragStart = (event, choice) => {
      draggedItem.value = choice;
    };

    const dragEnd = () => {
      draggedItem.value = null;
    };

    const drop = (event, answerIndex, slotIndex) => {
      if (!answers.value[answerIndex].slots[slotIndex]) {
        answers.value[answerIndex].slots[slotIndex] = draggedItem.value;
        choices.value = choices.value.filter(choice => choice !== draggedItem.value);
      }
    };

    const retractAnswer = (answerIndex, slotIndex) => {
      const item = answers.value[answerIndex].slots[slotIndex];
      if (item) {
        choices.value.push(item);
        answers.value[answerIndex].slots[slotIndex] = '';
      }
    };

    const check = () => {
      let currentScore = 0;

      // Sample correct answers. Replace with your actual answer logic.
      const correctAnswers = [
        ['Assignment', 'Study', 'Classwork'],
        ['Educational Activity', 'Exercise', 'Schoolwork'],
        ['Piece of Writing', 'Article', 'Composition'],
        ['Investigation', 'Observation', 'Inquiry'],
        ['Desktop Publisher', 'Spreadsheet', 'Word Processing']
      ];

      answers.value.forEach((answer, index) => {
        answer.slots.forEach((slot, slotIndex) => {
          if (correctAnswers[index].includes(slot)) {
            currentScore++;
          }
        });
      });

      score.value = currentScore;
      showScore.value = true;
      showRetry.value = true;
    };

    const retry = () => {
      choices.value = [
        'Article', 'Assignment', 'Classwork', 'Composition', 'Desktop Publisher',
        'Educational Activity', 'Exercise', 'Inquiry', 'Investigation', 'Observation',
        'Piece of Writing', 'Schoolwork', 'Spreadsheet', 'Study', 'Word Processing'
      ];
      
      answers.value = [
        { label: '1. Homework', slots: ['', '', ''] },
        { label: '2. School Projects', slots: ['', '', ''] },
        { label: '3. Essay', slots: ['', '', ''] },
        { label: '4. Experiment', slots: ['', '', ''] },
        { label: '5. Software', slots: ['', '', ''] }
      ];

      score.value = 0;
      showScore.value = false;
      showRetry.value = false;
    };

    //


    return {
      choices,
      answers,
      dragStart,
      dragEnd,
      drop,
      retractAnswer,
      check,
      retry,
      score,
      showScore,
      showRetry
    };
  }
};
</script>

<style scoped>
.answer-slot {
  min-width: 100px;
}
.choices{
    background-color: rgb(255, 197, 197);
}
.choices:active {
  opacity: 0.5;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem; /* Space between items */
    width: 100%;
    max-width: 1200px; /* Optional: max width to fit the viewport */
    margin: 0 auto; /* Center the grid container */
  }
  
  .grid-item {
    background-color: footerRed;
    transition: background-color 0.3s;
    max-width: 200px;
  }
  
  .grid-item:hover {
    background-color: #dfe6ffb9; /* Slightly darker gray on hover */
  }
  
  /* Media queries to control grid columns at different breakpoints */
  @media (max-width: 1200px) {
    .grid-container {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
  
  @media (max-width: 480px) {
    .grid-container {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
  }


.answer-table {
    width: 100%;
    border-collapse: collapse;
  }
  
.answer-table td {
    padding: 0.5rem;
    text-align: center;
  }
  
.answer-slot {
    background-color: #f3f4f6;
    transition: background-color 0.3s;
}
  
.answer-slot:hover {
    background-color: #e5e7eb; /* Slightly darker gray on hover */
}
  
  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
    .answer-table td{
      padding: 0.5rem;
      font-size: 0.875rem; /* Adjust font size for smaller screens */
    }
  }
  
  @media (max-width: 480px) {
    .answer-table td{
      padding: 0.5rem;
      font-size: 0.75rem; /* Further adjust font size for very small screens */
    }
  }
</style>