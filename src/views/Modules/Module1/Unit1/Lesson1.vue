<template>
    <!-- lesson 1 -->
    <section id="lesson1" class="flex flex-col w-full px-4 gap-4">
        <section id="1_objectives">
            <h1>Familiarizing with Learning Tasks</h1>
            <h6>In this lesson, you will learn how to:</h6>
            <ul>
                <li>Recognize significant points in a straightforward article on familiar subject.</li>
                <li>Understand relevant information in everyday material.</li>
                <li>Write personal email to a friend about attaining high grades by familiarizing with the learning tasks.</li>
            </ul>
        </section>
        <!-- part 1 -->
        <section class="w-11/12">
            <h1 class="ml-12">Vocabulary Builder</h1>
            <h6 class="ml-12">Relate three words for each of the given terms using the words from the box.</h6>

            <!-- activity -->
            <table id="MyTable" border="0" class="mx-auto"> 
                <tr align="center">
                    <td><input type="text" class="choices" id="C1_1" value="Article" title="Article" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C1_2" value="Assignment" title="Assignment" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C1_3" value="Classwork" title="Classwork" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C1_4" value="Composition" title="Composition" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C1_5" value="Desktop Publisher" title="Desktop Publisher" onClick="this.select();"></td>
                </tr>
                <tr align="center">
                    <td><input type="text" class="choices" id="C2_1" value="Educational Activity" title="Educational Activity" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C2_2" value="Exercise" title="Exercise" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C2_3" value="Inquiry" title="Inquiry" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C2_4" value="Investigation" title="Investigation" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C2_5" value="Observation" title="Observation" onClick="this.select();"></td>
                </tr>
                <tr align="center">
                    <td><input type="text" class="choices" id="C3_1" value="Piece of Writing" title="Piece of Writing" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C3_2" value="Schoolwork" title="Schoolwork" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C3_3" value="Spreadsheet" title="Spreadsheet" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C3_4" value="Study" title="Study" onClick="this.select();"></td>
                    <td><input type="text" class="choices" id="C3_5" value="Word Processing" title="Word Processing" onClick="this.select();"></td>
                </tr>
            </table>

            <table border="0" class="mx-auto"> 
                <tr>
                    <td width="150px">1. Homework</td>
                    <td><input type="text" id="Txt1_1" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt1_2" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt1_3" placeholder="Drag Here" onClick="this.select();"></td>
                </tr>
                <tr>
                    <td>2. School Projects</td>
                    <td><input type="text" id="Txt2_1" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt2_2" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt2_3" placeholder="Drag Here" onClick="this.select();"></td>
                </tr>
                <tr>
                    <td>3. Essay</td>
                    <td><input type="text" id="Txt3_1" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt3_2" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt3_3" placeholder="Drag Here" onClick="this.select();"></td>
                </tr>
                <tr>
                    <td>4. Experiment</td>
                    <td><input type="text" id="Txt4_1" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt4_2" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt4_3" placeholder="Drag Here" onClick="this.select();"></td>
                </tr>
                <tr>
                    <td>5. Software</td>
                    <td><input type="text" id="Txt5_1" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt5_2" placeholder="Drag Here" onClick="this.select();"></td>
                    <td><input type="text" id="Txt5_3" placeholder="Drag Here" onClick="this.select();"></td>
                </tr>
            </table>
        
            <button @click="check()" class="module_btn mx-auto" id="checkbtn">SUBMIT</button>
            <button @click="retry()" id="retrybtn" style="display:none;">RETRY</button>
            
            <h2 id="score" style="display:none;"></h2>
            
        </section>
        <!-- part 2 -->
        <section class="w-11/12">
            <h1 class="ml-12">Reading Authentic Text</h1>
            <h6 class="ml-12">Read the given passage about familiarizing yourself with learning tasks.</h6>
            <p class="">
                To achieve good grades in different courses, you need to familiarize yourself with the different 
                learning tasks provided by your teachers. These tasks can take various forms that would require 
                you to work individually or in groups with other students. In most social science courses, your 
                teacher may give you homework such as explaining or arguing an idea relevant to the class discussion. 
                This can be in the form of an essay with an expected word count that you may accomplish alone. Other 
                teachers may challenge you with a school project that you can work on with your classmates. This 
                learning task involves making infographics, brochures, and other portfolios that you may enjoy doing 
                with software such as word processing, desktop publishing, and the like. Moreover, you will enjoy 
                working with your classmates on an exciting laboratory experiment that will provide you with actual 
                experience in using laboratory tools while developing your scientific thinking.
            </p>
        </section>
        <!-- part 3 -->
        <section class="w-11/12">
            <h1 class="ml-12">Reading Comprehensions Questions</h1>
            <h6 class="ml-12">Answer the following questions based on the passage that you have read.</h6>
        </section>
        <!-- part 4 -->
        <section class="w-11/12">
            <h1 class="ml-12">Viewing Authentic Text</h1>
            <h6 class="ml-12">Examine the given entry for the class standing of a student in a teacher’s class record.</h6>
        </section>
        <!-- part 5 -->
        <section class="w-11/12">
            <h1 class="ml-12">Reading Comprehensions Questions</h1>
            <h6 class="ml-12">Refer to the given entry for the class standing and answer each of the following questions.</h6>
        </section>
        <!-- part 6 -->
        <section class="w-11/12">
            <h1 class="ml-12">Grammar Points</h1>
            <h6 class="ml-12">Access the provided link and study the charts on zero and first conditional and future time clauses.</h6>
        </section>
        <!-- part 7 -->
        <section class="w-11/12">
            <h1 class="ml-12">Grammar Skills Activity</h1>
            <h6 class="ml-12">Examine the conversation between Student A and Student B. Fill in the blanks with the appropriate words inside the parentheses.</h6>
        </section>
    </section>
