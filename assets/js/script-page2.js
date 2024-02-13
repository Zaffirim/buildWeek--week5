/* CREAZIONE DELLA STRUTTURA */

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

/* VARIABILI GLOBALI CHE CI SERVIRANNO IN SEGUITO */

const nextButton = document.getElementById("next-button");
const quizSpace = document.querySelector(".quiz-space");
let currentQuestion = 1;
let totalScore = 0;

const emptyQuizSpace = () => {
  quizSpace.innerHTML = "";
};

const createCurrentQuestiontext = () => {
  const currentQuestionTxt = document.getElementById("current-question");
  currentQuestionTxt.innerText = `Question ${currentQuestion}/${questions.length}`;
};

/* FUNZIONE CHE ENTRA NELL'ARRAY E PRENDE L'ELEMENTO 'questionText': CHE CI SERVIRà PER POPOLARE IL NOSTRO <h2> NELL'HTML */

const createQuestionText = () => {
  const questionText = document.getElementById("question-txt");
  questionText.innerText = questions[currentQuestion - 1].questionText;
};

/* FUNZIONE CHE CI CREA IL DIV CON LE DOMANDE E I BOTTONI DI RISPOSTA E LI POPOLA*/
const createAnswerOptions = () => {
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

const checkScore = () => {
  const answerOptions = questions[currentQuestion - 1].answerOptions;
  const chosenOption = document.querySelector('input[name="quiz"]:checked');
  const answer = answerOptions.find((option) => option.id === chosenOption.id);

  if (answer.isCorrect) {
    totalScore++;
  }
  currentQuestion++;
};

const eventHandler = (event) => {
  event.preventDefault();
  checkScore();
  emptyQuizSpace();
  createQuestionText();
  createAnswerOptions();
  createCurrentQuestiontext();
  console.log(totalScore);
};

const init = (event) => {
  createQuestionText();
  createAnswerOptions();
  createCurrentQuestiontext();
};

nextButton.addEventListener("click", eventHandler);

document.addEventListener("DOMContentLoaded", init);

//PER NAVIGARE IN UN'ALTRA PAGINA
//window.location.href = 'page3.html';
