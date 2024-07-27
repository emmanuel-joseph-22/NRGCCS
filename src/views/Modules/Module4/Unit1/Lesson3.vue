<template>
    <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center">
         <h1 class="text-6xl font-bold mb-3 text-center">The Diverse Perspective</h1>
         <h2 class="text-xl font-semibold">Lesson 3</h2>
       </div>
       <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
         <div class="mt-6">
             <h3 class="text-4xl font-bold text-blue-600">LESSON OBJECTIVE:</h3>
             <p class="text-xs mt-2 mb-4">Use the language of agreeing and disagreeing in expressing opinions</p>
               <li>Grammar skills: Use of Fewer and Less</li>
               <h3 class="text-4xl font-bold text-blue-600">PRE-ASSESSMENT</h3>
               <p class="text-xs mt-2 mb-4">Study the image below.</p>
           <div class="image-container">
             <img src="/resources/POV.jpg" alt="Reading Authentic Text" style="max-width: 50%; height: auto;" />
         </div>
         <p class="text-xs mb-4 font-bold">Insights:</p>
         <p class="text-xs mt-2 mb-4">How would you like to describe the picture?</p>
         <p class="text-xs mt-6 text-center">“Perceptions matter”</p>
         <p class="text-xs mt-6 text-center">We all come from different walks of life and we may have different ways on things. 
         Meaning one statement can be acceptable for you but may not be acceptable for another. So, you have to know how to properly
         agree or disagree during a conversation.</p>
         <p class="text-xs mt-6 text-center">To help you express your agreement or disagreement, read the discussion presented in this link</p>
         <p class="text-xs text-center font-bold"><a href="https://www.eslbuzz.com/expressing-opinions-in-english-agreeing-and-disagreeing/" target="_blank" rel="noopener noreferrer" >https://www.eslbuzz.com/expressing-opinions-in-english-agreeing-and-disagreeing/</a></p>
     </div>
     </section>
 
 
 <!-- MULTIPLE CHOICE -->
     <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
     <div class="mt-10">
         <h3 class="text-xl font-bold">PUT IT INTO PRACTICE!</h3>
         <p class="text-lg mt-2">Study the statements below, and use the appropriate expression that goes with your perspective.</p>
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
         <h3 class="text-lg font-bold text-center">How’s your score? I hope you did great!</h3>
         <h3 class="text-lg font-bold mt-10">Here’s more enrichment for you!</h3>
     </div>
     </section>
 
 
     <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
         <div class="mt-10">
             <h3 class="text-xs font-bold">Read the essay below and answer the questions that follow.</h3>
             <p class="text-xs mt-6 text-center">Benefits of Cross-Culture Awareness</p> 
             <p class="text-xs mt-6">With an very various population that exists in the United States today,
             our nation is a mixture of all the various societies around the world. Everyone is special in 
             their own way. Culture can refer to such a serious number of various things like the experiences you may face, values, language,
             traditions, food, politics, and religion. In which the background is shared by a group of individuals known as your family. It's 
             a lifestyle that has been passed along by communication beginning with one generation to the next (Mcdowell).</p>
             <p class="text-xs mt-6">My cultural experiences that have been passed down in my family consist of going to church every Sunday
             I come from a Church background. Going to parties every Saturday like Quinceañera, which is a celebration for a girls change
             from childhood to a young woman. Also attending parties just enjoying being together with all our family. We celebrate the 
             day of the child which is very fun, my aunts usually buy toys and the younger kids play competitive games and who wins 
             receives a prize. On November first and second, we celebrate our family members that have passed away by making them a place
             placing all their favorites food and remembering all the good things about them.</p>
             <p class="text-xs mt-6">Being culturally aware can bring you so many good benefits. Help promote clear lines of communication 
             and better relationships. People able to develop great people skills that apply into all walks of life. By learning the influence
             of the culture, hidden factors upon people's behavior, and understand how to listen. By becoming a great listener, people naturally
             become good speakers. When people are limited in cultural recognition they have difficulty in communication, and they aren't well 
             at be watchful (Mcdowell) (an excerpt from Benefits of Cross-culture Awareness, May 19, 2020;</p> 
             <p class="text-xs font-bold"><a href="https://gradesfixer.com/free-essay-examples/benefits-of-crossculture-awareness/)" target="_blank" rel="noopener noreferrer" >https://gradesfixer.com/free-essay-examples/benefits-of-crossculture-awareness/)</a></p>   
             <h3 class="text-xs font-bold mt-10">Check your understanding:</h3>
             <p class="text-xs mt-4">1. What cultural experience does the author have that has been passed down from generations?</p>
             <p class="text-xs mt-4">2. What are the benefits of being culturally aware?</p>
             <p class="text-xs mt-4">3. What does it mean to be culturally aware?</p>
             <p class="text-xs mt-4">4. Do you agree with the author’s point?</p>
         </div>
     </section>
 
     <section class="w-full md:w-10/12 mx-auto mt-10 p-6 bg-white shadow-md rounded text-left"> 
         <h3 class="text-xs font-bold">Let’s test your grammar!</h3>
         <h3 class="text-xs font-bold mt-6">GRAMMAR: Comparisons with fewer and less</h3>
         <p class="text-xs mt-4 text-center mb-10">Use ‘fewer’ for objects that can be counted. 3 books <br><br> Use ‘less’ with nouns that are not countable. water</p>
         <h3 class="text-xs font-bold mt-6">Complete the sentences with either 'fewer' or 'less'.</h3>
 
       <table cellpadding="15px" style="border-collapse: collapse; width: 100%">
     <tr v-for="(row, index) in fourthSet" :key="index">
         <td align="left" style="padding: 15px;">
             {{ row.number }}
         </td>
         <td style="padding: 15px;">
             <template v-for="(segment, i) in row.segments" :key="i">
                 <span v-if="segment.type === 'text'">
                     {{ segment.content }}
                 </span>
                 <input v-if="segment.type === 'input'"
                        v-model="segment.content" 
                        :id="segment.id"
                        class="text-center text-black border-b"
                        style="width: 80px;">
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
 </template>
 
 <script>
 export default {
     name: 'Lesson3',
     data() {
     return {
         firstSet: [
         { 
             text: '______________ that these buildings are built with a good foundation.', 
             options: [
                 { text: "A. There's no doubt", value: 'A' }, 
                 { text: "B. I can see eye to eye", value: 'B' }, 
                 { text: "C. Unless he agrees", value: 'C' }
             ] },
         { 
             text: ' ______________ to let you go alone; that building is condemned.', 
             options: [
                 { text: "A. Under certain circumstances", value: 'A' }, 
                 { text: "B. I'm afraid I can't agree", value: 'B' }, 
                 { text: "C. To see eye to eye", value: 'C' }
             ] },
         { 
             text: 'You know, Ben, _____________ when you say that the architectural designs of the Greeks are the best so far.', 
             options: [
                 { text: "A. I totally agree with you", value: 'A' }, 
                 { text: "B. I tend to think that", value: 'B' }, 
                 { text: "C. I'm not sure about that", value: 'C' } 
             ] },
         { 
             text: 'No Sarah! ______________ you can create such a masterful architectural design.', 
             options: [
                 { text: "A. There's no doubt that", value: 'A' }, 
                 { text: "B. I don't entirely agree with you that", value: 'B' }, 
                 { text: "C. I see where you are coming from", value: 'C' }
             ] },
         { 
             text: 'Yes, ____________ I will let you visit the national museum with your friends.', 
             options: [
                 { text: "A. What's even worse", value: 'A' }, 
                 { text: "B. I'm afraid I can't agree", value: 'B' }, 
                 { text: "C. Under certain circumstances", value: 'C' } 
             ] },
                 { 
             text: "No! ______________ the design looks great; it's out of the question.", 
             options: [
                 { text: "A. I totally disagree", value: 'A' }, 
                 { text: "B. Unlike your brother", value: 'B' }, 
                 { text: "C. What I object to", value: 'C' } 
             ] },
                 { 
             text: "There is no need to discuss this… ____________ so, just obey.", 
             options: [
                 { text: "A. There's no doubt about that", value: 'A' }, 
                 { text: "B. I totally agree", value: 'B' }, 
                 { text: "C. I'm agree", value: 'C' }
             ] },
                 { 
             text: "Oh! don't worry. ____________ if you disobey, you will be punished", 
             options: [
                 { text: "A. There's no doubt about it", value: 'A' }, 
                 { text: "B. I totally disagree", value: 'B' }, 
                 { text: "C. I'm agree", value: 'C' }
             ] },
                 { 
             text: "Of course, you are not wrong. But _____________ is the building's aesthetics.", 
             options: [
                 { text: "A. I'm agree", value: 'A' }, 
                 { text: "B. I can't disagree", value: 'B' }, 
                 { text: "C. What I object to", value: 'C' }
             ] },
                 { 
             text: 'Yes, she lost her book, ______________ is that she took mine.', 
             options: [
                 { text: "A. What's even worse", value: 'A' }, 
                 { text: "B. What I object him", value: 'B' }, 
                 { text: "C. Under certain circumstances", value: 'C' }
             ] }
 
         ],
         firstAnswers: {
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
 
         fourthSet: [
                   {
                       number: "1.",
                       segments: [
                           { type: "text", content: "The United States has " },
                           { type: "input", id: "Ans1", content: " "},
                           { type: "text", content: "   mobile phones than the Philippines." }
                       ]
                   },
                   {
                       number: "2.",
                       segments: [
                           { type: "text", content: "India consumes " },
                           { type: "input", id: "Ans2", content: " " },
                           { type: "text", content: "   water than Europe." }
                       ]
                   },
                   {
                       number: "3.",
                       segments: [
                           { type: "text", content: "Japan has  " },
                           { type: "input", id: "Ans3", content: " " },
                           { type: "text", content: "   forests than Mongolia." }
                       ]
                   },
                   {
                       number: "4.",
                       segments: [
                           { type: "text", content: "SM Batangas has  " },
                           { type: "input", id: "Ans4", content: " " },
                           { type: "text", content: "   floors than SM Edsa." }
                       ]
                   },
                   {
                       number: "5.",
                       segments: [
                           { type: "text", content: "You should have  " },
                           { type: "input", id: "Ans5", content: " " },
                           { type: "text", content: "   difficulty commuting." }
                       ]
                   },
                   {
                       number: "6.",
                       segments: [
                           { type: "text", content: "The students were  " },
                           { type: "input", id: "Ans6", content: " " },
                           { type: "text", content: "   excited this year." }
                       ]
                   },
                   {
                       number: "7.",
                       segments: [
                           { type: "input", id: "Ans7", content: " " },
                           { type: "text", content: "   people came to the fair this year." }
                       ]
                   },
                   {
                       number: "8.",
                       segments: [
                           { type: "text", content: "China has  " },
                           { type: "input", id: "Ans8", content: " " },
                           { type: "text", content: "   festivals than Thailand." }
                       ]
                   },
                   {
                       number: "9.",
                       segments: [
                           { type: "text", content: "The entrance fee costs  " },
                           { type: "input", id: "Ans9", content: " " },
                           { type: "text", content: "   money than last time." }
                       ]
                   },
                   {
                       number: "10.",
                       segments: [
                           { type: "text", content: "They are making  " },
                           { type: "input", id: "Ans10", content: " " },
                           { type: "text", content: "   horror movies than before." }
                       ]
                   }
                 ]
         
     };
 },
     methods: {
         submitFirstSet() {
         console.log(this.firstAnswers);
     },
     
 }
 };
 </script>
 <style>
 .image-container {
     display: flex;
     justify-content: center; /* Center horizontally */
     align-items: center; /* Center vertically */
     height: 100vh; /* Adjust as per your layout */
   }
 </style>
 