const questions = [
  {
    question: "Who is the of Romania? ",
    answers: [
      { text: "Bucharest", correct: true },
      { text: "Rome", correct: false },
      { text: "Madrid", correct: false },
      { text: "London", correct: false },
    ]
  },

  {
    question: "What is the most spoken language in the world?",
    answers: [
      { text: "English", correct: false },
      { text: "Italian", correct: false },
      { text: "Chinese", correct: false },
      { text: "Spanish", correct: true }
    ]
  },

  {
    question: "What is the biggest continent? ",
    answers: [
      { text: "Europe", correct: false },
      { text: "Africa", correct: false },
      { text: "Asia", correct: true },
      { text: "North America", correct: false },
    ]
  },

  {
    question: "How many times zones are in Russia?",
    answers: [
      { text: "3", correct: false },
      { text: "8", correct: false },
      { text: "11", correct: true },
      { text: "2", correct: false },
    ]
  },

  {
    question: "What is the national flower of Japan?",
    answers: [
      { text: "Sunflower", correct: false },
      { text: "Cherry Blossom", correct: true },
      { text: "Aloe Vera", correct: false },
      { text: "None", correct: false },
    ],
  },

  {
    question: "How many days does it take for Earth to orbit Sun?" ,
    answers: [
      {text: "360", correct: false},
      {text:"370" , correct: false},
      {text:"365" , correct:true},
      {text:"366" , correct: false},
    ],
  },

  {
    question: "What is the main ingredient in hummus?" ,
    answers: [
      {text: "Chickpeas", correct: true}, 
      {text: "Lentils" , correct: false},
      {text: "Potatoes" , correct: false}, 
      {text: "Beans" , correct: false},
    ],
  }, 
  {
    question: "The human adult has ... teeth?" ,
    answers: [
      {text:"32" , correct: true},
      {text:"30" , correct: false},
      {text:"33" , correct: false} ,
      {text: "31" , correct: false},
    ],
  },

  {
    question: "When did London underground open?" ,
    answers: [
      { text: "1900" , correct: false},
      {text:"1863", correct: true} ,
      {text: "1855" , correct: false} ,
      {text: "1860" , correct: false} ,
    ],
  },

  {
    question: "What city do the Beatles come from?" ,
    answers: [
      {text:"Manchester" , correct: false} ,
      {text:"London" , correct: false} ,
      {text:"Liverpool" , correct: true} ,
      {text: "Brighton" , correct: false},
    ],
  },
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer_buttons');
const nextButton = document.getElementById('next_button');

let currentQuestionIndex = 0;
let score = 0;

/**
 * Function to start the quiz
 */

function startQuiz() {
 currentQuestionIndex = 0;
  score = 0;
nextButton.innerHTML = "Next";
showQuestion();
startTimer();
}


/**
 * Show Questions
 */

function showQuestion() {
  resetState();
let currentQuestion = questions[currentQuestionIndex];
console.log(currentQuestion)
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = " " + currentQuestion.question
console.log(currentQuestion);
console.log(currentQuestion.question);

// Console log currentQuestion.answers just to make sure they exist!
console.log("Answers: ", currentQuestion.answers)

// use forEach to loop through the answsers array
currentQuestion.answers.forEach((answer) => {
  // console log each answer
  console.log(answer)

  const button = document.createElement("button");
  button.innerHTML = answer.text;

  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click" , selectAnswer);

});
}
/**
 * Restart game
 */

function resetState(){
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}


/**
 * Select Answer 
 */
function selectAnswer (e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
      }else{
        selectBtn.classList.add("incorrect");
      }
      console.log(selectBtn);
      nextButton.style.display = "block";
      
}

/**
 * Show score at the end of the game
 */

function showScore() {
  resetState();
  questionElement.innerHTML = `You got ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again!";
  nextButton.style.display = "block";
}

/**
 * Define the handle next button function
 */

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  }else{
    showScore();
  }
}

/**
 * Function for the next button
 */

nextButton.addEventListener("click", ()=> {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else {
    startQuiz();
  }

}); 

startQuiz();





