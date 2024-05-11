const questions = [
    {
        question: "Who is the of Romania? " ,
        answers: [
            {text:"Bucharest" , correct: true},
            {text:"Rome" , correct: false} , 
            {text: "Madrid" , correct: false},
            {text: "London" , correct: false},
        ]
    }, 

    {
        question: "What is the most spoken language in the world?" ,
        answers: [
        {text: "English" , correct: false}, 
        {text:"Italian" , correct: false},
        {text:"Chinese" , correct: false}, 
        {text:"Spanish" , correct:true} 
        ]
    },

    {
        question: "What is the biggest continent? " ,
        answers: [
            {text: "Europe", correct: false} ,
            {text: "Africa", correct: false} ,
            {text:"Asia" correct: true} ,
            {text:"North America" , correct: false},
        ]
    }, 

    {
        question: "How many times zones are in Russia?" ,
        answers: [
            {text: "3" , correct: false},
            {text: "8", correct: false}, 
            {text:"11" , correct: true}, 
            {text:"2", correct: false},
        ]
    }, 

    {
        question:"What is the national flower of Japan?" , 
        answers: [
            {text: "Sunflower" , correct: false}, 
            {text: "Cherry Blossom", correct: true},
            {text: "Aloe Vera" , correct: false},
            {text:"None", correct: false} , 
        ],
    }
   

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('ans_btn');
const nextButton = document.getElementById('next_button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}
