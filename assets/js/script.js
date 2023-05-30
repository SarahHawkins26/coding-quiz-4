var startbtnEl = document.getElementById('start-btn');
var titleContain = document.querySelector('.title-container');
var timerElement = document.getElementById('timer');
var submitForm = document.getElementById('submit-btn');
var initialText = document.getElementById('initials');

//select all elements
var start = document.getElementById('startQuiz');
//var quiz =document.getElementById('quiz');
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

// render a question
    function renderQuestion(){
        var q = questions[currentQuestionIndex];
        question.innerHTML = '<p>' + q.question + '</p>';
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }
    

startbtnEl.addEventListener('click', startQuiz); 


    //start quiz
    function startQuiz(){
   renderQuestion();
    countdown();
    startbtnEl.style.display = 'none';
    titleContain.style.display = 'none';
    startTimer();
}

function countdown (){
    function renderQuestion(){
        var q = questions[currentQuestionIndex];
        question.innerHTML = '<p>' + q.question + '</p>';
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }

}
    function checkAnswer(answer){
        if(answer == questions[currentQuestionIndex].correctAnswer){
            //answer is correct
            score++;
            alert = 'Correct!'; 
        }else{
            timeLeft-=10;
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


//start timer
function startTimer(){
   timer = setInterval(function(){
       //timeLeft--;
       timerElement.textContent = timeLeft;
       if (timeLeft <=0){
           clearInterval(timer);
           endQuiz();
       }else{
        timeLeft--
        //answerIsWrong()
       }
   }, 1000);
}


function endQuiz(){
    clearInterval(timer);
    timerElement.textContent = 0;
    // choicesElement.innerHTML = ('display, hide');
    question.textContent = 'Quiz Complete!';
    submitForm.style.display = 'block';
    initialText.focus();
}

submitForm.addEventListener('click', event =>{
    event.preventDefault();
    var initials = initialText.value.trim();
    if (initials !== ''){
        var score = timer;
        var highscores = window.localStorage.getItem('highscores') ? JSON.parse(window.localStorage.getItem('highscores')) : []
        highscores.push({initials, score})
        window.localStorage.setItem('highscores', JSON.stringify(highscores));

        window.location.href = 'highscores.html';
    }
})
