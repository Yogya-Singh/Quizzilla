const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correctAnswer: 1
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    window.location.href = "quizz.html";
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll("#options button");

    questionElement.textContent = questions[currentQuestionIndex].question;
    options.forEach((option, index) => {
        option.textContent = questions[currentQuestionIndex].options[index];
    });
}

function selectAnswer(optionIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (optionIndex === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect.");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz complete! Your score is: " + score + "/" + questions.length);
        window.location.href = "index.html";
    }
}

// Initialize the first question
document.addEventListener("DOMContentLoaded", loadQuestion);
