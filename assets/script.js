var startbtnEl = document.getElementById('start-btn');
var titleContain = document.querySelector('.title-container');
var timerElement = document.getElementById('timer');
var submitForm = document.getElementById('submit-btn');
var initialText = document.getElementById('initials');
var mainEL = document.getElementsByName('main');
var currentQuestionEl = document.getElementsByTagName('question');

var currentQuestion = 0;
var button = [];
var guesses = [];
var score = [];
var highscoreList = [];

function startTimer(){
    timer = setInterval(function(){
       timeLeft--;
       timerElement.textContent = timeLeft;
       if (timeLeft <=0){
           clearInterval(timer);
           endQuiz();
       }
   }, 1000);
}

function startQuiz(){
    timeLeft = 50;
    startbtnEl.style.display = 'none';
    titleContain.style.display = 'none';
    startTimer();
    showQuiz1();
    
}

 function currentQuestionEl(){
var question = '';

question.textContent = question[currentQuestion]().question;
document.getElementById('question').appendChild(question);

for (var i = 0; i < questionData[currentQuestion]().guess.length; i++){
    button[i] = document.createElement('button');
    button[i].textContent = i + 1 + ': ' + questionData[currentQuestion]().guess[i];
    guesses[i] = questionData[currentQuestion]().guess[i];
    document.getElementById('button').appendChild(button[i]);
}
 }

function showQuiz1(){
    mainEL 


}



var questions = [

{
    question: 'Which American President appears on the one-dollar bill?',
    choices: ['George Washington', 'Dwight D. Eisenhower', 'Ulysses S. Grant', 'Theodore Roosevelt'],
    answer: 'George Washington'
},
{
    question: 'What geometric shape is generally used for stop signs?',
    choices: ['Square','Pentagon','Octagon','Triangle'],
    answer: 'Octagon'
},
{
    question: 'How many colors in the rainbow?',
    choices: ['5','7','8','9'],
    answer: '7'
},
{
    question: 'What alcoholic drink is mainly made from juniper berries?',
    choices: ['Vodka','Whiskey','Tequila','Gin'],
    answer: 'Gin'
},
{
    question: 'How many notes are there on a standard grand piano?',
    choices: ['96','50','72','88'],
    answer: '88'

}]



function generateRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questionArray.length);
    var question = questionArray[randomIndex].question;
    var choices = questionArray[randomIndex].choices;
  
    // Display the question and answer choices on the screen
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = question;
  
    var choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";
  
    choices.forEach((choice) => {
      var choiceElement = document.createElement("button");
      choiceElement.innerHTML = choice;
      choiceElement.addEventListener("click", checkAnswer);
      choicesElement.appendChild(choiceElement);
    });
  }


  function displayChoices(){
      var choiceSelection = questions.choices[choiceArray];
      choicesElement[choiceArray].textContent = choiceSelection.question.choices
  }

function displayNextQuestion(){
    questionArray++;
    var currentQuestion = questions[questionArray];
    questionElement = currentQuestion.question;
    // choicesElement.innerHTML = ('display, show');
    currentQuestion.choices.forEach(function(choice){
        var btn = document.createElement('button');
        btn.textContent = choice;
        btn.dataset.answer = choice;
        btn.addEventListener('click', answerClick);
        choicesElement.appendChild(btn);
    });
    
}

// choicesElement.forEach(choices) 
//     choice.addEventListener('click');
//         var userChoice = event.target;
//         var userAnswer = userChoice.dataset.answer;
//         if(userAnswer === questions[questionArray].answer) {
//             displayNextQuestion();
//         } else {
//             time -= 10;
//             if(time < 0) {
//                 time = 0;
//             }
//             timerElement.textContent = time;
//             displayNextQuestion();
//         };
        
    



function answerClick(event) {
    let userChoice = event.target;
    let userAnswer = userChoice
    // userChoice = event.target;
    userAnswer = userChoice.dataset.answer;
    if (questionArray === questions.length - 1){
        endQuiz();
    } else {
        questionArray++;
        displayNextQuestion();
    }
}


function endQuiz(){
    clearInterval(timer);
    timerElement.textContent = 0;
    // choicesElement.innerHTML = ('display, hide');
    questionElement.textContent = 'Quiz Complete!';
    submitForm.style.display = 'block';
    initialText.focus();
}

submitForm.addEventListener('submit', event =>{
    event.preventDefault();
    var initials = initialText.value.trim();
    if (initials !== ''){
        var score = time;
        window.localStorage.setItem(initials,score);
        window.location.href = 'highscores.html';
    }
})

startbtnEl.addEventListener('click', startQuiz);



//select all elements
var start = document.getElementById('startQuiz');
var quiz =document.getElementById('quiz');
var question = document.getElementById('question');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var progress = document.getElementById('progress');
var score = document.getElementById('score');

//create questions
var questions = [

    {
        question: 'Which American President appears on the one-dollar bill?',
        choiceA: 'George Washington', 
        choiceB: 'Dwight D. Eisenhower',
        choiceC: 'Ulysses S. Grant', 
        choiceD: 'Theodore Roosevelt',
        correctAnswer: 'A'
    },
    {
        question: 'What geometric shape is generally used for stop signs?',
        choiceA: 'Square', 
        choiceB: 'Pentagon', 
        choiceC: 'Octagon', 
        choiceD: 'Triangle', 
        correctAnswer: 'C'
    },
    {
        question: 'How many colors in the rainbow?',
        choiceA: '5', 
        choiceB: '7',
        choiceC: '8',
        choiceD: '9',
        correctAnswer: 'B' 
    },
    {
        question: 'What alcoholic drink is mainly made from juniper berries?',
        choiceA: 'Vodka',
        choiceB: 'Whiskey',
        choiceC: 'Tequila',
        choiceD: 'Gin', 
        correctAnswer: 'D'
    },
    {
        question: 'How many notes are there on a standard grand piano?',
        choiceA: '96', 
        choiceB: '50', 
        choiceC: '72', 
        choiceD: '88', 
        correctAnswer: 'D'
    
}];

