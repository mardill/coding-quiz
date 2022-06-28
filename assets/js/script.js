
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

var secondsLeft = 10;
var i = 0

var questions = [
    {
    question: "1: Which is the highest level?",
    answers:
        {1: "h2",
        2: "h3",
        3: "h1",
        4: "h4"},
    correctAnswer: "h1"
    },
    {
    question: "2: What is the right answer?",
    answers:
        {1: "1",
        2: "2",
        3: "3",
        4: "4"},
    correctAnswer: "2"
    },
    {
    question: "3: What is the wrong answer",
    answers:
        {1: "10",
        2: "20",
        3: "30",
        4: "40"},
    correctAnswer: "30"
    },
    {
    question: "4: favorite letter",
    answers:
        {1: "a",
        2: "b",
        3: "c",
        4: "d"},
    correctAnswer: "d"
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
        }

        i = i+1
        
        populateQuestions()
}

opAns1.addEventListener("click", finishGame)
opAns2.addEventListener("click", finishGame)
opAns3.addEventListener("click", finishGame)
opAns4.addEventListener("click", finishGame)

function finishGame(event){
    var element = event.target

    if(i === questions.length || secondsLeft === 0){
        questionEl.style.display = 'none'
        opAns1.style.display = 'none'
        opAns2.style.display = 'none'
        opAns3.style.display = 'none'
        opAns4.style.display = 'none'
        finish.style.display = 'block'
        score.innerText = secondsLeft

    }
    

    console.log(element)
    console.log(questions[i])
}


function setTime(){
    var timerInterval = setInterval(function(){

        secondsLeft--;
        timeEl.textContent = "time left: " + secondsLeft;

        if(secondsLeft === 0 || i === questions.length ) {
            clearInterval(timerInterval);
        }

        console.log('hi')

    }, 1000)
}




        
    


        




























