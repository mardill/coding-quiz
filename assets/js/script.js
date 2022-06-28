
var start = document.querySelector("#startPage");
var startButton = document.querySelector("#startButton");
var card = document.querySelector("#question-card")
var questionEl = document.querySelector("#question");
var questionOpEl = document.querySelector("#question-options");
var opAns1 = document.querySelector("#ans1");
var opAns2 = document.querySelector("#ans2");
var opAns3 = document.querySelector("#ans3");
var opAns4 = document.querySelector("#ans4");
var correct = document.querySelector("#winlose");



function startGame(){
    startButton.style.display = 'none'
    start.style.display = 'none'
    questionEl.style.display = 'block'
    opAns1.style.display = 'block'
    opAns2.style.display = 'block'
    opAns3.style.display = 'block'
    opAns4.style.display = 'block'
}


startButton.addEventListener("click", startGame)



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
    }
]

questionEl.innerText = questions[0].q;
opAns1.innerText = questions[0].a[0].text;
opAns2.innerText = questions[0].a[1].text;
opAns3.innerText = questions[0].a[2].text;
opAns4.innerText = questions[0].a[3].text;


opAns1.addEventListener("click", checkAnswer)

function checkAnswer(){
    if(questions[0].a[0].correct === true){
        return correct.innerText = "Correct!";
    }
    else {return correct.innerText = "Wrong!";
    }

    if(questions[0].a[1].correct === true){
        return correct.innerText = "Correct!";
    }
    else {return correct.innerText = "Wrong!";
    }

    if(questions[0].a[2].correct === true){
        return correct.innerText = "Correct!";
    }
    else {return correct.innerText = "Wrong!";
    }

    if(questions[0].a[3].correct === true){
        return correct.innerText = "Correct!";
    }
    else {return correct.innerText = "Wrong!";
    }

}









