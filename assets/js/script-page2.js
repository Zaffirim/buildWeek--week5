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

/* let timeLeft = 0; */
let questionTimer;

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

let TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.querySelector("#timer").innerHTML = `

   <div class="base-timer">
        <svg
          class="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/1000/svg"
        >
          <g class="base-timer__circle">
            <circle
              class="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            ></circle>
            <path
              id="base-timer-path-remaining"
              stroke-dasharray="283"
              class="base-timer__path-remaining ${remainingPathColor}"
              d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></path>
          </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">${formatTime(
          timeLeft
        )}</span>
      </div>

`;

/* window.addEventListener("load", () => {
  const startBtn = document.getElementById("start-btn");
  const timeInput = document.getElementById("time-input");
  //   console.log(startBtn, timeInput);
  timeInput.onchange = () => {
    TIME_LIMIT = timeInput.value;
    timeInput.value = "";
  };
  startBtn.onclick = () => {
    TIME_LIMIT === 0 ? alert("Add time") : startTimer();
  };
}); */

function startTimer() {
  console.log("value");

  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);

    setCircleDasharray();

    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function onTimesUp() {
  clearInterval(timerInterval);
  TIME_LIMIT = 0;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}
    `;
  }

  return ` ${minutes}:${seconds}`;
}


function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;

  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

// FUNZIONI CHE MI FANNO RIMPICCIOLIRE LA BARRA
function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
} 



function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;

  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

const createTimer = () => {
  startTimer();
  onTimesUp();
  setCircleDasharray();
  
}
/* 
//FUNZIONE CHE, ALLO SCADERE DEL TEMPO, CREA UN NUOVO EVENTO 'CLICK' SUL BOTTONE 'NEXT' E PASSA ALLA SCHERMATA SUCCESSIVA

const startQuestionTimer = () => {
  clearInterval(questionTimer);
  timeLeft = 30;
  updateTimerDisplay(timeLeft);

  questionTimer = setInterval(runTimer, 1000);
};

const runTimer = () => {
  timeLeft -= 1;
  updateTimerDisplay(timeLeft);

  if (timeLeft <= 0) {
    clearInterval(questionTimer);
    eventHandler(new Event("click"));
  }
};

// FUNZIONE PER MOSTRARE SUL BROWSER I SECONDI RIMANENTI

const updateTimerDisplay = (seconds) => {
  const timerDisplay = document.querySelector(".timer");
  timerDisplay.innerHTML = `<p>Tempo rimanente: ${seconds} secondi</p>`;
}; */

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
    /* startQuestionTimer(); */
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
  /* startQuestionTimer(); */
};

nextButton.addEventListener("click", eventHandler);

document.addEventListener("DOMContentLoaded", init);
