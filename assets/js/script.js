
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
    correctAnswer: "1"
    },
    {
        question: "3: What is the wrong answer",
        answers:
            {1: "1",
            2: "2",
            3: "3",
            4: "4"},
        correctAnswer: "3"
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


opAns1.addEventListener("click", populateQuestions)
opAns2.addEventListener("click", populateQuestions)
opAns3.addEventListener("click", populateQuestions)
opAns4.addEventListener("click", populateQuestions)

//Play Function
// function playGame() {
//     populateQuestions()

// }


//populate new questions function
function populateQuestions(event) {
    var element = event.target
    var i = 1

        questionEl.innerText = questions[i].question
        opAns1.innerText = questions[i].answers[1]
        opAns2.innerText = questions[i].answers[2]
        opAns3.innerText = questions[i].answers[3]
        opAns4.innerText = questions[i].answers[4]
    var i = i+1
}



// function checkAnswer(event){

//     var element = event.target

//     var i = 0

//     questionEl.innerText = questions[i].question
//     opAns1.innerText = questions[i].answers[1]
//     opAns2.innerText = questions[i].answers[2]
//     opAns3.innerText = questions[i].answers[3]
//     opAns4.innerText = questions[i].answers[4]

//     if(questions[i].correctAnswer === element.innerText){
//         correct.innerText = "Correct!";
//     }else{
//         correct.innerText = "Wrong!";
//     }

//     i += i
// }



            

        
    


        


















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














