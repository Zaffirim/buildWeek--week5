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
const totalQuestions = questions.length;

let timeLeft = 5;
let questionTimer;

//FUNZIONE CHE, ALLO SCADERE DEL TEMPO, CREA UN NUOVO EVENTO 'CLICK' SUL BOTTONE 'NEXT' E PASSA ALLA SCHERMATA SUCCESSIVA

const startQuestionTimer = () => {
  clearInterval(questionTimer);
  timeLeft = 5;
  updateTimerDisplay(timeLeft);

  questionTimer = setInterval(() => {
    timeLeft -= 1;
    updateTimerDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(questionTimer);
      eventHandler();
    }
  }, 1000);
};

// FUNZIONE PER MOSTRARE SUL BROWSER I SECONDI RIMANENTI

const updateTimerDisplay = (seconds) => {
  const timerDisplay = document.querySelector(".timer");
  timerDisplay.innerHTML = `<p>Tempo rimanente: ${seconds} secondi</p>`;
};

/* FUNZIONE CHE SVUOTA IL DIV 'quizSpace' sapzio in cui ci sono le risposte, sennò ci sarebbero le risposte della domanda prima e quelle della domanda dopo */

const emptyQuizSpace = () => {
  quizSpace.innerHTML = "";
};

// FUNZIONE CHE TIENE AGGIORNATO IL <p class = "current-question">

const createCurrentQuestiontext = () => {
  const currentQuestionTxt = document.getElementById("current-question");
  currentQuestionTxt.innerHTML = `Question ${currentQuestion} <span id="purple-txt">/ ${questions.length}</span>`;
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

/* FUNZIONE MOLTO IMPORTANTE CHE TIENE CONTO DEL CLICK DI UNO USER E CONFRONTA L'ID DELLE answerOption con L'ID CLICKATA DALLO USER, 
SE LA RISPOSTA è CORRETTA totalScore VERRà INCREMENTATA DI UNO E IN OGNI CASO  currentQuestion VERRà INCREMENTATO DI 1 COSì DA PERMETTERCI DI PASSARE 
ALLA PROSSIMA DOMANDA
 */

const checkScore = () => {
  const answerOptions = questions[currentQuestion - 1].answerOptions;
  const chosenOption = document.querySelector('input[name="quiz"]:checked');
  if (chosenOption) {
    const answer = answerOptions.find(
      (option) => option.id === chosenOption.id
    );
    if (answer && answer.isCorrect) {
      totalScore++;
    }
  }
  currentQuestion++;
};

/* FUNZIONE CHE GESTISCE TUTTE LE FUNZIONI DELLA PAGINA E CHE QUANDO FINISCONO LE DOMANDE SALVA IL totalScore E IL totalQuestions NEL LOCALSTORAGE E CI PORTA ALLA page3
 */

const eventHandler = (event) => {
  if (event) event.preventDefault();
  clearInterval(questionTimer);
  checkScore();
  if (currentQuestion <= questions.length) {
    emptyQuizSpace();
    createQuestionText();
    createAnswerOptions();
    createCurrentQuestiontext();
    startQuestionTimer();
  } else {
    clearInterval(questionTimer);
    localStorage.setItem("totalScore", totalScore.toString());
    localStorage.setItem("totalQuestions", totalQuestions.toString());
    window.location.href = "/html/page3.html";
  }
};

const init = (event) => {
  createQuestionText();
  createAnswerOptions();
  createCurrentQuestiontext();
  startQuestionTimer();
};

nextButton.addEventListener("click", eventHandler);

document.addEventListener("DOMContentLoaded", init);
