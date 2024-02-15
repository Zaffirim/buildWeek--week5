//ARRAY CHE ANDREMO A POPOLARE CON LE NOSTRE STELLINE
const stars = [];

/* FUNZIONE CHE CI ANDRà A COLORARE LE NOSTRE STELLE UNA VOLTA CLICKATE */

function highlightStars() {
  const index = this.getAttribute("id");
  for (let j = 0; j < stars.length; j++) {
    const starPath = stars[j].querySelector("path");
    if (j <= index) {
      starPath.setAttribute("fill", "#00FFFF");
    } else {
      starPath.setAttribute("fill", "#0B113B");
    }
  }
}

/* FUNZIONE CON CUI ANDREMO A CREARE LE STELLE: LO FAREMO ANDANDOCI A RIPRENDERE IL DIV starBar, CHE ANDREMO A POPOLARE CON GLI SVG DELLE STELLE. PER FARE CIò FAREMO UN CICLO FOR 
IN CUI CREEREMO GLI ELEMENTI SVG CON createElementNS UTILE QUANDO SI LAVORA CON QUESTI TIPO DI ELEMENTI, GLI ATTRIBUIREMO UN ID E UN INDICE i e una class star. 
ANDREMO A CREARE IL path DELL'SVG PER POI AGGIUNGERLO A TUTTI GLI ELEMENTI SVG CHE ANDREMO A LORO VOLTA AD AGGIUNGERE AL DIV starBar(creato in HTML) E INFINE POPOLEREMO
IL NOSTRO ARRAY stars (CON TUTTI I NOSTRI SVG). ALLA FINE AGGIUNGEREMO UNA FUNZIONE DI CALLBACK svg.addEventListener("click", highlightStars); CHE RICHIAMERà LA FUNZIONE highlightStars() */

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
    path.setAttribute("fill", "#0B113B");

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

/* Questo significa che il browser inizierà a "ascoltare" per un evento specifico. 
DOMContentLoaded Indica l'evento specifico a cui si vuole essere notificati. 
In questo caso, l'evento è "DOMContentLoaded", che viene attivato non appena il browser ha terminato di caricare la struttura HTML della pagina.
eventHandler => Questa è la funzione che verrà eseguita quando l'evento "DOMContentLoaded" viene attivato.  */

document.addEventListener("DOMContentLoaded", eventHandler);

const moreInfoButton = document.getElementById("moreInfo");
const feedbackText = document.getElementById("feedback-txt");
const errorMessage = document.getElementById("error-message-p4");

/* Funzione che controlla che l'input del nostro feedback al momento del click sul button "moreInfo" non sia vuoto
 */
moreInfoButton.addEventListener("click", () => {
  if (feedbackText.value) {
    alert("Thank you for your feedback");
  } else {
    errorMessage.style.display = "block";
  }
});
