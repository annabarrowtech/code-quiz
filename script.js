const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionsContainerEl = document.getElementById('questionsCon');

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var score = 0;

let shuffledQuestions, currentQuestionIndex;

const questions = [
    {
        question: "What is computer coding?",
        answers: [
        { text: "A TV show ()", correct: false},
        { text: "A radio show ()", correct: false},
        { text: "A list of functions ()", correct: false},
        { text: "Telling a computer what to do ()", correct: true}
        ]
    },
    {
        question: "What is a coding language?",
        answers: [
        { text: "Windows ()", correct: false},
        { text: "JavaScript ()", correct: true},
        { text: "Visual Studio Code ()", correct: false},
        { text: "YouTube ()", correct: false}
        ]
    },
    {
        question: "What is the JavaScript data type for a number?",
        answers: [
        { text: "Boolean ()", correct: false},
        { text: "String ()", correct: false},
        { text: "Number ()", correct: true},
        { text: "Symbol ()", correct: false}
        ]
    },
    {
        question: "What is your base code when you start a project",
        answers: [
        { text: "HTML ()", correct: true},
        { text: "JavaScript ()", correct: false},
        { text: "CSS ()", correct: false},
        { text: "Ganache ()", correct: false}
        ]
    }
]

startButton.addEventListener('click',startGame);

// Timer 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds === 0) {
            alert('Game Over!')
        }
    }, 1000);
}

startButton.addEventListener('click',startGame);
startButton.addEventListener("click", function() {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
});

// Start The Questions 
function startGame() {
    
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionsContainerEl.classList.remove('hide');
    currentQuestionsIndex = 0;
    nextQuestion();
    nextButton.classList.remove('hide')

}

function showQuestion(questions) {
    questionElement.innerText = question.questions
    console.log(questions)
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
}

// Reset 
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Test Loop
function questionsloop(questions) {

    for (var i = 0; i < questions.length; i ++);
    questions.innerText('#question');
    if (answer.correct) {
        button.dataset.correct = answer.correct
        score ++;
    }
    score.innerText('Correct')

}

// Next Questions 
function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    
}