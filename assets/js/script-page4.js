const stars = [];

function highlightStars() {
  const index = this.getAttribute("id");
  for (let j = 0; j < stars.length; j++) {
    const starPath = stars[j].querySelector("path");
    if (j <= index) {
      starPath.setAttribute("fill", "#D4C5E2");
    } else {
      starPath.setAttribute("fill", "#000000");
    }
  }
}

const createStars = () => {
  const starBar = document.getElementById("starBar");
  for (let i = 0; i < 10; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", i);
    svg.setAttribute("class", "star");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M22.2044 1.55551C22.6143 0.569963 24.0104 0.569964 24.4203 1.55552L29.9874 14.9402C30.1602 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415L35.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.7382 29.5619L38.1018 43.6626C38.3494 44.7009 37.2199 45.5215 36.309 44.9651L23.9379 37.4089C23.5538 37.1743 23.0709 37.1743 22.6868 37.4089L10.3157 44.9651C9.40478 45.5215 8.27528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 28.3722L0.490575 18.9415C-0.320069 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z"
    );
    path.setAttribute("fill", "#000000");

    svg.appendChild(path);
    starBar.appendChild(svg);
    stars.push(svg);

    svg.addEventListener("click", highlightStars);
  }
};

const eventHandler = (event) => {
  createStars();
  console.log(stars);
};

document.addEventListener("DOMContentLoaded", eventHandler);

const moreInfoButton = document.getElementById("moreInfo");
const feedbackText = document.getElementById("feedback-txt");
const errorMessage = document.getElementById("error-message-p4");

moreInfoButton.addEventListener("click", () => {
  if (feedbackText.value) {
    alert("Thank you for your feedback");
  } else {
    errorMessage.style.display = "block";
  }
});
