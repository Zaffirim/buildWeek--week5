const totalScore = Number(localStorage.getItem("totalScore")) || 0;
const totalQuestions = Number(localStorage.getItem("totalQuestions")) || 0;
const percentage = Math.round((totalScore / totalQuestions) * 100);

const createCorrectSection = () => {
  const correctPercentage = document.getElementById("percentage-correct");
  const totalCorrect = document.getElementById("total-correct");

  correctPercentage.innerText = `${percentage}%`;
  totalCorrect.innerText = `${totalScore} / ${totalQuestions} questions`;
};

const createWrongSection = () => {
  const wrongPercentage = document.getElementById("percentage-wrong");
  const totalWrong = document.getElementById("total-wrong");

  wrongPercentage.innerText = `${100 - percentage}%`;
  totalWrong.innerText = `${
    totalQuestions - totalScore
  } / ${totalQuestions} questions`;
};

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

const eventHandler = (event) => {
  createCorrectSection();
  createResultMessage();
  createWrongSection();
};

document.addEventListener("DOMContentLoaded", eventHandler);
