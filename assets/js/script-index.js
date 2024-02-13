const checkbox = document.getElementById("checkbox");
const errorMessage = document.getElementById("error-message");
const proceedLink = document.getElementById("proceed-link");

const checkCheckbox = (event) => {
  if (!checkbox.checked) {
    event.preventDefault();
    errorMessage.style.display = "block";
  }
};

proceedLink.addEventListener("click", checkCheckbox);
