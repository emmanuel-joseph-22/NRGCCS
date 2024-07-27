<template>
    <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center">
        <h1 class="text-6xl font-bold mb-3 text-center">Arts and Culture Do Speak</h1>
        <h2 class="text-xl font-semibold">Lesson 2</h2>
    </div>
    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
        <div class="mt-6">
            <ol class="list-decimal list-inside mt-7 text-lg">
                <h3 class="text-4xl font-bold text-blue-600">LESSON OBJECTIVES: Express opinions</h3>
                <li>Grammar: Use the appropriate collocation of adjective</li>
                <li>Vocabulary: Arts and Culture</li>
            </ol>
            <p class="text-xs mt-6">As you travel the world, it will be best to discover more of their arts and culture 
                as well! Grab your tickets as we open our museum full of interesting artworks gathered from around the world.</p>
        </div>
    </section>

    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
        <div class="mt-10">
            <h3 class="text-xs font-bold">PRE-ACTIVITY: Mu-SEE-um</h3>
            <p class="text-xs mt-4">DIRECTIONS: Identify the artworks shown in each photo as well as its painter. Choose the letter of the correct answer.</p>
            <table class="answer-table mx-auto mt-4">
                <thead>
                    <tr>
                        <th class="py-2">Artwork</th>
                        <th class="py-2">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(answer, index) in answer" :key="index">
                        <td width="180px" v-html="answer.label"></td>
                        <td>
                            <div v-for="(option, oIndex) in answer.options" :key="oIndex" class="flex ml-4">
                                <input type="radio" :id="index + '-' + oIndex" :value="option.value" v-model="set1Answers['q' + (index + 1)]" class="mr-2">
                                <label :for="index + '-' + oIndex" class="text-left">{{ option.text }}</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    
    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
        <div class="mt-10">
            <p class="text-xs mt-4">Which among the following will best describe the feeling or subject for each painting?</p>
            <table class="answer-table mx-auto mt-4">
                <thead>
                    <tr>
                        <th class="py-2">Painting</th>
                        <th class="py-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(answers, index) in answers" :key="index">
                        <td width="180px" v-html="answers.label"></td>
                        <td>
                            <div v-for="(description, dIndex) in answers.description" :key="dIndex" class="flex ml-4">
                                <input type="radio" :id="index + '-' + dIndex" :value="description.value" v-model="set2Answers['q' + (index + 1)]" class="mr-2">
                                <label :for="index + '-' + dIndex" class="text-left">{{ description.text }}</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>


    <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
        <div class="mt-10">
            <p class="text-xs mt-4">Notice the adjectives mysterious, respectable, different, unusual, and curious are paired respectively with the following adverbs: naturally, highly, completely, and obviously.</p>
            <p class="text-xs mt-4">There are instances wherein two words should definitely go together. This is called collocation.</p>
            <p class="text-xs mt-4">Just like the examples above, these adjectives have been paired with an appropriate adverb. There are different types of collocations; however, this module focuses on adjective + noun and adverb + adjective combinations.</p>
        </div>

        <div class="mt-10">
          <h3 class="text-xs font-bold">GRAMMAR</h3>
            <p class="text-xs mt-4">For better understanding of the lesson, refer to the lecture on</p>

        </div>
    </section>


<section class="w-full mt-10">
  <h3 class="text-4xl font-bold mt-10">ACTIVITY:</h3>
  <p class="text-xs mt-2 mb-4">DIRECTION: Identify the collocations used in each sentence.</p>
      <form class="my-4 w-full">
        <table class=" answer-table w-full border-collapse">
          <tbody>
            <tr v-for="(question, index) in nthSet" :key="index">
              <td class="border-b p-2">{{ index + 1 + " ."}}</td>
              <td class="border-b p-2">{{ question }}</td>
              <td class="border-b p-2">
                <input
                  type="text"
                  v-model="nthAnswers[index]"
                  class="border-b border-1 border-black-500 w-full p-2"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="score-card w-full flex items-center my-4">
          <h2 v-if="showScore" class="mx-2 text-xl">Score: {{ score }}</h2>
          <div class="ml-auto">
            <button @click="submitThirdSet" class="btn_submit mx-2">SUBMIT</button>
          </div>
        </div>
      </form>
      <hr class="my-2" />
    </section>



</template>

