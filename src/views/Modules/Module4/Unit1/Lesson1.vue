<template>
    <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center">
        <h1 class="text-6xl font-bold mb-3">The World's Language</h1>
        <h2 class="text-xl font-semibold">Lesson 1</h2>
      </div>
      <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
        <div class="mt-6">
          <ol class="list-decimal list-inside mt-7 text-lg">
            <h3 class="text-4xl font-bold text-blue-600">LESSON OBJECTIVES:</h3>
            <li>Learn to describe places</li>
            <ol class="list-decimal list-inside mt-5 text-lg">
              <h3 class="text-2xl font-bold text-blue-600">Grammar:</h3>
              <li>Utilize a broader range of intensifiers such as too and enough</li>
            </ol>
            <ol class="list-decimal list-inside mt-5 text-lg">
              <h3 class="text-4xl font-bold text-blue-600">Vocabulary:</h3>
              <li>Travel and Language</li>
            </ol>
          </ol>
          <div class="image-container text-center">
    <img src="/resources/Itchy_feet.jpg" alt="Reading Authentic Text" style="max-width: 50%; height: auto;" />  
  </div>
  </div>
</section>

    <section class="w-full mt-5">
      <h1 class="text-xl">VOCABULARY: Travel</h1>
      <h6 class="my-2 font-bold">a. Match the places in the box to the expressions.</h6>
  
      <div class="w-10/12 mx-auto">
        <!-- Activity Choices -->
        <table class="choices-table mx-auto border-0 mt-4">
          <tr>
            <td v-for="(choice, index) in choices" :key="index" class="text-center p-2 rounded-lg shadow-lg cursor-pointer"
                :draggable="true" @dragstart="dragStart($event, choice)" @dragend="dragEnd">
              {{ choice }}
            </td>
          </tr>
        </table>
  
        <!-- Answer Section -->
        <table class="answer-table mx-auto border-0 mt-10 text-center" >
          <tr v-for="(answer, index) in answers" :key="index">
            <td width="10px" class="text-left">{{ answer.label }}</td>
            <td v-for="(slot, slotIndex) in answer.slots" :key="slotIndex" class="text-center">
              <div class="answer-slot flex items-center justify-center cursor-pointer mx-2 my-2 w-1/2"
                   @dragover.prevent @drop="drop($event, index, slotIndex)" @click="retractAnswer(index, slotIndex)"
                   :class="{ 'active': slot === '' }">
                <span>{{ slot ? slot : '' }}</span>
              </div>
            </td>
          </tr>
        </table>
  
        <!-- Score and Actions -->
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
    <section class="w-full">
      <h6 class="my-2 font-bold">b. Answer the following.</h6>
  
      <form class="my-4 w-full">
        <div v-for="(question, index) in thirdSet" :key="index" class="mb-4 flex w-full gap-2 items-center">
          <p class="my-2">{{ index + 1 }}. {{ question }}</p>
          <input 
            type="text" 
            v-model="thirdAnswers[index]"
            class="border-b border-1 border-black-500 w-5/12 flex-grow p-2 mb-auto" />
        </div>
        <div class="score-card w-full flex items-center my-4">
          <h2 v-if="showScore" class="mx-2 text-xl">Score: {{ score }}</h2>
          <div class="ml-auto">
            <button @click="submitThirdSet" class="btn_submit mx-2">SUBMIT</button>
          </div>
        </div>
      </form>
  
      <hr class="my-2" />
    </section>
    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
        <h3 class="text-lg">READING</h3>
        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center">
        <h1 class="text-4xl font-bold mb-3">PHOTO ABOUT TRAVELING</h1>
      </div>
      <br>
      <p class="text-xs mt-2 mb-4 text-justify">DANCING,BADLY </p>
      <p class="text-xs mt-2 mb-4 text-justify">"The dancing gives me an opportunity to see places 
          I'd never get to otherwise. I love to travel. The people and experiences have taught me a great deal.” – Matt Harding</p>
          <br>
          <p class="text-xs mt-2 mb-4 text-justify">In 2003, Matt Harding quit his day job to embark on a journey 
          that would lead him to more than 39 countries in seven continents. Best known for a dance that looks very similar to running in place while snapping, Matt and his dance eventually attracted the attention of Stride Gum.
          The company then paid Matt to travel, dance and record videos.</p>
          <br>
          <p class="text-xs mt-2 mb-4 text-justify">Matt has danced with locals in Mulindi, Rwanda; in a narrow canyon in Petra, Jordan; 
          on a lush hillside overlooking Machu Picchu in Peru; and in a crowded street in Tokyo, Japan, all on his sponsor's dime. 
          Although he no longer actively updates his website, the videos live on, as does his collection of short travel stories on social media and elsewhere, and make for an entertaining and inspiring journey around the world.
              – (excerpt from the Travel Story Tales: 10 Inspiring Traveler’s Stories from Around the World, August 20, 2022; https://www.eaglecreek.com/blogs/articles/inspiring-travelertales-around-world)</p>
              <ol class="list-decimal list-inside mt-10 text-xs">
      <h2 class="text-xl mb-2">a. Read the excerpt and answer the following.</h2>
      <li> 1. What is the profession of Matt Harding?</li>
      <li> 2. Do you think Matt is one of those early breeds of bloggers/vloggers? Provide specific statements to prove your answer.</li>
      <li> 3. Does Matt still do what he used to do? Infer from the excerpt.</li>
    </ol>
    <ol class="list-decimal list-inside mt-5 text-xs">
      <h2 class="text-xl mb-2">b. Refer to the introductory comic situation.</h2>
      <li> 1. Understanding the comics, what does the line “Food goes in here!” imply?</li>
    </ol>
  </section>
  
  <section class="w-full">
      <h1 class="text-xl">Vocabulary Builder</h1>
      <h6 class="my-2">Relate three words for each of the given terms using the words from the box.</h6>
  
      <div class="w-3/4 mx-auto">
        <!-- Combined choice Section -->
        <table class="combined-table mx-auto border-0 mt-2">
          <tbody>
            <tr v-for="(choice, index) in choice" :key="index">
              <td class="p-2 border border-gray-400 rounded text-center">{{ choice.name }}</td>
              <td class="p-2 border border-gray-400 rounded text-center">{{ choice.location }}</td>
              <td class="py-2 border border-gray-400 text-center">
</td>
            </tr>
          </tbody>
        </table>
  
        <!-- Answer Section -->
        <table class="answer-table mx-auto border-0 mt-4">
  <thead>
    <tr>
      <th class="py-2 border border-gray-400 text-center">Travel Spot</th>
      <th class="py-2 border border-gray-400 text-center">Name</th>
      <th class="py-2 border border-gray-400 text-center">Location</th>
      <th class="py-2 border border-gray-400 text-center">How will you describe each travel spot</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(answer, index) in answer" :key="index" class="py-2 border border-gray-400 text-center">
      <td width="180px" class="text-left" v-html="answer.label"></td>
      <td class="py-2 border border-gray-400 text-center">
        <div class="answer-input-wrapper">
          <input v-model="answer.name" class="answer-input">
        </div>
      </td>
      <td class="py-2 border border-gray-400 text-center">
        <div class="answer-input-wrapper">
          <input v-model="answer.location" class="answer-input">
        </div>
      </td>
      <td class="py-2 border border-gray-400 text-center">
        <div class="answer-input-wrapper">
          <input v-model="answer.description" class="answer-input">
        </div>
      </td>
    </tr>
  </tbody>
</table>

        <!-- scores and Control Buttons -->
        <div class="scores-card w-full flex items-center my-4">
          <h2 v-if="showscoress" class="mx-2 text-xl">scores: {{ scores }}</h2>
          <div class="ml-auto">
            <button @click="trial()" v-if="showtrial" class="module_btn mx-2">trial</button>
            <button @click="checks()" class="btn_submit mx-2">SUBMIT</button>
          </div>
        </div>
      </div>
      <hr class="my-2"/>
    </section>
  
  
  <section class="w-full mt-10">
      <h1 class="text-sm">GRAMMAR: Intensifiers; too, enough. (Lecture link TOO and ENOUGH | Use and meaning in English)</h1>
      <h6 class="mt-4 mb-4 font-bold">Fill in the correct word (too or enough).</h6>
  
      <table border="1" cellpadding="15px" style="border-collapse: collapse; width: 100%">
        <tr v-for="(row, index) in fourthSet" :key="index">
          <td width="120px" align="left" style="padding: 15px;">
            {{ row.number }}
          </td>
          <td style="padding: 15px;">
            <template v-for="(segment, i) in row.segments" :key="i">
              <span v-if="segment.type === 'text'">
                {{ segment.content }}
              </span>
              <input v-if="segment.type === 'input'" type="text" :id="segment.id" readonly class="text-center text-blue border-b" style="width: 80px;" />
              <span v-if="segment.type === 'buttons'">
                (
                <button v-for="button in segment.buttons" :key="button.id" :id="button.id" @click="button.method" class="mx-1 px-2 bg-red rounded">
                  {{ button.label }}
                </button>
                )
              </span>
            </template>
          </td>
        </tr>
      </table>
  
      <div class="score-card w-full flex items-center my-4">
        <h2 v-if="showScore" class="mx-2 text-xl">Score: {{ score }}</h2>
        <div class="ml-auto">
          <button @click="retry()" v-if="showRetry" class="module_btn mx-2">RETRY</button>
          <button @click="correct()" class="btn_submit mx-2">SUBMIT</button>
        </div>
      </div>
  
      <hr class="my-2"/>
    </section>
  
  
    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left">
      <h3 class="text-xl font-bold">LISTENING AND VIEWING</h3>
      <p class="text-xs mt-2 mb-4 text-justify">(Video Lecture on the Nature of Language) (Spiel: Good day traveler!)</p>
      <p class="text-xs mt-2 mb-4 text-justify">There is nothing more fun than a trip that is free from any hassle and complications.
           After securing the checklist of your travel, it is important to consider the people, culture, and the language of the destination to visit. 
           Language is complex, that’s why it is imperative to consider its nature for better understanding.</p>
           <p class="text-xs mt-2 mb-4 text-justify">The Nature of Language</p>
           <p class="text-xs mt-2 mb-4 text-justify">a. Language is symbolic.</p>
           <p class="text-xs mt-2 mb-4 text-justify">(Spiel: The first of the nature of language is, that it is symbolic. It uses words through letters and other many characters abundant to various nations and cultures. 
              It uses also signals like signs, sign language and other symbols.)</p>
              <p class="text-xs mt-2 mb-4 text-justify">We experience the world through symbols.</p>
              <p class="text-xs mt-2 mb-4 text-justify">So what are the various symbols used to express language?</p>
              <p class="text-xs mt-2 mb-4 text-justify">We use different colors, shapes, lines, curves, like we see in traffic lights and road signages. Symbolism is abundant to express meanings.</p>
              <p class="text-xs mt-2 mb-4 text-justify">b. Meanings are in people, not solely in words</p>
          </section>
  
  
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    data() {
          return {
            thirdSet: [
          'Refer from (vocabulary, a), which are expressions of appreciation?',
          'Love?',
          'Welcome?',
        ],
        thirdAnswers: [],
              fourthSet: [
                  {
                      number: "1.",
                      segments: [
                          { type: "text", content: "Chris left the coffee for a few seconds to cool because it was" },
                          { type: "input", id: "Ans1" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn1", label: "too", method: () => this.C1_1() },
                                  { id: "btn2", label: "enough", method: () => this.C1_2() }
                              ]
                          },
                          { type: "text", content: " hot to sip." }
                      ]
                  },
                  {
                      number: "2.",
                      segments: [
                      { type: "text", content: "The tourist wasn't strong" },
                          { type: "input", id: "Ans2" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn3", label: "too", method: () => this.C2_1() },
                                  { id: "btn4", label: "enough", method: () => this.C2_2() }
                              ]
                          },
                          { type: "text", content: "to lift that heavy luggage." }
                      ]
                  },
                  {
                      number: "3. ",
                      segments: [
                      { type: "text", content: "When we visit the place, there aren't" },
                          { type: "input", id: "Ans3" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn5", label: "too", method: () => this.C3_1() },
                                  { id: "btn6", label: "enough", method: () => this.C3_2() }
                              ]
                          },
                          { type: "text", content: "policemen in town." },
                      ]
                  },
                  {
                      number: "4.",
                      segments: [
                      { type: "text", content: "Do you have" },
                          { type: "input", id: "Ans4" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn7", label: "too", method: () => this.C4_1() },
                                  { id: "btn8", label: "enough", method: () => this.C4_2() }
                              ]
                          },
                          { type: "text", content: "information to help me find the destination I want to visit?" }
                      ]
                  },
                  {
                      number: "5.",
                      segments: [
                      { type: "text", content: "It is" },
                          { type: "input", id: "Ans5" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn9", label: "too", method: () => this.C5_1() },
                                  { id: "btn10", label: "enough", method: () => this.C5_2() }
                              ]
                          },
                          { type: "text", content: "difficult to do for a first-time traveler." }
                      ]
                  },
                  {
                      number: "6.",
                      segments: [
                      { type: "text", content: "When we get to the hotel, we do not have" },
                          { type: "input", id: "Ans6" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn11", label: "too", method: () => this.C6_1() },
                                  { id: "btn12", label: "enough", method: () => this.C6_2() }
                              ]
                          },
                          { type: "text", content: "much time to prepare dinner." }
                      ]
                  },
                  {
                      number: "7.",
                      segments: [
                      { type: "text", content: "I didn't buy" },
                          { type: "input", id: "Ans7_1" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn13", label: "too", method: () => this.C7_1() },
                                  { id: "btn14", label: "enough", method: () => this.C7_2() }
                              ]
                          },
                          { type: "text", content: "many souvenir items, because it was" },
                          { type: "input", id: "Ans7_2" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn13", label: "too", method: () => this.C7_3() },
                                  { id: "btn14", label: "enough", method: () => this.C7_4() }
                              ]
                          },
                          { type: "text", content: "expensive." }
                      ]
                  },
                  {
                      number: "8.",
                      segments: [
                      { type: "text", content: "He didn't search hard " },
                          { type: "input", id: "Ans8" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn15", label: "too", method: () => this.C8_1() },
                                  { id: "btn16", label: "enough", method: () => this.C8_2() }
                              ]
                          },
                          { type: "text", content: "to get to website where I found huge discounts." }
                      ]
                  },
                  {
                      number: "9.",
                      segments: [
                      { type: "text", content: "During the trip, I can't sleep because I drink " },
                          { type: "input", id: "Ans9" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn16", label: "too", method: () => this.C9_1() },
                                  { id: "btn17", label: "enough", method: () => this.C9_2() }
                              ]
                          },
                          { type: "text", content: "much coffee." }
                      ]
                  },
                  {
                      number: "10.",
                      segments: [
                      { type: "text", content: "She isn't old " },
                          { type: "input", id: "Ans10" },
                          {
                              type: "buttons",
                              buttons: [
                                  { id: "btn18", label: "too", method: () => this.C10_1() },
                                  { id: "btn19", label: "enough", method: () => this.C10_2() }
                              ]
                          },
                          { type: "text", content: " to start traveling." }
                      ]
                  }
              ]
          }
      },
    setup() {
      const choices = ref([
        'Germany', 'Philippines', 'South Korea', 'Spain', 'France', 'Japan', 'Italy'
      ]);
  
      const answers = ref([
      { label: 'Muchas gracias', slots: [''] },
          { label: 'Merci beaucoup', slots: [''] },
          { label: 'Mahal kita', slots: [''] },
          { label: 'Annyeonghaseyo', slots: [''] },
          { label: 'Ich liebe Dich', slots: [''] },
          { label: 'Grazie mille', slots: [''] },
          { label: 'Aishiteru', slots: [''] }
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
          ['Spain'],
          ['France'],
          ['Philippines'],
          ['South Korea'],
          ['Germany'],
          ['Italy'],
          ['Japan']
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
          'Germany', 'Philippines', 'South Korea', 'Spain', 'France', 'Japan', 'Italy'
        ];
  
        answers.value = [
          { label: 'Muchas gracias', slots: [''] },
          { label: 'Merci beaucoup', slots: [''] },
          { label: 'Mahal kita', slots: [''] },
          { label: 'Gam-sa-ham-ni-da', slots: [''] },
          { label: 'Annyeonghaseyo', slots: [''] },
          { label: 'Konnichiwa', slots: [''] },
          { label: 'Ich liebe Dich', slots: [''] },
          { label: 'Grazie mille', slots: [''] },
          { label: 'Aishi teru', slots: [''] }
        ];
  
        score.value = 0;
        showScore.value = false;
        showRetry.value = false;
      };
      const correct = () => {
        let currentScore = 0;
  
        const correct = [
          ['too'],
          ['too'],
          ['too'],
          ['too'],
          ['too'],
          ['too'],
          ['too'],
          ['too'],
          ['too'],
          ['too'],
          ['too']
        ];
  
        answers.value.forEach((answer, index) => {
          answer.slots.forEach((slot, slotIndex) => {
            if (correct[index].includes(slot)) {
              currentScore++;
            }
          });
        });
  
        score.value = currentScore;
        showScore.value = true;
        showRetry.value = true;
      };
      const choice = ref([
        { name: 'Statue of Liberty', location: 'New York City' },
        { name: 'Leaning Tower of Pisa', location: 'Pisa' },
        { name: 'Chocolate Hills', location: 'Philippines' },
        { name: 'Machu Picchu', location: 'Peru' },
        { name: 'petronas Twin Tower', location: 'Malaysia' },
        { name: 'Opera House', location: 'Australia' },
        { name: 'Stonehenge', location: 'England' },
        { name: 'Christ the Redeemer', location: 'Brazil' },
        { name: 'Colosseum', location: 'Italy' },
        { name: 'Sydney Opera House', location: 'Australia' },
      ]);
  
      const answer = ref([
        { label: '<img src="/resources/Petronas.jpg" alt="Petronas Twin Towers" style="max-width: 100%; height: auto;" />', name: '', location: '', description: ''},
        { label: '<img src="/resources/chocolate_hills.jpg" alt="Chocolate Hills" style="max-width: 100%; height: auto;" />', name: '', location: '', description: '' },
        { label: '<img src="/resources/colosseum.jpg" alt="Colosseum" style="max-width: 100%; height: auto;" />', name: '', location: '', description: '' },
        { label: '<img src="/resources/pisa_tower.jpg" alt="Leaning Tower of Pisa" style="max-width: 100%; height: auto;" />', name: '', location: '', description: '' },
        { label: '<img src="/resources/machu-picchu.jpg" alt="Machu Picchu" style="max-width: 100%; height: auto;" />', name: '', location: '' , description: ''},
        { label: '<img src="/resources/christ_the_redeemer.jpg" alt="Christ the Redeemer" style="max-width: 100%; height: auto;" />', name: '', location: '', description: '' },
        { label: '<img src="/resources/statue_of_liberty.jpg" alt="Statue of Liberty" style="max-width: 100%; height: auto;" />', name: '', location: '', description: '' },
        { label: '<img src="/resources/stonehenge.jpg" alt="Stonehenge" style="max-width: 100%; height: auto;" />', name: '', location: '' , description: ''},
        { label: '<img src="/resources/sydney_bridge.jpg" alt="Sydney Opera House" style="max-width: 100%; height: auto;" />', name: '', location: '', description: '' },
        { label: '<img src="/resources/great_wall_of_china.jpg" alt="Great Wall of China" style="max-width: 100%; height: auto;" />', name: '', location: '', description: '' },
      ]);

  
      const scores = ref(0);
      const showscoress = ref(false);
      const showtrial = ref(false);
  
      const checks = () => {
        let currentscores = 0;
  
        const correctanswer = [
          ['Petronas Twin Tower', 'Malaysia'],
          ['Chocolate Hills', 'Philippines'],
          ['Colosseum', 'Italy'],
          ['Leaning Tower of Pisa', 'Pisa'],
          ['Machu Picchu', 'Peru'],
          ['Christ the Redeemer', 'Brazil'],
          ['Statue of Liberty', 'New York City'],
          ['Stonehenge', 'England'],
          ['Sydney Opera House', 'Australia'],
          ['Great Wall of China', 'China'],
        ];
  
        answer.value.forEach((answer, index) => {
          if (answer.name === correctanswer[index][0] && answer.location === correctanswer[index][1]) {
            currentscores++;
          }
        });
  
        scores.value = currentscores;
        showscoress.value = true;
        showtrial.value = true;
      };
  
      const trial = () => {
        answer.value.forEach(answer => {
          answer.name = '';
          answer.location = '';
        });
  
        scores.value = 0;
        showscoress.value = false;
        showtrial.value = false;
      };
      
  
      return {
        choice,
        answer,
        choices,
        answers,
        dragStart,
        dragEnd,
        drop,
        retractAnswer,
        check,
        checks,
        retry,
        trial,
        score,
        scores,
        showScore,
        showRetry,
        showscoress,
        showtrial,
        correct
      };
      },
      
      methods:{
        C1_1() {
              document.getElementById('Ans1').value = 'too';
          },
          C1_2() {
              document.getElementById('Ans1').value = 'enough';
          },
          C2_1() {
              document.getElementById('Ans2').value = 'too';
          },
          C2_2() {
              document.getElementById('Ans2').value = 'enough';
          },
          C3_1() {
              document.getElementById('Ans3').value = 'too';
          },
          C3_2() {
              document.getElementById('Ans3').value = 'enough';
          },
          C4_1() {
              document.getElementById('Ans4').value = "too";
          },
          C4_2() {
              document.getElementById('Ans4').value = 'enough';
          },
          C5_1() {
              document.getElementById('Ans5').value = "too";
          },
          C5_2() {
              document.getElementById('Ans5').value = 'enough';
          },
          C6_1() {
              document.getElementById('Ans6').value = "too";
          },
          C6_2() {
              document.getElementById('Ans6').value = 'enough';
          },
          C7_1() {
              document.getElementById('Ans7_1').value = "too";
          },
          C7_2() {
              document.getElementById('Ans7_1').value = 'enough';
          },
          C7_3() {
              document.getElementById('Ans7_2').value = "too";
          },
          C7_4() {
              document.getElementById('Ans7_2').value = 'enough';
          },
          C8_1() {
              document.getElementById('Ans8').value = "too";
          },
          C8_2() {
              document.getElementById('Ans8').value = 'enough';
          },
          C9_1() {
              document.getElementById('Ans9').value = "too";
          },
          C9_2() {
              document.getElementById('Ans9').value = 'enough';
          },
          C10_1() {
              document.getElementById('Ans10').value = "too";
          },
          C10_2() {
              document.getElementById('Ans10').value = 'enough';
          }
    },
    submitThirdSet() {
        console.log('Answers submitted:', this.thirdAnswers);
        this.showScore = true;
        this.thirdAnswers = [];
      },
  };
  </script>
  
  <style scoped>
  /* Container for choices */
  .choices-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .choices-table td {
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .choices-table td:hover {
    background-color: #f7cfcf; /* Lighter red on hover */
  }
  
  /* Answer table styling */
  .answer-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .answer-table td {
    padding: 10px;
    text-align: center;
  }
  
  /* Styling for answer slots */
  .answer-slot {
    padding: 10px;
    border-bottom: 2px solid #000; /* Specific length for underline (adjust as needed) */
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: inline-block;
  }
  
  .answer-slot:hover {
    background-color: #e5e7eb; /* Lighter gray on hover */
  }
  
  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
    .choices-table td {
      padding: 8px; /* Adjust padding for smaller screens */
    }
  
    .answer-table td {
      padding: 8px; /* Adjust padding for smaller screens */
    }
  
    .answer-slot {
      padding: 8px; /* Adjust padding for smaller screens */
      min-width: 80px; /* Adjust minimum width for smaller screens */
    }
  }
  .image-container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 100vh; /* Adjust as per your layout */
  }

  .answer-input {
    width: calc(100% - 20px); /* Adjust width for input */
    padding: 5px;
    border: none;
    outline: none;
    text-align: center;
    transition: border-color 0.3s;
  }

  .answer-input:focus,
  .answer-input {
    border-bottom: 2px solid #333; /* Simulated underline effect */
  }

  .answer-input:focus {
    background-color: #f3f4f6; /* Example of focus style */
  }
  
  </style>
  