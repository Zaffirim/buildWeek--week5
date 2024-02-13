const questions = [
  {
    questionNumber: 1,
    questionText: "Domanda 1",
    answerOptions: [
      {
        text: "Risposta 1",
        isCorrect: true,
        id: "q1-o1",
      },
      {
        text: "Risposta 2",
        isCorrect: false,
        id: "q1-o2",
      },
      {
        text: "Risposta 3",
        isCorrect: false,
        id: "q1-o3",
      },
      {
        text: "Risposta 4",
        isCorrect: false,
        id: "q1-o4",
      },
    ],
  },
  {
    questionNumber: 2,
    questionText: "Domanda 2",
    answerOptions: [
      {
        text: "Risposta 1",
        isCorrect: true,
        id: "q2-o1",
      },
      {
        text: "Risposta 2",
        isCorrect: false,
        id: "q2-o2",
      },
      {
        text: "Risposta 3",
        isCorrect: false,
        id: "q2-o3",
      },
      {
        text: "Risposta 4",
        isCorrect: false,
        id: "q2-o4",
      },
    ],
  },
  {
    questionNumber: 3,
    questionText: "Domanda 3",
    answerOptions: [
      {
        text: "Risposta 1",
        isCorrect: true,
        id: "q3-o1",
      },
      {
        text: "Risposta 2",
        isCorrect: false,
        id: "q3-o2",
      },
      {
        text: "Risposta 3",
        isCorrect: false,
        id: "q3-o3",
      },
      {
        text: "Risposta 4",
        isCorrect: false,
        id: "q3-o4",
      },
    ],
  },
];

const nextButton = document.getElementById("next-button");
let currentQuestion = 1;

const createQuestionText = () => {
  const questionText = document.getElementById("question-txt");
  questionText.innerText = questions[currentQuestion - 1].questionText;
};

const createAnswerOptions = () => {
  const quizSpace = document.querySelector(".quiz-space");
  const answerOptions = questions[currentQuestion - 1].answerOptions;
  for (let i = 0; i < answerOptions.length; i++) {
    const answerOption = document.createElement("div");
    answerOption.classList.add("answer-option");
    answerOption.innerHTML = `
    <input type="radio" name="quiz" id="${answerOptions[i].id}" value="${answerOptions[i].text}">
    <label for="${answerOptions[i].id}">${answerOptions[i].text}</label> 
    `;
    quizSpace.appendChild(answerOption);
  }
};

const eventHandler = (event) => {};

const init = (event) => {
  createQuestionText();
  createAnswerOptions();
};

nextButton.addEventListener("click", eventHandler);

document.addEventListener("DOMContentLoaded", init);