<script>
  export default {

    data(){
      return{
        answer: [
              { label: '<img src="/resources/mona_lisa.jpg" alt="Petronas Twin Towers" style="max-width: 100%; height: auto;" />', 
                  options: [
                    { text: 'A. American Gothic, Grant Wood', value: 'A' }, 
                    { text: 'B. Mona Lisa, Leonardo Da Vinci', value: 'B' }, 
                    { text: 'C. Guernica, Pablo Picasso', value: 'C' }, 
                    { text: 'D. The Son of Man, Rene Magritte', value: 'D' }
                ] 
              },
              { label: '<img src="/resources/napoleon.jpg" alt="Chocolate Hills" style="max-width: 100%; height: auto;" />',   
                options: [
                      { text: 'A. Arnolfini Prtrait, Jan Van Eyck', value: 'A' }, 
                      { text: 'B. The Kiss, Gustav Klint', value: 'B' }, 
                      { text: 'C. Napoleon Crossing the Alps, Jacques-Louis David', value: 'C' }, 
                      { text: 'D. Nighthawks, Edward Hopper', value: 'D' }
                  ] 
              },
              { label: '<img src="/resources/starry_night.jpg" alt="Colosseum" style="max-width: 100%; height: auto;" />', 
                  options: [
                      { text: 'A. The Starry Night, Vincent Van Gogh', value: 'A' }, 
                      { text: 'B. No. 5, 1984, Jackson Pollock', value: 'B' }, 
                      { text: 'C. Flaming June, Frederic Leighton', value: 'C' }, 
                      { text: 'D. Lady with an Ermine, Leonardo da Vinci', value: 'D' }
                  ] 
               },
              { label: '<img src="/resources/persistence_of_memory.jpg" alt="Leaning Tower of Pisa" style="max-width: 100%; height: auto;" />',
                  options: [
                      { text: 'A. Café Terrace at Night, Vincent van Gogh', value: 'A' }, 
                      { text: 'B. Nighthawks, Edward Hopper', value: 'B' }, 
                      { text: 'C. Primavera, Sandro Botticelli', value: 'C' }, 
                      { text: 'D. Persistence of Memory, Salvador Dali', value: 'D' }
                  ] 
               },
              { label: '<img src="/resources/american_gothic.jpg" alt="Machu Picchu" style="max-width: 100%; height: auto;" />', 
                  options: [
                      { text: 'A. American Gothic, Grant Wood', value: 'A' }, 
                      { text: 'B. Lady with an Ermine, Leonardo da Vinci', value: 'B' }, 
                      { text: 'C. The Ambassadors, Hans Holbein the Younger', value: 'C' }, 
                      { text: 'D. Annunciation, Leonardo Da Vinci', value: 'D' }
                  ] 
               }
        ],
        answers: [
              { label: 'Mona Lisa, Leonardo da Vinci', 
                  description: [
                    { text: 'A. naturally mysterious', value: 'A' }, 
                    { text: 'B. plainly mysterious', value: 'B' }, 
                    { text: 'C. obviously mysterious', value: 'C' }
                ] 
              },
              { label: 'Napoleon Crossing the Alps, Jacques-Louis David',   
              description: [
                      { text: 'A. highly honorable', value: 'A' }, 
                      { text: 'B. deeply honorable', value: 'B' }, 
                      { text: 'C. strictly honorable', value: 'C' }
                  ] 
              },
              { label: 'The Starry Night, Vincent Van Gogh', 
              description: [
                      { text: 'A. satisfyingly different', value: 'A' }, 
                      { text: 'B. strongly different', value: 'B' }, 
                      { text: 'C. completely different', value: 'C' }
                  ] 
               },
              { label: 'Persistence of Memory, Salvador Dali',
              description: [
                      { text: 'A. truly unusual', value: 'A' }, 
                      { text: 'B. severly unusual', value: 'B' }, 
                      { text: 'C. highly unusual', value: 'C' }
                  ] 
               },
              { label: 'American Gothic, Grant Wood', 
              description: [
                      { text: 'A. highly curious', value: 'A' }, 
                      { text: 'B. fairly curious', value: 'B' }, 
                      { text: 'C. obviously curious', value: 'C' }
                  ] 
               },
               
        ],
        set1Answers: {
          q1: '',
          q2: '',
          q3: '',
          q4: '',
          q5: ''
        },
        set2Answers: {
          q1: '',
          q2: '',
          q3: '',
          q4: '',
          q5: ''
        },

        nthSet: [
          'Please feel free to join the group in exploring the wonders of this place.',
          'Make sure to come prepared with your reflections for this journey.',
          'This masterpiece of Jacques-Louis David seems highly powerful.',
          'The guests encountered no major problem during the tour',
          'Van Gogh represents common themes such as anxiety, suffering, love and hope through his art.',
          'Some works of Leonardo Da Vinci became a controversial issue.',
          'We are expecting a lot of tourists in this museum since it is free access.',
          'Grant Wood was extremely young when he started painting.',
          'Leonardo da Vinci emphasizes the distinct smile of Mona Lisa.',
          "Salvador Dali's artworks are extremely popular in Spain.",
        ],
        nthAnswers: [],
        showScore: false, 
        score: 0, 


      }
    },
    methods: {
      submitThirdSet() {
        this.showScore = true; 
      }
    }
    
    
               
  }
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 2px solid #252424; 
  padding: 8px; 
  text-align: center; 
}


.answer-table {
  border: 2px solid #252424; 
}

</style>