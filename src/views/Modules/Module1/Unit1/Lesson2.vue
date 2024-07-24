<template>
    <section class="flex flex-col w-full px-2 gap-4">
        <!-- title -->
        <div class="mb-4">
            <h1 class="text text-gray-400">LESSON 2</h1>
            <h1 class="text-xl text-gray-700">Using Resources from the Library</h1>
        </div>

        <div>
            <div class="my-2">
                <h6 class="font-bold">Time Allotment - 3 hours</h6>
                <p>This lesson guides students to initiate and close conversations using modals such as might, may, and will whenever using library resources.</p>
            </div>
            <div class="my-2">
                <h6 class="font-bold">Language Functions</h6>
                <p>Initiating and closing conversations</p>
            </div>
            <div class="my-2">
                <h6 class="font-bold">Grammar Points</h6>
                <p>Modals – Might, May, and Will</p>
            </div>
        </div>
        <hr class="my-2"/>
    </section>
    <!-- objectives -->
    <section class="w-full my-8">
        <h6>At the end of this module, you shoud be able to:</h6>
        <ul class="list-disc my-2 ml-4">
            <li>determine meanings of commonly used words on using library resources; </li>
            <li>understand conversations between a student and a school librarian on borrowing library resources; </li>
            <li>initiate and close conversations using modals such as might, may, and will.</li>
        </ul>

        
    </section>
    <hr class="my-2"/>
    <!-- pre task -->
    <section class="w-full my-8">
        <div class="flex flex-row">
            <div class="w-1/2">
                <h1 class="text-xl">Pre-Task: Webpage analysis</h1>
                <h6 class="my-2">Look at the screenshot from the website of the Open Library available at</h6>
                <div class="text-blue font-italic"><a href="https://openlibrary.org/.">https://openlibrary.org/</a></div>
                <div>
                    <p>1. What do you think is the purpose of this website?</p>
                    <p>2. Who do you think are those students who are likely to borrow this book title? Why?</p>
                </div>    
            </div>
            <div class="w-1/2">
                <img src="" alt="open lib"/>
            </div>
        </div>
        <div class="my-4">
            <h1 class="text-xl">Reflect on the following questions.</h1>
            <p class="my-2">Have you ever used a similar online library interface in borrowing a book? On a scale of 1 to 3 with three being the highest, how would you rate your experience in borrowing a book using a similar interface? Why?</p>
        </div>
    </section>
    <hr class="my-2" />
    <!-- part 1 -->
    <section class="w-full my-8">
        <h1 class="text-xl">Vocabulary Builder</h1>
        <h6 class="my-2">Match the words in the box with the given pictures.</h6>
        
        
    </section>
    <hr class="my-2"/>
    <!-- part 2 -->
    <section class="w-full my-8">
        <h1 class="text-xl">Reading Comprehension.</h1>
        <h6 class="my-2">Read the conversation between a student and a librarian. Answer the questions.</h6>
        <p class=""><b>Student:</b> Excuse me, please. I wonder if you could help me.</p>
        <p><b>Librarian:</b> Yes, how can I help you?</p>
        <p><b>Student:</b> I may have a quiz on my course Introduction to Information and Communication Technology tomorrow. Do you have a book with a similar title? The one written by Graham Brown and David Watson.</p>
        <p><b>Librarian:</b> We might have that title on one of our bookshelves. Let me check it from our online catalog.</p>
        <p><b>Student:</b> Yes, please.</p>
        <p><b>Librarian:</b> Here it is. It can be found in our Reserved Section for we have only a limited copy of that title. Let me get it for you.</p>
        <p><b>Student:</b> Oh, thank you very much</p>
        <p><b>Librarian:</b> May I have your borrower’s card?</p>
        <p><b>Student:</b> I might have it in my bag. Here it is.</p>
        <p><b>Librarian: </b>Please return this book tomorrow morning.</p>
        <p><b>Student: </b>I'll definitely do that.</p>
        <p><b>Librarian: </b>Do you have other titles in mind that you want to borrow?</p>
        <p><b>Student: </b>None. Thank you. It’s been nice talking to you. Bye.</p>
        
        <hr class="my-2" />
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
              <h2 v-if="showScore" class="mx-2 text-xl">Score: {{ score[0] }}</h2>
              <div class="ml-auto">
                  <button @click="retryFirstSet" v-if="showRetry" class="module_btn mx-2">RETRY</button>
                  <button @click="submitFirstSet" class="btn_submit mx-2">SUBMIT</button>
              </div>
            </div>
        </form>
        
        <h1 class="text-xl">Grammar Builder</h1>
        <h6 class="my-2">Study the excerpt taken from the conversation between the student and the school library.</h6>

        <p class=""><b>Student:</b> I may (future use) have (verb in basic form) a quiz on my course Introduction to Information and Communication Technology tomorrow. Do you have a book with a similar title? The one written by Graham Brown and David Watson.</p>
        <p><b>Librarian:</b> We might (present use) have (verb in basic form) that title on one of our bookshelves. Let me check it from our online catalog.</p>
        <p class="my-2">In the given excerpt, the modals may and might are used to express what will possibly happen in the future. The phrases – may have and might have both referring to the future or the present – simply mean “maybe will.” They are always followed by verbs in their basic form.</p>
        
        <p><b>Librarian:</b> Please return this book tomorrow morning. Student: I’ll definitely do that.</p>
        <p class="mt-2">The modals will and won’t can be combined with different adverbs of probability to show the probability of a future event. However, the adverb is placed before the modal for will or ‘ll (will or ‘ll + adverb of probability); while it is placed after the modal won’t (adverb of probability + won’t). See the following examples.</p>
        <p>I’ll possibly borrow a book from the library. I’ll probably borrow a book from the library. I definitely won’t borrow a book from the library. I certainly won’t borrow a book from the library.</p>
    </section>
    <hr class="my-2"/>
    <!-- part 3 -->
    <section class="w-full my-8">
        <h1 class="text-xl">Grammar Exercise</h1>
        <form class="my-4">
            <div v-for="(question, qIndex) in secondSet" :key="qIndex" class="mb-4">
                <p class="my-2">{{ qIndex + 1 }}. {{ question.text }}</p>
                <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center ml-4">
                <input type="radio" :id="'first-q' + qIndex + '-' + oIndex" :name="'first-q' + qIndex" :value="option.value" v-model="secondAnswers['q' + (qIndex + 1)]" class="mr-2">
                <label :for="'first-q' + qIndex + '-' + oIndex">{{ option.text }}</label>
                </div>
            </div>
            <div class="score-card w-full flex items-center my-4">
              <h2 v-if="showScore" class="mx-2 text-xl">Score: {{ score[1] }}</h2>
              <div class="ml-auto">
                  <button @click="retrySecondSet" v-if="showRetry" class="module_btn mx-2">RETRY</button>
                  <button @click="submitSecondSet" class="btn_submit mx-2">SUBMIT</button>
              </div>
            </div>
        </form>

    </section>
    <!-- part 4 -->
    <section class="w-full">
        <h1 class="text-xl">Writing Task</h1>
        <h6 class="my-2">Complete the following conversation in a messenger application. Use modals such as might, may, and will whenever applicable.</h6>
        <hr class="my-2"/>
    </section>

    <!--footer-->
    <section class="w-full flex flex-col px-4">
        <div class="ml-auto">Move to next lesson</div>
        <router-link 
            to="/module1/unit1/lesson3"
            class="ml-auto text-blue">Lesson 3</router-link>
    </section>
