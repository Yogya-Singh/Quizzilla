const questions = [
    {   
        //question 1
        question: "1. Who is the father of C language?",
        options: ["Steve Jobs", "Dennis Ritchie", "James Gosling", "Rasmus Lerdorf"],
        correctAnswer: 1
    },
    {   
        //question 2
        question: "2. Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correctAnswer: 1
    },
    {   
        //question 3
        question: "3. Which of the following is a loop structure in programming?",
        options: ["if-else", "switch", "for", "function"],
        correctAnswer: 2
    },
    {   
        //question 4
        question: "4. Which of the following is NOT a data type in most programming languages?",
        options: ["Integer", "Float", "String", "Document"],
        correctAnswer: 3
    },
    {
        //question 5
        question: "5. Which of the following is a compiled programming language?",
        options: ["Python", "JavaScript", " C++", "HTML"],
        correctAnswer: 2
    },
    {
        //question 6
        question: "6. One Byte equal to___?",
        options: ["8 bits", "1 Nibble", "4 bits", "None"],
        correctAnswer: 0
    },
    {
        //question 7
        question: "7. How many parts are there in CPU?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1
    },
    {
        //question 8
        question: "8. In 1st generation of computer, which technology was used?",
        options: ["ICs", "Transistor", "Vaccum Tube", "VLSI"],
        correctAnswer: 2
    },
    {
        //question 9
        question: "9. Which of the following is not a example of software?",
        options: ["MS-Office", "Tally", "Chrome", "Mouse"],
        correctAnswer: 3
    },
    {
        //question 10
        question: "10. The smallest unit of data in computer is___?",
        options: ["Bit", "Nibble", "Kb", "Bytes"],
        correctAnswer: 0
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
        alert("Thanks for completing the quiz! Your score is: " + score + "/" + questions.length);
        window.location.href = "index.html";
    }
}

// Initialize the first question
document.addEventListener("DOMContentLoaded", loadQuestion);
