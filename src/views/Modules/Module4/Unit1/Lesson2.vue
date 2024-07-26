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
            <table class="answer-table mx-auto border-0 mt-4">
  <thead>
    <tr>
      <th class="py-2 border border-gray-400 text-center">Artwork</th>
      <th class="py-2 border border-gray-400 text-center">Options</th>
    </tr>

  </thead>
  <tbody>
    <tr v-for="(answer, index) in answer" :key="index" class="py-2 border border-gray-400 text-center">
      <td width="180px" class="" v-html="answer.label"></td>
      <td class="py-2 border border-gray-400 text-center">
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

</template>

<script>
  export default {

    data(){
      return{
        answer: [
              { label: '<img src="/resources/Petronas.jpg" alt="Petronas Twin Towers" style="max-width: 100%; height: auto;" />', 
                  options: [
                    { text: 'A. American Gothic, Grant Wood', value: 'A' }, 
                    { text: 'B. Mona Lisa, Leonardo Da Vinci', value: 'B' }, 
                    { text: 'C. Guernica, Pablo Picasso', value: 'C' }, 
                    { text: 'D. The Son of Man, Rene Magritte', value: 'D' }
                ] 
              },
              { label: '<img src="/resources/chocolate_hills.jpg" alt="Chocolate Hills" style="max-width: 100%; height: auto;" />',   
                options: [
                      { text: 'A. Arnolfini Ptrait, Van Eyck', value: 'A' }, 
                      { text: 'B. The Kiss, Gustav Klint', value: 'B' }, 
                      { text: 'C. Napoleon Crossing the Alps, Jacques-Louis David', value: 'C' }, 
                      { text: 'D. Nighthawks, Edward Hopper', value: 'D' }
                  ] 
              },
              { label: '<img src="/resources/colosseum.jpg" alt="Colosseum" style="max-width: 100%; height: auto;" />', 
                  options: [
                      { text: 'A. The Starry Night, Vincent Van Gogh', value: 'A' }, 
                      { text: 'B. No. 5, 1984, Jackson Pollock', value: 'B' }, 
                      { text: 'C. Flaming June, Frederic Leighton', value: 'C' }, 
                      { text: 'D. Lady with an Ermine, Leonardo da Vinci', value: 'D' }
                  ] 
               },
              { label: '<img src="/resources/pisa_tower.jpg" alt="Leaning Tower of Pisa" style="max-width: 100%; height: auto;" />',
                  options: [
                      { text: 'A. Café Terrace at Night, Vincent van Gogh', value: 'A' }, 
                      { text: 'B. Nighthawks, Edward Hopper', value: 'B' }, 
                      { text: 'C. Primavera, Sandro Botticelli', value: 'C' }, 
                      { text: 'D. Persistence of Memory, Salvador Dali', value: 'D' }
                  ] 
               },
              { label: '<img src="/resources/machu-picchu.jpg" alt="Machu Picchu" style="max-width: 100%; height: auto;" />', 
                  options: [
                      { text: 'A. American Gothic, Grant Wood', value: 'A' }, 
                      { text: 'B. Lady with an Ermine, Leonardo da Vinci', value: 'B' }, 
                      { text: 'C. The Ambassadors, Hans Holbein the Younger', value: 'C' }, 
                      { text: 'D. Annunciation, Leonardo Da Vinci', value: 'D' }
                  ] 
               },
               /*
              { label: '<img src="/resources/christ_the_redeemer.jpg" alt="Christ the Redeemer" style="max-width: 100%; height: auto;" />',
                  options: [
                      { text: 'A. ', value: 'A' }, 
                      { text: 'B. ', value: 'B' }, 
                      { text: 'C. ', value: 'C' }, 
                      { text: 'D. ', value: 'D' }
                  ] 
              },
              { label: '<img src="/resources/statue_of_liberty.jpg" alt="Statue of Liberty" style="max-width: 100%; height: auto;" />', 
                  options: [
                      { text: 'A. ', value: 'A' }, 
                      { text: 'B. ', value: 'B' }, 
                      { text: 'C. ', value: 'C' }, 
                      { text: 'D. ', value: 'D' }
                  ] 
              },
              { label: '<img src="/resources/stonehenge.jpg" alt="Stonehenge" style="max-width: 100%; height: auto;" />', 
                  options: [
                      { text: 'A. ', value: 'A' }, 
                      { text: 'B. ', value: 'B' }, 
                      { text: 'C. ', value: 'C' }, 
                      { text: 'D. ', value: 'D' }
                  ] 
               },
              { label: '<img src="/resources/sydney_bridge.jpg" alt="Sydney Opera House" style="max-width: 100%; height: auto;" />', 
                  options: [
                      { text: 'A. ', value: 'A' }, 
                      { text: 'B. ', value: 'B' }, 
                      { text: 'C. ', value: 'C' }, 
                      { text: 'D. ', value: 'D' }
                  ] 
              },
              { label: '<img src="/resources/great_wall_of_china.jpg" alt="Great Wall of China" style="max-width: 100%; height: auto;" />', 
                  options: [
                      { text: 'A. ', value: 'A' }, 
                      { text: 'B. ', value: 'B' }, 
                      { text: 'C. ', value: 'C' }, 
                      { text: 'D. ', value: 'D' }
                  ] 
              },*/
        ],
        set1Answers: {
          q1: '',
          q2: '',
          q3: '',
          q4: '',
        }
      }
    }
  }
</script>