
var start = document.querySelector("#startPage");
var startButton = document.querySelector("#startButton");
var card = document.querySelector("#question-card")
var questionEl = document.querySelector("#question");
var questionOpEl = document.querySelector("#question-options");
var opAns1 = document.querySelector("#ans1");
var opAns2 = document.querySelector("#ans2");
var opAns3 = document.querySelector("#ans3");
var opAns4 = document.querySelector("#ans4");
var btnAns = document.querySelector(".btn");
var correct = document.querySelector("#winlose");
var finish = document.querySelector("#submit-initials");
var timeEl = document.querySelector(".timer");
var score = document.querySelector("#score");

var secondsLeft = 46;
var i = 0

var questions = [
    {
    question: "1: What value does an index always start on?",
    answers:
        {1: "1",
        2: "2",
        3: "x",
        4: "0"},
    correctAnswer: "0"
    },
    {
    question: "2: What function stops a timer in Javascript?",
    answers:
        {1: "endTimer",
        2: "timeStop",
        3: "clearInterval",
        4: "timeZero"},
    correctAnswer: "clearInterval"
    },
    {
    question: "3: What is a string enclosed using?",
    answers:
        {1: "''",
        2: '()',
        3: '{}',
        4: '[]'},
    correctAnswer: "''"
    },
    {
    question: "4: How do you declare a variable?",
    answers:
        {1: "function()",
        2: "variable =",
        3: "def",
        4: "var "},
    correctAnswer: "var"
    }
]

startButton.addEventListener("click", startGame)

// hide start page and show first question on click event
// populate buttons and question
function startGame(){
    startButton.style.display = 'none'
    start.style.display = 'none'
    questionEl.style.display = 'block'
    opAns1.style.display = 'block'
    opAns2.style.display = 'block'
    opAns3.style.display = 'block'
    opAns4.style.display = 'block'
    populateQuestions()
    setTime()
}

function populateQuestions(){
    if(i <= questions.length-1){
        questionEl.innerText = questions[i].question
        opAns1.innerText = questions[i].answers[1]
        opAns2.innerText = questions[i].answers[2]
        opAns3.innerText = questions[i].answers[3]
        opAns4.innerText = questions[i].answers[4]
        }
}



opAns1.addEventListener("click", answerClick)
opAns2.addEventListener("click", answerClick)
opAns3.addEventListener("click", answerClick)
opAns4.addEventListener("click", answerClick)


//populate new questions function
function answerClick(event) {
    var element = event.target

        if(questions[i].correctAnswer === element.innerText){
            correct.innerText = "Correct!";
        }else{
            correct.innerText = "Wrong!";
            secondsLeft = secondsLeft -5;
            }

        i = i+1

        if(i === questions.length){
            finishGame()
        }else{
        populateQuestions()}
}



function finishGame(){
        questionEl.style.display = 'none'
        opAns1.style.display = 'none'
        opAns2.style.display = 'none'
        opAns3.style.display = 'none'
        opAns4.style.display = 'none'
        finish.style.display = 'block'
        if(secondsLeft < 0){
            score.innerText = 0;
            timeEl.textContent = "time left: 0"
        }else{
            score.innerText = secondsLeft;
        }
        clearInterval(timerInterval);
}

function setTime(){
    timerInterval = setInterval(function(){

        secondsLeft--;
        timeEl.textContent = "time left: " + secondsLeft;

        if(secondsLeft < 0) {
            clearInterval(timerInterval);
            finishGame()
        }

    }, 1000)
}




        
    


        




























