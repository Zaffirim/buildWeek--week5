# Buildweek-1-G6

Piattaforma del benchmark di Epicode, presente di quiz a risposta multipla, risultato finale e pagina di feedback.

## Step di avvio

### 1. Clonazione repository

```bash
git clone https://github.com/TunaSandwichhh/davide-faggionato-repo.git
```

## Descrizione HTML

#### - index.html

Pagina iniziale dell'applicazione. Dopo aver spuntato una checkbox obbligatoria, l'utente può passare alla pagina del quiz vero e proprio.

#### - page2.html

Pagina del quiz. Una domanda e quattro opzioni di risposta vengono generate dinamicamente. Un timer informa l'utente del tempo a disposizione.
Un bottone 'Next' permette di passare alla domanda successiva. Se non ci sono più domande, si passerà direttamente alla sezione dei risultati.

#### - page3.html

Pagina dei risultati. Le sezioni laterali informano l'utente sulla percentuale di risposte corrette e sbagliate.
La sezione centrale informa l'utente sull'eventuale superamento del test.
Un bottone 'Rate Us' porta l'utente alla sezione di feedback.

#### - page4.html

Pagina di feedback. L'utente può valutare il test con un punteggio da 1 a 10 stelle, cliccandoci sopra.
Un bottone 'More Info' permette all'utente di inviare il form, una volta scritto un messaggio di feedback.

## Descrizione Script

### 1. script-index.js

#### - checkCheckbox()

Controlla che la checkbox sia stata spuntata
Altrimenti
Blocca l'avanzamento alla pagina successiva
Setta il display del messaggio di errore a 'block'

### 2. script-page2.js

Gestisce la logica del quiz, dalla visualizzazione delle domande e delle opzioni di risposta al calcolo del punteggio e alla gestione del tempo.

#### - Struttura dati - domande del quiz

Un array contenente domande sotto forma di oggetti, con le seguenti caratteristiche:

```javascript

questions = [
    {
        questionNumber: number,
        questionText: string,
        answerOptions: [
            text: string,
            isCorrect: boolean,
            id: string
        ],
    }
]
```

#### - updateTimerDisplay(seconds)

Aggiorna il timer visualizzato, mostrando i secondi rimasti. È importante per tenere l'utente informato sul tempo disponibile per rispondere.

#### - emptyQuizSpace()

Pulisce l'area del quiz, rimuovendo le domande e le risposte precedenti. Questo assicura che ogni domanda venga presentata in uno spazio vuoto, senza interferenze.

#### - createCurrentQuestionText()

Mostra il numero della domanda corrente e il totale delle domande. Fornisce un contesto chiaro sull'avanzamento del quiz.

#### - createQuestionText()

Visualizza il testo della domanda attuale. Estrae e mostra la domanda dall'array basandosi sull'indice corrente.

#### - createAnswerOptions()

Genera le opzioni di risposta per la domanda in corso. Crea elementi HTML per ogni opzione, permettendo all'utente di selezionare la propria risposta.

#### - checkScore()

Verifica se la risposta scelta è corretta, aggiornando il punteggio. Incrementa il punteggio per ogni risposta esatta e prepara il passaggio alla prossima domanda.

#### - eventHandler(event)

Gestisce il click su "Next". Controlla risposte, aggiorna il punteggio e, a fine quiz, salva il risultato e reindirizza l'utente alla pagina dei risultati.

#### - init(event)

Inizializza il quiz al caricamento della pagina. Prepara la prima domanda, visualizza le opzioni di risposta e avvia il timer, assicurando che l'utente possa iniziare immediatamente.

### 3. script-page3.js

Elabora i dati salvati precedentemente per offrire un feedback dettagliato e personalizzato sui risultati del quiz dell'utente

#### - createCorrectSection()

Visualizza la percentuale e il numero di risposte corrette. Aggiorna il DOM con i valori calcolati, mostrando all'utente il suo rendimento in termini di risposte esatte.

#### - createWrongSection()

Mostra la percentuale e il numero di risposte sbagliate. Calcola e visualizza quanto il partecipante ha sbagliato rispetto alle risposte corrette.

#### - createResultMessage()

Decreta se il partecipante ha superato o meno il test. Basandosi sulla percentuale di successo, mostra un messaggio di congratulazioni o di scuse.

#### - eventHandler(event)

Al caricamento della pagina, esegue le funzioni principali per compilare le sezioni dei risultati. Questo metodo assicura che il contenuto sia pronto e visualizzato non appena l'utente accede alla pagina dei risultati.

### 4. script-page3.js

Raccolta del feedback dell'utente attraverso una valutazione a stelle e un campo di testo per commenti aggiuntivi

#### - highlightStars()

Colora le stelle al click. Assegna un colore differente alle stelle fino all'indice cliccato, indicando visivamente la valutazione data dall'utente.

#### - createStars()

Genera le stelle nella barra di valutazione. Aggiunge un listener di click che attiva highlightStars() per gestire la valutazione.

#### - eventHandler(event)

Al caricamento della pagina, chiama createStars per popolare la barra di valutazione con le stelle, permettendo all'utente di dare un feedback visivo.
