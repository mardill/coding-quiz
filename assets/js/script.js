
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

var questions = [
    {
    question: "Which is the highest level?",
    answers:
        {1: "h2",
        2: "h3",
        3: "h1",
        4: "h4"},
    correctAnswer: "h1"
    },

    {
    question: "What is the right answer?",
    answers:
        {1: "1",
        2: "2",
        3: "3",
        4: "4"},
    correctAnswer: "1"
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

    questionEl.innerText = questions[0].question
    opAns1.innerText = questions[0].answers[1]
    opAns2.innerText = questions[0].answers[2]
    opAns3.innerText = questions[0].answers[3]
    opAns4.innerText = questions[0].answers[4]
}


// for index in questions display q in question spot
// and answers in buttons
// when i click a button correct field shows and then
// new question is shown

opAns1.addEventListener("click", nextQuestion)
opAns2.addEventListener("click", nextQuestion)
opAns3.addEventListener("click", nextQuestion)
opAns4.addEventListener("click", nextQuestion)


function nextQuestion(event){

    var element = event.target
    
    if(questions[0].correctAnswer === element.innerText){
        correct.innerText = "Correct!";
    }else{
        correct.innerText = "Wrong!";
    }

    questionEl.innerText = questions[1].question
    opAns1.innerText = questions[1].answers[1]
    opAns2.innerText = questions[1].answers[2]
    opAns3.innerText = questions[1].answers[3]
    opAns4.innerText = questions[1].answers[4]

}
















// function showAnswer(event){

//     var element = event.target

//     var btn = element.getAttribute("id")

    
//     if(questions[0].a[i].correct === true){1
//         correct.innerText = "Correct!";
//     }
//     else{
//         correct.innerText = "Wrong!"
//     }
// }


// opAns1.addEventListener("click", populateQuestion2)
// opAns2.addEventListener("click", populateQuestion2)
// opAns3.addEventListener("click", populateQuestion2)
// opAns4.addEventListener("click", populateQuestion2)



// function populateQuestion2(){


//     questionEl.innerText = questions[1].q

//     opAns1.innerText = questions[1].a[0].text
//     opAns2.innerText = questions[1].a[1].text
//     opAns3.innerText = questions[1].a[2].text
//     opAns4.innerText = questions[1].a[3].text

//     // for(i=1; i<questions.length; i++){
//     //     questionEl.innerText = questions[i].q;
//     // }
//     for(i=0; i<questions[0].a.length; i++){
//         opAns1.innerText = questions[0].a[i].text;
//     // }
// }

// populateQuestion()



















// function fillQuestion(){
//     for(i in questions[i], i=0, i++){
//         questionEl.innerText = questions.[i].q;
//     }
// }
// questionEl.innerText = questions[1].q;




// opAns1.innerText = questions[0].a[0].text;
// opAns2.innerText = questions[0].a[1].text;
// opAns3.innerText = questions[0].a[2].text;
// opAns4.innerText = questions[0].a[3].text;