//creat some variables 
var lastQuestionIndex = questions.length-1;
var currentQuestionIndex = 0;
var score = 0;
var timer;
var timeLeft = 50;

    // questions[0].question
    // questions[0].choiceA
    // questions[0].choiceB
    // questions[0].choiceC
    // questions[0].choiceD
    // questions[0].answer

// render a question
    function renderQuestion(){
        var q = questions[currentQuestionIndex];
        question.innerHTML = '<p>' + q.question + '</p>';
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }
    
    function renderProgress(){
        for (var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
            progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
        }
    }

startbtnEl.addEventListener('click', startQuiz); 


    //start quiz
    function startQuiz(){
   renderQuestion();
    quiz.style.display = 'block';
    renderProgress();
    startbtnEl.style.display = 'none';
    titleContain.style.display = 'none';
    startTimer();
}
    function checkAnswer(answer){
        if(answer == questions[currentQuestionIndex].correctAnswer){
            //answer is correct
            score++;
            alert = 'Correct!'; 
        }else{
            alert = "Incorrect!";
        }
        if(currentQuestionIndex < lastQuestionIndex){
            currentQuestionIndex++;
            renderQuestion();
        } else{
            clearInterval(timer);
            endQuiz();
        }
    }





var startbtnEl = document.getElementById('start-btn');
var titleContain = document.querySelector('.title-container');
var timerElement = document.getElementById('timer');
var submitForm = document.getElementById('submit-btn');
var initialText = document.getElementById('initials');
var mainEL = document.getElementsByName('main');
var currentQuestionEl = document.getElementsByTagName('question');

var currentQuestion = 0;
var button = [];
var guesses = [];
var score = [];
var highscoreList = [];
//start timer
function startTimer(){
   timer = setInterval(function(){
       timeLeft--;
       timerElement.textContent = timeLeft;
       if (timeLeft <=0){
           clearInterval(timer);
           endQuiz();
       }else{
        answerIsWrong()
       }
   }, 1000);
}
//start quiz
// function startQuiz(){
//     timeLeft = 50;
//     startbtnEl.style.display = 'none';
//     titleContain.style.display = 'none';
//     startTimer();
//     progressRender();
//     questionRender();
//     quiz.style.display = 'block';
// }

 function currentQuestionEl(){
var question = '';

question.textContent = question[currentQuestion]().question;
document.getElementById('question').appendChild(question);

for (var i = 0; i < questionData[currentQuestion]().guess.length; i++){
    button[i] = document.createElement('button');
    button[i].textContent = i + 1 + ': ' + questionData[currentQuestion]().guess[i];
    guesses[i] = questionData[currentQuestion]().guess[i];
    document.getElementById('button').appendChild(button[i]);
}
 }



function generateRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questionArray.length);
    var question = questionArray[randomIndex].question;
    var choices = questionArray[randomIndex].choices;
  
    // Display the question and answer choices on the screen
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = question;
  
    var choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";
  
    choices.forEach((choice) => {
      var choiceElement = document.createElement("button");
      choiceElement.innerHTML = choice;
      choiceElement.addEventListener("click", checkAnswer);
      choicesElement.appendChild(choiceElement);
    });
  }


  function displayChoices(){
      var choiceSelection = questions.choices[choiceArray];
      choicesElement[choiceArray].textContent = choiceSelection.question.choices
  }

function displayNextQuestion(){
    questionArray++;
    var currentQuestion = questions[questionArray];
    questionElement = currentQuestion.question;
    // choicesElement.innerHTML = ('display, show');
    currentQuestion.choices.forEach(function(choice){
        var btn = document.createElement('button');
        btn.textContent = choice;
        btn.dataset.answer = choice;
        btn.addEventListener('click', answerClick);
        choicesElement.appendChild(btn);
    });
    
}

// choicesElement.forEach(choices) 
//     choice.addEventListener('click');
//         var userChoice = event.target;
//         var userAnswer = userChoice.dataset.answer;
//         if(userAnswer === questions[questionArray].answer) {
//             displayNextQuestion();
//         } else {
//             time -= 10;
//             if(time < 0) {
//                 time = 0;
//             }
//             timerElement.textContent = time;
//             displayNextQuestion();
//         };
        
    



function answerClick(event) {
    let userChoice = event.target;
    let userAnswer = userChoice
    // userChoice = event.target;
    userAnswer = userChoice.dataset.answer;
    if (questionArray === questions.length - 1){
        endQuiz();
    } else {
        questionArray++;
        displayNextQuestion();
    }
}


function endQuiz(){
    clearInterval(timer);
    timerElement.textContent = 0;
    // choicesElement.innerHTML = ('display, hide');
    questionElement.textContent = 'Quiz Complete!';
    submitForm.style.display = 'block';
    initialText.focus();
}

submitForm.addEventListener('submit', event =>{
    event.preventDefault();
    var initials = initialText.value.trim();
    if (initials !== ''){
        var score = time;
        window.localStorage.setItem(initials,score);
        window.location.href = 'highscores.html';
    }
})






// function startTimer(){
//     timer = setInterval(function(){
//        timeLeft--;
//        timerElement.textContent = timeLeft;
//        if (timeLeft <=0){
//            clearInterval(timer);
//            endQuiz();
//        }
//    }, 1000);
// }