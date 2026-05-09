const questions = [
  {
    question: "Quel langage sert à structurer une page web ?",
    answers: [
      { text: "HTML", correct: true },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
    ],
  },
  {
    question: "Quel langage permet d'ajouter de l'interactivité ?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: true },
      { text: "PHP", correct: false },
    ],
  },
  {
    question: "Quel langage est utilisé pour le style ?",
    answers: [
      { text: "CSS", correct: true },
      { text: "HTML", correct: false },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answers-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;

function startQuizz() {
  currentQuestionindex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionindex];
  questionElement.innerHTML =
    currentQuestionindex + 1 + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = "true";
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButton.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");

  Array.from(answerButton.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionindex++;
  if (currentQuestionindex < questions.length) {
    showQuestion();
  } else {
    questionElement.innerHTML = `Quiz terminé donc votre  Score : ${score}/${questions.length}`;
    nextButton.style.display = "none";
  }
});

startQuizz();
