var startPage = document.querySelector("#startPage");
var startButton = document.querySelector("#startButton");
var questionEl = document.querySelector("#question");
var questionOpEl = document.querySelector("#question-options");
var opAns1 = document.querySelector("#ans1");
var opAns2 = document.querySelector("#ans2");
var opAns3 = document.querySelector("#ans3");
var opAns4 = document.querySelector("#ans4");
var ans = document.querySelector("#result");

startButton.addEventListener("click", function(event){
    

}
)

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


opAns1.addEventListener("click", checkAnswer1)

function checkAnswer1(){
    if(questions[0].a[0].correct === true){
        return ans.innerText = "Correct!";
    }
    else return ans.innerText = "Wrong!";
    }

opAns2.addEventListener("click", checkAnswer2)

function checkAnswer2(){
    if(questions[0].a[1].correct === true){
        return ans.innerText = "Correct!";
    }
    else return ans.innerText = "Wrong!";
    }

opAns3.addEventListener("click", checkAnswer3)

function checkAnswer3(){
    if(questions[0].a[2].correct === true){
        return ans.innerText = "Correct!";
    }
    else return ans.innerText = "Wrong!";
    }

opAns4.addEventListener("click", checkAnswer4)

function checkAnswer4(){
    if(questions[0].a[3].correct === true){
        return ans.innerText = "Correct!";
    }
    else return ans.innerText = "Wrong!";
    }






