
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
    id:0,
    q: "Which is the highest level?",
    a:[
        {text:"h2", correct:false},
        {text: "h1", correct:true},
        {text:"h3", correct:false},
        {text:"h4", correct:false}
    ]
    },

    {
    id:1,
    q: "What is the right answer?",
    a:[
        {text:"1", correct:false},
        {text: "2", correct:false},
        {text:"3", correct:false},
        {text:"4", correct:true}
    ]
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

    questionEl.innerText = questions[0].q
    opAns1.innerText = questions[0].a[0].text
    opAns2.innerText = questions[0].a[1].text
    opAns3.innerText = questions[0].a[2].text
    opAns4.innerText = questions[0].a[3].text
}


// for index in questions display q in question spot
// and answers in buttons
// when i click a button correct field shows and then
// new question is shown

opAns1.addEventListener("click", showAnswer)
opAns2.addEventListener("click", showAnswer)
opAns3.addEventListener("click", showAnswer)
opAns4.addEventListener("click", showAnswer)

function showAnswer(){
    if(questions[0].a[0].correct === true){
        correct.innerText = "Correct!";
    }
    else{
        correct.innerText = "Wrong!"
    }
}


opAns1.addEventListener("click", populateQuestion2)
opAns2.addEventListener("click", populateQuestion2)
opAns3.addEventListener("click", populateQuestion2)
opAns4.addEventListener("click", populateQuestion2)



function populateQuestion2(){


    questionEl.innerText = questions[2].q

    opAns1.innerText = questions[1].a[0].text
    opAns2.innerText = questions[1].a[1].text
    opAns3.innerText = questions[1].a[2].text
    opAns4.innerText = questions[1].a[3].text

    // for(i=1; i<questions.length; i++){
    //     questionEl.innerText = questions[i].q;
    // }
    // for(i=0; i<questions.a.length; i++){
    //     opAns1.innerText = questions[0].a[i].text;
    // }
}

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


// opAns1.addEventListener("click", checkAnswer)
// opAns2.addEventListener("click", checkAnswer)
// opAns3.addEventListener("click", checkAnswer)
// opAns4.addEventListener("click", checkAnswer)


// function checkAnswer(){
//     if(questions[0].a[0].correct === true)
//     {
//         return correct.innerText = "Correct!";
//     }
//     else {return correct.innerText = "Wrong!";
//     }

    // if(questions[0].a[1].correct === true){
    //     return correct.innerText = "Correct!";
    // }
    // else {return correct.innerText = "Wrong!";
    // }

    // if(questions[0].a[2].correct === true){
    //     return correct.innerText = "Correct!";
    // }
    // else {return correct.innerText = "Wrong!";
    // }

    // if(questions[0].a[3].correct === true){
    //     return correct.innerText = "Correct!";
    // }
    // else {return correct.innerText = "Wrong!";
    // }