</template>

<script>
export default {
    methods: {
        DisableKeyboard(){
            document.onkeydown = function (e){
                return false;
            }
        },
        
        check() {
            var score = 0;
    
            var Txt1_1 = document.getElementById("Txt1_1").value;
            var Txt1_2 = document.getElementById("Txt1_2").value;
            var Txt1_3 = document.getElementById("Txt1_3").value;
    
            var Txt2_1 = document.getElementById("Txt2_1").value;
            var Txt2_2 = document.getElementById("Txt2_2").value;
            var Txt2_3 = document.getElementById("Txt2_3").value;
    
            var Txt3_1 = document.getElementById("Txt3_1").value;
            var Txt3_2 = document.getElementById("Txt3_2").value;
            var Txt3_3 = document.getElementById("Txt3_3").value;
    
            var Txt4_1 = document.getElementById("Txt4_1").value;
            var Txt4_2 = document.getElementById("Txt4_2").value;
            var Txt4_3 = document.getElementById("Txt4_3").value;
    
            var Txt5_1 = document.getElementById("Txt5_1").value;
            var Txt5_2 = document.getElementById("Txt5_2").value;
            var Txt5_3 = document.getElementById("Txt5_3").value;
    
            //******Number 1*******
            if (Txt1_1 == "Assignment" || Txt1_1 == "Study" || Txt1_1 == "Classwork"){ 
                document.getElementById("Txt1_1").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt1_1").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt1_2 == "Assignment" || Txt1_2 == "Study" || Txt1_2 == "Classwork"){ 
                document.getElementById("Txt1_2").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt1_2").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt1_3 == "Assignment" || Txt1_3 == "Study" || Txt1_3 == "Classwork"){ 
                document.getElementById("Txt1_3").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt1_3").style.background = "#CD5C5C"; //Incorrect
            }
            
            //******Number 2*******
            if (Txt2_1 == "Educational Activity" || Txt2_1 == "Exercise" || Txt2_1 == "Schoolwork"){ 
                document.getElementById("Txt2_1").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt2_1").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt2_2 == "Educational Activity" || Txt2_2 == "Exercise" || Txt2_2 == "Schoolwork"){ 
                document.getElementById("Txt2_2").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt2_2").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt2_3 == "Educational Activity" || Txt2_3 == "Exercise" || Txt2_3 == "Schoolwork"){ 
                document.getElementById("Txt2_3").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt2_3").style.background = "#CD5C5C"; //Incorrect
            }
    
            //******Number 3*******
            if (Txt3_1 == "Piece of Writing" || Txt3_1 == "Article" || Txt3_1 == "Composition"){ 
                document.getElementById("Txt3_1").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt3_1").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt3_2 == "Piece of Writing" || Txt3_2 == "Article" || Txt3_2 == "Composition"){ 
                document.getElementById("Txt3_2").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt3_2").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt3_3 == "Piece of Writing" || Txt3_3 == "Article" || Txt3_3 == "Composition"){ 
                document.getElementById("Txt3_3").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt3_3").style.background = "#CD5C5C"; //Incorrect
            }
    
            //******Number 4*******
            if (Txt4_1 == "Investigation" || Txt4_1 == "Observation" || Txt4_1 == "Inquiry"){ 
                document.getElementById("Txt4_1").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt4_1").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt4_2 == "Investigation" || Txt4_2 == "Observation" || Txt4_2 == "Inquiry"){ 
                document.getElementById("Txt4_2").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt4_2").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt4_3 == "Investigation" || Txt4_3 == "Observation" || Txt4_3 == "Inquiry"){ 
                document.getElementById("Txt4_3").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt4_3").style.background = "#CD5C5C"; //Incorrect
            }
    
            //******Number 5*******
            if (Txt5_1 == "Desktop Publisher" || Txt5_1 == "Spreadsheet" || Txt5_1 == "Word Processing"){ 
                document.getElementById("Txt5_1").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt5_1").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt5_2 == "Desktop Publisher" || Txt5_2 == "Spreadsheet" || Txt5_2 == "Word Processing"){ 
                document.getElementById("Txt5_2").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt5_2").style.background = "#CD5C5C"; //Incorrect
            }
    
            if (Txt5_3 == "Desktop Publisher" || Txt5_3 == "Spreadsheet" || Txt5_3 == "Word Processing"){ 
                document.getElementById("Txt5_3").style.background = "#ADFF2F"; //Correct
                score += 1;
            } else {
                document.getElementById("Txt5_3").style.background = "#CD5C5C"; //Incorrect
            }
            document.getElementById("score").style.display = "block"; 
            document.getElementById("score").innerHTML = "Score: " + score; 
            document.getElementById("retrybtn").style.display = "block"; 
            document.getElementById("checkbtn").style.display = "none"; 
            locked();
        },
       
        retry(){
            var score = 0;
    
            unlocked();
            clear_color();
            clear_text();
            clear_choices();

            document.getElementById("score").style.display = "none"; 
            document.getElementById("retrybtn").style.display = "none"; 
            document.getElementById("checkbtn").style.display = "block"; 
            
             
        },
    
        locked(){
            document.getElementById("Txt1_1").readOnly = true;
            document.getElementById("Txt1_2").readOnly = true;
            document.getElementById("Txt1_3").readOnly = true;
    
            document.getElementById("Txt2_1").readOnly = true;
            document.getElementById("Txt2_2").readOnly = true;
            document.getElementById("Txt2_3").readOnly = true;
    
            document.getElementById("Txt3_1").readOnly = true;
            document.getElementById("Txt3_2").readOnly = true;
            document.getElementById("Txt3_3").readOnly = true;
    
            document.getElementById("Txt4_1").readOnly = true;
            document.getElementById("Txt4_2").readOnly = true;
            document.getElementById("Txt4_3").readOnly = true;
    
            document.getElementById("Txt5_1").readOnly = true;
            document.getElementById("Txt5_2").readOnly = true;
            document.getElementById("Txt5_3").readOnly = true;   
        },
    
        unlocked(){
            document.getElementById("Txt1_1").readOnly = false;
            document.getElementById("Txt1_2").readOnly = false;
            document.getElementById("Txt1_3").readOnly = false;
    
            document.getElementById("Txt2_1").readOnly = false;
            document.getElementById("Txt2_2").readOnly = false;
            document.getElementById("Txt2_3").readOnly = false;
    
            document.getElementById("Txt3_1").readOnly = false;
            document.getElementById("Txt3_2").readOnly = false;
            document.getElementById("Txt3_3").readOnly = false;
    
            document.getElementById("Txt4_1").readOnly = false;
            document.getElementById("Txt4_2").readOnly = false;
            document.getElementById("Txt4_3").readOnly = false;
    
            document.getElementById("Txt5_1").readOnly = false;
            document.getElementById("Txt5_2").readOnly = false;
            document.getElementById("Txt5_3").readOnly = false;   
        },
    
        clear_color(){
            document.getElementById("Txt1_1").style.background = "";
            document.getElementById("Txt1_2").style.background = "";
            document.getElementById("Txt1_3").style.background = "";
    
            document.getElementById("Txt2_1").style.background = "";
            document.getElementById("Txt2_2").style.background = "";
            document.getElementById("Txt2_3").style.background = "";
    
            document.getElementById("Txt3_1").style.background = "";
            document.getElementById("Txt3_2").style.background = "";
            document.getElementById("Txt3_3").style.background = "";
    
            document.getElementById("Txt4_1").style.background = "";
            document.getElementById("Txt4_2").style.background = "";
            document.getElementById("Txt4_3").style.background = "";
    
            document.getElementById("Txt5_1").style.background = "";
            document.getElementById("Txt5_2").style.background = "";
            document.getElementById("Txt5_3").style.background = "";
        },
    
        clear_text(){
            document.getElementById("Txt1_1").value = "";
            document.getElementById("Txt1_2").value = "";
            document.getElementById("Txt1_3").value = "";
    
            document.getElementById("Txt2_1").value = "";
            document.getElementById("Txt2_2").value = "";
            document.getElementById("Txt2_3").value = "";
    
            document.getElementById("Txt3_1").value = "";
            document.getElementById("Txt3_2").value = "";
            document.getElementById("Txt3_3").value = "";
    
            document.getElementById("Txt4_1").value = "";
            document.getElementById("Txt4_2").value = "";
            document.getElementById("Txt4_3").value = "";
    
            document.getElementById("Txt5_1").value = "";
            document.getElementById("Txt5_2").value = "";
            document.getElementById("Txt5_3").value = "";
        },

        clear_choices(){
            document.getElementById("C1_1").value = "Article";
            document.getElementById("C1_2").value = "Assignment";
            document.getElementById("C1_3").value = "Classwork";
            document.getElementById("C1_4").value = "Composition";
            document.getElementById("C1_5").value = "Desktop Publisher";

            document.getElementById("C2_1").value = "Educational Activity";
            document.getElementById("C2_2").value = "Exercise";
            document.getElementById("C2_3").value = "Inquiry";
            document.getElementById("C2_4").value = "Investigation";
            document.getElementById("C2_5").value = "Observation";

            document.getElementById("C3_1").value = "Piece of Writing";
            document.getElementById("C3_2").value = "Schoolwork";
            document.getElementById("C3_3").value = "Spreadsheet";
            document.getElementById("C3_4").value = "Study";
            document.getElementById("C3_5").value = "Word Processing";
        },
    }
}
</script>

<style>
    .choices{
        text-align: center; 
        }
    input{
        height: 30px;
        
    }
</style>