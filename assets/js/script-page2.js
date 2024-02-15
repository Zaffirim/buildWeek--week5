/* CREAZIONE DELLA STRUTTURA */

const questions = [
  {
    questionNumber: 1,
    questionText:
      "The C programming language was created by this American computer scientist.",
    answerOptions: [
      {
        text: "Dennis Ritchie",
        isCorrect: true,
        id: "q1-o1",
      },
      {
        text: "Tim Berners Lee",
        isCorrect: false,
        id: "q1-o2",
      },
      {
        text: "al-Khwārizmī",
        isCorrect: false,
        id: "q1-o3",
      },
      {
        text: "Willis Ware",
        isCorrect: false,
        id: "q1-o4",
      },
    ],
  },
  {
    questionNumber: 2,
    questionText: "What does CPU stand for?",
    answerOptions: [
      {
        text: "Computer Personal Unit",
        isCorrect: false,
        id: "q2-o1",
      },
      {
        text: "Central Process Unit",
        isCorrect: false,
        id: "q2-o2",
      },
      {
        text: "Central Processing Unit",
        isCorrect: true,
        id: "q2-o3",
      },
      {
        text: "Central Processor Unit",
        isCorrect: false,
        id: "q2-o4",
      },
    ],
  },
  {
    questionNumber: 3,
    questionText: "What amount of bits commonly equals one byte?",
    answerOptions: [
      {
        text: "2",
        isCorrect: false,
        id: "q3-o1",
      },
      {
        text: "8",
        isCorrect: true,
        id: "q3-o2",
      },
      {
        text: "64",
        isCorrect: false,
        id: "q3-o3",
      },
      {
        text: "1",
        isCorrect: false,
        id: "q3-o4",
      },
    ],
  },
  {
    questionNumber: 4,
    questionText: "'HTML' stands for Hypertext Markup Language.",
    answerOptions: [
      {
        text: "True",
        isCorrect: true,
        id: "q3-o1",
      },
      {
        text: "False",
        isCorrect: false,
        id: "q3-o2",
      },
    ],
  },
  {
    questionNumber: 5,
    questionText:
      "Ada Lovelace is often considered the first computer programmer.",
    answerOptions: [
      {
        text: "True",
        isCorrect: true,
        id: "q3-o1",
      },
      {
        text: "False",
        isCorrect: false,
        id: "q3-o2",
      },
    ],
  },
  {
    questionNumber: 6,
    questionText:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    answerOptions: [
      {
        text: "512",
        isCorrect: false,
        id: "q3-o1",
      },
      {
        text: "1024",
        isCorrect: false,
        id: "q3-o2",
      },
      {
        text: "500",
        isCorrect: false,
        id: "q3-o3",
      },
      {
        text: "1000",
        isCorrect: true,
        id: "q3-o4",
      },
    ],
  },
  {
    questionNumber: 7,
    questionText: "What does the Prt Sc button do?",
    answerOptions: [
      {
        text: "Saves a .png file of what's on the screen in your screenshots folder in photos",
        isCorrect: false,
        id: "q3-o1",
      },
      {
        text: "Closes all windows",
        isCorrect: false,
        id: "q3-o2",
      },
      {
        text: "Captures what's on the screen and copies it to your clipboard",
        isCorrect: true,
        id: "q3-o3",
      },
      {
        text: "Nothing",
        isCorrect: false,
        id: "q3-o4",
      },
    ],
  },
  {
    questionNumber: 8,
    questionText: "In computing, what does MIDI stand for?",
    answerOptions: [
      {
        text: "Musical Interface of Digital Instruments",
        isCorrect: false,
        id: "q3-o1",
      },
      {
        text: "Musical Instrument Digital Interface",
        isCorrect: true,
        id: "q3-o2",
      },
      {
        text: "Modular Interface of Digital Instruments",
        isCorrect: false,
        id: "q3-o3",
      },
      {
        text: "Musical Instrument Data Interface",
        isCorrect: false,
        id: "q3-o4",
      },
    ],
  },
  {
    questionNumber: 9,
    questionText:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    answerOptions: [
      {
        text: "Final",
        isCorrect: true,
        id: "q3-o1",
      },
      {
        text: "Public",
        isCorrect: false,
        id: "q3-o2",
      },
      {
        text: "Private",
        isCorrect: false,
        id: "q3-o3",
      },
      {
        text: "Static",
        isCorrect: false,
        id: "q3-o4",
      },
    ],
  },
  {
    questionNumber: 10,
    questionText: "What language does Node.js use?",
    answerOptions: [
      {
        text: "Java",
        isCorrect: false,
        id: "q3-o1",
      },
      {
        text: "JavaScript",
        isCorrect: true,
        id: "q3-o2",
      },
      {
        text: "Python",
        isCorrect: false,
        id: "q3-o3",
      },
      {
        text: "Java Source",
        isCorrect: false,
        id: "q3-o4",
      },
    ],
  },
  {
    questionNumber: 11,
    questionText: "Javascript is considered a static language.",
    answerOptions: [
      {
        text: "True",
        isCorrect: false,
        id: "q3-o1",
      },
      {
        text: "False",
        isCorrect: true,
        id: "q3-o2",
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

let timeLeft = 0;
let questionTimer;

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

  const progressBar = document.querySelector(".progress-bar");
  const percentage = (seconds / 30) * 100;
  progressBar.style.width = `${percentage}%`;
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
  event.preventDefault();
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