</template>

<script>
export default{
    data(){
        return{
            showFirstSetScore: false,
            showSecondSetScore: false,
            score: [ 0, 0 ],
            firstSet: [
                { 
                    text: 'What is the purpose of the student for approaching the librarian? ', 
                    options: [
                        { text: 'A. Asking for assistance', value: 'A' }, 
                        { text: 'B. Buying a book', value: 'B' }, 
                        { text: 'C. Making request', value: 'C' }, 
                        { text: 'D. Reserving a book title', value: 'D' }
                    ] },
                { 
                    text: 'Which of the following book title does the student want to borrow?', 
                    options: [
                        { text: 'A. Information and Communication Technology for Dummies', value: 'A' }, 
                        { text: 'B. Introducing Information Communication Technology', value: 'B' }, 
                        { text: 'C. Introduction to Information and Communication Technology', value: 'C' }, 
                        { text: 'D. Introduction to Information Communication Technology', value: 'D' }
                    ] },
                { 
                    text: 'What does the librarian use in finding the book?', 
                    options: [
                        { text: 'A. Authors card', value: 'A' }, 
                        { text: 'B. Borrowers card', value: 'B' }, 
                        { text: 'C. Card catalog', value: 'C' }, 
                        { text: 'D. Online catalog', value: 'D' }
                    ] },
                { 
                    text: 'What is the primary reason for placing the book in the Reserved Section?', 
                    options: [
                        { text: 'A. Limited copies', value: 'A' }, 
                        { text: 'B. Requested by students', value: 'B' }, 
                        { text: 'C. Requested by teachers', value: 'C' }, 
                        { text: 'D. Reserved for teachers', value: 'D' }] },
                { 
                    text: 'Who among the following is likely to borrow the book Introduction to Information and Communication Technology?', 
                    options: [
                        { text: 'A. A student enrolled in humanity courses', value: 'A' }, 
                        { text: 'B. A student interested in mechatronics', value: 'B' }, 
                        { text: 'C. A student specializing in informatics', value: 'C' }, 
                        { text: 'D. A student taking communication as an elective course', value: 'D' }] 
                },
                { 
                    text: 'Which of the following is used by the student to open a conversation with the librarian?', 
                    options: [
                        { text: 'A. Excuse me, can I talk to you for a minute?', value: 'A' }, 
                        { text: 'B. Excuse me, please. Have you got a minute?', value: 'B' }, 
                        { text: 'C. Excuse me, please. I wonder if you could help me. ', value: 'C' }, 
                        { text: 'D. Hi! Im a student here. Whats your name?', value: 'D' }] 
                },
                { 
                    text: 'Which of the following statements is used by the student to close the conversation with the librarian?', 
                    options: [
                        { text: 'A. I might have it in my bag. Here it is.', value: 'A' }, 
                        { text: 'B. Ill definitely do that.', value: 'B' }, 
                        { text: 'C. Its been nice talking to you. Bye.', value: 'C' }, 
                        { text: 'D. Thank you.', value: 'D' }
                    ] 
                }
            ],
            firstAnswers: {
                q1: '',
                q2: '',
                q3: '',
                q4: '',
                q5: '',
                q6: '',
                q7: ''
            },
            secondSet: [
                { 
                    text: 'Which is correct among the following sentences? ', 
                    options: [
                        { text: 'A. We may to go to the school library tomorrow to borrow a book. ', value: 'A' }, 
                        { text: 'B. We may going to the school library tomorrow to borrow a book.', value: 'B' }, 
                        { text: 'C. We may go to the school library tomorrow to borrow a book.', value: 'C' }, 
                    ] },
                { 
                    text: 'Choose the correct word/s to complete the statement. \n Our class president might ____ in the library to reserve a book for our class.', 
                    options: [
                        { text: 'A. be', value: 'A' }, 
                        { text: 'B. to be', value: 'B' }, 
                        { text: 'C. Being ', value: 'C' }, 
                    ] },
                { 
                    text: 'Which among the choices is NOT possible? ', 
                    options: [
                        { text: 'A. Richard might be in the library at the moment.', value: 'A' }, 
                        { text: 'B. Richard may have a poem recital next weekend.', value: 'B' }, 
                        { text: 'C. Richard may go to the library last night to read a book on communication technology.', value: 'C' }, 
                    ] },
                { 
                    text: 'Complete the sentence. \nCedrick __________ be late again for our library tour.', 
                    options: [
                        { text: 'A. probably will', value: 'A' }, 
                        { text: 'B. will probably', value: 'B' }, 
                        { text: 'C. wont probably', value: 'C' }, 
                    ] },
                { 
                    text: 'Fill in the blank to complete the sentence. \nWe definitely _________ have time to reserve a book on informatics after class.', 
                    options: [
                        { text: 'A. wont', value: 'A' }, 
                        { text: 'B. will', value: 'B' }, 
                        { text: 'C. might', value: 'C' }, 
                    ] 
                },
                { 
                    text: 'Which of the following sentences is correct?', 
                    options: [
                        { text: 'A. I maybe wont be able to attend our Algebra class.', value: 'A' }, 
                        { text: 'B. I maybe not be able to attend our Algebra class.', value: 'B' }, 
                        { text: 'C. I might not be able to attend our Algebra class.', value: 'C' }
                    ] 
                },
                { 
                    text: 'Which of the following sentences has a similar meaning to the given sentence below? \nIll certainly have time to finish reading the chapter on web page development before I return the book on Hypertext Mark-up Language.', 
                    options: [
                        { text: 'A. Ill possibly have time to finish reading the chapter on web page development before I return the book on Hypertext Mark-up Language.', value: 'A' }, 
                        { text: 'B. Ill definitely have time to finish reading the chapter on web page development before I return the book on Hypertext Mark-up Language.', value: 'B' }, 
                        { text: 'C. Ill probably have time to finish reading the chapter on web page development before I return the book on Hypertext Mark-up Language', value: 'C' },
                    ] 
                }
            ],
            secondAnswers: {
                q1: '',
                q2: '',
                q3: '',
                q4: '',
                q5: '',
                q6: '',
                q7: ''
            },
        }
    },
    methods: {
        submitFirstSet() {
            this.showFirstSetScore = true;
            this.score[0] = 1;
        },
        submitSecondSet() {
            this.showSecondSetScore = true;
            this.score[1] = 1;
        },
    }
}
</script>