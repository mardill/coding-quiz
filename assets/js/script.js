
// define variables calling classes & ids from html
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
var submitBtn = document.querySelector("#submit");
var scoreList = document.querySelector("#list-scores");
var highScoresInt = document.querySelector("#high-scores-int");
var highScoresSc = document.querySelector("#high-scores-sc");

// create variable for how long timer will last for
var secondsLeft = 46;
var i = 0;

// create an array of questions that will be used in question & answer buttons
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

// create eventlistener for click on the start game button
startButton.addEventListener("click", startGame);

// setting function to hide intro and start button when start button is click
// un-hides the question block and answer buttons changing display from none to block
// calling function to populate questions when clicked
// starts timer on click
function startGame(){
    startButton.style.display = 'none';
    start.style.display = 'none';
    questionEl.style.display = 'block';
    opAns1.style.display = 'block';
    opAns2.style.display = 'block';
    opAns3.style.display = 'block';
    opAns4.style.display = 'block';
    populateQuestions();
    setTime();
}

// function to populate questions in order from the questions array
// using i to grab questions index 0 up to length of the array and populate buttons with answer text
function populateQuestions(){
    if(i <= questions.length-1){
        questionEl.innerText = questions[i].question;
        opAns1.innerText = questions[i].answers[1];
        opAns2.innerText = questions[i].answers[2];
        opAns3.innerText = questions[i].answers[3];
        opAns4.innerText = questions[i].answers[4];
        }
}

// creates another eventlistener on the answer buttons
opAns1.addEventListener("click", answerClick)
opAns2.addEventListener("click", answerClick)
opAns3.addEventListener("click", answerClick)
opAns4.addEventListener("click", answerClick)

// function to call on click
// first: fills in section if button clicked matches questions array correct answer
// if it does not match, deducts 5 seconds from timer
// then adds 1 to i and question populates to next in array on click as well
// ends game when i is at last question
function answerClick(event) {
    var element = event.target

        if(questions[i].correctAnswer === element.innerText){
            correct.innerText = "Correct!";
        }else{
            correct.innerText = "Wrong!";
            secondsLeft = secondsLeft -5;
            }

        i = i+1;

        // end game when all questions are answered
        if(i === questions.length){
            timeEl.textContent = secondsLeft;
            finishGame();
        }else{
            populateQuestions()};
}

// function to end game
// hides question and answer buttons and shows results page
// makes sure score can't be lower than 0 and log time less than 0 and sets score text to amount of seconds left
function finishGame(){
        questionEl.style.display = 'none';
        opAns1.style.display = 'none';
        opAns2.style.display = 'none';
        opAns3.style.display = 'none';
        opAns4.style.display = 'none';
        finish.style.display = 'block';
        if(secondsLeft < 0){
            score.innerText = 0;
            timeEl.textContent = "time left: 0";
        }else{
            score.innerText = secondsLeft;
        }
        clearInterval(timerInterval);
}

// timer function setting to decrement seconds from secondsLeft variable and text content for timer variable
function setTime(){
    timerInterval = setInterval(function(){

        secondsLeft--;
        timeEl.textContent = "time left: " + secondsLeft;

        // stops timer from going lower than 0
        if(secondsLeft < 0) {
            clearInterval(timerInterval);
            finishGame();
        }

    }, 1000)
}


submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
  
    var ititials = document.querySelector("#initials").value;

    localStorage.setItem("initials", JSON.stringify(ititials))
    localStorage.setItem("scores", secondsLeft)
    
    renderLastRegistered();
    }

)

submitBtn.addEventListener("click", finalPage)

function finalPage() {
    finish.style.display = 'none';
    correct.style.display = 'none';
    scoreList.style.display = 'block';

    var initials = JSON.parse(localStorage.getItem("initials"))
    var allScores= JSON.parse(localStorage.getItem("scores"))
    highScoresInt.textContent = (initials)
    highScoresSc.textContent = allScores


}
