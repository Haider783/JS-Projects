let quiz = [
    {
        question: "Which country has the biggest population in the world?",
        choices: ["China", "India", "United States"],
        answer: "China"
    },
    {
        question: "Where is the strongest human muscle located?",
        choices: ["Jaw", "Heart", "Leg"],
        answer: "Jaw"
    },
    {
        question: "What planet is closest to the sun?",
        choices: ["Mercury", "Venus", "Earth"],
        answer: "Mercury"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    let questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = ''; 

    let currentQuestion = quiz[currentQuestionIndex];
    let questionElement = document.createElement('div');
    questionElement.classList.add('question');

    let questionText = document.createElement('p');
    questionText.textContent = currentQuestion.question;
    questionElement.appendChild(questionText);

    currentQuestion.choices.forEach(choice => {
        let choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.onclick = function() {
            checkAnswer(choice, currentQuestion.answer, choiceButton);
        };
        questionElement.appendChild(choiceButton);
    });

    questionContainer.appendChild(questionElement);
}

function checkAnswer(selectedAnswer, correctAnswer, selectedButton) {
    let questionElement = document.querySelector('.question');
    let choiceButtons = questionElement.querySelectorAll('button');

    choiceButtons.forEach(button => {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedAnswer) {
            button.classList.add('wrong');
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quiz.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }, 1000); 
}

function showResult() {
    let resultContainer = document.getElementById('result-container');
    resultContainer.textContent = `Quiz completed! Your Score: ${score}`;
    document.getElementById('score').textContent = score;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').textContent = '';
    displayQuestion();
}
