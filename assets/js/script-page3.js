/* VARIABILI GLOBALI CHE CI SERVIRANNO IN SEGUITO  TRA CUI totalScore e totalQuestions CHE CI SIAMO PORTATI DALLA PAGE2 TRAMITE L'UTILIZZO DI LOCALSTORAGE*/
const totalScore = Number(localStorage.getItem("totalScore")) || 0;
const totalQuestions = Number(localStorage.getItem("totalQuestions")) || 0;
const percentage = Math.floor((totalScore / totalQuestions) * 1000) / 10;

/*  FUNZIONE CHE CI CREA LA SEZIONE IN CUI ANDREMO A METTERE IL RISULTATO DELLE RISPOSTE CORRETTE E ANCHE IL CENTRO DEL DIAGRAMMA DOVE CI DARà LE CONGRATULAZIONI SE PASSATO 
O LE SCUSE SE SI è STATI BOCCIATI */

const createCorrectSection = () => {
  const correctPercentage = document.getElementById("percentage-correct");
  const totalCorrect = document.getElementById("total-correct");

  correctPercentage.innerText = `${percentage.toFixed(1)}%`;
  totalCorrect.innerText = `${totalScore} / ${totalQuestions} questions`;
};

/* FUNZIONE CHE CI CREA LA SEZIONE IN CUI ANDREMO A METTERE IL RISULTATO DELLE RISPOSTE SBAGLIATE */

const createWrongSection = () => {
  const wrongPercentage = document.getElementById("percentage-wrong");
  const totalWrong = document.getElementById("total-wrong");

  wrongPercentage.innerText = `${(100 - percentage).toFixed(1)}%`;
  totalWrong.innerText = `${
    totalQuestions - totalScore
  } / ${totalQuestions} questions`;
};

/* FUNZIONE CHE CONTROLLA CHE LA PERCENTUALE DI DOMANDE SUPERATE SIA SUPERIORE AL 60% E CI CONFERMI CHE ABBIAMO PASSATO L'ESAME O CHE NON LO ABBIAMO PASSATO  */

const createResultMessage = () => {
  const textResult = document.getElementById("textResult");
  const textComment = document.getElementById("textComment");
  const statusSpan = document.createElement("span");

  if (percentage >= 60) {
    textResult.innerText = "Congratulations!";
    statusSpan.innerText = "You passed the exam.";
    textComment.style.display = "block";
  } else {
    textResult.innerText = "Sorry!";
    statusSpan.innerText = "You didn't pass the exam";
  }
  textResult.appendChild(statusSpan);
};

const createResultsBar = () => {
  const correctPercentage = (totalScore / totalQuestions) * 100;
  const wrongPercentage = 100 - correctPercentage;

  const resultsBar = document.querySelector(".results-bar");
  resultsBar.innerHTML = `
    <div class="correct-answers" style="width: ${correctPercentage}%"></div>
    <div class="wrong-answers" style="width: ${wrongPercentage}%"></div>
  `;
};

//SOLITA FUNZIONE CHE GESTISCE LE FUNZIONI DELLA PAGINA

const eventHandler = (event) => {
  createCorrectSection();
  createResultMessage();
  createResultsBar();
  createWrongSection();
};

document.addEventListener("DOMContentLoaded", eventHandler);
