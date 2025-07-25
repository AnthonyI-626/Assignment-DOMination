const questions = [
    {
        question: "What game is considered the grandfather of first-person shooters?",
        options: [ "Doom", "Wolfenstein 3d", "Quake", "Half-Life"],
        correctAnswer: "Doom"
    }, 
    { 
        question: "What year did Halo: Combat Evolved release?",
        options: ["2001", "2005", "1999", "2003"],
        correctAnswer: "2001"
    },
    {
        question: "Which role-playing game is considered the most successful of all time by units sold?",
        options: ["The Elder Scrolls V: Skyrim", "Final Fantasy VII", "World of Warcraft", "Pokemon"],
        correctAnswer: "Pokemon"
    }
];

const nextQuestionButton = document.getElementById("nextQuestion");
const questionContainer = document.getElementById("questionContainer");
const answerButtons = document.getElementById("answerButtons");



let currentQuestionIndex = 0;
let score = 0;

function questionDisplay(index){
    nextQuestionButton.disabled = true;
   questionContainer.innerHTML = `<p>${questions[index].question}</p>`;
   answerButtons.innerHTML = "";

   questions[index].options.forEach(answer => {
   const btns = document.createElement("button");
   btns.textContent = answer;
   btns.classList.add("btn", "btn-primary", "m-3");

   btns.addEventListener("click", (e) => {
    document.querySelectorAll("#answerButtons button").forEach(b => b.disabled = true);

    if (e.target.textContent === questions[index].correctAnswer){
        btns.classList.replace("btn-primary", "btn-success");
        score++;
    } else{
        btns.classList.replace("btn-primary", "btn-danger");
    }
    nextQuestionButton.disabled = false;
   });
   answerButtons.appendChild(btns);
   });
  
    

 }

function yourResults(){
    questionContainer.innerHTML = `<p>Your score: ${score} out of ${questions.length}</p>`;
    answerButtons.innerHTML = "";
    nextQuestionButton.textContent = "restart";
}

function quizComplete() { 
    if (nextQuestionButton.textContent === "restart") {
        currentQuestionIndex = 0;
        score = 0;
        nextQuestionButton.textContent = "Next Question";
        questionDisplay(currentQuestionIndex)
        return;

    }
    if ( currentQuestionIndex >= questions.length -1) {
        yourResults();
        return;
    }
    currentQuestionIndex++;
    questionDisplay(currentQuestionIndex)
}





nextQuestionButton.addEventListener("click", quizComplete);

questionDisplay(currentQuestionIndex)
 
   

